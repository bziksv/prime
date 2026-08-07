import type { BlogPost } from "../../../data/blog";

/** EN overlay for razmery-bannera — same structure as RU JSON. */
export const razmeryBanneraEn: BlogPost = {
  slug: "razmery-bannera",
  title: "Banner sizes in pixels: how to check on someone else’s site",
  date: "2021-03-01",
  category: "Digital marketing",
  cover: "/images/blog/razmery-bannera/cover-en.webp",
  excerpt:
    "What web banners look like, why sizes are often arbitrary, and how to learn a competitor creative’s width/height in a minute with developer tools.",
  lead: [
    "A banner is an image or interactive block that promotes an offer, section, or partner. Before making “the same as a competitor”, it helps to know the real size in pixels — otherwise the creative breaks layout or bloats page weight.",
    "Banner types, why IAB standards aren’t always followed, and how to pull sizes with DevTools. Clickable images aren’t always “ads,” but formats and weight still matter for sites and campaigns.",
  ],
  faq: [
    {
      q: "Where in DevTools do I see size?",
      a: "Right-click the banner → Inspect. On the selected node check width/height on img or the computed size in Styles/Computed and the hover tooltip over the node.",
    },
    {
      q: "Does HTML width equal the real file?",
      a: "Not always. Attributes and CSS can scale the image. For the source, check Network → resource size or open the image URL in a new tab.",
    },
    {
      q: "Are there mandatory banner sizes?",
      a: "Ad networks and social platforms have their own specs. On regular sites webmasters often use arbitrary formats for the layout.",
    },
    {
      q: "What’s the difference between static, GIF, and HTML5 banners?",
      a: "JPEG/PNG are lighter and simpler. GIF is animation but heavy. HTML5/JS is interactive, more load, harder to measure as “one image”.",
    },
    {
      q: "Why copy a competitor’s size?",
      a: "So the creative fits a similar slot without cropping. Idea and offer should still be yours; don’t copy others’ assets without rights.",
    },
    {
      q: "How do I avoid killing page speed?",
      a: "Don’t inflate pixels “just in case”: needed display size + compression (WebP/AVIF), width/height in markup, lazy below the fold.",
    },
    {
      q: "Is a banner an image link?",
      a: "Often yes: img inside a. Same rules — clear alt, your own file, sane weight. See the image-link post.",
    },
  ],
  sections: [
    {
      title: "What kinds of banners exist",
      level: 2,
      paras: [
        "By delivery form you most often see three types: static files, animation, and interactive.",
        "Choice depends on the job and the speed budget: the more complex the creative, the higher the risk of LCP delay and user annoyance.",
      ],
      lists: [
        {
          intro: "Types:",
          items: [
            "static JPEG/PNG/WebP — simpler and lighter",
            "animation (GIF or video preview) — clearer, heavier",
            "interactive (HTML/JS) — clicks, forms, motion; harder to maintain.",
          ],
        },
      ],
    },
    {
      title: "Sizes: standards and reality",
      level: 2,
      paras: [
        "Ad associations and networks publish typical formats (e.g. IAB ranges), and social platforms set their own pixels for feed and stories.",
        "On regular sites sizes are often arbitrary: for the layout grid, a mobile breakpoint, or a “hole” in the sidebar. There’s no universal “centimeter” web classification — you count CSS pixels and the file source.",
      ],
      lists: [
        {
          intro: "What to watch for your own creative:",
          items: [
            "slot in the layout (column width / max-width)",
            "retina: sometimes prepare 2× but serve a compressed file",
            "mobile — a separate size or responsive",
            "placement specs if it’s external ads.",
          ],
        },
      ],
      links: [
        {
          label: "Image link",
          href: "/en/blog/kartinka-ssylka/",
        },
      ],
    },
    {
      title: "How to find a banner’s size on someone else’s site",
      level: 2,
      paras: [
        "If you need to match slot dimensions (not copy someone else’s file), open the page in Chrome/Firefox/Safari and use developer tools.",
      ],
      lists: [
        {
          intro: "Short algorithm:",
          items: [
            "right-click the banner → Inspect",
            "in the DOM find the `img` or banner container",
            "check width/height in attributes or computed size",
            "if unsure, open the image URL and verify the natural file size.",
          ],
        },
        {
          intro: "Nuances:",
          items: [
            "CSS may shrink the image — display ≠ intrinsic",
            "background via `background-image` — look in Styles, not img attributes",
            "iframe/ad network — size may sit on the container, not the file.",
          ],
        },
      ],
    },
    {
      title: "Why arbitrary sizes are normal",
      level: 2,
      paras: [
        "Sites adapt blocks for different screens and grids. A rigid “728×90 everywhere” hasn’t been the only option for a long time.",
        "What matters is the banner doesn’t break reading, doesn’t cover CTAs, and doesn’t weigh like a separate page. If the creative is useful (a clear offer, a diagram), people tolerate it more than an empty screaming GIF.",
      ],
      links: [
        {
          label: "Selling traffic and placements",
          href: "/en/blog/prodazha-trafika/",
        },
      ],
    },
  ],
  closing: [
    "Banner size takes a minute via Inspect: check display and the file source separately. Then — your creative, compression, and a correct link, not a copy-paste of someone else’s asset.",
  ],
};
