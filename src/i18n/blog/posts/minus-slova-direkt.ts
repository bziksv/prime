import type { BlogPost } from "../../../data/blog";

/** EN overlay for minus-slova-direkt — same structure as RU JSON. */
export const minusSlovaDirektEn: BlogPost = {
  slug: "minus-slova-direkt",
  title: "Negative keywords in Yandex Direct: how to cut non-target demand",
  date: "2018-10-25",
  category: "Contextual advertising",
  cover: "/images/blog/minus-slova-direkt/cover-en.webp",
  excerpt:
    "How to set negative keywords and phrases in Yandex Direct: add levels, word-form operators, cross-negatives, and caution in the Display Network — without blindly copying “universal lists” from the web.",
  lead: [
    "Negative keywords in Direct are exclusions: which queries (and close phrasings) shouldn’t show the ad. That narrows the audience toward more qualified demand and saves budget on “download”, “free”, competitor brands, and irrelevant modifiers.",
    "Below — what the tool does, add levels, word-form nuances, and cross-negatives. Cabinet menu labels change; orient on campaign / ad group / keywords. Check ready-made “500 negatives” lists against your offer.",
  ],
  faq: [
    {
      q: "Are a negative word and a negative phrase the same?",
      a: "A word is one exclusion; a phrase is a combination. Both cut non-target demand phrasings.",
    },
    {
      q: "Can you use a universal list?",
      a: "As a draft — yes. As the final set — no: you can easily cut useful demand or leave niche junk.",
    },
    {
      q: "What wins: keyword or negative?",
      a: "If a negative matches a keyword, the keyword usually wins (cabinet logic). Don’t add a negative that kills your own phrase.",
    },
    {
      q: "Why cross-negatives?",
      a: "So head and refined keywords don’t compete inside the campaign: a broad phrase doesn’t steal traffic from a narrow one.",
    },
    {
      q: "Are negatives risky in the Display Network?",
      a: "Yes if overdone: placement themes depend heavily on keywords. A harsh negative can shrink reach too far.",
    },
  ],
  sections: [
    {
      title: "Why negative keywords matter",
      level: 2,
      paras: [
        "Wordstat and the search-terms report show tails that don’t lead to leads: informational (“DIY”), wrong geo, used goods when you sell new only, job seekers for a B2B service.",
        "Negatives are part of semantics alongside the core. Without them, broad keywords burn budget even with a “pretty” CTR.",
      ],
      lists: [
        {
          intro: "Typical negative candidates:",
          items: [
            "free / download / torrent;",
            "job / vacancy / courses (if not your service);",
            "used / classifieds (if not your channel);",
            "competitor brands and cities outside delivery;",
            "irrelevant modifiers from Wordstat.",
          ],
        },
      ],
      links: [
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Yandex Direct strategies",
          href: "/en/blog/strategii-yandeks-direkt/",
        },
      ],
    },
    {
      title: "Where to add: campaign, group, keywords",
      level: 2,
      paras: [
        "Shared exclusions (universal junk) fit at campaign level. Cluster refinements — at the ad group. Point keyword conflicts — on keywords or via cross-negatives.",
        "Don’t paste the same giant list everywhere without need: harder to maintain and easier to err when editing.",
      ],
      lists: [
        {
          intro: "Practical order:",
          items: [
            "pull negatives from the search-terms report;",
            "split shared vs cluster;",
            "check that keywords aren’t killed;",
            "export search terms again in a week.",
          ],
        },
      ],
    },
    {
      title: "Word forms and operators",
      level: 2,
      paras: [
        "A negative usually covers word forms (gender, number, case). For one exact form only — use locking operators (historically `!` before the word; check current Direct Help syntax).",
        "Negative phrases cut combinations as a whole. A bad phrase can cut more than you planned — validate on sample queries.",
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Paste a “for every niche” list and kill half of commercial demand. Start from your own stats queries.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Cross-negatives",
      level: 2,
      paras: [
        "If you have “rent a house” and “rent a house SPb”, minus geo/refinements on the broad phrase so narrow-keyword traffic isn’t intercepted. That lowers internal ad competition.",
        "Do cross-negatives deliberately by cluster tree — not by minusing everything. In auto strategies and unified performance campaigns, overlap logic may differ — check current Yandex guidance.",
      ],
      lists: [
        {
          intro: "When cross-negatives help:",
          items: [
            "clear head → mid → long-tail hierarchy;",
            "different landings for refinements;",
            "need ad-copy control per query.",
          ],
        },
      ],
    },
    {
      title: "Search vs Display Network",
      level: 2,
      paras: [
        "In search, negatives cut query phrasings. In Display, keywords shape placement themes more: an aggressive negative can remove useful inventory.",
        "For networks, start with a soft list and watch placements/display conditions — don’t copy search negatives one-to-one.",
      ],
      links: [
        {
          label: "Ad campaign audit",
          href: "/en/blog/audit-reklamnoy-kampanii/",
        },
        {
          label: "Click price in Yandex",
          href: "/en/blog/tsena-klika-yandeks/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Negative keywords are a living list from your reports — not a one-time ritual. Universal negatives are a draft; cross-negatives fight keyword cannibalization.",
        "Export search terms regularly and clean: that’s how Direct feeds less non-target demand.",
      ],
    },
  ],
  closing: [
    "Build negatives from Wordstat and the search-terms report, place them by campaign level, check word forms and cross-negatives between clusters — and don’t trust downloaded “universal” lists blindly.",
  ],
  related: [
    "strategii-yandeks-direkt",
    "semanticheskoe-yadro",
    "audit-reklamnoy-kampanii",
    "tsena-klika-yandeks",
    "ab-testy-reklamy",
    "klyuchi-google-ads",
  ],
};
