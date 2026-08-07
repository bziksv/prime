import type { BlogPost } from "../../../data/blog";

/** EN overlay for klyuchi-internet-magazin — same structure as RU JSON. */
export const klyuchiInternetMagazinEn: BlogPost = {
  slug: "klyuchi-internet-magazin",
  title: "Keywords for an online store: research and filtering",
  date: "2021-01-26",
  category: "SEO",
  cover: "/images/blog/klyuchi-internet-magazin/cover-en.webp",
  excerpt:
    "How to build semantics for an online store: products and categories, keyword tools and junk filters, clusters for cards — without copying a competitor’s core “as is” or promising TOP in a week.",
  lead: [
    "Store semantics are built around the catalog: categories, filters, cards, and informational articles. Demand and clusters first — then copy and structure, not the other way around.",
    "Below — where to get keywords, how to clean the list, and how to map queries to page types. General core theory is in the semantic-core article; here the focus is e-commerce.",
    "Prep of semantics and landings takes weeks. Getting a commercial core into TOP is planned 2–6 months after promotion starts.",
  ],
  faq: [
    {
      q: "Where to start: products or categories?",
      a: "From demand markers: what buyers search. Then decide whether you need a separate category, a filter, or cards are enough.",
    },
    {
      q: "How is this different from a regular keyword core?",
      a: "More SKUs, commercial tails (“buy”, “price”, “with delivery”), plus the risk of thin filter pages.",
    },
    {
      q: "Can you copy a competitor’s keywords?",
      a: "Studying competitors helps. Copying the whole core — no: different structure, assortment, and region.",
    },
    {
      q: "Is Wordstat required?",
      a: "For RU markets it’s a handy start. Add search suggestions, Webmaster reports, ads data, and the store’s internal search.",
    },
    {
      q: "Do you need Key Collector?",
      a: "It speeds mass collection and cleanup. You can start manually; on large catalogs software saves time.",
    },
    {
      q: "What about zero frequency?",
      a: "Some long-tail still brings traffic. Don’t spawn empty pages for every rare form.",
    },
    {
      q: "Are Ads and SEO keywords one list?",
      a: "They overlap. Ads lean harder on negatives and commercial intent; SEO on landings and content.",
    },
    {
      q: "When to expect TOP for product queries?",
      a: "After catalog prep — ranking growth is planned over months, not days.",
    },
  ],
  sections: [
    {
      title: "Why a store needs its own core",
      level: 2,
      paras: [
        "Without semantics the catalog grows “as purchasing prefers”, not as buyers search. Categories miss demand, cards lack tails, filters junk the index.",
        "The core links assortment to URLs: what to promote first, which texts to write, where to send ads.",
      ],
      lists: [
        {
          intro: "What a working store core gives:",
          items: [
            "priority of categories and brands;",
            "briefs for cards and filters;",
            "junk-query negatives;",
            "a shared map with ads and SEO.",
          ],
        },
      ],
      links: [
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Online store categories",
          href: "/en/blog/kategorii-internet-magazina/",
        },
      ],
    },
    {
      title: "Where to find keywords",
      level: 2,
      paras: [
        "Markers: product names, categories, brands, synonyms, problems (“cheap”, “with installation”). Expand with Wordstat, search suggestions, competitor exports as ideas — not as a final list.",
        "On-site search and ads reports often give live customer wording.",
      ],
      lists: [
        {
          intro: "Sources:",
          items: [
            "Yandex Wordstat (base and refined frequency);",
            "suggestions and “related queries”;",
            "Key Collector / peers for mass work;",
            "Webmaster: search queries;",
            "internal search and support.",
          ],
        },
      ],
      links: [
        {
          label: "Query frequency",
          href: "/en/blog/chastotnost-zaprosov/",
        },
      ],
      notes: [
        {
          title: "Tools",
          kind: "tip",
          text: "Service names and limits change. What matters is the process: marker → expand → clean → cluster → page.",
        },
      ],
    },
    {
      title: "Filtering junk",
      level: 2,
      paras: [
        "Drop off-target: another city, a competitor brand you don’t carry, informational “what is” if you have no blog for it, non-purchase queries if the goal is sales now.",
        "Keep commercial markers and long-tail with a clear landing. Don’t store in the core what you won’t build a URL for.",
      ],
      lists: [
        {
          intro: "Typical store junk:",
          items: [
            "jobs and “download price list” without need;",
            "competitor-brand queries outside your matrix;",
            "kids/adult overlaps from the wrong niche;",
            "typo duplicates with no traffic.",
          ],
        },
      ],
    },
    {
      title: "Clusters: category, filter, card",
      level: 2,
      paras: [
        "High- and mid-frequency category queries go to listings. Modifiers (color, size, “with delivery”) go to filters or landings if demand and assortment support them. Exact models go to cards.",
        "Don’t spawn a thousand nearly empty filter URLs for every checkbox. Facet indexing policy is a separate decision.",
      ],
      lists: [
        {
          intro: "Mapping rule:",
          items: [
            "one main intent — one priority page;",
            "a card doesn’t compete with a category for the same head term;",
            "brand + product has its own section logic;",
            "informational queries go to the blog, not the card.",
          ],
        },
      ],
      links: [
        {
          label: "Promoting an online store",
          href: "/en/blog/prodvizhenie-internet-magazina/",
        },
        {
          label: "Pagination",
          href: "/en/blog/paginatsiya/",
        },
      ],
    },
    {
      title: "How to apply the core in work",
      level: 2,
      paras: [
        "The core is a living file: priority, frequency, URL, status “page exists / needed / in progress”. From it you write Title, H1, category copy, and briefs for writers.",
        "Ads take commercial clusters with negatives; SEO strengthens landings and snippets.",
      ],
      lists: [
        {
          intro: "Monthly ritual:",
          items: [
            "new products → new markers;",
            "delisted items → redirects/cleanup;",
            "Webmaster queries → into the core or negatives;",
            "revisit top priorities by margin.",
          ],
        },
      ],
    },
    {
      title: "What to avoid",
      level: 2,
      paras: [
        "Copying a competitor’s core, pages for every long-tail without stock, keyword stuffing on cards, expecting TOP right after uploading Titles.",
        "Stronger than “secret parsers”: clean structure, stock, price/availability, decent photos, and commercial factors.",
      ],
      lists: [
        {
          intro: "Red flags:",
          items: [
            "a 50k-row core with no clusters;",
            "filters in the index with no content;",
            "one text for all categories with a word swap;",
            "bids only on head terms with no long-tail matrix.",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          text: "Collecting and first mapping a mid-size store core — from a few days to a couple of weeks. Building rankings for competitive product queries — months of systematic work (planned 2–6 months).",
        },
      ],
    },
  ],
};
