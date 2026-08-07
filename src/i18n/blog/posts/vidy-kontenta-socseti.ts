import type { BlogPost } from "../../../data/blog";

/** EN overlay for vidy-kontenta-socseti — same structure as RU JSON. */
export const vidyKontentaSocsetiEn: BlogPost = {
  slug: "vidy-kontenta-socseti",
  title: "Social content types: the main kinds and how to mix them",
  date: "2019-04-01",
  category: "SMM",
  cover: "/images/blog/vidy-kontenta-socseti/cover-en.webp",
  excerpt:
    "Informational, selling, educational, engaging, and entertainment content on social: why each type exists and how to build a mix without a rigid “one-third of the feed is sales” rule.",
  legalNotice: {
    title: "Dear readers!",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  lead: [
    "Social content isn’t “just posts” — it’s a set of jobs: explain, warm up, sell, engage, hold attention. Types blend in a single piece, and the right mix depends on niche and funnel stage — not a universal “one-third sales” formula.",
    "Combine five core content types so the feed isn’t only promos or only memes, and match expectations by platform. Content plans and calendars live in a separate article.",
  ],
  faq: [
    {
      q: "How many selling posts do I need?",
      a: "As many as your audience will tolerate without unfollowing. A mix with value and proof usually beats a daily storefront.",
    },
    {
      q: "How does informational content differ from educational?",
      a: "Informational covers news, facts, and status updates. Educational teaches a skill or walks through a how-to. The line is soft — reader value matters more than the label.",
    },
    {
      q: "Does B2B need entertainment content?",
      a: "In moderation, yes: a lighter tone and human moments help. Memes for memes’ sake with no brand connection usually underperform.",
    },
    {
      q: "Should I post the same content on every network?",
      a: "The idea can carry over; the format should change — text length, visual style, Stories and Reels. Copy-paste cross-posting cuts reach and trust.",
    },
    {
      q: "Where should a beginner start?",
      a: "Map four or five content columns by type, slot them into a two-week plan, and measure saves and replies — not just likes.",
    },
  ],
  sections: [
    {
      title: "Why split content into types",
      level: 2,
      paras: [
        "Without a type map, the feed slides into chaos or endless promos. Classification helps you balance trust and sales.",
        "The five types below are a useful frame, not dogma. One post can be educational and selling at the same time.",
      ],
      links: [
        {
          label: "Content plan",
          href: "/en/blog/kontent-plan/",
        },
      ],
    },
    {
      title: "Informational",
      level: 2,
      paras: [
        "Company news, industry events, delivery updates, offer changes, quick facts. The job is to keep people in the loop — not necessarily teach from scratch.",
        "Works well as a bridge to a deeper breakdown or CTA: “details in the carousel” or “read more on the site.”",
      ],
    },
    {
      title: "Selling",
      level: 2,
      paras: [
        "Offer, benefit, objection handling, reviews, purchase terms, limited promos — without a hard sell for its own sake.",
        "A strong selling post answers: who it’s for, which pain it solves, how to buy, and why now. A weak one is just “buy” with no context.",
      ],
      lists: [
        {
          intro: "What usually strengthens it:",
          items: [
            "a clear headline and offer;",
            "proof (case study, review, numbers);",
            "an obvious next step;",
            "honest terms and deadlines.",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Feed ratios",
          paras: [
            "Schemes like “one-third of the feed is sales” are outdated as a universal law. Watch unfollows, engagement rate, and leads: if sales posts choke dialogue, lower frequency and add value.",
          ],
        },
      ],
    },
    {
      title: "Educational",
      level: 2,
      paras: [
        "How-tos, checklists, mistake breakdowns, expert takes, mini-lessons. Shows competence and lowers purchase anxiety.",
        "Formats: carousel, short video, long structured post, Live with Q&A.",
      ],
    },
    {
      title: "Engaging",
      level: 2,
      paras: [
        "Polls, questions, asking for advice, discussing a controversial (but safe) topic, replies in comments and Stories.",
        "Works best with an active base: if nobody responds, silence looks worse than skipping the poll. Keep the tone moderate so discussion doesn’t turn into a fight.",
      ],
      links: [
        {
          label: "Engagement on social",
          href: "/en/blog/vovlechennost-socseti/",
        },
        {
          label: "Interactive content",
          href: "/en/blog/interaktivnyy-kontent/",
        },
      ],
    },
    {
      title: "Entertainment",
      level: 2,
      paras: [
        "Light stories, brand-safe humor, behind-the-scenes, team moments. It doesn’t have to sell directly, but it keeps the habit of showing up.",
        "Originality matters: reposting other people’s memes without adaptation — and with copyright risk — is a bad bet.",
      ],
    },
    {
      title: "Platforms: Instagram and Facebook without copy-paste",
      level: 2,
      paras: [
        "Instagram leans on visuals, short captions, Stories, and Reels. Long text walls read poorly; rhythm and the first frame are critical.",
        "A Facebook / Meta Page often tolerates longer text and discussion when there’s real value. A picture with no substance is weaker than text plus visual together.",
        "UI rules and limits change — follow your stats and current platform guidance.",
      ],
      lists: [
        {
          intro: "In practice:",
          items: [
            "one idea → different formats per network;",
            "CTA and tracking (UTM/promo codes) on selling posts;",
            "replies in the first hours after engaging posts;",
            "don’t chase a daily post just to check a box.",
          ],
        },
      ],
      links: [
        {
          label: "Instagram content plan",
          href: "/en/blog/kontent-plan-instagram/",
        },
        {
          label: "Facebook post",
          href: "/en/blog/post-facebook/",
        },
        {
          label: "Facebook group and page",
          href: "/en/blog/gruppa-facebook/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Five types form the mix frame: inform, sell, teach, engage, entertain.",
        "Tune ratios to your niche and metrics, not someone else’s percentage table.",
        "Formatting for each platform beats one text pasted everywhere.",
      ],
    },
  ],
  closing: [
    "Tag your next ten posts by the five types: if it’s all sales or all memes, rebuild the mix for two weeks and compare replies.",
  ],
  related: [
    "prodayushchiy-kontent",
    "kontent-plan",
    "kontent-plan-instagram",
    "vovlechennost-socseti",
    "interaktivnyy-kontent",
    "post-instagram",
  ],
};
