import "./concept-v6";
import { bindLeadForm } from "./lead-form";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function animateValue(el: HTMLElement, to: number, decimals: number, ms = 1400) {
  const start = performance.now();
  const from = 0;
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / ms);
    const eased = 1 - Math.pow(1 - t, 3);
    const val = from + (to - from) * eased;
    el.textContent = decimals > 0 ? val.toFixed(decimals) : String(Math.round(val));
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

const revealEls = document.querySelectorAll(".p-reveal");
const revealObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-in");
        revealObs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
);
revealEls.forEach((el) => revealObs.observe(el));

const statsRoot = document.querySelector(".p-stats");
let statsDone = false;
if (statsRoot) {
  const statsObs = new IntersectionObserver(
    (entries) => {
      if (statsDone) return;
      if (entries.some((e) => e.isIntersecting)) {
        statsDone = true;
        document.querySelectorAll<HTMLElement>(".p-stat__num").forEach((el) => {
          const value = Number(el.dataset.value || 0);
          const decimals = Number(el.dataset.decimals || 0);
          animateValue(el, value, decimals);
        });
        statsObs.disconnect();
      }
    },
    { threshold: 0.35 },
  );
  statsObs.observe(statsRoot);
}

const form = document.getElementById("partner-form") as HTMLFormElement | null;
if (form) {
  bindLeadForm({
    form,
    hint: document.getElementById("partner-form-hint"),
    successMessage: "Спасибо! Заявка на партнёрство принята.",
    source: "partnerstvo",
    successColor: "var(--brand-e)",
  });
}

/* —— Parallax: hero + case tiles —— */
if (!reduceMotion) {
  const hero = document.querySelector<HTMLElement>("[data-parallax-hero]");
  const heroBg = document.querySelector<HTMLElement>("[data-parallax-hero-bg]");
  const cards = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax-card]"));

  let ticking = false;

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      if (hero && heroBg) {
        const rect = hero.getBoundingClientRect();
        const view = window.innerHeight || 1;
        const progress = (view - rect.top) / (view + rect.height);
        const y = Math.max(-40, Math.min(40, (progress - 0.5) * 56));
        heroBg.style.transform = `translate3d(0, ${y}px, 0) scale(1.08)`;
      }

      cards.forEach((card) => {
        const img = card.querySelector<HTMLElement>("[data-parallax-img]");
        if (!img) return;
        const rect = card.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;
        const mid = rect.top + rect.height / 2;
        const offset = ((mid - window.innerHeight / 2) / window.innerHeight) * -18;
        if (!card.matches(":hover")) {
          img.style.transform = `translate3d(0, ${offset}px, 0) scale(1.1)`;
        }
      });

      ticking = false;
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  cards.forEach((card) => {
    const img = card.querySelector<HTMLElement>("[data-parallax-img]");
    if (!img) return;

    card.addEventListener("pointermove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
      img.style.transform = `translate3d(${x}px, ${y}px, 0) scale(1.16)`;
    });

    card.addEventListener("pointerleave", () => {
      img.style.transform = "translate3d(0, 0, 0) scale(1.1)";
    });
  });
}
