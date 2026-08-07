import type { BlogPost } from "../../../data/blog";

/** EN overlay for prognoz-trafika-google-ads — same structure as RU JSON. */
export const prognozTrafikaGoogleAdsEn: BlogPost = {
  slug: "prognoz-trafika-google-ads",
  title: "Traffic forecast for Google Ads search campaigns",
  date: "2019-07-10",
  category: "Internet marketing",
  cover: "/images/blog/prognoz-trafika-google-ads/cover-en.webp",
  excerpt:
    "How to estimate search demand and budget in Google Ads: gathering keywords in Keyword Planner, cleaning, CTR/CPC by groups, and a budget formula — without the illusion of an exact media plan.",
  lead: [
    "Before launching search in Google Ads it helps to know: is there enough demand for the goal, what order of clicks, and which budget covers the niche. Keyword Planner and a spreadsheet with assumptions give a range — not a guarantee.",
    "Below — stages: gather, clean, frequency, CTR, CPC, budget. An organic forecast is in a separate piece; the Ads UI changes, the calculation logic stays.",
  ],
  faq: [
    {
      q: "How is this different from an SEO traffic forecast?",
      a: "Here the model builds around auction, bids, and ad impressions. In SEO — organic positions and SERP CTR. The numbers aren’t interchangeable.",
    },
    {
      q: "How accurate is Keyword Planner?",
      a: "A cue with error. Better on high-volume; weaker on long-tail and new niches. Check against account fact when you have it.",
    },
    {
      q: "Why not paste all seed keywords comma-separated?",
      a: "The tool often narrows variant output. Gathering one seed at a time is usually fuller — an old observation; verify on your topic.",
    },
    {
      q: "Which CTR should you assume?",
      a: "Not a universal “15% for everyone”. Take fact from similar campaigns/niche or calculate by groups (brand / commercial / info).",
    },
    {
      q: "Budget formula?",
      a: "Simplified: impressions × CTR × CPC. Then CR and average order value for revenue/CPA. Group queries with different economics.",
    },
    {
      q: "Do you need goals before the media plan?",
      a: "Yes. Without KPIs the plan becomes “how many clicks we’ll buy”, not “will we hit CPA/ROMI”.",
    },
  ],
  sections: [
    {
      title: "Gathering and cleaning semantics",
      level: 2,
      paras: [
        "Build a full pool of relevant masks: different seed bases, language, and geo. In Keyword Planner expand with variants one seed at a time and export a plan with stats (frequency, competition, CPC cue).",
        "Manually remove the most frequent off-target terms (“free”, rival brands, wrong region/product). Full cleaning of every long-tail at forecast stage isn’t required — cutting fat junk matters more.",
      ],
      links: [
        {
          label: "Google Ads keywords",
          href: "/en/blog/klyuchi-google-ads/",
        },
      ],
    },
    {
      title: "Frequency and grouping",
      level: 2,
      paras: [
        "Total frequency is demand capacity in the model — not “guaranteed clicks”. Count impressions/frequency by groups: commercial, info, adjacent — they have different CTR and CR.",
        "Example: “office rental” next to coworking can be pricier and weaker on conversion than direct service queries — in one pile the budget lies.",
      ],
    },
    {
      title: "CTR, CPC, and budget",
      level: 2,
      paras: [
        "CTR: better from your own / industry fact without rival brands than a “country average”. CPC: from Keyword Planner (cues by impression share zones) or live stats; aiming “always #1” inflates cost a lot.",
        "Demand-coverage budget ≈ impressions × CTR × CPC. Cost grows nonlinearly at scale. Account for seasonality, share of new queries, and attribution when estimating revenue.",
      ],
      lists: [
        {
          intro: "Assumptions at the start:",
          items: [
            "not a goal of “absolute top only”;",
            "the campaign will be set up well;",
            "bid adjustments refine after launch;",
            "a budget range beats one figure.",
          ],
        },
      ],
      notes: [
        {
          title: "Accuracy",
          text: "Semantics quality and grouping matter more than a “pretty” Planner table. After launch, check the forecast against fact and update coefficients.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "SEO traffic forecast",
          href: "/en/blog/prognoz-trafika/",
        },
        {
          label: "Ad metrics",
          href: "/en/blog/metriki-reklamy/",
        },
      ],
    },
  ],
  closing: [
    "A Google Ads search forecast is semantics → cleaning → groups → CTR/CPC → budget with assumptions. Lock a range and a goal before the numbers; Keyword Planner helps estimate order of magnitude — it doesn’t promise the auction result.",
  ],
  related: [
    "prognoz-trafika",
    "klyuchi-google-ads",
    "metriki-reklamy",
    "performance-marketing",
    "roi-marketinga",
    "reklamnyy-kabinet",
  ],
};
