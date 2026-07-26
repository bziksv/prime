import { initCookieConsent } from "./cookie-consent";
import { initPrimeSelects } from "./prime-select";
import { bindLeadForm } from "./lead-form";

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
    if (burger) {
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.setAttribute("aria-label", open ? "Закрыть меню" : "Меню");
    }
    backdrop?.setAttribute("aria-hidden", open ? "false" : "true");
  };

  if (burger) {
    burger.setAttribute("aria-controls", "v6-sidebar");
    burger.setAttribute("aria-expanded", "false");
  }

  burger?.addEventListener("click", () => {
    toggle(!sidebar?.classList.contains("is-open"));
  });

  backdrop?.addEventListener("click", () => toggle(false));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && sidebar?.classList.contains("is-open")) {
      toggle(false);
      burger?.focus();
    }
  });

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
  if (form) {
    bindLeadForm({
      form,
      hint: document.getElementById("v6-form-hint"),
      successMessage: "Спасибо! Заявка принята — свяжемся с вами.",
      source: "home-or-contacts",
    });
  }
}

initConceptV6();
