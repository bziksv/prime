import type { BlogPost } from "../../../data/blog";

/** EN overlay for otmetki-instagram — same structure as RU JSON. */
export const otmetkiInstagramEn: BlogPost = {
  slug: "otmetki-instagram",
  title: "Instagram tags: rules, mistakes, and real value",
  date: "2021-06-25",
  category: "SMM",
  cover: "/images/blog/otmetki-instagram/cover-en.webp",
  excerpt:
    "Why tag accounts in Instagram Stories and posts, which limits and mistakes get in the way, and how to use tags for collaborations — without outdated button-click paths.",
  lead: [
    "A tag (@handle or a photo tag) gives a quick jump to another profile and a notification to the tagged person. For business that’s collaborations, partner mentions, and navigation across your own accounts.",
    "Below — what the feature is for, typical rules and mistakes, and useful scenarios. The app UI changes; check limits and menu labels in the current Instagram version.",
  ],
  legalNotice: {
    title: "Dear readers!",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Is a Stories mention the same as a photo tag?",
      a: "Similar idea (link to a profile), different mechanics. In Stories it’s more often @ in text or a mention sticker; in a post — a tag on the frame area. Check the current UI.",
    },
    {
      q: "How many accounts can you tag at once?",
      a: "Limits have changed (historically Stories were often around a dozen). Need more — split across several Stories/posts.",
    },
    {
      q: "Can you tag someone who blocked you?",
      a: "Usually no: without access to the profile the tag won’t set.",
    },
    {
      q: "Is a third-party scheduler required?",
      a: "No. Schedulers help with timing, but tags work in the app too. Don’t give your password to shady services.",
    },
    {
      q: "How is this different from profile design?",
      a: "Design is the header and grid. Tags are cross-links inside content. See also Stories and business-account posts.",
    },
  ],
  sections: [
    {
      title: "Why tag others",
      level: 2,
      paras: [
        "With one tap a follower goes to a partner, branch, expert, or product account. The tagged person learns about the mention and may reply with a Story or reshare — when it fits.",
        "For a brand it’s not “follower magic,” but a navigation and mutual PR tool when both sides agree.",
      ],
      lists: [
        {
          intro: "Typical scenarios:",
          items: [
            "collaboration with a partner;",
            "mentioning a supplier / expert;",
            "linking several of your own profiles;",
            "navigation to a shop or landing account.",
          ],
        },
      ],
      links: [
        {
          label: "Instagram Stories",
          href: "/en/blog/stories-instagram-inkognito/",
        },
        {
          label: "Instagram business account",
          href: "/en/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
    {
      title: "Rules and limits",
      level: 2,
      paras: [
        "Tag only real handles without extra characters around @. Don’t exceed the tag limit per post. A private profile or one that blocked you is usually unavailable for tagging.",
        "If someone was tagged against their will, they can report it or limit mentions in privacy settings — factor that into collaborations.",
      ],
      lists: [
        {
          intro: "Before publishing:",
          items: [
            "handle copied correctly;",
            "profile not on a block list;",
            "consent for commercial mention;",
            "don’t spam dozens of random tags.",
          ],
        },
      ],
    },
    {
      title: "Typical mistakes",
      level: 2,
      paras: [
        "Wrong handle, a space after @, over the limit, a tag “for show” with no context — common reasons the link fails or adds no value.",
        "Emulators and third-party SMM dashboards aren’t required: if you use a scheduler, pick a trusted one and don’t store the password in shady forms.",
      ],
      lists: [],
      notes: [
        {
          title: "Practice",
          text: "One meaningful tag with context in the frame beats ten random handles “for reach.”",
        },
      ],
    },
    {
      title: "Value for promotion",
      level: 2,
      paras: [
        "Tags strengthen collaborations and mutual PR and help move a follower along a chain of accounts (series, quest, branches). They don’t replace ads or a content plan.",
        "Measure the result: profile visits, replies, saves — not only the fact that “a tag was placed.”",
      ],
      lists: [
        {
          intro: "What to measure:",
          items: [
            "replies and reshares from tagged people;",
            "follower growth after a collab;",
            "sticker/mention taps (if stats are available);",
            "audience quality, not a raw counter.",
          ],
        },
      ],
      links: [
        {
          label: "Instagram page design",
          href: "/en/blog/oformlenie-stranicy-instagram/",
        },
        {
          label: "Instagram insights",
          href: "/en/blog/statistika-instagram/",
        },
      ],
    },
  ],
};
