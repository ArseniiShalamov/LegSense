/** Switch languages without reloading the page.
 * Uses LEG_TRANSLATIONS from translations.js.
 * Preserves original strings, translates dynamic messages,
 * persists the language selection and sets dir="rtl" for Hebrew.
 */

(() => {
  let language = "en";
  try {
    const saved = localStorage.getItem("legsense-language");
    if (["en", "ru", "he"].includes(saved)) language = saved;
  } catch {}
  const originals = new WeakMap(),
    attributeOriginals = new WeakMap(),
    select = document.querySelector("#lang");
  const locales = { en: "en-US", ru: "ru-RU", he: "he-IL" };
  const reverse = new Map();
  for (const [en, variants] of Object.entries(LEG_TRANSLATIONS))
    for (const translated of Object.values(variants)) reverse.set(translated, en);
  function translate(source, lang = language) {
    // HTML formatting can wrap a sentence across several lines.
    // Treat those line breaks as spaces when looking up translation keys.
    source = source.replace(/\s+/g, " ");
    const clean = source.trim();
    if (reverse.has(clean)) source = source.replace(clean, reverse.get(clean));
    const numbered = source.match(/^(.*?)\s+(\d+)%$/);
    if (numbered && reverse.has(numbered[1]))
      source = reverse.get(numbered[1]) + " " + numbered[2] + "%";
    if (lang === "en") return source;
    if (lang === "ru") source = source.replace(/(\d{1,3}),(\d{3})(?!\d)/g, "$1\u00a0$2");
    const trimmed = source.trim();
    const entry = LEG_TRANSLATIONS[trimmed];
    let translated = entry?.[lang];
    if (translated !== undefined) return source.replace(trimmed, translated);
    const percent = trimmed.match(/^(.*\.)\s+(\d+)%$/);
    if (percent && LEG_TRANSLATIONS[percent[1]])
      return LEG_TRANSLATIONS[percent[1]][lang] + " " + percent[2] + "%";
    const unit = lang === "ru" ? "см" : "ס״מ",
      volume = lang === "ru" ? "см³" : "סמ״ק";
    if (/^[\d,.−+%()\s-]+cm³(?:\s*\([\d.%-]+\))?$/.test(trimmed))
      return source.replace("cm³", volume);
    if (/^[\d,.\s]+cm$/.test(trimmed)) return source.replace("cm", unit);
    if (trimmed.startsWith("Preset volume: "))
      return (
        (lang === "ru" ? "Примерный объём: " : "נפח לדוגמה: ") +
        trimmed.slice(15).replace("cm³", volume)
      );
    if (trimmed.startsWith("Entered leg length: "))
      return (
        (lang === "ru" ? "Указанная длина ноги: " : "אורך הרגל שהוזן: ") +
        trimmed.slice(20).replace("cm", unit)
      );
    if (/^\d{1,2}\/\d{1,2}\/\d{4},/.test(trimmed)) {
      const date = new Date(trimmed);
      if (!isNaN(date)) return date.toLocaleString(locales[lang]);
    }
    if (trimmed.includes("photo(s) selected.")) {
      const n = parseInt(trimmed) || 0;
      return lang === "ru"
        ? `Выбрано фото: ${n}. Выберите ровно 3 снимка.`
        : `נבחרו ${n} תמונות. בחרו בדיוק 3 תמונות.`;
    }
    // Quality checks can contain several complete messages in a single text node.
    let messages = source;
    for (const [key, value] of Object.entries(LEG_TRANSLATIONS)) {
      if (key.length > 35 && messages.includes(key))
        messages = messages.split(key).join(value[lang]);
    }
    return messages;
  }
  function visit(root, lang = language, remember = true) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const node of nodes) {
      if (node.parentElement?.closest("script,style,select,code")) continue;
      const current = node.nodeValue;
      let cached = remember ? originals.get(node) : null;
      const original = cached && current === cached.rendered ? cached.source : current;
      const rendered = translate(original, lang);
      if (current !== rendered) node.nodeValue = rendered;
      if (remember) originals.set(node, { source: original, rendered });
    }
    for (const element of root.querySelectorAll("[aria-label],[alt],[title]")) {
      if (element.closest("select option")) continue;
      let records = attributeOriginals.get(element) || {};
      for (const attr of ["aria-label", "alt", "title"]) {
        if (!element.hasAttribute(attr)) continue;
        const current = element.getAttribute(attr),
          record = remember ? records[attr] : null,
          original = record && current === record.rendered ? record.source : current,
          rendered = translate(original, lang);
        if (current !== rendered) element.setAttribute(attr, rendered);
        records[attr] = { source: original, rendered };
      }
      if (remember) attributeOriginals.set(element, records);
    }
  }
  let queued = false;
  const observer = new MutationObserver(() => {
    if (!queued) {
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        apply();
      });
    }
  });
  function apply() {
    observer.disconnect();
    document.documentElement.lang = language;
    document.documentElement.dir = language === "he" ? "rtl" : "ltr";
    select.value = language;
    visit(document.body);
    document.title = translate(
      document.documentElement.dataset.pageTitle || "LegSense — A new dimension",
    );
    observer.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: ["aria-label", "alt", "title"],
    });
  }
  select.addEventListener("change", () => {
    language = select.value;
    try {
      localStorage.setItem("legsense-language", language);
    } catch {}
    apply();
    window.dispatchEvent(new Event("resize"));
  });
  window.LegSenseI18n = {
    get language() {
      return language;
    },
    translate,
    translateHTML(html) {
      const doc = new DOMParser().parseFromString(html, "text/html");
      visit(doc.body, language, false);
      doc.title = translate("LegSense demo report");
      doc.documentElement.lang = language;
      doc.documentElement.dir = language === "he" ? "rtl" : "ltr";
      return "<!doctype html>" + doc.documentElement.outerHTML;
    },
  };
  apply();
})();
