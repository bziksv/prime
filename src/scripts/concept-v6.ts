import { initCookieConsent } from "./cookie-consent";
import { initPrimeSelects } from "./prime-select";
import { bindLeadForm } from "./lead-form";

export function initConceptV6() {
  initCookieConsent();
  initPrimeSelects();
  const sidebar = document.getElementById("v6-sidebar");
  const backdrop = document.getElementById("v6-backdrop");
  const burger = document.getElementById("v6-burger");
  const main = document.querySelector<HTMLElement>(".v6-main");

  const focusableSelector =
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

  const toggle = (open: boolean) => {
    sidebar?.classList.toggle("is-open", open);
    backdrop?.classList.toggle("is-open", open);
    document.body.style.overflow = open ? "hidden" : "";
    if (burger) {
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.setAttribute("aria-label", open ? "Закрыть меню" : "Меню");
    }
    backdrop?.setAttribute("aria-hidden", open ? "false" : "true");
    if (main) {
      if (open) main.setAttribute("inert", "");
      else main.removeAttribute("inert");
    }
    if (open) {
      const first = sidebar?.querySelector<HTMLElement>(focusableSelector);
      first?.focus();
    }
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
    if (!sidebar?.classList.contains("is-open")) return;
    if (e.key === "Escape") {
      toggle(false);
      burger?.focus();
      return;
    }
    if (e.key !== "Tab" || !sidebar) return;
    const nodes = [...sidebar.querySelectorAll<HTMLElement>(focusableSelector)].filter(
      (el) => !el.hasAttribute("disabled") && el.offsetParent !== null,
    );
    if (!nodes.length) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
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
