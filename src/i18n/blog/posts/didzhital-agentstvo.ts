import type { BlogPost } from "../../../data/blog";

/** EN overlay for didzhital-agentstvo — same structure as RU JSON. */
export const didzhitalAgentstvoEn: BlogPost = {
  slug: "didzhital-agentstvo",
  title: "Digital agency: what it does and how it differs from classic marketing",
  date: "2021-12-29",
  category: "Internet marketing",
  cover: "/images/blog/didzhital-agentstvo/cover-en.webp",
  excerpt:
    "What a digital agency is: services, team, difference from offline marketing, how to measure results and choose a contractor.",
  lead: [
    "A digital agency helps a business grow through digital channels: site, search, ads, content, analytics, sometimes design and brand.",
    "Below — what services look like, how digital differs from a “classic” marketing agency, and what to watch in the contract and reports.",
  ],
  faq: [
    {
      q: "How does digital differ from a marketing agency?",
      a: "Classic often leans on offline (TV, outdoor, print). Digital — on measurable online channels. In practice many agencies are hybrid.",
    },
    {
      q: "Do you need a full-service contractor?",
      a: "Convenient to cover site + SEO + ads with one team. A specialist is stronger in one discipline. Choice depends on how mature marketing is in-house.",
    },
    {
      q: "Where does work start?",
      a: "With goals, audience, an audit of the current site/ads, and a period plan — not with “make us a viral video”.",
    },
    {
      q: "How do you measure results?",
      a: "Not only reach: leads, sales, CPA/CPL, search share, lead quality. Lock metrics at the start.",
    },
    {
      q: "Can you keep only SEO or only paid search?",
      a: "Yes. Many agencies take separate tracks. Channels shouldn’t fight each other without shared analytics.",
    },
  ],
  sections: [
    {
      title: "The role of a digital agency",
      level: 2,
      paras: [
        "The job is to bring and keep clients through digital touchpoints: search, site, ads, social, email, messengers. Offline sometimes joins in, but the core is measurable channels.",
        "A good team doesn’t “draw banners for banners’ sake” — it ties activity to business money.",
      ],
      lists: [],
    },
    {
      title: "What services look like",
      level: 2,
      paras: [
        "The mix depends on the agency: some are full-service, some only performance or only development.",
      ],
      lists: [
        {
          intro: "A common range:",
          items: [
            "site and improvements (UX, speed, integrations);",
            "brand and visual identity;",
            "content and SMM;",
            "search and social paid ads;",
            "SEO;",
            "analytics and end-to-end reporting;",
            "strategy for a quarter/year.",
          ],
        },
      ],
    },
    {
      title: "Site, brand, design",
      level: 2,
      paras: [
        "The site is a landing system under traffic. Without solid structure and CTAs even strong SEO yields weak leads.",
        "Brand and design make the product recognizable: logo, color, tone, one style across site and social. Rebrand when the old image blocks sales.",
      ],
      lists: [
        {
          intro: "At site kickoff an agency usually:",
          items: [
            "clarifies goals and audience;",
            "designs structure;",
            "builds a prototype;",
            "aligns design and features to project type (brochure ≠ store).",
          ],
        },
      ],
      links: [
        {
          label: "Website layout",
          href: "/en/blog/verstka-saytov/",
        },
      ],
    },
    {
      title: "SEO and performance",
      level: 2,
      paras: [
        "SEO — organic growth: tech, content, structure, links. Performance — paid traffic with lead-cost control.",
        "Timelines differ: ads give fast hypothesis tests; search needs prep and months of position growth (don’t confuse “work started” with “TOP-10”).",
      ],
      lists: [
        {
          intro: "Useful to see in reports:",
          items: [
            "what was done in the period;",
            "which metrics moved;",
            "cost per inquiry;",
            "plan for the next sprint.",
          ],
        },
      ],
      links: [
        {
          label: "SEO site structure",
          href: "/blog/seo-struktura-sayta/",
        },
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Digital vs classic marketing",
      level: 2,
      paras: [
        "Internet marketing is promotion on the web. Digital is broader across channels and often includes product/UX, but in everyday speech the words blur.",
        "A classic agency is stronger in reach offline media. Digital is stronger in attribution and iteration. Businesses often need both: offline for brand awareness, online for leads.",
      ],
      lists: [],
    },
    {
      title: "How to choose a contractor",
      level: 2,
      paras: [
        "Look at cases in your or a related niche, report transparency, team makeup, a contract with KPIs and responsibility zones.",
      ],
      lists: [
        {
          intro: "Red flags:",
          items: [
            "TOP-1 guarantee “in a month” with no caveats;",
            "reports only as ranking screenshots with no leads;",
            "no access to ad/analytics accounts;",
            "one manager “does everything” with no specialists.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "Lock goals in numbers before start: e.g. CPL, lead count, branded traffic share — otherwise in a quarter you argue about “reach”.",
        },
      ],
    },
  ],
};
