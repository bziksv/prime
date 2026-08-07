import type { BlogPost } from "../../../data/blog";

/** EN overlay for oshibka-502 — same structure as RU JSON. */
export const oshibka502En: BlogPost = {
  slug: "oshibka-502",
  title: "502 Bad Gateway: what it means and what to do",
  date: "2021-03-02",
  category: "SEO",
  cover: "/images/blog/oshibka-502/cover-en.webp",
  excerpt:
    "What HTTP 502 Bad Gateway means, typical causes on site and hosting, and a step-by-step diagnosis order — without panic or “magic” plugins.",
  lead: [
    "502 Bad Gateway means a proxy or gateway (often nginx/CDN) didn’t get a valid response from the upstream (PHP, Apache, app).",
    "Below — common causes and what to check. It’s not an “SEO penalty”, but a down site cuts traffic and indexing while the error persists.",
  ],
  faq: [
    {
      q: "Is 502 an SEO problem?",
      a: "Indirectly: bots and users don’t see the page. Long downtime hurts. The 502 code itself is about infrastructure.",
    },
    {
      q: "How does it differ from 500 and 504?",
      a: "500 — application error. 504 — gateway timed out waiting. 502 — backend response missing or broken.",
    },
    {
      q: "Can a visitor see it when I don’t?",
      a: "Yes: local cache, another CDN POP, a brief blip. Check in incognito and via an external monitor.",
    },
    {
      q: "Does changing DNS help immediately?",
      a: "Rarely first aid. Start with logs, backend status, PHP/worker limits.",
    },
    {
      q: "Do you need a redirect?",
      a: "No. Fix the server/app — don’t mask 502 with a redirect.",
    },
    {
      q: "Should you clear cache on 502?",
      a: "Only if you have reason to think a bad response was cached. Clearing doesn’t replace checking backend, logs, and limits.",
    },
    {
      q: "When to contact hosting support?",
      a: "Right away if you lack server access or logs show infrastructure faults. Pass error time, URL, status code, and what you already checked.",
    },
  ],
  sections: [
    {
      title: "Typical causes",
      level: 2,
      paras: [
        "PHP-FPM or the app is down or not responding, upstream timeout expired, server overloaded, broken proxy config, CDN glitch, or SSL between proxy and backend failing.",
        "The same page may return 502 only under load: e.g. a heavy DB query exhausts workers. So record exact time and URL — don’t stop at a screenshot of the error.",
      ],
      lists: [
        {
          intro: "Often after:",
          items: [
            "a deploy and config change;",
            "a traffic spike;",
            "stuck CMS plugins;",
            "hitting hosting limits.",
          ],
        },
      ],
    },
    {
      title: "How to fix it",
      level: 2,
      paras: [
        "Check hosting status and monitoring. Read nginx or Apache and PHP logs. Restart the PHP pool or container per procedure; disable a recently installed CMS plugin if the link to the error is confirmed.",
        "Don’t start with random DNS, PHP-version, or dozen-of-settings thrashing. First localize the layer: CDN, web server, app, database, or external API. That way the fix doesn’t hide the cause or create a new one.",
      ],
      lists: [
        {
          intro: "Order:",
          items: [
            "confirm 502 from outside (`curl -I`);",
            "gateway and app logs;",
            "CPU/RAM/disk load;",
            "upstream timeouts;",
            "roll back the last change.",
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
        "You need uptime monitoring, sane limits, staging before release, cache and queues for heavy jobs, and resource headroom.",
        "Don’t monitor only the homepage. Include checkout, login, forms, APIs, and a few key categories: they often load the app differently than a static home.",
      ],
      lists: [
        {
          intro: "For the SEO team:",
          items: [
            "alert if main URLs return 5xx;",
            "don’t confuse 502 with a search filter;",
            "after recovery — check indexing of key pages.",
          ],
        },
      ],
    },
    {
      title: "Diagnosis via logs and metrics",
      level: 2,
      paras: [
        "In the proxy log find the request by time, URI, and request id, then match it to the app log. Messages about connect() failed, premature response, timeout, or exhausted workers point where to dig next.",
        "Metrics help separate a one-off blip from a systemic issue. Watch CPU and memory, disk space, process count, DB response time, and request queue before, during, and after the incident.",
      ],
      lists: [
        {
          intro: "For a developer or host ticket prepare:",
          items: [
            "exact URL and time with timezone;",
            "status code and how often it repeats;",
            "log snippets without passwords or tokens;",
            "list of recent releases and config changes.",
          ],
        },
      ],
    },
    {
      title: "What to check after recovery",
      level: 2,
      paras: [
        "After the fix, repeat requests from outside, in a private window, and via monitoring. Make sure the error didn’t vanish on one node or in a local cache only — and that key user flows really work.",
        "If 502 was visible to bots and visitors for long, check webmaster reports and crawl dynamics. Don’t auto-request recrawl of thousands of URLs: first confirm a stable server response.",
      ],
      lists: [
        {
          intro: "Close the incident when:",
          items: [
            "several checks return expected codes;",
            "load and log errors normalized;",
            "cause and actions are recorded;",
            "a clear alert is set for a repeat.",
          ],
        },
      ],
      notes: [
        {
          title: "SEO note",
          kind: "tip",
          text: "Fixing 502 restores crawl and UX. It isn’t a TOP shortcut: after the site is stable, ranking work for a core is still planned over 2–6 months.",
        },
      ],
    },
  ],
};
