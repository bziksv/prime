import "./concept-v6";
import { bindLeadForm } from "./lead-form";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const revealEls = document.querySelectorAll(".a-reveal");
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

const form = document.getElementById("ads-form") as HTMLFormElement | null;
if (form) {
  bindLeadForm({
    form,
    hint: document.getElementById("ads-form-hint"),
    successMessage: "Спасибо! Заявка на контекст принята — свяжемся с вами.",
    source: "kontekstnaya-reklama",
    successColor: "var(--a-ember, #c45a12)",
  });
}

if (!reduceMotion) {
  const visual = document.querySelector<HTMLElement>("[data-parallax-ads]");
  const photo = document.querySelector<HTMLElement>("[data-parallax-ads-bg]");
  let ticking = false;

  const onScroll = () => {
    if (ticking || !visual || !photo) return;
    ticking = true;
    requestAnimationFrame(() => {
      const rect = visual.getBoundingClientRect();
      const view = window.innerHeight || 1;
      const progress = (view - rect.top) / (view + rect.height);
      const y = Math.max(-28, Math.min(28, (progress - 0.5) * 44));
      photo.style.transform = `translate3d(0, ${y}px, 0) scale(1.08)`;
      ticking = false;
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}
