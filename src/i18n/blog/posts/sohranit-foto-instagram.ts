import type { BlogPost } from "../../../data/blog";

/** EN overlay for sohranit-foto-instagram — same structure as RU JSON. */
export const sohranitFotoInstagramEn: BlogPost = {
  slug: "sohranit-foto-instagram",
  title: "How to save a photo from Instagram to phone and computer",
  date: "2020-11-17",
  category: "SMM",
  cover: "/images/blog/sohranit-foto-instagram/cover-en.webp",
  excerpt:
    "How to download your own or permitted Instagram photo: in-app save, browser, iPhone and Android nuances, Direct. Copyright and caution with others’ content.",
  lead: [
    "Saving a frame from Instagram is usually for your archive, client approval, or moving to another channel. The app UI changes — below is the logic of methods, not eternal 2020 button screenshots.",
    "Important: others’ photos are copyrighted. Downloading “to repost without asking” is bad practice. This material is informational.",
  ],
  legalNotice: {
    title: "Dear readers!",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Can you save any photo that isn’t yours?",
      a: "Technically methods exist, but legally and ethically — only your own, licensed, or with the author’s clear permission. For commercial use, get consent.",
    },
    {
      q: "Is there a Save button in the app?",
      a: "For your own posts and within current app features — check the post menu (⋯). Labels change; look for save to gallery / download.",
    },
    {
      q: "Why is it hard to save someone else’s post on iPhone?",
      a: "The platform limits direct saving of others’ content. A screenshot isn’t a full file; for others’ content ask the author.",
    },
    {
      q: "Are third-party “Instagram downloaders” safe?",
      a: "Many are phishing: they ask for login or install malware. Don’t enter your Instagram password on shady sites.",
    },
    {
      q: "How to save a photo from Direct?",
      a: "Depends on the sender’s settings (one-time photos) and OS. One-time vanishing attachments often can’t be saved officially — by design.",
    },
    {
      q: "Do you need a computer?",
      a: "For your own posts a browser / Meta Business Suite (if available for your account type) is handy. On phone — the app and a file manager.",
    },
    {
      q: "Is quality preserved?",
      a: "The platform may serve a compressed version. For print, keep originals yourself — not only a feed download.",
    },
    {
      q: "Is this a “how to steal photos” guide?",
      a: "No. Focus is your content and legal scenarios. Don’t use others’ commercial content without rights.",
    },
  ],
  sections: [
    {
      title: "First: your photos vs others’",
      level: 2,
      paras: [
        "Your posts and Stories (if the feature is available) are reasonable to export for archive. Others’ — only with permission or within fair use/law; for ads and the site — agree with the author.",
        "A screenshot of someone else’s post doesn’t make you the rights holder. For brand content, prefer the photographer’s original.",
      ],
      lists: [
        {
          intro: "Legal scenarios:",
          items: [
            "archive of your own posts;",
            "export for a client per brief;",
            "content with written permission;",
            "stock/your shoots instead of “downloaded from the feed”.",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Don’t enter Instagram login and password on third-party “download” sites — account-takeover risk.",
        },
      ],
    },
    {
      title: "Saving from the app (general principle)",
      level: 2,
      paras: [
        "Open the post → actions menu (⋯ or similar) → save/download item if it exists for that content type and author. For your own posts the feature is usually more available than for others’.",
        "If there’s no item — that’s a platform limit, not a “broken phone”. Then take the original from cloud/camera or ask the author.",
      ],
      lists: [
        {
          intro: "Before saving:",
          items: [
            "update the app;",
            "confirm the post is yours or you have rights;",
            "for carousels save the needed frame separately if the UI offers it.",
          ],
        },
      ],
      links: [
        {
          label: "Photos for Instagram: shooting",
          href: "/en/blog/foto-instagram/",
        },
      ],
    },
    {
      title: "iPhone: practical options",
      level: 2,
      paras: [
        "For your media: save via the post menu to the gallery or export through linked business tools if you use them. Screenshot is a fallback for draft approval — not for print.",
        "Third-party IPA/jailbreak utilities aren’t recommended: unstable and unsafe. Keep originals in Photos/cloud right after shooting.",
      ],
      lists: [
        {
          intro: "Habit for creators:",
          items: [
            "shoot → backup to album/cloud immediately;",
            "feed gets a copy, not the only file;",
            "send the client the original, not a crop from IG.",
          ],
        },
      ],
    },
    {
      title: "Android: practical options",
      level: 2,
      paras: [
        "Same idea: official save of your posts via the menu, file manager to the app folder (paths depend on Android version and OEM). Don’t download “Instagram mods” from unknown APKs — a common account-theft vector.",
        "If you save for SMM work — keep a project folder on disk/cloud with dates and usage rights.",
      ],
      lists: [
        {
          intro: "Security:",
          items: [
            "official client/app store only;",
            "no “cracked” clients;",
            "2FA on the account;",
          ],
        },
      ],
      links: [
        {
          label: "Instagram password",
          href: "/en/blog/parol-instagram/",
        },
      ],
    },
    {
      title: "Browser and computer",
      level: 2,
      paras: [
        "In a desktop browser Instagram often limits context “Save image as…” for others’ posts. For your own, a business cabinet / account data archive download (official data request) is better if you need a batch.",
        "Account archive is a legal way to take your media in bulk; prep time and format — see current Meta help.",
      ],
      lists: [
        {
          intro: "When a PC helps:",
          items: [
            "bulk archive of your data;",
            "client approval by email;",
            "move to the team drive.",
          ],
        },
      ],
      links: [
        {
          label: "Instagram from a computer",
          href: "/en/blog/instagram-s-kompyutera/",
        },
      ],
    },
    {
      title: "Direct and vanishing attachments",
      level: 2,
      paras: [
        "Regular Direct photos can sometimes be saved if the sender didn’t restrict it. One-time “view once” items are designed without save — workarounds via third-party apps hit rules and security risks again.",
        "For work approvals, better send files via cloud/email with the original — not the only copy in Direct.",
      ],
      lists: [
        {
          intro: "For the team:",
          items: [
            "brief and originals on a shared drive;",
            "Direct — for quick comments;",
            "don’t keep the only version only in the messenger.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "If the content matters for business — the source of truth always lives outside the Instagram feed: RAW/JPEG on your disk.",
        },
      ],
    },
  ],
  related: [
    "foto-instagram",
    "instagram-s-kompyutera",
    "parol-instagram",
    "pinterest-skachat",
    "karusel-instagram",
  ],
};
