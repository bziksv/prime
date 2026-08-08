import type { BlogPost } from "../../../data/blog";

/** EN overlay for analitika-kontent-marketinga — same structure as RU JSON. */
export const analitikaKontentMarketingaEn: BlogPost = {
  slug: "analitika-kontent-marketinga",
  title: "Content marketing analytics: metrics and how to read them",
  date: "2021-01-15",
  category: "Digital marketing",
  cover: "/images/blog/analitika-kontent-marketinga/cover-en.webp",
  excerpt:
    "How to evaluate content marketing: reach, retention, shares, leads, and editorial ops metrics — without obsessing over likes or confusing this with installing a counter.",
  lead: [
    "Content without numbers becomes “we post because that’s what you do.” Analytics answers a different question: which format and topic move toward the goal — subscribe, lead, sale, or retention — and which only makes noise.",
    "Below: a metric frame — consumption, engagement and sharing, lead gen, and editorial ops. Installing analytics and building a dashboard are sibling topics; here the focus is what to measure and how not to get fooled by pretty stats.",
  ],
  faq: [
    {
      q: "Which metrics should a small project start with?",
      a: "Five to seven indicators under one goal: reach/visits to target URLs, finish rate or time, CTA CTR, leads, cost per content unit. The rest later.",
    },
    {
      q: "Are likes and views good KPIs?",
      a: "Usually helper signals. KPIs are why you write: leads, sales, retention, list growth. Views without a goal are easy to inflate with viral but useless pieces.",
    },
    {
      q: "How is this different from installing analytics?",
      a: "The counter is the collection tool. This article is about the indicator set and how to judge content. Without goals and tagging, the counter explains nothing alone.",
    },
    {
      q: "Do I need a separate dashboard?",
      a: "When there are more than two sources and a weekly report — yes. At the start a table plus analytics reports is enough. See the dashboard article.",
    },
    {
      q: "How do I compare a blog post and a social post?",
      a: "Don’t mix raw views across platforms. Compare contribution to one goal (lead, subscribe) and production cost per unit of result.",
    },
    {
      q: "What is content ROI?",
      a: "Effect (revenue/leads in money) versus cost to create and distribute. Rough — but better than “it felt like it worked.”",
    },
    {
      q: "How often should I pull metrics?",
      a: "Editorial ops — weekly; funnel and ROI — monthly/quarterly. A one-off spike after publish ≠ lasting effect.",
    },
    {
      q: "Can I judge SEO articles by traffic alone?",
      a: "Traffic is the entry. Also watch behavior, conversion to goal, and lead quality. Ranking growth is planned over 2–6 months — don’t confuse publishing a piece with “page one in a week.”",
    },
  ],
  sections: [
    {
      title: "Why measure content",
      level: 2,
      paras: [
        "Without metrics the editorial team optimizes taste: “pretty,” “long,” “like the competitor.” With metrics you get priority: what to amplify, what to cut, where to put author and design budget.",
        "Lock the channel goal first: blog traffic, leads, nurture, brand support, SEO demand. One article rarely covers everything — and the KPI set should reflect that.",
      ],
      lists: [
        {
          intro: "Typical traps:",
          items: [
            "measuring everything and deciding nothing",
            "comparing unlike platforms by raw views",
            "taking viral reach for a business result",
            "ignoring production cost",
          ],
        },
      ],
      links: [
        {
          label: "Content plan",
          href: "/en/blog/kontent-plan/",
        },
      ],
    },
    {
      title: "Consumption metrics: did it reach people",
      level: 2,
      paras: [
        "The base layer — how many people saw and opened the piece. On the site: visits and unique URL views; in email: opens/CTR; on social: reach and link clicks (with caveats for algorithms and platform limits).",
        "Watch not only absolutes but the share of target traffic: search, email, ads. A bot spike or a random share with no site clicks is a weak signal.",
      ],
      lists: [
        {
          intro: "Site minimum:",
          items: [
            "views and users by URL",
            "sources (search / direct / referral / campaigns)",
            "bounce and depth — carefully, in context of page type",
            "return visits to key pieces",
          ],
        },
      ],
      links: [
        {
          label: "Installing Yandex Metrika",
          href: "/en/blog/metrika-ustanovka/",
        },
      ],
    },
    {
      title: "Retention, engagement, and sharing",
      level: 2,
      paras: [
        "“Reached” ≠ “read and reacted.” For long copy: finish rate, time on page, scroll (if set), clicks on TOC and internal links. For video: completion %, not starts alone.",
        "Shares and saves show willingness to recommend. Not a KPI by themselves, but a good “pass-along” signal — especially if referral traffic grows after.",
      ],
      lists: [
        {
          intro: "What to log:",
          items: [
            "finish rate / time / scroll events",
            "CTA and anchor clicks",
            "comments and meaningful replies (quality over quantity)",
            "shares/saves and referral traffic after publish",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "High reach with zero site clicks and zero leads means rethink format or offer — not “success for likes.”",
        },
      ],
    },
    {
      title: "Leads, sales, and funnel contribution",
      level: 2,
      paras: [
        "Business layer: leads, signups, demos, purchases attributed to content. You need analytics goals and an agreed attribution model (at least last click plus common sense on assisted).",
        "Separate “content brought” from “content helped.” A mid-funnel article may not give a direct lead but lower ad CAC or speed a deal — that’s a result if you can see it in CRM.",
      ],
      lists: [
        {
          intro: "Practical set:",
          items: [
            "goals: form, phone click, catalog visit",
            "URL → goal conversion",
            "lead quality (if CRM statuses exist)",
            "revenue/deals with a content touch in the period",
          ],
        },
      ],
      links: [
        {
          label: "Conversion rate optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "Editorial ops metrics",
      level: 2,
      paras: [
        "Team throughput: how many pieces on time, average brief-to-publish cycle, revision share, cost of author/editor/design hour. Without that a “cheap” zero-effect post looks better than an expensive guide that closes deals.",
        "ROI is rough: (value of results − cost) / cost, or cost per content lead versus other channels. Imperfect numbers — but they cut the illusion of a “free” blog.",
      ],
      lists: [
        {
          intro: "Ops:",
          items: [
            "plan vs published",
            "production time",
            "costs (people + freelancers + distribution)",
            "cost per result unit (lead / qualified lead)",
            "share of updating old URLs vs new (often cheaper to improve than write from scratch)",
          ],
        },
      ],
      links: [
        {
          label: "Updating content",
          href: "/en/blog/obnovlenie-kontenta/",
        },
        {
          label: "Content manager",
          href: "/en/blog/kontent-menedzher/",
        },
      ],
    },
    {
      title: "How to turn numbers into decisions",
      level: 2,
      paras: [
        "Build one table or a simple dashboard: URL / topic / format / goal / visits / engagement / conversion / cost / conclusion. Weekly: what to amplify, stop, or update.",
        "For SEO pieces set a horizon: prep and publish — weeks; building rankings and steady traffic — planned months (often 2–6 after work starts), not “article live — instant page one.”",
      ],
      lists: [
        {
          intro: "Report ritual:",
          items: [
            "one goal for the period",
            "top and bottom pieces",
            "hypotheses for the next sprint",
            "what to reuse (series, updates, email)",
          ],
        },
      ],
      links: [
        {
          label: "Business dashboard",
          href: "/en/blog/dashboard/",
        },
        {
          label: "Client report",
          href: "/en/blog/otchet-klientu/",
        },
      ],
    },
  ],
  related: [
    "kontent-plan",
    "metrika-ustanovka",
    "dashboard",
    "obnovlenie-kontenta",
    "optimizatsiya-konversii",
  ],
};
