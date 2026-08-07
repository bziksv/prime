import type { BlogPost } from "../../../data/blog";

/** EN overlay for veb-analitik — same structure as RU JSON. */
export const vebAnalitikEn: BlogPost = {
  slug: "veb-analitik",
  title: "Web analyst: duties, skills, and career",
  date: "2019-12-04",
  category: "SEO",
  cover: "/images/blog/veb-analitik/cover-en.webp",
  excerpt:
    "Who a web analyst is, what their duties are, which skills matter, where to learn, how to build a career, and how the role differs from “just export a report from analytics”.",
  lead: [
    "A web analyst figures out how people behave on the site and in ad channels, and turns numbers into decisions: what to fix, what to test, where to send budget. It isn’t “download a report and done”.",
    "Below — duties, skills, learning, workplaces, a career ladder, and pros/cons of the role. Salary figures on the market float — check current openings; here the job content matters more.",
  ],
  faq: [
    {
      q: "Is a web analyst the same as an SEO specialist?",
      a: "No. SEO leans harder into search and content/tech. An analyst looks wider at funnel, channels, experiments, and reporting; skills overlap.",
    },
    {
      q: "Is knowing Yandex Metrica enough?",
      a: "As a start — yes. Next you need goals, segments, GA/peers, marketing basics, A/B, and explaining conclusions to the business.",
    },
    {
      q: "Is English required?",
      a: "Technical English helps a lot: tool docs, courses, research.",
    },
    {
      q: "Where should a beginner start?",
      a: "Install counters on a training/own project, set goals, break down traffic sources and bounces, package 2–3 mini-cases with recommendations.",
    },
    {
      q: "Where do analysts work?",
      a: "In-house (especially larger companies), in agencies/studios, on projects as freelancers. Small business more often hires point-wise when sales drop.",
    },
    {
      q: "Must an analyst “raise TOP”?",
      a: "Not as a one-button KPI. They show what blocks conversion and growth; SEO/content/dev implement. Search visibility timelines are separate months of work.",
    },
    {
      q: "Is a technical degree required?",
      a: "Not mandatory, but systems thinking and numbers matter. Employers look at practice and a case portfolio.",
    },
    {
      q: "What makes the job hard?",
      a: "Blurry briefs, fights over “we already did everything right”, monotonous reports, and load from non-analytics tasks.",
    },
  ],
  sections: [
    {
      title: "Who a web analyst is",
      level: 2,
      paras: [
        "A specialist who collects and interprets visitor and channel data to raise site effectiveness: traffic quality, conversion, UX. Reducing the role to “someone with analytics access” is a mistake.",
        "The goal is clear conclusions and priorities for marketing, product, and engineering: what we measured, what we changed, what to test next.",
      ],
      lists: [
        {
          intro: "In short:",
          items: [
            "data → hypotheses → recommendations → verification;",
            "not a report for the report’s sake;",
            "tied to business goals, not only “visits”.",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Metrica: install",
          href: "/en/blog/metrika-ustanovka/",
        },
        {
          label: "Google Analytics",
          href: "/en/blog/google-analytics/",
        },
      ],
    },
    {
      title: "Duties",
      level: 2,
      paras: [
        "Choosing and setting up data tools, goals and events, behavior breakdown (bounces, paths, forms), funnel audit, A/B tests, site KPIs, reports for different roles, improvement proposals, alignment with market research, and strategy input.",
        "In practice the list depends on the company: somewhere the analyst sits closer to performance, somewhere to product. Translating numbers into the client’s language without losing accuracy matters.",
      ],
      lists: [
        {
          intro: "Typical task set:",
          items: [
            "counters, goals, call tracking;",
            "segments and sources;",
            "UX/offer hypotheses;",
            "A/B and effect measurement;",
            "regular and ad-hoc reports.",
          ],
        },
      ],
      links: [
        {
          label: "Goals in Metrica",
          href: "/en/blog/metrika-tseli/",
        },
        {
          label: "Goals in Google Analytics",
          href: "/en/blog/google-analytics-tseli/",
        },
        {
          label: "Site bounce rate",
          href: "/en/blog/otkazy-sayta/",
        },
      ],
    },
    {
      title: "Skills and learning",
      level: 2,
      paras: [
        "Base: Metrica and Google Analytics (or the company’s current stack), internet marketing basics, A/B, reporting, ideally call tracking and enough SEO/paid search to speak the same language. Technical English is a plus.",
        "You can learn via university/school courses, webinars, and practice: an up-to-date program and ≥ half practice matter. Books and case reviews help, but don’t replace your own projects with before/after numbers.",
      ],
      lists: [
        {
          intro: "Beginner start:",
          items: [
            "install a counter and goals;",
            "break down sources and landings;",
            "find 3 problems with evidence;",
            "propose fixes and a way to verify.",
          ],
        },
      ],
      links: [
        {
          label: "Content marketing analytics",
          href: "/en/blog/analitika-kontent-marketinga/",
        },
        {
          label: "Metrica isn’t working",
          href: "/en/blog/metrika-ne-rabotaet/",
        },
      ],
    },
    {
      title: "Career and the market",
      level: 2,
      paras: [
        "Larger companies keep analysts in-house or as teams; small business more often hires project-based. In agencies and studios the ladder is usually junior → middle → senior → lead → head of practice.",
        "Pay depends on experience, project scale, adjacent skills (SEO, paid, SQL/BI), and region. Currency figures from old articles age fast — check fresh openings and market ranges.",
      ],
      lists: [
        {
          intro: "What raises a candidate’s value:",
          items: [
            "cases with measurable effect;",
            "adjacent skills (SEO/ads);",
            "clear communication with non-analysts;",
            "backlog prioritization experience.",
          ],
        },
      ],
    },
    {
      title: "Pros and costs of the profession",
      level: 2,
      paras: [
        "Pros: visible business impact, room to grow, remote and flexible schedules possible, digital-role prestige, moves into adjacent fields (product, performance, SEO).",
        "Cons: resistance to change (“we’ve always done it this way”), unclear client briefs, blurry duty borders, monotony in some reports. A clear brief and agreed KPIs reduce friction.",
      ],
      lists: [
        {
          intro: "Takeaway:",
          items: [
            "the role is about data-driven decisions;",
            "practice and communication matter;",
            "the openings market is steady;",
            "don’t confuse a report with a result.",
          ],
        },
      ],
      notes: [
        {
          title: "Effect timelines",
          kind: "tip",
          text: "Analytics speeds up the right decisions. Search ranks after fixes still need time — often months of systematic work.",
        },
      ],
      links: [
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
    },
  ],
  related: [
    "metrika-ustanovka",
    "google-analytics",
    "metrika-tseli",
    "analitika-kontent-marketinga",
    "otkazy-sayta",
    "optimizatsiya-konversii",
  ],
};
