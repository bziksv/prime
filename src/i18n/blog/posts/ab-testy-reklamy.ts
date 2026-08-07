import type { BlogPost } from "../../../data/blog";

/** EN overlay for ab-testy-reklamy — same structure as RU JSON. */
export const abTestyReklamyEn: BlogPost = {
  slug: "ab-testy-reklamy",
  title: "A/B tests for ads in Yandex Direct and Google Ads",
  date: "2019-02-07",
  category: "Contextual advertising",
  cover: "/images/blog/ab-testy-reklamy/cover-en.webp",
  excerpt:
    "How to compare ads in Direct and Google Ads: rotation, reports, campaign experiments, and what to do with thin stats — without outdated 2019 “advanced settings” clicks.",
  lead: [
    "An A/B (split) test in search/display ads compares variants of creatives or settings on comparable traffic to pick what wins on a business metric — not CTR alone.",
    "Below — built-in Direct and Google Ads mechanisms, how to read reports, and what to do when clicks are scarce. Menu labels change; what matters is equal chance → accumulation → decide by CPA/ROI. Landing A/B is covered in the conversion optimization piece.",
  ],
  faq: [
    {
      q: "Is rotating two ads in a group enough?",
      a: "Often yes for copy/headlines. For strategies, bids, and structure, campaign experiments are better — if your cabinet has them.",
    },
    {
      q: "Is the CTR winner always best?",
      a: "No. High CTR with expensive junk clicks loses to modest CTR with a sane CPA. Watch goals and money.",
    },
    {
      q: "How long to wait?",
      a: "Until you have enough conversions/clicks to decide — not “exactly 7 days from a textbook”. With tiny traffic the test is pointless.",
    },
    {
      q: "Can you change everything at once?",
      a: "Better one hypothesis: headline or offer or landing. Otherwise you won’t know what worked.",
    },
    {
      q: "Are UTMs required?",
      a: "For Metrika/GA4 comparison — strongly recommended, plus ad IDs in URL templates if the cabinet provides them.",
    },
  ],
  sections: [
    {
      title: "Why A/B in paid search",
      level: 2,
      paras: [
        "Two texts on the same query can yield different CTR, bounce, and CPA. Without a test you optimize by gut feel or a random week.",
        "Built-in rotation simplifies impression sharing; analytics and experiments help compare deeper — including strategies and negatives.",
      ],
      lists: [
        {
          intro: "What people usually test:",
          items: [
            "headlines and body copy;",
            "sitelinks and callouts;",
            "offer and USP;",
            "landings (carefully — one hypothesis);",
            "bids/strategies via an experiment.",
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
      title: "Built-in mechanisms in Direct",
      level: 2,
      paras: [
        "In a group with several ads, the system may shift impressions toward more clickable ones — after stats accumulate and gradually. Check exact option names in the current cabinet.",
        "While data is thin, variants often get comparable traffic. Don’t pause the “loser” at ten clicks.",
      ],
      lists: [
        {
          intro: "Practice:",
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
        "Google Ads historically offered rotation types: optimize for best / more even rotation. Options evolved — the idea is give variants a chance or accelerate strong ones.",
        "Campaign experiments (formerly “drafts and experiments”) compare settings on a traffic share: bids, keywords, negatives, strategies. Useful when a second ad alone isn’t enough.",
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Copying the “Additional settings → rotation” path from a 2019 screenshot. Find the meaning of the setting in the current UI or Google Help.",
          kind: "tip",
        },
      ],
    },
    {
      title: "How to compare in reports",
      level: 2,
      paras: [
        "In Direct — Report Wizard: slices by group and ad number/text, clicks, conversions, CPA. In Google Ads — ad and experiment reports.",
        "Business metrics beat clickability: CPA, ROAS/ROI, qualified leads, deals. Account for attribution: last click can undervalue the top of funnel.",
      ],
      lists: [
        {
          intro: "Report minimum:",
          items: [
            "impressions, clicks, CTR;",
            "conversions and CPA;",
            "spend;",
            "when possible — bounce/depth in Metrika;",
            "separate search vs display view.",
          ],
        },
      ],
    },
    {
      title: "Thin stats: what to do",
      level: 2,
      paras: [
        "If ad-level data is missing, roll up: compare texts/headlines via grouping where variants really differ by one variable. Mixing different group semantics into one “best text overall” is a mistake.",
        "Check UTM and ad-id substitution: empty tags break summary tables. Tag templates are in the UTM article.",
      ],
      lists: [
        {
          intro: "When it’s too early to stop the test:",
          items: [
            "conversions are single digits;",
            "a week with anomalous demand;",
            "you also changed bids and keywords;",
            "you mixed search and display in one pile.",
          ],
        },
      ],
      links: [
        {
          label: "UTM tags",
          href: "/en/blog/utm-metki/",
        },
        {
          label: "Click price in Yandex",
          href: "/en/blog/tsena-klika-yandeks/",
        },
      ],
    },
    {
      title: "Comparison logic examples",
      level: 2,
      paras: [
        "If only the body differs in a group with the same headline and keywords — grouping by text is fine. If headline and neighboring group semantics also differ — “best text overall” conclusions will be crooked.",
        "Keep search and display separate: different CTR and traffic quality. The test outcome is an action: pause the weak, scale the strong, new hypothesis.",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "A/B in Direct and Google Ads rests on rotation/experiments and money reports. One hypothesis, enough data, decide by CPA/ROI.",
        "Low traffic — roll up carefully or accumulate; don’t crown a CTR winner in a day.",
      ],
    },
  ],
  closing: [
    "Launch 2–3 variants with one variable, wait for stats, and choose by business goals — that’s when split tests in paid search start saving budget instead of spawning group chaos.",
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
