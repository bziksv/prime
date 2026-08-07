import type { BlogPost } from "../../../data/blog";

/** EN overlay for oblozhka-vk — same structure as RU JSON. */
export const oblozhkaVkEn: BlogPost = {
  slug: "oblozhka-vk",
  title: "VK community cover: idea, mockup, and upload",
  date: "2021-07-16",
  category: "SMM",
  cover: "/images/blog/oblozhka-vk/cover-en.webp",
  excerpt:
    "How to design a VK public or group cover: meaning and offer, safe zone, image rights, Canva/Figma, and upload in settings — without outdated pixel grids.",
  lead: [
    "A VK community cover is the first thing a guest sees next to the name and avatar. It decides whether they stay to read the wall or leave in a second.",
    "Put one clear offer in the safe zone, respect image rights, and upload via community settings. Exact sizes and header widgets change — check current VK Help.",
  ],
  faq: [
    {
      q: "Does a cover raise VK reach?",
      a: "Indirectly: it clarifies brand and trust. Growth comes from content, replies, and ads when needed — not from one image alone.",
    },
    {
      q: "What size should you prepare for the cover?",
      a: "VK’s guide is a wide community header banner; pixel recommendations have changed. Take current numbers from VK Help and leave margins at the edges.",
    },
    {
      q: "Do you need text on the cover?",
      a: "A short offer or niche — yes. Tiny prices, address, and ten promos don’t read on mobile.",
    },
    {
      q: "Can you use a random photo from search?",
      a: "Only with your own rights or a license. A random SERP frame risks complaints and claims.",
    },
    {
      q: "How is a cover different from an avatar?",
      a: "The avatar is the round mark in the feed and chats. The cover is the wide community page header.",
    },
    {
      q: "Is an animated header worth it?",
      a: "If your community type supports it and it doesn’t distract from the offer. Start with a clear static mockup, then experiment.",
    },
    {
      q: "How often should you change it?",
      a: "When positioning, season, or a major promo changes. Weekly swaps without a reason break recognition.",
    },
    {
      q: "Where should you build the cover mockup?",
      a: "Figma, Canva, Photoshop, and similar tools with a set size and safe zone. Keep the source file for edits.",
    },
  ],
  sections: [
    {
      title: "Why you need a cover",
      level: 2,
      paras: [
        "In seconds a guest decides: “are these my people?” The cover with the name and avatar answers: niche, tone, seriousness level.",
        "For a store — product and benefit; for media — topic and character; for a local service — geo and a clear CTA (“book,” “price in the menu”).",
        "An empty or random image hurts trust more than a modest but coherent brand background.",
      ],
      lists: [],
      links: [
        {
          label: "VK communities: formats",
          href: "/en/blog/soobshhestva-vk/",
        },
        {
          label: "Growing a VK group",
          href: "/en/blog/raskrutka-gruppy-vk/",
        },
      ],
    },
    {
      title: "Sizes and safe zone",
      level: 2,
      paras: [
        "The header crops differently on desktop and in the app. Prepare a wide mockup and keep logo, slogan, and faces in the central “safe” area — edges often fall off-screen.",
        "Don’t rely on pixel grids from old articles: VK has changed recommended resolutions and zones. Before finalizing, open VK Help and the preview in community settings.",
        "Check the phone view: if the main text only reads on a 27\" monitor, the mockup failed.",
      ],
      lists: [
        {
          intro: "Frame mini-rules:",
          items: [
            "important content in the center, not at the very edges",
            "enough contrast between text and background",
            "no more than one main accent",
            "source kept in an editable file.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Stuffing the header with a phone, address, price list, and three promos in tiny type. The menu, description, and posts already do that — the cover needs one idea.",
        },
      ],
    },
    {
      title: "Idea and visuals",
      level: 2,
      paras: [
        "Tie the image to the community theme: product, process, niche atmosphere, a recognizable brand pattern. Abstract stock “handshake” with no content link doesn’t stick.",
        "Align the cover with the avatar: one palette and tone. Chaos of “bright banner + different logo” looks like someone else’s template.",
        "Text on the image — large and short. Leave long paragraphs for the community description and pinned post.",
      ],
      lists: [
        {
          intro: "Usually enough:",
          items: [
            "niche or offer in 3–7 words",
            "logo or brand face",
            "one visual anchor (product / place / style).",
          ],
        },
      ],
    },
    {
      title: "Image rights",
      level: 2,
      paras: [
        "Use your photos, product shoots, licensed illustrations, or generation with clear rights. Copy-paste from image search risks complaints and content blocks.",
        "If people are in the frame — make sure you can publish them in a commercial community context.",
        "Partner logos — only with permission; otherwise you look like a storefront no one should trust.",
      ],
      lists: [],
    },
    {
      title: "Building in an editor",
      level: 2,
      paras: [
        "Set the canvas to the current size from VK Help, enable safe-zone guides, stack layers: background → photo/illustration → text/logo.",
        "Export: JPG/PNG without excess weight; a too-heavy file may fail upload or slow the page.",
        "Header widgets (menu, timers, buttons), if available for your community, don’t replace a clear banner: picture meaning first, modules second.",
      ],
      lists: [],
      links: [
        {
          label: "Canva for marketing",
          href: "/en/blog/canva/",
        },
      ],
    },
    {
      title: "How to upload in VK",
      level: 2,
      paras: [
        "In community management open design / cover settings (menu labels change) and upload the file. Nudge the crop in preview if the editor allows it.",
        "Save and check the page under another account and on a phone. Make sure avatar and cover don’t clash by color.",
        "After a positioning change, also update the description, menu, and pin — otherwise the header promises one thing and the wall shows another.",
      ],
      lists: [
        {
          intro: "Checklist before publish:",
          items: [
            "size matched to VK Help",
            "text reads on mobile",
            "photo rights are covered",
            "avatar in the same style",
            "community description doesn’t contradict the banner offer.",
          ],
        },
      ],
      links: [
        {
          label: "VK community greeting",
          href: "/en/blog/privetstvie-vk/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "The cover is a niche and offer calling card — not a dump of contacts.",
        "Safe zone and current sizes beat copying pixels from an old guide.",
        "Your own image rights and a unified style with the avatar hold trust until the first post.",
      ],
      lists: [],
    },
  ],
  closing: [
    "Build one clear mockup with the offer in the center, upload it in community settings, and check on a phone — faster than fitting an outdated pixel grid.",
  ],
  related: [
    "soobshhestva-vk",
    "raskrutka-gruppy-vk",
    "privetstvie-vk",
    "shapka-youtube",
    "canva",
    "aydentika-brenda",
  ],
};
