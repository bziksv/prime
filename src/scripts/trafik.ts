import "./concept-v6";
import { bindLeadForm } from "./lead-form";

const sleep = (ms: number) => new Promise<void>((r) => window.setTimeout(r, ms));

const fmt = (n: number) =>
  Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");

/* —— Reveal —— */
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

/* —— Stats count-up —— */
const stats = document.querySelector<HTMLElement>("[data-t-stats]");
if (stats) {
  const nums = stats.querySelectorAll<HTMLElement>("[data-count]");
  const obs = new IntersectionObserver(
    (entries) => {
      if (!entries[0]?.isIntersecting) return;
      nums.forEach((el) => {
        const target = Number(el.dataset.count || 0);
        const t0 = performance.now();
        const dur = 1100;
        const tick = (now: number) => {
          const p = Math.min(1, (now - t0) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = String(Math.round(target * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
      obs.disconnect();
    },
    { threshold: 0.4 },
  );
  obs.observe(stats);
}

/* —— Timeline rail —— */
const timeline = document.querySelector<HTMLElement>("[data-t-timeline]");
const timelineFill = document.querySelector<HTMLElement>("[data-t-timeline-fill]");
const timelineItems = document.querySelectorAll<HTMLElement>("[data-t-timeline-item]");

const updateTimeline = () => {
  if (!timeline || !timelineFill) return;
  const rect = timeline.getBoundingClientRect();
  const view = window.innerHeight || 1;
  const start = view * 0.75;
  const end = view * 0.25;
  const progress = Math.min(1, Math.max(0, (start - rect.top) / (rect.height + start - end)));
  timelineFill.style.height = `${progress * 100}%`;

  timelineItems.forEach((item) => {
    const r = item.getBoundingClientRect();
    const on = r.top < view * 0.72 && r.bottom > view * 0.2;
    item.classList.toggle("is-on", on);
  });
};

window.addEventListener("scroll", updateTimeline, { passive: true });
updateTimeline();

/* —— Plan select —— */
const plans = document.querySelectorAll<HTMLElement>("[data-t-plan]");
const regionSelect = document.querySelector<HTMLSelectElement>("[data-t-region]");
const pickEl = document.querySelector<HTMLElement>("[data-t-pick]");

const selectPlan = (card: HTMLElement) => {
  const id = card.dataset.tPlan || "";
  const title = card.dataset.title || "";
  const price = card.dataset.price || "";

  plans.forEach((p) => {
    const on = p === card;
    p.classList.toggle("is-selected", on);
    p.setAttribute("aria-pressed", on ? "true" : "false");
  });

  if (pickEl) {
    pickEl.innerHTML = `Выбран тариф: <strong>${title} · ${price}</strong>`;
  }
  if (regionSelect && (id === "region" || id === "capital")) {
    regionSelect.value = id;
  }
};

plans.forEach((card) => {
  const activate = () => selectPlan(card);
  card.addEventListener("click", (e) => {
    activate();
    if ((e.target as HTMLElement | null)?.closest("a[data-t-plan-cta]")) return;
  });
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      activate();
      document.getElementById("traffic-cta")?.scrollIntoView({ behavior: "smooth" });
    }
  });
});

regionSelect?.addEventListener("change", () => {
  const id = regionSelect.value;
  if (id !== "region" && id !== "capital") return;
  const card = document.querySelector<HTMLElement>(`[data-t-plan="${id}"]`);
  if (card) selectPlan(card);
});

const initialPlan =
  document.querySelector<HTMLElement>(".t-plan.is-selected") ||
  document.querySelector<HTMLElement>("[data-t-plan]");
if (initialPlan) selectPlan(initialPlan);

/* —— Form —— */
const form = document.getElementById("traffic-form") as HTMLFormElement | null;
if (form) {
  bindLeadForm({
    form,
    hint: document.getElementById("traffic-form-hint"),
    successMessage:
      "Спасибо! Заявка на продвижение по трафику принята — свяжемся с вами.",
    source: "prodvizhenie-sayta-po-trafiku",
    successColor: "var(--t-mint, #2dd4bf)",
    onSuccess: () => {
      if (initialPlan) selectPlan(initialPlan);
    },
  });
}

/* —— Hero parallax (pointer + scroll) —— */
const hero = document.querySelector<HTMLElement>("[data-t-hero]");
const mesh = document.querySelector<HTMLElement>("[data-t-mesh]");
const bg = document.querySelector<HTMLElement>("[data-t-bg]");
const meter = document.querySelector<HTMLElement>("[data-t-meter]");

if (hero) {
  hero.addEventListener(
    "pointermove",
    (e) => {
      const rect = hero.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      if (mesh) mesh.style.transform = `translate3d(${nx * 28}px, ${ny * 22}px, 0)`;
      if (meter) meter.style.transform = `translate3d(${nx * -10}px, ${ny * -8}px, 0)`;
    },
    { passive: true },
  );
  hero.addEventListener("pointerleave", () => {
    if (mesh) mesh.style.transform = "";
    if (meter) meter.style.transform = "";
  });
}

let scrollTick = false;
const onScrollBg = () => {
  if (scrollTick || !bg || !hero) return;
  scrollTick = true;
  requestAnimationFrame(() => {
    const rect = hero.getBoundingClientRect();
    const view = window.innerHeight || 1;
    const progress = (view - rect.top) / (view + rect.height);
    const y = Math.max(-28, Math.min(28, (progress - 0.5) * 44));
    bg.style.transform = `translate3d(0, ${y}px, 0) scale(1.08)`;
    scrollTick = false;
  });
};
window.addEventListener("scroll", onScrollBg, { passive: true });
onScrollBg();

/* —— Cinematic traffic meter demo —— */
const BASE = 1240;
const TARGET = 3180;
const RATE = 5; // ₽ за переход (столицы)

const visitsEl = document.querySelector<HTMLElement>("[data-t-visits]");
const deltaEl = document.querySelector<HTMLElement>("[data-t-delta]");
const payEl = document.querySelector<HTMLElement>("[data-t-pay]");
const noteEl = document.querySelector<HTMLElement>("[data-t-note]");
const keys = document.querySelectorAll<HTMLElement>("[data-t-key]");
const line = document.querySelector<SVGPolylineElement>("[data-t-line]");
const area = document.querySelector<SVGPathElement>("[data-t-area]");

const sparkPoints = (progress: number) => {
  const pts: { x: number; y: number }[] = [];
  const steps = 12;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const grow = Math.pow(Math.min(1, progress * 1.15 - t * 0.08), 1.1);
    const wave = Math.sin(t * Math.PI * 2.2) * 4 * progress;
    const y = 58 - grow * 46 - wave;
    pts.push({ x: (240 * i) / steps, y: Math.max(6, Math.min(58, y)) });
  }
  return pts;
};

const drawSpark = (progress: number) => {
  const pts = sparkPoints(progress);
  if (line) {
    line.setAttribute("points", pts.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" "));
  }
  if (area && pts.length) {
    const d = [
      `M ${pts[0].x} 64`,
      ...pts.map((p) => `L ${p.x.toFixed(1)} ${p.y.toFixed(1)}`),
      `L ${pts[pts.length - 1].x} 64`,
      "Z",
    ].join(" ");
    area.setAttribute("d", d);
  }
};

const setMetrics = (visits: number) => {
  const delta = Math.max(0, visits - BASE);
  const pay = delta * RATE;
  if (visitsEl) visitsEl.textContent = fmt(visits);
  if (deltaEl) deltaEl.textContent = fmt(delta);
  if (payEl) payEl.textContent = `${fmt(pay)} ₽`;
};

const runMeterDemo = async () => {
  if (!meter) return;

  meter.classList.add("is-live");
  drawSpark(0);
  setMetrics(BASE);

  for (const key of keys) {
    key.hidden = false;
    await sleep(180);
  }

  await sleep(280);

  const t0 = performance.now();
  const dur = 2600;

  await new Promise<void>((resolve) => {
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      const visits = BASE + (TARGET - BASE) * eased;
      setMetrics(visits);
      drawSpark(eased);
      if (p < 1) requestAnimationFrame(tick);
      else resolve();
    };
    requestAnimationFrame(tick);
  });

  meter.classList.add("is-paying");
  if (noteEl) {
    noteEl.textContent = `К оплате только Δ ${fmt(TARGET - BASE)} визитов · база ${fmt(BASE)} = 0 ₽`;
  }

  // soft live jitter after demo
  window.setInterval(() => {
    if (!meter.classList.contains("is-live")) return;
    const wobble = TARGET + Math.round((Math.random() - 0.4) * 40);
    setMetrics(wobble);
    drawSpark(0.92 + Math.random() * 0.08);
  }, 2400);
};

if (meter) {
  const start = () => {
    void runMeterDemo();
  };
  const obs = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        start();
        obs.disconnect();
      }
    },
    { threshold: 0.35 },
  );
  obs.observe(meter);
  // fallback if already in view / reduce-motion browsers
  window.setTimeout(() => {
    if (!meter.classList.contains("is-live")) start();
  }, 900);
}
