import type { BlogPost } from "../../../data/blog";

/** EN overlay for ftp — same structure as RU JSON. */
export const ftpEn: BlogPost = {
  slug: "ftp",
  title: "FTP: what it is and how to work with site files",
  date: "2020-11-30",
  category: "Media services",
  cover: "/images/blog/ftp/cover-en.webp",
  excerpt:
    "FTP is a protocol for moving files to hosting: why you need a client, how to connect, why FileZilla helps, and why SFTP/FTPS beat plain FTP with a password.",
  lead: [
    "FTP (File Transfer Protocol) is a way to copy files between your computer and the site server: upload a theme, download a backup, fix permissions, reach places the CMS admin can’t.",
    "Below — why a client, how to connect, typical jobs, and security. FileZilla and hosting-panel UIs change — use current Help. For passwords prefer SFTP or FTPS over open FTP.",
  ],
  faq: [
    {
      q: "Is FTP required if I have WordPress?",
      a: "Not always: much is done in the admin and the host’s file manager. FTP/SFTP matters when admin is down, you edit code/config, or move large folders.",
    },
    {
      q: "Why is SFTP better than FTP?",
      a: "SFTP rides SSH with encryption. Plain FTP may send password and data in clear text — risky on untrusted networks.",
    },
    {
      q: "Where do I get host, login, and password?",
      a: "In the host’s email/panel: FTP/SFTP access. Sometimes a separate FTP account with limited rights is safer than root.",
    },
    {
      q: "Is FileZilla the only client?",
      a: "No. It’s popular and cross-platform, but there’s also WinSCP, Cyberduck, and built-in managers in IDEs/hosting panels.",
    },
    {
      q: "Can I edit wp-config over FTP?",
      a: "Yes, technically. Backup first; a config typo takes the site down. Don’t paste DB passwords into chats.",
    },
    {
      q: "What is chmod / permissions?",
      a: "Access rights for files and folders on the server. Too open — a security hole; too tight — the site can’t write cache/uploads.",
    },
    {
      q: "Store the password in the client?",
      a: "Carefully: on a shared PC better not. Use a password manager and a separate FTP user with minimal rights.",
    },
    {
      q: "A large upload failed mid-way?",
      a: "Many clients support resume. Verify integrity after; for backups an archive via the hosting panel is sometimes safer.",
    },
  ],
  sections: [
    {
      title: "Why you need an FTP client",
      level: 2,
      paras: [
        "The client syncs your PC with folders on the server: upload, download, rename, delete, change permissions.",
        "Typical jobs: ship static files, fix a white-screen WP site, pull a copy of `wp-content`, remove malware after a breach (after a backup), rename a plugin install folder.",
        "Not every edit should go over FTP: content and media in the CMS are safer via built-in tools when they work.",
      ],
      lists: [
        {
          intro: "What people usually do:",
          items: [
            "upload/download files and folders;",
            "change permissions (chmod);",
            "rename and delete;",
            "access when the admin is down.",
          ],
        },
      ],
    },
    {
      title: "How to connect",
      level: 2,
      paras: [
        "You need a host (domain or IP / technical address), port (21 for FTP, often 22 for SFTP — confirm with the host), login and password or a key.",
        "Create the site in the client’s site manager; save settings without syncing the password to a cloud vault on someone else’s laptop.",
        "After login, left is local files, right is the server (classic FileZilla layout). Transfer by drag-and-drop or transfer buttons. Panel labels may change — the idea stays.",
      ],
      lists: [],
      notes: [
        {
          title: "Don’t sign in blind",
          text: "Confirm you’re connecting to your own host using the provider’s HTTPS docs. Phishing “FTP clients” from unknown builds are a separate risk.",
        },
      ],
      links: [
        {
          label: "Hosting",
          href: "/blog/hosting/",
        },
        {
          label: "Panel web interface",
          href: "/en/blog/veb-interfeys/",
        },
      ],
    },
    {
      title: "FileZilla and alternatives",
      level: 2,
      paras: [
        "FileZilla is often praised for cross-platform support, a site manager, resume, and logs. It’s a handy start — not the industry’s only standard.",
        "Download the client from the official source. Third-party “builds with an accelerator” sometimes ship adware.",
        "On Windows many pick WinSCP; on macOS — Cyberduck / Transmit. Cursor/VS Code and some hosting panels have their own file access.",
      ],
      lists: [
        {
          intro: "Upsides of a good client:",
          items: [
            "resume after a drop;",
            "a file queue;",
            "an error log;",
            "working across several folders;",
            "SFTP/FTPS support.",
          ],
        },
      ],
    },
    {
      title: "Security and practice",
      level: 2,
      paras: [
        "Prefer SFTP/FTPS. Turn off anonymous FTP if you don’t need it.",
        "Don’t put password-bearing backups in a public `httpdocs` without protection. After installing a plugin/theme, remove or lock leftover installers.",
        "Before mass-replacing theme files — backup. Live edits with no copy are a common downtime cause.",
      ],
      lists: [],
      links: [
        {
          label: "WordPress security",
          href: "/blog/wordpress-bezopasnost/",
        },
        {
          label: "WordPress plugins",
          href: "/blog/wordpress-plaginy/",
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "FTP/SFTP is access to site files from your computer.",
        "A client is for transfer, permissions, and emergency access — it doesn’t replace the admin for content.",
        "An encrypted channel and care with passwords beat “convenient” open FTP.",
      ],
      lists: [],
    },
  ],
  closing: [
    "Create SFTP access in the hosting panel, connect with a client from the official site, and do a test upload into a scratch folder — calmer than editing prod blind at the first white screen.",
  ],
  related: [
    "hosting",
    "veb-interfeys",
    "wordpress-ustanovka",
    "wordpress-bezopasnost",
    "wordpress-plaginy",
    "wordpress-admin",
  ],
};
