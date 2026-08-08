import type { BlogPost } from "../../../data/blog";

/** EN overlay for verstka-saytov — same structure as RU JSON. */
export const verstkaSaytovEn: BlogPost = {
  slug: "verstka-saytov",
  title: "Website front-end layout: what it is, stages, and quality bars",
  date: "2022-01-17",
  category: "SEO",
  cover: "/images/blog/verstka-saytov/cover-en.webp",
  excerpt:
    "What a front-end layout engineer does: from mockup to live page. Stages, HTML/CSS, responsive design, QA, and the SEO connection.",
  lead: [
    "Layout turns a design mockup into a working web page: HTML sets structure, CSS sets appearance, and JS adds behavior when you need it.",
    "Below: the layout engineer’s role in the copy → design → code chain, a modern process, and an acceptance checklist. Full-page table layouts as the default are history.",
  ],
  faq: [
    {
      q: "How is layout different from design?",
      a: "Design is how it should look and feel. Layout is how it opens reliably in browsers, on phones, and for crawlers.",
    },
    {
      q: "Is JavaScript always required?",
      a: "No. Start with semantics and CSS. Add JS when you can’t do without it (complex behavior) — and keep content available without it when you can.",
    },
    {
      q: "Should you use tables or CSS blocks for page layout?",
      a: "For page layouts today — CSS (flex/grid) and semantic blocks. Tables are for tabular data, not the whole site grid.",
    },
    {
      q: "How does layout affect SEO?",
      a: "Through headings, lists, text accessibility, speed, mobile usability, and avoiding critical markup errors.",
    },
    {
      q: "What should you check before handoff?",
      a: "Cross-browser rendering, responsive behavior, validity/console, images and fonts, clickability, and basic accessibility.",
    },
  ],
  sections: [
    {
      title: "What layout is",
      level: 2,
      paras: [
        "Simply: the designer builds a mockup; the layout engineer builds the page the browser opens. Think of a magazine: copy → page layout → print; on the web, print becomes an HTML page.",
        "In practice you need: working with graphics from the mockup, HTML, CSS, basic JS, and a feel for browser and mobile-screen limits.",
      ],
      lists: [
        {
          intro: "What the business gets:",
          items: [
            "pages that match the approved design",
            "responsive behavior on phone and desktop",
            "code you can maintain",
            "a base for CMS and SEO structure",
          ],
        },
      ],
      links: [
        {
          label: "Hypertext: structure and links",
          href: "/en/blog/gipertekst/",
        },
      ],
    },
    {
      title: "Work stages",
      level: 2,
      paras: [
        "Start by studying the mockup: grid, fonts, button states, mobile screens. Then slice graphics, build base markup, styles, behavior, and tests.",
      ],
      lists: [
        {
          intro: "Typical order:",
          items: [
            "break down the mockup and guideline",
            "export images and icons",
            "build HTML structure (semantics)",
            "add CSS from general to specific",
            "add necessary JS",
            "check in browsers and on devices",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Laying out “as you go” without a mobile mockup. Most traffic is phones; bake responsive in from the start.",
        },
      ],
    },
    {
      title: "HTML and CSS today",
      level: 2,
      paras: [
        "HTML describes what blocks mean: headings, lists, navigation, forms. CSS handles look and layout. Flexbox and Grid cover grids without table hacks.",
        "Keep styles separate from markup. Repeating values are easier as variables and a shared design system.",
      ],
      lists: [
        {
          intro: "Good habits:",
          items: [
            "one H1 per page by meaning",
            "lists via ul/ol, not “paragraphs with bullet images”",
            "meaningful image alt text",
            "buttons and links that are easy to tell apart",
            "don’t duplicate huge inline styles",
          ],
        },
      ],
    },
    {
      title: "Quality criteria",
      level: 2,
      paras: [
        "Looking good in one browser isn’t enough. You need stability and maintainability.",
      ],
      lists: [
        {
          intro: "Acceptance:",
          items: [
            "match the mockup within tolerance",
            "correct look in current browsers",
            "mobile version without pointless horizontal scroll",
            "no critical console errors",
            "indexable text, not trapped in an image",
            "images with sizes and optimization",
            "clear code structure for the next developer",
          ],
        },
      ],
      tables: [
        {
          caption: "Quick layout quality filter",
          headers: ["Area", "OK", "Risk"],
          rows: [
            ["Semantics", "H1–H3 by meaning", "Everything via divs, no headings"],
            ["Responsive", "Key breakpoints", "Desktop only"],
            ["Speed", "Compressed assets", "Multi-megabyte PNGs"],
            ["Accessibility", "Focus, contrast, alt", "Mouse-only clicks"],
          ],
        },
      ],
    },
    {
      title: "Tools",
      level: 2,
      paras: [
        "Code editor, browser DevTools, a graphics editor or Figma for mockups, validators and cross-browser check services — pick by task. Tool names change; skill matters more than a 2015 IDE cult.",
      ],
      lists: [
        {
          intro: "Minimum to start:",
          items: [
            "a solid editor with highlighting",
            "Chrome/Firefox DevTools",
            "checks on a real phone",
            "control over image weight",
          ],
        },
      ],
    },
    {
      title: "Link to SEO and support",
      level: 2,
      paras: [
        "Bad layout slows indexing and frustrates users even with strong copy. Good layout speeds up fixes and lowers the cost of owning the site.",
      ],
      lists: [
        {
          intro: "Useful for a layout engineer to understand:",
          items: [
            "where key CTAs lead",
            "how URL structure and templates work",
            "what not to break in header/footer for analytics",
          ],
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
  ],
};
