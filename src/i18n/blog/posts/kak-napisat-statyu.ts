import type { BlogPost } from "../../../data/blog";

/** EN overlay for kak-napisat-statyu — same structure as RU JSON. */
export const kakNapisatStatyuEn: BlogPost = {
  slug: "kak-napisat-statyu",
  title: "How to write a solid article: a beginner’s process",
  date: "2020-07-06",
  category: "Content marketing",
  cover: "/images/blog/kak-napisat-statyu/cover-en.webp",
  excerpt:
    "Step by step: goal and audience, structure, draft, editing, and careful SEO — without magic and without writing just to fill space.",
  lead: [
    "A good article doesn’t start by opening a blank doc. It starts with answers: for whom, why, and what the reader should walk away with. Without that, even clean prose stays empty.",
    "Here’s a practical process for beginners and for clients who write their own copy. Copywriting types and hiring an author live in the general article; keyword nuances for search are in SEO copywriting.",
  ],
  faq: [
    {
      q: "Where do I start if I’m stuck?",
      a: "With goal, audience, and a heading outline. Draft after structure — not the other way around.",
    },
    {
      q: "Do I need competitive analysis?",
      a: "Yes. See what’s already ranking or leading in the niche, which questions are covered, and where you can add your experience and examples.",
    },
    {
      q: "How much editing after the draft?",
      a: "At least one full pass: structure, meaning, fluff, errors. Better to leave the text for a few hours before the final proofread.",
    },
    {
      q: "Is SEO required?",
      a: "If the goal is search traffic — yes: intent, structure, natural wording. Never at the cost of readability.",
    },
    {
      q: "One paragraph — one idea?",
      a: "A reliable rule. Walls of ten ideas in one block scan poorly.",
    },
    {
      q: "Do readability / spam checkers help?",
      a: "As an extra filter — yes. They don’t replace meaning, facts, or value for the audience. Don’t fetishize “water %” numbers from old briefs.",
    },
    {
      q: "How is this different from SEO copywriting?",
      a: "This article is the general writing process. Keyword research, related terms, and typical SEO mistakes live in the SEO copywriting piece.",
    },
    {
      q: "Do real-life examples help?",
      a: "Yes if they improve understanding. Don’t turn an expert piece into a diary.",
    },
  ],
  sections: [
    {
      title: "Think first, type second",
      level: 2,
      paras: [
        "Lock in who reads (client, colleague, beginner), why the piece serves the business (trust, lead, expertise), and what result the reader should get.",
        "Choose tone and how deep you go with terms: explain the hard parts; don’t strip expertise entirely.",
        "Briefly note facts, figures, and examples — or you’ll lose important bits mid-draft.",
      ],
      lists: [
        {
          intro: "Minimum before a draft:",
          items: [
            "goal and audience",
            "the question you answer",
            "rough H2/H3 outline",
            "2–3 sources or your own cases",
          ],
        },
      ],
    },
    {
      title: "Structure",
      level: 2,
      paras: [
        "Go general → specific for an overview; step-by-step in time for a how-to; independent blocks for a roundup.",
        "One meaning block — one heading. Lists and short paragraphs make scanning easier.",
      ],
      links: [
        {
          label: "Copywriting: types and jobs",
          href: "/en/blog/kopirayting/",
        },
      ],
    },
    {
      title: "Draft and editing",
      level: 2,
      paras: [
        "In the draft, write to the outline — don’t freeze on a perfect sentence. One paragraph, one idea; keep transitions logical.",
        "Editing order: structure → meaning and cuts → spelling → examples and media. Don’t publish straight from the first pass.",
      ],
      lists: [
        {
          intro: "Edit checklist:",
          items: [
            "there’s a lead and a clear ending",
            "no duplicates or fluff",
            "examples are concrete",
            "headings match the blocks",
          ],
        },
      ],
      links: [
        {
          label: "Uniqueness check",
          href: "/en/blog/proverka-unikalnosti/",
        },
      ],
    },
    {
      title: "SEO without breaking the text",
      level: 2,
      paras: [
        "Optimization sits on top of strong material: query and intent, structure, natural wording. Don’t force awkward keywords at the cost of meaning.",
        "Getting a page ready and ranking the keyword set are different horizons. Ranking growth is planned over months of work — not one article overnight.",
      ],
      links: [
        {
          label: "SEO copywriting",
          href: "/en/blog/seo-kopirayting/",
        },
        {
          label: "Keyword research",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "Goal and audience → outline → draft → edit → publish.",
        "Usefulness and clarity beat “prettiness.”",
        "SEO strengthens finished text; it doesn’t replace it.",
      ],
    },
  ],
  closing: [
    "Before you publish, read the article aloud on a phone. Where you stumble — cut or simplify.",
  ],
  related: [
    "teksty-uzkaya-tematika",
    "kopirayting",
    "seo-kopirayting",
    "zakazchiki-kopiraytera",
    "proverka-unikalnosti",
    "tz-kopiraytera",
  ],
};
