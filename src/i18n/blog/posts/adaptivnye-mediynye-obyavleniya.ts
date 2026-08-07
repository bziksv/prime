import type { BlogPost } from "../../../data/blog";

/** EN overlay for adaptivnye-mediynye-obyavleniya — same structure as RU JSON. */
export const adaptivnyeMediynyeObyavleniyaEn: BlogPost = {
  slug: "adaptivnye-mediynye-obyavleniya",
  title: "Responsive Display Ads in Google Ads: 6 practices",
  date: "2018-12-17",
  category: "Contextual advertising",
  cover: "/images/blog/adaptivnye-mediynye-obyavleniya/cover-en.webp",
  excerpt:
    "How to prep Responsive Display Ads (RDA) in Google Ads: assets, crops, logos, copy, previews, and brand safety — without a 2018 CTR table and the “upload and forget” myth.",
  lead: [
    "Responsive Display Ads (RDA) build banners and native layouts from your images, logos, headlines, and descriptions. The system fits combinations to Display Network slot sizes.",
    "The format isn’t a “2018 novelty” anymore, but asset logic is the same. Below — six quality practices. We don’t repeat old banner/RDA/text CTR comparisons: measure your account. Current file sizes are in Google Ads Help.",
  ],
  faq: [
    {
      q: "Does RDA replace all banners?",
      a: "It often covers most Display reach. For strict brand safety and fixed layouts, people sometimes keep standard banners.",
    },
    {
      q: "Do you need a designer?",
      a: "For strong frames and logos — yes. But without an asset set and copy, even a perfect one-size PSD won’t unlock the format.",
    },
    {
      q: "Why does the image “break”?",
      a: "Cropping for different aspect ratios. Keep the main subject in a safe zone and upload several landscape/square/portrait variants.",
    },
    {
      q: "Is one logo enough?",
      a: "Better several: square and horizontal. Otherwise on some layouts the mark crops or gets tiny.",
    },
    {
      q: "Are RDA and Performance Max the same?",
      a: "No. PMax is wider across channels. RDA is Display adaptive from assets; product sets in cabinets evolve.",
    },
  ],
  sections: [
    {
      title: "What the format does",
      level: 2,
      paras: [
        "You upload an asset pool — the system combines and scales for placements. More valid assets → more chances to fill different slots without hand-cutting “all 20 sizes”.",
        "You still need control: watch previews, pause weak combinations, refresh creatives. “Uploaded zebra photos and left” leads to odd crops and low quality.",
      ],
      lists: [
        {
          intro: "Basic set:",
          items: [
            "several images in different ratios;",
            "logos;",
            "headlines and long headlines;",
            "descriptions;",
            "video — when possible and per cabinet rules.",
          ],
        },
      ],
    },
    {
      title: "1. Framing and image scale",
      level: 2,
      paras: [
        "In preview a frame can look large; on a placement — tiny or with the meaning cropped. Pick photos where the main subject reads in a thin strip and in a square.",
        "Example: a “safari” with tiny figures on the horizon loses to a frame where the animal and offer sit in the center. Prep 2–3 meaning variants, not one file.",
      ],
    },
    {
      title: "2. Cover different aspect ratios",
      level: 2,
      paras: [
        "Don’t stop at one landscape banner. Add square and portrait (within current asset rules) — or part of inventory stays empty or poorly cropped.",
        "Pixel specs changed — check Google Ads Help before upload, not a 2018 screenshot.",
      ],
    },
    {
      title: "3. Several logo variants",
      level: 2,
      paras: [
        "A square mark for compact layouts, a horizontal logo for wide ones. Watch contrast on light and dark backgrounds.",
        "If the brand guide is strict — check previews: adaptive shouldn’t break protected margins without you noticing.",
      ],
    },
    {
      title: "4–5. Copy and previews",
      level: 2,
      paras: [
        "Write several headlines and descriptions of different lengths: the system picks what fits. USP and offer should read without the image.",
        "Always review combination previews and share the link with colleagues/client. You’ll catch clipped phrases and bad photo+copy pairs before big spend.",
      ],
      lists: [
        {
          intro: "Copy hygiene:",
          items: [
            "no clickbait that lies on the landing;",
            "benefit key in a short headline;",
            "legal marks when the topic requires them;",
            "A/B meaning, not only synonyms.",
          ],
        },
      ],
      links: [
        {
          label: "Ad A/B tests",
          href: "/en/blog/ab-testy-reklamy/",
        },
      ],
    },
    {
      title: "6. Brand safety and topic rules",
      level: 2,
      paras: [
        "If it matters where the brand sits next to and in which exact layout, fixed banners can be safer than full auto-compose. Use placement exclusions and brand safety deliberately.",
        "In regulated topics required disclaimers can eat ad space — check layouts. When unsure, don’t chase “maximum reach at any cost”.",
      ],
      notes: [
        {
          title: "Important",
          text: "Quality assets + previews + combination monitoring. Otherwise adaptive saves designer time and spends it on reputation repair.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "RDA simplifies Display if you feed good frames, logos, and copy and watch previews. Old “RDA always beats banners on CTR” isn’t law.",
        "Prep an asset set, check combinations, account for brand safety — then the format is an accelerator, not a crop lottery.",
      ],
    },
  ],
  closing: [
    "Gather several image ratios, a couple of logos, and copy of different lengths, run previews, then scale budget — that’s how Responsive Display Ads surprise you less with weird crops.",
  ],
  related: [
    "strategii-google-ads",
    "ab-testy-reklamy",
    "klyuchi-google-ads",
    "retargeting",
    "videoreklama-youtube",
    "reklamnyy-kabinet",
  ],
};
