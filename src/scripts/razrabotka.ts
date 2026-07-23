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
        specs.dataset.counted = "1";
        countEls.forEach((el, i) => {
          const to = Number(el.dataset.count || "0");
          window.setTimeout(
            () => animateCount(el, to, 1100),
            reduceMotion ? 0 : i * 90,
          );
        });
        specsObs.unobserve(specs);
      });
    },
    { threshold: 0.28 },
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
    cancelAnimationFrame(speedRaf);
  },
  { once: true },
);

/* —— Speed block parallax (−60%) —— */
const speed = document.querySelector<HTMLElement>("[data-speed-parallax]");
const speedMesh = document.querySelector<HTMLElement>("[data-speed-mesh]");
const speedOrbs = speed
  ? [...speed.querySelectorAll<HTMLElement>("[data-speed-depth]")]
  : [];
const speedFloats = speed
  ? [...speed.querySelectorAll<HTMLElement>("[data-speed-float]")]
  : [];
const speedCards = speed
  ? [...speed.querySelectorAll<HTMLElement>("[data-speed-card]")]
  : [];

let speedRaf = 0;
let speedTX = 0;
let speedTY = 0;
let speedCX = 0;
let speedCY = 0;
let speedScroll = 0;

const renderSpeed = () => {
  if (!speed) return;
  speedCX += (speedTX - speedCX) * 0.12;
  speedCY += (speedTY - speedCY) * 0.12;

  const rect = speed.getBoundingClientRect();
  const view = window.innerHeight || 1;
  const progress = (view - rect.top) / (view + rect.height);
  speedScroll = Math.max(-1, Math.min(1, (progress - 0.5) * 2));

  speed.style.setProperty("--speed-x", speedCX.toFixed(4));
  speed.style.setProperty("--speed-y", speedCY.toFixed(4));
  speed.style.setProperty("--speed-scroll", speedScroll.toFixed(4));

  if (speedMesh) {
    speedMesh.style.transform = `translate3d(${speedCX * 28}px, ${speedCY * 22 + speedScroll * -36}px, 0) scale(1.12)`;
  }

  speedOrbs.forEach((orb) => {
    const depth = Number(orb.dataset.speedDepth || "0.08");
    orb.style.transform = `translate3d(${speedCX * depth * 280 + speedScroll * depth * -40}px, ${speedCY * depth * 220 + speedScroll * depth * 70}px, 0)`;
  });

  speedFloats.forEach((el) => {
    const k = Number(el.dataset.speedFloat || "1");
    el.style.transform = `translate3d(${speedCX * 42 * k + speedScroll * -18 * k}px, ${speedCY * 30 * k + speedScroll * 24 * k}px, 0)`;
  });

  speedCards.forEach((card, i) => {
    const dir = i % 2 === 0 ? 1 : -1;
    const y = speedScroll * (6 + i * 3) * dir + speedCY * 8;
    const x = speedCX * (6 + i * 2);
    card.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });

  speedRaf = requestAnimationFrame(renderSpeed);
};

if (speed && !reduceMotion) {
  speed.addEventListener("pointermove", (e) => {
    const r = speed.getBoundingClientRect();
    speedTX = (e.clientX - r.left) / r.width - 0.5;
    speedTY = (e.clientY - r.top) / r.height - 0.5;
  });
  speed.addEventListener("pointerleave", () => {
    speedTX = 0;
    speedTY = 0;
  });
  speedRaf = requestAnimationFrame(renderSpeed);
}

void reduceMotion;

/* —— Phone format swap (Swipe-inspired) —— */
const device = document.querySelector<HTMLElement>("[data-device]");
if (device) {
  const tabs = [...device.querySelectorAll<HTMLButtonElement>("[data-device-tab]")];
  const panels = [...device.querySelectorAll<HTMLElement>("[data-device-panel]")];
  const slides = [...device.querySelectorAll<HTMLElement>("[data-phone-slide]")];
  let index = 0;
  let timer = 0;

  const show = (next: number) => {
    index = (next + tabs.length) % tabs.length;
    tabs.forEach((tab, i) => {
      const on = i === index;
      tab.classList.toggle("is-active", on);
      tab.setAttribute("aria-selected", on ? "true" : "false");
    });
    panels.forEach((panel, i) => {
      const on = i === index;
      panel.classList.toggle("is-active", on);
      panel.hidden = !on;
    });
    slides.forEach((slide, i) => {
      slide.classList.toggle("is-active", i === index);
    });
  };

  const arm = () => {
    window.clearInterval(timer);
    if (reduceMotion || tabs.length < 2) return;
    timer = window.setInterval(() => show(index + 1), 4200);
  };

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => {
      show(i);
      arm();
    });
  });

  const deviceObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) arm();
        else window.clearInterval(timer);
      });
    },
    { threshold: 0.25 },
  );
  deviceObs.observe(device);

  document.addEventListener(
    "visibilitychange",
    () => {
      if (document.hidden) window.clearInterval(timer);
      else arm();
    },
    { passive: true },
  );
}
