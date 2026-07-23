import { initCookieConsent } from "./cookie-consent";
import { initPrimeSelects } from "./prime-select";

export function initConceptV6() {
  initCookieConsent();
  initPrimeSelects();
  const sidebar = document.getElementById("v6-sidebar");
  const backdrop = document.getElementById("v6-backdrop");
  const burger = document.getElementById("v6-burger");

  const toggle = (open: boolean) => {
    sidebar?.classList.toggle("is-open", open);
    backdrop?.classList.toggle("is-open", open);
    document.body.style.overflow = open ? "hidden" : "";
  };

  burger?.addEventListener("click", () => {
    toggle(!sidebar?.classList.contains("is-open"));
  });

  backdrop?.addEventListener("click", () => toggle(false));

  sidebar?.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      if (window.innerWidth <= 900) toggle(false);
    });
  });

  const servicesGroup = document.querySelector(".v6-nav__group");
  if (servicesGroup && window.innerWidth > 900) {
    (servicesGroup as HTMLDetailsElement).open = true;
  }

  const form = document.getElementById("v6-form") as HTMLFormElement | null;
  const hint = document.getElementById("v6-form-hint");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (hint) {
      hint.hidden = false;
      hint.textContent = "Спасибо! Заявка принята.";
      hint.style.color = "var(--primary)";
    }
    form.reset();
  });
}

initConceptV6();
