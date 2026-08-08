import type { BlogPost } from "../../../data/blog";

/** EN overlay for ab-testy-reklamy — same structure as RU JSON. */
export const abTestyReklamyEn: BlogPost = {
  slug: "ab-testy-reklamy",
  title: "A/B testing ads in Yandex Direct and Google Ads",
  date: "2019-02-07",
  category: "Paid search",
  cover: "/images/blog/ab-testy-reklamy/cover-en.webp",
  excerpt:
    "How to run fair ad tests in Yandex Direct and Google Ads: rotation, reports, campaign experiments, and what to do when volume is low — without clinging to 2019 menu paths.",
  lead: [
    "A split test in paid search puts two (or a few) creatives or settings on comparable traffic so you can pick a winner on money metrics — not who won the CTR race.",
    "Both Direct and Google Ads can rotate ads and run campaign experiments. Labels in the UI shift over time; the loop doesn’t: equal chance → enough data → decide on CPA or ROI. Landing-page tests live in the conversion optimization piece.",
  ],
  faq: [
    {
      q: "Can I just run two ads in one group?",
      a: "Yes for headlines and body. For bids, strategies, or structure changes, use a campaign experiment if your account has it.",
    },
    {
      q: "Does the ad with the best CTR always win?",
      a: "No. A click magnet that burns budget on junk traffic loses to a quieter ad with a sane CPA. Score the business outcome.",
    },
    {
      q: "How long should a test run?",
      a: "Until conversions (or enough clicks) support a call — not a fixed “seven days from the handbook.” If traffic is tiny, don’t bother testing yet.",
    },
    {
      q: "Can I change several things at once?",
      a: "One hypothesis at a time: headline, or offer, or landing. Change everything and you’ll never know what moved.",
    },
    {
      q: "Do I need UTMs?",
      a: "For Metrica/GA4 side-by-side — yes, plus ad IDs in URL templates when the platform fills them.",
    },
  ],
  sections: [
    {
      title: "Why bother testing ads",
      level: 2,
      paras: [
        "Same query, different copy — and you can get different CTR, bounce, and cost per lead. Skip the test and you’re steering by gut or by one lucky week.",
        "Platform rotation helps share impressions fairly. Reports and experiments go further: strategies, negatives, even bid logic.",
      ],
      lists: [
        {
          intro: "Common test surfaces:",
          items: [
            "headlines and descriptions",
            "sitelinks and callouts",
            "offer and USP",
            "landing pages (one change at a time)",
            "bids and strategies through an experiment",
          ],
        },
      ],
      links: [
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "What Direct already does for you",
      level: 2,
      paras: [
        "Several ads in one group: after stats build up, the system often leans impressions toward the more clickable ones — gradually. Exact toggle names live in the current account UI.",
        "Early on, variants usually share traffic. Don’t kill the “loser” after ten clicks.",
      ],
      lists: [
        {
          intro: "Working habits:",
          items: [
            "two or three variants, not a dozen",
            "one variable per test",
            "wait for real volume",
            "judge by goals, not CTR alone",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Direct strategies",
          href: "/en/blog/strategii-yandeks-direkt/",
        },
      ],
    },
    {
      title: "Google Ads: rotation and experiments",
      level: 2,
      paras: [
        "Google long offered rotation modes — push the winners, or share more evenly. Names change; the choice is still “give everyone a shot” vs “favor what already works.”",
        "Campaign experiments (the old drafts-and-experiments path) split traffic so you can compare bids, keywords, negatives, and strategies. Use them when a second ad isn’t enough.",
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Following a 2019 screenshot path like “Additional settings → ad rotation.” Look up what the setting does in today’s UI or Google Help.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Reading the reports",
      level: 2,
      paras: [
        "Direct: Report Wizard — cut by group and ad ID or text; pull clicks, conversions, CPA. Google Ads: ad reports and experiment reports.",
        "Money beats vanity: CPA, ROAS/ROI, qualified leads, closed deals. Mind attribution — last click can undervalue upper-funnel ads.",
      ],
      lists: [
        {
          intro: "Minimum columns:",
          items: [
            "impressions, clicks, CTR",
            "conversions and CPA",
            "spend",
            "bounce / depth in analytics when you can",
            "search and display viewed apart",
          ],
        },
      ],
    },
    {
      title: "Not enough data yet",
      level: 2,
      paras: [
        "If a single ad is too thin, roll up carefully: compare copy only where the one variable actually differs. Don’t mash unrelated group themes into one “best text forever” ranking.",
        "Broken UTMs and missing ad IDs wreck summary tables. Templates are covered in the UTM article.",
      ],
      lists: [
        {
          intro: "Stop the test early if:",
          items: [
            "conversions are still in single digits",
            "the week had weird demand",
            "you also changed bids and keywords",
            "search and display are mixed in one view",
          ],
        },
      ],
      links: [
        {
          label: "UTM tags",
          href: "/en/blog/utm-metki/",
        },
        {
          label: "Click costs in Yandex",
          href: "/en/blog/tsena-klika-yandeks/",
        },
      ],
    },
    {
      title: "How to compare without fooling yourself",
      level: 2,
      paras: [
        "Same headline and keywords, only the body changes — grouping by text is fair. Headline plus different neighbor-group themes — “best text overall” will lie to you.",
        "Keep search and display separate: CTR and traffic quality aren’t the same game. End each test with an action: pause the weak, scale the strong, or start a new hypothesis.",
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "A/B in Direct and Google Ads = rotation or experiments + money reports. One hypothesis, enough data, decide on CPA or ROI.",
        "Low volume — roll up carefully or keep collecting. Don’t crown a one-day CTR champ.",
      ],
    },
  ],
  closing: [
    "Ship two or three variants, change one thing, wait for stats, pick the winner on business goals — that’s when paid-search split tests save budget instead of cluttering every ad group.",
  ],
  related: [
    "optimizatsiya-konversii",
    "strategii-yandeks-direkt",
    "utm-metki",
    "tsena-klika-yandeks",
    "retargeting-direkt",
    "skvoznaya-analitika",
  ],
};
