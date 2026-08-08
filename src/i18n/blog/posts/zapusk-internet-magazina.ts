import type { BlogPost } from "../../../data/blog";

/** EN overlay for zapusk-internet-magazina — same structure as RU JSON. */
export const zapuskInternetMagazinaEn: BlogPost = {
  slug: "zapusk-internet-magazina",
  title: "Launching an online store end to end: the real stages",
  date: "2020-11-20",
  category: "E-commerce",
  cover: "/images/blog/zapusk-internet-magazina/cover-en.webp",
  excerpt:
    "Online store launch stages: business plan, warehouse or dropshipping, platform, storefront, legal form and receipts, payments, team, and ads — without “store in one evening” promises or outdated 2020 price lists.",
  lead: [
    "On paper the scheme looks simple: site, products, sales. In practice the plan, supply, payments, service, and unit economics break first. There’s no universal playbook for every niche — there is a shared stage frame.",
    "Storefront checklists and “what to study first” live in neighboring pieces; this one covers the operational path from idea to acquiring customers. We don’t copy old state fees, SaaS tariffs, or “cost-per-click budgets” from vintage guides — check current rules and your own math.",
  ],
  faq: [
    {
      q: "How is this different from “10 points when creating a store”?",
      a: "That piece is storefront quality (design, responsive layout, photos, SSL). This one is business stages: plan, logistics, platform, legal form, payments, people, marketing.",
    },
    {
      q: "How does it differ from “starting an online store”?",
      a: "Start covers what to learn before launch. This material is the work sequence from plan to ads.",
    },
    {
      q: "Can I run without a warehouse?",
      a: "Yes: dropshipping or fulfillment. Downsides — margin, quality control, and lead times. Calculate unit economics, not only “convenient.”",
    },
    {
      q: "Which platform should I pick?",
      a: "Match catalog, integrations, and who will support it: CMS, plugin (WooCommerce), SaaS, builder, or custom. See the CMS downsides breakdown.",
    },
    {
      q: "Sole trader or limited company?",
      a: "Depends on partners, VAT, investors, and risk. Not legal advice — check current tax rules and your accountant.",
    },
    {
      q: "How much does a launch cost?",
      a: "The range is huge: niche, warehouse, build, ads. Don’t use old finger-in-the-air 2020 estimates as a budget.",
    },
    {
      q: "When does SEO start?",
      a: "After catalog structure, product cards, and tech. Prep is weeks to about a month; ranking for the keyword set is planned over 2–6 months after work starts.",
    },
    {
      q: "Do I need a team on day one?",
      a: "On a micro start the founder plus contractors often suffice. Grow roles (content, support, warehouse, IT) with load.",
    },
  ],
  sections: [
    {
      title: "Business plan before the domain",
      level: 2,
      paras: [
        "Describe the product and why it sells, supplier and delivery, regional competitors, storefront format (landing vs catalog), marketing, launch budget, people, and risks.",
        "The clearer margin, returns, and CAC numbers are, the lower the chance of “we have a site, no orders.”",
      ],
      lists: [
        {
          intro: "Plan minimum:",
          items: [
            "assortment and USP",
            "buying / storage / delivery",
            "unit economics and a working-capital buffer",
            "demand channels and a test budget",
            "risks (logistics, payments, staff)",
          ],
        },
      ],
      links: [
        {
          label: "Start: what to study",
          href: "/en/blog/start-internet-magazina/",
        },
      ],
    },
    {
      title: "Supply: warehouse, dropshipping, fulfillment",
      level: 2,
      paras: [
        "Your own warehouse — control of stock and packing, but rent and people. Dropshipping — no warehouse, lower margin, reputation depends on the partner. Fulfillment — outsourced intake, storage, and shipping when integrated with the store.",
        "“The fulfillment market is just starting” from 2020 texts is outdated: more offers exist. The criterion is the same — SLA, warehouse geography, cost per operation.",
      ],
    },
    {
      title: "Platform: CMS, SaaS, builder, or custom",
      level: 2,
      paras: [
        "A ready-made “turnkey” store from someone else is rarely transparent: you buy unknown SEO debt and ops. More often you build from scratch.",
        "Options: boxed CMS on your hosting; a shop plugin (e.g. WooCommerce); SaaS; a builder with a storefront; a heavy enterprise CMS; custom development.",
        "Look past entry price: catalog import, admin roles, payments/shipping, analytics, SEO hygiene, who will fix things. Popular CMS downsides are covered separately.",
      ],
      links: [
        {
          label: "CMS for an online store",
          href: "/en/blog/cms-internet-magazina/",
        },
        {
          label: "Tilda",
          href: "/en/blog/tilda/",
        },
      ],
    },
    {
      title: "Storefront and content",
      level: 2,
      paras: [
        "You need clear sections: about, shipping/payment/returns, catalog, cart, contacts, FAQ. Large assortment — categories and strong product cards.",
        "Memorable domain, HTTPS, forms and contact channels. Storefront quality lives in the “10 points” checklist.",
      ],
      links: [
        {
          label: "Online store creation checklist",
          href: "/en/blog/sozdanie-internet-magazina/",
        },
        {
          label: "Product card",
          href: "/en/blog/kartochka-tovara/",
        },
        {
          label: "Online payments",
          href: "/en/blog/onlayn-oplata/",
        },
      ],
    },
    {
      title: "Legal form, receipts, and payments",
      level: 2,
      paras: [
        "A sole trader is simpler at the start; a company fits partners, investment, and a different liability model. Business codes, tax regime, and online receipts follow current requirements — not 2019 screenshots.",
        "Payment methods: cards (acquiring), bank transfer, e-wallets where appropriate, cash on delivery, cash with courier/pickup, aggregators. The more familiar options without checkout surprises, the fewer abandoned carts.",
      ],
      notes: [
        {
          title: "Not legal advice",
          text: "Registration, receipts, and taxes change. Before launch check the tax authority / fiscal operator and your accountant; fees and timelines from old articles may no longer apply.",
        },
      ],
    },
    {
      title: "People and marketing after launch",
      level: 2,
      paras: [
        "Roles: storefront admin, content, support, warehouse/courier, accounting, IT. At the start people combine jobs; outsourcing is normal.",
        "Demand: SMM, SEO (months-long horizon), paid search, content, partners. Don’t bet everything on one channel. Count ROMI (return on marketing investment), not “reach for reach’s sake.”",
        "After go-live — analytics, reviews, conversion improvements. A “store in a few hours” with no economics is a myth.",
      ],
      links: [
        {
          label: "Promoting an online store",
          href: "/en/blog/prodvizhenie-internet-magazina/",
        },
        {
          label: "Online store manager",
          href: "/en/blog/menedzher-internet-magazina/",
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "Plan and supply first, then platform and storefront, then legal form/payments and demand.",
        "A platform doesn’t replace service and margin.",
        "SEO comes after structure; ranking for the keyword set is planned over 2–6 months after launch prep.",
      ],
    },
  ],
  closing: [
    "Put the stage frame into a table with dates and owners — and don’t run ads on empty economics and dead stock.",
  ],
  related: [
    "start-internet-magazina",
    "sozdanie-internet-magazina",
    "cms-internet-magazina",
    "kartochka-tovara",
    "prodvizhenie-internet-magazina",
    "onlayn-oplata",
  ],
};
