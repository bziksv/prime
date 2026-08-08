import type { BlogPost } from "../../../data/blog";

/** EN overlay for onlayn-oplata — same structure as RU JSON. */
export const onlaynOplataEn: BlogPost = {
  slug: "onlayn-oplata",
  title: "Online payments on a site: acquiring, aggregator, and what to choose",
  date: "2021-07-08",
  category: "E-commerce",
  cover: "/images/blog/onlayn-oplata/cover-en.webp",
  excerpt:
    "How to accept payments on a site: card, Faster Payments (SBP), and wallets; how a gateway differs from an aggregator and a bank acquirer; what to watch on fees, security, and fiscal rules (54-FZ).",
  lead: [
    "Online payments on a site mean taking money by card, via SBP, and other methods — not “to a personal card in chat.” For a store or services it’s about buyer convenience, fees, security, and cash-register law.",
    "Below: payment methods, how a gateway differs from an aggregator and acquiring, and a typical connection path. Brands and tariffs change — check current terms; YooKassa is covered separately.",
  ],
  faq: [
    {
      q: "Aggregator or bank acquirer?",
      a: "An aggregator starts faster: one contract — many methods and CMS modules. Direct bank acquiring can be cheaper at scale, but takes longer for approval and integration.",
    },
    {
      q: "Do you need an online cash register?",
      a: "If your scheme falls under 54-FZ — yes, you need a receipt (including a cloud register). A payment service ≠ fiscalization closed automatically; confirm the scheme with an accountant.",
    },
    {
      q: "Can you use a payment link without a storefront?",
      a: "Yes — many aggregators offer a payment link / invoice — handy for services and one-off payments.",
    },
    {
      q: "Is SMS payment worth it?",
      a: "For micropayments it’s sometimes convenient for buyers, but the fee is often high. As a store’s main channel it’s usually worse than card/SBP.",
    },
    {
      q: "How is YooKassa different from “online payments in general”?",
      a: "YooKassa is one aggregator. This article is about choosing a payment-acceptance model; the YooKassa product is in a separate piece.",
    },
  ],
  sections: [
    {
      title: "Payment methods for the buyer",
      level: 2,
      paras: [
        "Card (with 3-D Secure) is the baseline expectation in e-commerce. SBP and bank-app pay reduce friction. E-wallets and “pay in parts” depend on niche and audience.",
        "The method set depends on the provider and store moderation. Don’t treat outdated “Qiwi/WebMoney only” lists as a 2026 checklist.",
      ],
      lists: [
        {
          intro: "What to watch when choosing methods:",
          items: [
            "share of audience with cards / SBP",
            "fee per method",
            "limits and currency",
            "refunds and holds",
            "mobile payment UX",
          ],
        },
      ],
    },
    {
      title: "Gateway, system, aggregator, acquirer",
      level: 2,
      paras: [
        "A payment gateway is the tech “terminal” in the chain: it encrypts data and routes the payment. By itself it’s rarely a “button on the site” without a bank/processing contract.",
        "A bank acquirer takes the card payment for the merchant; the card issuer and processing also sit in the scheme. Connection takes longer: documents, business review, contract.",
        "An aggregator unites methods under one dashboard and contract: cards, SBP, sometimes invoices and subscriptions. Upside — speed and CMS modules; downside — fees and platform rules.",
      ],
      tables: [
        {
          caption: "Rough model comparison",
          headers: ["Model", "Plus", "Minus"],
          rows: [
            ["Aggregator", "Fast start, many methods", "Fees, dependency on the service"],
            ["Bank acquiring", "Flexibility at scale", "Longer setup, your own integration"],
            ["Wallet/SBP only", "Simple niche scenario", "Narrow method coverage"],
          ],
        },
      ],
      links: [
        {
          label: "YooKassa",
          href: "/en/blog/yukassa/",
        },
      ],
    },
    {
      title: "How to connect payments on the site",
      level: 2,
      paras: [
        "Common loop: legal status and docs → application at aggregator or bank → contract → store setup in the dashboard → CMS module or API → test payment → live → link to register/accounting.",
        "In a CMS usually: payments section → add method → shop ID, secret, notification URL (callback), test mode. Exact fields depend on the module — follow the provider guide.",
      ],
      lists: [
        {
          intro: "Before going live:",
          items: [
            "HTTPS across the site",
            "successful and failed test payments",
            "emails/webhooks on order status",
            "refund scenario",
            "clarity on who sends the receipt to the buyer",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Security",
          text: "Card data must not be stored on your server “however.” Use a redirect/widget from a PCI-compliant provider and 3-D Secure. Don’t collect CVV in your own forms.",
        },
      ],
    },
    {
      title: "Fees, cash register, and common mistakes",
      level: 2,
      paras: [
        "Fees depend on volume, method, and plan — don’t copy numbers from old reviews into a proposal. Count full cost: fee + register + refund acquiring.",
        "Mistake — take payment without fiscalization when the law requires a receipt. Second — promise “instant connect in a day” without documents. Third — one payment method when the audience pays differently.",
      ],
      lists: [
        {
          intro: "Provider selection checklist:",
          items: [
            "needed methods and geo",
            "module for your CMS / API",
            "support and SLA",
            "dispute and chargeback terms",
            "link to an online cash register",
          ],
        },
      ],
    },
  ],
};
