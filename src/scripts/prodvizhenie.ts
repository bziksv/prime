import "./concept-v6";
import { bindLeadForm } from "./lead-form";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const scrollOffset = () => {
  const chapters = document.querySelector<HTMLElement>("[data-s-chapters]");
  const topbar = document.querySelector<HTMLElement>(".v6-topbar");
  const ch = chapters?.offsetHeight || 0;
  return (topbar?.offsetHeight || 0) + ch + 12;
};

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = window.scrollY + el.getBoundingClientRect().top - scrollOffset();
  const max = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  window.scrollTo({
    top: Math.min(Math.max(0, top), max),
    behavior: reduceMotion ? "auto" : "smooth",
  });
};

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

/* —— Sliding thumb helper —— */
const moveThumb = (
  track: HTMLElement,
  thumb: HTMLElement,
  active: HTMLElement | null,
) => {
  if (!active) {
    thumb.style.opacity = "0";
    return;
  }
  const tr = track.getBoundingClientRect();
  const ar = active.getBoundingClientRect();
  thumb.style.opacity = "1";
  thumb.style.width = `${ar.width}px`;
  thumb.style.height = `${ar.height}px`;
  thumb.style.transform = `translate3d(${ar.left - tr.left + track.scrollLeft}px, ${ar.top - tr.top + track.scrollTop}px, 0)`;
};

/* —— Pillars tabs —— */
const pillarsRoot = document.querySelector<HTMLElement>("[data-s-pillars]");
const pillarsNav = document.querySelector<HTMLElement>("[data-s-pillars-nav]");
const pillarsThumb = document.querySelector<HTMLElement>("[data-s-pillars-thumb]");
const pillarBtns = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-pillar]"));
const pillarPanels = Array.from(document.querySelectorAll<HTMLElement>("[data-pillar-panel]"));

function activatePillar(id: string) {
  let activeBtn: HTMLButtonElement | null = null;
  pillarBtns.forEach((btn) => {
    const on = btn.dataset.pillar === id;
    btn.classList.toggle("is-active", on);
    btn.setAttribute("aria-selected", on ? "true" : "false");
    if (on) activeBtn = btn;
  });
  pillarPanels.forEach((panel) => {
    const on = panel.dataset.pillarPanel === id;
    panel.classList.toggle("is-active", on);
    panel.hidden = !on;
  });
  if (pillarsNav && pillarsThumb) moveThumb(pillarsNav, pillarsThumb, activeBtn);
}

pillarBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.pillar;
    if (id) activatePillar(id);
  });
});

pillarsRoot?.addEventListener("keydown", (e) => {
  if (e.key !== "ArrowDown" && e.key !== "ArrowUp" && e.key !== "ArrowLeft" && e.key !== "ArrowRight")
    return;
  const idx = pillarBtns.findIndex((b) => b.classList.contains("is-active"));
  if (idx < 0) return;
  e.preventDefault();
  const next =
    e.key === "ArrowDown" || e.key === "ArrowRight"
      ? Math.min(pillarBtns.length - 1, idx + 1)
      : Math.max(0, idx - 1);
  const id = pillarBtns[next]?.dataset.pillar;
  if (id) {
    activatePillar(id);
    pillarBtns[next]?.focus();
  }
});

if (pillarBtns[0]?.dataset.pillar) activatePillar(pillarBtns[0].dataset.pillar);
window.addEventListener("resize", () => {
  const active = pillarBtns.find((b) => b.classList.contains("is-active")) || null;
  if (pillarsNav && pillarsThumb) moveThumb(pillarsNav, pillarsThumb, active);
});

/* —— Region pricing —— */
const regionsTrack = document.querySelector<HTMLElement>("[data-s-regions]");
const regionsThumb = document.querySelector<HTMLElement>("[data-s-regions-thumb]");
const regionBtns = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-region]"));
const priceEls = Array.from(document.querySelectorAll<HTMLElement>("[data-price]"));

function formatPrice(n: number) {
  return new Intl.NumberFormat("ru-RU").format(n) + " ₽";
}

