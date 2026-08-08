import type { BlogPost } from "../../../data/blog";

/** EN overlay for spetsrazmeshchenie-direkt — same structure as RU JSON. */
export const spetsrazmeshchenieDirektEn: BlogPost = {
  slug: "spetsrazmeshchenie-direkt",
  title:
    "Special placement in Yandex Direct: what it was and what to watch now",
  date: "2021-02-19",
  category: "Paid search",
  cover: "/images/blog/spetsrazmeshchenie-direkt/cover-en.webp",
  excerpt:
    "What “special placement” meant in old Yandex Direct, why the term is outdated, and how to think today about ad blocks, bids, and ad quality.",
  lead: [
    "“Special placement” was the historic name for premium ad blocks above Yandex search results. The UI and auction have changed a lot since then.",
    "Below: what the old term meant and how things work now. Position depends on bid, quality, and predicted CTR — not one magic checkbox. Aim for CPA and revenue, not a legendary block name.",
  ],
  faq: [
    {
      q: "Does special placement still exist as a tariff?",
      a: "As a separate “buy special placement” product in the old sense — no. Check current formats and strategies in Direct help.",
    },
    {
      q: "How do I get into the top block?",
      a: "Compete in the auction: relevant keywords, strong ads, a sane bid or strategy, and a good landing page.",
    },
    {
      q: "Does a higher bid always put me on top?",
      a: "Not always. Quality and clickability affect cost and access to impressions.",
    },
    {
      q: "How does this relate to bids?",
      a: "The bid is one lever. See the separate article on Direct bidding.",
    },
    {
      q: "Do I need a separate budget “for special placement”?",
      a: "Plan budget for goals and CPA — not an outdated block name.",
    },
    {
      q: "Can I guarantee a top impression?",
      a: "No. Auction outcomes shift with the query, competitors, ad quality, and campaign limits.",
    },
    {
      q: "What should I show the client instead of position?",
      a: "Spend, conversions, CPA, lead quality, and revenue — business results, not “we’re in special placement.”",
    },
    {
      q: "Is lower on the page always worse?",
      a: "Not necessarily. Sometimes the click is cheaper and leads are better. Count economics, not only block height.",
    },
  ],
  sections: [
    {
      title: "What people remember as “special placement”",
      level: 2,
      paras: [
        "It used to mean noticeable ads above organic. Hence the habit “I want special placement” = “I want to be on top.”",
        "Old guides often describe a UI and math that no longer exist. The term is handy when talking to a client from the 2010s, but you set campaigns from current reports and Yandex help.",
      ],
      lists: [
        {
          intro: "Important to understand:",
          items: [
            "block names changed",
            "the auction got more complex",
            "there’s no forever #1 guarantee",
            "old account screenshots aren’t instructions",
          ],
        },
      ],
    },
    {
      title: "How impressions work now",
      level: 2,
      paras: [
        "Position and premium slots are auction outcomes: bid or strategy, predicted CTR, ad quality, and relevance. The system picks a set of ads for the query — it doesn’t sell a special package like old guides claimed.",
        "Average position and impression share reports help as diagnostics, not as KPIs by themselves. A drop in height may be a budget cap, moderation, or demand shift — not only “we bid too low.”",
      ],
      lists: [
        {
          intro: "What you actually adjust:",
          items: [
            "keywords and negatives",
            "ad copy and extensions",
            "landing page",
            "bid or auto strategy",
            "geo, schedule, devices",
          ],
        },
      ],
      links: [
        {
          label: "Bids in Yandex Direct",
          href: "/en/blog/stavki-direkt/",
        },
        {
          label: "Ads account",
          href: "/en/blog/reklamnyy-kabinet/",
        },
      ],
    },
    {
      title: "Levers instead of chasing a name",
      level: 2,
      paras: [
        "Treat impression stats as a consequence of settings. Improve ads and negatives; count click economics. One bid doesn’t fit every phrase: brand, hot, and research demand behave differently.",
        "Before raising the bid for the top, make sure the landing meets the query expectation: offer, price or next step, working form. Otherwise an expensive top only accelerates burn.",
      ],
      lists: [
        {
          intro: "Levers:",
          items: [
            "bid / auto strategy",
            "ad and extension quality",
            "relevant landing",
            "geo and schedule",
            "budget without leak into irrelevance",
          ],
        },
      ],
      links: [
        {
          label: "Google Ads keywords (list logic)",
          href: "/en/blog/klyuchi-google-ads/",
        },
      ],
    },
    {
      title: "Strategy: goals → structure → economics",
      level: 2,
      paras: [
        "Goals → keywords → ads → landing → analytics. The top block makes sense if it pays back. Sometimes a lower, cheaper impression yields better ROI.",
        "Split campaigns by demand meaning so you see what brings leads. Blindly copying a competitor’s bids is a path to their economics — not your margin.",
      ],
      lists: [
        {
          intro: "Mistakes from old guides:",
          items: [
            "chasing “special” at any cost",
            "ignoring conversions",
            "copying a competitor’s bids",
            "measuring success only by average position",
          ],
        },
      ],
      tables: [
        {
          caption: "What to measure instead of “we’re in special placement”",
          headers: ["Metric", "Why"],
          rows: [
            ["CPA / CPO", "Cost of the target action"],
            ["Lead quality", "Not all leads are equal"],
            ["Brand vs generic share", "Different economics"],
            ["Landing conversion", "Top is useless with a leaky landing"],
          ],
        },
      ],
    },
    {
      title: "How to assess search visibility",
      level: 2,
      paras: [
        "Look at slices by device, time, queries, and impression share (if available in the account). A sharp visibility drop often ties to budget limits, moderation, geo edits, or broken conversion tracking — not only the bid.",
        "Compare periods with seasonality and promos in mind. One good week doesn’t prove an optimum; one dip isn’t a reason to rewrite every campaign in a day.",
      ],
      lists: [
        {
          intro: "Before concluding, check:",
          items: [
            "ad and extension status",
            "budget remaining and daily caps",
            "geo and schedule",
            "goal correctness in Metrika and Direct",
          ],
        },
      ],
      links: [
        {
          label: "Goals in Yandex Metrika",
          href: "/en/blog/metrika-tseli/",
        },
      ],
    },
    {
      title: "Campaign optimization plan",
      level: 2,
      paras: [
        "First goals and structure, then search terms and negatives, then copy and landings, and only then aggressive bids. Log every change.",
        "After enough data, keep decisions that improve CPA or revenue — not ones that only restore the familiar feeling of “we’re on top again.”",
      ],
      lists: [
        {
          intro: "Sequence:",
          items: [
            "lock in goals and an acceptable CPA",
            "review search terms",
            "fix ads and landings",
            "adjust strategy from data",
            "revisit the top only through economics",
          ],
        },
      ],
    },
    {
      title: "How to talk to the client",
      level: 2,
      paras: [
        "A client from the special-placement era often wants a first-place guarantee. Honest answer: auction, competitors, and quality shift daily; we sell outcomes (leads, sales), not a block label.",
        "Show a report: spend, conversions, CPA, lead examples. If the top is expensive and doesn’t pay — argue for a lower bid or a better offer, not “we must be in special.”",
      ],
      lists: [
        {
          intro: "In the client report:",
          items: [
            "period goals",
            "numbers and lead quality",
            "what you changed and why",
            "what you’ll check next week",
          ],
        },
      ],
      links: [
        {
          label: "Client report",
          href: "/en/blog/otchet-klientu/",
        },
      ],
      notes: [
        {
          title: "SEO alongside",
          kind: "tip",
          text: "Paid search covers demand fast. Organic for a core is a separate horizon: prep around a month; page-one share of the core is typically planned for two to six months of work after start.",
        },
      ],
    },
  ],
  related: [
    "stavki-direkt",
    "reklamnyy-kabinet",
    "klyuchi-google-ads",
    "metrika-tseli",
    "otchet-klientu",
    "tekst-lendinga",
  ],
};
