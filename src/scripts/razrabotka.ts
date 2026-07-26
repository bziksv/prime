import "./concept-v6";
import { bindLeadForm } from "./lead-form";

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
if (form) {
  bindLeadForm({
    form,
    hint: document.getElementById("web-form-hint"),
    successMessage: "Спасибо! Заявка на разработку принята — свяжемся с вами.",
    source: "razrabotka-saytov",
    successColor: "var(--w-accent-bright, #2dd4bf)",
  });
}

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

/* —— Phone format swap (Swipe) + Sonic circular dots —— */
const device = document.querySelector<HTMLElement>("[data-device]");
if (device) {
  const tabs = [...device.querySelectorAll<HTMLButtonElement>("[data-device-tab]")];
  const dots = [...device.querySelectorAll<HTMLButtonElement>("[data-device-dot]")];
  const panels = [...device.querySelectorAll<HTMLElement>("[data-device-panel]")];
  const slides = [...device.querySelectorAll<HTMLElement>("[data-phone-slide]")];
  const ghostPrev = device.querySelector<HTMLImageElement>('[data-phone-ghost="prev"]');
  const ghostNext = device.querySelector<HTMLImageElement>('[data-phone-ghost="next"]');
  const screenSrcs = slides.map(
    (slide) => slide.querySelector("img")?.getAttribute("src") || "",
  );
  let index = 0;
  let timer = 0;

  const show = (next: number) => {
    const len = tabs.length || slides.length;
    if (!len) return;
    index = (next + len) % len;
    tabs.forEach((tab, i) => {
      const on = i === index;
      tab.classList.toggle("is-active", on);
      tab.setAttribute("aria-selected", on ? "true" : "false");
    });
    dots.forEach((dot, i) => {
      const on = i === index;
      dot.classList.toggle("is-active", on);
      dot.setAttribute("aria-selected", on ? "true" : "false");
    });
    panels.forEach((panel, i) => {
      const on = i === index;
      panel.classList.toggle("is-active", on);
      panel.hidden = !on;
    });
    slides.forEach((slide, i) => {
      slide.classList.toggle("is-active", i === index);
    });
    if (ghostPrev) {
      ghostPrev.src = screenSrcs[(index - 1 + len) % len] || ghostPrev.src;
    }
    if (ghostNext) {
      ghostNext.src = screenSrcs[(index + 1) % len] || ghostNext.src;
    }
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

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
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

/* —— Grow: floating metric cards state-swap (spectrum live) —— */
const swapCards = live
  ? [...live.querySelectorAll<HTMLElement>("[data-swap-card]")]
  : [];

if (swapCards.length >= 2) {
  const sets: Array<Array<{ value: string; label: string }>> = [
    [
      { value: "+46%", label: "к заявкам" },
      { value: "TOP", label: "в выдаче" },
    ],
    [
      { value: "2.1×", label: "глубже скролл" },
      { value: "−38%", label: "отказы" },
    ],
    [
      { value: "4.8с", label: "до CTA" },
      { value: "+72%", label: "время на сайте" },
    ],
  ];

  let setIndex = 0;
  let swapTimer = 0;

  const paint = () => {
    const pair = sets[setIndex % sets.length];
    swapCards.forEach((card, i) => {
      const face = card.querySelector<HTMLElement>("[data-swap-face]");
      const valueEl = card.querySelector<HTMLElement>("[data-swap-value]");
      const labelEl = card.querySelector<HTMLElement>("[data-swap-label]");
      const row = pair[i];
      if (!face || !valueEl || !labelEl || !row) return;
      face.classList.add("is-out");
      window.setTimeout(() => {
        valueEl.textContent = row.value;
        labelEl.textContent = row.label;
        face.classList.remove("is-out");
      }, 280);
    });

    swapCards.forEach((card) => {
      const slot = card.dataset.slot === "a" ? "b" : "a";
      card.dataset.slot = slot;
      card.classList.toggle("w-live__float--a", slot === "a");
      card.classList.toggle("w-live__float--b", slot === "b");
    });
  };

  const armSwap = () => {
    window.clearInterval(swapTimer);
    if (reduceMotion) return;
    swapTimer = window.setInterval(() => {
      setIndex += 1;
      paint();
    }, 3800);
  };

  const swapObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) armSwap();
        else window.clearInterval(swapTimer);
      });
    },
    { threshold: 0.3 },
  );
  swapObs.observe(live!);

  document.addEventListener(
    "visibilitychange",
    () => {
      if (document.hidden) window.clearInterval(swapTimer);
      else if (live?.classList.contains("is-alive")) armSwap();
    },
    { passive: true },
  );
}

/* —— Kinetic: before/after drag (strict ↔ live) —— */
const compare = document.querySelector<HTMLElement>("[data-compare]");
const compareStage = compare?.querySelector<HTMLElement>("[data-compare-stage]");
const compareBefore = compare?.querySelector<HTMLElement>("[data-compare-before]");
const compareHandle = compare?.querySelector<HTMLElement>("[data-compare-handle]");
const compareKnob = compare?.querySelector<HTMLButtonElement>("[data-compare-knob]");

