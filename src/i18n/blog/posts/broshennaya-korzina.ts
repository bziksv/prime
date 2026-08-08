import type { BlogPost } from "../../../data/blog";

/** EN overlay for broshennaya-korzina — same structure as RU JSON. */
export const broshennayaKorzinaEn: BlogPost = {
  slug: "broshennaya-korzina",
  title: "Why shoppers abandon the cart — and what to do about it",
  date: "2019-04-19",
  category: "E-commerce",
  cover: "/images/blog/broshennaya-korzina/cover-en.webp",
  excerpt:
    "Abandoned cart: registration, trust and payment, UX and bugs, hidden fees and delivery times, support, and recovery via email/retargeting — without the cult of “zero abandonment.”",
  lead: [
    "Items in the cart but no order is a normal part of e-commerce — not only a “broken site.” Some people compare prices, get distracted, or were “just looking.” But if checkout drop-off sits clearly above your niche baseline — fix the friction.",
    "Below: common reasons and what to fix — registration, trust, payment, usability, cart bugs, long checkout, hidden fees, delivery timing, and support. Figures like “70% abandon the cart” from old reviews are order-of-magnitude guides, not your store’s norm — watch your own funnel analytics.",
  ],
  faq: [
    {
      q: "Should you aim for zero abandoned carts?",
      a: "No. Some drop-off is inevitable. The goal is to remove extra friction and recover people you can still win with email/retargeting.",
    },
    {
      q: "Is mandatory registration always harmful?",
      a: "Often yes on the first order. Guest checkout or a field minimum (name + contact) usually converts better than a long form.",
    },
    {
      q: "When should you show shipping price?",
      a: "As early as possible: on the product page or before the final step. A surprise at payment is classic abandonment.",
    },
    {
      q: "Do abandoned-cart emails help?",
      a: "Yes if you have consent and a useful offer (availability, timing, help) — not only “you forgot.” Follow personal-data and advertising rules.",
    },
    {
      q: "Do you need a live chat?",
      a: "Not necessarily a chat widget: fast answers matter — FAQ at checkout, phone, messenger. The point is to clear doubt before they leave.",
    },
    {
      q: "Do HTTPS and reviews really matter?",
      a: "For trust — yes. Without a secure connection, contacts, and a clear return policy, expensive orders often don’t finish.",
    },
  ],
  sections: [
    {
      title: "Registration, trust, and payment",
      level: 2,
      paras: [
        "Long mandatory registration before pay irritates: people don’t want to leave extra data “just in case.” Keep a contact minimum or guest order with an option to create an account after.",
        "Security doubts raise drop-off: few reviews, no company details/contacts, broken links, no guarantees and returns, missing HTTPS and clear payment methods.",
        "A narrow payment set also cuts conversion — especially on expensive goods and little-known storefronts. Offer familiar methods and, where it fits, pay-on-delivery / partial prepay.",
      ],
      lists: [
        {
          intro: "Trust signals at checkout:",
          items: [
            "contacts and legal info",
            "reviews and return terms",
            "HTTPS and clear payment marks",
            "a short form without extra fields",
          ],
        },
      ],
      links: [
        {
          label: "Online payment",
          href: "/en/blog/onlayn-oplata/",
        },
        {
          label: "Product page",
          href: "/en/blog/kartochka-tovara/",
        },
      ],
    },
    {
      title: "UX, cart bugs, and hidden surprises",
      level: 2,
      paras: [
        "Slow load, no mobile layout, link overload, and no way back to the product — people leave before payment. The cart should remove items one by one and sync tabs without “magic.”",
        "A long multi-step checkout with a dozen optional fields tires people out. Split steps; keep few controls on screen.",
        "Hidden fees (shipping, commission) and delivery time only on the last step are a common leave reason. Show full cost and a timing guide next to the price on the product page.",
      ],
      lists: [
        {
          intro: "Cart tech minimum:",
          items: [
            "remove individual line items",
            "correct total recalculation",
            "stability across several tabs",
            "clear checkout progress",
          ],
        },
      ],
      notes: [
        {
          title: "“Just browsing”",
          kind: "tip",
          text: "Not everything is fixed by UX. For the unsure — a soft promo code, emphasis on availability/delivery, retargeting and a reminder email (with consent). Not everyone returns — and that’s fine.",
        },
      ],
      links: [
        {
          label: "Online store mistakes",
          href: "/en/blog/oshibki-internet-magazina/",
        },
        {
          label: "Retargeting",
          href: "/en/blog/retargeting/",
        },
      ],
    },
    {
      title: "How to measure and improve",
      level: 2,
      paras: [
        "Pull the funnel: product view → cart → contacts → payment. The biggest drop gets the fixes. “Recovery” rates via email/retargeting in old articles (tens of percent) depend on niche and list quality — measure your own A/B.",
        "Don’t try to remove every drop reason at once. First trust and transparent price/shipping, then form length and bugs, then recovery communications.",
      ],
    },
  ],
  closing: [
    "An abandoned cart signals friction or doubt — not a verdict. Simplify checkout, show full price and timing earlier, fix the cart, and bring some customers back with honest follow-up — without the illusion of zero abandonment.",
  ],
  related: [
    "oshibki-internet-magazina",
    "onlayn-oplata",
    "kartochka-tovara",
    "retargeting",
    "prodazhi-internet-magazin",
    "promoaktsii",
  ],
};
