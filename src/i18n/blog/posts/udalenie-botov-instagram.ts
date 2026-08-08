import type { BlogPost } from "../../../data/blog";

/** EN overlay for udalenie-botov-instagram — same structure as RU JSON. */
export const udalenieBotovInstagramEn: BlogPost = {
  slug: "udalenie-botov-instagram",
  title: "How to remove Instagram bots from followers without hurting the account",
  date: "2020-02-06",
  category: "SMM",
  cover: "/images/blog/udalenie-botov-instagram/cover-en.webp",
  excerpt:
    "Why clean bots on Instagram, how to spot a dead audience, why a sharp mass purge hits reach, and what’s dangerous about third-party “auto-cleaners” that ask for your login.",
  lead: [
    "Bots and empty profiles among followers inflate the count and kill engagement rate (ER): reach and advertisers look at live activity, not “100k on the storefront.” Often bots follow your own fake engagement or mass-follow habits.",
    "Below: signs of a junk audience, safer cleanup logic, and why we don’t recommend auto-service catalogs that want your Instagram password. See the Meta notice on this page.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Will removing bots raise reach by itself?",
      a: "It can partly raise the share of live viewers, but without strong content and without stopping new fake growth the effect is weak.",
    },
    {
      q: "Can I wipe everyone over a weekend?",
      a: "A sharp base drop in a short time looks suspicious and can temporarily hurt reach. Clean in batches.",
    },
    {
      q: "Are “delete bots automatically” services safe?",
      a: "Many ask for login or session — risk of account theft and ToS violations. Prefer manual or built-in moderation without handing over the password.",
    },
    {
      q: "Should I block bots or remove them from followers?",
      a: "It depends on the goal: remove from the list, Restrict, or block a spammer. Exact menu items live in current Instagram Help.",
    },
    {
      q: "How is this different from the “fake likes” article?",
      a: "That one explains why not to buy activity. This one covers what to do with junk already piled up in followers.",
    },
  ],
  sections: [
    {
      title: "Why bots hurt",
      level: 2,
      paras: [
        "Algorithms and advertisers look at interactions. A dead base means low ER next to a pretty follower count.",
        "Fake engagement and mass-following bring bots themselves. Competitor bot attacks happen, but your own shady growth is more often to blame.",
        "Cleanup doesn’t replace strategy: weak content will kill a clean profile too.",
      ],
      links: [
        {
          label: "Fake likes: risks",
          href: "/en/blog/nakrutka-laykov-instagram/",
        },
        {
          label: "Engagement on social media",
          href: "/en/blog/vovlechennost-socseti/",
        },
      ],
    },
    {
      title: "Signs of shady followers",
      level: 2,
      paras: [
        "Empty or stock avatar, no posts for months, a nickname of random characters, the same empties in follows and followers.",
        "Spam in Direct and comments, template “earn/crypto” bios.",
        "Careful: a newbie without an avatar isn’t automatically a bot. Look at the full set of signs and your audience — not a single “no photo” filter.",
      ],
      lists: [
        {
          intro: "Red flags:",
          items: [
            "a sharp follower jump without reach",
            "geo or language off for the product",
            "zero saves and comments while the base “grows”",
            "a history of buying fake engagement from a vendor",
          ],
        },
      ],
    },
    {
      title: "Mistake: cutting the base in a week",
      level: 2,
      paras: [
        "Cutting the audience several times over in a few days often hurts delivery to live people.",
        "Plan cleanup in batches and strengthen content, Stories, and replies in parallel — so ER doesn’t hit zero during the repair.",
        "Hard “50–100 a day” limits from old guides aren’t canon: the guide is moderation and no complaints or limits — not someone else’s 2020 number.",
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "After cleanup don’t go back to buying growth “so the number doesn’t drop” — that’s a self-deception loop.",
        },
      ],
    },
    {
      title: "Manual cleanup",
      level: 2,
      paras: [
        "For smaller bases: open the followers list, open a profile, then remove, Restrict, or block as needed.",
        "Start with comment spammers and obvious empties — not everyone without an avatar.",
        "Log how many you remove per day so you don’t crash the metrics.",
      ],
    },
    {
      title: "Third-party “auto-cleaners”",
      level: 2,
      paras: [
        "Services promise filters by activity, language, and mass blocking. The price is account access and ban risk.",
        "We don’t carry forward Zengram / InstaPlus / Spam Guard catalogs from old reviews as recommendations: products change, and many are shady.",
        "If you use any helper — only with Meta ToS in mind and without giving passwords to shady sites. The best long-term path is manual moderation plus quitting fake growth.",
      ],
      links: [
        {
          label: "Audience parsing: risks",
          href: "/en/blog/parsing-auditorii/",
        },
      ],
    },
    {
      title: "After cleanup",
      level: 2,
      paras: [
        "Watch ER and reach for 2–4 weeks: they should stabilize on a more honest base.",
        "For growth — content, collabs, legal ads or paid placements — not a new pack of bots.",
        "Advertisers prefer a smaller but live audience.",
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "Bots are a symptom of shady growth or spam; clean in batches.",
        "Don’t chase auto-services that want your login.",
        "Live ER beats a pretty follower count.",
      ],
    },
  ],
  closing: [
    "Remove obvious spam and a batch of empties this week, turn off any growth services, and compare ER in a month — more honest than an auto-cleaner’s promises.",
  ],
  related: [
    "nakrutka-laykov-instagram",
    "vovlechennost-socseti",
    "bloger-dlya-reklamy-instagram",
    "parsing-auditorii",
    "blokirovka-instagram",
    "oshibki-smm",
  ],
};
