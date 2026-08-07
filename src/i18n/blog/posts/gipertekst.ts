import type { BlogPost } from "../../../data/blog";

/** EN overlay for gipertekst — same structure as RU JSON. */
export const gipertekstEn: BlogPost = {
  slug: "gipertekst",
  title: "Hypertext: what it is, structure, and why your site needs it",
  date: "2022-01-25",
  category: "SEO",
  cover: "/images/blog/gipertekst/cover-en.webp",
  excerpt:
    "What hypertext is: links, HTML markup, document structure. Why cross-links help a site, an encyclopedia, and an online store.",
  lead: [
    "Hypertext is text with links: you can jump to another fragment, page, or media. The whole web rests on this — from articles to catalogs.",
    "Below — how the idea works, how HTML differs from “plain text”, and what solid internal linking gives a site.",
  ],
  faq: [
    {
      q: "Is hypertext only links?",
      a: "Links are the core. Plus document structure (headings, lists, media) that markup defines — easier to read and index.",
    },
    {
      q: "How is HTML related to hypertext?",
      a: "HTML is the markup language for hypertext documents on the web: tags tell the browser where a paragraph, heading, image, and link are.",
    },
    {
      q: "Why does hypertext matter for SEO?",
      a: "Internal links help crawling and pass weight/meaning between pages. External links guide users and sometimes build trust when relevant.",
    },
    {
      q: "How is it different from a regular PDF?",
      a: "PDFs can have links too, but web hypertext is built for a network of documents, updates, and navigation between URLs.",
    },
    {
      q: "Does a site owner need to know HTML?",
      a: "At a basic level — yes: understand headings, links, and anchors. Deep layout can be delegated, but you should own the structure meaning yourself.",
    },
  ],
  sections: [
    {
      title: "What hypertext is",
      level: 2,
      paras: [
        "A classic example is an encyclopedia: a term leads to another article. On the web it’s the same: menus, product cards, “related materials”, footnotes to sources.",
        "Ted Nelson coined the term: text with branching, not one linear strip from top to bottom.",
      ],
      lists: [
        {
          intro: "Where you meet it:",
          items: [
            "sites and web apps;",
            "wikis and help centers;",
            "electronic catalogs and stores;",
            "product documentation.",
          ],
        },
      ],
    },
    {
      title: "Structure: content and markup",
      level: 2,
      paras: [
        "A hypertext document has two sides. Content — meanings, copy, images. Markup — tags and attributes that explain block roles to the browser.",
        "Tags are usually paired: opening and closing. Paragraph example: `<p>…</p>`. Some are single (e.g. an image). A link is a separate element with a destination address.",
      ],
      lists: [
        {
          intro: "Minimum worth knowing on a site:",
          items: [
            "H1–H3 headings — topic hierarchy;",
            "paragraphs and lists — readability;",
            "`<a href=\"…\">` links — navigation;",
            "anchors — jump to a block on the same page;",
            "image alt — meaning for people and bots.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "Link anchor text should promise the page content (“shipping and payment”), not “here” or “more” with no context.",
        },
      ],
    },
    {
      title: "How it appeared and why it helps",
      level: 2,
      paras: [
        "The link idea is older than the mass internet: books and encyclopedias pointed to other works. The network made the jump instant.",
        "For the user the benefit is simple: less manual search, clear navigation, go deeper only where needed.",
      ],
      lists: [
        {
          intro: "Advantages:",
          items: [
            "logic — a complex topic split into linked nodes;",
            "intuition — predictable jumps;",
            "interactivity — text + media + actions;",
            "time saved — no collecting everything by hand via search.",
          ],
        },
      ],
    },
    {
      title: "Hypertext on a commercial site",
      level: 2,
      paras: [
        "In a store and on a corporate site, links are routes to revenue: from article to service, from category to filter, from product card to shipping and payment.",
        "Weak internal linking leaves the user in a dead end. Strong linking shortens the path to a lead and helps search engines understand structure.",
      ],
      lists: [
        {
          intro: "Basic rules:",
          items: [
            "the menu mirrors real sections;",
            "in copy — links to related services/products;",
            "breadcrumbs and related blocks;",
            "don’t spam dozens of identical anchors to one URL.",
          ],
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
      title: "Common mistakes",
      level: 2,
      paras: [
        "Meaningless links, broken URLs, clicks only from an image with no text, a wall of copy with no headings — all of that breaks hypertext as a system.",
      ],
      lists: [
        {
          intro: "Check:",
          items: [
            "all important pages reachable in 2–3 clicks;",
            "no mass 404s on old links;",
            "mobile links easy to tap;",
            "PDFs and external files labeled if you link to them.",
          ],
        },
      ],
      notes: [
        {
          title: "Next on the topic",
          text: "Separate blog pieces cover clickable links and HTML in an SEO context in more depth — here we lock the concept frame.",
        },
      ],
    },
  ],
};
