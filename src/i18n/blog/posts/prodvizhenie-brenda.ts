import type { BlogPost } from "../../../data/blog";

/** EN overlay for prodvizhenie-brenda — same structure as RU JSON. */
export const prodvizhenieBrendaEn: BlogPost = {
  slug: "prodvizhenie-brenda",
  title: "How to start promoting a brand: goals, SMART, and SWOT",
  date: "2020-12-04",
  category: "Digital marketing",
  cover: "/images/blog/prodvizhenie-brenda/cover-en.webp",
  excerpt:
    "Where to begin brand promotion online: how a goal differs from a task, how to set SMART goals, which mistakes to avoid, and why SWOT comes before channel budget.",
  lead: [
    "Brand promotion without a strategy quickly becomes a pile of activity: posts just to look busy, articles with no goal, ads with no economics. Online follows the same rules as offline: result first, then the task list.",
    "Goal vs task, SMART framing, common mistakes, and SWOT as a way not to ignore the market. Personal expert brands and local offline businesses have separate pieces.",
  ],
  faq: [
    {
      q: "How does a goal differ from a task?",
      a: "A goal is the end result (awareness, leads, market share). Tasks are strategy steps: content, SEO, ads, PR. Without a goal, tasks turn into busywork.",
    },
    {
      q: "What is a SMART goal?",
      a: "Specific, Measurable, Achievable, Relevant, Time-bound: the goal is concrete, measurable, realistic, tied to the business, and has a deadline.",
    },
    {
      q: "Why run a SWOT for a brand?",
      a: "To see strengths/weaknesses, opportunities, and threats before picking channels. Otherwise budget goes to familiar tools, not the ones you need.",
    },
    {
      q: "Is this the same as a personal brand?",
      a: "No. Personal brand is about the expert as a person. Here — about the company mark. They often reinforce each other, but goals and KPIs differ.",
    },
    {
      q: "How long should I wait for SEO effect in a brand plan?",
      a: "Site and semantics prep — about a month. Noticeable growth of non-brand positions is planned for 2–6 months. Brand in search also grows from PR/ads, not SEO alone.",
    },
    {
      q: "Can I go into every channel at once?",
      a: "Better 1–2 priority channels for the goal and resources. Scale after the first measurable results.",
    },
    {
      q: "What mistakes are most common?",
      a: "Vague goal, KPIs with no deadline, copying competitors without your own position, confusing activity with results, ignoring economics (CPA/ROMI).",
    },
  ],
  sections: [
    {
      title: "Goal and tasks: don’t mix them up",
      level: 2,
      paras: [
        "A goal is the point the business moves toward: for example a steady lead flow under a recognizable name, or growth in branded query share. A task is a path element: a content series, an ad launch, review work.",
        "The order is simple: lock the result → pick a strategy → break into tasks. If you start with “we need more SEO articles” without “why and by when” — the strategy hasn’t started.",
      ],
      lists: [
        {
          intro: "Example chain:",
          items: [
            "goal — growth in qualified traffic and engagement over a quarter",
            "tasks — landing clusters, content plan, social presence under the offer",
            "metrics — visits, goals, brand share, CPA/ROMI where fit.",
          ],
        },
      ],
    },
    {
      title: "SMART goals for promotion",
      level: 2,
      paras: [
        "SMART isn’t “magic” — it’s a filter against fuzzy wishes like “become more known”. Each goal should answer: what exactly, how we’ll measure, whether resources allow it, why the business needs it, by which date.",
        "SEO-track example: “in 6 months reach N visits/day on target clusters” — only if an audit shows it’s achievable. Prep work takes weeks or ~a month; core ranking growth is planned for 2–6 months, not “TOP in a week”.",
      ],
      lists: [
        {
          intro: "SMART check:",
          items: [
            "Specific — the result is clear",
            "Measurable — there is a number and a data source",
            "Achievable — resources and market allow it",
            "Relevant — tied to money/strategy",
            "Time-bound — deadline and control points exist.",
          ],
        },
      ],
      links: [
        {
          label: "Marketing ROI",
          href: "/en/blog/roi-marketinga/",
        },
      ],
    },
    {
      title: "Mistakes worth avoiding",
      level: 2,
      paras: [
        "A common trap is optimizing activity instead of results: post count grows, leads don’t. Second — setting a competitor’s goals, not yours (different budget, different product).",
        "Third — ignoring time and attribution: brand and SEO aren’t measured by one day after publish. Fourth — launching everything at once with no priority and no owner for metrics.",
      ],
      lists: [
        {
          intro: "Red flags:",
          items: [
            "a goal with no number and deadline",
            "KPIs only “reach” when the goal is sales",
            "budget with no link to allowed CPA",
            "copy-paste of someone else’s tone of voice.",
          ],
        },
      ],
    },
    {
      title: "SWOT before choosing channels",
      level: 2,
      paras: [
        "SWOT helps assemble the picture: strengths (product, service, expertise), weaknesses (awareness, site, reviews), market opportunities and threats (competitors, season, regulation).",
        "The point of the review is to amplify advantages and cut risks before spending budget. The same frame helps for a single tool — SEO, ads, or social — once the goal and deadline are already SMART.",
      ],
      links: [
        {
          label: "Personal brand on social",
          href: "/en/blog/lichnyy-brend/",
        },
        {
          label: "Branded traffic",
          href: "/en/blog/brendovyy-trafik/",
        },
      ],
    },
  ],
  closing: [
    "Starting brand promotion means locking a goal, breaking it into SMART tasks, and checking reality with SWOT. Channels and budget connect after that — not instead.",
  ],
};
