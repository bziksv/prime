import type { Locale } from "../i18n/locales";

export const cookieConsentKey = "prime-cookie-consent";

/** RU originals are scanned policy images; EN are HTML pages. */
const legalDocsRu = {
  cookies: "/docs/cookies-prime-ltd.webp",
  recommendations: "/docs/rules-recommendation-prime-ltd.webp",
  privacy: "/docs/politics-prime-ltd.webp",
} as const;

const legalDocsEn = {
  cookies: "/en/legal/cookies/",
  recommendations: "/en/legal/recommendations/",
  privacy: "/en/legal/privacy/",
} as const;

export type LegalDocs = {
  cookies: string;
  recommendations: string;
  privacy: string;
};

/** @deprecated Prefer getLegalDocs(locale) — RU webp paths for backward compat on RU pages. */
export const legalDocs: LegalDocs = legalDocsRu;

export function getLegalDocs(locale: Locale = "ru"): LegalDocs {
  return locale === "ru" ? legalDocsRu : legalDocsEn;
}
