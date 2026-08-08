import type { BlogPost } from "../../../data/blog";

/** EN overlay for internet-portal — same structure as RU JSON. */
export const internetPortalEn: BlogPost = {
  slug: "internet-portal",
  title: "Internet portal: structure, types, and how it differs from a site",
  date: "2021-02-02",
  category: "Digital marketing",
  cover: "/images/blog/internet-portal/cover-en.webp",
  excerpt:
    "What an internet portal is, how it differs from a regular site, how structure and types break down — and when a business needs a portal versus a services site.",
  lead: [
    "An internet portal is a large multi-function platform: news, tools, accounts, catalogs, and services in one ecosystem. People arrive to orient themselves and stay to finish several jobs in a row.",
    "Below: how a portal is built, how it differs from a company site, and which types show up in practice. This is not a “build the next Google in a month” brief — a portal is scale, editorial capacity, and product logic.",
    "If you need a services site or a lead landing, simpler and cheaper usually wins. A portal pays off when the value is the bundle of sections and services, not one page with a form.",
  ],
  faq: [
    {
      q: "How does a portal differ from a site?",
      a: "A site usually covers one role — storefront, shop, or blog. A portal combines several services and journeys under one entry and navigation.",
    },
    {
      q: "Is a portal the same as a marketplace?",
      a: "Not necessarily. A marketplace is one type. A portal can be news, corporate, industry, government services, or media plus tools.",
    },
    {
      q: "Does a portal need SEO?",
      a: "Yes: sections, snippets, speed, indexing. Success still leans harder on product, content, and retention inside the ecosystem.",
    },
    {
      q: "How long does a launch take?",
      a: "An MVP for a narrow industry portal takes months. A large ecosystem takes years of iteration. SEO prep and page-one visibility for sections are different clocks.",
    },
    {
      q: "Can a regular corporate site be called a portal?",
      a: "Marketers sometimes stretch the word. In substance — no, if there is no multi-service depth and a deep section map.",
    },
    {
      q: "What matters more: design or structure?",
      a: "Structure and journeys. Pretty UI without a clear section map becomes a maze.",
    },
    {
      q: "Do you need a personal account?",
      a: "Often yes: personalization, saved data, requests, subscriptions. See the personal-account article.",
    },
    {
      q: "Should a portal chase head terms?",
      a: "Big head terms are crowded. A working plan is clusters per section and service, plus brand. Visibility for the core set is planned over months of work — often 2–6 months for commercial clusters.",
    },
  ],
  sections: [
    {
      title: "What users expect from a portal",
      level: 2,
      paras: [
        "On a portal people finish several jobs without ten tabs: news, a directory, a personal service, section search, sometimes payment or a request. The expectation is “everything I need on this topic lives here.”",
        "That is why a single entry point, a clear menu, sitewide search, and a sense that sections connect — not randomly glued — matter so much.",
      ],
      lists: [
        {
          intro: "Typical journeys:",
          items: [
            "read a news item and dive into a guide",
            "find a service or product and take action",
            "open the account and check status",
            "use a calculator, map, or catalog",
          ],
        },
      ],
    },
    {
      title: "Site vs portal: the difference",
      level: 2,
      paras: [
        "A company site answers “who you are and how to buy.” A portal answers “how to live in this topic”: information, tools, and community or services.",
        "The line is blurry. A large media site with subscriptions sits close to a portal. A three-page “portal” is usually just a loud label.",
      ],
      lists: [
        {
          intro: "Practical differences:",
          items: [
            "depth of sections and services",
            "personal account and user roles",
            "editorial, moderation, and update cadence",
            "integrations — payment, CRM, partner APIs",
            "load and architecture above a business-card site",
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
        "The frame is a section map, page-type templates, global navigation, search, and an account. Separately — permissions: guest, user, editor, admin.",
        "Content lives by categories and entities — articles, cards, events. Services are products inside the product: each has its own entry and metrics.",
      ],
      lists: [
        {
          intro: "Core blocks:",
          items: [
            "home as navigator",
            "content sections",
            "catalogs and databases",
            "service tools",
            "account and notifications",
            "help, FAQ, support",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Shipping “everything at once” without prioritizing journeys. Better to launch one or two strong services and grow than a half-empty zoo of sections.",
        },
      ],
    },
    {
      title: "Portal types",
      level: 2,
      paras: [
        "By audience: horizontal (broad topic) and vertical (industry). By model: media, services, marketplaces, corporate or intranet, government.",
        "Businesses usually care about industry and corporate builds: expertise, account, leads — without pretending to be the whole internet.",
      ],
      lists: [
        {
          intro: "Logic examples (not a brand ranking):",
          items: [
            "news or media portal — editorial and reach",
            "service portal — utilities and return visits",
            "commerce — catalog and deals",
            "corporate — employees and documents",
            "industry — narrow audience and leads",
          ],
        },
      ],
    },
    {
      title: "When a business needs a portal",
      level: 2,
      paras: [
        "It makes sense when the value is the ecosystem: knowledge base, client accounts, partner catalog, requests. If the goal is one service and a call, a site or landing is cheaper.",
        "Count support cost: editorial, moderation, development, security. A portal without updates looks dead fast.",
      ],
      lists: [
        {
          intro: "Before you start, answer:",
          items: [
            "which three journeys are required in the MVP",
            "who fills content every week",
            "how you measure success — not traffic alone",
            "whether the budget covers a year or more of support",
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
        "Split keyword sets by section, avoid thin category duplicates, watch pagination and filters. On the tech side: speed, mobile, indexing, error logs.",
        "In analytics look past entry pages — paths through services and account conversions. Structure prep takes weeks. Building visibility for commercial clusters is planned over 2–6 months.",
      ],
      lists: [
        {
          intro: "Checklist:",
          items: [
            "landing map for clusters",
            "canonical and parameter policy",
            "separate goals for key services",
            "404 and 5xx monitoring on templates",
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
          kind: "tip",
          text: "Shipping a portal MVP is not the same as sections ranking on page one. Product and indexing first, then grow visibility for the keyword set.",
        },
      ],
    },
  ],
};
