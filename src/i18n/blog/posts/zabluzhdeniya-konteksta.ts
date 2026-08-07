import type { BlogPost } from "../../../data/blog";

/** EN overlay for zabluzhdeniya-konteksta — same structure as RU JSON. */
export const zabluzhdeniyaKontekstaEn: BlogPost = {
  slug: "zabluzhdeniya-konteksta",
  title: "Contextual advertising: 15 myths it’s time to drop",
  date: "2020-01-13",
  category: "Paid search",
  cover: "/images/blog/zabluzhdeniya-konteksta/cover-en.webp",
  excerpt:
    "Persistent PPC myths: search only, TOP-1 only, “display always burns,” blind Google recommendations, instant sales, and “triple the budget — triple the leads” — what’s wrong with each one.",
  lead: [
    "Some client–agency fights over paid search still rest on stereotypes from the “keywords in Search only” era. Markets, auctions, and tools changed — the myth wording often didn’t.",
    "Fifteen typical misconceptions and why they hurt economics. Don’t copy “$200 a month” budget figures or outsider ranking stories: watch your niche, CPA, and landing pages.",
  ],
  faq: [
    {
      q: "Is contextual advertising the same as Search only?",
      a: "No. Search is part of PPC. There are networks, shopping and smart formats, remarketing, and display with different KPIs.",
    },
    {
      q: "Do I always need position #1?",
      a: "Not always. Positions 2–4 sometimes deliver better ROI at a lower CPC. Count conversions and ROAS — not “height.”",
    },
    {
      q: "Should I apply every Google recommendation?",
      a: "No. They’re system hints for the platform’s goals. Filter them through your economics and account structure.",
    },
    {
      q: "I don’t see my ad — is it broken?",
      a: "Not necessarily. Auction, frequency, click history, geo, and device all matter. Use the account preview — not “I Googled on my phone.”",
    },
    {
      q: "If I triple the budget, do I triple the leads?",
      a: "Rarely linear. Competition for leftover demand rises and CPA shifts. Scale in steps.",
    },
    {
      q: "Should I run ads only during call-center hours?",
      a: "Depends on the funnel. Night leads can queue; unanswered calls are wasted spend. Match the schedule to the touch type.",
    },
    {
      q: "Is site structure only for SEO?",
      a: "No. For dynamic and shopping formats, page and feed quality hit ads and learning directly.",
    },
  ],
  sections: [
    {
      title: "Search, positions, and display",
      level: 2,
      paras: [
        "The myth “contextual = only Search keywords” is outdated: networks, shopping campaigns, remarketing, and lookalikes cover other funnel stages. Search is strong on hot demand, but expensive and it doesn’t cover everything.",
        "The myth “all conversions only from TOP-1–3” pushes overpaying for visibility. Mid positions are often better on ROI: fewer clicks, cheaper contact. Watch target actions and ad-spend share — not the “pretty” first line.",
        "The myth “display always burns” confuses a broad banner with no goal and meaningful reach, remarketing, and personalization. Display has different KPIs — awareness, return, warm-up — not “a lead from the first impression like Search.”",
      ],
      lists: [
        {
          intro: "Instead of the stereotype:",
          items: [
            "mix Search and networks for the job;",
            "judge position via CPA / ROMI (return on marketing investment);",
            "give display a goal and segment — not “just a banner.”",
          ],
        },
      ],
      links: [
        {
          label: "Contextual ads and SEO",
          href: "/en/blog/kontekst-i-seo/",
        },
        {
          label: "Ad campaign mistakes",
          href: "/en/blog/oshibki-reklamnoy-kampanii/",
        },
      ],
    },
    {
      title: "Google automation, Smart, and site structure",
      level: 2,
      paras: [
        "The myth “apply every Google recommendation at once” turns the account into a checkbox list. Some tips help; some optimize for the platform’s auction volume. Decide through your margin and a test.",
        "The myth “Search first, Smart/shopping later” delays strong e-commerce formats. Shopping and smart campaigns (historically Smart Shopping; later ecosystems moved toward Performance Max and peers — check current types) lean on feed and learning: plan them early if the catalog is ready.",
        "The myth “site structure is only for SEO” breaks DSA and shopping ads: weak titles, descriptions, and categories → weak auto-ads. Preparing landings and the feed is part of PPC — not “someday for organic.” Don’t confuse SEO TOP timelines with launching paid search: site prep and organic ranking growth run on different clocks.",
      ],
      notes: [
        {
          kind: "tip",
          text: "Google campaign names have changed. Check the current list in Ads and Help — don’t cling to a 2019 label.",
        },
      ],
      links: [
        {
          label: "Google Merchant Center",
          href: "/en/blog/google-merchant-center/",
        },
        {
          label: "Site before advertising",
          href: "/en/blog/sayt-pered-reklamoy/",
        },
      ],
    },
    {
      title: "“I don’t see the ad” and expecting sales in a day",
      level: 2,
      paras: [
        "The myth “if I or my family don’t see the ad — it’s broken” ignores the auction, frequency, ad quality, and the system cutting empty repeats. Use the account preview — it doesn’t spoil stats like endless self-clicks.",
        "The myth “launched today — sales today” only happens on impulse goods with a perfect funnel. Long deal cycles, a raw site, little learning data, and an unknown brand push results to days and weeks — that isn’t automatically “the agency is bad.”",
        "The myth “a new product doesn’t need display” leaves a niche with no Search demand starving. Sometimes display creates the queries Search later catches.",
      ],
    },
    {
      title: "Ad copy, budgets, and tests",
      level: 2,
      paras: [
        "The myth “tasty copy is everything” underplays account structure, semantics, landing pages, and tool mix. Copy matters — it doesn’t replace the system.",
        "Myths like “$200/month covers everything” and “$40 is enough to test a new tool for a month” almost always lie in competitive niches: a test must gather stats, or you’re tuning settings on noise.",
        "The myth “experiment = change every banner, target, budget, and strategy at once” kills conclusions. Change one or two levers per iteration.",
        "The myth “×3 budget = ×3 conversions” isn’t linear: leftover demand gets pricier, CPA rises. Scale in steps and watch the return curve.",
        "The myth “run only while the call center works” fits unanswered calls, but hurts if leads queue in CRM. Match the schedule to conversion type.",
      ],
      lists: [
        {
          intro: "Practical antidotes:",
          items: [
            "test budget from a target conversion count — not a “round” sum;",
            "one hypothesis lever at a time;",
            "scale after a stable CPA;",
            "schedule = lead type (call vs form).",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Direct budget",
          href: "/en/blog/byudzhet-yandeks-direkt/",
        },
        {
          label: "Google Performance Planner",
          href: "/en/blog/planirovshchik-rezultatov-google/",
        },
      ],
    },
    {
      title: "A short list instead of an argument",
      level: 2,
      paras: [
        "Lock with the client: goal and KPI, acceptable CPA, learning horizon, what counts as a successful test. Then myths less often replace the report.",
        "Reread disputed claims through economics: if you can’t check the statement with a number over a period — it’s taste, not PPC law.",
      ],
      lists: [
        {
          intro: "15 myths in one line each:",
          items: [
            "contextual ≠ Search only;",
            "not TOP-1 only;",
            "display isn’t always a burn;",
            "not every Google tip is an order;",
            "smart/shopping formats aren’t “for later”;",
            "the site matters for PPC too;",
            "“I don’t see it” ≠ broken;",
            "don’t expect sales on day X;",
            "new demand may need display;",
            "copy isn’t the whole system;",
            "tiny budget ≠ a test;",
            "micro-budget on a tool ≠ a conclusion;",
            "don’t change everything at once;",
            "budget doesn’t scale linearly;",
            "schedule to lead type.",
          ],
        },
      ],
    },
  ],
  closing: [
    "Drop two or three of the most harmful myths from the brief before launch — you’ll agree on KPIs faster than arguing after the first click invoice.",
  ],
  related: [
    "oshibki-reklamnoy-kampanii",
    "kontekst-i-seo",
    "sayt-pered-reklamoy",
    "byudzhet-yandeks-direkt",
    "metriki-reklamy",
    "analiz-reklamnoy-kampanii",
  ],
};
