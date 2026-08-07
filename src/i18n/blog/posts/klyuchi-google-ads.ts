import type { BlogPost } from "../../../data/blog";

/** EN overlay for klyuchi-google-ads — same structure as RU JSON. */
export const klyuchiGoogleAdsEn: BlogPost = {
  slug: "klyuchi-google-ads",
  title: "Keyword research in Google Ads",
  date: "2021-03-09",
  category: "Paid search",
  cover: "/images/blog/klyuchi-google-ads/cover-en.webp",
  excerpt:
    "How to pick keywords for Google Ads (formerly AdWords): match types, planner stats, and intent checks — without mixing them up with an SEO keyword set.",
  lead: [
    "In Google Ads, keywords decide when an ad shows. Planner and reports help estimate demand, but you build the final list around the offer, click economics, and negatives.",
    "Research logic, match types, landings, and post-launch cleanup matter more than dumping Planner exports into one ad group. The Google Ads UI changes; check current menu names in the account. For some markets, also check product availability and workable measurement alternatives.",
  ],
  faq: [
    {
      q: "Are AdWords and Google Ads the same?",
      a: "Yes — the product was renamed. Older “AdWords” articles mean the same Google ads account.",
    },
    {
      q: "Are Ads keywords the same as an SEO keyword set?",
      a: "They overlap, but aren’t equal. Ads care about bid, negatives, and commercial intent; SEO cares about landings, content, and rankings over time.",
    },
    {
      q: "Where do stats come from?",
      a: "Keyword Planner and campaign reports. Planner figures are estimates — not a guarantee of impressions or CPA.",
    },
    {
      q: "Do you need broad match?",
      a: "Carefully: more reach and more junk. Exact and phrase are often easier to control at the start until analytics and negatives are strong.",
    },
    {
      q: "What about negative keywords?",
      a: "Required — without them budget leaks to irrelevant impressions and clicks. Grow the list from the search terms report.",
    },
    {
      q: "How do you read query intent?",
      a: "Look at the SERP and wording. “How to choose” usually needs a different page and ad than “order with delivery”.",
    },
    {
      q: "How many keywords per ad group?",
      a: "As many as honestly share one intent and one ad. Dozens of mixed phrases in one group weaken Quality Score and blur the copy.",
    },
    {
      q: "Can you copy a competitor’s keyword set?",
      a: "As a draft — yes; as a final list — no. Their keywords don’t know your margin, geo, or landings; without cleanup you’ll burn budget.",
    },
  ],
  sections: [
    {
      title: "Keyword list concept",
      level: 2,
      paras: [
        "Start from services, products, and customer language — how they search, not how you name the product internally. Add synonyms and commercial modifiers: “price”, “order”, “with delivery”, “cheap” — and seed negatives for informational and off-offer demand.",
        "Don’t dump keywords into one group just because they share a word. Group phrases with the same intent and one fitting landing. Otherwise the ad says nothing and the page doesn’t match the click.",
      ],
      lists: [
        {
          intro: "Keyword layers:",
          items: [
            "offer core;",
            "niche synonyms and jargon;",
            "geo, if needed;",
            "modifier tails (lead time, material, segment);",
            "negatives from search terms.",
          ],
        },
      ],
      links: [
        {
          label: "Ads account basics",
          href: "/en/blog/reklamnyy-kabinet/",
        },
        {
          label: "Keyword research (SEO)",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Match types and ad group structure",
      level: 2,
      paras: [
        "Match type controls how widely the system can map a query to a keyword. Wider reach means tighter search-term control and negatives — or you pay for “nearby”, not “the thing”.",
        "At the start, a clear structure helps: one group — one need, a tight keyword set, a relevant ad, and a fitting landing. When data accumulates, expand carefully where economics already work.",
      ],
      lists: [
        {
          intro: "For each group lock in:",
          items: [
            "user intent;",
            "geography;",
            "negatives;",
            "landing page;",
            "conversion goal and CPA target.",
          ],
        },
      ],
      tables: [
        {
          caption: "Reach vs control (simplified)",
          headers: ["Approach", "Upside", "Risk"],
          rows: [
            ["Exact / phrase", "Easier click quality", "You may under-reach"],
            ["Broad without negatives", "Fast volume", "Junk and expensive CPA"],
            ["Broad + strict query review", "Scale with control", "Needs report discipline"],
          ],
        },
      ],
    },
    {
      title: "Planner stats and intent checks",
      level: 2,
      paras: [
        "Planner frequency and competition figures are a draft compass, not a verdict. After launch, the main decision source is the search terms report: real wording, wasted impressions, and negative candidates.",
        "Stats don’t guarantee sales. Cross-check with margin, geo, seasonality, and whether the landing can honestly answer the query. High volume at zero margin isn’t a “golden keyword”.",
      ],
      lists: [
        {
          intro: "Practice before scale:",
          items: [
            "test with a small budget;",
            "weekly search-term review;",
            "keyword → ad → landing chain;",
            "don’t inflate groups without structure.",
          ],
        },
      ],
      links: [
        {
          label: "Query frequency",
          href: "/en/blog/chastotnost-zaprosov/",
        },
      ],
    },
    {
      title: "Negatives and the search terms report",
      level: 2,
      paras: [
        "Negatives are the filter without which broad — and even “medium” — keywords burn spend. Keep lists at campaign and group level: shared (jobs, free, DIY — if that’s not your offer) and niche-specific.",
        "Weekly (or more often at high spend), review search terms: what to add as keywords, what to negate, which ads and URLs missed the click. That’s performance routine — not a one-time launch setting.",
      ],
      lists: [
        {
          intro: "Typical junk for negatives (tune to niche):",
          items: [
            "informational “what is / DIY”;",
            "competitor brands if you don’t want interception;",
            "jobs and training if you sell a service;",
            "free / download — if you have no freemium.",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Over-aggressive negatives cut useful long-tail. Gather data first, then tighten — especially on phrases that already convert.",
        },
      ],
    },
    {
      title: "Tie-in with ad and landing",
      level: 2,
      paras: [
        "A keyword without a relevant ad and page is wasted spend. Headline and copy should promise what the person searched; the landing should close that offer — not dump them on the catalog home.",
        "Different intents need different URLs or at least different blocks/anchors. Sending all demand to one “about everything” sheet is usually worse than several narrow landings.",
      ],
      lists: [
        {
          intro: "Check before approving a group:",
          items: [
            "the keyword is audible in the ad;",
            "URL loads and is fast on mobile;",
            "CTA and form are visible without a quest;",
            "no clash with price/terms from the ad.",
          ],
        },
      ],
      links: [
        {
          label: "Landing page copy",
          href: "/en/blog/tekst-lendinga/",
        },
        {
          label: "Conversion rate optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "Common mistakes",
      level: 2,
      paras: [
        "Classics: one giant ungrouped list; ignoring negatives; “everything” keywords on one landing; copying an SEO keyword set without ad cleanup; bids without conversion tracking.",
        "Don’t twist bids and keywords every day without data. First make sure analytics goals fire and sales sees lead quality — or you’ll optimize a pretty CTR.",
      ],
      lists: [
        {
          intro: "Avoid:",
          items: [
            "bids without conversion analytics;",
            "broad match without query control;",
            "ads that don’t match the keyword;",
            "mixing brand and generic demand without separate campaigns.",
          ],
        },
      ],
      links: [
        {
          label: "Bidding in Yandex Direct",
          href: "/en/blog/stavki-direkt/",
        },
      ],
    },
    {
      title: "Optimization after launch",
      level: 2,
      paras: [
        "Launch a test with a budget that can collect stats, and review reports on a schedule. Add negatives, refine groups, and improve the page for observed reasons — not “everything at once after a bad day”.",
        "Judge the campaign by conversions and their quality — not clicks or average position. If leads don’t fit sales, the issue may be query, offer, or user path — keywords are only one lever.",
      ],
      lists: [
        {
          intro: "Weekly control:",
          items: [
            "search terms;",
            "spend, CPA, and conversion count;",
            "irrelevant share;",
            "ad–landing fit;",
            "what to scale, what to cut.",
          ],
        },
      ],
      notes: [
        {
          title: "SEO vs Ads",
          kind: "tip",
          text: "Ads give a fast demand test. Organic for a core grows separately: site prep — roughly weeks to a month; rankings planned 2–6 months of work.",
        },
      ],
    },
  ],
  related: [
    "reklamnyy-kabinet",
    "chastotnost-zaprosov",
    "semanticheskoe-yadro",
    "tekst-lendinga",
    "stavki-direkt",
    "optimizatsiya-konversii",
  ],
};
