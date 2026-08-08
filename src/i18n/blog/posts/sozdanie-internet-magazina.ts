import type { BlogPost } from "../../../data/blog";

/** EN overlay for sozdanie-internet-magazina — same structure as RU JSON. */
export const sozdanieInternetMagazinaEn: BlogPost = {
  slug: "sozdanie-internet-magazina",
  title: "10 things you can’t skip when building an online store",
  date: "2018-07-12",
  category: "E-commerce",
  cover: "/images/blog/sozdanie-internet-magazina/cover-en.webp",
  excerpt:
    "Clean design, mobile layout, photos, navigation, payment and SSL, assortment, search, support, speed, and reviews — a storefront checklist before you scale traffic.",
  lead: [
    "A pretty mockup doesn’t replace payment, stock, and a clear catalog. When you build an online store, the “boring” layers usually slip first: mobile storefront, product pages, search, and speed.",
    "Lock these ten points before heavy ad spend. We don’t recycle mobile-traffic share figures from old roundups — check your own analytics; the mobile experience is almost always critical.",
  ],
  faq: [
    {
      q: "Does this replace unit economics and purchasing?",
      a: "No. This is about the storefront and on-site service. Product, margin, and logistics are a separate loop — without them the site won’t save you.",
    },
    {
      q: "How is this different from “store optimization mistakes”?",
      a: "That piece covers hidden SEO and UX catalog traps (pagination, filters, pop-ups). This one is a base checklist when you build the storefront.",
    },
    {
      q: "Do I need chat from day one?",
      a: "Not a 24/7 widget. You need a clear contact channel and a reply SLA. Chat helps only if you actually answer.",
    },
    {
      q: "Is HTTPS required?",
      a: "Yes for a modern storefront with forms and payment — plus a privacy policy and current data-processing requirements.",
    },
    {
      q: "When should I connect SEO?",
      a: "After catalog structure, product pages, and tech basics. Prep usually takes weeks to about a month; ranking for the keyword set is planned over 2–6 months.",
    },
  ],
  sections: [
    {
      title: "Design, mobile, and photos",
      level: 2,
      paras: [
        "Design: avoid originality for animation’s sake, visual noise, and a random palette. A calm storefront focused on the product usually wins; follow the audience — not the owner’s taste.",
        "Responsive is required from first release: catalog, product page, cart, and payment must work well on a phone. Mobile purchase share depends on niche — check analytics, not 2018 figures.",
        "Photos: quality, contrasting background, several angles; for apparel and accessories, on-model shots help. A video review is a plus — not a substitute for a proper gallery.",
      ],
      lists: [
        {
          intro: "Common design misses:",
          items: [
            "extra effects instead of focus on the product",
            "element overload and slow load",
            "a loud palette untested on the audience",
            "a layout “for yourself,” not for the buyer",
          ],
        },
      ],
      links: [
        {
          label: "Online store usability",
          href: "/en/blog/yuzabiliti-internet-magazina/",
        },
        {
          label: "Product page essentials",
          href: "/en/blog/kartochka-tovara/",
        },
      ],
    },
    {
      title: "Navigation, payment, and a live assortment",
      level: 2,
      paras: [
        "Structure: categories by type or use, a visible menu, catalog, and breadcrumbs — so people and search understand where things sit. Breadcrumbs help navigation; they don’t magically deliver rankings on their own.",
        "Payment: familiar methods, clear checkout, HTTPS. Privacy policy and data-processing clarity — not “later,” but by the time forms and payment launch.",
        "Assortment: current prices and stock, regular updates, meaningful promos. Dead cards and stale inventory hit trust harder than an imperfect banner.",
      ],
      links: [
        {
          label: "Online store categories",
          href: "/en/blog/kategorii-internet-magazina/",
        },
        {
          label: "Online store homepage",
          href: "/en/blog/glavnaya-internet-magazina/",
        },
      ],
    },
    {
      title: "Search, support, speed, and reviews",
      level: 2,
      paras: [
        "Internal search with decent results by name or SKU saves bounce on large catalogs. Synonyms and frequent queries are worth setting up.",
        "Support: a live channel (chat, phone, messenger) with real replies helps people choose and buy more. An empty widget is worse than an honest “we reply in business hours.”",
        "Speed: a slow product page and cart cut conversion. Comfortable load times matter more than chasing an abstract score — check on a real phone.",
        "Reviews: ask happy customers to leave product and service feedback — trust and assortment insight. Fake reviews risk reputation and platforms.",
      ],
      links: [
        {
          label: "Starting an online store",
          href: "/en/blog/start-internet-magazina/",
        },
        {
          label: "Store optimization mistakes",
          href: "/en/blog/oshibki-internet-magazina/",
        },
        {
          label: "Online store promotion",
          href: "/en/blog/prodvizhenie-internet-magazina/",
        },
      ],
    },
  ],
  related: [
    "start-internet-magazina",
    "oshibki-internet-magazina",
    "yuzabiliti-internet-magazina",
    "prodvizhenie-internet-magazina",
    "kartochka-tovara",
  ],
};
