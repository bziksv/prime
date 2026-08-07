import type { BlogPost } from "../../../data/blog";

/** EN overlay for adaptivnyy-shablon-direkt — same structure as RU JSON. */
export const adaptivnyyShablonDirektEn: BlogPost = {
  slug: "adaptivnyy-shablon-direkt",
  title: "Adaptive template in Yandex Direct: why and how to build one",
  date: "2020-01-16",
  category: "Contextual advertising",
  cover: "/images/blog/adaptivnyy-shablon-direkt/cover-en.webp",
  excerpt:
    "What an adaptive creative template in Yandex Direct is: fitting different block sizes, smart center, text and legal fields — without outdated 2019 cabinet click-paths.",
  lead: [
    "An adaptive template in Direct’s creative builder helps one asset set fit different ad-block sizes — especially useful in networks where placements crop banners differently.",
    "Below — what the format means, which blocks make a creative, and what to watch in testing. Check menu names and character limits in the current cabinet: the UI has changed since 2019. Don’t confuse this with a responsive website or Google Ads responsive display ads.",
  ],
  faq: [
    {
      q: "Is this the same as a responsive site?",
      a: "No. Here it’s about an ad creative for different blocks. Site responsive design is about the landing layout.",
    },
    {
      q: "Why smart center?",
      a: "So that in a narrow/small block the system shows the important part of the image — not cutting off the product face or the price.",
    },
    {
      q: "Will one creative replace every size?",
      a: "It simplifies covering formats, but still check image and text quality in previews. A bad background stays bad at every size.",
    },
    {
      q: "Do you need age and legal labels?",
      a: "If the topic requires them (alcohol, medicine, supplements, etc.) — yes. Otherwise moderation rejects or limits delivery.",
    },
    {
      q: "Does it guarantee conversion growth?",
      a: "No. More correct impressions and less layout busywork — yes. Conversion depends on offer and landing.",
    },
    {
      q: "Where do you create it?",
      a: "In the creatives / ad builder section of the Direct cabinet. Exact button paths — in the current UI and Yandex help.",
    },
    {
      q: "Link to retargeting?",
      a: "Indirect: the creative can also run on retargeting. Audience logic itself — in Direct retargeting materials.",
    },
  ],
  sections: [
    {
      title: "Why an adaptive template",
      level: 2,
      paras: [
        "In ad networks blocks can be square, long, or narrow. You used to prep separate layouts per type; an adaptive template scales and composes content for the block so you lose fewer impressions to “didn’t fit.”",
        "The win is launch speed and less manual routine. It’s not a “make the campaign profitable” button: without a strong offer and a decent landing, adaptive only shows a weak creative more neatly.",
      ],
      lists: [
        {
          intro: "Especially useful when:",
          items: [
            "many placements with different ratios;",
            "you need a fast hypothesis test without a pile of PSDs;",
            "the team is small and design time is scarce;",
            "you already have strong photos/copy — you need packaging for blocks.",
          ],
        },
      ],
      links: [
        {
          label: "Responsive site",
          href: "/blog/adaptivnyy-sayt/",
        },
        {
          label: "Google responsive display ads",
          href: "/blog/adaptivnye-mediynye-obyavleniya/",
        },
      ],
    },
    {
      title: "How creative assembly works",
      level: 2,
      paras: [
        "In the builder you pick an adaptive template from standard options and fill layers: background, meaning “smart center,” frame/accent colors, short texts, domain, and when needed age rating, warnings, and a legal postscript.",
        "The background must survive compression and crop: avoid tiny text on the image and critical details at the very edges. Set smart center by hand on the product, face, price — what the ad loses meaning without in a small block.",
        "Text fields are short (guides like “dozens of characters” floated in the UI) — write the offer essence, not a wall of text. Extra lines — for address, promo, clarifications if the format shows them.",
      ],
      lists: [
        {
          intro: "Checklist before Create:",
          items: [
            "background without critical text at the edges;",
            "smart center on the main object;",
            "headline contrast against the background;",
            "domain and USP aligned with the landing;",
            "age/medical labels filled per topic rules.",
          ],
        },
      ],
      notes: [
        {
          title: "Tip",
          kind: "tip",
          text: "After assembly open previews of all formats. If somewhere it’s mushy or the offer is cropped — change the photo or smart center; don’t hope “adaptive will fix it.”",
        },
      ],
    },
    {
      title: "Testing and reuse",
      level: 2,
      paras: [
        "A saved creative lives in the library and can become a template for later ads — handy for seasonal copy edits on the same visual.",
        "In the campaign watch more than CTR: bounce, conversions, placements. Adaptive raises the chance of showing; traffic quality is still cut by negatives, bids, and landing relevance.",
        "Don’t mix expectations with Google Responsive Display: the logic is similar (many assets → auto assembly), but cabinets and rules differ.",
      ],
      lists: [],
      links: [
        {
          label: "Retargeting in Direct",
          href: "/blog/retargeting-direkt/",
        },
      ],
    },
    {
      title: "Limits and common sense",
      level: 2,
      paras: [
        "Automation doesn’t cancel moderation and advertising law. Legal and age fields aren’t a “pretty checkbox.”",
        "Expert claims like “+conversion for everyone who enabled it” from 2019 launch reviews are novelty marketing — not your guarantee. Count your own A/B and CPA.",
        "If the niche needs strict static layouts (brand book, pharma disclaimers across the field), adaptive may be a helper — not the only format.",
      ],
      lists: [
        {
          intro: "Remember:",
          items: [
            "adaptive = fit the block, not magic ROI;",
            "smart center must be checked;",
            "preview all sizes before go-live;",
            "text limits — from the current UI;",
            "don’t confuse with site responsive design or Google RDA.",
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
