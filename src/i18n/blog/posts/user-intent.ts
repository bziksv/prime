import type { BlogPost } from "../../../data/blog";

/** EN overlay for user-intent — same structure as RU JSON. */
export const userIntentEn: BlogPost = {
  slug: "user-intent",
  title: "User intent in SEO: matching pages to search intention",
  date: "2018-08-29",
  category: "SEO",
  cover: "/images/blog/user-intent/cover-en.webp",
  excerpt:
    "User intent is what the person wants behind a query. How to read the SERP, avoid mixing intents on one URL, and build pages for real intention — not keyword density.",
  lead: [
    "Search ranks not a “page with a keyword,” but an answer to intention: buy, compare, understand, get inspired, find an address. If your URL answers something else — ranks and conversion suffer even with unique copy.",
    "Read the SERP before you write: dominant page types show the job people expect. Close intents can share a URL only when the SERP mixes them the same way — forcing the wrong intent onto a commercial landing almost never works.",
  ],
  faq: [
    {
      q: "What is user intent?",
      a: "The user’s intention behind a search query: informational, navigational, commercial investigation, transactional, and mixed variants.",
    },
    {
      q: "How can I spot intent quickly?",
      a: "Open the TOP-10–20 in private mode without personal history: which page types dominate — guides, product cards, aggregators, brands.",
    },
    {
      q: "Can one URL serve several intents?",
      a: "Only if they combine naturally and are mixed the same way in the SERP. Otherwise use separate landings, or you get cannibalization and a weak answer.",
    },
    {
      q: "Can your article change SERP intent?",
      a: "Rarely. The SERP reflects behavior. It’s easier to match the dominant intent or take a rare but truly useful angle.",
    },
    {
      q: "How does this relate to the semantic core?",
      a: "Cluster = one main intent → one priority page. A core without intent is a word list without structure.",
    },
    {
      q: "Is intent the same in Yandex and Google?",
      a: "Often similar, not always: locality, commercial mix, and SERP blocks differ. Check both if both channels matter.",
    },
    {
      q: "Does voice search change intent?",
      a: "Often longer and fuzzier wording, but the logic is the same: understand the job and give a direct answer.",
    },
    {
      q: "How do I measure that I hit intent?",
      a: "Cluster ranks, snippet CTR, behavior, and organic conversion. High bounce on a “correct” keyword signals a miss.",
    },
  ],
  sections: [
    {
      title: "Why intent beats “the keyword”",
      level: 2,
      paras: [
        "The same word set hides different jobs. A query like “ecommerce design” may mean inspiration from examples, a UX guide, trends, or buying a service or template.",
        "The SERP mixes those answers: roundups, long articles, images, commercial offers. Your page should clearly answer one main scenario — the one you compete for.",
      ],
      lists: [
        {
          intro: "Typical intention classes:",
          items: [
            "learn / understand;",
            "compare / choose;",
            "buy / order;",
            "find a brand / site;",
            "local “nearby / address”.",
          ],
        },
      ],
      links: [
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "How to read the SERP",
      level: 2,
      paras: [
        "Work without personalization (private / reset history influence). Watch not only competitor titles, but document type: blog, store category, product card, aggregator, video.",
        "Repeating formats in TOP-10 signal dominant intent. A lone “foreign” type at positions 8–10 is a weak reason to build the whole URL around it.",
      ],
      lists: [
        {
          intro: "Practical tips:",
          items: [
            "TOP-10–20 on the cluster marker;",
            "Yandex and Google separately;",
            "lock 1–2 dominant page types;",
            "compare to your landing.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Writing a commercial page for an informational cluster “because it’s frequent.” Conversion stays low, ranks unstable.",
          kind: "tip",
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
        "Related informational angles (“design trends” + “good design principles”) sometimes live on one URL if the SERP mixes them the same way. An “oil ranking” and “buy oil” usually need different pages: a ranking reader rarely is ready to check out in the same visit.",
        "Before a copy brief, check SERP overlap (TOP analysis tools or manual review): if top documents differ by type — don’t glue clusters.",
      ],
      lists: [
        {
          intro: "Rule of thumb:",
          items: [
            "one main intent — one canonical URL;",
            "mix — only when SERPs match;",
            "commerce and pure info — usually separate;",
            "internal links between them instead of “everything in one sheet.”",
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
      title: "Intent is shaped by SERP and behavior",
      level: 2,
      paras: [
        "Search tunes the result mix to where people click and what satisfies them. If “red shoes” is dominated by stores and marketplaces — an informational longread is unlikely to displace a product card.",
        "Hence the practice: don’t force intent to break — own your niche inside it — a stronger card, a fairer comparison, a more useful guide — depending on what TOP already shows.",
      ],
      lists: [
        {
          intro: "What to strengthen:",
          items: [
            "snippet = same intent promise;",
            "H1 and first screen without bait-and-switch;",
            "block structure for questions from the SERP;",
            "CTA only where intention is commercial.",
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
        "Short and imprecise wording grows: the user hopes search will figure it out. Voice keywords are longer, but intent logic is the same.",
        "Don’t stretch every possible meaning into one article. Step away from your product: someone querying “how to lose weight” doesn’t need “oriental dance” if they wanted a meal plan.",
      ],
      lists: [
        {
          intro: "Work algorithm:",
          items: [
            "unpack 1–3 readings of the query;",
            "see what’s already in TOP-20;",
            "pick one angle for your URL;",
            "the rest — separate materials or skip.",
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
        "After publish watch more than ranks: if people leave immediately — align snippet and content with dominant intent. Sometimes the right move is change page type, not “add another 2,000 characters.”",
      ],
      lists: [
        {
          intro: "Rollout checklist:",
          items: [
            "intent on the cluster card;",
            "one canonical URL;",
            "title/H1 aligned with intention;",
            "no conflicting CTAs;",
            "links to related intents.",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          text: "Hitting intent speeds relevance, but competitive core rank buildup is still planned for 2–6 months after promotion starts — not “TOP after one title tweak.”",
          kind: "tip",
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
