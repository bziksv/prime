import type { BlogPost } from "../../../data/blog";

/** EN overlay for adaptivnyy-shablon-direkt — same structure as RU JSON. */
export const adaptivnyyShablonDirektEn: BlogPost = {
  slug: "adaptivnyy-shablon-direkt",
  title: "Adaptive templates in Yandex Direct: why they exist and how to build one",
  date: "2020-01-16",
  category: "Paid search",
  cover: "/images/blog/adaptivnyy-shablon-direkt/cover-en.webp",
  excerpt:
    "What an adaptive creative template in Yandex Direct does: fit one asset set to many block sizes, set a smart center, write short copy and legal lines — without clinging to 2019 click-paths.",
  lead: [
    "An adaptive template in Direct’s creative builder lets one set of materials reshape for different ad-block sizes — useful in networks where placements crop banners in every direction.",
    "Below: what the format is for, which layers you fill, and what to check in tests. Menu names and character limits live in the live account — the UI has moved since 2019. This is not a responsive website, and it is not Google Ads Responsive Display Ads.",
  ],
  faq: [
    {
      q: "Is this the same as a responsive site?",
      a: "No. Here you’re building an ad creative for different blocks. Responsive design is about the landing page layout.",
    },
    {
      q: "Why bother with a smart center?",
      a: "So a narrow or tiny block still shows what matters — the product face or the price — instead of cropping it away.",
    },
    {
      q: "Can one creative replace every size?",
      a: "It covers more formats with less handwork, but you still judge image and copy in previews. A weak background stays weak at every size.",
    },
    {
      q: "Do age and legal labels matter?",
      a: "If the niche requires them (alcohol, medicine, supplements, and similar) — yes. Skip them and moderation rejects or throttles delivery.",
    },
    {
      q: "Will it raise conversion on its own?",
      a: "No. You get cleaner coverage and less layout grind. Conversion still rides on the offer and the landing page.",
    },
    {
      q: "Where do you create it?",
      a: "In the creatives / ad builder area of the Direct account. Exact buttons — current UI and Yandex Help.",
    },
    {
      q: "Does it work with retargeting?",
      a: "Indirectly: you can run the same creative on retargeting. Audience logic itself is a separate Direct retargeting topic.",
    },
  ],
  sections: [
    {
      title: "Why use an adaptive template",
      level: 2,
      paras: [
        "Network blocks come square, long, and skinny. Teams used to cut a layout per shape; an adaptive template scales and composes the content so you lose fewer impressions to “didn’t fit.”",
        "The real win is speed and less busywork. It is not a “make the campaign profitable” switch: without a strong offer and a decent landing page, adaptive only presents a weak creative more neatly.",
      ],
      lists: [
        {
          intro: "Especially useful when:",
          items: [
            "you run many placements with different ratios",
            "you need a fast hypothesis test without a pile of PSDs",
            "the team is small and design time is scarce",
            "photos and copy are already strong — you need packaging for blocks",
          ],
        },
      ],
      links: [
        {
          label: "Responsive site",
          href: "/en/blog/adaptivnyy-sayt/",
        },
        {
          label: "Google Responsive Display Ads",
          href: "/en/blog/adaptivnye-mediynye-obyavleniya/",
        },
      ],
    },
    {
      title: "How the creative is assembled",
      level: 2,
      paras: [
        "In the builder you pick an adaptive template from the standard set and fill layers: background, smart-center focal point, frame/accent colors, short texts, domain, and when needed age rating, warnings, and a legal line.",
        "The background has to survive compression and crop: no tiny text on the image, no critical details hugging the edges. Set the smart center by hand on the product, face, or price — whatever the ad loses without in a small block.",
        "Text fields are short (limits show in the UI) — write the offer, not a wall of text. Extra lines cover address, promo, or clarifications when the format shows them.",
      ],
      lists: [
        {
          intro: "Checklist before you hit Create:",
          items: [
            "background without critical text at the edges",
            "smart center on the main object",
            "headline contrast against the background",
            "domain and USP aligned with the landing page",
            "age/medical labels filled for the niche rules",
          ],
        },
      ],
      notes: [
        {
          title: "Tip",
          kind: "tip",
          text: "After assembly, open previews of every format. If a size looks muddy or crops the offer — change the photo or smart center. Adaptive will not magically repair a bad frame.",
        },
      ],
    },
    {
      title: "Testing and reuse",
      level: 2,
      paras: [
        "A saved creative lives in the library and can become a base for later ads — handy for seasonal copy edits on the same visual.",
        "In the campaign watch more than CTR: bounce, conversions, placements. Adaptive raises the chance of showing; traffic quality still depends on negatives, bids, and landing relevance.",
        "Don’t borrow expectations from Google Responsive Display wholesale: the idea is similar (many assets → auto assembly), but accounts and rules differ.",
      ],
      links: [
        {
          label: "Retargeting in Direct",
          href: "/en/blog/retargeting-direkt/",
        },
      ],
    },
    {
      title: "Limits and common sense",
      level: 2,
      paras: [
        "Automation does not cancel moderation or advertising law. Legal and age fields are not decorative checkboxes.",
        "Claims like “+conversion for everyone who turned it on” from 2019 launch write-ups are novelty marketing, not your guarantee. Run your own A/B and CPA.",
        "If the niche needs strict static layouts (brand book, pharma disclaimers across the field), treat adaptive as a helper — not the only format.",
      ],
      lists: [
        {
          intro: "Remember:",
          items: [
            "adaptive = fit the block, not magic ROI",
            "always verify the smart center",
            "preview every size before go-live",
            "text limits come from the current UI",
            "don’t confuse with site responsive design or Google RDA",
          ],
        },
      ],
    },
  ],
  closing: [
    "Build one strong asset set, check previews on narrow and wide blocks, then scale — faster than drawing ten banners “just in case.”",
  ],
  related: [
    "adaptivnye-mediynye-obyavleniya",
    "adaptivnyy-sayt",
    "retargeting-direkt",
    "rsya-metrika",
    "stavki-direkt",
    "analiz-reklamnoy-kampanii",
  ],
};
