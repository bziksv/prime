import type { BlogPost } from "../../../data/blog";

/** EN overlay for google-analytics — same structure as RU JSON. */
export const googleAnalyticsEn: BlogPost = {
  slug: "google-analytics",
  title: "Google Analytics for an online store: customer behavior",
  date: "2020-10-13",
  category: "Internet marketing",
  cover: "/images/blog/google-analytics/cover-en.webp",
  excerpt:
    "How to read online-store audience behavior in Google Analytics: segments, funnel, reports, and hypotheses — grounded in GA4, without worshipping “average” metrics.",
  lead: [
    "A counter alone doesn’t explain why people don’t buy. Google Analytics helps a store through segments and the funnel: who reaches the cart, where they drop, how new and returning visitors differ.",
    "Below — what’s needed for analysis, how to read base reports, and how to deepen segmentation. Code install and goals are related topics; here the focus is ecommerce behavior. The GA4 UI changes — lean on metric meaning, not 2020 button layouts.",
  ],
  faq: [
    {
      q: "GA or Yandex Metrica?",
      a: "Often both: Metrica is closer to RU traffic and session replay; GA — to the Google Ads ecosystem and cross-product reports. Follow the task, not “counter religion”.",
    },
    {
      q: "Are standard reports enough?",
      a: "To start yes: traffic, pages, events/conversions, ecommerce. Next — segments and Explorations.",
    },
    {
      q: "What is a segment here?",
      a: "An audience slice by condition: source, device, funnel step, new/returning, bought/didn’t buy.",
    },
    {
      q: "Why SBA / a funnel?",
      a: "So you don’t stare at an “average conversion” for the whole site, but see where the path to order actually breaks.",
    },
    {
      q: "Do you need ecommerce markup?",
      a: "Yes — or you won’t see products, revenue, and purchase steps. Without it you stay on pageviews.",
    },
    {
      q: "How often to check reports?",
      a: "Operationally — weekly on funnel and sources; deep segments — under hypotheses, not daily “for numbers”.",
    },
    {
      q: "Personal data?",
      a: "Don’t collect PII in GA against policy. Follow cookie/consent rules and platform policies.",
    },
    {
      q: "Is GA3 Universal still current?",
      a: "Not as a base: work in GA4 logic (events, parameters). Don’t copy old Universal screenshots one-to-one.",
    },
  ],
  sections: [
    {
      title: "What you need before analysis",
      level: 2,
      paras: [
        "A working GA4 property, a correct tag on all templates, events for key actions (product view, cart, checkout, purchase), ecommerce parameters where possible. Without filtering internal visits, numbers get noisy.",
        "Agree on goals: conversion growth, average order value, repeat purchases. Otherwise the report becomes a tour of charts.",
      ],
      lists: [
        {
          intro: "Setup minimum:",
          items: [
            "GA4 tag on the site;",
            "conversions/key events;",
            "ecommerce or at least purchase;",
            "exclude your IP/office;",
            "link to ads when needed.",
          ],
        },
      ],
      links: [
        {
          label: "Installing Yandex Metrica",
          href: "/en/blog/metrika-ustanovka/",
        },
      ],
    },
    {
      title: "Basics: how to read behavior",
      level: 2,
      paras: [
        "Look beyond sessions: engagement, views of key catalog URLs, add-to-cart events, share reaching payment. Compare periods and channels under comparable traffic.",
        "An “average bounce” for the whole store says little: home and product pages live differently. Slice reports by page type and device.",
      ],
      lists: [
        {
          intro: "First weekly pass:",
          items: [
            "traffic by channel;",
            "top landings and products;",
            "funnel events;",
            "conversions and revenue;",
            "mobile vs desktop.",
          ],
        },
      ],
    },
    {
      title: "Segments instead of “average temperature”",
      level: 2,
      paras: [
        "Segments show that new visitors from ads behave differently from organic; that one source gives views and another purchases. Compare 2–3 segments on one report — not ten at once.",
        "Useful cuts: new/returning, paid/organic, geo, device, “added to cart — didn’t buy”.",
      ],
      lists: [
        {
          intro: "Segment ideas:",
          items: [
            "sessions with ≥3 product views;",
            "cart without purchase;",
            "returning within 30 days;",
            "blog traffic vs catalog;",
            "high AOV vs low.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Optimizing the whole site to one “average” metric. A segment with 5% of sessions can drive 40% of revenue.",
        },
      ],
    },
    {
      title: "Funnel and deeper analysis",
      level: 2,
      paras: [
        "Build the path: list/search → product → cart → contacts/shipping → payment → thank you. Where the biggest drop is — that’s where hypotheses live (shipping price, form fields, speed, trust).",
        "Deeper: repeat-purchase cohorts, products “often in cart / rarely bought”, landings with high traffic and low conversion.",
      ],
      lists: [
        {
          intro: "Funnel questions:",
          items: [
            "which step loses the most;",
            "is the drop different on mobile;",
            "which sources reach payment;",
            "which products trigger checkout abandonment.",
          ],
        },
      ],
      links: [
        {
          label: "Promoting an online store",
          href: "/en/blog/prodvizhenie-internet-magazina/",
        },
      ],
    },
    {
      title: "From report to actions",
      level: 2,
      paras: [
        "Every takeaway is a task: simplify checkout, strengthen the product page, change a channel creative, fix speed. Without tasks, analytics is a slide deck.",
        "Tie it to qualitative data: support, reviews, session recordings (where available). Numbers show “where”; people show “why”.",
      ],
      lists: [
        {
          intro: "Hypothesis template:",
          items: [
            "segment / funnel step;",
            "observation (number);",
            "cause hypothesis;",
            "change;",
            "how we’ll measure success.",
          ],
        },
      ],
      links: [
        {
          label: "Content marketing analytics",
          href: "/en/blog/analitika-kontent-marketinga/",
        },
      ],
    },
    {
      title: "Limits and data hygiene",
      level: 2,
      paras: [
        "Blockers, cookie consent, incomplete ecommerce markup, duplicate tags, bots — all distort the picture. Reconcile orders with CRM/store admin: a revenue gap is a reason to fix events, not “trust a pretty chart”.",
        "Related posts on GA setup and goals may overlap this canon: store behavior is here; narrow goal guides can be merged or extended later.",
      ],
      lists: [
        {
          intro: "Quality control:",
          items: [
            "DebugView / event checks;",
            "purchase vs orders reconciliation;",
            "no double tag firing;",
            "documented conversion definitions.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Funnel and 3 segments first. Then custom explorations — or you’ll drown in Explorations.",
        },
      ],
    },
  ],
  related: [
    "metrika-ustanovka",
    "analitika-kontent-marketinga",
    "prodvizhenie-internet-magazina",
    "metrika-ne-rabotaet",
    "kategorii-internet-magazina",
  ],
};
