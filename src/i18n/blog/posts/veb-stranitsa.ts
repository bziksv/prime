import type { BlogPost } from "../../../data/blog";

/** EN overlay for veb-stranitsa — same structure as RU JSON. */
export const vebStranitsaEn: BlogPost = {
  slug: "veb-stranitsa",
  title: "Webpage: what it is and common browser errors",
  date: "2021-01-26",
  category: "SEO",
  cover: "/images/blog/veb-stranitsa/cover-en.webp",
  excerpt:
    "What a webpage is, why it needs a unique URL, how to save a page locally, and what “outdated”, “slowing the browser”, “unavailable”, and “moved” messages mean.",
  lead: [
    "A webpage is a document with its own address (URL): HTML and related resources (images, styles, scripts) that the browser assembles into what you see on screen.",
    "A site is a set of linked pages. The quality of each (status, speed, meaning) adds up to experience and how bots crawl the resource — including how you save a local copy and how you read typical browser messages.",
  ],
  faq: [
    {
      q: "How does a page differ from a site?",
      a: "A page is one document/URL. A site is the set of pages, templates, and navigation under one project.",
    },
    {
      q: "Does every page need its own URL?",
      a: "Yes for indexable content. Duplicates and parameters without rules spawn copies.",
    },
    {
      q: "How do you save a page to a computer?",
      a: "In the browser: “Save as…” (full HTML or HTML only). That’s an offline copy — not a site backup.",
    },
    {
      q: "What should I do if the page is outdated?",
      a: "Usually form cache after back/forward. Refresh or resubmit carefully (watch for double payment).",
    },
    {
      q: "Why does the browser say the page is slowing it down?",
      a: "Heavy scripts, memory leaks, many tabs, extensions. On the site side — optimize JS and media.",
    },
    {
      q: "Is “page unavailable” always a 404?",
      a: "Not always. It can be DNS, network, 5xx, or a block. Read the exact message and code.",
    },
    {
      q: "If the page moved, what about SEO?",
      a: "You need a correct 301 to the new URL, or you lose links and crawl equity.",
    },
  ],
  sections: [
    {
      title: "Why webpages exist",
      level: 2,
      paras: [
        "A page carries meaning: a service, product, article, form. The browser requests the URL, gets HTML, and loads resources.",
        "For business, a page is an entry from search, ads, and social. Without a clear offer and a 200 status it doesn’t work as a channel.",
        "For SEO, each indexable page should answer a clear intent and not duplicate related URLs unnecessarily.",
      ],
      lists: [
        {
          intro: "What it usually includes:",
          items: [
            "HTML markup;",
            "CSS styles;",
            "scripts;",
            "media files;",
            "metadata (title, description…).",
          ],
        },
      ],
      links: [
        {
          label: "URL address",
          href: "/en/blog/url-adres/",
        },
        {
          label: "Code 200",
          href: "/en/blog/kod-200/",
        },
      ],
    },
    {
      title: "How to save a page",
      level: 2,
      paras: [
        "Via the browser menu you save an HTML file and a resources folder. Useful for a draft or archive, but scripts/auth often break offline.",
        "For a team, server backups and git matter more than “Save as” from a laptop.",
        "Print to PDF is another way to freeze the look — still not a CMS and database backup.",
      ],
      lists: [
        {
          intro: "When a local copy helps:",
          items: [
            "compare layout before/after;",
            "hand an example to a contractor;",
            "offline reading of reference text.",
          ],
        },
      ],
    },
    {
      title: "“Webpage is outdated”",
      level: 2,
      paras: [
        "The message is typical when you go back to a POST form result: the browser won’t silently resubmit.",
        "Refresh the page. If it’s payment/order — don’t hit “retry” mindlessly: a double operation is possible.",
      ],
      lists: [
        {
          intro: "For developers:",
          items: [
            "PRG pattern (redirect after post);",
            "idempotency of critical actions;",
            "clear messages for the user.",
          ],
        },
      ],
    },
    {
      title: "Why a page “slows the browser”",
      level: 2,
      paras: [
        "Heavy JS, endless timers, huge DOMs, autoplay media, extension conflicts. On weak PCs it’s more visible.",
        "In DevTools Performance/Memory look for long tasks. On the site — code-split, deferred load, image compression.",
      ],
      lists: [
        {
          intro: "Quick checks:",
          items: [
            "incognito without extensions;",
            "another browser;",
            "disable heavy widgets;",
            "check the mobile version.",
          ],
        },
      ],
    },
    {
      title: "“Page unavailable” and the network",
      level: 2,
      paras: [
        "Causes: no internet, DNS error, server down (5xx), firewall, wrong URL. Chrome/Firefox wording differs — check the response code if the page responds at all.",
        "For the site owner: uptime monitoring, logs, correct DNS and SSL.",
      ],
      lists: [
        {
          intro: "User algorithm:",
          items: [
            "check the network;",
            "refresh / another network;",
            "verify the address;",
            "wait and tell the owner if it’s your site.",
          ],
        },
      ],
      links: [
        {
          label: "502 error",
          href: "/en/blog/oshibka-502/",
        },
        {
          label: "HTTP status code",
          href: "/en/blog/kod-statusa-http/",
        },
      ],
    },
    {
      title: "“Page moved”",
      level: 2,
      paras: [
        "The browser follows a redirect or shows that the address changed. For SEO the type matters: a permanent 301 passes signal; a temporary 302 behaves differently.",
        "For the owner: don’t leave a “move” via JS at 200 on the old URL — weaker for bots than an explicit 301.",
      ],
      lists: [
        {
          intro: "After a URL change:",
          items: [
            "301 from old addresses;",
            "update internal links;",
            "sitemap and Webmaster;",
            "check chains.",
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
          title: "SEO link",
          kind: "tip",
          text: "Stable useful pages with clear URLs are the base. Ranking growth for a commercial core is a separate months-long process after technical prep (TOP planned 2–6 months).",
        },
      ],
    },
  ],
};
