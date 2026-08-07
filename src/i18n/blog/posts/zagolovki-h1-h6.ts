import type { BlogPost } from "../../../data/blog";

/** EN overlay for zagolovki-h1-h6 — same structure as RU JSON. */
export const zagolovkiH1H6En: BlogPost = {
  slug: "zagolovki-h1-h6",
  title: "H1–H6 headings: technique and meaning for SEO",
  date: "2018-08-03",
  category: "SEO",
  cover: "/images/blog/zagolovki-h1-h6/cover-en.webp",
  excerpt:
    "How to use H1–H6 tags on a page: one main heading, hierarchy, keywords without stuffing, and a readable structure — don’t confuse with 4U copywriting or HTTP headers.",
  lead: [
    "HTML headings are the page’s meaning frame — for people and for search. This isn’t a catchy 4U ad headline or HTTP server headers; it’s H1–H6 tags in the markup.",
    "How to tie keywords to levels, how many levels you really need, and typical mistakes like stuffing every keyword into one H1. Heading weight is one on-page signal, not a ranking guarantee.",
  ],
  faq: [
    {
      q: "Is this about 4U headlines?",
      a: "No. 4U is a formula for selling copy. This piece covers the HTML H1–H6 hierarchy for SEO and readability.",
    },
    {
      q: "How many H1s per page?",
      a: "Usually one main heading. Several H1s are formally possible in HTML5, but for clarity and the snippet one strong H1 is better.",
    },
    {
      q: "Is H1 more important than title?",
      a: "Title has a stronger effect on the SERP snippet. H1 is the main visible heading on the page. Both should agree in meaning.",
    },
    {
      q: "Do I need every level down to H6?",
      a: "No. A typical article needs H1 + H2, sometimes H3. Deep nesting just for keywords isn’t useful.",
    },
    {
      q: "Can I pack keywords into every H?",
      a: "Don’t: stuffing and poor readability. Put the keyword where it fits; the rest should be clear language.",
    },
    {
      q: "Should styles and colors go inside H tags?",
      a: "Style via CSS classes — don’t inflate heading markup with inline noise. A clean structure is easier to maintain.",
    },
    {
      q: "Will headings alone lift conversion?",
      a: "They improve scanning and relevance. Conversion still depends on the offer, UX, and trust.",
    },
  ],
  sections: [
    {
      title: "Keywords and user expectation",
      level: 2,
      paras: [
        "Page semantics set what the H1 and subheads are about. On the homepage — broader themes; on a product or service page — a specific model or offer, not the whole catalog in one line.",
        "Avoid telegraphic spam like “buy X city” without normal language. Search engines understand word forms; people do too — and they leave awkwardly worded pages.",
        "Don’t dump every page keyword into one heading. Part of the meaning belongs in H2/H3 and body copy.",
      ],
      links: [
        {
          label: "Page optimization",
          href: "/en/blog/optimizatsiya-stranitsy/",
        },
        {
          label: "Semantic keyword set",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "H1–H6 hierarchy",
      level: 2,
      paras: [
        "H1 is the page topic as a whole. H2s are major blocks. H3s are subsections inside a block. Skipping levels “for looks” confuses structure; jumping two levels without need isn’t worth it.",
        "Example logic: H1 “Temporary registration in Moscow” → H2 “Documents” → H3 “Application.” Details go in paragraphs, not an endless H1.",
        "A long H1 listing everything (“cars, bikes, trucks, tractors…”) reads worse and focuses intent more weakly than a short H1 plus clarification in the text.",
      ],
      lists: [
        {
          intro: "Basic rules:",
          items: [
            "one clear H1 per URL;",
            "H2s read as the page outline;",
            "keywords naturally, without a keyword sheet;",
            "levels match meaning — not “for SEO.”",
          ],
        },
      ],
    },
    {
      title: "Tie-in with title, CTA, and mistakes",
      level: 2,
      paras: [
        "Title and H1 should talk about the same offer — in different words when needed — without full copy-paste if it hurts the snippet.",
        "CTAs and emphasis (strong) help people; they don’t replace heading hierarchy. Don’t hide the whole offer only in bold text with no H1.",
        "Common misses: several competing H1s from a template, H2 before H1, button-like headings with no body below, keywords in all six levels “just in case.”",
        "Solid heading structure is part of site prep. Core keyword rankings typically build over 2–6 months after launch prep — headings help clarity and relevance, but they aren’t a shortcut to TOP.",
      ],
      links: [
        {
          label: "4U headlines (copywriting)",
          href: "/en/blog/zagolovki-4u/",
        },
        {
          label: "On-page factors",
          href: "/en/blog/vnutrennie-faktory/",
        },
        {
          label: "HTTP headers",
          href: "/en/blog/http-zagolovki/",
        },
      ],
    },
  ],
  closing: [
    "Open one commercial page: is there one H1, does it match intent and title, and does the outline read via H2s — in 10 minutes you often see what to fix before “more keywords.”",
  ],
  related: [
    "optimizatsiya-stranitsy",
    "zagolovki-4u",
    "vnutrennie-faktory",
    "snippet",
    "semanticheskoe-yadro",
    "http-zagolovki",
  ],
};
