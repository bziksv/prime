import type { BlogPost } from "../../../data/blog";

/** EN overlay for kontent-plan — same structure as RU JSON. */
export const kontentPlanEn: BlogPost = {
  slug: "kontent-plan",
  title: "Content plan: what it is and how to build one",
  date: "2021-10-26",
  category: "Content marketing",
  cover: "/images/blog/kontent-plan/cover-en.webp",
  excerpt:
    "What a content plan is and how it differs from an editorial and media plan. Algorithm: formats, topics, semantics, rubrics, schedule, and headlines.",
  lead: [
    "A content plan is a table or calendar: what, where, and when you publish. Without it a site, blog, and social channels slide into chaos or long silence.",
    "Below — terms, why you need a plan, and a step-by-step algorithm. Instagram has a separate guide with feed ratios; here — a general frame for the site and channels.",
  ],
  faq: [
    {
      q: "How is a content plan different from an editorial plan?",
      a: "They’re close: a queue of pieces with deadlines. “Editorial” is more media language; “content plan” is more business and blogs.",
    },
    {
      q: "Is a media plan the same thing?",
      a: "No. A media plan is usually about ad campaigns and impression budgets — not an editorial article feed.",
    },
    {
      q: "Where should we keep the plan?",
      a: "Sheets/Excel, Notion, Trello, a calendar — whatever the team uses. Key: one source of truth and clear access.",
    },
    {
      q: "Do you need semantics in a site content plan?",
      a: "Yes if the goal is search: topics in clusters, one strong piece per cluster, no stuffing.",
    },
    {
      q: "How far ahead to plan?",
      a: "Beginners — 2–4 weeks. Then a month with a backlog of ideas. A rigid quarter makes sense when production is stable.",
    },
  ],
  sections: [
    {
      title: "Terms: content plan, editorial, media plan",
      level: 2,
      paras: [
        "A content plan is a publishing schedule for the project goal: articles, posts, video, email. An editorial plan is the same for a publication. A media plan is more a map of advertising activity.",
        "A site and a magazine have different owners and roles, but the logic is one: you know in advance what ships and who’s accountable.",
      ],
      lists: [
        {
          intro: "A plan usually records:",
          items: [
            "topic and format;",
            "channel (site, VK, blog, YouTube…);",
            "date/slot;",
            "owner;",
            "status and draft link.",
          ],
        },
      ],
    },
    {
      title: "Why you need a content plan",
      level: 2,
      paras: [
        "It removes daily panic about “what to post”, steadies cadence, helps the team and freelancers work from a brief, and makes internal linking and series easier.",
      ],
      lists: [
        {
          intro: "Upsides:",
          items: [
            "cadence instead of chaos;",
            "one concept and rubrics;",
            "idea backlog in one place;",
            "easier to see what worked.",
          ],
        },
      ],
      links: [
        {
          label: "Instagram content plan",
          href: "/en/blog/kontent-plan-instagram/",
        },
      ],
    },
    {
      title: "How to build it",
      level: 2,
      paras: [
        "First goal and audience, then formats and topics, then semantics (for the site), rubrics, schedule, and headlines.",
      ],
      lists: [
        {
          intro: "Steps:",
          items: [
            "pick content types (text, reviews, how-tos, comparisons, cases, video);",
            "lock tone and length;",
            "gather topics: audience, forums, client questions, brainstorm;",
            "for SEO — core clusters, one text ≈ one cluster;",
            "sort into rubrics;",
            "set dates and owners;",
            "draft working headlines without fake clickbait.",
          ],
        },
      ],
      links: [
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Keyword stuffing",
          href: "/en/blog/zaspamlennost-teksta/",
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "Keep 5–7 evergreen topics in reserve. A slot slips — you shift, you don’t abandon the channel for two weeks.",
        },
      ],
    },
    {
      title: "Where to keep it and how not to quit",
      level: 2,
      paras: [
        "A spreadsheet is handy with colors and filters; paper works for a tiny team. Updating statuses beats a “perfect” template.",
      ],
      lists: [
        {
          intro: "Signs of a living plan:",
          items: [
            "statuses are current;",
            "there’s a process owner;",
            "periodic review: what landed;",
            "rubrics don’t turn into wall-to-wall selling.",
          ],
        },
      ],
    },
  ],
  closing: [
    "Open the plan two weeks ahead: if topics don’t fit your stage matrix — close strategy gaps first, then dates.",
  ],
  related: [
    "matritsa-kontenta",
    "kontent-plan-instagram",
    "prodayushchiy-kontent",
    "korporativnyy-blog",
    "semanticheskoe-yadro",
    "analitika-kontent-marketinga",
  ],
};
