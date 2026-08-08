import type { BlogPost } from "../../../data/blog";

/** EN overlay for http-zagolovki — same structure as RU JSON. */
export const httpZagolovkiEn: BlogPost = {
  slug: "http-zagolovki",
  title: "HTTP security headers: what to configure on a site",
  date: "2020-01-13",
  category: "SEO",
  cover: "/images/blog/http-zagolovki/cover-en.webp",
  excerpt:
    "Which HTTP headers strengthen site security: HSTS, CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy — how to check and where to set them without breaking the layout.",
  lead: [
    "HTTP headers are service fields in the server response: they tell the browser how to treat the page (content type, cache, redirect, security rules). Some of them directly cut XSS, clickjacking, and data-leak risks.",
    "Below: a practical security-header set. The general request/response picture is in the HTTP protocol article; here the focus is protection. Before edits — config backup and a staging check.",
  ],
  faq: [
    {
      q: "Where do you view headers?",
      a: "DevTools → Network → document response, `curl -I https://site/`, online security-header scanners. Check the live HTTPS host.",
    },
    {
      q: "Where do you set them?",
      a: "In the web-server config (nginx, Apache/`.htaccess`), sometimes in the app (PHP `header()`, middleware). Prefer server/CDN — once for the whole site.",
    },
    {
      q: "Is X-XSS-Protection still needed?",
      a: "In modern browsers it’s outdated and can hurt. Rely on CSP, not the old XSS filter. Don’t treat it as the base of protection.",
    },
    {
      q: "Will CSP break the site?",
      a: "A strict CSP that ignores scripts — yes. Start with Report-Only or a soft policy, watch reports, then tighten.",
    },
    {
      q: "Can you use HSTS without HTTPS?",
      a: "No. First stable HTTPS and http→https redirect, then HSTS.",
    },
    {
      q: "Does this affect SEO?",
      a: "Indirectly: security and trust, less risk of hacks/spam. There’s no direct “header for page one.” Rankings follow site work; planned months after SEO starts.",
    },
    {
      q: "Feature-Policy or Permissions-Policy?",
      a: "The current name is Permissions-Policy (limits camera, geolocation, etc.). Older Feature-Policy still appears in guides.",
    },
  ],
  sections: [
    {
      title: "What HTTP headers are",
      level: 2,
      paras: [
        "When a URL opens, the browser gets not only HTML but response metadata: `Content-Type`, `Location`, `Cache-Control`, cookie flags, security directives. Without them the protocol doesn’t know how to show the page safely.",
        "Security headers don’t replace CMS updates and passwords. They’re a browser protection layer on top of normal server hygiene.",
      ],
      lists: [
        {
          intro: "Before setup:",
          items: [
            "backup nginx/Apache/`.htaccess`",
            "test on a site copy",
            "list your domains, CDN, analytics, widgets",
          ],
        },
      ],
      links: [
        {
          label: "HTTP protocol",
          href: "/en/blog/protokol-http/",
        },
        {
          label: "HTTPS and SEO",
          href: "/en/blog/https-seo/",
        },
      ],
    },
    {
      title: "HSTS: HTTPS only",
      level: 2,
      paras: [
        "`Strict-Transport-Security` tells the browser: for this host, use HTTPS only for a set time. It cuts risk of falling back to open HTTP and some downgrade attacks.",
        "Enable after the certificate and redirects are stable. `includeSubDomains` and `preload` — on purpose: a bad preload is hard to undo.",
      ],
    },
    {
      title: "Clickjacking and MIME: X-Frame-Options, X-Content-Type-Options",
      level: 2,
      paras: [
        "`X-Frame-Options` (and CSP `frame-ancestors`) limits embedding the site in other pages’ iframes — clickjacking protection. Typical values: `DENY` or `SAMEORIGIN`.",
        "`X-Content-Type-Options: nosniff` stops the browser guessing a file type past the declared `Content-Type` — fewer surprises with script execution.",
      ],
    },
    {
      title: "CSP: content policy",
      level: 2,
      paras: [
        "`Content-Security-Policy` sets where scripts, styles, images, and frames may load from. It’s the main modern tool against many XSS cases when set correctly.",
        "Start by inventorying domains (your host, CDN, analytics, chat). Report-Only helps see violations without breakage. A sudden `default-src 'none'` without prep almost always breaks widgets.",
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Inline scripts and `eval` make CSP harder. Plan nonces/hashes or move scripts to files — or the policy stays a leaky `unsafe-inline`.",
        },
      ],
    },
    {
      title: "Referrer-Policy and Permissions-Policy",
      level: 2,
      paras: [
        "`Referrer-Policy` limits how much URL goes into `Referer` on navigations — less path and query leakage. A common balance: `strict-origin-when-cross-origin`.",
        "`Permissions-Policy` (formerly Feature-Policy) disables or limits powerful browser APIs (camera, mic, geolocation) when the site doesn’t need them.",
      ],
      lists: [
        {
          intro: "Minimum set to start:",
          items: [
            "HSTS (after HTTPS)",
            "X-Content-Type-Options: nosniff",
            "frame-ancestors / X-Frame-Options",
            "Referrer-Policy",
            "a CSP draft in Report-Only",
          ],
        },
      ],
    },
    {
      title: "How to roll out and verify",
      level: 2,
      paras: [
        "Set headers in nginx/`add_header`, Apache/`Header set`, or the hosting panel. PHP in the template is a fallback — worse for static and cache.",
        "After deploy check home, login pages, forms, and pages with widgets. Watch the console for CSP errors. Document the policy for the team so a new analytics script doesn’t break prod by surprise.",
      ],
      links: [
        {
          label: "Site security",
          href: "/en/blog/bezopasnost-sayta/",
        },
        {
          label: ".htaccess and 301",
          href: "/en/blog/htaccess-301/",
        },
      ],
    },
  ],
  closing: [
    "Security headers are an invisible but useful layer: HSTS, anti-frame, nosniff, careful CSP, and referrer/permissions policies. Roll out gradually, test with widgets, and don’t confuse them with full CMS security.",
  ],
};
