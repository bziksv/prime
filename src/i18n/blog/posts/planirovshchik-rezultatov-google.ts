import type { BlogPost } from "../../../data/blog";

/** EN overlay for planirovshchik-rezultatov-google — same structure as RU JSON. */
export const planirovshchikRezultatovGoogleEn: BlogPost = {
  slug: "planirovshchik-rezultatov-google",
  title: "Performance Planner in Google Ads: how to use it",
  date: "2020-02-05",
  category: "Paid search",
  cover: "/images/blog/planirovshchik-rezultatov-google/cover-en.webp",
  excerpt:
    "Performance Planner in Google Ads: forecast budget and conversions from live campaigns, plan for seasonality, and reallocate spend across campaigns — and how it differs from Keyword Planner.",
  lead: [
    "Performance Planner helps estimate what happens to clicks, conversions, and CPA if you change budget or move money between Google Ads campaigns that are already running.",
    "It isn’t Keyword Planner, and it isn’t a from-scratch forecast by search volume. We cover why the tool exists, which campaigns can enter a plan, typical scenarios, and accuracy limits. Ads UI paths change — check the current labels.",
  ],
  faq: [
    {
      q: "How is it different from Keyword Planner?",
      a: "Keyword Planner estimates demand and phrases before or outside deep account stats. Performance Planner builds budget scenarios for campaigns with history.",
    },
    {
      q: "Why doesn’t a campaign appear in the plan?",
      a: "Often not enough data: short run time, few clicks or conversions, or an unsupported strategy or type. Eligibility rules change — follow the tool’s hints.",
    },
    {
      q: "Is the forecast the same as reality?",
      a: "No. It’s a model. In practice deviation can be noticeable; use it as an order of magnitude and for scenario comparison — not a contract with Google.",
    },
    {
      q: "Can I edit the plan directly in Ads?",
      a: "The plan itself doesn’t change campaigns. To implement, apply changes deliberately (manually or via upload tools) after review.",
    },
    {
      q: "What is it used for most often?",
      a: "Seasonal budget growth at a target CPA; estimating growth ceiling; reallocating budget across campaigns for more conversions.",
    },
    {
      q: "Should campaigns in one plan share the same goals?",
      a: "Preferably yes: otherwise the optimizer pours money between incomparable KPIs. Group similar goals.",
    },
    {
      q: "Does it replace a media plan?",
      a: "It complements one: numbers for campaigns already running. You still set channel strategy and KPIs.",
    },
  ],
  sections: [
    {
      title: "What Performance Planner can do",
      level: 2,
      paras: [
        "The tool builds a forecast: what spend you need for a clicks, conversions, or value goal; how the budget → result curve shifts; and how to allocate spend more sensibly across selected campaigns.",
        "For a meaningful plan, campaigns usually need to be live with a minimum of stats (days, clicks, conversions) and a supported bidding strategy. Exact thresholds live in help and account hints — not old “3 days / 3 clicks / 1 conversion” dogma.",
        "Creating a plan: pick campaigns → set period and target metric → get a chart and scenario table. It’s handy to compare current mode with “max reach” and a CPA goal.",
      ],
      lists: [
        {
          intro: "Typical jobs:",
          items: [
            "season: how much budget to add at the same CPA",
            "growth ceiling for Search or dynamic campaigns",
            "moving budget between campaigns",
            "a client argument for “why we ask +X% this quarter.”",
          ],
        },
      ],
      links: [
        {
          label: "Google Ads traffic forecast",
          href: "/en/blog/prognoz-trafika-google-ads/",
        },
      ],
    },
    {
      title: "Season and target CPA",
      level: 2,
      paras: [
        "Set the peak period and a limit on average conversion cost. The planner shows which spend fits your CPA and how many conversions to expect versus the baseline.",
        "If some campaigns lack history, the system may offer a seasonality coefficient — use a similar period last year, not a “six-month average,” if the niche is clearly seasonal.",
        "A “max conversions at any cost” scenario often breaks your CPA ceiling: move the goal by hand and watch a point on the curve — not the chart edge.",
      ],
      lists: [],
      notes: [
        {
          title: "Tip",
          kind: "tip",
          text: "Don’t copy numbers from other people’s case studies (or old currency figures). Look at your own curve in the account.",
        },
      ],
    },
    {
      title: "Search growth and campaigns Keyword Planner can’t estimate",
      level: 2,
      paras: [
        "Sometimes Keyword Planner struggles with narrow or special setups, while Performance Planner still shows growth headroom from live campaign history.",
        "Don’t look only at the “maximum” edge: the middle of the curve often balances conversions and CPA better. The comparison tab helps visualize current vs proposed spend.",
        "Dynamic and other formats can enter budget scenarios too — but first make sure the conversion column is the one you need now (imported goals go stale).",
      ],
      lists: [],
    },
    {
      title: "Reallocating budget across campaigns",
      level: 2,
      paras: [
        "Spend-optimization mode at the same total budget looks for a shift toward campaigns with a better forecast return. That’s a system hypothesis: check which campaigns it wants to boost and why.",
        "Review by hand: does the plan cut learning campaigns, brand, or strategically important regions for a short-term “+N conversions” in the model?",
        "After picking a scenario, lock bid and budget changes deliberately. A plan in the library doesn’t rebuild the account by itself.",
      ],
      lists: [],
      links: [
        {
          label: "Media plan",
          href: "/en/blog/mediaplan/",
        },
        {
          label: "Google Ads strategies",
          href: "/en/blog/strategii-google-ads/",
        },
      ],
    },
    {
      title: "Limits and common sense",
      level: 2,
      paras: [
        "Not every campaign type and strategy enters a plan. Default period windows and metric sets don’t always match your job — set them manually.",
        "If Conversions includes outdated or utility goals, the forecast will lie: clean tracking before planning. Plan vs fact can diverge several times when demand, the site, or competition shifts.",
        "Use the tool as a negotiation and scenario layer on top of your economics — next to the media plan and lead unit economics.",
      ],
      lists: [
        {
          intro: "Remember:",
          items: [
            "this is not Keyword Planner",
            "you need live campaign stats",
            "forecast ≠ guarantee",
            "CPA goal beats the chart edge",
            "applying changes is a separate step.",
          ],
        },
      ],
    },
  ],
  closing: [
    "Build a plan from campaigns with one goal, lock a target CPA, and compare 2–3 points on the curve — easier to agree a seasonal budget than arguing by gut feel.",
  ],
  related: [
    "prognoz-trafika-google-ads",
    "mediaplan",
    "strategii-google-ads",
    "byudzhet-yandeks-direkt",
    "metriki-reklamy",
    "analiz-reklamnoy-kampanii",
  ],
};
