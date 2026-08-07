import type { BlogPost } from "../../../data/blog";

/** EN overlay for interfeys-yandeks-direkt — same structure as RU JSON. */
export const interfeysYandeksDirektEn: BlogPost = {
  slug: "interfeys-yandeks-direkt",
  title: "Yandex Direct interface: from the 2018 beta to stats-driven work",
  date: "2018-08-08",
  category: "Contextual advertising",
  cover: "/images/blog/interfeys-yandeks-direkt/cover-en.webp",
  excerpt:
    "What the “new” Direct beta of 2018 changed — and which principles remain: tables, filters, bulk ops, and report-driven management — without a call to “join the beta.”",
  lead: [
    "In August 2018 Yandex opened a beta of an updated Direct interface: focus on tables, filters, speed, and working “from stats,” not from scattered screens. The old UI was later turned off — there is no separate “beta” to enter anymore.",
    "Below — what that redesign meant and how to use the current cabinet in the same logic. Menu items and wizard names changed again; orient on section meaning and Direct Help, not 2018 screenshots.",
  ],
  faq: [
    {
      q: "Is the new Direct beta still open?",
      a: "As the 2018 open signup — no. You work in the current interface; the “old/new” switch from that era is gone.",
    },
    {
      q: "Why read about a 2018 redesign?",
      a: "So you don’t hunt outdated clicks in guides and you get the principle: edit campaigns via reports, filters, and bulk actions.",
    },
    {
      q: "Is Commander still needed?",
      a: "For large edits editors/exports are still handy — check Yandex’s current tools. Small edits happen in the web cabinet.",
    },
    {
      q: "Is the Report Wizard required?",
      a: "Yes if you want slices beyond default columns. Without reports optimization turns into guessing.",
    },
    {
      q: "Where should a beginner start in the cabinet?",
      a: "Campaign structure → phrases and ads → Metrika goals → a weekly report on spend and conversions.",
    },
  ],
  sections: [
    {
      title: "What the 2018 beta promised",
      level: 2,
      paras: [
        "Yandex claimed unified formats on one platform and an interface where decisions follow numbers: efficiency on one screen, filters, bulk ops across elements from different account corners.",
        "Access came in waves first (a teaser in the cabinet). Then the new UI became primary and the old one was phased out. “Join the beta” calls from old posts are no longer relevant.",
      ],
      notes: [
        {
          title: "Historical material",
          text: "Don’t treat 2018 “My campaigns” screenshots and popup editors as instructions. Check current names in Help.",
          kind: "tip",
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
      title: "Managing from stats — the principle that stayed",
      level: 2,
      paras: [
        "Redesign gist: fewer “cards for cards’ sake,” more campaign/group/phrase tables with metrics, fast filters, and jumps into reports. Easier to find losing slices and scale winners.",
        "In current Direct keep spend, clicks, conversions, CPA/revenue (if goals are set) visible. Tune columns for the week’s job, not “everything at once.”",
      ],
      lists: [
        {
          intro: "Weekly table minimum:",
          items: [
            "campaigns with spend and no conversions;",
            "phrases with high CPC and zero leads;",
            "ads with abnormally low CTR;",
            "device and placement slice (search/networks).",
          ],
        },
      ],
      links: [
        {
          label: "Ad campaign audit",
          href: "/en/blog/audit-reklamnoy-kampanii/",
        },
        {
          label: "Ad metrics",
          href: "/en/blog/metriki-reklamy/",
        },
      ],
    },
    {
      title: "Filters, structure levels, and bulk ops",
      level: 2,
      paras: [
        "Filtering “My campaigns” and drilling down (campaign → group → phrases/ads) saves hours. Bulk pauses, bids, and copy edits are normal for accounts with dozens of groups.",
        "Don’t confuse edit speed with hypothesis quality: mass-stop clear junk; run ad tests deliberately.",
      ],
      links: [
        {
          label: "Ad A/B tests",
          href: "/en/blog/ab-testy-reklamy/",
        },
      ],
    },
    {
      title: "Phrases, Wordstat, and negatives in one contour",
      level: 2,
      paras: [
        "The beta stressed phrase work: bids, ad edits, find/replace, selection backed by Wordstat stats. The logic lives: semantics and negatives sit next to performance metrics, not in a separate “universe.”",
        "Regularly export search terms, clean with negatives, expand live wording. Universal negative lists are only a draft.",
      ],
      links: [
        {
          label: "Negatives in Direct",
          href: "/en/blog/minus-slova-direkt/",
        },
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "How to learn the current cabinet",
      level: 2,
      paras: [
        "Don’t learn Direct from a guide about “the link at the bottom to the old interface.” Open Help, pin 4–5 working screens: campaigns, ads/phrases, Report Wizard, libraries (negatives, audiences), goal settings.",
        "Beginners do better with a small test budget and one funnel than studying every beta feature at once. Send Yandex support feedback on real bugs, not nostalgia for 2017 UI.",
      ],
      lists: [
        {
          intro: "Rollout order for a team:",
          items: [
            "one shared report-column standard;",
            "an owner for weekly cleanup;",
            "documented UTM and goals;",
            "no “by eye” edits without a stats slice.",
          ],
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "The 2018 “new Direct” beta is history. The “decide from the table and report” principle still works.",
        "Ignore outdated screenshot clicks; tune the current cabinet for CPA and lead quality.",
      ],
    },
  ],
  closing: [
    "Open the campaign list, set columns for conversions, and once a week filter losing phrases and ads — that uses Direct in the redesign’s logic, without hunting a vanished beta.",
  ],
  related: [
    "strategii-yandeks-direkt",
    "audit-reklamnoy-kampanii",
    "minus-slova-direkt",
    "metriki-reklamy",
    "ab-testy-reklamy",
    "stavki-direkt",
  ],
};
