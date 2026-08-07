import type { BlogPost } from "../../../data/blog";

/** EN overlay for kontentnoe-prodvizhenie — same structure as RU JSON. */
export const kontentnoeProdvizhenieEn: BlogPost = {
  slug: "kontentnoe-prodvizhenie",
  title: "8 tips for content-led site promotion",
  date: "2018-08-17",
  category: "Content marketing",
  cover: "/images/blog/kontentnoe-prodvizhenie/cover-en.webp",
  excerpt:
    "How to promote a site with content: originality without a uniqueness-% fetish, topic and audience, keywords without stuffing, usefulness, updates, a blog, and what LSI really means — without “TOP from one article” promises.",
  lead: [
    "Content-led promotion means systematic answers to demand: copy for people and clear signals for search. Tricking the SERP with a wall of keywords is a weak move; usefulness, clarity, and consistency matter more.",
    "Eight foundations matter most. Idea formats and finding topics live in related articles; this piece is about quality and discipline.",
  ],
  faq: [
    {
      q: "Do I need 100% uniqueness?",
      a: "You need your own text without copy-paste. A checker score is a compass, not a religion: quotes, names, and terms will overlap for everyone.",
    },
    {
      q: "Do synonymizers help?",
      a: "Weakly — and they often wreck meaning. Better to rewrite the idea in your words with facts.",
    },
    {
      q: "How many keywords should I insert?",
      a: "As many as read naturally. Draft for meaning first, then gentle fit to intent.",
    },
    {
      q: "What is LSI (latent semantic indexing) in practice?",
      a: "Full topic coverage: terms, clarifications, related questions — not a separate “magic list.”",
    },
    {
      q: "How often should I update content?",
      a: "As facts and offers go stale. An empty blog is worse than a “news” section dated 2009.",
    },
    {
      q: "Will content alone rank me in TOP?",
      a: "Rarely. You need tech, structure, links/brand. Core positions grow over months (often 2–6 after work starts) — not from one publish.",
    },
    {
      q: "How is this different from the content-promotion ideas article?",
      a: "That piece covers formats (how-tos, guides). This covers quality principles and SEO hygiene for copy.",
    },
  ],
  sections: [
    {
      title: "1. Originality without a percentage fetish",
      level: 2,
      paras: [
        "Copy-paste gets caught by people and systems. Write yourself or brief a writer; use plagiarism checkers as a filter, not the only KPI.",
        "“Under 20% matches” and chasing 100% via synonymizer often produce unreadable text. Meaning and facts matter more. Originality claims in Search Console are a tool when needed — not a substitute for quality.",
      ],
    },
    {
      title: "2. Topic and angle — not “another rewrite”",
      level: 2,
      paras: [
        "Technically unique but empty and tired material barely holds. You need a fresh angle, data, experience.",
        "Over-optimization and fluff hit trust and quality filters. Usefulness for the reader is the first criterion.",
      ],
      links: [
        {
          label: "Article topics",
          href: "/en/blog/temy-dlya-statey/",
        },
      ],
    },
    {
      title: "3–4. Keywords without stuffing",
      level: 2,
      paras: [
        "Gather demand (Keyword Planner and your keyword set), mix head and long-tail terms to the page intent. Drop junk companions.",
        "Write the copy, then weave phrasing naturally. “Nausea” tools are extra control — not the goal. Don’t force a keyword in.",
        "AdWords → Google Keyword Planner: the product name changed; selection logic is the same.",
      ],
      links: [
        {
          label: "Semantic keyword set",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "SEO copywriting",
          href: "/en/blog/seo-kopirayting/",
        },
      ],
    },
    {
      title: "5. Value for the customer — not empty slogans",
      level: 2,
      paras: [
        "Traffic without a relevant offer doesn’t convert. The page should answer the audience’s question: terms, differences, limits — honestly.",
        "“Best professionals” stamps without proof are weaker than concrete facts. Don’t spam every screen with pop-up “call me back.”",
      ],
    },
    {
      title: "6–7. Updates and a supporting blog",
      level: 2,
      paras: [
        "Stale prices, dates, and decade-old news undermine trust. Revisiting landings and a living blog/news show the company is active.",
        "Extra useful articles bring informational traffic and mention opportunities. Directories and media — selective and by the rules, not as a blast.",
        "Indexing and visibility take time: a plan and consistency beat a one-off salvo.",
      ],
      links: [
        {
          label: "Content plan",
          href: "/en/blog/kontent-plan/",
        },
        {
          label: "Free links",
          href: "/en/blog/besplatnye-ssylki/",
        },
      ],
    },
    {
      title: "8. LSI — full topic coverage",
      level: 2,
      paras: [
        "LSI in practice isn’t a separate cult — it’s answer completeness: definitions, related questions, clear language for beginners and detail for experts.",
        "Focus on strong SERP pages for the intent and your own experience — not an “LSI word list from a generator.”",
      ],
      lists: [
        {
          intro: "Eight pillars in brief:",
          items: [
            "your own text without copy-paste;",
            "fresh topic/angle;",
            "keywords by intent;",
            "no stuffing;",
            "usefulness and facts for the audience;",
            "keeping pages current;",
            "a regular useful blog;",
            "full topic coverage (LSI meaning).",
          ],
        },
      ],
    },
  ],
  closing: [
    "Take one weak landing: cut fluff and stamps, add facts and one FAQ block on objections — often faster than a new “article for article’s sake.”",
  ],
  related: [
    "idei-kontent-prodvizheniya",
    "temy-dlya-statey",
    "seo-kopirayting",
    "eat-kopirayting",
    "semanticheskoe-yadro",
    "kontent-plan",
  ],
};
