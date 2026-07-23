import "./concept-v6";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* —— Reveal —— */
const revealEls = document.querySelectorAll(".p-reveal");
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

/* —— Why cards: animate bars on view / focus —— */
const whyCards = document.querySelectorAll<HTMLElement>("[data-why-card]");
const whyObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-in");
        whyObs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.35 },
);
whyCards.forEach((card) => {
  whyObs.observe(card);
  card.addEventListener("mouseenter", () => card.classList.add("is-active"));
  card.addEventListener("mouseleave", () => card.classList.remove("is-active"));
  card.addEventListener("focus", () => card.classList.add("is-active"));
  card.addEventListener("blur", () => card.classList.remove("is-active"));
});

/* —— Hero meters —— */
const meters = document.querySelector<HTMLElement>("[data-support-meters]");
if (meters) {
  meters.querySelectorAll<HTMLElement>("[data-meter]").forEach((m) => {
    m.style.setProperty("--meter", m.dataset.meter || "70");
  });
  const metersObs = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        meters.classList.add("is-in");
        metersObs.disconnect();
      }
    },
    { threshold: 0.4 },
  );
  metersObs.observe(meters);
}

/* —— Live ops: uptime + latency (витрина баннера — всегда) —— */
const uptimeEl = document.querySelector<HTMLElement>("[data-uptime-clock]");
const latencyEl = document.querySelector<HTMLElement>("[data-latency]");
const spark = document.querySelector<SVGPolylineElement>("[data-spark] polyline");

const jitterUptime = () => {
  if (!uptimeEl) return;
  const base = 99.96 + Math.random() * 0.039;
  uptimeEl.textContent = `${base.toFixed(2)}%`;
};

const jitterLatency = () => {
  if (!latencyEl) return;
  const ms = 28 + Math.round(Math.random() * 36);
  latencyEl.textContent = `${ms} ms`;
};

const nudgeSpark = () => {
  if (!spark) return;
  const pts: string[] = [];
  let y = 28;
  for (let x = 0; x <= 240; x += 20) {
    y = Math.max(8, Math.min(48, y + (Math.random() - 0.52) * 16));
    pts.push(`${x},${y.toFixed(1)}`);
  }
  spark.setAttribute("points", pts.join(" "));
};

jitterUptime();
jitterLatency();
window.setInterval(() => {
  jitterUptime();
  jitterLatency();
  nudgeSpark();
}, 2200);

/* —— Hero pointer tilt —— */
const hero = document.querySelector<HTMLElement>("[data-support-hero]");
const ops = document.querySelector<HTMLElement>("[data-support-ops]");
const depthEls = document.querySelectorAll<HTMLElement>("[data-parallax-depth]");

if (hero) {
  hero.addEventListener(
    "pointermove",
    (e) => {
      const rect = hero.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      if (ops) {
        ops.style.transform = `translate3d(${nx * -12}px, ${ny * -10}px, 0)`;
      }
      depthEls.forEach((el) => {
        const d = Number(el.dataset.parallaxDepth || 0.3);
        el.style.transform = `translate3d(${nx * 28 * d}px, ${ny * 22 * d}px, 0)`;
      });
    },
    { passive: true },
  );
  hero.addEventListener("pointerleave", () => {
    if (ops) ops.style.transform = "";
    depthEls.forEach((el) => {
      el.style.transform = "";
    });
  });
}

/* —— Service filters —— */
const filterBtns = document.querySelectorAll<HTMLButtonElement>("[data-filter]");
const serviceBtns = document.querySelectorAll<HTMLButtonElement>("[data-service]");
const servicesHint = document.querySelector<HTMLElement>("[data-services-hint]");

const filterLabels: Record<string, string> = {
  all: "все направления",
  dev: "разработка",
  content: "контент",
  design: "дизайн",
  ops: "операции",
};

const applyFilter = (id: string) => {
  filterBtns.forEach((btn) => {
    const on = btn.dataset.filter === id;
    btn.classList.toggle("is-active", on);
    btn.setAttribute("aria-selected", on ? "true" : "false");
  });
  serviceBtns.forEach((btn) => {
    const match = id === "all" || btn.dataset.group === id;
    btn.classList.toggle("is-dim", !match);
    btn.hidden = false;
  });
  if (servicesHint) {
    servicesHint.innerHTML = `Фильтр: <strong>${filterLabels[id] || id}</strong>`;
  }
};

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => applyFilter(btn.dataset.filter || "all"));
});

serviceBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const group = btn.dataset.group || "all";
    applyFilter(group);
    btn.classList.add("is-picked");
    window.setTimeout(() => btn.classList.remove("is-picked"), 700);
  });
});

/* —— Perks —— */
document.querySelectorAll<HTMLElement>("[data-perk]").forEach((perk) => {
  perk.addEventListener("mouseenter", () => perk.classList.add("is-active"));
  perk.addEventListener("mouseleave", () => perk.classList.remove("is-active"));
  perk.addEventListener("focus", () => perk.classList.add("is-active"));
  perk.addEventListener("blur", () => perk.classList.remove("is-active"));
});

/* —— Tariffs select + hours gauge —— */
const maxHours = 50;
const hoursFill = document.querySelector<HTMLElement>("[data-hours-fill]");
const hoursValue = document.querySelector<HTMLElement>("[data-hours-value]");
const ctaPick = document.querySelector<HTMLElement>("[data-cta-pick]");
const tariffSelect = document.querySelector<HTMLSelectElement>("[data-tariff-select]");
const tariffCards = document.querySelectorAll<HTMLElement>("[data-tariff]");

const selectTariff = (card: HTMLElement) => {
  const hours = Number(card.dataset.hours || 10);
  const name = card.dataset.name || "";
  const price = card.dataset.price || "";
  const id = card.dataset.tariff || "";

  tariffCards.forEach((c) => {
    const on = c === card;
    c.classList.toggle("is-selected", on);
    c.setAttribute("aria-pressed", on ? "true" : "false");
  });

  if (hoursFill) {
    hoursFill.style.setProperty("--p", `${(hours / maxHours) * 100}%`);
  }
  if (hoursValue) hoursValue.textContent = `${hours} ч`;
  if (ctaPick) {
    ctaPick.innerHTML = `Выбран тариф: <strong>${name} · ${price}</strong>`;
  }
  if (tariffSelect && id) {
    tariffSelect.value = id;
    // на всякий: если option не нашёлся — выставить selected вручную
    const opt = [...tariffSelect.options].find((o) => o.value === id);
    if (opt) opt.selected = true;
  }
};

tariffCards.forEach((card) => {
  const activate = () => selectTariff(card);

  card.addEventListener("click", (e) => {
    const link = (e.target as HTMLElement | null)?.closest("a[data-tariff-cta]");
    activate();
    // ссылка сама уедет на #support-cta
    if (link) return;
  });

  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      activate();
      document.getElementById("support-cta")?.scrollIntoView({ behavior: "smooth" });
    }
  });
});

tariffSelect?.addEventListener("change", () => {
  const id = tariffSelect.value;
  if (!id || id === "consult") return;
  const card = document.querySelector<HTMLElement>(`[data-tariff="${id}"]`);
  if (card) selectTariff(card);
});

// стартовый синк: хит / уже выбранная карточка → селект в форме
const initialCard =
  document.querySelector<HTMLElement>(".p-tariff.is-selected") ||
  document.querySelector<HTMLElement>("[data-tariff='t10']") ||
  document.querySelector<HTMLElement>("[data-tariff]");
if (initialCard) selectTariff(initialCard);

/* —— Form —— */
const form = document.getElementById("support-form") as HTMLFormElement | null;
const hint = document.getElementById("support-form-hint");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const picked = tariffSelect?.value || "";
  if (hint) {
    hint.hidden = false;
    hint.textContent = "Спасибо! Заявка на техподдержку принята — свяжемся с вами.";
    hint.style.color = "var(--p-lime, #b8f000)";
  }
  form.reset();
  // после reset вернуть выбранный тариф в селект
  if (picked && tariffSelect) {
    tariffSelect.value = picked;
    const card = document.querySelector<HTMLElement>(`[data-tariff="${picked}"]`);
    if (card) selectTariff(card);
  } else if (initialCard) {
    selectTariff(initialCard);
  }
});

/* —— Scroll parallax photo —— */
if (!reduceMotion) {
  const photo = document.querySelector<HTMLElement>("[data-parallax-support-bg]");
  let ticking = false;

  const onScroll = () => {
    if (ticking || !photo) return;
    ticking = true;
    requestAnimationFrame(() => {
      const heroEl = photo.closest(".p-hero");
      if (!heroEl) {
        ticking = false;
        return;
      }
      const rect = heroEl.getBoundingClientRect();
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
