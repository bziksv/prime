import "./concept-v6";
import { bindLeadForm } from "./lead-form";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const revealEls = document.querySelectorAll(".n-reveal");
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

const form = document.getElementById("analytics-form") as HTMLFormElement | null;
if (form) {
  bindLeadForm({
    form,
    hint: document.getElementById("analytics-form-hint"),
    successMessage:
      form.dataset.successMessage ||
      "Спасибо! Заявка на сквозную аналитику принята — свяжемся с вами.",
    source: form.dataset.formSource || "skvoznaya-analitika",
    successColor: "var(--n-rose, #ff2d6a)",
  });
}

const hero = document.querySelector<HTMLElement>("[data-n-hero]");
const photo = document.querySelector<HTMLElement>("[data-parallax-analytics-bg]");
const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-n-node]"));
const roasEl = document.querySelector<HTMLElement>("[data-n-roas]");
const dealsEl = document.querySelector<HTMLElement>("[data-n-deals]");
const attrEl = document.querySelector<HTMLElement>("[data-n-attr]");

/* Pointer parallax — skip if OS asks to reduce motion */
if (!reduceMotion && hero) {
  let mx = 0;
  let my = 0;
  let tx = 0;
  let ty = 0;
  let raf = 0;

  const tickPointer = () => {
    mx += (tx - mx) * 0.08;
    my += (ty - my) * 0.08;
    hero.style.setProperty("--n-mx", mx.toFixed(4));
    hero.style.setProperty("--n-my", my.toFixed(4));
    raf = requestAnimationFrame(tickPointer);
  };
  raf = requestAnimationFrame(tickPointer);

  hero.addEventListener(
    "pointermove",
    (e) => {
      const r = hero.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width - 0.5;
      ty = (e.clientY - r.top) / r.height - 0.5;
    },
    { passive: true },
  );

  hero.addEventListener("pointerleave", () => {
    tx = 0;
    ty = 0;
  });

  window.addEventListener(
    "pagehide",
    () => {
      cancelAnimationFrame(raf);
    },
    { once: true },
  );
}

if (!reduceMotion && photo) {
  let ticking = false;

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const host = photo.closest(".n-hero");
      if (!host) {
        ticking = false;
        return;
      }
      const rect = host.getBoundingClientRect();
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

/* LIVE TRACE cycle — always on: this is the product demo */
if (nodes.length) {
  let step = 0;
  const cycle = () => {
    nodes.forEach((node, i) => node.classList.toggle("is-active", i === step));
    step = (step + 1) % nodes.length;
  };
  cycle();
  window.setInterval(cycle, reduceMotion ? 2400 : 1400);
}

/* Live metrics — always on */
if (roasEl || dealsEl || attrEl) {
  let deals = 18;
  let roas = 4.2;
  const flash = (el: HTMLElement | null) => {
    if (!el) return;
    el.classList.remove("is-flash");
    void el.offsetWidth;
    el.classList.add("is-flash");
  };

  window.setInterval(() => {
    deals += Math.random() > 0.45 ? 1 : 0;
    if (deals > 36) deals = 12;
    roas = Math.max(3.2, Math.min(7.4, roas + (Math.random() - 0.42) * 0.28));
    if (dealsEl) {
      dealsEl.textContent = String(deals);
      flash(dealsEl);
    }
    if (roasEl) {
      roasEl.textContent = `${roas.toFixed(1)}×`;
      flash(roasEl);
    }
    if (attrEl) {
      attrEl.textContent = Math.random() > 0.15 ? "on" : "sync";
      flash(attrEl);
    }
  }, reduceMotion ? 3200 : 1600);
}
