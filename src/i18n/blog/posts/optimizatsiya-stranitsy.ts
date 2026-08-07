import type { BlogPost } from "../../../data/blog";

/** EN overlay for optimizatsiya-stranitsy — same structure as RU JSON. */
export const optimizatsiyaStranitsyEn: BlogPost = {
  slug: "optimizatsiya-stranitsy",
  title: "Page optimization for a keyword: on-page checklist",
  date: "2021-08-02",
  category: "SEO",
  cover: "/images/blog/optimizatsiya-stranitsy/cover-en.webp",
  excerpt:
    "How to tune a landing for a query: copy, Title and H1, snippet, internal links, depth, URL, and images — without keyword stuffing or the myth “a keyword in every paragraph.”",
  lead: [
    "On-page optimization means one page clearly answers one main intent: people get the offer, and crawlers read the topic from Title, headings, copy, and links.",
    "Below — a practical checklist for content and page tech. Meaning and usefulness first, then keyword use. Landing prep ≠ TOP-10: rankings usually grow over months after work starts.",
  ],
  faq: [
    {
      q: "Start with keywords or with copy?",
      a: "With intent and answer structure. A core keyword sets the topic; write for humans and weave phrases in naturally. See the semantic core article.",
    },
    {
      q: "Should Title and H1 match?",
      a: "No. Title is for the snippet and SERP topic; H1 is the on-page headline. Same meaning, preferably different wording.",
    },
    {
      q: "Must the keyword be in the first and last paragraph?",
      a: "No hard rule. The topic should be clear from the first screens. Stuffing the key at start and end “for the checklist” leads to spam.",
    },
    {
      q: "How many characters in Title and description?",
      a: "SERP guidelines shift. Keep the meaning early in Title; description — a useful paragraph with a CTA, not a keyword sheet. Check previews in Webmaster / Search Console.",
    },
    {
      q: "How is this different from keyword spam?",
      a: "Here — the page frame for a query. Keyword spam is about excessive repeats in the text. See the separate article.",
    },
  ],
  sections: [
    {
      title: "Content for the query",
      level: 2,
      paras: [
        "The page covers one cluster: commercial “buy/order” or informational “how/what.” Mixing intents on one URL is weaker for people and for the SERP.",
        "Copy: unique, readable, with lists and subheads. Key phrases by meaning — not density “in every sentence.”",
      ],
      lists: [
        {
          intro: "Copy minimum:",
          items: [
            "answer the query in the first screens;",
            "facts, prices/timelines/terms — if it’s commercial;",
            "a CTA without fluff;",
            "check for stuffing out loud and with a density tool.",
          ],
        },
      ],
      links: [
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Keyword spam in text",
          href: "/en/blog/zaspamlennost-teksta/",
        },
      ],
    },
    {
      title: "Title, H1, and subheads",
      level: 2,
      paras: [
        "Title is the main meta topic signal. Core meaning and key phrase nearer the start; no comma list of “cheap wholesale urgent.”",
        "One H1 per page, different from Title, written as a human headline. H2–H3 open subtopics and secondary phrasings — they don’t repeat the same exact-match.",
      ],
      lists: [
        {
          intro: "Guidelines:",
          items: [
            "Title: clear benefit/topic + brand if needed;",
            "H1: one, without spam;",
            "H2: section logic, not “key1 / key2 / key3.”",
          ],
        },
      ],
    },
    {
      title: "Snippet and description",
      level: 2,
      paras: [
        "The SERP snippet is built from Title, description, sometimes page text. Description doesn’t “rank by itself,” but it affects CTR: promise, difference, ask.",
        "Write 1–2 useful sentences; a keyword is fine if it doesn’t break the language. Stuffing the description kills the click.",
      ],
      lists: [],
    },
    {
      title: "Internal linking and depth",
      level: 2,
      paras: [
        "Internal links from relevant pages help users and crawl. Anchors by meaning — not the same “here” on dozens of URLs.",
        "Click depth: keep important commercial URLs close to the homepage (roughly within 2–3 clicks). “Nobody goes deeper than three” is a simplification, but hiding a service behind five menus hurts.",
      ],
      lists: [],
      links: [
        {
          label: "SEO site structure",
          href: "/blog/seo-struktura-sayta/",
        },
        {
          label: "What a link is",
          href: "/en/blog/chto-takoe-ssylka/",
        },
      ],
    },
    {
      title: "URL and images",
      level: 2,
      paras: [
        "Human-readable URL: a short path matching the page meaning, hyphens, no parameter junk. A keyword in the URL is a weak clarity plus — not a content substitute.",
        "Images: compression, a meaningful filename, `alt` describing the scene (not a keyword sheet). Image search is a bonus, not the main bet for a commercial page.",
      ],
      lists: [
        {
          intro: "Quick checklist before publish:",
          items: [
            "one main intent per URL;",
            "Title / H1 / lead aligned;",
            "internal links to/from the page;",
            "readable URL and HTTPS;",
            "alt on key images;",
            "no stuffing or copy-paste.",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          text: "On-page work is part of prep. Ranking for a competitive query is planned over months after promotion starts — not the result of one Title tweak.",
        },
      ],
      links: [
        {
          label: "Website URL",
          href: "/en/blog/url-adres/",
        },
      ],
    },
  ],
};
