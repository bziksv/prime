import type { BlogPost } from "../../../data/blog";

/** EN overlay for audit-reklamnoy-kampanii — same structure as RU JSON. */
export const auditReklamnoyKampaniiEn: BlogPost = {
  slug: "audit-reklamnoy-kampanii",
  title: "Ad campaign audit: why, stages, and what to check",
  date: "2019-07-08",
  category: "Paid search",
  cover: "/images/blog/audit-reklamnoy-kampanii/cover-en.webp",
  excerpt:
    "A paid search audit: when to order it, technical and analytical stages, ongoing optimization, and how to hand results to the client without a “doctor’s prescription.”",
  lead: [
    "An ad campaign audit diagnoses settings, stats, and optimization processes — why KPIs miss and what to change. It’s not only an error list; it should also call out what’s working in the account.",
    "Below: typical reasons to order one, three stages (tech → analytics → conclusions), and what to check in Google Ads and similar accounts. UIs change; the checklist by meaning stays.",
  ],
  faq: [
    {
      q: "When do you need an audit?",
      a: "KPIs don’t add up, it’s unclear where the money goes, results got worse over a period, you want a second pair of eyes, or a growth plan when the numbers already look fine.",
    },
    {
      q: "What if the account tech is a mess?",
      a: "Often it’s cheaper to rebuild the structure than to “tweak” chaos. Fix the base first, then dig into KPI analytics.",
    },
    {
      q: "Google Ads only?",
      a: "Same logic for Yandex Direct and other accounts: settings → economics → regular work → a clear report.",
    },
    {
      q: "What’s a “normal” conversion rate?",
      a: "It depends on the niche and how you define a conversion (lead vs purchase). Compare with your own past period and unit economics — not someone else’s “market average.”",
    },
    {
      q: "What should the client get?",
      a: "A short conclusion and strategy (a few slides) plus an appendix with details. No jargon wall on the first screen.",
    },
    {
      q: "Is an audit a one-off?",
      a: "It’s a snapshot. Next come regular jobs: queries, negatives, bid and ad tests, budget reallocation.",
    },
  ],
  sections: [
    {
      title: "Why people order an audit",
      level: 2,
      paras: [
        "Typical motives: CPA/ROMI not hit; the client can’t read the account and wants it profitable; it feels like it used to be better; checking their own team; wanting a fresh strategy when numbers already work.",
        "Motive sets depth: some need a tech review, others a strategy rebuild and budget priorities.",
      ],
    },
    {
      title: "Technical stage",
      level: 2,
      paras: [
        "Check account, campaign, ad group, ad, and keyword settings: geo, language, schedule, devices, negatives, extensions, goals/conversions, UTM, moderation status, duplicates and overlaps.",
        "Many critical errors mean rebuild the structure — don’t polish KPIs on top of noise. Otherwise analytics will count garbage.",
      ],
      lists: [
        {
          intro: "Tech-check base:",
          items: [
            "goals and conversion correctness",
            "geo and exclusions",
            "campaign structure by intent",
            "negatives and search terms",
            "ad → landing page match",
            "budgets and limits without accidental cutoffs",
          ],
        },
      ],
    },
    {
      title: "Analytical stage",
      level: 2,
      paras: [
        "See whether KPIs are hit, how budget is split across campaigns, and whether regular work happens. Account for seasonality, conversion lag, other channels, and assisted paths — not only last click.",
        "Account work should include: search-term review, bid strategy tests, display/placements, devices and geo, ad and extension updates, keyword quality, remarketing/audiences, turning off what’s ineffective.",
      ],
      lists: [
        {
          intro: "Checklist questions:",
          items: [
            "Are KPIs hit? If not — where’s the break",
            "is optimization regular or set-and-forget",
            "does budget follow priorities",
            "what will drive the next lift",
          ],
        },
      ],
      links: [
        {
          label: "Ad metrics",
          href: "/en/blog/metriki-reklamy/",
        },
        {
          label: "Performance marketing",
          href: "/en/blog/performance-marketing/",
        },
      ],
    },
    {
      title: "How to deliver the result",
      level: 2,
      paras: [
        "Assemble short conclusions and a proposed strategy in plain language. Details go in the appendix. Note account strengths: that’s fairer and more useful for the next campaigns.",
        "An audit without an action plan is just a diagnosis. Lock fix priorities and expected effect in the client’s KPI terms.",
      ],
      links: [
        {
          label: "Client report",
          href: "/en/blog/otchet-klientu/",
        },
        {
          label: "Ads account",
          href: "/en/blog/reklamnyy-kabinet/",
        },
      ],
    },
  ],
  closing: [
    "An ad audit is tech, economics, and optimization processes packed into a clear conclusion. Start with settings and goals, then KPIs and regular work; give the client a short strategy — not only a bug list.",
  ],
  related: [
    "metriki-reklamy",
    "performance-marketing",
    "otchet-klientu",
    "reklamnyy-kabinet",
    "prognoz-trafika-google-ads",
    "klyuchi-google-ads",
  ],
};
