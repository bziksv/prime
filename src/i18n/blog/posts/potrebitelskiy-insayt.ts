import type { BlogPost } from "../../../data/blog";

/** EN overlay for potrebitelskiy-insayt — same structure as RU JSON. */
export const potrebitelskiyInsaytEn: BlogPost = {
  slug: "potrebitelskiy-insayt",
  title: "Consumer insight: what it is and how to find it",
  date: "2019-07-11",
  category: "Digital marketing",
  cover: "/images/blog/potrebitelskiy-insayt/cover-en.webp",
  excerpt:
    "A consumer insight is a hidden motive in the formula “I want…, but…”. Why marketing needs it and where to look: data, surveys, contradictions, forums, social, and competitors.",
  lead: [
    "An insight in marketing isn’t inspiration from thin air, but a non-obvious audience motive that explains behavior better than demographics. A handy formula: “I want…, but…” — a conflict of desire and barrier.",
    "We cover why an insight is needed, signs of a strong wording, and practical search sources.",
  ],
  faq: [
    {
      q: "How is an insight different from a “women 25–45” segment?",
      a: "A segment describes who. An insight is why they buy or don’t — which inner conflict the product resolves.",
    },
    {
      q: "Is a survey enough to find an insight?",
      a: "A survey gives hypotheses, but people often answer “the right way.” Combine with behavior, reviews, and observation.",
    },
    {
      q: "Is conflict in the wording required?",
      a: "A strong insight almost always holds tension: I want A, B gets in the way. Without conflict, creative slides into generic words.",
    },
    {
      q: "Where should I start with an existing product?",
      a: "With CRM, analytics, reviews, and support: what already sells, where people complain, what they abandon in the cart.",
    },
    {
      q: "Can I take an insight from competitors?",
      a: "Watching their communication helps; copying slogans doesn’t. Look for a gap: what the audience praises or criticizes about them and you.",
    },
    {
      q: "Is an insight the same as creative?",
      a: "An insight is knowledge about a person. Creative is how you pack it into an ad, product, or offer.",
    },
  ],
  sections: [
    {
      title: "What a consumer insight is",
      level: 2,
      paras: [
        "In psychology “insight” is a sudden grasp of a solution. In marketing — a hidden need or motive people don’t always say out loud.",
        "Example: “I want to eat well, but I have no time to cook.” The product or communication should remove the barrier (time, fear, shame, price) — not repeat “we’re healthy.”",
      ],
    },
    {
      title: "Why look for it",
      level: 2,
      paras: [
        "An insight feeds product, creative, and offer: clearer who to talk to and about what. Without it it’s easy to drift into demographics and generic benefits.",
        "A good insight: there’s conflict, a link to a human value, originality versus “everyone is tired,” plus feasibility in the platform format.",
      ],
      lists: [
        {
          intro: "What to lean on:",
          items: [
            "an “I want / but” conflict",
            "a basic need (safety, status, convenience…)",
            "observed behavior, not only a questionnaire",
            "a check: the product actually removes the barrier.",
          ],
        },
      ],
    },
    {
      title: "Ways to search",
      level: 2,
      paras: [
        "Data: CRM, end-to-end analytics, what sells and where drop-off is. Dialogue: surveys and interviews — careful with “socially desirable” answers.",
        "Emotional lenses: word–deed contradictions, nostalgia, tension of standards (beauty, success), industry research as background. Less obvious: memes and humor (careful with luxury and joke shelf-life), quotes and cultural context, forums and comments under niche creators, mass-culture references — only if honestly tied to the product.",
      ],
      lists: [
        {
          intro: "A working source set:",
          items: [
            "reports and CRM",
            "surveys and depth interviews",
            "reviews and support tickets",
            "comments and niche discussions",
            "brand and competitor pages on social",
            "industry research.",
          ],
        },
      ],
      notes: [
        {
          title: "Social and privacy",
          text: "Analyzing public reviews and reactions is fine. Don’t bake gray audience scraping and platform-rule bypasses into the plan.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "End-to-end analytics",
          href: "/en/blog/skvoznaya-analitika/",
        },
        {
          label: "Target audience",
          href: "/en/blog/tselevaya-auditoriya/",
        },
      ],
    },
    {
      title: "Competitors and your brand",
      level: 2,
      paras: [
        "Look at active fans and critics: what they praise and what they slam. The emotional tone of comments is often more precise than an average “like.”",
        "At competitors, note which barriers they resolve in ads — and where the audience is still unhappy. Insight hypotheses grow from that, not banner copies.",
      ],
      links: [
        {
          label: "Competitor analysis",
          href: "/en/blog/analiz-konkurentov/",
        },
        {
          label: "Marketing strategy",
          href: "/en/blog/marketingovaya-strategiya/",
        },
      ],
    },
  ],
  closing: [
    "A consumer insight mixes data and immersion in the audience’s life, worded as an “I want…, but…” conflict. Gather sources, test the hypothesis on behavior, and only then pack it into creative.",
  ],
  related: [
    "tselevaya-auditoriya",
    "marketingovaya-strategiya",
    "analiz-konkurentov",
    "skvoznaya-analitika",
    "performance-marketing",
    "nayti-marketologa",
  ],
};
