import type { BlogPost } from "../../../data/blog";

/** EN overlay for seo-kopirayting — same structure as RU JSON. */
export const seoKopiraytingEn: BlogPost = {
  slug: "seo-kopirayting",
  title: "SEO copywriting: rules, LSI, and a checklist",
  date: "2019-12-07",
  category: "SEO",
  cover: "/images/blog/seo-kopirayting/cover-en.webp",
  excerpt:
    "What SEO copywriting is, how it differs from “just text”, a brief glossary, LSI, a creation checklist, and common mistakes — without a keyword-density cult.",
  lead: [
    "SEO copywriting is copy that closes a person’s query and stays clear to search: structure, meaning, and fitting phrasing from the semantics. It isn’t a bold key in every paragraph or a pack “for the bot”.",
    "Below — a definition, a basic brief glossary, who writes such texts, the role of LSI, a checklist, and mistakes. Copywriting types and author choice — in the general copywriting article; here the focus is search materials.",
  ],
  faq: [
    {
      q: "Must SEO text be boring?",
      a: "No. Boring text raises bounces. Write for people; weave keywords in naturally.",
    },
    {
      q: "Should keywords be bolded?",
      a: "No. That’s an outdated trick and over-optimization risk. Highlight meaning for the reader, not “markers for the bot”.",
    },
    {
      q: "What is LSI in plain words?",
      a: "Meaningful words and phrasing around the topic (not only the exact key) that help cover intent.",
    },
    {
      q: "Is meta keywords required?",
      a: "For Yandex/Google practically no. Focus on title, description, and page copy.",
    },
    {
      q: "Is a content marketplace a normal source?",
      a: "Sometimes for simple jobs. For expert and commercial pages, an author with niche portfolio and a clear brief is more reliable.",
    },
    {
      q: "How many keywords to insert?",
      a: "As many as needed for the topic to be clear without stuffing. Watch nausea/spamminess and readability — not “density for density’s sake”.",
    },
    {
      q: "Will one SEO text put you in TOP?",
      a: "Rarely. You need site structure, tech, relevance, and time: prep about a month; core ranking buildup planned 2–6 months.",
    },
    {
      q: "How does SEO copywriting differ from sales copy?",
      a: "Plenty of overlap. SEO adds work with a query cluster and a landing matched to intent; sales copy pushes harder on offer and CTA.",
    },
  ],
  sections: [
    {
      title: "What SEO copywriting is",
      level: 2,
      paras: [
        "It’s writing materials so the page answers search demand: the topic is clear, structure is scannable, phrasing matches the audience’s language. Search also weighs other signals (tech, links, behavior) — text is one layer.",
        "The goal is to show query relevance and value to the visitor. The bot indexes the page; in the SERP it competes with other answers to the same intent. “Stuffing keywords” without meaning tends to hurt today.",
      ],
      lists: [
        {
          intro: "Differences from “just an article”:",
          items: [
            "a cluster/intent exists before writing;",
            "H1 and subheads align with queries;",
            "title/description for the snippet;",
            "uniqueness and stuffing checks.",
          ],
        },
      ],
      links: [
        {
          label: "Copywriting",
          href: "/en/blog/kopirayting/",
        },
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Glossary for the brief",
      level: 2,
      paras: [
        "Keywords — demand words and phrases. Semantics/cluster — a group of queries with one intent for one landing. Nausea and spamminess — overload-by-repetition metrics; “fluff” — share of low-meaning constructions. H1 — the main page heading (usually one); H2–H3 — block structure.",
        "Title and description — meta for the snippet (search may pick another fragment). Volume — a guide by task and TOP, not a sacred number. Uniqueness — not copy-paste; facts and expertise beat a tool percentage.",
      ],
      lists: [
        {
          intro: "In the author brief specify:",
          items: [
            "page goal and audience;",
            "main key + LSI/extra phrasing;",
            "required facts and CTA;",
            "volume guide and structure;",
            "competitor examples (not for copy-paste).",
          ],
        },
      ],
      links: [
        {
          label: "Text nausea",
          href: "/en/blog/toshnota-teksta/",
        },
        {
          label: "Text spamminess",
          href: "/en/blog/zaspamlennost-teksta/",
        },
        {
          label: "SEO text length",
          href: "/en/blog/dlina-seo-teksta/",
        },
      ],
    },
    {
      title: "Who writes and where to order",
      level: 2,
      paras: [
        "Good SEO authors are rarer than “we write per 1,000 characters”. Look for a portfolio matched to page type, ability to work from a brief, and revise on feedback. Content marketplaces suit simple jobs; for services, medicine, finance, and complex B2B — expertise beats price per character.",
        "The SEO specialist prepares semantics and criteria; the copywriter builds the text. Blurry ownership (“find the keys yourself and guess the offer”) almost always yields a weak result.",
      ],
      lists: [
        {
          intro: "Red flags in a vendor:",
          items: [
            "TOP promised by text alone;",
            "refusal to revise;",
            "competitor copy-paste;",
            "bold keys and “5% density” as a method.",
          ],
        },
      ],
      links: [
        {
          label: "Uniqueness check",
          href: "/en/blog/proverka-unikalnosti/",
        },
        {
          label: "Sales copy",
          href: "/en/blog/prodayushchie-teksty/",
        },
      ],
    },
    {
      title: "LSI and meaning instead of stuffing",
      level: 2,
      paras: [
        "LSI copywriting in practice means covering the topic through related concepts, questions, and phrasing from suggestions/SERP — not only exact key matches. The text answers intent more fully and looks less like spam.",
        "Take ideas from Wordstat, search suggestions, “related queries”, and strong TOP pages — then write in your voice with brand facts.",
      ],
      lists: [
        {
          intro: "LSI practice:",
          items: [
            "collect nearby phrasing;",
            "close frequent questions in an FAQ block;",
            "don’t repeat one key mechanically;",
            "check readability out loud.",
          ],
        },
      ],
      links: [
        {
          label: "Site content",
          href: "/en/blog/napolnenie-sayta/",
        },
      ],
    },
    {
      title: "Checklist and common mistakes",
      level: 2,
      paras: [
        "Before handoff: intent closed, one purposeful H1, logical subheads, natural keys, no fluff for volume, uniqueness and facts checked, title/description aligned with the page, CTA in place.",
        "Mistakes: copy-paste, stuffing, bold keys, ignoring structure, text off-cluster, promising “TOP from one article”. SEO content works in a system with tech and time — not as a one-off spell.",
      ],
      lists: [
        {
          intro: "Handoff checklist:",
          items: [
            "match to the brief and cluster;",
            "H1–H3 structure;",
            "snippet meta without clickbait;",
            "nausea/fluff check;",
            "proofread and facts.",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Publishing text ≠ TOP-10. Indexing — days–weeks; core ranking buildup — planned months after work starts.",
        },
      ],
      links: [
        {
          label: "Snippet",
          href: "/en/blog/snippet/",
        },
        {
          label: "H1 tag",
          href: "/en/blog/teg-h1/",
        },
        {
          label: "Why the site isn’t in TOP",
          href: "/en/blog/sayt-ne-v-top/",
        },
      ],
    },
  ],
  related: [
    "kopirayting",
    "semanticheskoe-yadro",
    "dlina-seo-teksta",
    "toshnota-teksta",
    "napolnenie-sayta",
    "prodayushchie-teksty",
  ],
};
