import type { BlogPost } from "../../../data/blog";

/** EN overlay for yuzabiliti — same structure as RU JSON. */
export const yuzabilitiEn: BlogPost = {
  slug: "yuzabiliti",
  title: "What website usability is and how to improve it",
  date: "2017-09-11",
  category: "Digital marketing",
  cover: "/images/blog/yuzabiliti/cover-en.webp",
  excerpt:
    "Usability is how easily a site gets people to the goal: short paths, speed, navigation, forms, and mobile. A self-audit checklist and practical fixes — without “rankings in a week” magic.",
  lead: [
    "Usability is how easily someone completes the action you want: buy, submit a lead, find a contact, sign up. On a commercial site, it isn’t decoration — it’s less friction between traffic and conversion.",
    "Below: baseline rules for a selling site, a simple self-audit, and targeted fixes. Checkout mistakes for stores are covered separately; here is the general frame for any commercial site.",
  ],
  faq: [
    {
      q: "Is usability the same as design?",
      a: "Design is part of the picture. Usability is clarity, speed to goal, and no dead ends: navigation, forms, mobile, button copy.",
    },
    {
      q: "Is the “three clicks” rule mandatory?",
      a: "It’s a guide, not dogma. What matters is an obvious path without extra steps — sometimes one screen with a strong CTA is enough.",
    },
    {
      q: "Does it affect SEO?",
      a: "Indirectly — through behavior and query satisfaction. Bad UX raises bounce and kills conversion; it doesn’t replace tech and content, but it amplifies what promotion delivers.",
    },
    {
      q: "How is it different from UX?",
      a: "In everyday talk, people use the terms interchangeably. UX is broader (full experience and emotion); usability is efficiency on a specific task. In practice, the fixes overlap.",
    },
    {
      q: "Where do I start an audit?",
      a: "Walk key scenarios on phone and desktop: find contacts, submit a lead, place an order. Log every friction point — that’s your backlog.",
    },
  ],
  sections: [
    {
      title: "What usability is and basic rules",
      level: 2,
      paras: [
        "Usability is a product’s ability to be used: find what’s needed, understand the interface, finish an action without help. On a site, success means the target action you’re paying to drive.",
        "Short path: the lead or buy button should be visible; don’t bury the next step three menu levels deep. When someone is ready to act, cut extra screens.",
        "Speed: heavy scripts and uncompressed images kill interest faster than imperfect design. Optimize load on critical funnel pages.",
        "Navigation and breadcrumbs on large sites reduce the “I’m lost” effect. Forms — minimum fields; personal-data consent and a privacy-policy link are legal requirements, not decoration.",
        "Mobile is non-negotiable: mobile share is high in most niches. Search engines weigh mobile experience; old claims about dropping from page one aren’t eternal policy — check current requirements and your metrics.",
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
        "Start free: walk scenarios as a new visitor and write a checklist of what works and what annoys. Add heatmaps and session replay once traffic exists — but eyes and a phone already catch most obvious bugs.",
        "Practical fixes: logo links home; contacts in header and footer as copyable text; header has search and a quick lead path if that’s your channel; tree menu without jumpy dropdowns; on 404 — paths to key sections, not a dead end.",
        "Why it matters for business: a usable site raises the share of visitors who do what they came for. Search responds to usefulness and behavior; usability amplifies SEO and ad ROI, but it doesn’t replace prep or ranking growth — page-one visibility for the keyword set is planned over months.",
        "If you run an online store, go deeper on checkout, product cards, and filters in the dedicated guide. One principle everywhere: less friction, more completed actions.",
      ],
      lists: [
        {
          intro: "Self-audit mini-checklist:",
          items: [
            "looks correct in popular browsers",
            "comfortable on a smartphone",
            "contacts found in seconds",
            "from any page — a path to key sections",
            "from 404 you can return to catalog or services",
            "lead, buy, or call without extra clicks",
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
