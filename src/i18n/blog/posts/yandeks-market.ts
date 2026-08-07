import type { BlogPost } from "../../../data/blog";

/** EN overlay for yandeks-market — same structure as RU JSON. */
export const yandeksMarketEn: BlogPost = {
  slug: "yandeks-market",
  title: "Yandex Market: how to list an online store",
  date: "2018-06-13",
  category: "Internet marketing",
  cover: "/images/blog/yandeks-market/cover-en.webp",
  excerpt:
    "How to connect a store to Yandex Market: site requirements, YML feed, delivery, and moderation — without outdated “20M audience” figures and easy-sales promises.",
  lead: [
    "Yandex Market is a surface where shoppers compare products and store offers. For a seller it’s a demand channel next to your own site: card comparisons, search, and related Yandex surfaces.",
    "Below — store requirements, feed prep, connection steps, and post-moderation ops. Placement models (CPA, CPC, marketplace logic) and cabinets have changed since 2018 — check current Market partner Help. Marketplace peers are in a separate article.",
  ],
  faq: [
    {
      q: "Do you need your own site?",
      a: "For the classic storefront/click-out model — yes: a stable shop with cards, cart, and policies. FBY/FBS and other schemes — see current Help.",
    },
    {
      q: "Which feed format?",
      a: "YML most often; tabular formats were also accepted. Current list — in Help. The key is regular price and stock updates.",
    },
    {
      q: "How is this different from Google Merchant?",
      a: "Different ecosystem and rules. The idea is similar: feed + policy fit + ads/display. See the Merchant Center article.",
    },
    {
      q: "Does Market guarantee sales?",
      a: "No. You need competitive price, stock, reviews, order-handling speed, and margin after fees.",
    },
    {
      q: "Can you sell used goods?",
      a: "Historically new original goods were required. Banned assortment and exceptions — by current marketplace rules.",
    },
  ],
  sections: [
    {
      title: "Why a store needs Market",
      level: 2,
      paras: [
        "Shoppers often compare prices and delivery in one catalog. Appearing in Market results and related search surfaces brings demand you’d otherwise buy entirely with ads.",
        "Downsides: price competition, dependence on rules and the product card, fees/CPC (by model). Don’t put 2018 audience figures in the plan — use your pilot and unit economics.",
      ],
      lists: [
        {
          intro: "When the channel fits:",
          items: [
            "B2C retail, legal assortment;",
            "margin left after fees;",
            "catalog with decent photos and descriptions;",
            "ready to confirm orders quickly.",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Market alternatives",
          href: "/en/blog/analogi-yandeks-market/",
        },
        {
          label: "Google Merchant Center",
          href: "/en/blog/google-merchant-center/",
        },
      ],
    },
    {
      title: "Site and business requirements",
      level: 2,
      paras: [
        "Typical minimum: sole trader or legal entity, retail of new original goods, legal compliance, working HTTPS site without malware, cart and checkout, a card per SKU with photo and description.",
        "On the site in the open: legal details and contacts, current prices and stock, payment, delivery, and returns. Orders in business hours are handled fast — historically “about an hour”; check current SLA in the rules.",
      ],
      lists: [
        {
          intro: "Checklist before applying:",
          items: [
            "legal details on the site;",
            "returns and delivery policy;",
            "prices match the feed;",
            "stock synced;",
            "test purchase “as a buyer.”",
          ],
        },
      ],
      links: [
        {
          label: "Online store mistakes",
          href: "/en/blog/oshibki-internet-magazina/",
        },
        {
          label: "Product card",
          href: "/en/blog/kartochka-tovara/",
        },
      ],
    },
    {
      title: "Product feed: YML and updates",
      level: 2,
      paras: [
        "Prices go as a file or URL: YML is preferred for large catalogs (CMS module / 1C export). For a small assortment a table sometimes works — if the format is still accepted.",
        "Update the feed regularly: stale price or “in stock” at zero inventory hits store rating and moderation. After upload check the error report in the cabinet.",
      ],
      notes: [
        {
          title: "One feed isn’t for every platform",
          text: "Attribute bases overlap, but Market, Merchant, and marketplaces need their own fields and categories. Plan for adaptation.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Connection and moderation",
      level: 2,
      paras: [
        "Create/sign into the Market partner cabinet, fill store data, upload the feed, set delivery regions, warehouses, and pickup methods. The store goes to review: staff or automation check rule fit; sometimes they run control purchase scenarios.",
        "Timelines and checklists changed — clarify the old “a few business days” guide. After a reject, read the reason, fix site/feed, and apply again.",
      ],
      lists: [
        {
          intro: "Common reject causes:",
          items: [
            "no returns/contacts;",
            "broken cart;",
            "price mismatch;",
            "banned/gray assortment;",
            "unstable site.",
          ],
        },
      ],
    },
    {
      title: "After launch: price, stock, reviews",
      level: 2,
      paras: [
        "Keep the feed alive, watch error share, order confirmation speed, and reviews. Poor service discipline hurts visibility more than “one more banner.”",
        "Count CPA/margin by SKU: dumping for impressions without profit is a dead end. In parallel strengthen your site and other channels.",
      ],
      links: [
        {
          label: "Online store promotion",
          href: "/en/blog/prodvizhenie-internet-magazina/",
        },
        {
          label: "Starting an online store",
          href: "/en/blog/start-internet-magazina/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Market is a channel with strict site and feed requirements — not a “list and forget” button.",
        "Check the placement model and rules against current Help; don’t copy 2018 audience figures into the business plan.",
      ],
    },
  ],
  closing: [
    "Prep the site and YML for Market rules, upload the feed, close delivery and legal details — and pass moderation before scaling budget into the channel.",
  ],
  related: [
    "analogi-yandeks-market",
    "google-merchant-center",
    "kartochka-tovara",
    "oshibki-internet-magazina",
    "prodvizhenie-internet-magazina",
    "start-internet-magazina",
  ],
};
