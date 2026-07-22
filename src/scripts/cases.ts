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
  const cap = dialog.querySelector(".k-lightbox__cap");
  if (!(img instanceof HTMLImageElement)) return;

  const getTriggers = () =>
    Array.from(document.querySelectorAll<HTMLElement>("[data-lightbox]"));

  let index = 0;

  const itemsFromDom = () =>
    getTriggers().map((el) => ({
      src: el.dataset.src || "",
      alt: el.dataset.alt || "",
      caption: el.dataset.caption || el.dataset.alt || "",
    }));

  const show = (i: number) => {
    const items = itemsFromDom();
    if (!items.length) return;
    index = ((i % items.length) + items.length) % items.length;
    const item = items[index];
    img.src = item.src;
    img.alt = item.alt;
    if (cap instanceof HTMLParagraphElement) {
      if (item.caption) {
        cap.textContent = item.caption;
        cap.hidden = false;
      } else {
        cap.textContent = "";
        cap.hidden = true;
      }
    }
    const navs = dialog.querySelectorAll<HTMLElement>(".k-lightbox__nav");
    navs.forEach((n) => {
      n.hidden = items.length < 2;
    });
  };

  const open = (i: number) => {
    show(i);
    if (!dialog.open) dialog.showModal();
  };

  const close = () => {
    if (dialog.open) dialog.close();
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
    }
  });

  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) close();
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
}

initLightbox();
