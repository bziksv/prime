import type { BlogPost } from "../../../data/blog";

/** EN overlay for zerkalo-sayta — same structure as RU JSON. */
export const zerkaloSaytaEn: BlogPost = {
  slug: "zerkalo-sayta",
  title: "Website mirror: what it is, why to merge, how to check",
  date: "2018-02-01",
  category: "SEO",
  cover: "/images/blog/zerkalo-sayta/cover-en.webp",
  excerpt:
    "What people call a site mirror: www and non-www, extra domains, and copies on other servers. How to merge with 301, why it matters for SEO, and how to verify the main mirror.",
  lead: [
    "A “mirror” in web practice is an almost identical site or the same content under another URL: www and non-www, a backup domain, a copy on another host. For search that’s a duplicate risk if addresses aren’t merged.",
    "Three meanings of the term, legitimate reasons for mirrors, how to glue the main mirror with 301, and how to check. Example `.htaccess` rules are in a separate post; this one covers logic and order.",
  ],
  faq: [
    {
      q: "Are www and non-www mirrors?",
      a: "Yes: for the bot they’re different hosts with the same content until there’s a 301 to one canon.",
    },
    {
      q: "Is Host in robots.txt enough?",
      a: "For Yandex, Host is outdated. The main fix is a 301 to the canon plus settings in Webmaster/GSC.",
    },
    {
      q: "Should I use a redirect or a canonical?",
      a: "For host mirrors (www/https/another synonym domain) — almost always 301. Canonical — for parameters and template duplicates on one host.",
    },
    {
      q: "Do I need mirrors “to escape a filter”?",
      a: "Moving to a new domain to dodge sanctions is a bad strategy. Fix the cause first; otherwise the filter follows the new name.",
    },
    {
      q: "How many mirrors are OK?",
      a: "Technically many synonyms (typo domains), but all should 301 to one main URL. Don’t keep several 200 OK responses with the same content.",
    },
    {
      q: "How do I verify the merge?",
      a: "Open the non-canon with `curl -I` / DevTools: should be 301 to the canon. In SERP and Webmaster — one main host.",
    },
    {
      q: "Are CDN and geo copies the same as mirrors?",
      a: "Similar in availability idea, but SEO needs one public canonical URL. CDN usually doesn’t spawn separate index hosts.",
    },
    {
      q: "Should I also redirect to HTTPS?",
      a: "http→https merge is part of choosing the main mirror. See posts on HTTPS and redirects.",
    },
  ],
  sections: [
    {
      title: "Three meanings of “mirror”",
      level: 2,
      paras: [
        "**Variants of one site:** `example.ru` and `www.example.ru`, http and https — classic host mirrors. Without a merge the engine sees different URLs.",
        "**Synonym domain:** a second address you bought (typo, old name) with 301 to the main one. **Physical copy:** same content on another server for availability/load — SEO still needs one canonical entry for users and the index.",
      ],
      lists: [
        {
          intro: "What to remember:",
          items: [
            "a mirror ≠ “another site in TOP”;",
            "one content — one main URL in the index;",
            "other hosts return 301 to the canon.",
          ],
        },
      ],
    },
    {
      title: "Why mirrors are made",
      level: 2,
      paras: [
        "Merging www/non-www and http/https is required hygiene. Extra domains — typo protection and similar-name capture. Geo/backup copies — availability on outages (engineering, not “two sites in SERP”).",
        "Don’t confuse with a satellite network: useful content and links to the main domain ≠ clones for manipulation.",
      ],
      lists: [
        {
          intro: "Legitimate cases:",
          items: [
            "one main mirror;",
            "domain move with 301;",
            "typo domains → canon;",
            "country domains with a clear canon/localization.",
          ],
        },
      ],
      notes: [
        {
          title: "Not recommended",
          text: "Creating a mirror “to leave a filter”. Audit and fix the cause first; otherwise the risk moves with the content.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Page duplicates",
          href: "/en/blog/dubli-stranits/",
        },
      ],
    },
    {
      title: "How to merge the main mirror",
      level: 2,
      paras: [
        "Pick the canon: usually `https://` plus a www-or-not decision. All other host/protocol variants — permanent 301 to the canon (including paths, and where possible without long chains).",
        "On Apache people often edit `.htaccess`; on nginx — `return 301` in the config. After the merge check Webmaster/Search Console and the sitemap for canonical URLs.",
      ],
      lists: [
        {
          intro: "Order:",
          items: [
            "choose the canon;",
            "set 301 from all mirrors;",
            "update internal links to the canon;",
            "serve a sitemap with the canon;",
            "check webmaster panels.",
          ],
        },
      ],
      links: [
        {
          label: "Redirect",
          href: "/en/blog/redirekt/",
        },
        {
          label: "301 in .htaccess",
          href: "/en/blog/htaccess-301/",
        },
        {
          label: "HTTPS and SEO",
          href: "/en/blog/https-seo/",
        },
      ],
    },
    {
      title: "Moving to a new domain",
      level: 2,
      paras: [
        "The new address becomes the canon: the old domain fully 301s to matching new URLs (page by page, not everything to the homepage). In panels you file a move/address change.",
        "Gradually switch links in email, ads, and partnerships to the new host; keep the old one with redirects while external traffic lives.",
      ],
      links: [
        {
          label: "Yandex Webmaster",
          href: "/en/blog/yandeks-vebmaster/",
        },
      ],
    },
    {
      title: "How to check",
      level: 2,
      paras: [
        "Request a non-canonical URL: headers should show `301` and `Location` to the canon. In the browser account for redirect cache — check with a clean request.",
        "In SERP and index reports see which host is shown. “Merge check” tools are a quick glance; truth remains response headers and webmaster dashboards.",
      ],
      lists: [
        {
          intro: "Check checklist:",
          items: [
            "http → https;",
            "www ↔ non-www;",
            "synonym domains → canon;",
            "no 3+ redirect chains;",
            "sitemap and internal links on the canon.",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          text: "Merging mirrors is part of prep. Reindex and SERP stabilization take time; core rank buildup is planned over 2–6 months after launch prep — not “TOP the day after a 301”.",
          kind: "tip",
        },
      ],
    },
  ],
  related: [
    "redirekt",
    "htaccess-301",
    "dubli-stranits",
    "https-seo",
    "kanonicheskiy-teg",
    "yandeks-vebmaster",
  ],
};
