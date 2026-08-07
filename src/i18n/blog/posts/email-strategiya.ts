import type { BlogPost } from "../../../data/blog";

/** EN overlay for email-strategiya — same structure as RU JSON. */
export const emailStrategiyaEn: BlogPost = {
  slug: "email-strategiya",
  title: "Email strategy: from research to launches",
  date: "2019-12-13",
  category: "Email marketing",
  cover: "/images/blog/email-strategiya/cover-en.webp",
  excerpt:
    "How to build an email strategy: list and metrics audit, product and audience, competitors, email and segment plan, templates, tests, and volume growth — without the myth that “the newsletter sells itself.”",
  lead: [
    "An email strategy isn’t “a pretty template once a week” — it’s a chain: whom you listen to, what you write about, how often, which scenarios, and how you measure results.",
    "A frame from research → design → launch → tests. Opt-in lists only; we don’t use scraping or bought lists.",
  ],
  faq: [
    {
      q: "Where should I start if there were no emails yet?",
      a: "Describe the product and audience, connect an ESP, build opt-in, make a welcome and 1–2 triggers.",
    },
    {
      q: "Which metrics should I watch?",
      a: "Deliverability, open rate, CTR, unsubscribes, complaints, conversions/revenue. OR without sales isn’t enough.",
    },
    {
      q: "How many emails per week is reasonable?",
      a: "As many as the segment can take without rising unsubscribes. Better more relevant than more of the same to everyone.",
    },
    {
      q: "Do I need a CRM?",
      a: "For growth — yes. At the start an ESP and a spreadsheet can work, but segmentation ceilings are lower.",
    },
    {
      q: "Should I outsource or keep it in-house?",
      a: "Keep strategy and offer in-house; layout and routine can go to a contractor.",
    },
    {
      q: "Myth: is email dead?",
      a: "The channel lives with opt-in and value. Spam to bought lists dies.",
    },
    {
      q: "When should I scale frequency?",
      a: "After stable metrics on a small volume and clear segments — not “daily to everyone at once.”",
    },
  ],
  sections: [
    {
      title: "Stage 1. Research",
      level: 2,
      paras: [
        "Break down current marketing: how the list was built, what subscriber data you have, how size changed, what you already sent and with which OR/CTR.",
        "Describe the product: traits, objections, when people buy and when they refuse. Without that, emails stay “generic.”",
        "Audience segments and competitors: which emails your customers get from others (subscribe legally), where your strong differences sit.",
      ],
      lists: [
        {
          intro: "Minimum data before a strategy:",
          items: [
            "list source and consent",
            "OR, CTR, spam complaints",
            "offer and USP",
            "1–3 segments",
            "link to CRM/leads (if any).",
          ],
        },
      ],
      links: [
        {
          label: "Triggered emails",
          href: "/en/blog/triggernye-rassylki/",
        },
      ],
    },
    {
      title: "Stage 2. Strategy design",
      level: 2,
      paras: [
        "Drop myths (“one email to all,” “more often is always better,” “a name in the subject is enough”). Lock goals: reactivation, sales, lead nurture, service.",
        "Describe the company briefly for the team: tone, forbidden topics, CTAs, who approves layouts.",
        "Draw an email map: regular digest, triggers, promos. Separate service and marketing notices.",
        "Build templates and a shared style: header, preheader, button, footer with unsubscribe.",
      ],
      links: [
        {
          label: "Strong email examples",
          href: "/en/blog/primery-email-rassylok/",
        },
        {
          label: "Email lessons from 2020",
          href: "/en/blog/email-marketing-2020/",
        },
      ],
    },
    {
      title: "Stages 3–4. Launch, tests, growth",
      level: 2,
      paras: [
        "Launch on a narrow segment. Watch deliverability and complaints before “creative.”",
        "A/B subjects and CTAs, analyze unsubscribes, clean inactives. Raise frequency and volume only after a stable metrics base.",
        "Tools (ESP, tasks, analytics) serve the plan — not the other way around.",
      ],
      links: [
        {
          label: "Marketer tools",
          href: "/en/blog/instrumenty-marketologa/",
        },
        {
          label: "Email list with consent",
          href: "/en/blog/baza-email-socseti/",
        },
      ],
    },
  ],
  notes: {
    title: "Important",
    text: "The original text had typos like “GRM” — read CRM. OR/CTR metrics without revenue don’t prove strategy success.",
  },
  closing: [
    "Assemble research → email map → segment pilot → tests — so email strategy becomes a system, not another chaotic “promo in the newsletter.”",
  ],
  related: [
    "instrumenty-marketologa",
    "triggernye-rassylki",
    "primery-email-rassylok",
    "email-marketing-2020",
    "baza-email-socseti",
    "pochta-dlya-domena",
  ],
};
