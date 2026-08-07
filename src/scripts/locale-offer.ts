/**
 * Soft locale offer based on navigator.languages (not IP).
 * Cookie prime_locale_pref remembers choice / dismiss.
 *
 * Language switcher (RU/EN) is shown only on localhost — production uses
 * browser-language offer only.
 */
const COOKIE = "prime_locale_pref";
const OFFER_KEY = "prime_locale_offer_dismissed";

function isLocalHost(): boolean {
  const host = location.hostname;
  return host === "localhost" || host === "127.0.0.1" || host === "[::1]" || host.endsWith(".local");
}

function readCookie(name: string): string | null {
  const m = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return m ? decodeURIComponent(m[1]) : null;
}

function writeCookie(name: string, value: string, days = 365) {
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; samesite=lax`;
}

const local = isLocalHost();

document.querySelectorAll<HTMLElement>("[data-lang-switch]").forEach((el) => {
  if (local) el.hidden = false;
});

document.querySelectorAll<HTMLElement>("[data-locale-set]").forEach((el) => {
  el.addEventListener("click", () => {
    const loc = el.dataset.localeSet;
    if (loc) writeCookie(COOKIE, loc);
  });
});

const offer = document.querySelector<HTMLElement>("[data-locale-offer]");
if (offer) {
  const target = offer.dataset.offerTarget || "en";
  const pref = readCookie(COOKIE);
  const dismissed = sessionStorage.getItem(OFFER_KEY) === "1";

  const langs = (navigator.languages?.length ? navigator.languages : [navigator.language]).map((l) =>
    l.toLowerCase(),
  );
  const prefersTarget = langs.some((l) => l === target || l.startsWith(`${target}-`));
  const pageLocale = document.documentElement.getAttribute("data-locale") || "ru";

  // Soft offer when browser prefers another locale and user has no saved choice.
  // Skip on localhost if the switcher is available (manual QA).
  if (!local && !dismissed && !pref && prefersTarget && pageLocale !== target) {
    offer.hidden = false;
  }

  offer.querySelector("[data-locale-offer-dismiss]")?.addEventListener("click", () => {
    sessionStorage.setItem(OFFER_KEY, "1");
    writeCookie(COOKIE, pageLocale);
    offer.hidden = true;
  });

  offer.querySelector("[data-locale-offer-accept]")?.addEventListener("click", () => {
    writeCookie(COOKIE, target);
  });
}
