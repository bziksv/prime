import type { BlogPost } from "../../../data/blog";

/** EN overlay for favikon — same structure as RU JSON. */
export const favikonEn: BlogPost = {
  slug: "favikon",
  title: "What a favicon is — and what it’s for",
  date: "2018-05-10",
  category: "Internet marketing",
  cover: "/images/blog/favikon/cover-en.webp",
  excerpt:
    "A favicon is the site icon in the tab, bookmarks, and often in the SERP. Why you need one, which sizes and formats to ship, how to connect it, and how not to spoil the brand with someone else’s gallery image.",
  lead: [
    "A favicon (favourite icon) is the small icon next to the site name in the browser tab, bookmarks, on the desktop, and often in the search snippet. It’s not a “TOP SEO factor” — it’s recognition and a tidy UI.",
    "Below — why to set one, how to make and connect it, and what to watch in the design. Claims like “with a favicon traffic beats competitors” we treat as everyday recognition effect — not a proven traffic lever.",
  ],
  faq: [
    {
      q: "Is a favicon required?",
      a: "Technically the site works without it. In practice an empty square or someone else’s default looks unfinished and is harder to remember.",
    },
    {
      q: "What size do you need?",
      a: "Base — 16×16 and 32×32. For shortcuts and devices, larger sets help (48, 180 for apple-touch, etc.). Often built from one PNG/SVG source.",
    },
    {
      q: "Which format?",
      a: "Modern minimum: PNG and/or SVG + ICO if needed for old clients. GIF/animation is almost never needed and poorly supported.",
    },
    {
      q: "Does it affect rankings?",
      a: "No direct ranking weight. Indirectly it helps recognition in the SERP and bookmarks if the icon reads at small size.",
    },
    {
      q: "How fast does it update in search and the browser?",
      a: "Browsers and CDNs often cache. In the SERP — days to weeks after a change. There’s no hard “exactly one week”.",
    },
    {
      q: "Can you take an icon from a free gallery?",
      a: "Risk of matching another site and breaking rights. Better simplify your logo or a mark from the identity.",
    },
  ],
  sections: [
    {
      title: "Why you need one and what design works",
      level: 2,
      paras: [
        "A favicon helps tell tabs apart among dozens open and recognize the brand in bookmarks. In search (where the icon shows) it strengthens the visual anchor next to the title.",
        "Design: simplicity. Tiny details vanish at 16×16. Better a logo silhouette, a letter monogram, or a simple mark in brand colors — in one system with the site.",
        "For an appliance store you don’t have to “draw a fridge”: a recognizable brand mark is enough. The job is association with the site — not a product catalog in pixels.",
      ],
      lists: [
        {
          intro: "Look checklist:",
          items: [
            "reads on dark and light tabs;",
            "not overloaded with text;",
            "matches identity — not a random stock mark;",
            "a fallback without fine detail exists.",
          ],
        },
      ],
      links: [
        {
          label: "Brand identity",
          href: "/en/blog/aydentika-brenda/",
        },
      ],
    },
    {
      title: "How to install and what to generate with",
      level: 2,
      paras: [
        "Classic: a file at the site root (`/favicon.ico`) and/or explicit links in `<head>`: `rel=\"icon\"` to PNG/SVG, `apple-touch-icon` if needed. Exact syntax depends on CMS and build — check theme docs or the manifest generator.",
        "Online generators (Favicon Generator and peers) are handy to turn one PNG into a size pack. Lists of specific 2018 services go stale fast: pick a current tool and check the source license.",
        "Ready “other people’s favicon galleries” are a bad idea for a commercial site: duplicate and rights risk. No designer — simplify the logo into a square or order a mark with the identity.",
        "After a change, clear browser/CDN cache and wait for webmaster updates. While cache lives, the old icon may still show.",
      ],
      lists: [
        {
          intro: "Minimum for release:",
          items: [
            "32×32 icon (PNG) + SVG when possible;",
            "apple-touch-icon for an iOS shortcut;",
            "check in Chrome/Safari/Firefox tabs;",
            "uniqueness vs niche competitors.",
          ],
        },
      ],
      links: [
        {
          label: "Before launching a site",
          href: "/en/blog/pered-zapuskom-sayta/",
        },
        {
          label: "Website checklist",
          href: "/en/blog/cheklist-sayta/",
        },
      ],
    },
  ],
  related: [
    "aydentika-brenda",
    "pered-zapuskom-sayta",
    "cheklist-sayta",
    "tendentsii-veb-dizayna",
  ],
};
