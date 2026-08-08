import type { BlogPost } from "../../../data/blog";

/** EN overlay for ssylka-stories-instagram — same structure as RU JSON. */
export const ssylkaStoriesInstagramEn: BlogPost = {
  slug: "ssylka-stories-instagram",
  title:
    "Links in Instagram Stories: sticker, CTA, and what happened to “swipe up”",
  date: "2020-09-11",
  category: "SMM",
  cover: "/images/blog/ssylka-stories-instagram/cover-en.webp",
  excerpt:
    "How to add a tappable link in Instagram Stories: the Link sticker, internal jumps, ads, and limits — without outdated “swipe up” as the only method.",
  lead: [
    "“Swipe up” in Stories was the old name for the gesture to an external link. Today it’s more often a Link sticker or CTA button: the follower taps and goes to a site, post, or another profile.",
    "Below: internal vs. external taps, who gets the link sticker, fallbacks without it, and when ads make sense. Follower thresholds and menu labels have changed many times — check Meta Help. Product note is on the page.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Does swipe-up still work?",
      a: "As a mass gesture for everyone — no: it was replaced by a link sticker or button. The idea is the same: a fast jump from Stories.",
    },
    {
      q: "Do I need exactly 10,000 followers?",
      a: "External swipe used to often need a threshold. Access now depends on account type, region, and current Meta rules — don’t rely on a figure from 2017–2020 guides.",
    },
    {
      q: "How is a Stories link different from the profile bio link?",
      a: "Bio is a permanent URL on the profile. A Stories link lives ~24 hours (or in Highlights) and starts from a specific frame.",
    },
    {
      q: "Can I do without a link sticker?",
      a: "Yes: mention @, add a post to the story, type the URL (not always tappable), send via Direct, or put a link in bio. Effectiveness is lower than a sticker tap.",
    },
    {
      q: "Do Story ads replace an organic link?",
      a: "Ads Stories with a URL are a separate ads-account tool. The organic sticker is for your audience without paying for the impression.",
    },
  ],
  sections: [
    {
      title: "Why a link in Stories",
      level: 2,
      paras: [
        "A fast jump to a landing, product, booking, form, YouTube, or Telegram without hunting by hand.",
        "For warming up a promo, webinar, or new collection — frame + clear CTA beats “link in bio, go find it.”",
        "Internal jumps (to a post, mention, another story) are more widely available and aren’t always tied to an “external” sticker.",
      ],
    },
    {
      title: "Internal and external jumps",
      level: 2,
      paras: [
        "Internal: add your post to Stories, tag an account with a sticker or @, share a mention, send people to Reels inside the ecosystem — via current “share” buttons.",
        "External: a site or service URL via the link sticker (or an ad object with a destination URL).",
        "Don’t publish links to banned or deceptive content: moderation cuts jumps and risks the account.",
      ],
      lists: [
        {
          intro: "Typical external URL goals:",
          items: [
            "catalog / product card",
            "lead or payment landing",
            "article / guide",
            "Live registration",
            "a messenger channel",
          ],
        },
      ],
    },
    {
      title: "How to add a link sticker",
      level: 2,
      paras: [
        "Create Stories → stickers → Link (or equivalent) → paste URL → button label (short CTA: “Buy,” “Read,” “Book”).",
        "Test the jump preview yourself. Long URLs can be shortened with an official short domain or your own — don’t give your Instagram password to third-party “shorteners.”",
        "If there’s no sticker — check profile type (professional/business), app update, and Meta Help: access isn’t “unlocked” with gray apps.",
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Promising “swipe like 2018” and teaching follower-threshold workarounds. The working path is the current sticker plus a clear offer on the first screen.",
        },
      ],
    },
    {
      title: "If there’s no sticker: workable fallbacks",
      level: 2,
      paras: [
        "Link in the profile bio + Stories with “tap the link in bio.”",
        "A short URL in large text + QR (where it fits).",
        "Direct to people who replied to a question sticker or reaction — without mass spam.",
        "Stories ads with a destination URL in the Meta ads account — when you need reach beyond followers.",
      ],
      notes: [
        {
          title: "We don’t recommend",
          kind: "tip",
          text: "Mass Direct blasts to everyone and third-party “swipe access boosts” — risk of limits and reports.",
        },
      ],
    },
    {
      title: "Ads Stories with a link",
      level: 2,
      paras: [
        "In Ads Manager / Meta ads account you create an ad with Stories placement and a destination URL. Goals — traffic, conversions, installs, etc. by task.",
        "Creative is vertical 9:16, offer readable without sound, link goes to a fast mobile page.",
        "Ads Manager click paths change — stick to Meta Ads Help, not 2020 screenshots.",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "The “swipe” idea lives in the link sticker and ads CTA; the “exactly 10k” threshold from old articles isn’t dogma.",
        "Clear frame and URL first, then scale with ads — not the other way around.",
      ],
    },
  ],
  closing: [
    "Make one Stories with a sticker (or bio CTA), measure taps, and only then boost reach with ads.",
  ],
  related: [
    "ssylka-instagram",
    "video-stories-instagram",
    "reklama-instagram",
    "biznes-akkaunt-instagram",
    "skachat-stories-instagram",
    "idei-storis-vk",
  ],
};
