import type { BlogPost } from "../../../data/blog";

/** EN overlay for yuzabiliti — same structure as RU JSON. */
export const yuzabilitiEn: BlogPost = {
  slug: "yuzabiliti",
  title: "What website usability is and how to improve it",
  date: "2017-09-11",
  category: "Internet marketing",
  cover: "/images/blog/yuzabiliti/cover-en.webp",
  excerpt:
    "Usability is how easy the site makes the target action: short path, speed, navigation, forms, and mobile. A self-audit checklist and practical fixes — without “TOP in a week” magic.",
  lead: [
    "Usability is how easily a person reaches a goal: buy, submit a lead, find a contact, sign up. For a site it isn’t “beauty for beauty’s sake” — it’s less friction on the path to conversion.",
    "Below — basics of a selling site, a simple self-audit, and targeted improvements. A separate checkout-store breakdown is in the ecommerce usability piece; here is the general frame for any commercial site.",
  ],
  faq: [
    {
      q: "Is usability = design?",
      a: "Design is part of the picture. Usability is about clarity, path speed, and no dead ends: navigation, forms, mobile, button copy.",
    },
    {
      q: "Is the “three clicks” rule mandatory?",
      a: "A guide, not dogma. What matters is that the goal is obvious and reachable without extra steps — sometimes one screen with a strong CTA is enough.",
    },
    {
      q: "Does it affect SEO?",
      a: "Indirectly — through behavior and query satisfaction. Bad UX raises bounce and blocks conversion; it doesn’t replace tech and content, but it amplifies promotion results.",
    },
    {
      q: "How is it different from UX?",
      a: "In everyday talk often synonyms. UX is wider (full experience and emotion); usability is about efficiency and ease of a concrete task. In practice the fixes are the same.",
    },
    {
      q: "Where to start an audit?",
      a: "Walk key scenarios yourself on phone and desktop: find contacts, submit a lead, place an order. Log friction — that’s already a backlog.",
    },
  ],
  sections: [
    {
      title: "What usability is and basic rules",
      level: 2,
      paras: [
        "Usability is a product’s ability to be used: find what’s needed, understand the interface, finish an action without extra help. On a site, “success” = the target action you bring traffic for.",
        "Short path: the lead/buy button should be visible; don’t hide the next step in a third menu level. If someone is ready — cut extra screens.",
        "Speed: heavy scripts and uncompressed images kill interest faster than “imperfect” design. Optimize load on critical funnel pages.",
        "Navigation and breadcrumbs on large sites reduce the “I’m lost” effect. Forms — minimum fields; personal-data consent and a privacy-policy link are a legal frame, not decoration.",
        "Responsiveness is mandatory: mobile share has long been high in most niches. Search engines weigh mobile experience; 2016 wording about “dropping from the top ten” isn’t eternal policy — check current requirements and your metrics.",
      ],
      links: [
        {
          label: "Responsive site",
          href: "/en/blog/adaptivnyy-sayt/",
        },
        {
          label: "Behavioral signals",
          href: "/en/blog/povedencheskie-faktory/",
        },
      ],
    },
    {
      title: "Self-audit and quick improvements",
      level: 2,
      paras: [
        "Free start — walk scenarios “as a new visitor” and write a checklist: what works, what annoys. Add heatmaps and session replay when traffic appears — but eyes and a phone already catch ~80% of obvious bugs.",
        "Practical fixes: logo goes home; contacts in header/footer as copyable text; header has search and a quick lead if that’s your channel; tree menu without “nervous” dropdowns; on 404 — paths to key sections, not a dead end.",
        "Why it matters for business: a usable site raises the share of people who do what they came for. Search reacts to usefulness and behavior; usability amplifies SEO and ads ROI, but doesn’t replace prep and ranking growth — core TOP is planned over months.",
        "If you run an online store — go deeper into checkout, product card, and filters in the dedicated guide. One principle: less friction — more completed actions.",
      ],
      lists: [
        {
          intro: "Self-audit mini-checklist:",
          items: [
            "looks correct in popular browsers;",
            "comfortable on a smartphone;",
            "contacts found in seconds;",
            "from any page — a path to key sections;",
            "from 404 you can return to catalog/services;",
            "lead/buy/call without extra clicks.",
          ],
        },
      ],
      links: [
        {
          label: "Ecommerce store usability",
          href: "/en/blog/yuzabiliti-internet-magazina/",
        },
        {
          label: "User engagement",
          href: "/en/blog/vovlechenie-polzovateley/",
        },
      ],
    },
  ],
  related: [
    "adaptivnyy-sayt",
    "povedencheskie-faktory",
    "yuzabiliti-internet-magazina",
    "vovlechenie-polzovateley",
    "oshibki-internet-magazina",
  ],
};
