import type { BlogPost } from "../../../data/blog";

/** EN overlay for zerkalo-sayta — same structure as RU JSON. */
export const zerkaloSaytaEn: BlogPost = {
  slug: "zerkalo-sayta",
  title: "Site mirror: what it is, why to merge, how to check",
  date: "2018-02-01",
  category: "SEO",
  cover: "/images/blog/zerkalo-sayta/cover-en.webp",
  excerpt:
    "What people call a site mirror: www and non-www, extra domains, and copies on other servers. How to merge with 301, why it matters for SEO, and how to verify the main host.",
  lead: [
    "A “mirror” in web practice is nearly the same site — or the same content — under another URL: www and non-www, a spare domain, a copy on another host. For search that is a duplicate risk if the addresses are not merged.",
    "Below: three meanings of the term, legitimate reasons for mirrors, how to glue the main host with 301, and how to check. Example `.htaccess` rules live in a separate post; this one covers logic and order.",
  ],
  faq: [
    {
      q: "Are www and non-www mirrors?",
      a: "Yes. For the crawler they are different hosts with the same content until there is a 301 to one canon.",
    },
    {
      q: "Is Host in robots.txt enough?",
      a: "For Yandex, Host is outdated. The main fix is a 301 to the canon plus settings in Webmaster / Search Console.",
    },
    {
      q: "Redirect or canonical?",
      a: "For host mirrors (www / https / another synonym domain) — almost always 301. Canonical — for parameters and template duplicates on one host.",
    },
    {
      q: "Do I need mirrors “to escape a filter”?",
      a: "Moving to a new domain to dodge sanctions is a bad strategy. Fix the cause first; otherwise the filter follows the new name.",
    },
    {
      q: "How many mirrors are OK?",
      a: "Technically many synonyms (typo domains), but all should 301 to one main URL. Do not keep several 200 OK responses with the same content.",
    },
    {
      q: "How do I verify the merge?",
      a: "Open the non-canon with `curl -I` or DevTools: you should see 301 to the canon. In results and Webmaster — one main host.",
    },
    {
      q: "Are CDN and geo copies the same?",
      a: "Similar for availability, but SEO needs one public canonical URL. A CDN usually does not spawn separate index hosts.",
    },
    {
      q: "How does this relate to HTTPS?",
      a: "http→https merge is part of choosing the main mirror. See the HTTPS and redirects posts.",
    },
  ],
  sections: [
    {
      title: "Three meanings of “mirror”",
      level: 2,
      paras: [
        "**Variants of one site:** `example.ru` and `www.example.ru`, http and https — classic host mirrors. Without a merge the engine sees different URLs.",
        "**Synonym domain:** a second address you bought (typo, old name) with 301 to the main one. **Physical copy:** same content on another server for availability or load — SEO still needs one canonical entry for users and the index.",
      ],
      lists: [
        {
          intro: "What to remember:",
          items: [
            "a mirror is not “another site ranking separately”",
            "one content set — one main URL in the index",
            "other hosts return 301 to the canon",
          ],
        },
      ],
    },
    {
      title: "Why mirrors are made",
      level: 2,
      paras: [
        "Merging www/non-www and http/https is required hygiene. Extra domains protect against typos and similar-name capture. Geo or backup copies are for availability on outages — engineering, not “two sites in the results.”",
        "Do not confuse this with a satellite network: useful content and links to the main domain are not clones built for manipulation.",
      ],
      lists: [
        {
          intro: "Legitimate cases:",
          items: [
            "one main mirror",
            "domain move with 301",
            "typo domains → canon",
            "country domains with a clear canon / localization",
          ],
        },
      ],
      notes: [
        {
          title: "Not recommended",
          kind: "tip",
          text: "Creating a mirror “to leave a filter.” Audit and fix the cause first; otherwise the risk moves with the content.",
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
        "Pick the canon: usually `https://` plus a www-or-not decision. All other host/protocol variants get a permanent 301 to the canon — including paths, and where possible without long chains.",
        "On Apache people often edit `.htaccess`; on nginx — `return 301` in the config. After the merge check Webmaster / Search Console and the sitemap for canonical URLs.",
      ],
      lists: [
        {
          intro: "Order:",
          items: [
            "choose the canon",
            "set 301 from all mirrors",
            "update internal links to the canon",
            "serve a sitemap with the canon",
            "check webmaster panels",
          ],
        },
      ],
      links: [
        {
          label: "Redirects",
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
        "The new address becomes the canon: the old domain fully 301s to matching new URLs — page by page, not everything to the homepage. In panels you file a move / address change.",
        "Gradually switch links in email, ads, and partnerships to the new host; keep the old one with redirects while external traffic still arrives.",
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
        "In results and index reports see which host is shown. “Merge check” tools are a quick glance; truth remains response headers and webmaster dashboards.",
      ],
      lists: [
        {
          intro: "Check checklist:",
          items: [
            "http → https",
            "www ↔ non-www",
            "synonym domains → canon",
            "no chains of three or more redirects",
            "sitemap and internal links on the canon",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Merging mirrors is part of prep. Reindex and results stabilization take time; gains across a commercial keyword set usually need months of steady work after promotion starts — not overnight after one 301.",
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
