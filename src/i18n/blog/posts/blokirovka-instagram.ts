import type { BlogPost } from "../../../data/blog";

/** EN overlay for blokirovka-instagram — same structure as RU JSON. */
export const blokirovkaInstagramEn: BlogPost = {
  slug: "blokirovka-instagram",
  title: "Instagram lockout: how to regain access and what to avoid",
  date: "2021-07-13",
  category: "SMM",
  cover: "/images/blog/blokirovka-instagram/cover-en.webp",
  excerpt:
    "Why Instagram restricts accounts, how a full ban differs from “action blocked,” how to appeal via official forms, and how to lower risk — without grey schemes.",
  lead: [
    "Instagram restrictions vary: a temporary action limit, content removal, partial feature bans, or a fully unavailable profile. Causes include reports, copyright, suspected automation, and hacks.",
    "Below: how to read the notice, where to write support, and how to lower risk. Response times and menu labels change — follow current screens and Help. This is an informational memo, not an unlock guarantee.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "How is a lockout different from a forgotten password?",
      a: "With a forgotten password the login form works — you need a reset. With a lockout the system clearly says there’s a restriction / violation. Password reset is in a separate article.",
    },
    {
      q: "How long does support take to reply?",
      a: "From hours to several days; weekends are slower. There is no fixed “always 3–5 hours” — don’t plan a campaign around an instant reply.",
    },
    {
      q: "Does claiming “the account was hacked” help if it’s a rules ban?",
      a: "The hack flow is for account takeover. Using it instead of a normal violation appeal is risky and can confuse the case. Write to the point: what happened and why you think the decision is wrong.",
    },
    {
      q: "What does “Action blocked” mean?",
      a: "Often a temporary limit on likes, Direct, follows, or posts after an activity spike. It usually lifts on its own; slow down and don’t run bots.",
    },
    {
      q: "Are there official “60 likes per hour” limits?",
      a: "There are no public hard tables for everyone. Numbers from old guides are folklore. Aim for live behavior without mass-liking and autoposting.",
    },
  ],
  sections: [
    {
      title: "What kinds of restrictions exist",
      level: 2,
      paras: [
        "After login you may see a screen with a (vague) reason and “Learn more” / appeal buttons. Sometimes only ads, Direct, or publishing are cut while viewing stays.",
        "Temporary anti-spam (“action blocked”) ≠ account deletion. First read the notice text and save a screenshot — useful for follow-up.",
      ],
      lists: [
        {
          intro: "Typical reasons:",
          items: [
            "reports and content moderation",
            "copyright on others’ photos/video/music",
            "suspicion of bots and mass-liking",
            "a hack and spam under your name",
            "repeat violations after warnings",
          ],
        },
      ],
      links: [
        {
          label: "Password and login recovery",
          href: "/en/blog/parol-instagram/",
        },
        {
          label: "Fake likes: risks",
          href: "/en/blog/nakrutka-laykov-instagram/",
        },
      ],
    },
    {
      title: "How to appeal via official forms",
      level: 2,
      paras: [
        "Follow the buttons in the notice or Help / support in the app and linked accounts in Accounts Center. Give your name, @username, reply email, country, and a short summary.",
        "The reply often comes by email: what to delete, what to confirm, whether extra ID is needed. For a business profile they sometimes ask for brand proof — prepare ahead, without dumping personal data in open chats.",
        "Write to the point, without aggression. If they ask to remove disputed content — do it and confirm. Fake “I was hacked” narratives when it’s a rules case make review harder.",
      ],
      lists: [
        {
          intro: "Useful in the request:",
          items: [
            "exact @username and restriction date",
            "what you see on screen (describe it)",
            "what you already did (changed password, revoked sessions)",
            "a contact email you can access",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Don’t buy a “guaranteed unlock” from middlemen: fraud and re-hack risk. Official support channels only.",
        },
      ],
      links: [
        {
          label: "Linking Instagram and Facebook",
          href: "/en/blog/svyazka-instagram-facebook/",
        },
      ],
    },
    {
      title: "Temporary action limit",
      level: 2,
      paras: [
        "A message like “action blocked, try later” often follows a burst of similar actions: likes, follows, Direct, frequent posts. Duration — from minutes to a day or longer.",
        "Lower activity, wait, don’t switch VPN/proxies in batches, and don’t plug in grey autoposters. After the limit lifts, return to a normal pace.",
      ],
    },
    {
      title: "How to lower lockout risk",
      level: 2,
      paras: [
        "Your own materials or licensed content, moderate manual activity, two-factor auth, current email and phone, no fake engagement or mass-following.",
        "Run a new account calmer in the first days. Ads and integrations — by platform rules, without dodging moderation.",
      ],
      lists: [
        {
          intro: "Hygiene minimum:",
          items: [
            "unique password + 2FA",
            "check active sessions",
            "don’t give access to shady “SMM services”",
            "don’t publish others’ content without rights",
            "don’t run bots for likes and follows",
          ],
        },
      ],
    },
  ],
};
