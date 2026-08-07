import type { BlogPost } from "../../../data/blog";

/** EN overlay for kategorii-internet-magazina — same structure as RU JSON. */
export const kategoriiInternetMagazinaEn: BlogPost = {
  slug: "kategorii-internet-magazina",
  title: "Online store categories: SEO and when to create new ones",
  date: "2021-07-05",
  category: "SEO",
  cover: "/images/blog/kategorii-internet-magazina/cover-en.webp",
  excerpt:
    "Why categories capture demand, when to create a new section, how to check demand and competitors, what content to write, and how to avoid cannibalization and crawl gaps.",
  lead: [
    "Category pages often drive a large share of store organic: people search for a “product type,” not a SKU. A section links the homepage to product cards and gains from internal links.",
    "Create a category when demand and assortment justify it; check demand, write a useful description, and watch cannibalization, thin assortment, and crawl. The overall e-com promotion loop is a separate article; structure prep ≠ instant TOP.",
  ],
  faq: [
    {
      q: "How many products should a category have?",
      a: "No hard rule. Match niche and competitor expectations: an empty section with 2–3 SKUs is weak for people and search. A filter/tag is better than an “empty” landing.",
    },
    {
      q: "Should I hide category copy under an “for SEO” spoiler?",
      a: "Bad practice. If the text is useful — show it. Hidden stuffing isn’t a substitute for assortment and filters.",
    },
    {
      q: "Is the category or the product card more important?",
      a: "Different intents: a product group vs a specific model. You need both layers and links between them.",
    },
    {
      q: "What is cannibalization?",
      a: "Several URLs fight for one query (two similar categories, category and tag). Rankings and analytics suffer — merge or split intents.",
    },
    {
      q: "When should you delete a category?",
      a: "If the assortment is gone, there’s no demand, or the section duplicates another. Use a 301 to the parent/related section — don’t leave a 404 without a redirect.",
    },
  ],
  sections: [
    {
      title: "Why categories matter for SEO",
      level: 2,
      paras: [
        "Broad queries (“sneakers,” “skinny jeans”) go to a listing, not one card. A category shows choice, filters, and a path to purchase.",
        "In store architecture, sections bridge homepage and products: they get many internal links and robots crawl them more often with solid linking.",
      ],
      lists: [
        {
          intro: "A category’s role:",
          items: [
            "a landing for a demand cluster;",
            "catalog navigation and UX;",
            "a link-equity donor to product cards;",
            "often a target for paid search.",
          ],
        },
      ],
      links: [
        {
          label: "E-commerce SEO",
          href: "/en/blog/prodvizhenie-internet-magazina/",
        },
        {
          label: "SEO site structure",
          href: "/en/blog/seo-struktura-sayta/",
        },
      ],
    },
    {
      title: "When to create a new category",
      level: 2,
      paras: [
        "You need steady demand and enough assortment. A seasonal trend, a new line, a stable long-tail (“skinny jeans” under general “jeans”) — reasons to test a separate URL.",
        "Don’t spawn sections “for a keyword” if products are few: better an attribute/filter. The catalog is alive — sections appear and close with the assortment.",
      ],
      lists: [
        {
          intro: "Signals for a new category:",
          items: [
            "analytics/webmaster show a refined query, but people land in a general section and bounce;",
            "competitors have a strong listing for that cluster;",
            "there are enough products to choose from;",
            "intent doesn’t match an existing URL one-to-one.",
          ],
        },
      ],
    },
    {
      title: "Demand, competitors, and priority",
      level: 2,
      paras: [
        "Gather keywords (Wordstat, planners, SEO tools), estimate volume and the SERP. Look at niche leaders’ listings: depth, filters, Title.",
        "Check the current tree: does the new section duplicate a neighbor. Priority — sections with demand and margin where you’re competitive on assortment.",
      ],
      lists: [
        {
          intro: "Mini-audit before launch:",
          items: [
            "query cluster and intent;",
            "SKU count now and the plan;",
            "URL, Title, H1;",
            "filters without a duplicate explosion;",
            "links from parent and product cards.",
          ],
        },
      ],
      links: [
        {
          label: "Keyword research",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Competitor analysis",
          href: "/en/blog/analiz-konkurentov/",
        },
      ],
    },
    {
      title: "Category content and risks",
      level: 2,
      paras: [
        "A useful unique block (how to choose, series differences, delivery/size chart) fits above or near the listing. A keyword sheet in the footer with no meaning is a weak signal.",
        "Risks: cannibalization with a similar section or tag; thin pages; filters spawning thousands of indexed URLs; weak linking so the crawler rarely reaches the section.",
      ],
      lists: [
        {
          intro: "After launching a category:",
          items: [
            "add to menu/breadcrumbs and sitemap;",
            "link from homepage/parent;",
            "close filter duplicates with indexing rules;",
            "watch positions and cannibalization in webmaster tools;",
            "don’t expect TOP “next week” — growth is planned.",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          text: "New structure and copy are prep. Ranking commercial categories for the core is planned over months of work after promotion starts.",
        },
      ],
      links: [
        {
          label: "Closing from indexing",
          href: "/en/blog/zakrytie-ot-indeksatsii/",
        },
      ],
    },
  ],
};
