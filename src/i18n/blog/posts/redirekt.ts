import type { BlogPost } from "../../../data/blog";

/** EN overlay for redirekt — same structure as RU JSON. */
export const redirektEn: BlogPost = {
  slug: "redirekt",
  title: "Site redirects: 301, 302, and when to use which",
  date: "2021-08-24",
  category: "SEO",
  cover: "/images/blog/redirekt/cover-en.webp",
  excerpt:
    "What a redirect is, how 301 differs from 302/307, when to merge www and HTTPS, how not to spawn chains, and how a redirect differs from rel=canonical.",
  lead: [
    "A redirect is when the server answers with a 3xx code and sends the browser/robot to another URL. That’s how you merge mirrors, move sections, and fix old links.",
    "Below — practical SEO types, typical 301 jobs, the difference from canonical, and mistakes (chains, redirecting “past the meaning”). Check `.htaccess`/nginx code after every change.",
  ],
  faq: [
    {
      q: "Which redirect is the main one for SEO?",
      a: "301 Moved Permanently — a permanent move. Search engines over time transfer signals to the new URL.",
    },
    {
      q: "When to use 302 or 307?",
      a: "When the move is temporary (promo, test, maintenance). For a domain or slug change forever — 301.",
    },
    {
      q: "Redirect or canonical?",
      a: "Canonical says “prefer this URL,” but the old one may stay available. 301 moves the user and signals a move more strongly. For dead addresses after a migration — 301.",
    },
    {
      q: "Are redirect chains harmful?",
      a: "Yes: A→B→C→D lose speed and sometimes signal. Aim for one hop A→C.",
    },
    {
      q: "Do you still need Host in robots.txt?",
      a: "Mirrors and the primary host are set in webmaster tools now. Don’t rely only on outdated guides with Host in robots.",
    },
  ],
  sections: [
    {
      title: "What a redirect is",
      level: 2,
      paras: [
        "The client requests URL A; the server answers “look at B” with a 3xx family code. The browser opens B; the robot factors the redirect type into crawl and consolidation.",
      ],
      lists: [
        {
          intro: "Why on a site:",
          items: [
            "merging http/https and www/non-www;",
            "moving a section or the whole domain;",
            "changing extension/slugs;",
            "removing extra slashes and junk URLs.",
          ],
        },
      ],
    },
    {
      title: "301, 302, 307 — what to use",
      level: 2,
      paras: [
        "301 — “moved forever.” The main tool for merges and migrations. 302 Found and 307 Temporary Redirect — temporary; index weight more often stays on the source URL.",
        "Other 3xx codes (300, 303, 304, 305…) are rarely hand-tuned in day-to-day SEO: cache, proxies, variant choice. Don’t confuse them with 301.",
      ],
      tables: [
        {
          caption: "Types in brief",
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
          text: "Old texts about “TIC and PR will move” are outdated as metrics. Watch indexing in Search Console / webmaster tools and traffic to the new URL.",
        },
      ],
    },
    {
      title: "When to set 301",
      level: 2,
      paras: [
        "Mirror merge: one canonical host (https + chosen www variant). Otherwise search sees different URLs with the same content.",
        "Site or section move: old→new map, no long chains. A CMS change that keeps URL meaning — also via 301 from old addresses.",
      ],
      lists: [
        {
          intro: "Checklist after setup:",
          items: [
            "homepage and 5–10 key URLs do one hop;",
            "no redirect to a 404;",
            "sitemap updated to final addresses;",
            "in Search Console / webmaster tools, mark the move/primary mirror on a domain change.",
          ],
        },
      ],
      links: [
        {
          label: "SSL and HTTPS",
          href: "/en/blog/ssl-sertifikat/",
        },
        {
          label: "Blocking from indexing",
          href: "/en/blog/zakrytie-ot-indeksatsii/",
        },
      ],
    },
    {
      title: "How to configure and check",
      level: 2,
      paras: [
        "On Apache, rules often live in `.htaccess` (RewriteRule). On nginx — `return 301` / `rewrite`. Rule generators help beginners, but always verify the result by hand.",
        "After edits walk the homepage, services, old bookmarks, and external links. Check the status code in DevTools or `curl -I`.",
      ],
      lists: [
        {
          intro: "What to avoid:",
          items: [
            "chains of several redirects;",
            "301 between pages with different meaning (size/color in a catalog);",
            "redirect to an irrelevant or empty page;",
            "temporary 302 where the move is already final.",
          ],
        },
      ],
    },
    {
      title: "Redirect vs canonical",
      level: 2,
      paras: [
        "`rel=\"canonical\"` marks the preferred URL among available copies. A user can still open the non-canonical address.",
        "If the old URL shouldn’t live anymore — 301. If duplicates are needed for UX (filters, params) but one variant should index — more often canonical + careful indexing.",
      ],
      lists: [],
    },
    {
      title: "Short takeaway",
      level: 2,
      paras: [
        "Redirects tidy URLs: for permanent moves use 301, for temporary — 302/307, don’t spawn chains, and don’t swap page meaning. Align https/www mirrors and check responses after every deploy.",
      ],
      lists: [],
    },
  ],
};
