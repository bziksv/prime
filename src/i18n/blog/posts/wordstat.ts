import type { BlogPost } from "../../../data/blog";

/** EN overlay for wordstat — same structure as RU JSON. */
export const wordstatEn: BlogPost = {
  slug: "wordstat",
  title: "Yandex Wordstat: what it is and how to use it",
  date: "2018-04-06",
  category: "SEO",
  cover: "/images/blog/wordstat/cover-en.webp",
  excerpt:
    "Wordstat is Yandex’s query-stats service: why it matters for semantics, how to read frequency, operators, regions, and seasonality — without promising TOP in a month from a “big number.”",
  lead: [
    "Yandex Wordstat shows how often people search for phrasings in Yandex Search and which nearby phrases show up. For SEO and ads in Russia it’s the base demand contour: core, seasonality, regions.",
    "Below — why the service, how to read the output, why operators matter, and how “raw” frequency differs from exact. UI and tab labels changed — follow the current cabinet; don’t copy old screenshot figures into today’s plan as fact.",
  ],
  faq: [
    {
      q: "Does Wordstat show real customers?",
      a: "No: it’s an estimate of search interest, not leads or sales. High frequency ≠ easy TOP and no conversion guarantee.",
    },
    {
      q: "Do you need a Yandex account?",
      a: "Yes — the service is for signed-in users. Without login you can’t use it fully.",
    },
    {
      q: "How is this different from the HF/MF/LF frequency article?",
      a: "That one covers types and how to read numbers. Here — Wordstat itself: UI, operators, regions, history. Related materials.",
    },
    {
      q: "Is Wordstat enough instead of a semantic core?",
      a: "No. Wordstat gives frequencies and phrase ideas; the core is clusters, intent, and landings. See the semantics canon.",
    },
    {
      q: "Is a number without operators exact phrase entries?",
      a: "Usually no: the base input sums tails and word forms. For the core, use refined/exact frequency with operators.",
    },
    {
      q: "Does Wordstat replace Google Keyword Planner?",
      a: "For Yandex in Russia — the main contour. For Google use Planner/Trends/GSC separately.",
    },
  ],
  sections: [
    {
      title: "Why Wordstat",
      level: 2,
      paras: [
        "The service estimates interest in topics via Yandex search queries: how often phrasings appeared in a period (given operators and region). That’s the base for semantics, niche sizing, and seasonal content/ads planning.",
        "The right “similar” column and left tails help expand idea lists. But a list ≠ a ready core: cut junk, informational tails, and foreign intent.",
      ],
      lists: [
        {
          intro: "Typical jobs:",
          items: [
            "size demand on niche markers;",
            "collect word forms and tails for clusters;",
            "compare regions and devices (if available in the UI);",
            "check seasonality on query history.",
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
      title: "How to start",
      level: 2,
      paras: [
        "Sign into a Yandex account and open Wordstat. Enter a marker (product, service, client problem). By default you get a broad picture of words and nearby similar phrasings.",
        "If the business is local, set the region first: nationwide frequency for “flower delivery” in one city barely helps. For mobile audiences check the device split if it exists in the current UI — filter names may have changed since 2018.",
      ],
      lists: [
        {
          intro: "Mini order:",
          items: [
            "set region and thinking period (month / season);",
            "enter a marker without extra words;",
            "pull base and refined frequency;",
            "export/copy tails into a sheet;",
            "filter junk and group by intent.",
          ],
        },
      ],
      notes: [
        {
          title: "Don’t confuse demand and rankings",
          text: "A big Wordstat number doesn’t mean “TOP in a month.” Semantics and site prep take their own weeks; core positions grow over planned months (often 2–6).",
          kind: "tip",
        },
      ],
    },
    {
      title: "How to read results",
      level: 2,
      paras: [
        "Left usually lists phrases containing your input (and expansions). Right — “what else people search on the topic.” The number next to a row estimates frequency for the period (often a month) under your conditions.",
        "Logic example: marker “buy a phone” yields tails like “cheap,” city, model; the right may show synonyms (“smartphone,” “mobile”). Don’t paste old screenshot thousands into a brief as current volume — demand drifts.",
      ],
      tables: [
        {
          caption: "What to watch in the output",
          headers: ["Element", "Why"],
          rows: [
            ["Row frequency", "Demand compass under your operators"],
            ["Left tails", "Cluster and landing ideas"],
            ["Similar on the right", "Synonyms and related themes"],
            ["Region", "Local business vs nationwide"],
            ["History", "Seasonality and trends"],
          ],
        },
      ],
    },
    {
      title: "Operators: why they matter",
      level: 2,
      paras: [
        "Without operators Wordstat often sums a wide group of matches: the phrase “inside” longer queries. For the core and bids you need refinements: quotes, exclamation, plus/minus, and other operators from current Yandex Help.",
        "A classic beginner mistake — treat the “broad” number as exact entries. Refined frequency is usually much lower and fairer for prioritization.",
      ],
      lists: [
        {
          intro: "Practice:",
          items: [
            "first pull a broad demand picture;",
            "then refine key markers with operators;",
            "cross-check with the frequency methodology article;",
            "don’t plan budget on one “pretty” number alone.",
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
      title: "Seasonality and regions",
      level: 2,
      paras: [
        "Query history (monthly chart) separates stable demand from seasonal spikes — “trees” in December, “ACs” in summer. For content plans and ad buys that beats a one-off “last month” snapshot.",
        "Regional popularity shows where a topic is “hotter” vs average. Above/below baseline is a signal to push harder — or not expect miracles in a weak region without offline factors.",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Wordstat is a demand tool in the Yandex ecosystem, not a magic ranking button. Collect markers, refine frequency, check season and region, then build the core and landings.",
        "Related: full semantic core and frequency types — in separate articles. A shorter WP Wordstat overview may later redirect here.",
      ],
    },
  ],
  closing: [
    "Open Wordstat under your working region, pull markers with operators, and export tails into a sheet — then clustering and landings, not a hunt for the biggest “raw” number.",
  ],
  related: [
    "semanticheskoe-yadro",
    "chastotnost-zaprosov",
    "klyuchi-internet-magazin",
    "seo-s-nulya",
    "nisha-sayta",
    "klyuchi-google-ads",
  ],
};
