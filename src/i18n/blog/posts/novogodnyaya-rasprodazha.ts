import type { BlogPost } from "../../../data/blog";

/** EN overlay for novogodnyaya-rasprodazha — same structure as RU JSON. */
export const novogodnyayaRasprodazhaEn: BlogPost = {
  slug: "novogodnyaya-rasprodazha",
  title: "New Year sale campaigns in Yandex Direct and Google Ads",
  date: "2019-01-10",
  category: "Contextual advertising",
  cover: "/images/blog/novogodnyaya-rasprodazha/cover-en.webp",
  excerpt:
    "How to prep paid search for a New Year sale: demand and forecast, buyer types, creatives, separate campaigns, and what to do after the holidays — without blindly copying 2017 US stats.",
  lead: [
    "The New Year season in paid search isn’t only “−30% in December”. You need a demand forecast, different messages for early and late buyers, separate creatives, and a careful exit after the holidays.",
    "Below — a working frame for Yandex Direct and Google Ads. NRF/Trends figures from old reviews are order-of-magnitude examples, not law for your niche. Peak-season retargeting is in a separate piece.",
  ],
  faq: [
    {
      q: "When to start gift ads?",
      a: "Check your past years and Wordstat/Trends for the niche. For many, demand rises weeks before the peak — not only on Dec 31.",
    },
    {
      q: "A separate campaign for the sale?",
      a: "Yes, it’s cleaner: own ads, negatives, budget, and end date. Don’t mix the main campaign with a seasonal offer.",
    },
    {
      q: "Is retargeting mandatory?",
      a: "It helps a lot at peak, but doesn’t replace search and shopping campaigns. Holiday retargeting tactics are covered separately.",
    },
    {
      q: "What after the holidays?",
      a: "Change creatives, lower bids when competition drops, communicate working hours, and turn off sale ads on schedule.",
    },
    {
      q: "Is sales growth guaranteed?",
      a: "No. Paid search amplifies demand and offer; without stock, logistics, and a sale landing, budget burns.",
    },
  ],
  sections: [
    {
      title: "Demand analysis and forecast",
      level: 2,
      paras: [
        "Lean on last year’s season stats: clicks, CPA, product categories, bounce. Drop one-off spikes that won’t repeat.",
        "Add industry context: how demand behaved this year before the season. Click forecasts guide budget — not a revenue promise. Other people’s Trends charts help with curve shape, not for copying “US percentages”.",
      ],
      lists: [
        {
          intro: "Forecast minimum:",
          items: [
            "last year’s season in Direct/Ads and Metrika;",
            "top gift categories and queries;",
            "warehouse capacity and delivery SLAs;",
            "budget cap for peak days.",
          ],
        },
      ],
      links: [
        {
          label: "Traffic forecast",
          href: "/en/blog/prognoz-trafika/",
        },
      ],
    },
    {
      title: "Buyer types in the season",
      level: 2,
      paras: [
        "Roughly split the audience: early planners, discount hunters (sale peaks), rationals (compare longer), last-minute (time-poor).",
        "Different types need different messages and timing: early — assortment and sets; discount seekers — a clear USP in the noise; last-minute — fast delivery and “in stock today”.",
      ],
      lists: [
        {
          intro: "Practical move:",
          items: [
            "separate groups/campaigns by season stage;",
            "ad schedules for peaks;",
            "“for myself” vs “as a gift” — different creatives;",
            "don’t promise delivery your warehouse can’t meet.",
          ],
        },
      ],
    },
    {
      title: "Creatives and landings for the sale",
      level: 2,
      paras: [
        "In the ad — sale dates, benefit, limits. On the landing — the same terms, stock, delivery before the holiday. Promise vs page mismatch kills conversion and traffic quality.",
        "Prep 2–3 creative sets early: pre-peak, peak, post-holiday. Test headlines carefully — see the paid-search A/B piece.",
      ],
      links: [
        {
          label: "Ad A/B tests",
          href: "/en/blog/ab-testy-reklamy/",
        },
        {
          label: "Landing copy",
          href: "/en/blog/tekst-lendinga/",
        },
      ],
    },
    {
      title: "Campaign setup in Direct and Google Ads",
      level: 2,
      paras: [
        "Move the sale into a separate campaign with an end date. Pause or narrow the main line so budget doesn’t leak into ordinary ads without the seasonal offer.",
        "Google Ads often has rules/schedules for auto-stop; in Direct plan the date manually or via a separate timed campaign — check current cabinet options. Peak bids are usually higher: set CPA expectations in advance.",
      ],
      lists: [
        {
          intro: "Launch checklist:",
          items: [
            "gift/sale semantics + negatives;",
            "separate seasonal budget;",
            "UTM and goals in analytics;",
            "warm retargeting;",
            "alerts on stock and delivery SLAs.",
          ],
        },
      ],
      links: [
        {
          label: "Holiday retargeting",
          href: "/en/blog/prazdnichnyy-retargeting/",
        },
        {
          label: "Yandex Direct strategies",
          href: "/en/blog/strategii-yandeks-direkt/",
        },
      ],
    },
    {
      title: "After the holidays",
      level: 2,
      paras: [
        "Demand doesn’t hit zero in one day: some purchases and “top-ups” come after. Change creative themes, communicate the schedule, lower bids as the auction cools.",
        "Turn off sale ads on plan and restore the main campaign. Otherwise people click “−50% until Dec 31” while the site already shows regular prices.",
      ],
      notes: [
        {
          title: "Important",
          text: "Legally correct sale terms (dates, limits, availability) beat a pretty banner. Don’t promise what you can’t deliver.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "A seasonal sale in paid search = forecast + buyer segments + separate campaigns + an honest offer. Someone else’s “when Americans buy” percentages won’t replace your numbers.",
        "After the peak, discipline matters too: creative swap and stopping the sale on date.",
      ],
    },
  ],
  closing: [
    "Build a forecast from your data, split early and late buyers, put the sale in its own campaign, and plan the post-holiday exit — that’s how New Year paid search wastes less budget.",
  ],
  related: [
    "prazdnichnyy-retargeting",
    "prognoz-trafika",
    "ab-testy-reklamy",
    "strategii-yandeks-direkt",
    "promoaktsii",
    "retargeting-direkt",
  ],
};