function setRegion(region: string) {
  let active: HTMLButtonElement | null = null;
  regionBtns.forEach((btn) => {
    const on = btn.dataset.region === region;
    btn.classList.toggle("is-active", on);
    if (on) active = btn;
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
  if (regionsTrack && regionsThumb) moveThumb(regionsTrack, regionsThumb, active);
}

regionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const r = btn.dataset.region;
    if (r) setRegion(r);
  });
});

setRegion("region");
window.addEventListener("resize", () => {
  const active = regionBtns.find((b) => b.classList.contains("is-active")) || null;
  if (regionsTrack && regionsThumb) moveThumb(regionsTrack, regionsThumb, active);
});

/* —— Form —— */
const form = document.getElementById("seo-form") as HTMLFormElement | null;
if (form) {
  bindLeadForm({
    form,
    hint: document.getElementById("seo-form-hint"),
    successMessage: "Спасибо! Заявка на продвижение принята — свяжемся с вами.",
    source: "prodvizhenie-sayta",
    successColor: "var(--s-cyan, #20b8d0)",
  });
}

/* —— Chapters scrollspy + progress + side dots —— */
const chaptersTrack = document.querySelector<HTMLElement>("[data-s-chapters-track]");
const chaptersThumb = document.querySelector<HTMLElement>("[data-s-chapters-thumb]");
const chapterLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-s-chapter]"));
const progressFill = document.querySelector<HTMLElement>("[data-s-progress]");
const sectionEls = chapterLinks
  .map((a) => document.getElementById(a.dataset.sChapter || ""))
  .filter((el): el is HTMLElement => !!el);

// стартовый thumb для первой главы
requestAnimationFrame(() => {
  const first = chapterLinks[0] || null;
  if (chaptersTrack && chaptersThumb && first) {
    first.classList.add("is-active");
    moveThumb(chaptersTrack, chaptersThumb, first);
  }
});

let lastChapter = "";
const setActiveChapter = (id: string) => {
  let activeLink: HTMLAnchorElement | null = null;
  chapterLinks.forEach((a) => {
    const on = a.dataset.sChapter === id;
    a.classList.toggle("is-active", on);
    if (on) activeLink = a;
  });
  if (chaptersTrack && chaptersThumb) moveThumb(chaptersTrack, chaptersThumb, activeLink);

  if (id !== lastChapter) {
    lastChapter = id;
    const scroller = activeLink?.closest(".s-chapters__scroller");
    if (activeLink && scroller) {
      const sr = scroller.getBoundingClientRect();
      const lr = activeLink.getBoundingClientRect();
      if (lr.left < sr.left + 8 || lr.right > sr.right - 8) {
        activeLink.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
      }
    }
  }
};

const updateNav = () => {
  const marker = scrollOffset() + 24;
  let current = sectionEls[0]?.id || "";
  for (const el of sectionEls) {
    if (el.getBoundingClientRect().top - marker <= 0) current = el.id;
  }

  // последний блок (#seo-cta) часто не дотягивает top до маркера — подхватываем у низа страницы
  const last = sectionEls[sectionEls.length - 1];
  if (last) {
    const max = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const nearBottom = max > 0 && window.scrollY >= max - 64;
    const lastRect = last.getBoundingClientRect();
    const lastReached = lastRect.top <= window.innerHeight * 0.45;
    if (nearBottom || lastReached) current = last.id;
  }

  if (current) setActiveChapter(current);

  if (progressFill) {
    const max = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    progressFill.style.transform = `scaleX(${p})`;
  }
};

chapterLinks.forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.dataset.sChapter;
    if (!id) return;
    e.preventDefault();
    setActiveChapter(id);
    scrollToId(id);
    history.replaceState(null, "", `#${id}`);
  });
});

document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
  const href = a.getAttribute("href");
  if (!href || href === "#" || a.hasAttribute("data-s-chapter")) return;
  const id = href.slice(1);
  if (!document.getElementById(id)) return;
  a.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToId(id);
    history.replaceState(null, "", href);
  });
});

