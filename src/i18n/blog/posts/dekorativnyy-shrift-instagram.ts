import type { BlogPost } from "../../../data/blog";

/** EN overlay for dekorativnyy-shrift-instagram — same structure as RU JSON. */
export const dekorativnyyShriftInstagramEn: BlogPost = {
  slug: "dekorativnyy-shrift-instagram",
  title: "Decorative fonts on Instagram*: bio, posts, and common sense",
  date: "2021-11-22",
  category: "SMM",
  cover: "/images/blog/dekorativnyy-shrift-instagram/cover-en.webp",
  excerpt:
    "How to get “pretty” text in the Instagram* header and on images: Unicode styles, editors, non-Latin scripts, readability, and risks — without a catalog of outdated apps.",
  lead: [
    "Instagram* itself has no typeface picker in bio and captions: bold, italic, and “handwritten” looks usually come from Unicode characters or text baked into an image.",
    "Below — where that fits, how to paste a style without giving your password to third-party “Font for Instagram*” tools, why non-Latin scripts often break, and when décor hurts reach and trust. Meta* disclaimer is on the page.",
  ],
  legalNotice: {
    title: "Dear readers!",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Are there built-in fonts in the bio?",
      a: "There’s no separate “font” menu. What looks like another typeface in profile text is usually special Unicode characters copied from a generator.",
    },
    {
      q: "Why does non-Latin text turn into “squares”?",
      a: "Many generators are Latin-only. Some styles don’t include Cyrillic or other scripts — on another device the character won’t render.",
    },
    {
      q: "Does a decorative font affect reach?",
      a: "Not as an “algorithm secret.” It may slightly boost header noticeability — or cut readability and trust. Content and audience decide.",
    },
    {
      q: "Are Fonts for Instagram* apps safe?",
      a: "Generators that only copy text are usually fine. Tools that ask for Instagram* login/password risk account theft. Don’t enter a password for a font.",
    },
    {
      q: "How is bio text different from text on a photo?",
      a: "In bio — Unicode or plain letters. On a post/Story — a real typeface in an editor (Canva, Snapseed, and peers): that’s an image, not a profile field.",
    },
    {
      q: "How many styles are normal in the header?",
      a: "One accent on a headline or CTA is enough. Every word in a different “font” reads worse and looks spammy.",
    },
    {
      q: "Do you need invisible characters for “centering”?",
      a: "People sometimes use invisible/space Unicode to shift lines. Behavior varies by client — don’t treat the trick as a brand standard.",
    },
    {
      q: "Does décor help sales?",
      a: "Only if it strengthens a clear offer. Pretty mush without “who you are / what you give / where to write” doesn’t convert.",
    },
  ],
  sections: [
    {
      title: "What you can actually “dress up”",
      level: 2,
      paras: [
        "Header (name and About): people most often paste Unicode styles — 𝖇𝖔𝖑𝖉, 𝓬𝓾𝓻𝓼𝓲𝓿𝓮, and similar sets. Bio length is limited; décor eats the character “budget” faster than plain text.",
        "Post captions and comments: same trick, but a long decorative paragraph tires fast. Better an accent on the headline or CTA.",
        "Images, carousels, highlight covers, and Stories: real editor fonts work here. More reliable for Cyrillic/brand than Unicode in the bio.",
      ],
      lists: [],
      notes: [
        {
          title: "Don’t confuse with feed design",
          text: "A unified grid style, avatar, and header structure are a separate topic. A decorative font is just one trick inside text or a layout.",
        },
      ],
    },
    {
      title: "Unicode styles: how it works",
      level: 2,
      paras: [
        "A generator swaps ordinary letters for other Unicode code points that many devices draw as “bold” or “script.” Instagram* doesn’t apply a CSS font — it just shows the characters.",
        "Typical path: open a web or mobile generator → type a phrase → copy → paste into Edit profile or a caption. App names change every year; the “copied text” pattern matters more than a utility brand.",
        "Before publishing, open the profile on another device (iOS and Android): rare styles look different on one OS or fall into “tofu” (□).",
      ],
      lists: [
        {
          intro: "When Unicode fits:",
          items: [
            "a short accent in the name or first bio line;",
            "highlighting one CTA (“book,” “price list”);",
            "a light blog where the tone allows play.",
          ],
        },
        {
          intro: "When better not to use:",
          items: [
            "long addresses, prices, legal wording;",
            "B2B with a conservative audience;",
            "the whole About block in one script style.",
          ],
        },
      ],
    },
    {
      title: "Scripts, accessibility, and discovery",
      level: 2,
      paras: [
        "Many “fancy font” sets are incomplete for Cyrillic and other non-Latin alphabets. Check every letter — or part of the word vanishes for a follower.",
        "Screen readers and some clients voice decorative characters poorly. Duplicate critical meaning (niche, city, phone in text) in plain type.",
        "In-app search and OCR on images don’t replace a clear offer in plain letters in the bio. Décor is a shell — not a platform SEO hack.",
      ],
      lists: [],
      notes: [
        {
          title: "Common mistake",
          text: "The whole About block in one script style. On a small screen it’s mush: people don’t get who you are in three seconds and leave.",
        },
      ],
    },
    {
      title: "Text on images",
      level: 2,
      paras: [
        "For posts and Stories it’s safer to overlay text in an editor: Canva, Figma, Snapseed, built-in Story text stickers, and peers. Pick a typeface with your script, size, and contrast.",
        "Keep 1–2 font pairs in the brand kit — like feed templates. A jumping typeface set every week breaks recognition more than a “boring” unified style.",
        "Leave margins: grid previews and platform UI crop edges. A large headline + short subhead reads better than a tiny wall of text.",
      ],
      lists: [
        {
          intro: "Mini layout rules:",
          items: [
            "enough text/background contrast;",
            "no more than two accents per frame;",
            "faces and logo not covered by letters;",
            "readable on a phone without zoom.",
          ],
        },
      ],
    },
    {
      title: "Safety and outdated “TOP apps”",
      level: 2,
      paras: [
        "Old roundups pushed dozens of utilities with store ratings and local prices. The list ages fast: apps rename, change policy, and monetization.",
        "Don’t download “font unlock” tools that ask for Instagram* password or session. Clipboard is enough to generate text.",
        "Paid editors with solid script support make sense if you regularly make covers. A one-off post usually fits Canva or built-in Story text.",
      ],
      lists: [],
      notes: [
        {
          title: "Grey promises",
          text: "“This font will multiply reach N times” is utility marketing, not fact. Test header noticeability on your audience — not on someone else’s screenshots.",
        },
      ],
    },
    {
      title: "How to fit it into the header without harm",
      level: 2,
      paras: [
        "First draft in plain text: who you are, benefit, geo/hours, CTA and link (if available). Then — one decorative accent.",
        "Profile name and username should stay recognizable: a too “broken” display name makes you hard to find in chats and mentions.",
        "Combine with emoji moderately: décor and pictograms compete for attention. List structure beats a carnival of styles.",
      ],
      lists: [
        {
          intro: "Quick order:",
          items: [
            "write the meaning without décor;",
            "pick one Unicode style or keep the bio plain;",
            "check iOS + Android;",
            "match avatar and highlight covers;",
            "in a week, see whether the CTA is read (link clicks, Direct).",
          ],
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "A “pretty font” on Instagram* is either Unicode in text fields or a real typeface on an image. The platform doesn’t offer a bio font menu.",
        "Script coverage, readability, and safety beat an app catalog. One accent beats a wall of décor.",
        "Header meaning and a unified feed visual sell better than an exotic letter in every word.",
      ],
      lists: [],
    },
  ],
  closing: [
    "Rewrite the bio in plain text, then add one decorative accent on the CTA and check display on two devices — faster than stacking ten styles “for luck.”",
  ],
  related: [
    "oformlenie-stranicy-instagram",
    "shablon-instagram",
    "emodzi",
    "podpis-foto-instagram",
    "avatar-instagram",
    "post-instagram",
  ],
};
