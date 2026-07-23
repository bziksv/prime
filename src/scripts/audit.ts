import "./concept-v6";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

const scoreNum = document.querySelector<HTMLElement>("[data-score-num]");
const meter = scoreNum?.closest(".u-meter");

const bootMeter = () => {
  if (!scoreNum || scoreNum.dataset.done) return;
  scoreNum.dataset.done = "1";
  if (!reduceMotion) animateCount(scoreNum, 62);
  else scoreNum.textContent = "62";
};

if (meter) {
  const obs = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        bootMeter();
        obs.disconnect();
      }
    },
    { threshold: 0.4 },
  );
  obs.observe(meter);
} else {
  bootMeter();
}

/* Protocol tabs */
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

/* Findings accordion */
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
const hint = document.getElementById("audit-form-hint");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (hint) {
    hint.hidden = false;
    hint.textContent = "Спасибо! Заявка на аудит принята — свяжемся с вами.";
    hint.style.color = "var(--u-ok, #1f8a6e)";
  }
  form.reset();
});
