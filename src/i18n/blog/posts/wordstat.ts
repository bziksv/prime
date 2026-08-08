import type { BlogPost } from "../../../data/blog";

/** EN overlay for wordstat — same structure as RU JSON. */
export const wordstatEn: BlogPost = {
  slug: "wordstat",
  title: "Yandex Wordstat: what it is and how to use it",
  date: "2018-04-06",
  category: "SEO",
  cover: "/images/blog/wordstat/cover-en.webp",
  excerpt:
    "Wordstat is Yandex query-stats: why it matters for keyword research, how to read volume, operators, regions, and seasonality — without treating a big number as a ranking promise.",
  lead: [
    "Yandex Wordstat shows how often people search for phrasings in Yandex and which related queries appear nearby. For SEO and paid search in Russia it is the baseline demand map: keyword set, seasonality, regions.",
    "Below: what the tool is for, how to read the output, why operators matter, and how broad volume differs from exact. The UI and tab labels change — follow the live account; do not paste old screenshot figures into today’s plan as fact.",
  ],
  faq: [
    {
      q: "Does Wordstat show real customers?",
      a: "No. It estimates search interest, not leads or sales. High volume is not easy rankings and not a conversion guarantee.",
    },
    {
      q: "Do you need a Yandex account?",
      a: "Yes. The service is for signed-in users. Without login you cannot use it fully.",
    },
    {
      q: "How is this different from the high / mid / low frequency article?",
      a: "That piece covers volume types and how to read numbers. This one is Wordstat itself: UI, operators, regions, history. The materials sit next to each other.",
    },
    {
      q: "Can Wordstat replace a full keyword set?",
      a: "No. Wordstat gives volumes and phrase ideas. A keyword set is clusters, intent, and landing pages. See the semantics guide.",
    },
    {
      q: "Is a number without operators exact phrase volume?",
      a: "Usually no. The default view rolls up tails and word forms. For prioritization, use refined or exact frequency with operators.",
    },
    {
      q: "Does Wordstat replace Google Keyword Planner?",
      a: "For Yandex in Russia it is the main loop. For Google use Planner, Trends, or Search Console separately.",
    },
  ],
  sections: [
    {
      title: "Why Wordstat exists",
      level: 2,
      paras: [
        "The service estimates interest in topics from Yandex search queries: how often phrasings appeared in a period under your operators and region. That supports keyword research, niche sizing, and seasonal content or ad planning.",
        "The right-hand “similar” column and left-hand tails help expand ideas. A list is not a finished keyword set: cut junk, informational noise, and the wrong intent.",
      ],
      lists: [
        {
          intro: "Typical jobs:",
          items: [
            "size demand on niche markers",
            "collect word forms and tails for clusters",
            "compare regions and devices (if the UI offers them)",
            "check seasonality in query history",
          ],
        },
      ],
      links: [
        {
          label: "Semantic keyword set",
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
        "Sign into Yandex and open Wordstat. Enter a marker — product, service, or customer problem. By default you get a broad picture of words plus nearby similar phrasings.",
        "For a local business, set the region first: nationwide volume for “flower delivery” in one city barely helps. For mobile audiences, check the device split if it exists in the current UI — filter names may have changed since 2018.",
      ],
      lists: [
        {
          intro: "Mini workflow:",
          items: [
            "set region and thinking horizon (month / season)",
            "enter a marker without filler words",
            "pull broad and refined frequency",
            "export or copy tails into a sheet",
            "filter junk and group by intent",
          ],
        },
      ],
      notes: [
        {
          title: "Demand is not rankings",
          kind: "tip",
          text: "A big Wordstat number does not mean page-one visibility in a month. Keyword and site prep take their own weeks; gains across a commercial set usually need months of steady work after promotion starts — often in the 2–6 month range.",
        },
      ],
    },
    {
      title: "How to read the results",
      level: 2,
      paras: [
        "The left side usually lists phrases that contain your input (and expansions). The right side shows related searches on the topic. The number next to a row estimates frequency for the period — often a month — under your conditions.",
        "Example: the marker “buy a phone” surfaces tails like “cheap,” a city, or a model; the right may show synonyms (“smartphone,” “mobile”). Do not paste old screenshot thousands into a brief as current volume — demand drifts.",
      ],
      tables: [
        {
          caption: "What to watch in the output",
          headers: ["Element", "Why"],
          rows: [
            ["Row frequency", "Demand signal under your operators"],
            ["Left tails", "Cluster and landing ideas"],
            ["Similar on the right", "Synonyms and adjacent themes"],
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
        "Without operators Wordstat often sums a wide match group — your phrase inside longer queries. For keyword sets and bids you need refinements: quotes, exclamation marks, plus/minus, and other operators from current Yandex Help.",
        "A classic beginner mistake is treating the broad number as exact entries. Refined frequency is usually much lower and fairer for prioritization.",
      ],
      lists: [
        {
          intro: "In practice:",
          items: [
            "first pull a broad demand picture",
            "then refine key markers with operators",
            "cross-check with the frequency methodology article",
            "do not plan budget on one pretty number alone",
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
        "Query history (the monthly chart) separates stable demand from seasonal spikes — Christmas trees in December, air conditioners in summer. For content plans and media buys that beats a one-off “last month” snapshot.",
        "Regional popularity shows where a topic runs hotter than average. Above or below baseline is a signal to lean in — or not expect miracles in a weak region without offline factors.",
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "Wordstat is a demand tool in the Yandex ecosystem, not a ranking shortcut. Collect markers, refine frequency, check season and region, then build the keyword set and landing pages.",
        "Related topics — a full semantic set and frequency types — live in separate articles. A shorter WordPress-era Wordstat overview may later redirect here.",
      ],
    },
  ],
  closing: [
    "Open Wordstat under your working region, pull markers with operators, and export tails into a sheet — then clustering and landings, not a hunt for the biggest raw number.",
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
