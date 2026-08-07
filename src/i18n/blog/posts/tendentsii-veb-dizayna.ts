import type { BlogPost } from "../../../data/blog";

/** EN overlay for tendentsii-veb-dizayna — same structure as RU JSON. */
export const tendentsiiVebDizaynaEn: BlogPost = {
  slug: "tendentsii-veb-dizayna",
  title: "Web design trends: what to adopt — and what gets in the way",
  date: "2018-05-29",
  category: "Digital marketing",
  cover: "/images/blog/tendentsii-veb-dizayna/cover-en.webp",
  excerpt:
    "How to pick web design trends without chasing fashion: animation, color and type, data storytelling, AI in UI, illustrations, mobile-first, asymmetry, tools, email and e-com — with focus on the user path and speed.",
  lead: [
    "Web design trends are useful as a library of techniques — not a mandatory “adopt everything” checklist. Some ideas are already normal (mobile-first, micro-interactions); some stay seasonal fashion or noise for effect.",
    "This guide covers how to pick techniques for the business job: animation, color and type, on-screen data, AI in the interface, illustrations, grid and tools. A risk-and-decision map — not a list of “required” gimmicks.",
  ],
  faq: [
    {
      q: "Should I chase trends every season?",
      a: "No. Job, audience, and speed first. A trend fits if it strengthens the path and doesn’t break mobile UX.",
    },
    {
      q: "Is animation required?",
      a: "No. Useful for hierarchy and feedback. Without a goal and on a weak phone it irritates and hurts Core Web Vitals.",
    },
    {
      q: "Is flat design dead?",
      a: "Classic “flat with no depth” got soft shadows and gradients. The point is clear hierarchy — not a ban on volume.",
    },
    {
      q: "Which design tool to choose?",
      a: "Look at the team and process. Figma is a common collab standard; other editors depend on the stack. A shared component library beats chasing announcements.",
    },
    {
      q: "Will trendy UI sell by itself?",
      a: "Rarely. Conversion leans more on offer, trust, speed, and a clear CTA than asymmetry for its own sake.",
    },
    {
      q: "Should I put an AI chat on every page?",
      a: "Only if it closes a real path (matching, FAQ, order status). A “bot for the bot” with no operator and knowledge base lowers trust.",
    },
    {
      q: "How to check a trend before release?",
      a: "State a hypothesis, view it on a real phone, measure speed and behavior (bounce, CTA clicks). Without a metric — it’s taste, not a decision.",
    },
    {
      q: "Does asymmetry fit commercial sites?",
      a: "Sometimes for brand and landing pages. On catalogs and forms, predictable scanning usually matters more. Test — don’t copy a portfolio 1:1.",
    },
  ],
  sections: [
    {
      title: "How to pick trends without chasing fashion",
      level: 2,
      paras: [
        "The good question isn’t “what’s trendy now” — it’s “what barrier on the path does this technique remove”. Button animation is justified if it shows state; a neon palette — if brand and niche can carry it and text stays readable.",
        "Separate the norm from seasonal fashion. Mobile-first and clear type are the base. Experimental grids, heavy 3D, and decorative noise are options with a cost for speed and accessibility.",
      ],
      lists: [
        {
          intro: "Filter before shipping:",
          items: [
            "there’s a goal in the user path;",
            "doesn’t break mobile UX and tap targets;",
            "doesn’t kill speed and Core Web Vitals;",
            "fits the brand — doesn’t fight it;",
            "there’s a hypothesis and a way to measure effect.",
          ],
        },
      ],
    },
    {
      title: "Animation and micro-interactions",
      level: 2,
      paras: [
        "Motion on the web works when it explains: hover, loading, form step change, tip appearance. SVG and CSS animation are often lighter than heavy video backgrounds; GIF fits in spots.",
        "Without a goal, animation is noise. On weak devices it steals attention and battery. Account for `prefers-reduced-motion`: offer a simplified mode for people motion bothers.",
      ],
      lists: [
        {
          intro: "Before shipping animation ask:",
          items: [
            "what the motion explains;",
            "how it behaves on a real phone;",
            "whether it can be off or simplified via reduced-motion.",
          ],
        },
      ],
    },
    {
      title: "Color, typography, and visual character",
      level: 2,
      paras: [
        "Bold palettes help you stand out if brand and niche can handle them. Color pickers are useful for experiments; “neon everywhere” without contrast checks risks readability and accessibility.",
        "Typography sets the tone: sans and serif paired, custom faces, large headlines. On mobile, readability beats effect; heavy web fonts cut speed — load them on purpose and limit weights.",
        "Storefront palette and identity system are related: here the focus is that a trend doesn’t break hierarchy and CTA.",
      ],
      links: [
        {
          label: "Online store color",
          href: "/en/blog/tsvet-internet-magazina/",
        },
        {
          label: "Brand identity",
          href: "/en/blog/aydentika-brenda/",
        },
      ],
    },
    {
      title: "On-screen data and complex visuals",
      level: 2,
      paras: [
        "Data storytelling is when figures and charts lead by meaning — not just “decorate” a block. Readability beats wow: labels, scale, a mobile chart version.",
        "3D and AR fit niches (e.g. furniture in a room), but for most commercial sites aren’t a must-have. Clear offer and catalog first — then AR experiments.",
      ],
      notes: [
        {
          kind: "tip",
          text: "If a chart can’t be understood on a phone in a few seconds — simplify or replace with a table/short takeaway.",
        },
      ],
    },
    {
      title: "AI in interfaces and illustrations",
      level: 2,
      paras: [
        "AI in UI is wider than a chatbot: search hints, recommendations, draft generation, smart filters. Trust builds on an honest path: people understand what the system does and how to reach a human.",
        "Illustrations instead of stock clichés help the brand sound unique — if the style is stable and doesn’t overpower content. A random set of “trendy” images is worse than a calm, consistent system.",
      ],
      lists: [
        {
          intro: "When an AI widget fits:",
          items: [
            "closes a frequent question or matching;",
            "there’s a knowledge base and escalation to a human;",
            "doesn’t block the main path to a lead;",
            "doesn’t promise what the service doesn’t do.",
          ],
        },
      ],
    },
    {
      title: "Mobile-first, “soft flat”, and asymmetry",
      level: 2,
      paras: [
        "Mobile-first is necessity, not fashion: design the phone path before desktop decoration. Micro-interactions and simple nav beat a scatter of icons; check animation and large type on a real device.",
        "“Soft flat”: a flat base plus light shadows and gradients for hierarchy. Works until it turns into heavy effects on every block.",
        "Asymmetric grids give character but easily break scanning. On commercial pages, test: unusual alone isn’t equal to more leads.",
      ],
      links: [
        {
          label: "Responsive website",
          href: "/en/blog/adaptivnyy-sayt/",
        },
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "Tools, email, and e-com: what matters more than UI fashion",
      level: 2,
      paras: [
        "The editor and prototype market shifts. Teams need one process, a component library, and handoff to front-end more than chasing a “unifier of all tools”. Pick the stack for people and release cycle.",
        "Email interactivity (carousels, in-mail actions) depends on the client; some tricks are limited. The base is mobile email layout, a clear CTA, and lawful consent to mail.",
        "In e-commerce, marketplaces, delivery, stock, and order speed matter more than a “trendy storefront UI”. Design supports the purchase — it doesn’t replace assortment and service.",
      ],
      links: [
        {
          label: "Building an online store",
          href: "/en/blog/sozdanie-internet-magazina/",
        },
        {
          label: "Signs of an outdated site",
          href: "/en/blog/ustarevshiy-sayt/",
        },
      ],
    },
  ],
  related: [
    "tsvet-internet-magazina",
    "adaptivnyy-sayt",
    "aydentika-brenda",
    "sozdanie-internet-magazina",
    "optimizatsiya-konversii",
    "ustarevshiy-sayt",
  ],
};
