import type { BlogPost } from "../../../data/blog";

/** EN overlay for vrednye-sovety-rukovoditelyam — same structure as RU JSON. */
export const vrednyeSovetyRukovoditelyamEn: BlogPost = {
  slug: "vrednye-sovety-rukovoditelyam",
  title: "Bad advice for managers: antipatterns that break a team",
  date: "2019-07-01",
  category: "Internet marketing",
  cover: "/images/blog/vrednye-sovety-rukovoditelyam/cover-en.webp",
  excerpt:
    "An ironic take on toxic leadership in digital: “always right”, status flexing, empty meetings, manipulation, and neglecting strong people — and what to do instead.",
  lead: [
    "This piece is in the spirit of bad advice: if you want to lose respect and strong people fast — do this. If you want to keep a team — read it as an antipattern list and do the opposite.",
    "Below — typical manager traps (including in a digital agency): from intolerance of critique to devaluing experienced people. The humor is sharp on purpose — the pain is real.",
  ],
  faq: [
    {
      q: "Is this a serious management guide?",
      a: "It’s a mirror of bad habits. Working formula: spot an antipattern — do the opposite.",
    },
    {
      q: "Why the digital-agency angle?",
      a: "The source grew from an agency setting, but the patterns are universal: sales, product, any service business.",
    },
    {
      q: "Is criticizing a manager always useful?",
      a: "Not every shout — arguments on the merits. A mature leader separates a personal attack from a review of a decision.",
    },
    {
      q: "What’s dangerous about flexing the past?",
      a: "It replaces today’s contribution with status. The team watches today’s decisions, not resume legends.",
    },
    {
      q: "How often are meetings needed?",
      a: "When there’s an agenda, a decision, and an owner. Gathering to “fight a crisis” with no agenda is noise.",
    },
    {
      q: "Is manipulation instead of competence a way out?",
      a: "Short-term it masks a gap. Long-term — churn and quiet sabotage. Better admit the blank and delegate to an expert.",
    },
  ],
  sections: [
    {
      title: "“I’m always right” and the genius cult",
      level: 2,
      paras: [
        "Bad advice: don’t allow critique; kill debates with shouting and “you don’t trust me”. Staff “don’t get digital”, so their opinion is zero.",
        "Instead: defend a decision with facts; admit a mistake. A team that can’t object stops warning about risks.",
      ],
    },
    {
      title: "Status flexing, empty meetings, forgotten promises",
      level: 2,
      paras: [
        "Harmful: constantly reminding people of past budgets and “international clients”, dressing for status, calling sudden councils with no agenda and interrupting everyone.",
        "Harmful: not remembering your own promises and dumping blame on executors. Instead: agenda, outcomes, written agreements — and keeping yours.",
      ],
      lists: [
        {
          intro: "Meeting antipatterns:",
          items: [
            "no goal and agenda;",
            "no decision and owner;",
            "raising your voice instead of arguments;",
            "a meeting instead of work in the task tracker.",
          ],
        },
      ],
    },
    {
      title: "Manipulation and “busy with the wrong thing”",
      level: 2,
      paras: [
        "Harmful: pitting people against each other, gossiping, sending them to “the harshest” boss instead of helping, praising “we’re a family” while overworking. Harmful: faking busywork and letting the product/agency model drift while chasing a trendy track that isn’t yours.",
        "Instead: transparent priorities, your own ownership areas, direct feedback without spying.",
      ],
    },
    {
      title: "Neglecting the strong",
      level: 2,
      paras: [
        "Harmful: not rewarding proven people, showering newcomers, breaking sales motivation with a fixed fee and “vague prospects”, demanding impossible creative volumes, forbidding hiring strong people, and leaving account management alone with the portfolio.",
        "Instead: retain those who already deliver; give newcomers onboarding — not privileges that demotivate the core.",
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
    "Bad advice works like a vaccine: you recognize a toxic move — and consciously choose the opposite. Team respect is built on decisions, promises, and attention to strong people — not on shouting about your own genius.",
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
