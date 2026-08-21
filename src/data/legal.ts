import type { Locale } from "../i18n/locales";

export const cookieConsentKey = "prime-cookie-consent";

const legalDocsRu = {
  cookies: "/legal/cookies/",
  recommendations: "/legal/recommendations/",
  privacy: "/legal/privacy/",
  consent: "/legal/consent/",
} as const;

const legalDocsEn = {
  cookies: "/en/legal/cookies/",
  recommendations: "/en/legal/recommendations/",
  privacy: "/en/legal/privacy/",
  consent: "/en/legal/consent/",
} as const;

const legalDocsEs = {
  cookies: "/es/legal/cookies/",
  recommendations: "/es/legal/recommendations/",
  privacy: "/es/legal/privacy/",
  consent: "/es/legal/consent/",
} as const;

export type LegalDocs = {
  cookies: string;
  recommendations: string;
  privacy: string;
  consent: string;
};

/** @deprecated Prefer getLegalDocs(locale). */
export const legalDocs: LegalDocs = legalDocsRu;

export function getLegalDocs(locale: Locale = "ru"): LegalDocs {
  if (locale === "ru") return legalDocsRu;
  if (locale === "es") return legalDocsEs;
  return legalDocsEn;
}
