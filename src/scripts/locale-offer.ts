/**
 * Locale by navigator.languages (not IP), cookie prime_locale_pref remembers choice.
 * On homepage only: silent redirect to preferred locale when no cookie yet.
 * No banner / soft offer.
 *
 * RU/EN/ES topbar switcher markup is build-gated with `import.meta.env.DEV`
 * (astro dev only) — it must not ship on production.
 */
const COOKIE = "prime_locale_pref";

const HOME_BY_LOCALE: Record<string, string> = {
  ru: "/",
  en: "/en/",
  es: "/es/",
};

function readCookie(name: string): string | null {
  const m = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return m ? decodeURIComponent(m[1]) : null;
}

function writeCookie(name: string, value: string, days = 365) {
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; samesite=lax`;
}

function normalizePath(path: string): string {
  if (path.length > 1 && path.endsWith("/")) return path;
  if (path === "/") return "/";
  return `${path}/`;
}

function preferredLocale(langs: string[]): keyof typeof HOME_BY_LOCALE | null {
  for (const raw of langs) {
    const base = raw.toLowerCase().split("-")[0];
    if (base === "es" || base === "en" || base === "ru") return base;
  }
  return null;
}

document.querySelectorAll<HTMLElement>("[data-locale-set]").forEach((el) => {
  el.addEventListener("click", () => {
    const loc = el.dataset.localeSet;
    if (loc) writeCookie(COOKIE, loc);
  });
});

const pref = readCookie(COOKIE);
const pageLocale = document.documentElement.getAttribute("data-locale") || "ru";
const hasDevSwitcher = Boolean(document.querySelector("[data-lang-switch]"));
const path = normalizePath(location.pathname);
const isHome = path === HOME_BY_LOCALE.ru || path === HOME_BY_LOCALE.en || path === HOME_BY_LOCALE.es;

if (!hasDevSwitcher && !pref && isHome) {
  const langs = (navigator.languages?.length ? navigator.languages : [navigator.language]).map((l) =>
    l.toLowerCase(),
  );
  const want = preferredLocale(langs);
  if (want && want !== pageLocale) {
    writeCookie(COOKIE, want);
    location.replace(HOME_BY_LOCALE[want]);
  }
}
