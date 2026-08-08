import type { BlogPost } from "../../../data/blog";

/** EN overlay for metriki-reklamy — same structure as RU JSON. */
export const metrikiReklamyEn: BlogPost = {
  slug: "metriki-reklamy",
  title: "Ad metrics: what to watch to know a campaign is working",
  date: "2019-10-15",
  category: "Digital marketing",
  cover: "/images/blog/metriki-reklamy/cover-en.webp",
  excerpt:
    "Which metrics to watch by funnel stage: CTR and CPC at the entrance, on-site behavior, CPA/CPO/CR at conversion, average order value and LTV — without judging ads by clicks alone.",
  lead: [
    "Ads “work” when they lead to money or a business goal — not when there are “lots of impressions.” To see that, read metrics by funnel steps: interest → site → action → repeat purchases.",
    "Below: a working set — CTR/CPC, bounce and engagement, CPA/CPO/CR, average order value and LTV. ROMI formulas and end-to-end CRM joins are in related articles; here — what to watch at each stage.",
  ],
  faq: [
    {
      q: "Is watching only CTR enough for ads?",
      a: "No. High CTR with expensive empty clicks and zero leads is a failure. CTR is interest in the ad — not profit.",
    },
    {
      q: "Are CPA and CPO the same metric?",
      a: "Close, but not always. CPA is cost per target action (lead, install). CPO is cost per order. You define the goal.",
    },
    {
      q: "Why does a high bounce rate kill “good” ads?",
      a: "People click and leave at once: misclick, irrelevant offer, or a weak landing. Fixing the site is often cheaper than pouring more budget.",
    },
    {
      q: "Can I compare display and search with one KPI?",
      a: "Carefully. Display is more often reach and awareness; search is hot demand. Look at the channel’s role in the funnel and assisted paths.",
    },
    {
      q: "Why track LTV if I already have CPA?",
      a: "CPA says what acquisition cost. LTV says what a client brings over their life. Acceptable CPA rises when repeat purchases are strong.",
    },
    {
      q: "Where should a beginner start?",
      a: "Lock the goal → CTR/CPC → landing bounces → CR and CPA → check against margin. Then average order value and LTV.",
    },
  ],
  sections: [
    {
      title: "The funnel as a frame for metrics",
      level: 2,
      paras: [
        "It’s handy to split the user path into reach, engagement, conversion, and loyalty. Each stage has its question: did they notice, get interested, take the target action, come back.",
        "Without a frame it’s easy to optimize a “pretty” metric at the wrong stage — e.g. chase banner CTR while the lead form is broken.",
      ],
      lists: [
        {
          intro: "Stages and focus:",
          items: [
            "reach — meeting the offer",
            "engagement — click and interest on the site",
            "conversion — lead/order",
            "loyalty — repeat and LTV",
          ],
        },
      ],
    },
    {
      title: "Entrance: CTR and CPC",
      level: 2,
      paras: [
        "CTR = clicks ÷ impressions × 100%. Low CTR often means: wrong audience, creative doesn’t stand out, weak offer, or off-season. CPC = budget ÷ clicks — average cost of an attracted visit; niche, competition, season, and platform affect it.",
        "CTR and CPC diagnose the ad and the auction. They don’t answer whether the ads paid for themselves.",
      ],
      lists: [
        {
          intro: "If CTR dropped, check:",
          items: [
            "audience and offer match",
            "creative readability",
            "seasonality and competitors",
            "landing match to the promise",
          ],
        },
      ],
    },
    {
      title: "On the site: bounce, depth, time",
      level: 2,
      paras: [
        "After the click, watch whether the person stays. High bounce: awkward navigation, misclick, thin offer, weak description. Heatmaps help see where people click — but first remove clear barriers (lead button, cart, speed).",
        "Depth and visit length help on multi-page sites. On a one-page landing they’re weaker as KPIs: someone may read fast and convert — or leave in 20 seconds with no lead. Watch goals and scroll to the offer.",
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Bad behavior metrics often get blamed on “ads”, while the landing needs fixing. Check ad–page relevance before scaling budget.",
        },
      ],
      links: [
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
        {
          label: "Site bounce rate",
          href: "/en/blog/otkazy-sayta/",
        },
      ],
    },
    {
      title: "Conversion: CPA, CPO, and CR",
      level: 2,
      paras: [
        "CR = conversions ÷ sessions × 100%. CPA = budget ÷ target actions. CPO = budget ÷ orders (including failed ones if that’s how you account). The goal depends on the business: lead, call, install, payment.",
        "Geo, competition, and product complexity affect CPA. Compare display and search with role in mind: display more often feeds the upper funnel; search — hot demand. Otherwise “expensive” display looks useless only because of last click.",
      ],
      links: [
        {
          label: "ROI and ROMI",
          href: "/en/blog/roi-marketinga/",
        },
        {
          label: "Assisted conversions",
          href: "/en/blog/assotsiirovannye-konversii/",
        },
      ],
    },
    {
      title: "Money: average order value and LTV",
      level: 2,
      paras: [
        "Average order value (and close ARPU/AOV) shows how much one target action brings in money. LTV is client value over the relationship: AOV × repeat purchase frequency × customer lifetime (simplified).",
        "Repeat purchases usually cost less than the first. So a channel with a slightly higher CPA can be better if it brings strong-LTV clients. For the full picture, join ads to CRM — end-to-end analytics.",
      ],
      links: [
        {
          label: "Average order value",
          href: "/en/blog/sredniy-chek/",
        },
        {
          label: "End-to-end analytics",
          href: "/en/blog/skvoznaya-analitika/",
        },
      ],
    },
  ],
  closing: [
    "Ads work when metrics align down the funnel: interest (CTR/CPC), visit quality, action cost, and client economics. Don’t stop at clicks — take the view to CPA, margin, and LTV.",
  ],
  related: [
    "roi-marketinga",
    "optimizatsiya-konversii",
    "assotsiirovannye-konversii",
    "sredniy-chek",
    "skvoznaya-analitika",
    "otkazy-sayta",
  ],
};
