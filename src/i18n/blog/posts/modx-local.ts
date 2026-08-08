import type { BlogPost } from "../../../data/blog";

/** EN overlay for modx-local — same structure as RU JSON. */
export const modxLocalEn: BlogPost = {
  slug: "modx-local",
  title: "Installing MODX Revolution on a local server",
  date: "2018-02-14",
  category: "Websites",
  cover: "/images/blog/modx-local/cover-en.webp",
  excerpt:
    "How to install MODX Revolution locally: the package, virtual host, MySQL database, and setup wizard — using OSPanel/Open Server as an example, without outdated “no more than 5000 pages” limits.",
  lead: [
    "A local MODX Revolution install lets you build the site on your computer before hosting: edit templates, chunks, and snippets without risking the live domain.",
    "Below: the general order — download the package, unpack into the local server folder, create a DB, and run `/setup`. OSPanel/Open Server clicks and MODX wizard labels change — check current docs; the steps stay the same.",
  ],
  faq: [
    {
      q: "How does Traditional differ from other packages?",
      a: "Historically Traditional was a normal site install; Advanced/SDK — special scenarios and package development. Check current names and contents on the MODX download page.",
    },
    {
      q: "Is Open Server required?",
      a: "No. OSPanel, XAMPP, Laravel Herd, Docker, etc. work. You need PHP, a web server, and MySQL/MariaDB versions matching your MODX.",
    },
    {
      q: "Where is the admin after install?",
      a: "Usually `/manager`. Delete the `setup` folder after a successful install.",
    },
    {
      q: "Is MODX limited to “no more than 5000 pages”?",
      a: "Old reviews wrote that — it’s not a hard CMS law. Limits depend on hosting, cache, and architecture. For heavy e-commerce look at the stack and load, not a myth from a 2018 guide.",
    },
    {
      q: "Is an empty root password in phpMyAdmin okay?",
      a: "Only on an isolated local stack by default in some builds. Never on production.",
    },
  ],
  sections: [
    {
      title: "Why install MODX locally",
      level: 2,
      paras: [
        "Local is a sandbox: you can err, roll back the DB, and not take down prod. Handy for learning the manager, TV fields, and packages without paying hosting for every experiment.",
        "MODX is flexible in markup and logic, but it’s not a “big store button out of the box.” For high-load e-commerce compare stack and team skills — not only the CMS brand.",
      ],
      lists: [
        {
          intro: "Benefits of this approach:",
          items: [
            "free open-source engine",
            "flexible templates and chunks",
            "easy to learn before deploy",
            "same order as on hosting: files + DB + setup",
          ],
        },
      ],
      links: [
        {
          label: "Web server",
          href: "/en/blog/veb-server/",
        },
        {
          label: "Site admin panel",
          href: "/en/blog/adminka-sayta/",
        },
      ],
    },
    {
      title: "Prep: local server and files",
      level: 2,
      paras: [
        "Install a local stack (often OSPanel / Open Server successor) and make sure you can start and restart it. Download the MODX Revolution package only from the official site.",
        "Unpack the archive into the virtual-host folder — e.g. `domains/modx.local` or your panel’s equivalent. Folder name = local site name. After copying files, restart the server so the host is picked up.",
      ],
      lists: [
        {
          intro: "Before setup check:",
          items: [
            "PHP and extensions match your MODX version requirements",
            "write permissions on needed directories",
            "a stub/files open at `http://modx.local/`",
            "antivirus isn’t blocking unpack",
          ],
        },
      ],
      notes: [
        {
          title: "Official source",
          text: "Don’t install MODX from random “CMS packs.” Official download lowers swap risk and old vulnerable archives.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Database",
      level: 2,
      paras: [
        "Via phpMyAdmin or CLI create a database and a MySQL/MariaDB user with rights on that DB. Locally some panels simplify phpMyAdmin login by default — don’t do that on prod.",
        "Remember DB name, user, password, and host (`localhost` / `127.0.0.1`). Prefer a non-default table prefix — a small security and clarity win with several sites on one server.",
      ],
    },
    {
      title: "Setup wizard /setup",
      level: 2,
      paras: [
        "Open `http://your-local-host/setup`, pick language and “new install.” Enter DB settings, check the connection and UTF-8, create the manager admin account.",
        "If pre-install checks show OK — finish install. Always delete the `setup` directory (the wizard usually offers it). Admin login — `/manager`.",
      ],
      tables: [
        {
          caption: "Wizard fields (meaning)",
          headers: ["Field", "Guide"],
          rows: [
            ["DB type", "mysql / mariadb by stack"],
            ["DB server", "localhost or 127.0.0.1"],
            ["User / password", "Created at the DB step"],
            ["DB name", "The same database"],
            ["Table prefix", "Your own, not the shared default"],
            ["Manager admin", "Unique login and strong password"],
          ],
        },
      ],
    },
    {
      title: "After install",
      level: 2,
      paras: [
        "Update MODX and packages, set friendly URLs, check the site locally. Before moving to hosting match PHP/MySQL versions and back up files and DB.",
        "Protect `/manager` on production like any admin: strong password, extra access limits if possible, updates.",
      ],
      links: [
        {
          label: "Site security",
          href: "/en/blog/bezopasnost-sayta/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Local MODX = files into a virtual host + DB + `/setup` + delete setup + login at `/manager`. Check panel UI and package details in current docs.",
        "Don’t lean on “5000-page limit” myths from old comparisons — weigh the task, load, and skills.",
      ],
    },
  ],
  closing: [
    "Set up a local stack, unpack the official MODX package into the host, create a DB, and run setup — then you can calmly build templates before deploy to production.",
  ],
  related: [
    "veb-server",
    "adminka-sayta",
    "wordpress-admin",
    "bezopasnost-sayta",
    "uznat-cms",
    "tema-wordpress",
  ],
};
