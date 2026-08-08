import type { BlogPost } from "../../../data/blog";

/** EN overlay for yml-fayl — same structure as RU JSON. */
export const ymlFaylEn: BlogPost = {
  slug: "yml-fayl",
  title: "YML file for Yandex Market: why you need it and how to prepare it",
  date: "2020-10-20",
  category: "Digital marketing",
  cover: "/images/blog/yml-fayl/cover-en.webp",
  excerpt:
    "What an online store YML feed is, why it beats CSV/XLS on a large catalog, which fields matter, and how to load a price list into Market — without outdated cabinet screenshots.",
  lead: [
    "YML (Yandex Market Language) is an XML product feed for Yandex Market and related scenarios. The platform uses it for names, prices, availability, links, and attributes to show the storefront and take orders under its rules.",
    "Below: why YML beats hand-edited tables, what the feed contains, and how to build and refresh it. Market cabinet menu items change — check current Yandex Help.",
  ],
  faq: [
    {
      q: "YML, CSV, or XLS?",
      a: "For a small manual catalog a spreadsheet can be enough. At hundreds of SKUs YML is easier: auto-refresh from CMS or accounting and richer attribute fields.",
    },
    {
      q: "Can one feed serve every marketplace?",
      a: "The base can be shared, but fields and categories differ by platform. Teams often keep one source and separate exports or mapping. See Market alternatives.",
    },
    {
      q: "How often should I update the price list?",
      a: "The more price and inventory change — the more often. Stale availability hurts rating and returns. Aim for automatic updates, not once a month by hand.",
    },
    {
      q: "Do I need to write XML by hand?",
      a: "Rarely. Usually a CMS module, plugin, or ERP export. Hand edits are for tests and spot fixes — not thousands of cards.",
    },
    {
      q: "What breaks moderation most often?",
      a: "Empty required fields, broken links or photos, wrong categories, price or availability from the past, forbidden wording in the title.",
    },
    {
      q: "Is YML the same as a Turbo feed?",
      a: "No. YML is a product price list for Market or ads. Turbo was a separate accelerated-pages story — and that product format is outdated.",
    },
    {
      q: "Where can I see errors?",
      a: "In the partner or Market cabinet after feed upload and in moderation emails. Fix the data source, not only the file on disk.",
    },
  ],
  sections: [
    {
      title: "Why a store needs a Market feed",
      level: 2,
      paras: [
        "Market shows products in comparison catalogs and related surfaces. Without a correct price list, cards won’t appear or will show wrong price and availability.",
        "The feed is the bridge between your inventory system and the platform storefront: update price on site or warehouse → file updates → listing updates.",
      ],
      lists: [
        {
          intro: "Price-list formats:",
          items: [
            "CSV — simple delimited text",
            "XLS or spreadsheet — easy to edit by hand on a small set",
            "YML — XML for Market, better for auto-export and attributes",
          ],
        },
      ],
    },
    {
      title: "How YML is structured",
      level: 2,
      paras: [
        "The file usually describes the shop, currencies, categories, and offers (`offer`): id, url, price, currencyId, categoryId, picture, name/description, availability, and parameters.",
        "Exact required fields and schemas (simplified or custom type) are in current Yandex docs — requirements keep expanding.",
      ],
      lists: [
        {
          intro: "Keep each offer in order:",
          items: [
            "stable product id",
            "working product-card url on your site",
            "current price and availability",
            "clear name (type plus model, no junk)",
            "photos per platform rules",
            "category and key param fields",
          ],
        },
      ],
    },
    {
      title: "How to create and upload the file",
      level: 2,
      paras: [
        "Preferred path: store module or scheduled export from accounting, file available at an HTTPS URL. Market then pulls updates itself.",
        "Alternative — manual file upload in the cabinet. Fine for tests, poor as the only process on a live catalog.",
      ],
      lists: [
        {
          intro: "Order without old button names:",
          items: [
            "assemble assortment and categories in the source of truth",
            "generate YML and validate XML",
            "open the feed URL from the server",
            "connect the price list in the Market cabinet",
            "read moderation errors and fix the source",
          ],
        },
      ],
      links: [
        {
          label: "Online store promotion",
          href: "/en/blog/prodvizhenie-internet-magazina/",
        },
      ],
    },
    {
      title: "Errors and ongoing care",
      level: 2,
      paras: [
        "After upload watch reports: unreachable URLs, empty images, duplicate ids, wrong currency. Moderation emails are a work signal, not spam.",
        "Keep one source for prices and inventory. Site and feed mismatch hurts trust more than missing another marketplace.",
      ],
      links: [
        {
          label: "Yandex Market alternatives",
          href: "/en/blog/analogi-yandeks-market/",
        },
      ],
    },
  ],
  closing: [
    "YML is the working language of a Market product price list: auto-updates, attributes, and less manual grind than spreadsheets. Build the feed from inventory, refresh often, and fix errors in the data source.",
  ],
};
