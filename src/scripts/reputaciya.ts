import "./concept-v6";
import { bindLeadForm } from "./lead-form";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const revealEls = document.querySelectorAll(".o-reveal");
const revealObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-in");
        revealObs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -36px 0px" },
);
revealEls.forEach((el) => revealObs.observe(el));

const form = document.getElementById("orm-form") as HTMLFormElement | null;
if (form) {
  bindLeadForm({
    form,
    hint: document.getElementById("orm-form-hint"),
    successMessage:
      form.dataset.successMessage ||
      "Спасибо! Заявка по репутации принята — свяжемся с вами.",
    source: form.dataset.formSource || "upravlenie-reputaciej",
    successColor: "var(--o-gold, #c9a06a)",
  });
}

if (!reduceMotion) {
  const photo = document.querySelector<HTMLElement>("[data-parallax-orm-bg]");
  let ticking = false;

  const onScroll = () => {
    if (ticking || !photo) return;
    ticking = true;
    requestAnimationFrame(() => {
      const hero = photo.closest(".o-hero");
      if (!hero) {
        ticking = false;
        return;
      }
      const rect = hero.getBoundingClientRect();
      const view = window.innerHeight || 1;
      const progress = (view - rect.top) / (view + rect.height);
      const y = Math.max(-30, Math.min(30, (progress - 0.5) * 46));
      photo.style.transform = `translate3d(0, ${y}px, 0) scale(1.08)`;
      ticking = false;
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const scoreEl = document.querySelector<HTMLElement>("[data-orm-score]");
  if (scoreEl) {
    const target = 4.8;
    let started = false;
    const obs = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || started) return;
        started = true;
        const t0 = performance.now();
        const dur = 1400;
        const tick = (now: number) => {
          const p = Math.min(1, (now - t0) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          scoreEl.textContent = (target * eased).toFixed(1);
          if (p < 1) requestAnimationFrame(tick);
          else scoreEl.textContent = target.toFixed(1);
        };
        scoreEl.textContent = "0.0";
        requestAnimationFrame(tick);
        obs.disconnect();
      },
      { threshold: 0.4 },
    );
    obs.observe(scoreEl);
  }
}
