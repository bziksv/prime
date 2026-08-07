import type { BlogPost } from "../../../data/blog";

/** EN overlay for nisha-sayta — same structure as RU JSON. */
export const nishaSaytaEn: BlogPost = {
  slug: "nisha-sayta",
  title: "How to choose a niche for a website",
  date: "2021-02-03",
  category: "Digital marketing",
  cover: "/images/blog/nisha-sayta/cover-en.webp",
  excerpt:
    "How to pick a site topic: demand, margin, competition, and expertise — without “profitable niches 2021” lists from outdated rankings.",
  lead: [
    "A niche sets the product, audience, and competition. A bad start is expensive: you’ll invest in a site with no one to sell to or nothing to stand out with.",
    "Skip recycled “top profitable niches” lists — they age fast. Run your own economics: demand, margin, barriers, and whether you can sustain content and service.",
  ],
  faq: [
    {
      q: "What matters more: demand or margin?",
      a: "Both. Demand without margin = work for nothing. Margin without demand = an empty site.",
    },
    {
      q: "Do you need a “blue ocean” with no competitors?",
      a: "Often no competitors = no demand. Look for where you can be better — not where it’s empty.",
    },
    {
      q: "How do you check demand?",
      a: "Keyword tools and similar tools, ad auctions, forums/social demand, talks with customers.",
    },
    {
      q: "Is personal interest in the niche required?",
      a: "It strongly helps you sustain content and service. Pure “for the money” without expertise burns out faster.",
    },
    {
      q: "Should you pick one niche or several?",
      a: "At the start — one clear niche. Expand after the model works.",
    },
    {
      q: "How fast can you test an idea before building the site?",
      a: "Talk to potential clients, gather demand, test a clear offer with small ads or a partner channel.",
    },
    {
      q: "Can you change niche after launch?",
      a: "Yes, but repositioning, structure, and product cost resources. Cheaper to test the hypothesis before a big build.",
    },
  ],
  sections: [
    {
      title: "Choice framework",
      level: 2,
      paras: [
        "Cross your experience, paying demand, acquisition channels, and unit economics. The niche should be narrow enough to differentiate and wide enough to live.",
        "Don’t start from an industry label — start from the client’s job. “We help small manufacturers automate the warehouse” is clearer than abstract “IT services” and hints which pages and offers you need.",
      ],
      lists: [
        {
          intro: "Ask yourself:",
          items: [
            "whose pain we solve and how",
            "how the client searches for a solution",
            "what price and repeat sales look like",
            "how we differ from the SERP top.",
          ],
        },
      ],
    },
    {
      title: "Demand, competition, money",
      level: 2,
      paras: [
        "Estimate frequency and commercial intent. Look at competitors: strong brands, prices, content. Roughly estimate CAC via ads.",
        "Competition isn’t only how many sites rank. Brand strength, response speed, logistics, license requirements, and how ready clients are to switch matter. Note barriers early.",
      ],
      lists: [
        {
          intro: "“Be careful” signals:",
          items: [
            "only informational demand with no purchase",
            "marketplaces and chains dominate",
            "you need a huge warehouse without capital",
            "the niche needs licenses you don’t have.",
          ],
        },
      ],
      links: [
        {
          label: "Competitor analysis",
          href: "/en/blog/analiz-konkurentov/",
        },
        {
          label: "Query frequency",
          href: "/en/blog/chastotnost-zaprosov/",
        },
      ],
    },
    {
      title: "Strategy looking ahead",
      level: 2,
      paras: [
        "Think LTV (lifetime value): subscription, consumables, services around the product. Exclusivity isn’t always a unique product — it can be packaging, service, expertise, or locality.",
        "The site should help test a hypothesis — not replace product strategy. First describe the promise, proof, and path to purchase; then choose SEO, ads, partnerships, or sales as channel one.",
      ],
      lists: [
        {
          intro: "After choosing a niche:",
          items: [
            "positioning in one sentence",
            "first landings for the core",
            "traffic channel #1 for a test",
            "metrics: lead/sale — not traffic alone.",
          ],
        },
      ],
      links: [
        {
          label: "Young website",
          href: "/en/blog/molodoy-sayt/",
        },
      ],
      notes: [
        {
          title: "SEO timelines",
          kind: "tip",
          text: "Niche choice isn’t TOP. Site prep is roughly weeks to a month; rankings for a core are planned 2–6 months of work after you start.",
        },
      ],
    },
    {
      title: "Checking demand before launch",
      level: 2,
      paras: [
        "Gather audience language from talks, queries, reviews, and sales conversations. It shows which problem people will pay to solve and which selection criteria matter.",
        "A minimal test doesn’t need a perfect site. A clear page, a way to contact, and a way to measure where interest came from is enough — just don’t sell the prototype as a finished service.",
      ],
      lists: [
        {
          intro: "In the test check:",
          items: [
            "whether people understand the offer without explanations",
            "what they ask before buying",
            "whether they’ll leave a contact or pay the next step",
            "which channel brings interested visitors — not random ones.",
          ],
        },
      ],
    },
    {
      title: "Positioning and first pages",
      level: 2,
      paras: [
        "State positioning in one sentence: who you serve, which job you solve, and how you differ. That formula becomes the first screen, ads, and site structure.",
        "Don’t try to cover every service and region at once. Build a few strong landings for priority scenarios, add proof, terms, and a clear way to reach you — then expand the site from data.",
      ],
      lists: [
        {
          intro: "Minimum for v1:",
          items: [
            "main offer page",
            "process, pricing, or terms",
            "cases, reviews, or other experience proof",
            "contacts and a fast way to ask a question.",
          ],
        },
      ],
    },
  ],
};
