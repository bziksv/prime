import type { BlogPost } from "../../../data/blog";

/** EN overlay for mixed-content — same structure as RU JSON. */
export const mixedContentEn: BlogPost = {
  slug: "mixed-content",
  title: "Mixed content: HTTP on an HTTPS site and SEO",
  date: "2020-03-02",
  category: "SEO",
  cover: "/images/blog/mixed-content/cover-en.webp",
  excerpt:
    "What mixed content is on an HTTPS site: active and passive HTTP assets, how it hurts, how to find it in DevTools, and how to fix it — without a cult of the “green padlock” or outdated Chrome screenshots.",
  lead: [
    "Mixed content is when a page opens over HTTPS but some resources (images, scripts, styles, iframes) load over HTTP. The browser warns and blocks active content — layout and trust break.",
    "Below — mixed-content types, SEO impact via UX, and how to fix it. Moving to HTTPS and certificate types live in neighboring pieces; here the focus is “holes” after the migration.",
  ],
  faq: [
    {
      q: "Is this a separate ranking factor?",
      a: "There’s no direct “mixed content score.” It hurts via blocks, warnings, bounce, and messy mirror indexing. Clean HTTPS is hygiene.",
    },
    {
      q: "How does active differ from passive?",
      a: "Passive — images, video, fonts (often a warning). Active — scripts, CSS, iframes (more often blocked and higher risk).",
    },
    {
      q: "Are relative URLs (/img/a.jpg) a problem?",
      a: "Usually no: they inherit the page protocol. Absolute http:// and hard-coded URLs in CSS/JS break things.",
    },
    {
      q: "Is an “auto-replace” plugin enough?",
      a: "Sometimes as a crutch. More reliable: fix sources — CDN/hosting with HTTPS, update templates and content. Backup before mass edits.",
    },
    {
      q: "Will Cloudflare Automatic HTTPS Rewrites fix everything?",
      a: "It helps if the resource is actually available over HTTPS. Simple “rewriting” won’t save something that isn’t reachable on https.",
    },
    {
      q: "Link to SSL and migration?",
      a: "A certificate ≠ a clean page. After 301 to https, check templates for mixed content — see the HTTPS/SEO and SSL pieces.",
    },
  ],
  sections: [
    {
      title: "What counts as mixed content",
      level: 2,
      paras: [
        "An https://… page pulls an http://… resource. Passive: img, picture, video/audio, object subresources, fonts in CSS. Active: script, stylesheet link, iframe, some object uses.",
        "Active is more dangerous: browsers block it more often, and it’s easier to alter page behavior via MitM on the HTTP piece.",
      ],
      lists: [],
    },
    {
      title: "How it hurts SEO and conversion",
      level: 2,
      paras: [
        "Warnings and blocks hurt UX: “Not secure,” empty blocks, broken forms. People leave — behavior signals and leads suffer.",
        "Don’t confuse this with the myth “fix mixed content — instant TOP.” Fix the tech; rankings grow from relevance and demand, not from one padlock in the address bar.",
      ],
      lists: [],
      links: [
        {
          label: "HTTPS and SEO",
          href: "/en/blog/https-seo/",
        },
        {
          label: "Behavioral factors",
          href: "/blog/povedencheskie-faktory/",
        },
      ],
    },
    {
      title: "How to find it",
      level: 2,
      paras: [
        "Open the problem page → DevTools (F12) → Console / Security: Mixed Content warnings and the URL list.",
        "Check key templates: home, product card, cart, contacts, blog. External widgets and old absolute links in content are common culprits.",
      ],
      lists: [],
    },
    {
      title: "How to remove it",
      level: 2,
      paras: [
        "Replace http:// with https:// where the resource is available over HTTPS, or move the file to yourself/a CDN with TLS.",
        "Update internal absolute links in the DB and templates. In CSS/JS hunt hard-coded http URLs. If HTTPS isn’t available — remove or replace.",
      ],
      lists: [
        {
          intro: "Checklist after fixes:",
          items: [
            "Console clean of mixed content on key URLs;",
            "forms and analytics/payment scripts work;",
            "canonical and sitemap are https-only;",
            "no http↔https chains on internal links.",
          ],
        },
      ],
      links: [
        {
          label: "SSL certificate",
          href: "/en/blog/ssl-sertifikat/",
        },
      ],
      notes: [
        {
          title: "Browser UI",
          text: "“Padlock / Not secure” icons change. The guide is no mixed content and a valid certificate — not a 2020 screenshot.",
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "HTTPS page + HTTP resources = mixed content.",
        "Sources and templates first, CDN crutches second.",
        "Trust and UX hygiene — not a “TOP button.”",
      ],
      lists: [],
    },
  ],
  closing: [
    "Walk 5 money URLs in DevTools: if Console is silent about Mixed Content — the HTTPS move is finished; if not — fix resource URLs before fine-tuning snippets.",
  ],
  related: [
    "https-seo",
    "ssl-sertifikat",
    "tehnicheskiy-seo-audit",
    "pered-zapuskom-sayta",
    "seo-oshibki",
    "povedencheskie-faktory",
  ],
};
