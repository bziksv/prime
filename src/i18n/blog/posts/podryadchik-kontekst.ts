import type { BlogPost } from "../../../data/blog";

/** EN overlay for podryadchik-kontekst — same structure as RU JSON. */
export const podryadchikKontekstEn: BlogPost = {
  slug: "podryadchik-kontekst",
  title: "How to choose a paid search contractor",
  date: "2018-12-06",
  category: "Paid search",
  cover: "/images/blog/podryadchik-kontekst/cover-en.webp",
  excerpt:
    "How to tell that a Direct and Google Ads contractor works for results: traffic and goals in Metrika/Analytics, economics (ROI, CPA, LTV), brief and reports — and when weak numbers aren’t yet a reason to switch agencies.",
  lead: [
    "You hand paid search to a contractor so you don’t live in the accounts — and a month later you see “lots of clicks” with no leads, or silence. Without your own metrics and brief it’s hard to tell a normal ramp from a failure.",
    "Below: what to watch in analytics, how to count payback and customer cost, which brief and reporting to set, and which exceptions show up in the first months. Finding a marketer in general is a separate piece; here the focus is controlling paid search itself.",
  ],
  faq: [
    {
      q: "How is this different from finding a marketer?",
      a: "That piece covers agency vs in-house and skill stacks. Here — how numbers and process show a Direct/Ads contractor runs the channel honestly.",
    },
    {
      q: "Which systems should I watch?",
      a: "Yandex Metrika and/or Google Analytics with goals, plus Direct and Ads accounts. Client access is required.",
    },
    {
      q: "What’s a “normal” ROI?",
      a: "There’s no universal figure. Watch dynamics vs your margin and deal cycle — not someone else’s case from a pitch deck.",
    },
    {
      q: "How long should I wait for results?",
      a: "The first weeks are data and fixes. If after two or three months with a clear brief and budget there’s no movement toward KPI — review hypotheses and the contractor.",
    },
    {
      q: "Do I need weekly micro-control?",
      a: "Usually a monthly plan and a regular report are enough. Daily oversight slows work when there’s no incident.",
    },
    {
      q: "Is weak revenue always the agency’s fault?",
      a: "No. Season, a fuzzy brief, a weak site or offer, a narrow niche. But no hypotheses and opaque reports are already a red flag.",
    },
    {
      q: "What should I require in the contract?",
      a: "Access, scope of work, lead and KPI definitions, report deadlines, budget rules. A ranking guarantee with no metrics is empty noise.",
    },
  ],
  sections: [
    {
      title: "Why you need your own control frame",
      level: 2,
      paras: [
        "The contractor manages bids and ads; you know deal economics. Without analytics access and KPIs you judge the work by feelings and pretty account screenshots.",
        "The memo below isn’t a brief replacement — it’s a checklist: traffic → economics → brief/reports → exceptions when numbers aren’t a verdict yet.",
      ],
      links: [
        {
          label: "How to find a marketer",
          href: "/en/blog/nayti-marketologa/",
        },
        {
          label: "Client reporting",
          href: "/en/blog/otchet-klientu/",
        },
      ],
    },
    {
      title: "Visit and goal dynamics",
      level: 2,
      paras: [
        "Check Metrika and Analytics yourself: sessions from paid search, bounce, goals (lead, call, payment). A wide catalog needs a wider keyword set; a narrow service needs phrase precision — not reach for reach’s sake.",
        "Growing visits without growing target actions means check relevance and the landing — not only “tweak bids.”",
      ],
      links: [
        {
          label: "Ad campaign analysis",
          href: "/en/blog/analiz-reklamnoy-kampanii/",
        },
        {
          label: "Site before advertising",
          href: "/en/blog/sayt-pered-reklamoy/",
        },
      ],
    },
    {
      title: "Economics: ROI, CPA, LTV",
      level: 2,
      paras: [
        "Paid search is closer to fast leads than accumulating SEO, but payback still depends on margin and deal cycle. If spend stays above its profit contribution past a reasonable test window — review the channel and the contractor.",
        "ROI is handy as (profit − ad spend) / spend × 100%. Round-number examples illustrate the method — not an industry benchmark.",
        "For repeat purchases compare CPA with LTV, or gross profit per customer over the horizon you actually see. “CPA well below LTV” depends on margin; the “three times” rule from old guides is a rough heuristic, not law.",
      ],
      lists: [
        {
          intro: "Minimum numbers in the report:",
          items: [
            "spend and clicks/impressions by campaign",
            "goals and CPA/CPL",
            "dynamics vs the prior period",
            "what changed and why",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Direct budget",
          href: "/en/blog/byudzhet-yandeks-direkt/",
        },
        {
          label: "Media plan",
          href: "/en/blog/mediaplan/",
        },
      ],
    },
    {
      title: "Brief, reporting, and the monthly plan",
      level: 2,
      paras: [
        "Without a goal (“leads at CPL up to N,” “sales with attribution”) the contractor optimizes what’s easy to show: cheap clicks or broad reach.",
        "A healthy cycle: brief → monthly work plan → access → regular report with conclusions and the next step. When KPIs rise — scale; when they drop — change hypotheses, not only “need more budget.”",
        "Micromanaging every click hurts. Escalate when there are no reports, no hypotheses, or the account is locked from you.",
      ],
    },
    {
      title: "When weak numbers aren’t a verdict yet",
      level: 2,
      paras: [
        "The first month in a narrow niche goes to the keyword set and negatives — expect transparent structure progress, not miracle ROI.",
        "A fuzzy brief (“more sales”) and seasonal dips distort the picture. Lock seasonality and the lead definition early.",
        "A red flag isn’t a one-off loss — it’s no fix plan, refusal to explain numbers, and guarantees with no metrics. Then look for another team.",
      ],
      links: [
        {
          label: "Paid search myths",
          href: "/en/blog/zabluzhdeniya-konteksta/",
        },
      ],
    },
  ],
  closing: [
    "Open analytics and the contractor’s latest report: if you see goals, CPA dynamics, and a monthly hypothesis list — control is already stronger than arguing “expensive/cheap” by feel.",
  ],
  related: [
    "nayti-marketologa",
    "otchet-klientu",
    "analiz-reklamnoy-kampanii",
    "byudzhet-yandeks-direkt",
    "mediaplan",
    "didzhital-agentstvo",
  ],
};
