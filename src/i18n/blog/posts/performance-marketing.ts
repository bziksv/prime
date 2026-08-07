import type { BlogPost } from "../../../data/blog";

/** EN overlay for performance-marketing — same structure as RU JSON. */
export const performanceMarketingEn: BlogPost = {
  slug: "performance-marketing",
  title: "Performance marketing: what it is, how it differs from branding, and how it works",
  date: "2019-08-05",
  category: "Internet marketing",
  cover: "/images/blog/performance-marketing/cover-en.webp",
  excerpt:
    "Performance marketing is about measurable funnel results: leads, sales, CPA/ROAS. How it differs from branding, which channels fit, and why data and an agency matter.",
  lead: [
    "Performance is an approach where ads and channels are judged by a target action: lead, purchase, install, call. Not “pretty reach by itself”, but the chain budget → action → economics.",
    "Below — a definition, the difference from branding, and the role of data and agencies. Market figures from 2018–2019 in old reviews are outdated; the logic of the approach is not.",
  ],
  faq: [
    {
      q: "Is performance only paid search?",
      a: "No. Paid search was the core, but the loop also includes other channels with a measurable action: part of social, email, SEO when leads are tracked, apps — if end-to-end measurement exists.",
    },
    {
      q: "How is it different from branding?",
      a: "Branding is closer to awareness and creative. Performance is closer to a calculable user result. In practice they often work together in one split.",
    },
    {
      q: "Is “pressing a button” in the ad account enough?",
      a: "No. Auto-strategies help, but without a goal, analytics, landing, and offer the budget leaks. Technology doesn’t replace problem framing.",
    },
    {
      q: "Which KPIs are typical?",
      a: "CPA/CPL, CPO, CR, ROAS/ROMI, cost per lead/sale. Lock the set in the brief before launch.",
    },
    {
      q: "Do you need an agency?",
      a: "Not always. You need expertise, a data stack, and time. In-house is possible; an agency helps at the channel join, audit, and scale.",
    },
    {
      q: "Link to end-to-end analytics?",
      a: "Direct. Without joining ads, site, and CRM, performance easily slides into optimizing clicks — not profit.",
    },
  ],
  sections: [
    {
      title: "What performance is",
      level: 2,
      paras: [
        "Digital performance is managing paid and adjacent traffic so each touch leads to a measurable action and countable economics. The channel can be anything; the criterion is a transparent link to the business goal.",
        "Historically performance grew from “pay per click” search, then expanded: social, display with post-click/visit metrics, email, apps. The essence is one — the user’s result, not only impressions.",
      ],
      lists: [
        {
          intro: "Usually in the loop:",
          items: [
            "goal and KPIs before launch;",
            "channels with tracking;",
            "landing and offer;",
            "optimization by action/money;",
            "a report the business understands.",
          ],
        },
      ],
    },
    {
      title: "Performance and branding",
      level: 2,
      paras: [
        "Branding solves awareness and creative; performance — tools and joins to a tangible result. Cheap clicks without quality and a goal devalue the work: a low CPO on paper with zero sales isn’t a win.",
        "A mutually useful loop is possible when the agency understands the client’s business and the advertiser states the goal clearly. Otherwise tenders on “who has the cheaper click” break both the agency and the result.",
      ],
      links: [
        {
          label: "Ad metrics",
          href: "/en/blog/metriki-reklamy/",
        },
        {
          label: "Marketing ROI",
          href: "/en/blog/roi-marketinga/",
        },
      ],
    },
    {
      title: "Data, technology, reporting",
      level: 2,
      paras: [
        "From the first launch to a multichannel report you need data: ad accounts, site, calls, CRM. Heterogeneous sources and external optimization platforms help only if they converge into one picture.",
        "The myth “everything automates with one button” is dangerous: automation speeds routine, but doesn’t replace strategy, creative for the offer, and lead-quality control.",
      ],
      lists: [
        {
          intro: "What to join:",
          items: [
            "spend and clicks from ad accounts;",
            "on-site behavior;",
            "leads/calls/sales;",
            "assisted paths across channels.",
          ],
        },
      ],
      links: [
        {
          label: "End-to-end analytics",
          href: "/en/blog/skvoznaya-analitika/",
        },
        {
          label: "Client report",
          href: "/en/blog/otchet-klientu/",
        },
      ],
    },
    {
      title: "Agency role and audit",
      level: 2,
      paras: [
        "An agency gathers expertise across niches, inventory, and reporting for different client requirements. The value is joining mismatched pieces: bureaucracy, data, channels, and SLA.",
        "Direct buys from platforms grow, and so does demand for independent audit/recommendations. A one-off “check for show” is weaker than a regular strategy and tactics review.",
      ],
      notes: [
        {
          title: "Picking a vendor",
          text: "The word “performance” in the name isn’t a guarantee. Look at the contract, KPIs, data transparency, and readiness to talk about business money — not only CTR.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Marketing strategy",
          href: "/en/blog/marketingovaya-strategiya/",
        },
      ],
    },
  ],
  closing: [
    "Performance marketing is about a measurable action and economics across the funnel. Lock the goal and KPIs, gather data, don’t confuse a cheap click with profit — and don’t expect an “ad-account button” to replace strategy.",
  ],
  related: [
    "metriki-reklamy",
    "skvoznaya-analitika",
    "roi-marketinga",
    "otchet-klientu",
    "marketingovaya-strategiya",
    "looker-studio",
  ],
};
