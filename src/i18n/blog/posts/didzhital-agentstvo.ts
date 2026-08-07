import type { BlogPost } from "../../../data/blog";

/** EN overlay for didzhital-agentstvo — same structure as RU JSON. */
export const didzhitalAgentstvoEn: BlogPost = {
  slug: "didzhital-agentstvo",
  title: "Digital agencies: what they do and how they differ from classic marketing",
  date: "2021-12-29",
  category: "Digital marketing",
  cover: "/images/blog/didzhital-agentstvo/cover-en.webp",
  excerpt:
    "What a digital agency is: services, team, how it differs from offline marketing, how to measure results, and how to choose a contractor.",
  lead: [
    "A digital agency helps a business grow through digital channels: the site, search, ads, content, analytics — and sometimes design and brand.",
    "This piece covers what the services look like, how digital differs from a classic marketing agency, and what to watch in the contract and reports.",
  ],
  faq: [
    {
      q: "How does digital differ from a marketing agency?",
      a: "Classic shops often lean on offline (TV, outdoor, print). Digital leans on measurable online channels. In practice many agencies are hybrid.",
    },
    {
      q: "Do I need a full-service contractor?",
      a: "It’s convenient to cover site + SEO + ads with one team. A specialist shop is stronger in one discipline. The choice depends on how mature marketing is in-house.",
    },
    {
      q: "Where does work start?",
      a: "With goals, audience, an audit of the current site or ads, and a period plan — not with “make us a viral video.”",
    },
    {
      q: "How do you measure results?",
      a: "Not only reach: leads, sales, CPA/CPL, search share, lead quality. Agree on metrics up front.",
    },
    {
      q: "Can I keep only SEO or only paid search?",
      a: "Yes. Many agencies take separate tracks. Channels shouldn’t fight each other without shared analytics.",
    },
  ],
  sections: [
    {
      title: "The role of a digital agency",
      level: 2,
      paras: [
        "The job is to bring in and keep customers through digital touchpoints: search, site, ads, social, email, messengers. Offline sometimes joins in, but the core is measurable channels.",
        "A good team doesn’t “draw banners for banners’ sake” — it ties activity to business results.",
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
            "site and improvements (UX, speed, integrations)",
            "brand and visual identity",
            "content and social",
            "search and social paid ads",
            "SEO",
            "analytics and full-funnel reporting",
            "strategy for a quarter or year",
          ],
        },
      ],
    },
    {
      title: "Site, brand, design",
      level: 2,
      paras: [
        "The site is a landing system under traffic. Without solid structure and CTAs, even strong SEO yields weak leads.",
        "Brand and design make the product recognizable: logo, color, tone, one style across site and social. Rebrand when the old image blocks sales.",
      ],
      lists: [
        {
          intro: "At site kickoff an agency usually:",
          items: [
            "clarifies goals and audience",
            "designs structure",
            "builds a prototype",
            "aligns design and features to project type (brochure ≠ store)",
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
        "SEO is organic growth: tech, content, structure, links. Performance is paid traffic with lead-cost control.",
        "Timelines differ: ads give fast hypothesis tests; search needs prep and a planned 2–6 months of ranking growth (don’t confuse “work started” with “top 10”).",
      ],
      lists: [
        {
          intro: "Useful to see in reports:",
          items: [
            "what was done in the period",
            "which metrics moved",
            "cost per inquiry",
            "plan for the next sprint",
          ],
        },
      ],
      links: [
        {
          label: "SEO site structure",
          href: "/en/blog/seo-struktura-sayta/",
        },
        {
          label: "Keyword set",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Digital vs. classic marketing",
      level: 2,
      paras: [
        "Internet marketing is promotion on the web. Digital is broader across channels and often includes product and UX, but in everyday speech the words blur.",
        "A classic agency is stronger in offline reach media. Digital is stronger in attribution and iteration. Businesses often need both: offline for brand awareness, online for leads.",
      ],
      lists: [],
    },
    {
      title: "How to choose a contractor",
      level: 2,
      paras: [
        "Look at cases in your niche or a related one, report transparency, team makeup, and a contract with KPIs and clear responsibility zones.",
      ],
      lists: [
        {
          intro: "Red flags:",
          items: [
            "a top-1 guarantee “in a month” with no caveats",
            "reports that are only ranking screenshots with no leads",
            "no access to ad or analytics accounts",
            "one manager who “does everything” with no specialists",
          ],
        },
      ],
      notes: [
        {
          title: "Practice tip",
          text: "Agree on numeric goals before you start — e.g. CPL, lead count, branded traffic share — otherwise in a quarter you’ll argue about “reach.”",
        },
      ],
    },
  ],
};