if (compare && compareStage && compareBefore && compareHandle && compareKnob) {
  let pos = 52;
  let dragging = false;

  const setPos = (next: number) => {
    pos = Math.max(10, Math.min(90, next));
    compareBefore.style.setProperty("--compare", `${pos}%`);
    compareHandle.style.left = `${pos}%`;
    compareKnob.setAttribute("aria-valuenow", String(Math.round(pos)));
  };

  const fromClientX = (clientX: number) => {
    const rect = compareStage.getBoundingClientRect();
    if (!rect.width) return pos;
    return ((clientX - rect.left) / rect.width) * 100;
  };

  const onMove = (clientX: number) => {
    if (!dragging) return;
    setPos(fromClientX(clientX));
  };

  compareStage.addEventListener("pointerdown", (e) => {
    if (e.button !== 0 && e.pointerType === "mouse") return;
    dragging = true;
    compareStage.setPointerCapture(e.pointerId);
    setPos(fromClientX(e.clientX));
  });

  compareStage.addEventListener("pointermove", (e) => onMove(e.clientX));

  const endDrag = (e: PointerEvent) => {
    if (!dragging) return;
    dragging = false;
    try {
      compareStage.releasePointerCapture(e.pointerId);
    } catch {
      /* already released */
    }
  };

  compareStage.addEventListener("pointerup", endDrag);
  compareStage.addEventListener("pointercancel", endDrag);

  compareKnob.addEventListener("keydown", (e) => {
    const step = e.shiftKey ? 8 : 3;
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      setPos(pos - step);
    } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      setPos(pos + step);
    } else if (e.key === "Home") {
      e.preventDefault();
      setPos(10);
    } else if (e.key === "End") {
      e.preventDefault();
      setPos(90);
    }
  });

  setPos(pos);
}

/* —— Flow: rotating headline word —— */
const rotateEl = document.querySelector<HTMLElement>("[data-rotate-word]");
if (rotateEl && !reduceMotion) {
  const words = (rotateEl.dataset.rotateWords || "")
    .split("|")
    .map((w) => w.trim())
    .filter(Boolean);
  let idx = 0;
  let rotateTimer = 0;

  const tick = () => {
    if (words.length < 2) return;
    rotateEl.classList.remove("is-in");
    rotateEl.classList.add("is-out");
    window.setTimeout(() => {
      idx = (idx + 1) % words.length;
      rotateEl.textContent = words[idx];
      rotateEl.classList.remove("is-out");
      rotateEl.classList.add("is-prep");
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          rotateEl.classList.remove("is-prep");
          rotateEl.classList.add("is-in");
        });
      });
    }, 380);
  };

  const armRotate = () => {
    window.clearInterval(rotateTimer);
    rotateTimer = window.setInterval(tick, 2600);
  };

  armRotate();
  document.addEventListener(
    "visibilitychange",
    () => {
      if (document.hidden) window.clearInterval(rotateTimer);
      else armRotate();
    },
    { passive: true },
  );
}

/* —— Ink: expressive click ripple on CTAs —— */
const inkRipple = (btn: HTMLElement, clientX: number, clientY: number) => {
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height) * 2.1;
  const ripple = document.createElement("span");
  ripple.className = "w-btn__ripple";
  ripple.style.width = `${size}px`;
  ripple.style.height = `${size}px`;
  ripple.style.left = `${clientX - rect.left - size / 2}px`;
  ripple.style.top = `${clientY - rect.top - size / 2}px`;
  btn.appendChild(ripple);
  btn.classList.add("is-ink-press");
  window.setTimeout(() => btn.classList.remove("is-ink-press"), 160);
  window.setTimeout(() => ripple.remove(), 560);
};

document.querySelectorAll<HTMLElement>("[data-ink-btn]").forEach((btn) => {
  btn.addEventListener("pointerdown", (e) => {
    if (reduceMotion) return;
    if (e.button !== 0 && e.pointerType === "mouse") return;
    inkRipple(btn, e.clientX, e.clientY);
  });
});

/* —— Plasma: horizontal feature rail —— */
const rail = document.querySelector<HTMLElement>("[data-rail]");
if (rail) {
  const viewport = rail.querySelector<HTMLElement>("[data-rail-viewport]");
  const prevBtn = rail.querySelector<HTMLButtonElement>("[data-rail-prev]");
  const nextBtn = rail.querySelector<HTMLButtonElement>("[data-rail-next]");
  const cards = [...rail.querySelectorAll<HTMLElement>("[data-rail-card]")];

  const step = () => {
    const card = cards[0];
    if (!card || !viewport) return 280;
    const styles = getComputedStyle(rail.querySelector(".w-rail__track") || card);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "14") || 14;
    return card.getBoundingClientRect().width + gap;
  };

  const syncNav = () => {
    if (!viewport || !prevBtn || !nextBtn) return;
    const max = viewport.scrollWidth - viewport.clientWidth - 2;
    prevBtn.disabled = viewport.scrollLeft <= 2;
    nextBtn.disabled = viewport.scrollLeft >= max;
  };

  prevBtn?.addEventListener("click", () => {
    viewport?.scrollBy({ left: -step(), behavior: reduceMotion ? "auto" : "smooth" });
  });
  nextBtn?.addEventListener("click", () => {
    viewport?.scrollBy({ left: step(), behavior: reduceMotion ? "auto" : "smooth" });
  });
  viewport?.addEventListener("scroll", syncNav, { passive: true });
  window.addEventListener("resize", syncNav, { passive: true });
  syncNav();
}
