import type { BlogPost } from "../../../data/blog";

/** EN overlay for email-dlya-biznesa — same structure as RU JSON. */
export const emailDlyaBiznesaEn: BlogPost = {
  slug: "email-dlya-biznesa",
  title: "Email marketing: which businesses need it",
  date: "2019-09-12",
  category: "Email marketing",
  cover: "/images/blog/email-dlya-biznesa/cover-en.webp",
  excerpt:
    "Who needs email: service vs product, B2B and B2C, the role at different growth stages, and why buyer personas matter — without one “recipe for everyone.”",
  lead: [
    "Email isn’t “the same for every company.” For a service it’s often closer to client care; for a product brand — to awareness and retail support; for B2B — to a long deal cycle.",
    "How to tell if the channel fits you: business type, B2B/B2C rules, life-cycle stage, and buyer personas. A newsletter without consent and an offer won’t save the model.",
  ],
  faq: [
    {
      q: "Is email too early for a small business?",
      a: "No if you have repeat sales or a long nurture. Start with opt-in and a welcome.",
    },
    {
      q: "Are B2B and B2C emails different?",
      a: "Yes. B2B more often means value, cases, service terms; B2C — offer, emotion, and more careful frequency.",
    },
    {
      q: "Does email work for a manufacturer without direct sales?",
      a: "It can work for brand and demand nurture; retail often closes the sale. Align offers with the channel.",
    },
    {
      q: "Is email required for a service?",
      a: "It helps a lot: booking, reminders, reactivation, reviews. It doesn’t replace the product and service.",
    },
    {
      q: "Does email make sense for a startup at the idea stage?",
      a: "Build a waitlist and nurture. Mass promos without a product are noise.",
    },
    {
      q: "Does email replace advertising?",
      a: "No. It’s your channel to people who opted in. Paid traffic and SEO stay separate loops.",
    },
    {
      q: "How do I decide whether I need email?",
      a: "Whether you have repeat touches, a consented list, and a measurable goal (lead, visit, repeat purchase).",
    },
  ],
  sections: [
    {
      title: "Why a business needs an email channel",
      level: 2,
      paras: [
        "Marketing makes the brand recognizable, brings demand, and helps keep interest until purchase. Email is direct contact with people who already gave an address: cheaper for a repeat touch than buying a click every time.",
        "There’s no single template: the scheme depends on the offer, deal cycle, and whether you’re a service or a product.",
      ],
    },
    {
      title: "Service, product, B2B, and B2C",
      level: 2,
      paras: [
        "Service companies more often walk the client through the full chain: booking, reminder, upsell, review. Product brands often need to explain value and support distribution; direct email to the end buyer — if you have your own list or co-marketing with retail.",
        "B2B is built on long relationships: lines, service terms, packages, expertise. B2C — shorter cycle, stronger offer role, and careful frequency or you get unsubscribes.",
        "For industry and project businesses personal contact is critical; email complements a manager — it doesn’t replace them.",
      ],
      lists: [
        {
          intro: "Where email fits especially well:",
          items: [
            "repeat purchases and subscription",
            "long B2B nurture",
            "service reminders",
            "SaaS/digital product onboarding",
            "loyalty and reactivation.",
          ],
        },
      ],
      links: [
        {
          label: "Email strategy",
          href: "/en/blog/email-strategiya/",
        },
        {
          label: "Triggered emails",
          href: "/en/blog/triggernye-rassylki/",
        },
      ],
    },
    {
      title: "Business stage and buyer personas",
      level: 2,
      paras: [
        "At the start — list building and demand checks. In growth — segments and automations. In maturity — retention, upsell, waking “asleep” contacts.",
        "Buyer personas answer: whom to write, about what, in which tone. Without them emails become “dear friends” for everyone and work for no one.",
      ],
      links: [
        {
          label: "Newsletter copy",
          href: "/en/blog/tekst-email-rassylki/",
        },
        {
          label: "Domain email",
          href: "/en/blog/pochta-dlya-domena/",
        },
      ],
    },
  ],
  notes: {
    title: "Important",
    text: "This article is a frame for choosing the channel — not a profit promise “from the newsletter.” Pushy promos without opt-in hurt the brand and deliverability.",
  },
  closing: [
    "If you have repeat touches and consent for emails — email almost always belongs in the funnel; if there’s no list and deals are one-off without nurture — first product and opt-in, not an “urgent blast.”",
  ],
  related: [
    "tekst-email-rassylki",
    "email-strategiya",
    "triggernye-rassylki",
    "pochta-dlya-domena",
    "primery-email-rassylok",
    "baza-email-socseti",
  ],
};
