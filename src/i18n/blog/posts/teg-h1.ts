import type { BlogPost } from "../../../data/blog";

/** EN overlay for teg-h1 — same structure as RU JSON. */
export const tegH1En: BlogPost = {
  slug: "teg-h1",
  title: "HTML H1 tag: styling, hierarchy, and SEO",
  date: "2020-12-28",
  category: "SEO",
  cover: "/images/blog/teg-h1/cover-en.webp",
  excerpt:
    "Why H1 matters, how it differs from Title, how to build H1–H6 hierarchy, where to put keywords, and how to check headings on a page without stuffing.",
  lead: [
    "H1 is the main visible page heading: it sets the topic for people and helps search understand the document. It isn’t a “magic TOP-1 tag” — it’s part of a clear structure with Title, subheads, and body copy.",
    "This guide covers how to style H1, how it differs from Title, how to build an H2–H6 hierarchy, typical CMS mistakes, and a quick check. Broader on-page work is in the page-optimization article; here the focus is headings.",
  ],
  faq: [
    {
      q: "How many H1s should a page have?",
      a: "Guide: one meaningful H1 for the main content. Multiple H1s in the template (logo, widgets) are better removed — they confuse people and markup.",
    },
    {
      q: "Must the Title and H1 match word for word?",
      a: "No. Shared meaning, different wording is better: Title for the snippet, H1 for the on-page screen.",
    },
    {
      q: "Is a keyword required in H1?",
      a: "A clear sense of the query/service helps — not exact-match at any cost. Readability beats density.",
    },
    {
      q: "Can I style a div like a heading without H1?",
      a: "Visually yes; for SEO and accessibility it’s worse. A heading should be a real HTML heading by meaning.",
    },
    {
      q: "Are H2–H6 always needed?",
      a: "On a short landing, H1 + paragraphs may suffice. On long copy and catalogs, H2–H3 hierarchy helps scanning a lot.",
    },
    {
      q: "Does H1 rank harder than Title?",
      a: "Both help topic understanding. For SERP clicks, Title/snippet matter more; for understanding the page on-site — H1 and structure.",
    },
    {
      q: "How do I check H1?",
      a: "View source / extension / crawler: look for `<h1>`. In DevTools it’s easy to see if the heading is hidden or duplicated.",
    },
    {
      q: "Can H1 be an image?",
      a: "Bad idea: text in an image is worse for search and accessibility. If the logo is in the header — don’t replace the content H1 with it.",
    },
  ],
  sections: [
    {
      title: "Why you need H1",
      level: 2,
      paras: [
        "H1 answers “what is this page?” above the fold. Users see the topic immediately; the bot gets a strong structural signal next to Title, lead, and main copy.",
        "A perfect H1 alone won’t save thin or stolen content. It works as a chain: one intent → clear heading → text that delivers the promise.",
      ],
      lists: [
        {
          intro: "A good H1:",
          items: [
            "one per main-content page;",
            "reads as a heading, not a keyword sheet;",
            "aligned with Title and URL in meaning;",
            "visible without hunting through template blocks.",
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
        "Title lives in `<head>` and usually becomes the snippet headline. H1 is in `<body>` — people see it on the page. Matching wording one-to-one isn’t required and often hurts CTR: SERP and on-page need different accents.",
        "Example: Title — “Water delivery in Kazan — order from 1 bottle”; H1 on the page — “Drinking water delivery across Kazan”. Shared meaning, not clones.",
      ],
      lists: [
        {
          intro: "Practical tips:",
          items: [
            "Title shorter and “for the click”;",
            "H1 more natural “for reading”;",
            "don’t cram five commercial tails into both;",
            "brand in Title where it works; in H1 if it’s part of the offer.",
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
        "In HTML it’s `<h1>…</h1>`. In a CMS the “post title” field often already outputs as H1 — check the theme: sometimes the post title is H2 while H1 is the logo or hidden utility text.",
        "Style via CSS, not font size on a random `<div>` and not `<b>` instead of hierarchy. For accessibility, heading order matters — not only “big text”.",
      ],
      lists: [
        {
          intro: "Styling:",
          items: [
            "short and to the point (often ~70–90 characters, no hard cap);",
            "no ALL CAPS and “!!!!!”;",
            "no nested “just in case” links inside H1;",
            "don’t hide H1 with `display:none` for SEO — pointless and risky.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
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
            "reflects page intent;",
            "doesn’t clone Title verbatim;",
            "no city×service×“cheap”×“24/7” in one line unnecessarily;",
            "aligned with the first paragraph.",
          ],
        },
      ],
      links: [
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "H1–H6 hierarchy",
      level: 2,
      paras: [
        "Think table of contents: H1 is the document topic, H2 large blocks, H3 subsections under H2. Skipping levels “because the type size looks nice” hurts scanning and accessibility.",
        "H4–H6 are rarer on marketing sites; if you use them — keep nesting logic. On a product card often: H1 = name, H2 = description / specs / reviews.",
      ],
      lists: [
        {
          intro: "Anti-patterns:",
          items: [
            "five H1s in the template;",
            "an H2 higher in meaning than a “lost” H1;",
            "all subheads one style with no heading tags;",
            "the same H1 on pagination “page 2” with no clarification.",
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
        "Spot checks: View Source or inspector — search `h1`. In bulk: a crawler (Screaming Frog and peers) — H1 column, duplicates, empties. In webmaster panels spot-check problem URLs after a template change.",
        "After a CMS theme swap, recheck home, product card, category, and a blog post — templates often differ.",
      ],
      lists: [
        {
          intro: "What to log in the audit:",
          items: [
            "pages with no H1;",
            "pages with 2+ H1s;",
            "duplicate H1s across URLs;",
            "H1 = Title word for word sitewide (template-spam signal).",
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
      notes: [
        {
          title: "SEO timelines",
          kind: "tip",
          text: "Clean H1 hierarchy is on-page hygiene. Rankings for a commercial core are still planned over 2–6 months after prep — not “fix H1 and hit TOP next week”.",
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
