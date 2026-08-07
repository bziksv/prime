import type { BlogPost } from "../../../data/blog";

/** EN overlay for klassifikatsiya-zaprosov — same structure as RU JSON. */
export const klassifikatsiyaZaprosovEn: BlogPost = {
  slug: "klassifikatsiya-zaprosov",
  title: "Classifying search queries by goals",
  date: "2017-09-28",
  category: "SEO",
  cover: "/images/blog/klassifikatsiya-zaprosov/cover-en.webp",
  excerpt:
    "How search queries are split: informational, commercial, transactional, navigational, geo, and seasonal — and why that matters for SEO and content. Frequency and competition are related axes, not a substitute for intent.",
  lead: [
    "A query isn’t just a “keyword” — it’s a person’s task: learn, find a site, compare, or buy. The type decides which page should answer and what content fits.",
    "Classify queries by goal first, then layer geo, season, frequency, and competition. How to read the SERP and not mix intents on one URL — in the user intent piece; HF/MF/LF — separately on frequency.",
  ],
  faq: [
    {
      q: "How is this different from user intent?",
      a: "This article is a taxonomy of query types. How to read intent from the SERP and build a page for it is covered separately.",
    },
    {
      q: "Are commercial and transactional the same?",
      a: "Commercial is close to purchase/price. Transactional is broader: download, subscribe, watch — any target action.",
    },
    {
      q: "One query — one type forever?",
      a: "No. A new product is first sought as info, then as a purchase. Check the current SERP.",
    },
    {
      q: "Does a commercial site need info traffic from a blog?",
      a: "Yes if the topic sits next to the offer and builds trust/internal links. Off-topic themes hurt.",
    },
    {
      q: "What does geo-dependence give?",
      a: "It hints whether you need local landings, maps, and city in the structure. Don’t confuse with navigational “brand name” queries.",
    },
    {
      q: "Is high frequency always more important than low?",
      a: "No. Frequency is volume; intent and margin matter more. See query frequency.",
    },
    {
      q: "Where to start clustering?",
      a: "Group by main intent → one priority page per cluster, then refine geo and commerce.",
    },
  ],
  sections: [
    {
      title: "Why split queries",
      level: 2,
      paras: [
        "Search matches result type to the task. A site wins when the page matches the dominant SERP intent.",
        "Types combine: “buy TV Moscow” is commercial/transactional + geo. Classification is a working map, not a rigid cage.",
      ],
      links: [
        {
          label: "User intent in SEO",
          href: "/en/blog/user-intent/",
        },
        {
          label: "Semantic keyword set",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "By goal: info, commerce, transactions, navigation",
      level: 2,
      paras: [
        "Informational — “how,” “what is,” reviews without a clear purchase. Useful for media and blogs; for a commercial site — if they lead to expertise and the offer.",
        "Commercial — buy, price, order, rent. Hot traffic, usually higher competition.",
        "Transactional — any target action: download, subscribe, watch, buy. Commercial queries are a common subtype.",
        "Navigational — a path to a specific brand/site (“sberbank login”). Hitting a competitor’s brand with a “about everything” article is usually pointless.",
        "Multimedia (“watch,” “listen,” “photos”) — a separate SERP; a commercial catalog rarely should compete with video platforms.",
      ],
      lists: [
        {
          intro: "A quick test on the SERP top results:",
          items: [
            "guides and Wiki — likely info;",
            "product cards and price lists — commerce;",
            "brand in the results — navigation;",
            "mixed types — mixed intent; be careful with one landing.",
          ],
        },
      ],
    },
    {
      title: "Geo, season, frequency, and competition",
      level: 2,
      paras: [
        "Geo-dependent queries expect a local answer; geo-independent ones — a general one. For on-site services, geo in the structure is required.",
        "Seasonal peaks change demand and the SERP — prepare content and ads early, not at the peak.",
        "HF/MF/LF and competition level are other axes of the same semantics: volume and entry difficulty. They don’t replace intent.",
      ],
      links: [
        {
          label: "Query frequency",
          href: "/en/blog/chastotnost-zaprosov/",
        },
        {
          label: "Wordstat",
          href: "/en/blog/wordstat/",
        },
      ],
    },
    {
      title: "Practice for the site",
      level: 2,
      paras: [
        "For each cluster’s main intent — its own URL. Don’t mix “how to choose” and “buy” on one thin page if the SERP is split.",
        "Keep info articles on a commercial domain on-product: otherwise you risk dilution and weak rankings.",
        "Revisit query type over time: the same brand query can shift from info to purchase.",
      ],
      links: [
        {
          label: "Page optimization",
          href: "/en/blog/optimizatsiya-stranitsy/",
        },
      ],
    },
  ],
  closing: [
    "Take 20 priority phrases from the keyword set and mark intent + geo: at that step you already see which landings are missing and where tasks are mixed for no reason.",
  ],
  related: [
    "user-intent",
    "semanticheskoe-yadro",
    "chastotnost-zaprosov",
    "wordstat",
    "optimizatsiya-stranitsy",
    "analiz-konkurentov",
  ],
};
