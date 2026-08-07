import type { BlogPost } from "../../../data/blog";

/** EN overlay for shablon-instagram — same structure as RU JSON. */
export const shablonInstagramEn: BlogPost = {
  slug: "shablon-instagram",
  title: "Instagram templates: a unified feed and post style",
  date: "2021-07-23",
  category: "SMM",
  cover: "/images/blog/shablon-instagram/cover-en.webp",
  excerpt:
    "Why Instagram post and profile-grid templates matter, which layout schemes work, how to build a mockup in an editor, and which apps help — without clinging to outdated UI buttons.",
  lead: [
    "An Instagram template is a pre-set visual frame: size, margins, fonts, color preset. The feed looks coherent, and each publish isn’t “from scratch.”",
    "Below — why mockups help, grid layout schemes, and how to build a template on desktop and phone. App UIs change — a unified style matters more than button screenshots.",
  ],
  legalNotice: {
    title: "Dear readers!",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "How is a template different from profile design?",
      a: "Design is the header, avatar, About, and overall tone. A template is a reusable post/Stories frame and grid planning. See also the profile design article.",
    },
    {
      q: "Is a “checkerboard” visual required?",
      a: "No. It’s one technique. For many brands one palette and recognizable fonts matter more than strict geometry.",
    },
    {
      q: "Is Canva enough?",
      a: "For most tasks — yes: brand kit, post/Stories sizes, export. Photoshop — if you need fine layer control.",
    },
    {
      q: "Do you need a separate Stories template?",
      a: "Yes if you often make highlight covers and Stories series. The logic is the same: unified style and readability.",
    },
    {
      q: "Does a template replace a content plan?",
      a: "No. The mockup speeds up design; what to publish and why lives in the content plan.",
    },
  ],
  sections: [
    {
      title: "Why templates",
      level: 2,
      paras: [
        "A unified style boosts recognition and cuts time per post: filter, margins, and font are already chosen. A newcomer grasps what the account is about faster.",
        "A grid mockup (feed preview) helps you not break composition: color alternation, collage, rows — planned, not “whatever happened.”",
      ],
      lists: [
        {
          intro: "What a template system gives:",
          items: [
            "less time spent on design;",
            "a predictable profile grid;",
            "less font and color chaos;",
            "easier to delegate: “drop the photo into this mockup.”",
          ],
        },
      ],
      links: [
        {
          label: "Instagram page design",
          href: "/en/blog/oformlenie-stranicy-instagram/",
        },
        {
          label: "Instagram content plan",
          href: "/en/blog/kontent-plan-instagram/",
        },
      ],
    },
    {
      title: "Feed layout schemes",
      level: 2,
      paras: [
        "A 3×N grid reads top to bottom. A sharp style change every three posts cuts perception — better evolution than “a different brand every week.”",
      ],
      lists: [
        {
          intro: "Popular schemes:",
          items: [
            "basic — one palette and preset on every frame;",
            "checkerboard — alternating light/dark or photo/text cards;",
            "rows or columns — meaning blocks of three;",
            "orientation contrast — carefully: the feed still crops in preview;",
            "multi-post collage — rarely, and only if you can finish the series.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "A store often prefers rows like “product / review / tip.” A personal blog — a basic palette without rigid geometry.",
        },
      ],
    },
    {
      title: "How to build a template",
      level: 2,
      paras: [
        "On desktop: Canva, Figma, Photoshop, or similar. Set size for the current post format (square / vertical — check the platform’s current guidance), safe margins, 1–2 fonts, a color pair, space for photo and short text.",
        "On phone: the same Canva / Lightroom presets / template editors. Save a brand kit: colors and fonts not “from scratch” each time.",
        "Grid preview: apps like Preview and peers let you rearrange drafts before publish — handy to check checkerboards and rows.",
      ],
      lists: [
        {
          intro: "Lock in the template:",
          items: [
            "canvas size;",
            "margins and text zones;",
            "palette (2–3 colors);",
            "headline and body fonts;",
            "color/grain preset;",
            "CTA button/badge style, if any.",
          ],
        },
      ],
    },
    {
      title: "Tools and ready mockups",
      level: 2,
      paras: [
        "Canva and peers — a fast start with an “Instagram post” catalog. Creative Market and stock packs — paid (check the license). Mobile editors (VSCO, Snapseed, PixelLab, etc.) — for finishing a frame, not instead of brand logic.",
        "App names and plans change (old guides with Adobe Spark / Crello read as brand history). Pick what exports without a watermark and stores your brand kit.",
      ],
      lists: [
        {
          intro: "Before publish:",
          items: [
            "text reads in preview;",
            "faces and prices aren’t cropped;",
            "a grid of the last 9 posts looks coherent;",
            "the template doesn’t clash with the avatar and highlights.",
          ],
        },
      ],
      links: [
        {
          label: "Selling Instagram post",
          href: "/en/blog/post-instagram/",
        },
      ],
    },
  ],
};
