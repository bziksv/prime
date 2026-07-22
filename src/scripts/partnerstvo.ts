import "./concept-v6";

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
const hint = document.getElementById("partner-form-hint");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (hint) {
    hint.hidden = false;
    hint.textContent = "Спасибо! Заявка на партнёрство принята.";
    hint.style.color = "var(--brand-e)";
  }
  form.reset();
});
