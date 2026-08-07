import type { BlogPost } from "../../../data/blog";

/** EN overlay for parol-instagram — same structure as RU JSON. */
export const parolInstagramEn: BlogPost = {
  slug: "parol-instagram",
  title: "Instagram password reset and change: how to regain access",
  date: "2021-11-09",
  category: "SMM",
  cover: "/images/blog/parol-instagram/cover-en.webp",
  excerpt:
    "When to change an Instagram password, how to recover login via email, SMS, and support, what to do if hacked, and how to harden account security.",
  lead: [
    "Can’t sign into Instagram — most often a forgotten password, a username typo, or a hack. Reset is available via email, SMS, and official recovery flows; menu labels change over time.",
    "Below — when to reset the password, typical steps, and what to do if you suspect a hack. This is an informational security memo, not a call to use the platform.",
  ],
  legalNotice: {
    title: "Dear readers!",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Where is the “Forgot password” button?",
      a: "On the app or website login screen — next to the login form. Labels may differ: “Forgot?”, “Get help”, and so on.",
    },
    {
      q: "What’s more important — email or phone?",
      a: "The contact that’s actually linked and that you can access. Keep both current in advance.",
    },
    {
      q: "Did “via Facebook” used to help?",
      a: "If accounts were linked, login/reset via Facebook sometimes worked. Availability depends on region and settings — follow the current login screens and help docs.",
    },
    {
      q: "What to do if hacked?",
      a: "Change the password ASAP (if you can), revoke sessions, contact support about the hack, check email and linked services, turn on two-factor auth.",
    },
    {
      q: "Why is there no reset email?",
      a: "Spam, wrong email in the profile, delivery delay, blocked mail. Check the address and Spam folder, try SMS.",
    },
  ],
  sections: [
    {
      title: "When to change the password",
      level: 2,
      paras: [
        "Change the password if you forgot the code, see a login error with what you think is the right password, suspect a hack, or reused a password leaked on another site.",
      ],
      lists: [
        {
          intro: "Typical reset reasons:",
          items: [
            "forgot it or mistyped characters;",
            "the account behaves oddly (posts, name, messages that aren’t yours);",
            "you were asked for the password on a third-party “service” — change it on email too;",
            "planned rotation after working with contractors.",
          ],
        },
      ],
    },
    {
      title: "Recovery via email or SMS",
      level: 2,
      paras: [
        "On the login screen choose account recovery, enter username, email, or phone — the system will offer available channels.",
        "The email or SMS will have a code/link. Set a new password and check login right away. Don’t open “resets” from suspicious emails with a foreign domain.",
      ],
      lists: [
        {
          intro: "Before resetting:",
          items: [
            "confirm it’s the official app/site;",
            "you have access to the email or number;",
            "the new password is long and unique;",
            "after login review active sessions.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "A strong password is useless if it’s the same as email. Email and Instagram passwords must differ.",
        },
      ],
    },
    {
      title: "Facebook link and web login",
      level: 2,
      paras: [
        "Historically accounts could be linked to Facebook and share a login flow. Now the button set depends on region, account type, and Meta updates.",
        "On a computer the logic matches the app: login screen → password help → email/SMS → new code. A separate “Windows program” isn’t required — a browser is enough.",
      ],
      lists: [],
    },
    {
      title: "If the account was hacked",
      level: 2,
      paras: [
        "Signs: name/password changed, content gone, weird DMs, unknown logins. Act fast.",
      ],
      lists: [
        {
          intro: "Action order:",
          items: [
            "try password reset via your own contacts;",
            "report the hack through official support / reports;",
            "change email and linked-service passwords;",
            "turn on two-factor authentication;",
            "warn clients if scammers messaged under your name.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Handing login and password to a “fake-engagement helper” or shady service. After that the reset is already in someone else’s hands.",
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
        "Current email and phone, unique password, 2FA, caution with third-party apps, recovery backup codes — if the platform issues them.",
      ],
      lists: [
        {
          intro: "Basic hygiene:",
          items: [
            "password only in a password manager;",
            "don’t stay signed in on others’ devices;",
            "don’t confirm suspicious “security checks”;",
            "for a brand — access limited to a small circle.",
          ],
        },
      ],
    },
  ],
};
