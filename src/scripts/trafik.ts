import "./concept-v6";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const revealEls = document.querySelectorAll(".t-reveal");
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

const form = document.getElementById("traffic-form") as HTMLFormElement | null;
const hint = document.getElementById("traffic-form-hint");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (hint) {
    hint.hidden = false;
    hint.textContent = "Спасибо! Заявка на продвижение по трафику принята — свяжемся с вами.";
    hint.style.color = "var(--t-mint, #2dd4bf)";
  }
  form.reset();
});

if (!reduceMotion) {
  const photo = document.querySelector<HTMLElement>("[data-parallax-traffic-bg]");
  let ticking = false;

  const onScroll = () => {
    if (ticking || !photo) return;
    ticking = true;
    requestAnimationFrame(() => {
      const hero = photo.closest(".t-hero");
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

  const counter = document.querySelector<HTMLElement>("[data-traffic-counter]");
  if (counter) {
    const target = 128;
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
          counter.textContent = `+${Math.round(target * eased)}%`;
          if (p < 1) requestAnimationFrame(tick);
          else counter.textContent = `+${target}%`;
        };
        counter.textContent = "+0%";
        requestAnimationFrame(tick);
        obs.disconnect();
      },
      { threshold: 0.4 },
    );
    obs.observe(counter);
  }
}
