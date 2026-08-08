import type { BlogPost } from "../../../data/blog";

/** EN overlay for bidder — same structure as RU JSON. */
export const bidderEn: BlogPost = {
  slug: "bidder",
  title: "Bidder (bid manager): why you need it and how to choose",
  date: "2018-03-14",
  category: "Paid search",
  cover: "/images/blog/bidder/cover-en.webp",
  excerpt:
    "What a bidder is for Direct and Google Ads: automated bid management via API, pros and cons, when a third-party tool fits, and how to check the effect — next to native account strategies.",
  lead: [
    "A bidder (bid manager) is a service that, by rules and API, turns bids in paid search without manually tweaking every ad. The idea is to react to the auction faster than a person.",
    "Below: why teams connect one, strengths and weaknesses, and how to choose. Brand lists from 2018 are outdated — check current Direct/Ads and agency-account features. Highest bid ≠ forever first place: ad and landing-page quality are in the auction too.",
  ],
  faq: [
    {
      q: "How is a bidder different from bids in Direct?",
      a: "In the account — native manual and auto strategies. A bidder is an external rules layer on top of the API. Built-in strategies are often enough.",
    },
    {
      q: "Does a beginner need a bidder?",
      a: "First structure, negatives, ads, and goals. Auto-bidding without a base only speeds up waste.",
    },
    {
      q: "If the bidder runs 24/7, can you forget the campaigns?",
      a: "No. You need limits, CPA/spend monitoring, and rule edits. Autopilot without reports is dangerous.",
    },
    {
      q: "Does a higher bid always mean a higher position?",
      a: "Not always. Bid and quality both count. Chasing only first place is expensive and not always more profitable.",
    },
    {
      q: "Which bidder service should you choose?",
      a: "One that supports your accounts, offers clear rules/limits and a change log. Don’t buy on “guaranteed #1” ads.",
    },
    {
      q: "How can you tell the bidder is helping?",
      a: "Compare before/after with other things equal: spend, CPA/CPL, share of target clicks. Without a baseline, conclusions are guesswork.",
    },
    {
      q: "Are API access and bidder permissions a risk?",
      a: "Yes: grant the minimum needed rights, store access centrally, revoke when you change contractors.",
    },
  ],
  sections: [
    {
      title: "Why a bid manager",
      level: 2,
      paras: [
        "On competitive keywords bids drift constantly. Manually you can’t keep up with hundreds of groups: a bidder raises/lowers bids by rules, holds a position or a target CPC within set bounds.",
        "It makes sense with many keywords/groups and clear economics. On a short test with a dozen keywords, account strategies are usually enough.",
      ],
      links: [
        {
          label: "Bids in Yandex Direct",
          href: "/en/blog/stavki-direkt/",
        },
        {
          label: "Click price in Yandex",
          href: "/en/blog/tsena-klika-yandeks/",
        },
      ],
    },
    {
      title: "Pros",
      level: 2,
      paras: [
        "Speed of reaction to the auction and shared rules instead of manual chaos across thousands of rows.",
        "Spend limits and target bid corridors help you not blow up on a night bid spike without control.",
        "Some tools give change summaries and reports — handy for an agency with many accounts.",
      ],
      lists: [
        {
          intro: "When teams usually connect one:",
          items: [
            "many groups and keywords",
            "shared rules across a portfolio",
            "goals in analytics already tracking",
            "a limit and KPI for the test",
          ],
        },
      ],
    },
    {
      title: "Cons and risks",
      level: 2,
      paras: [
        "Bad rules scale the mistake: a bidder quickly burns budget on irrelevance.",
        "Dependence on a third-party service, pricing, and API stability. Switching tools is a separate project.",
        "The illusion that everything runs itself: without negatives, solid ads, and a landing, auto-bids won’t save you.",
      ],
      links: [
        {
          label: "Google Ads strategies",
          href: "/en/blog/strategii-google-ads/",
        },
        {
          label: "Paid-search setup mistakes",
          href: "/en/blog/oshibki-nastroyki-konteksta/",
        },
      ],
    },
    {
      title: "How to choose and verify",
      level: 2,
      paras: [
        "Check Direct/Ads support, rule types (position, CPA, daily limit), log transparency, and access revocation.",
        "Don’t rely on outdated Elama / Aori scorecards from 2018 articles — the tool market moved; check current offers and the contract.",
        "Before enabling, lock one or two weeks of baseline. After — compare KPIs. No improvement with correct rules — simplify or return to account strategies.",
      ],
      links: [
        {
          label: "Ad campaign analysis",
          href: "/en/blog/analiz-reklamnoy-kampanii/",
        },
        {
          label: "Budget in Direct",
          href: "/en/blog/byudzhet-yandeks-direkt/",
        },
      ],
    },
  ],
  notes: {
    title: "Important",
    text: "Third-party bidder names in old roundups may be outdated or renamed. Pick a tool by current API capabilities and your process — not by a 2018 list.",
  },
  closing: [
    "If structure and goals are already solid and manual bids can’t keep up with the auction — test a bidder on part of the campaigns with a hard limit; otherwise close setup hygiene first.",
  ],
  related: [
    "stavki-direkt",
    "tsena-klika-yandeks",
    "strategii-google-ads",
    "byudzhet-yandeks-direkt",
    "analiz-reklamnoy-kampanii",
    "oshibki-nastroyki-konteksta",
  ],
};
