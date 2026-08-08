import type { BlogPost } from "../../../data/blog";

/** EN overlay for nayti-cheloveka-instagram — same structure as RU JSON. */
export const naytiChelovekaInstagramEn: BlogPost = {
  slug: "nayti-cheloveka-instagram",
  title: "How to find someone on Instagram: username, search, and contacts",
  date: "2020-10-29",
  category: "SMM",
  cover: "/images/blog/nayti-cheloveka-instagram/cover-en.webp",
  excerpt:
    "How to find an Instagram profile by username, name, hashtag, place, or contacts — without outdated screenshots or the myth that every action works without an account.",
  lead: [
    "Finding someone on Instagram is easiest by username or name in search. If you don’t have a handle — mutual friends, geotags, hashtags, and contact sync help.",
    "Below: working scenarios. App menus change; check the exact icons in your version. Without signing in, some profiles don’t open or are view-only. Meta disclaimer is on the page.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Can you view a profile without registering?",
      a: "Sometimes the public URL `instagram.com/username` opens in a browser. Full features and many profiles need a login. Commenting without an account usually isn’t possible.",
    },
    {
      q: "I can’t find them by name — what’s wrong?",
      a: "Display name isn’t the same as username. Check spelling, language, possible dots or digits in the handle. The profile may be private, deleted, or blocked.",
    },
    {
      q: "Does searching by phone number help?",
      a: "Via contact sync Instagram may suggest people you know. It’s optional and tied to privacy — turn it on deliberately.",
    },
    {
      q: "How is this different from the profile-link article?",
      a: "That one covers copying and building a URL. This one is finding a person when you don’t have a link yet.",
    },
    {
      q: "Can you search via VK?",
      a: "Sometimes people list Instagram on a VK profile or site. That’s a workaround, not official Instagram search.",
    },
  ],
  sections: [
    {
      title: "If you know the username",
      level: 2,
      paras: [
        "Open `https://www.instagram.com/username/` in a browser or paste the handle into the app search. That’s the fastest path.",
        "For actions (follow, message, comments) you need your own account. Public view without login is limited and unstable.",
      ],
      links: [
        {
          label: "Instagram profile link",
          href: "/en/blog/ssylka-instagram/",
        },
      ],
    },
    {
      title: "Search in the app",
      level: 2,
      paras: [
        "Search icon → Accounts tab: look by username or the name in the header. Tabs like popular, tags, and places help when there’s no handle but name or location are known.",
        "Hashtags and geotags narrow the circle, but popular tags take longer. Exact tab names have shifted — follow the meaning.",
      ],
      lists: [
        {
          intro: "What to try:",
          items: [
            "exact username",
            "first and last name / brand",
            "a related hashtag",
            "geo if you know the place",
            "mutual friends / photo tags",
          ],
        },
      ],
    },
    {
      title: "If the profile won’t show up",
      level: 2,
      paras: [
        "Check typos and alternate spellings. The person may have changed the handle, gone private, or deleted the account — then search can’t help.",
        "Don’t use shady “deanonymizer” services: phishing risk and leaking your own data.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Important",
          text: "Finding someone isn’t stalking. Respect private accounts.",
        },
      ],
    },
    {
      title: "Phone contacts and other networks",
      level: 2,
      paras: [
        "Instagram settings include options to link contacts and see people you may know. The list depends on who’s already on the network and who allows being found.",
        "Sometimes Instagram is listed on VK, a site, or a business card — check those sources if in-app search is quiet.",
      ],
      links: [
        {
          label: "Username generators",
          href: "/en/blog/generator-nikov/",
        },
        {
          label: "Instagram password",
          href: "/en/blog/parol-instagram/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Username and Accounts search are the base. Without a handle, name, geo, hashtags, and contacts work — worse and slower.",
        "A private or deleted profile can’t be “opened” with official tools.",
      ],
    },
  ],
  closing: [
    "Start with the URL or username search; if there’s no handle — name, mutual connections, and contacts. You’ll find people faster that way than through shady third-party services.",
  ],
  related: [
    "ssylka-instagram",
    "generator-nikov",
    "parol-instagram",
    "biznes-akkaunt-instagram",
    "oformlenie-stranicy-instagram",
    "stories-instagram-inkognito",
  ],
};
