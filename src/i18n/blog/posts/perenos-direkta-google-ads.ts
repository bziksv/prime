import type { BlogPost } from "../../../data/blog";

/** EN overlay for perenos-direkta-google-ads — same structure as RU JSON. */
export const perenosDirektaGoogleAdsEn: BlogPost = {
  slug: "perenos-direkta-google-ads",
  title: "Moving campaigns from Yandex Direct to Google Ads",
  date: "2018-09-12",
  category: "Paid search",
  cover: "/images/blog/perenos-direkta-google-ads/cover-en.webp",
  excerpt:
    "How to move search campaigns from Yandex Direct into Google Ads: match types, negatives, ad limits, and geo — without blind Excel dumps or outdated 2018 “teleporter” tools.",
  lead: [
    "Moving from Yandex Direct to Google Ads is not a one-to-one file copy. Match types, negatives, geo, character limits, and ad policies all differ. A blind dump creates broad impressions, “Low search volume,” and wasted spend.",
    "Below: when a move makes sense, the manual or spreadsheet path, and what to check after import. Converter tools from 2018 reviews may be gone or renamed — confirm the tool is current. Google Ads availability in your region depends on the facts at launch time.",
  ],
  faq: [
    {
      q: "Can I export Direct and upload straight into Ads?",
      a: "Almost never without processing: columns, match types, and negatives don’t line up. You need a bridge sheet or an editor.",
    },
    {
      q: "Do Yandex Network ads move automatically into Display?",
      a: "A reliable one-click path usually doesn’t exist. Networks and creatives are rebuilt separately for Google’s logic.",
    },
    {
      q: "What about phrase-level negatives?",
      a: "In Google Ads, negatives live on the campaign or ad group (and on shared lists), not on every keyword the way they often do in Direct. Move the intent to the right level.",
    },
    {
      q: "Why touch match types?",
      a: "Broad match in Google without modifiers behaves differently from Direct’s familiar operators. Skip the mapping and you’ll pull in irrelevant demand.",
    },
    {
      q: "Do I need Editor?",
      a: "For mid-size and large structures, Google Ads Editor or a careful CSV helps. Small campaigns are often cleaner when you build them by hand.",
    },
  ],
  sections: [
    {
      title: "When a move helps — and when a rebuild is better",
      level: 2,
      paras: [
        "A move makes sense if Direct already has working keyword sets, ads, and ad-group structure, and you’re opening a second channel. Don’t confuse this with moving between Yandex accounts or exporting into a bidder — those are different jobs.",
        "If the structure is outdated, full of junk long-tails, and the ads are weak, it’s faster to build Google Ads from scratch by cluster and take only live keywords and winning copy from Direct.",
      ],
      lists: [
        {
          intro: "Three “move” scenarios:",
          items: [
            "inside Yandex (another login) — Direct’s native tools",
            "into a bidder or agency account — follow that service’s rules",
            "Direct → Google Ads — this article’s topic",
          ],
        },
      ],
      links: [
        {
          label: "Google Ads strategies",
          href: "/en/blog/strategii-google-ads/",
        },
        {
          label: "Yandex Direct strategies",
          href: "/en/blog/strategii-yandeks-direkt/",
        },
      ],
    },
    {
      title: "Why Excel “as is” breaks",
      level: 2,
      paras: [
        "Direct and Google Ads exports use different schemas: campaign and ad-group names, ad types, budgets, statuses. Without column mapping, the import fails or creates junk.",
        "On small structures, a hand move in the UI or Editor is easier. On mid size, use a bridge table: keywords, negatives, headlines, URLs, bid guides. Old “35 vs 30 characters” comparison tables go stale — check limits in the current Ads editor.",
      ],
      notes: [
        {
          kind: "tip",
          title: "About “teleporters”",
          text: "Converters like those praised in 2018 save time but don’t remove responsibility: after import, always hand-check match types, negatives, and policies.",
        },
      ],
    },
    {
      title: "Keywords and match types",
      level: 2,
      paras: [
        "In Google Ads, broad, phrase, and exact match — plus smart matching — differ from Direct operators. The old “plus instead of spaces” trick from early guides may refer to the retired broad match modifier — check current syntax in Google Help.",
        "In practice, don’t drag every long-tail: in Ads it’s easy to hit limited delivery on rare phrases. Keep the core and strong mid-tails; grow tails from search terms already inside Google.",
      ],
      lists: [
        {
          intro: "Before importing keywords:",
          items: [
            "clear obvious junk and duplicates",
            "set match types deliberately — not “everything broad”",
            "check landing URLs",
            "budget for Google auction learning",
          ],
        },
      ],
      links: [
        {
          label: "Keywords in Google Ads",
          href: "/en/blog/klyuchi-google-ads/",
        },
      ],
    },
    {
      title: "Negatives, geo, and ad copy",
      level: 2,
      paras: [
        "Move Direct keyword-level negatives to the ad group, campaign, or a shared negative list. Account for word forms where Google doesn’t cover them the way you’re used to in Yandex. Cross-negatives between groups stay useful.",
        "Geo in Ads is more often set at campaign level; in Direct it’s often more flexible by group — rebuild structure for that. In copy, Google policies are stricter on “click here” CTAs and “!” in headlines — edit before review.",
      ],
      links: [
        {
          label: "Negatives in Direct",
          href: "/en/blog/minus-slova-direkt/",
        },
        {
          label: "Ad campaign audit",
          href: "/en/blog/audit-reklamnoy-kampanii/",
        },
      ],
    },
    {
      title: "After import: mandatory checks",
      level: 2,
      paras: [
        "Open campaigns in the UI or Editor: ad statuses, policy errors, keyword match types, negative lists, geo, language, budget, bid strategy, UTM or tracking template, and the analytics link.",
        "Don’t mix networks blindly (Search vs Display). Moving a Yandex Network structure into Display or Performance Max is usually a rebuild: different creatives and signals.",
      ],
      lists: [
        {
          intro: "Launch-day checklist:",
          items: [
            "no accidental broad match across all keywords",
            "negatives in place",
            "ads passed policy review",
            "conversion import working",
            "daily budget and caps fit a test",
          ],
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "A move means adapting structure to Google’s rules, not “file → upload.” Keywords, negatives, geo, and copy always need hand polish.",
        "An auto-converter speeds things up, but final responsibility is the Ads check. Rebuild network campaigns separately from Search.",
      ],
    },
  ],
  closing: [
    "Export working groups from Direct, align match types and negatives to Google Ads logic, cut weak long-tails, and only then import — a day of Editor review costs less than a week of waste on broad impressions.",
  ],
  related: [
    "strategii-google-ads",
    "strategii-yandeks-direkt",
    "klyuchi-google-ads",
    "minus-slova-direkt",
    "audit-reklamnoy-kampanii",
    "oshibki-reklamnoy-kampanii",
  ],
};
