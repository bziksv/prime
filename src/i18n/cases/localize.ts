import type { CaseCategory, CaseStudy } from "../../data/cases";
import type { Locale } from "../locales";
import { caseTranslationsEn as batch1 } from "./en-batch1";
import { caseTranslationsEnBatch2 as batch2 } from "./en-batch2";
import { caseTranslationsEnBatch3 as batch3 } from "./en-batch3";
import { caseTranslationsEnBatch4 as batch4 } from "./en-batch4";
import { caseTranslationsEnBatch5 as batch5 } from "./en-batch5";
import { caseTranslationsEnBatch6 as batch6 } from "./en-batch6";
import { caseTranslationsEnBatch7 as batch7 } from "./en-batch7";
import { caseTranslationsEnBatch8 as batch8 } from "./en-batch8";
import { caseTranslationsEnBatch9 as batch9 } from "./en-batch9";
import { caseTranslationsEnBatch10 as batch10 } from "./en-batch10";
import { caseTranslationsEnBatch11 as batch11 } from "./en-batch11";
import { caseTranslationsEnBatch12 as batch12 } from "./en-batch12";
import { caseTranslationsEnBatch13 as batch13 } from "./en-batch13";
import { caseTranslationsEnBatch14 as batch14 } from "./en-batch14";
import { caseTranslationsEnBatch15 as batch15 } from "./en-batch15";
import { caseTranslationsEnBatch16 as batch16 } from "./en-batch16";
import { caseTranslationsEnBatch17 as batch17 } from "./en-batch17";
import { caseTranslationsEnBatch18 as batch18 } from "./en-batch18";
import { caseTranslationsEs as esBatch1 } from "./es-batch1";
import { isEnCaseSlug, isEsCaseSlug } from "./slugs";

export const caseTranslationsEn: Record<string, Partial<CaseStudy>> = {
  ...batch1,
  ...batch2,
  ...batch3,
  ...batch4,
  ...batch5,
  ...batch6,
  ...batch7,
  ...batch8,
  ...batch9,
  ...batch10,
  ...batch11,
  ...batch12,
  ...batch13,
  ...batch14,
  ...batch15,
  ...batch16,
  ...batch17,
  ...batch18,
};

export const caseTranslationsEs: Record<string, Partial<CaseStudy>> = {
  ...esBatch1,
};

export function isCaseTranslated(slug: string, locale: Locale): boolean {
  if (locale === "ru") return true;
  if (locale === "en") return isEnCaseSlug(slug);
  if (locale === "es") return isEsCaseSlug(slug);
  return false;
}

function mergeOverlay<T extends Record<string, unknown>>(base: T, overlay: Partial<T>): T {
  const out: Record<string, unknown> = { ...base };
  for (const [key, value] of Object.entries(overlay)) {
    if (value === undefined) continue;
    out[key] = value;
  }
  return out as T;
}

/** Merge locale text overlay onto the RU base case; keep image paths from base. */
export function localizeCase(c: CaseStudy, locale: Locale): CaseStudy {
  if (locale === "ru" || !isCaseTranslated(c.slug, locale)) return c;
  if (locale === "en") {
    const overlay = caseTranslationsEn[c.slug];
    if (!overlay) return c;
    return mergeOverlay(c, overlay);
  }
  if (locale === "es") {
    const overlay = caseTranslationsEs[c.slug];
    if (!overlay) return c;
    return mergeOverlay(c, overlay);
  }
  return c;
}

const categoryEn: Record<
  CaseCategory["id"],
  Pick<CaseCategory, "title" | "short" | "lead">
> = {
  seo: {
    title: "SEO",
    short: "SEO",
    lead: "Page-one growth, traffic, and leads — pay for ranked phrases.",
  },
  ads: {
    title: "Google Ads",
    short: "Ads",
    lead: "Google Ads and networks: lower CPL, more calls, CRM tie-in.",
  },
  web: {
    title: "Websites",
    short: "Web",
    lead: "Commercial sites and stores built for leads and sales.",
  },
  bots: {
    title: "Chatbots",
    short: "Bots",
    lead: "Telegram chatbots: access, alerts, bookings, and service without a separate app.",
  },
};

const categoryEs: Record<
  CaseCategory["id"],
  Pick<CaseCategory, "title" | "short" | "lead">
> = {
  seo: {
    title: "SEO",
    short: "SEO",
    lead: "Crecimiento en Google, tráfico y leads — pagas por frases posicionadas.",
  },
  ads: {
    title: "Google Ads",
    short: "Ads",
    lead: "Google Ads y redes de display: menos CPL, más llamadas, integración con CRM.",
  },
  web: {
    title: "Sitios web",
    short: "Web",
    lead: "Sitios comerciales y tiendas online pensados para leads y ventas.",
  },
  bots: {
    title: "Chatbots",
    short: "Bots",
    lead: "Chatbots de Telegram: acceso, avisos, reservas y atención sin una app aparte.",
  },
};

export function localizeCategory(cat: CaseCategory, locale: Locale): CaseCategory {
  if (locale === "ru") return cat;
  if (locale === "es") {
    const es = categoryEs[cat.id];
    if (!es) return cat;
    return { ...cat, ...es };
  }
  const en = categoryEn[cat.id];
  if (!en) return cat;
  return { ...cat, ...en };
}
