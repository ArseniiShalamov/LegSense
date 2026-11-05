/** Apply the saved theme before styles paint, then wire up both pages' controls. */
(() => {
  const root = document.documentElement;
  const storageKey = "legsense-theme";
  let theme = "light";
  try {
    if (localStorage.getItem(storageKey) === "dark") theme = "dark";
  } catch {}
  root.dataset.theme = theme;
  root.style.colorScheme = theme;

  const labels = {
    en: { light: "Switch to dark mode", dark: "Switch to light mode" },
    ru: { light: "Включить тёмную тему", dark: "Включить светлую тему" },
    he: { light: "מעבר למצב כהה", dark: "מעבר למצב בהיר" },
  };

  function updateControls() {
    const lang = root.lang in labels ? root.lang : "en";
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      const label = labels[lang][theme];
      if (button.getAttribute("aria-label") !== label) button.setAttribute("aria-label", label);
      if (button.getAttribute("title") !== label) button.setAttribute("title", label);
      const pressed = String(theme === "dark");
      if (button.getAttribute("aria-pressed") !== pressed)
        button.setAttribute("aria-pressed", pressed);
    });
  }

  function apply(value, persist = true) {
    theme = value === "dark" ? "dark" : "light";
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    if (persist) {
      try {
        localStorage.setItem(storageKey, theme);
      } catch {}
    }
    updateControls();
    window.dispatchEvent(new CustomEvent("legsense:themechange", { detail: { theme } }));
  }

  function initialize() {
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.addEventListener("click", () => apply(theme === "dark" ? "light" : "dark"));
    });
    updateControls();
    new MutationObserver(updateControls).observe(root, {
      attributes: true,
      attributeFilter: ["lang"],
    });
    window.addEventListener("storage", (event) => {
      if (event.key === storageKey) apply(event.newValue, false);
    });
  }

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", initialize, { once: true });
  else initialize();
})();
