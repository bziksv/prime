import type { BlogPost } from "../../../data/blog";

/** EN overlay for akkaunt-menedzher — same structure as RU JSON. */
export const akkauntMenedzherEn: BlogPost = {
  slug: "akkaunt-menedzher",
  title: "What an account manager is — and what they actually do",
  date: "2019-05-30",
  category: "Internet marketing",
  cover: "/images/blog/akkaunt-menedzher/cover-en.webp",
  excerpt:
    "An agency account manager: how they differ from sales and a PM, project duties, client communication, upsell, and stress tolerance — without the myth of “easy MacBook work”.",
  lead: [
    "An account manager (client success / account lead) is the link between the client and the agency team: goals, deadlines, reports, complaints, and growing the relationship after the first deal. In digital they’re most often hired by web studios, ad and branding agencies, and online schools.",
    "Below — how the role differs from a sales manager and a project manager, typical project jobs, what piles on “beyond the job description”, and who the profession fits. Salaries and grade names float on the market — check current openings; here it’s the substance of the work.",
  ],
  faq: [
    {
      q: "Is account the same as sales manager?",
      a: "No. Sales more often closes a cold audience and the first deal. Account runs an existing client: loyalty, repeat orders, smooth processes, and growing average ticket.",
    },
    {
      q: "How is it different from a project manager?",
      a: "PM is stronger on deadlines, the team, and delivering scope. Account is about the client relationship, expectations, money, and growing the account. In small agencies the roles often blend.",
    },
    {
      q: "Do you need to know marketing and SEO?",
      a: "Yes at meaning level: understand tools, read reports, brief specialists, and explain “why” to the client. Deep hands-on isn’t required; pure “I just forward emails” isn’t enough.",
    },
    {
      q: "How many projects can you realistically run?",
      a: "Depends on complexity and process maturity. Older overviews cited up to ~20 — burnout risk without playbooks and support. Fewer accounts with depth beat a queue with no control.",
    },
    {
      q: "The main skill of the job?",
      a: "Communication and calm under pressure: calls, approvals, complaints, translating client language into team language and back. Without readiness to “live on the phone”, the role is hard.",
    },
    {
      q: "Is upsell mandatory?",
      a: "Often in KPIs: offer adjacent services when they truly help the client’s business. Pushing “sell everything” with no value kills trust — upsell from need, not quota at any cost.",
    },
  ],
  sections: [
    {
      title: "Why an agency needs an account manager",
      level: 2,
      paras: [
        "Digital runs many parallel projects: site, ads, content, analytics. Without someone holding client context and stitching departments, deadlines, expectations, and payments suffer.",
        "Leaders often call the account “the face of the company”; skeptics reduce the role to “accept work and chase the invoice”. Reality sits in the middle: money control matters, but without client engagement and clear goals the project falls apart.",
      ],
      notes: [
        {
          title: "Don’t confuse with first sale",
          text: "Sales brings the client in. Account makes the collaboration continue and deliver for both sides.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Core responsibilities",
      level: 2,
      paras: [
        "Focus — client engagement in decisions, clear goals, and transparent reports. The account knows where each active project is going, aligns client requirements with team capacity, and handles complaints without a “us vs them” war.",
        "On the money side: watch payments, don’t allow “forgotten” debt, run meetings, and propose add-on products when they fit.",
      ],
      lists: [
        {
          intro: "Typical project cycle (e.g. traffic to a site):",
          items: [
            "brief and help framing marketing goals;",
            "work plan with the team;",
            "picking relevant tools;",
            "control and plan adjustments;",
            "handling objections and complaints;",
            "follow-up after a stage handover;",
            "upsell of adjacent solutions for the business need.",
          ],
        },
      ],
      links: [
        {
          label: "Client report",
          href: "/en/blog/otchet-klientu/",
        },
        {
          label: "Project manager in IT",
          href: "/en/blog/project-manager/",
        },
      ],
    },
    {
      title: "What people usually underestimate",
      level: 2,
      paras: [
        "Beyond the “official” list — dozens of counterparts: the client, their staff, colleagues from different agency departments. You need industry context (from tire shops to construction) and calm in disputes over details like an extra pop-up.",
        "Standups, calls, and threads eat the calendar. Without time management and a task tracker the role becomes endless firefighting. Practice rule: if you haven’t called the client in a while — surprise risk rises.",
      ],
      lists: [
        {
          intro: "Who the role fits:",
          items: [
            "comfortable talking a lot by voice and in writing;",
            "can turn expectations into tasks;",
            "hold stress and the client’s mood swings;",
            "willing to learn the substance of services — not only “pass statuses”.",
          ],
        },
      ],
      links: [
        {
          label: "Employee burnout",
          href: "/en/blog/vygoranie-sotrudnikov/",
        },
        {
          label: "How to find a marketer",
          href: "/en/blog/nayti-marketologa/",
        },
      ],
    },
  ],
  closing: [
    "An account manager isn’t “just chasing invoices” — it’s long-term relationships, clear goals, and stitching the client to the team. If your company blends PM and sales into one role — write down ownership zones, or both deadlines and trust suffer.",
  ],
  related: [
    "project-manager",
    "otchet-klientu",
    "nayti-marketologa",
    "vygoranie-sotrudnikov",
    "kpi-menedzhera-prodazh",
    "korporativnoe-obuchenie",
  ],
};
