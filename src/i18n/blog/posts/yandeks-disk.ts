import type { BlogPost } from "../../../data/blog";

/** EN overlay for yandeks-disk — same structure as RU JSON. */
export const yandeksDiskEn: BlogPost = {
  slug: "yandeks-disk",
  title: "Yandex Disk: cloud storage for files and collaboration",
  date: "2020-08-20",
  category: "Internet marketing",
  cover: "/images/blog/yandeks-disk/cover-en.webp",
  excerpt:
    "What Yandex Disk is: storing and syncing files, public links, comparison with Google Drive. Without outdated “free GB” figures — check the service’s current plans.",
  lead: [
    "Yandex Disk is cloud storage: files sit on the service’s servers and are available from a computer, phone, and via a link. Handy for decks, contracts, media backups, and shared edits without a USB stick in your pocket.",
    "Below — why businesses and freelancers need the cloud, basic scenarios, and how to choose between Yandex Disk and Google Drive. Free space volumes and plan prices change — check the official page, not figures from 2020 articles.",
  ],
  faq: [
    {
      q: "How is it different from a USB stick?",
      a: "You need the internet (or pre-downloaded offline copies). Upside: you won’t lose the stick, you can share a link, and sync devices.",
    },
    {
      q: "Is it safe to store contracts?",
      a: "For sensitive data — check the service policy, link passwords/expiry, and account 2FA. Critical items are sometimes duplicated in your own storage or an encrypted archive.",
    },
    {
      q: "Can you edit a document together?",
      a: "Yes for supported formats and access rights via link/folder. Exact office features depend on Yandex’s current UI.",
    },
    {
      q: "Yandex or Google Drive?",
      a: "In Russia the Yandex ecosystem is often more convenient (mail, Disk, familiar login). Google is stronger with Docs/Sheets and global teams. Choose by team and data jurisdiction.",
    },
    {
      q: "Does Disk replace a site backup?",
      a: "Not as the only hosting backup. Sites need scheduled DB and file dumps; Disk is a handy place to put a copy — not the whole strategy.",
    },
  ],
  sections: [
    {
      title: "Why you need it and what it can do",
      level: 2,
      paras: [
        "Typical scenario: a manager carries a deck and a price list. The laptop dies or is forgotten — files open from the phone or the client views them via a link. Same for shoot photos, layouts, and article drafts.",
        "Basics: upload any formats within quota, desktop and mobile apps, browser preview for some documents and media, antivirus checks on uploads (as the service states), shared folders and public links.",
        "Access rights: a private file, a “view only” link, or one with edit rights — UI wording changes, the point is the same: don’t expose the whole drive with a public link to the root.",
        "Phone auto-upload is handy for a photo archive but eats quota. For a team, agree early on folder structure and file names — otherwise the cloud becomes a dump.",
      ],
      lists: [
        {
          intro: "When Disk is especially useful:",
          items: [
            "meetings outside the office;",
            "sending large files to a client;",
            "laptop and phone sync;",
            "drafts before publishing to the site;",
            "a “just in case” copy of important documents.",
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
        "Sign in with a Yandex account → web Disk or the app. Upload a project folder, check sync on a second device, create a test public link and make sure nothing extra is exposed.",
        "Compared with Google Drive: both cover storage and sharing. The difference is ecosystem (Docs vs Yandex editors), team habits, regional availability, and data-storage policy. Don’t treat old “10 GB vs 5 GB” comparisons as fact — quotas update.",
        "Mail.ru Cloud and other services raise the same questions: quota, speed, trust, link convenience. Businesses sometimes take a corporate plan with admin controls.",
        "Security practice: 2FA, separate links instead of “everything on one”, link expiry where available, don’t keep passwords in open txt files next to contracts.",
        "Bottom line: Yandex Disk is a working tool for file access without a USB stick. Check current plans and access rights; for a site the cloud complements — it doesn’t replace — hosting backups.",
      ],
      lists: [
        {
          intro: "Setup mini-checklist:",
          items: [
            "2FA on the account;",
            "clear folder structure;",
            "public-link permissions checked;",
            "client on work devices;",
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
