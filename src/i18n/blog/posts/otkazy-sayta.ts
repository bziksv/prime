import type { BlogPost } from "../../../data/blog";

/** EN overlay for otkazy-sayta — same structure as RU JSON. */
export const otkazySaytaEn: BlogPost = {
  slug: "otkazy-sayta",
  title: "Bounce on a site: why people leave and how to keep them",
  date: "2020-09-17",
  category: "SEO",
  cover: "/images/blog/otkazy-sayta/cover-en.webp",
  excerpt:
    "What bounce rate means, which numbers are normal for different site types, main leave reasons, and what to fix first — speed, navigation, content.",
  lead: [
    "A bounce is when a visit gave the site almost nothing: the person left quickly or viewed one page without a goal action (definition depends on the counter). A high rate isn’t a “penalty” by itself — a signal that the snippet or ad expectation didn’t match what they saw.",
    "Below — how to read bounce, typical leave reasons, and a practical fix order. GA4 and Metrica count differently — compare apples to apples.",
  ],
  faq: [
    {
      q: "What’s a normal bounce percentage?",
      a: "Depends on type. A one-screen landing can show a “high bounce” with a successful lead. Portals and blogs have different baselines. Watch segments and goals, not one number.",
    },
    {
      q: "Is bounce always a bad site?",
      a: "No. An informational “found it and left” is normal. Bad is when commercial traffic leaves with no action.",
    },
    {
      q: "Will GA and Metrica match?",
      a: "Rarely one-to-one: different session/engagement models. Trends matter more than the absolute.",
    },
    {
      q: "Where to start lowering bounce?",
      a: "Top landings by traffic: speed, title/offer match, first screen, mobile.",
    },
    {
      q: "Do pop-ups help?",
      a: "Often they increase leave. Keep one careful scenario — don’t block content immediately.",
    },
    {
      q: "Does bounce affect SEO directly?",
      a: "Engines look at behavior beyond one metric. Indirectly: if the page doesn’t answer the query, rankings and CTR suffer.",
    },
    {
      q: "Is registration required before viewing?",
      a: "For most commercial sites — no. A barrier before value sharply raises exits.",
    },
    {
      q: "How to spot bots?",
      a: "Counter filters, anomalous sessions, log cross-checks. Raw bounce without cleanup lies.",
    },
  ],
  sections: [
    {
      title: "How to read bounce rate",
      level: 2,
      paras: [
        "Classic: share of single-page visits. Modern models often look at engagement: was there meaningful contact (time, event, conversion). For a landing, conversion matters more than a “low bounce”.",
        "Compare the same channels and page types: organic vs ads, article vs product card. Sitewide average is almost useless.",
      ],
      lists: [
        {
          intro: "Rough cues:",
          items: [
            "portals/services with browsing — lower;",
            "narrow info answer — higher can be fine;",
            "commerce — watch bounce + goal;",
            "sharp spike — look for a release or traffic dump.",
          ],
        },
      ],
      links: [
        {
          label: "Google Analytics",
          href: "/en/blog/google-analytics/",
        },
      ],
    },
    {
      title: "Speed, ads, and irritants",
      level: 2,
      paras: [
        "Slow load is a common leave-before-content cause. Heavy images, widgets, autoplay video/music, full-screen pop-ups in the first seconds kill trust.",
        "Ad “chaos”: more banners than meaning. Keep what pays off and doesn’t break reading.",
      ],
      lists: [
        {
          intro: "Quick checks:",
          items: [
            "weight and LCP of landings;",
            "no autoplay sound;",
            "pop-ups don’t cover the offer immediately;",
            "mobile without horizontal scroll.",
          ],
        },
      ],
      links: [
        {
          label: "Page size",
          href: "/en/blog/razmer-stranitsy/",
        },
      ],
    },
    {
      title: "Navigation and the first screen",
      level: 2,
      paras: [
        "A confusing menu, broken breadcrumbs, no clear CTA — people don’t know where to go. The first screen should confirm the query from the snippet: headline, offer, next path.",
        "“Missed” 404 pages and redirects past meaning also cause instant leave.",
      ],
      lists: [
        {
          intro: "On a landing check:",
          items: [
            "H1 = ad/title promise;",
            "visible button/form;",
            "menu links work;",
            "contacts found in 1–2 clicks.",
          ],
        },
      ],
      links: [
        {
          label: "Website navigation",
          href: "/en/blog/navigatsiya-sayta/",
        },
      ],
    },
    {
      title: "Content and freshness",
      level: 2,
      paras: [
        "An unformatted wall of text, outdated prices, empty sections, placeholder copy — bounce is expected. Useless volume articles don’t retain and spoil search expectations.",
        "Add orientation: TOC, lists, facts, next-step recommendations (related products, adjacent services).",
      ],
      lists: [
        {
          intro: "Content hygiene:",
          items: [
            "dates and prices current;",
            "paragraphs and subheads;",
            "no forced registration before value;",
            "internal links by meaning.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Sending traffic to a page that doesn’t match intent. Query fit first, then “retention”.",
        },
      ],
      links: [
        {
          label: "Filling a site",
          href: "/en/blog/napolnenie-sayta/",
        },
      ],
    },
    {
      title: "Design and trust",
      level: 2,
      paras: [
        "Bland or chaotic design cuts trust as much as broken elements. You don’t need “beauty for trends” — readability, contrast, usable forms.",
        "Social proof, guarantees, clear policy — especially in commerce. Without popup overload.",
      ],
      lists: [
        {
          intro: "Trust minimum:",
          items: [
            "real contacts;",
            "a clear form;",
            "relevant reviews/cases;",
            "HTTPS and a tidy UI.",
          ],
        },
      ],
    },
    {
      title: "Work order",
      level: 2,
      paras: [
        "Export top URLs by visits with worst engagement. For each: cause hypothesis → fix → measure. Don’t change ten things at once.",
        "Tie to goals: if bounce fell but leads didn’t — you “retained” for nothing. KPI is the action, not bounce alone.",
      ],
      lists: [
        {
          intro: "2-week sprint:",
          items: [
            "5 key landings;",
            "speed + first screen;",
            "remove irritants;",
            "refresh facts/prices;",
            "compare segments before/after.",
          ],
        },
      ],
      links: [
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
    },
  ],
  related: [
    "razmer-stranitsy",
    "navigatsiya-sayta",
    "optimizatsiya-konversii",
    "google-analytics",
    "lending",
  ],
};
