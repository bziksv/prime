import type { BlogPost } from "../../../data/blog";

/** EN overlay for veb-analitik — same structure as RU JSON. */
export const vebAnalitikEn: BlogPost = {
  slug: "veb-analitik",
  title: "Web analyst: role, skills, and career path",
  date: "2019-12-04",
  category: "SEO",
  cover: "/images/blog/veb-analitik/cover-en.webp",
  excerpt:
    "What a web analyst does, which skills matter, where to learn, how careers usually grow, and why the job is more than exporting a Metrica report.",
  lead: [
    "A web analyst studies how people move through the site and paid channels, then turns that into decisions: what to fix, what to test, where budget should go. Pulling a dashboard is not the deliverable.",
    "Below: duties, skills, learning paths, where analysts sit, career steps, and the trade-offs of the role. Salary bands move fast — check live openings. What matters here is the shape of the work.",
  ],
  faq: [
    {
      q: "Is a web analyst the same as an SEO specialist?",
      a: "No. SEO leans into search, content, and tech. An analyst spans the funnel, channels, experiments, and reporting. The skill sets overlap, but the jobs are not identical.",
    },
    {
      q: "Is Yandex Metrica enough?",
      a: "Enough to start. Next come goals, segments, GA or peers, marketing basics, A/B testing, and explaining findings to non-analysts.",
    },
    {
      q: "Do you need English?",
      a: "Technical English helps a lot: tool docs, courses, and research.",
    },
    {
      q: "Where should a beginner start?",
      a: "Put counters on a training or personal project, set goals, break down sources and bounce, then ship two or three mini-cases with recommendations.",
    },
    {
      q: "Where do analysts work?",
      a: "In-house (especially larger companies), in agencies and studios, or freelance on projects. Small businesses more often hire for a short engagement when sales slip.",
    },
    {
      q: "Is the analyst responsible for search rankings?",
      a: "Not as a one-button KPI. They show what blocks conversion and growth; SEO, content, and engineering ship the fixes. Organic visibility still takes its own timeline — often months of steady work after promotion starts.",
    },
    {
      q: "Do you need a technical degree?",
      a: "Not required. Systems thinking and comfort with numbers matter more. Employers weigh practice and a case portfolio.",
    },
    {
      q: "What makes the role hard?",
      a: "Vague briefs, debates that “we already did everything right,” repetitive reporting, and work dumped outside analytics.",
    },
  ],
  sections: [
    {
      title: "Who a web analyst is",
      level: 2,
      paras: [
        "Someone who collects and interprets visitor and channel data to improve site outcomes: traffic quality, conversion, UX. The role is not “the person with Metrica access.”",
        "The real output is clear conclusions and priorities for marketing, product, and engineering: what you measured, what you changed, what to test next.",
      ],
      lists: [
        {
          intro: "In short:",
          items: [
            "data → hypotheses → recommendations → validation",
            "not a report for its own sake",
            "tied to business goals, not only session counts",
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
        "Choosing and wiring data tools, goals and events, behavior analysis (bounce, paths, forms), funnel audits, A/B tests, site KPIs, reports for different roles, improvement proposals, checks against market research, and input into strategy.",
        "The day-to-day mix depends on the company: closer to performance in some places, closer to product in others. Translating numbers into the stakeholder’s language without losing accuracy is part of the job.",
      ],
      lists: [
        {
          intro: "Typical task set:",
          items: [
            "counters, goals, call tracking",
            "segments and sources",
            "UX and offer hypotheses",
            "A/B tests and impact measurement",
            "regular and ad-hoc reporting",
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
        "Core stack: Metrica and Google Analytics (or whatever the company uses), internet marketing basics, A/B testing, reporting, ideally call tracking, and enough SEO/paid search to speak the same language. Technical English is a plus.",
        "Paths include university or school courses, webinars, and hands-on work. Prefer a current curriculum with at least half practice. Books and case reviews help, but they do not replace your own before/after projects.",
      ],
      lists: [
        {
          intro: "Beginner checklist:",
          items: [
            "install a counter and goals",
            "break down sources and landings",
            "find three problems with evidence",
            "propose fixes and a way to verify them",
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
        "Larger companies keep analysts in-house or as teams; small business more often hires by project. In agencies and studios the ladder is usually junior → middle → senior → lead → head of practice.",
        "Pay tracks experience, project scale, adjacent skills (SEO, paid media, SQL/BI), and region. Figures from old articles age fast — check current openings and market ranges.",
      ],
      lists: [
        {
          intro: "What raises a candidate’s value:",
          items: [
            "cases with measurable impact",
            "adjacent skills (SEO / ads)",
            "clear communication with non-analysts",
            "experience prioritizing a backlog",
          ],
        },
      ],
    },
    {
      title: "Pros and costs of the role",
      level: 2,
      paras: [
        "Upsides: visible business impact, room to grow, remote and flexible schedules in many setups, a solid digital-role profile, and paths into product, performance, or SEO.",
        "Downsides: resistance to change (“we’ve always done it this way”), fuzzy client briefs, blurry duty borders, and monotony in some reporting. A clear brief and agreed KPIs cut a lot of friction.",
      ],
      lists: [
        {
          intro: "Takeaway:",
          items: [
            "the role is about decisions from data",
            "practice and communication matter",
            "demand for openings stays steady",
            "a report is not the same as a result",
          ],
        },
      ],
      notes: [
        {
          title: "Effect timelines",
          kind: "tip",
          text: "Analytics speeds up the right decisions. Search visibility after fixes still needs its own runway — often months of systematic work after promotion starts.",
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
