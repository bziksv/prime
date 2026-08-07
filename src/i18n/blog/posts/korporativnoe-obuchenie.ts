import type { BlogPost } from "../../../data/blog";

/** EN overlay for korporativnoe-obuchenie — same structure as RU JSON. */
export const korporativnoeObuchenieEn: BlogPost = {
  slug: "korporativnoe-obuchenie",
  title: "Corporate training and motivation: system, goals, and the expert",
  date: "2019-08-16",
  category: "Digital marketing",
  cover: "/images/blog/korporativnoe-obuchenie/cover-en.webp",
  excerpt:
    "Why employees don’t learn “on their own,” how to build a development system, set a goal and the expert’s role — and how online format differs from the motivation to learn.",
  lead: [
    "Corporate training helps both sides: the employee grows in the craft, the business gets stronger people and less dependence on external hiring. But an announcement “from Monday everyone studies” with no system almost never works.",
    "Barriers to learning alone and principles that work: a plan, a measurable goal, an expert, an outside perspective, events. How to run an online format is in a separate article; this piece is about motivation and the model.",
  ],
  faq: [
    {
      q: "Why build a system if market courses exist?",
      a: "The market gives fragments of uneven difficulty. An internal plan ties skills to company roles and keeps people from drowning in material chaos.",
    },
    {
      q: "How do I motivate beyond “develop yourselves”?",
      a: "A clear link to pay, role, project, or certification. Abstract “be better in the industry” barely holds attention.",
    },
    {
      q: "Must the employee pay for the course?",
      a: "Not dogma. What matters is voluntary engagement and a “stake” — time, a project, defending a module. Co-pay sometimes helps, but “pay or leave” pressure breaks culture.",
    },
    {
      q: "Why is an expert better than a textbook?",
      a: "Currency and unpacking mistakes on real cases. Books age; a mentor answers “how it works here.”",
    },
    {
      q: "When do I need an external skill audit?",
      a: "In stagnation and overconfidence without feedback. Pick a calm fact review — not an “audit-sale” with drama and self-promo.",
    },
    {
      q: "How does this link to online training?",
      a: "Online is a delivery channel. Without a goal, plan, and practice even a perfect platform won’t hold people.",
    },
  ],
  sections: [
    {
      title: "Why people don’t learn alone",
      level: 2,
      paras: [
        "School had a plan, control, and a teacher. At work without a frame, learning becomes hunting articles at random: too simple, then too narrow — motivation burns out.",
        "Without a clear benefit people spare their time. Without progress checks it’s unclear whether the material stuck. Without an expert it’s easy to lock in outdated tricks.",
      ],
    },
    {
      title: "System and goal",
      level: 2,
      paras: [
        "Build an individual or role-based learning plan: modules, deadlines, practice. Not “read something about ads,” but “by module end can launch and review N campaigns.”",
        "State the goal in skills and prospects: role, grade, ownership area. Watch inclinations: sometimes strong growth is a track change, not “yet another course for the current job.”",
      ],
      lists: [
        {
          intro: "System minimum:",
          items: [
            "role → needed skills;",
            "module plan and practice;",
            "“done” criteria;",
            "link to career/pay/project.",
          ],
        },
      ],
    },
    {
      title: "Expert and an outside perspective",
      level: 2,
      paras: [
        "Access to a more experienced specialist speeds growth more than cramming: questions, mistake reviews, cases. The expert is an internal mentor or an external consultant with verifiable experience.",
        "Stagnation often hides behind “I’ve done this a thousand times.” A calm work audit helps: facts and recommendations — not “horror/nightmare” pressure to sell services. A normal review has no half-file of self-promo and is open to dialogue.",
      ],
      notes: [
        {
          title: "External events",
          text: "Conferences and trainings help benchmark against the market and bring ideas into the company. Plan a handoff: a short report or internal debrief after the trip.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Online employee training",
          href: "/en/blog/onlayn-obuchenie/",
        },
      ],
    },
    {
      title: "Two conditions of the model",
      level: 2,
      paras: [
        "Adults learn by choice: force without meaning gives “sat through a webinar.” Second — readiness to invest a resource: time, attention, practice on a live project. The employee’s money is one “stake” option — not the only or mandatory one.",
        "Businesses that level skill to “average” and leave people on routine without growth lose the ambitious. Systematic training cuts churn where a real development track exists.",
      ],
      links: [
        {
          label: "Remote work",
          href: "/en/blog/udalennaya-rabota/",
        },
      ],
    },
  ],
  closing: [
    "Corporate training works as a system with a goal, an expert, and voluntary engagement — not as an order to “go learn.” Format (online or in-person) is secondary; without a plan and practice the budget is wasted.",
  ],
  related: [
    "onlayn-obuchenie",
    "udalennaya-rabota",
    "marketingovaya-strategiya",
    "kontent-menedzher",
    "tochki-rosta-sayta",
    "korporativnyy-blog",
  ],
};
