import type { BlogPost } from "../../../data/blog";

/** EN overlay for byudzhet-yandeks-direkt — same structure as RU JSON. */
export const byudzhetYandeksDirektEn: BlogPost = {
  slug: "byudzhet-yandeks-direkt",
  title: "Minimum budget for Yandex Direct: how to calculate it",
  date: "2020-10-22",
  category: "Paid search",
  cover: "/images/blog/byudzhet-yandeks-direkt/cover-en.webp",
  excerpt:
    "How to estimate a starting budget in Yandex Direct: PPC and the auction, CPC ceiling from unit economics, daily and weekly caps, and ways not to burn money — without a “universal sum for everyone.”",
  lead: [
    "There’s no universal “minimum Yandex Direct budget” for every niche: the sum depends on goal, region, competition, site conversion, and acceptable CPA. An “N thousand a week” formula from someone else’s case rarely transfers one-to-one.",
    "A Direct budget is PPC math: click price drivers, a start sketch via the forecast tool and unit economics, plus daily/weekly caps that save without choking impressions. Strategy names and account thresholds — check current Yandex Help; the UI has changed since 2020.",
  ],
  faq: [
    {
      q: "Is there an official Direct launch minimum budget?",
      a: "The account may have technical thresholds (e.g. for a daily cap) — current figures only in Help. “Minimum for the business to pay off” is your economics, not a Direct button.",
    },
    {
      q: "How do you rough out a Direct budget fast?",
      a: "Compass: forecast tool on keywords × expected clicks, plus a CPC ceiling from target CPA and site conversion. Without goals in analytics the forecast stays blind.",
    },
    {
      q: "How is a daily budget different from the account balance?",
      a: "The account balance is the wallet. A daily/weekly cap is the campaign spend ceiling for the period so you don’t burn everything before noon.",
    },
    {
      q: "Does a tiny daily cap equal real savings?",
      a: "Not always. Too low a cap cuts statistics and hurts auto-strategy learning. Prefer a narrow keyword set and negatives over “a few dollars a day for the whole catalog.”",
    },
    {
      q: "Is watching CTR enough to manage budget?",
      a: "No. You need conversions, lead cost, and inquiry quality. High CTR with no leads burns budget.",
    },
    {
      q: "Is budget planning the same as click price and bids?",
      a: "Related, but the focus differs: here it’s spend horizon and caps. CPC math and bid control live in separate pieces.",
    },
    {
      q: "Can you copy a competitor’s Direct budget?",
      a: "No. Their numbers are incomplete and not about your margin. Calculate from your funnel.",
    },
  ],
  sections: [
    {
      title: "PPC and what builds spend",
      level: 2,
      paras: [
        "In classic Search and many Direct formats you pay per click (PPC): impressions alone don’t equal charge until the user clicks. Final CPC is the auction, ad quality, and competition; you set a bid ceiling or auto-strategy bounds.",
        "Rough campaign estimate: average CPC × click count. An example like “1000 clicks × $0.25 = $250” is useful as an order of magnitude, but average CPC floats by niche, keywords, region, and season — it isn’t a price list.",
      ],
      lists: [
        {
          intro: "Spend is driven by:",
          items: [
            "demand and competition on queries;",
            "ad quality and landing relevance;",
            "geography and impression schedule;",
            "Search / YAN mix;",
            "negatives and keyword hygiene.",
          ],
        },
      ],
      links: [
        {
          label: "Click price in Yandex",
          href: "/en/blog/tsena-klika-yandeks/",
        },
        {
          label: "Bids in Direct",
          href: "/en/blog/stavki-direkt/",
        },
      ],
    },
    {
      title: "Click price: what matters more than “bid higher”",
      level: 2,
      paras: [
        "Seasonality lifts bids at demand peaks — sometimes it’s smarter to enter before the wave, not on the most expensive day. Placement and ad block also change economics: don’t confuse “visibility” with “payback.”",
        "Higher CTR and relevance often help you pay less for the same outcome. A headline with concrete benefit and price (where fitting) usually beats a vague “where to buy… with us.” The landing must match the ad promise — or you pay for a quick bounce.",
        "Sitelinks and callouts cut “wrong” clicks when a query has several readings. Account history and “keyword — ad — URL” quality enter the auction; don’t expect “domain magic” from old guides — watch current quality signals in the account.",
      ],
      notes: [
        {
          kind: "tip",
          text: "Set the CPC ceiling from target CPA and site conversion — not from someone else’s “market average.” More in the click-price piece.",
        },
      ],
    },
    {
      title: "How to sketch a minimum start",
      level: 2,
      paras: [
        "Direct has a forecast tool: region, keywords, click and bid guides. For a draft the core set is enough — not a 10,000-phrase brief. Forecast numbers are order of magnitude, not a guarantee of next week’s spend.",
        "In parallel lock the goal (lead, call, order) and acceptable CPA. If ~1% of clicks convert and a lead can cost $25, the click ceiling is around $0.25 — then either the market fits the economics, or you narrow semantics and improve the landing — not “throw budget at a loss.”",
        "A weekly horizon helps cash planning: how many clicks and leads you really need in 7 days for a meaningful test. Strategy names (“optimize clicks,” packages, average CPC) have changed — pick the model for the goal in the current UI and Help.",
      ],
      lists: [
        {
          intro: "Minimum for a meaningful test:",
          items: [
            "goal and how it’s tracked in analytics;",
            "narrow commercial set + negatives;",
            "daily or weekly cap;",
            "CPC ceiling / target CPA;",
            "a horizon of several days without hourly bid twitching.",
          ],
        },
      ],
      links: [
        {
          label: "Keywords in Direct",
          href: "/en/blog/klyuchi-yandeks-direkt/",
        },
      ],
    },
    {
      title: "Account balance, daily and weekly caps",
      level: 2,
      paras: [
        "One account balance simplifies payment: campaigns draw from one wallet. Top-up and autopay methods — check the account; the set has changed over time.",
        "A daily budget caps spend per day: useful at launch and with unstable semantics. “Standard / distributed” mode (or current analogs) affects whether the cap burns in the morning or stretches across the day and schedule. Technical minimums and change limits — only from Help, not 2020 articles.",
        "Too harsh a cap on a wide set yields few clicks and few conclusions. Prefer fewer keywords and a normal test volume over “token” money for the whole catalog.",
      ],
      notes: [
        {
          kind: "warning",
          text: "A cap is insurance against a burn — not a substitute for negatives and relevant landing pages. If clicks are expensive and empty, raising the daily budget is pointless.",
        },
      ],
    },
    {
      title: "How not to burn budget early",
      level: 2,
      paras: [
        "Impression schedule: align with hours when leads get handled and with niche specifics. Round-the-clock reach on a tiny budget often spreads clicks with no operator reply.",
        "Negatives cut junk wording and raise the share of target visits — reach drops, but you pay less “beside the point.” Split regions or at least don’t mix expensive and cheap geos in one pile without need: economics and tests are easier to read.",
        "Before launch lock goal, budget hypothesis, and success criterion. After — match spend to revenue/margin and watch the funnel (including e-commerce and call tracking if you have them). ROI = (revenue − ad cost) / cost × 100% — a channel payback compass, not a “magic Direct button.”",
      ],
      lists: [
        {
          intro: "Working control minimum:",
          items: [
            "analytics goals for lead/order/call;",
            "search-term report and negatives;",
            "CPA / ROAS next to CTR;",
            "separate view of Search and YAN;",
            "decision: narrow, improve ad/landing, or stop.",
          ],
        },
      ],
      links: [
        {
          label: "Negatives in Direct",
          href: "/en/blog/minus-slova-direkt/",
        },
        {
          label: "Direct strategies",
          href: "/en/blog/strategii-yandeks-direkt/",
        },
      ],
    },
    {
      title: "Verdict: what budget is “minimum”",
      level: 2,
      paras: [
        "A minimum meaningful budget is one where, over the chosen horizon, you gather enough clicks and conversions to see whether the channel fits the economics. Some need hundreds of leads a week; others — a dozen local-service inquiries.",
        "You can’t name an exact sum without niche, audience, and margin analysis. A competitor’s budget isn’t a benchmark. Check strategy names, cap thresholds, and account buttons in Help; lean on CPA, conversion, and negatives — not someone else’s “minimum from an article.”",
      ],
      lists: [
        {
          intro: "Remember:",
          items: [
            "no single “Direct minimum sum”;",
            "calculate from goal and CPA — not outsider cases;",
            "caps protect cash; keyword set and negatives protect traffic quality;",
            "forecast ≈ order of magnitude;",
            "current thresholds — only in Yandex Help.",
          ],
        },
      ],
    },
  ],
  closing: [
    "Lock the goal and acceptable CPA, build a narrow set with negatives, set a daily or weekly cap, and give the test several calm days — then expand only what fits the economics.",
  ],
  related: [
    "tsena-klika-yandeks",
    "stavki-direkt",
    "strategii-yandeks-direkt",
    "klyuchi-yandeks-direkt",
    "minus-slova-direkt",
    "kontekst-i-seo",
  ],
};
