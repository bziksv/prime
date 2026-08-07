import type { BlogPost } from "../../../data/blog";

/** EN overlay for tekst-glavnoy-stranitsy — same structure as RU JSON. */
export const tekstGlavnoyStranitsyEn: BlogPost = {
  slug: "tekst-glavnoy-stranitsy",
  title: "Homepage copy: what you shouldn’t write",
  date: "2020-07-20",
  category: "Content marketing",
  cover: "/images/blog/tekst-glavnoy-stranitsy/cover-en.webp",
  excerpt:
    "Which phrases spoil a homepage: empty superlatives, “personalized approach” clichés, awkward keywords, and mixing “you/You” — and what to put instead of a clear offer.",
  lead: [
    "A homepage should explain in seconds who you are and what to do next. Long walls of “world’s best” and “European standards” usually don’t help — readers have seen that a hundred times.",
    "Below — typical copy junk and how to write shorter and more honestly. Block frame and CTA live in the homepage structure piece; here the focus is copywriting.",
  ],
  faq: [
    {
      q: "Do you need a big SEO text on the homepage?",
      a: "Usually no. Offer, benefits, proof, CTA. Long service descriptions belong on inner URLs.",
    },
    {
      q: "Why is “best” harmful?",
      a: "Without proof it sounds like noise and can draw claims against ads with unjustified superlatives. Prefer facts: timeline, case, guarantee, what’s included.",
    },
    {
      q: "Can keywords sit on the homepage?",
      a: "Yes if they read naturally. A clumsy “beauty salon metro …” insert hurts trust more than it helps search.",
    },
    {
      q: "Is “You can…” weak?",
      a: "Often yes: it sounds like permission, not a result promise. Stronger direct lines: “Book…,” “Get….”",
    },
    {
      q: "How many paragraphs on the first screen?",
      a: "One short lead + a benefit list or service cards. A wall of “about us” — lower or on a separate page.",
    },
    {
      q: "Do reviews belong on the homepage?",
      a: "Yes if they’re real. A template “quite satisfied” with no detail is worse than no block.",
    },
    {
      q: "How is this different from the homepage structure article?",
      a: "That one covers header, blocks, CTA, footer. This one covers which words and phrases to cut from the copy.",
    },
    {
      q: "Is this only for beauty salons?",
      a: "Examples from a niche; the rules are general: services, B2B, clinic, school — same clichés.",
    },
  ],
  sections: [
    {
      title: "What annoys people on a homepage",
      level: 2,
      paras: [
        "Empty superlatives without facts: “world expert,” “best specialists,” “innovative technologies.”",
        "Industry clichés: “personalized approach,” “European standards,” “full suite” when the list has three services.",
        "Tautology and bureaucratese: “professional specialist,” “highly qualified professional,” “carry out activities.”",
        "Style mix: “you” then “You”; addressing the reader, then talking about the company in third person with no system.",
      ],
      lists: [
        {
          intro: "Common junk:",
          items: [
            "“best / #1” with no basis;",
            "“creative” with no meaning for the audience;",
            "keywords forced into the syntax;",
            "fake or bureaucratic “reviews.”",
          ],
        },
      ],
    },
    {
      title: "What to put instead of a wall of text",
      level: 2,
      paras: [
        "A short offer: who you help and which problem you solve. 3–5 concrete benefits (timeline, geo, format, guarantee) — not adjectives.",
        "Proof: figures, cases, real reviews, work photos — without theatrical delight.",
        "One clear CTA. Service details, prices, and “about” belong on their pages; the homepage leads, it doesn’t replace the site.",
      ],
      lists: [],
      links: [
        {
          label: "Homepage: structure",
          href: "/en/blog/glavnaya-stranitsa/",
        },
        {
          label: "Online store homepage",
          href: "/blog/glavnaya-internet-magazina/",
        },
      ],
    },
    {
      title: "Style and keywords",
      level: 2,
      paras: [
        "Pick “you” or a formal address and keep it across the site. Numbers and prices in one format.",
        "Subordinate keywords to meaning: first a clear sentence, then semantics. Awkward SEO copy scares people more than a missing keyword in the H1.",
        "Don’t sell “everything at once” on the first screen: prestige, mood, and service outcome often beat a procedure list.",
      ],
      lists: [],
      links: [
        {
          label: "SEO copywriting",
          href: "/blog/seo-kopirayting/",
        },
        {
          label: "Usability",
          href: "/blog/yuzabiliti/",
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "Brevity and facts beat clichés.",
        "Superlatives — only with proof.",
        "The homepage isn’t a warehouse for every site text.",
      ],
      lists: [],
    },
  ],
  closing: [
    "Open the homepage and cross out every “best/innovative/personalized” with no fact beside it — the copy usually gets stronger immediately.",
  ],
  related: [
    "glavnaya-stranitsa",
    "o-kompanii",
    "glavnaya-internet-magazina",
    "seo-kopirayting",
    "yuzabiliti",
    "korporativnyy-blog",
    "formy-zahvata",
  ],
};
