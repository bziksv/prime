import type { BlogPost } from "../../../data/blog";

/** EN overlay for roi-marketinga — same structure as RU JSON. */
export const roiMarketingaEn: BlogPost = {
  slug: "roi-marketinga",
  title:
    "Marketing ROI and ROMI: formulas and how to judge strategy efficiency",
  date: "2020-12-07",
  category: "Digital marketing",
  cover: "/images/blog/roi-marketinga/cover-en.webp",
  excerpt:
    "How ROI/ROMI differ from KPIs and conversion, which formulas to use for ads, and how numbers decide where to grow budget — and where to cut.",
  lead: [
    "Conversion shows how well the funnel catches. KPIs show whether you hit operational goals. ROI/ROMI answer a different question: did marketing spend return with profit.",
    "Below: why measure return on investment, the CR → CPA → ROMI chain, working formulas, and common mistakes — including the myth that “ROI 100%” is the only profitable threshold.",
  ],
  faq: [
    {
      q: "Are ROI and ROMI the same?",
      a: "In digital practice people often say ROMI (return on marketing investment): return on marketing costs specifically. ROI is broader — any investment. The formula idea is the same.",
    },
    {
      q: "At what ROI do ads pay off?",
      a: "With (revenue − costs) / costs × 100%, zero means marketing contribution broke even; above zero is profit. “100%” means you doubled the investment — not “the profitability threshold”.",
    },
    {
      q: "How do KPIs differ from ROI?",
      a: "KPIs are process targets (leads, CTR, response time). ROI is money payback. You can hit KPIs and still lose on margin.",
    },
    {
      q: "Is conversion rate (CR) enough?",
      a: "No. CR = goals / clicks (or visits) × 100%. Without traffic cost and margin you can’t see if the channel pays.",
    },
    {
      q: "How do I calculate CPA?",
      a: "CPA = channel spend / number of goal actions. Then compare to an allowed CPA from margin and LTV.",
    },
    {
      q: "Should I measure by channel or for all marketing?",
      a: "Both cuts help: channel — to optimize budget; all marketing — for strategy. Otherwise strong SEO can mask a losing paid channel.",
    },
    {
      q: "What about a long sales cycle?",
      a: "Account for lag and attribution. For SEO and content the horizon is months; one week after a publish is not strategy ROMI.",
    },
  ],
  sections: [
    {
      title: "Why measure ROI/ROMI",
      level: 2,
      paras: [
        "Without a money metric it’s easy to optimize pretty percentages: high CTR, many clicks, more followers — while leads lose money.",
        "ROMI helps decide: scale the channel, fix the funnel, or cut budget. It doesn’t replace strategy — it filters where not to pour more spend.",
      ],
      links: [
        {
          label: "Client ad report",
          href: "/en/blog/otchet-klientu/",
        },
      ],
    },
    {
      title: "CR and CPA first, then return",
      level: 2,
      paras: [
        "Conversion: CR = goals / clicks (or visits) × 100%. Example: 100 orders from 1,000 visits → CR = 10%.",
        "CPA = spend / goals. CR speaks to funnel appeal; CPA to action cost. Payback still needs margin and revenue.",
      ],
      lists: [
        {
          intro: "KPI examples next to money:",
          items: [
            "CPA — cost per goal action",
            "CPL — cost per lead",
            "CAC — customer acquisition cost",
            "share of qualified leads / lead quality",
          ],
        },
      ],
      links: [
        {
          label: "Click price in Yandex",
          href: "/en/blog/tsena-klika-yandeks/",
        },
      ],
    },
    {
      title: "ROI/ROMI formulas",
      level: 2,
      paras: [
        "A simple working variant for ads: ROMI = (gross profit from attributed sales − ad spend) / ad spend × 100%.",
        "If you prefer revenue: subtract product/service cost of goods first, then marketing spend — otherwise “ROI on turnover” overstates the picture.",
        "For a period people often use: (period revenue − period marketing spend) / marketing spend × 100%. What matters is the same attribution logic and the same period bounds.",
      ],
      lists: [
        {
          intro: "How to read the result (for the formula above):",
          items: [
            "< 0% — marketing is negative under the chosen model",
            "0% — spend returned with no extra profit",
            "> 0% — positive; 100% — doubled marketing spend in profit contribution",
          ],
        },
      ],
    },
    {
      title: "Where to apply and how to decide from numbers",
      level: 2,
      paras: [
        "Count ROMI by tool (paid social, search ads, email), by product, and by channel mix. A losing piece doesn’t have to live “for brand” if brand isn’t measured separately.",
        "Shift budget toward channels with a stable plus; weak ones — fix first (offer, negatives, landing), then pause. Regularity beats one pretty report.",
      ],
      lists: [
        {
          intro: "Common mistakes:",
          items: [
            "confusing turnover with profit",
            "forgetting COGS and returns",
            "mixing periods and attribution models",
            "judging SEO/content on a single week",
            "optimizing CTR only without CPA/ROMI",
          ],
        },
      ],
      links: [
        {
          label: "SEO efficiency",
          href: "/en/blog/effektivnost-seo/",
        },
      ],
    },
  ],
  closing: [
    "Strategy efficiency in money is ROMI/ROI alongside CR and CPA. Zero on the formula is break-even; a plus is growth — then budget goes where return stays durable.",
  ],
};
