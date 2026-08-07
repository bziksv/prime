import type { BlogPost } from "../../../data/blog";

/** EN overlay for adaptivnye-mediynye-obyavleniya — same structure as RU JSON. */
export const adaptivnyeMediynyeObyavleniyaEn: BlogPost = {
  slug: "adaptivnye-mediynye-obyavleniya",
  title: "Responsive Display Ads in Google Ads: 6 practices",
  date: "2018-12-17",
  category: "Paid search",
  cover: "/images/blog/adaptivnye-mediynye-obyavleniya/cover-en.webp",
  excerpt:
    "How to prep Responsive Display Ads (RDA) in Google Ads: assets, crops, logos, copy, previews, and brand safety — without a 2018 CTR table or the “upload and forget” myth.",
  lead: [
    "Responsive Display Ads (RDA) build banners and native layouts from your images, logos, headlines, and descriptions. Google Ads fits combinations to Display Network slot sizes.",
    "The format isn’t new, but the asset logic still decides quality. Here are six practices that keep crops and copy under control. Skip old banner-vs-RDA CTR tables — measure your own account. Current file sizes live in Google Ads Help.",
  ],
  faq: [
    {
      q: "Do Responsive Display Ads replace all banners?",
      a: "They often cover most Display reach. For strict brand safety and fixed layouts, teams sometimes keep standard banners.",
    },
    {
      q: "Do you need a designer for RDA?",
      a: "For strong frames and logos — yes. Without an asset set and copy, even a perfect one-size PSD won’t unlock the format.",
    },
    {
      q: "Why does the image look broken on some placements?",
      a: "Cropping for different aspect ratios. Keep the main subject in a safe zone and upload several landscape, square, and portrait variants.",
    },
    {
      q: "Is one logo enough?",
      a: "Better several: square and horizontal. Otherwise on some layouts the mark gets cropped or tiny.",
    },
    {
      q: "Are RDA and Performance Max the same thing?",
      a: "No. Performance Max spans more channels. RDA is Display creative built from assets; product feeds and inventory rules in accounts keep evolving.",
    },
  ],
  sections: [
    {
      title: "What the format does",
      level: 2,
      paras: [
        "You upload an asset pool — the system combines and scales for placements. More valid assets mean more chances to fill different slots without hand-cutting every size.",
        "You still need control: watch previews, pause weak combinations, refresh creatives. “Uploaded photos and walked away” leads to odd crops and low quality.",
      ],
      lists: [
        {
          intro: "Basic set:",
          items: [
            "several images in different ratios;",
            "logos;",
            "headlines and long headlines;",
            "descriptions;",
            "video — when possible and per account rules.",
          ],
        },
      ],
    },
    {
      title: "1. Framing and image scale",
      level: 2,
      paras: [
        "In preview a frame can look large; on a placement it’s tiny or the meaning is cropped out. Pick photos where the main subject still reads in a thin strip and in a square.",
        "Example: a “safari” with tiny figures on the horizon loses to a frame where the animal and offer sit in the center. Prep two or three meaning variants, not one file.",
      ],
    },
    {
      title: "2. Cover different aspect ratios",
      level: 2,
      paras: [
        "Don’t stop at one landscape banner. Add square and portrait (within current asset rules) — or part of inventory stays empty or poorly cropped.",
        "Pixel specs change — check Google Ads Help before upload, not a 2018 screenshot.",
      ],
    },
    {
      title: "3. Several logo variants",
      level: 2,
      paras: [
        "A square mark for compact layouts, a horizontal logo for wide ones. Watch contrast on light and dark backgrounds.",
        "If the brand guide is strict, check previews: adaptive shouldn’t break protected margins without you noticing.",
      ],
    },
    {
      title: "4–5. Copy and previews",
      level: 2,
      paras: [
        "Write several headlines and descriptions of different lengths: the system picks what fits. USP and offer should read without the image.",
        "Always review combination previews and share the link with colleagues or the client. You’ll catch clipped lines and bad photo–copy pairs before big spend.",
      ],
      lists: [
        {
          intro: "Copy hygiene:",
          items: [
            "no clickbait that lies on the landing page;",
            "put the key benefit in a short headline;",
            "legal marks when the topic requires them;",
            "A/B on meaning, not only synonyms.",
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
        "If it matters where the brand sits and in which exact layout, fixed banners can be safer than full auto-compose. Use placement exclusions and brand safety deliberately.",
        "In regulated topics, required disclaimers can eat ad space — check layouts. When unsure, don’t chase maximum reach at any cost.",
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
        "RDA simplifies Display if you feed good frames, logos, and copy and watch previews. Old “RDA always beats banners on CTR” isn’t a law.",
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
