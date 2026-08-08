import type { BlogPost } from "../../../data/blog";

/** EN overlay for adaptivnye-mediynye-obyavleniya — same structure as RU JSON. */
export const adaptivnyeMediynyeObyavleniyaEn: BlogPost = {
  slug: "adaptivnye-mediynye-obyavleniya",
  title: "Responsive Display Ads in Google Ads: six practices that hold up",
  date: "2018-12-17",
  category: "Paid search",
  cover: "/images/blog/adaptivnye-mediynye-obyavleniya/cover-en.webp",
  excerpt:
    "How to build Responsive Display Ads (RDA) that don’t fall apart: asset ratios, crops, logos, copy, previews, and brand safety — without a fossil CTR table or “upload and forget.”",
  lead: [
    "Responsive Display Ads pull banners and native layouts from your images, logos, headlines, and descriptions. Google Ads mixes those assets to fit Display Network slots.",
    "The product isn’t new, but asset quality still decides whether you look sharp or cropped into nonsense. Below: six practices. Ignore old banner-vs-RDA CTR folklore — measure your account. Current file specs live in Google Ads Help.",
  ],
  faq: [
    {
      q: "Do Responsive Display Ads replace every banner?",
      a: "They often cover most Display reach. Keep fixed banners when brand safety or layout control is non-negotiable.",
    },
    {
      q: "Do you need a designer?",
      a: "For strong frames and logos — yes. Without a real asset set and copy, a perfect one-size PSD still won’t unlock the format.",
    },
    {
      q: "Why does the image look broken on some placements?",
      a: "Different aspect ratios crop differently. Keep the main subject in a safe zone and upload landscape, square, and portrait variants.",
    },
    {
      q: "Is one logo enough?",
      a: "Upload more than one: square and horizontal. Otherwise the mark gets clipped or shrinks into noise on some layouts.",
    },
    {
      q: "Are RDA and Performance Max the same?",
      a: "No. Performance Max spans more channels. RDA is Display creative built from assets; what’s available in the UI keeps evolving.",
    },
  ],
  sections: [
    {
      title: "What the format actually does",
      level: 2,
      paras: [
        "You feed an asset pool; the system combines and scales for placements. More valid assets mean more slots filled without hand-cutting every size.",
        "You still run the show: review previews, pause weak combos, refresh creatives. Dumping a folder of random photos and walking away is how you get weird crops and weak quality scores.",
      ],
      lists: [
        {
          intro: "Minimum kit:",
          items: [
            "several images in different ratios",
            "logos",
            "headlines and long headlines",
            "descriptions",
            "video — when the account allows it and the brief needs it",
          ],
        },
      ],
    },
    {
      title: "1. Framing and scale",
      level: 2,
      paras: [
        "Preview can look bold while the live placement looks tiny or cuts the story. Choose photos where the subject still reads in a thin strip and in a square.",
        "A “safari” shot with ants on the horizon loses to a frame where the animal and the offer sit dead center. Prep two or three meaning variants, not one file.",
      ],
    },
    {
      title: "2. Cover the aspect ratios you care about",
      level: 2,
      paras: [
        "One landscape banner isn’t enough. Add square and portrait within current asset rules — or you’ll leave inventory empty or badly cropped.",
        "Pixel specs change. Check Google Ads Help before upload, not a 2018 screenshot.",
      ],
    },
    {
      title: "3. More than one logo",
      level: 2,
      paras: [
        "Square mark for compact layouts, horizontal lockup for wide ones. Check contrast on light and dark backgrounds.",
        "If the brand guide is strict, stress-test previews: adaptive shouldn’t quietly break protected clear space.",
      ],
    },
    {
      title: "4–5. Copy and previews",
      level: 2,
      paras: [
        "Write several headlines and descriptions at different lengths so the system has something that fits. USP and offer should make sense without the image.",
        "Review combination previews and share the link with the team or client. Catch clipped lines and bad photo–copy pairs before the budget ramps.",
      ],
      lists: [
        {
          intro: "Copy hygiene:",
          items: [
            "no clickbait that lies on the landing page",
            "put the core benefit in the short headline",
            "legal marks when the topic requires them",
            "A/B on meaning, not synonym swaps",
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
        "When neighborhood and exact layout matter, fixed banners can beat full auto-compose. Use placement exclusions and brand-safety controls on purpose, not as an afterthought.",
        "In regulated niches, required disclaimers eat space — check the layouts. When unsure, don’t chase reach at any cost.",
      ],
      notes: [
        {
          title: "Worth remembering",
          kind: "tip",
          text: "Strong assets + previews + combo monitoring. Skip that, and adaptive only saves designer hours so you can spend them fixing reputation.",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "RDA makes Display easier when you feed good frames, logos, and copy — and you actually watch the previews. “RDA always beats banners on CTR” is folklore, not law.",
        "Build the asset set, check combinations, respect brand safety. Then the format accelerates production instead of gambling on crops.",
      ],
    },
  ],
  closing: [
    "Assemble several image ratios, a couple of logos, and copy at different lengths, run previews, then scale spend — Responsive Display Ads surprise you less when the kit is ready first.",
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
