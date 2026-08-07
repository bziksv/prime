import type { BlogPost } from "../../../data/blog";

/** EN overlay for ssylki-v-instagram — same structure as RU JSON. */
export const ssylkiVInstagramEn: BlogPost = {
  slug: "ssylki-v-instagram",
  title: "Instagram links: bio, Stories, Direct, and profile buttons",
  date: "2020-01-20",
  category: "SMM",
  cover: "/images/blog/ssylki-v-instagram/cover-en.webp",
  excerpt:
    "Where to put links on Instagram: bio and link-in-bio, post captions, Stories stickers, Direct, and contact buttons — without outdated IGTV tips or a catalog of shady tools.",
  lead: [
    "On Instagram, clickable URLs are scarce: you mostly get the bio link, a Stories sticker, business-profile buttons, and ad destinations. In a regular post caption, the link often isn’t tappable in the app.",
    "Menus change; check Meta Help for current labels. We map where links still work — and how not to confuse them with the profile URL itself. Stories stickers get their own deep dive. See the disclaimer on this page.",
  ],
  legalNotice: {
    title: "Dear readers!",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Can I make a caption link tappable?",
      a: "In the app, usually no: people copy the text or go to the bio (“link in bio”). In ads and on the web, a URL behaves differently.",
    },
    {
      q: "How is link-in-bio different from one bio URL?",
      a: "One link is a direct URL. A multi-link tool (Linktree and peers) opens a mini-page with several destinations. Factor in dependence on a third-party service.",
    },
    {
      q: "Do I need a business account for links?",
      a: "For Call / Email / Website buttons and proper ads — usually yes. A bio link works on a personal profile too.",
    },
    {
      q: "Where can I dig into Stories only?",
      a: "See the article on the Link / CTA sticker in Stories — it focuses on swipe behavior and limits.",
    },
    {
      q: "Is IGTV still relevant for links?",
      a: "Standalone IGTV was shut down. Long videos and descriptions live in Feed/Reels — follow the current video fields.",
    },
  ],
  sections: [
    {
      title: "Link in the profile header",
      level: 2,
      paras: [
        "Edit profile → website/link field. That’s the main permanent exit to a landing, shop, or form.",
        "Change the URL for a promo and write “link in bio” in posts — a familiar pattern when there’s no Stories sticker.",
        "Don’t mix it up with the account URL itself (`instagram.com/handle`) — that one goes on the site and business cards.",
      ],
      lists: [],
      links: [
        {
          label: "How to copy an Instagram profile link",
          href: "/en/blog/ssylka-instagram/",
        },
        {
          label: "Instagram page design",
          href: "/en/blog/oformlenie-stranicy-instagram/",
        },
      ],
    },
    {
      title: "Multi-link (link-in-bio)",
      level: 2,
      paras: [
        "A service gathers several buttons: site, Telegram, price list, booking. Useful for shops that change offers often.",
        "Downsides: an extra click, dependence on service uptime, and sometimes ads on free plans.",
        "Pick a brand (Linktree, Later, and so on) by data policy and stability — a “best of 2020” catalog doesn’t age well.",
      ],
      lists: [],
    },
    {
      title: "Post caption and short URLs",
      level: 2,
      paras: [
        "Caption text often isn’t tappable on phone. Give a memorable path (“site → Promos”) or send people to the bio.",
        "Short links with UTM help measurement, but in high-trust scenarios a full domain sometimes reads better.",
        "On the web, copying is easier — don’t build strategy only for desktop.",
      ],
      lists: [],
    },
    {
      title: "Stories, Direct, contact buttons",
      level: 2,
      paras: [
        "Stories: link / CTA sticker — a quick jump from the frame. Details and the “swipe” replacement are in a separate guide.",
        "Direct: send a URL in chat; useful for support and warm-up after Stories.",
        "Business profile: email, call, address, and website buttons — also “links,” just shaped as actions. Don’t clutter the block.",
      ],
      lists: [],
      links: [
        {
          label: "Links in Instagram Stories",
          href: "/en/blog/ssylka-stories-instagram/",
        },
        {
          label: "Instagram business account",
          href: "/en/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
    {
      title: "Ads and shopping",
      level: 2,
      paras: [
        "In Ads / Promote, the destination URL is set in the creative — that’s the main paid exit to the site.",
        "Product tags and shopping mechanics depend on catalog and region; check current Commerce rules.",
        "Always plan UTM or a promo code for measurement — or you won’t tell bio traffic from Stories and paid social.",
      ],
      lists: [],
      links: [
        {
          label: "Instagram ads setup via Meta Ads",
          href: "/en/blog/nastroika-reklamy-instagram/",
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "Permanent exit — bio or link-in-bio; tactical — Stories and ads.",
        "A post caption rarely replaces a tappable URL.",
        "Count clicks — don’t stop at “we put a link somewhere.”",
      ],
      lists: [],
    },
  ],
  closing: [
    "Check the bio, one multi-link for current offers, and a sticker in upcoming Stories with UTM — that set is usually enough without a pile of outdated workarounds.",
  ],
  related: [
    "ssylka-stories-instagram",
    "ssylka-instagram",
    "oformlenie-stranicy-instagram",
    "biznes-akkaunt-instagram",
    "nastroika-reklamy-instagram",
    "promo-instagram",
  ],
};
