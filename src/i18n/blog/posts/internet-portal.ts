import type { BlogPost } from "../../../data/blog";

/** EN overlay for internet-portal — same structure as RU JSON. */
export const internetPortalEn: BlogPost = {
  slug: "internet-portal",
  title: "Internet portal: structure, types, and how it differs from a site",
  date: "2021-02-02",
  category: "Digital marketing",
  cover: "/images/blog/internet-portal/cover-en.webp",
  excerpt:
    "What an internet portal is, how it differs from a regular site, what structure and types look like — and when a business needs a portal vs a services site.",
  lead: [
    "An internet portal is a large multi-function platform: news, services, user accounts, catalogs, and tools in one ecosystem. Users come to get their bearings and stay to solve several tasks in one place.",
    "A portal’s architecture, how it differs from a company site, and the main types matter more than “build the next Yandex in a month”: a portal is about scale, editorial work, and product logic.",
    "If you need a services site or a lead landing — simpler and cheaper usually wins; a portal pays off when value is in the bundle of sections and services.",
  ],
  faq: [
    {
      q: "How does a portal differ from a site?",
      a: "A site usually covers one role (storefront, shop, blog). A portal combines several services and flows under one entry and navigation.",
    },
    {
      q: "Is a portal the same as a marketplace?",
      a: "Not necessarily. A marketplace is one type. A portal can be news, corporate, industry, government services, media+tools.",
    },
    {
      q: "Does a portal need SEO?",
      a: "Yes: sections, snippets, speed, indexing. But success depends even more on product, content, and retention inside the ecosystem.",
    },
    {
      q: "How long does a portal launch take?",
      a: "An MVP for a narrow industry portal — months. A large ecosystem — years of iteration. SEO prep and sections reaching the TOP are different timelines.",
    },
    {
      q: "Can a regular corporate site be called a portal?",
      a: "Marketers sometimes do. In practice — no, if there’s no multi-service depth and deep structure.",
    },
    {
      q: "What matters more: design or structure?",
      a: "Structure and flows. Pretty UI without a clear section map becomes a maze.",
    },
    {
      q: "Do you need a user account area?",
      a: "Often yes: personalization, saved data, requests, subscriptions. See the personal-account article.",
    },
    {
      q: "Should a portal chase head keywords?",
      a: "Big head keywords are competitive. A working strategy is clusters per section and service, plus brand. TOP for a keyword set is planned over months of work.",
    },
  ],
  sections: [
    {
      title: "What users expect from a portal",
      level: 2,
      paras: [
        "On a portal people solve several jobs without ten tabs: news, a directory, a personal service, section search, sometimes payment or a request. The expectation is “everything I need on this topic is here.”",
        "So a unified entry, clear menu, sitewide search, and a sense that sections connect — not randomly glued — are critical.",
      ],
      lists: [
        {
          intro: "Typical flows:",
          items: [
            "read news and dive into a guide;",
            "find a service/product and take action;",
            "open the account and check status;",
            "use a calculator, map, or catalog.",
          ],
        },
      ],
    },
    {
      title: "Site vs portal: the difference",
      level: 2,
      paras: [
        "A company site answers “who you are and how to buy.” A portal answers “how to live in this topic”: information + tools + community/services.",
        "The line is blurry: a large media site with subscriptions is close to a portal; a tiny three-page “portal” is just a buzzword.",
      ],
      lists: [
        {
          intro: "Practical differences:",
          items: [
            "depth of sections and services;",
            "personal account and user roles;",
            "editorial / moderation / update cadence;",
            "integrations (payment, CRM, partner APIs);",
            "load and architecture above a business-card site.",
          ],
        },
      ],
      links: [
        {
          label: "Personal account",
          href: "/en/blog/lichnyy-kabinet/",
        },
        {
          label: "SEO site structure",
          href: "/en/blog/seo-struktura-sayta/",
        },
      ],
    },
    {
      title: "Structure: what it’s built from",
      level: 2,
      paras: [
        "A portal frame is a section map, page-type templates, global navigation, search, and an account. Separately — permissions: guest, user, editor, admin.",
        "Content lives by categories and entities (articles, cards, events). Services are products inside the product: each has its own entry and metrics.",
      ],
      lists: [
        {
          intro: "Core blocks:",
          items: [
            "home as navigator;",
            "content sections;",
            "catalogs / databases;",
            "service tools;",
            "account and notifications;",
            "help / FAQ / support.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Building “everything at once” without prioritizing flows. Better to launch 1–2 strong services and grow than a half-empty pile of sections.",
        },
      ],
    },
    {
      title: "Portal classification",
      level: 2,
      paras: [
        "By audience: horizontal (broad topic) and vertical (industry). By model: media, services, marketplaces, corporate/intranet, government.",
        "Businesses usually care about industry and corporate: expertise + account + leads — without claiming to “be the whole internet.”",
      ],
      lists: [
        {
          intro: "Logic examples (not a brand ranking):",
          items: [
            "news/media portal — editorial and reach;",
            "service portal — utilities and return visits;",
            "commerce — catalog and deals;",
            "corporate — employees and documents;",
            "industry — narrow audience and leads.",
          ],
        },
      ],
    },
    {
      title: "When a business needs a portal",
      level: 2,
      paras: [
        "It makes sense when value is the ecosystem: knowledge base + client accounts + partner catalog + requests. If the goal is one service and a call, a site or landing is cheaper.",
        "Count support cost: editorial, moderation, development, security. A portal without updates quickly looks dead.",
      ],
      lists: [
        {
          intro: "Before starting, answer:",
          items: [
            "which 3 flows are required in the MVP;",
            "who fills content weekly;",
            "how you measure success (not traffic alone);",
            "whether the budget covers a year+ of support.",
          ],
        },
      ],
      links: [
        {
          label: "Landing page",
          href: "/en/blog/lending/",
        },
        {
          label: "Digital agency",
          href: "/en/blog/didzhital-agentstvo/",
        },
      ],
    },
    {
      title: "SEO and analytics on a portal",
      level: 2,
      paras: [
        "Split semantics by section, avoid thin category duplicates, watch pagination and filters. Tech: speed, mobile, indexing, error logs.",
        "In analytics look beyond entry pages — paths through services and account conversions. Structure prep takes weeks; building rankings for commercial clusters is planned 2–6 months.",
      ],
      lists: [
        {
          intro: "Checklist:",
          items: [
            "landing map for clusters;",
            "canonical and parameter policy;",
            "separate goals for key services;",
            "404/5xx monitoring on templates.",
          ],
        },
      ],
      links: [
        {
          label: "Pagination",
          href: "/en/blog/paginatsiya/",
        },
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          text: "Launching a portal MVP is not the same as sections reaching the TOP. Product and indexing first, then growing visibility for the keyword set.",
        },
      ],
    },
  ],
};
