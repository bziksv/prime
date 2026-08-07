import type { BlogPost } from "../../../data/blog";

/** EN overlay for semanticheskoe-yadro — same structure as RU JSON. */
export const semanticheskoeYadroEn: BlogPost = {
  slug: "semanticheskoe-yadro",
  title: "How to build a semantic core the right way",
  date: "2022-03-01",
  category: "SEO",
  cover: "/images/blog/semanticheskoe-yadro/cover-en.webp",
  excerpt:
    "How to pick keywords, classify queries, and build a semantic core — step by step for SEO.",
  lead: [
    "A site’s semantic core is the list of search queries that bring users to the site. Those queries — keywords — shape the site’s structure.",
    "The semantic core is the foundation of online promotion. The right keywords grow visits, leads, and audience. We cover what belongs in the core, how it shapes copy, and the nuances of building it.",
  ],
  faq: [
    {
      q: "What is a semantic core?",
      a: "A set of search queries that reflect the site’s topic and structure — and by which users can arrive from search.",
    },
    {
      q: "How many keywords does a core need?",
      a: "Rough guides: service landing — dozens to a couple hundred keywords; multi-section service site — hundreds to a couple thousand; large catalog — thousands and up. Intent coverage matters more than “collect more”.",
    },
    {
      q: "How do head terms differ from long-tail?",
      a: "High-frequency queries are shorter and more competitive; low-frequency ones are longer, more numerous, and easier for first rankings and targeted traffic.",
    },
    {
      q: "Why cluster the core?",
      a: "To group queries that are close in meaning and SERP under one landing — and avoid duplicate pages.",
    },
    {
      q: "How long does building a core take?",
      a: "Marker draft — hours; a working core for a mid-size service site — from a few days to a couple of weeks. Then the core lives with the site: you add and prune.",
    },
  ],
  sections: [
    {
      title: "What a semantic core is",
      level: 2,
      paras: [
        "A semantic core is a set of words and phrases that reflect the site’s topic and structure and describe what it does. Those words are keywords. They answer: “What will the user find on this site?”",
        "We cover how many keywords usually go into the working set, how to classify queries, and a step-by-step build.",
      ],
      lists: [
        {
          intro: "A semantic core typically has these traits:",
          items: [
            "keywords reflect the site structure;",
            "the site answers most key queries;",
            "the resource holds the information the visitor needs.",
          ],
        },
      ],
    },
    {
      title: "How many keywords you need",
      level: 2,
      paras: [
        "There’s no hard “exactly N keywords” rule: volume depends on niche, region, and how many landings you can actually maintain. The ranges below are order-of-magnitude for a start, not dogma.",
      ],
      lists: [
        {
          intro: "Typical ranges (after cleanup, not a raw Wordstat dump):",
          items: [
            "single-service landing — dozens to about 150–200 keywords;",
            "service site with several sections — hundreds to 1–2 thousand;",
            "online store / catalog — thousands of keywords, growing with the assortment.",
          ],
        },
      ],
      notes: [
        {
          title: "What to watch instead of “collect more”",
          text: "Covering commercial and informational intents under real URLs matters more. A bloated core without landings and copy only inflates the spreadsheet.",
        },
      ],
    },
    {
      title: "Classifying search queries",
      level: 2,
      paras: [
        "Keywords split into groups by different parameters. We’ll cover those parameters. If you want practice first — jump to the step-by-step guide below.",
      ],
      lists: [],
    },
    {
      title: "Frequency",
      level: 3,
      paras: [
        "How do you work with keyword frequency? Promoting on high-frequency queries is hard — competition is fierce. Beginners often start with micro and low-frequency keys: there are more of them, and the long tail makes early visibility more realistic. On commercial pages, refine the offer: guarantees, timelines, delivery, meta tags.",
        "After low-frequency work, add mid-frequency terms. They often hint at section structure. You may need site and content updates. Once LF and MF are covered with landings and copy, high-frequency queries usually lift more naturally — but that is not a guarantee of TOP-1 “by itself”.",
      ],
      lists: [
        {
          intro:
            "Rough monthly impression thresholds (a guide, not an official search-engine scale):",
          items: [
            "micro low-frequency — under 100;",
            "low-frequency — 100 to 1,000;",
            "mid-frequency — 1,000 to 5,000;",
            "high-frequency — from 5,000.",
          ],
        },
      ],
    },
    {
      title: "Business signals",
      level: 3,
      paras: [
        "Here there are two groups. Commercial keys bring visitors who want to order, buy, or use a service — anything involving money.",
        "The second group is non-commercial queries. People want information; they don’t need to order or buy yet.",
        "The first group fits service sites and online stores. Informational resources and topical blogs need the second group.",
      ],
      lists: [
        {
          intro: "Commercial queries can look like:",
          items: [
            "order a cake in Ryazan with delivery;",
            "affordable wedding hairstyle;",
            "buy BMW spare parts.",
          ],
        },
        {
          intro: "Non-commercial examples:",
          items: [
            "anniversary gift for husband;",
            "beautiful cities in Italy;",
            "meat pie recipe.",
          ],
        },
      ],
    },
    {
      title: "Geolocation",
      level: 3,
      paras: [
        "A query may include the user’s location — or not. For a geo-dependent query the search engine returns results based on where the user is. Results differ by region. If someone wants to order a cake in Moscow, cakes in Tver rarely help.",
        "If the query has no place cue, results tend to look the same across cities.",
        "In site promotion, geo-dependent keys are often smarter — competition stays within the named region. Phrases without location compete with results from everywhere.",
      ],
      lists: [
        {
          intro: "Geo-dependent examples:",
          items: [
            "food delivery Astrakhan;",
            "restaurant Pogrebok hours;",
            "buy a scooter in Perm.",
          ],
        },
        {
          intro: "Geo-independent queries:",
          items: [
            "Harry Potter watch online;",
            "what is marketing;",
            "how to choose a laptop.",
          ],
        },
      ],
    },
    {
      title: "User needs",
      level: 3,
      paras: [
        "Depending on the content the user wants, there are four query types.",
        "If your site offers that content, you can take this group. Often people prefer Google Images, streaming services, or YouTube.",
        "Transactional. Functionally close to commercial. Used to find products or services to buy. To rank, you need a catalog with product cards — photos, descriptions, prices — plus cart, payment, and delivery options.",
        "Search engines rarely put small stores in the TOP. Large aggregators usually hold the first rows.",
        "If the resource has useful info for such keys, you can use them in promotion. More often they enter the core when the site is also pushed with paid search.",
      ],
      lists: [
        {
          intro: "Media. Photos, audio, or video. For example:",
          items: [
            "latest BI-2 album;",
            "ocean photos;",
            "Channel One watch online.",
          ],
        },
        {
          intro:
            "Navigational. People look for a specific place, event, or site. For example:",
          items: ["yandex;", "olympics 2022;", "clinic no. 2 address."],
        },
        {
          intro: "Informational key examples:",
          items: ["great patriotic war;", "borscht recipe;", "who was lenin."],
        },
      ],
    },
    {
      title: "Other query types",
      level: 3,
      paras: [
        "Fuzzy — no clear goal; it’s unclear what to show. Engines ask for clarification or return topical articles. Yandex has Spectrum-style tech for fuzzy queries so the SERP can cover different needs on the same topic.",
      ],
      lists: [
        {
          intro:
            "Vital — only the brand or company name. People look for specific products or the official site. For example:",
          items: ["apteka.ru;", "MVideo;", "Apple."],
        },
        {
          intro: "Branded — with a brand or make name:",
          items: ["audi car;", "clinic cream;", "lenovo tablet."],
        },
        {
          intro: "Fuzzy query examples:",
          items: [
            "crown — photos, definition, modern monarchs, TV series;",
            "coffee — types, brewing methods, history, where to buy.",
          ],
        },
      ],
    },
    {
      title: "Why you need a semantic core",
      level: 2,
      paras: [
        "Working with the core later helps refine site structure, track dynamics, find why rankings are weak, and show whether you need subtopics.",
      ],
      lists: [
        {
          intro:
            "To build a semantic core you collect keywords and related terms. The more synonyms, specialist terms, abbreviations, and short forms you include, the fuller the answer to the query that brought the user. The core helps:",
          items: [
            "build a visitor-friendly site structure;",
            "deliver quality content;",
            "use the right meta tags;",
            "shape anchors with an external-link system.",
          ],
        },
      ],
    },
    {
      title: "Step-by-step: building a semantic core",
      level: 2,
      paras: [
        "Creating a semantic core is several steps: markers → expand → clean → clusters → map to URLs. Download the table template and fill it as you go.",
      ],
      lists: [],
      links: [
        {
          label:
            "Download CSV template (marker, frequency, type, cluster, URL)",
          href: "/files/blog/semanticheskoe-yadro-template.csv",
        },
      ],
    },
    {
      title: "Step 1. Gather information",
      level: 3,
      paras: [
        "Put yourself in the potential client’s place. What interests them? What’s the problem? Dive into the topic and collect everything in that direction.",
        "General info often lives on the client’s site. For a full dive, use outside sources too: competitors, the client’s structure, catalogs and price lists. Wordstat and Google Keyword Planner help collect keywords.",
        "Competitor paid-search analysis also helps — how they promote a similar product or service. Manually or via tools like SpyWords / SimilarWeb (depending on access and budget).",
      ],
      lists: [
        {
          intro:
            "Brainstorming helps. Write down all data and thoughts on the topic. The list should include:",
          items: [
            "locations: region, city, district, metro stations and streets people use to find the place;",
            "every category of products you offer;",
            "product names including synonyms, abbreviations, specialist terms or jargon, Cyrillic and Latin spellings;",
            "vital queries;",
            "misspelled product names;",
            "technical product params: types, material, model, etc.;",
          ],
        },
      ],
    },
    {
      title: "Step 2. Expand the keyword list",
      level: 3,
      paras: [
        "Now expand the draft query list. Build a table in a separate file and add every word and phrase from the previous step. You’ll need keyword tools: Wordstat and Google Keyword Planner.",
        "Enter each word or phrase into the tools. You’ll get refined variants and associations.",
        "You can also collect keys automatically with programs such as Key Collector.",
        "Then clean the core. Remove queries that don’t fit the site’s specifics or topic — manually or with stop-word tools.",
      ],
      lists: [
        {
          intro: "Stop words / negatives include:",
          items: [
            "competitor company names;",
            "typos and misspellings (unless you promote them on purpose);",
            "place names outside your sales region;",
            "keys from another topic.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake at this step",
          text: "Leaving everything “as exported” from Wordstat. Without cleanup, clusters and copy later fill with off-target wording.",
        },
      ],
    },
    {
      title: "Step 3. Group keywords. Cluster the core.",
      level: 3,
      paras: [
        "You now have a huge sheet of every possible query for the site. Split keys into groups or blocks by topic or client needs. That’s clustering.",
        "In paid search, word form matters. One ad may use “water purification”, another “water treatment”, both leading to the same site — so the keyword can appear in the SERP title and match the query. You end up with several ad groups that still send users to one URL. In Google or Yandex Ads, keys for one product are often merged instead, simplifying structure.",
        "What about SEO? More work: each cluster should lead to a specific page. If the page doesn’t exist — create it. Otherwise queries compete or hang without a landing. On a small site clustering is often manual; on large ones tools like Rush Analytics or clustering modules elsewhere help (you set the SERP URL-overlap threshold separately).",
      ],
      lists: [],
      tables: [
        {
          caption: "Mini example: PVC windows, Voronezh (fragment)",
          headers: ["Marker / query", "Type", "Cluster", "Landing"],
          rows: [
            [
              "pvc windows voronezh",
              "commercial + geo",
              "PVC windows",
              "/okna-pvh/",
            ],
            [
              "buy pvc windows voronezh",
              "commercial + geo",
              "PVC windows",
              "/okna-pvh/",
            ],
            ["pvc windows price", "commercial", "PVC windows", "/okna-pvh/"],
            [
              "window installation voronezh",
              "commercial + geo",
              "Installation",
              "/ustanovka-okon/",
            ],
            [
              "how to choose pvc windows",
              "informational",
              "Guide",
              "/blog/kak-vybrat-okna/",
            ],
            [
              "window repair voronezh",
              "commercial + geo",
              "Repair",
              "/remont-okon/",
            ],
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Dumping the whole core onto one “home” URL or cloning near-identical pages for every word form. Cluster = one intent → one landing.",
        },
      ],
    },
    {
      title: "Step 4. Map keys to structure. Refine the core.",
      level: 3,
      paras: [
        "The previous step gave you ready keyword clusters. Several groups may still share one URL. Then refine the site structure, create extra pages, and move part of the keys there.",
        "When clustering, map queries to pages so URLs don’t duplicate each other by meaning.",
      ],
      lists: [],
    },
    {
      title: "What to do after the core",
      level: 2,
      paras: [
        "The core isn’t the finish — it’s the entry to site work. Next usually: Title and H1 per cluster, copy and trust blocks on landings, internal links between sections, tech and indexing.",
      ],
      lists: [],
      links: [
        {
          label: "SEO site structure",
          href: "/en/blog/seo-struktura-sayta/",
        },
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "Mistakes when working with keywords",
      level: 2,
      paras: [
        "These gaps grow into bigger problems: the wrong competitor set, weak rankings, irrelevant meta tags, low metrics.",
      ],
      lists: [
        {
          intro: "Beginners often make these mistakes with a semantic core:",
          items: [
            "only high-frequency and the most obvious queries;",
            "no geo keywords;",
            "too many different keys pointing at one URL;",
            "professionalisms and jargon ignored;",
            "the same queries pointing at different pages;",
            "core built without the client’s specifics.",
          ],
        },
      ],
    },
    {
      title: "Tools for working with a semantic core",
      level: 2,
      paras: [
        "Tools teams usually use to collect and group a core. Not a ranking—pick by task and budget. Narrow or outdated panels aren’t included.",
      ],
      lists: [],
    },
    {
      title: "Yandex Wordstat",
      level: 3,
      paras: [
        "A basic free source of frequency and wording for Russian-language search. Region, seasonality, and dynamics live here. Marker expansion usually starts here.",
      ],
      lists: [],
    },
    {
      title: "Google Keyword Planner",
      level: 3,
      paras: [
        "Google Ads keyword planner: query ideas, frequency estimates, and Google forecasts. Handy as a second angle next to Wordstat, especially if you also look at Google.",
      ],
      lists: [],
    },
    {
      title: "Key Collector",
      level: 3,
      paras: [
        "A desktop suite for parsing suggestions, collecting and cleaning a core, negatives, and soft-duplicate removal. Saves time on mid and large lists.",
      ],
      lists: [],
    },
    {
      title: "SlovoEB",
      level: 3,
      paras: [
        "A free, simplified relative of Key Collector. It can’t do everything; Wordstat access needs a Yandex account — with limits and risk of blocks under aggressive parsing.",
      ],
      lists: [],
    },
    {
      title: "Titlo",
      level: 3,
      paras: [
        "A platform with modules: query collection and clustering, list comparison, relevance, rankings, meta tags, and monitoring. Modules can be used separately or in one account.",
      ],
      lists: [],
    },
    {
      title: "Rush Analytics",
      level: 3,
      paras: [
        "Cloud clustering and related SEO tasks. Handy when the core is already large and manual grouping by SERP URL overlap takes too long.",
      ],
      lists: [],
    },
    {
      title: "Keys.so / Serpstat",
      level: 3,
      paras: [
        "Paid systems with data on keys, competitors, and SERP pages. Help expand mid- and low-frequency keywords and see who already owns the niche. Choice depends on the team’s usual stack.",
      ],
      lists: [],
    },
    {
      title: "Just Magic",
      level: 3,
      paras: [
        "A tool for semantics and LSI text surroundings (including “Aquarelle”-style scenarios). Useful when the core already exists and you need to strengthen copy for a cluster.",
      ],
      lists: [],
    },
    {
      title: "Ahrefs",
      level: 3,
      paras: [
        "Stronger on backlinks and English/global markets, but also shows competitors’ organic keys. For a purely “Yandex” core it more often complements Wordstat and local suites than replaces them.",
        "Any toolset only speeds the work. How you pick wording and avoid mixing intents on one page — that comes down to practice and common sense.",
      ],
      lists: [],
    },
  ],
};
