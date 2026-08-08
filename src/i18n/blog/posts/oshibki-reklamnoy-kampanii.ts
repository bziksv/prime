import type { BlogPost } from "../../../data/blog";

/** EN overlay for oshibki-reklamnoy-kampanii — same structure as RU JSON. */
export const oshibkiReklamnoyKampaniiEn: BlogPost = {
  slug: "oshibki-reklamnoy-kampanii",
  title: "10 mistakes when running a paid search campaign",
  date: "2018-08-06",
  category: "Digital marketing",
  cover: "/images/blog/oshibki-reklamnoy-kampanii/cover-en.webp",
  excerpt:
    "Paid search with no demand, no competitor review, an unrealistic budget, weak limits, thin keywords, irrelevant ads, bad geo, unused extensions, no ongoing management, and mixing Search with Display.",
  lead: [
    "Typical paid-search mistakes burn budget before clean stats arrive: advertising what nobody searches, keywords by gut feel, one setup for Search and Display at once.",
    "Below: ten misses from audit practice and how to avoid them. Direct and Google Ads UIs change; the checklist logic stays. Budget figures and “normal” test length depend on the niche — a guide, not dogma.",
  ],
  faq: [
    {
      q: "No search demand — what then?",
      a: "Don’t burn search ads on zero-volume queries. Look at display, social, content, and interest networks if the product is new or niche.",
    },
    {
      q: "How much do you need for a test?",
      a: "Often weeks to a couple of months with a sane daily cap so stats can form. “Max leads for pennies from day one” is unrealistic in a competitive niche.",
    },
    {
      q: "One keyword — one ad?",
      a: "Aim for high relevance between cluster and ad. The rigid “exactly one keyword” formula is outdated in smart campaigns, but the meaning is the same: don’t dump everything in one pile.",
    },
    {
      q: "Search and Display together?",
      a: "Usually split: different semantics, creatives, bids, and KPIs. Mixing breaks optimization.",
    },
    {
      q: "Do you need ad extensions?",
      a: "Yes where available: they raise visibility and add detail. Check current types in the account.",
    },
    {
      q: "Can you set ads and forget them?",
      a: "No. You need negatives, off-target cleanup, creative tests, and limit control — or budget leaks.",
    },
  ],
  sections: [
    {
      title: "Demand, competitors, and budget",
      level: 2,
      paras: [
        "Launching a product with no search demand is a waste: there is no keyword set to buy. For new products, reach formats and networks often work better than hot search alone.",
        "Without reviewing competitor ads and offers it’s easy to lose on CPC and promise. Watch the results, USP, and landing — not only the bid.",
        "Inflated expectations on a tiny budget (“many leads at once in a competitive niche”) kill the test. Paid search needs regular spend and one to several weeks or months to learn — not a one-off payment. Daily campaign caps keep you from burning the whole budget in a day.",
      ],
      lists: [
        {
          intro: "Before you start:",
          items: [
            "are there real queries",
            "what competitors promise",
            "what daily cap and test KPI",
            "landing handles mobile traffic",
          ],
        },
      ],
      links: [
        {
          label: "Ad campaign audit",
          href: "/en/blog/audit-reklamnoy-kampanii/",
        },
        {
          label: "Google Ads traffic forecast",
          href: "/en/blog/prognoz-trafika-google-ads/",
        },
      ],
    },
    {
      title: "Keywords, ads, and geo",
      level: 2,
      paras: [
        "Weak semantics: jumping straight to head terms and near-topics without negatives. Start with tighter clusters, gather stats, expand on purpose.",
        "An irrelevant ad for the query drops quality and raises cost. Keep the chain query → ad → landing.",
        "Broken geography: impressions where you don’t deliver or serve, or a narrow city when nationwide shipping makes sense. Set geo to logistics and margin.",
      ],
      links: [
        {
          label: "Ad metrics",
          href: "/en/blog/metriki-reklamy/",
        },
        {
          label: "ROAS",
          href: "/en/blog/roas/",
        },
      ],
    },
    {
      title: "Management, extensions, and strategies",
      level: 2,
      paras: [
        "Unused extensions and extra formats are missed visibility. Turn on what’s current in the account — sitelinks, callouts, images, and similar.",
        "“Set and forget” is a mistake: without ongoing work, off-target clicks grow and ads go stale.",
        "Different strategies for Search and Display: don’t copy one setup onto both channels. Split campaigns and KPIs.",
      ],
      notes: [
        {
          title: "Link to an audit",
          kind: "tip",
          text: "If chaos has already piled up, it’s easier to audit structure and economics than to tweak a bad launch.",
        },
      ],
    },
  ],
  closing: [
    "Most paid-search fails aren’t “expensive clicks” — they’re a start without demand, budget, and relevance, plus no ongoing management. Close these ten points before scaling bids.",
  ],
  related: [
    "audit-reklamnoy-kampanii",
    "metriki-reklamy",
    "roas",
    "prognoz-trafika-google-ads",
    "performance-marketing",
    "trafik-bez-lidov",
  ],
};
