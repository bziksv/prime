import type { BlogPost } from "../../../data/blog";

/** EN overlay for tz-kopiraytera — same structure as RU JSON. */
export const tzKopirayteraEn: BlogPost = {
  slug: "tz-kopiraytera",
  title: "How to write a brief for a copywriter",
  date: "2020-06-24",
  category: "Content marketing",
  cover: "/images/blog/tz-kopiraytera/cover-en.webp",
  excerpt:
    "Copywriter brief: goal, audience, outline, facts, stop-list, and acceptance criteria for sales, SEO, and homepage copy — without treating “95% uniqueness” as the only KPI.",
  lead: [
    "Weak copy often grows from a vague order: “write about wallpaper, make it nice, add keywords.” The clearer the brief, the fewer revisions — even with an average writer.",
    "Below — why a brief matters, a frame for selling copy, homepage and SEO nuances, and basic acceptance rules. Copywriting types and hiring live in the general piece; writing yourself — in the article algorithm.",
  ],
  faq: [
    {
      q: "Can I skip a brief on a freelance marketplace?",
      a: "You’ll get “something,” not what the business needs. A short brief saves money on rewrites.",
    },
    {
      q: "What’s required in every brief?",
      a: "Goal, audience, length/format, tone, must-have facts, stop-list, acceptance criteria, and deadline.",
    },
    {
      q: "Do I need keywords in the brief?",
      a: "For SEO pages — yes: cluster, preferred forms, where they fit. Without a core and intent, a keyword list is almost useless.",
    },
    {
      q: "What uniqueness % should I require?",
      a: "A checker score is not religion. No copy-paste and real usefulness matter more. Put uniqueness-tool numbers as a check, not the only KPI.",
    },
    {
      q: "How many characters should I specify?",
      a: "Match the page job — not “more is better.” Often 2–4k characters with spaces for a block; longer only if real depth is needed.",
    },
    {
      q: "Who writes the brief: marketing or SEO?",
      a: "Better together: offer and audience from marketing, cluster and page type from SEO.",
    },
    {
      q: "How is this different from the “Copywriting” article?",
      a: "There — text types and choosing a writer. Here — how to assemble the brief itself.",
    },
    {
      q: "Do I need style examples?",
      a: "Yes: 1–2 links to “do this” and “don’t do this” strongly align tone.",
    },
  ],
  sections: [
    {
      title: "Why a detailed brief",
      level: 2,
      paras: [
        "It locks expectations before work starts: fewer “I meant something else.”",
        "You get an acceptable result faster and cheaper than waiting for a “perfect” author with no brief.",
        "It gives acceptance criteria: revisions on substance, not endless taste debates.",
      ],
      lists: [],
    },
    {
      title: "Frame for selling copy",
      level: 2,
      paras: [
        "Collect offer pros/cons from sales or marketing. Lock the goal (lead, trial, call), audience, a draft outline with headings, theses, and questions the text must answer.",
        "Add stop-rules (fluff, clichés, promises you can’t keep) and how you differ from competitors / leaders — in your own words and facts.",
      ],
      lists: [
        {
          intro: "Minimum blocks in the brief:",
          items: [
            "goal and CTA;",
            "reader portrait;",
            "outline / H2s;",
            "must-have facts and figures;",
            "objection questionnaire;",
            "stop-words and banned tactics;",
            "length, tone, deadline, revision limit.",
          ],
        },
      ],
      notes: [
        {
          title: "Logic example",
          text: "Language school: goal — book a level test; audience — people who studied before; outline — problem → benefit of knowing the language → why know your level → CTA; no openers like “everyone knows…”",
        },
      ],
    },
    {
      title: "Homepage and SEO copy",
      level: 2,
      paras: [
        "Homepage: give advantage theses, services, facts, reviews, client FAQ, and competitor notes yourself — don’t expect the writer to “Google the brand soul.” See also the homepage-copy piece.",
        "SEO: attach the cluster, page intent, and placement guidance without stuffing. An SEO consult before the brief saves rewrites.",
      ],
      lists: [],
      links: [
        {
          label: "Homepage copy",
          href: "/en/blog/tekst-glavnoy-stranitsy/",
        },
        {
          label: "SEO copywriting",
          href: "/blog/seo-kopirayting/",
        },
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Basic acceptance requirements",
      level: 2,
      paras: [
        "Structure: subheads, lists, readable paragraphs. Tone: company voice / impersonal; “you” form consistent throughout.",
        "Check uniqueness with the tool named in the brief, but don’t chase 100% at the cost of meaning. Attach style references in advance.",
      ],
      lists: [],
      links: [
        {
          label: "Uniqueness checks",
          href: "/en/blog/proverka-unikalnosti/",
        },
        {
          label: "Copywriting types",
          href: "/en/blog/kopirayting/",
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "Brief = goal + audience + facts + stop-list + acceptance.",
        "For homepage and SEO the brief is thicker than “just an article.”",
        "Anti-plagiarism % is a guide, not the only goal.",
      ],
      lists: [],
    },
  ],
  closing: [
    "Before the next order, fill one brief template against a past successful page — and reuse it as a checklist for future copy.",
  ],
  related: [
    "kopirayting",
    "seo-kopirayting",
    "kak-napisat-statyu",
    "zakazchiki-kopiraytera",
    "tekst-glavnoy-stranitsy",
    "proverka-unikalnosti",
  ],
};
