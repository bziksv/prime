import type { BlogPost } from "../../../data/blog";

/** EN overlay for sredniy-chek — same structure as RU JSON. */
export const sredniyChekEn: BlogPost = {
  slug: "sredniy-chek",
  title: "Online store average order value: how to calculate and grow it",
  date: "2019-12-21",
  category: "Digital marketing",
  cover: "/images/blog/sredniy-chek/cover-en.webp",
  excerpt:
    "What average order value (AOV) is, what its dynamics say, and which levers really raise order size: cross-sell, upsell, bundles, shipping thresholds, and loyalty.",
  lead: [
    "Average order value (AOV) is how much a buyer pays on average per order. Revenue can grow without only new traffic: sometimes it’s smarter to raise cart size among people who already buy.",
    "Below: how to calculate the metric, what to read from the trend, and which tactics work in an online store. There’s no universal “+30% AOV in a week” — you pick a mix for assortment and margins.",
  ],
  faq: [
    {
      q: "How do I calculate AOV?",
      a: "Revenue for the period ÷ number of orders (invoices). Use the same period for comparisons: week to week, month to month.",
    },
    {
      q: "How does AOV differ from revenue?",
      a: "Revenue ≈ AOV × order count (simplified). You can grow via purchase frequency at the same AOV — watch both levers.",
    },
    {
      q: "What’s the difference between cross-sell and upsell?",
      a: "Cross-sell is an add-on to the chosen item (a case for a phone). Upsell is a more expensive or more complete version of the same solution.",
    },
    {
      q: "Does free shipping from a threshold always work?",
      a: "Often yes if the threshold is realistic versus current AOV. Too high annoys; too low eats margin.",
    },
    {
      q: "Are timers and “only 2 left” OK to use?",
      a: "Only if true. Fake urgency hurts trust more than it gives a one-off AOV bump.",
    },
    {
      q: "Do I need analytics to grow AOV?",
      a: "Yes: AOV before and after the test, margin, and cancel rate. Otherwise “AOV growth” may be a discount that killed profit.",
    },
  ],
  sections: [
    {
      title: "What average order value is",
      level: 2,
      paras: [
        "AOV shows the typical order sum for a chosen period. Formula: revenue ÷ order count. In a store it’s handy in ecommerce analytics or the accounting system — just keep one logic in numerator and denominator (with returns or without — lock the rule).",
        "Compare like-for-like periods and segments: wholesale vs retail, first vs repeat purchase move the number a lot.",
      ],
      lists: [
        {
          intro: "What dynamics can signal:",
          items: [
            "willingness to pay and upsell readiness",
            "promo effects (AOV up while margin down — a signal)",
            "manager or chat script quality",
            "the threshold where a “fill the cart” bonus makes sense",
          ],
        },
      ],
    },
    {
      title: "Cross-sell and upsell",
      level: 2,
      paras: [
        "Cross-sell — relevant add-ons on the product page, cart, and thank-you: accessories, consumables, install services. The add-on should be logical and not many times more expensive than the main order — or it feels pushy.",
        "Upsell — offer a better version: more volume, warranty, a fuller kit. Honestly describe the benefit difference; “just more expensive” with no meaning fails.",
      ],
      lists: [
        {
          intro: "Where to show it:",
          items: [
            "“bought with this” on the product page",
            "cart recommendations before payment",
            "manager script when confirming the order",
            "a personal offer after purchase",
          ],
        },
      ],
    },
    {
      title: "Bundles and wholesale logic",
      level: 2,
      paras: [
        "“Cheaper than separately” sets raise AOV when savings are clear and the buyer needs the contents. You can carefully include slower movers — without a “stuffed junk” feeling.",
        "Discounts on a second or third unit and light wholesale work for consumables and repeat goods. Calculate bundle margin in advance.",
      ],
    },
    {
      title: "Thresholds: shipping, bonuses, tiers",
      level: 2,
      paras: [
        "Free shipping from a sum is a classic cart-fill nudge. Set the threshold a bit above current AOV — not pulled from thin air.",
        "Loyalty programs and discount tiers (5% from X, 10% from Y) motivate the next step if steps are reachable. The thank-you page is for upsell and subscribe — not aggressive spam.",
      ],
      lists: [
        {
          intro: "What to check:",
          items: [
            "threshold vs current AOV",
            "impact on shipping margin",
            "clarity of terms on mobile",
            "no pressure from a fake timer",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Payment variety (cards, instant bank pay, etc.) more often cuts checkout drop-off than it raises AOV by itself — but payment failures hit both AOV and conversion.",
        },
      ],
    },
    {
      title: "How to roll out without hurting margin",
      level: 2,
      paras: [
        "Test one lever at a time: a cross-sell block, a new shipping threshold, a bundle. Compare AOV, order conversion, and margin — AOV up with cart-to-pay down can be zero or negative.",
        "Not every tactic fits every store: B2B, subscription, and one-off premium live by other rules. Treat methods as hypotheses, not an “enable all” checklist.",
      ],
      links: [
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
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
  ],
  closing: [
    "AOV is a revenue lever next to traffic and purchase frequency. Count it honestly, raise order size with relevant add-ons and thresholds — and always check growth against margin, not only a pretty report number.",
  ],
  related: [
    "optimizatsiya-konversii",
    "prodvizhenie-internet-magazina",
    "start-internet-magazina",
    "kategorii-internet-magazina",
    "menedzher-internet-magazina",
    "istochniki-trafika",
  ],
};
