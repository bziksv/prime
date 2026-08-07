import type { BlogPost } from "../../../data/blog";

/** EN overlay for wordpress-seo-plaginy — same structure as RU JSON. */
export const wordpressSeoPlaginyEn: BlogPost = {
  slug: "wordpress-seo-plaginy",
  title: "SEO plugins for WordPress: what to install",
  date: "2019-12-16",
  category: "SEO",
  cover: "/images/blog/wordpress-seo-plaginy/cover-en.webp",
  excerpt:
    "Which WordPress SEO plugins you actually need: all-in-ones (Yoast, Rank Math, AIOSEO), sitemap, redirects, speed, images, and links — without installing the whole catalog at once.",
  lead: [
    "The WordPress catalog has tens of thousands of extensions; for SEO a small stack is enough: one main SEO suite, plus focused tools for speed, redirects, and media. Extra plugins raise breach and slowdown risk.",
    "Plugin groups break down differently — metadata, sitemaps, redirects, schema — with popular examples and selection rules. Names and plans change; check current features in the official catalog. A plugin doesn’t replace keyword research, copy, or time for rankings to build (TOP planned for 2–6 months after promotion starts).",
  ],
  faq: [
    {
      q: "Should you install Yoast and Rank Math together?",
      a: "No. Pick one SEO suite. Two at once — meta conflicts, sitemap duplicates, and extra load.",
    },
    {
      q: "Do green lights in Yoast equal TOP?",
      a: "No. They're readability and keyword heuristics. Chasing \"100 points\" often ruins the text.",
    },
    {
      q: "How many SEO plugins are enough?",
      a: "Usually 1 suite + 2–4 focused tools (redirects, cache or optimize, image compression, broken links on a schedule).",
    },
    {
      q: "Does a plugin replace Webmaster and Search Console?",
      a: "No. The plugin helps on-site; search panels are separate.",
    },
    {
      q: "Is an SSL plugin required?",
      a: "The certificate is set on hosting. Plugins like Really Simple SSL only ease the https redirect — not the only path.",
    },
    {
      q: "Can Broken Link Checker stay always on?",
      a: "Carefully: high load. Prefer rare runs or an external crawler.",
    },
    {
      q: "Do speed plugins conflict?",
      a: "Yes — especially several caches and aggressive minify. One stack, test after enabling.",
    },
    {
      q: "Does a plugin equal a fast TOP?",
      a: "No. It's setup convenience. Site prep takes about a month; core rankings usually build over 2–6 months after work starts.",
    },
  ],
  sections: [
    {
      title: "How to choose SEO plugins",
      level: 2,
      paras: [
        "Start with jobs: meta and sitemap, markup, redirects, speed, images, multilingual. Then — one tool per job from the official repo or a trusted author, with recent updates.",
        "Don't install \"the whole top-15 from an article.\" Each plugin is attack surface and a potential conflict. Tie it to WP security: fewer extensions, regular updates, a backup before experiments.",
      ],
      lists: [
        {
          intro: "Selection criteria:",
          items: [
            "last update date",
            "compatibility with your WP version",
            "reviews and install count as a rough signal",
            "no need for pirated \"nulled\" builds",
          ],
        },
      ],
      links: [
        {
          label: "WordPress security",
          href: "/en/blog/wordpress-bezopasnost/",
        },
        {
          label: "SEO tools",
          href: "/en/blog/programmy-seo/",
        },
      ],
    },
    {
      title: "SEO suites: meta, sitemap, markup",
      level: 2,
      paras: [
        "Yoast SEO, All in One SEO (AIOSEO), Rank Math, and The SEO Framework cover the usual set: title and description, XML sitemap, noindex, social previews, often schema and search-panel integrations. Rank Math and AIOSEO are strong on redirects and stores; The SEO Framework leans quieter and more automatic.",
        "Keyword and \"readability\" tips are a checklist, not a ranking law. One suite per site is enough for most blogs and corporate sites.",
      ],
      lists: [
        {
          intro: "What to configure in the suite first:",
          items: [
            "title and description templates",
            "sitemap and excluding utility URLs",
            "canonicals / noindex where needed",
            "basic schema by page type",
          ],
        },
      ],
      links: [
        {
          label: "Snippet and schema",
          href: "/en/blog/snippet/",
        },
        {
          label: "Sitemap",
          href: "/en/blog/karta-sayta/",
        },
      ],
    },
    {
      title: "Navigation, links, and redirects",
      level: 2,
      paras: [
        "Easy Table of Contents — a heading TOC for long articles (enable selectively: TOC jumps sometimes cut depth). Broken Link Checker finds dead URLs — run rarely or replace with a crawler like Screaming Frog.",
        "Redirection — 301/302 rules and 404 monitoring. Rel NoFollow Checkbox — outbound markup convenience in the editor; don't nofollow every link without a reason.",
      ],
      lists: [
        {
          intro: "In practice:",
          items: [
            "redirects on URL changes and duplicate merges",
            "broken links — into an edit backlog",
            "TOC — for guides, not short cards",
          ],
        },
      ],
      links: [
        {
          label: "Broken links",
          href: "/en/blog/bitye-ssylki/",
        },
        {
          label: "Redirects",
          href: "/en/blog/redirekt/",
        },
        {
          label: "Screaming Frog",
          href: "/en/blog/screaming-frog/",
        },
      ],
    },
    {
      title: "Speed, images, SSL",
      level: 2,
      paras: [
        "ShortPixel (and peers) compress images and can do WebP. A3 Lazy Load defers off-screen media — check that the LCP image isn't lazily loaded for no reason. WP Super Cache and Autoptimize — HTML cache and CSS/JS minify; don't enable two caches at once without a test.",
        "Really Simple SSL eases the move to HTTPS after the host issues a certificate. Speed affects UX and crawl; it's not a \"TOP button,\" but a required tech layer.",
      ],
      lists: [
        {
          intro: "Speed order:",
          items: [
            "backup",
            "media compression",
            "one cache + careful minify",
            "check key URLs on mobile",
          ],
        },
      ],
      links: [
        {
          label: "Page size",
          href: "/en/blog/razmer-stranitsy/",
        },
        {
          label: "HTTPS and SEO",
          href: "/en/blog/https-seo/",
        },
      ],
    },
    {
      title: "Multilingual, spam, and a sane minimum",
      level: 2,
      paras: [
        "HREFLANG Tags Lite and peers matter if you truly have several languages or regions. Comment anti-spam plugins cut junk and moderation load — hygiene, not a direct SEO factor.",
        "Build the stack: 1 suite + redirects + (cache or code optimize) + image compression. Everything else — by real need. Update plugins with core; remove deleted extensions completely.",
      ],
      lists: [
        {
          intro: "Final minimum:",
          items: [
            "one SEO suite",
            "redirects/404",
            "speed (cache + media)",
            "HTTPS",
            "Yandex/Google panels outside plugins",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Installing plugins takes hours. Site and content prep — weeks to a month; core rankings planned 2–6 months after work starts. Prep ≠ TOP-10.",
        },
      ],
      links: [
        {
          label: "Yandex Webmaster",
          href: "/en/blog/yandeks-vebmaster/",
        },
        {
          label: "Google Search Console",
          href: "/en/blog/google-search-console/",
        },
        {
          label: "Regional SEO",
          href: "/en/blog/regionalnoe-seo/",
        },
      ],
    },
  ],
  related: [
    "wordpress-bezopasnost",
    "programmy-seo",
    "snippet",
    "karta-sayta",
    "redirekt",
    "screaming-frog",
  ],
};