window.addEventListener("scroll", updateNav, { passive: true });
window.addEventListener("resize", updateNav);
updateNav();

if (location.hash) {
  const id = location.hash.slice(1);
  if (document.getElementById(id)) {
    requestAnimationFrame(() => scrollToId(id));
  }
}

/* —— Parallax hero + live SERP board —— */
const hero = document.querySelector<HTMLElement>("[data-s-hero]") || document.querySelector<HTMLElement>("[data-parallax-hero]");
const heroBg = document.querySelector<HTMLElement>("[data-parallax-hero-bg]");
const rankBoard = document.querySelector<HTMLElement>("[data-s-rank]");
const orbs = document.querySelectorAll<HTMLElement>("[data-s-orb]");

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

if (hero) {
  hero.addEventListener(
    "pointermove",
    (e) => {
      const rect = hero.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      if (rankBoard) rankBoard.style.transform = `translate3d(${nx * -12}px, ${ny * -10}px, 0)`;
      orbs.forEach((orb, i) => {
        const d = i === 0 ? 1 : -0.7;
        orb.style.transform = `translate3d(${nx * 28 * d}px, ${ny * 22 * d}px, 0)`;
      });
    },
    { passive: true },
  );
  hero.addEventListener("pointerleave", () => {
    if (rankBoard) rankBoard.style.transform = "";
    orbs.forEach((orb) => {
      orb.style.transform = "";
    });
  });
}

const sleep = (ms: number) => new Promise<void>((r) => window.setTimeout(r, ms));

const runRankDemo = async () => {
  if (!rankBoard) return;
  const rows = Array.from(rankBoard.querySelectorAll<HTMLElement>("[data-s-rank-row]"));
  const inEl = rankBoard.querySelector<HTMLElement>("[data-s-rank-in]");
  const billEl = rankBoard.querySelector<HTMLElement>("[data-s-rank-bill]");
  const noteEl = rankBoard.querySelector<HTMLElement>("[data-s-rank-note]");
  let inTop = 0;

  for (const row of rows) {
    const from = Number(row.dataset.from || 40);
    const to = Number(row.dataset.to || 5);
    const posEl = row.querySelector<HTMLElement>("[data-s-rank-pos]");
    const badge = row.querySelector<HTMLElement>("[data-s-rank-badge]");

    row.classList.add("is-on");
    if (posEl) posEl.textContent = `#${from}`;
    if (badge) badge.textContent = "out";

    await sleep(220);

    const t0 = performance.now();
    const dur = 700;
    await new Promise<void>((resolve) => {
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = Math.round(from + (to - from) * eased);
        if (posEl) posEl.textContent = `#${val}`;
        if (p < 1) requestAnimationFrame(tick);
        else resolve();
      };
      requestAnimationFrame(tick);
    });

    row.classList.add("is-top");
    if (badge) badge.textContent = "TOP";
    inTop += 1;
    if (inEl) inEl.textContent = String(inTop);
    if (billEl) billEl.textContent = `${inTop} фраз`;
    await sleep(160);
  }

  rankBoard.classList.add("is-done");
  if (noteEl) {
    noteEl.textContent = `${inTop} фраз в ТОП-10 · остальное вне счёта`;
  }

  // soft live jitter of positions inside TOP
  window.setInterval(() => {
    rows.forEach((row) => {
      if (!row.classList.contains("is-top")) return;
      const to = Number(row.dataset.to || 5);
      const wobble = Math.max(1, Math.min(10, to + Math.round((Math.random() - 0.5) * 2)));
      const posEl = row.querySelector<HTMLElement>("[data-s-rank-pos]");
      if (posEl) posEl.textContent = `#${wobble}`;
    });
  }, 2600);
};

if (rankBoard) {
  const start = () => {
    if (rankBoard.dataset.started) return;
    rankBoard.dataset.started = "1";
    void runRankDemo();
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
  obs.observe(rankBoard);
  window.setTimeout(start, 800);
}