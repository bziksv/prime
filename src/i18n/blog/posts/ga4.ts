import type { BlogPost } from "../../../data/blog";

/** EN overlay for ga4 — same structure as RU JSON. */
export const ga4En: BlogPost = {
  slug: "ga4",
  title: "What changed in Google Analytics 4: from sessions to events",
  date: "2020-10-16",
  category: "Digital marketing",
  cover: "/images/blog/ga4/cover-en.webp",
  excerpt:
    "How GA4 differs from Universal Analytics: event model, site and app in one property, enhanced measurements, audiences, and explorations. No UA nostalgia and no 2020 button screenshots.",
  lead: [
    "Google Analytics 4 replaced Universal Analytics’ familiar logic: instead of “hits and sessions as the main axis” — events and parameters. Site and app can live in one data scheme.",
    "The essence of the shift and what to check in practice. UI and report names change; the measurement model matters more than widget layout from the 2020 beta. Ecommerce behavior in GA is a separate piece.",
  ],
  faq: [
    {
      q: "Does Universal Analytics still work?",
      a: "As a foundation — no. Build tracking in GA4. Historical UA data won’t “migrate” one-to-one — plan parallel collection early.",
    },
    {
      q: "What is the event model?",
      a: "Almost everything is an event with parameters (page_view, scroll, purchase…). Sessions are counted differently; you can’t compare UA and GA4 figures directly.",
    },
    {
      q: "Is Firebase required for GA4?",
      a: "For apps, GA4 has historically been close to Firebase Analytics. Web can run without a separate “app world”, but cross-platform is a GA4 strength.",
    },
    {
      q: "What are enhanced measurements?",
      a: "Built-in collection of typical actions (views, scroll, outbound clicks, site search, etc.) without hand-coding every click. Check the current help for the list and names.",
    },
    {
      q: "Where did UA goals go in GA4?",
      a: "In GA4 — key events (conversions) based on events. Full breakdown — in the goals/conversions setup article.",
    },
  ],
  sections: [
    {
      title: "Main model shifts",
      level: 2,
      paras: [
        "One scheme for web and app: you can see the user path across surfaces if streams and identity are set correctly. Before, web and app often lived in different report “universes”.",
        "Sessions are no longer the center of the universe. Analytics builds around events: what the user did, with which parameters, in which context. That’s more flexible for SPAs, video, clicks, and micro-conversions — and harder for people used only to “bounce as in UA”.",
        "Enhanced measurements remove some routine: basic interactions can be turned on in stream settings. That doesn’t replace a thoughtful ecommerce and CRM scheme — it’s a start without dozens of tiny tags.",
        "“Before/after” on one chart without caveats misleads: different session model, cookie consent, blockers, and sampling in explorations. Compare trends inside GA4 — not “yesterday’s UA bounce” with today’s engagement.",
      ],
      links: [
        {
          label: "Google Analytics for a store",
          href: "/en/blog/google-analytics/",
        },
        {
          label: "GA4 goals and conversions",
          href: "/en/blog/google-analytics-tseli/",
        },
      ],
    },
    {
      title: "Reports, audiences, and migration practice",
      level: 2,
      paras: [
        "In the UI — engagement overviews, events, audiences, funnels, and Explorations. Pathing, cohorts, and realtime help, but tab names drift: learn the meaning (“events”, “audience”, “funnel”), don’t memorize a 2020 screenshot.",
        "The audience builder replaces part of UA segments: conditions at event, session, and user level can combine (e.g. desktop + completed a purchase). Audiences also help in Google Ads if accounts are linked.",
        "Funnels are built from event sequences; skipping a step usually drops the user from the chain — normal for an open funnel, but needs careful checkout-step tagging.",
        "Migration practice: install GA4 in parallel with old tracking (if not yet), check DebugView/realtime, mark key events, set ecommerce or at least purchase, align consent mode/cookie policy. GTM makes tag upkeep easier.",
        "Bottom line: GA4 isn’t a “new UA skin” — it’s another model. Master events and parameters — reports and explorations become a hypothesis tool, not a widget museum.",
      ],
      lists: [
        {
          intro: "Checklist after creating a GA4 property:",
          items: [
            "tag on all templates, no duplicate",
            "enhanced measurements as needed",
            "key events/conversions",
            "ecommerce or purchase equivalent",
            "check in realtime / DebugView",
            "internal traffic filter.",
          ],
        },
      ],
      links: [
        {
          label: "Google Tag Manager",
          href: "/en/blog/google-tag-manager/",
        },
        {
          label: "Full-funnel analytics",
          href: "/en/blog/skvoznaya-analitika/",
        },
      ],
    },
  ],
  related: [
    "google-analytics",
    "google-analytics-tseli",
    "google-tag-manager",
    "skvoznaya-analitika",
    "metrika-tseli",
  ],
};
