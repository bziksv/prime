import type { BlogPost } from "../../../data/blog";

/** EN overlay for robots-txt-wordpress — same structure as RU JSON. */
export const robotsTxtWordpressEn: BlogPost = {
  slug: "robots-txt-wordpress",
  title: "Robots.txt for WordPress: rules without a blind template",
  date: "2018-01-29",
  category: "SEO",
  cover: "/images/blog/robots-txt-wordpress/cover-en.webp",
  excerpt:
    "How to set robots.txt on WordPress: wp-admin, system paths, Sitemap, Webmaster checks — without banning all of wp-content or blindly closing categories.",
  lead: [
    "The `robots.txt` file in the WordPress root tells bots which paths are better not to crawl. There is no universal ideal for every site: pretty permalinks, SEO plugins, and which sections you want in search get in the way.",
    "Below: working WordPress logic and a careful frame. Don’t copy old templates that `Disallow: /wp-` everything, block `/category/`, or treat Host as sacred — you can easily block CSS/JS or useful listings. Disallow ≠ noindex — see the guide on closing from indexing.",
  ],
  faq: [
    {
      q: "Where is robots.txt in WordPress?",
      a: "In the site root: `https://example.com/robots.txt`. Some rules may be served virtually by core or a plugin — check what actually answers at the URL.",
    },
    {
      q: "Can I block all of /wp-content?",
      a: "Usually no: themes, styles, and scripts needed for rendering live there. More often you close plugins/cache surgically and leave uploads open.",
    },
    {
      q: "Should I ban /category/ and /tag/?",
      a: "Only if listings are truly junk for your strategy. For many blogs categories are normal landings. Don’t copy a ban because a 2018 template said so.",
    },
    {
      q: "Is the Host directive required?",
      a: "Historically for Yandex. Today 301s and an HTTPS mirror matter more. Don’t replace redirects with a Host line.",
    },
    {
      q: "How is this different from robots.txt for Joomla?",
      a: "Same directives, different system paths. General deindexing principles — in the indexing article.",
    },
  ],
  sections: [
    {
      title: "Why robots.txt on WordPress",
      level: 2,
      paras: [
        "WP serves admin, includes, feeds, trackbacks, system query parameters. Without rules the bot spends crawl budget on junk. A Disallow mistake can close needed things — including theme assets.",
        "The file doesn’t lift rankings by itself. It’s crawl hygiene; share of the core in search is separate work over months.",
      ],
      lists: [
        {
          intro: "Usually closed from crawl:",
          items: [
            "`/wp-admin/` (often with Allow on admin-ajax when needed)",
            "`/wp-includes/`",
            "cache and plugin system directories",
            "feeds/trackbacks — case by case",
            "`?` tech parameters — carefully, don’t cut needed shop filters",
          ],
        },
      ],
      links: [
        {
          label: "Closing from indexing",
          href: "/en/blog/zakrytie-ot-indeksatsii/",
        },
        {
          label: "Robots.txt for Joomla",
          href: "/en/blog/robots-txt-joomla/",
        },
      ],
    },
    {
      title: "What not to copy from old templates",
      level: 2,
      paras: [
        "A broad `Disallow: /wp-` also closes all of `wp-content` — with styles and scripts. For modern search engines that’s a bad idea: they understand the page worse.",
        "Auto-banning categories, tags, pagination, and every URL with `?` breaks normal catalog and blog sections. Decide by site: what should answer demand, don’t cut in robots.",
      ],
      notes: [
        {
          title: "Disallow ≠ “remove from the index”",
          kind: "tip",
          text: "If a URL is already in the SERP, a crawl ban can block serving noindex. To drop from the index use meta robots / X-Robots-Tag and the deindexing guide.",
        },
      ],
    },
    {
      title: "Path landmarks for WordPress",
      level: 2,
      paras: [
        "Base: close admin and core, don’t mute uploads and theme files without cause, point Sitemap over HTTPS. Account for the pretty-permalink prefix (`/blog/`, shop) in masks.",
        "SEO plugins (Yoast, Rank Math, etc.) often help with robots and the sitemap — but still check the final file with your eyes.",
      ],
      tables: [
        {
          caption: "Common paths",
          headers: ["Path", "Note"],
          rows: [
            ["/wp-admin/", "Close crawl; ajax — Allow if needed"],
            ["/wp-includes/", "System core"],
            ["/wp-content/plugins/", "Usually closed"],
            ["/wp-content/uploads/", "Often left open"],
            ["/wp-content/themes/", "Don’t cut blindly: CSS/JS needed"],
            ["Sitemap:", "HTTPS URL of the XML map"],
          ],
        },
      ],
    },
    {
      title: "Sample frame (not dogma)",
      level: 2,
      paras: [
        "A teaching frame of ideas — adapt to permalinks and plugins. Don’t duplicate a Disallow wall just in case.",
      ],
      lists: [
        {
          intro: "Line ideas:",
          items: [
            "`User-agent: *`",
            "`Disallow: /wp-admin/`",
            "`Allow: /wp-admin/admin-ajax.php`",
            "`Disallow: /wp-includes/`",
            "`Disallow: /wp-content/plugins/`",
            "`Disallow: /wp-content/cache/`",
            "`Sitemap: https://example.com/sitemap_index.xml`",
          ],
        },
      ],
      notes: [
        {
          title: "Host and http://",
          kind: "tip",
          text: "2018 guides wrote Host and Sitemap over http. Today — a canonical HTTPS mirror via redirects and the current map URL in webmaster panels.",
        },
      ],
    },
    {
      title: "Checks",
      level: 2,
      paras: [
        "Open `/robots.txt` in the browser; run analysis in Yandex Webmaster and the robots report in Google Search Console. Make sure main landings and CSS/JS of key templates aren’t under Disallow.",
        "After changing theme or plugin, recheck the file — generation may have changed.",
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
        {
          label: "WordPress security",
          href: "/en/blog/wordpress-bezopasnost/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "On WordPress robots.txt is surgical crawl hygiene — not “close all wp- and categories.” Sitemap over HTTPS, panel checks, no Host directive obsession.",
        "General Disallow/noindex theory — in the deindexing guide; the Joomla template — in the related article.",
      ],
    },
  ],
  closing: [
    "Build robots.txt for your WordPress: admin and clear tech junk closed, theme and uploads not cut by accident, Sitemap over HTTPS set — and check the file in Webmaster, not against a 2018 template screenshot.",
  ],
  related: [
    "zakrytie-ot-indeksatsii",
    "robots-txt-joomla",
    "wordpress-bezopasnost",
    "tehnicheskiy-seo-audit",
    "dubli-stranits",
    "wordpress-seo-plaginy",
  ],
};
