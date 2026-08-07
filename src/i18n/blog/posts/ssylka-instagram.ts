import type { BlogPost } from "../../../data/blog";

/** EN overlay for ssylka-instagram — same structure as RU JSON. */
export const ssylkaInstagramEn: BlogPost = {
  slug: "ssylka-instagram",
  title: "How to copy an Instagram* profile link",
  date: "2021-04-08",
  category: "SMM",
  cover: "/images/blog/ssylka-instagram/cover-en.webp",
  excerpt:
    "How to get an Instagram* profile URL: from the browser, from the app, and manually by username — where to paste the link and what it doesn’t guarantee.",
  lead: [
    "An Instagram* profile link is for the site, business card, ads, and chat: the person lands straight on the account. The format is simple — an address like `https://www.instagram.com/username/`.",
    "Copying the URL takes a minute; placing it where people actually click matters more. The three-dot menu and labels change; the idea stays. A Meta* product disclaimer is on the page.",
  ],
  legalNotice: {
    title: "Dear readers!",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "How is a profile link different from a link in Stories?",
      a: "A profile URL opens the whole account. A Story link or sticker is a separate mechanic with account-type limits.",
    },
    {
      q: "Does username capitalization matter?",
      a: "In the URL, use the login as it appears in the profile address. Don’t invent spaces or characters — copy from the address bar.",
    },
    {
      q: "Will the link bring followers by itself?",
      a: "No. It only opens the profile. You need an offer, design, and traffic. More external links ≠ automatic sales growth.",
    },
    {
      q: "Can I shorten the profile link?",
      a: "Yes, via short URLs — but for trust a full official address is often better, especially in ads and on the site.",
    },
    {
      q: "Where else can I get a contact?",
      a: "On a business profile — contact buttons, WhatsApp*/email where available. See profile design and business account.",
    },
  ],
  sections: [
    {
      title: "What the URL is made of",
      level: 2,
      paras: [
        "Base: Instagram* domain + unique username. Example: `https://www.instagram.com/your_username/`. The nick is unique on the network; if the profile was renamed, the old link may stop opening the same way.",
        "Don’t confuse it with links to a single post or Reel — those have a different path after the username.",
      ],
      lists: [],
    },
    {
      title: "Copy in the browser",
      level: 2,
      paras: [
        "Open Instagram* in a browser, go to the needed profile (yours or someone else’s if it’s open). The address bar has the full URL — copy it.",
        "Make sure it’s the profile page, not the feed, Explore, or settings.",
      ],
      lists: [],
    },
    {
      title: "Copy in the app",
      level: 2,
      paras: [
        "Open the profile → menu (⋯ or similar) → an item like “Copy profile link” / Share profile. Paste where you need it.",
        "Labels have changed; look for copy link or “share profile,” then “copy.”",
      ],
      lists: [],
      links: [
        {
          label: "Instagram* profile design",
          href: "/en/blog/oformlenie-stranicy-instagram/",
        },
        {
          label: "Instagram* business account",
          href: "/en/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
    {
      title: "Build the link by hand",
      level: 2,
      paras: [
        "If you know the exact username: `https://www.instagram.com/` + nick + `/`. Test the tap in incognito — you see whether the profile opens without your session.",
        "A typo in the nick leads to someone else’s or a missing account — always test after building by hand.",
      ],
      lists: [],
      notes: [
        {
          title: "Common mistake",
          text: "Putting a Story or post link in ads instead of the profile — or the reverse when you need a specific offer.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Where to put it and how to present it",
      level: 2,
      paras: [
        "Site (footer, contacts, buttons), other socials, email signature, business card, deck, QR. In copy, a short CTA (“Instagram* profile” + link) beats a bare URL in the middle of a paragraph.",
        "For ads and landings, send people to an account with a clear header offer and current content — otherwise the tap doesn’t convert.",
      ],
      lists: [
        {
          intro: "Before publishing the link:",
          items: [
            "profile is open or access rules are clear;",
            "username matches the brand;",
            "header and avatar are in order;",
            "there’s a next step (Direct, site, product);",
            "link tested from another device.",
          ],
        },
      ],
      links: [
        {
          label: "Business on Instagram*",
          href: "/en/blog/biznes-v-instagram/",
        },
        {
          label: "Ads on Instagram*",
          href: "/en/blog/reklama-instagram/",
        },
      ],
    },
    {
      title: "Key takeaways",
      level: 2,
      paras: [
        "A profile link is an account address, not promotion magic. Copy from browser or app and verify the tap.",
        "Consistent content and offer beat the count of external URL mentions.",
      ],
      lists: [],
    },
  ],
  closing: [
    "Copy the profile URL, test it, and place it where the audience actually clicks. What they see after the tap decides the rest.",
  ],
  related: [
    "oformlenie-stranicy-instagram",
    "biznes-akkaunt-instagram",
    "biznes-v-instagram",
    "reklama-instagram",
    "avatar-instagram",
    "instagram-direct",
  ],
};
