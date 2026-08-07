import type { BlogPost } from "../../../data/blog";

/** EN overlay for bystrye-otvety-google — same structure as RU JSON. */
export const bystryeOtvetyGoogleEn: BlogPost = {
  slug: "bystrye-otvety-google",
  title: "Google featured snippets: how to get in and what to watch",
  date: "2019-07-19",
  category: "Internet marketing",
  cover: "/images/blog/bystrye-otvety-google/cover-en.webp",
  excerpt:
    "How Google’s featured snippet block works: formats, the role of question long-tails, answer structure on the page — with no “position zero” guarantee and an eye on AI Overviews.",
  lead: [
    "A featured snippet is a highlighted Google results block with a short answer from a page: paragraph, list, table, sometimes video. People often call it “position zero”, though it’s not a classic top-ten slot.",
    "Below — what raises the odds, how to gather question long-tails, and how to format the answer. Title/description and schema are in the snippet piece; the SERP changes (including AI Overviews) — no guarantees.",
  ],
  faq: [
    {
      q: "Is this the same as a regular snippet?",
      a: "No. A regular snippet is title + description on a result. A featured snippet is a separate answer block, often above organic.",
    },
    {
      q: "Do you need to be in TOP-3?",
      a: "Pages already visible for the query are taken more often, but not always #1. Without relevance and basic visibility the odds are weak.",
    },
    {
      q: "How many characters in the answer?",
      a: "A cue is a short paragraph (about 40–60 words), not a wall of text. Exact limits float; what matters is a clear answer right under the question.",
    },
    {
      q: "Is FAQ markup enough?",
      a: "FAQPage can unlock another rich type. For a featured snippet the on-page text and structure matter more than JSON-LD alone.",
    },
    {
      q: "What about AI Overviews?",
      a: "Google tests and shows summarized answers. Classic featured snippets aren’t gone everywhere, but competition for zero-click grew. Watch Search Console and the SERP for your core.",
    },
    {
      q: "Is long-tail alone enough?",
      a: "Question low-frequency queries are a good entry. You still need a full piece, clear structure, and value after the click.",
    },
  ],
  sections: [
    {
      title: "Which blocks exist",
      level: 2,
      paras: [
        "Common formats: definition paragraph, numbered/bulleted list, table, video fragment. Length is limited — extras get cut.",
        "You don’t “assign” the block with a panel button. The algorithm picks the fragment that best answers the query intent.",
      ],
    },
    {
      title: "Question long-tails",
      level: 2,
      paras: [
        "A long tail (3+ words, often with “how”, “what”, “why”, “how much”) is closer to a featured snippet than one-word brands. Gather questions from search suggestions, “People also ask”, planners, and competitor semantics.",
        "Link to a long-form piece: one strong article covers a question cluster with question subheads and a short answer right under each.",
      ],
      lists: [
        {
          intro: "How to gather questions:",
          items: [
            "search suggestions on your topic;",
            "the “related questions” block;",
            "question words + niche core;",
            "keyword planners / competitor exports.",
          ],
        },
      ],
      links: [
        {
          label: "Search suggestions",
          href: "/en/blog/poiskovye-podskazki/",
        },
      ],
    },
    {
      title: "How to format the answer on the page",
      level: 2,
      paras: [
        "Under an H2/H3 with the question, give a direct answer in 1–2 sentences, then expansion, a list, or a table. Don’t hide the point at the end of the article.",
        "Behavior metrics affect things indirectly: useful material is kept longer. But you can’t “inflate bounce for a snippet” — that’s harm and risk.",
      ],
      lists: [
        {
          intro: "Mini-checklist:",
          items: [
            "question in the subhead matches the query wording;",
            "short answer right under it;",
            "list/table when the intent is “how/steps/compare”;",
            "unique depth beyond competitors;",
            "mobile readability.",
          ],
        },
      ],
      notes: [
        {
          title: "Timing and expectations",
          text: "Getting into the block isn’t a guarantee of commercial TOP and doesn’t replace site prep. Core positions grow over months by plan; a featured snippet may appear earlier on an info cluster — or not at all.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Snippet and rich results",
          href: "/en/blog/snippet/",
        },
        {
          label: "Page optimization",
          href: "/en/blog/optimizatsiya-stranitsy/",
        },
      ],
    },
  ],
  closing: [
    "Google’s quick answer likes a clear question and a short precise fragment on a strong page. Gather long-tails, format answers under headings, and watch SERP changes — with no “position zero in a week” promises.",
  ],
  related: [
    "snippet",
    "poiskovye-podskazki",
    "optimizatsiya-stranitsy",
    "trendy-seo",
    "korporativnyy-blog",
    "kontent-plan",
  ],
};
