import type { BlogPost } from "../../../data/blog";

/** EN overlay for sms-rassylka — same structure as RU JSON. */
export const smsRassylkaEn: BlogPost = {
  slug: "sms-rassylka",
  title: "SMS campaigns: where to start and how not to become spam",
  date: "2019-11-15",
  category: "Digital marketing",
  cover: "/images/blog/sms-rassylka/cover-en.webp",
  excerpt:
    "How to launch SMS: channel jobs, your own list and consent, picking an operator/aggregator, short copy, frequency, opt-out, and measurement — without cold spam to bought numbers.",
  lead: [
    "SMS arrives fast: one phone, and messages are often read almost immediately. That’s why the channel is strong for reminders, order statuses, and short offers — and just as easily turns into annoying spam.",
    "We cover why SMS sits next to email, which jobs it covers, how to choose a send platform, and the launch stages. Cold lists without consent aren’t a strategy—that’s a path to blocks, complaints, and reputation damage.",
  ],
  faq: [
    {
      q: "Is SMS better than email?",
      a: "Not always. SMS gets opened faster; email holds more meaning and is cheaper at volume. They often work as a pair: SMS for urgent, email for nurture and longer value.",
    },
    {
      q: "Can I message everyone from an “operator list”?",
      a: "Ads without consent are a legal and reputation risk. Safer: your own customer list with clear consent and an easy opt-out.",
    },
    {
      q: "Should I use an operator or an aggregator?",
      a: "An operator is one carrier path; an aggregator is several carriers from one dashboard. Check the contract, sender name, reports, and how numbers are stored.",
    },
    {
      q: "How do I measure effect?",
      a: "Promo codes, a dedicated number / call tracking, short links with UTM, unsubscribe and complaint share — not only “delivered”.",
    },
    {
      q: "How often should I send SMS?",
      a: "Rarely and on purpose. Frequent promo SMS annoy more than email. Respect time zones and night hours.",
    },
    {
      q: "Do I need an opt-out link?",
      a: "Yes. Give a simple way to unsubscribe and honor it immediately — that’s both law and common sense.",
    },
  ],
  sections: [
    {
      title: "Why SMS is still used",
      level: 2,
      paras: [
        "The message is short, the channel is personal, and competition for attention in SMS is often lower than in a crowded inbox. Many people read almost right after delivery — useful for time-sensitive touches.",
        "The downside: little space and a high cost of tone mistakes — one pushy message hurts brand feeling more than a dozen emails.",
      ],
      lists: [
        {
          intro: "Strengths:",
          items: [
            "high chance of being read;",
            "fast reaction;",
            "company name instead of a “stranger” number (when set up);",
            "strong for service triggers.",
          ],
        },
      ],
    },
    {
      title: "Which jobs it covers",
      level: 2,
      paras: [
        "Not only “BUY NOW IN CAPS”. Working scenarios: remind about yourself (promo, new address), service notices (appointment, status, subscription ending), a greeting with a personal benefit, feedback request marked as free to reply.",
        "Ads to a cold audience with no brand relationship work worse and more often feel like spam. Value and reason first, then the offer.",
      ],
      lists: [
        {
          intro: "Typical scenarios:",
          items: [
            "abandoned booking / order;",
            "visit reminder;",
            "personal discount tied to a date;",
            "service warning;",
            "short feedback after a service.",
          ],
        },
      ],
      links: [
        {
          label: "Client greeting",
          href: "/en/blog/pozdravlenie-klienta/",
        },
      ],
    },
    {
      title: "Who to send through",
      level: 2,
      paras: [
        "Carriers and SMS aggregators provide dashboards: alpha-name, segments, scheduled send, delivery reports, sometimes CRM integration and forwarding replies to email.",
        "An aggregator helps when you need multi-carrier reach. Downsides can be price and contract: who stores the list, how data is handled, security. Don’t hand numbers “sideways” without clear terms.",
      ],
      notes: [
        {
          title: "Important",
          text: "Bought lists and “blast the whole country” without consent are not a starting strategy. Build the list from your own customers and forms with a consent checkbox.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Launch stages",
      level: 2,
      paras: [
        "First goal and segment: who and why. Then a list only with a lawful basis. Copy — short, no images and no “all caps”, with a spelling check: in 70–160 characters a typo hits harder.",
        "Build measurement before send: promo code, UTM in a short link, a dedicated number. After — watch delivery, clicks/calls, unsubscribes and complaints. Set frequency and time of day so you don’t wake clients on weekends.",
      ],
      lists: [
        {
          intro: "Order:",
          items: [
            "goal and KPI;",
            "segment and consent;",
            "copy + sender name;",
            "test on your own numbers;",
            "send and review metrics;",
            "opt-out button/command.",
          ],
        },
      ],
      links: [
        {
          label: "UTM tags",
          href: "/en/blog/utm-metki/",
        },
        {
          label: "Traffic sources",
          href: "/en/blog/istochniki-trafika/",
        },
      ],
    },
    {
      title: "Practical recommendations",
      level: 2,
      paras: [
        "One offer — one message. Give a clear next step and a way to opt out. Don’t mix an order-status tone with aggressive promo in one voice — people confuse trust channels.",
        "If email and messengers run in parallel, align touch frequency: SMS is a rare “nail”, not daily noise.",
      ],
      links: [
        {
          label: "Touchpoints",
          href: "/en/blog/tochki-kontakta/",
        },
        {
          label: "Deeplink",
          href: "/en/blog/diplinking/",
        },
      ],
    },
  ],
  closing: [
    "SMS works when you write with consent, briefly, and on purpose. Start with your own list, a send service with a clear contract, and measurement — without racing for reach on other people’s numbers.",
  ],
  related: [
    "pozdravlenie-klienta",
    "tochki-kontakta",
    "utm-metki",
    "istochniki-trafika",
    "diplinking",
    "sem-kasaniy",
  ],
};
