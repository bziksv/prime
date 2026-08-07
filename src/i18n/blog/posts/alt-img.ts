import type { BlogPost } from "../../../data/blog";

/** EN overlay for alt-img — same structure as RU JSON. */
export const altImgEn: BlogPost = {
  slug: "alt-img",
  title: "Image alt and title attributes: how to fill them right",
  date: "2020-08-27",
  category: "SEO",
  cover: "/images/blog/alt-img/cover-en.webp",
  excerpt:
    "How alt differs from title on an img tag, why alt matters for accessibility and image search, when title is almost unnecessary, and which mistakes hurt SEO and UX.",
  lead: [
    "`alt` describes the image if the file fails to load or a screen reader reads it. `title` on `img` is a hover tip in some browsers; it barely affects SEO and accessibility.",
    "Below — how to write alt, when to use empty `alt=\"\"`, whether you need title, and what to avoid (keyword stuffing, “image1”). Clickable banners are in the image-as-link article.",
  ],
  faq: [
    {
      q: "Is alt required?",
      a: "For informative images — yes, meaningful text. For purely decorative ones — empty `alt=\"\"` so the screen reader doesn’t read junk.",
    },
    {
      q: "Is img title required for SEO?",
      a: "No. Don’t count on title as a ranking factor. Focus on alt, page context, and file quality.",
    },
    {
      q: "How many characters in alt?",
      a: "As many as needed to describe meaning briefly. A phrase often suffices; a keyword sheet doesn’t.",
    },
    {
      q: "Do keywords in alt help?",
      a: "Moderate and on-point — fine. Stuffing “buy X cheap photo” into every alt hurts accessibility.",
    },
    {
      q: "Is alt the same as a caption under the image?",
      a: "Not necessarily. A caption is visible to everyone; alt is alternative text. You can share meaning, but they needn’t match word for word.",
    },
    {
      q: "Do button icons need alt?",
      a: "If visible button text is next to them — often `alt=\"\"`. If the icon is the only meaning — alt should name the action.",
    },
    {
      q: "Filename instead of alt?",
      a: "No. The filename helps organization, but it doesn’t replace alt.",
    },
    {
      q: "Alt in English or another language?",
      a: "In the language of the page and audience.",
    },
  ],
  sections: [
    {
      title: "Why img attributes exist",
      level: 2,
      paras: [
        "Bots and assistive tech don’t “see” pixels like a person. `alt` gives a text equivalent. For people, alt appears if the image is broken; for SEO — a signal about the image and page topic next to content.",
        "`title` was historically treated as “another keyword field”. Today it’s a weak optional layer; on touch devices there’s often no hover.",
      ],
      lists: [
        {
          intro: "Roles:",
          items: [
            "`src` — the file;",
            "`alt` — meaning / empty for decoration;",
            "`width`/`height` — layout space;",
            "`title` — optional tip, not an alt replacement.",
          ],
        },
      ],
    },
    {
      title: "How to write alt",
      level: 2,
      paras: [
        "Describe what’s in the image and why it’s here — without “image shows…”. For a product — model/type; for a diagram — what it explains; for an office photo — short and honest.",
        "If the image carries text (screenshot, meme with a phrase), alt should convey the text’s essence or decision — or screen-reader meaning is lost.",
      ],
      lists: [
        {
          intro: "Examples:",
          items: [
            "bad: `photo`, `img_4521`, `buy fridge cheap sale`;",
            "better: `White side-by-side fridge, open shelves`;",
            "for a decorative line: `alt=\"\"`;",
            "for a search icon button: `alt=\"Search\"` or visible text + empty alt.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "The same commercial keyword in every gallery alt. Noise for people, spam for search.",
        },
      ],
    },
    {
      title: "Alt and SEO: realistically",
      level: 2,
      paras: [
        "Alt helps convey the image topic and sometimes appear in image search. It’s not “faster indexing for the whole site” and not a TOP guarantee. More important: a relevant page, a light file, clear context around it.",
        "Don’t duplicate the page Title into every alt. Don’t hide the main offer only in an image without HTML text.",
      ],
      lists: [
        {
          intro: "Stronger than alt:",
          items: [
            "quality page content;",
            "compression and modern formats;",
            "meaningful captions;",
            "internal links in text.",
          ],
        },
      ],
      links: [
        {
          label: "Images and attention",
          href: "/en/blog/kartinki-vnimanie/",
        },
        {
          label: "Page size",
          href: "/en/blog/razmer-stranitsy/",
        },
      ],
    },
    {
      title: "Title on an image",
      level: 2,
      paras: [
        "You can give a short hover tip on desktop. Don’t dump a keyword sheet there. Many users never see title.",
        "Don’t confuse `title` on `img` with the document `<title>` or a `<figcaption>` caption.",
      ],
      lists: [
        {
          intro: "When title fits:",
          items: [
            "extra clarification without critical meaning;",
            "not as the only description source;",
            "not instead of accessible link text.",
          ],
        },
      ],
    },
    {
      title: "Image links and decoration",
      level: 2,
      paras: [
        "If `img` is inside a link with no nearby text, alt should describe the destination (“Pump catalog”), not only “blue button”.",
        "CSS background images have no alt — don’t put the only important meaning there.",
      ],
      lists: [
        {
          intro: "Checklist:",
          items: [
            "informative — meaningful alt;",
            "decor — empty alt;",
            "image link — alt = action/destination;",
            "no keyword bulk.",
          ],
        },
      ],
      links: [
        {
          label: "Image as a link",
          href: "/en/blog/kartinka-ssylka/",
        },
      ],
    },
    {
      title: "Rollout practice",
      level: 2,
      paras: [
        "In the CMS make alt required for content photos. Crawl for empty and template alts. On accessibility audits check decorative icons.",
        "Example: `<img src=\"/images/pump.webp\" alt=\"Centrifugal well pump, stainless housing\" width=\"800\" height=\"600\">`.",
      ],
      lists: [
        {
          intro: "Editorial playbook:",
          items: [
            "write alt on upload, not “later”;",
            "ban `image`, `photo`, `banner`;",
            "review commercial galleries;",
            "don’t use title as a keyword dump.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "One precise alt beats ten “optimized” clones.",
        },
      ],
      links: [
        {
          label: "Page source code",
          href: "/en/blog/ishodnyy-kod/",
        },
      ],
    },
  ],
  related: [
    "kartinka-ssylka",
    "kartinki-vnimanie",
    "razmer-stranitsy",
    "ishodnyy-kod",
    "optimizatsiya-stranitsy",
  ],
};
