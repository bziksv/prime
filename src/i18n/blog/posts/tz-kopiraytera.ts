import type { BlogPost } from "../../../data/blog";

/** EN overlay for tz-kopiraytera — same structure as RU JSON. */
export const tzKopirayteraEn: BlogPost = {
  slug: "tz-kopiraytera",
  title: "How to write a brief for a copywriter",
  date: "2020-06-24",
  category: "Content marketing",
  cover: "/images/blog/tz-kopiraytera/cover-en.webp",
  excerpt:
    "A copywriter brief that covers goal, audience, outline, facts, stop-list, and acceptance criteria — for sales, SEO, and homepage copy, without treating “95% uniqueness” as the only KPI.",
  lead: [
    "Weak copy often starts with a vague order: “write about wallpaper, make it nice, add keywords.” A clear brief cuts revisions — even with a mid-level writer.",
    "Below: why you need a brief, a framework for sales copy, homepage and SEO nuances, and basic acceptance rules. Types of copy and how to hire live in our general copywriting guide; if you’re writing yourself, use the article-writing algorithm instead.",
  ],
  faq: [
    {
      q: "Can I skip a brief on a freelance marketplace?",
      a: "You can, but you’ll usually get generic copy — not what the business needs. A short brief costs less than a rewrite cycle.",
    },
    {
      q: "What should every brief include?",
      a: "Goal, audience, length and format, tone, must-have facts, a stop-list, acceptance criteria, and a deadline.",
    },
    {
      q: "Do I need keywords in the brief?",
      a: "For SEO pages — yes: the cluster, preferred forms, and where they belong. Without a keyword set and intent, a keyword list is almost useless.",
    },
    {
      q: "What uniqueness score should I require?",
      a: "A checker percentage isn’t gospel. No copy-paste and real usefulness matter more. Treat uniqueness-tool numbers as a check, not the only KPI.",
    },
    {
      q: "How many characters should I specify?",
      a: "Match the page job — not “more is better.” Often 2–4k characters with spaces for a block; go longer only when you need real depth.",
    },
    {
      q: "Who should write the brief — marketing or SEO?",
      a: "Better together: offer and audience from marketing, cluster and page type from SEO.",
    },
    {
      q: "How is this different from the “Copywriting” article?",
      a: "That piece covers text types and choosing a writer. This one is about assembling the brief itself.",
    },
    {
      q: "Do I need style examples?",
      a: "Yes. One or two “do this” and “don’t do this” links align tone faster than adjectives alone.",
    },
  ],
  sections: [
    {
      title: "Why a detailed brief",
      level: 2,
      paras: [
        "It locks expectations before work starts, so you hear fewer “I meant something else.”",
        "You reach an acceptable draft faster and cheaper than waiting for a “perfect” author with no brief.",
        "It gives acceptance criteria: you revise on substance, not endless taste debates.",
      ],
    },
    {
      title: "Framework for sales copy",
      level: 2,
      paras: [
        "Collect offer pros and cons from sales or marketing. Lock the goal (lead, trial, call), the audience, a draft outline with headings, theses, and the questions the text must answer.",
        "Add stop-rules (fluff, clichés, promises you can’t keep) and how you differ from competitors on page one — in your own words and with real facts.",
      ],
      lists: [
        {
          intro: "Minimum blocks in the brief:",
          items: [
            "goal and CTA",
            "reader persona",
            "outline / H2s",
            "must-have facts and figures",
            "objection checklist",
            "stop-words and banned tactics",
            "length, tone, deadline, revision limit",
          ],
        },
      ],
      notes: [
        {
          title: "Logic example",
          kind: "tip",
          text: "Language school: goal is to book a level test; audience is people who studied before; outline runs problem → benefit of knowing the language → why know your level → CTA; ban openers like “everyone knows…”",
        },
      ],
    },
    {
      title: "Homepage and SEO copy",
      level: 2,
      paras: [
        "Homepage: hand over advantage theses, services, facts, reviews, client FAQ, and competitor notes yourself — don’t expect the writer to invent the brand from a Google search. See also the homepage-copy article.",
        "SEO: attach the cluster, page intent, and placement guidance without stuffing. An SEO consult before the brief saves rewrites.",
      ],
      links: [
        {
          label: "Homepage copy",
          href: "/en/blog/tekst-glavnoy-stranitsy/",
        },
        {
          label: "SEO copywriting",
          href: "/en/blog/seo-kopirayting/",
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
        "Structure: subheads, lists, readable paragraphs. Tone: company voice or impersonal; keep the “you” form consistent throughout.",
        "Check uniqueness with the tool named in the brief, but don’t chase 100% at the cost of meaning. Attach style references in advance.",
      ],
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
        "For homepage and SEO pages the brief is thicker than “just an article.”",
        "An anti-plagiarism percentage is a guide, not the only goal.",
      ],
    },
  ],
  closing: [
    "Before the next order, fill one brief template against a past successful page — then reuse it as a checklist for future copy.",
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
