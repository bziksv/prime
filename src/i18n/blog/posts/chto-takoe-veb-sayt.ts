import type { BlogPost } from "../../../data/blog";

/** EN overlay for chto-takoe-veb-sayt — same structure as RU JSON. */
export const chtoTakoeVebSaytEn: BlogPost = {
  slug: "chto-takoe-veb-sayt",
  title: "What a website is: jobs, types, and how to build one",
  date: "2021-07-02",
  category: "Websites",
  cover: "/images/blog/chto-takoe-veb-sayt/cover-en.webp",
  excerpt:
    "What a website is in plain English: why business needs one, common types (brochure, corporate, store), how to choose a build path, and how pages work at a high level.",
  lead: [
    "A website is a set of linked pages under one address. For visitors it’s one resource: menu, sections, contacts. For business — a storefront, lead channel, and trust point next to ads and social.",
    "This piece covers why you need a site, which types exist, how to build one (studio, ready-made, builder), and how it works in broad strokes. Layout and server detail live in related posts.",
  ],
  faq: [
    {
      q: "What is a website?",
      a: "A set of web pages with shared logic and an address (domain) that users perceive as one resource.",
    },
    {
      q: "Do I need a site if I already have social profiles?",
      a: "For many niches — yes: catalog, SEO, legal info, and control of the channel. Social complements; it rarely fully replaces a site.",
    },
    {
      q: "How does a brochure site differ from a corporate site?",
      a: "Brochure — short “who we are and contacts.” Corporate — services, forms, content, sometimes an account area. A store adds catalog and checkout.",
    },
    {
      q: "Should I use a builder or a studio?",
      a: "A builder is faster and cheaper at the start. A studio fits complex logic, integrations, and quality control. A ready site from a marketplace risks penalties and someone else’s baggage.",
    },
    {
      q: "Do I need PHP to run a site?",
      a: "For a regular editor — no: a CMS and visual editor are enough. PHP and server work are a developer’s zone when you customize.",
    },
    {
      q: "What should a small business pick?",
      a: "Match type to the job: services → clear landings plus contacts; products → showcase or store. Don’t copy a hypermarket if ten SKUs are enough.",
    },
    {
      q: "Will a site bring clients by itself?",
      a: "No. You need demand, promotion (SEO/ads), and service. A site is infrastructure, not a magic button.",
    },
    {
      q: "How does this tie to SEO?",
      a: "Structure, speed, mobile, and clear URLs are set when you build. Fixing them after launch costs more.",
    },
  ],
  sections: [
    {
      title: "A site as a “book” in the browser",
      level: 2,
      paras: [
        "A useful analogy: the menu is the table of contents, About is the prologue, sections are chapters, contacts are the epilogue. A good site reads in sequence: people know where to go and what to do next.",
        "The domain is like the title on a shelf. Pages link inside; without structure both visitors and search engines get lost.",
      ],
      lists: [],
      links: [
        {
          label: "Site navigation",
          href: "/en/blog/navigatsiya-sayta/",
        },
        {
          label: "SEO site structure",
          href: "/en/blog/seo-struktura-sayta/",
        },
      ],
    },
    {
      title: "What jobs it solves",
      level: 2,
      paras: [
        "Inform: what you do, prices, terms. Back ads: where to send traffic from paid and offline. Give a contact channel: forms, phone, chat.",
        "Also — image and marketing: cases, articles, catalog. Firms without a site often lose to whoever shows up in “here and now” search.",
      ],
      lists: [
        {
          intro: "Typical reasons to launch a site:",
          items: [
            "explain the company and services;",
            "take inquiries around the clock;",
            "support ads with a landing;",
            "host a catalog or price list;",
            "build trust (details, reviews, cases).",
          ],
        },
      ],
    },
    {
      title: "Types of sites",
      level: 2,
      paras: [
        "By type people often split brochure, corporate, promo landing, showcase, and online store. By goals — commercial and non-commercial; by access — open, registration-gated, and closed.",
      ],
      lists: [
        {
          intro: "Types in short:",
          items: [
            "brochure — fast and short;",
            "corporate — full story plus leads;",
            "promo — for a campaign, often one-off;",
            "showcase — deep on a narrow range;",
            "store — catalog, cart, payment and shipping.",
          ],
        },
        {
          intro: "By job you also see:",
          items: [
            "news and topic portals;",
            "articles / blog;",
            "services and personal accounts;",
            "entertainment and community platforms.",
          ],
        },
      ],
    },
    {
      title: "How to create one",
      level: 2,
      paras: [
        "Studio or freelance — from a brief, less risk of crooked logic, costlier and slower. A ready site from a marketplace saves time but risks filters, security holes, and third-party content.",
        "A DIY builder is a fine start for simple jobs. Free tiers often cut features, templates, and domain; a paid plan is usually more predictable for business.",
      ],
      lists: [
        {
          intro: "Before you pick a path:",
          items: [
            "budget and timeline;",
            "whether you need catalog, payment, or integrations;",
            "who will update content;",
            "whether you need search growth (SEO).",
          ],
        },
      ],
      links: [
        {
          label: "Website layout",
          href: "/en/blog/verstka-saytov/",
        },
        {
          label: "Web server",
          href: "/en/blog/veb-server/",
        },
      ],
    },
    {
      title: "How it works under the hood",
      level: 2,
      paras: [
        "The user opens a URL in the browser; the request hits a server; the server returns a page (HTML/CSS/JS and data). Updating texts and products is usually a CMS job — a public view plus an admin panel.",
        "An editor only needs the admin. Complex logic, integrations, and performance are development territory. A well-built site doesn’t magnetize clients alone: you still need demand, promotion, and service.",
      ],
      lists: [],
      links: [
        {
          label: "What is SEO",
          href: "/en/blog/chto-takoe-seo/",
        },
        {
          label: "Digital agency",
          href: "/en/blog/didzhital-agentstvo/",
        },
      ],
    },
  ],
  related: [
    "navigatsiya-sayta",
    "seo-struktura-sayta",
    "verstka-saytov",
    "veb-server",
    "chto-takoe-seo",
    "didzhital-agentstvo",
  ],
};
