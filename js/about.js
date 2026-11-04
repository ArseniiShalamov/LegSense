/** Educational page interactions: accessible tabs and restrained reveal animations. */
(() => {
  const tabs = [...document.querySelectorAll('[role="tab"]')];
  function activate(tab, moveFocus = false) {
    tabs.forEach((item) => {
      const selected = item === tab;
      item.setAttribute("aria-selected", String(selected));
      item.tabIndex = selected ? 0 : -1;
      document.getElementById(item.getAttribute("aria-controls")).hidden = !selected;
    });
    if (moveFocus) tab.focus();
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activate(tab));
    tab.addEventListener("keydown", (event) => {
      const rtl = document.documentElement.dir === "rtl";
      let next;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = tabs.length - 1;
      if (event.key === "ArrowRight") next = (index + (rtl ? -1 : 1) + tabs.length) % tabs.length;
      if (event.key === "ArrowLeft") next = (index + (rtl ? 1 : -1) + tabs.length) % tabs.length;
      if (next !== undefined) {
        event.preventDefault();
        activate(tabs[next], true);
      }
    });
  });
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  if (!("IntersectionObserver" in window) || reduced.matches) return;
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }),
    { threshold: 0.08 },
  );
  document.querySelectorAll(".about-section,.about-cta").forEach((section) => {
    section.classList.add("about-reveal");
    observer.observe(section);
  });
  document.addEventListener("focusin", (event) =>
    event.target.closest(".about-reveal")?.classList.add("visible"),
  );
})();
