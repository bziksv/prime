import type { BlogPost } from "../../../data/blog";

/** EN overlay for wordpress-admin — same structure as RU JSON. */
export const wordpressAdminEn: BlogPost = {
  slug: "wordpress-admin",
  title: "How to open the WordPress admin and restore access",
  date: "2018-03-23",
  category: "Digital marketing",
  cover: "/images/blog/wordpress-admin/cover-en.webp",
  excerpt:
    "Signing into wp-admin and wp-login.php, email password recovery, reset via hosting, and typical cache-related failures — without advice to keep the login admin.",
  lead: [
    "The WordPress admin is the panel where you publish posts, edit pages, and install plugins. Usual entry: `https://your-site.example/wp-admin/` or `/wp-login.php`.",
    "Below: how to open the login form, what to do with a forgotten password, when to touch the database on hosting, and why cookies or cache get in the way. This is not a guide to hacking other people’s sites and not a call to live with the login `admin`.",
  ],
  faq: [
    {
      q: "How does wp-admin differ from wp-login.php?",
      a: "Both lead to auth. `/wp-admin/` opens the dashboard after login; `/wp-login.php` is the login form. On some sites a security plugin changes the login URL.",
    },
    {
      q: "Why won't /wp-admin/ open?",
      a: "Different login URL, HTTPS redirect, protection plugin, cache, wrong domain (www/non-www), or the site is down. Check the address from the host or developer email.",
    },
    {
      q: "Is keeping the login admin safe?",
      a: "No — it's a common brute-force target. Set a unique admin username and strong password; enable 2FA where possible.",
    },
    {
      q: "How is this different from the site-admin article?",
      a: "That one covers why a CMS and roles exist. Here — specifically WordPress login and access recovery.",
    },
    {
      q: "Is the phpMyAdmin password still MD5?",
      a: "Old guides said MD5. Modern WordPress uses stronger hashing; host panels often have a \"reset WP password\" tool without hand MD5. Check current docs.",
    },
  ],
  sections: [
    {
      title: "How to open the admin login",
      level: 2,
      paras: [
        "In the address bar open `https://your-domain.example/wp-admin/`. If the form doesn't show, try `https://your-domain.example/wp-login.php`. Use your domain; prefer HTTPS.",
        "After WordPress install, login and password are set at the install step (or come from the developer or host). \"Remember me\" is fine on a personal device and risky on a shared one.",
      ],
      lists: [
        {
          intro: "Before typing the password check:",
          items: [
            "keyboard layout and Caps Lock",
            "correct domain (www / non-www, staging subdomain)",
            "that it's your site, not a phishing copy",
            "whether a security plugin changed the login URL",
          ],
        },
      ],
      links: [
        {
          label: "Site admin panel",
          href: "/en/blog/adminka-sayta/",
        },
        {
          label: "WordPress security",
          href: "/en/blog/wordpress-bezopasnost/",
        },
      ],
      notes: [
        {
          title: "Don't keep admin",
          text: "Old instructions suggested the login `admin` \"if you didn't change anything.\" Today that's a bad habit: change the administrator username and password, limit login attempts.",
          kind: "tip",
        },
      ],
    },
    {
      title: "If you forgot the password",
      level: 2,
      paras: [
        "On the login form click \"Lost your password?\" (wording may differ). Enter the admin username or email — WordPress sends a link to the user's email.",
        "Mail sometimes lands in spam or never sends because of host mail settings. Then check the mailbox from `wp-config` or the user profile, or ask hosting or the developer to reset with their tool.",
      ],
      lists: [
        {
          intro: "Try this order:",
          items: [
            "recovery link on the login form",
            "email plus Spam folder",
            "login from a device with a live session → change password in the profile",
            "reset tool in the host panel",
            "only then — edit users in the DB",
          ],
        },
      ],
    },
    {
      title: "Reset via hosting and the database",
      level: 2,
      paras: [
        "Many hosts can reset the WordPress password from their panel — prefer that over hand edits. If you go into phpMyAdmin: back up the DB, find the users table (often `wp_users`; the prefix may differ), update the password the way current WordPress or host docs recommend.",
        "Don't blindly copy 2018 screenshots that say \"type the password and pick MD5\": the hash algorithm changed. A mistake in the users table can lock everyone out.",
      ],
      links: [
        {
          label: "Site security",
          href: "/en/blog/bezopasnost-sayta/",
        },
      ],
    },
    {
      title: "Cache, cookies, and other failures",
      level: 2,
      paras: [
        "If the password is right but login \"breaks,\" clear site cookies and browser cache; temporarily disable aggressive blockers. On the site side, cache plugins, firewalls, and login-attempt limits after brute force get in the way.",
        "Check you're opening the same protocol and host you installed WP on. Mixing `http`/`https` or mirrors sometimes loops redirects on the login form.",
      ],
      tables: [
        {
          caption: "What to check when login fails",
          headers: ["Symptom", "Where to look"],
          rows: [
            [
              "Wrong credentials",
              "Layout, another user, email reset",
            ],
            ["White screen / redirect", "Plugins, HTTPS, cache"],
            ["No email", "Spam, host mail, SMTP"],
            ["404 on wp-login", "Changed login URL, site move"],
            ["IP block", "Protection limits, host firewall"],
          ],
        },
      ],
    },
    {
      title: "After login: hygiene minimum",
      level: 2,
      paras: [
        "Change a weak password, check the user list and extra accounts, update WordPress, themes, and plugins. For ongoing work a password manager and 2FA help.",
        "General CMS and roles logic — in the site-admin article; WP hardening — in the security piece.",
      ],
      lists: [
        {
          intro: "Right after restoring access:",
          items: [
            "new unique password",
            "check users with the Administrator role",
            "core and plugin updates",
            "backup",
            "2FA / login-attempt limits",
          ],
        },
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
        "Standard path — `/wp-admin/` or `/wp-login.php`, then email recovery. Touch the DB only with a backup and a current hash-reset method.",
        "Don't publish other people's logins and don't try to guess access to sites you don't manage.",
      ],
    },
  ],
  closing: [
    "Open the login form on your domain, reset the password via email or the host panel, and harden the administrator account right away — so the WordPress admin is a work tool again, not a quest.",
  ],
  related: [
    "adminka-sayta",
    "wordpress-bezopasnost",
    "menedzher-paroley",
    "uskorenie-wordpress",
    "tema-wordpress",
    "bezopasnost-sayta",
  ],
};
