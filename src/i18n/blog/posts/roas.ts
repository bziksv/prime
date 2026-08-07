import type { BlogPost } from "../../../data/blog";

/** EN overlay for roas — same structure as RU JSON. */
export const roasEn: BlogPost = {
  slug: "roas",
  title: "ROAS: return on ad spend",
  date: "2019-03-04",
  category: "Digital marketing",
  cover: "/images/blog/roas/cover-en.webp",
  excerpt:
    "ROAS = ad revenue / ad spend: how it differs from ROI/ROMI (return on marketing investment), how to calculate it, why include creative in costs, and why in B2B without end-to-end analytics the metric lies.",
  lead: [
    "ROAS (return on ad spend) shows how much revenue you get per unit of ad budget. It’s a tactical money metric for a campaign — not a strategy substitute and not the “only brand KPI”.",
    "We walk through the formula, how it differs from ROI/ROMI, a campaign comparison example, and B2B cases where the deal often closes outside the ad account. A “good” ROAS depends on margin and goal—there’s no universal “4:1 for everyone.”",
  ],
  faq: [
    {
      q: "Are ROAS and ROI the same?",
      a: "No. ROAS is usually revenue / ad spend (sometimes as 4:1 or 400%). ROI/ROMI (return on marketing investment) accounts for profit vs investment and sits closer to strategic payback.",
    },
    {
      q: "What ROAS counts as good?",
      a: "The one where after margin, returns, and operating costs you still get the profit you need. A thin-margin startup may need a higher ratio than mature e-com.",
    },
    {
      q: "What should I include in costs?",
      a: "Media budget and, honestly, creative/landing work without which ads don’t live. Otherwise ROAS is inflated.",
    },
    {
      q: "Are clicks and impressions enough?",
      a: "No. Many clicks with low revenue make weak ROAS. Compare campaigns on money — not only CTR.",
    },
    {
      q: "How do I calculate ROAS in B2B?",
      a: "You need the chain ads → lead → deal in CRM (end-to-end analytics). Otherwise you see clicks, not payment.",
    },
    {
      q: "Is ROAS 2:1 the same as profit?",
      a: "It’s “two units of revenue per one unit of ad spend”. Profit depends on margin: at 30% margin, 2:1 can be a loss.",
    },
  ],
  sections: [
    {
      title: "Formula and difference from ROI",
      level: 2,
      paras: [
        "Base: ROAS = revenue attributed to ads / ad spend. Example: spend 20,000, revenue 80,000 → ROAS = 4 (or 4:1). Each ad unit “brought” four units of turnover — not four units of net profit.",
        "ROI/ROMI sits closer to strategy: (revenue − cost) / cost or profit variants. Content and brand are often treated as lagged investments; ROAS is handy for fast performance campaigns.",
        "Traffic, visibility, and subscribers help as diagnostics — they don’t replace a money calculation.",
      ],
      lists: [
        {
          intro: "To keep ROAS honest:",
          items: [
            "one attribution model for the comparison period;",
            "in spend — media + necessary production costs;",
            "in revenue — what you really tied to the campaign;",
            "returns and cancellations counted in e-com.",
          ],
        },
      ],
      links: [
        {
          label: "ROI and ROMI",
          href: "/en/blog/roi-marketinga/",
        },
        {
          label: "Ad metrics",
          href: "/en/blog/metriki-reklamy/",
        },
      ],
    },
    {
      title: "Comparing campaigns and B2B",
      level: 2,
      paras: [
        "A campaign with many clicks on the same budget can lose on ROAS to a narrower but higher-revenue one. For reach watch impressions; for profit — revenue per spend.",
        "In e-com the link is simpler: order and amount often show in analytics. In B2B leads go to telephony/CRM, the cycle is long — without end-to-end stitching, account ROAS will be understated or random.",
        "Budget decision: amplify what hits target ROAS at the lead quality you need; don’t confuse a brand job (reach) with a performance job (revenue).",
      ],
      notes: [
        {
          title: "Margin decides",
          text: "The same ROAS at different margins is a different cash outcome. Derive acceptable ROAS from unit economics — not from someone else’s benchmarks.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "End-to-end analytics",
          href: "/en/blog/skvoznaya-analitika/",
        },
        {
          label: "Performance marketing",
          href: "/en/blog/performance-marketing/",
        },
      ],
    },
  ],
  closing: [
    "ROAS answers whether an ad unit pays back in revenue. Count it next to margin and ROI/ROMI; in B2B — only with an end-to-end link to the deal; and don’t chase someone else’s “ideal” ratio.",
  ],
  related: [
    "roi-marketinga",
    "metriki-reklamy",
    "skvoznaya-analitika",
    "performance-marketing",
    "audit-reklamnoy-kampanii",
    "effektivnost-videoreklamy",
  ],
};
