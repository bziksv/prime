import type { BlogPost } from "../../../data/blog";

/** EN overlay for prodazhi-internet-magazin — same structure as RU JSON. */
export const prodazhiInternetMagazinEn: BlogPost = {
  slug: "prodazhi-internet-magazin",
  title: "How to increase online store sales: working levers",
  date: "2019-12-16",
  category: "Digital marketing",
  cover: "/images/blog/prodazhi-internet-magazin/cover-en.webp",
  excerpt:
    "What really moves online store sales: traffic and storefronts, product cards and UX, reviews and chat, content and video, email and AOV — without an “enable everything at once” checklist.",
  lead: [
    "Online store sales growth is traffic × conversion × average order value. External factors (season, competition, prices) always matter; inside you still have the marketing mix, site convenience, and the team.",
    "Below: lever groups that most often move the needle. This isn’t “20 buttons in a week”: take 1–2 hypotheses and measure revenue, CR, and margin. Related topics — CRO, AOV, and store promotion — live in separate articles.",
  ],
  faq: [
    {
      q: "Where should I start on a small budget?",
      a: "At funnel bottlenecks: speed, search, cart, answers to questions. In parallel — one paid or free demand channel (listings, ads) for the niche.",
    },
    {
      q: "Do I need a mobile app?",
      a: "Not necessarily at the start. First a responsive site and a fast checkout. An app — when you have repeat purchases and resources to support it.",
    },
    {
      q: "Are popups always harmful?",
      a: "Pushy ones — yes. A relevant offer (subscribe discount, real promo, exit-intent) can help if it doesn’t block the first screen on mobile.",
    },
    {
      q: "Is advertising alone enough?",
      a: "No. Ads without cards, delivery, and service burn budget. Basic conversion first, then traffic scale.",
    },
    {
      q: "How do I know what worked?",
      a: "Compare the period before/after one change: orders, CR, AOV, margin. Don’t turn on ten edits at once.",
    },
    {
      q: "Should I raise AOV or get more orders?",
      a: "Both levers. Sometimes cart upsell beats expensive new traffic — see the AOV article.",
    },
  ],
  sections: [
    {
      title: "Traffic and storefronts",
      level: 2,
      paras: [
        "Fast growth often comes from ads and demand platforms: search, product listings, marketplaces, and classifieds — wherever your niche actually buys. Free listings help early in some categories, but without a card and service they don’t scale.",
        "Snippet and description affect search CTR; directories and maps affect local trust. Traffic without a landing for the query = expensive bounce.",
      ],
      lists: [
        {
          intro: "Check:",
          items: [
            "product campaigns / listings for the assortment",
            "consistent prices and stock",
            "a company card in directories",
            "UTMs and order goals",
          ],
        },
      ],
      links: [
        {
          label: "Traffic sources",
          href: "/en/blog/istochniki-trafika/",
        },
        {
          label: "Online store promotion",
          href: "/en/blog/prodvizhenie-internet-magazina/",
        },
      ],
    },
    {
      title: "Product cards, content, and video",
      level: 2,
      paras: [
        "Dry descriptions lose: photos, benefits, comparison, FAQ, video reviews of bestselling SKUs. Content cuts “not what I expected” returns and builds trust before “add to cart”.",
        "New arrivals and trends keep interest if stocking is intentional — not chaos for the showcase. Free “toys” (calculator, try-on) work when they help choose — not distract from buying.",
      ],
      links: [
        {
          label: "Interactive content",
          href: "/en/blog/interaktivnyy-kontent/",
        },
      ],
    },
    {
      title: "UX, cart, and service",
      level: 2,
      paras: [
        "Usability — search, filters, speed, clear structure, a readable mobile screen. A long or confusing checkout kills the order: cart → pay should be short and clear on delivery and terms.",
        "Live chat or a fast reply cuts switches to competitors. Forms with “only needed fields”; reviews with photos and store replies strengthen the decision.",
      ],
      lists: [
        {
          intro: "Common stop factors:",
          items: [
            "slow pages",
            "missing sizes/stock",
            "delivery surprise at the end",
            "no way to ask quickly",
          ],
        },
      ],
      links: [
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
        {
          label: "Reviews for sales",
          href: "/en/blog/otzyvy-dlya-prodazh/",
        },
      ],
    },
    {
      title: "Email, popups, and return",
      level: 2,
      paras: [
        "Consent-based email — bonuses, promos, usefulness, abandoned cart. This isn’t “three emails a day” spam: frequency must match subscriber expectations.",
        "A popup with an email discount or honest offer can grow the list; an aggressive full-screen banner more often hurts trust. Retarget brings back people who viewed a product but didn’t buy.",
      ],
      links: [
        {
          label: "Retargeting",
          href: "/en/blog/retargeting/",
        },
      ],
    },
    {
      title: "AOV and assortment",
      level: 2,
      paras: [
        "Cross-sell, bundles, a free-shipping threshold, and convenient payment raise order size. Count margin: “AOV up — profit down” isn’t a win.",
        "External trends (season, fashion, niche news) suggest what to feature on home and in ads. Inside — manager professionalism: reply, competence, tone.",
      ],
      links: [
        {
          label: "Average order value",
          href: "/en/blog/sredniy-chek/",
        },
      ],
      notes: [
        {
          title: "Note",
          kind: "tip",
          text: "Don’t copy someone else’s “20 ways” list one-to-one. Pick a lever for the funnel bottleneck and lock the success metric before launch.",
        },
      ],
    },
  ],
  closing: [
    "Store sales grow when traffic meets an easy order and a clear offer. Strengthen the bottleneck, measure the effect, then scale the next lever — without chaotic “enable everything from the article”.",
  ],
  related: [
    "sredniy-chek",
    "optimizatsiya-konversii",
    "prodvizhenie-internet-magazina",
    "istochniki-trafika",
    "otzyvy-dlya-prodazh",
    "start-internet-magazina",
  ],
};
