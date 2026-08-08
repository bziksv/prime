import type { BlogPost } from "../../../data/blog";

/** EN overlay for napominanie-klientu — same structure as RU JSON. */
export const napominanieKlientuEn: BlogPost = {
  slug: "napominanie-klientu",
  title: "Gently remind clients you’re here: channels and occasions",
  date: "2020-11-12",
  category: "Digital marketing",
  cover: "/images/blog/napominanie-klientu/cover-en.webp",
  excerpt:
    "How to softly win attention back: useful push, email and triggers, abandoned cart, holidays, and review requests — with consent and without “you haven’t visited in a while” spam.",
  lead: [
    "Selling once is half the job. The emotion of a purchase fades fast: you need a fitting reason to remind people you’re here — not a stream of “come visit us.”",
    "Below: channels and informational occasions. Trigger, cart, and greeting details live in related guides; here — how not to tip into nagging. Marketing messages only with consent and a clear unsubscribe.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. WhatsApp* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "How is this different from trigger emails?",
      a: "Triggers are event mechanics. Here — the broader logic of a “gentle occasion” across channels, including push and the offline meaning of holidays.",
    },
    {
      q: "Push without an app?",
      a: "Classic app-push comes from an app. On the site, web-push is possible with browser permission; same rules: useful, rare, not a hard “buy now” in every ping.",
    },
    {
      q: "When should you write about an abandoned cart?",
      a: "Usually hours to a few days, in a series of 1–3 emails — not “in a month and a half.” Follow your funnel and consent to communicate.",
    },
    {
      q: "Can you take birthdays from social profiles without consent?",
      a: "You shouldn’t. A birthday is personal data: only what the client left at signup or in a form and allowed you to use.",
    },
    {
      q: "Is “you haven’t visited in a while” fine?",
      a: "It often annoys. Better: usefulness, a meaningful bonus, a service update, or a question about their experience.",
    },
    {
      q: "Do you also need retargeting?",
      a: "Yes as a complement to email, not instead of service. See retargeting materials.",
    },
    {
      q: "WhatsApp* and SMS?",
      a: "Only with consent and in a channel where the client already expects service messages. Otherwise — complaint and block risk.",
    },
    {
      q: "What matters more than the creative?",
      a: "Fit and frequency. One useful ping beats ten “cute” spam messages.",
    },
  ],
  sections: [
    {
      title: "Principle: an occasion, not pressure",
      level: 2,
      paras: [
        "A reminder should restore a good experience or give value (order status, usage tip, seasonal fact, loyalty bonus). Hard sell in every touch burns the list.",
        "Service and product beat templates. A bad experience won’t be fixed by an email.",
      ],
    },
    {
      title: "Push: short and useful",
      level: 2,
      paras: [
        "If you have an app (or web-push), the client allowed pings — that’s responsibility. The job is to improve their day: motivation, event reminder, useful niche news — not “you haven’t visited.”",
        "Keep 1–2 sentences, a calm tone when you use sound, no shouting. Frequency stays low or they’ll revoke permission.",
      ],
      lists: [
        {
          intro: "A good push:",
          items: [
            "usefulness or care, not a hard offer",
            "specifics without a wall of text",
            "tied to what the person already did in the product",
          ],
        },
      ],
    },
    {
      title: "Email: win-back, cart, surprise",
      level: 2,
      paras: [
        "After a purchase or a long pause, a win-back email with care and a bonus (shipping, promo) works — not the whole catalog.",
        "Abandoned cart: remind that items are waiting; if the price changed — say so. Launch the series relatively fast (hours to days); test tone and offer. More in the abandonment piece.",
        "Loyal clients can get exclusive bonuses — a “special status” feel without pressure.",
      ],
      links: [
        {
          label: "Trigger emails",
          href: "/en/blog/triggernye-rassylki/",
        },
        {
          label: "Abandoned cart emails",
          href: "/en/blog/broshennaya-korzina/",
        },
      ],
    },
    {
      title: "Informational occasions",
      level: 2,
      paras: [
        "Holidays and birthdays are soft occasions if the date was obtained legally and the tone is warm. See the greetings guide.",
        "Service news, shipping improvements, brand events — if the segment truly cares.",
        "Asking for a review and answering the feedback strengthens the relationship better than “rate us 5 stars” with no reply.",
      ],
      links: [
        {
          label: "Greeting a client",
          href: "/en/blog/pozdravlenie-klienta/",
        },
        {
          label: "Retargeting",
          href: "/en/blog/retargeting/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Consent and usefulness first, offer second.",
        "Handle cart and pause with fresh-timed triggers — not “in a month and a half.”",
        "Don’t harvest birthdays from other people’s profiles against the rules.",
      ],
    },
  ],
  closing: [
    "Pick one channel and one occasion per week for the dormant segment — measure replies and complaints before scaling frequency.",
  ],
  related: [
    "triggernye-rassylki",
    "broshennaya-korzina",
    "pozdravlenie-klienta",
    "retargeting",
    "sms-rassylka",
    "crm",
  ],
};
