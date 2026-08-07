import type { BlogPost } from "../../../data/blog";

/** EN overlay for kogortnyy-analiz — same structure as RU JSON. */
export const kogortnyyAnalizEn: BlogPost = {
  slug: "kogortnyy-analiz",
  title: "Cohort analysis in marketing: what it is and why it matters",
  date: "2019-12-23",
  category: "Analytics",
  cover: "/images/blog/kogortnyy-analiz/cover-en.webp",
  excerpt:
    "What a cohort is and how it differs from a segment: retention, LTV, channel ROI, and reading A/B over time — in Analytics/GA4 and spreadsheets, without promising “automatic magic.”",
  lead: [
    "Cohort analysis compares groups of people who did the same action in the same period — first session, first purchase, install — and watches how a metric changes over time.",
    "The payoff is clearer channel quality, LTV and ROI, and tests that hold up weeks later — not only yesterday’s CPA. Google Analytics Universal had a dedicated report; in GA4 cohorts live in Explorations and related reports — check tab names in the current UI.",
  ],
  faq: [
    {
      q: "How is a cohort different from a segment?",
      a: "A cohort is one unifying trait plus a start time (everyone who bought in January). A segment can combine many traits at once (spent >$100 and live in London).",
    },
    {
      q: "Which action should define the start of a cohort?",
      a: "Whatever matters to the business: first visit, signup, first purchase, install. That choice defines what retention means.",
    },
    {
      q: "Why use cohort analysis for ads?",
      a: "To see which channel brings people who return and pay later — not only a “cheap first click.”",
    },
    {
      q: "Can I run cohort analysis in GA4?",
      a: "Yes, via Explorations and related reports. Don’t expect a one-to-one Universal Analytics screen from 2019 guides.",
    },
    {
      q: "Do cohorts replace A/B tests?",
      a: "No. A/B compares variants now; cohorts show how a chosen group’s behavior stretches across weeks.",
    },
    {
      q: "Which cohort period should I pick?",
      a: "Day, week, or month — by purchase frequency. Little data — go wider; lots of data — you can go finer.",
    },
    {
      q: "Is LTV from cohorts 100% accurate?",
      a: "It’s an estimate from history. New products and season shift the picture — refresh the calc.",
    },
  ],
  sections: [
    {
      title: "Cohort vs segment",
      level: 2,
      paras: [
        "A cohort is people with one start event in a time window. Then you track one metric (retention, revenue, sessions) by cohort “age”: week 0, 1, 2…",
        "A segment answers “who are they now by a set of properties.” A cohort answers “how do people who started then behave.” Both tools matter; mixing them up is a common brief mistake.",
        "Analyst parameters: start event, cohort window size, observation horizon, comparison metric.",
      ],
      lists: [
        {
          intro: "Example:",
          items: [
            "segment: spent >$100 in January and live in London;",
            "cohort: everyone with a first purchase in January (then watch repeat purchases by month).",
          ],
        },
      ],
    },
    {
      title: "Acquisition channels and retention",
      level: 2,
      paras: [
        "Build a “first visits in a month” cohort, slice by channel (paid search, social, organic, email). Compare the share who returned and bought in 1–4 weeks.",
        "A channel with a cheap click but zero retention is often costlier than a slightly more expensive channel with repeat purchases. Cohorts show that better than yesterday’s report.",
        "Weak channels get fixed or cut; strong ones scale carefully — without forgetting lead quality.",
      ],
      links: [
        {
          label: "Ad metrics",
          href: "/en/blog/metriki-reklamy/",
        },
        {
          label: "Ad campaign analysis",
          href: "/en/blog/analiz-reklamnoy-kampanii/",
        },
      ],
    },
    {
      title: "LTV, ROI, and payback over time",
      level: 2,
      paras: [
        "From first-buyer cohorts you compute cumulative revenue and group ARPU (average revenue per user). Comparing cohorts from different start months estimates median LTV and room for acquisition cost.",
        "Channel ROI in month one is often understated: the customer is still in the funnel. A monthly cohort view shows when payback catches up — important for long deal cycles.",
        "The formulas stay the same — (revenue − cost) / cost; the value is the time and channel cut — not one “launch = success” cell.",
      ],
      notes: [
        {
          kind: "tip",
          text: "Without full-funnel analytics and CRM, revenue cohorts will be incomplete — at least join leads and payments.",
        },
      ],
    },
    {
      title: "Apps, A/B, and seasonality",
      level: 2,
      paras: [
        "For apps, an install cohort plus a source cut helps you not confuse “many installs” with living retention.",
        "A/B gives instant variant conversion; cohorts of A and B users show whether the effect holds weeks later. Otherwise you may pick a design that flared and burned out.",
        "Compare “arrived at New Year” vs “arrived in spring” cohorts: seasonality and promo promises change behavior.",
      ],
    },
    {
      title: "Where to look and how not to overcomplicate",
      level: 2,
      paras: [
        "In GA4 — Explorations (cohort template, funnels, path), plus exports to Sheets or BI when needed. Don’t expect “Google Sheets will calculate everything” without your model.",
        "Start with one retention metric and one channel cut. When the team can read the table — add LTV and tests.",
        "Cohorts don’t replace daily CPA control: they’re a mid- and long-horizon view next to operational paid search.",
      ],
      lists: [
        {
          intro: "Remember:",
          items: [
            "one start event plus time;",
            "a metric over time — not only “yesterday”;",
            "compare channels by retention and LTV;",
            "GA4 is not a Universal Analytics 2019 screenshot;",
            "A/B plus cohorts beat either alone.",
          ],
        },
      ],
      links: [
        {
          label: "GA4 (Google Analytics 4)",
          href: "/en/blog/ga4/",
        },
      ],
    },
  ],
  closing: [
    "Build one first-visit cohort for last month, slice by channel, and watch retention at 2–4 weeks — the fastest way to separate cheap traffic from traffic that pays again.",
  ],
  related: [
    "metriki-reklamy",
    "analiz-reklamnoy-kampanii",
    "ga4",
    "utm-metki",
    "zabluzhdeniya-konteksta",
    "mediaplan",
  ],
};
