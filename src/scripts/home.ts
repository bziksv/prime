import "./concept-v6";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* —— Scroll reveals —— */
const reveals = document.querySelectorAll(".v6-reveal");
const revealObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("is-in");
      revealObs.unobserve(e.target);
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
);
reveals.forEach((el) => revealObs.observe(el));

const hero = document.querySelector<HTMLElement>("[data-home-hero]");
const photo = document.querySelector<HTMLElement>("[data-home-bg]");
const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-home-node]"));
const leadsEl = document.querySelector<HTMLElement>("[data-home-leads]");
const cplEl = document.querySelector<HTMLElement>("[data-home-cpl]");
const topEl = document.querySelector<HTMLElement>("[data-home-top]");

if (!reduceMotion && hero) {
  let mx = 0;
  let my = 0;
  let tx = 0;
  let ty = 0;
  let raf = 0;

  const tick = () => {
    mx += (tx - mx) * 0.08;
    my += (ty - my) * 0.08;
    hero.style.setProperty("--h-mx", mx.toFixed(4));
    hero.style.setProperty("--h-my", my.toFixed(4));
    raf = requestAnimationFrame(tick);
  };
  raf = requestAnimationFrame(tick);

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
      const host = photo.closest(".home-hero");
      if (!host) {
        ticking = false;
        return;
      }
      const rect = host.getBoundingClientRect();
      const view = window.innerHeight || 1;
      const progress = (view - rect.top) / (view + rect.height);
      const y = Math.max(-28, Math.min(28, (progress - 0.5) * 42));
      photo.style.transform = `translate3d(0, ${y}px, 0) scale(1.08)`;
      ticking = false;
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* LIVE HUB cycle */
if (nodes.length) {
  let step = 0;
  const cycle = () => {
    nodes.forEach((node, i) => node.classList.toggle("is-active", i === step));
    step = (step + 1) % nodes.length;
  };
  cycle();
  window.setInterval(cycle, reduceMotion ? 3600 : 2800);
}

const flash = (el: HTMLElement | null) => {
  if (!el) return;
  el.classList.remove("is-flash");
  void el.offsetWidth;
  el.classList.add("is-flash");
};

if (leadsEl || cplEl || topEl) {
  let leads = 42;
  let cpl = 380;
  let top = 128;
  const currency =
    document.documentElement.getAttribute("data-cpl-currency")?.trim() || "₽";
  const formatCpl = (n: number) => (currency === "$" ? `$${n}` : `${n} ${currency}`);

  window.setInterval(() => {
    leads += Math.random() > 0.4 ? 1 : 0;
    if (leads > 96) leads = 28;
    cpl = Math.max(210, Math.min(620, Math.round(cpl + (Math.random() - 0.48) * 28)));
    top += Math.random() > 0.55 ? 1 : 0;
    if (top > 240) top = 86;

    if (leadsEl) {
      leadsEl.textContent = String(leads);
      flash(leadsEl);
    }
    if (cplEl) {
      cplEl.textContent = formatCpl(cpl);
      flash(cplEl);
    }
    if (topEl) {
      topEl.textContent = String(top);
      flash(topEl);
    }
  }, reduceMotion ? 4200 : 2800);
}
