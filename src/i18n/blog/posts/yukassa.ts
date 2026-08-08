import type { BlogPost } from "../../../data/blog";

/** EN overlay for yukassa — same structure as RU JSON. */
export const yukassaEn: BlogPost = {
  slug: "yukassa",
  title: "YooKassa (Yandex.Checkout): what it is and why a store needs it",
  date: "2021-10-22",
  category: "Digital marketing",
  cover: "/images/blog/yukassa/cover-en.webp",
  excerpt:
    "What YooKassa (formerly Yandex.Checkout) is: online payments, pay-by-link invoices, cloud cash registers. How merchants connect and what to check in tariffs.",
  lead: [
    "YooKassa (formerly Yandex.Checkout) is a payment aggregator: a store or service takes card and other payments without building bank acquiring from scratch.",
    "Below: what the product does, a typical onboarding path, and what to watch in the contract. Fees, payment methods, and cabinet UI change — check current terms on the YooKassa site.",
  ],
  faq: [
    {
      q: "Are YooKassa and Yandex.Checkout the same?",
      a: "Yes — a rebrand of one payment product. Older contracts and copy may still use the old name.",
    },
    {
      q: "Who is it for?",
      a: "Sole traders and companies that need online pay: shops, services, subscriptions, pay-by-link invoices. Individuals without a business status usually need a different setup.",
    },
    {
      q: "Does it replace an online cash register?",
      a: "The aggregator takes the payment; receipt rules under 54-FZ are handled by a cash register (including partner cloud KKT). Confirm the stack for your scheme.",
    },
    {
      q: "What is the fee?",
      a: "It depends on the plan, volume, and payment method. Don’t treat old review numbers as a price list — use YooKassa’s current calculator.",
    },
    {
      q: "Can I invoice without a website?",
      a: "Often yes: a payment link or invoice to the client with a notification. Handy for services and one-off payments.",
    },
  ],
  sections: [
    {
      title: "What YooKassa does",
      level: 2,
      paras: [
        "It’s a middle layer between your site or invoice and payment methods: the buyer pays, you see the status in the cabinet, and funds land on your settlement account under the contract rules.",
        "Besides a Pay button on the site there are pay-by-link invoices, B2B flows, recurring charges (when enabled), and modules for popular shops and CMS platforms.",
      ],
    },
    {
      title: "Who needs it and why",
      level: 2,
      paras: [
        "Online retail and services need to take money without wiring every bank separately. An aggregator gives one cabinet, stats, and ready modules for common platforms.",
      ],
      lists: [
        {
          intro: "Typical jobs:",
          items: [
            "checkout on a product page or cart",
            "an invoice or link in a messenger",
            "payment status tracking",
            "tie-in with an online cash register for receipts",
          ],
        },
      ],
    },
    {
      title: "Pros and limits",
      level: 2,
      paras: [
        "Pros: fast path to accepting pay, many methods under one contract, cabinet and API or modules, invoices without a full storefront.",
        "Limits: a fee per payment, moderation and business requirements, dependence on cabinet and API uptime. Tariffs and option sets — only from the current price list.",
      ],
      lists: [
        {
          intro: "Before you choose, compare:",
          items: [
            "fee and minimum volume",
            "payout speed",
            "payment methods you need",
            "a module for your CMS",
            "refunds and dispute rules",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "Don’t paste “2.8% fee” from 2021 articles into client proposals. Open the service’s current tariff plan.",
          kind: "tip",
        },
      ],
    },
    {
      title: "How merchants connect",
      level: 2,
      paras: [
        "Usual path: apply or sign up → questionnaire and docs → contract → shop setup in the cabinet → module or API → test payment → live.",
      ],
      lists: [
        {
          intro: "What to prepare:",
          items: [
            "sole trader or company details",
            "description of goods or services and a site (if any)",
            "CMS access or a developer",
            "clarity on whether you need a cloud cash register",
          ],
        },
      ],
    },
    {
      title: "Store tie-in and receipts",
      level: 2,
      paras: [
        "Payment without fiscalization doesn’t satisfy cash-register law if your scheme falls under it. YooKassa and partners help with cloud KKT — pick the scheme with your accountant.",
        "After go-live check a test and live payment, client emails, refunds, and order status display.",
      ],
      links: [
        {
          label: "Online store promotion",
          href: "/en/blog/prodvizhenie-internet-magazina/",
        },
        {
          label: "SSL certificate",
          href: "/en/blog/ssl-sertifikat/",
        },
      ],
    },
  ],
};
