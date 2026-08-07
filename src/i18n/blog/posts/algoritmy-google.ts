import type { BlogPost } from "../../../data/blog";

/** EN overlay for algoritmy-google — same structure as RU JSON. */
export const algoritmyGoogleEn: BlogPost = {
  slug: "algoritmy-google",
  title: "Google algorithms: grow without penalties",
  date: "2018-09-20",
  category: "SEO",
  cover: "/images/blog/algoritmy-google/cover-en.webp",
  excerpt:
    "Why Google updates search and what Panda, Penguin, Hummingbird, mobile-first, and RankBrain meant for sites: content quality, links, query meaning, and UX — without outdated “uniqueness norms” and filter-bypass tricks.",
  lead: [
    "Search constantly rebuilds ranking: it cuts thin and spammy content, manipulative links, and better understands query meaning and mobile experience. “Reach the top without penalties” isn’t a trick — it’s aligning with the same signals.",
    "Many “separate” 2010s updates (Panda, Penguin, and others) live inside core now. Figures like “95% uniqueness” or “one keyword per 300 characters” are outdated heuristics, not Google law. Prep isn’t TOP — competitive visibility typically builds over 2–6 months of sustained work.",
  ],
  faq: [
    {
      q: "How is this different from the filters article?",
      a: "That one covers diagnosing a drop and white-hat recovery. This piece is an overview of Google’s algorithm logic and what to strengthen early.",
    },
    {
      q: "Do you need to memorize every update name?",
      a: "No. Principles matter more: content, links, relevance, mobile UX. Names are a handy history map.",
    },
    {
      q: "Are Panda and Penguin still separate systems?",
      a: "The ideas live in core and spam systems. Don’t wait for a 2011-style “Panda day” calendar — fix quality continuously.",
    },
    {
      q: "Does “1 keyword per 400 characters” help rankings?",
      a: "Not as a rule. Write for meaning and the reader; overstuffing hurts, but there’s no magic density.",
    },
    {
      q: "Is mobile-first indexing required?",
      a: "For Google the mobile version is critical: speed, readability, tap targets. The separate 2015 “mobile update” is now baseline.",
    },
    {
      q: "Is RankBrain a separate ranking lever?",
      a: "It’s an ML layer for understanding queries. Practical takeaway: cover intent, synonyms, and a useful answer — not only exact match.",
    },
    {
      q: "How do you avoid Google penalties?",
      a: "White-hat SEO: strong pages, natural links, no cloaking or thin spam. After a drop — diagnose filters. Prep work is not the same as TOP rankings; competitive visibility typically builds over 2–6 months of sustained work.",
    },
  ],
  sections: [
    {
      title: "Why Google changes algorithms",
      level: 2,
      paras: [
        "The goal is useful, reliable results while cutting copypasta, link spam, pirated content, and “pages for ads.”",
        "For a site owner that means: improve the page for the user and intent — not chase yesterday’s list of named filters.",
      ],
      links: [
        {
          label: "Search engine filters",
          href: "/en/blog/filtry-poiskovikov/",
        },
        {
          label: "SEO for Yandex and Google",
          href: "/en/blog/seo-yandex-google/",
        },
      ],
    },
    {
      title: "Content quality and the “spirit” of Panda",
      level: 2,
      paras: [
        "Panda-style logic hits thin, duplicate, and overstuffed pages. The fix is original value, solid snippets, fewer clones and doorway pages with no meaning.",
        "Don’t rely on a “95% uniqueness” threshold from content exchanges: answer completeness and E-E-A-T signals matter more than an anti-plagiarism percentage.",
      ],
      links: [
        {
          label: "On-page factors",
          href: "/en/blog/vnutrennie-faktory/",
        },
      ],
    },
    {
      title: "Links and Penguin logic",
      level: 2,
      paras: [
        "Penguin and modern spam systems cut unnatural and low-quality links: irrelevant donors, over-optimized anchors, schemes.",
        "Prefer a natural profile and brand/naked URLs mixed with rare exact anchors. Mass “recovery” buying often makes things worse.",
      ],
      links: [
        {
          label: "Link types",
          href: "/en/blog/tipy-ssylok/",
        },
        {
          label: "Backlink profile",
          href: "/en/blog/ssylochnyy-profil/",
        },
      ],
    },
    {
      title: "Query meaning, local, and mobile",
      level: 2,
      paras: [
        "Hummingbird and later layers strengthen meaning: synonyms, related entities, intent — not only exact keyword match.",
        "Local signals (historically “Pigeon” and beyond) matter for geo businesses: maps, NAP, local pages without spam.",
        "Mobile-friendly / mobile-first: responsive layout, speed, easy taps. Without that, competing in Google is hard even with “perfect” keywords.",
      ],
    },
    {
      title: "Ad spam, RankBrain, and practice",
      level: 2,
      paras: [
        "Updates like “Fred” hit pages where ads and affiliate noise beat usefulness. Don’t turn an article into a banner dump or inflate outbound spam.",
        "RankBrain and other ML components help with rare and ambiguous queries. Practice: a clear answer, structure, related questions — not a keyword list.",
        "Pirated and illegal content is a separate demotion risk. Don’t mix SEO growth with gray file-sharing schemes.",
      ],
      lists: [
        {
          intro: "A practical minimum:",
          items: [
            "strong pages for intent;",
            "a clean backlink profile;",
            "mobile UX and speed;",
            "moderate ads on content URLs;",
            "monitoring the keyword set after major updates.",
          ],
        },
      ],
    },
  ],
  notes: {
    title: "Important",
    text: "2011–2017 update names are a history map. Check current Google Search docs for rules; after a sharp drop use filter diagnosis — not a “bypass.”",
  },
  closing: [
    "Lock content, links, and mobile hygiene — so you match why Google changes algorithms, without chasing outdated uniqueness percentages.",
  ],
  related: [
    "filtry-poiskovikov",
    "tipy-ssylok",
    "ssylochnyy-profil",
    "seo-yandex-google",
    "vnutrennie-faktory",
    "pokupka-ssylok",
  ],
};
