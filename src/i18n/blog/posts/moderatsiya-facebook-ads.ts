import type { BlogPost } from "../../../data/blog";

/** EN overlay for moderatsiya-facebook-ads — same structure as RU JSON. */
export const moderatsiyaFacebookAdsEn: BlogPost = {
  slug: "moderatsiya-facebook-ads",
  title: "Why Facebook rejects an ad: common reasons",
  date: "2020-01-09",
  category: "Paid search",
  cover: "/images/blog/moderatsiya-facebook-ads/cover-en.webp",
  excerpt:
    "Common reasons ads get rejected or stay silent in Facebook / Meta Ads: prohibited content, before/after, clickbait UI, personal attributes, text on image, bids, and audience overlap.",
  lead: [
    "A rejected ad — or approval with no impressions — in Facebook / Meta Ads usually hits advertising rules or auction settings, not “the platform doesn’t like you.”",
    "Below: typical moderation issues from practice and what to check. Rules and thresholds (including text on image) change — verify current Advertising Standards. Informational only; not a call to use Meta platforms.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platforms. Facebook* and Instagram* are products of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Approved but no impressions — is it a ban?",
      a: "Often no: low bid, narrow audience, budget cap, learning, or ad-set overlap. Check Delivery and account recommendations.",
    },
    {
      q: "Are before/after creatives allowed?",
      a: "Classic before/after and misleading body/health results are usually banned. Look for current exceptions in Help.",
    },
    {
      q: "Does text on the image still matter?",
      a: "The hard “20%” rule was softened historically, but overloaded text and clickbait still hurt delivery and review. Readability beats a percentage.",
    },
    {
      q: "Can I mention personal attributes in the copy?",
      a: "Don’t imply personal traits of the audience in the creative (“you’re overweight,” “you’re over 40”). Targeting settings are separate from ad wording.",
    },
    {
      q: "What should I do when an ad is rejected?",
      a: "Read the reason in the account, fix it, wait for re-review. On a clear error — appeal via Help with ad IDs.",
    },
    {
      q: "Does this apply to Instagram ads too?",
      a: "Often yes: one Meta account and similar policies for related surfaces, with format caveats.",
    },
    {
      q: "Where’s the channel overview?",
      a: "In the Facebook Ads / Meta Ads piece — jobs, pixel, and test logic.",
    },
  ],
  sections: [
    {
      title: "Creative rejected: content and visuals",
      level: 2,
      paras: [
        "Prohibited goods and services (weapons, some medications, tobacco, surveillance, 18+, etc.) get cut at intake — the full list lives only in current policies. “Gray” promises don’t save a pretty design.",
        "Before/after and shocking close-ups of the body with unrealistic effects are a classic rejection. Fake interactive UI on the image (phony Play button, notification) counts as clickbait: people tap “as if native” and land on a site.",
        "Overloaded text on the image hurts delivery; we don’t repeat the old hard “20%” myth as current law — aim for little text, a large offer, mobile readability.",
      ],
      lists: [
        {
          intro: "Quick visual filter:",
          items: [
            "no prohibited topics",
            "no before/after or fake UI buttons",
            "minimal text on the photo",
            "honest offer — no miracle guarantees",
          ],
        },
      ],
    },
    {
      title: "Wording, Meta branding, and links",
      level: 2,
      paras: [
        "Mentions of Facebook / Instagram follow brand rules: correct spelling, no distorted logos, no “gray” promises like “we’ll help hack an account.” Check the platform brand guidelines.",
        "Personal attributes in copy (“you’re of age — come here”) are banned even when age targeting in settings is lawful. Self-esteem attacks (“still overweight?”) and unverified income guarantees also get cut.",
        "Display URL must match the real landing: a short “pretty” link isn’t for domain spoofing.",
      ],
      notes: [
        {
          title: "Important",
          text: "Promises like “$20,000 in two days” with no basis are a straight path to rejection and reputation risk.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Approved but not running: bid and audiences",
      level: 2,
      paras: [
        "A low bid or manual ceiling below market leaves the ad without auction wins. At the start, auto strategies plus learning data often beat a hard CPA cut too early.",
        "Overlapping audiences across ad sets compete with themselves: one segment — one bid logic. Check overlaps in the account’s audience tools.",
        "Narrow targeting + tiny budget + learning = “silence.” Expand or wait for learning — don’t confuse it with a ban.",
      ],
      links: [
        {
          label: "Facebook Ads / Meta Ads",
          href: "/en/blog/facebook-ads/",
        },
        {
          label: "Meta remarketing",
          href: "/en/blog/retargeting-meta/",
        },
      ],
    },
    {
      title: "What to do when there’s a problem",
      level: 2,
      paras: [
        "Read the rejection text → fix creative or settings → wait for re-review. Account email often duplicates the status.",
        "If you’re sure you comply — appeal via Help: account and ad IDs, brief facts. Don’t create clones with the same violation.",
        "Keep a policy checklist for your niche (health, finance, before/after) — cheaper than burning creatives in rejection loops.",
      ],
      lists: [
        {
          intro: "Triage order:",
          items: [
            "status: rejected vs active with no delivery",
            "reason in Ads Manager",
            "creative vs bid/audience",
            "fix → re-review",
            "appeal only when you’re confident",
          ],
        },
      ],
    },
  ],
  closing: [
    "Check the creative against Advertising Standards before upload, remove clickbait and personal labels — you’ll pass review first time more often than after a dozen “guess” edits.",
  ],
  related: [
    "facebook-ads",
    "retargeting-meta",
    "keisy-facebook-ads",
    "nastroika-reklamy-instagram",
    "reklamnyy-kabinet",
    "sayt-pered-reklamoy",
  ],
};
