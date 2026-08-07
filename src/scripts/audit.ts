import "./concept-v6";
import { auditGoalFromType, bindLeadForm, ymGoals } from "./lead-form";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* —— Reveal —— */
const revealEls = document.querySelectorAll(".u-reveal");
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

const animateCount = (el: HTMLElement, to: number, ms = 1400) => {
  const start = performance.now();
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / ms);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = String(Math.round(to * eased));
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

/* —— Stats count-up —— */
const stats = document.querySelector<HTMLElement>("[data-u-stats]");
if (stats) {
  const nums = [...stats.querySelectorAll<HTMLElement>("[data-count]")];
  const obs = new IntersectionObserver(
    (entries) => {
      if (!entries[0]?.isIntersecting) return;
      nums.forEach((el, i) => {
        const to = Number(el.dataset.count || "0");
        window.setTimeout(
          () => {
            if (reduceMotion) el.textContent = String(to);
            else animateCount(el, to, 1100);
          },
          reduceMotion ? 0 : i * 90,
        );
      });
      obs.disconnect();
    },
    { threshold: 0.35 },
  );
  obs.observe(stats);
}

/* —— Hero atmosphere (subtle) —— */
function initHeroMotion() {
  const hero = document.querySelector<HTMLElement>("[data-u-hero]");
  if (!hero) return;

  const mesh = hero.querySelector<HTMLElement>("[data-u-mesh]");
  const glow = hero.querySelector<HTMLElement>("[data-u-glow]");

  let tx = 0;
  let ty = 0;
  let cx = 0;
  let cy = 0;
  let raf = 0;

  const render = () => {
    cx += (tx - cx) * 0.1;
    cy += (ty - cy) * 0.1;

    hero.style.setProperty("--u-px", `${((cx + 0.5) * 100).toFixed(2)}%`);
    hero.style.setProperty("--u-py", `${((cy + 0.5) * 100).toFixed(2)}%`);

    if (mesh) mesh.style.transform = `translate3d(${cx * 28}px, ${cy * 20}px, 0)`;
    if (glow) {
      glow.style.transform = `translate3d(${cx * 60}px, ${cy * 44}px, 0)`;
      glow.style.opacity = String(0.65 + Math.hypot(cx, cy) * 0.4);
    }

    raf = requestAnimationFrame(render);
  };

  hero.addEventListener("pointermove", (e) => {
    const r = hero.getBoundingClientRect();
    tx = (e.clientX - r.left) / r.width - 0.5;
    ty = (e.clientY - r.top) / r.height - 0.5;
  });
  hero.addEventListener("pointerleave", () => {
    tx = 0;
    ty = 0;
  });

  raf = requestAnimationFrame(render);
  window.addEventListener("pagehide", () => cancelAnimationFrame(raf), { once: true });
}

initHeroMotion();

