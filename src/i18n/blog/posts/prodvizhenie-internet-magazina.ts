import type { BlogPost } from "../../../data/blog";

/** EN overlay for prodvizhenie-internet-magazina — same structure as RU JSON. */
export const prodvizhenieInternetMagazinaEn: BlogPost = {
  slug: "prodvizhenie-internet-magazina",
  title: "How to promote an online store: tech, structure, SEO",
  date: "2021-11-08",
  category: "SEO",
  cover: "/images/blog/prodvizhenie-internet-magazina/cover-en.webp",
  excerpt:
    "Online-store SEO: technical audit, catalog structure, internal links, semantics, Title tags, product copy, and commercial trust signals.",
  lead: [
    "A site builder and filled product cards are only the start. A store grows in search when tech is solid, the catalog structure is clear, semantics are in place, and commercial trust signals are visible.",
    "Here’s a basic SEO outline for e-commerce. Preparing the site and ranking on the core are different stages: positions usually build over 2–6 months after work starts, not “a week after a few fixes.”",
  ],
  faq: [
    {
      q: "Where do I start if the store is already live?",
      a: "With a technical audit and the keyword core: speed, indexing, duplicates — then category structure and Title/description templates.",
    },
    {
      q: "How long until I reach TOP-10?",
      a: "Prep (tech, copy, structure) often takes weeks. Climbing into TOP on the core is planned over 2–6 months of work — no guaranteed date.",
    },
    {
      q: "Do categories need long SEO texts?",
      a: "A useful unique block is fine, especially near the top of the section. Keyword stuffing and a wall of text for its own sake hurt more than they help.",
    },
    {
      q: "What matters more — product page or category?",
      a: "Both layers. Categories collect demand by groups; product pages by specific models and brands. Without internal links between them the site is weaker.",
    },
    {
      q: "Is SEO enough on its own?",
      a: "For sales growth you usually also need ads, service, price, and stock. SEO is a demand channel — not a substitute for the offer.",
    },
  ],
  sections: [
    {
      title: "Technical audit",
      level: 2,
      paras: [
        "Start with what breaks indexing and UX: speed, mobile layout, status codes, redirects, HTTPS, sitemap, robots, filter duplicates, and pagination.",
      ],
      lists: [
        {
          intro: "Minimum check:",
          items: [
            "main templates load fast on mobile",
            "no mass 404s or redirect chains",
            "filters don’t spawn thousands of junk URLs in the index",
            "cart and checkout are stable.",
          ],
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
        {
          label: "SSL certificate",
          href: "/en/blog/ssl-sertifikat/",
        },
      ],
    },
    {
      title: "Catalog structure",
      level: 2,
      paras: [
        "Classic path: home → categories → subcategories → product pages + utility pages (shipping, payment, contacts, about). Navigation should be straight: cart and catalog within 1–2 clicks.",
        "Look at competitors in the same niche (not global marketplaces as the only benchmark): how sections are named, brands, filters, stock.",
      ],
      lists: [],
      links: [
        {
          label: "SEO site structure",
          href: "/en/blog/seo-struktura-sayta/",
        },
      ],
    },
    {
      title: "Internal linking",
      level: 2,
      paras: [
        "Internal links help users and search: from a category to strong products, between related items, to brands and collections.",
        "Keep outbound links meaningful. Don’t push utility junk into the index.",
      ],
      lists: [
        {
          intro: "Useful blocks:",
          items: [
            "related products (3–5)",
            "recommended / bestsellers",
            "breadcrumbs and category menus",
            "brand and filter pages — under clear indexing rules.",
          ],
        },
      ],
    },
    {
      title: "Semantics, Title, and copy",
      level: 2,
      paras: [
        "A store’s keyword core is clusters for categories, filters (where it fits), brands, and commercial phrasing like “buy / price / in stock”.",
        "Title is unique per template: product + type + brand/attribute — no copy-paste. On product pages — photos, video, specs, careful keywords; on categories — a short useful text, not a wall of fluff.",
      ],
      lists: [
        {
          intro: "Practice for products and sections:",
          items: [
            "unique Title per page",
            "brand and key attributes in the visible area",
            "category copy — better near the top than a “SEO footer”",
            "keywords without stuffing",
            "media that help choose the product.",
          ],
        },
      ],
      links: [
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          text: "You can assemble the core and templates in weeks. Share of phrases in TOP and steady organic traffic take longer — plan on 2–6 months of active work, not “launch = TOP”.",
        },
      ],
    },
    {
      title: "Commercial and behavioral factors",
      level: 2,
      paras: [
        "Search looks beyond copy: contacts, payment and shipping options, stock, price, reviews, and checkout ease affect trust and conversion — and conversion feeds behavioral signals.",
      ],
      lists: [
        {
          intro: "What to strengthen on the site:",
          items: [
            "clear contacts and company details",
            "shipping, payment, returns without fine print",
            "FAQ / Q&A on products",
            "snippets: Title and Description with benefit and keyword",
            "map / geo — if pickup and local demand matter.",
          ],
        },
      ],
    },
    {
      title: "Extras",
      level: 2,
      paras: [
        "Alongside SEO, feeds for ads, email/CRM, and comparison services can help — but the base is still tech + catalog + product pages.",
        "Don’t copy marketplace descriptions: uniqueness and help choosing the product beat keyword density.",
      ],
      lists: [],
    },
  ],
};
