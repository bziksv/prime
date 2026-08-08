import type { BlogPost } from "../../../data/blog";

/** EN overlay for bezopasnost-sayta — same structure as RU JSON. */
export const bezopasnostSaytaEn: BlogPost = {
  slug: "bezopasnost-sayta",
  title: "How sites get hacked and how to defend: SQL injection and other threats",
  date: "2020-11-26",
  category: "SEO",
  cover: "/images/blog/bezopasnost-sayta/cover-en.webp",
  excerpt:
    "Threats typical for sites and stores: SQL injection, XSS, brute force, vulnerable plugins. How to think about defense and what to do after compromise — without attack how-tos.",
  lead: [
    "Sites aren’t hacked for sport — it’s about data, spam, malware redirects, or ransomware. For an owner in plain terms: someone exploits a code hole, a weak password, or a forgotten plugin.",
    "Below: an overview of typical threats (including SQL injection) and practical defense. The material is about protection and recovery, not how to run attacks. DB backups and HTTPS are covered in related articles.",
  ],
  faq: [
    {
      q: "What is SQL injection in plain English?",
      a: "An attacker slips a fragment into a form field or URL so the database runs an unwanted query. Defense — parameterized queries, input validation, CMS updates.",
    },
    {
      q: "Does HTTPS stop SQL injection?",
      a: "No. HTTPS encrypts the channel. Injections and app holes are another layer: code, ORM, DB permissions.",
    },
    {
      q: "Why is a site hack bad for SEO?",
      a: "Spam pages, malicious redirects, content theft, unsafe-site lists, trust and traffic drop.",
    },
    {
      q: "Is hosting antivirus enough?",
      a: "Useful as part of a stack, not the only measure. You need updates, strong passwords, least privilege, backups, and monitoring.",
    },
    {
      q: "What should you do right after a suspected breach?",
      a: "Rotate access, put the site in maintenance if needed, restore from a clean backup, update CMS/plugins, check email and webmaster tools for malware notices.",
    },
    {
      q: "Do you need a WAF?",
      a: "For stores and public forms often yes (hosting/CDN level). It doesn’t replace fixing vulnerable code.",
    },
    {
      q: "Can you “check a site for SQL” with an online scanner?",
      a: "Surface checkers give hints, not a guarantee. A serious audit needs a specialist; aggressive scanning of others’ sites without permission is unacceptable.",
    },
    {
      q: "Are WordPress plugins the main risk?",
      a: "Often yes: forgotten and unchecked extensions. Install fewer, update, remove unused, take from trusted sources.",
    },
  ],
  sections: [
    {
      title: "What threats a site faces",
      level: 2,
      paras: [
        "Web attacks aren’t one “hacker trick” — a set of scenarios: exploiting code flaws, password guessing, admin phishing, infection via an editor’s machine, holes in the server and panels.",
        "Attacker goals: customer data, spam from your domain, SEO spam in hidden pages, miners, ransomware. For business it’s equally bad — downtime, reputation damage, and recovery cost.",
      ],
      lists: [
        {
          intro: "Typical threat set:",
          items: [
            "database injections (SQL and related)",
            "XSS and session theft",
            "CSRF on admin actions",
            "brute force and leaked passwords",
            "vulnerable plugins/themes",
            "RCE via file upload",
            "compromised hosting/FTP",
          ],
        },
      ],
    },
    {
      title: "SQL injection: the idea without “how to attack”",
      level: 2,
      paras: [
        "A site talks to the database with queries. If user input is glued into SQL as a string, an attacker can change the query meaning. Modern code uses prepared statements / ORM — data doesn’t mix with commands.",
        "Injections hurt the core: reading/corrupting tables, sometimes reaching the filesystem (depends on DB and privileges). A store with orders and accounts is a priority target.",
      ],
      lists: [
        {
          intro: "Defense at the development layer:",
          items: [
            "parameterized queries only",
            "minimal privileges for the app DB user",
            "input validation and normalization",
            "current drivers and CMS",
            "don’t expose SQL errors to users",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Don’t hunt or run public “test payloads” on others’ sites. Security testing — only on your own staging or under contract.",
        },
      ],
      links: [
        {
          label: "Site databases",
          href: "/en/blog/bazy-dannyh-sayta/",
        },
      ],
    },
    {
      title: "Other common vectors",
      level: 2,
      paras: [
        "XSS: a malicious script on a page others or admins see. Brute force: guessing the admin password. Outdated plugin: a ready door without advanced hacking. Phishing: an email “confirm login” with a panel clone.",
        "Stores also risk personal and payment data leaks — PCI payment scope, HTTPS, and minimal data on your side matter here.",
      ],
      lists: [
        {
          intro: "Everyday holes:",
          items: [
            "admin / one password for everything",
            "FTP with a 2019 password",
            "demo plugins on production",
            "phpMyAdmin open to the internet",
            "`.sql` backups in `public_html`",
          ],
        },
      ],
      links: [
        {
          label: "SSL and HTTPS",
          href: "/en/blog/ssl-sertifikat/",
        },
      ],
    },
    {
      title: "If the site is already compromised",
      level: 2,
      paras: [
        "Don’t clean one file by eye and don’t keep the same passwords. Isolate, restore from a verified pre-incident backup, update everything, rotate keys and access, check cron and unknown admins.",
        "Tell the host if needed. In Search Console / webmaster tools clear malware warnings after cleanup. Notify customers per company policy if data was affected.",
      ],
      lists: [
        {
          intro: "Action order:",
          items: [
            "change panel, CMS, DB, email, SSH passwords",
            "revoke sessions and API keys",
            "restore a clean snapshot",
            "update CMS/plugins/themes",
            "check cron jobs and unknown users",
            "enable reinfection monitoring",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Roll back to a backup and skip password changes: the attacker logs in again with the same access.",
        },
      ],
    },
    {
      title: "Basic security hygiene",
      level: 2,
      paras: [
        "Updates, strong unique passwords, 2FA where available, least privilege, regular backups with a restore test, IP-restrict the admin if possible, host WAF/antivirus as an extra layer.",
        "Fewer attack surfaces: remove unused plugins, don’t index staging, don’t put secrets in the repo.",
      ],
      lists: [
        {
          intro: "Owner checklist:",
          items: [
            "CMS and plugins updated",
            "DB+files backup off the same disk",
            "passwords different and long",
            "file permissions sensible",
            "uptime and webmaster mail monitored",
            "incident owner assigned",
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
    {
      title: "Link to SEO and trust",
      level: 2,
      paras: [
        "Search engines flag unsafe sites, cut clicks, and demand confirmation. Spam injections in templates wreck snippets and index junk URLs. Ranking recovery after a long infection takes time — cleanliness and stability first.",
        "Security isn’t a separate tick after SEO — it’s the condition for content and tech to work on a live domain at all.",
      ],
      lists: [
        {
          intro: "After cleanup check:",
          items: [
            "no new spam URLs in the index",
            "warnings cleared in panels",
            "redirects and homepage correct",
            "no leftover malicious scripts in the theme",
          ],
        },
      ],
      links: [
        {
          label: "Duplicate pages",
          href: "/en/blog/dubli-stranits/",
        },
        {
          label: "Closing from indexing",
          href: "/en/blog/zakrytie-ot-indeksatsii/",
        },
      ],
    },
  ],
  related: [
    "bazy-dannyh-sayta",
    "ssl-sertifikat",
    "tehnicheskiy-seo-audit",
    "https-seo",
    "veb-server",
  ],
};
