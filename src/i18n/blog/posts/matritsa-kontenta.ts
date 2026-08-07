import type { BlogPost } from "../../../data/blog";

/** EN overlay for matritsa-kontenta — same structure as RU JSON. */
export const matritsaKontentaEn: BlogPost = {
  slug: "matritsa-kontenta",
  title: "Content matrix: how to plan regular publishing",
  date: "2019-12-20",
  category: "Content marketing",
  cover: "/images/blog/matritsa-kontenta/cover-en.webp",
  excerpt:
    "A content matrix: audience and journey stage, conversion goal, delivery channel, and format — how to build the table and find gaps, next to a regular content calendar.",
  lead: [
    "A content matrix is a table where rows and columns link buyer-journey stage, action goal, channel, and material type. It doesn’t replace a publishing calendar — it’s the strategy layer before it.",
    "Fill the four blocks, spot empty cells, then move priorities into dates. The “what publishes on which day” schedule lives in the content-plan article.",
  ],
  faq: [
    {
      q: "How is a content matrix different from a content plan?",
      a: "The plan is the queue and dates. The matrix is the logic: who, at which stage, why, and through which channel. Matrix first, calendar second.",
    },
    {
      q: "Is a content matrix required for a small business?",
      a: "A simplified version helps: even 1 segment × 3 stages × goals already cuts “posts just to post.”",
    },
    {
      q: "Should everyone use the same matrix?",
      a: "Better per key persona/segment. Otherwise goals and tone blur together.",
    },
    {
      q: "What does “conversion” mean in a content matrix?",
      a: "Not only purchase: subscribe, visit, demo, download, finish reading — the next step on the path.",
    },
    {
      q: "How many pieces should I plan per stage?",
      a: "Usually several: different formats and objections. One post for the whole funnel rarely covers the journey.",
    },
    {
      q: "Do I need an audit of old content?",
      a: "Yes: what already fills matrix cells, where it’s empty — production priority.",
    },
    {
      q: "How does the matrix link to USP and offer?",
      a: "Key messages in the cells should match the USP (unique selling proposition), or content and sales say different things.",
    },
  ],
  sections: [
    {
      title: "Four matrix axes",
      level: 2,
      paras: [
        "Audience context: who the buyer is, job to be done, barriers, stage (aware → comparing → deciding).",
        "Material conversion goal: which action you expect after consumption.",
        "Delivery tactic: outbound contact, inbound (search/site), through others (referrals).",
        "The content itself: format and topic for the stage and channel.",
      ],
      links: [
        {
          label: "Content plan",
          href: "/en/blog/kontent-plan/",
        },
      ],
    },
    {
      title: "Audience and journey",
      level: 2,
      paras: [
        "A persona is a tool, not a “pretty PDF for the pitch.” B2B and B2C differ in fields: deal roles, cycle, selection criteria.",
        "Each stage has its own questions. Content unblocks stuck points: missing info, fear of a wrong choice, comparison with alternatives.",
      ],
    },
    {
      title: "Goals and channels",
      level: 2,
      paras: [
        "Don’t reduce everything to “buy now.” Early stages fit an article, guide, short video; later ones — demo, proposal, review, product page.",
        "Pick the channel where the segment lives. A cheap channel beats an expensive one if it delivers the right people. Several touches are normal.",
      ],
      lists: [
        {
          intro: "Example goals along the path:",
          items: [
            "finish reading and subscribe;",
            "go to a landing page;",
            "leave a lead / take a demo;",
            "compare and choose you;",
            "leave a review after purchase.",
          ],
        },
      ],
      notes: [
        {
          title: "CTAs and landings",
          text: "Important goals get a dedicated landing and a clear ask. Button color is testable, but offer and relevance matter more.",
        },
      ],
    },
    {
      title: "How to build the table",
      level: 2,
      paras: [
        "Fill cells: segment × stage → goal → channel → format/topic. Audit: what already exists, where the gaps are.",
        "Move priority holes into the content plan with dates and owners. Then the next segment.",
      ],
      links: [
        {
          label: "Selling content",
          href: "/en/blog/prodayushchiy-kontent/",
        },
        {
          label: "USP (unique selling proposition)",
          href: "/en/blog/utp/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Matrix = logic, plan = calendar.",
        "Every piece needs a goal — not only “reach.”",
        "Close journey gaps first, then publishing volume.",
      ],
    },
  ],
  closing: [
    "Sketch one persona and three journey stages — if the table has empty cells, you already know what to write next month.",
  ],
  related: [
    "kontent-plan",
    "kontent-plan-instagram",
    "prodayushchiy-kontent",
    "vidy-kontenta-socseti",
    "utp",
    "avtovoronka",
  ],
};
