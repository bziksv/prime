import type { BlogPost } from "../../../data/blog";

/** EN overlay for hosting — same structure as RU JSON. */
export const hostingEn: BlogPost = {
  slug: "hosting",
  title: "What hosting is and how to choose a provider",
  date: "2017-08-30",
  category: "Internet marketing",
  cover: "/images/blog/hosting/cover-en.webp",
  excerpt:
    "Hosting in plain language: why a site needs a server, how shared, VPS, dedicated, and cloud differ, and what to check when choosing — without “uptime = TOP” myths and paid rankings.",
  lead: [
    "Hosting is placing the site’s files and databases on a server that answers visitor requests around the clock. Without it a domain is only a name: there is nowhere to serve the content from.",
    "Below — hosting types and selection criteria for the job. Plans, panels, and SLAs change; use the current contract and support, not 2017 screenshots.",
  ],
  faq: [
    {
      q: "Are hosting and domain the same?",
      a: "No. A domain is a name in DNS. Hosting is where the site and DB live. You can buy them from different companies and link them via NS.",
    },
    {
      q: "Free hosting for a business?",
      a: "For a throwaway “try it” card it sometimes works. For commerce — risk of the provider’s ads, limits, weak accountability, and thin support.",
    },
    {
      q: "Shared or VPS for a beginner?",
      a: "A brochure site and a small blog often live on shared. A store, CRM, or traffic spikes — closer to VPS/cloud with clear resources.",
    },
    {
      q: "Does 99.9% uptime guarantee TOP?",
      a: "No. Availability helps users and crawl, but rankings are a separate story: content, demand, competition. Site prep ≠ TOP in a month. TOP is planned over 2–6 months of work.",
    },
    {
      q: "Where to store personal data?",
      a: "If you process personal data of Russian residents, account for localization rules and the provider contract. That is a legal/security zone, not an “obvious plan checkbox.”",
    },
  ],
  sections: [
    {
      title: "Why you need hosting",
      level: 2,
      paras: [
        "When someone opens a page, the browser asks a server for data. Hosting takes the request and returns HTML, images, API answers. Servers usually sit in data centers: power, bandwidth, cooling, physical security.",
        "Analogy: the site is paintings, hosting is a 24/7 gallery. A home PC for a public site is almost always worse: unstable link, IP, noise, security.",
      ],
      links: [
        {
          label: "Domain registration",
          href: "/en/blog/registratsiya-domena/",
        },
        {
          label: "Site speed",
          href: "/en/blog/skorost-sayta/",
        },
      ],
    },
    {
      title: "Free vs paid",
      level: 2,
      paras: [
        "Free platforms often cut CPU/disk, show their own ads, and barely own downtime or deletion. Fine for a practice landing; for leads and payments — reputation and downtime risk.",
        "Paid hosting is sold in packs: space, traffic, PHP/DB, mail, backups, SSL. Price rises with resource guarantees and support level.",
      ],
      lists: [
        {
          intro: "Typical free downsides:",
          items: [
            "small quotas and resource queues;",
            "provider ads or redirects;",
            "weak accountability for data;",
            "CMS and cron limits;",
            "painful migration when the project grows.",
          ],
        },
      ],
    },
    {
      title: "Paid hosting types",
      level: 2,
      paras: [
        "Shared: many sites on one machine, resources are split. Cheap and simple, but a neighbor with a heavy script can eat performance.",
        "VPS — a dedicated slice of CPU/RAM/disk in a virtual machine. More control (often root), more responsibility for the OS and updates.",
        "Dedicated — a whole physical machine. Colocation — your server in the provider’s rack: you pay for space, power, and bandwidth. Cloud — a pool of machines with scaling; billing is often for use, not “one disk forever.”",
      ],
      lists: [
        {
          intro: "Roughly by job:",
          items: [
            "brochure / blog — shared;",
            "store, Bitrix, spikes — VPS or managed cloud;",
            "high load and your own stack — dedicated/cloud;",
            "your own hardware — colocation.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Buying the “cheapest VPS” with no backups or monitoring — then being surprised the DB is gone after a disk failure.",
          kind: "tip",
        },
      ],
    },
    {
      title: "What to check when choosing",
      level: 2,
      paras: [
        "Start with site type and growth: brochure, catalog, store, account area. Then stack (PHP/Node, DB version), whether you need root, who administers.",
        "Provider age and reputation help, but rankings can be paid — read fresh support and incident reviews, not only “place in a top list.”",
      ],
      lists: [
        {
          intro: "Practical checklist:",
          items: [
            "uptime and SLA in the contract, not only in ads;",
            "latency and data-center geography vs your audience;",
            "backups: frequency, retention, restore test;",
            "panel, SSH, mail, SSL, inode/CPU limits;",
            "24/7 support and language;",
            "renewal price, not only the first month.",
          ],
        },
      ],
    },
    {
      title: "Speed, uptime, and search",
      level: 2,
      paras: [
        "Slow TTFB and frequent 5xx hurt conversion and crawl. Guides like “server response under 200 ms” are a useful engineering target, not a TOP-10 magic formula.",
        "Search engines care about availability and page experience, but hosting alone does not “rank you.” First a stable server response and correct HTTPS, then content and demand. Ranking work is planned over months, not a one-month flip.",
      ],
      links: [
        {
          label: "Speeding up WordPress",
          href: "/en/blog/uskorenie-wordpress/",
        },
      ],
    },
    {
      title: "Legal and ops nuances",
      level: 2,
      paras: [
        "If the site collects personal data, policy, consent, and where data is processed physically/legally matter. Rules change — check current norms and a lawyer, not one paragraph of an old guide.",
        "Separately lock access: who owns the hosting account, where invoices go, whether 2FA and a password manager are in place. A staff change should not leave the site ownerless.",
      ],
      links: [
        {
          label: "Password manager",
          href: "/en/blog/menedzher-paroley/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Hosting is infrastructure under the site: from shared to cloud. Choose by load, stack, and who will admin.",
        "Domain, DNS, and hosting can be split. Backups and support beat a pretty first-month price.",
      ],
    },
  ],
  closing: [
    "Define the project type, compare shared/VPS/cloud on resources and SLA, check backups and renewal — then pay. Stable hosting does not replace SEO, but without it the site simply does not open.",
  ],
  related: [
    "registratsiya-domena",
    "skorost-sayta",
    "uskorenie-wordpress",
    "domen-pervogo-urovnya",
    "menedzher-paroley",
    "cms-internet-magazina",
  ],
};
