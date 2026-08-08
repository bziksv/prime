import type { BlogPost } from "../../../data/blog";

/** EN overlay for teg-h1 — same structure as RU JSON. */
export const tegH1En: BlogPost = {
  slug: "teg-h1",
  title: "The HTML H1 tag: styling, hierarchy, and SEO",
  date: "2020-12-28",
  category: "SEO",
  cover: "/images/blog/teg-h1/cover-en.webp",
  excerpt:
    "Why H1 matters, how it differs from the title tag, how to build an H1–H6 hierarchy, where keywords fit, and how to check headings without stuffing.",
  lead: [
    "H1 is the main visible page heading: it sets the topic for people and helps search understand the document. It is not a magic ranking switch — it is part of a clear structure with the title tag, subheads, and body copy.",
    "Below: how to style H1, how it differs from Title, how to build an H2–H6 hierarchy, typical CMS mistakes, and a quick check. Broader on-page work lives in the page-optimization article; here the focus is headings.",
  ],
  faq: [
    {
      q: "How many H1s should a page have?",
      a: "Aim for one meaningful H1 on the main content. Multiple H1s in the template (logo, widgets) are better removed — they confuse people and markup.",
    },
    {
      q: "Must Title and H1 match word for word?",
      a: "No. Shared meaning, different wording is better: Title for the snippet, H1 for the on-page screen.",
    },
    {
      q: "Is a keyword required in H1?",
      a: "A clear sense of the query or service helps — not exact-match at any cost. Readability beats density.",
    },
    {
      q: "Can you style a div like a heading without H1?",
      a: "Visually yes; for SEO and accessibility it is worse. A heading should be a real HTML heading by meaning.",
    },
    {
      q: "Are H2–H6 always needed?",
      a: "On a short landing, H1 plus paragraphs may suffice. On long copy and catalogs, an H2–H3 hierarchy helps scanning a lot.",
    },
    {
      q: "Does H1 rank harder than Title?",
      a: "Both help topic understanding. For clicks from the results, Title and the snippet matter more; for understanding the page on-site — H1 and structure.",
    },
    {
      q: "How do you check H1?",
      a: "View source, an extension, or a crawler: look for `<h1>`. In DevTools it is easy to see if the heading is hidden or duplicated.",
    },
    {
      q: "Can H1 be an image?",
      a: "Bad idea: text in an image is worse for search and accessibility. If the logo is in the header, do not replace the content H1 with it.",
    },
  ],
  sections: [
    {
      title: "Why you need H1",
      level: 2,
      paras: [
        "H1 answers “what is this page?” above the fold. Users see the topic immediately; the bot gets a strong structural signal next to Title, lead, and main copy.",
        "A perfect H1 alone will not save thin or stolen content. It works as a chain: one intent → clear heading → text that delivers the promise.",
      ],
      lists: [
        {
          intro: "A good H1:",
          items: [
            "one per main-content page",
            "reads as a heading, not a keyword sheet",
            "aligned with Title and URL in meaning",
            "visible without hunting through template blocks",
          ],
        },
      ],
      links: [
        {
          label: "Optimizing a page for a query",
          href: "/en/blog/optimizatsiya-stranitsy/",
        },
      ],
    },
    {
      title: "H1 and Title: the difference",
      level: 2,
      paras: [
        "Title lives in `<head>` and usually becomes the snippet headline. H1 is in `<body>` — people see it on the page. Matching wording one-to-one is not required and often hurts CTR: the results and the page need different accents.",
        "Example: Title — “Water delivery in Kazan — order from 1 bottle”; H1 on the page — “Drinking water delivery across Kazan.” Shared meaning, not clones.",
      ],
      lists: [
        {
          intro: "In practice:",
          items: [
            "Title shorter and written for the click",
            "H1 more natural for reading on the page",
            "do not cram five commercial tails into both",
            "brand in Title where it helps; in H1 if it is part of the offer",
          ],
        },
      ],
      links: [
        {
          label: "SERP snippet",
          href: "/en/blog/snippet/",
        },
      ],
    },
    {
      title: "How to add and style H1",
      level: 2,
      paras: [
        "In HTML it is `<h1>…</h1>`. In a CMS the “post title” field often already outputs as H1 — check the theme: sometimes the post title is H2 while H1 is the logo or hidden utility text.",
        "Style via CSS, not font size on a random `<div>` and not `<b>` instead of hierarchy. For accessibility, heading order matters — not only “big text.”",
      ],
      lists: [
        {
          intro: "Styling:",
          items: [
            "short and to the point (often about 70–90 characters, no hard cap)",
            "no ALL CAPS and “!!!!!”",
            "no nested “just in case” links inside H1",
            "do not hide H1 with `display:none` for SEO — pointless and risky",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Common mistake",
          text: "Making H1 from the header logo on every URL. Then hundreds of pages share one “main” heading — and page meaning is lost.",
        },
      ],
    },
    {
      title: "Keywords in H1 without stuffing",
      level: 2,
      paras: [
        "State the main topic the way a person would: service, product category, article question. Secondary wording goes to H2–H3 and body copy.",
        "Stuffing (“buy cheap wholesale price moscow”) hurts trust and often the snippet. One clear H1 beats three keywords separated by commas.",
      ],
      lists: [
        {
          intro: "Wording checklist:",
          items: [
            "reflects page intent",
            "does not clone Title verbatim",
            "no city × service × “cheap” × “24/7” in one line without need",
            "aligned with the first paragraph",
          ],
        },
      ],
      links: [
        {
          label: "Semantic keyword set",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "H1–H6 hierarchy",
      level: 2,
      paras: [
        "Think table of contents: H1 is the document topic, H2 large blocks, H3 subsections under H2. Skipping levels “because the type size looks nice” hurts scanning and accessibility.",
        "H4–H6 are rarer on marketing sites; if you use them, keep nesting logic. On a product card often: H1 = name, H2 = description / specs / reviews.",
      ],
      lists: [
        {
          intro: "Anti-patterns:",
          items: [
            "five H1s in the template",
            "an H2 higher in meaning than a “lost” H1",
            "all subheads one style with no heading tags",
            "the same H1 on pagination “page 2” with no clarification",
          ],
        },
      ],
      links: [
        {
          label: "Website layout basics",
          href: "/en/blog/verstka-saytov/",
        },
      ],
    },
    {
      title: "How to check H1 on the site",
      level: 2,
      paras: [
        "Spot checks: View Source or inspector — search `h1`. In bulk: a crawler (Screaming Frog and peers) — H1 column, duplicates, empties. In webmaster panels, spot-check problem URLs after a template change.",
        "After a CMS theme swap, recheck home, product card, category, and a blog post — templates often differ.",
      ],
      lists: [
        {
          intro: "What to log in the audit:",
          items: [
            "pages with no H1",
            "pages with two or more H1s",
            "duplicate H1s across URLs",
            "H1 = Title word for word sitewide (template-spam signal)",
          ],
        },
      ],
      links: [
        {
          label: "Page source code",
          href: "/en/blog/ishodnyy-kod/",
        },
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
  ],
  related: [
    "optimizatsiya-stranitsy",
    "snippet",
    "verstka-saytov",
    "semanticheskoe-yadro",
    "tehnicheskiy-seo-audit",
  ],
};
