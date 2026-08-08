import type { BlogPost } from "../../../data/blog";

/** EN overlay for user-intent — same structure as RU JSON. */
export const userIntentEn: BlogPost = {
  slug: "user-intent",
  title: "User intent in SEO: matching pages to search intention",
  date: "2018-08-29",
  category: "SEO",
  cover: "/images/blog/user-intent/cover-en.webp",
  excerpt:
    "User intent is what the person wants behind a query. How to read the results, avoid mixing intents on one URL, and build pages for real intention — not keyword density.",
  lead: [
    "Search ranks not a “page with a keyword,” but an answer to intention: buy, compare, understand, get inspired, find an address. If your URL answers something else — rankings and conversion suffer even with unique copy.",
    "Below: how to spot user intent from the results, when close intentions can share one page, and why forcing the wrong intent onto a commercial landing almost never works.",
  ],
  faq: [
    {
      q: "What is user intent?",
      a: "The user’s intention behind a search query: informational, navigational, commercial investigation, transactional, and mixed variants.",
    },
    {
      q: "How can you spot intent quickly?",
      a: "Open the first 10–20 results in private mode without personal history: which page types dominate — guides, product cards, aggregators, brands.",
    },
    {
      q: "Can one URL serve several intents?",
      a: "Only if they combine naturally and are mixed the same way in the results. Otherwise use separate landings, or you get cannibalization and a weak answer.",
    },
    {
      q: "Can your article change results intent?",
      a: "Rarely. The results reflect behavior. It is easier to match the dominant intent or take a rare but truly useful angle.",
    },
    {
      q: "How does this relate to the keyword core?",
      a: "Cluster = one main intent → one priority page. A core without intent is a word list without structure.",
    },
    {
      q: "Is intent the same in Yandex and Google?",
      a: "Often similar, not always: locality, commercial mix, and result blocks differ. Check both if both channels matter.",
    },
    {
      q: "Does voice search change intent?",
      a: "Often longer and fuzzier wording, but the logic is the same: understand the job and give a direct answer.",
    },
    {
      q: "How do you measure that you hit intent?",
      a: "Cluster rankings, snippet CTR, behavior, and organic conversion. High bounce on a “correct” keyword signals a miss.",
    },
  ],
  sections: [
    {
      title: "Why intent beats “the keyword”",
      level: 2,
      paras: [
        "The same word set hides different jobs. A query like “ecommerce design” may mean inspiration from examples, a UX guide, trends, or buying a service or template.",
        "The results mix those answers: roundups, long articles, images, commercial offers. Your page should clearly answer one main scenario — the one you compete for.",
      ],
      lists: [
        {
          intro: "Typical intention classes:",
          items: [
            "learn / understand",
            "compare / choose",
            "buy / order",
            "find a brand / site",
            "local “nearby / address”",
          ],
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
      title: "How to read the results",
      level: 2,
      paras: [
        "Work without personalization (private mode / reset history influence). Watch not only competitor titles, but document type: blog, store category, product card, aggregator, video.",
        "Repeating formats in the first ten results signal dominant intent. A lone “foreign” type at positions 8–10 is a weak reason to build the whole URL around it.",
      ],
      lists: [
        {
          intro: "In practice:",
          items: [
            "first 10–20 results on the cluster marker",
            "Yandex and Google separately",
            "lock one or two dominant page types",
            "compare to your landing",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Common mistake",
          text: "Writing a commercial page for an informational cluster “because it is frequent.” Conversion stays low, rankings unstable.",
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
      title: "Combine or split",
      level: 2,
      paras: [
        "Related informational angles (“design trends” + “good design principles”) sometimes live on one URL if the results mix them the same way. An “oil ranking” and “buy oil” usually need different pages: a ranking reader rarely is ready to check out in the same visit.",
        "Before a copy brief, check results overlap (analysis tools or manual review): if leading documents differ by type — do not glue clusters.",
      ],
      lists: [
        {
          intro: "Rule of thumb:",
          items: [
            "one main intent — one canonical URL",
            "mix — only when results match",
            "commerce and pure info — usually separate",
            "internal links between them instead of “everything in one sheet”",
          ],
        },
      ],
      links: [
        {
          label: "Query cannibalization",
          href: "/en/blog/kannibalizatsiya-zaprosov/",
        },
        {
          label: "SEO copywriting",
          href: "/en/blog/seo-kopirayting/",
        },
      ],
    },
    {
      title: "Intent is shaped by results and behavior",
      level: 2,
      paras: [
        "Search tunes the result mix to where people click and what satisfies them. If “red shoes” is dominated by stores and marketplaces — an informational longread is unlikely to displace a product card.",
        "Hence the practice: do not force intent to break — own your niche inside it — a stronger card, a fairer comparison, a more useful guide — depending on what the results already show.",
      ],
      lists: [
        {
          intro: "What to strengthen:",
          items: [
            "snippet = same intent promise",
            "H1 and first screen without bait-and-switch",
            "block structure for questions from the results",
            "CTA only where intention is commercial",
          ],
        },
      ],
      links: [
        {
          label: "Snippet",
          href: "/en/blog/snippet/",
        },
      ],
    },
    {
      title: "Fuzzy and voice queries",
      level: 2,
      paras: [
        "Short and imprecise wording grows: the user hopes search will figure it out. Voice phrases are longer, but intent logic is the same.",
        "Do not stretch every possible meaning into one article. Step away from your product: someone querying “how to lose weight” does not need “oriental dance” if they wanted a meal plan.",
      ],
      lists: [
        {
          intro: "Work algorithm:",
          items: [
            "unpack one to three readings of the query",
            "see what is already in the first 20 results",
            "pick one angle for your URL",
            "the rest — separate materials or skip",
          ],
        },
      ],
      links: [
        {
          label: "Voice search",
          href: "/en/blog/golosovoy-poisk/",
        },
      ],
    },
    {
      title: "Practice in content and structure",
      level: 2,
      paras: [
        "Lock intent at the cluster level in the core and in the brief: page type, required blocks, what not to write. Otherwise the copywriter optimizes density, not the user job.",
        "After publish watch more than rankings: if people leave immediately — align snippet and content with dominant intent. Sometimes the right move is change page type, not “add another 2,000 characters.”",
      ],
      lists: [
        {
          intro: "Rollout checklist:",
          items: [
            "intent on the cluster card",
            "one canonical URL",
            "title/H1 aligned with intention",
            "no conflicting CTAs",
            "links to related intents",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Timelines",
          text: "Hitting intent speeds relevance, but competitive core visibility buildup is still planned for 2–6 months after promotion starts — not “page one after one title tweak.”",
        },
      ],
      links: [
        {
          label: "SEO site structure",
          href: "/en/blog/seo-struktura-sayta/",
        },
        {
          label: "Entry points",
          href: "/en/blog/tochki-vhoda/",
        },
      ],
    },
  ],
  related: [
    "semanticheskoe-yadro",
    "kannibalizatsiya-zaprosov",
    "seo-kopirayting",
    "snippet",
    "seo-struktura-sayta",
    "golosovoy-poisk",
  ],
};
