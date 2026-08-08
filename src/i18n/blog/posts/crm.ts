import type { BlogPost } from "../../../data/blog";

/** EN overlay for crm — same structure as RU JSON. */
export const crmEn: BlogPost = {
  slug: "crm",
  title: "CRM systems: how to choose without chasing a scorecard",
  date: "2020-02-26",
  category: "Digital marketing",
  cover: "/images/blog/crm/cover-en.webp",
  excerpt:
    "What a CRM is, how self-hosted, cloud, and “portal with CRM” options differ, and how to compare Bitrix24, amoCRM, and similar tools — without treating a 2020 best-of list or magic quadrant as gospel.",
  lead: [
    "CRM (Customer Relationship Management) tracks customers, deals, and touchpoints: who the lead is, which stage of the funnel, what was promised, and how it ended. Without one, sales live in chats and inside managers’ heads.",
    "“Best CRM” scorecards age fast: pricing, modules, and market leaders shift. Below: solution types and selection criteria for your process. We don’t treat 2019 Gartner placements or old price lists as forever truth.",
  ],
  faq: [
    {
      q: "Does a small business need a CRM?",
      a: "If you have more than one manager or lead channel — almost always yes. Otherwise requests and repeat sales get lost. Early on, a simple cloud funnel is enough.",
    },
    {
      q: "Should I choose Bitrix24 or amoCRM?",
      a: "It depends on the job. amoCRM is often chosen for sales and funnel focus. Bitrix24 makes sense when you also need a portal: tasks, chat, drive, sometimes 1C. Compare against your process, not ad slogans.",
    },
    {
      q: "Should I pick self-hosted or cloud?",
      a: "Cloud means a faster start and less of your own infrastructure. On-prem / self-hosted means more data control and custom work, but it’s costlier to run. Seat-based SaaS is the most common path for SMBs.",
    },
    {
      q: "Is Excel enough instead of a CRM?",
      a: "For one person and a few dozen deals — sometimes. Once you hit duplicate leads, stages, and reporting, Excel breaks down.",
    },
    {
      q: "Where should implementation start?",
      a: "Map the funnel and required fields, connect the site, phone, and email, and train managers to run deals only in the CRM. Without that discipline, the software is useless.",
    },
  ],
  sections: [
    {
      title: "Why a business needs a CRM",
      level: 2,
      paras: [
        "One customer card holds call history, emails, invoices, and the next step. Leadership sees the funnel and bottlenecks; marketing sees lead quality by channel.",
        "Tied to the site and ads, you get a full-funnel picture: which channel closed the deal — not only which one earned the click. Without consistent data entry, reports lie.",
      ],
      lists: [
        {
          intro: "Minimum value from a rollout:",
          items: [
            "leads don’t get lost between managers",
            "deal stages stay visible",
            "tasks and reminders aren’t trapped in private chats",
            "you can report on revenue and lost deals",
          ],
        },
      ],
      links: [
        {
          label: "Full-funnel analytics",
          href: "/en/blog/skvoznaya-analitika/",
        },
        {
          label: "Sales manager KPIs",
          href: "/en/blog/kpi-menedzhera-prodazh/",
        },
      ],
    },
    {
      title: "Solution types: don’t confuse a portal with a funnel",
      level: 2,
      paras: [
        "Modular and custom platforms are built for large holdings — expensive and slow. Boxed or off-the-shelf options go live faster, but a non-standard process still needs extra setup.",
        "SaaS (“CRM as a service”) means you pay for features and seats: amoCRM, Pipedrive, and similar tools. Separate from that are corporate portals like Bitrix24, where CRM is one block next to tasks and messaging.",
        "Heavy international stacks (Salesforce and other enterprise suites) scale well and have deep ecosystems, but they need budget for rollout and admins. For SMBs they’re often overkill at the start.",
      ],
      lists: [
        {
          intro: "What to compare:",
          items: [
            "a funnel and deal card that fit your cycle",
            "integrations: site, telephony, email, messengers, 1C/warehouse",
            "a mobile app for field teams",
            "access rights and an action audit trail",
            "reports and an API that don’t require “only via an integrator”",
            "cost as your user count grows",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Brand lists from 2020 reviews (Creatio/bpm’online, Megaplan, and so on) mark a product class — not a forever scorecard. Before you buy, check current pricing, data localization, and niche reviews.",
        },
      ],
    },
    {
      title: "How to choose without a magic scorecard",
      level: 2,
      paras: [
        "Put the process on paper first: stages, required fields, who assigns tasks, what counts as a won deal. Then demo two or three systems on your scenarios — not someone else’s screenshot.",
        "Count total cost of ownership: licenses + rollout + integrations + training. A cheap plan with expensive custom work often costs more than a mid-tier product that works out of the box.",
        "A pilot with one team beats a big “launch everything tomorrow.” Success means deals live in the system every day — not a polished dashboard once a month.",
      ],
      lists: [
        {
          intro: "Checklist before you pay:",
          items: [
            "funnel described and agreed with sales",
            "someone owns the CRM playbook",
            "key integrations verified",
            "a clear path to migrate old contacts",
            "a training and data-entry control plan",
          ],
        },
      ],
      links: [
        {
          label: "Dashboard",
          href: "/en/blog/dashboard/",
        },
        {
          label: "Project manager",
          href: "/en/blog/project-manager/",
        },
      ],
    },
  ],
  closing: [
    "A CRM wins not by first place in someone else’s scorecard, but by fitting your deal cycle and the team’s discipline. Pick the system class for your scale, run demos on your scenarios, and roll out the process — software only records it.",
  ],
  related: [
    "skvoznaya-analitika",
    "kpi-menedzhera-prodazh",
    "dashboard",
    "project-manager",
    "formy-zahvata",
    "virtualnyy-nomer",
  ],
};
