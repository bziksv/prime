import type { BlogPost } from "../../../data/blog";

/** EN overlay for chastotnost-zaprosov — same structure as RU JSON. */
export const chastotnostZaprosovEn: BlogPost = {
  slug: "chastotnost-zaprosov",
  title: "Search query frequency: types and how to measure it",
  date: "2022-01-21",
  category: "SEO",
  cover: "/images/blog/chastotnost-zaprosov/cover-en.webp",
  excerpt:
    "High-, mid-, and low-frequency queries; base vs exact frequency in Yandex Wordstat; demand checks in Google — how to read the numbers without fooling yourself.",
  lead: [
    "Query frequency is how often people type a phrasing into search over a given period. Skip it, and a keyword set balloons with flashy head terms that don’t convert — or you miss the long-tail phrases that actually bring traffic.",
    "This guide covers frequency types, how to pull figures in Yandex Wordstat and Google, and which operators give numbers you can trust.",
  ],
  faq: [
    {
      q: "What is query frequency?",
      a: "An estimate of how many times a phrasing (and its variants — depending on the operator) was searched in a chosen period, most often a month.",
    },
    {
      q: "How do high-frequency terms differ from long-tail?",
      a: "Head terms are shorter and more competitive, with broader demand; long-tail is longer and more specific — usually easier for targeted traffic early on.",
    },
    {
      q: "Why does a “raw” Wordstat number mislead?",
      a: "A basic entry without operators sums many tails and word forms. For a keyword set, use exact and refined frequency.",
    },
    {
      q: "Is Google Keyword Planner enough instead of Wordstat?",
      a: "For Russia-focused work, Wordstat is usually the main Yandex demand source; Planner and Trends give a second look at Google and seasonality — not a full replacement.",
    },
    {
      q: "How does frequency tie into a keyword set?",
      a: "Frequency helps prioritize clusters, but it doesn’t replace intent and landings. Building the set is covered in a separate piece.",
    },
  ],
  sections: [
    {
      title: "Frequency types",
      level: 2,
      paras: [
        "How popular a phrasing is depends on the niche: some queries get a handful of searches a month, others tens of thousands. The more often a word or group is typed, the higher the frequency.",
        "In practice queries are split into high-, mid-, and low-frequency. Thresholds are relative and niche-dependent; competition and intent matter more than a magic cutoff.",
      ],
      lists: [],
      notes: [
        {
          title: "Link to the keyword set",
          text: "Frequency is one filter when building a semantic keyword set — not the goal itself. How to collect and cluster is covered in the semantic keyword set article.",
        },
      ],
      links: [
        {
          label: "Semantic keyword set",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "High-frequency queries (HF)",
      level: 3,
      paras: [
        "Short broad phrasings: a brand in a general sense, a product category, a topic “as a whole.” Often one or two words; demand from thousands to tens of thousands of searches a month (order depends on niche and region).",
        "On a new site, HF rarely delivers fast results: competition is high, and strong domains own the SERP. Cover them with landings and link or behavioral work later — don’t center month one on head terms alone. Positions across the set usually build over a planned 2–6 months after work starts.",
      ],
      lists: [
        {
          intro: "Typical HF signs:",
          items: [
            "short phrasing with little detail;",
            "broad intent (many needs in one phrase);",
            "high SERP competition.",
          ],
        },
      ],
    },
    {
      title: "Mid-frequency queries (MF)",
      level: 3,
      paras: [
        "Several words, more specific: service plus a qualifier, product plus an attribute. Often thousands of searches a month. They map well onto section structure and help at different stages of promotion.",
      ],
      lists: [],
    },
    {
      title: "Low-frequency queries (LF)",
      level: 3,
      paras: [
        "Three or more words, narrow intent: model, city, “price,” “with delivery.” Example: “Samsung smartphone price in Voronezh.”",
        "Demand is lower, but the chance of a relevant SERP and targeted traffic is higher. LF suits both new and mature projects — especially with solid landings.",
      ],
      lists: [],
    },
    {
      title: "Overall stats in Yandex Wordstat",
      level: 2,
      paras: [
        "Wordstat is the basic free tool for Yandex demand: phrase ideas, region, devices, and dynamics.",
        "After sign-in, open word selection, enter a seed, and check the left column (variants and tails) plus frequencies. Default is all regions; for local business, narrow geo first.",
        "A number without operators is not “exact searches for this phrase,” but a broad-match estimate. For a keyword set you almost always need operators.",
      ],
      lists: [],
    },
    {
      title: "Frequency modes in Wordstat",
      level: 2,
      paras: [
        "These are the working modes teams use when cleaning and prioritizing a keyword set.",
      ],
      lists: [],
    },
    {
      title: "Base frequency",
      level: 3,
      paras: [
        "A phrase with no quotes or special characters. Wordstat returns broad stats across tails and matches. Good for gauging interest in a topic (“smartphones” as a field); risky as a traffic budget for one landing.",
      ],
      lists: [],
    },
    {
      title: "Exact frequency",
      level: 3,
      paras: [
        "A phrase in quotation marks: “plastic windows.” Same words in different order and word forms count. Closer to reality than base, and often used as the working estimate for a cluster.",
      ],
      lists: [],
    },
    {
      title: "Refined frequency",
      level: 3,
      paras: [
        "Locking word forms with the “!” operator (and quote combinations) — check current Wordstat Help: UI and operator nuances change. The point is the narrowest estimate of a specific spelling without extra tails.",
        "By trying variants (“buy windows” / “windows buy” / with a city) you pick the phrasing people actually type — not the one that reads nicely in a brief.",
      ],
      lists: [],
      notes: [
        {
          title: "Common mistake",
          text: "Building briefs and forecasts only on base frequency. Then the set fills with inflated numbers, and landings don’t deliver the expected traffic.",
        },
      ],
      tables: [
        {
          caption: "How to read the modes (schematic)",
          headers: ["Mode", "What it roughly shows", "When to use"],
          rows: [
            ["Base", "Whole topic + tails", "Field sizing, brainstorm"],
            ['Exact "…"', "Phrase words, forms/order", "Working estimate for a cluster"],
            ["Refined (!)", "Narrow spelling", "Checking Title/H1 phrasings"],
          ],
        },
      ],
    },
    {
      title: "Measuring frequency in Google",
      level: 2,
      paras: [
        "Google Keyword Planner (inside a Google Ads account) gives keyword ideas, frequency ranges, and forecasts — with the caveat that figures are often coarse and ad-oriented.",
        "Google Trends is useful for dynamics and comparing phrasings by region, but those are relative indexes, not absolute search volumes.",
        "For Russia-focused projects, a common split is: Wordstat → keyword set for Yandex; Planner/Trends → Google and seasonality checks.",
      ],
      lists: [],
    },
    {
      title: "Other tools",
      level: 2,
      paras: [
        "Alongside Wordstat and Google, teams use combiners and cloud suites: Key Collector, Rush Analytics, Keys.so / Serpstat, and platform modules like Titlo. They speed collection and rollups, but Yandex ground truth is still checked against Wordstat.",
      ],
      lists: [
        {
          intro: "What’s often used together:",
          items: [
            "Key Collector — bulk collection and cleanup;",
            "Rush Analytics and peers — clustering and harvest;",
            "Titlo — semantics modules and list comparison.",
          ],
        },
      ],
      links: [
        {
          label: "Semantic keyword set — collection and clusters",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
  ],
};
