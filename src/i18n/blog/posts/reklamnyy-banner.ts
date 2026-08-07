import type { BlogPost } from "../../../data/blog";

/** EN overlay for reklamnyy-banner — same structure as RU JSON. */
export const reklamnyyBannerEn: BlogPost = {
  slug: "reklamnyy-banner",
  title: "Ad banner: principles of effective creative",
  date: "2020-02-28",
  category: "Digital marketing",
  cover: "/images/blog/reklamnyy-banner/cover-en.webp",
  excerpt:
    "How to make an ad banner people notice: offer, hierarchy, CTA, sizes, fighting banner blindness, and careful pop-ups — without outdated “trends for trends’ sake.”",
  lead: [
    "A banner is one of the oldest online ad formats: an image or HTML5 block linking to an offer. It’s still used in networks, on sites, and in media — but attention is shorter and blockers are more common.",
    "These are the creative principles that drive clicks without annoying people. Measuring a competitor’s banner size is a separate article; here we focus on message, composition, and UX.",
  ],
  faq: [
    {
      q: "What matters more: design or offer?",
      a: "Offer and clarity. A pretty banner with no clear benefit loses to a simple one with a strong proposition.",
    },
    {
      q: "Which size should I pick?",
      a: "Whatever the platform or site slot requires. In ad networks check current account specs; “IAB standards” are a guide, not dogma. How to read a size on someone else’s site — in the banner sizes article.",
    },
    {
      q: "What is banner blindness?",
      a: "The habit of ignoring zones that look like ads. Fix it with relevance, meaningful contrast (not only flashing), and creative tests.",
    },
    {
      q: "Is a pop-up instead of a banner the answer?",
      a: "Sometimes for an important message or lead, but aggressive windows hurt UX and trust. Use rarely, with easy close and no tricks.",
    },
    {
      q: "Do I need animation?",
      a: "A short one can help noticeability. Endless flashing and a “screaming” GIF more often hurt the brand and page weight.",
    },
    {
      q: "How much text fits on a banner?",
      a: "One offer, one benefit, one button/ask. People don’t read a tiny sheet in a fraction of a second.",
    },
    {
      q: "Is a banner on my site the same as in an ad network?",
      a: "Principles are similar; size, moderation, and file rules differ. Always check the account rules.",
    },
  ],
  sections: [
    {
      title: "The banner’s job in a second",
      level: 2,
      paras: [
        "Users barely “study” ads: the eye slides. In a fraction of a second the banner must answer: what’s offered, who needs it, what to do next.",
        "Effectiveness isn’t “beauty in a portfolio” — it’s CTR, click/lead cost, and whether the creative breaks brand trust.",
      ],
      lists: [
        {
          intro: "On the banner people should read:",
          items: [
            "the offer or promo essence;",
            "the brand or a recognizable product;",
            "a call to action;",
            "where the click goes (landing match).",
          ],
        },
      ],
    },
    {
      title: "Design principles that work",
      level: 2,
      paras: [
        "Hierarchy: main meaning larger than secondary. Text/background contrast — readability beats a trendy gradient. One visual anchor (product, face, benefit icon) beats a collage of ten elements.",
        "CTA — a separate accent: a button or clear phrase (“Get a quote,” “View catalog”). Avoid clickbait that doesn’t match the landing: disappointment kills conversion.",
      ],
      lists: [
        {
          intro: "Layout checklist:",
          items: [
            "little text, large key words;",
            "brand not hidden in a 5 px corner;",
            "button/ask is noticeable;",
            "file is light, type isn’t mushy;",
            "safe margins: text not at the crop edge.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Copying someone else’s banner pixel-for-pixel without rights isn’t allowed. You can mirror slot size and offer logic — not their assets.",
        },
      ],
      links: [
        {
          label: "Banner sizes",
          href: "/en/blog/razmery-bannera/",
        },
        {
          label: "Image link",
          href: "/en/blog/kartinka-ssylka/",
        },
      ],
    },
    {
      title: "Sizes and placement context",
      level: 2,
      paras: [
        "In ad accounts the format set is defined by the platform: horizontal “leaderboards,” rectangles, feed squares. Check current pixels and file weight in network help — 2015–2020 guides often age out.",
        "On your own site the layout sets the size. The banner should be noticeable but not crowd content or inflate LCP. Below the fold, lazy-loading fits.",
      ],
      lists: [
        {
          intro: "Before launch confirm:",
          items: [
            "allowed sizes and weight;",
            "static / HTML5 / video;",
            "text and branding rules;",
            "where the UTM goes and which landing.",
          ],
        },
      ],
      links: [
        {
          label: "UTM tags",
          href: "/en/blog/utm-metki/",
        },
        {
          label: "Ad account setup",
          href: "/en/blog/reklamnyy-kabinet/",
        },
      ],
    },
    {
      title: "Banner blindness",
      level: 2,
      paras: [
        "People learned not to see “ad-like” zones. Flashing and acid colors rarely cure blindness — they more often annoy. Stronger: relevance (the banner matches what the person is viewing), fresh creative, and match to site expectations.",
        "Test 2–3 offer and visual variants. Don’t change “everything at once” — change a hypothesis: benefit, headline, product in frame.",
      ],
      lists: [],
    },
    {
      title: "Pop-up: when it fits, when it doesn’t",
      level: 2,
      paras: [
        "A modal guarantees attention but easily breaks experience — especially on entry or on every click. Rare scenarios fit: an important promo, email capture with clear value, a warning.",
        "Make closing obvious, don’t block content forever, mind mobile screens. For lead gen a widget or in-content block often beats an aggressive overlay.",
      ],
      lists: [
        {
          intro: "If you still use a pop-up:",
          items: [
            "trigger by time/scroll, not instantly;",
            "one offer;",
            "easy to close;",
            "not more often than a sensible per-session limit.",
          ],
        },
      ],
    },
    {
      title: "Landing link and measurement",
      level: 2,
      paras: [
        "A click isn’t the goal. Banner and page must say the same thing: same promo, same product, same tone. Otherwise bounce rises and traffic quality drops.",
        "Tag campaigns with UTM; watch not only CTR but conversion and lead cost. High CTR with zero leads — a candidate to pause.",
      ],
      lists: [
        {
          intro: "Before scaling:",
          items: [
            "landing matches the offer;",
            "an analytics goal exists;",
            "creatives rotate;",
            "page weight and speed are fine.",
          ],
        },
      ],
    },
  ],
  closing: [
    "A strong banner is a clear offer, readable hierarchy, and an honest path to the landing. Size and trends are secondary; blindness is beaten by relevance and tests — not endless flashing.",
  ],
};
