import type { BlogPost } from "../../../data/blog";

/** EN overlay for svyazka-instagram-facebook — same structure as RU JSON. */
export const svyazkaInstagramFacebookEn: BlogPost = {
  slug: "svyazka-instagram-facebook",
  title: "Linking Instagram and Facebook: how to connect and disconnect",
  date: "2021-07-16",
  category: "SMM",
  cover: "/images/blog/svyazka-instagram-facebook/cover-en.webp",
  excerpt:
    "Why link Instagram to Facebook via Accounts Center, what a professional profile gives you, how to unlink, and which cross-posting expectations are outdated.",
  lead: [
    "Linking Instagram and Facebook matters when you use ecosystem business tools: a Page, Ads Manager, shared settings in Accounts Center. It isn’t required for everyone — it’s a setup for a specific job.",
    "Below: why people link accounts, plus the usual connect and unlink flow. Menu labels change; if it doesn’t match 2021 screenshots, follow Meta Help and the in-app wizard.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platforms. Instagram* and Facebook* are products of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the services may have legal consequences.",
  },
  faq: [
    {
      q: "Is linking required for a business account?",
      a: "Not always. The requirement used to appear more often. Now it depends on region and scenario (especially ads). See also the Instagram business account article.",
    },
    {
      q: "How many Facebook Pages can I attach?",
      a: "Limits have changed: one main Page per profile is often convenient. To switch — unlink the current connection in Accounts Center first.",
    },
    {
      q: "Will posts appear on Facebook automatically?",
      a: "Don’t count on “auto-post everything forever.” Cross-publishing is configured separately and behaves differently; check previews on both sides.",
    },
    {
      q: "Does linking protect against hacks?",
      a: "Linked logins sometimes simplify recovery, but they’re not a password, 2FA, or session-control substitute. The myth “linked = never banned” is false.",
    },
    {
      q: "Where do I unlink accounts?",
      a: "Usually in Accounts Center from Instagram or Facebook: profile → remove from center / disconnect. Check current UI labels.",
    },
  ],
  sections: [
    {
      title: "Why link accounts",
      level: 2,
      paras: [
        "Typical reasons: access to ad tools, attaching a professional Facebook Page, a shared management link in Accounts Center, contacts and insights for an Instagram professional profile.",
        "Don’t expect reach magic “by itself”: reach comes from content and promotion, not from a “accounts linked” checkbox.",
      ],
      lists: [
        {
          intro: "Realistic pros:",
          items: [
            "easier to run ads and a Page in one ecosystem",
            "Instagram professional mode with insights and contacts",
            "centralized login settings (with security caveats)",
          ],
        },
        {
          intro: "What not to promise yourself:",
          items: [
            "a guarantee against bans",
            "automatic ER growth",
            "that every post duplicates perfectly without checking",
          ],
        },
      ],
      links: [
        {
          label: "Instagram business account",
          href: "/en/blog/biznes-akkaunt-instagram/",
        },
        {
          label: "Instagram ads",
          href: "/en/blog/reklama-instagram/",
        },
      ],
    },
    {
      title: "How to link via Accounts Center",
      level: 2,
      paras: [
        "Common path: Instagram → settings → Accounts Center → add accounts / connect Facebook → sign in and confirm permissions. Item names drift (“Professional access,” “Pages,” etc.).",
        "Alternative — start from the Facebook Page / professional settings and offer to link Instagram. On phone the wizard is usually fuller than on a trimmed web UI.",
        "After linking, check: the right Page is selected, Instagram category and contacts are OK, test access to Ads Manager (if you need it).",
      ],
      lists: [
        {
          intro: "Before linking:",
          items: [
            "access to the right Facebook and Page permissions",
            "current password and two-factor auth",
            "clarity on which Instagram profile is primary",
            "a backup of important data/contacts just in case",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Tip",
          text: "Don’t approve suspicious “link account” prompts from third-party apps. Only the official Instagram/Facebook wizard.",
        },
      ],
    },
    {
      title: "Professional profile after linking",
      level: 2,
      paras: [
        "Linking often goes with switching to professional/business mode: contact button, category, built-in insights, path to ads.",
        "Insights and buttons don’t replace design and offer. Account type is the base; content and CTA decide whether someone stays.",
      ],
      links: [
        {
          label: "Instagram profile design",
          href: "/en/blog/oformlenie-stranicy-instagram/",
        },
        {
          label: "Instagram insights",
          href: "/en/blog/statistika-instagram/",
        },
      ],
    },
    {
      title: "How to unlink",
      level: 2,
      paras: [
        "Via Instagram: Accounts Center → the profile → remove / disconnect from the center. Via Facebook: account / center settings → linked accounts or apps → Instagram → disconnect.",
        "Unlinking is needed when changing Page, splitting personal and work, or fixing access issues. After disconnect, check login, ad assets, and whether professional features stayed or need re-setup.",
      ],
      lists: [
        {
          intro: "After unlinking:",
          items: [
            "sign into both accounts separately",
            "check Ads Manager and roles",
            "make sure no foreign sessions remain",
            "when linking again — pick the correct Page",
          ],
        },
      ],
    },
  ],
};
