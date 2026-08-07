import type { BlogPost } from "../../../data/blog";

/** EN overlay for nayti-marketologa — same structure as RU JSON. */
export const naytiMarketologaEn: BlogPost = {
  slug: "nayti-marketologa",
  title: "How to find a marketer: agency, in-house, and what to check",
  date: "2019-07-29",
  category: "Internet marketing",
  cover: "/images/blog/nayti-marketologa/cover-en.webp",
  excerpt:
    "Where to look for an internet marketer: agency or hiring yourself, pros and cons, which skills to check, and how to agree on KPIs — without the “10,000 hours” myth.",
  lead: [
    "You need a marketer not “for show”, but to link channels to sales: traffic, offer, analytics, experiments. Without a clear brief any candidate or agency will work into the void.",
    "Below — where to search, how an agency differs from in-house/freelance, what to check in interviews, and how to talk money and KPIs. What’s inside a digital agency is in a separate piece.",
  ],
  faq: [
    {
      q: "Agency or your own marketer?",
      a: "An agency closes the stack and load peaks faster. In-house knows the product deeper. Often a hybrid: strategy/channels outside, product and approvals inside.",
    },
    {
      q: "Is “knows paid search” enough?",
      a: "For a narrow job — yes. For business growth you also need landings, analytics, offer, and funnel understanding. Clarify ownership in the brief.",
    },
    {
      q: "How do you verify experience?",
      a: "Cases with numbers and the person’s role, questions “what broke and how you fixed it”, a paid test on your data. “10,000 hours” is a metaphor, not a filter.",
    },
    {
      q: "Pay per lead or a fixed fee?",
      a: "Depends on tracking maturity. Fixed + KPI/bonus is clearer than “leads only” with no quality control. In the contract — lead definitions and exclusions.",
    },
    {
      q: "Do they need creative freedom?",
      a: "Yes in experiments, but within budget, brand, and KPIs. “Spend as much as you want” isn’t freedom — it’s risk.",
    },
    {
      q: "Where should a client start?",
      a: "Describe the goal, budget, current channels, and what you’ve already tried. The clearer the brief, the easier to find the right specialist.",
    },
  ],
  sections: [
    {
      title: "Agency: pros and cons",
      level: 2,
      paras: [
        "Pros: faster to find an executor, a team with different roles, a fresh outside view. Cons: longer immersion into the brand’s “language”, risk of a formal relationship without KPIs and regular calls.",
        "Look not only at a “famous name”, but who will run the account, how they count results, and how they hand knowledge to in-house.",
      ],
      links: [
        {
          label: "Digital agency",
          href: "/en/blog/didzhital-agentstvo/",
        },
      ],
    },
    {
      title: "Searching on your own",
      level: 2,
      paras: [
        "Job boards, referrals, communities, former colleagues — longer selection, but you can know the person deeper before a contract. Hiring and onboarding decisions sit fully on you.",
        "Look for someone who can create and measure commercial traffic for your goal — not only “run socials for mood”.",
      ],
      lists: [
        {
          intro: "What a candidate should show:",
          items: [
            "basics in the needed channel (paid search, SEO, SMM — by task);",
            "cases with role and numbers;",
            "understanding of the market and limits;",
            "readiness to work with analytics and reporting.",
          ],
        },
      ],
    },
    {
      title: "Money, KPIs, and the team",
      level: 2,
      paras: [
        "Rate grows with level and ownership area. First lock tasks and expected effect — then find people for that vector. In the budget put not only salary/retainer, but media spend and narrow vendors (design, build, call tracking).",
        "A good marketer often pulls a network of specialists. Agree in advance: whose contacts, who pays, who approves estimates. KPIs (bonus on top of base) usually motivate better than pay “for any lead” without quality.",
      ],
      notes: [
        {
          title: "Budget for experiments",
          text: "A marketer spends company money. Give a frame and the right to test — with a ceiling and stop-rules, not “unlimited cash freedom”.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Performance marketing",
          href: "/en/blog/performance-marketing/",
        },
        {
          label: "Client report",
          href: "/en/blog/otchet-klientu/",
        },
      ],
    },
  ],
  closing: [
    "Finding a marketer is easier when goal, budget, and KPIs are clear. Pick the format (agency / in-house / hybrid) for the job and check cases and reporting — not loud promises and not mythical hours of experience.",
  ],
  related: [
    "didzhital-agentstvo",
    "performance-marketing",
    "otchet-klientu",
    "marketingovaya-strategiya",
    "metriki-reklamy",
    "uchastie-v-tenderah",
  ],
};
