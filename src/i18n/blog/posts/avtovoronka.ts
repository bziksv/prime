import type { BlogPost } from "../../../data/blog";

/** EN overlay for avtovoronka — same structure as RU JSON. */
export const avtovoronkaEn: BlogPost = {
  slug: "avtovoronka",
  title: "Automated sales funnel: what it is, types, and how to build without chaos",
  date: "2019-08-01",
  category: "Digital marketing",
  cover: "/images/blog/avtovoronka/cover-en.webp",
  excerpt:
    "An automated sales funnel: stages from first touch to purchase, simple/medium/multi-level schemes, key elements, and why automation — without the myth that “a bot replaces everyone”.",
  lead: [
    "An autofunnel is the customer path from first touch to the target action, where scenarios cover part of the steps: ads, bot, email, landing, payment. A person joins where a conversation is needed — not “on every click”.",
    "An autofunnel moves a lead from first touch to payment with less manual chase: stages, automation depth, and the stack you assemble. “Conversion is always 10%” figures from old reviews aren’t universal — watch your own steps and tests.",
  ],
  faq: [
    {
      q: "Is an autofunnel only a messenger bot?",
      a: "A bot is a common element, not the whole funnel. There can be a landing, email, retargeting, CRM tasks for a manager. The point is a pre-described path with automation on routine.",
    },
    {
      q: "Does a simple “ads → payment” funnel work?",
      a: "Yes for hot demand and an inexpensive product. Expensive and complex decisions usually need warm-up and a lead.",
    },
    {
      q: "Does automation remove the need for a sales team?",
      a: "It lowers load on typical questions and qualification. Complex B2B and expensive deals still need people.",
    },
    {
      q: "Where should autofunnel setup start?",
      a: "Draw the current path, find breaks in the data, simplify or add a step, then test with step-conversion measurement.",
    },
    {
      q: "Do you need a lead magnet in an autofunnel?",
      a: "Often yes on a medium cycle: checklist, consultation, demo — exchange for a contact and a reason to continue the dialogue.",
    },
    {
      q: "How do you measure autofunnel success?",
      a: "Step→step conversion, CPA/CPL, share who reach payment, lead quality for the manager — not only ad reach.",
    },
  ],
  sections: [
    {
      title: "Path stages",
      level: 2,
      paras: [
        "A typical scheme: awareness (ad, post, search) → interaction (click, move to chat/site) → warm-up and answers to questions → conversion (lead, payment, booking).",
        "Not everyone reaches the end — that’s normal. The job is to find where people drop and fix the bottleneck — not “add more channels” blind.",
      ],
      lists: [
        {
          intro: "Setup cycle:",
          items: [
            "audit the current path;",
            "hypothesis for the break cause;",
            "fix the step (simplify or add);",
            "test on a horizon with enough traffic;",
            "compare conversions before/after.",
          ],
        },
      ],
    },
    {
      title: "Types by complexity",
      level: 2,
      paras: [
        "Simple: ads → catalog/landing → payment. Medium: a lead magnet and warm-up appear (email/messenger); the goal is often a contact, then a sale. Multi-level: a long cycle and many channels (typical for real estate, cars, travel) — from broad reach to segments and personal offers.",
        "An automated funnel is when scenarios run the routine (qualification, content delivery, reminders, segmentation). It fits stores, services, and info products with a clear offer; it doesn’t replace strategy.",
      ],
      notes: [
        {
          title: "B2B and B2C",
          text: "In B2B the cycle is usually longer and more people sit in the buying decision. In B2C the path is shorter, but price, delivery, and review trust matter more.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Why automate",
      level: 2,
      paras: [
        "Load on typical dialogues drops, answers don’t depend on who is on shift, the scenario works at night. Time savings appear after setup — not “from day one with no effort”.",
        "Risk: a rigid bot with no path to a human annoys on complex questions. Plan manager escalation and clear stop-words.",
      ],
      links: [
        {
          label: "Capture forms",
          href: "/en/blog/formy-zahvata/",
        },
        {
          label: "Retargeting",
          href: "/en/blog/retargeting/",
        },
      ],
    },
    {
      title: "Key elements",
      level: 2,
      paras: [
        "You need: a strategy with yes/no branches, entry points, a thank-you page/message after contact, warm-up touches, selling pages, segmentation, and post-sale work (repeat, upsell, review).",
        "A product matrix helps move from a simple offer to the core one. Traffic sources — paid search, social ads, content, retargeting — with one measurement loop.",
      ],
      lists: [
        {
          intro: "Build checklist:",
          items: [
            "product matrix and offer;",
            "behavior scenarios (including refusal);",
            "communication channels;",
            "traffic sources + retargeting;",
            "CRM/list and segments;",
            "metrics by step.",
          ],
        },
      ],
      links: [
        {
          label: "Performance marketing",
          href: "/en/blog/performance-marketing/",
        },
        {
          label: "End-to-end analytics",
          href: "/en/blog/skvoznaya-analitika/",
        },
      ],
    },
  ],
  closing: [
    "An auto-funnel is a described path with automation on routine and a human where dialogue is needed. Start with a step map and break measurement; complicate the scenario only after a simple scheme already counts money.",
  ],
  related: [
    "formy-zahvata",
    "retargeting",
    "avtovoronka-instagram",
    "avtovoronka-vk",
    "performance-marketing",
    "skvoznaya-analitika",
  ],
};
