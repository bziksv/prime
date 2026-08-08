import type { BlogPost } from "../../../data/blog";

/** EN overlay for seo-kopirayting — same structure as RU JSON. */
export const seoKopiraytingEn: BlogPost = {
  slug: "seo-kopirayting",
  title: "SEO copywriting: rules, LSI, and a practical checklist",
  date: "2019-12-07",
  category: "SEO",
  cover: "/images/blog/seo-kopirayting/cover-en.webp",
  excerpt:
    "What SEO copywriting is, how it differs from “just text,” a brief glossary for briefs, LSI, a creation checklist, and common mistakes — without a keyword-density cult.",
  lead: [
    "SEO copywriting is copy that answers a person’s search and stays clear to engines: structure, meaning, and natural phrasing from your keyword research. It isn’t a bolded keyword in every paragraph or filler “for the bot.”",
    "Below: a definition, a short glossary, who should write these pages, the role of LSI, a checklist, and common mistakes. Copywriting types and choosing an author live in the general copywriting article; here the focus is search-oriented pages.",
  ],
  faq: [
    {
      q: "Does SEO copy have to be boring?",
      a: "No. Boring text raises bounces. Write for people and weave keywords in naturally.",
    },
    {
      q: "Should I bold the keywords?",
      a: "No. That’s an outdated trick and an over-optimization risk. Highlight meaning for the reader, not “markers for the bot.”",
    },
    {
      q: "What is LSI in plain English?",
      a: "Related words and phrasing around the topic — not only the exact keyword — that help you cover the intent more fully.",
    },
    {
      q: "Is the meta keywords tag required?",
      a: "For Yandex and Google, practically no. Focus on title, description, and the page copy.",
    },
    {
      q: "Is a content marketplace a good source?",
      a: "Sometimes for simple jobs. For expert and commercial pages, an author with a niche portfolio and a clear brief is more reliable.",
    },
    {
      q: "How many keywords should I insert?",
      a: "As many as you need for the topic to be clear — without stuffing. Watch density/spam scores and readability, not “density for density’s sake.”",
    },
    {
      q: "Will one SEO article put me on page one?",
      a: "Rarely. You also need site structure, tech, relevance, and time: prep about a month; ranking growth for the set planned over 2–6 months.",
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
        "It’s writing so the page answers search demand: the topic is clear, the structure is scannable, and the phrasing matches how the audience talks. Search also weighs tech, links, and behavior — copy is one layer.",
        "The goal is relevance to the query and value for the visitor. The crawler indexes the page; in results it competes with other answers to the same intent. Stuffing keywords without meaning tends to hurt today.",
      ],
      lists: [
        {
          intro: "How it differs from “just an article”:",
          items: [
            "a cluster and intent exist before writing",
            "H1 and subheads align with the queries",
            "title and description shaped for the snippet",
            "uniqueness and stuffing checks before publish",
          ],
        },
      ],
      links: [
        {
          label: "Copywriting",
          href: "/en/blog/kopirayting/",
        },
        {
          label: "Keyword research",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Glossary for the brief",
      level: 2,
      paras: [
        "Keywords — search terms people use. A cluster — queries with one intent for one landing. Density and spam scores measure overload by repetition; “fluff” is low-meaning filler. H1 is the main page heading (usually one); H2–H3 structure the blocks.",
        "Title and description are meta for the snippet (search may still pick another fragment). Word count is a guide by task and competitive pages — not a sacred number. Uniqueness means no copy-paste; facts and expertise beat a tool percentage.",
      ],
      lists: [
        {
          intro: "In the author brief, specify:",
          items: [
            "page goal and audience",
            "main keyword plus LSI / extra phrasing",
            "required facts and CTA",
            "word-count guide and outline",
            "competitor examples (for reference, not copy-paste)",
          ],
        },
      ],
      links: [
        {
          label: "Text “nausea” / density",
          href: "/en/blog/toshnota-teksta/",
        },
        {
          label: "Keyword stuffing",
          href: "/en/blog/zaspamlennost-teksta/",
        },
        {
          label: "SEO text length",
          href: "/en/blog/dlina-seo-teksta/",
        },
      ],
    },
    {
      title: "Who writes it — and where to order",
      level: 2,
      paras: [
        "Good SEO writers are rarer than “we write per 1,000 characters.” Look for a portfolio matched to the page type, ability to work from a brief, and willingness to revise. Content marketplaces suit simple jobs; for services, medicine, finance, and complex B2B, expertise beats price per character.",
        "The SEO specialist prepares the keyword set and criteria; the copywriter builds the text. Blurry ownership (“find the keywords yourself and guess the offer”) almost always yields a weak result.",
      ],
      lists: [
        {
          intro: "Vendor red flags:",
          items: [
            "page-one rankings promised by text alone",
            "refusal to revise",
            "competitor copy-paste",
            "bold keywords and “5% density” as a method",
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
        "In practice, LSI copywriting means covering the topic through related concepts, questions, and phrasing from suggestions and the SERP — not only exact keyword matches. The text answers intent more fully and looks less like spam.",
        "Pull ideas from Wordstat, search suggestions, related queries, and strong ranking pages — then write in your voice with brand facts.",
      ],
      lists: [
        {
          intro: "LSI practice:",
          items: [
            "collect nearby phrasing",
            "answer frequent questions in an FAQ block",
            "don’t repeat one keyword mechanically",
            "check readability out loud",
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
        "Before handoff: intent covered, one purposeful H1, logical subheads, natural keywords, no fluff for volume, uniqueness and facts checked, title/description aligned with the page, CTA in place.",
        "Mistakes: copy-paste, stuffing, bold keywords, ignoring structure, text off-cluster, promising “page one from one article.” SEO content works inside a system with tech and time — not as a one-off spell.",
      ],
      lists: [
        {
          intro: "Handoff checklist:",
          items: [
            "match to the brief and cluster",
            "H1–H3 structure",
            "snippet meta without clickbait",
            "density / fluff check",
            "proofread and verify facts",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          text: "Publishing copy is not the same as ranking on page one. Indexing takes days to weeks; ranking growth for the keyword set is planned over months after work starts.",
        },
      ],
      links: [
        {
          label: "Snippets",
          href: "/en/blog/snippet/",
        },
        {
          label: "H1 tag",
          href: "/en/blog/teg-h1/",
        },
        {
          label: "Why the site isn’t ranking",
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
