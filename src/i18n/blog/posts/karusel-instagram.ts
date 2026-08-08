import type { BlogPost } from "../../../data/blog";

/** EN overlay for karusel-instagram — same structure as RU JSON. */
export const karuselInstagramEn: BlogPost = {
  slug: "karusel-instagram",
  title: "Instagram carousel: several photos in one post",
  date: "2021-06-18",
  category: "SMM",
  cover: "/images/blog/karusel-instagram/cover-en.webp",
  excerpt:
    "How to build an Instagram post from several photos or videos, why a carousel beats a collage, slide order and a unified style — without outdated click-paths or tools that download other people’s content.",
  lead: [
    "A carousel is a post with several slides: people swipe the dots under the preview. Use it for product angles, a step-by-step guide, or before/after without a tiny collage.",
    "Below: why the format works, how to assemble it, and common mistakes. In-app buttons change; slide order and a unified style matter more than menu screenshots.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "How many slides can you add?",
      a: "Platform limits have changed. Follow the current media picker; don’t pack a carousel to the max without a storyline.",
    },
    {
      q: "Can you mix photos and video?",
      a: "Usually yes. Keep one tone and a clear order: hook → substance → CTA.",
    },
    {
      q: "Several photos in one Stories as a single file?",
      a: "Classic Stories are separate frames in a row. For a lasting feed series, use a carousel post.",
    },
    {
      q: "How is a carousel different from a template?",
      a: "Carousel is the publication format. A template is the slide layout. See the posts on templates and selling posts.",
    },
    {
      q: "Do you need third-party “download from Instagram” sites?",
      a: "To run your own account — no. Other people’s content without rights is a risk; for your archive use official export methods.",
    },
  ],
  sections: [
    {
      title: "Why a carousel, not a collage",
      level: 2,
      paras: [
        "A full-screen slide reads better than a tiny grid in one frame. A carousel holds attention longer and fits instructions, catalogs, and comparisons.",
        "The first slide decides whether people swipe: a strong frame or a cover thesis.",
      ],
      links: [
        {
          label: "Photos for Instagram",
          href: "/en/blog/foto-instagram/",
        },
        {
          label: "Selling post",
          href: "/en/blog/post-instagram/",
        },
      ],
    },
    {
      title: "How to build a multi-media post",
      level: 2,
      paras: [
        "When creating a post, pick several files from the gallery. Selection order usually sets slide order — put the hook first.",
        "Crop and light-edit per slide; one preset across the carousel looks cohesive. Caption and location come after assembly.",
      ],
      lists: [
        {
          intro: "Before you share:",
          items: [
            "a slide scenario from 1→N",
            "the first frame is clear without swiping",
            "unified color and type style",
            "last slide with a CTA or offer",
            "app updated if multi-select is missing",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "For a product: overall view → details → size/materials → in use → ask to message in Direct.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Stories and series",
      level: 2,
      paras: [
        "Several Stories publish in a row and last a day; that doesn’t replace a feed carousel. For an evergreen guide, prefer a carousel post plus a Highlights pin if needed.",
        "Mass-deleting a pile of old posts in one tap often isn’t available — clean one by one or via content tools if you have them.",
      ],
      links: [
        {
          label: "Instagram templates",
          href: "/en/blog/shablon-instagram/",
        },
        {
          label: "Page design",
          href: "/en/blog/oformlenie-stranicy-instagram/",
        },
      ],
    },
  ],
};
