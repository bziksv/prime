import type { BlogPost } from "../../../data/blog";

/** EN overlay for yandeks-brauzer — same structure as RU JSON. */
export const yandeksBrauzerEn: BlogPost = {
  slug: "yandeks-brauzer",
  title: "How to install Yandex Browser safely",
  date: "2018-03-19",
  category: "Digital marketing",
  cover: "/images/blog/yandeks-brauzer/cover-en.webp",
  excerpt:
    "Install Yandex Browser from the official site, move bookmarks and passwords, and fix common Windows errors — without third-party downloaders or outdated wizard screenshots.",
  lead: [
    "Yandex Browser is a Chromium-based browser tied to Yandex services: search, translate, sync, and built-in protection. A clean install only needs the official build for your OS — not a repack from a “free software” catalog.",
    "Wizard buttons and download URLs change over time, so treat the official Yandex page as the source of truth, not 2018 screenshots. After setup you’ll usually decide on default browser, data import, and whether to sign in for sync.",
  ],
  faq: [
    {
      q: "Where is it safe to download Yandex Browser?",
      a: "Only from the official Yandex site or browser download page. Third-party repacks and SMS-gated download sites often bundle malware.",
    },
    {
      q: "Which engine does it use?",
      a: "Chromium, like several other browsers. Chrome Web Store extensions usually work, but not always.",
    },
    {
      q: "Should I make it the default browser?",
      a: "Only if you want links from email and documents to open there. You can keep your current browser as primary.",
    },
    {
      q: "Do I need Yandex Disk during install?",
      a: "No. Cloud storage is a separate product; the wizard may offer it, but you can skip.",
    },
    {
      q: "Will Chrome passwords transfer over?",
      a: "Often yes, through the import wizard. After transfer, check the password manager and enable 2FA on important accounts.",
    },
  ],
  sections: [
    {
      title: "Download only the official installer",
      level: 2,
      paras: [
        "Open the official Yandex Browser download page and grab the build for Windows, macOS, or Linux — the site usually detects your OS. Skip free-software catalogs and installers bundled with junkware.",
        "Before you run the file, confirm the download finished completely. Truncated downloads are common on unstable connections.",
      ],
      lists: [
        {
          intro: "Why stick to the official source:",
          items: [
            "lower risk of a tampered file;",
            "current version and updates;",
            "no forced system optimizers;",
            "clear license and data policy.",
          ],
        },
      ],
      notes: [
        {
          title: "On stats and agreements",
          text: "The install wizard may ask about usage stats and Yandex services. Read the text and uncheck extras you don’t need — standard hygiene for any software install.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Install and first launch",
      level: 2,
      paras: [
        "Run the installer and walk through the wizard. On a corporate PC you may need Run as administrator. After install, the browser may offer to become your default app — decide deliberately.",
        "Next you’ll often see an import prompt for Chrome, Firefox, Edge, and others: bookmarks, history, saved passwords. Import helps when you’re switching primary browsers; if you’re unsure, skip and move data later.",
      ],
      lists: [
        {
          intro: "Typical order:",
          items: [
            "download from the official page;",
            "install under your OS account;",
            "decide on default browser;",
            "import data or skip;",
            "sign into a Yandex account if you want sync.",
          ],
        },
      ],
    },
    {
      title: "Sync and services",
      level: 2,
      paras: [
        "Signing into a Yandex account turns on sync for tabs, passwords, and settings across devices. Convenient — but use a strong password and 2FA on email and any critical accounts.",
        "Offers to install Disk, set a Yandex widget start page, and similar extras are optional. You can use the browser without the full services bundle.",
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
        "Installer messages depend on your Windows version and permissions. These are the failure patterns that showed up most in older guides and still matter today.",
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
              "Not a valid Win32 application",
              "Re-download and verify file integrity",
            ],
            [
              "Not enough disk space",
              "Free space or choose another drive",
            ],
            [
              "Blocked by antivirus or policy",
              "Allow the official installer in exceptions",
            ],
            [
              "Corporate PC",
              "Get rights from IT — don’t use a cracked repack",
            ],
          ],
        },
      ],
      notes: [
        {
          title: "Error codes",
          text: "Specific codes like 0x80072ee7 or 0x80070070 in 2018 guides are landmarks, not the only causes. Read the error text and installer log; when in doubt, reinstall from the official file.",
          kind: "tip",
        },
      ],
    },
    {
      title: "After install: settings minimum",
      level: 2,
      paras: [
        "Check for updates, import bookmarks if needed, and enable sync only if you trust the account. For client work, a separate browser profile or password manager helps keep things clean.",
        "Which browser is “best” is a separate debate; this article is about installing official Yandex Browser without extra risk.",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Use the official build, choose default browser deliberately, import data only if you need to, and fix errors through permissions, disk space, or a fresh download.",
        "Never pay or send SMS to third-party sites promising a free browser install.",
      ],
    },
  ],
  closing: [
    "Download Yandex Browser from the official page, install under your OS account, and move bookmarks only if you need them — that’s how you get a working browser without shady installers.",
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
