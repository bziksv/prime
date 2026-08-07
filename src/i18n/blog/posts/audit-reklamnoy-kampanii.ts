import type { BlogPost } from "../../../data/blog";

/** EN overlay for audit-reklamnoy-kampanii — same structure as RU JSON. */
export const auditReklamnoyKampaniiEn: BlogPost = {
  slug: "audit-reklamnoy-kampanii",
  title: "Ad campaign audit: why, stages, and what to check",
  date: "2019-07-08",
  category: "Paid search",
  cover: "/images/blog/audit-reklamnoy-kampanii/cover-en.webp",
  excerpt:
    "A paid search audit: when to order it, technical and analytical stages, ongoing optimization, and how to deliver the result to the client without a “doctor’s prescription”.",
  lead: [
    "An ad campaign audit diagnoses settings, stats, and optimization processes to see why KPIs miss and what to change. It’s not just an error list — it’s also the account’s strengths.",
    "Three stages: tech settings → economics and KPIs → conclusions and next steps. The same logic fits Google Ads, Yandex Direct, and similar accounts. UIs change; the checklist by meaning stays.",
  ],
  faq: [
    {
      q: "When do you need an ad campaign audit?",
      a: "KPIs don’t add up, it’s unclear “where the money goes”, things got worse over a period, you need a second pair of eyes, or a growth plan when numbers already look fine.",
    },
    {
      q: "What if the account tech is a mess?",
      a: "Often it’s cheaper to rebuild structure than “tweak” chaos. Fix the base first, then deep KPI analytics.",
    },
    {
      q: "Does an audit apply only to Google Ads?",
      a: "The logic is the same for Yandex Direct and other accounts: settings → economics → regular work → a clear report.",
    },
    {
      q: "What’s a “normal” conversion rate?",
      a: "It depends on the niche and conversion definition (lead vs purchase). Compare with your past period and unit economics — not someone else’s “market average”.",
    },
    {
      q: "What should the client get from an audit?",
      a: "A short conclusion and strategy (a few slides) + an appendix with details. No jargon wall on the first screen.",
    },
    {
      q: "Is an ad audit a one-off exercise?",
      a: "A state snapshot. Next come regular jobs: queries, negatives, bid and ad tests, budget reallocation.",
    },
  ],
  sections: [
    {
      title: "Why people order an audit",
      level: 2,
      paras: [
        "Typical motives: CPA/ROMI (return on marketing investment) not hit; the client can’t read the account and wants “profit”; it feels like “it used to be better”; checking their own team; wanting a fresh strategy when numbers already work.",
        "Motive sets depth: some need a tech review, others a strategy rebuild and budget priorities.",
      ],
    },
    {
      title: "Technical stage",
      level: 2,
      paras: [
        "Check account, campaign, ad group, ad, and keyword settings: geo, language, schedule, devices, negatives, extensions, goals/conversions, UTM, moderation status, duplicates and overlaps.",
        "Many critical errors = a signal not to “polish KPIs”, but to rebuild structure. Otherwise analytics will count noise.",
      ],
      lists: [
        {
          intro: "Tech-check base:",
          items: [
            "goals and conversion correctness;",
            "geo and exclusions;",
            "campaign structure by intent;",
            "negatives and search terms;",
            "ad → landing page join;",
            "budgets and limits without accidental cutoffs.",
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
            "Are KPIs hit? If not — where’s the break;",
            "is optimization regular or “set and forget”;",
            "does budget follow priorities;",
            "what will drive the next lift.",
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
      title: "Form of the result",
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
