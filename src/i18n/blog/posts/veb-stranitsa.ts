import type { BlogPost } from "../../../data/blog";

/** EN overlay for veb-stranitsa — same structure as RU JSON. */
export const vebStranitsaEn: BlogPost = {
  slug: "veb-stranitsa",
  title: "Webpage: what it is and common browser messages",
  date: "2021-01-26",
  category: "SEO",
  cover: "/images/blog/veb-stranitsa/cover-en.webp",
  excerpt:
    "What a webpage is, why it needs its own URL, how to save a local copy, and what “outdated,” “slowing down the browser,” “unavailable,” and “moved” usually mean.",
  lead: [
    "A webpage is a document with its own address (URL): HTML plus related assets — images, styles, scripts — that the browser assembles into what you see.",
    "Below: why pages matter for a site, how to save a copy on your machine, and how to read typical browser messages. Useful both for everyday browsing and for anyone watching SEO and availability.",
    "A site is a set of linked pages. Status, speed, and clarity on each URL add up to user experience — and to how crawlers move through the project.",
  ],
  faq: [
    {
      q: "How is a page different from a site?",
      a: "A page is one document and URL. A site is the collection of pages, templates, and navigation under one project.",
    },
    {
      q: "Does every page need its own URL?",
      a: "Yes for indexable content. Uncontrolled duplicates and parameter variants multiply copies.",
    },
    {
      q: "How do you save a page to a computer?",
      a: "In the browser: Save as… (complete HTML or HTML only). That is an offline snapshot — not a site backup.",
    },
    {
      q: "What does “page is outdated” mean?",
      a: "Usually form cache after back/forward. Refresh, or resubmit carefully — especially around payment.",
    },
    {
      q: "Why does the browser say the page is slowing it down?",
      a: "Heavy scripts, memory leaks, too many tabs, extensions. On the site side: tighten JS and media.",
    },
    {
      q: "Is “page unavailable” always a 404?",
      a: "Not always. It can be DNS, network, 5xx, or a block. Read the exact message and status code.",
    },
    {
      q: "If the page moved, what about SEO?",
      a: "Use a proper 301 to the new URL, or you lose links and crawl continuity.",
    },
  ],
  sections: [
    {
      title: "Why webpages matter",
      level: 2,
      paras: [
        "A page carries meaning: a service, product, article, or form. The browser requests the URL, receives HTML, and loads resources.",
        "For business, a page is an entry from search, ads, and social. Without a clear offer and a 200 response it does not work as a channel.",
        "For SEO, each indexable page should answer a clear intent and avoid needless overlap with neighboring URLs.",
      ],
      lists: [
        {
          intro: "What it usually includes:",
          items: [
            "HTML markup",
            "CSS styles",
            "scripts",
            "media files",
            "metadata (title, description, and similar)",
          ],
        },
      ],
      links: [
        {
          label: "URL address",
          href: "/en/blog/url-adres/",
        },
        {
          label: "HTTP 200",
          href: "/en/blog/kod-200/",
        },
      ],
    },
    {
      title: "How to save a page",
      level: 2,
      paras: [
        "From the browser menu you get an HTML file and a resources folder. Handy for a draft or archive, but scripts and auth often break offline.",
        "For a team, server backups and git matter more than Save as from a laptop.",
        "Print to PDF freezes the look — still not a CMS and database backup.",
      ],
      lists: [
        {
          intro: "When a local copy helps:",
          items: [
            "compare layout before and after",
            "hand an example to a contractor",
            "read reference text offline",
          ],
        },
      ],
    },
    {
      title: "“Webpage is outdated”",
      level: 2,
      paras: [
        "Common when you go back to a POST form result: the browser will not silently resubmit.",
        "Refresh the page. On payment or order flows, do not hit retry blindly — you can double the action.",
      ],
      lists: [
        {
          intro: "For developers:",
          items: [
            "PRG pattern (redirect after post)",
            "idempotent critical actions",
            "clear messages for the user",
          ],
        },
      ],
    },
    {
      title: "Why a page “slows the browser”",
      level: 2,
      paras: [
        "Heavy JS, endless timers, huge DOMs, autoplay media, extension conflicts. Weak machines show it first.",
        "In DevTools Performance/Memory, look for long tasks. On the site: code-split, defer load, compress images.",
      ],
      lists: [
        {
          intro: "Quick checks:",
          items: [
            "incognito without extensions",
            "another browser",
            "disable heavy widgets",
            "check the mobile view",
          ],
        },
      ],
    },
    {
      title: "“Page unavailable” and the network",
      level: 2,
      paras: [
        "Causes include no internet, DNS failure, server down (5xx), firewall, or a wrong URL. Chrome and Firefox word it differently — check the response code if anything comes back.",
        "For the owner: uptime monitoring, logs, correct DNS and SSL.",
      ],
      lists: [
        {
          intro: "User checklist:",
          items: [
            "check the network",
            "refresh or try another network",
            "verify the address",
            "wait, then tell the owner if it is your site",
          ],
        },
      ],
      links: [
        {
          label: "502 error",
          href: "/en/blog/oshibka-502/",
        },
        {
          label: "HTTP status codes",
          href: "/en/blog/kod-statusa-http/",
        },
      ],
    },
    {
      title: "“Page moved”",
      level: 2,
      paras: [
        "The browser follows a redirect or shows that the address changed. For SEO the type matters: a permanent 301 passes equity; a temporary 302 behaves differently.",
        "Do not leave a “move” as client-side JS while the old URL still returns 200 — weaker for crawlers than an explicit 301.",
      ],
      lists: [
        {
          intro: "After a URL change:",
          items: [
            "301 from old addresses",
            "update internal links",
            "sitemap and Webmaster tools",
            "check redirect chains",
          ],
        },
      ],
      links: [
        {
          label: "Redirects",
          href: "/en/blog/redirekt/",
        },
      ],
      notes: [
        {
          title: "Link to SEO",
          kind: "tip",
          text: "Stable, useful pages with clear URLs are the foundation. Gains on a commercial keyword set are a separate process — often months after technical prep, not overnight.",
        },
      ],
    },
  ],
};
