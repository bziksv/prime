import "./concept-v6";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const revealEls = document.querySelectorAll(".w-reveal");
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

const form = document.getElementById("web-form") as HTMLFormElement | null;
const hint = document.getElementById("web-form-hint");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (hint) {
    hint.hidden = false;
    hint.textContent = "Спасибо! Заявка на разработку принята — свяжемся с вами.";
    hint.style.color = "var(--w-accent-bright, #2dd4bf)";
  }
  form.reset();
});

const animateCount = (el: HTMLElement, to: number, ms = 1200) => {
  const start = performance.now();
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / ms);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = String(Math.round(to * eased));
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

const specs = document.querySelector<HTMLElement>("[data-specs]");
if (specs) {
  const countEls = [...specs.querySelectorAll<HTMLElement>("[data-count]")];
  const specsObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        countEls.forEach((el) => {
          const to = Number(el.dataset.count || "0");
          animateCount(el, to, 1100);
        });
        specsObs.unobserve(specs);
      });
    },
    { threshold: 0.35 },
  );
  specsObs.observe(specs);
}

/*
 * Демо «С эффектами» — всегда активно (витрина услуги).
 */
const live = document.querySelector<HTMLElement>("[data-demo-live]");
const mesh = document.querySelector<HTMLElement>("[data-live-mesh]");
const stage = document.querySelector<HTMLElement>("[data-live-stage]");
const orbs = live ? [...live.querySelectorAll<HTMLElement>("[data-depth]")] : [];
const floats = live ? [...live.querySelectorAll<HTMLElement>("[data-float]")] : [];
const chart = document.querySelector<HTMLElement>("[data-chart]");
const liveCount = document.querySelector<HTMLElement>("[data-live-count]");

let liveRaf = 0;
let targetX = 0;
let targetY = 0;
let curX = 0;
let curY = 0;
let idleT = 0;

const renderLive = (now: number) => {
  idleT = now * 0.001;
  curX += (targetX - curX) * 0.14;
  curY += (targetY - curY) * 0.14;

  const idleX = Math.sin(idleT * 0.7) * 0.08;
  const idleY = Math.cos(idleT * 0.55) * 0.06;
  const x = curX + idleX;
  const y = curY + idleY;

  if (mesh) {
    mesh.style.transform = `translate3d(${x * 28}px, ${y * 22}px, 0) scale(1.1)`;
  }

  orbs.forEach((orb) => {
    const depth = Number(orb.dataset.depth || "0.06");
    orb.style.transform = `translate3d(${x * depth * 320}px, ${y * depth * 260}px, 0)`;
  });

  floats.forEach((el, i) => {
    const k = i === 0 ? 1.15 : -0.95;
    el.style.transform = `translate3d(${x * 48 * k}px, ${y * 36 * k}px, 0)`;
  });

  if (stage) {
    const rx = y * -14;
    const ry = x * 18;
    const tz = 12 + Math.abs(x) * 18;
    stage.style.transform = `translate(-50%, -50%) translateZ(${tz}px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  }

  liveRaf = requestAnimationFrame(renderLive);
};

if (live) {
  live.classList.add("is-alive");
  live.addEventListener("pointermove", (e) => {
    const r = live.getBoundingClientRect();
    targetX = (e.clientX - r.left) / r.width - 0.5;
    targetY = (e.clientY - r.top) / r.height - 0.5;
  });
  live.addEventListener("pointerleave", () => {
    targetX = 0;
    targetY = 0;
  });
  liveRaf = requestAnimationFrame(renderLive);
}

if (chart) {
  const chartObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        chart.classList.add("is-on");
        if (liveCount) {
          const to = Number(liveCount.dataset.liveCount || "0");
          animateCount(liveCount, to);
        }
        chartObs.unobserve(chart);
      });
    },
    { threshold: 0.35 },
  );
  chartObs.observe(chart);
}

window.addEventListener(
  "pagehide",
  () => {
    cancelAnimationFrame(liveRaf);
  },
  { once: true },
);

void reduceMotion;
