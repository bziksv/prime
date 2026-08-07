import type { BlogPost } from "../../../data/blog";

/** EN overlay for logi-servera — same structure as RU JSON. */
export const logiServeraEn: BlogPost = {
  slug: "logi-servera",
  title: "Server logs and search crawler behavior",
  date: "2021-07-19",
  category: "SEO",
  cover: "/images/blog/logi-servera/cover-en.webp",
  excerpt:
    "How to read site access logs: crawler User-Agents, status codes, crawl budget, duplicates, and scan errors — alongside Webmaster tools and Search Console.",
  lead: [
    "Server logs record who requested what: people, CDN, monitoring, and search bots. They show real crawl activity — not only what webmaster panels summarize.",
    "Below — what to watch in access logs, how to estimate crawl budget, find wasteful URLs and scan errors. Closing from indexing and a full tech audit are related topics in separate articles.",
  ],
  faq: [
    {
      q: "Why logs if you have Webmaster / Search Console?",
      a: "Panels give summaries and samples. Logs are the full request stream to the server: rare bots, media, odd URLs, and exact status codes.",
    },
    {
      q: "Where do I get access.log?",
      a: "On hosting / VPS: the web server log directory (often `/var/log/nginx/` or the hoster panel). Format depends on Apache/Nginx and settings.",
    },
    {
      q: "What is crawl budget?",
      a: "A rough limit of crawler attention to the site over a period. Duplicates, parameters, heavy sections, and 4xx/5xx eat it. The goal — the bot visits important URLs more often.",
    },
    {
      q: "Can you fix SEO with logs alone?",
      a: "No. Logs diagnose crawl. Next — robots/canonical/structure fixes, content, and tech. See the tech audit and closing from indexing articles.",
    },
    {
      q: "Do you need a paid Log File Analyzer?",
      a: "At the start, an export + Excel/Google Sheets or a script is enough. Analyzers speed up large volumes; names and plans change.",
    },
  ],
  sections: [
    {
      title: "What server logs are",
      level: 2,
      paras: [
        "An access log is a chronology of HTTP requests: IP, time, method, URL, status code, User-Agent, sometimes referrer and response size. An error log is app/server failures; for SEO, access usually matters more.",
        "Crawlers leave characteristic User-Agents (Googlebot, YandexBot, and others). Not every “bot-like” string is an official crawler: verify IP/search-engine docs when in doubt.",
      ],
      lists: [
        {
          intro: "Typical fields:",
          items: [
            "date and time;",
            "requested URL;",
            "HTTP code (200, 301, 404, 500…);",
            "User-Agent;",
            "GET/POST method.",
          ],
        },
      ],
      links: [
        {
          label: "Web server",
          href: "/en/blog/veb-server/",
        },
      ],
    },
    {
      title: "How to open and parse a log",
      level: 2,
      paras: [
        "`.log` files are easy to view in an editor or import into a sheet (often CSV / space-separated). Several daily files are joined (`cat` / panel merge) before analyzing a period.",
        "Filter lines for the needed User-Agent, sort by URL and status code. Pivot tables: hits per URL, share of 404s for the bot, top paths “eating” budget.",
      ],
      lists: [
        {
          intro: "Quick order:",
          items: [
            "take a week–month slice;",
            "filter Googlebot / YandexBot;",
            "top URLs by request count;",
            "share of non-200 responses;",
            "URLs with `?` and clear duplicates.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "Don’t store or publish raw logs with user IPs without need — that’s personal data and disk load. For SEO analysis, anonymized aggregates are enough.",
        },
      ],
    },
    {
      title: "Crawl budget and priorities",
      level: 2,
      paras: [
        "If the bot constantly hits filters, sessions, favicons, and empty pagination, important service pages update less often. In logs that looks like frequent hits on “junk” paths and rare visits to money pages.",
        "Cut noise: canonicals and unified URLs, close utility paths from crawl/index as needed, faster responses, fewer redirect chains, solid internal links to priorities.",
      ],
      lists: [
        {
          intro: "What usually eats budget:",
          items: [
            "parameter duplicates;",
            "endless filters and sorts;",
            "broken links (mass 404s);",
            "heavy media that doesn’t need to be indexed;",
            "admin areas left open to crawl.",
          ],
        },
      ],
      links: [
        {
          label: "Closing from indexing",
          href: "/en/blog/zakrytie-ot-indeksatsii/",
        },
        {
          label: "Redirects",
          href: "/en/blog/redirekt/",
        },
      ],
    },
    {
      title: "Crawl errors and what to fix",
      level: 2,
      paras: [
        "Watch 4xx/5xx for bots: broken internal links, stale redirects, timeouts. Cross-check with crawl reports in Google Search Console and other webmaster tools — CDN and sampling can cause gaps.",
        "Heavy crawl of a catalog with empty content is a signal to simplify structure or close the section. Rare important URLs — strengthen internal links and the sitemap.",
      ],
      lists: [
        {
          intro: "Checklist after log review:",
          items: [
            "fix top 404s that have internal links;",
            "remove/merge parameter duplicates;",
            "align robots.txt and noindex with the goal;",
            "update the sitemap of priority URLs;",
            "re-check a log slice in 2–4 weeks.",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          text: "Cleaning crawl is part of technical prep. Ranking growth for the core is a separate months-long process — not the result of one log cleanup.",
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
  ],
};
