import type { BlogPost } from "../../../data/blog";

/** EN overlay for seo-oshibki — same structure as RU JSON. */
export const seoOshibkiEn: BlogPost = {
  slug: "seo-oshibki",
  title: "The most common SEO mistakes on a website",
  date: "2019-08-19",
  category: "SEO",
  cover: "/images/blog/seo-oshibki/cover-en.webp",
  excerpt:
    "Typical misses in title and description, headings, links, markup, and HTTPS — how to find them and what to fix first, without a “TOP in a week” cult.",
  lead: [
    "Most SEO mistakes on real sites aren’t an “algorithm penalty” — they’re everyday tech and snippets: truncated titles, duplicate meta, broken links, H1 confusion, mixed content after moving to HTTPS.",
    "Below — common risk zones from audits and a practical fix order. Fixing errors is part of site prep; core ranking buildup planned over months after work starts.",
  ],
  faq: [
    {
      q: "Where to start an error audit?",
      a: "What’s critical for crawl and click: status codes, indexing, HTTPS/mixed content, unique title/H1, broken links. Then markup and cosmetics.",
    },
    {
      q: "Are meta keywords still needed?",
      a: "For Yandex and Google almost no influence like before. Don’t spend resource on keyword lists; better title, description, and content.",
    },
    {
      q: "Is a long title a disaster?",
      a: "Not always a sanction, but the snippet will truncate. Keep meaning at the start; length guides are in the separate title-length article.",
    },
    {
      q: "Is title = description bad?",
      a: "Yes: you lose the “headline vs teaser” difference and weaken CTR. Make unique pairs per URL.",
    },
    {
      q: "Are Open Graph and Schema required?",
      a: "OG/Twitter — for social sharing. Schema — for fitting types (organization, product, FAQ). Absence doesn’t “kill” SEO, but you miss snippet opportunities.",
    },
    {
      q: "Must H1 match title?",
      a: "Not word-for-word. One clear H1 on the page; title is for the SERP. Matching every character site-wide isn’t the goal.",
    },
    {
      q: "Which audit tool?",
      a: "Webmaster/GSC + a crawler (Screaming Frog and peers) + selective manual checks. Paid “site audit” modules are optional.",
    },
    {
      q: "Fixed the errors — when TOP?",
      a: "Prep and cleanup — a guide of weeks–month. Core TOP buildup planned 2–6 months after systematic work starts.",
    },
  ],
  sections: [
    {
      title: "Where people err most often",
      level: 2,
      paras: [
        "Audit slices most often surface meta and markup issues, then headings and links, then HTTPS/certificates. Status codes, speed, and thin content matter too, but on some projects their share in the report is smaller — until you dig deeper.",
        "Don’t chase a service’s green score. Priority: what breaks index, click, or trust (broken URLs, mixed content, empty/duplicate snippets on money pages).",
      ],
      lists: [
        {
          intro: "Review order:",
          items: [
            "availability and status codes;",
            "HTTPS and mixed content;",
            "title / description / H1 uniqueness;",
            "broken and redirect chains;",
            "markup and social snippets — as needed.",
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
        "Title and description affect the snippet and topic clarity. A beginner mistake is stuffing maximum keywords: the headline truncates, meaning is lost. A too-short title is weak too: unclear where the result leads.",
        "Classic meta keywords barely work in major search engines — don’t build strategy on them. Write description as a human teaser: benefit and difference, without pasting the title.",
      ],
      lists: [
        {
          intro: "Meta hygiene rules:",
          items: [
            "unique title and description on important URLs;",
            "main meaning and key — closer to the start of title;",
            "no fluff like “best / #1” for cosmetics;",
            "don’t copy a competitor’s title one-to-one;",
            "don’t duplicate title as the description text.",
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
      title: "Links: broken, redirects, “empty” equity",
      level: 2,
      paras: [
        "Broken internal and external links hurt crawl and UX. Long 301 chains dilute signals and slow crawl. Links with irrelevant anchors or to missing sections after a redesign are a classic post-migration issue.",
        "Check templates: menu, footer, breadcrumbs, “similar products”. A mass crawl is faster than clicking the site by hand.",
      ],
      lists: [
        {
          intro: "Link minimum:",
          items: [
            "no 404s on priority templates;",
            "redirect chains shortened;",
            "after URL changes — 301 from old addresses;",
            "external “donors” don’t point to mirrors/errors.",
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
        "Without Open Graph, social networks often pick a random image and text scrap — sharing CTR suffers. Schema.org / JSON-LD helps rich results where the page type fits (not “markup for markup’s sake”).",
        "The mistake is broken or contradictory markup (in GSC/validation extensions). Better less, but correct.",
      ],
      lists: [
        {
          intro: "Practice:",
          items: [
            "OG on key landings and articles;",
            "JSON-LD by actual page type;",
            "check in platform tools;",
            "don’t duplicate conflicting microdata.",
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
        "A page without an H1 or with several competing H1s makes structure harder to understand. The H1 should reflect the document topic; then logical H2/H3 without level “jumps” for design’s sake.",
        "Exact H1–title match isn’t required. Both should honestly describe the page and not fight neighboring URLs for the same intent.",
      ],
      lists: [
        {
          intro: "Check the template:",
          items: [
            "one primary H1;",
            "headings not skipped chaotically (H2 → H4 without sense);",
            "H1 not hidden in CSS as decor without text;",
            "no cannibalization of identical H1s on dozens of cards with no differences.",
          ],
        },
      ],
      notes: [
        {
          title: "Link to duplicates",
          kind: "tip",
          text: "Identical title/H1 on different URLs is a common symptom of duplicates or cannibalization. See the separate materials.",
        },
      ],
    },
    {
      title: "HTTPS and mixed content",
      level: 2,
      paras: [
        "Incomplete HTTPS migration: some scripts, images, or forms stay on http:// — the browser complains, trust drops, UX suffers. After migration check absolute URLs in content and templates, relative paths, http→https redirect, and canonical to the https version.",
        "Certificate failures (expired, wrong name, chain) show a security warning and hit behavior. Monitor SSL term and correctness.",
      ],
      lists: [
        {
          intro: "After enabling HTTPS:",
          items: [
            "301 from HTTP to HTTPS;",
            "no mixed content on key templates;",
            "canonical and sitemap on https;",
            "external mentions updated where possible.",
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
      title: "How to control without waiting for miracles",
      level: 2,
      paras: [
        "Regularly: Webmaster and Search Console, a crawl after major releases, selective snippet review on money queries. One-off “audits for the checkbox” without a fix backlog are useless.",
        "Fixing tech is the base. Next come semantics, content, and links. It’s a mistake to think a service’s green checklist equals TOP for the core.",
      ],
      lists: [
        {
          intro: "Rhythm:",
          items: [
            "after deploy — a smoke crawl;",
            "once a month — error review in cabinets;",
            "a backlog prioritized by business impact;",
            "don’t confuse cleanup with promising ranks “next week”.",
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
