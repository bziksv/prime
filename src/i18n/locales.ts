/**
 * i18n v1 — зафиксированные локали.
 * RU без префикса; остальные — /{code}/…
 * Язык гостя на морде: Accept-Language / navigator.languages (не IP).
 */

export const defaultLocale = "ru" as const;

/** Локали с переводом морды/UI в первой волне (кроме default). */
export const translatedLocales = [
  "en", // English
  "de", // Deutsch
  "fr", // Français
  "es", // Español
  "pt", // Português
  "it", // Italiano
  "nl", // Nederlands
  "sv", // Svenska
] as const;

export const locales = [defaultLocale, ...translatedLocales] as const;

export type Locale = (typeof locales)[number];
export type TranslatedLocale = (typeof translatedLocales)[number];

export const localeMeta: Record<
  Locale,
  { name: string; nativeName: string; hreflang: string; dir: "ltr" }
> = {
  ru: { name: "Russian", nativeName: "Русский", hreflang: "ru", dir: "ltr" },
  en: { name: "English", nativeName: "English", hreflang: "en", dir: "ltr" },
  de: { name: "German", nativeName: "Deutsch", hreflang: "de", dir: "ltr" },
  fr: { name: "French", nativeName: "Français", hreflang: "fr", dir: "ltr" },
  es: { name: "Spanish", nativeName: "Español", hreflang: "es", dir: "ltr" },
  pt: { name: "Portuguese", nativeName: "Português", hreflang: "pt", dir: "ltr" },
  it: { name: "Italian", nativeName: "Italiano", hreflang: "it", dir: "ltr" },
  nl: { name: "Dutch", nativeName: "Nederlands", hreflang: "nl", dir: "ltr" },
  sv: { name: "Swedish", nativeName: "Svenska", hreflang: "sv", dir: "ltr" },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function isTranslatedLocale(value: string): value is TranslatedLocale {
  return (translatedLocales as readonly string[]).includes(value);
}

/** Префикс пути: ru → "", en → "/en" */
export function localePathPrefix(locale: Locale): string {
  return locale === defaultLocale ? "" : `/${locale}`;
}
