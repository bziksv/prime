import type { BlogPost } from "../../../data/blog";

/** EN overlay for sozdanie-internet-magazina — same structure as RU JSON. */
export const sozdanieInternetMagazinaEn: BlogPost = {
  slug: "sozdanie-internet-magazina",
  title: "10 points you can’t ignore when building an online store",
  date: "2018-07-12",
  category: "Internet marketing",
  cover: "/images/blog/sozdanie-internet-magazina/cover-en.webp",
  excerpt:
    "Design without overload, responsive, photos, navigation, payment and SSL, assortment, search, support, speed, and reviews — a base storefront checklist before scaling traffic.",
  lead: [
    "A pretty mockup doesn’t replace payment, stock, and a clear catalog. When building an online store, the “boring” layers usually slip: mobile storefront, product pages, search, and speed.",
    "Below — ten points to close before aggressive ads. We don’t copy mobile-traffic share figures from old reviews: check your analytics — the mobile path is almost always critical.",
  ],
  faq: [
    {
      q: "Is this instead of unit economics and purchasing?",
      a: "No. This is about the storefront and on-site service. Product, margin, and logistics are a separate loop — without them the site won’t save you.",
    },
    {
      q: "How is it different from “store optimization mistakes”?",
      a: "That one — hidden SEO/UX catalog traps (pagination, filters, pop-ups). This one — a base checklist when creating the storefront.",
    },
    {
      q: "Do you need chat from day one?",
      a: "Not a 24/7 widget. You need a clear contact channel and reply SLA. Chat helps if you actually answer.",
    },
    {
      q: "Is HTTPS required?",
      a: "Yes for a modern storefront with forms and payment. Plus a privacy policy and current data-processing requirements.",
    },
    {
      q: "When to connect SEO?",
      a: "After catalog structure, product pages, and tech. Prep — weeks/~a month; core into TOP is planned for 2–6 months.",
    },
  ],
  sections: [
    {
      title: "Design, mobile, and photos",
      level: 2,
      paras: [
        "Design: avoid “originality for animation’s sake”, visual noise, and a random palette. A calm storefront focused on the product usually wins; the guide is the audience — not the owner’s taste.",
        "Responsive is required from first release: catalog, product page, cart, and payment must work well on a phone. Mobile purchase share depends on niche — check analytics, not 2018 figures.",
        "Photos: quality, contrasting background, several angles; for apparel/accessories, “on model” shots help. A video review is a plus — not a substitute for a proper gallery.",
      ],
      lists: [
        {
          intro: "Common design misses:",
          items: [
            "extra effects instead of focus on the product;",
            "element overload and slow load;",
            "a loud palette untested on the audience;",
            "a layout “for yourself”, not for the buyer.",
          ],
        },
      ],
      links: [
        {
          label: "Online store usability",
          href: "/en/blog/yuzabiliti-internet-magazina/",
        },
        {
          label: "Product page",
          href: "/en/blog/kartochka-tovara/",
        },
      ],
    },
    {
      title: "Navigation, payment, and a live assortment",
      level: 2,
      paras: [
        "Structure: categories by type/use, visible menu, catalog and breadcrumbs — so people and search understand where things sit. Breadcrumbs help navigation; we don’t promise “magic TOP growth from breadcrumbs alone”.",
        "Payment: familiar methods, clear checkout, HTTPS. Privacy policy and data-processing clarity — not “later”, but by the time forms and payment launch.",
        "Assortment: current prices and stock, regular updates, meaningful promos. Dead cards and stale inventory hit trust harder than an “imperfect” banner.",
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
        "Internal search with decent results by name/SKU saves bounce on large catalogs. Synonyms and frequent queries are worth setting up.",
        "Support: a live channel (chat, phone, messenger) with real replies helps choose and upsell. An empty widget is worse than an honest “we reply in business hours”.",
        "Speed: a slow product page and cart cut conversion. Fitting “comfortable seconds” matters more than chasing an abstract score; check on a real mobile.",
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
