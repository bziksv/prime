import type { BlogPost } from "../../../data/blog";

/** EN overlay for karta-sayta — same structure as RU JSON. */
export const kartaSaytaEn: BlogPost = {
  slug: "karta-sayta",
  title: "Sitemap: XML and HTML — why you need them and how to make one",
  date: "2020-10-29",
  category: "SEO",
  cover: "/images/blog/karta-sayta/cover-en.webp",
  excerpt:
    "How an XML sitemap differs from an HTML map, how to create and submit the file to search engines, which URLs to include, and which mistakes hurt indexing.",
  lead: [
    "A sitemap helps search engines learn about important URLs faster. Most often that means `sitemap.xml` for bots; an HTML map is an orientation aid for people. It’s not a “TOP button” — crawl hygiene next to solid structure and internal links.",
    "XML and HTML maps serve different jobs; build XML carefully, submit it to Google and other webmaster tools, and avoid junk URLs. Treat this as the canonical take on sitemaps among related posts.",
  ],
  faq: [
    {
      q: "Are XML and HTML sitemaps the same?",
      a: "No. XML is for bots (a URL list). HTML is a page of links for people. For SEO a correct XML + internal linking matters more.",
    },
    {
      q: "Is a sitemap required?",
      a: "Not the only way to discover URLs, but on mid-size and large sites it greatly helps crawling new and deep pages.",
    },
    {
      q: "Where should I put the sitemap file?",
      a: "Usually `/sitemap.xml` at the root or a sitemap index `/sitemap_index.xml`. Point to it in robots.txt and Search Console / webmaster panels.",
    },
    {
      q: "Do you need priority and changefreq attributes?",
      a: "Engines have long relied on them weakly. What matters more is an up-to-date list of canonical URLs without junk.",
    },
    {
      q: "What not to include?",
      a: "Utility pages, cart, filter duplicates, noindex pages, test URLs, redirect chains — only final 200 canonicals.",
    },
    {
      q: "How to update?",
      a: "CMS/plugin auto-generation or a script when URLs appear. After large sections — resubmit in the panels.",
    },
    {
      q: "How many URLs per file?",
      a: "Protocol limits: about 50k URLs or ~50 MB per file; more — use a sitemap index. In practice split by section for convenience.",
    },
    {
      q: "Does a sitemap replace the menu?",
      a: "No. Navigation and internal links matter more for people and often for crawl. XML is a complement.",
    },
  ],
  sections: [
    {
      title: "XML and HTML: two different “maps”",
      level: 2,
      paras: [
        "An XML sitemap is a machine-readable URL list (often with lastmod). The bot uses it as a hint of what to crawl. An HTML map is a normal page linking sections; useful for people and as extra internal links, but it doesn’t replace XML on a large site.",
        "Don’t confuse it with a ten-link “map in the footer” or a visual IA diagram for design.",
      ],
      lists: [
        {
          intro: "Who needs what:",
          items: [
            "XML — index and crawl;",
            "HTML — human orientation;",
            "neither fixes duplicates or thin content.",
          ],
        },
      ],
      links: [
        {
          label: "Website navigation",
          href: "/en/blog/navigatsiya-sayta/",
        },
      ],
    },
    {
      title: "Why you need sitemap.xml",
      level: 2,
      paras: [
        "New sections, deep nesting, weak internal linking — the bot may take long to reach a URL. A sitemap speeds discovery. On a 5-page brochure site the effect is smaller than on a catalog of thousands.",
        "A sitemap doesn’t guarantee indexing: robots-blocked, noindex, soft 404s, and duplicates still get filtered.",
      ],
      lists: [
        {
          intro: "Especially useful if:",
          items: [
            "many landings and product cards;",
            "you publish new URLs often;",
            "media/docs live on separate URLs;",
            "some pages are weakly linked from the menu.",
          ],
        },
      ],
    },
    {
      title: "How to create an XML sitemap",
      level: 2,
      paras: [
        "On a CMS — built-in module or plugin (generate + auto-update). On static/custom — generate on deploy or a script over canonical URLs. Confirm the file has https addresses without redirect chains.",
        "Sitemap index: products, blog, categories separately — easier to diagnose errors by type.",
      ],
      lists: [
        {
          intro: "Mini requirements for URLs in the map:",
          items: [
            "canonical (one www/https variant);",
            "200 response;",
            "allowed for indexing;",
            "no sessions or utm;",
            "current, not deleted.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Dumping every catalog filter into the sitemap. You get bloated crawl and index noise.",
        },
      ],
      links: [
        {
          label: "Duplicate pages",
          href: "/en/blog/dubli-stranits/",
        },
      ],
    },
    {
      title: "How to tell search engines",
      level: 2,
      paras: [
        "In `robots.txt`: a `Sitemap: https://example.com/sitemap.xml` line. Plus add the file in Google Search Console and other webmaster tools. After a domain/HTTPS change, update the paths.",
        "Recrawl isn’t instant: a sitemap is a queue, not a command to “index everything tomorrow”.",
      ],
      lists: [
        {
          intro: "After publishing:",
          items: [
            "open the sitemap in a browser — valid XML;",
            "check error reports in the panels;",
            "reconcile URL count with expectations;",
            "remove from the map what you closed from the index.",
          ],
        },
      ],
      links: [
        {
          label: "Closing from indexing",
          href: "/en/blog/zakrytie-ot-indeksatsii/",
        },
      ],
    },
    {
      title: "HTML map: when it makes sense",
      level: 2,
      paras: [
        "For people: a large portal, public services, a catalog with unclear structure. Make a readable hierarchy — not a sheet of 5,000 links on one page; use sections.",
        "For SEO an HTML map is a weak substitute for a normal menu and breadcrumbs. Don’t spawn a separate “seo-sitemap.html” with spammy anchors.",
      ],
      lists: [
        {
          intro: "Practice:",
          items: [
            "a “Sitemap” link in the footer;",
            "grouping by section;",
            "only important public URLs.",
          ],
        },
      ],
      links: [
        {
          label: "Site footer",
          href: "/en/blog/futer-sayta/",
        },
      ],
    },
    {
      title: "Typical mistakes and control",
      level: 2,
      paras: [
        "Broken XML, http on an https site, redirects inside the map, a stale file after migration, mixing indexable and closed URLs, one giant file without an index.",
        "Quarterly reconcile: crawler vs sitemap vs “pages in search”. A gap is a reason to clean the generator.",
      ],
      lists: [
        {
          intro: "Control:",
          items: [
            "sitemap errors in Search Console / webmaster tools;",
            "share of 404/301 among map URLs;",
            "last file update time;",
            "no test subdomain on production.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Canonicals and structure first, then the map. Otherwise you automate chaos.",
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
        {
          label: "SEO site structure",
          href: "/en/blog/seo-struktura-sayta/",
        },
      ],
    },
  ],
  related: [
    "navigatsiya-sayta",
    "zakrytie-ot-indeksatsii",
    "seo-struktura-sayta",
    "tehnicheskiy-seo-audit",
    "dubli-stranits",
  ],
};
