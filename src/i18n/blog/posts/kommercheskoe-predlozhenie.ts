import type { BlogPost } from "../../../data/blog";

/** EN overlay for kommercheskoe-predlozhenie — same structure as RU JSON. */
export const kommercheskoePredlozhenieEn: BlogPost = {
  slug: "kommercheskoe-predlozhenie",
  title: "How to write a commercial proposal: types, structure, and offer",
  date: "2019-03-26",
  category: "Digital marketing",
  cover: "/images/blog/kommercheskoe-predlozhenie/cover-en.webp",
  excerpt:
    "A commercial proposal (sales pitch): cold, warm, and hot; a basic letter structure; headline, benefit, price, objections, and CTA — without spam clichés or pressure.",
  lead: [
    "A commercial proposal is a text where you offer a service or product and invite the next step: a call, a meeting, an invoice. Most often it goes by email; less often via messengers and social.",
    "Match the letter to how warm the audience is, keep a clear structure, and write the headline, offer, benefits, and price so someone finishes reading. Blasts to bought lists and aggressive spam are out of bounds — write clearly and only where you were asked or have a lawful basis to contact.",
  ],
  faq: [
    {
      q: "Is a commercial proposal just any promo email?",
      a: "Basically yes if there’s an offer. But a strong proposal answers the recipient’s job and leads to a clear action — not “just warming.”",
    },
    {
      q: "How does a cold proposal differ from a hot one?",
      a: "Cold — little context, shorter, benefit up front. Hot — after talks: timing, scope, price, next step personalized.",
    },
    {
      q: "Do I need a price in a cold proposal?",
      a: "Often yes — at least a range or packages. Hiding price to force a lead form filters worse and annoys more.",
    },
    {
      q: "Can I write “best” or “cheapest of all”?",
      a: "Better facts and measurable differences. Vague claims convince poorly and near-spam words hurt deliverability.",
    },
    {
      q: "How long should the letter be?",
      a: "Cold — short. Warm/hot can be longer if deal details matter. The point is they read through to the CTA.",
    },
    {
      q: "Is a USP (unique selling proposition) required?",
      a: "Useful to state how you differ for this audience. A USP with no link to the customer’s pain is just a slogan.",
    },
  ],
  sections: [
    {
      title: "Three proposal types",
      level: 2,
      paras: [
        "Cold — audience with no prior contact. Often a template; goal — reply and qualify. Warm — there was already a touch (lead, meeting, download): more personalization; job — keep the thread and move to a deal.",
        "Hot — after discussing terms: timing, scope, price, responsibilities. Always personal. Goal — lock agreements and close.",
      ],
      lists: [
        {
          intro: "Match tone to temperature:",
          items: [
            "cold — problem + benefit + short CTA;",
            "warm — reference to the last touch;",
            "hot — deal specifics and the next step.",
          ],
        },
      ],
    },
    {
      title: "A structure that works",
      level: 2,
      paras: [
        "Working frame: headline → offer/attention → substance → arguments and price → objections → call to action → contacts. For cold mail you can merge benefit and headline in the first lines.",
        "Alternatives differ in details (footer, P.S., company strengths block), but the logic is the same: why read → what they get → why you → how much → what to do next.",
        "Long cold walls of text more often go to trash. Facts, numbers, and short paragraphs raise reply odds.",
      ],
      lists: [
        {
          intro: "Blocks by purpose:",
          items: [
            "headline with a fact or audience problem;",
            "lead: problem → solution in 1–2 sentences;",
            "service scope / product specs without fluff;",
            "differences and offer (timing, package, bonus) for the customer’s pain;",
            "price with reasoning;",
            "CTA and contacts.",
          ],
        },
      ],
      links: [
        {
          label: "USP (unique selling proposition)",
          href: "/en/blog/utp/",
        },
        {
          label: "Copywriting",
          href: "/en/blog/kopirayting/",
        },
      ],
    },
    {
      title: "How to write so they finish reading",
      level: 2,
      paras: [
        "In the headline and lead — the reader’s benefit, with numbers if possible. Avoid spam clichés like “free / today only / guaranteed win” — they cut both trust and deliverability.",
        "Don’t pressure or decide for the customer. The job is clear information; the decision stays theirs. Fewer judgments (“better,” “cheaper”), more checkable differences.",
        "Price must be explained: what the money pays for. The more expensive — the more detail on scope. Close with a positive concrete CTA (call, reply, pick a package), not a vague “looking forward to cooperating.”",
      ],
      notes: [
        {
          title: "Legal note for outreach",
          text: "Mass cold blasts to bought lists risk complaints and blocks. Use lawful channels and a clear signature with company contacts.",
          kind: "tip",
        },
      ],
    },
  ],
  closing: [
    "A strong proposal matches audience temperature, answers “why me” fast, and honestly names price and the next step. Build the structure once — then adapt blocks for cold, warm, and hot customers.",
  ],
  related: [
    "utp",
    "kopirayting",
    "kpi-menedzhera-prodazh",
    "nayti-marketologa",
    "akkaunt-menedzher",
    "potrebitelskiy-insayt",
  ],
};
