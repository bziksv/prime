import type { BlogPost } from "../../../data/blog";

/** EN overlay for adaptivnyy-shablon-direkt — same structure as RU JSON. */
export const adaptivnyyShablonDirektEn: BlogPost = {
  slug: "adaptivnyy-shablon-direkt",
  title: "Adaptive templates in Yandex Direct: why and how to build one",
  date: "2020-01-16",
  category: "Paid search",
  cover: "/images/blog/adaptivnyy-shablon-direkt/cover-en.webp",
  excerpt:
    "What an adaptive creative template in Yandex Direct is: fitting different block sizes, smart center, text and legal fields — without outdated 2019 account click-paths.",
  lead: [
    "An adaptive template in Direct’s creative builder helps one asset set fit different ad-block sizes — especially useful in networks where placements crop banners differently.",
    "You still fill backgrounds, smart center, short copy, and legal fields by hand; the template only scales and composes them for the block. Menu names and character limits live in the current account — the UI has changed since 2019. Don’t confuse this with a responsive website or Google Ads Responsive Display Ads.",
  ],
  faq: [
    {
      q: "Is an adaptive template the same as a responsive site?",
      a: "No. Here it’s about an ad creative for different blocks. Site responsive design is about the landing layout.",
    },
    {
      q: "Why should you set a smart center?",
      a: "So that in a narrow or small block the system shows the important part of the image — not cutting off the product face or the price.",
    },
    {
      q: "Will one creative replace every size?",
      a: "It simplifies covering formats, but still check image and text quality in previews. A bad background stays bad at every size.",
    },
    {
      q: "Do you need age and legal labels?",
      a: "If the topic requires them (alcohol, medicine, supplements, and similar) — yes. Otherwise moderation rejects or limits delivery.",
    },
    {
      q: "Does an adaptive template guarantee conversion growth?",
      a: "No. More correct impressions and less layout grunt work — yes. Conversion still depends on offer and landing page.",
    },
    {
      q: "Where do you create an adaptive template?",
      a: "In the creatives / ad builder section of the Direct account. Exact button paths — in the current UI and Yandex Help.",
    },
    {
      q: "Does an adaptive template work with retargeting?",
      a: "Indirectly: the creative can also run on retargeting. Audience logic itself is covered in Direct retargeting materials.",
    },
  ],
  sections: [
    {
      title: "Why use an adaptive template",
      level: 2,
      paras: [
        "In ad networks, blocks can be square, long, or narrow. You used to prep separate layouts per type; an adaptive template scales and composes content for the block so you lose fewer impressions to “didn’t fit.”",
        "The win is launch speed and less manual routine. It’s not a “make the campaign profitable” button: without a strong offer and a decent landing page, adaptive only shows a weak creative more neatly.",
      ],
      lists: [
        {
          intro: "Especially useful when:",
          items: [
            "many placements with different ratios;",
            "you need a fast hypothesis test without a pile of PSDs;",
            "the team is small and design time is scarce;",
            "you already have strong photos and copy — you need packaging for blocks.",
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
      title: "How creative assembly works",
      level: 2,
      paras: [
        "In the builder you pick an adaptive template from standard options and fill layers: background, smart-center focal point, frame/accent colors, short texts, domain, and when needed age rating, warnings, and a legal disclaimer.",
        "The background must survive compression and crop: avoid tiny text on the image and critical details at the very edges. Set smart center by hand on the product, face, or price — whatever the ad loses meaning without in a small block.",
        "Text fields are short (character limits show in the UI) — write the offer essence, not a wall of text. Extra lines are for address, promo, or clarifications if the format shows them.",
      ],
      lists: [
        {
          intro: "Checklist before you create:",
          items: [
            "background without critical text at the edges;",
            "smart center on the main object;",
            "headline contrast against the background;",
            "domain and USP aligned with the landing page;",
            "age/medical labels filled per topic rules.",
          ],
        },
      ],
      notes: [
        {
          title: "Tip",
          kind: "tip",
          text: "After assembly, open previews of all formats. If somewhere it’s muddy or the offer is cropped — change the photo or smart center; don’t hope “adaptive will fix it.”",
        },
      ],
    },
    {
      title: "Testing and reuse",
      level: 2,
      paras: [
        "A saved creative lives in the library and can become a template for later ads — handy for seasonal copy edits on the same visual.",
        "In the campaign watch more than CTR: bounce, conversions, placements. Adaptive raises the chance of showing; traffic quality is still cut by negatives, bids, and landing relevance.",
        "Don’t mix expectations with Google Responsive Display: the logic is similar (many assets → auto assembly), but accounts and rules differ.",
      ],
      lists: [],
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
            "text limits come from the current UI;",
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
