import type { BlogPost } from "../../../data/blog";

/** EN overlay for ab-testy-reklamy — same structure as RU JSON. */
export const abTestyReklamyEn: BlogPost = {
  slug: "ab-testy-reklamy",
  title: "A/B testing ads in Yandex Direct and Google Ads",
  date: "2019-02-07",
  category: "Paid search",
  cover: "/images/blog/ab-testy-reklamy/cover-en.webp",
  excerpt:
    "How to compare ads in Yandex Direct and Google Ads: rotation, reports, campaign experiments, and what to do when the sample is thin — without outdated 2019 click-paths through “advanced settings.”",
  lead: [
    "An A/B (split) test in search or display puts creative or setting variants on comparable traffic so you can pick a winner on a business metric — not CTR alone.",
    "Direct and Google Ads both have built-in ways to rotate ads and run experiments. UI labels change; the workflow doesn’t: give variants a fair shot, wait for data, then decide on CPA or ROI. Landing-page tests belong in the conversion optimization article.",
  ],
  faq: [
    {
      q: "Is rotating two ads in a group enough?",
      a: "Often yes for copy and headlines. For bidding strategies, bids, and structure, campaign experiments are a better fit — if your account supports them.",
    },
    {
      q: "Is the highest-CTR ad always the winner?",
      a: "No. High CTR with expensive junk clicks loses to modest CTR with a sane CPA. Watch goals and spend.",
    },
    {
      q: "How long should you wait before deciding?",
      a: "Until you have enough conversions or clicks to decide — not “exactly seven days from a textbook.” With tiny traffic, the test isn’t worth running.",
    },
    {
      q: "Should you change everything at once?",
      a: "Stick to one hypothesis: headline, offer, or landing page. Otherwise you won’t know what moved the needle.",
    },
    {
      q: "Are UTM tags required for A/B tests?",
      a: "For Yandex Metrica or GA4 comparisons — strongly recommended, plus ad IDs in URL templates when the platform provides them.",
    },
  ],
  sections: [
    {
      title: "Why A/B test paid search",
      level: 2,
      paras: [
        "Two ads on the same query can deliver different CTR, bounce rate, and CPA. Without a test you’re optimizing by gut feel or whatever week looked lucky.",
        "Built-in rotation makes fair impression sharing easier; analytics and experiments let you dig deeper — including strategies and negative keywords.",
      ],
      lists: [
        {
          intro: "What teams usually test:",
          items: [
            "headlines and body copy;",
            "sitelinks and callouts;",
            "offer and USP;",
            "landing pages (carefully — one hypothesis);",
            "bids and strategies via an experiment.",
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
      title: "Built-in tools in Yandex Direct",
      level: 2,
      paras: [
        "In a group with several ads, the system may shift impressions toward the more clickable ones — gradually, after enough stats. Check the exact option names in today’s account UI.",
        "While data is thin, variants often get comparable traffic. Don’t pause the “loser” at ten clicks.",
      ],
      lists: [
        {
          intro: "Practical rules:",
          items: [
            "2–3 variants in a group, not a dozen;",
            "change one variable;",
            "wait for stats;",
            "decide by goals, not CTR alone.",
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
      title: "Rotation and experiments in Google Ads",
      level: 2,
      paras: [
        "Google Ads historically offered rotation modes: optimize for the best performer or rotate more evenly. The options evolved — the idea is either give variants a chance or accelerate the strong ones.",
        "Campaign experiments (formerly “drafts and experiments”) compare settings on a share of traffic: bids, keywords, negatives, strategies. Useful when a second ad alone isn’t enough.",
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Copying the “Additional settings → rotation” path from a 2019 screenshot. Find what the setting means in the current UI or Google Help.",
          kind: "tip",
        },
      ],
    },
    {
      title: "How to compare results in reports",
      level: 2,
      paras: [
        "In Direct, use Report Wizard: slices by group and ad number or text, plus clicks, conversions, and CPA. In Google Ads, use ad and experiment reports.",
        "Business metrics beat clickability: CPA, ROAS/ROI, qualified leads, closed deals. Factor in attribution — last click can undervalue the top of the funnel.",
      ],
      lists: [
        {
          intro: "Report minimum:",
          items: [
            "impressions, clicks, CTR;",
            "conversions and CPA;",
            "spend;",
            "when possible — bounce and depth in Yandex Metrica;",
            "separate search vs. display views.",
          ],
        },
      ],
    },
    {
      title: "When the sample is thin",
      level: 2,
      paras: [
        "If ad-level data is missing, roll up carefully: compare texts or headlines only where variants differ by one variable. Mixing different group themes into one “best ad overall” ranking is a mistake.",
        "Check UTM and ad-id substitution — empty tags break summary tables. Tag templates are covered in the UTM article.",
      ],
      lists: [
        {
          intro: "It’s too early to call the test when:",
          items: [
            "conversions are still single digits;",
            "you’re looking at a week with weird demand;",
            "you also changed bids and keywords;",
            "you mixed search and display into one pile.",
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
      title: "Comparison logic examples",
      level: 2,
      paras: [
        "If only the body differs in a group with the same headline and keywords, grouping by text is fine. If the headline and neighboring group themes also differ, “best text overall” conclusions will be skewed.",
        "Keep search and display separate — different CTR and traffic quality. The test outcome should be an action: pause the weak, scale the strong, or run a new hypothesis.",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "A/B testing in Direct and Google Ads rests on rotation or experiments plus money reports. One hypothesis, enough data, decide by CPA or ROI.",
        "Low traffic — roll up carefully or keep accumulating; don’t crown a CTR winner in a day.",
      ],
    },
  ],
  closing: [
    "Launch two or three variants with one variable, wait for stats, and choose by business goals — that’s when split tests in paid search start saving budget instead of spawning group chaos.",
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
