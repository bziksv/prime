import type { BlogPost } from "../../../data/blog";

/** EN overlay for chto-takoe-ssylka — same structure as RU JSON. */
export const chtoTakoeSsylkaEn: BlogPost = {
  slug: "chto-takoe-ssylka",
  title: "What a link is: types, anchors, and the role in SEO",
  date: "2021-09-21",
  category: "SEO",
  cover: "/images/blog/chto-takoe-ssylka/cover-en.webp",
  excerpt:
    "Hyperlinks in HTML: internal and external, absolute and relative, anchors and bare links, nofollow. How links help navigation and site crawl.",
  lead: [
    "A link (hyperlink) is a page element that leads to another URL: an article, a file, an anchor, or an external site. In HTML that’s the `<a href=\"…\">` tag.",
    "Below — what a link looks like, which types exist, why anchors matter, and how links tie to crawl and SEO. How to make text clickable is a separate article; here — a concept map.",
  ],
  faq: [
    {
      q: "How is a link different from a URL?",
      a: "A URL is an address. A link is how you go to that address (usually an `<a>` tag with text or an image).",
    },
    {
      q: "What is an anchor?",
      a: "The text (or text substitute) between `<a>` and `</a>` that people click. “Buy a pump” is an anchor; a bare `https://…` is often called a bare/unanchored link.",
    },
    {
      q: "Is nofollow required on every external link?",
      a: "No. Use `nofollow` / `sponsored` / `ugc` by meaning (ads, UGC, untrusted URLs). Useful editorial links to sources are normal practice.",
    },
    {
      q: "Why internal linking?",
      a: "Navigation for users and hints for robots about which URLs matter. Without internal links, deep pages are harder to find.",
    },
    {
      q: "What is a broken link?",
      a: "It points to a missing or wrong address (often 404). It hurts UX and crawl — find them with a crawler and fix them.",
    },
  ],
  sections: [
    {
      title: "How a link works in HTML",
      level: 2,
      paras: [
        "Basic form: `<a href=\"https://example.com/page/\">Link text</a>`. The `href` attribute is required for the jump; between the tags is the anchor. Inside can be an image instead of text.",
        "Robots follow links like a map: discover URLs, queue crawl, index on success. Without links (and a sitemap) new pages are found worse.",
      ],
      lists: [
        {
          intro: "A link can lead to:",
          items: [
            "a site page;",
            "a file (PDF, image);",
            "an `#section` anchor on the same page;",
            "`mailto:` / `tel:` (watch spam);",
            "an external resource.",
          ],
        },
      ],
      links: [
        {
          label: "Clickable link: how to make one",
          href: "/en/blog/klikabelnaya-ssylka/",
        },
        {
          label: "Hypertext",
          href: "/en/blog/gipertekst/",
        },
      ],
    },
    {
      title: "Link classification",
      level: 2,
      paras: [
        "One URL is described from several angles at once: where it goes, how the path is written, whether there’s an anchor, whether the target is alive.",
      ],
      tables: [
        {
          caption: "Main types",
          headers: ["Slice", "Variants", "Note"],
          rows: [
            ["Direction", "Internal / external", "Inside the site vs another domain"],
            ["URL form", "Absolute / relative", "`https://…` vs `/page/`"],
            ["Site profile", "Inbound / outbound", "To you / from you"],
            ["Coverage", "Regular / sitewide", "Sitewide — header, menu, footer"],
            ["State", "Live / broken", "Broken → 404 and trust loss"],
            ["Params", "Static / with query `?`", "Filters and sessions often spawn duplicates"],
          ],
        },
      ],
      lists: [
        {
          intro: "More SEO slang terms:",
          items: [
            "“natural” inbound — no pay for placement;",
            "bought / grey — filter risk zone;",
            "redirect — server/script moves to another URL (equity and meaning depend on 301/302).",
          ],
        },
      ],
    },
    {
      title: "Anchors and bare links",
      level: 2,
      paras: [
        "An anchor helps people see where the click goes and gives robots context. Stuffing the exact keyword into every anchor looks unnatural.",
        "Bare links — “here,” “more,” a naked URL, a logo. They help navigation and a natural profile; you don’t “push” a page with keywords alone.",
      ],
      lists: [
        {
          intro: "Anchor rules:",
          items: [
            "readable language, no “buy buy moscow cheap”;",
            "match the destination page;",
            "dilution: brand, URL, conversational wording;",
            "don’t mask ads as ordinary links without required labeling.",
          ],
        },
      ],
    },
    {
      title: "nofollow and placement",
      level: 2,
      paras: [
        "`rel=\"nofollow\"` (and `sponsored`, `ugc`) tell search not to treat the link as an editorial endorsement. It’s not a forever PageRank off-switch, but an important signal for ads and user content.",
        "Internal linking usually stays follow: you define the structure. Outbound to sources and partners — by meaning; mass “nofollow everything” isn’t required.",
      ],
      lists: [
        {
          intro: "Working hygiene:",
          items: [
            "internal mesh to important services and articles;",
            "outbound — on purpose, without link spam;",
            "inbound — donor quality over quantity;",
            "check broken links after migrations.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Chasing bought anchor links and ignoring usable internal linking on your own site. Internal URL map first — then the external layer.",
        },
      ],
      links: [
        {
          label: "SEO site structure",
          href: "/blog/seo-struktura-sayta/",
        },
      ],
    },
    {
      title: "Short takeaway",
      level: 2,
      paras: [
        "A link is a basic web and crawl element. Tell apart internal/external, absolute/relative, anchored/bare. For SEO you need live internal linking, sane anchors, and caution with bought links. How to make a URL clickable — in the active-link article.",
      ],
      lists: [],
    },
  ],
};
