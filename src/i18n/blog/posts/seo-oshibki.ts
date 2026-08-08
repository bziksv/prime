import type { BlogPost } from "../../../data/blog";

/** EN overlay for seo-oshibki — same structure as RU JSON. */
export const seoOshibkiEn: BlogPost = {
  slug: "seo-oshibki",
  title: "The most common SEO mistakes on a website",
  date: "2019-08-19",
  category: "SEO",
  cover: "/images/blog/seo-oshibki/cover-en.webp",
  excerpt:
    "Typical misses in titles and descriptions, headings, links, markup, and HTTPS — how to find them and what to fix first, without a “page one in a week” fantasy.",
  lead: [
    "Most SEO mistakes on real sites aren’t a mysterious algorithm penalty. They’re everyday tech and snippets: truncated titles, duplicate meta, broken links, messy H1s, mixed content after moving to HTTPS.",
    "Below are the risk zones that show up in audits and a practical fix order. Cleaning errors is site prep. Building rankings for the keyword set is planned over months after systematic work starts — not the week you tick a checklist green.",
  ],
  faq: [
    {
      q: "Where should an error audit start?",
      a: "Whatever blocks crawl or clicks first: status codes, indexing, HTTPS and mixed content, unique titles/H1s, broken links. Markup and cosmetics come after.",
    },
    {
      q: "Do meta keywords still matter?",
      a: "For Google and Yandex, almost no influence like the old days. Don’t spend budget on keyword lists — invest in title, description, and the page itself.",
    },
    {
      q: "Is a long title a disaster?",
      a: "Not automatically a penalty, but the snippet will truncate. Put the meaning at the start. Length guidelines live in the separate title-length article.",
    },
    {
      q: "Is it bad if the title equals the description?",
      a: "Yes. You lose the “headline vs teaser” difference and weaken CTR. Give each URL a unique pair.",
    },
    {
      q: "Are Open Graph and Schema required?",
      a: "OG/Twitter help social sharing. Schema helps rich results when the page type fits (organization, product, FAQ). Missing them doesn’t “kill” SEO — you just leave opportunities on the table.",
    },
    {
      q: "Does the H1 have to match the title tag?",
      a: "Not word for word. One clear H1 on the page; the title is for search results. Matching every character site-wide isn’t the goal.",
    },
    {
      q: "Which audit tools should I use?",
      a: "Webmaster tools / Search Console, a crawler (Screaming Frog and peers), plus selective manual checks. Paid “site audit” modules are optional.",
    },
    {
      q: "I fixed the errors — when do rankings come?",
      a: "Prep and cleanup often take weeks to about a month. Moving the keyword set toward page one is planned over 2–6 months after systematic work starts.",
    },
  ],
  sections: [
    {
      title: "Where sites mess up most often",
      level: 2,
      paras: [
        "Audit slices usually surface meta and markup first, then headings and links, then HTTPS and certificates. Status codes, speed, and thin content matter too — on some projects they just hide until you dig deeper.",
        "Don’t chase a tool’s green score. Prioritize what breaks indexing, clicks, or trust: broken URLs, mixed content, empty or duplicated snippets on money pages.",
      ],
      lists: [
        {
          intro: "Review order:",
          items: [
            "availability and status codes",
            "HTTPS and mixed content",
            "unique titles, descriptions, and H1s",
            "broken links and redirect chains",
            "markup and social snippets — as needed",
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
    {
      title: "Title, description, and outdated keywords",
      level: 2,
      paras: [
        "Title and description shape the snippet and how clearly the topic reads. Beginners stuff every keyword in: the headline truncates and the meaning dies. A title that’s too short is weak too — people can’t tell where the result leads.",
        "Classic meta keywords barely work in major engines — don’t build strategy on them. Write the description as a human teaser: benefit and difference, not a pasted copy of the title.",
      ],
      lists: [
        {
          intro: "Meta hygiene:",
          items: [
            "unique title and description on important URLs",
            "main meaning and key phrase near the start of the title",
            "no empty “best / #1” fluff for cosmetics",
            "don’t copy a competitor’s title line for line",
            "don’t reuse the title as the description",
          ],
        },
      ],
      links: [
        {
          label: "Title length",
          href: "/en/blog/dlina-title/",
        },
      ],
    },
    {
      title: "Links: broken, redirects, wasted equity",
      level: 2,
      paras: [
        "Broken internal and external links hurt crawl and UX. Long 301 chains dilute signals and slow crawling. Irrelevant anchors — or links to sections that vanished after a redesign — are classic post-migration damage.",
        "Check the templates: menu, footer, breadcrumbs, “related products.” A mass crawl beats clicking the site by hand.",
      ],
      lists: [
        {
          intro: "Link minimum:",
          items: [
            "no 404s on priority templates",
            "redirect chains shortened",
            "301s from old URLs after renames",
            "external “donors” not pointing at mirrors or errors",
          ],
        },
      ],
      links: [
        {
          label: "Broken links",
          href: "/en/blog/bitye-ssylki/",
        },
        {
          label: "HTTP status codes",
          href: "/en/blog/kod-statusa-http/",
        },
      ],
    },
    {
      title: "Markup: Open Graph, Twitter Card, Schema",
      level: 2,
      paras: [
        "Without Open Graph, social platforms often grab a random image and a scrap of text — sharing CTR suffers. Schema.org / JSON-LD helps rich results when the page type fits (not “markup for markup’s sake”).",
        "The real mistake is broken or contradictory markup in Search Console or validators. Less and correct beats more and conflicting.",
      ],
      lists: [
        {
          intro: "Practice:",
          items: [
            "OG on key landings and articles",
            "JSON-LD that matches the actual page type",
            "validate in platform tools",
            "don’t ship conflicting microdata side by side",
          ],
        },
      ],
      links: [
        {
          label: "Open Graph",
          href: "/en/blog/open-graph/",
        },
        {
          label: "Snippets and markup",
          href: "/en/blog/snippet/",
        },
      ],
    },
    {
      title: "H1 and heading hierarchy",
      level: 2,
      paras: [
        "A page with no H1 — or several competing ones — muddies the structure. The H1 should state the document topic; then use logical H2/H3 without skipping levels for design fashion.",
        "Exact H1–title match isn’t required. Both should honestly describe the page and not fight neighboring URLs for the same intent.",
      ],
      lists: [
        {
          intro: "Check the template:",
          items: [
            "one primary H1",
            "no chaotic skips (H2 → H4 with no reason)",
            "H1 not hidden in CSS as empty decor",
            "no identical H1s across dozens of product cards with no differences",
          ],
        },
      ],
      notes: [
        {
          title: "Tied to duplicates",
          text: "Identical titles/H1s on different URLs often signal duplicates or cannibalization. See the separate materials on those.",
        },
      ],
    },
    {
      title: "HTTPS and mixed content",
      level: 2,
      paras: [
        "Incomplete HTTPS migrations leave scripts, images, or forms on http:// — the browser warns, trust drops, UX suffers. After migration, check absolute URLs in content and templates, relative paths, the http→https redirect, and a canonical pointing at https.",
        "Certificate failures (expired, wrong name, broken chain) show a security warning and hit behavior. Monitor SSL expiry and correctness.",
      ],
      lists: [
        {
          intro: "After turning on HTTPS:",
          items: [
            "301 from HTTP to HTTPS",
            "no mixed content on key templates",
            "canonical and sitemap on https",
            "external mentions updated where you can",
          ],
        },
      ],
      links: [
        {
          label: "HTTPS and SEO",
          href: "/en/blog/https-seo/",
        },
        {
          label: "SSL certificate",
          href: "/en/blog/ssl-sertifikat/",
        },
      ],
    },
    {
      title: "How to stay on top of it — without waiting for miracles",
      level: 2,
      paras: [
        "On a rhythm: Webmaster and Search Console, a crawl after major releases, selective snippet checks on money queries. One-off “audits for the checkbox” with no fix backlog are useless.",
        "Technical cleanup is the base. Then keywords, content, and links do the real work. A green tool score is not the same as ranking for your keyword set.",
      ],
      lists: [
        {
          intro: "Cadence:",
          items: [
            "after deploy — a smoke crawl",
            "once a month — review errors in the panels",
            "a backlog prioritized by business impact",
            "don’t confuse cleanup with promising ranks “next week”",
          ],
        },
      ],
      links: [
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
        {
          label: "Screaming Frog",
          href: "/en/blog/screaming-frog/",
        },
      ],
    },
  ],
  related: [
    "tehnicheskiy-seo-audit",
    "dlina-title",
    "bitye-ssylki",
    "https-seo",
    "dubli-stranits",
    "samostoyatelnoe-seo",
  ],
};
