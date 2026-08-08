import type { BlogPost } from "../../../data/blog";

/** EN overlay for formaty-izobrazheniy-rsya — same structure as RU JSON. */
export const formatyIzobrazheniyRsyaEn: BlogPost = {
  slug: "formaty-izobrazheniy-rsya",
  title: "Image formats in the Yandex Advertising Network",
  date: "2017-05-15",
  category: "Paid search",
  cover: "/images/blog/formaty-izobrazheniy-rsya/cover-en.webp",
  excerpt:
    "Why the Yandex Advertising Network needs several image sizes and graphic ads: publisher coverage, widescreen formats, how not to cut reach with a separate campaign, and how to tag sizes in UTMs.",
  lead: [
    "In YAN a creative lives in blocks of different shapes: square, vertical, panorama. One size won’t cover every publisher — the system needs a set to pick a fitting slot.",
    "Below: format logic and practice. Exact pixels from 2016–2017 guides go stale: take current requirements from Direct Help. Format “novelty” isn’t news anymore — a full creative kit matters more.",
  ],
  faq: [
    {
      q: "Is one 1:1 square enough?",
      a: "For a test — sometimes. For reach you want several ratios: otherwise some publishers stay without a show.",
    },
    {
      q: "Is a widescreen format required?",
      a: "Useful for panoramic blocks and some app campaigns. Check current size requirements.",
    },
    {
      q: "Should I put new sizes in a separate campaign?",
      a: "Often worse: reach drops. Usually add them to a working network campaign instead of splitting without need.",
    },
    {
      q: "Can I run a graphic ad with no text?",
      a: "Possible as a banner format, but brand, offer, and mobile readability are required. Don’t rely on the image alone.",
    },
    {
      q: "How should I compare sizes?",
      a: "UTMs (e.g. utm_content with the size) or account labels — watch clicks and conversions by creative.",
    },
    {
      q: "Is billing different for these formats?",
      a: "Usually the same campaign model (clicks/goals). The image format itself isn’t a special tariff.",
    },
    {
      q: "How many formats should I upload?",
      a: "As many as the current Direct checklist requires for your ad type — without fanatically uploading “all 11” if the type is different.",
    },
  ],
  sections: [
    {
      title: "Why there are many sizes",
      level: 2,
      paras: [
        "YAN publishers offer different slots. The more correct source files you provide, the more often the system finds a place to show.",
        "Auto-fit is possible, but better deliver files in recommended proportions — less crop and lost meaning.",
      ],
      links: [
        {
          label: "Paid-search setup mistakes",
          href: "/en/blog/oshibki-nastroyki-konteksta/",
        },
        {
          label: "Site before advertising",
          href: "/en/blog/sayt-pered-reklamoy/",
        },
      ],
    },
    {
      title: "Widescreen and graphics",
      level: 2,
      paras: [
        "Panoramic creatives cover wide blocks; for some scenarios (including apps) requirements are stricter — only current sizes from Help.",
        "Graphic ads put the offer into the visual: product, price, CTA on the banner itself. Still check nearby text for review and readability.",
      ],
    },
    {
      title: "Launch practice",
      level: 2,
      paras: [
        "Add new formats to already working network campaigns if the goal is reach — not an isolated A/B of one size.",
        "Don’t settle for one file “for every case.” A set of ratios plus size UTMs gives clear analytics.",
        "Watch quality: tiny banner text, watermarks, and creatives with someone else’s brand hurt CTR and review.",
      ],
      lists: [
        {
          intro: "Mini checklist for a YAN creative:",
          items: [
            "current sizes from Help",
            "offer readable on mobile",
            "landing matches the image",
            "tags to compare formats",
            "don’t split reach without a hypothesis",
          ],
        },
      ],
      links: [
        {
          label: "What UTM tags are",
          href: "/en/blog/utm-metki/",
        },
        {
          label: "Ad campaign analysis",
          href: "/en/blog/analiz-reklamnoy-kampanii/",
        },
      ],
    },
  ],
  notes: {
    title: "Important",
    text: "Don’t copy exact resolutions (1080×607 and so on) from 2017 articles as a norm. The current list is in Yandex Direct / YAN Help.",
  },
  closing: [
    "Open the size Help, add missing ratios to a working YAN campaign, and put utm_content on the size — so formats work for reach and reporting, not as “2016 news.”",
  ],
  related: [
    "oshibki-nastroyki-konteksta",
    "utm-metki",
    "analiz-reklamnoy-kampanii",
    "sayt-pered-reklamoy",
    "adaptivnyy-shablon-direkt",
    "rsya-metrika",
  ],
};
