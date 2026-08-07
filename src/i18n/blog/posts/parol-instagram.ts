import type { BlogPost } from "../../../data/blog";

/** EN overlay for parol-instagram — same structure as RU JSON. */
export const parolInstagramEn: BlogPost = {
  slug: "parol-instagram",
  title: "Instagram password reset and change: how to regain access",
  date: "2021-11-09",
  category: "SMM",
  cover: "/images/blog/parol-instagram/cover-en.webp",
  excerpt:
    "When to change an Instagram password, how to recover login via email, SMS, and support, what to do if you’re hacked, and how to harden account security.",
  lead: [
    "Can’t sign into Instagram — most often a forgotten password, a username typo, or a hack. Reset is available via email, SMS, and official recovery flows; menu labels change.",
    "Reset via official email/SMS flows, lock down the account if you suspect a hack, and skip gray “recovery” services. This is a security checklist, not an endorsement of the platform.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Where is the “Forgot password” button?",
      a: "On the app or website login screen — next to the login form. Wording varies: “Forgot?”, “Get help,” and similar.",
    },
    {
      q: "What matters more — email or phone?",
      a: "Whichever contact is linked and that you can still access. Keep both up to date ahead of time.",
    },
    {
      q: "Does login via Facebook still work?",
      a: "If accounts were linked, login/reset via Facebook sometimes worked. Availability depends on region and settings — follow today’s login screens and help docs.",
    },
    {
      q: "What should you do if you’re hacked?",
      a: "Change the password as soon as you can, sign out other sessions, report the hack to support, check email and linked services, turn on two-factor authentication.",
    },
    {
      q: "Why didn’t I get a reset email?",
      a: "Spam, wrong email in the profile, delivery delay, or blocked mail. Check the address and spam folder, then try SMS.",
    },
  ],
  sections: [
    {
      title: "When to change the password",
      level: 2,
      paras: [
        "Change the password if you forgot it, see a login error even with what you believe is the right password, suspect a hack, or reused a password that leaked elsewhere.",
      ],
      lists: [
        {
          intro: "Typical reset reasons:",
          items: [
            "forgot it or mistyped characters",
            "the account behaves oddly (posts, name, messages that aren’t yours)",
            "you entered the password on a third-party “service” — change it on email too",
            "a planned rotation after contractors finished",
          ],
        },
      ],
    },
    {
      title: "Recovery via email or SMS",
      level: 2,
      paras: [
        "On the login screen choose account recovery, enter username, email, or phone — the system offers available channels.",
        "The email or SMS will have a code or link. Set a new password and check login right away. Don’t open reset links from suspicious emails on unfamiliar domains.",
      ],
      lists: [
        {
          intro: "Before resetting:",
          items: [
            "confirm you’re on the official app or site",
            "you have access to the email or number",
            "the new password is long and unique",
            "after login, review active sessions",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "A strong password is useless if it matches your email password. Your email and Instagram passwords must be different.",
        },
      ],
    },
    {
      title: "Facebook link and web login",
      level: 2,
      paras: [
        "Historically accounts could be linked to Facebook and share a login flow. Today the available buttons depend on region, account type, and Meta updates.",
        "On desktop the flow matches the app: login screen → password help → email/SMS → new code. You don’t need a separate Windows app — a browser is enough.",
      ],
      lists: [],
    },
    {
      title: "If the account was hacked",
      level: 2,
      paras: [
        "Warning signs: name or password changed, content gone, weird direct messages, unknown logins. Move fast.",
      ],
      lists: [
        {
          intro: "Action order:",
          items: [
            "try a password reset through contacts you control",
            "report the hack through official support",
            "change passwords on email and linked services",
            "turn on two-factor authentication",
            "warn clients if scammers messaged them under your name",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Handing your login to a “fake engagement” helper or shady service. After that, recovery is already in someone else’s hands.",
        },
      ],
      links: [
        {
          label: "Fake likes: risks",
          href: "/en/blog/nakrutka-laykov-instagram/",
        },
        {
          label: "Instagram business account",
          href: "/en/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
    {
      title: "How to lower the risk of losing access",
      level: 2,
      paras: [
        "Keep email and phone current, use a unique password and 2FA, be careful with third-party apps, and keep recovery backup codes if the platform issues them.",
      ],
      lists: [
        {
          intro: "Basic hygiene:",
          items: [
            "store the password only in a password manager",
            "don’t stay signed in on shared devices",
            "don’t confirm suspicious “security checks”",
            "for a brand account, limit access to a small circle",
          ],
        },
      ],
    },
  ],
};
