import type { BlogPost } from "../../../data/blog";

/** EN overlay for kartinka-ssylka — same structure as RU JSON. */
export const kartinkaSsylkaEn: BlogPost = {
  slug: "kartinka-ssylka",
  title: "Image link: how to make an image clickable",
  date: "2021-09-14",
  category: "SEO",
  cover: "/images/blog/kartinka-ssylka/cover-en.webp",
  excerpt:
    "How to wrap an image in a link in HTML and an editor, why alt matters, why your own files beat hotlinking, and how not to kill page speed with banners.",
  lead: [
    "An image link is a picture that leads to a URL on click: a banner, a header logo, a gallery preview. In HTML that’s `<a href=\"…\"><img …></a>`.",
    "Below — when to do it, how to mark up the code, which attributes matter, and how an image link differs from a text link for SEO and UX. Link types basics are in sibling articles.",
  ],
  faq: [
    {
      q: "Is a text link better than an image for SEO?",
      a: "For passing anchor meaning — usually yes: text is unambiguous. An image needs clear alt and context. Menu navigation is more often text.",
    },
    {
      q: "Is alt required?",
      a: "Yes for accessibility and clarity when the image carries meaning. For purely decorative — empty alt=\"\", but then don’t make them the only path to an important section.",
    },
    {
      q: "Can I link to someone else’s image by URL?",
      a: "Technically yes (hotlink); in practice bad: rights, speed, their CDN may serve a stub. Host files yourself and optimize them.",
    },
    {
      q: "Do width and height speed up the site?",
      a: "They reserve layout space (fewer shifts). The file itself doesn’t get lighter — you need compression, a modern format, and a sensible pixel size.",
    },
    {
      q: "Is an image link the same as a banner?",
      a: "A banner is a special case: an ad creative with a link. Same rules: file weight, clear offer, don’t cover content.",
    },
  ],
  sections: [
    {
      title: "Why people use image links",
      level: 2,
      paras: [
        "Visuals catch the eye faster than text: logo to home, product preview to a card, map to contacts, promo banner to a landing.",
        "For robots, text anchors and structure matter more. Images support UX; don’t hang the whole site’s internal linking on them.",
      ],
      lists: [
        {
          intro: "Good scenarios:",
          items: [
            "logo → homepage;",
            "preview in a catalog / blog;",
            "promo banner → landing;",
            "lightbox/gallery (click opens larger — UX, not necessarily an SEO anchor).",
          ],
        },
      ],
      links: [
        {
          label: "What a link is",
          href: "/en/blog/chto-takoe-ssylka/",
        },
        {
          label: "Clickable link",
          href: "/en/blog/klikabelnaya-ssylka/",
        },
      ],
    },
    {
      title: "HTML: a + img wrapper",
      level: 2,
      paras: [
        "Basic template: `<a href=\"/catalog/\"><img src=\"/images/banner.webp\" alt=\"Pump catalog\" width=\"600\" height=\"200\"></a>`.",
        "In a CMS usually: select the image → “insert link” → set the URL. Check that href is complete and goes where it should (https, no typos).",
      ],
      lists: [
        {
          intro: "Useful img attributes:",
          items: [
            "`src` — path to the file on your hosting;",
            "`alt` — meaning for screen readers and if the file fails;",
            "`width` / `height` — proportions in the layout;",
            "`loading=\"lazy\"` — for below-the-fold banners (not for the LCP hero).",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "For the main first-screen banner don’t use lazy if it’s the LCP element: you’ll slow first paint.",
        },
      ],
    },
    {
      title: "Your own files and weight",
      level: 2,
      paras: [
        "Upload images to your server or CDN. Someone else’s hotlink breaks when the donor changes the URL or blocks external requests.",
        "Compress: WebP/AVIF where the pipeline supports it, correct size for the slot (not 4000px in a 300px column). width/height attributes don’t replace file optimization.",
      ],
      lists: [
        {
          intro: "Weight checklist:",
          items: [
            "unique/own creatives;",
            "compression without mushing banner text;",
            "don’t stack a dozen heavy banners on one page;",
            "check mobile width.",
          ],
        },
      ],
    },
    {
      title: "UX and SEO hygiene",
      level: 2,
      paras: [
        "Caption and alt should match the link destination. “Click here” on an image with no alt is a weak pattern.",
        "Hover effects (shadow, opacity) are fine if they don’t hurt touch taps: the tap target must be large enough.",
      ],
      lists: [
        {
          intro: "Placement rules:",
          items: [
            "moderation: banners don’t cover text and forms;",
            "match the page topic;",
            "for menus and key CTAs also add a text link nearby;",
            "don’t present ads as “just a picture” where labeling is required.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Believing a “unique image link” alone will get you to TOP. It’s a navigation and CTR element; rankings move with content, tech, and demand — not one banner.",
        },
      ],
    },
    {
      title: "Short takeaway",
      level: 2,
      paras: [
        "An image link is handy for visual jumps: wrap img in `<a>`, set alt, and serve a light file from your hosting. For meaning and SEO, text links are stronger — combine them; don’t replace all navigation with images.",
      ],
      lists: [],
    },
  ],
};
