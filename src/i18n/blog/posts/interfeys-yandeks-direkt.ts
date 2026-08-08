import type { BlogPost } from "../../../data/blog";

/** EN overlay for interfeys-yandeks-direkt — same structure as RU JSON. */
export const interfeysYandeksDirektEn: BlogPost = {
  slug: "interfeys-yandeks-direkt",
  title: "Yandex Direct interface: from the 2018 beta to stats-first work",
  date: "2018-08-08",
  category: "Paid search",
  cover: "/images/blog/interfeys-yandeks-direkt/cover-en.webp",
  excerpt:
    "What the 2018 Direct redesign actually changed — and what still matters: tables, filters, bulk edits, report-driven decisions — without a pitch to “join the beta.”",
  lead: [
    "In August 2018 Yandex rolled out a beta of a rebuilt Direct UI: tables, filters, speed, and decisions from numbers instead of scattered screens. The old interface was later shut off — there is no “enter the beta” toggle left.",
    "What follows is the idea behind that redesign and how to use today’s account the same way. Menu labels and wizard names moved again; trust section purpose and Direct Help, not 2018 screenshots.",
  ],
  faq: [
    {
      q: "Is the new Direct beta still running?",
      a: "Not as the 2018 open signup. You’re in the current UI; the old/new switch from that era is gone.",
    },
    {
      q: "Why bother with a redesign from 2018?",
      a: "So old guides don’t send you on a click scavenger hunt — and so you keep the real habit: fix campaigns from reports, filters, and bulk actions.",
    },
    {
      q: "Do I still need Commander?",
      a: "For big structural edits, editors and exports still help — check what Yandex ships now. Day-to-day tweaks stay in the web UI.",
    },
    {
      q: "Is the Report Wizard a must?",
      a: "If you need slices beyond the default columns — yes. Without reports you’re guessing.",
    },
    {
      q: "Where should a beginner start?",
      a: "Campaign structure → keywords and ads → analytics goals → a weekly spend-and-conversion report.",
    },
  ],
  sections: [
    {
      title: "What the 2018 beta sold",
      level: 2,
      paras: [
        "Yandex pitched unified formats on one platform and a UI where you decide from numbers: performance on one screen, filters, bulk ops across corners of the account.",
        "Access came in waves (a teaser in the cabinet). Then the new UI became default and the old one was phased out. “Hurry into the beta” lines from old posts are dead.",
      ],
      notes: [
        {
          title: "Historical note",
          text: "Don’t treat 2018 “My campaigns” screenshots and popup editors as a how-to. Check current names in Help.",
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
      title: "Decide from the table — the habit that stuck",
      level: 2,
      paras: [
        "The redesign’s core: fewer vanity screens, more campaign / group / keyword tables with metrics, fast filters, and a path into reports. Easier to kill losing slices and scale what works.",
        "In today’s Direct keep spend, clicks, conversions, and CPA or revenue (if goals exist) in view. Set columns for this week’s job — not every metric at once.",
      ],
      lists: [
        {
          intro: "Weekly table checklist:",
          items: [
            "campaigns spending with zero conversions",
            "keywords with high CPC and no leads",
            "ads with a suspiciously low CTR",
            "device and placement cut (search vs networks)",
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
      title: "Filters, hierarchy, and bulk edits",
      level: 2,
      paras: [
        "Filtering the campaign list and drilling down (campaign → group → keywords/ads) saves hours. Bulk pause, bid, and copy edits are normal once you have dozens of groups.",
        "Speed isn’t quality: mass-stop obvious junk; run creative tests on purpose.",
      ],
      links: [
        {
          label: "Ad A/B tests",
          href: "/en/blog/ab-testy-reklamy/",
        },
      ],
    },
    {
      title: "Keywords, Wordstat, and negatives in one place",
      level: 2,
      paras: [
        "The beta pushed keyword work into the same flow: bids, ad edits, find/replace, and Wordstat-backed expansion. That still holds — semantics and negatives sit next to performance, not in a separate world.",
        "Export search terms regularly, cut with negatives, grow the phrases that convert. Universal negative lists are a draft, not a finished set.",
      ],
      links: [
        {
          label: "Negatives in Direct",
          href: "/en/blog/minus-slova-direkt/",
        },
        {
          label: "Keyword research",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Learning today’s account",
      level: 2,
      paras: [
        "Skip guides that say “click the link at the bottom for the old UI.” Open Help and pin four or five screens: campaigns, ads/keywords, Report Wizard, libraries (negatives, audiences), goal settings.",
        "Beginners learn faster with a small test budget and one funnel than by touring every feature at once. File support tickets for real bugs — not nostalgia for 2017 chrome.",
      ],
      lists: [
        {
          intro: "Team rollout order:",
          items: [
            "one shared report-column standard",
            "an owner for weekly cleanup",
            "documented UTMs and goals",
            "no gut-feel edits without a stats cut",
          ],
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "The 2018 “new Direct” beta is history. Deciding from the table and the report is still the right habit.",
        "Ignore screenshot click-paths; tune the current UI for CPA and lead quality.",
      ],
    },
  ],
  closing: [
    "Open the campaign list, set columns around conversions, and once a week filter out losing keywords and ads — that is the redesign’s logic, without hunting a beta that no longer exists.",
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
