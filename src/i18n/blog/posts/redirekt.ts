import type { BlogPost } from "../../../data/blog";

/** EN overlay for redirekt — same structure as RU JSON. */
export const redirektEn: BlogPost = {
  slug: "redirekt",
  title: "Site redirects: 301 vs 302 (and which to use)",
  date: "2021-08-24",
  category: "SEO",
  cover: "/images/blog/redirekt/cover-en.webp",
  excerpt:
    "How 301 differs from 302/307, when to consolidate www and HTTPS, how to avoid redirect chains, and when canonical is the better tool than a redirect.",
  lead: [
    "A redirect is a 3xx server response that sends the browser or crawler to another URL. That’s how you consolidate mirrors, move sections, and fix old links without leaving users on dead pages.",
    "We focus on the codes that matter for SEO, everyday 301 cases, how redirects differ from rel=canonical, and mistakes like chains or sending people to the wrong page. After every change, recheck status codes in `.htaccess` or nginx.",
  ],
  faq: [
    {
      q: "Which redirect type matters most for SEO?",
      a: "301 Moved Permanently — a permanent move. Search engines gradually pass signals to the new URL.",
    },
    {
      q: "When should I use 302 or 307?",
      a: "When the move is temporary (promo, test, maintenance). For a permanent domain or slug change, use 301.",
    },
    {
      q: "Should I redirect, or use a canonical tag?",
      a: "Canonical says “prefer this URL,” but the old one may stay available. A 301 moves the user and signals a move more strongly. For dead URLs after a migration, use 301.",
    },
    {
      q: "Are redirect chains bad for SEO?",
      a: "Yes: A→B→C→D costs speed and sometimes ranking signals. Aim for a single hop: A→C.",
    },
    {
      q: "Do I still need a Host directive in robots.txt?",
      a: "Mirrors and the primary host are set in webmaster tools now. Don’t rely on outdated guides that still push Host in robots.",
    },
  ],
  sections: [
    {
      title: "What redirects do",
      level: 2,
      paras: [
        "The client requests URL A; the server responds with a 3xx and points to B. The browser opens B; crawlers factor the redirect type into crawl and URL consolidation.",
      ],
      lists: [
        {
          intro: "Why sites use them:",
          items: [
            "consolidating http/https and www/non-www;",
            "moving a section or the whole domain;",
            "changing extensions or slugs;",
            "cleaning extra slashes and junk URLs.",
          ],
        },
      ],
    },
    {
      title: "301, 302, 307 — which to use",
      level: 2,
      paras: [
        "301 means “moved permanently”—the main tool for consolidations and migrations. 302 Found and 307 Temporary Redirect are temporary; ranking signals more often stay with the source URL.",
        "Other 3xx codes (300, 303, 304, 305…) rarely need hand-tuning in day-to-day SEO—they’re about cache, proxies, or content negotiation. Don’t confuse them with 301.",
      ],
      tables: [
        {
          caption: "Quick overview",
          headers: ["Code", "Meaning", "Typical case"],
          rows: [
            ["301", "Permanent", "New slug, new domain, https"],
            ["302 / 307", "Temporary", "Promo, A/B, maintenance"],
            ["canonical", "Not a redirect", "Duplicates that should stay open"],
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "Old claims that “link juice will transfer automatically” are outdated folklore. Watch indexing in Search Console / webmaster tools and traffic to the new URL.",
        },
      ],
    },
    {
      title: "When to use 301",
      level: 2,
      paras: [
        "Consolidate mirrors to one canonical host (HTTPS plus your chosen www variant). Otherwise search sees different URLs with the same content.",
        "For a site or section move: map old→new URLs and avoid long chains. A CMS migration that keeps URL meaning should also 301 from the old addresses.",
      ],
      lists: [
        {
          intro: "Checklist after setup:",
          items: [
            "homepage and 5–10 key URLs resolve in one hop;",
            "no redirects to a 404;",
            "sitemap updated to final URLs;",
            "in Search Console / webmaster tools, mark the move or primary mirror after a domain change.",
          ],
        },
      ],
      links: [
        {
          label: "SSL and HTTPS",
          href: "/en/blog/ssl-sertifikat/",
        },
        {
          label: "Removing pages from the index",
          href: "/en/blog/zakrytie-ot-indeksatsii/",
        },
      ],
    },
    {
      title: "How to set them up and verify",
      level: 2,
      paras: [
        "On Apache, rules often live in `.htaccess` (RewriteRule). On nginx, use `return 301` / `rewrite`. Generators help beginners, but always verify the result yourself.",
        "After edits, walk the homepage, key service pages, old bookmarks, and external links. Check the status code in DevTools or with `curl -I`.",
      ],
      lists: [
        {
          intro: "What to avoid:",
          items: [
            "chains of multiple redirects;",
            "301s between pages with different intent (e.g., size/color variants in a catalog);",
            "redirects to an irrelevant or empty page;",
            "temporary 302s where the move is already permanent.",
          ],
        },
      ],
    },
    {
      title: "Redirect vs canonical",
      level: 2,
      paras: [
        '`rel="canonical"` marks the preferred URL among available copies. A user can still open the non-canonical address.',
        "If the old URL shouldn’t exist anymore, use 301. If duplicates are needed for UX (filters, params) but only one should index, prefer canonical plus careful indexing controls.",
      ],
      lists: [],
    },
    {
      title: "Bottom line",
      level: 2,
      paras: [
        "Redirects tidy URLs: for permanent moves use 301, for temporary ones use 302/307, don’t create chains, and don’t swap page intent. Align HTTPS/www mirrors and check responses after every deploy.",
      ],
      lists: [],
    },
  ],
};
