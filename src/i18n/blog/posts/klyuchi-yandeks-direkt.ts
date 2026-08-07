import type { BlogPost } from "../../../data/blog";

/** EN overlay for klyuchi-yandeks-direkt — same structure as RU JSON. */
export const klyuchiYandeksDirektEn: BlogPost = {
  slug: "klyuchi-yandeks-direkt",
  title: "How many keywords you need in Yandex Direct",
  date: "2020-12-02",
  category: "Paid search",
  cover: "/images/blog/klyuchi-yandeks-direkt/cover-en.webp",
  excerpt:
    "How to size keyword coverage for Search and the Yandex Advertising Network (YAN) in Direct: campaign goal, assortment, ad-group limits, and profitability — without a “universal keyword count” or mixing it up with SEO.",
  lead: [
    "There’s no universal “right number” of keywords in Yandex Direct: volume depends on goal, assortment, region, and channel (Search or YAN). Few phrases ≠ automatically cheaper; many phrases ≠ automatically more profitable.",
    "Base keyword collection on the offer and analytics; Search and YAN need different lists — don’t bloat a campaign without data. Negatives and bid strategies live in related articles. Account limits (phrases per group, length) — check Help: they’ve changed.",
  ],
  faq: [
    {
      q: "Is there a “N keywords per store” norm?",
      a: "No. A wide catalog needs more groups and phrases; a narrow service — a compact set. Watch demand coverage and KPIs, not a row counter.",
    },
    {
      q: "Fewer keywords = lower spend?",
      a: "Not necessarily. A narrow set can cost more per click and leave demand to competitors. Profitability matters — not “saving on count.”",
    },
    {
      q: "How many phrases in one group?",
      a: "Keep the group thematically tight. Technical account limits exist — check current numbers in Direct Help, not 2020 guides.",
    },
    {
      q: "Same keyword set for Search and YAN?",
      a: "No. Search cares about query wording; YAN uses topical, often broader signals matched to site content.",
    },
    {
      q: "Bid on competitor brands?",
      a: "Possible, but carefully: higher CPC, questionable clicks, reputation and legal risk. Track separately from your own brand.",
    },
    {
      q: "Is this about an SEO keyword set?",
      a: "Demand meaning overlaps partly, but Direct is paid impressions with negatives, grouping, and bids. Don’t confuse it with organic.",
    },
    {
      q: "Where should a beginner start?",
      a: "With a goal (lead/sale), a narrow commercial set, negatives, and separate Search/YAN campaigns — then expand from stats.",
    },
  ],
  sections: [
    {
      title: "Goal first, keyword volume second",
      level: 2,
      paras: [
        "Advertising a full e-commerce catalog means broad semantics and many groups by category/SKU. Pushing a narrow service or your brand — a compact phrase set.",
        "The goal also drives format mix: Search, YAN, different ad types. Without a goal, “collect more keywords” only makes management harder.",
      ],
      lists: [
        {
          intro: "Volume is driven by:",
          items: [
            "assortment width and number of landings;",
            "region and delivery geography;",
            "team experience (a wide set is harder to prune);",
            "budget and willingness to test;",
            "channel: Search vs YAN.",
          ],
        },
      ],
    },
    {
      title: "Search: how to think about count",
      level: 2,
      paras: [
        "In Search the user writes the query: account for synonyms, “specialist vs service,” regional modifiers, and cut irrelevance with negatives.",
        "High-volume generic phrases without region and qualifiers are often expensive and broad. Narrow commercial and local queries are easier to tie to the offer.",
        "Set budget with campaign/weekly caps and watch KPIs (CPA, ROAS/DRR) — not “how many keywords fit.” Minimum top-up thresholds in the UI have changed — use the account as the guide.",
      ],
      notes: [
        {
          title: "Don’t confuse with SEO",
          text: "Keywords in Direct don’t “lift the site in organic by themselves.” This is paid demand management.",
        },
      ],
      links: [
        {
          label: "Negative keywords in Direct",
          href: "/en/blog/minus-slova-direkt/",
        },
        {
          label: "Semantic keyword set",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "YAN: a different keyword set",
      level: 2,
      paras: [
        "In the Yandex Advertising Network, impressions tie to topics and interests around site content. Shorter topical phrases often work better than long “buy X in city cheap.”",
        "Take overlapping audience themes (not only direct competitors), test expansion, and cut placements/conditions from the stats.",
        "One phrase is too little for an experiment; bloating the set with no reports is also a mistake. Track by groups and conversions.",
      ],
      links: [
        {
          label: "YAN and Metrica",
          href: "/en/blog/rsya-metrika/",
        },
      ],
    },
    {
      title: "Practice and control",
      level: 2,
      paras: [
        "Group phrases by theme and landing. Watch group limits in Direct Help.",
        "Regularly review search terms, negative the junk, and strengthen what drives target actions. Cut or shrink budget on unprofitable combinations.",
        "Experience matters: a wide set without analytics burns money faster than it helps.",
      ],
      lists: [
        {
          intro: "Remember:",
          items: [
            "volume = goal + assortment — not a “magic N”;",
            "Search and YAN — different set logic;",
            "profitability beats saving on phrase count;",
            "account limits — from current Help;",
            "negatives and reports are required.",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Direct strategies",
          href: "/en/blog/strategii-yandeks-direkt/",
        },
      ],
    },
  ],
  closing: [
    "Build a set for one goal and one landing, run a narrow Search test, review queries in a week, then expand — clearer than loading “every niche keyword” on day one.",
  ],
  related: [
    "strategii-yandeks-direkt",
    "minus-slova-direkt",
    "rsya-metrika",
    "stavki-direkt",
    "semanticheskoe-yadro",
    "kontekst-i-seo",
  ],
};
