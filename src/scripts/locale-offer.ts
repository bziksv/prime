/**
 * Soft locale offer based on navigator.languages (not IP).
 * Cookie prime_locale_pref remembers choice / dismiss.
 *
 * RU/EN/ES topbar switcher markup is build-gated with `import.meta.env.DEV`
 * (astro dev only) — it must not ship on production.
 */
const COOKIE = "prime_locale_pref";
const OFFER_KEY = "prime_locale_offer_dismissed";

function readCookie(name: string): string | null {
  const m = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return m ? decodeURIComponent(m[1]) : null;
}

function writeCookie(name: string, value: string, days = 365) {
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; samesite=lax`;
}

document.querySelectorAll<HTMLElement>("[data-locale-set]").forEach((el) => {
  el.addEventListener("click", () => {
    const loc = el.dataset.localeSet;
    if (loc) writeCookie(COOKIE, loc);
  });
});

const offers = Array.from(document.querySelectorAll<HTMLElement>("[data-locale-offer]"));
if (offers.length) {
  const pref = readCookie(COOKIE);
  const dismissed = sessionStorage.getItem(OFFER_KEY) === "1";
  const langs = (navigator.languages?.length ? navigator.languages : [navigator.language]).map((l) =>
    l.toLowerCase(),
  );
  const pageLocale = document.documentElement.getAttribute("data-locale") || "ru";
  const hasDevSwitcher = Boolean(document.querySelector("[data-lang-switch]"));

  // Prefer first matching offer (RU page lists es before en).
  const match = offers.find((offer) => {
    const target = offer.dataset.offerTarget || "en";
    return langs.some((l) => l === target || l.startsWith(`${target}-`)) && pageLocale !== target;
  });

  if (!hasDevSwitcher && !dismissed && !pref && match) {
    match.hidden = false;
    const target = match.dataset.offerTarget || "en";

    match.querySelector("[data-locale-offer-dismiss]")?.addEventListener("click", () => {
      sessionStorage.setItem(OFFER_KEY, "1");
      writeCookie(COOKIE, pageLocale);
      match.hidden = true;
    });

    match.querySelector("[data-locale-offer-accept]")?.addEventListener("click", () => {
      writeCookie(COOKIE, target);
    });
  }
}
