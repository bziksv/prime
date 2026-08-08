import type { BlogPost } from "../../../data/blog";

/** EN overlay for veb-server — same structure as RU JSON. */
export const vebServerEn: BlogPost = {
  slug: "veb-server",
  title: "Web server: what it is, how it works, and Apache vs Nginx vs IIS",
  date: "2021-12-30",
  category: "Hosting",
  cover: "/images/blog/veb-server/cover-en.webp",
  excerpt:
    "What a web server is in plain words: browser request, page response, hosting role, HTTPS, Apache/Nginx/IIS, and local stacks for development.",
  lead: [
    "A web server takes a browser request and returns a page, file, or error. It’s both software (Apache, Nginx, IIS) and the machine or cloud where it runs.",
    "Below: how it works, what makes up the “domain → server → site” chain, and what to watch when picking a stack — without nostalgia for outdated local packages.",
  ],
  faq: [
    {
      q: "Is a web server a computer or a program?",
      a: "Both meanings are alive: software that answers HTTP(S) requests, and the server environment (VPS/dedicated/cloud) where that software runs.",
    },
    {
      q: "How does Apache differ from Nginx?",
      a: "Both serve sites. Nginx is often a fast front (static, proxy); Apache is flexible and familiar on many shared hosts. In practice they’re often combined.",
    },
    {
      q: "Why HTTPS?",
      a: "It encrypts traffic between browser and server. Today it’s a baseline standard, plus a requirement of many browsers and search engines.",
    },
    {
      q: "Does a small site need its own server?",
      a: "Usually no: hosting/VPS from a provider is enough. Your own hardware makes sense for special loads and admin competence.",
    },
    {
      q: "What is a local server for development?",
      a: "An environment on your PC (Docker, OpenServer, XAMPP and analogues) to run the site without deploying to production.",
    },
  ],
  sections: [
    {
      title: "In plain words",
      level: 2,
      paras: [
        "Library analogy: the reader (browser) asks for a book (URL); the librarian (web server) finds the material in storage and hands it over. Unlike one book checked out, a site can be “read” by thousands at once.",
        "A sysadmin will say “hardware and network”; a developer — “software that serves HTTP.” Both are right.",
      ],
    },
    {
      title: "Jobs and functions",
      level: 2,
      paras: [
        "The server accepts requests, may run a backend (PHP, Node, Python…), returns HTML/files, writes logs, can restrict access, and serve related roles (static delivery, proxy).",
      ],
      lists: [
        {
          intro: "Typical loop:",
          items: [
            "accept the request",
            "find the resource or build a response via the app",
            "return status and response body",
            "log the hit",
            "with HTTPS — keep an encrypted channel",
          ],
        },
      ],
    },
    {
      title: "How a request flows",
      level: 2,
      paras: [
        "The user types an address or clicks a link. DNS turns the name into an IP. The browser sends an HTTPS request. The server handles it and returns a page or an error code (404, 500…).",
      ],
      lists: [
        {
          intro: "For a site to open you need:",
          items: [
            "hosting or a server with enough resources",
            "web server software",
            "a domain and DNS record",
            "site files / an application",
            "an HTTPS certificate (usually via Let’s Encrypt or the hosting panel)",
          ],
        },
      ],
      links: [
        {
          label: "Hypertext",
          href: "/en/blog/gipertekst/",
        },
      ],
    },
    {
      title: "Apache, Nginx, IIS",
      level: 2,
      paras: [
        "Apache — shared-hosting classic, modularity, familiar .htaccess. Nginx — strong on static and as a reverse proxy. IIS — Windows Server ecosystem.",
      ],
      lists: [
        {
          intro: "In practice:",
          items: [
            "small site on hosting — often Apache or Nginx out of the box from the panel",
            "high load / microservices — Nginx (or analogue) in front of the app",
            "corporate Windows stack — IIS",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "The shell choice is secondary to update security, backups, and monitoring. A trendy server with leaky PHP is worse than a boring but cared-for one.",
        },
      ],
      tables: [
        {
          caption: "Rough cheat sheet",
          headers: ["Software", "Strengths", "Where you often see it"],
          rows: [
            ["Apache", "Flexibility, .htaccess", "Shared hosting, CMS"],
            ["Nginx", "Static, proxy, load", "Prod, CDN setups"],
            ["IIS", "Windows integration", "Corporate .NET environments"],
          ],
        },
      ],
    },
    {
      title: "Local stacks for development",
      level: 2,
      paras: [
        "OpenServer, XAMPP and similar packs suit beginners. Denver is long outdated — don’t aim at it in the 2020s. Teams more often use Docker or built-in framework environments.",
        "Local is for breaking and fixing the site safely — not to replace production hosting.",
      ],
      lists: [
        {
          intro: "Minimum to start:",
          items: [
            "PHP/Node + DB per project needs",
            "HTTPS in prod (locally — as needed)",
            "matching major versions with prod when possible",
          ],
        },
      ],
    },
    {
      title: "Link to SEO and site availability",
      level: 2,
      paras: [
        "If the server returns 5xx, blocks bots, or slows TTFB, both people and indexing suffer. After a host change check response codes, redirects, and HTTPS.",
      ],
      lists: [
        {
          intro: "After a move:",
          items: [
            "home and key URLs return 200",
            "www/non-www and http→https are consistent",
            "sitemap and robots are reachable",
            "no mass 404s on old paths",
          ],
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
