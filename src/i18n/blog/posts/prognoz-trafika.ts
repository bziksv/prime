import type { BlogPost } from "../../../data/blog";

/** EN overlay for prognoz-trafika — same structure as RU JSON. */
export const prognozTrafikaEn: BlogPost = {
  slug: "prognoz-trafika",
  title: "Website traffic forecast: how to estimate SEO potential",
  date: "2019-10-17",
  category: "Internet marketing",
  cover: "/images/blog/prognoz-trafika/cover-en.webp",
  excerpt:
    "How to estimate potential organic traffic: semantics, frequency, realistic positions, and CTR — without the illusion of an “exact” forecast and without swapping prep for ranking in TOP.",
  lead: [
    "Owners want a number: “how many visits will SEO bring”. There’s no exact answer: seasonality, competition, and demand shift. But you can estimate approximate potential — enough not to plan on “maybe”.",
    "Below — the estimation logic: core → frequency → expected positions → CTR by SERP place → sum. Site prep for promotion and the core reaching TOP are different horizons: TOP is planned over 2–6 months after work starts.",
  ],
  faq: [
    {
      q: "Can you forecast traffic exactly?",
      a: "No. There’s a model with assumptions. Use a range and scenarios (cautious / base), not one “guaranteed” figure.",
    },
    {
      q: "How does an SEO forecast differ from Google Ads?",
      a: "In Ads the planner leans on auction and bids. In SEO — on demand, competition, and achievable positions. Different models.",
    },
    {
      q: "Is summing keyword frequencies enough?",
      a: "No. You must account for duplicates/merged queries, click share by position, and that you won’t take TOP across the whole core at once.",
    },
    {
      q: "Why not sum “buy car” and “car buy”?",
      a: "Planners often show the same demand pool. Adding them double-counts.",
    },
    {
      q: "When to forecast — before launch or on a live site?",
      a: "Both. At strategy stage — order of magnitude; on a live site — check against fact and find growth points.",
    },
    {
      q: "Is a forecast the same as time to TOP?",
      a: "No. A forecast is visit potential at certain positions. Time for the core to gather TOP is separate — usually planned 2–6 months.",
    },
  ],
  sections: [
    {
      title: "Why estimate if accuracy isn’t perfect",
      level: 2,
      paras: [
        "An approximate estimate answers practical questions: what traffic order is realistic, where to put content and budget, which clusters to pull first. Without a model it’s easy to promise “a million” or, conversely, underrate a niche.",
        "Unpredictable factors (updates, season, new competitors) remain. So a forecast is a decision cue — not a contractual visit guarantee.",
      ],
      links: [
        {
          label: "Traffic sources",
          href: "/en/blog/istochniki-trafika/",
        },
        {
          label: "Traffic drop",
          href: "/en/blog/snizhenie-trafika/",
        },
      ],
    },
    {
      title: "Four pillars of the model",
      level: 2,
      paras: [
        "A working scheme comes down to four blocks: relevant queries, demand volume for each, expected position (or a position corridor), and CTR for those positions. Then — the sum of expected clicks across the core.",
        "On large sites you may calculate priority sections and extrapolate — accuracy falls, order of magnitude usually holds.",
      ],
      lists: [
        {
          intro: "Inputs:",
          items: [
            "semantic core / clusters;",
            "frequency (no double counting);",
            "achievable position estimate;",
            "CTR by SERP place.",
          ],
        },
      ],
      links: [
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Query frequency",
          href: "/en/blog/chastotnost-zaprosov/",
        },
      ],
    },
    {
      title: "Step-by-step calculation",
      level: 2,
      paras: [
        "Gather queries from demand stats, not “as the owner feels”. Planners and keyword tools give frequency order of magnitude but poorly catch season and sometimes merge close phrasings — don’t sum duplicates.",
        "Estimate competition: what’s in TOP now, how heavy the landings are. That decides whether to assume positions 1–3, TOP-5, or TOP-10 in scenarios. CTR doesn’t fall linearly: the gap between 2nd and 10th is multiplicative, not “a bit less”.",
        "For each cluster: frequency × expected position CTR (or a corridor average) = expected visits. Sum across the core. You get a ceiling under the chosen position scenario — not tomorrow’s analytics fact.",
      ],
      lists: [
        {
          intro: "Step order:",
          items: [
            "core and clusters;",
            "clean frequency;",
            "position scenario;",
            "CTR and click sum;",
            "check against fact (if the site is live).",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          text: "Don’t confuse “potential at TOP-3 across the whole core” with a quarterly plan. Prep is about a month; gathering positions across the core is planned 2–6 months — the TOP share grows gradually.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Competitor analysis",
          href: "/en/blog/analiz-konkurentov/",
        },
        {
          label: "SEO effectiveness",
          href: "/en/blog/effektivnost-seo/",
        },
      ],
    },
    {
      title: "How to read the result",
      level: 2,
      paras: [
        "The model’s output is growth points: which clusters drive most volume, where positions are already close and you need CTR/snippet work, where semantics are thin. Sometimes it’s better to strengthen 20 phrases at the edge of TOP-10 than spray across hundreds of zeros.",
        "Check the forecast against actual traffic and visibility. A big gap is a signal: wrong positions in the model, cannibalization, tech issues, or inflated frequency. Then you fix the model and priorities — not “more budget at random”.",
      ],
      lists: [
        {
          intro: "After the calculation, lock:",
          items: [
            "cautious and base scenarios;",
            "priority clusters;",
            "what blocks fact from catching the model;",
            "work horizon separate from the visit figure.",
          ],
        },
      ],
    },
  ],
  closing: [
    "An SEO traffic forecast is a demand-and-positions model, not a visit promise. Count the core honestly, use realistic CTR and scenarios — and separate potential from time to TOP.",
  ],
  related: [
    "semanticheskoe-yadro",
    "chastotnost-zaprosov",
    "istochniki-trafika",
    "analiz-konkurentov",
    "effektivnost-seo",
    "snizhenie-trafika",
  ],
};
