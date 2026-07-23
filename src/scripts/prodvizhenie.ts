import "./concept-v6";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* —— Reveal —— */
const revealEls = document.querySelectorAll(".s-reveal");
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

/* —— Pillars tabs —— */
const pillarBtns = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-pillar]"));
const pillarPanels = Array.from(document.querySelectorAll<HTMLElement>("[data-pillar-panel]"));

function activatePillar(id: string) {
  pillarBtns.forEach((btn) => {
    const on = btn.dataset.pillar === id;
    btn.classList.toggle("is-active", on);
    btn.setAttribute("aria-selected", on ? "true" : "false");
  });
  pillarPanels.forEach((panel) => {
    const on = panel.dataset.pillarPanel === id;
    panel.classList.toggle("is-active", on);
    panel.hidden = !on;
  });
}

pillarBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.pillar;
    if (id) activatePillar(id);
  });
});

if (pillarBtns[0]?.dataset.pillar) {
  activatePillar(pillarBtns[0].dataset.pillar);
}

/* —— Region pricing —— */
const regionBtns = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-region]"));
const priceEls = Array.from(document.querySelectorAll<HTMLElement>("[data-price]"));

function formatPrice(n: number) {
  return new Intl.NumberFormat("ru-RU").format(n) + " ₽";
}

function setRegion(region: string) {
  regionBtns.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.region === region);
  });
  priceEls.forEach((el) => {
    const map: Record<string, string | undefined> = {
      region: el.dataset.priceRegion,
      msk: el.dataset.priceMsk,
      spb: el.dataset.priceSpb,
    };
    const val = Number(map[region] || 0);
    el.classList.remove("is-swap");
    void el.offsetWidth;
    el.textContent = formatPrice(val);
    el.classList.add("is-swap");
  });
}

regionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const r = btn.dataset.region;
    if (r) setRegion(r);
  });
});

setRegion("region");

/* —— Form —— */
const form = document.getElementById("seo-form") as HTMLFormElement | null;
const hint = document.getElementById("seo-form-hint");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (hint) {
    hint.hidden = false;
    hint.textContent = "Спасибо! Заявка на продвижение принята — свяжемся с вами.";
    hint.style.color = "var(--s-cyan, #20b8d0)";
  }
  form.reset();
});

/* —— Parallax hero —— */
if (!reduceMotion) {
  const hero = document.querySelector<HTMLElement>("[data-parallax-hero]");
  const heroBg = document.querySelector<HTMLElement>("[data-parallax-hero-bg]");

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      if (hero && heroBg) {
        const rect = hero.getBoundingClientRect();
        const view = window.innerHeight || 1;
        const progress = (view - rect.top) / (view + rect.height);
        const y = Math.max(-36, Math.min(36, (progress - 0.5) * 52));
        heroBg.style.transform = `translate3d(0, ${y}px, 0) scale(1.08)`;
      }
      ticking = false;
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}
