import type { BlogPost } from "../../../data/blog";

/** EN overlay for google-analytics — same structure as RU JSON. */
export const googleAnalyticsEn: BlogPost = {
  slug: "google-analytics",
  title: "Google Analytics for an online store: reading customer behavior",
  date: "2020-10-13",
  category: "Digital marketing",
  cover: "/images/blog/google-analytics/cover-en.webp",
  excerpt:
    "How to read store audience behavior in Google Analytics: segments, funnel, reports, and hypotheses — in GA4 logic, without worshipping “average” metrics.",
  lead: [
    "A counter alone won’t tell you why people don’t buy. For a store, Google Analytics pays off in segments and the funnel: who reaches the cart, where they drop, how new and returning visitors differ.",
    "Below: what you need before analysis, how to read the base reports, and how to push segmentation further. Tag install and goals are neighboring topics; here the focus is ecommerce behavior. The GA4 UI moves — trust metric meaning, not 2020 button paths.",
  ],
  faq: [
    {
      q: "GA or Yandex Metrika?",
      a: "Often both. Metrika fits RU traffic and session replay; GA fits the Google Ads ecosystem and cross-product reports. Follow the job, not “counter religion.”",
    },
    {
      q: "Are the standard reports enough?",
      a: "To start — yes: traffic, pages, events/conversions, ecommerce. Next step: segments and Explorations.",
    },
    {
      q: "What is a segment here?",
      a: "An audience slice by condition: source, device, funnel step, new vs returning, bought vs didn’t.",
    },
    {
      q: "Why bother with a funnel?",
      a: "So you stop staring at a site-wide average conversion and see where the path to order actually breaks.",
    },
    {
      q: "Do I need ecommerce markup?",
      a: "Yes — or you won’t see products, revenue, and purchase steps. Without it you’re stuck on pageviews.",
    },
    {
      q: "How often should I open reports?",
      a: "Weekly for funnel and sources. Deep segments only under a hypothesis — not daily “for numbers.”",
    },
    {
      q: "What about personal data?",
      a: "Don’t push PII into GA against policy. Follow cookie consent and platform rules.",
    },
    {
      q: "Is Universal Analytics still fine?",
      a: "Not as a base. Work in GA4 (events, parameters). Don’t copy old Universal screenshots one-to-one.",
    },
  ],
  sections: [
    {
      title: "What you need before you analyze",
      level: 2,
      paras: [
        "A working GA4 property, a correct tag on every template, events for key actions (product view, cart, checkout, purchase), and ecommerce parameters where you can. Without filtering office traffic, the numbers get noisy.",
        "Agree on goals first: conversion, average order value, repeat purchases. Otherwise the report becomes a tour of charts.",
      ],
      lists: [
        {
          intro: "Setup minimum:",
          items: [
            "GA4 tag on the site",
            "conversions / key events",
            "ecommerce or at least purchase",
            "exclude your IP / office",
            "link ads when needed",
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
      title: "Basics: how to read behavior",
      level: 2,
      paras: [
        "Look past sessions: engagement, views of key catalog URLs, add-to-cart events, share reaching payment. Compare periods and channels under comparable traffic.",
        "A site-wide “average bounce” says little — home and product pages live differently. Slice by page type and device.",
      ],
      lists: [
        {
          intro: "First weekly pass:",
          items: [
            "traffic by channel",
            "top landings and products",
            "funnel events",
            "conversions and revenue",
            "mobile vs desktop",
          ],
        },
      ],
    },
    {
      title: "Segments instead of site-wide averages",
      level: 2,
      paras: [
        "Segments show that new paid visitors behave differently from organic; that one source drives views and another drives purchases. Compare two or three segments on one report — not ten at once.",
        "Useful cuts: new/returning, paid/organic, geo, device, “added to cart — didn’t buy.”",
      ],
      lists: [
        {
          intro: "Segment ideas:",
          items: [
            "sessions with ≥3 product views",
            "cart without purchase",
            "returning within 30 days",
            "blog traffic vs catalog",
            "high AOV vs low",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Optimizing the whole site to one average metric. A segment with 5% of sessions can drive 40% of revenue.",
        },
      ],
    },
    {
      title: "Funnel and deeper cuts",
      level: 2,
      paras: [
        "Map the path: list/search → product → cart → contacts/shipping → payment → thank you. Biggest drop = hypothesis zone (shipping price, form fields, speed, trust).",
        "Go deeper: repeat-purchase cohorts, products often in cart but rarely bought, landings with high traffic and low conversion.",
      ],
      lists: [
        {
          intro: "Ask the funnel:",
          items: [
            "which step loses the most",
            "is the drop worse on mobile",
            "which sources reach payment",
            "which products trigger checkout abandonment",
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
      title: "From report to action",
      level: 2,
      paras: [
        "Every takeaway is a task: simplify checkout, strengthen the product page, change a channel creative, fix speed. Without tasks, analytics is a slide deck.",
        "Tie numbers to qualitative input: support, reviews, session recordings where you have them. Numbers show where; people show why.",
      ],
      lists: [
        {
          intro: "Hypothesis template:",
          items: [
            "segment / funnel step",
            "observation (the number)",
            "cause hypothesis",
            "the change",
            "how you’ll measure success",
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
        "Ad blockers, cookie consent, incomplete ecommerce markup, duplicate tags, bots — all warp the picture. Reconcile orders with CRM or store admin: a revenue gap means fix events, don’t trust a pretty chart.",
        "Neighboring posts on GA setup and goals may overlap this one: store behavior lives here; narrow goal guides can be merged later.",
      ],
      lists: [
        {
          intro: "Quality control:",
          items: [
            "DebugView / event checks",
            "purchase vs orders reconciliation",
            "no double tag firing",
            "documented conversion definitions",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Funnel and three segments first. Custom Explorations later — or you’ll drown in them.",
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
