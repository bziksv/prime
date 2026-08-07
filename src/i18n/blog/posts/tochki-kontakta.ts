import type { BlogPost } from "../../../data/blog";

/** EN overlay for tochki-kontakta — same structure as RU JSON. */
export const tochkiKontaktaEn: BlogPost = {
  slug: "tochki-kontakta",
  title: "Customer touchpoints: how to find them and strengthen sales",
  date: "2020-01-22",
  category: "Digital marketing",
  cover: "/images/blog/tochki-kontakta/cover-en.webp",
  excerpt:
    "What touchpoints are: online and offline, positive and negative, how to map the customer journey and link touches into a chain before and after purchase.",
  lead: [
    "A touchpoint is any contact between brand and person: site, ad, call, chat, email, storefront, review. Sales grow not from “one more banner,” but when the touch chain is consistent and doesn’t break at a weak link.",
    "We show where to find points, how to score them, and how to assemble a customer path. Don’t mix this up with SEO “entry points” from search competitors — that’s a different job.",
  ],
  faq: [
    {
      q: "Are touchpoint and entry point the same?",
      a: "No. An SEO entry point is the URL where a search visit often starts. A touchpoint is any brand contact on the path to purchase and after it.",
    },
    {
      q: "How many points do you need?",
      a: "As many as the customer actually meets. Quality of the key ones beats a map of a hundred formal items.",
    },
    {
      q: "What is a negative point?",
      a: "A touch that spoils the impression: slow reply, broken form, rudeness at reception, site promise ≠ reality.",
    },
    {
      q: "Where should an audit start?",
      a: "Walk the buyer path yourself or with a mystery shopper; in parallel — the competitor’s path. Log breaks and irritants.",
    },
    {
      q: "Is online more important than offline?",
      a: "Depends on the business. Often the joints decide: ads → site → call → visit. A weak link zeroes out the strong ones.",
    },
    {
      q: "How do I prioritize?",
      a: "By impact on leads/revenue and touch frequency. In high competition go deeper; in a narrow niche focus on 5–7 critical ones.",
    },
    {
      q: "Does it tie to the awareness ladder?",
      a: "Yes: different steps need different touches — from problem content to offer and post-purchase service.",
    },
  ],
  sections: [
    {
      title: "Where touchpoints show up",
      level: 2,
      paras: [
        "Online: site pages, forms and chat, search results, paid and display ads, email, messengers, map cards, reviews, social (informational — no platform requirement).",
        "Offline: signage, storefront, call, meeting, packaging, courier, service center. For many niches the “internet → phone → visit” joint closes the deal.",
      ],
      lists: [
        {
          intro: "A typical online set:",
          items: [
            "landings and contacts;",
            "chat / callback;",
            "ads and the search snippet;",
            "email and notifications;",
            "reviews and mentions.",
          ],
        },
      ],
      links: [
        {
          label: "SEO entry points",
          href: "/en/blog/tochki-vhoda/",
        },
        {
          label: "Feedback form",
          href: "/en/blog/forma-obratnoy-svyazi/",
        },
      ],
    },
    {
      title: "Positive, neutral, negative",
      level: 2,
      paras: [
        "The same point can have different effects. An ad click and a useful page — plus. A click and an empty or slow page — minus. A neutral touch doesn’t move the decision: “just saw a logo” with no next step.",
        "The goal is to strengthen positives, fix negatives, and not spawn neutral noise. Reputation is the sum of touches — not one pretty banner.",
      ],
      lists: [],
    },
    {
      title: "How to work through and score them",
      level: 2,
      paras: [
        "Two working methods: walk the customer path from zero (better through eyes outside the team) and become a competitor’s customer. Compare reply speed, offer clarity, tone, mobile, promises vs fact.",
        "Log where people stuck, what irritated them, where the next step was missing. That’s the source for priorities — not a “pretty CJM for the deck.”",
      ],
      lists: [
        {
          intro: "On the audit checklist:",
          items: [
            "reply time in chat/email;",
            "forms and phones working;",
            "ad and landing match;",
            "staff tone at the joints;",
            "what happens after payment.",
          ],
        },
      ],
    },
    {
      title: "Priorities and chains",
      level: 2,
      paras: [
        "In hard competition you work more points; with a strong unique product the key ones may be enough. Brand size and base loyalty matter too: a known name gets fewer free passes for rough edges than it seems.",
        "One point rarely closes a deal. You need a chain: e.g. ad → service page → chat → call → visit → service. Break the chain — lose the warm-up.",
      ],
      lists: [
        {
          intro: "Example clinic chain:",
          items: [
            "ads / search;",
            "service page;",
            "chat or form;",
            "phone booking;",
            "reception;",
            "appointment;",
            "reminder and review.",
          ],
        },
      ],
      links: [
        {
          label: "Awareness ladder",
          href: "/en/blog/lestnitsa-hanta/",
        },
      ],
    },
    {
      title: "Touches before and after purchase",
      level: 2,
      paras: [
        "Before purchase the customer usually: sees the job → seeks info → compares → decides. Each step has its touches: content and cases, comparison and USP, risk removal, easy ordering.",
        "After purchase — reaction to the experience: support, onboarding, review ask, repeat offer. Ignoring people after payment kills word of mouth and repeat sales.",
      ],
      lists: [
        {
          intro: "Align with the path:",
          items: [
            "problem — explanatory content;",
            "search — clear landings;",
            "compare — differences and proof;",
            "decide — simple CTA and contact;",
            "after — service and review ask.",
          ],
        },
      ],
      links: [
        {
          label: "USP",
          href: "/en/blog/utp/",
        },
        {
          label: "Word of mouth",
          href: "/en/blog/sarafannoe-radio/",
        },
      ],
    },
    {
      title: "What to measure",
      level: 2,
      paras: [
        "Watch conversion at the joints: ads→site, site→lead, lead→deal, deal→repeat/review. A drop on one link matters more than “average account CTR.”",
        "Assign an owner for key points: marketing won’t fix reception tone alone, and sales won’t fix a broken form without development.",
      ],
      lists: [],
    },
  ],
  closing: [
    "Touchpoints are a map of the real customer path. Find weak links, build chains, and align online with offline: sales grow where touches don’t contradict each other.",
  ],
};
