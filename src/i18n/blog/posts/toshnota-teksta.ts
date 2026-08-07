import type { BlogPost } from "../../../data/blog";

/** EN overlay for toshnota-teksta — same structure as RU JSON. */
export const toshnotaTekstaEn: BlogPost = {
  slug: "toshnota-teksta",
  title: "Text nausea and keyword density",
  date: "2020-07-30",
  category: "SEO",
  cover: "/images/blog/toshnota-teksta/cover-en.webp",
  excerpt:
    "What classic and academic text nausea are, how keyword density is counted, which tools check it, and why a “normal %” is a brief guide — not a ranking law.",
  lead: [
    "Text nausea is a metric from SEO editors and copywriting exchanges: how often the same words repeat in a piece. It’s often confused with text.ru “spamminess”, though the formulas differ. Keyword density is the share of query (or word) occurrences relative to text volume.",
    "This guide covers how classic “nausea” differs from academic density scores, how to check density online, what ranges briefs use, and how not to turn editing into a race for a percentage. Cutting over-optimization as practice is in the spamminess canon; here the focus is density and nausea metrics.",
  ],
  faq: [
    {
      q: "Is nausea the same as spamminess?",
      a: "Related ideas, different scales. Advego counts classic and academic nausea; text.ru has its own “spamminess”. Figures don’t convert one-to-one across tools.",
    },
    {
      q: "What keyword density is “normal”?",
      a: "A common brief guide is a moderate zone of a few percent for the main key — without fanaticism. It depends on length and niche. There is no single search-engine secret.",
    },
    {
      q: "What is classic nausea?",
      a: "Usually √N, where N is the repeat count of the most frequent (meaningful) word. The more one word dominates, the higher the score.",
    },
    {
      q: "What is academic text nausea?",
      a: "The share of the most frequent words/keywords relative to text volume (in percent). It rises when many different but still pushy repeats pile up.",
    },
    {
      q: "Does high nausea mean a filter?",
      a: "Not a direct ban formula. It’s an editor signal: the text may be overstuffed. The search engine’s decision is broader — meaning, behavior, page quality.",
    },
    {
      q: "What tools should I check with?",
      a: "Advego (nausea), text.ru (spamminess), Turgenev, Istio and peers. Lock the tool and threshold in the brief.",
    },
    {
      q: "Should I add keys if density is low?",
      a: "Only if the topic isn’t really covered. Don’t insert a key for the percentage — clarify structure and value first.",
    },
    {
      q: "Do synonyms fix nausea?",
      a: "Partly. Natural speech, pronouns, and cutting useless repeats beat mechanical synonymizing.",
    },
  ],
  sections: [
    {
      title: "Keyword density in plain words",
      level: 2,
      paras: [
        "Density is the ratio of keyword or phrase occurrences to total words (or content words — depends on the tool’s method). Textbook example: in a three-word phrase one “dancing” yields a huge share — meaningless on a real article without volume.",
        "Search engines don’t plug “% from Advego” into a ranking formula. They care about topic, clarity, and usefulness. The metric helps the client and author avoid overstuffing or empty text without a theme.",
      ],
      lists: [
        {
          intro: "What is usually counted:",
          items: [
            "main-key occurrences;",
            "same-root and close forms;",
            "top most frequent words in the document;",
            "stop words separately (often excluded).",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Counting density on a 20-word paragraph and demanding “the same as a 5000-character brief”. Volume and meaning first.",
        },
      ],
    },
    {
      title: "Classic and academic nausea",
      level: 2,
      paras: [
        "Classic nausea in the familiar Advego scheme ties to the most frequent word: take the square root of its repeat count. Many identical “buy” in a row — classic rises fast.",
        "Academic nausea is closer to the share of frequent meaningful words in the text: it captures the overall repeat “background”, not only the frequency champion. High academic often means the article spins a narrow vocabulary without developing the topic.",
      ],
      lists: [
        {
          intro: "How to read the pair:",
          items: [
            "high classic — one word dominates the text;",
            "high academic — lots of pushy repeats overall;",
            "both low with an empty topic — the text may be “spread thin”;",
            "cross-check by reading aloud, not only the number.",
          ],
        },
      ],
      tables: [
        {
          caption: "Two nausea metrics (simplified)",
          headers: ["Metric", "Idea", "What to watch"],
          rows: [
            ["Classic", "√ of top-word repeats", "One key/champion word"],
            ["Academic", "Share of frequent words, %", "Overall vocabulary stuffing"],
            ["text.ru spamminess", "That tool’s own scale", "Don’t mix up with Advego"],
          ],
        },
      ],
      links: [
        {
          label: "Text spamminess",
          href: "/en/blog/zaspamlennost-teksta/",
        },
      ],
    },
    {
      title: "Tools for density and nausea",
      level: 2,
      paras: [
        "Advego SEO analysis shows classic and academic nausea, water, and a frequency dictionary. text.ru is useful for uniqueness and its spamminess score. Turgenev looks at over-optimization risk, water, style — useful as a second opinion, not the sole judge.",
        "Online URL checks (if in your stack) help for a live page: you see density in the layout context. Desktop and exchange tools — for drafts before publish. Figures don’t match across tools: pick one baseline in the author contract.",
      ],
      lists: [
        {
          intro: "Practical set:",
          items: [
            "Advego — nausea and frequency dictionary;",
            "text.ru — spamminess and uniqueness;",
            "Turgenev / peers — over-optimization risk;",
            "reading aloud — mandatory finale.",
          ],
        },
      ],
      notes: [
        {
          title: "Tip",
          kind: "tip",
          text: "Product names, SKUs, and brand in a card legitimately repeat — don’t “cure” them to zero with a template.",
        },
      ],
    },
    {
      title: "Norm ranges — not a SERP law",
      level: 2,
      paras: [
        "Briefs often set soft corridors: main-key density of a few percent, academic nausea in a moderate zone, text.ru spamminess not in the red. Older guides floated higher “norms” — the market tightened toward natural writing.",
        "Narrow B2B topics sometimes must repeat a term: “pump” in a pumps text can’t become ten euphemisms. Then you lower classic via structure, lists, and covering aspects — not by losing meaning.",
      ],
      lists: [
        {
          intro: "How to set a norm in the brief:",
          items: [
            "name the tool and check version;",
            "give a corridor, not one number;",
            "require human readability;",
            "call out required niche terms separately;",
            "ban padding water for the percentage.",
          ],
        },
      ],
    },
    {
      title: "How to edit without a percentage cult",
      level: 2,
      paras: [
        "Find the top frequent words in the report. Keep the key where it carries meaning (title, first screen, purposeful subheads). Elsewhere — synonyms, pronouns, rephrasing, cutting duplicates. Don’t inflate volume with empty sentences: “water” hits another metric and people.",
        "If density is too low on a short text — first add value and structure (answers, comparison, steps), then strengthen the theme surgically. Racing to “add the key in every H2” brings you back to stuffing.",
      ],
      lists: [
        {
          intro: "Working edit order:",
          items: [
            "pull the frequency dictionary;",
            "cut obvious stuffing;",
            "replace some repeats naturally;",
            "check Title/H1 without a query dump;",
            "recheck in the same tool;",
            "final read-aloud.",
          ],
        },
      ],
      links: [
        {
          label: "Spamminess: how to lower it",
          href: "/en/blog/zaspamlennost-teksta/",
        },
        {
          label: "Copywriting",
          href: "/en/blog/kopirayting/",
        },
        {
          label: "Uniqueness check",
          href: "/en/blog/proverka-unikalnosti/",
        },
      ],
    },
    {
      title: "Link to SEO and timelines",
      level: 2,
      paras: [
        "Text clean of stuffing is part of page prep — not a “TOP button”. After publish, core rankings grow month to month; a planned horizon for noticeable TOP is usually 2–6 months after work starts. A nausea metric in Excel doesn’t speed up indexing.",
        "Look at the whole page: snippet, speed, intent, internal links. Perfect nausea on a useless landing gives nothing.",
      ],
      lists: [
        {
          intro: "Quality mini-checklist:",
          items: [
            "text for humans;",
            "metrics inside the brief corridor;",
            "key in natural places;",
            "no query dump in Title;",
            "page closes the intent.",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Text prep ≠ hitting TOP. TOP for the core is a separate horizon after work starts.",
        },
      ],
      links: [
        {
          label: "On-page optimization",
          href: "/en/blog/optimizatsiya-stranitsy/",
        },
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
  ],
  related: [
    "zaspamlennost-teksta",
    "kopirayting",
    "proverka-unikalnosti",
    "optimizatsiya-stranitsy",
    "semanticheskoe-yadro",
    "prodayushchie-teksty",
  ],
};
