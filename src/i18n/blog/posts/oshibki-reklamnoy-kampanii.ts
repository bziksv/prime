import type { BlogPost } from "../../../data/blog";

/** EN overlay for oshibki-reklamnoy-kampanii — same structure as RU JSON. */
export const oshibkiReklamnoyKampaniiEn: BlogPost = {
  slug: "oshibki-reklamnoy-kampanii",
  title: "10 mistakes when running a paid search campaign",
  date: "2018-08-06",
  category: "Internet marketing",
  cover: "/images/blog/oshibki-reklamnoy-kampanii/cover-en.webp",
  excerpt:
    "Paid search with no demand, no competitor review, unrealistic budget, limits, weak keywords, irrelevant ads, geo, extensions, no ongoing management, and mixing Search with Display.",
  lead: [
    "Typical paid-search mistakes burn budget before you even get clean stats: advertising what nobody searches, keywords “by gut feel”, one account setup for Search and Display at once.",
    "Below — ten misses from audit practice and how to avoid them. Google Ads / similar UIs change; the checklist meaning stays. Budget figures and a “normal” test window depend on the niche — a guide, not dogma.",
  ],
  faq: [
    {
      q: "No search demand — what then?",
      a: "Don’t burn search ads on zero-query topics. Look at display, social, content, and interest networks — if the product is new or niche.",
    },
    {
      q: "How much do you need for a test?",
      a: "Often weeks to a couple of months with a sane daily cap to see stats. “Max leads for pennies from day one” is unrealistic in a competitive niche.",
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
      a: "Yes where available: they raise visibility and add info. Check current types in the account.",
    },
    {
      q: "Can you “set and forget”?",
      a: "No. You need negatives, cleaning off-target traffic, creative tests, and limit control — or budget leaks.",
    },
  ],
  sections: [
    {
      title: "Demand, competitors, and budget",
      level: 2,
      paras: [
        "Launching a product with no search demand is a waste: there’s no semantics. For new products, reach formats and networks often work better than “hot” search alone.",
        "Without reviewing competitor ads and offers it’s easy to lose on CPC and promise. Watch the SERP, USP, and landing — not only the bid.",
        "Inflated expectations on a tiny budget (“many leads at once in a competitive niche”) kill the test. Paid search needs regular spend and 1–several weeks/months to learn — not a one-off payment. Daily campaign caps save you from burning the whole budget in a day.",
      ],
      lists: [
        {
          intro: "Before you start:",
          items: [
            "are there real queries;",
            "what competitors promise;",
            "what daily cap and test KPI;",
            "landing handles mobile traffic.",
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
        "An irrelevant ad for the query drops quality and price. Keep the chain query → ad → landing.",
        "Broken geography: impressions where you don’t deliver/serve, or a narrow city when nationwide shipping makes sense. Set geo to logistics and margin.",
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
        "Unused extensions and extra formats are missed visibility. Turn on what’s current in the account (sitelinks, callouts, images, etc.).",
        "“Set and forget” is a mistake: without ongoing work, off-target clicks grow and ads go stale.",
        "Different strategies for Search and Display: don’t copy one setup onto both channels. Split campaigns and KPIs.",
      ],
      notes: [
        {
          title: "Link to an audit",
          text: "If chaos has already piled up, it’s easier to audit structure and economics than to “tweak” a bad launch.",
          kind: "tip",
        },
      ],
    },
  ],
  closing: [
    "Most paid-search fails aren’t “expensive clicks” — they’re a start without demand, budget, and relevance plus no ongoing management. Close these ten points before scaling bids.",
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
