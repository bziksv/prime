import type { BlogPost } from "../../../data/blog";

/** EN overlay for foto-instagram — same structure as RU JSON. */
export const fotoInstagramEn: BlogPost = {
  slug: "foto-instagram",
  title: "Photos for Instagram: idea, composition, and shooting",
  date: "2021-06-29",
  category: "SMM",
  cover: "/images/blog/foto-instagram/cover-en.webp",
  excerpt:
    "How to pick a visual niche, shoot with composition and light, and prep photos for a blog or shop on Instagram — without “girls only” clichés or copying other feeds.",
  lead: [
    "On Instagram the image hooks first; text is the second layer. A strong frame has a clear idea, light, composition, and a link to the profile offer.",
    "Content types, basic shooting techniques, business nuances, and publishing rhythm. The app UI changes; frame skill beats a list of outdated filters.",
  ],
  legalNotice: {
    title: "Dear readers!",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Do I need a DSLR for a blog?",
      a: "Not necessarily. A modern phone plus light and composition is often enough. For product catalogs, studio/light help more than “megapixels.”",
    },
    {
      q: "How many filters is normal?",
      a: "One recognizable preset for the feed beats a kaleidoscope. Heavy skin retouch and “plastic” kill trust fast.",
    },
    {
      q: "How is this different from a post template?",
      a: "Here — shooting and frame composition. A template is frame, fonts, and layout grid. See posts on templates and profile design.",
    },
    {
      q: "Can I copy competitors’ frames one-to-one?",
      a: "Ideas — yes; other people’s photos and pixel-perfect style — no: claim risk and an empty feed without your voice.",
    },
    {
      q: "When should I publish?",
      a: "When your audience is online — check account stats. There is no universal “best hour for everyone.”",
    },
  ],
  sections: [
    {
      title: "Idea and visual niche",
      level: 2,
      paras: [
        "First lock what the profile is about: diary, travel, expertise, product, community. Niche drives locations, props, and edit tone.",
        "Experiment, but keep a core: a follower should grasp in three seconds why to stay.",
      ],
      lists: [
        {
          intro: "Common formats:",
          items: [
            "lifestyle and behind the scenes",
            "travel and places",
            "utility / process / before-after",
            "product and flat lays",
            "pets and hobbies — if that’s truly your content.",
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
      title: "Platform rules and red lines",
      level: 2,
      paras: [
        "Follow community rules: no plagiarism, banned content, or provocation for reach. A ban costs more than any “viral” frame.",
        "Provocation as the only strategy shortens account life. Better a steady visual and offer.",
      ],
      lists: [],
      links: [
        {
          label: "Instagram bans",
          href: "/en/blog/blokirovka-instagram/",
        },
      ],
    },
    {
      title: "Composition and light",
      level: 2,
      paras: [
        "A 3×3 grid (rule of thirds), negative space, leading lines, symmetry, patterns, tight detail shots — tools, not dogma. One strong device per frame beats mixing everything.",
        "Light: daylight when you can; on-camera flash often kills color. Move your feet for the angle — don’t rely only on zoom; digital zoom adds noise.",
      ],
      lists: [
        {
          intro: "Before you hit the shutter:",
          items: [
            "what is the main subject",
            "whether the edge crops something important",
            "whether the background is orderly",
            "whether light is enough without noise",
            "how the frame will sit in the profile grid.",
          ],
        },
      ],
    },
    {
      title: "Business and product photos",
      level: 2,
      paras: [
        "For a shop you need honest color, a clean background or intentional scene, sharpness, and a set of angles. A tripod and soft light save hours of retouch.",
        "Study competitors for angle ideas, not file copies. Watermarks only if needed; a recognizable style beats a logo covering half the frame.",
      ],
      lists: [
        {
          intro: "Minimum for a feed card:",
          items: [
            "hero angle + detail",
            "use-in-context shot",
            "one preset for the series",
            "caption with value and CTA.",
          ],
        },
      ],
      links: [
        {
          label: "Instagram templates",
          href: "/en/blog/shablon-instagram/",
        },
        {
          label: "Selling post",
          href: "/en/blog/post-instagram/",
        },
      ],
    },
    {
      title: "Editing and publishing rhythm",
      level: 2,
      paras: [
        "Frame first, then Lightroom/mobile editor: exposure, white balance, light sharpening. A series preset beats a “wow filter” on one post.",
        "Regularity holds reach: plan slots from stats. Caption under the photo is hook and meaning, not a wall of keywords.",
      ],
      lists: [],
      notes: [
        {
          title: "Practice",
          text: "“What to shoot” ideas are endless; the limit is light and time. Keep a list of locations and props under content-plan rubrics.",
        },
      ],
    },
  ],
};
