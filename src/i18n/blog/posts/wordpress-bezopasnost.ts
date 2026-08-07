import type { BlogPost } from "../../../data/blog";

/** EN overlay for wordpress-bezopasnost — same structure as RU JSON. */
export const wordpressBezopasnostEn: BlogPost = {
  slug: "wordpress-bezopasnost",
  title: "WordPress site security: a practical checklist",
  date: "2019-12-27",
  category: "Hosting",
  cover: "/images/blog/wordpress-bezopasnost/cover-en.webp",
  excerpt:
    "How to lower WordPress breach risk: updates, passwords, login, plugins and themes, backups, HTTPS, 2FA, and least privilege — without attack how-tos.",
  lead: [
    "WordPress is popular — and therefore often targeted: holes in core, plugins, and themes, weak passwords, an open wp-admin. A breach hits SEO: spam, redirects, malware in the SERP, lost trust.",
    "Harden WordPress with updates, access hygiene, backups, HTTPS, and least privilege — CMS-specific defenses. General threats (injections, XSS, brute force) live in the site security article. Defense and recovery only — not breach scenarios.",
  ],
  faq: [
    {
      q: "Is WordPress insecure by definition?",
      a: "No. Risk grows from popularity and forgotten plugins. Timely updates and access hygiene cut the threat a lot.",
    },
    {
      q: "Is one security plugin enough?",
      a: "As a layer — yes. It doesn't replace updates, strong passwords, backups, and a minimum of extensions.",
    },
    {
      q: "Should you change the wp_ table prefix?",
      a: "Weak obscurity. Updates, DB privileges, and backups matter more. Changing the prefix on a live site risks breakage — only with a clear plan and a copy.",
    },
    {
      q: "Is HTTPS mandatory?",
      a: "Yes for admin, forms, and trust. A certificate protects the channel; it doesn't replace CMS patches.",
    },
    {
      q: "How many plugins is normal?",
      a: "As many as you truly need. Each extra one is attack surface and conflicts. Delete unused ones — don't only deactivate.",
    },
    {
      q: "Are free themes dangerous?",
      a: "Not all. Themes and plugins from shady \"nulled\" archives with backdoors are. Take them from the official catalog or trusted authors.",
    },
    {
      q: "What should you do if you suspect a breach?",
      a: "Change all passwords and keys, restore from a clean backup, update core, plugins, and themes, check webmaster panels for malware, bring in a specialist if needed.",
    },
    {
      q: "Does hardening WordPress improve rankings?",
      a: "Not directly. But a breach drops traffic and trust. Stability first; SEO expectations over months after that — prep ≠ TOP-10, and core rankings usually build over 2–6 months after work starts.",
    },
  ],
  sections: [
    {
      title: "Why WordPress is attacked so often",
      level: 2,
      paras: [
        "WP's share of the web is huge: scanners hunt known CVEs in core and popular plugins. Vulnerability news appears regularly — watch updates and don't leave the site on a version \"because it works.\"",
        "A typical entry point isn't \"hacker magic\" — it's a weak password, login admin, an outdated plugin, an infected theme from a pirate archive, or FTP with one password for everything.",
      ],
      lists: [
        {
          intro: "Hardening priorities:",
          items: [
            "core, theme, and plugin updates",
            "strong unique passwords + 2FA",
            "minimum extensions",
            "backups and HTTPS",
            "restricted admin access",
          ],
        },
      ],
      links: [
        {
          label: "Site security",
          href: "/en/blog/bezopasnost-sayta/",
        },
        {
          label: "How to identify a CMS",
          href: "/en/blog/uznat-cms/",
        },
      ],
    },
    {
      title: "Access: login, password, 2FA, IP",
      level: 2,
      paras: [
        "Don't use predictable logins like admin. Strong password: length, case, digits, symbols, uniqueness (password manager). Turn on two-factor authentication for administrators.",
        "Change or protect the login URL (don't rely on a \"secret\" address alone — it only adds friction). With a static office IP you can lock wp-admin at the server layer; with a dynamic IP that lockout easily locks you out — plan exceptions.",
      ],
      lists: [
        {
          intro: "Access minimum:",
          items: [
            "no shared password for email, hosting, and WP",
            "2FA on admins",
            "roles by least privilege",
            "close unnecessary author or login exposure",
          ],
        },
      ],
    },
    {
      title: "Updates, plugins, and themes",
      level: 2,
      paras: [
        "Apply core and extension updates after a backup. Delete unused plugins and themes entirely. Keep trusted, maintained products; \"do-everything\" suites often drag extra code.",
        "Themes — from the official repo or paid authors with updates. Pirated \"premium free\" packs are a common backdoor source. Before install, check the last update date and reviews.",
      ],
      lists: [
        {
          intro: "Extension hygiene:",
          items: [
            "inventory once a quarter",
            "remove idle plugins",
            "don't install everything \"just in case\"",
            "security and backup — from trusted sources",
          ],
        },
      ],
      links: [
        {
          label: "HTTPS and SEO",
          href: "/en/blog/https-seo/",
        },
      ],
    },
    {
      title: "Backups, HTTPS, file permissions",
      level: 2,
      paras: [
        "File and DB backups — automatic (hosting or plugin) and periodically manual to independent storage. Verify the backup actually restores.",
        "SSL/TLS is mandatory. Disable theme and plugin file editing from the admin on prod (`DISALLOW_FILE_EDIT`) so a stolen session can't easily drop a shell. File and directory permissions — per host guidance, not 777 \"to make it work.\"",
      ],
      lists: [
        {
          intro: "After an incident:",
          items: [
            "change all passwords and salts or keys",
            "roll back to a clean backup",
            "update everything",
            "check Webmaster / Search Console for malware",
            "rotate API and mail secrets",
          ],
        },
      ],
      links: [
        {
          label: "Site databases",
          href: "/en/blog/bazy-dannyh-sayta/",
        },
        {
          label: "Yandex Webmaster",
          href: "/en/blog/yandeks-vebmaster/",
        },
      ],
    },
    {
      title: "What not to treat as a silver bullet",
      level: 2,
      paras: [
        "Changing the table prefix, hiding the WP version, and a \"secret\" login URL alone don't fix an outdated plugin. Updates, monitoring, a hosting or CDN WAF, and access discipline help.",
        "Hardening is continuous. For SEO you need a clean site without spam pages and browser warnings. After stabilization, return to content and tech: rankings build over months — not \"right after changing the password.\"",
      ],
      lists: [
        {
          intro: "Final checklist:",
          items: [
            "updates are a ritual",
            "passwords + 2FA",
            "few plugins, clean themes",
            "backups verified",
            "HTTPS and file-edit disabled on prod",
            "general hygiene from the site security article",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "A security incident is put out first. SEO expectations — after cleanup and re-crawl, over weeks to months. Prep ≠ TOP-10; core rankings usually take 2–6 months after work starts.",
        },
      ],
      links: [
        {
          label: "Site security",
          href: "/en/blog/bezopasnost-sayta/",
        },
        {
          label: "Why the site isn't in TOP",
          href: "/en/blog/sayt-ne-v-top/",
        },
      ],
    },
  ],
  related: [
    "bezopasnost-sayta",
    "https-seo",
    "bazy-dannyh-sayta",
    "uznat-cms",
    "yandeks-vebmaster",
    "cookies",
  ],
};
