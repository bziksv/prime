import type { BlogPost } from "../../../data/blog";

/** EN overlay for project-manager — same structure as RU JSON. */
export const projectManagerEn: BlogPost = {
  slug: "project-manager",
  title: "Project manager in IT: duties, skills, and how people enter the role",
  date: "2019-12-09",
  category: "Digital marketing",
  cover: "/images/blog/project-manager/cover-en.webp",
  excerpt:
    "Who a project manager is in IT: why the role exists, typical duties and skills, and how people enter the profession — without “high salary right after a weekend course” promises.",
  lead: [
    "A project manager owns the path from idea to outcome: timeline, team, stakeholder agreements, and a clear status. Even strong developers and designers without coordination often pull the project in different directions.",
    "What a PM does in IT, daily work, which qualities matter, and common entry paths. Salaries and grade titles float on the market — check current openings; this piece is about the substance of the job.",
  ],
  faq: [
    {
      q: "Is a project manager the same as a tech lead?",
      a: "Not always. A tech lead usually owns engineering craft and people. A PM owns project goals, timeline, communications, and risks as a whole.",
    },
    {
      q: "Do I need a technical background?",
      a: "It helps a lot to understand constraints and spot risks. You can enter without IT experience, but you’ll need to learn the team’s and product’s language quickly.",
    },
    {
      q: "How is this different from a product manager?",
      a: "Product often owns “what and why” for the product and market. Project owns “how we deliver on time within agreements”. In small teams the roles blur.",
    },
    {
      q: "Are PMP/Agile certificates required?",
      a: "Not as the only door in. Courses and frameworks help share a language; employers look at real project delivery practice.",
    },
    {
      q: "Where should a beginner start?",
      a: "Coordinate a small project (inside a company or a training one): statuses, risks, agreements. People often come from engineering, QA, SEO, or support.",
    },
    {
      q: "Does a PM guarantee project success?",
      a: "No. They reduce chaos and make risks visible. Outcome still depends on resources, requirement quality, and client decisions.",
    },
  ],
  sections: [
    {
      title: "Why a project manager is needed",
      level: 2,
      paras: [
        "A project has many specialists with their own ownership areas. Without someone holding the whole picture, you easily get perfect pieces and a non-working result.",
        "A PM coordinates people, watches stages and dates, removes blockers, and owns transparency for business and the team. Reputation and project economics depend on that link no less than on the code.",
      ],
    },
    {
      title: "Duties",
      level: 2,
      paras: [
        "Typical scope: concept and scope, kickoff, breaking work into stages, timeline control, stakeholder communication, reporting, risk and change management.",
        "Day to day there’s less “heroics” and more routine: assign work, check statuses, unlock access and decisions, help a teammate, write down agreements. Documents and status reports are part of the job, not an add-on.",
      ],
      lists: [
        {
          intro: "Basic cycle:",
          items: [
            "agree goals and project boundaries",
            "assemble / clarify the team and roles",
            "run the plan and statuses",
            "escalate risks in time",
            "deliver the result and close loose ends.",
          ],
        },
      ],
      links: [
        {
          label: "Website specification",
          href: "/en/blog/tz-na-sayt/",
        },
      ],
    },
    {
      title: "Qualities and skills",
      level: 2,
      paras: [
        "You need a strategic view and the ability to break work into tasks, negotiation and diplomacy between client and team, attention to detail, stress tolerance, and clear written communication.",
        "Creative thinking helps in dead ends, but it doesn’t replace a transparent plan. Without team trust a PM becomes a “status warden” — a weak model.",
      ],
      lists: [
        {
          intro: "What to level up:",
          items: [
            "task framing and “done” criteria",
            "estimating and tracking dates",
            "risks and scope-change work",
            "meeting facilitation",
            "basic understanding of IT delivery.",
          ],
        },
      ],
    },
    {
      title: "How people enter the profession",
      level: 2,
      paras: [
        "A common path is from IT: developer, tester, analyst, SEO, account. Project-management courses give a frame; coordination experience builds a portfolio.",
        "Start is often an internship or junior/assistant PM. Pay grows with project complexity and the ability to finish — not with a weekend diploma. Career peak doesn’t have to be “PM forever”: next can be program/portfolio, product, or operations leadership.",
      ],
      notes: [
        {
          title: "Important",
          text: "Course promises of “high salary immediately” are a red flag. Look at real project practice and employer feedback — not only a certificate.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Web analyst",
          href: "/en/blog/veb-analitik/",
        },
        {
          label: "Link builder",
          href: "/en/blog/linkbilder/",
        },
      ],
    },
    {
      title: "Where a PM works in digital",
      level: 2,
      paras: [
        "In product companies, agencies, build studios, in-house IT. Format can be office, hybrid, or remote — status rituals and clear tasks matter more than “everyone in one open space”.",
        "In an agency loop a PM often connects client, design, engineering, and marketing. Spec boundaries and expectation management are critical — otherwise the project spreads into endless edits.",
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
    "A project manager in IT is a coordination role with ownership of the path to the outcome — not “someone who just posts in chat”. Build practice on real tasks, learn communication and risk — courses only speed up a shared language with the team.",
  ],
  related: [
    "tz-na-sayt",
    "udalennaya-rabota",
    "veb-analitik",
    "linkbilder",
    "menedzher-smm",
    "kontent-menedzher",
  ],
};
