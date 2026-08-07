import type { BlogPost } from "../../../data/blog";

/** EN overlay for virusnyy-marketing — same structure as RU JSON. */
export const virusnyyMarketingEn: BlogPost = {
  slug: "virusnyy-marketing",
  title: "Types of viral marketing: video, memes, text, and apps",
  date: "2019-12-25",
  category: "Internet marketing",
  cover: "/images/blog/virusnyy-marketing/cover-en.webp",
  excerpt:
    "What viral (virality) marketing is, which formats people spread themselves — video, images, text, apps — and why you can’t order a “virus” with a guarantee.",
  lead: [
    "Viral marketing is when people pass the message on themselves: repost, forward, meme, challenge. The brand gets reach beyond direct media spend if the piece lands and is easy to share.",
    "Below — where the term came from, upsides and risks, main format types, and a sane workflow for a video. You can’t guarantee a virus; buying views isn’t a strategy. Viral content properties are in a separate article.",
  ],
  faq: [
    {
      q: "Are viral marketing and viral content the same?",
      a: "Related. Viral marketing is a distribution approach; virality is a property of a specific piece. Content basics are in the neighboring article.",
    },
    {
      q: "How does it differ from word of mouth?",
      a: "Word of mouth is recommendations from product experience. Viral is more often bright content shared for emotion or usefulness; the product may be lightly woven in.",
    },
    {
      q: "Can you buy a “virus”?",
      a: "Honest guarantees don’t exist. Paid boost starts reach; the audience decides next. “Views in a pack” services give noise and platform risk.",
    },
    {
      q: "Which format to choose?",
      a: "Whatever your audience shares easily: a short video, meme, list, mini-tool. Don’t blindly copy someone else’s virus from another niche.",
    },
    {
      q: "Does viral always drive sales?",
      a: "No. Reach without a relevant audience and landing often equals noise. Count clicks and leads, not views alone.",
    },
    {
      q: "Do you need a big production budget?",
      a: "Not necessarily. Sometimes a simple video with a strong idea wins. Budget helps quality and seeding, but doesn’t buy a repost guarantee.",
    },
  ],
  sections: [
    {
      title: "Where the term came from and how it works",
      level: 2,
      paras: [
        "The mid-1990s idea of a “virus in marketing” framed message transfer person-to-person — like virus spread. Before the internet that was spoken word of mouth; online, one “share” click makes it faster.",
        "Today the mechanic lives in social, email, video hosts, and messengers. The core is the same: value or emotion must beat the laziness of forwarding.",
      ],
      links: [
        {
          label: "Viral content",
          href: "/en/blog/viralnyy-kontent/",
        },
        {
          label: "Word of mouth",
          href: "/en/blog/sarafannoe-radio/",
        },
      ],
    },
    {
      title: "Upsides and limits",
      level: 2,
      paras: [
        "Strengths: relatively low distribution cost when it works, more trust in a non-ad tone, sometimes a long view tail for a lucky video.",
        "Limits: no result guarantee, negative-virus risk, weak control, and platform moderation. “Forbidden” content for hype hurts the brand more than it buys reach — not a strategy.",
      ],
      lists: [
        {
          intro: "When it makes sense:",
          items: [
            "you have a bright idea for the audience;",
            "you’re ready to seed without waiting for a miracle;",
            "there’s a landing for the interest;",
            "you’re ready to handle a comment wave.",
          ],
        },
      ],
    },
    {
      title: "Video",
      level: 2,
      paras: [
        "The most visible format: a short plot, emotion, surprise. You don’t always need a cinematic picture — sometimes a simple honest moment wins. Length and the first-second hook beat “pretty everything”.",
      ],
      lists: [
        {
          intro: "What raises the odds:",
          items: [
            "a hook from the first frames;",
            "shot changes, live sound;",
            "an idea people can repeat/parody;",
            "brand kept light.",
          ],
        },
      ],
    },
    {
      title: "Images and memes",
      level: 2,
      paras: [
        "Memes and cards share easier than long text: one screen — one idea. Your own memes on a timely template beat a foreign repost with no brand link.",
        "The line is respect for the audience and copyright. An offensive or stolen meme gives reach and a reputation hit.",
      ],
    },
    {
      title: "Text and apps",
      level: 2,
      paras: [
        "Viral text is rare but happens: a strong rules list, a story, an unexpected breakdown. It spreads across blogs and communities if it’s easy to quote and retell.",
        "Apps and mini-tools (“try on”, “transform”, “calculate”) spread when people want to show the result to friends. That’s product + marketing, not a one-off post.",
      ],
      links: [
        {
          label: "Interactive content",
          href: "/en/blog/interaktivnyy-kontent/",
        },
      ],
    },
    {
      title: "How to work on a viral video",
      level: 2,
      paras: [
        "Order beats magic: goal and audience → idea and script → production → seeding → postmortem. Upload “to hosting and wait” almost never works: you need a first push through your channels, partners, creators.",
        "Sane benchmark: people often call something viral when organic views many times beat the paid start — but for business relevance matters more than the multiplier alone.",
      ],
      lists: [
        {
          intro: "Prep checklist:",
          items: [
            "one goal (awareness / traffic / product);",
            "audience and platforms where sharing is easy;",
            "a script with emotion and a clear message;",
            "a seeding plan without fake inflation;",
            "metrics: shares, clicks, leads.",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          text: "Paid “viral marketing services” selling view packs aren’t an idea substitute. Bot and platform-sanction risk outweighs brand benefit.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Link to the business",
      level: 2,
      paras: [
        "A virus with no bridge to the product is an expensive show. Decide in advance where interest goes: landing, selection, quiz, contact. Otherwise you get views and an empty sales team.",
        "A negative virus (mistake, scandal) is handled with facts and speed — not by buying “positivity” or staying silent hoping it “blows over”.",
      ],
      links: [
        {
          label: "VK viral reach",
          href: "/en/blog/viralnyy-ohvat-vk/",
        },
        {
          label: "News hook",
          href: "/en/blog/infopovod/",
        },
      ],
    },
  ],
  closing: [
    "Viral marketing is formats people want to forward — not a pack of bought views. Pick a type for the audience, plan seeding and a bridge to the product — and don’t promise yourself a guaranteed virus.",
  ],
  related: [
    "viralnyy-kontent",
    "viralnyy-ohvat-vk",
    "sarafannoe-radio",
    "interaktivnyy-kontent",
    "infopovod",
    "nativnaya-reklama",
  ],
};