/* —— Signature: cinematic demo — type → cursor → scan —— */
function initScanDemo() {
  const consoleEl = document.querySelector<HTMLElement>("[data-u-console]");
  const i18n = {
    idle: consoleEl?.dataset.msgIdle || "Ожидание ввода адреса…",
    typing: consoleEl?.dataset.msgTyping || "Печатаем адрес…",
    accepted: consoleEl?.dataset.msgAccepted || "Адрес принят · наводим на «Сканировать»",
    hostPrefix: consoleEl?.dataset.hostPrefix || "Соединение с ",
    scan: consoleEl?.dataset.btnScan || "Сканировать",
    scanning: consoleEl?.dataset.btnScanning || "Сканирование…",
    rescan: consoleEl?.dataset.btnRescan || "Сканировать ещё раз",
  };
  const runBtn = document.querySelector<HTMLButtonElement>("[data-u-scan]");
  const urlInput = document.querySelector<HTMLInputElement>("[data-u-url]");
  const urlBox = urlInput?.closest(".u-console__url");
  const hostLine = document.querySelector<HTMLElement>("[data-u-line-host]");
  const scoreEl = document.querySelector<HTMLElement>("[data-score-num]");
  const bar = document.querySelector<HTMLElement>("[data-score-bar]");
  const cursor = document.querySelector<HTMLElement>("[data-u-cursor]");
  const lines = [...document.querySelectorAll<HTMLElement>("[data-u-line]")];
  if (!consoleEl || !runBtn || !urlInput || !lines.length) return;

  const DEMO_URL = "your-site.ru";
  let busy = false;
  let demoPlaying = false;
  let timers: number[] = [];

  const later = (fn: () => void, ms: number) => {
    const id = window.setTimeout(fn, ms);
    timers.push(id);
    return id;
  };

  const clearTimers = () => {
    timers.forEach((id) => window.clearTimeout(id));
    timers = [];
  };

  const hostFrom = (raw: string) => {
    const v = raw.trim();
    const full = /^https?:\/\//i.test(v) ? v : `https://${v}`;
    try {
      return new URL(full).hostname || full;
    } catch {
      return v.replace(/^https?:\/\//i, "").split("/")[0] || v;
    }
  };

  const showLine = (el: HTMLElement) => {
    el.hidden = false;
    requestAnimationFrame(() => el.classList.add("is-show"));
  };

  const setCursorTo = (el: HTMLElement, on = true) => {
    if (!cursor) return;
    const cRect = consoleEl.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    const x = r.left - cRect.left + r.width * 0.55;
    const y = r.top - cRect.top + r.height * 0.55;
    cursor.style.setProperty("--cx", `${x}px`);
    cursor.style.setProperty("--cy", `${y}px`);
    cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    cursor.classList.toggle("is-on", on);
  };

  const resetLog = () => {
    consoleEl.classList.remove("is-running", "is-done");
    lines.forEach((li, i) => {
      li.classList.remove("is-show");
      if (i === 0) {
        li.hidden = false;
        li.classList.add("is-show");
        li.textContent = i18n.idle;
      } else {
        li.hidden = true;
      }
    });
    if (scoreEl) scoreEl.textContent = "—";
    if (bar) bar.style.width = "0%";
    runBtn.classList.remove("is-hover", "is-armed");
    runBtn.disabled = true;
    runBtn.textContent = i18n.scan;
    urlBox?.classList.remove("is-focus");
    urlInput.classList.remove("is-typing");
    cursor?.classList.remove("is-on", "is-click");
  };

  const finish = () => {
    consoleEl.classList.remove("is-running");
    consoleEl.classList.add("is-done");
    runBtn.classList.remove("is-hover");
    runBtn.disabled = false;
    runBtn.textContent = i18n.rescan;
    if (scoreEl) {
      if (reduceMotion) scoreEl.textContent = "62";
      else animateCount(scoreEl, 62, 1400);
    }
    if (bar) bar.style.width = "62%";
    busy = false;
    demoPlaying = false;
    cursor?.classList.remove("is-on", "is-click");
  };

  const runScan = () => {
    busy = true;
    consoleEl.classList.add("is-running");
    consoleEl.classList.remove("is-done");
    runBtn.disabled = true;
    runBtn.textContent = i18n.scanning;
    if (scoreEl) scoreEl.textContent = "…";
    if (bar) bar.style.width = "8%";

    const host = hostFrom(urlInput.value || DEMO_URL);
    if (hostLine) hostLine.textContent = `${i18n.hostPrefix}${host}…`;

    lines.forEach((li) => {
      li.classList.remove("is-show");
      li.hidden = true;
    });

    const sequence = lines.slice(1);
    const step = reduceMotion ? 360 : 560;
    sequence.forEach((li, i) => {
      later(() => {
        showLine(li);
        if (bar) bar.style.width = `${12 + ((i + 1) / sequence.length) * 50}%`;
        if (i === sequence.length - 1) later(finish, reduceMotion ? 200 : 420);
      }, step * i);
    });
  };

  const playDemo = () => {
    if (demoPlaying || busy) return;
    demoPlaying = true;
    clearTimers();
    resetLog();
    urlInput.value = "";

    const typeDelay = reduceMotion ? 70 : 120;
    const afterType = reduceMotion ? 360 : 520;
    const toBtn = reduceMotion ? 1200 : 1600;
    const toScan = reduceMotion ? 1550 : 2050;

    // 1) cursor to input + focus
    later(() => {
      if (urlBox) setCursorTo(urlBox);
      urlBox?.classList.add("is-focus");
      lines[0].textContent = i18n.typing;
    }, 420);

    // 2) typewriter
    later(() => {
      urlInput.classList.add("is-typing");
      let i = 0;
      const tick = () => {
        if (i >= DEMO_URL.length) {
          urlInput.classList.remove("is-typing");
          lines[0].textContent = i18n.accepted;
          runBtn.disabled = false;
          runBtn.classList.add("is-armed");
          runBtn.textContent = i18n.scan;
          // 3) move cursor to button
          later(() => {
            setCursorTo(runBtn);
          }, afterType);
          // 4) hover + click feel
          later(() => {
            runBtn.classList.add("is-hover");
            cursor?.classList.add("is-click");
          }, toBtn);
          // 5) start scan
          later(() => {
            cursor?.classList.remove("is-click");
            runScan();
          }, toScan);
          return;
        }
        urlInput.value = DEMO_URL.slice(0, i + 1);
        i += 1;
        later(tick, typeDelay + (reduceMotion ? 0 : Math.random() * 55));
      };
      tick();
    }, 780);
  };

  runBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (busy || demoPlaying) return;
    if (consoleEl.classList.contains("is-done")) {
      playDemo();
      return;
    }
    if (!urlInput.value.trim()) {
      playDemo();
      return;
    }
    runScan();
  });

  // Autoplay once when console is in view
  const auto = new IntersectionObserver(
    (entries) => {
      if (!entries[0]?.isIntersecting) return;
      auto.disconnect();
  later(playDemo, 550);
    },
    { threshold: 0.4 },
  );
  auto.observe(consoleEl);

  resetLog();
}

