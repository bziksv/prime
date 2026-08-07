import type { BlogPost } from "../../../data/blog";

/** EN overlay for vrednye-sovety-rukovoditelyam — same structure as RU JSON. */
export const vrednyeSovetyRukovoditelyamEn: BlogPost = {
  slug: "vrednye-sovety-rukovoditelyam",
  title: "Bad advice for managers: leadership antipatterns that break teams",
  date: "2019-07-01",
  category: "Digital marketing",
  cover: "/images/blog/vrednye-sovety-rukovoditelyam/cover-en.webp",
  excerpt:
    "An ironic look at toxic leadership in digital: always being right, status flexing, empty meetings, manipulation, and neglecting your best people — plus what to do instead.",
  lead: [
    "This piece is written as bad advice on purpose: if you want to lose respect and your strongest people fast, follow it. If you want to keep a team, treat it as an antipattern list and do the opposite.",
    "Managers get these wrong often — including in digital agencies — from shutting down feedback to undervaluing experienced contributors. The humor is sharp on purpose because the damage is real.",
  ],
  faq: [
    {
      q: "Is this a serious management guide?",
      a: "It's a mirror for bad habits. The working formula: spot an antipattern, then do the opposite.",
    },
    {
      q: "Why the digital-agency angle?",
      a: "The source grew out of agency life, but the patterns show up everywhere: sales, product, any service business.",
    },
    {
      q: "Is criticizing a manager always useful?",
      a: "Not every outburst helps. Pushback needs substance. A mature leader separates a personal attack from a review of a decision.",
    },
    {
      q: "Why is flexing past wins dangerous?",
      a: "It replaces today's contribution with status. The team judges current decisions, not resume legends.",
    },
    {
      q: "How often should you hold meetings?",
      a: "When there's an agenda, a decision, and an owner. Calling people together to \"fight a crisis\" with no plan is just noise.",
    },
    {
      q: "Can manipulation cover for weak competence?",
      a: "Short term, it hides a gap. Long term, you get churn and quiet sabotage. Better to admit what you don't know and bring in an expert.",
    },
  ],
  sections: [
    {
      title: "\"I'm always right\" and the genius cult",
      level: 2,
      paras: [
        "Bad advice: don't allow critique; shut down debate with shouting and \"you don't trust me.\" Assume staff \"don't get digital,\" so their opinion counts for nothing.",
        "Do this instead: defend decisions with facts and own mistakes. A team that can't push back stops warning you about risk.",
      ],
    },
    {
      title: "Status flexing, empty meetings, forgotten promises",
      level: 2,
      paras: [
        "Harmful: constantly reminding people of past budgets and \"international clients,\" dressing for status, calling emergency meetings with no agenda, and cutting people off mid-sentence.",
        "Harmful: forgetting your own promises and blaming the people doing the work. Do this instead: agenda, outcomes, written agreements — and keep yours.",
      ],
      lists: [
        {
          intro: "Meeting antipatterns:",
          items: [
            "no goal and no agenda",
            "no decision and no owner",
            "raising your voice instead of making an argument",
            "a meeting instead of work in the task tracker",
          ],
        },
      ],
    },
    {
      title: "Manipulation and \"busy with the wrong thing\"",
      level: 2,
      paras: [
        "Harmful: pitting people against each other, gossiping, sending them to \"the harshest\" boss instead of helping, praising \"we're a family\" while overworking everyone. Harmful: faking busywork and letting the product or agency model drift while chasing a trendy lane that isn't yours.",
        "Do this instead: transparent priorities, clear ownership, direct feedback without spying.",
      ],
    },
    {
      title: "Neglecting strong performers",
      level: 2,
      paras: [
        "Harmful: not rewarding proven performers, showering newcomers with perks, breaking sales motivation with a flat fee and vague promises, demanding impossible creative volume, blocking hires of strong people, and leaving account managers alone with the whole portfolio.",
        "Do this instead: retain people who already deliver; give newcomers real onboarding — not privileges that demotivate the core team.",
      ],
      links: [
        {
          label: "Corporate training",
          href: "/en/blog/korporativnoe-obuchenie/",
        },
        {
          label: "Digital agency",
          href: "/en/blog/didzhital-agentstvo/",
        },
      ],
    },
  ],
  closing: [
    "Bad advice works like a vaccine: once you recognize a toxic move, you can consciously choose the opposite. Team respect comes from decisions, kept promises, and attention to strong people — not from shouting about your own genius.",
  ],
  related: [
    "korporativnoe-obuchenie",
    "didzhital-agentstvo",
    "nayti-marketologa",
    "project-manager",
    "udalennaya-rabota",
    "onlayn-obuchenie",
  ],
};
