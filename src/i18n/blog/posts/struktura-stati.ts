import type { BlogPost } from "../../../data/blog";

/** EN overlay for struktura-stati — same structure as RU JSON. */
export const strukturaStatiEn: BlogPost = {
  slug: "struktura-stati",
  title: "How to structure an article so people (and search) can follow it",
  date: "2019-11-20",
  category: "Content marketing",
  cover: "/images/blog/struktura-stati/cover-en.webp",
  excerpt:
    "Build article logic with H1–H3, blocks, and lists — and know when a short piece can skip subheads. No “keywords in H2 = rankings” promises.",
  lead: [
    "Article structure is the logical frame: block order, headings, and how paragraphs lead to a takeaway. There’s no universal template for every brief — you fit the frame to the goal, length, and page format.",
    "Here’s why structure matters for readers and search, how heading levels work, when you can skip H2s, and how not to clone the same skeleton everywhere. Writing the full article is a separate process; site IA (sections, URLs) lives in the SEO site structure guide.",
  ],
  faq: [
    {
      q: "Is article structure the same as a table of contents?",
      a: "Almost. The pre-writing outline becomes the TOC after you write. The TOC is the finished structure.",
    },
    {
      q: "Are H2s required in short copy?",
      a: "Not always. Up to about 1–1.5k characters, paragraphs, lists, and emphasis often suffice — if the idea is already clear.",
    },
    {
      q: "How many heading levels do I need?",
      a: "Usually H1 + H2, plus H3 when needed. H4–H6 on landings and blogs are rarely justified — they confuse the eye.",
    },
    {
      q: "Do keywords in headings help rankings?",
      a: "Headings should match the block’s meaning and intent. Stuffing SEO phrases without usefulness doesn’t replace a good answer.",
    },
    {
      q: "Who decides hierarchy — SEO or the writer?",
      a: "Together. The writer owns reading logic; SEO owns intent and sensible markup. Don’t break meaning for a schema.",
    },
    {
      q: "How is this different from site structure?",
      a: "Here — the frame of one text. Site structure is sections, URL hierarchy, and internal links.",
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
        "Structure is the logical base of the piece: internal order and how paragraphs connect. You usually sketch it before typing and revise while writing; in the end it looks like a table of contents.",
        "There’s no perfect specimen. A good frame helps the brief, but blind-copying someone else’s outline for another job hurts. Stay creative: logic and usefulness first — not schema alone.",
      ],
      notes: [
        {
          title: "TOC = finished structure",
          text: "If the headings don’t show the line of thought, the frame is still raw.",
        },
      ],
    },
    {
      title: "Who it’s for — and why it matters",
      level: 2,
      paras: [
        "A wall of text without anchors is harder for readers: finding a fragment and seeing where the article goes is tougher. Headed blocks let people scan and read selectively.",
        "Search cares about clarity and headings that match the content. H1–H6 markup separates headings from paragraphs. That isn’t a ranking guarantee — ranking is broader than “put an H2 with a keyword.”",
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
        "H1 is the title of the whole piece (usually one per page). H2s are major meaning chunks. H3s refine inside an H2 and keep subsections clear.",
        "How many levels you need depends on length and topic. Big guides and roundups tolerate a deeper grid; short posts don’t.",
        "H4–H6 are rare in practice: visually noisy, confusing for readers, and often excess for SEO.",
      ],
      lists: [
        {
          intro: "Practical minimum:",
          items: [
            "one H1 with the page’s essence",
            "H2s for the reader’s big questions",
            "H3 only if a block truly splits",
            "heading = content — no clickbait that fights the text",
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
        "Short descriptions, teasers, cards, and mini-tips often live on paragraphs, lists, and emphasis without subheads — if the main idea stays clear.",
        "In chaos without anchors you can lose the point. Then at least lists and a clear CTA beat a wall of sentences.",
      ],
      notes: [
        {
          title: "Don’t mix this up with site structure",
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
        "Build the frame before the draft — easier to highlight what matters and not wander off topic.",
        "Don’t clone one template across every piece: sameness tires readers. Keep the logic; change delivery for the format (how-to, review, opinion, case).",
        "Tied to the writing process: outline → draft → revise structure if the line of thought changed.",
      ],
      lists: [
        {
          intro: "Remember:",
          items: [
            "structure is for reading and clarity — not an SEO checkbox",
            "H1–H3 is usually enough",
            "short texts can live without H2",
            "a heading must match its block",
            "site and article are different structure levels",
          ],
        },
      ],
      links: [
        {
          label: "Longreads",
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
    "Before the next article, sketch 4–7 H2s as the reader’s questions and check that each has an answer — not fluff under a keyword. That often beats a universal template.",
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
