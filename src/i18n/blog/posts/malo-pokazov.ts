import type { BlogPost } from "../../../data/blog";

/** EN overlay for malo-pokazov — same structure as RU JSON. */
export const maloPokazovEn: BlogPost = {
  slug: "malo-pokazov",
  title: "“Low impressions” status in Yandex Direct",
  date: "2017-05-17",
  category: "Paid search",
  cover: "/images/blog/malo-pokazov/cover-en.webp",
  excerpt:
    "Why Direct marks low-frequency groups as “Low impressions,” what affects the status, and how to get impressions back: merging LF keywords, templates, negatives — without outdated “exactly 10 in 30 days” dogma.",
  lead: [
    "“Low impressions” turns off or limits groups and phrases with too weak a demand forecast: Yandex doesn’t want to run ads almost nobody will see.",
    "Find the weak phrases, regroup related long-tail keywords, and cut excess negatives so frequency adds up. Thresholds and UI names may have changed since 2017 — check Direct Help; the idea stays the same.",
  ],
  faq: [
    {
      q: "Is “Low impressions” an account ban?",
      a: "No. A local status on phrases/groups with low expected impression frequency.",
    },
    {
      q: "Is the “Low impressions” status permanent?",
      a: "No. It recalculates periodically. After structure and keyword edits it can lift.",
    },
    {
      q: "Are rare keywords the only cause of low impressions?",
      a: "Often yes, but negatives, strict match operators, narrow geo, and device/audience limits make it worse.",
    },
    {
      q: "Should I delete all low-frequency keywords?",
      a: "You can, but you lose the long tail. Better group related LF terms so they add up to enough impressions.",
    },
    {
      q: "Are headline templates required to fix low impressions?",
      a: "Not required, but they help keep relevance when merging phrases. Current syntax is in Help.",
    },
    {
      q: "Will Commander or an XLSX export help?",
      a: "Yes: easy to see phrases with the status and a zero bid. The UI path to the column may have changed.",
    },
    {
      q: "How does this relate to ad quality?",
      a: "Weak demand ≠ low CTR. Fix group frequency first; improve quality in parallel.",
    },
  ],
  sections: [
    {
      title: "What the status means",
      level: 2,
      paras: [
        "Direct accumulates demand stats and stops pairs whose expected impressions are too small. That cleans accounts of thousands of “dead” low-frequency terms.",
        "Recalculation runs in batches (on the order of a few days — a guide, not a timer). While the status hangs, those phrases get no traffic.",
      ],
      links: [
        {
          label: "Keywords in Yandex Direct",
          href: "/en/blog/klyuchi-yandeks-direkt/",
        },
        {
          label: "Negative keywords in Direct",
          href: "/en/blog/minus-slova-direkt/",
        },
      ],
    },
    {
      title: "What cuts impressions",
      level: 2,
      paras: [
        "Aggressive negatives and cross-negatives cut reach — sometimes to “low impressions” on whole groups.",
        "Match operators and quotes narrow the audience: useful for precision, harmful mixed with ultra-LF terms.",
        "Narrow geo, few devices, tight audiences — further cut already rare demand.",
      ],
      lists: [
        {
          intro: "Before panicking, check:",
          items: [
            "negatives on phrase/group/campaign;",
            "match operators;",
            "geo and schedule;",
            "whether demand exists in Wordstat/forecast.",
          ],
        },
      ],
    },
    {
      title: "How to restore impressions",
      level: 2,
      paras: [
        "Merge thematically close LF terms into fewer groups so total frequency crosses the threshold. Add mid/high-frequency masks if intent allows.",
        "With one “mask” and different tails — packs of several phrases per group with an ad where the keyword reads in the headline (Direct templates — per current Help).",
        "The lazy path is delete LF. Fine for junk; for a valuable tail regroup first and review cross-negatives.",
        "For a store, look at dynamic URL/parameter inserts only if the landings actually exist.",
      ],
      links: [
        {
          label: "Direct responsive ads",
          href: "/en/blog/adaptivnyy-shablon-direkt/",
        },
        {
          label: "Bids in Direct",
          href: "/en/blog/stavki-direkt/",
        },
      ],
    },
  ],
  notes: {
    title: "Important",
    text: "Figures like “up to 10 impressions in 30 days” from 2017 materials are a historical guide. Check the current threshold and status names in Yandex Direct Help.",
  },
  closing: [
    "Export phrases with the status, group related LF tails, and cut excess negatives — often enough to lift the status without deleting the whole keyword set.",
  ],
  related: [
    "klyuchi-yandeks-direkt",
    "minus-slova-direkt",
    "adaptivnyy-shablon-direkt",
    "stavki-direkt",
    "oshibki-nastroyki-konteksta",
    "chastotnost-zaprosov",
  ],
};
