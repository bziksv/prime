import type { BlogPost } from "../../../data/blog";

/** EN overlay for kpi-menedzhera-prodazh — same structure as RU JSON. */
export const kpiMenedzheraProdazhEn: BlogPost = {
  slug: "kpi-menedzhera-prodazh",
  title: "Sales manager KPIs: how to set and control them",
  date: "2019-06-04",
  category: "Digital marketing",
  cover: "/images/blog/kpi-menedzhera-prodazh/cover-en.webp",
  excerpt:
    "Seller KPIs: why introduce them, which metrics to pick, how to pay bonuses, where the system breaks (fake clients, salary ceilings), and how to control in CRM.",
  lead: [
    "KPIs (key performance indicators) for a sales manager link pay to company results: revenue, margin, deal quality — not only “number of calls.”",
    "Why the system is needed, example metrics and pay structures, rules (no more than 10–15 indicators), typical gaming of the metrics, and control — below. There’s no universal formula — fit it to your deal cycle and margin.",
  ],
  faq: [
    {
      q: "How many KPIs should I set?",
      a: "Few and purposeful. More than 10–15 turns the job into filling reports.",
    },
    {
      q: "Are calls and emails the main KPI?",
      a: "Only supporting. The main thing is closed deals and economics. Activity without sales isn’t a result.",
    },
    {
      q: "Do I need a salary ceiling for sellers?",
      a: "Often harmful: top performers lose drive, juniors see a glass ceiling. Better a model where sales growth pays both employee and company.",
    },
    {
      q: "Is fixed pay with no variable OK?",
      a: "Possible at start/training. Long-term, no link to results makes sales pace harder to keep — but “pure commission” with no base also breaks service.",
    },
    {
      q: "How do I catch KPI gaming?",
      a: "Reconcile with CRM, contract, payment; ban “friends as clients” for volume; one discount rulebook.",
    },
    {
      q: "What if the plan fails two months in a row?",
      a: "Root-cause with the manager and HR: market, product, skill, unrealistic plan. Not only a fine — sometimes goals or training need a reset.",
    },
  ],
  sections: [
    {
      title: "Why introduce KPIs",
      level: 2,
      paras: [
        "The goal is to motivate sales growth and give leadership a clear picture per seller. Manager pay should logically track the profit/revenue they bring.",
        "Activity (calls, emails) helps diagnose the funnel, but not as the only criterion: closed and margin-positive deals matter — not “hours on the phone.”",
      ],
    },
    {
      title: "Example schemes and metrics",
      level: 2,
      paras: [
        "Bonus schemes: tiers from volume; two-stage payout (part now, part after retention); percent of first-period margin; non-cash rewards for hitting plan (gear owned after delivery).",
        "Metric groups: effectiveness (deal time, touch count with upper/lower bounds, win-rate, inbound reply speed); quality (repeat buys, ticket growth, complaints); outcome (average ticket, margin/revenue, receivables).",
      ],
      lists: [
        {
          intro: "Build rules:",
          items: [
            "company profit above a “pretty” bonus;",
            "goals concrete and measurable in CRM;",
            "few indicators;",
            "no ceiling that kills strong ambition.",
          ],
        },
      ],
      notes: [
        {
          title: "Sudden plan jumps",
          text: "Sharp goal inflation often drops revenue and pushes sellers to leave. Raise the bar on history and market — not wishful thinking.",
          kind: "tip",
        },
      ],
    },
    {
      title: "How the system breaks — and how to control",
      level: 2,
      paras: [
        "Typical schemes: impossible promises to close a deal; “clients” from friends to hit volume. Fix — one contract/discount standard and proof the deal is real (payment, delivery).",
        "Control: CRM with live reporting, deal-entry rules, selective anomaly review. Spreadsheets and monthly reports are cheaper but easier to distort — reconcile with money.",
      ],
      lists: [
        {
          intro: "When KPIs are missed:",
          items: [
            "find causes and month history;",
            "talk with the manager;",
            "adjust goals or ownership area;",
            "train / reprioritize the funnel;",
            "if skill isn’t there — decide the people question honestly.",
          ],
        },
      ],
      links: [
        {
          label: "Ad metrics",
          href: "/en/blog/metriki-reklamy/",
        },
        {
          label: "End-to-end analytics",
          href: "/en/blog/skvoznaya-analitika/",
        },
        {
          label: "Client report",
          href: "/en/blog/otchet-klientu/",
        },
      ],
    },
  ],
  closing: [
    "Seller KPIs work when metrics are few, pay ties to margin/revenue, and gaming is blocked. Build the scheme for the deal cycle, control in CRM, and don’t confuse activity with results.",
  ],
  related: [
    "metriki-reklamy",
    "skvoznaya-analitika",
    "performance-marketing",
    "nayti-marketologa",
    "vygoranie-sotrudnikov",
    "menedzher-internet-magazina",
  ],
};
