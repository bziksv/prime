import type { BlogPost } from "../../../data/blog";

/** EN overlay for performance-marketing — same structure as RU JSON. */
export const performanceMarketingEn: BlogPost = {
  slug: "performance-marketing",
  title: "Performance marketing: what it is, how it differs from branding, and how it works",
  date: "2019-08-05",
  category: "Digital marketing",
  cover: "/images/blog/performance-marketing/cover-en.webp",
  excerpt:
    "Performance marketing is about measurable funnel results: leads, sales, CPA, and ROAS. How it differs from branding, which channels fit, and why data and an agency matter.",
  lead: [
    "Performance marketing judges ads and channels by a target action: lead, purchase, install, or call. The point is not pretty reach on its own, but the chain from budget to action to economics.",
    "We define the approach, contrast it with branding, and spell out the role of data and agencies. Market figures from 2018–2019 in older reviews are outdated; the logic of the approach is not.",
  ],
  faq: [
    {
      q: "Is performance marketing only paid search?",
      a: "No. Paid search was the core, but the loop also includes other channels with a measurable action: parts of social, email, SEO when leads are tracked, and apps — as long as end-to-end measurement exists.",
    },
    {
      q: "How does it differ from branding?",
      a: "Branding sits closer to awareness and creative. Performance sits closer to a countable user result. In practice they often share one budget split.",
    },
    {
      q: "Is clicking “optimize” in the ad account enough?",
      a: "No. Auto-bidding helps, but without a goal, analytics, landing page, and offer, the budget leaks. Technology doesn’t replace problem framing.",
    },
    {
      q: "Which KPIs are typical?",
      a: "CPA/CPL, CPO, conversion rate, ROAS, and ROMI (return on marketing investment), plus cost per lead or sale. Lock the set in the brief before launch.",
    },
    {
      q: "Do I need an agency?",
      a: "Not always. You need expertise, a data stack, and time. In-house works; an agency helps at the channel join, audit, and scale.",
    },
    {
      q: "How does this connect to end-to-end analytics?",
      a: "Directly. Without joining ads, site, and CRM, performance easily slides into optimizing clicks — not profit.",
    },
  ],
  sections: [
    {
      title: "What performance marketing is",
      level: 2,
      paras: [
        "Digital performance means managing paid and adjacent traffic so each touch leads to a measurable action and countable economics. The channel can be anything; the criterion is a transparent link to the business goal.",
        "Historically, performance grew from pay-per-click search, then expanded into social, display with post-click metrics, email, and apps. The essence stays the same: the user’s result, not impressions alone.",
      ],
      lists: [
        {
          intro: "Usually in the loop:",
          items: [
            "goal and KPIs before launch",
            "channels with tracking",
            "landing page and offer",
            "optimization by action or revenue",
            "a report the business understands.",
          ],
        },
      ],
    },
    {
      title: "Performance and branding",
      level: 2,
      paras: [
        "Branding solves awareness and creative; performance connects tools to a tangible result. Cheap clicks without quality and a clear goal devalue the work: a low CPO on paper with zero sales isn’t a win.",
        "A useful loop is possible when the agency understands the client’s business and the advertiser states the goal clearly. Otherwise tenders on “who has the cheaper click” hurt both the agency and the outcome.",
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
        "The myth that “everything automates with one button” is dangerous: automation speeds routine, but it doesn’t replace strategy, creative for the offer, or lead-quality control.",
      ],
      lists: [
        {
          intro: "What to connect:",
          items: [
            "spend and clicks from ad accounts",
            "on-site behavior",
            "leads, calls, and sales",
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
          label: "Client reporting",
          href: "/en/blog/otchet-klientu/",
        },
      ],
    },
    {
      title: "Agency role and audit",
      level: 2,
      paras: [
        "An agency brings expertise across niches, inventory, and reporting for different client requirements. The value is connecting mismatched pieces: process, data, channels, and SLA.",
        "As brands buy more inventory directly from platforms, demand for independent audit and recommendations grows. A one-off “check for show” is weaker than a regular strategy and tactics review.",
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
    "Performance marketing is about a measurable action and economics across the funnel. Lock the goal and KPIs, gather data, don’t confuse a cheap click with profit — and don’t expect an ad-account button to replace strategy.",
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
