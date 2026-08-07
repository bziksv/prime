import type { BlogPost } from "../../../data/blog";

/** EN overlay for kartinki-seo — same structure as RU JSON. */
export const kartinkiSeoEn: BlogPost = {
  slug: "kartinki-seo",
  title: "Images for SEO: where to get them, how to prepare and place them",
  date: "2017-11-21",
  category: "Content marketing",
  cover: "/images/blog/kartinki-seo/cover-en.webp",
  excerpt:
    "Site images for people and search: your own photos and AI instead of stock, file name, weight, alt, captions, responsive delivery, and og:image — without “unique image = TOP” promises.",
  lead: [
    "Images help people understand the text, hold attention, and take part in image search. On their own they rarely “pull” a page into the TOP: meaning, speed, and correct markup matter.",
    "Where you get visuals, how you compress and name files, and what goes in alt text and captions matter more than “unique photo = TOP.” Alt and title details live nearby; here we focus on the image workflow. Mentions of Facebook and Pinterest are informational.",
  ],
  faq: [
    {
      q: "Is stock OK?",
      a: "For materials on our site — no. Clients are better off with their own shoots, brand-fit AI, or a verified license; mass Unsplash/Pexels often looks borrowed.",
    },
    {
      q: "Does a unique image guarantee ranking growth?",
      a: "No. File uniqueness helps branding and sometimes image search — it isn’t a TOP ticket for a commercial query.",
    },
    {
      q: "Which image format should I choose?",
      a: "JPEG/WebP for photos, PNG/SVG for diagrams and transparency. Check weight and quality on a real screen.",
    },
    {
      q: "Do you need a keyword in the file name?",
      a: "A short meaningful Latin/translit name — yes. `buy-notebook-moscow-cheap-sale.jpg` is stuffing.",
    },
    {
      q: "Is alt required?",
      a: "For meaningful images — yes. Decor — empty alt. Don’t paste a wall of keywords.",
    },
    {
      q: "How much animation is OK?",
      a: "Little: one fitting GIF/Lottie beats a cascade that blocks reading and page load.",
    },
    {
      q: "How is this different from the alt article?",
      a: "That one covers img attributes. This covers source, weight, responsive delivery, captions, and sharing.",
    },
  ],
  sections: [
    {
      title: "Where to get images",
      level: 2,
      paras: [
        "Best option — your own photos, product screenshots, diagrams, and task-fit infographics. Then the visual matches the offer and doesn’t look like “someone else’s office.”",
        "AI generation fits abstractions, atmosphere, and covers without readable text on the image. We don’t use stock (Unsplash, Pexels and peers) for our publications; if a client has a license — check rights and how unique the frame is in the niche.",
        "Animation fits in doses: explain a process, don’t distract from the text.",
      ],
      notes: [
        {
          title: "Not “download from Flickr and forget”",
          text: "Even “free” libraries need a license and often give the same frames to competitors. Own shoots and brand-fit AI are stronger.",
        },
      ],
      links: [
        {
          label: "How to catch attention with an image",
          href: "/en/blog/kartinki-vnimanie/",
        },
      ],
    },
    {
      title: "Preparing the file",
      level: 2,
      paras: [
        "Name: topical, not `DSC_1234.jpg`. Reflect the object briefly: `notebook-asus-15.jpg`, not a wall of commercial keywords.",
        "Size to the real container on the site + compression (ImageOptim, Squoosh, Kraken and peers). Heavy photos hit Core Web Vitals and bounce.",
        "For mobile — responsive srcset/sizes or correct responsive handling in the CMS; WordPress plugins change, the “different sizes per screen” logic stays.",
      ],
    },
    {
      title: "Placement, alt, and captions",
      level: 2,
      paras: [
        "Place the image next to the relevant paragraph — not “a pack at the end of the article.” A caption under the photo helps people and context.",
        "Alt — briefly about meaning; img title is almost non-critical for SEO. Don’t duplicate the H1 with keywords in every alt.",
        "Alignment and spacing are part of UX: the image shouldn’t break column readability.",
      ],
      links: [
        {
          label: "Image alt and title",
          href: "/en/blog/alt-img/",
        },
      ],
    },
    {
      title: "Share preview",
      level: 2,
      paras: [
        "For a normal image in social and messengers set `og:image` (and twitter:image if needed) at enough resolution.",
        "CMS SEO plugins often have fields — check that the preview doesn’t crop what matters and that the image has no tiny unreadable text.",
      ],
      lists: [
        {
          intro: "Checklist before publish:",
          items: [
            "own/AI/licensed visual — not stock “by habit”;",
            "weight and size for the screen;",
            "meaningful file name;",
            "alt and caption clearly;",
            "og:image for sharing.",
          ],
        },
      ],
    },
  ],
  closing: [
    "On one commercial page, replace a stock banner with a product photo or a simple diagram — and measure bounce and time on page: often clearer than another keyword in alt.",
  ],
  related: [
    "alt-img",
    "kartinki-vnimanie",
    "infografika",
    "vizualizatsiya-dannyih",
    "struktura-stati",
    "tehnicheskiy-seo-audit",
  ],
};
