import type { BlogPost } from "../../../data/blog";

/** EN overlay for adminka-sayta — same structure as RU JSON. */
export const adminkaSaytaEn: BlogPost = {
  slug: "adminka-sayta",
  title: "Site admin panel: why you need a CMS and control panel",
  date: "2020-09-01",
  category: "Internet marketing",
  cover: "/images/blog/adminka-sayta/cover-en.webp",
  excerpt:
    "What an admin panel and CMS are, how a managed site differs from “hand-edited” HTML, and what to watch in access, roles, and security.",
  lead: [
    "The admin panel is where teams edit pages, products, menus, and settings without changing files on the server. In everyday talk it’s often called a CMS: a content management system.",
    "Below — why business needs it, why life without a CMS costs more over distance, and how to think about access. This is not a “which CMS is best” roundup and not a guide to breaking into other people’s panels.",
  ],
  faq: [
    {
      q: "Are admin panel and CMS the same?",
      a: "Almost: CMS is the whole system; the admin is its staff UI. There are also custom panels without a “branded” CMS.",
    },
    {
      q: "Can you go without a CMS?",
      a: "Yes for rare static pages. On a catalog, blog, and frequent edits, hand HTML/FTP quickly becomes a bottleneck and error source.",
    },
    {
      q: "How does it differ from a customer account?",
      a: "Admin is for the site team. A personal account is for the buyer/service user. Different roles and permissions.",
    },
    {
      q: "Who should get access?",
      a: "Only people who actually publish. Split roles: editor, marketer, admin. Not one shared password “for everyone”.",
    },
    {
      q: "What about security?",
      a: "Strong passwords, 2FA where available, CMS/plugin updates, limiting the admin URL, backups. An outdated panel is a common breach point.",
    },
    {
      q: "Does CMS affect SEO?",
      a: "Indirectly: speed, clean URLs, title/h1 templates, sitemap. The engine brand itself doesn’t “give TOP”.",
    },
    {
      q: "How to detect another site’s CMS?",
      a: "By open signs in the code — see the CMS detection article. Breaking into an admin panel is not allowed.",
    },
  ],
  sections: [
    {
      title: "Why you need an admin panel",
      level: 2,
      paras: [
        "Without a panel every change is a developer task or hand edits to files and the database. With a CMS an editor publishes an article, changes a price or banner in a clear UI.",
        "For business that’s speed: promos, news, and stock don’t wait for a “sprint window”.",
      ],
      lists: [
        {
          intro: "Typical admin jobs:",
          items: [
            "pages, blog, categories;",
            "product cards and availability;",
            "menus, forms, redirects;",
            "users and permissions;",
            "basic SEO fields (title, description) in the template.",
          ],
        },
      ],
    },
    {
      title: "A site with a CMS and without one",
      level: 2,
      paras: [
        "With a CMS, content and media go through an editor: less risk of breaking layout with a typo in a tag. Without a CMS the path is longer — FTP, finding the spot in a template, hand markup, checking.",
        "At dozens and hundreds of materials, hand mode doesn’t scale. Exception — a purpose-built static site with rare updates and a deploy process owned by developers.",
      ],
      lists: [
        {
          intro: "Without a panel, each photo/article often needs:",
          items: [
            "upload a file to hosting;",
            "write the path in code or the DB;",
            "not break neighboring blocks;",
            "check the page by hand.",
          ],
        },
      ],
      links: [
        {
          label: "How to detect a site’s CMS",
          href: "/en/blog/uznat-cms/",
        },
      ],
    },
    {
      title: "Access and order in the team",
      level: 2,
      paras: [
        "Panels differ in UI and modules, but the rules are the same: who can change what, how passwords are recovered, where backups live.",
        "Don’t mix admin with a customer account. An editor doesn’t need every user’s orders “under one password”; a customer doesn’t need access to the site theme.",
      ],
      lists: [
        {
          intro: "Hygiene minimum:",
          items: [
            "unique accounts, not a shared login;",
            "a “content only” role without dangerous settings;",
            "core and plugin updates;",
            "backup before major edits;",
            "log out of the panel on shared computers.",
          ],
        },
      ],
      links: [
        {
          label: "Personal account on a site",
          href: "/en/blog/lichnyy-kabinet/",
        },
        {
          label: "Content manager",
          href: "/en/blog/kontent-menedzher/",
        },
      ],
    },
  ],
  closing: [
    "An admin panel lets the team manage content without constant code edits. A CMS saves publish time; security and roles decide whether the panel becomes a risk point.",
  ],
};
