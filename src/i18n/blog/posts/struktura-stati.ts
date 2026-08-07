import type { BlogPost } from "../../../data/blog";

/** EN overlay for struktura-stati — same structure as RU JSON. */
export const strukturaStatiEn: BlogPost = {
  slug: "struktura-stati",
  title: "A solid article structure for your site",
  date: "2019-11-20",
  category: "Content marketing",
  cover: "/images/blog/struktura-stati/cover-en.webp",
  excerpt:
    "How to build article logic: H1–H3, blocks, lists, and when a wall of text without subheads is fine — without “keywords in H2 = TOP” promises.",
  lead: [
    "Article structure is the logical frame: block order, headings, and how paragraphs lead to a takeaway for the reader. There’s no universal template for every brief — you fit the frame to the goal, length, and page format.",
    "This piece covers why structure matters for readers and search, heading levels, when you can skip H2s, and how not to clone the same skeleton everywhere. Writing the full article is a separate algorithm; site IA (sections, URLs) lives in site SEO structure.",
  ],
  faq: [
    {
      q: "Is article structure the same as a table of contents?",
      a: "Almost: the pre-writing outline becomes the TOC after. The TOC is the finished structure.",
    },
    {
      q: "Are H2s required in short copy?",
      a: "Not always. Up to ~1–1.5k characters, paragraphs, lists, and emphasis often suffice — if the idea is already clear.",
    },
    {
      q: "How many heading levels do you need?",
      a: "Usually H1 + H2, H3 when needed. H4–H6 on landings and blogs are rarely justified: they confuse the eye.",
    },
    {
      q: "Do keywords in headings help rankings?",
      a: "Headings should match the block’s meaning and intent. “SEO keywords for SEO” without usefulness don’t replace answer quality.",
    },
    {
      q: "Who decides hierarchy — SEO or the writer?",
      a: "Together: the writer owns reading logic, SEO owns intent and sensible markup. Don’t break meaning for a schema.",
    },
    {
      q: "How is this different from site structure?",
      a: "Here — the frame of one text. Site structure — sections, URL hierarchy, and internal links.",
    },
    {
      q: "Do I need one template for the whole blog?",
      a: "A reference frame helps; cloning every article doesn’t. Readers tire of identical blocks.",
    },
  ],
  sections: [
    {
      title: "What text structure means",
      level: 2,
      paras: [
        "Structure is the logical base of the article: internal order and how paragraphs connect. You usually sketch it before typing and revise while writing; in the end it looks like a TOC.",
        "There’s no “perfect specimen”: a good frame helps the brief, but blind-copying someone else’s outline for another job hurts. The approach is creative: logic + usefulness, not schema alone.",
      ],
      notes: [
        {
          title: "TOC = finished structure",
          text: "If the headings don’t show the line of thought — the frame is still raw.",
        },
      ],
    },
    {
      title: "Who it’s for and why it matters",
      level: 2,
      paras: [
        "A wall of text without anchors is harder for readers: finding a fragment and seeing where the article goes is tougher. Headed blocks let people scan and read selectively.",
        "Search cares about clarity and headings matching content. H1–H6 markup separates headings from paragraphs. That isn’t a ranking guarantee: ranking is broader than “put an H2 with a keyword.”",
      ],
      links: [
        {
          label: "How to write an article",
          href: "/en/blog/kak-napisat-statyu/",
        },
        {
          label: "SEO copywriting",
          href: "/en/blog/seo-kopirayting/",
        },
      ],
    },
    {
      title: "Heading levels",
      level: 2,
      paras: [
        "H1 — the title of the whole piece (usually one per page). H2 — major meaning chunks. H3 — refinements inside an H2 and the logic between subsections.",
        "How many levels to use depends on length and topic. Big guides and roundups tolerate a deeper grid; short posts don’t.",
        "H4–H6 are rare in practice: visually noisy, confusing for readers, often excess for SEO.",
      ],
      lists: [
        {
          intro: "Practical minimum:",
          items: [
            "one H1 with the page’s essence;",
            "H2s for the reader’s big questions;",
            "H3 only if a block truly splits;",
            "heading = content — no clickbait that fights the text.",
          ],
        },
      ],
      links: [
        {
          label: "4U headlines",
          href: "/en/blog/zagolovki-4u/",
        },
      ],
    },
    {
      title: "When a lighter structure works",
      level: 2,
      paras: [
        "Not every text needs a full H2/H3 grid. The call depends on length, purpose, and page template (layout sometimes limits splitting).",
        "Short descriptions, teasers, cards, and mini-tips often live on paragraphs, lists, and emphasis (bold, italic) without subheads — if the main idea stays clear.",
        "In chaos without anchors you can lose the point: then at least lists and a clear CTA beat a wall of sentences.",
      ],
      notes: [
        {
          title: "Don’t mix up with site structure",
          text: "Section and URL hierarchy is a separate job. An article can be perfectly marked up and still sit in a crooked catalog section.",
        },
      ],
      links: [
        {
          label: "SEO site structure",
          href: "/en/blog/seo-struktura-sayta/",
        },
      ],
    },
    {
      title: "Recommendations",
      level: 2,
      paras: [
        "Build the frame before the draft — easier to highlight what matters for people and not wander off topic.",
        "Don’t clone one template across every piece: sameness tires. Keep the logic; change delivery for the format (how-to, review, opinion, case).",
        "Tied to the writing process: outline → draft → revise structure if the line of thought changed.",
      ],
      lists: [
        {
          intro: "Remember:",
          items: [
            "structure is for reading and clarity — not an “SEO checkbox”;",
            "H1–H3 is usually enough;",
            "short texts can live without H2;",
            "a heading must match its block;",
            "site and article are different structure levels.",
          ],
        },
      ],
      links: [
        {
          label: "Longread",
          href: "/en/blog/longrid/",
        },
        {
          label: "Copywriter brief",
          href: "/en/blog/tz-kopiraytera/",
        },
      ],
    },
  ],
  closing: [
    "Before the next article, sketch 4–7 H2s as the reader’s questions and check that each has an answer — not “fluff under a keyword.” That often beats a universal template.",
  ],
  related: [
    "longrid",
    "kak-napisat-statyu",
    "zagolovki-4u",
    "seo-kopirayting",
    "tz-kopiraytera",
    "seo-struktura-sayta",
  ],
};
