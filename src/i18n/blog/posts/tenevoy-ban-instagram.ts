import type { BlogPost } from "../../../data/blog";

/** EN overlay for tenevoy-ban-instagram — same structure as RU JSON. */
export const tenevoyBanInstagramEn: BlogPost = {
  slug: "tenevoy-ban-instagram",
  title: "Instagram shadow ban: myths, symptoms, and what to do",
  date: "2021-06-23",
  category: "SMM",
  cover: "/images/blog/tenevoy-ban-instagram/cover-en.webp",
  excerpt:
    "What people call an Instagram shadow ban: when posts barely show under hashtags and in recommendations, how that differs from a full block, and how to lower risk without shady schemes.",
  lead: [
    "In industry slang a “shadow ban” means reach drops and a post barely appears under hashtags or outside followers — while the account still works. Help Center often has no official status with that name: some cases are bugs, feed personalization, or rule limits.",
    "Below: how to tell symptoms from a full block, which myths hurt, and what to do within the rules. No growth-hack or mass-action recipes. See the Meta product note on this page.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Does a shadow ban exist officially?",
      a: "As a separate “you have a shadowban” button — usually no. There is reduced distribution, hashtag filters, action limits, and a personalized feed. The name is industry slang.",
    },
    {
      q: "How is it different from an account block?",
      a: "With a block you often can’t sign in or see a clear restriction. In a “shadow” scenario the profile is open, but reach and tag search are weak. See the Instagram bans article.",
    },
    {
      q: "How long does it last?",
      a: "No fixed term. Sometimes symptoms fade in hours or days after a glitch or a pause in risky actions. “Always exactly 72 hours” is a myth.",
    },
    {
      q: "Should I use third-party “shadowban detectors”?",
      a: "Be careful: many are useless or phishing. Safer: a manual check from another account and a comparison of reach stats.",
    },
    {
      q: "Do identical hashtag sets always cause a ban?",
      a: "Not proven as a universal cause. Content quality, tag relevance, and no spam behavior matter more. Broken or banned hashtags definitely hurt.",
    },
    {
      q: "Do mass-follow and mass-like help?",
      a: "No — they raise restriction risk. Don’t use them.",
    },
    {
      q: "What should I do first?",
      a: "Remove shady apps, check hashtags, lower spam pace, improve content; for a clear violation — official support.",
    },
    {
      q: "Is it the same as “action blocked”?",
      a: "Often no. “Action blocked” is an explicit temporary limit on likes, Direct, or posts. A shadow scenario is about invisibility in search and recommendations.",
    },
  ],
  sections: [
    {
      title: "What people mean by shadow ban",
      level: 2,
      paras: [
        "Typical complaint: the post has a hashtag, but it doesn’t appear in that tag’s results; new people barely see it, followers still do. Likes and comments from the existing audience may continue.",
        "Authors have discussed the topic heavily since about 2017. Many SMM pros say bugs and competition in popular tags are often to blame — not a secret label on the account.",
      ],
      notes: [
        {
          title: "Important",
          text: "Don’t confuse it with a full block or an “action blocked” limit. Different scenarios, different actions.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Instagram bans",
          href: "/en/blog/blokirovka-instagram/",
        },
      ],
    },
    {
      title: "Myths and real risks",
      level: 2,
      paras: [
        "Myth: “any repeat of one hashtag set = shadow ban.” In practice spam, automation, and banned content matter more. Myth: “an online detector shows your status for sure” — often service marketing.",
        "Real reach risks: bots and mass actions, reports, banned or broken hashtags, low quality and copy-paste, a sudden unnatural activity pace.",
      ],
      lists: [
        {
          intro: "What more often hits visibility:",
          items: [
            "automation of follows, likes, or comments",
            "spam in Direct and comments",
            "off-topic or blocked hashtags",
            "content against platform rules",
            "bugs and overload of popular tags (temporary effect)",
          ],
        },
      ],
      links: [
        {
          label: "Buying Instagram likes",
          href: "/en/blog/nakrutka-laykov-instagram/",
        },
      ],
    },
    {
      title: "How to check symptoms",
      level: 2,
      paras: [
        "From another (unrelated) account, search for a fresh post by a rare unique hashtag from the publication. Compare overall reach and hashtag/recommendation reach in business-profile insights — a sharp drop without a content change is worth investigating.",
        "Don’t enter your Instagram password on third-party “shadowban check” sites.",
      ],
      lists: [
        {
          intro: "Quick checklist:",
          items: [
            "is the post visible to you and followers?",
            "does it appear under a unique tag from another account?",
            "is there an explicit action limit?",
            "are shady “growth” tools still connected?",
          ],
        },
      ],
    },
    {
      title: "What to do",
      level: 2,
      paras: [
        "Disconnect shady apps and change the password if contractors had access. Drop questionable hashtags; check tags in search (empty results for a tag is a bad sign). Lower spam pace for a few days.",
        "Then quality: decent photos and video, useful captions, varied relevant tags, Stories and regularity without fake engagement. If the account is clearly limited by rules — write official support, not “guaranteed unban” chats.",
      ],
      lists: [
        {
          intro: "Working order:",
          items: [
            "remove automation and extra access",
            "check hashtags and content against the rules",
            "pause aggressive actions",
            "improve content and real-audience engagement",
            "for a hard restriction — official appeal",
          ],
        },
      ],
      links: [
        {
          label: "Instagram password",
          href: "/en/blog/parol-instagram/",
        },
        {
          label: "Unblocking Instagram",
          href: "/en/blog/razblokirovka-instagram/",
        },
        {
          label: "Instagram insights",
          href: "/en/blog/statistika-instagram/",
        },
      ],
      notes: [
        {
          title: "In practice",
          text: "Sustainable growth comes from content and following the rules — not hunting a “3-day shadow-ban lift” scheme from chats.",
          kind: "tip",
        },
      ],
    },
  ],
  related: [
    "blokirovka-instagram",
    "razblokirovka-instagram",
    "nakrutka-laykov-instagram",
    "parol-instagram",
    "statistika-instagram",
    "post-instagram",
  ],
};
