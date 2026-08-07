import type { BlogPost } from "../../../data/blog";

/** EN overlay for mobilnaya-reklama-google — same structure as RU JSON. */
export const mobilnayaReklamaGoogleEn: BlogPost = {
  slug: "mobilnaya-reklama-google",
  title: "Mobile ads in Google: how to read the numbers",
  date: "2018-10-23",
  category: "Contextual advertising",
  cover: "/images/blog/mobilnaya-reklama-google/cover-en.webp",
  excerpt:
    "How CTR, CVR, CPC, and CPA differ for mobile Search vs Display, why industry benchmarks age fast, and how to measure efficiency in your own account.",
  lead: [
    "Mobile ads in Google aren’t “one average market rate” — Search and Display have different economics, plus a wide spread by niche. Public studies (including older WordStream-style reviews across verticals) give order-of-magnitude ranges, not your CPA.",
    "Below — how to read those benchmarks, how Search differs from Display on mobile, and the minimum metrics to track yourself. Don’t copy 2010s dollar figures from someone else’s PDF into a 2020s media plan without recalculating.",
  ],
  faq: [
    {
      q: "Why is Search CTR higher than Display?",
      a: "Search has a query and intent. Display shows in content/apps — fewer clicks; cheaper reach and different jobs.",
    },
    {
      q: "Can you treat someone else’s average CPC as the norm?",
      a: "Not as dogma. Watch your niche, region, ad quality, and landing. A benchmark is order-of-magnitude, not an SLA.",
    },
    {
      q: "Is mobile CVR always worse than desktop?",
      a: "Often lower on complex forms, but not a law. Simplify checkout and call; compare device slices in the cabinet.",
    },
    {
      q: "Mix Search and Display in one campaign?",
      a: "Better separate: different goals, bids, and creatives. Otherwise optimization “eats” one channel with the other.",
    },
    {
      q: "What matters more — CTR or CPA?",
      a: "For business — CPA/ROMI and lead quality. High CTR with expensive empty clicks is useless.",
    },
    {
      q: "Need separate ads for mobile?",
      a: "Often yes: shorter offer, call/messenger emphasis, fast landing. Validate in experiments.",
    },
    {
      q: "How often to refresh benchmarks?",
      a: "Yours — continuously in the cabinet. External studies — background only; market and auction shift.",
    },
    {
      q: "Is this tied to SEO?",
      a: "Not directly. Indirectly: the same landings and mobile UX affect organic and ads.",
    },
  ],
  sections: [
    {
      title: "What people usually call “efficiency”",
      level: 2,
      paras: [
        "Base set: CTR (clickability), CVR (click-to-conversion), CPC (cost per click), CPA (cost per goal). Sometimes mobile traffic share and lead quality.",
        "Multi-industry studies often show: Search delivers clearly higher CTR and CVR at a pricier click; Display — low CTR, cheap click, and another job profile (reach, retarget, top of funnel).",
      ],
      lists: [
        {
          intro: "Don’t mix:",
          items: [
            "Search campaigns and Display;",
            "brand and non-brand queries;",
            "mobile and desktop without a slice;",
            "someone else’s average $ and your region/currency.",
          ],
        },
      ],
      links: [
        {
          label: "Bids in Yandex Direct",
          href: "/en/blog/stavki-direkt/",
        },
      ],
    },
    {
      title: "Search vs Display on mobile",
      level: 2,
      paras: [
        "In Search the person already stated a need — warmer click, higher bid, usually better conversion with a decent landing. In Display you compete for attention in a feed/site — sub-percent CTR is normal; economics work differently.",
        "Historical agency summaries on Google accounts (e.g. WordStream-style reviews across ~18 verticals) illustrated the gap: Search CTR of a few percent vs fractions in Display, with very different CPC and CPA. Exact vintage numbers age out — the channel-gap logic stays.",
      ],
      lists: [
        {
          intro: "Practice in the cabinet:",
          items: [
            "separate campaigns/budgets;",
            "own goals (lead vs reach);",
            "frequency and placements in Display;",
            "mobile-friendly landing for both.",
          ],
        },
      ],
      links: [
        {
          label: "Holiday retargeting",
          href: "/en/blog/prazdnichnyy-retargeting/",
        },
      ],
    },
    {
      title: "Industries and number spread",
      level: 2,
      paras: [
        "Legal, finance, construction, and health usually cost more per click than mass retail or entertainment. Inside one “industry” the spread is huge: brand, region, offer, and site quality beat the average table.",
        "Use industry reports only so you don’t set an unrealistic CTR “like everyone”. Build the budget plan from your margin and target CPA.",
      ],
      lists: [
        {
          intro: "Before launch lock:",
          items: [
            "goal action and its value;",
            "max CPA;",
            "mobile share in your niche;",
            "Search vs Display hypothesis.",
          ],
        },
      ],
    },
    {
      title: "How to measure yourself, not by someone else’s PDF",
      level: 2,
      paras: [
        "In Google Ads watch device = mobile, Search/Display network, conversions by goal. Cross-check site analytics: bounces, speed, forms on a phone.",
        "Monthly compare mobile vs desktop CPA and budget share. If mobile is pricier at the same conversion — fix ads and landing, don’t copy someone else’s “average CTR 4%”.",
      ],
      lists: [
        {
          intro: "Mini report:",
          items: [
            "spend / clicks / CTR mobile;",
            "conversions and CPA;",
            "top ads and landings;",
            "decisions: bid, negatives, creative, UX.",
          ],
        },
      ],
      links: [
        {
          label: "Web analytics tools",
          href: "/en/blog/instrumenty-veb-analitiki/",
        },
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "Site link and timeline expectations",
      level: 2,
      paras: [
        "Mobile ads don’t fix a slow or awkward site. Remove friction on the first screen and form first — otherwise any CPA benchmark will look inflated.",
        "Ads respond in days. Organic TOP by core is a separate track: prep and rank buildup planned over months after SEO start — not “after we improved ad CTR”.",
      ],
      lists: [
        {
          intro: "Order:",
          items: [
            "mobile landing;",
            "goals in analytics;",
            "test Search, then Display/retarget;",
            "don’t confuse ad CPA with an SEO TOP promise.",
          ],
        },
      ],
      links: [
        {
          label: "Paid search and SEO",
          href: "/en/blog/kontekst-i-seo/",
        },
      ],
      notes: [
        {
          title: "About studies",
          text: "CTR/CPC/CPA summaries from older English reports illustrate order of magnitude. For planning use fresh data from your cabinet and region.",
          kind: "tip",
        },
      ],
    },
  ],
  related: [
    "stavki-direkt",
    "prazdnichnyy-retargeting",
    "optimizatsiya-konversii",
    "kontekst-i-seo",
    "instrumenty-veb-analitiki",
    "reklamnyy-kabinet",
  ],
};
