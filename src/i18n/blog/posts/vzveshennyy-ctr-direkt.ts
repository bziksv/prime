import type { BlogPost } from "../../../data/blog";

/** EN overlay for vzveshennyy-ctr-direkt — same structure as RU JSON. */
export const vzveshennyyCtrDirektEn: BlogPost = {
  slug: "vzveshennyy-ctr-direkt",
  title: "Weighted CTR in Yandex Direct: why compare creatives differently",
  date: "2018-07-05",
  category: "Contextual advertising",
  cover: "/images/blog/vzveshennyy-ctr-direkt/cover-en.webp",
  excerpt:
    "What weighted CTR, weighted impressions, and traffic volume mean in Direct reports — how to compare ads on different positions without raw CTR lying to you.",
  lead: [
    "Raw CTR treats clicks and impressions the same even if one ad sat on a “rich” position and another sat lower. Direct’s Report Wizard added (and kept) metrics that account for traffic volume: weighted impressions and weighted CTR (wCTR).",
    "Below — what traffic volume means, how to read wCTR when comparing creatives, and why ROI still beats clickability. The “65 / 75 / 85 / 100” coefficients from 2018 guides illustrate the logic, not a live weight table: check columns in the current Report Wizard.",
  ],
  faq: [
    {
      q: "How is wCTR better than raw CTR?",
      a: "It normalizes impressions by position/traffic-volume “value.” Easier to compare creatives that ran in different places.",
    },
    {
      q: "Does wCTR replace CPA?",
      a: "No. wCTR is clickability with a correction. Money and leads come from conversions and goal cost.",
    },
    {
      q: "What is traffic volume?",
      a: "An estimate of how much relative traffic a position/block delivers. Raising a bid can lift volume — potential, not a lead guarantee.",
    },
    {
      q: "Is it search-only?",
      a: "Weighting helps most in search with different positions. In networks also compare placements and show conditions.",
    },
    {
      q: "Where do you see the metrics?",
      a: "In Direct’s Report Wizard / report builder — add the columns. Names may have changed — look for weighted CTR and related metrics.",
    },
  ],
  sections: [
    {
      title: "Why raw CTR lies",
      level: 2,
      paras: [
        "An ad on a top slot gets more attention and often more clicks with the same text “quality.” CTR rises from position alone, not because the creative beats a lower rival.",
        "If you compare two formats or groups with different average traffic volume, the raw-CTR “winner” may be weaker on meaning.",
      ],
      links: [
        {
          label: "Ad metrics",
          href: "/en/blog/metriki-reklamy/",
        },
        {
          label: "Premium placement in Direct",
          href: "/en/blog/spetsrazmeshchenie-direkt/",
        },
      ],
    },
    {
      title: "Traffic volume and weighted impressions",
      level: 2,
      paras: [
        "Traffic volume is a coefficient for how “fat” a position is vs the max. Average won volume shows potential: room to grow via bid/quality, or you’re near the ceiling.",
        "Weighted impressions fold that volume in: a show on a more “expensive” slot weighs more. That levels the clickability comparison base.",
      ],
      notes: [
        {
          title: "Don’t confuse with business results",
          text: "High traffic volume without conversions means expensive impressions. Tie it to Metrika goals.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Bids in Direct",
          href: "/en/blog/stavki-direkt/",
        },
      ],
    },
    {
      title: "How the wCTR idea works",
      level: 2,
      paras: [
        "Simply: clicks are related to weighted impressions, not raw ones. Historical examples used weights like 100 on top and less below — so an ad with less “position traffic” but a strong response wouldn’t lose visually in the table.",
        "In the current cabinet the formula and column set may differ; the normalization idea matters. Exact definitions are in Yandex Help for reports.",
      ],
      tables: [
        {
          caption: "Comparison logic (schema, not a weight price list)",
          headers: ["Situation", "Raw CTR", "wCTR logic"],
          rows: [
            [
              "Top, lots of attention",
              "Often higher",
              "Normalization removes the position bonus",
            ],
            [
              "Lower, less traffic",
              "Often lower",
              "Can win if people click more willingly",
            ],
            [
              "Different formats",
              "Hard to compare head-on",
              "Use wCTR + conversions",
            ],
          ],
        },
      ],
    },
    {
      title: "When to use wCTR in practice",
      level: 2,
      paras: [
        "A/B of texts and sitelinks, comparing groups on overlapping queries, judging “worth pushing the bid for volume.” Final decisions still need conversions, CPA, and lead quality.",
        "Don’t optimize the account for wCTR alone: you can grow clickability and waste budget on cheap curious clicks.",
      ],
      lists: [
        {
          intro: "Working order:",
          items: [
            "build a report by ads/groups;",
            "add CTR, wCTR, spend, conversions;",
            "cut small stats;",
            "keep 1–2 copy hypotheses;",
            "check the landing and CPA.",
          ],
        },
      ],
      links: [
        {
          label: "Ad A/B tests",
          href: "/en/blog/ab-testy-reklamy/",
        },
        {
          label: "Ad campaign audit",
          href: "/en/blog/audit-reklamnoy-kampanii/",
        },
      ],
    },
    {
      title: "Linking to ROI and reports",
      level: 2,
      paras: [
        "wCTR answers: “how well the ad hooks, adjusted for place.” ROI/ROMI and CPA answer: “is it worth the money.” Use both layers.",
        "In the Report Wizard combine slices: campaign, group, ad, show condition. Fix a period with comparable data volume.",
      ],
      links: [
        {
          label: "Yandex Direct interface",
          href: "/en/blog/interfeys-yandeks-direkt/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Weighted CTR exists so you don’t crown a creative only for a top position. Traffic volume is about show potential, not profit.",
        "Check column names in current Direct and always take the conclusion to conversions.",
      ],
    },
  ],
  closing: [
    "Add weighted CTR next to raw CTR and conversions in your Direct report — and compare creatives on different positions more fairly than by raw clickability.",
  ],
  related: [
    "metriki-reklamy",
    "stavki-direkt",
    "spetsrazmeshchenie-direkt",
    "ab-testy-reklamy",
    "audit-reklamnoy-kampanii",
    "interfeys-yandeks-direkt",
  ],
};
