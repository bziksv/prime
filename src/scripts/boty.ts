import "./concept-v6";
import { bindLeadForm } from "./lead-form";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const revealEls = document.querySelectorAll(".b-reveal");
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

const form = document.getElementById("bots-form") as HTMLFormElement | null;
if (form) {
  bindLeadForm({
    form,
    hint: document.getElementById("bots-form-hint"),
    successMessage:
      form.dataset.successMessage ||
      "Спасибо! Заявка по ботам принята — свяжемся с вами.",
    source: form.dataset.formSource || "razrabotka-botov-dlya-messendzherov",
    successColor: "var(--b-signal, #34d399)",
  });
}

const chat = document.querySelector<HTMLElement>("[data-bots-chat]");
if (chat && !reduceMotion) {
  const steps = Array.from(chat.querySelectorAll<HTMLElement>("[data-chat-step]"));
  const typing = chat.querySelector<HTMLElement>("[data-chat-typing]");
  let i = 0;

  const showNext = () => {
    if (i >= steps.length) {
      typing?.classList.remove("is-on");
      return;
    }
    typing?.classList.add("is-on");
    window.setTimeout(() => {
      typing?.classList.remove("is-on");
      steps[i]?.classList.add("is-on");
      i += 1;
      window.setTimeout(showNext, i === steps.length ? 0 : 520);
    }, 380);
  };

  const start = () => {
    if (chat.dataset.played === "1") return;
    chat.dataset.played = "1";
    window.setTimeout(showNext, 400);
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
  obs.observe(chat);
} else if (chat) {
  chat.querySelectorAll("[data-chat-step]").forEach((el) => el.classList.add("is-on"));
}

if (!reduceMotion) {
  const photo = document.querySelector<HTMLElement>("[data-parallax-bots-bg]");
  let ticking = false;

  const onScroll = () => {
    if (ticking || !photo) return;
    ticking = true;
    requestAnimationFrame(() => {
      const hero = photo.closest(".b-hero");
      if (!hero) {
        ticking = false;
        return;
      }
      const rect = hero.getBoundingClientRect();
      const view = window.innerHeight || 1;
      const progress = (view - rect.top) / (view + rect.height);
      const y = Math.max(-36, Math.min(36, (progress - 0.5) * 52));
      photo.style.transform = `translate3d(0, ${y}px, 0) scale(1.1)`;
      ticking = false;
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}
