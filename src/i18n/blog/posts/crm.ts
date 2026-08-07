import type { BlogPost } from "../../../data/blog";

/** EN overlay for crm — same structure as RU JSON. */
export const crmEn: BlogPost = {
  slug: "crm",
  title: "CRM system: how to choose — not chase a “ranking”",
  date: "2020-02-26",
  category: "Internet marketing",
  cover: "/images/blog/crm/cover-en.webp",
  excerpt:
    "What a CRM is, how boxed, cloud, and “portal with CRM” differ, and how to compare Bitrix24, amoCRM, and peers — without a forever 2020 top list or magic quadrants.",
  lead: [
    "CRM (Customer Relationship Management) tracks clients, deals, and touchpoints: who the lead is, which funnel stage, what was promised, and how it ended. Without it, sales live in chats and managers’ heads.",
    "“Best CRM rankings” age fast: tariffs, modules, and market leaders shift. Below — solution types and selection criteria for your process. We don’t treat 2019 Gartner spots or price lists as eternal truth.",
  ],
  faq: [
    {
      q: "Is a CRM required for a small business?",
      a: "If you have more than one manager or lead channel — almost always yes. Otherwise requests and repeat sales get lost. At the start a simple cloud funnel is enough.",
    },
    {
      q: "Bitrix24 or amoCRM?",
      a: "Depends on the job. amoCRM is often chosen for “sales and funnel.” Bitrix24 — when you also need a portal: tasks, chats, drive, sometimes 1C. Compare against your process, not ad slogans.",
    },
    {
      q: "Boxed or cloud?",
      a: "Cloud — faster start, less of your own infra. Boxed/on-prem — data control and custom work, but pricier to run. Seat-based SaaS is the most common SMB path.",
    },
    {
      q: "Is Excel enough instead of a CRM?",
      a: "For one person and dozens of deals — sometimes. Once you get duplicate leads, stages, and reports — Excel breaks.",
    },
    {
      q: "Where should implementation start?",
      a: "Describe the funnel and required fields, connect site/telephony/email, train managers to run deals only in the CRM. Without discipline the software is useless.",
    },
  ],
  sections: [
    {
      title: "Why a business needs a CRM",
      level: 2,
      paras: [
        "One client card: call history, emails, invoices, and the next step. Leadership sees the funnel and bottlenecks; marketing sees lead quality by channel.",
        "Tied to the site and ads, you get an end-to-end picture: which channel brought the deal — not only the click. Without fill discipline, reports lie.",
      ],
      lists: [
        {
          intro: "Minimum value from rollout:",
          items: [
            "leads aren’t lost between managers;",
            "deal stages are transparent;",
            "tasks and reminders aren’t in private chats;",
            "you can report on revenue and refusals.",
          ],
        },
      ],
      links: [
        {
          label: "End-to-end analytics",
          href: "/blog/skvoznaya-analitika/",
        },
        {
          label: "Sales manager KPIs",
          href: "/blog/kpi-menedzhera-prodazh/",
        },
      ],
    },
    {
      title: "Solution types: don’t confuse “portal” and funnel",
      level: 2,
      paras: [
        "Modular and custom platforms are built for holdings — expensive and slow. Boxed/typical — faster, but a non-standard process needs extra setup.",
        "SaaS (“CRM as a service”) — you pay for features and seats: amoCRM, Pipedrive, and peers. Separate are “corporate portals” like Bitrix24, where CRM is one block next to tasks and comms.",
        "Heavy international stacks (Salesforce and enterprise class) scale well and have deep ecosystems, but need budget for rollout and admins. For SMB they’re often overkill at the start.",
      ],
      lists: [
        {
          intro: "What to compare:",
          items: [
            "funnel and deal card that fit your cycle;",
            "integrations: site, telephony, email, messengers, 1C/warehouse;",
            "mobile app for field teams;",
            "access rights and action audit;",
            "reports and API without “only via an integrator”;",
            "cost of growing user count.",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Brand lists from 2020 reviews (Creatio/bpm’online, Megaplan, etc.) mark a product class — not a forever top. Before buying, check current tariffs, data localization, and niche reviews.",
        },
      ],
    },
    {
      title: "How to choose without a “magic ranking”",
      level: 2,
      paras: [
        "Process on paper first: stages, required fields, who assigns tasks, what counts as a won deal. Then demo 2–3 systems on your scenarios — not on someone else’s screenshot.",
        "Count TCO: licenses + rollout + integrations + training. A cheap tariff with expensive custom work is often pricier than a “mid” out of the box.",
        "A pilot in one team beats a big “launch everything tomorrow.” Success = deals live in the system daily — not a pretty dashboard once a month.",
      ],
      lists: [
        {
          intro: "Checklist before paying:",
          items: [
            "funnel described and agreed with sales;",
            "someone owns the CRM playbook;",
            "key integrations checked;",
            "old-contact migration path is clear;",
            "training and fill-control plan exists.",
          ],
        },
      ],
      links: [
        {
          label: "Dashboard",
          href: "/en/blog/dashboard/",
        },
        {
          label: "Project Manager",
          href: "/blog/project-manager/",
        },
      ],
    },
  ],
  closing: [
    "A CRM wins not by “#1 in someone else’s ranking,” but by fitting your deal cycle and team discipline. Pick the system class for your scale, run demos on your scenarios, and roll out the process — software only records it.",
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
