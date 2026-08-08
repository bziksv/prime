import type { BlogPost } from "../../../data/blog";

/** EN overlay for strategii-google-ads — same structure as RU JSON. */
export const strategiiGoogleAdsEn: BlogPost = {
  slug: "strategii-google-ads",
  title: "Google Ads automated bidding: pick the strategy by goal",
  date: "2018-12-25",
  category: "Paid search",
  cover: "/images/blog/strategii-google-ads/cover-en.webp",
  excerpt:
    "How to choose Smart Bidding in Google Ads — clicks, conversions, CPA, ROAS — without a 2018 button catalog or the myth that automation always spends better.",
  lead: [
    "Automated bidding in Google Ads sets bids toward a campaign goal: more clicks, more conversions, a CPA ceiling, or a ROAS floor. Manual CPC is still here — but without conversion data, auto modes fly blind.",
    "What follows is how to choose by business job. UI labels moved (eCPC, target impression share, and the rest): stick to the class — clicks / conversions / value / visibility — and confirm names in Google Ads Help. The Direct parallel lives in a separate article.",
  ],
  faq: [
    {
      q: "Is automation always better than manual bids?",
      a: "No. Sparse conversions, dirty goals, or offer tests — manual or a limited mode is often calmer. Auto wins on volume and stable economics.",
    },
    {
      q: "How many conversions do I need?",
      a: "The more stable conversions in the learning window, the more confident Smart Bidding gets. We don’t lock old “exactly 30” rules — use account guidance and your own stats.",
    },
    {
      q: "Can I switch strategy every day?",
      a: "Give a learning window (often about 1–3 weeks) and don’t rewrite the goal daily. Otherwise the algorithm never settles.",
    },
    {
      q: "How is this different from Direct strategies?",
      a: "Same idea: goal → data → automation. Cabinets and labels differ — don’t copy settings one-to-one.",
    },
    {
      q: "What matters more than the strategy?",
      a: "Clean conversions, the offer, negatives, and the landing. No bidding mode fixes an empty goal pixel.",
    },
  ],
  sections: [
    {
      title: "Why automated bids exist",
      level: 2,
      paras: [
        "The algorithm reads auction context harder than a person can bid every keyword by hand: device, time, conversion likelihood. You pay closer to clicks that look valuable — not any click that shows up.",
        "Bad goals are expensive: if “phone tap” without a lead counts as a conversion, optimization chases cheap junk.",
      ],
      lists: [
        {
          intro: "Before you pick a strategy:",
          items: [
            "a clear business goal (lead, purchase, traffic)",
            "conversion tracking without duplicates",
            "an acceptable CPA or ROAS",
            "budget for the learning period",
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
      title: "Clicks and visibility",
      level: 2,
      paras: [
        "Maximize clicks (or clicks within budget) fits when visits and awareness matter more than tracked conversions — or when you’re still wiring goals. Cap the budget and watch traffic quality.",
        "Visibility modes (impression share / SERP presence — names drift) suit brand jobs: show up on your name or competitor queries. For hard-CPA performance they often run expensive.",
      ],
      notes: [
        {
          title: "Watch out",
          text: "“Maximize clicks because I don’t know keyword prices” is a trap. Without negatives and monitoring, budget leaks into broad queries.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Conversions and value",
      level: 2,
      paras: [
        "Maximize conversions when you need more goal actions inside the budget. Target CPA when you know an acceptable lead or order cost and can feed the algorithm volume.",
        "Target ROAS / conversion value fits stores and mixed-margin models: the system pulls toward profitability. Without value in the data (value tracking), the idea weakens.",
      ],
      lists: [
        {
          intro: "Conversion strategies fit when:",
          items: [
            "goals fire reliably",
            "you have conversion history",
            "offer and site aren’t rewritten every week",
            "CPA ceiling or ROAS floor is clear",
          ],
        },
      ],
    },
    {
      title: "Limited auto and manual CPC",
      level: 2,
      paras: [
        "Enhanced CPC / hybrids (historically eCPC and peers) raise the bid when a click looks convertible and cap runaway growth. Handy as a bridge.",
        "Manual CPC fits launches, hypothesis tests, narrow brand campaigns, and rare conversions. Starting manual until data builds is fine — not a failure.",
      ],
    },
    {
      title: "Choose without breaking the learning window",
      level: 2,
      paras: [
        "Match campaign job to KPI: brand → visibility/clicks; leads → conversions/CPA; margin-aware store → value/ROAS. After a strategy change, plan an observation window — don’t expect overnight miracles.",
        "A sharp budget jump at the same Target CPA can hurt efficiency for a while — scale in steps. Keep cleaning search terms and creatives in parallel.",
      ],
      lists: [
        {
          intro: "Selection checklist:",
          items: [
            "KPI written down",
            "conversions verified",
            "strategy matches the KPI",
            "budget reserved for learning",
            "no daily setting churn",
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
      title: "What to remember",
      level: 2,
      paras: [
        "Google Ads auto strategies are about goal and data — not a magic cheaper-click button. The 2018 name catalog aged out; the strategy classes did not.",
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
