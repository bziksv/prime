import type { BlogPost } from "../../../data/blog";

/** EN overlay for vstavka-javascript — same structure as RU JSON. */
export const vstavkaJavascriptEn: BlogPost = {
  slug: "vstavka-javascript",
  title: "How to add JavaScript to a website: CMS and site builders",
  date: "2020-11-13",
  category: "SEO",
  cover: "/images/blog/vstavka-javascript/cover-en.webp",
  excerpt:
    "Where to place JS snippets: head and body, WordPress, sites without an admin panel, and builders. How to avoid breaking layout or installing the same script twice — with counters and widgets as examples.",
  lead: [
    "Counters, chats, pixels, and widgets almost always arrive as a JavaScript snippet. Your job is to place the code where it loads on the right pages, avoid duplicates, and make sure cached HTML still includes the script.",
    "Know what the snippet looks like, where to put it in WordPress and builders, how to edit a template without a panel, and what to verify after insertion. Yandex Metrica installation is covered separately; this article covers the general principle.",
  ],
  faq: [
    {
      q: "Should the script go in the head or before </body>?",
      a: "Follow the vendor's recommendation. Analytics often goes as early as possible in the head; heavy widgets sometimes load lower. Don't guess against the service docs.",
    },
    {
      q: "Can I paste JS into page text through the visual editor?",
      a: "Bad idea: the editor may strip tags. Use a scripts field, a plugin, a tag manager, or a template edit.",
    },
    {
      q: "What is a tag manager?",
      a: "A container (for example GTM) where marketing tags live without constant theme edits. Handy when you have many counters and a clear publish owner.",
    },
    {
      q: "Why does nothing work after I add the script?",
      a: "Cache, code missing on some templates, a typo, a blocker, CSP, a script only on a draft theme, or a double install.",
    },
    {
      q: "Is it safe to copy any snippet from the internet?",
      a: "No. Take code only from the service account (analytics, ads, chat). Random \"speed boosters\" and \"SEO scripts\" are malware risks.",
    },
    {
      q: "Do I need FTP access?",
      a: "To edit header.php or the theme — often yes, or via the host file manager. On builders — only their panel.",
    },
    {
      q: "Are WordPress.com and WordPress.org the same?",
      a: "No. On .com, custom JS limits depend on the plan. On self-hosted .org you're freer via theme and plugins.",
    },
    {
      q: "I added a script — will that boost SEO?",
      a: "Adding JS alone doesn't raise rankings. A counter is for analytics; growth comes from content, technical work, and demand — usually over months (plan on 2–6 months for core rankings after prep).",
    },
  ],
  sections: [
    {
      title: "What code people usually add",
      level: 2,
      paras: [
        "Most often it's a fragment from a service account: analytics, ad pixel, chat, A/B test, booking widget. It looks like `<script>…</script>` or an external file include.",
        "Don't confuse it with a content HTML block or CSS. JS runs logic in the browser; a bug can break a button or form on the page.",
      ],
      lists: [
        {
          intro: "Take code only from:",
          items: [
            "the official service account",
            "platform documentation",
            "a brief from your developer or agency",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Don't paste a \"random SEO script\" from a forum. For site security, that's the same risk class as an unknown plugin.",
        },
      ],
      links: [
        {
          label: "Website security",
          href: "/en/blog/bezopasnost-sayta/",
        },
      ],
    },
    {
      title: "General principle: where the script should live",
      level: 2,
      paras: [
        "The code needs to land in the HTML of all or selected templates: home, categories, products, thank-you pages. Ideally in one place: theme header or footer, a \"scripts in head\" field, or a tag-manager container.",
        "After insertion, check page source and Network: did the script load? Any duplicate? Is CSP blocking it?",
      ],
      lists: [
        {
          intro: "Check:",
          items: [
            "Ctrl+U / View Source — is the fragment there",
            "incognito without a blocker",
            "CMS/CDN cache flush",
            "mobile and desktop",
          ],
        },
      ],
      links: [
        {
          label: "Page source code",
          href: "/en/blog/ishodnyy-kod/",
        },
      ],
    },
    {
      title: "WordPress (self-hosted)",
      level: 2,
      paras: [
        "Typical paths: a header/footer scripts plugin, theme settings (\"code in head\"), a child theme editing `header.php`/`footer.php`, or a tag manager. Don't edit the parent theme without a child — updates wipe changes.",
        "The post visual editor isn't for JS. On WordPress.com, custom JS may be unavailable on lower plans — check current platform limits.",
      ],
      lists: [
        {
          intro: "Order of operations:",
          items: [
            "backup",
            "paste code in one official place",
            "flush cache",
            "check 3–4 page types",
            "don't duplicate the same code in GTM and the theme at once",
          ],
        },
      ],
      links: [
        {
          label: "Installing Yandex Metrica",
          href: "/en/blog/metrika-ustanovka/",
        },
      ],
    },
    {
      title: "Site without a handy admin: editing the template",
      level: 2,
      paras: [
        "If you only have FTP or a file manager, find the shared header/footer template (often `header.php`, `index.html`, or an engine layout). Insert the fragment per the service docs, keep UTF-8, and don't break neighboring tags.",
        "A typo in `header` can take the whole site down. Keep a file copy before editing and check the homepage right after upload.",
      ],
      lists: [
        {
          intro: "Mini safety checklist:",
          items: [
            "download file → edit locally → upload",
            "don't delete closing tags",
            "don't expose `.php.bak` backups in the webroot",
          ],
        },
      ],
    },
    {
      title: "Builders: Wix, Squarespace, Shopify and similar",
      level: 2,
      paras: [
        "Builders have their own fields: \"Custom code,\" \"Header scripts,\" theme settings, checkout scripts. Menu names change — search for \"code,\" \"scripts,\" \"pixel,\" or \"head.\"",
        "Plan limits are real: on free plans, custom JS is often locked. Shopify: theme code / additional scripts — carefully, and with a theme backup. Don't treat 2018 screenshots as gospel.",
      ],
      lists: [
        {
          intro: "General builder flow:",
          items: [
            "find the custom code field in site or theme settings",
            "paste the fragment from the service account",
            "publish",
            "check on the live page (not only preview)",
          ],
        },
      ],
    },
    {
      title: "Typical mistakes after insertion",
      level: 2,
      paras: [
        "Two identical counters, code only on the homepage, cache serving HTML without the script, a minifier breaking JS, Content-Security-Policy cutting the service domain, pasting HTML instructions together with email boilerplate.",
        "If \"it worked yesterday,\" check the theme deploy, cache plugin, and builder update. Metrica diagnostics are in a separate article.",
      ],
      lists: [
        {
          intro: "Acceptance checklist:",
          items: [
            "one code instance",
            "needed URLs covered",
            "no console errors from your fragment",
            "event or visit visible in the service account",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Pasting the code onto every page by hand. After a redesign you'll forget half — centralize in the template or a tag manager.",
        },
      ],
      links: [
        {
          label: "Metrica isn't working",
          href: "/en/blog/metrika-ne-rabotaet/",
        },
      ],
    },
  ],
  related: [
    "metrika-ustanovka",
    "metrika-ne-rabotaet",
    "ishodnyy-kod",
    "bezopasnost-sayta",
    "verstka-saytov",
  ],
};
