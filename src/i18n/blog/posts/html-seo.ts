import type { BlogPost } from "../../../data/blog";

/** EN overlay for html-seo — same structure as RU JSON. */
export const htmlSeoEn: BlogPost = {
  slug: "html-seo",
  title: "HTML and SEO: why hypertext markup still matters",
  date: "2020-09-28",
  category: "SEO",
  cover: "/images/blog/html-seo/cover-en.webp",
  excerpt:
    "How HTML helps SEO: document structure, title and meta, headings, links, and code validity — without the myth that “broken HTML = a ban,” plus links to related guides.",
  lead: [
    "HTML is the page markup language: tags tell browsers and bots where the heading, text, link, and image are. CSS handles presentation. For SEO, clear structure matters — not a “secret ranking tag.”",
    "Below: why an SEO specialist needs basic HTML, which nodes to check in `<head>` and `<body>`, and how validity actually helps. We don’t copy the hard line “one code error = deindexed”: bots are tolerant, but messy markup hurts people and parsing.",
  ],
  faq: [
    {
      q: "Must an SEO learn HTML from scratch?",
      a: "The basics — yes: head/body, title, meta, h1–h3, a, img, lists. Deep frontend isn’t required if you have a developer.",
    },
    {
      q: "Does CSS affect rankings?",
      a: "Indirectly: readability, CLS, mobile UX. Pretty gradients alone aren’t a ranking factor. Don’t hide key text only in an image with no alternative.",
    },
    {
      q: "Does invalid HTML mean a filter?",
      a: "Not an automatic sentence. But broken layout breaks snippets, accessibility, and sometimes indexable text. Fix what’s critical.",
    },
    {
      q: "How is HTML different from meta tags?",
      a: "Meta tags are part of HTML in the head. HTML is broader: the whole page structure, not only description.",
    },
    {
      q: "Is a no-code builder enough?",
      a: "Often yes at the start. When you hit duplicate titles, broken H1s, or noindex — you need a look at the code.",
    },
    {
      q: "Is Schema / JSON-LD HTML?",
      a: "Structured data usually lives as JSON-LD or microdata inside HTML. Separate topic; HTML is the host page.",
    },
    {
      q: "Is lang on html required?",
      a: "Desirable: helps the browser and accessibility. Not an SEO magic button, but good hygiene.",
    },
    {
      q: "Where do I start checking a page?",
      a: "View source / DevTools: one H1, title, description, canonical, text in the DOM — not only on an image.",
    },
  ],
  sections: [
    {
      title: "HTML + CSS in an SEO context",
      level: 2,
      paras: [
        "Bots and browsers read the DOM. If the heading is in `<h1>`, the link in `<a href>`, the copy in a paragraph — meaning is easier to extract than from nameless `<div>`s with text painted on a canvas.",
        "CSS doesn’t rank pages, but it affects UX and Core Web Vitals. Hiding whole blocks with `display:none` for keywords is a bad idea and an outdated spam trick.",
        "Validity is about predictability: closed tags, correct nesting, one clear heading hierarchy.",
      ],
    },
    {
      title: "Page skeleton",
      level: 2,
      paras: [
        "`<html>` is the document root, often with `lang`. `<head>` is machine-facing: title, meta, link, scripts. `<body>` is what the user sees.",
        "SEO jobs in head: unique title, description, canonical, robots when needed. In body — H1, content, internal links, image alt text.",
      ],
      lists: [
        {
          intro: "Minimum for a money page:",
          items: [
            "one meaningful H1",
            "a unique title",
            "description that matches the URL",
            "text in HTML, not only on a banner",
            "working internal links",
          ],
        },
      ],
      links: [
        {
          label: "Meta tags",
          href: "/en/blog/metategi/",
        },
        {
          label: "The H1 tag",
          href: "/en/blog/teg-h1/",
        },
      ],
    },
    {
      title: "SEO-relevant nodes",
      level: 2,
      paras: [
        "Title and description shape the snippet and click expectations. H1–H3 help structure and scanning. `<a>` carries anchor meaning. `<img alt>` covers accessibility and image understanding.",
        "Lists, tables, `strong`/`em` improve readability; keyword bold spam isn’t needed.",
        "Technical neighbors: canonical, pagination, noindex — see separate materials; don’t copy outdated “required” meta keywords sets.",
      ],
      links: [
        {
          label: "Meta description",
          href: "/en/blog/meta-description/",
        },
        {
          label: "Title length",
          href: "/en/blog/dlina-title/",
        },
        {
          label: "Canonical tag",
          href: "/en/blog/kanonicheskiy-teg/",
        },
      ],
    },
    {
      title: "Practice: tying SEO and HTML together",
      level: 2,
      paras: [
        "Before a brief to developers, describe the URL intent and required elements in code — not only “make it pretty.”",
        "After layout, check the DOM: is text only in JS without SSR/prerender when the bot should see it?",
        "Don’t fix micro-typos in code comments instead of duplicate titles and thin filters — prioritize impact on index and clicks.",
      ],
      notes: [
        {
          title: "A validator ≠ rankings",
          kind: "tip",
          text: "An HTML validator run is useful hygiene. A green check doesn’t guarantee positions; critical red structure errors are worth fixing.",
        },
      ],
    },
    {
      title: "Key takeaways",
      level: 2,
      paras: [
        "HTML sets meaning and structure for people and bots.",
        "For SEO what matters is head meta, headings, links, and accessible text — not “secret tags.”",
        "Go deeper in separate guides on title, H1, and canonical; this piece is a map.",
      ],
    },
  ],
  closing: [
    "Open three money URLs in page source and check title, H1, and whether text exists in the DOM — faster than arguing whether “search validates every bracket.”",
  ],
  related: [
    "metategi",
    "teg-h1",
    "meta-description",
    "dlina-title",
    "kanonicheskiy-teg",
    "snippet",
  ],
};
