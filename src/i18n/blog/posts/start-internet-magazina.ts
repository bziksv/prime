import type { BlogPost } from "../../../data/blog";

/** EN overlay for start-internet-magazina — same structure as RU JSON. */
export const startInternetMagazinaEn: BlogPost = {
  slug: "start-internet-magazina",
  title: "How to start an online store: what to learn before you launch",
  date: "2020-11-10",
  category: "E-commerce",
  cover: "/images/blog/start-internet-magazina/cover-en.webp",
  excerpt:
    "A knowledge checklist before launching an online store: product and unit economics, storefront, payment and logistics, marketing and SEO — without “passive million with no effort” promises.",
  lead: [
    "Ideas like “open a store and put sales on autopilot” often come from books and courses with shouty titles. In practice a store is assortment, purchasing, storefront, payment, delivery, service, and marketing — not one “secret scheme.”",
    "Work through the checklist below before and right after launch, pick reading that teaches operations, and use our practical materials. We skip “10 books about a million a day” lists on purpose: many are outdated or sell motivation instead of operations.",
  ],
  faq: [
    {
      q: "Where should I start with no experience?",
      a: "With niche and unit economics: margin, purchasing, returns, logistics. Then storefront and payment, then traffic. Ads won’t save a site with no economics.",
    },
    {
      q: "Is your own site enough, or do I need a marketplace?",
      a: "Depends on the model. Marketplaces are a faster start and audience; your own site gives brand and margin control. Teams often combine both.",
    },
    {
      q: "Which books should I read?",
      a: "Pick practice: assortment, service, marketing at your scale, finance. Be wary of promises of a passive million “almost without effort.”",
    },
    {
      q: "Are Rework and similar useful?",
      a: "As a mindset of “do simpler and more honestly” — yes. As a step-by-step guide to a local store with checkout and delivery — no; add local rules and your own analytics.",
    },
    {
      q: "When should I connect SEO?",
      a: "After basic tech, catalog structure, and product cards. Prep takes weeks to about a month; core TOP growth is planned for 2–6 months, not “a week after texts.”",
    },
    {
      q: "What matters more than design at the start?",
      a: "Stock, price, cards, payment, delivery, and reply speed. A pretty storefront without those layers doesn’t convert.",
    },
    {
      q: "Do I need a marketer immediately?",
      a: "When you’re just starting, the founder plus a contractor for site/ads is often enough. When orders stabilize, grow the team or bring in an agency under KPIs.",
    },
  ],
  sections: [
    {
      title: "Business first, then a “pretty site”",
      level: 2,
      paras: [
        "Before the domain, answer: what you sell, to whom, where goods come from, what margin remains after ads and returns, how you’ll deliver, and who replies to the customer. Without that, book lists and CMS templates won’t help.",
        "Reading helps when it gives process and cases at your scale. Blindly copying big-brand tactics is a common mistake from old marketing roundups.",
      ],
      lists: [
        {
          intro: "Minimum before launch:",
          items: [
            "niche and USP;",
            "unit economics and working-capital buffer;",
            "supplier and lead times;",
            "payment and receipts setup;",
            "logistics and returns.",
          ],
        },
      ],
    },
    {
      title: "What to study by block",
      level: 2,
      paras: [
        "Split learning into operations, storefront, and demand. That way you don’t drown in motivational bestsellers.",
      ],
      lists: [
        {
          intro: "Operations:",
          items: [
            "purchasing, warehouse, defects, returns;",
            "who handles orders;",
            "service and reply speed.",
          ],
        },
        {
          intro: "Storefront:",
          items: [
            "name and trust;",
            "categories and product cards;",
            "descriptions, photos, stock, price;",
            "online payment and delivery.",
          ],
        },
        {
          intro: "Demand:",
          items: [
            "paid search and price aggregators;",
            "catalog SEO (horizon of months);",
            "marketplaces if needed;",
            "channel ROMI (return on marketing investment), not “everything at once.”",
          ],
        },
      ],
      links: [
        {
          label: "Online store name",
          href: "/en/blog/nazvanie-internet-magazina/",
        },
        {
          label: "Online store promotion",
          href: "/en/blog/prodvizhenie-internet-magazina/",
        },
        {
          label: "Online payment on the site",
          href: "/en/blog/onlayn-oplata/",
        },
      ],
    },
    {
      title: "How to read books and courses without illusions",
      level: 2,
      paras: [
        "Headlines about “a million a day” and “passive income with no effort” are almost always marketing for the book itself. Look for authors with verifiable operations, numbers, and niche limits.",
        "A useful filter: after a chapter you can take a concrete step (calculate margin, build a card, set up payment) — or only “get inspired.” The second belongs after first orders, not instead of them.",
        "Classics like Rework teach simplifying processes; practical “how to open a store” books give launch checklists. Neither replaces the law, checkout, a supplier contract, or your analytics.",
      ],
      lists: [
        {
          intro: "Red flags in reading:",
          items: [
            "guaranteed income and deadlines;",
            "“no investment” while you need stock and ads;",
            "outdated 2010s services and schemes with no caveats;",
            "no talk of returns, logistics, and service.",
          ],
        },
      ],
    },
    {
      title: "Launch order without romance",
      level: 2,
      paras: [
        "Start with a small MVP catalog → storefront and payment → demand test (ads/marketplace) → strengthen what brings orders → SEO and brand on a stable offer.",
        "Store manager, categories, keywords, and commercial factors connect as you grow — see related blog posts.",
      ],
      links: [
        {
          label: "Online store manager",
          href: "/en/blog/menedzher-internet-magazina/",
        },
        {
          label: "Marketing ROI",
          href: "/en/blog/roi-marketinga/",
        },
      ],
    },
  ],
  closing: [
    "Opening an online store means assembling economics, storefront, and a demand channel — not finding “one great book.” Learn by blocks and test ideas with orders, not with passive-million promises.",
  ],
};
