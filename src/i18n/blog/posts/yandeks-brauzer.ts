import type { BlogPost } from "../../../data/blog";

/** EN overlay for yandeks-brauzer — same structure as RU JSON. */
export const yandeksBrauzerEn: BlogPost = {
  slug: "yandeks-brauzer",
  title: "How to install Yandex Browser safely",
  date: "2018-03-19",
  category: "Internet marketing",
  cover: "/images/blog/yandeks-brauzer/cover-en.webp",
  excerpt:
    "Installing Yandex Browser from the official site, moving bookmarks and passwords, typical Windows errors — without third-party “free downloaders” and outdated wizard clicks.",
  lead: [
    "Yandex Browser is a Chromium browser with Yandex services: search, translate, sync, protection. For install you only need the official build for your OS.",
    "Below — how to download without “gray” sites, what to do after install, and which Windows errors show up most. Wizard buttons and download URLs changed — compass: the official Yandex page, not 2018 screenshots.",
  ],
  faq: [
    {
      q: "Where is it safe to download?",
      a: "Only from the official Yandex site / browser download page. Third-party “repacks” and SMS sites risk malware.",
    },
    {
      q: "Which engine does it use?",
      a: "Chromium-based, like several other browsers. Chrome Web Store extensions are often compatible, but not always.",
    },
    {
      q: "Must it be the default browser?",
      a: "No. It’s convenience for links from mail and documents. You can keep your current browser as primary.",
    },
    {
      q: "Do you need Yandex Disk during install?",
      a: "No. Cloud storage is a separate product; the wizard may offer it — you can skip.",
    },
    {
      q: "Will Chrome passwords transfer?",
      a: "Often yes via the import wizard. After transfer check the password manager and 2FA on important accounts.",
    },
  ],
  sections: [
    {
      title: "Download only the official installer",
      level: 2,
      paras: [
        "Open the official Yandex Browser download page and get the build for Windows, macOS, or Linux — the site usually detects the OS. Don’t use “free software” catalogs or installers with bundled junkware.",
        "Before running the file, make sure the download finished fully (size isn’t truncated), especially on an unstable connection.",
      ],
      lists: [
        {
          intro: "Why only the official source:",
          items: [
            "lower risk of a swapped file;",
            "current version and updates;",
            "no forced “optimizers”;",
            "clear license and data policy.",
          ],
        },
      ],
      notes: [
        {
          title: "On stats and agreements",
          text: "The install wizard may include items about sending stats and Yandex services. Read the text and uncheck extras you don’t need — normal hygiene for any software install.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Install and first launch",
      level: 2,
      paras: [
        "Run the installer and confirm the wizard steps. On a corporate PC you may need “Run as administrator.” After install the browser may offer to become the default app — decide deliberately.",
        "Next it often offers to import data from Chrome, Firefox, Edge, etc.: bookmarks, history, saved passwords. Import helps when switching primary browsers; if unsure — skip and move later selectively.",
      ],
      lists: [
        {
          intro: "Typical order:",
          items: [
            "download from the official page;",
            "install under your OS account;",
            "decide on “default browser”;",
            "import data or skip;",
            "sign into a Yandex account if you need sync.",
          ],
        },
      ],
    },
    {
      title: "Sync and services",
      level: 2,
      paras: [
        "Signing into a Yandex account turns on sync for tabs, passwords, and settings across devices. Convenient — but the master password/2FA on email and critical cabinets must be strong.",
        "Offers to install Disk, set a start page with Yandex widgets, and so on are optional. You can use the browser without the full services “pack.”",
      ],
      links: [
        {
          label: "Yandex Disk",
          href: "/en/blog/yandeks-disk/",
        },
        {
          label: "Password manager",
          href: "/en/blog/menedzher-paroley/",
        },
      ],
    },
    {
      title: "Typical Windows install errors",
      level: 2,
      paras: [
        "Installer messages depend on Windows version and rights. Below — problem classes that showed up most in old guides and still matter in meaning.",
      ],
      tables: [
        {
          caption: "What to check on failure",
          headers: ["Situation", "What to do"],
          rows: [
            [
              "No admin rights",
              "Run the installer as administrator",
            ],
            [
              "“Not a valid Win32 application”",
              "Re-download; check download integrity",
            ],
            [
              "Not enough disk space",
              "Free space or use another drive",
            ],
            [
              "Blocked by antivirus/policy",
              "Allow the official installer in exceptions",
            ],
            [
              "Corporate PC",
              "Rights via IT — not a cracked repack",
            ],
          ],
        },
      ],
      notes: [
        {
          title: "Error codes",
          text: "Specific codes like 0x80072ee7 / 0x80070070 in 2018 guides are landmarks, not the only causes. Read the error text and installer log; when unsure, reinstall from the official file.",
          kind: "tip",
        },
      ],
    },
    {
      title: "After install: settings minimum",
      level: 2,
      paras: [
        "Check updates, import bookmarks if needed, enable sync only if you trust the account. For client cabinets a separate browser profile or password manager is handy.",
        "“Which browser is better” is a separate topic; here the job is to install official Yandex Browser without extra risk.",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Official build, deliberate “default” choice, optional data import, fix errors via rights/disk space/re-download.",
        "Don’t pay or send SMS for “installing a free browser” on third-party sites.",
      ],
    },
  ],
  closing: [
    "Download Yandex Browser from the official page, install under your OS account, and move bookmarks only if you need to — that’s how you get a working browser without gray installers.",
  ],
  related: [
    "yandeks-disk",
    "menedzher-paroley",
    "cookies",
    "chrome-rasshireniya-marketing",
    "chrome-rasshireniya-seo",
    "https-seo",
  ],
};