initScanDemo();

/* —— Timeline scroll progress —— */
function initTimeline() {
  const root = document.querySelector<HTMLElement>("[data-u-timeline]");
  const fill = document.querySelector<HTMLElement>("[data-u-timeline-fill]");
  const items = [...document.querySelectorAll<HTMLElement>("[data-u-timeline-item]")];
  if (!root || !fill || !items.length) return;

  let ticking = false;

  const update = () => {
    ticking = false;
    const rect = root.getBoundingClientRect();
    const view = window.innerHeight || 1;
    const start = view * 0.72;
    const end = view * 0.28;
    const raw = (start - rect.top) / (rect.height + (start - end));
    const progress = Math.max(0, Math.min(1, raw));
    fill.style.height = `${(progress * 100).toFixed(1)}%`;

    items.forEach((item, i) => {
      const threshold = (i + 0.25) / items.length;
      item.classList.toggle("is-on", progress >= threshold);
    });
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  update();
}

initTimeline();

/* —— Protocol tabs —— */
const protocol = document.querySelector<HTMLElement>("[data-protocol]");
if (protocol) {
  const tabs = [...protocol.querySelectorAll<HTMLButtonElement>("[data-tab]")];
  const panels = [...protocol.querySelectorAll<HTMLElement>("[data-panel]")];

  const activate = (id: string) => {
    tabs.forEach((tab) => {
      const on = tab.dataset.tab === id;
      tab.classList.toggle("is-active", on);
      tab.setAttribute("aria-selected", on ? "true" : "false");
    });
    panels.forEach((panel) => {
      const on = panel.dataset.panel === id;
      panel.classList.toggle("is-active", on);
    });
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => activate(tab.dataset.tab || ""));
  });
}

/* —— Findings accordion —— */
document.querySelectorAll<HTMLButtonElement>(".u-finding__btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".u-finding");
    const panel = btn.closest(".u-protocol__panel");
    if (!item || !panel) return;
    const wasOpen = item.classList.contains("is-open");
    panel.querySelectorAll(".u-finding.is-open").forEach((el) => {
      el.classList.remove("is-open");
      el.querySelector("button")?.setAttribute("aria-expanded", "false");
    });
    if (!wasOpen) {
      item.classList.add("is-open");
      btn.setAttribute("aria-expanded", "true");
    }
  });
});

const form = document.getElementById("audit-form") as HTMLFormElement | null;
if (form) {
  bindLeadForm({
    form,
    hint: document.getElementById("audit-form-hint"),
    successMessage:
      form.dataset.successMessage ||
      "Спасибо! Заявка на аудит принята — свяжемся с вами.",
    source: form.dataset.formSource || "audit-sayta",
    successColor: "var(--u-ok, #1f8a6e)",
    metrikaGoals: (payload) => [
      ymGoals.form,
      auditGoalFromType(payload.service),
    ],
  });
}
