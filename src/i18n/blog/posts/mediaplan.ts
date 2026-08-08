import type { BlogPost } from "../../../data/blog";

/** EN overlay for mediaplan — same structure as RU JSON. */
export const mediaplanEn: BlogPost = {
  slug: "mediaplan",
  title: "Ad campaign media plan: why you need one and how to build it",
  date: "2020-08-15",
  category: "Paid search",
  cover: "/images/blog/mediaplan/cover-en.webp",
  excerpt:
    "What an advertising media plan is, how it differs from a content calendar, how to build a table of channels, budget, and timelines, and where to start testing paid search — without copying someone else’s template line for line.",
  lead: [
    "A media plan is your working sheet for paid media: channels, budgets, timelines, KPIs, and who’s accountable. Without it, multi-platform campaigns turn into spend chaos and “here’s how it went” screenshot dumps.",
    "Below: why small and large businesses need a plan, which blocks to assemble, how it differs from a content plan, and how to sketch paid search with a forecast tool. A competitor template without adapting to your margins and sales capacity almost always misses.",
  ],
  faq: [
    {
      q: "How is a media plan different from a content plan?",
      a: "A content plan is the queue of posts and articles. A media plan covers ad channels, impression and click budgets, campaign timelines, and KPIs. They overlap, but they’re different tables.",
    },
    {
      q: "Do I need a media plan for a single channel?",
      a: "Yes, in a light form: goal, budget, timeline, KPI, owner. Otherwise it’s hard to stop on time or explain the spend.",
    },
    {
      q: "Where should a beginner start?",
      a: "With a numeric goal, an audience profile, and one or two channels for a test. Don’t split budget across ten platforms in week one.",
    },
    {
      q: "Can I copy a competitor’s media plan?",
      a: "As a structure guide — yes. As ready-made numbers and channels — no: you have different awareness, margins, and funnel.",
    },
    {
      q: "How do I estimate a paid-search budget?",
      a: "Use Direct/Ads forecasts by geo and keywords, plus your own economics (CPA, conversion). Forecast figures are approximate, not a promise.",
    },
    {
      q: "Can the media plan change mid-flight?",
      a: "It can and should — based on tests: cut weak channels, fund what works, refine the audience. Log why you edited.",
    },
    {
      q: "Does a media plan replace bid strategies?",
      a: "No. The media plan sets the channel and budget frame; bids and caps inside Direct/Ads are a separate layer.",
    },
  ],
  sections: [
    {
      title: "Why you need a media plan",
      level: 2,
      paras: [
        "Without a plan, timelines drift, budgets blur, and a report to the client or owner becomes a stack of screenshots. Several channels (Search, Display/YAN, social, offline) with no summary table almost guarantee forgotten launches and double spend.",
        "A media plan locks expectations early: how many leads or sales, in what time, at what cost. Then it’s easier to move money from a platform with no response to one that delivers.",
      ],
      lists: [
        {
          intro: "The plan covers:",
          items: [
            "budget transparency by channel",
            "launch calendar and reporting checkpoints",
            "actuals vs KPI comparison",
            "a shared language with the agency or team",
            "a history of why you changed a channel",
          ],
        },
      ],
      links: [
        {
          label: "Content plan",
          href: "/en/blog/kontent-plan/",
        },
      ],
    },
    {
      title: "What to build the plan from: analysis and goals",
      level: 2,
      paras: [
        "Start with the market: who the product is for, how competitors differ, which USPs and reviews already work. Without an audience profile you can’t write copy, set targeting, or pick search keywords.",
        "State the ad goal in numbers: lead growth, revenue, traffic, subscribers, awareness. “Just get the word out” doesn’t belong in a media plan — there’s nothing to measure against.",
      ],
      lists: [
        {
          intro: "Typical campaign goals:",
          items: [
            "sales and upsells",
            "leads and calls",
            "reach and awareness",
            "community engagement",
            "promo and launch announcements",
          ],
        },
      ],
    },
    {
      title: "Platforms, strategy, and timelines",
      level: 2,
      paras: [
        "Channels split into online (search, networks, partner sites) and offline (TV, OOH, print). There’s no universal “best” platform: watch where the audience decides to buy.",
        "Search ads meet already-formed demand (“buy…”). Social targeting more often works a colder audience by demographics and interests. Mixing high-intent search expectations with cold targeting in one KPI cell is a common mistake.",
        "On duration, three modes help: always-on (long horizon), burst (promos up to a month), pulsing (seasonal). Lock each media-plan row’s end date — or you get an endless campaign with no review.",
      ],
      notes: [
        {
          kind: "tip",
          text: "“First search-result rows are always ads” and exact purchase shares like “60% in the evening” are simplifications from old guides. Trust your own reports by time and device.",
        },
      ],
    },
    {
      title: "Schedule, test, and budget",
      level: 2,
      paras: [
        "The plan needs not only campaign start/stop dates, but also creative cadence, email sends, and reporting cuts. Universal “best posting hours” are weaker than your audience stats: watch your data, not someone else’s averages.",
        "Testing is required: hypothesis on platform, USP, audience → small budget → decision (keep / fix / kill). A test with no analysis is wasted spend. When learning stalls, scale what works — don’t launch ten more hypotheses at once.",
        "Test budget depends on niche and cost per click or contact. Outside case studies are rough guides, not templates to copy. For paid search, Direct/Ads forecasts help: geo, keywords, duration → order of clicks and bids; your economics (CPA, conversion) decide whether the numbers fit.",
      ],
      lists: [
        {
          intro: "Minimum table columns:",
          items: [
            "channel / format",
            "goal and KPI",
            "budget and period",
            "audience / keywords",
            "owner",
            "status: test / live / stop",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Direct budget",
          href: "/en/blog/byudzhet-yandeks-direkt/",
        },
        {
          label: "Google Ads traffic forecast",
          href: "/en/blog/prognoz-trafika-google-ads/",
        },
      ],
    },
    {
      title: "Table structure: channel, schedule, summary",
      level: 2,
      paras: [
        "Three layers work well. Channel sheet — what you run, which content or offer, cost per contact. Schedule — launch and touch dates so nothing falls off the calendar. Project summary — actuals vs plan on KPIs for the client or board.",
        "Online templates are fine as a frame. Always rebuild numbers, audience, and channel mix for your business: offline footprint, brand awareness, and sales maturity change the plan more than a pretty spreadsheet.",
      ],
    },
    {
      title: "Paid search in the media plan and common mistakes",
      level: 2,
      paras: [
        "Paid search is often the first test: high-intent demand, relatively fast lead feedback. In the media-plan row, state geo, keyword set, budget cap, target CPA, and test window — or “we just launched Direct” has nothing to compare against.",
        "Audience profiles work better as several segments than “everyone 18–65.” Changing the plan is normal: audiences, platform budgets, timelines — when you have data. A rigid “wrote once for a year” plan usually drifts from the market.",
      ],
      lists: [
        {
          intro: "Keep in mind:",
          items: [
            "media plan ≠ content plan",
            "goals only in numbers",
            "test → conclusion → scale",
            "forecast ≈ estimate, not a guarantee",
            "plan edits — with a reason in the note",
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
  ],
  closing: [
    "Build one table: goal, one or two channels for a test, budget and KPIs for two weeks — then expand only what fits the economics, not “the whole market at once.”",
  ],
  related: [
    "kontent-plan",
    "byudzhet-yandeks-direkt",
    "prognoz-trafika-google-ads",
    "strategii-yandeks-direkt",
    "stavki-direkt",
    "kontekst-i-seo",
  ],
};
