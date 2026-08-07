import type { BlogPost } from "../../../data/blog";

/** EN overlay for kontent-plan-instagram — same structure as RU JSON. */
export const kontentPlanInstagramEn: BlogPost = {
  slug: "kontent-plan-instagram",
  title: "Instagram content plan: how to build one without burning out",
  date: "2022-01-14",
  category: "SMM",
  cover: "/images/blog/kontent-plan-instagram/cover-en.webp",
  excerpt:
    "How to build a working Instagram content plan: goal, rubrics, post mix, schedule, ideas, and results review.",
  lead: [
    "A content plan is a publishing calendar tied to the account goal: what, why, and when goes out. Without it you easily slip into random posts or wall-to-wall sales.",
    "Below — a plan frame, format mix, and a monthly checklist. Planner menus change — the system matters more than a specific app.",
  ],
  legalNotice: {
    title: "Dear readers!",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "How far ahead should you plan?",
      a: "Beginners do well with 2–4 weeks plus a backlog of ideas. A full month — once rubrics and production are stable.",
    },
    {
      q: "How many selling posts is normal?",
      a: "Guide: a minority of the feed. Mixes like 60% value / 20% engagement / 20% sales often work — tune to your niche.",
    },
    {
      q: "Do you need a separate Stories plan?",
      a: "Yes, at least in short blocks: announcements, behind the scenes, Q&A, CTA. Stories shouldn’t be a random afterthought.",
    },
    {
      q: "Where do ideas come from?",
      a: "Audience questions, competitors, your cases, seasonality, archive of winning posts, related channels.",
    },
    {
      q: "What if the plan slips?",
      a: "Keep 5–7 evergreen drafts. Move slots — don’t drop the rhythm for two weeks.",
    },
  ],
  sections: [
    {
      title: "Why you need a content plan",
      level: 2,
      paras: [
        "A plan removes daily “what do I post” panic and ties posts to a goal: traffic, leads, expertise, warm-up before a launch.",
        "Even a strong account without rhythm loses reach and trust. Cadence is part of the product.",
      ],
      lists: [],
    },
    {
      title: "How to build a plan in 5 steps",
      level: 2,
      paras: [
        "First position and goal, then rubrics, mix, calendar, and production.",
      ],
      lists: [
        {
          intro: null,
          items: [
            "Topic and account role: education, blog, shop, personal brand.",
            "Goal for the period: followers, leads, warm-up, reputation.",
            "Rubrics and formats: post, carousel, Reels/short clips, Stories.",
            "Mix of value / engagement / sales.",
            "Slot schedule + owners + shoot deadlines.",
          ],
        },
      ],
      notes: [
        {
          title: "Link to the profile",
          text: "A plan is useless if the header has no offer. Clear profile positioning first, then the calendar.",
        },
      ],
      links: [
        {
          label: "Instagram page design",
          href: "/en/blog/oformlenie-stranicy-instagram/",
        },
        {
          label: "Instagram business account",
          href: "/en/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
    {
      title: "Rubrics and mix",
      level: 2,
      paras: [
        "Rubrics build recognition: “mistake breakdown”, “before/after”, “Q&A”, “product news”. The mix protects from ad noise.",
      ],
      lists: [
        {
          intro: "A workable weekly mix:",
          items: [
            "value / education;",
            "social proof (review, case);",
            "engagement (question, poll);",
            "sale / offer;",
            "behind the scenes / brand personality.",
          ],
        },
      ],
      tables: [
        {
          caption: "Sample weekly grid (template)",
          headers: ["Day", "Format", "Rubric", "CTA"],
          rows: [
            ["Mon", "Carousel", "Value", "Save"],
            ["Wed", "Short clip", "Breakdown", "Ask a question"],
            ["Fri", "Post", "Case/review", "DM us"],
            ["Sat–Sun", "Stories", "Behind the scenes + poll", "Reply"],
          ],
        },
      ],
    },
    {
      title: "Post ideas",
      level: 2,
      paras: [
        "Take ideas from client conversations and from what already worked in insights — not only from someone else’s trends.",
      ],
      lists: [
        {
          intro: "Universal:",
          items: [
            "answer to a frequent question;",
            "myth vs fact in the niche;",
            "5-point checklist;",
            "beginner mistake;",
            "seasonal announcement.",
          ],
        },
        {
          intro: "Selling (without aggression):",
          items: [
            "offer with terms and deadline;",
            "plan/package comparison;",
            "what’s included in the service;",
            "how an order works;",
            "spots left / book a slot.",
          ],
        },
        {
          intro: "Informational:",
          items: [
            "product news;",
            "case breakdown;",
            "“how to choose” guide;",
            "month wrap-up.",
          ],
        },
      ],
    },
    {
      title: "Schedule and production",
      level: 2,
      paras: [
        "Tie slots to real shoot and moderation time, not a mythical “perfect hour”. Use your own activity insights.",
        "Keep a draft backlog: 5 evergreen posts and a pack of Stories scripts for when the plan slips.",
      ],
      lists: [
        {
          intro: "Useful plan-table columns:",
          items: [
            "date / time;",
            "format;",
            "topic and thesis;",
            "status (idea → shot → ready → published);",
            "owner;",
            "link to file / draft.",
          ],
        },
      ],
    },
    {
      title: "Review and tools",
      level: 2,
      paras: [
        "Once a week check what people saved and commented. Drop weak rubrics, double down on strong ones. The plan is a living document.",
        "Spreadsheets, Notion, built-in platform schedulers — pick what you’ll actually use. 2022 tools aren’t sacred.",
      ],
      lists: [
        {
          intro: "Mini weekly review:",
          items: [
            "top 3 posts;",
            "a miss and a hypothesis why;",
            "how many selling slots brought leads;",
            "what moves to next week.",
          ],
        },
      ],
      links: [
        {
          label: "SMM manager: responsibilities",
          href: "/en/blog/menedzher-smm/",
        },
      ],
    },
  ],
};
