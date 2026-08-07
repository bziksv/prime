import type { BlogPost } from "../../../data/blog";

/** EN overlay for den-v-prime — same structure as RU JSON. */
export const denVPrimeEn: BlogPost = {
  slug: "den-v-prime",
  title: "Whose SEO life is good: a day at PRIME",
  date: "2016-11-25",
  category: "Internet marketing",
  cover: "/images/blog/den-v-prime/cover-en.webp",
  excerpt:
    "A light look from inside: what an ordinary day in a digital agency looks like — the commute, SEO and paid-search tasks, “new” projects, and a living team. An atmosphere snapshot, not today’s headcount.",
  lead: [
    "Clients often think SEO and paid search are “changed a line in the account”. From inside it’s a queue of tasks, CRM, testing hypotheses, and unpacking calls when something went wrong.",
    "Below — a humorous sketch of one morning at PRIME circa 2016: the road to the office, project triage, and team characters. Headcount and processes have changed since; the point is the same — people who carry projects, not “button magic”.",
  ],
  faq: [
    {
      q: "Is this the company’s official org chart?",
      a: "No. It’s an “office life” column with humor. Names and roles are a past snapshot — not the current staff list.",
    },
    {
      q: "Do the same people do SEO and paid search?",
      a: "In small teams they often overlap. Paid search is bids, negatives, and budgets; SEO is the site, content, and long ranking growth. Both need attention.",
    },
    {
      q: "Why compare a “new project” to a child?",
      a: "A growth metaphor: first empty tech and little traffic, then structure, texts, and systemic work. Prep takes weeks; a share of the core in TOP is planned over months — not launch day.",
    },
    {
      q: "Does the client only see a bid change?",
      a: "Often yes — outside you see the account result. Behind the scenes: strategies, limits, analytics, approvals, and fixing the site ↔ ads link.",
    },
    {
      q: "Why put this in the blog?",
      a: "To show the human outline of an agency: without “we’re the best” pathos, with the understanding that promotion is the team’s daily work.",
    },
  ],
  sections: [
    {
      title: "Morning before the monitor",
      level: 2,
      paras: [
        "The workday starts on the way: walking into the wind, on a bus, or in a taxi with route surprises. You reach the office already “charged” — in a good or ironic sense.",
        "Coffee on the road is a ritual, not a KPI. Inside waits the usual boot-up: CRM, browsers, messengers, task triage. Whoever arrives earlier gets a breath before the first wave of questions.",
        "Team talk jumps easily from everyday to absurd — that’s how tension drops before a dense day. Then back to projects: what’s in progress, what’s on fire, what waits for approval.",
      ],
      links: [
        {
          label: "Digital agency",
          href: "/en/blog/didzhital-agentstvo/",
        },
        {
          label: "Remote work",
          href: "/en/blog/udalennaya-rabota/",
        },
      ],
    },
    {
      title: "SEO, paid search, and “fresh” feedback",
      level: 2,
      paras: [
        "If SEO is the focus — the day is about structure, content, indexes, and long cycles. If there’s a lot of paid search — the brain fills fast with bid auctions, strategies, negatives, and budget caps. From outside it’s “tweaked a field”; from inside — constant control so money doesn’t leak.",
        "A new SEO project often arrives “empty”: few visitors, weak metadata, no clear semantics. The team’s job is to grow it: tech, texts, analytics. SERP effect accumulates; a noticeable share of the core in TOP is planned over 2–6 months after work starts — not “switched on and done”.",
        "Manager feedback after a client call is part of the job. Office folklore named it differently; the point is simple: unpack, fix, move on. No hysteria — and no illusion that everything is always perfect.",
        "In notes like this the team is always brighter than the staffing table: who brings snacks, who’s forever upbeat about the weather, who edits texts hard, who closes sales. People change; the link “specialists + managers + project ownership” stays the agency’s core.",
        "The column’s takeaway is the same as a good day at PRIME: we promote sites, hold channels, joke sometimes — and remember that behind report numbers are live tasks and live clients.",
      ],
      lists: [
        {
          intro: "What the client usually doesn’t see:",
          items: [
            "SEO and ads in parallel in one day;",
            "incident reviews after calls;",
            "growing an “empty” project from zero;",
            "internal role coordination;",
            "prep time — separate from TOP growth.",
          ],
        },
      ],
      links: [
        {
          label: "Why the site isn’t in TOP",
          href: "/en/blog/sayt-ne-v-top/",
        },
        {
          label: "SEO for small business",
          href: "/en/blog/seo-malyy-biznes/",
        },
      ],
    },
  ],
  related: [
    "didzhital-agentstvo",
    "seo-malyy-biznes",
    "sayt-ne-v-top",
    "udalennaya-rabota",
    "skvoznaya-analitika",
  ],
};
