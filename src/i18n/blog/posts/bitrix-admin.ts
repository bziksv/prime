import type { BlogPost } from "../../../data/blog";

/** EN overlay for bitrix-admin — same structure as RU JSON. */
export const bitrixAdminEn: BlogPost = {
  slug: "bitrix-admin",
  title: "How to open the 1C-Bitrix admin and recover access",
  date: "2017-11-09",
  category: "Internet marketing",
  cover: "/images/blog/bitrix-admin/cover-en.webp",
  excerpt:
    "Signing in at `/bitrix/admin`, resetting the password by email, and cache/cookie glitches — without keeping a weak password and without confusing it with the public-site toolbar.",
  lead: [
    "The 1C-Bitrix admin usually opens at `https://your-site.example/bitrix/admin/`. After sign-in you get infoblocks, modules, users, and settings — that is not the same as the toolbar over public pages.",
    "Below — how to open the login form, what to do when the password is lost, and why cache and cookies get in the way. This is not a guide to breaking into other people’s sites. The old “green Enter” UI changed — follow the current auth form.",
  ],
  faq: [
    {
      q: "How is /bitrix/admin different from the on-site toolbar?",
      a: "`/bitrix/admin` is the full backend. The public-section toolbar is on-page editing after you sign in with rights. See the separate piece on the public section.",
    },
    {
      q: "Why a 404 on /bitrix/admin?",
      a: "A different login path, the site is not on Bitrix, HTTPS/www redirects, a server-level block, or the site is down. Confirm the URL with the developer or host.",
    },
    {
      q: "Can you sign in via Bitrix24?",
      a: "Some installs offer a linked-account login. If there is no button or the link is not set up — use the site user’s normal login and password.",
    },
    {
      q: "The password email never arrives?",
      a: "Check spam, that the user’s email is correct, and that the site can send mail (SMTP/hosting). Otherwise — reset via hosting/developer with a backup.",
    },
    {
      q: "Is this like WordPress login?",
      a: "In spirit yes (form → password → console), different path: `/bitrix/admin`, not `/wp-admin/`.",
    },
  ],
  sections: [
    {
      title: "How to open the login",
      level: 2,
      paras: [
        "In the address bar open `https://your-domain.example/bitrix/admin/` (use your domain, preferably HTTPS). You should see a login and password form.",
        "Enter admin credentials or a user allowed into the admin. “Remember me” is fine on a personal device and risky on a shared one.",
      ],
      lists: [
        {
          intro: "Before typing the password:",
          items: [
            "correct domain (www / bare, live vs staging);",
            "keyboard layout and Caps Lock;",
            "this is your site, not a phishing copy;",
            "your role actually has access.",
          ],
        },
      ],
      links: [
        {
          label: "Bitrix public section",
          href: "/en/blog/bitrix-publichnyy-razdel/",
        },
        {
          label: "WordPress admin",
          href: "/en/blog/wordpress-admin/",
        },
      ],
      notes: [
        {
          title: "Permissions",
          text: "Even with the right password, admin access can be closed by group policy. Then you need a role from the project admin — not password guessing.",
          kind: "tip",
        },
      ],
    },
    {
      title: "If you forgot the password",
      level: 2,
      paras: [
        "On the login form find a link like “Forgot password?”. Enter the user’s login or email — the system sends a reset link to the profile mailbox.",
        "Mail sometimes lands in spam or never leaves because of the site’s mail settings. Then check the address in the user card (if another admin exists) or reset access via hosting/developer by process with a backup.",
      ],
      lists: [
        {
          intro: "Order:",
          items: [
            "recovery link on the form;",
            "inbox + Spam;",
            "a session on another device where you are still signed in → change password;",
            "hosting/developer help;",
            "after sign-in — a new strong password and a check for extra admins.",
          ],
        },
      ],
    },
    {
      title: "Cache, cookies, and other glitches",
      level: 2,
      paras: [
        "If the password is right but the form breaks or loops redirects, clear the site’s cookies and browser cache or try an incognito window. On the site side Bitrix cache, CDN, and hard firewall rules get in the way.",
        "Mixing `http`/`https` and www mirrors sometimes breaks the auth session — keep one canonical mirror with 301s.",
      ],
      tables: [
        {
          caption: "What to check",
          headers: ["Symptom", "Where to look"],
          rows: [
            ["Wrong credentials", "Layout, another user, email reset"],
            ["Empty/stale form", "Browser cache, cookies, incognito"],
            ["No email", "Spam, site SMTP, email in the profile"],
            ["404 on /bitrix/admin", "Login path, CMS, server access"],
            ["Signed in but no sections", "User group permissions"],
          ],
        },
      ],
    },
    {
      title: "After sign-in: basic hygiene",
      level: 2,
      paras: [
        "Change a weak password, review users with full rights, update the product per project process. Day-to-day content edits often need only the public toolbar — don’t hand out the admin to everyone.",
        "Store the password in a password manager and enable 2FA where your login scheme allows it.",
      ],
      links: [
        {
          label: "Password manager",
          href: "/en/blog/menedzher-paroley/",
        },
        {
          label: "SEO in 1C-Bitrix",
          href: "/en/blog/seo-bitrix/",
        },
      ],
    },
    {
      title: "What not to do",
      level: 2,
      paras: [
        "Don’t post client logins in chats. Don’t leave a shared “department” password. Don’t try to guess access to other people’s sites.",
        "Resetting by editing the DB “by feel” without a backup is a path to downtime. Start with the normal recovery flow and support.",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Standard entry is `/bitrix/admin/`, recovery is by the user’s email, glitches often come from cache/cookies and permissions. The public toolbar is a related but different surface.",
        "After recovery harden the account right away and don’t confuse the admin with the on-site toolbar.",
      ],
    },
  ],
  closing: [
    "Open `/bitrix/admin/` on your domain, reset the password by email if needed, and immediately check user rights — then the Bitrix admin is a working tool again, not a browser-cache quest.",
  ],
  related: [
    "bitrix-publichnyy-razdel",
    "wordpress-admin",
    "seo-bitrix",
    "bitrix-svoystva-infoblokov",
    "menedzher-paroley",
    "adminka-sayta",
  ],
};
