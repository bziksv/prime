import type { BlogPost } from "../../../data/blog";

/** EN overlay for strategii-google-ads — same structure as RU JSON. */
export const strategiiGoogleAdsEn: BlogPost = {
  slug: "strategii-google-ads",
  title: "Google Ads automated bidding: how to choose by goal",
  date: "2018-12-25",
  category: "Contextual advertising",
  cover: "/images/blog/strategii-google-ads/cover-en.webp",
  excerpt:
    "How to pick automated bidding strategies in Google Ads (Smart Bidding): clicks, conversions, CPA/ROAS — without a catalog of outdated 2018 button names and “automation always cheaper” promises.",
  lead: [
    "Automated strategies in Google Ads set bids toward the campaign goal: more clicks, more conversions, holding CPA or ROAS. Manual CPC didn’t disappear, but without conversion data auto-bidding often flies blind.",
    "Below — selection logic by business task. Cabinet labels changed (eCPC, target impression share, etc.): orient on meaning “clicks / conversions / value / visibility”; the current list is in Google Ads Help. The Direct parallel is in a separate article.",
  ],
  faq: [
    {
      q: "Is automation always better than manual bids?",
      a: "No. With few conversions, broken goals, or offer tests, manual/limited mode can be calmer. Auto shines on volume and stable economics.",
    },
    {
      q: "How many conversions do you need?",
      a: "The more stable conversions in the learning window, the more confident Smart Bidding. We don’t lock old “exactly 30” thresholds — check cabinet guidance and your stats.",
    },
    {
      q: "Can you change strategy every day?",
      a: "Better give a learning window (often about 1–3 weeks) and don’t twist the goal daily. Otherwise the algorithm never settles.",
    },
    {
      q: "How is this different from Direct strategies?",
      a: "Meaning is similar: goal → data → automation. Cabinets and names differ; don’t copy settings one-to-one.",
    },
    {
      q: "What matters more than strategy?",
      a: "Correct conversions, offer, negatives, and landing. Strategy won’t save an empty goal pixel.",
    },
  ],
  sections: [
    {
      title: "Why automated bids",
      level: 2,
      paras: [
        "The algorithm reads auction context harder than a person can bid every keyword by hand: device, time, conversion likelihood. You pay closer to clicks that look valuable — not “any click”.",
        "The cost of a mistake is bad goals: if “phone click” without a lead counts as a conversion, optimization will chase cheap junk.",
      ],
      lists: [
        {
          intro: "Before picking a strategy:",
          items: [
            "clear business goal (lead, purchase, traffic);",
            "conversion tracking without duplicates;",
            "acceptable CPA/ROAS estimate;",
            "budget for the learning period.",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Direct strategies",
          href: "/en/blog/strategii-yandeks-direkt/",
        },
        {
          label: "Goals in Google Analytics",
          href: "/en/blog/google-analytics-tseli/",
        },
      ],
    },
    {
      title: "Clicks and reach",
      level: 2,
      paras: [
        "Maximize clicks / maximize clicks within budget fits when visits and awareness matter more, and conversions are few or not tracked yet. Cap budget and watch traffic quality.",
        "“Visibility” modes (impression share / SERP position — names drift) are closer to brand tasks: be seen on brand or competitor queries. For performance with a hard CPA they’re often expensive.",
      ],
      notes: [
        {
          title: "Important",
          text: "“Maximize clicks for people who don’t know keyword prices” is a trap. Without negatives and monitoring, budget leaks into broad queries.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Conversions and value",
      level: 2,
      paras: [
        "Maximize conversions — when you need more goal actions within budget. Target CPA — when you know an acceptable lead/order cost and can feed the algorithm volume.",
        "Target ROAS / conversion value — for stores and models with different margins: the system pulls toward target profitability. Without value in the data (value tracking) the idea weakens.",
      ],
      lists: [
        {
          intro: "When conversion strategies fit:",
          items: [
            "goals pass stably;",
            "there’s conversion history;",
            "offer and site don’t change every week;",
            "CPA ceiling or ROAS floor is clear.",
          ],
        },
      ],
    },
    {
      title: "Limited auto mode and manual CPC",
      level: 2,
      paras: [
        "Enhanced CPC / hybrids (historically eCPC and peers) raise the bid when a click looks like a conversion and cap growth. Useful as a transition step.",
        "Manual CPC — control and hypothesis tests at the start, narrow brand campaigns, rare conversions. Starting manual until data builds is fine.",
      ],
    },
    {
      title: "How to choose without breaking learning",
      level: 2,
      paras: [
        "Match campaign goal to KPI: brand → visibility/clicks; leads → conversions/CPA; store with margin → value/ROAS. Don’t expect an instant miracle: after a strategy change, plan an observation window.",
        "A sharp budget jump at the same Target CPA can temporarily hurt efficiency — scale in steps. In parallel, clean search terms and creatives.",
      ],
      lists: [
        {
          intro: "Selection checklist:",
          items: [
            "KPI written down;",
            "conversions verified;",
            "strategy = KPI;",
            "budget for learning;",
            "plan not to tweak settings daily.",
          ],
        },
      ],
      links: [
        {
          label: "A/B tests in paid search",
          href: "/en/blog/ab-testy-reklamy/",
        },
        {
          label: "Google Ads keywords",
          href: "/en/blog/klyuchi-google-ads/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Google Ads auto strategies are about goal and data — not a “magic cheaper click” button. The 2018 name catalog is outdated; the meaning of strategy classes is not.",
        "Goals and economics first, then automation. Otherwise the algorithm optimizes the wrong thing.",
      ],
    },
  ],
  closing: [
    "Pick a strategy class for the KPI, confirm conversions are clean, give a learning window, and scale carefully — that’s when Smart Bidding helps the budget more often than it amplifies random traffic.",
  ],
  related: [
    "strategii-yandeks-direkt",
    "klyuchi-google-ads",
    "ab-testy-reklamy",
    "google-analytics-tseli",
    "stavki-direkt",
    "skvoznaya-analitika",
  ],
};
