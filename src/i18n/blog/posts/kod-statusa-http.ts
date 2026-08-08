import type { BlogPost } from "../../../data/blog";

/** EN overlay for kod-statusa-http — same structure as RU JSON. */
export const kodStatusaHttpEn: BlogPost = {
  slug: "kod-statusa-http",
  title: "HTTP status codes: classes, meaning, and how to check them",
  date: "2021-02-01",
  category: "SEO",
  cover: "/images/blog/kod-statusa-http/cover-en.webp",
  excerpt:
    "What an HTTP response status is, how to read classes 1xx–5xx, which codes matter for SEO, and how to check one URL or the whole site.",
  lead: [
    "An HTTP status code is a three-digit number in the server response: whether the page was served, a redirect is needed, or something failed. Browsers and search bots read it before they touch the HTML.",
    "Below: code classes, what a webmaster should watch, and how to check URLs one by one or in bulk. Separate deep-dives on 200 and 502 are in related articles.",
    "Wrong statuses (soft 200 on a removed page, redirect chains, mass 5xx) hurt crawl and indexing more than a typo in the footer.",
  ],
  faq: [
    {
      q: "Where can I see the status code?",
      a: "DevTools → Network, `curl -I`, online checkers, crawlers (Screaming Frog and similar), and hosting or CDN reports.",
    },
    {
      q: "What status is “normal” for an indexed page?",
      a: "Usually 200. Permanent move — 301. Temporary — 302/307. Removed with no replacement — 404 or 410.",
    },
    {
      q: "How does a 404 differ from a 410?",
      a: "404 means “not found” (it may come back). 410 means “gone on purpose.” For permanently removed URLs, 410 is clearer for bots.",
    },
    {
      q: "Why do status codes matter for SEO?",
      a: "The bot decides whether to index a URL, whether to pass signals on redirect, and how much crawl budget to spend on errors.",
    },
    {
      q: "What is a soft 404?",
      a: "The page returns 200 but essentially says “nothing here.” For search that is worse than an honest 404: junk enters the index.",
    },
    {
      q: "Should I check the whole site?",
      a: "Yes after a move, CMS change, or mass URL edits. On a regular cadence — sample key templates plus a crawl.",
    },
    {
      q: "Do 5xx errors kill rankings immediately?",
      a: "A brief blip usually does not. Long downtime and mass 5xx do hurt crawl and trust in availability.",
    },
  ],
  sections: [
    {
      title: "How a server response works",
      level: 2,
      paras: [
        "The client requests a URL. The server replies with a line like `HTTP/1.1 200 OK`, headers, and a body. The code is a fast signal of what happened.",
        "Search relies on status while crawling: 200 can be parsed as a document, 301 means follow the new address, 404 means do not expect content.",
      ],
      lists: [
        {
          intro: "In the status line:",
          items: [
            "protocol version",
            "three-digit code",
            "short text phrase (OK, Not Found…)",
          ],
        },
      ],
      links: [
        {
          label: "Web server basics",
          href: "/en/blog/veb-server/",
        },
      ],
    },
    {
      title: "Classes 1xx–5xx",
      level: 2,
      paras: [
        "Codes group by the first digit. In SEO practice you mostly meet 2xx, 3xx, 4xx, and 5xx.",
      ],
      lists: [
        {
          intro: "In short:",
          items: [
            "1xx — intermediate (rare on typical sites)",
            "2xx — success (200 — page served)",
            "3xx — redirect (301/302/307…)",
            "4xx — client error (404, 403, 410…)",
            "5xx — server error (500, 502, 503, 504…)",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Don’t memorize every code. Keep a cheat sheet of common ones and know how to check the real response — not “what the admin panel should show.”",
        },
      ],
      links: [
        {
          label: "301 and 302 redirects",
          href: "/en/blog/redirekt/",
        },
        {
          label: "502 Bad Gateway",
          href: "/en/blog/oshibka-502/",
        },
      ],
    },
    {
      title: "What matters to webmasters and SEO",
      level: 2,
      paras: [
        "Key landings should stably return 200. After a move — direct 301s without long chains. Removed URLs — don’t mask them with a homepage 200.",
        "Watch 404 spikes in Webmaster and logs: broken internal links, outdated backlinks, export errors.",
      ],
      lists: [
        {
          intro: "Red flags:",
          items: [
            "product or service removed but still 200 with an empty template",
            "A→B→C→D redirect chains",
            "homepage returning 302 “somewhere”",
            "mass 5xx at night during bot peaks",
          ],
        },
      ],
      links: [
        {
          label: "Broken links",
          href: "/en/blog/bitye-ssylki/",
        },
      ],
    },
    {
      title: "How to check one URL",
      level: 2,
      paras: [
        "The most honest way is the response header: `curl -I https://example.com/page/` or the Network tab in the browser. Check the final code after redirects and the Location chain.",
        "Online tools are handy, but for disputed cases check from a server or CI and account for CDN and geo.",
      ],
      lists: [
        {
          intro: "One-URL checklist:",
          items: [
            "final response code",
            "number of redirect hops",
            "www/https match the canonical",
            "no soft 404 by content",
          ],
        },
      ],
    },
    {
      title: "Checking the whole site",
      level: 2,
      paras: [
        "A crawler follows internal links and builds a status table. After a structure change, compare the list to the sitemap and priority URLs from Webmaster.",
        "Bulk-checking external backlinks is separate: not everything should redirect to the homepage.",
      ],
      lists: [
        {
          intro: "When to run a full crawl:",
          items: [
            "domain or HTTPS move",
            "CMS or URL scheme change",
            "major template redesign",
            "error spikes in webmaster panels",
          ],
        },
      ],
      links: [
        {
          label: "Server logs",
          href: "/en/blog/logi-servera/",
        },
      ],
    },
    {
      title: "How to build it into routine",
      level: 2,
      paras: [
        "Alerts on 5xx for main hosts, a monthly look at 404s, a check after every release. Statuses are hygiene — not one-shot SEO magic.",
        "Fixing tech is part of site prep. Ranking growth for a keyword set after things stabilize is a separate, months-long process.",
      ],
      lists: [
        {
          intro: "Mini ritual:",
          items: [
            "uptime monitoring",
            "crawl of key templates",
            "top-404 review from logs",
            "a 301 map when URLs are removed",
          ],
        },
      ],
    },
  ],
};
