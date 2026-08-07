import type { BlogPost } from "../../../data/blog";

/** EN overlay for yuzabiliti-internet-magazina — same structure as RU JSON. */
export const yuzabilitiInternetMagazinaEn: BlogPost = {
  slug: "yuzabiliti-internet-magazina",
  title: "18 ecommerce usability mistakes",
  date: "2018-08-31",
  category: "E-commerce",
  cover: "/images/blog/yuzabiliti-internet-magazina/cover-en.webp",
  excerpt:
    "Long forms, no search or responsive layout, hidden terms, registration, weak product pages, cart and checkout — an e-commerce UX checklist without “fix it and instantly 2×” promises.",
  lead: [
    "Low store conversion often isn’t “not enough traffic” — it’s friction: can’t find the product, unclear shipping, cart empties, the form wants a biography.",
    "A neighboring piece covers hidden SEO and catalog misses separately; here the focus is the path to purchase. “18 mistakes” is a list guide — not a magic number. Typical UX mistakes and what to fix.",
  ],
  faq: [
    {
      q: "How is this different from the 7 optimization mistakes article?",
      a: "That one covers duplicates, filters, catalog pop-ups. This one covers search, product page, cart, checkout, and trust on the order path.",
    },
    {
      q: "Do I need to register to buy?",
      a: "Guest checkout or a field minimum is better. Social login is an option — not the only path.",
    },
    {
      q: "Do I need a mobile app?",
      a: "Not required. First a decent responsive site; an app only if you have repeat buys and resources to support it.",
    },
    {
      q: "Why does cart persistence matter?",
      a: "A dropped tab or network without saving kills the order. Keep cart contents across sessions where it fits.",
    },
    {
      q: "When should I show price with shipping?",
      a: "As early as possible — before a final surprise. The total should recalculate in view.",
    },
    {
      q: "Is one product photo enough?",
      a: "Rarely. You need angles, readable quality, and stock on the page before checkout.",
    },
  ],
  sections: [
    {
      title: "Entering the catalog: forms, search, mobile",
      level: 2,
      paras: [
        "Long forms scare people off: collect a minimum, use hints and autofill (ZIP, city). Site search is required if the assortment is more than a couple of showcases — and watch what people actually search.",
        "Without mobile-friendly layout you lose a large share of visits. Responsive beats a mandatory app.",
        "Payment, shipping, and warranty terms — visible and in checkout. Contacts and hours raise trust even without an offline location.",
      ],
      lists: [
        {
          intro: "Registration without pain:",
          items: [
            "buy without an account;",
            "a short form;",
            "a bonus after signup — optional;",
            "don’t block the order behind social login.",
          ],
        },
      ],
      links: [
        {
          label: "Abandoned cart",
          href: "/en/blog/broshennaya-korzina/",
        },
        {
          label: "Responsive website",
          href: "/en/blog/adaptivnyy-sayt/",
        },
      ],
    },
    {
      title: "Product page and cart",
      level: 2,
      paras: [
        "A product with no real description and blurry photos doesn’t compete. Need specs in plain language, stock or lead time, several angles or video.",
        "Cross-sells fit as similar or related, not a wall of pop-ups. The cart shouldn’t empty on page refresh; cart lines need a short description and price.",
        "After order — a clear next step: order number, when you’ll contact, timing and payment. Quick order (name plus phone) for people who don’t want a long checkout.",
      ],
      links: [
        {
          label: "Product page",
          href: "/en/blog/kartochka-tovara/",
        },
        {
          label: "Online store mistakes",
          href: "/en/blog/oshibki-internet-magazina/",
        },
      ],
    },
    {
      title: "Payment and order finish",
      level: 2,
      paras: [
        "When payment fails, explain why and what to do next — not a silent error. Field hints and auto-saving input reduce rage when a form resets.",
        "The total should update when shipping or payment changes; hidden fees on the last step are classic drop-off. Duplicate the order to the buyer’s email.",
      ],
      notes: [
        {
          title: "Fix priority",
          text: "First mobile checkout, transparent price and shipping, and cart persistence. Average ticket widgets — after the purchase path is stable.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Online payment",
          href: "/en/blog/onlayn-oplata/",
        },
        {
          label: "Website checklist",
          href: "/en/blog/cheklist-sayta/",
        },
      ],
    },
  ],
  closing: [
    "Store usability is less friction from finding a product to the order-received email. Walk the checklist on forms, product page, cart, and payment — and measure checkout conversion, not how many checklist boxes you ticked.",
  ],
  related: [
    "oshibki-internet-magazina",
    "broshennaya-korzina",
    "kartochka-tovara",
    "onlayn-oplata",
    "cheklist-sayta",
    "adaptivnyy-sayt",
  ],
};
