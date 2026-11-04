/** Reveal sections once as they scroll into view.
 * To animate another section, add its CSS selector to groups
 * or to the document.querySelectorAll list below.
 */
(() => {
  if (!("IntersectionObserver" in window)) return;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const groups = [
    [".features .feature", "rise"],
    [".angle-grid .angle-card", "rise"],
    [".upload-grid .photo-slot", "rise"],
    [".pipeline > div", "slide"],
    [".result-metrics > div", "rise"],
  ];
  const staged = new Set();
  function prepare(element, style, delay = 0) {
    if (staged.has(element)) return;
    staged.add(element);
    element.classList.add("scroll-reveal");
    element.dataset.reveal = style;
    element.style.setProperty("--reveal-delay", delay + "ms");
    if (reduced.matches) element.classList.add("is-visible");
    else observer.observe(element);
  }
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -28px 0px" },
  );
  for (const [selector, style] of groups)
    document.querySelectorAll(selector).forEach((el, i) => prepare(el, style, (i % 4) * 110));
  document
    .querySelectorAll(
      ".process>.label,.process>h2,.process-intro,.photo-tip,.scan>.label,.scan>h2,.scan-intro,.capture-checks,.scan-bar,.history-heading,.history-panel,.tech-copy,.flow-top,.flow-layout,.result-heading,.assessment,.result-actions",
    )
    .forEach((el) => prepare(el, "rise"));
  document
    .querySelectorAll(".feature .icon")
    .forEach((el, i) => prepare(el, "icon", (i % 4) * 110 + 120));
  document.documentElement.classList.add("scroll-motion");
  // Keep focused controls immediately visible, including keyboard navigation.
  document.addEventListener("focusin", (event) => {
    for (let el = event.target; el && el !== document.body; el = el.parentElement) {
      if (staged.has(el)) {
        el.classList.add("is-visible");
        observer.unobserve(el);
      }
    }
  });
  reduced.addEventListener("change", () => {
    if (reduced.matches) {
      observer.disconnect();
      staged.forEach((el) => el.classList.add("is-visible"));
    }
  });
  // On-page links reveal their destination promptly, without delaying navigation.
  document.addEventListener("click", (event) => {
    const anchor = event.target.closest('a[href^="#"]');
    if (!anchor) return;
    const target = document.getElementById(anchor.getAttribute("href").slice(1));
    if (target && staged.has(target)) {
      target.classList.add("is-visible");
      observer.unobserve(target);
    }
  });
})();
