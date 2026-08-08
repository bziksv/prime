import type { BlogPost } from "../../../data/blog";

/** EN overlay for kontent-plan — same structure as RU JSON. */
export const kontentPlanEn: BlogPost = {
  slug: "kontent-plan",
  title: "Content plan: what it is and how to build one",
  date: "2021-10-26",
  category: "Content marketing",
  cover: "/images/blog/kontent-plan/cover-en.webp",
  excerpt:
    "What a content plan is, how it differs from an editorial calendar and a media plan, and a clear build process: formats, topics, keywords, categories, schedule, and headlines.",
  lead: [
    "A content plan is your publishing calendar: what goes out, where, and when. Without one, a site, blog, and social channels drift into silence — or random posts with no thread.",
    "Below: the terms, why the plan exists, and a step-by-step way to build it. Instagram has its own guide with feed mix ratios; this piece is the general frame for the website and other channels.",
  ],
  faq: [
    {
      q: "How is a content plan different from an editorial plan?",
      a: "They’re close cousins: a queue of pieces with deadlines. “Editorial plan” is more newsroom language; “content plan” is what most businesses and blogs call it.",
    },
    {
      q: "Is a media plan the same thing?",
      a: "No. A media plan maps ad campaigns and budgets. A content plan maps the editorial feed — articles, posts, video, email.",
    },
    {
      q: "Where should we keep the plan?",
      a: "Sheets, Notion, Trello, a shared calendar — whatever the team will actually open. One source of truth and clear access matter more than the tool.",
    },
    {
      q: "Do site content plans need keyword research?",
      a: "Yes if search is a goal: group topics into clusters, write one strong piece per cluster, and skip stuffing.",
    },
    {
      q: "How far ahead should I plan?",
      a: "Start with 2–4 weeks. Then stretch to a month with a backlog of ideas. A rigid quarter only helps once production is stable.",
    },
  ],
  sections: [
    {
      title: "Content plan vs editorial plan vs media plan",
      level: 2,
      paras: [
        "A content plan is the publishing schedule for your project goals — articles, posts, video, newsletters. An editorial plan is the same idea inside a publication. A media plan is mostly advertising activity and spend.",
        "A company blog and a magazine have different owners and roles, but the logic is the same: you know what’s going live and who’s accountable before the day starts.",
      ],
      lists: [
        {
          intro: "A useful plan usually tracks:",
          items: [
            "topic and format",
            "channel (site, VK, blog, YouTube…)",
            "date or slot",
            "owner",
            "status and a link to the draft",
          ],
        },
      ],
    },
    {
      title: "Why bother with a content plan",
      level: 2,
      paras: [
        "It kills the daily “what do we post?” scramble, steadies your cadence, gives freelancers a real brief, and makes series and internal linking much easier to run.",
      ],
      lists: [
        {
          intro: "What you gain:",
          items: [
            "steady rhythm instead of chaos",
            "one concept and clear categories",
            "an idea backlog in one place",
            "an easier read on what actually worked",
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
      title: "How to build the plan",
      level: 2,
      paras: [
        "Start with goal and audience. Then lock formats and topics. For the website, layer in keyword research. After that: categories, schedule, and headlines.",
      ],
      lists: [
        {
          intro: "Steps:",
          items: [
            "choose content types (guides, reviews, how-tos, comparisons, case studies, video)",
            "set tone and length",
            "gather topics from your audience, forums, support questions, and brainstorms",
            "for SEO — keyword clusters; roughly one strong piece per cluster",
            "sort into categories",
            "assign dates and owners",
            "draft working headlines without fake clickbait",
          ],
        },
      ],
      links: [
        {
          label: "Keyword research",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Keyword stuffing",
          href: "/en/blog/zaspamlennost-teksta/",
        },
      ],
      notes: [
        {
          title: "Practice tip",
          text: "Keep 5–7 evergreen topics in reserve. If a slot slips, you reschedule — you don’t go dark for two weeks.",
        },
      ],
    },
    {
      title: "Where to run it — and how not to abandon it",
      level: 2,
      paras: [
        "A spreadsheet is great for filters and color coding; paper still works for a tiny team. Updating statuses beats hunting for a “perfect” template you’ll never open again.",
      ],
      lists: [
        {
          intro: "Signs the plan is alive:",
          items: [
            "statuses stay current",
            "someone owns the process",
            "you review what landed on a regular cadence",
            "categories don’t turn into wall-to-wall selling",
          ],
        },
      ],
    },
  ],
  closing: [
    "Open the plan two weeks ahead. If the topics don’t fit your stage or strategy matrix, fix those gaps first — then lock the dates.",
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
