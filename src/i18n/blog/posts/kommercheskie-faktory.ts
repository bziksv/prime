import type { BlogPost } from "../../../data/blog";

/** EN overlay for kommercheskie-faktory — same structure as RU JSON. */
export const kommercheskieFaktoryEn: BlogPost = {
  slug: "kommercheskie-faktory",
  title: "Commercial factors in SEO: what builds trust",
  date: "2019-06-20",
  category: "SEO",
  cover: "/images/blog/kommercheskie-faktory/cover-en.webp",
  excerpt:
    "Contacts, assortment, purchase terms, “about the company,” and map/directory services — a practical commercial-factors checklist without the myth “a checkbox = TOP.”",
  lead: [
    "Commercial factors are on-site signals that help a person trust and buy: clear contacts, selection and prices, delivery and payment terms, company transparency, reviews, and useful services.",
    "Search engines don’t publish a full list of “ranking buttons,” but in practice a strong commercial setup more often matches better conversion and holds commercial SERP positions more steadily. Factor groups and a work order below are part of prep — not a promise of TOP rankings in a week.",
  ],
  faq: [
    {
      q: "Are commercial factors only for stores?",
      a: "Strongest for e-commerce and lead-gen services, but landings and B2B need them too: contacts, offer, cases, terms, legal details.",
    },
    {
      q: "Is there an official Yandex checklist?",
      a: "No full public list. Aim for what removes buyer doubt and matches the best pages in your niche TOP.",
    },
    {
      q: "What matters more: more copy, or contacts and prices?",
      a: "On commercial queries, offer completeness and trust often decide. Copy without prices, shipping, and ways to contact loses to a clear “how to buy.”",
    },
    {
      q: "Is a corporate email required?",
      a: "Preferred: `@domain.com` looks more reliable than a free mailbox. A phone with an area code and address/map are strong signals too.",
    },
    {
      q: "Do I need a live chat?",
      a: "If you actually reply. A dead widget is worse than none. Alternatives: form, callback, messengers.",
    },
    {
      q: "Are marketplaces and directories commercial factors?",
      a: "An adjacent trust and traffic track: directory and map profiles, marketplace storefronts — by niche. They don’t replace site quality.",
    },
    {
      q: "Are turbo pages required?",
      a: "No. Check current SERP formats and usefulness for your niche; priority is a fast, honest main site.",
    },
    {
      q: "When should I expect a ranking effect?",
      a: "Improving commercial signals is part of prep. Commercial-core ranking buildup is planned for 2–6 months after systematic work starts.",
    },
  ],
  sections: [
    {
      title: "What it is and why it matters",
      level: 2,
      paras: [
        "Commercial factors are everything that answers buyer questions before payment: who you are, how to contact you, what you sell, at what price, how to get and return it, why you can be trusted.",
        "They overlap UX and conversion: what helps people often matches what sets strong commercial documents apart in the SERP. Don’t confuse that with fake engagement or cloaking.",
      ],
      lists: [
        {
          intro: "Who needs it most:",
          items: [
            "online stores;",
            "services with a lead or site visit;",
            "local business with a visit;",
            "B2B with a long sales cycle.",
          ],
        },
      ],
      links: [
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
        {
          label: "On-page (internal) factors",
          href: "/en/blog/vnutrennie-faktory/",
        },
      ],
    },
    {
      title: "Contacts and communication channels",
      level: 2,
      paras: [
        "People must easily find phone, email, address or service area, messengers, and a form. For a chain — branch contacts; for delivery — clear geography.",
        "List current numbers with an area code, corporate email on the domain, a map if there’s a location. Registration and an account — only if the purchase flow truly needs them.",
      ],
      lists: [
        {
          intro: "Contact minimum:",
          items: [
            "phone and/or callback;",
            "email on the domain;",
            "a form or chat with replies;",
            "address/map or an honest service area;",
            "links to current social profiles and messengers.",
          ],
        },
      ],
      links: [
        {
          label: "Target audience",
          href: "/en/blog/tselevaya-auditoriya/",
        },
        {
          label: "Regional SEO",
          href: "/en/blog/regionalnoe-seo/",
        },
      ],
    },
    {
      title: "Assortment and choice",
      level: 2,
      paras: [
        "For a store, catalog breadth and depth signal scale and usefulness. Empty sections and “coming soon” lose to an honest narrow assortment with solid cards.",
        "On cards: name, price or a clear guide, stock, photos, specs, shipping. Compare with niche TOP: what you lack in selection and filters.",
      ],
      lists: [
        {
          intro: "Check:",
          items: [
            "no empty categories in the index;",
            "filters and catalog search exist;",
            "cards address objections;",
            "hits and promos don’t break URL structure.",
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
      title: "Sales terms and “about the company”",
      level: 2,
      paras: [
        "Shipping, payment, warranty, returns, timelines — blocks without which a commercial query often doesn’t convert. Place them visibly, not only in a footer PDF.",
        "Company presentation: legal details, team or brand face, licenses when needed, cases and reviews. For services — work stages and what’s in the price.",
      ],
      lists: [
        {
          intro: "Trust blocks:",
          items: [
            "prices / calculator / “from …” with honest terms;",
            "payment and shipping;",
            "warranty and returns;",
            "legal details and policies;",
            "reviews and work examples.",
          ],
        },
      ],
      links: [
        {
          label: "Reviews for sales",
          href: "/en/blog/otzyvy-dlya-prodazh/",
        },
        {
          label: "Landing page copy",
          href: "/en/blog/tekst-lendinga/",
        },
      ],
    },
    {
      title: "Data, media, and ecosystem services",
      level: 2,
      paras: [
        "Quality photos, diagrams, video reviews, and clear descriptions strengthen the card and cut bounces. Watch file weight — speed is part of commercial UX too.",
        "Yandex and Google services (maps/directories, storefronts, feeds when needed) complement the site but don’t mask holes in contacts and terms. Connect what you actually keep up to date.",
      ],
      lists: [
        {
          intro: "By niche it often makes sense:",
          items: [
            "a map/directory profile;",
            "consistent NAP;",
            "a feed/storefront for e-commerce;",
            "current hours and location photos.",
          ],
        },
      ],
      links: [
        {
          label: "Google Business Profile",
          href: "/en/blog/google-biznes/",
        },
      ],
    },
    {
      title: "How to implement and measure",
      level: 2,
      paras: [
        "Pull a benchmark from 3–5 TOP URLs on money queries: which blocks they have that you don’t. Roll out in packages (contacts → terms → cards → reviews); after releases watch conversion and cluster ranks.",
        "Commercial fixes are part of site prep. Climbing commercial TOP is planned over months after work starts (typically 2–6 months) — not “added a chat, top-3 tomorrow.”",
      ],
      lists: [
        {
          intro: "Rhythm:",
          items: [
            "checklist vs niche TOP;",
            "backlog by business impact;",
            "A/B or before/after conversion rate on key URLs;",
            "monthly review together with SEO KPIs.",
          ],
        },
      ],
      links: [
        {
          label: "SEO effectiveness",
          href: "/en/blog/effektivnost-seo/",
        },
        {
          label: "Competitor analysis",
          href: "/en/blog/analiz-konkurentov/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Strengthening commercial signals can take weeks. Core ranking buildup is planned for 2–6 months after systematic promotion starts.",
        },
      ],
    },
  ],
  related: [
    "prodvizhenie-internet-magazina",
    "optimizatsiya-konversii",
    "otzyvy-dlya-prodazh",
    "regionalnoe-seo",
    "effektivnost-seo",
    "vnutrennie-faktory",
  ],
};
