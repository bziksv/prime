import type { BlogPost } from "../../../data/blog";

/** EN overlay for yandeks-disk — same structure as RU JSON. */
export const yandeksDiskEn: BlogPost = {
  slug: "yandeks-disk",
  title: "Yandex Disk: cloud storage for files and collaboration",
  date: "2020-08-20",
  category: "Digital marketing",
  cover: "/images/blog/yandeks-disk/cover-en.webp",
  excerpt:
    "What Yandex Disk is: file storage and sync, public links, and a comparison with Google Drive. Skip outdated free-GB figures — check the service’s current plans.",
  lead: [
    "Yandex Disk is cloud storage: files live on Yandex servers and stay available from a computer, phone, or share link. Handy for decks, contracts, media backups, and shared edits without carrying a USB drive.",
    "Free storage limits and plan prices change — trust the official page, not figures from 2020 articles. Below we cover everyday use cases and how teams choose between Yandex Disk and Google Drive.",
  ],
  faq: [
    {
      q: "How is Yandex Disk different from a USB stick?",
      a: "You need the internet, or pre-downloaded offline copies. The upside: you won’t lose the drive, you can share a link, and sync across devices.",
    },
    {
      q: "Is it safe to store contracts there?",
      a: "For sensitive data, review the service policy, use link passwords and expiry, and enable account 2FA. Critical files are sometimes duplicated in your own storage or an encrypted archive.",
    },
    {
      q: "Can I edit a document with someone else?",
      a: "Yes, for supported formats with the right access via link or folder. Exact office features depend on Yandex’s current UI.",
    },
    {
      q: "Should I pick Yandex Disk or Google Drive?",
      a: "In Russia the Yandex ecosystem is often more convenient — mail, Disk, familiar login. Google is stronger for Docs/Sheets and global teams. Choose based on your team and data jurisdiction.",
    },
    {
      q: "Does Disk replace a site backup?",
      a: "Not as your only hosting backup. Sites need scheduled database and file dumps; Disk is a handy place to store a copy — not the whole strategy.",
    },
  ],
  sections: [
    {
      title: "Why you need it and what it can do",
      level: 2,
      paras: [
        "Typical scenario: a manager carries a deck and a price list. The laptop dies or gets left behind — files open from a phone, or the client views them via a link. Same for shoot photos, layouts, and article drafts.",
        "Basics: upload any formats within your quota, desktop and mobile apps, browser preview for some documents and media, antivirus checks on uploads (per service policy), shared folders, and public links.",
        "Access levels: a private file, a view-only link, or one with edit rights. UI wording changes, but the point stays the same — don’t expose your whole drive with a public link to the root folder.",
        "Phone auto-upload is handy for a photo archive but eats quota. For a team, agree on folder structure and file names early — otherwise the cloud becomes a dump.",
      ],
      lists: [
        {
          intro: "When Disk is especially useful:",
          items: [
            "meetings outside the office;",
            "sending large files to a client;",
            "laptop and phone sync;",
            "drafts before publishing to the site;",
            "a just-in-case copy of important documents.",
          ],
        },
      ],
      links: [
        {
          label: "Site databases",
          href: "/en/blog/bazy-dannyh-sayta/",
        },
        {
          label: "Remote work",
          href: "/en/blog/udalennaya-rabota/",
        },
      ],
    },
    {
      title: "Getting started, Google comparison, and practice",
      level: 2,
      paras: [
        "Sign in with a Yandex account, open Disk in the browser or app, upload a project folder, check sync on a second device, and create a test public link to make sure nothing extra is exposed.",
        "Compared with Google Drive, both cover storage and sharing. The difference is ecosystem (Docs vs Yandex editors), team habits, regional availability, and data-storage policy. Don’t treat old 10 GB vs 5 GB comparisons as fact — quotas update.",
        "Mail.ru Cloud and other services raise the same questions: quota, speed, trust, link convenience. Businesses sometimes take a corporate plan with admin controls.",
        "Security practice: 2FA, separate links instead of one link to everything, link expiry where available, and don’t keep passwords in open text files next to contracts.",
        "Bottom line: Yandex Disk is a working tool for file access without a USB drive. Check current plans and access rights; for a site, the cloud complements — it doesn’t replace — hosting backups.",
      ],
      lists: [
        {
          intro: "Setup mini-checklist:",
          items: [
            "2FA on the account;",
            "clear folder structure;",
            "public-link permissions checked;",
            "client installed on work devices;",
            "quota and plan verified on Yandex’s site.",
          ],
        },
      ],
      links: [
        {
          label: "Web archive",
          href: "/en/blog/veb-arhiv/",
        },
        {
          label: "Digital agency",
          href: "/en/blog/didzhital-agentstvo/",
        },
      ],
    },
  ],
  related: [
    "bazy-dannyh-sayta",
    "udalennaya-rabota",
    "veb-arhiv",
    "didzhital-agentstvo",
    "favikon",
  ],
};
