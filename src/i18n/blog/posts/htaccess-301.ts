import type { BlogPost } from "../../../data/blog";

/** EN overlay for htaccess-301 — same structure as RU JSON. */
export const htaccess301En: BlogPost = {
  slug: "htaccess-301",
  title: "301 redirects in .htaccess: common rules",
  date: "2021-04-16",
  category: "SEO",
  cover: "/images/blog/htaccess-301/cover-en.webp",
  excerpt:
    "Practical permanent 301 examples in Apache .htaccess: https, www, trailing slash, page and domain moves — plus when a redirect isn’t needed.",
  lead: [
    "On Apache, `.htaccess` is often used for permanent 301s: merge mirrors, move a URL, strip “tails.” A bad rule can take the site down — edit with a backup.",
    "Below — typical scenarios and caution. Theory of 301/302 codes — in the redirect piece; nginx uses different syntax.",
  ],
  faq: [
    {
      q: "Where does .htaccess live?",
      a: "Usually in the site root (or the virtual host directory). Not every host enables `AllowOverride`.",
    },
    {
      q: "Will it work on nginx?",
      a: "Not as-is. On nginx you write `return 301` / `rewrite` in the server config.",
    },
    {
      q: "301 or 302 in the examples?",
      a: "For permanent moves — 301. Temporary promos — 302/307.",
    },
    {
      q: "Can you paste rules in a batch?",
      a: "Carefully: order matters, loops are easy. Test one at a time.",
    },
    {
      q: "Redirect instead of deleting a page?",
      a: "If there’s a close-in-meaning URL — yes. If the topic is gone — better 404/410 than “everything to home.”",
    },
    {
      q: "How to check the status code?",
      a: "Open response headers via DevTools, `curl -I`, or a checker. Test the original URL without a browser-cached redirect.",
    },
  ],
  sections: [
    {
      title: "When you need a 301",
      level: 2,
      paras: [
        "Slug changes, section moves, http→https and www/non-www merge, domain migration. Goal — one canonical address without chains.",
      ],
      lists: [
        {
          intro: "Signs it’s time:",
          items: [
            "old URLs in Webmaster with 404 after a move;",
            "two mirrors in the index;",
            "external links to outdated paths.",
          ],
        },
      ],
      links: [
        {
          label: "Redirect: 301 and 302",
          href: "/en/blog/redirekt/",
        },
      ],
    },
    {
      title: "Typical rules",
      level: 2,
      paras: [
        "Enable `RewriteEngine On` and write conditions + `RewriteRule` with `[R=301,L]`. Exact syntax depends on the directory and `RewriteBase`.",
        "Idea examples (don’t copy blindly): force https; www→non-www (or reverse); one page URL to a new path; `domain-old` → `domain-new` keeping the path.",
      ],
      lists: [
        {
          intro: "Before going live:",
          items: [
            "backup the current `.htaccess`;",
            "test on staging;",
            "check chains (one hop);",
            "verify with `curl -I` or similar.",
          ],
        },
      ],
      notes: [
        {
          title: "Order",
          text: "First general merges (https/www), then point page moves. Otherwise rules catch the wrong requests.",
        },
      ],
    },
    {
      title: "When a redirect isn’t needed",
      level: 2,
      paras: [
        "Don’t dump all junk to home — it blurs meaning. Don’t duplicate 301 and canonical on conflicting URLs without need. Don’t leave A→B→C.",
      ],
      lists: [
        {
          intro: "Mistakes:",
          items: [
            "redirect loops;",
            "a temporary 302 forever;",
            "editing production without a backup;",
            "forgotten HTTP after enabling HTTPS.",
          ],
        },
      ],
    },
    {
      title: "Prepare a URL migration map",
      level: 2,
      paras: [
        "Before a mass move, make a table: old URL, new URL, reason, response type, check status. Include important pages from analytics, XML sitemaps, external links, and Webmaster reports — not only URLs you remember easily.",
        "Map pages by meaning. A product card goes to a replacement or relevant category; an article to an updated piece on the same topic. If there’s no equivalent, an honest 404 or 410 beats a home redirect.",
      ],
      lists: [
        {
          intro: "In the migration map include:",
          items: [
            "full old and target URL;",
            "rule purpose — domain, section, or single page;",
            "expected 301 code;",
            "deploy date and test result.",
          ],
        },
      ],
    },
    {
      title: "Mind rule order and context",
      level: 2,
      paras: [
        "`.htaccess` runs in directory context, so path patterns and rule starts can differ from a virtual-host config. Don’t paste article examples literally until you check the document root, current CMS rules, and `AllowOverride`.",
        "Place general canonical protocol/host rules first, then point moves. Every condition should be clear: mixed www, HTTPS, slash, and CMS rules without testing often create an extra hop or an infinite loop.",
      ],
      lists: [
        {
          intro: "Be especially careful with:",
          items: [
            "rules that redirect the whole domain;",
            "regex with broad matches;",
            "duplicate settings in a CDN or hosting panel;",
            "automatic CMS and plugin rules.",
          ],
        },
      ],
    },
    {
      title: "Test after every change",
      level: 2,
      paras: [
        "Apply a rule on staging or a small URL group first. Check the source address, target, query-string variants, HTTP and HTTPS, www and non-www. Result should be one hop to the final canonical page.",
        "After publish, watch status codes in a crawler and Webmaster. Fix A→B→C chains: the final address should be stated immediately. Don’t use a permanent redirect as a temporary experiment — browsers and search engines may cache it.",
      ],
      lists: [
        {
          intro: "Acceptance checklist:",
          items: [
            "no loops or multiple sequential redirects;",
            "parameters kept only where needed;",
            "destination returns 200 and is crawlable;",
            "important old URLs checked selectively and in bulk.",
          ],
        },
      ],
    },
  ],
};
