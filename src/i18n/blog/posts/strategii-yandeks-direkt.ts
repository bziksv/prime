import type { BlogPost } from "../../../data/blog";

/** EN overlay for strategii-yandeks-direkt — same structure as RU JSON. */
export const strategiiYandeksDirektEn: BlogPost = {
  slug: "strategii-yandeks-direkt",
  title: "Yandex Direct strategies: start from economics, not the button name",
  date: "2017-07-02",
  category: "Paid search",
  cover: "/images/blog/strategii-yandeks-direkt/cover-en.webp",
  excerpt:
    "Why Direct’s “simple strategy for beginners” is fading, why goals and CPA matter, and how to pick a strategy from economics — not auction fear.",
  lead: [
    "In July 2017 Direct turned off the “Show in the block at minimum price” strategy — the one many used to “just try” without calculating CPA. Since then the UI and strategy names have changed again.",
    "The lasting takeaway isn’t about a 2017 button: without a clear lead or order cost and business feedback, automation and manual bids run blind. Strategy choice should start from economics, not a nostalgic button name.",
  ],
  faq: [
    {
      q: "What was turned off in 2017?",
      a: "The “Show in the block at minimum price” strategy — a beginner-friendly “be in the block cheaper” mode. As a separate “magic” button it left; auction logic and auto-strategies continue.",
    },
    {
      q: "Can I run Direct “without numbers”?",
      a: "You can spend budget. You can’t manage the result. Minimum: goal action, lead/order price, margin.",
    },
    {
      q: "Are auto-strategies better than manual bids?",
      a: "Depends on data volume and goal quality. Few conversions and dirty goals — automation often “learns” noise. Many clean conversions — auto-strategies help more.",
    },
    {
      q: "Where should a beginner start now?",
      a: "A narrow core, a clear landing, Yandex Metrika goals, and a budget cap. Not “hit the simplest strategy and hope.”",
    },
    {
      q: "Is “calls yes/no” enough as a KPI?",
      a: "As a signal — yes. As the only KPI — weak: you need cost per inquiry, lead quality, and a link to sales.",
    },
    {
      q: "Should I chase premium placement?",
      a: "Block height isn’t the goal. Economics is. See the premium placement post.",
    },
    {
      q: "When should I call a specialist?",
      a: "When budget is material and nobody inside connects bids, analytics, and sales. Otherwise optimization stalls at “we’re fine / paid search doesn’t work.”",
    },
    {
      q: "Does the right strategy guarantee leads?",
      a: "No. A strategy distributes budget. Without offer, landing, and demand it won’t “carry” the campaign.",
    },
  ],
  sections: [
    {
      title: "What happened then",
      level: 2,
      paras: [
        "“Show in the block at minimum price” gave beginners a sense of control: “we’re in the block, the bid isn’t inflated”. For agencies and experienced advertisers it was already too coarse — no CPA, ROI, or competition footing.",
        "Yandex moved toward more complex strategies and metrics in the spirit of “big” ad systems. For the market that meant: fewer “buttons for people who don’t count”, more requirements for goals and data.",
      ],
      notes: [
        {
          title: "Historical context",
          text: "2017 strategy names and ads account screens are an archive. Set campaigns from current Direct help and your Yandex Metrika goals — not screenshots from old articles.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Why “just try” got harder",
      level: 2,
      paras: [
        "Without an average call/lead/deal cost, a bid is a lottery. “There are calls — good” doesn’t answer what a lead costs or whether ads pay off.",
        "Some advertisers deliberately avoid analytics (“no resources”). Others tried “standard” strategies, got no result, and decided “paid search doesn’t work” — while goals, semantics, or the landing were usually broken.",
      ],
      lists: [
        {
          intro: "Typical gap:",
          items: [
            "Direct burns impressions and clicks;",
            "business only watches “were there calls”;",
            "nobody connects lead cost and quality;",
            "strategy changes at random.",
          ],
        },
      ],
    },
    {
      title: "What to start from when choosing a strategy",
      level: 2,
      paras: [
        "Economics and goal first, strategy type second. You need: goal action, conversion volume for learning, acceptable CPA or ad-spend share, budget limits.",
        "Manual bid control fits the start, tests, and low data. Auto-strategies — when goals are clean and conversions are enough so the algorithm isn’t guessing.",
      ],
      lists: [
        {
          intro: "Minimum set before launch:",
          items: [
            "Yandex Metrika goal (and proof it fires);",
            "estimate of acceptable lead cost;",
            "landing for the query cluster;",
            "negatives and non-target traffic control;",
            "budget cap and test window.",
          ],
        },
      ],
      links: [
        {
          label: "Premium placement in Direct",
          href: "/en/blog/spetsrazmeshchenie-direkt/",
        },
        {
          label: "UTM tags explained",
          href: "/en/blog/utm-metki/",
        },
        {
          label: "Retargeting",
          href: "/en/blog/retargeting/",
        },
      ],
    },
    {
      title: "Feedback beats the strategy button",
      level: 2,
      paras: [
        "Even a strong specialist is helpless if CRM only says “someone called” without statuses and amounts. Cleaner lead and sales data means more precise bids and auto-strategies.",
        "A strategy distributes budget. Campaign result = demand × offer × landing × accounting. A ads account button doesn’t replace that chain.",
      ],
      notes: [
        {
          title: "Tip",
          text: "Don’t chase a strategy name from someone else’s case. Match conversion volume, sales-cycle length, and goal quality — then pick the optimization mode.",
          kind: "tip",
        },
      ],
    },
  ],
  related: [
    "spetsrazmeshchenie-direkt",
    "utm-metki",
    "retargeting",
    "kontekst-i-seo",
    "prazdnichnyy-retargeting",
  ],
};
