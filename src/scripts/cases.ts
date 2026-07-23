import "../scripts/concept-v6";

const revealEls = document.querySelectorAll(".k-reveal");
if (revealEls.length) {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -30px 0px" },
  );
  revealEls.forEach((el) => obs.observe(el));
}

function initLightbox() {
  const dialog = document.getElementById("k-lightbox");
  if (!(dialog instanceof HTMLDialogElement)) return;

  const img = dialog.querySelector(".k-lightbox__img");
  const cap = dialog.querySelector("[data-lightbox-cap]");
  const count = dialog.querySelector("[data-lightbox-count]");
  const thumbs = dialog.querySelector("[data-lightbox-thumbs]");
  const frame = dialog.querySelector(".k-lightbox__viewport");
  if (!(img instanceof HTMLImageElement) || !(thumbs instanceof HTMLElement)) return;

  const getTriggers = () =>
    Array.from(document.querySelectorAll<HTMLElement>("[data-lightbox]"));

  let index = 0;
  let touchX = 0;

  const itemsFromDom = () =>
    getTriggers().map((el) => ({
      src: el.dataset.src || "",
      alt: el.dataset.alt || "",
      caption: el.dataset.caption || el.dataset.alt || "",
    }));

  const buildThumbs = (items: { src: string; alt: string }[]) => {
    thumbs.innerHTML = "";
    items.forEach((item, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "k-lightbox__thumb";
      btn.setAttribute("aria-label", `Кадр ${i + 1}`);
      btn.dataset.thumbIndex = String(i);
      const t = document.createElement("img");
      t.src = item.src;
      t.alt = "";
      t.loading = "lazy";
      btn.appendChild(t);
      thumbs.appendChild(btn);
    });
  };

  const show = (i: number, animate = true) => {
    const items = itemsFromDom();
    if (!items.length) return;
    index = ((i % items.length) + items.length) % items.length;
    const item = items[index];

    if (animate && frame instanceof HTMLElement) {
      frame.classList.remove("is-swap");
      void frame.offsetWidth;
      frame.classList.add("is-swap");
    }

    img.src = item.src;
    img.alt = item.alt;

    if (cap instanceof HTMLElement) {
      cap.textContent = item.caption || item.alt || "";
    }
    if (count instanceof HTMLElement) {
      count.textContent = `${index + 1} / ${items.length}`;
    }

    thumbs.querySelectorAll(".k-lightbox__thumb").forEach((el, ti) => {
      el.classList.toggle("is-active", ti === index);
    });

    const active = thumbs.querySelector(".is-active");
    if (active instanceof HTMLElement) {
      active.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }

    const navs = dialog.querySelectorAll<HTMLElement>(".k-lightbox__nav");
    navs.forEach((n) => {
      n.hidden = items.length < 2;
    });
    thumbs.hidden = items.length < 2;
  };

  const open = (i: number) => {
    const items = itemsFromDom();
    buildThumbs(items);
    show(i, false);
    if (!dialog.open) dialog.showModal();
    document.documentElement.classList.add("k-lightbox-open");
  };

  const close = () => {
    if (dialog.open) dialog.close();
    document.documentElement.classList.remove("k-lightbox-open");
  };

  document.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;

    const trigger = target.closest<HTMLElement>("[data-lightbox]");
    if (trigger) {
      e.preventDefault();
      const triggers = getTriggers();
      const i = triggers.indexOf(trigger);
      if (i >= 0) open(i);
      return;
    }

    if (target.closest("[data-lightbox-close]")) {
      close();
      return;
    }

    if (target.closest("[data-lightbox-prev]")) {
      e.stopPropagation();
      show(index - 1);
      return;
    }

    if (target.closest("[data-lightbox-next]")) {
      e.stopPropagation();
      show(index + 1);
      return;
    }

    const thumb = target.closest<HTMLElement>("[data-thumb-index]");
    if (thumb) {
      e.stopPropagation();
      show(Number(thumb.dataset.thumbIndex || 0));
    }
  });

  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) close();
  });

  dialog.addEventListener("close", () => {
    document.documentElement.classList.remove("k-lightbox-open");
  });

  dialog.addEventListener("keydown", (e) => {
    if (!dialog.open) return;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      show(index - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      show(index + 1);
    }
  });

  dialog.addEventListener(
    "touchstart",
    (e) => {
      touchX = e.changedTouches[0]?.clientX ?? 0;
    },
    { passive: true },
  );

  dialog.addEventListener(
    "touchend",
    (e) => {
      const x = e.changedTouches[0]?.clientX ?? 0;
      const dx = x - touchX;
      if (Math.abs(dx) < 56) return;
      if (dx > 0) show(index - 1);
      else show(index + 1);
    },
    { passive: true },
  );
}

initLightbox();
