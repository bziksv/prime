import type { BlogPost } from "../../../data/blog";

/** EN overlay for wordpress-ustanovka — same structure as RU JSON. */
export const wordpressUstanovkaEn: BlogPost = {
  slug: "wordpress-ustanovka",
  title: "How to install WordPress on hosting",
  date: "2017-04-20",
  category: "Hosting",
  cover: "/images/blog/wordpress-ustanovka/cover-en.webp",
  excerpt:
    "Installing WordPress: hosting requirements, database, file upload, the install.php wizard, and first settings — without PHP 4.3 from 2017 guides and a Total Commander cult.",
  lead: [
    "WordPress runs on hosting with PHP and MySQL or MariaDB: create a database, put files in the site root, and run the install wizard. Next — admin login, permalinks, updates.",
    "One-click installers in the host panel (Softaculous and similar) often do the same in minutes; the classic path matters when auto-install is unavailable or you need full control. PHP and DB version requirements are on wordpress.org — figures like PHP 4.3 from old articles are long obsolete.",
  ],
  faq: [
    {
      q: "Must you edit wp-config by hand?",
      a: "No. The install wizard often creates the config if the directory is writable. Hand-copying from the sample is a fallback.",
    },
    {
      q: "Where do the files go?",
      a: "Into the domain document root: usually `public_html`, `www`, or the domain folder in the panel. Not a random nested folder if the site should open from the root.",
    },
    {
      q: "How is install different from admin login?",
      a: "Install creates tables and the first user. Then login is `/wp-admin/`. Login and password reset are a separate article.",
    },
    {
      q: "Do you need paid hosting?",
      a: "For a practice blog free or local sometimes works. For commerce — a paid plan with backups, SSL, and a normal PHP version.",
    },
    {
      q: "Does install put you in search TOP?",
      a: "No. The CMS is only a platform. SEO is content, tech, and months of work; site prep ≠ TOP-10. Rankings are planned over 2–6 months after work starts.",
    },
  ],
  sections: [
    {
      title: "What you'll need",
      level: 2,
      paras: [
        "A domain with DNS pointing to hosting, panel access (or FTP/SFTP), a fresh WordPress archive from the official site. Code editor and FTP client — optional; the host file manager is often enough.",
        "Before start ask the host: PHP version, MySQL/MariaDB, limits, how to create a DB. If you're unsure about the plan type — sort hosting first.",
      ],
      lists: [
        {
          intro: "Minimum set:",
          items: [
            "hosting with current PHP",
            "MySQL/MariaDB database and a user with rights",
            "SFTP/FTP or a file manager",
            "official WordPress archive",
            "a strong password for the WP admin",
          ],
        },
      ],
      links: [
        {
          label: "What hosting is",
          href: "/en/blog/hosting/",
        },
        {
          label: "Domain registration",
          href: "/en/blog/registratsiya-domena/",
        },
      ],
    },
    {
      title: "Database",
      level: 2,
      paras: [
        "In the host panel create a database and user, attach the user to the DB with full rights. Save: DB name, login, password, host (often `localhost`, sometimes a separate host).",
        "Charset and collation — utf8mb4 if the panel offers a choice. Host support will help if \"textbook\" fields are missing.",
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Mixing up the DB name and user name or setting the wrong DB_HOST — the install wizard reports a DB connection error.",
          kind: "tip",
        },
      ],
    },
    {
      title: "WordPress files on the server",
      level: 2,
      paras: [
        "Unpack the archive locally and upload the contents of the `wordpress` folder to the site root — so `wp-admin`, `wp-content`, `wp-includes`, and `index.php` sit side by side. Or upload the zip and unpack on the server if the panel can.",
        "SFTP beats outdated unencrypted FTP. Client name (FileZilla, panel, any manager) doesn't matter — host, login, port, and directory do.",
      ],
    },
    {
      title: "Install wizard",
      level: 2,
      paras: [
        "Open `https://your-domain.example/wp-admin/install.php` (or the site root — redirect to install). Set language, DB details if asked, then site title, admin login, password, and email.",
        "Don't use login `admin` and password `123456`. After success sign in at `/wp-admin/`. If you create the config by hand from `wp-config-sample.php` — fill DB data and unique security keys (generator on wordpress.org), save as `wp-config.php`.",
      ],
      lists: [
        {
          intro: "Classic order:",
          items: [
            "DB created",
            "files in the root",
            "install.php completed",
            "admin login",
            "permalinks and updates",
          ],
        },
      ],
      links: [
        {
          label: "WordPress admin login",
          href: "/en/blog/wordpress-admin/",
        },
      ],
    },
    {
      title: "One-click install in the host panel",
      level: 2,
      paras: [
        "Many hosts offer \"install WordPress in one click.\" Pick the domain, admin login and password — the script creates the DB and files. After that still open the admin, change the password if needed, and check updates.",
        "Auto-install saves time but doesn't remove responsibility for backups, SSL, and core, theme, and plugin updates.",
      ],
    },
    {
      title: "Right after install",
      level: 2,
      paras: [
        "Enable HTTPS, set permalinks, remove demo content, install only needed plugins from the official catalog. Pick a theme for the job, not \"the most downloaded picture.\"",
        "Discourage search indexing while the site is still a draft. Security and speed are separate tracks.",
      ],
      lists: [
        {
          intro: "Day-one checklist:",
          items: [
            "strong password and admin email",
            "core updates",
            "SSL and redirect to HTTPS",
            "permalinks",
            "backup before plugin experiments",
          ],
        },
      ],
      links: [
        {
          label: "WordPress plugins",
          href: "/en/blog/wordpress-plaginy/",
        },
        {
          label: "WordPress security",
          href: "/en/blog/wordpress-bezopasnost/",
        },
        {
          label: "Choosing a theme",
          href: "/en/blog/tema-wordpress/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Installing WordPress is DB + files + wizard. After that hygiene matters more: passwords, updates, backups, sensible plugins.",
        "The official package and current PHP on hosting beat a \"PHP 4 guide\" from old articles.",
      ],
    },
  ],
  closing: [
    "Create the database, put official WordPress in the root, run install.php or the panel installer — and lock basic security hygiene right away. The CMS is ready; content and promotion are next.",
  ],
  related: [
    "wordpress-admin",
    "wordpress-plaginy",
    "wordpress-bezopasnost",
    "hosting",
    "tema-wordpress",
    "uskorenie-wordpress",
  ],
};
