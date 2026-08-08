import type { BlogPost } from "../../../data/blog";

/** EN overlay for wordpress-plaginy — same structure as RU JSON. */
export const wordpressPlaginyEn: BlogPost = {
  slug: "wordpress-plaginy",
  title: "How to install a WordPress plugin: catalog, ZIP, and FTP",
  date: "2017-12-14",
  category: "Digital marketing",
  cover: "/images/blog/wordpress-plaginy/cover-en.webp",
  excerpt:
    "Three ways to install a plugin on WordPress: search in the admin, ZIP upload, and copy into wp-content/plugins — without a cult of “more installs = better” or a pile of unsupported extensions.",
  lead: [
    "Plugins extend WordPress: SEO, forms, cache, store. You install them from the admin catalog, by uploading a ZIP, or via FTP into `wp-content/plugins`, then activate.",
    "Below: install order and typical failures (nested archive, host upload bans). Which SEO plugins to pick lives in a separate piece; here it’s install and basic security hygiene.",
  ],
  faq: [
    {
      q: "How is this different from the SEO plugins article?",
      a: "That one covers which tool groups you need. Here — how to technically install and activate any plugin.",
    },
    {
      q: "Is FTP required?",
      a: "No. Usually \"Plugins → Add New\" or a ZIP upload is enough. FTP is a fallback if hosting blocks admin installs.",
    },
    {
      q: "Do many installs mean you can trust it?",
      a: "A compass, not a guarantee. Check updates, compatibility with your WP version, support reviews, and the permissions the plugin asks for.",
    },
    {
      q: "What should you do after install?",
      a: "Activate, configure, check the site, and back up if needed. Remove unused plugins — don't only deactivate.",
    },
    {
      q: "Can you install everything popular?",
      a: "No. Every plugin is code and risk. Take it for a task, not \"just in case.\"",
    },
  ],
  sections: [
    {
      title: "Before installing",
      level: 2,
      paras: [
        "Back up files and DB, especially on production. Check PHP and WordPress version and plugin compatibility. Staging makes conflicts easier to catch.",
        "Install extensions only from the official WordPress.org catalog or a clear vendor. \"Nulled\" and pirate packs are a common path to a backdoor.",
      ],
      lists: [
        {
          intro: "Minimum before clicking Install:",
          items: [
            "backup",
            "clear plugin job",
            "no duplicate of a tool you already have",
            "updates in recent months",
            "access rights under control",
          ],
        },
      ],
      links: [
        {
          label: "WordPress SEO plugins",
          href: "/en/blog/wordpress-seo-plaginy/",
        },
        {
          label: "WordPress security",
          href: "/en/blog/wordpress-bezopasnost/",
        },
      ],
    },
    {
      title: "Install from the admin catalog",
      level: 2,
      paras: [
        "In the dashboard: Plugins → Add New. Find the name, open the card, click Install, then Activate. Menu labels may differ slightly by translation and version.",
        "If the archive is \"double\" (ZIP inside ZIP with docs), the installer complains — unpack to the plugin folder with PHP files and upload a correct ZIP.",
      ],
      notes: [
        {
          title: "Popularity ≠ security",
          text: "The install counter helps filter abandoned projects, but doesn't replace checking the author, changelog, and compatibility notes for your theme.",
          kind: "tip",
        },
      ],
    },
    {
      title: "ZIP upload via the admin",
      level: 2,
      paras: [
        "On the same Add New page you can upload a plugin from your computer: pick the ZIP, install, activate. Handy for premium plugins from the developer's site.",
        "If hosting blocked admin installs (permissions, open_basedir, policies), switch to FTP or ask support to enable what's needed.",
      ],
    },
    {
      title: "Install via FTP or file manager",
      level: 2,
      paras: [
        "Connect over FTP or SFTP (FileZilla, WinSCP, etc.) or the host file manager. Unpack the plugin locally into one folder named after the plugin and upload it to `wp-content/plugins/`.",
        "In the admin the plugin appears in the list — activate it. Don't dump files into the plugins root without a folder: harder to remove and update.",
      ],
      tables: [
        {
          caption: "Where to put files",
          headers: ["Path", "What should be there"],
          rows: [
            ["wp-content/plugins/plugin-name/", "Plugin files"],
            ["Not site root", "Otherwise you mix it with core"],
            ["Not inside the theme", "A theme update will wipe the plugin"],
          ],
        },
      ],
      links: [
        {
          label: "WordPress admin",
          href: "/en/blog/wordpress-admin/",
        },
      ],
    },
    {
      title: "After activation",
      level: 2,
      paras: [
        "Open plugin settings, run the wizard, check key site pages. On a white screen deactivate via FTP (rename the folder) and sort out the conflict.",
        "Keep plugins updated. Remove unused ones: deactivated code still sits on disk.",
      ],
      lists: [
        {
          intro: "Ongoing hygiene:",
          items: [
            "one tool per job",
            "don't hoard \"for later\"",
            "test cache and forms after install",
            "backup before mass updates",
          ],
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Main path — catalog or ZIP in the admin; FTP is fallback. Activation and setup are required; security beats \"install everything popular.\"",
        "SEO stack choice — in a separate article; dashboard login — in the WordPress admin piece.",
      ],
    },
  ],
  closing: [
    "Pick a plugin for the job, install from the catalog or ZIP, activate and check the site — then remove extras from `wp-content/plugins` so you don't accumulate risk.",
  ],
  related: [
    "wordpress-seo-plaginy",
    "wordpress-bezopasnost",
    "wordpress-admin",
    "uskorenie-wordpress",
    "tema-wordpress",
    "adminka-sayta",
  ],
};
