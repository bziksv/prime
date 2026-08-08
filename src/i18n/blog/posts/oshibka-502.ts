import type { BlogPost } from "../../../data/blog";

/** EN overlay for oshibka-502 — same structure as RU JSON. */
export const oshibka502En: BlogPost = {
  slug: "oshibka-502",
  title: "502 Bad Gateway: what it means and what to do",
  date: "2021-03-02",
  category: "SEO",
  cover: "/images/blog/oshibka-502/cover-en.webp",
  excerpt:
    "What HTTP 502 Bad Gateway means, the usual causes on site and hosting, and a calm diagnosis order — without panic or “magic” plugins.",
  lead: [
    "502 Bad Gateway means a proxy or gateway (often nginx or a CDN) did not get a valid response from the upstream — PHP, Apache, or your app.",
    "It is not an “SEO penalty.” A site that stays down still loses traffic and crawl while the error hangs. Below: common causes and what to check.",
  ],
  faq: [
    {
      q: "Is 502 an SEO problem?",
      a: "Indirectly: bots and visitors cannot see the page. Long downtime hurts. The code itself is about infrastructure, not a ranking filter.",
    },
    {
      q: "How is it different from 500 and 504?",
      a: "500 is an application error. 504 means the gateway timed out waiting. 502 means the backend response was missing or broken.",
    },
    {
      q: "Can a visitor see it when I don’t?",
      a: "Yes — local cache, another CDN POP, or a short blip. Check in a private window and with an external uptime check.",
    },
    {
      q: "Will changing DNS fix it right away?",
      a: "Rarely as first aid. Start with logs, backend status, and PHP or worker limits.",
    },
    {
      q: "Should you redirect around a 502?",
      a: "No. Fix the server or app. Do not paper over 502 with a redirect.",
    },
    {
      q: "Should you clear cache on a 502?",
      a: "Only if you have reason to think a bad response was cached. Clearing cache does not replace checking the backend, logs, and limits.",
    },
    {
      q: "When should you contact hosting support?",
      a: "Immediately if you lack server access or logs show infrastructure faults. Send the error time, URL, status code, and what you already checked.",
    },
  ],
  sections: [
    {
      title: "Typical causes",
      level: 2,
      paras: [
        "PHP-FPM or the app is down or not answering, an upstream timeout expired, the server is overloaded, the proxy config is broken, the CDN is glitching, or SSL between proxy and backend is failing.",
        "The same page may return 502 only under load — for example a heavy database query that ties up every worker. Note the exact time and URL; a screenshot of the error page alone is not enough.",
      ],
      lists: [
        {
          intro: "Often shows up after:",
          items: [
            "a deploy or config change",
            "a traffic spike",
            "stuck CMS plugins",
            "hitting hosting limits",
          ],
        },
      ],
    },
    {
      title: "How to fix it",
      level: 2,
      paras: [
        "Check hosting status and your uptime monitor. Read nginx or Apache logs and PHP logs. Restart the PHP pool or container only by your usual procedure. Disable a recently installed CMS plugin if the timing lines up with the error.",
        "Do not start by randomly changing DNS, PHP version, or a dozen settings. Localize the layer first: CDN, web server, app, database, or an external API. That way the fix does not hide the cause — or create a new one.",
      ],
      lists: [
        {
          intro: "Order of checks:",
          items: [
            "confirm 502 from outside (`curl -I`)",
            "gateway and application logs",
            "CPU, RAM, and disk load",
            "upstream timeouts",
            "roll back the last change",
          ],
        },
      ],
      links: [
        {
          label: "Web server",
          href: "/en/blog/veb-server/",
        },
        {
          label: "Server logs",
          href: "/en/blog/logi-servera/",
        },
      ],
    },
    {
      title: "Prevention",
      level: 2,
      paras: [
        "You need uptime monitoring, sane limits, staging before release, cache and queues for heavy jobs, and some resource headroom.",
        "Do not watch only the homepage. Include checkout, login, forms, APIs, and a few key category pages — they often stress the app differently than a static home.",
      ],
      lists: [
        {
          intro: "For the SEO team:",
          items: [
            "alert when key URLs return 5xx",
            "do not confuse 502 with a search filter",
            "after recovery, check indexing of important pages",
          ],
        },
      ],
    },
    {
      title: "Diagnosis via logs and metrics",
      level: 2,
      paras: [
        "In the proxy log, find the request by time, URI, and request id, then match it to the app log. Messages about connect() failed, premature response, timeout, or exhausted workers tell you where to dig next.",
        "Metrics help tell a one-off blip from a systemic issue. Watch CPU and memory, disk space, process count, database response time, and the request queue before, during, and after the incident.",
      ],
      lists: [
        {
          intro: "Before you ping a developer or host, prepare:",
          items: [
            "exact URL and time with timezone",
            "status code and how often it repeats",
            "log snippets without passwords or tokens",
            "list of recent releases and config changes",
          ],
        },
      ],
    },
    {
      title: "What to check after recovery",
      level: 2,
      paras: [
        "After the fix, hit the URLs again from outside, in a private window, and via monitoring. Make sure the error did not vanish on one node or in local cache only — and that key user flows still work.",
        "If bots and visitors saw 502 for a long stretch, check webmaster reports and crawl trends. Do not auto-request a recrawl of thousands of URLs until the server response is stable.",
      ],
      lists: [
        {
          intro: "Close the incident when:",
          items: [
            "several checks return the expected codes",
            "load and log errors look normal again",
            "cause and actions are written down",
            "a clear alert is set for a repeat",
          ],
        },
      ],
      notes: [
        {
          title: "SEO note",
          kind: "tip",
          text: "Clearing 502 restores crawl and UX. It is not a shortcut to page one: once the site is stable, ranking work for a query core is still planned over roughly 2–6 months.",
        },
      ],
    },
  ],
};
