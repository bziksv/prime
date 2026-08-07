import type { BlogPost } from "../../../data/blog";

/** EN overlay for zakrytyy-akkaunt-instagram — same structure as RU JSON. */
export const zakrytyyAkkauntInstagramEn: BlogPost = {
  slug: "zakrytyy-akkaunt-instagram",
  title: "Private Instagram account: why use it and how to turn it on",
  date: "2020-07-17",
  category: "SMM",
  cover: "/images/blog/zakrytyy-akkaunt-instagram/cover-en.webp",
  excerpt:
    "How a private Instagram profile differs from deletion and a pause, what non-followers see, how to enable privacy, and why a business account often can’t be “just made private.”",
  lead: [
    "“Close the account” in everyday speech often gets mixed up with deletion. On Instagram a private profile is a mode where only approved followers see the feed and Stories. Deletion and temporary deactivation are different paths.",
    "Menu items change — check Meta Help for current steps. Why people turn privacy on, what guests see, roughly how the settings path looks, and which limits a professional profile has.",
  ],
  legalNotice: {
    title: "Dear readers!",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Is a private account the same as deletion?",
      a: "No. The profile stays; content stays. Deletion and pause are covered in a separate article.",
    },
    {
      q: "What does someone see without following?",
      a: "Usually avatar, name, short bio, counters, and a follow-request button — without the post grid and Stories.",
    },
    {
      q: "Do old followers stay?",
      a: "Yes: people who already followed before you went private generally keep access until you remove or restrict them.",
    },
    {
      q: "Can I make a business account private?",
      a: "Often the option is missing or limited: a commercial storefront is built for openness. Sometimes you switch the profile to personal or another type first — check current settings.",
    },
    {
      q: "Does privacy hurt reach?",
      a: "Organic inflow from recommendations and casual visits is usually weaker: you have to accept requests by hand.",
    },
  ],
  sections: [
    {
      title: "Three different “close” actions",
      level: 2,
      paras: [
        "Private profile — audience filter: posts only for approved followers.",
        "Temporary pause / deactivation — hide the account for a while and return by signing in.",
        "Full deletion — irreversible exit with the page, followers, and content.",
      ],
      notes: [
        {
          title: "Common mix-up",
          text: "Old guides mixed “temporarily disable” and “private account.” Different buttons, different outcomes.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Account deletion and pause",
          href: "/en/blog/udalenie-akkaunta-instagram/",
        },
      ],
    },
    {
      title: "Why people make a profile private",
      level: 2,
      paras: [
        "Personal frames, family, money in shot — access only for a circle you trust.",
        "A narrow club, course, or internal brand feed: content not for the whole recommendation feed.",
        "Less noise from random followers and pushy comments: you moderate requests.",
      ],
      lists: [
        {
          intro: "Typical motives:",
          items: [
            "privacy instead of a public storefront;",
            "control over who sees Stories and Direct context;",
            "a pause on “openness” without deleting the account.",
          ],
        },
      ],
    },
    {
      title: "What guests and followers see",
      level: 2,
      paras: [
        "A non-follower can’t scroll the grid and usually can’t watch Stories. They get a surface profile card and a “Follow” request.",
        "Already accepted followers keep seeing posts until you remove them.",
        "To limit someone already following: remove from followers, Restrict, or block — depending on the goal. Restrict hides interactions without a full ban.",
      ],
    },
    {
      title: "How to turn on a private account",
      level: 2,
      paras: [
        "In the app: profile → menu (☰) → Settings and activity → Account privacy → “Private account” toggle (wording depends on version).",
        "In a browser the path often goes through profile settings / privacy. Check exact clicks in Instagram Help.",
        "After you turn it on, new people wait for your Accept / Decline. A declined request doesn’t open the feed.",
      ],
      notes: [
        {
          title: "Important",
          text: "Update the app if the item is missing: sometimes the option appears after an update or a profile-type change.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Business and professional profile",
      level: 2,
      paras: [
        "For shops and lead gen a private mode is almost always harmful: fewer casual touches, harder ads and recommendations.",
        "If the platform won’t let you make a commercial account private “as is,” people first look at changing profile category (personal / creator) — with loss of some insights. Details — in the business-account article.",
        "Facebook/Meta link: check whether content is duplicated to more open channels — or a “private” post leaks there.",
      ],
      links: [
        {
          label: "Instagram business account",
          href: "/en/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
    {
      title: "Downsides of private mode",
      level: 2,
      paras: [
        "Slower audience growth: every follower is a manual decision.",
        "Weaker organic from Explore and recommendations for cold viewers.",
        "For a brand this is rarely the main mode: more often Close Friends lists, hide-from-selected, and careful Direct.",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Private account = follower moderation, not page deletion.",
        "Guests get a card and a request; the feed only after Accept.",
        "Commerce usually needs an open profile; privacy — with targeted tools.",
      ],
    },
  ],
  closing: [
    "If the goal is fewer stranger eyes, turn on a private profile and review current followers. If the goal is to leave Instagram for good or pause — open the deletion and deactivation guide.",
  ],
  related: [
    "udalenie-akkaunta-instagram",
    "biznes-akkaunt-instagram",
    "prosmotr-zakrytogo-akkaunta",
    "stories-instagram-inkognito",
    "vtoroy-akkaunt-instagram",
    "razblokirovka-instagram",
  ],
};
