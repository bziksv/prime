import type { BlogPost } from "../../../data/blog";

/** EN overlay for statistika-google-prodazhi — same structure as RU JSON. */
export const statistikaGoogleProdazhiEn: BlogPost = {
  slug: "statistika-google-prodazhi",
  title: "Google stats for sales: Keyword Planner, Trends, and Analytics",
  date: "2020-07-30",
  category: "Analytics",
  cover: "/images/blog/statistika-google-prodazhi/cover-en.webp",
  excerpt:
    "How to use Keyword Planner, Google Trends, and Analytics to gauge demand, seasonality, and channel performance — for SEO, ads, and sales forecasting.",
  lead: [
    "Search and analytics numbers don’t “sell by themselves,” but they help with three jobs: what to push on the site, when to boost ads, and which queries actually lead to money. In Google’s stack that usually means Keyword Planner, Trends, and Analytics (today’s GA4 logic).",
    "We cover why search stats matter in marketing, how to read Planner and Trends without treating “exact” impression counts as gospel, where Analytics fits, and when third-party collectors help. For an RU audience, Yandex Wordstat stays a required parallel track next to Google — see also the core and frequency articles.",
  ],
  faq: [
    {
      q: "Does Keyword Planner replace Wordstat?",
      a: "No. Planner helps for Google Ads and Google demand estimates. For Yandex, use Wordstat. An RU project usually needs both.",
    },
    {
      q: "Do I need an active ad budget?",
      a: "Full Planner features are easier with a Google Ads account. Without campaigns some estimates are coarser — allow for error and cross-check other sources.",
    },
    {
      q: "Does Trends show absolute frequency?",
      a: "No. It’s relative interest (index up to 100) over time and regions. For volumes use Planner/Wordstat and your own data.",
    },
    {
      q: "Can I launch a new product from Trends alone?",
      a: "Trends shows rising interest in a theme or category. For a new SKU with no queries, check adjacent categories, then your sales and brand search.",
    },
    {
      q: "How is this different from a GA store deep-dive?",
      a: "Here the focus is demand and planning (Planner + Trends + Analytics’ role). Ecommerce funnel behavior is in the separate Google Analytics article.",
    },
    {
      q: "How accurate are Planner numbers?",
      a: "Estimates and ranges, often broad match. Don’t build a financial model on one cell — cross-check ad reports and organic.",
    },
    {
      q: "Are third-party tools required?",
      a: "No. Useful for export and clustering. Paid licenses pay off with regular core work — not “for one spreadsheet.”",
    },
    {
      q: "How does this tie to sales?",
      a: "Search demand → site and ad themes → traffic → conversions in Analytics/CRM. Without “query → landing → goal,” stats stay a picture.",
    },
  ],
  sections: [
    {
      title: "Why marketing needs search stats",
      level: 2,
      paras: [
        "Three practical uses: gather and prioritize site semantics, prep a Google Ads start, gauge seasonality and regional demand before buying or promos. Without numbers it’s easy to spend on a pretty theme with no demand.",
        "Example: a bike-accessories shop. Planner suggests volumes and related wording, Trends shows which months interest rises, Analytics shows which queries and channels already fill the cart. Decisions feed the content plan, bids, and assortment.",
      ],
      lists: [
        {
          intro: "Three data tracks:",
          items: [
            "Keyword Planner — key ideas and Ads demand/competition estimates;",
            "Trends — interest over time and by region;",
            "Analytics — what actually hit the site and converted.",
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
      title: "Google Keyword Planner: demand and the core",
      level: 2,
      paras: [
        "In Google Ads open Keyword Planner: ideas by product/site and forecasts for a keyword list. Watch average impressions, competition, bid guides, and wording variants. Numbers are planning estimates — not gospel down to the last digit.",
        "Set geo and language. Negatives and filters cut junk (“used”, competitor brands). Remember match types: broad estimates include variations — for a precise core, cluster by hand or in a collector.",
      ],
      lists: [
        {
          intro: "What to take from Planner:",
          items: [
            "candidate list for the core;",
            "rough competition and CPC;",
            "seasonal hints from the chart (if available);",
            "landing ideas for mid/long-tail;",
            "hypotheses for Ads creatives.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Grabbing top head “buy …” terms with no landing or offer. Intent and page first, budget second.",
        },
      ],
      tables: [
        {
          caption: "How to read Planner fields",
          headers: ["Field", "Why it matters"],
          rows: [
            ["Impressions / month", "Demand guide, often a range"],
            ["Competition", "Ads density — not “SEO difficulty”"],
            ["Bid", "Auction forecast — not organic cost"],
            ["Keyword variants", "Cluster and negative ideas"],
          ],
        },
      ],
    },
    {
      title: "Google Trends: seasonality and regions",
      level: 2,
      paras: [
        "Trends shows relative interest in a topic: useful for comparing seasons, regions, and close categories. Peak “100” is the max in the selected period — not absolute visits. For bikes, interest may rise before “logical” spring — plan stock and creatives with lead time.",
        "For new products without a direct query, watch the parent category and adjacent themes. A sharp spike with no sales base is a reason to check hype and durability — not to scale buying immediately.",
      ],
      lists: [
        {
          intro: "Practical Trends scenarios:",
          items: [
            "when to boost ads and content;",
            "which regions look stronger;",
            "comparing two product categories;",
            "checking a “dead” season;",
            "monitoring interest after a launch.",
          ],
        },
      ],
      notes: [
        {
          title: "Tip",
          kind: "tip",
          text: "Cross-check Trends with your sales and stock: search often leads or lags actual purchases — depends on the niche.",
        },
      ],
    },
    {
      title: "The role of Google Analytics",
      level: 2,
      paras: [
        "Planner and Trends speak to demand outside. Analytics shows what happened on the site: which sources and landings hit goals, where drop-off is. In GA4 lean on events and conversions — not Universal Analytics screenshots from old guides.",
        "The chain “query → ad/organic → page → purchase/lead” matters more than a pretty chart. For a deep store funnel, see the separate Google Analytics article.",
      ],
      lists: [
        {
          intro: "Minimum link to demand stats:",
          items: [
            "goals/key events configured;",
            "UTMs on ads consistent;",
            "landings match key intent;",
            "weekly channel and conversion review;",
            "content-plan hypotheses for weak URLs.",
          ],
        },
      ],
      links: [
        {
          label: "Google Analytics for ecommerce",
          href: "/en/blog/google-analytics/",
        },
        {
          label: "Dashboards and reports",
          href: "/en/blog/dashboard/",
        },
      ],
    },
    {
      title: "Third-party collectors and Wordstat",
      level: 2,
      paras: [
        "Key Collector and peers help with export, grouping, and several sources at once. License cost pays off with regular core work. A one-off project often needs only Wordstat + Planner + a spreadsheet.",
        "Don’t chase “exact Google query counts” from shady SERP scrapers — fragile and risky. Prefer official APIs/consoles and your own ad data.",
      ],
      lists: [
        {
          intro: "When the free track is enough:",
          items: [
            "small core and one region;",
            "niche hypothesis kickoff;",
            "seasonality check in Trends;",
            "cross-check with Wordstat for Yandex.",
          ],
        },
      ],
      links: [
        {
          label: "Competitor analysis",
          href: "/en/blog/analiz-konkurentov/",
        },
      ],
    },
    {
      title: "From numbers to sales: a working loop",
      level: 2,
      paras: [
        "Gather candidates in Planner/Wordstat → filter intent → check season in Trends → assign landings and offers → publish content and run Ads → measure in Analytics and CRM. Iteration beats one perfect spreadsheet.",
        "SEO landing prep — weeks; organic growth for the core — month to month, planned 2–6 months to noticeable TOP. Ads give a faster learning sample on keywords, but don’t replace page quality.",
      ],
      lists: [
        {
          intro: "Loop checklist:",
          items: [
            "core and negatives;",
            "season and region;",
            "landing per cluster;",
            "goal in analytics;",
            "review in 1–2 weeks and adjust.",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Stats help pick a theme. Organic TOP is a separate horizon after prep — Planner numbers ≠ rankings.",
        },
      ],
      links: [
        {
          label: "Ecommerce promotion",
          href: "/en/blog/prodvizhenie-internet-magazina/",
        },
        {
          label: "Keywords for an online store",
          href: "/en/blog/klyuchi-internet-magazin/",
        },
      ],
    },
  ],
  related: [
    "google-analytics",
    "semanticheskoe-yadro",
    "chastotnost-zaprosov",
    "klyuchi-internet-magazin",
    "dashboard",
    "prodvizhenie-internet-magazina",
  ],
};
