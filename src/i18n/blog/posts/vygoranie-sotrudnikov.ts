import type { BlogPost } from "../../../data/blog";

/** EN overlay for vygoranie-sotrudnikov — same structure as RU JSON. */
export const vygoranieSotrudnikovEn: BlogPost = {
  slug: "vygoranie-sotrudnikov",
  title: "Employee burnout: how to lower the risk",
  date: "2019-06-07",
  category: "Internet marketing",
  cover: "/images/blog/vygoranie-sotrudnikov/cover-en.webp",
  excerpt:
    "Burnout prevention in a team: trust and feedback, healthy humor, clear tasks, breaks and workload boundaries — without the cult of “meditation instead of pay”.",
  lead: [
    "Burnout is not “laziness” or personal weakness. It’s exhaustion from chronic stress, unclear goals, overload, and missing recognition. For business that means turnover, sick leave, and quality drop.",
    "Below — practical prevention levers: trust, culture, stress reduction. Figures from individual studies are a guide, not a guarantee of “+50% productivity” from one joke.",
  ],
  faq: [
    {
      q: "Is burnout just tiredness after a deadline?",
      a: "No. Tiredness fades after rest. Burnout is lasting emptiness, cynicism about work, and lower effectiveness even after a weekend.",
    },
    {
      q: "Are parties and memes enough?",
      a: "No. Humor helps the atmosphere, but doesn’t replace clear tasks, fair load, and fair pay.",
    },
    {
      q: "Is a flexible schedule required?",
      a: "Not everywhere. What matters is predictable recovery: breaks, limits on “forever crunch”, and the right to disconnect off-shift where possible.",
    },
    {
      q: "Will meditation save the team?",
      a: "It can be a personal tool. It doesn’t replace fixing overload, a toxic management style, or impossible KPIs.",
    },
    {
      q: "How is burnout linked to trust?",
      a: "Where you can’t err or raise a problem, people stay silent until they break. Feedback and recognition lower that risk.",
    },
    {
      q: "What should a manager do at the first signs?",
      a: "Clarify load and priorities, cut useless multitasking, give rest/redistribution — don’t “motivate” with shame.",
    },
  ],
  sections: [
    {
      title: "Trust and meaning at work",
      level: 2,
      paras: [
        "Recognizing wins, honest feedback, hard but doable tasks (a “stress challenge”, not an impossible plan), freedom within the role, and visible growth — the prevention base.",
        "Managers do better not playing “infallible”: owning their mistakes lowers fear culture. Skill growth (training, task rotation) retains people better than “we’re a family” slogans.",
      ],
      lists: [
        {
          intro: "Trust minimum:",
          items: [
            "regular feedback and recognition;",
            "a clear goal for the task;",
            "influence on your own work area;",
            "a development track, not only routine.",
          ],
        },
      ],
      links: [
        {
          label: "Corporate training",
          href: "/en/blog/korporativnoe-obuchenie/",
        },
        {
          label: "Bad advice for managers",
          href: "/en/blog/vrednye-sovety-rukovoditelyam/",
        },
      ],
    },
    {
      title: "Culture without toxic “fun”",
      level: 2,
      paras: [
        "Kind humor and self-irony lower tension and help ideas surface without self-censorship. Drop jokes at the expense of gender, religion, politics, or someone’s vulnerability.",
        "“Positivity” doesn’t cancel exhaustion from 12-hour shifts. Load and clarity first — memes second.",
      ],
    },
    {
      title: "Stress, breaks, focus",
      level: 2,
      paras: [
        "People need to know what they do and why. Flexible hours (where it fits), regular short breaks, less pointless multitasking and endless notifications — practical moves.",
        "Nonstop work raises anxiety and errors. Protect deep-work blocks and evening boundaries, especially remote.",
      ],
      notes: [
        {
          title: "Meditation and personal practices",
          text: "Short breathing/meditation pauses help some people. They’re an add-on to org measures — not a substitute for pay, headcount, and a realistic plan.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Remote work",
          href: "/en/blog/udalennaya-rabota/",
        },
        {
          label: "Online learning",
          href: "/en/blog/onlayn-obuchenie/",
        },
      ],
    },
  ],
  closing: [
    "Burnout prevention is trust, clear tasks, and recovery — not “one more team-building”. Remove chronic overload and toxic rituals — productivity and retention rise on their own.",
  ],
  related: [
    "vrednye-sovety-rukovoditelyam",
    "korporativnoe-obuchenie",
    "udalennaya-rabota",
    "onlayn-obuchenie",
    "nayti-marketologa",
    "project-manager",
  ],
};
