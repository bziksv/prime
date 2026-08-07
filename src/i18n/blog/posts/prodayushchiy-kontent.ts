import type { BlogPost } from "../../../data/blog";

/** EN overlay for prodayushchiy-kontent — same structure as RU JSON. */
export const prodayushchiyKontentEn: BlogPost = {
  slug: "prodayushchiy-kontent",
  title: "Selling content in social media: types, examples, and a plan",
  date: "2020-04-06",
  category: "Content marketing",
  cover: "/images/blog/prodayushchiy-kontent/cover-en.webp",
  excerpt:
    "What selling content in social media is: goals, B2C and B2B, post types, and how to build a plan without endless “buy now” and outdated % from old reviews.",
  lead: [
    "Selling content drives action: click, lead, purchase. It’s not only a “−50% sale” — it’s a mix of offer, value, and proof fitted to the audience.",
    "Goals, B2C/B2B differences, post types, and plan-building rules sit here. Commercial-copy structure and feed-format taxonomy live elsewhere. Old “70% of businesses / 80% bought because of a post” figures aren’t universal. Mentions of Instagram and Facebook are informational.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platforms. Instagram* and Facebook* are products of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the services may have legal consequences.",
  },
  faq: [
    {
      q: "How is it different from selling copy on a site?",
      a: "On a site — a landing for the deal. In social, warm-up, platform format, and attention limits matter more; the CTA often goes to the site or Direct.",
    },
    {
      q: "Can I post only selling content?",
      a: "Usually no: the feed burns out. Mix value, brand, and offer — ratios by niche.",
    },
    {
      q: "Do I need a price in the post?",
      a: "For B2C often yes: less friction. For B2B, terms, cases, and process matter more.",
    },
    {
      q: "How many selling slots belong in the plan?",
      a: "As many as the audience tolerates without unfollows. Watch saves, replies, and leads — not only likes.",
    },
    {
      q: "Does “only 2 left” always work?",
      a: "Only if true. Fake urgency hurts trust and ad rules.",
    },
    {
      q: "Is a full brand style required?",
      a: "Desirable: recognition in the feed. Full “cyberpunk like banks” isn’t mandatory — consistency matters.",
    },
    {
      q: "Is video mandatory for selling content?",
      a: "A strong format, not the only one. Stories, carousels, and text with a clear offer also work.",
    },
  ],
  sections: [
    {
      title: "Goals of selling content",
      level: 2,
      paras: [
        "Follower growth is a side effect. Closer to money: click to site/catalog, dialogue, lead. The site must work on mobile and match the post promise.",
        "The link in the post — immediate and on-point. Deception (price, origin, deadlines) kills sales faster than “weak creative.”",
      ],
      lists: [],
      links: [
        {
          label: "Selling copy",
          href: "/en/blog/prodayushchie-teksty/",
        },
      ],
    },
    {
      title: "B2C and B2B",
      level: 2,
      paras: [
        "B2C: clear benefit, price/promo when relevant, fast path to order, tone closer to the segment’s language.",
        "B2B: trust, process (invoicing, volumes, SLA), cases and reviews, formal tone — no cheap memes for reach.",
      ],
      lists: [
        {
          intro: "Audience minimum before the plan:",
          items: [
            "who buys and which job they close",
            "objections and segment triggers",
            "where the audience lives (platform/format)",
            "what counts as post success (not only a like).",
          ],
        },
      ],
    },
    {
      title: "Types of selling content",
      level: 2,
      paras: [
        "Brand: product, promos, reviews, backstage tied to the offer.",
        "Useful: how-tos, checklists, product Q&A — warm-up without a hard “buy.”",
        "Entertainment: emotion within the brand, not standup for standup’s sake.",
        "Situational: reaction to an event or date — fast and fitting, no toxic jokes.",
        "Stories and cases: structure, sincerity, link to the service — not gossip for hype.",
      ],
      lists: [],
      links: [
        {
          label: "Content types in social",
          href: "/en/blog/vidy-kontenta-socseti/",
        },
        {
          label: "Content plan",
          href: "/en/blog/kontent-plan/",
        },
      ],
    },
    {
      title: "How to build the plan",
      level: 2,
      paras: [
        "Rubrics by type → slots for 2–4 weeks → CTA and UTM/promo on selling posts → idea buffer for dates.",
        "Plan situational posts by an event calendar; “viral in an hour like Oreo” is rare luck, not a KPI.",
      ],
      lists: [
        {
          intro: "Practical rules:",
          items: [
            "offer is honest and checkable",
            "visuals in one system (color, type, frame)",
            "motion (video/Stories) — within capacity, not for the report",
            "ads and organic for different audience segments",
            "measure leads, not only reach.",
          ],
        },
      ],
      notes: [
        {
          title: "Related formats",
          text: "A selling Instagram post and the general copy frame live in separate pieces. Here — mix strategy and planning.",
        },
      ],
      links: [
        {
          label: "Selling Instagram post",
          href: "/en/blog/post-instagram/",
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "Selling content = a clear next step + trust.",
        "A mix of types beats a daily shop window.",
        "B2C and B2B need different tone and proof.",
      ],
      lists: [],
    },
  ],
  closing: [
    "Open a month of the feed and tag posts: offer / value / brand / empty — you’ll usually see what’s missing for working sales.",
  ],
  related: [
    "prodayushchie-teksty",
    "vidy-kontenta-socseti",
    "kontent-plan",
    "post-instagram",
    "kontent-plan-instagram",
    "lichnyy-brend",
  ],
};
