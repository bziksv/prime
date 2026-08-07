import type { BlogPost } from "../../../data/blog";

/** EN overlay for oshibka-500 — same structure as RU JSON. */
export const oshibka500En: BlogPost = {
  slug: "oshibka-500",
  title: "HTTP 500 Internal Server Error: what it means and how to fix it",
  date: "2020-07-21",
  category: "SEO",
  cover: "/images/blog/oshibka-500/cover-en.webp",
  excerpt:
    "What HTTP 500 means, how it differs from 502/504, typical CMS and hosting causes, and a diagnosis order — without “magic” fix plugins.",
  lead: [
    "500 Internal Server Error is the server’s reply: the request arrived, but the application or configuration failed while handling it. Users and bots don’t get the page.",
    "It isn’t a “search penalty,” but long downtime hurts indexing and traffic. Below: how 500 differs from nearby 5xx codes, where to look for the cause, and in what order to fix it.",
  ],
  faq: [
    {
      q: "Is a 500 error an SEO problem?",
      a: "Indirectly: the page is unavailable. Long or widespread 5xx hurts UX and indexing. The number 500 itself is about server/code — not a “filter”.",
    },
    {
      q: "How does 500 differ from 502 and 504?",
      a: "500 — an error in the app or its environment. 502 — the gateway didn’t get a valid backend response. 504 — the gateway timed out waiting. More on the gateway — in the 502 article.",
    },
    {
      q: "Can 500 hit only some visitors?",
      a: "Yes: a specific URL, form, heavy report, cache, or another server in a cluster. Check in incognito and from outside (`curl -I`).",
    },
    {
      q: "Does switching a WordPress theme “blindly” help?",
      a: "Sometimes as a test if you have a backup and staging. Better start with logs and the last change (plugin, deploy, .htaccess).",
    },
    {
      q: "Do you need a redirect from a 500 page?",
      a: "No. Fix the cause. A redirect masks the symptom and confuses diagnosis.",
    },
    {
      q: "When should you call hosting support?",
      a: "If you lack log/server access, the disk is full, PHP/memory limits are exhausted, or the provider status shows an incident. Share time, URL, and response code.",
    },
    {
      q: "Does a 500 hit rankings immediately?",
      a: "A short blip usually passes. Days of downtime on important URLs risk crawl and conversions. Stability first, then “recrawl”.",
    },
  ],
  sections: [
    {
      title: "What 500 Internal Server Error means",
      level: 2,
      paras: [
        "A 5xx-group code: the server accepted the request but couldn’t handle it correctly. Unlike 404 (no resource) or 403 (forbidden), the cause is almost always inside — code, config, resources, dependencies.",
        "The browser shows a generic error page; details live in app and web-server logs. Users only need “the site is broken”; owners need where exactly.",
      ],
      lists: [
        {
          intro: "Typical context:",
          items: [
            "after a CMS or plugin update",
            "after editing `.htaccess` or nginx",
            "on a specific form/report under load",
            "when memory is short or PHP times out.",
          ],
        },
      ],
      links: [
        {
          label: "HTTP status codes",
          href: "/en/blog/kod-statusa-http/",
        },
        {
          label: "502 error",
          href: "/en/blog/oshibka-502/",
        },
      ],
    },
    {
      title: "Common causes",
      level: 2,
      paras: [
        "The list is long, but in practice recent changes and environment limits win most often. Recall what changed in the last hour or day: deploy, plugin, file permissions, PHP version.",
        "A broken `.htaccess`, rule syntax error, module conflict, outdated plugin after a core update — classics for WordPress and similar CMS.",
      ],
      lists: [
        {
          intro: "Check first:",
          items: [
            "PHP / app logs and the web-server error_log",
            "the last deploy and DB migrations",
            "new or updated plugins and theme",
            "`.htaccess` and rewrite config",
            "memory_limit, max_execution_time, disk space",
            "permissions on cache and upload directories.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Don’t install a random “500 fix plugin” on production. First backup, logs, and disable the last change on staging or via FTP/SSH.",
        },
      ],
    },
    {
      title: "How to diagnose",
      level: 2,
      paras: [
        "Confirm the code from outside: `curl -I https://example.com/problem-url/`. Lock time, URL, and reproducibility. Without that, hosting support and developers guess.",
        "Match error time with logs. Fatal error, Allowed memory size, syntax error, rewrite loop point to the layer. If 500 is only on one scenario — look at that form’s code or heavy SQL, not “the whole server”.",
      ],
      lists: [
        {
          intro: "Order:",
          items: [
            "confirm 500 from outside and in incognito",
            "open app and web-server logs",
            "roll back or disable the last change",
            "check disk, inodes, PHP limits",
            "on CMS — temporarily disable fresh plugins (via files if admin is down).",
          ],
        },
      ],
      links: [
        {
          label: "Server logs",
          href: "/en/blog/logi-servera/",
        },
        {
          label: "Web server",
          href: "/en/blog/veb-server/",
        },
      ],
    },
    {
      title: "How to fix it",
      level: 2,
      paras: [
        "A fix = removing the cause from the log, not changing DNS “just in case”. A broken `.htaccess` is restored from backup or rebuilt with the CMS’s stock rules. A Fatal-error plugin — disable by renaming its folder.",
        "If a script exceeds limits — optimize the query/code or raise adequate plan limits (not infinitely). Cheap hosting with constant 500 at peaks is a reason to revisit resources, not only “fix a file”.",
      ],
      lists: [
        {
          intro: "Working steps:",
          items: [
            "backup before edits",
            "roll back deploy / plugin / config change",
            "fix syntax and dependencies",
            "check permissions and file ownership",
            "re-run `curl` and the user scenario.",
          ],
        },
      ],
    },
    {
      title: "CMS and typical traps",
      level: 2,
      paras: [
        "On WordPress and similar tools the admin itself can return 500 — then fix via FTP/SSH: rename the fresh `plugins` folder, switch theme to a spare, temporarily simplify `.htaccess`.",
        "After recovery, restore needed pretty-URL rules and check forms, cart, and login: “home opened” ≠ “everything works”.",
      ],
      lists: [
        {
          intro: "After the incident:",
          items: [
            "update core and plugins on staging",
            "remove abandoned modules",
            "turn on monitoring for key URLs",
            "write down the cause in a ticket/team chat.",
          ],
        },
      ],
      links: [
        {
          label: "Site admin panel",
          href: "/en/blog/adminka-sayta/",
        },
      ],
    },
    {
      title: "Prevention and an SEO view",
      level: 2,
      paras: [
        "Staging before release, backups, uptime alerts on home and key scenarios, CPU/RAM headroom — basic hygiene. For SEO teams, 5xx in Search Console / webmaster tools means fix availability — not “buy more links”.",
        "After long downtime check indexation of important URLs and crawl. A mass “recrawl the whole site” before the response is stable only adds load.",
      ],
      lists: [
        {
          intro: "Control minimum:",
          items: [
            "alert if main URLs return 5xx",
            "don’t confuse 500 with a search filter",
            "releases via staging",
            "logs rotate and stay available to the team.",
          ],
        },
      ],
    },
  ],
  closing: [
    "500 is a signal to fix the app and environment — not to mask the response with a redirect. Logs, the last change, and an outside check close most cases faster than switching host “for luck”.",
  ],
};
