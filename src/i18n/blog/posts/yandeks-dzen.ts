import type { BlogPost } from "../../../data/blog";

/** EN overlay for yandeks-dzen — same structure as RU JSON. */
export const yandeksDzenEn: BlogPost = {
  slug: "yandeks-dzen",
  title: "Yandex Zen: picking a topic, rules, and monetization",
  date: "2021-07-02",
  category: "Content marketing",
  cover: "/images/blog/yandeks-dzen/cover-en.webp",
  excerpt:
    "How Zen works for authors: the recommendation feed, niche choice, publishing rules, and monetization logic — without outdated “in a week” thresholds or advice to copy other people’s texts.",
  lead: [
    "Zen (Yandex Zen) is a recommendation feed for articles and other content. For authors it’s a reach channel: pieces can find people who don’t follow you yet, based on interests and behavior.",
    "Partner thresholds, UI, and stats change — check current terms in the Zen dashboard, not 2021 screenshots. What follows is how authors pick a topic, stay within the rules, and think about monetization without myths.",
  ],
  faq: [
    {
      q: "How is Zen different from a regular site blog?",
      a: "Strong focus on in-platform recommendations. On your own site you depend more on search and your channels; in Zen, on the feed algorithm and read-through.",
    },
    {
      q: "What topic should a beginner pick?",
      a: "One you can write about regularly and with substance. Broad trending niches are competitive; narrow expertise often beats clickbait.",
    },
    {
      q: "How many views do I need for monetization?",
      a: "Partner-program thresholds and terms have changed. Don’t treat 2021 guide numbers as the norm — check Zen Help.",
    },
    {
      q: "Can I send traffic to my site from Zen?",
      a: "Depends on platform rules and link formats. Don’t build a strategy on dodging moderation and aggressive link spam.",
    },
    {
      q: "Does machine-translating other people’s articles help?",
      a: "As a strategy, no: thin content, copyright risk, and weak uniqueness. Better your own experience and verified facts.",
    },
  ],
  sections: [
    {
      title: "What Zen is for an author",
      level: 2,
      paras: [
        "The platform shows materials in a feed by reader interest. For an author that’s a chance at reach without a big follower base — and dependence on the algorithm, read-through quality, and the rules.",
        "Downsides are typical of recommendation systems: opaque impression swings, tech glitches, and no monetization guarantee even with regular publishing.",
      ],
      lists: [
        {
          intro: "Why authors join:",
          items: [
            "reach a new audience;",
            "expert or brand awareness;",
            "monetization when program terms are met;",
            "an extra channel to the site (if rules allow).",
          ],
        },
      ],
    },
    {
      title: "Topic choice and audience",
      level: 2,
      paras: [
        "Aim for steady interest and your expertise, not only what’s viral now. Jumping between unrelated niches every day makes it harder for the algorithm and readers to follow you.",
        "Broad entertainment topics are competitive; narrow utility (hobby, practice, breakdown) may grow slower but more steadily. Watch channel stats and read-through, not only competitors’ headlines.",
      ],
      lists: [
        {
          intro: "Working strategies:",
          items: [
            "niche expert — depth and facts;",
            "one broad theme with rubrics inside;",
            "careful tests of adjacent formats without losing the core.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "A bit over 500 words isn’t a law. Write as much as needed to answer the question; fluff for length is worse than short value.",
        },
      ],
    },
    {
      title: "Rules and publication quality",
      level: 2,
      paras: [
        "The platform cuts copy-paste, clickbait without substance, shock content, hate speech, spam, and misleading headlines. Regional noise with no value for the feed audience also performs poorly.",
        "Regularity matters, but flooding volume at any cost leads to burnout and thin content. Better a rubric plan, your own visuals, and fact-checking.",
      ],
      lists: [
        {
          intro: "Hygiene minimum:",
          items: [
            "your own text or honest rewrite with added value;",
            "headline matches content;",
            "readable structure and media that serve the piece;",
            "no stuffing with third-party links;",
            "follow Zen community rules.",
          ],
        },
      ],
    },
    {
      title: "Monetization: expectations without myths",
      level: 2,
      paras: [
        "The partner program turns on when current terms are met — views, quality, channel status. Don’t copy old “N views per week” thresholds and “money in a week” promises into your plan.",
        "In practice what helps: a clear topic, regularity, read-through, honest headlines, and a content plan. Don’t rely on machine-translating others’ articles as a business model.",
      ],
      lists: [
        {
          intro: "Before enabling monetization:",
          items: [
            "read current terms in the dashboard;",
            "resolve copyright claims;",
            "set up stats and rubrics;",
            "have a two-to-four-week topic backlog.",
          ],
        },
      ],
      links: [
        {
          label: "Content plan",
          href: "/en/blog/kontent-plan/",
        },
        {
          label: "Refreshing content",
          href: "/en/blog/obnovlenie-kontenta/",
        },
      ],
    },
  ],
};
