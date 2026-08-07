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
import { isEnCaseSlug } from "./slugs";

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

export function isCaseTranslated(slug: string, locale: Locale): boolean {
  if (locale === "ru") return true;
  if (locale === "en") return isEnCaseSlug(slug);
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

/** Merge EN (or future) text overlay onto the RU base case; keep image paths from base. */
export function localizeCase(c: CaseStudy, locale: Locale): CaseStudy {
  if (locale === "ru" || !isCaseTranslated(c.slug, locale)) return c;
  if (locale === "en") {
    const overlay = caseTranslationsEn[c.slug];
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
    lead: "Rankings, traffic, and leads paid for TOP-10 results.",
  },
  ads: {
    title: "Paid search",
    short: "Ads",
    lead: "Google Ads and networks: lower CPL, more calls, CRM tie-in.",
  },
  web: {
    title: "Websites",
    short: "Web",
    lead: "Commercial sites and stores built for leads and sales.",
  },
  bots: {
    title: "Messenger bots",
    short: "Bots",
    lead: "Telegram bots: access, alerts, bookings, and service without a separate app.",
  },
};

export function localizeCategory(cat: CaseCategory, locale: Locale): CaseCategory {
  if (locale === "ru") return cat;
  const en = categoryEn[cat.id];
  if (!en) return cat;
  return { ...cat, ...en };
}
