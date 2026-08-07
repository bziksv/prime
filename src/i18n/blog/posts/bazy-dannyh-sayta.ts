import type { BlogPost } from "../../../data/blog";

/** EN overlay for bazy-dannyh-sayta — same structure as RU JSON. */
export const bazyDannyhSaytaEn: BlogPost = {
  slug: "bazy-dannyh-sayta",
  title: "Website databases: organization and backup",
  date: "2021-01-15",
  category: "SEO",
  cover: "/images/blog/bazy-dannyh-sayta/cover-en.webp",
  excerpt:
    "What a site database stores, how it differs from files on disk, why backups matter, and how not to lose orders, users, and content after a failure or hack.",
  lead: [
    "A site isn’t only HTML and images. Most live data (products, orders, users, CMS settings) sits in a database. Losing theme files hurts; losing the DB with no backup often means losing business history.",
    "Below — how the DB relates to site files, why it exists, which risks matter, and how to approach backups without a cult of “once a year on a USB stick”.",
  ],
  faq: [
    {
      q: "How does a DB differ from files on hosting?",
      a: "Files are code, templates, media. The DB is structured records: posts, SKUs, orders, options. Recovery needs both layers.",
    },
    {
      q: "Which DBMS do sites use most?",
      a: "Classic CMSs — often MySQL/MariaDB. PostgreSQL and others appear; follow CMS and hosting docs.",
    },
    {
      q: "Is a files-only backup enough?",
      a: "No. Without a DB dump you restore an empty or stale shell without orders and content.",
    },
    {
      q: "How often to back up?",
      a: "Depends on change rate: a store with orders — more often (daily/hourly); a brochure site — less. Critical: a fresh copy before CMS updates and migrations.",
    },
    {
      q: "Where to store copies?",
      a: "Not only on the same server disk. Need a second contour: another host, object storage, company policy — with a restore test.",
    },
    {
      q: "Host backup = I can stop thinking?",
      a: "Handy as insurance, but check retention, what it includes (files+DB), and whether you can restore yourself. Don’t rely blindly.",
    },
    {
      q: "Does the DB affect SEO directly?",
      a: "Indirectly: slow queries and outages cut UX and crawl. Content duplicates are more about URLs and templates than table names. Tech audit and logs are sibling topics.",
    },
    {
      q: "Can you edit the DB by hand in phpMyAdmin?",
      a: "Only if you understand the schema and have a fresh backup. A typo in the orders table costs more than an edit via the CMS admin.",
    },
  ],
  sections: [
    {
      title: "What a site database is",
      level: 2,
      paras: [
        "A database (DB) is structured storage: tables, rows, relations. The CMS reads and writes content and service data there; the web server returns assembled pages to the user.",
        "Analogy: a car catalog in tables (model, power, color) with filters and links. Same way a store keeps products and orders, a blog — posts and metafields, a portal — users and permissions.",
      ],
      lists: [
        {
          intro: "Usually the DB holds:",
          items: [
            "content records (pages, posts, cards);",
            "users and roles;",
            "CMS and plugin settings;",
            "orders, carts, forms (if not moved to external services);",
            "service queues, app logs (depends on the stack).",
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
      title: "Files and DB: two layers of one site",
      level: 2,
      paras: [
        "Theme code, plugins, `uploads` with images — filesystem. Product texts, prices, order status — usually the DB. Media often also has metadata in the DB (WordPress attachments and peers).",
        "When moving hosts you copy both layers and fix access (DB login, table prefix, URLs in options). One layer without the other gives a white screen or a site with no content.",
      ],
      lists: [
        {
          intro: "Before migration:",
          items: [
            "DB dump + file archive;",
            "compatible PHP/MySQL versions;",
            "secrets and `.env` not in a public archive;",
            "a plan to check forms, payment, and account after the move.",
          ],
        },
      ],
    },
    {
      title: "Why a site needs a DB in practice",
      level: 2,
      paras: [
        "Without a DB a dynamic site becomes static files: hard to edit a thousand cards, filter, track stock, manage users. The DB gives queries, relations, and point updates.",
        "The cost of convenience is responsibility: schema mistakes, full disks, SQL injection in vulnerable code hit the data. Update code and plugins; limit DB access; verify backups by restoring.",
      ],
      lists: [
        {
          intro: "Risks:",
          items: [
            "tables deleted/corrupted on a bad update;",
            "hacks and ransomware;",
            "host disk failure;",
            "human error in phpMyAdmin;",
            "revision and junk-table bloat → slowdowns.",
          ],
        },
      ],
    },
    {
      title: "Organization: prefixes, permissions, performance",
      level: 2,
      paras: [
        "On shared hosting often one MySQL database per site; table prefix is set at CMS install. Don’t give the app root access: a separate DB user with rights only on the needed database.",
        "Performance: indexes, object/page cache, cleaning revisions and transients, sane limits. A “heavy” DB shows as timeouts and a slow admin — that’s engineering and hosting, not “one more SEO plugin”.",
      ],
      lists: [
        {
          intro: "Hygiene:",
          items: [
            "strong DB passwords, not the same as admin;",
            "limit remote MySQL access;",
            "monitor DB size and slow queries;",
            "don’t keep production dumps in `public_html`.",
          ],
        },
      ],
    },
    {
      title: "Backup: what and how",
      level: 2,
      paras: [
        "A DB backup is usually an SQL dump (or a volume snapshot from a cloud provider). A file backup is a code + uploads archive. Full restore = both + environment secrets.",
        "Take copies before CMS/plugin updates and major catalog changes. Keep several restore points (e.g. day / week), not one overwriteable “latest”.",
      ],
      lists: [
        {
          intro: "Backup checklist:",
          items: [
            "what’s included: DB + files + who owns it;",
            "schedule and retention;",
            "storage off the same disk;",
            "restore test on staging at least quarterly;",
            "encrypt sensitive dumps in transit.",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "An untested backup is false safety. Until you’ve restored the site from a copy, you don’t know the dump is intact.",
        },
      ],
      links: [
        {
          label: "Cloud service (storage adjacent)",
          href: "/en/blog/oblachnyy-servis/",
        },
      ],
    },
    {
      title: "Tie-in with SEO and stability",
      level: 2,
      paras: [
        "Search needs availability and predictable server responses. Outages from the DB, 5xx errors, and endless page generation hurt crawl and conversion more than a small meta tag.",
        "Duplicates, pagination, and canonicals are about URLs and templates; the DB only stores content. If the site is down or responds in minutes — stability and backups first, fine semantics later.",
      ],
      lists: [
        {
          intro: "Practical order:",
          items: [
            "live availability monitoring;",
            "current backups with a test;",
            "CMS updates and access control;",
            "then the finer SEO layer.",
          ],
        },
      ],
      links: [
        {
          label: "Server logs",
          href: "/en/blog/logi-servera/",
        },
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
      notes: [
        {
          title: "SEO timelines",
          kind: "tip",
          text: "Stable DB and backups restore crawl and UX. They aren’t a TOP shortcut: after the site is solid, rankings for a core are still planned over 2–6 months.",
        },
      ],
    },
  ],
  related: [
    "veb-server",
    "logi-servera",
    "oblachnyy-servis",
    "tehnicheskiy-seo-audit",
    "ssl-sertifikat",
  ],
};
