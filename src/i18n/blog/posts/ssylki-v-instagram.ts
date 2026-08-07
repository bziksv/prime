import type { BlogPost } from "../../../data/blog";

/** EN overlay for ssylki-v-instagram — same structure as RU JSON. */
export const ssylkiVInstagramEn: BlogPost = {
  slug: "ssylki-v-instagram",
  title: "Instagram links: bio, Stories, Direct, and profile buttons",
  date: "2020-01-20",
  category: "SMM",
  cover: "/images/blog/ssylki-v-instagram/cover-en.webp",
  excerpt:
    "Where to put links on Instagram: bio and link-in-bio, post caption, Stories sticker, Direct, contact buttons — without outdated IGTV and without a catalog of grey tools.",
  lead: [
    "On Instagram clickable URLs are scarce: most often the bio link, a Stories sticker, business-profile buttons, and ad destinations. In a regular post caption the link often isn’t tappable in the app.",
    "Below — a map of working places for links and how not to confuse them with the profile URL itself. Menus change; check Meta help. Separately — the Stories sticker. Disclaimer — on the page.",
  ],
  legalNotice: {
    title: "Dear readers!",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Can you make a caption link tappable?",
      a: "In the app usually no: people copy the text or go to the bio (“link in bio”). In ads and on the web a URL behaves differently.",
    },
    {
      q: "How is link-in-bio different from one bio URL?",
      a: "One link is a direct URL. A multi-link (Linktree and peers) opens a mini-page with several destinations. Factor in dependence on a third-party service.",
    },
    {
      q: "Do you need a business account for links?",
      a: "For Call / Email / Website buttons and proper ads — more often yes. A bio link is available on a personal profile too.",
    },
    {
      q: "Where to dig only into Stories?",
      a: "In the piece on the Link / CTA sticker in Stories — focus on swipe and limits.",
    },
    {
      q: "Is IGTV still relevant for links?",
      a: "Standalone IGTV was wound down. Long videos and descriptions live in Feed/Reels — follow current video fields.",
    },
  ],
  sections: [
    {
      title: "Link in the profile header",
      level: 2,
      paras: [
        "Edit profile → website/link field. That’s the main permanent exit to a landing, shop, or form.",
        "Change the URL for a promo and write in posts “link in bio” — a familiar pattern when there’s no Stories sticker.",
        "Don’t confuse it with the account URL itself (`instagram.com/handle`) — that one goes on the site and business cards.",
      ],
      lists: [],
      links: [
        {
          label: "Instagram profile link",
          href: "/blog/ssylka-instagram/",
        },
        {
          label: "Page design",
          href: "/en/blog/oformlenie-stranicy-instagram/",
        },
      ],
    },
    {
      title: "Multi-link (link-in-bio)",
      level: 2,
      paras: [
        "A service gathers several buttons: site, Telegram, price list, booking. Handy for shops with frequent offer changes.",
        "Downsides: an extra click, dependence on service uptime, sometimes extra ads on free plans.",
        "Pick specific brands (Linktree, Later, etc.) by data policy and stability — a “best of 2020” catalog doesn’t last.",
      ],
      lists: [],
    },
    {
      title: "Post caption and short URLs",
      level: 2,
      paras: [
        "Caption text often isn’t tappable on phone. Give a memorable path (“site → Promos”) or send people to the bio.",
        "Short links with UTM are handy for measurement, but in trust scenarios a full domain is sometimes better.",
        "On the web copying is easier — don’t build strategy only for desktop.",
      ],
      lists: [],
    },
    {
      title: "Stories, Direct, contact buttons",
      level: 2,
      paras: [
        "Stories: link / CTA sticker — a quick jump from the frame. Details and the “swipe” replacement — in a separate guide.",
        "Direct: send a URL in the chat; for support and warm-up after Stories.",
        "Business profile: email, call, address, website buttons — also “links,” just shaped as actions. Don’t clutter the block.",
      ],
      lists: [],
      links: [
        {
          label: "Link in Stories",
          href: "/blog/ssylka-stories-instagram/",
        },
        {
          label: "Business account",
          href: "/en/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
    {
      title: "Ads and shopping",
      level: 2,
      paras: [
        "In Ads / Promote the destination URL is set in the creative — that’s the main paid exit to the site.",
        "Product tags and shopping mechanics depend on catalog and region; check current Commerce rules.",
        "For measurement always plan UTM or a promo code — or you won’t tell bio from Stories and paid social.",
      ],
      lists: [],
      links: [
        {
          label: "Ads setup via Meta Ads",
          href: "/blog/nastroika-reklamy-instagram/",
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "Permanent exit — bio or link-in-bio; tactical — Stories and ads.",
        "A post caption rarely replaces a tappable URL.",
        "Count clicks — not only “we put a link.”",
      ],
      lists: [],
    },
  ],
  closing: [
    "Check the bio, one multi-link for current offers, and a sticker in upcoming Stories with UTM — that set is usually enough without a zoo of outdated workarounds.",
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
