import "./concept-v6";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
  { threshold: 0.12, rootMargin: "0px 0px -36px 0px" },
);
revealEls.forEach((el) => revealObs.observe(el));

const meters = document.querySelector<HTMLElement>("[data-support-meters]");
if (meters) {
  const metersObs = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        meters.classList.add("is-in");
        metersObs.disconnect();
      }
    },
    { threshold: 0.4 },
  );
  metersObs.observe(meters);
}

const form = document.getElementById("support-form") as HTMLFormElement | null;
const hint = document.getElementById("support-form-hint");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (hint) {
    hint.hidden = false;
    hint.textContent = "Спасибо! Заявка на техподдержку принята — свяжемся с вами.";
    hint.style.color = "var(--p-lime, #b8f000)";
  }
  form.reset();
});

if (!reduceMotion) {
  const photo = document.querySelector<HTMLElement>("[data-parallax-support-bg]");
  let ticking = false;

  const onScroll = () => {
    if (ticking || !photo) return;
    ticking = true;
    requestAnimationFrame(() => {
      const hero = photo.closest(".p-hero");
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
}
