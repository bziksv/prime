import type { BlogPost } from "../../../data/blog";

/** EN overlay for zaspamlennost-teksta — same structure as RU JSON. */
export const zaspamlennostTekstaEn: BlogPost = {
  slug: "zaspamlennost-teksta",
  title: "Keyword stuffing: what it is and how to reduce it",
  date: "2021-10-29",
  category: "SEO",
  cover: "/images/blog/zaspamlennost-teksta/cover-en.webp",
  excerpt:
    "What keyword stuffing and text “nausea” mean, how excess keywords hurt readability and SEO, which tools check density, and how to fix stuffing without fluff.",
  lead: [
    "Keyword stuffing is when keywords and same-root repeats pile up so high the copy reads for a bot, not a person. Search engines dislike it; people bounce even faster.",
    "Below — how stuffing shows up, why Advego/text.ru get used, and how to lower density without turning the article into a watery mess. Tool scores are a brief guideline, not a ranking law.",
  ],
  faq: [
    {
      q: "What stuffing percentage is “normal”?",
      a: "On text.ru the usual advice is “don’t go to extremes”; briefs often ask for a moderate zone (roughly up to ~45–50% on their scale). Match the specific tool’s method — scales differ.",
    },
    {
      q: "Does Advego nausea = a search ban?",
      a: "No direct formula. High classic/academic nausea signals “lots of repeats”. The engine’s decision is broader: meaning, behavior, page quality.",
    },
    {
      q: "Should I pad the text with fluff?",
      a: "No. Prefer synonyms, pronouns, rephrasing, and cutting spare keywords. Fluff hurts the copy in another way.",
    },
    {
      q: "Are keywords in Title spam?",
      a: "One natural main idea is fine. A comma list like “buy cheap wholesale city urgent” is already stuffing.",
    },
    {
      q: "What else can I check with?",
      a: "Advego, text.ru, Istio and similar tools — plus common sense: read aloud. If you stumble, edit.",
    },
  ],
  sections: [
    {
      title: "What counts as stuffing",
      level: 2,
      paras: [
        "It’s the share and frequency of keywords (and close forms) relative to text length. Keywords serve the topic, but racing to “put the query in every sentence” breaks the language.",
        "A classic anti-example is a description where one commercial phrase repeats dozens of times with tiny swaps. Formally “for queries”, in practice — spam.",
      ],
      lists: [
        {
          intro: "How stuffing looks:",
          items: [
            "the same words in every paragraph;",
            "unnatural query chains;",
            "layout mixes and typos “for uniqueness”;",
            "a human can’t read the text.",
          ],
        },
      ],
    },
    {
      title: "How it ties to rankings",
      level: 2,
      paras: [
        "Relevance matters, but search judges quality: usefulness, uniqueness, on-page behavior. Stuffing cuts trust and UX — bounce rises.",
        "Ranking uses many signals; a third-party “nausea %” isn’t plugged in directly. The tool is an editor’s helper.",
      ],
      lists: [],
    },
    {
      title: "Checking tools",
      level: 2,
      paras: [
        "text.ru shows stuffing, uniqueness, and often errors. Advego — classic and academic “nausea” (different density formulas).",
        "Istio, PR-CY, desktop analyzers — alternatives. Numbers don’t match 1:1 across tools: fix in the brief which instrument you measure with.",
      ],
      lists: [
        {
          intro: "A practical brief approach:",
          items: [
            "name the tool and threshold;",
            "require human readability;",
            "don’t chase a “magic” percent at the cost of meaning;",
            "recheck the final text after edits.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "If a tool screams “spam” but the copy is fine — check whether product/brand names that must repeat landed in the report. Fix with judgment, not blindly.",
        },
      ],
    },
    {
      title: "How to reduce stuffing",
      level: 2,
      paras: [
        "Cut spare keyword repeats, replace some with synonyms and pronouns, rebuild sentences. Chunks you can’t save — delete.",
      ],
      lists: [
        {
          intro: "Working order:",
          items: [
            "find top frequent words in the report;",
            "keep the keyword where it carries meaning;",
            "dilute with natural speech, not fluff;",
            "don’t spawn same-root forms in every paragraph;",
            "read aloud and send for proofreading.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Inflating length with empty phrases so the “keyword % drops”. You get watery spam of another kind.",
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
  ],
};
