import type { BlogPost } from "../../../data/blog";

/** EN overlay for bitrix-publichnyy-razdel — same structure as RU JSON. */
export const bitrixPublichnyyRazdelEn: BlogPost = {
  slug: "bitrix-publichnyy-razdel",
  title: "1C-Bitrix public section: toolbar and edit mode",
  date: "2017-12-13",
  category: "Websites",
  cover: "/images/blog/bitrix-publichnyy-razdel/cover-en.webp",
  excerpt:
    "How the Bitrix public-area control bar works: buttons, edit mode, include areas, and components — without clinging to old-edition screenshots or a meta keywords cult.",
  lead: [
    "In 1C-Bitrix, after signing in, a public-section bar often appears above the page: create a page, edit the menu, clear cache, open SEO properties, enable edit mode.",
    "Below: what the main controls mean and how to edit content on the site without wandering through the admin. The button set depends on rights and edition; item names changed — follow current Bitrix docs, not 2017 screenshots.",
  ],
  faq: [
    {
      q: "Why is there no public-section bar after login?",
      a: "No rights to the public bar, a different site/domain, or display mode. Ask an administrator for a role.",
    },
    {
      q: "How does the public section differ from Administration?",
      a: "Public — edit with a visitor’s eyes. Administration — full backend: infoblocks, modules, users, settings.",
    },
    {
      q: "Is public-section edit mode dangerous?",
      a: "On production be careful: a mistaken save hits the live site. For important edits use rights, drafts/workflow, and backups per company rules.",
    },
    {
      q: "Does the SEO button replace real promotion?",
      a: "No. It’s title/description fields and hints. Don’t use keywords as a factor. Rankings are separate work.",
    },
    {
      q: "Is this related to the Bitrix SEO article?",
      a: "Yes, adjacent: that one covers robots/meta/module; here it’s the bar and visual edits in the public area.",
    },
  ],
  sections: [
    {
      title: "The public-area bar",
      level: 2,
      paras: [
        "After login with the right permissions you see a switch like Site / Administration along the page header, section menus, notices, and actions for the current page.",
        "The button set differs for an editor and an administrator. If something is missing, it’s often access policy — not broken.",
      ],
      lists: [
        {
          intro: "Typical bar actions:",
          items: [
            "create a page or section",
            "edit page / section",
            "menu and structure",
            "page SEO properties",
            "cache clear",
            "edit mode, template, debug (for those allowed)",
          ],
        },
      ],
      links: [
        {
          label: "SEO in 1C-Bitrix",
          href: "/en/blog/seo-bitrix/",
        },
        {
          label: "Site admin panel",
          href: "/en/blog/adminka-sayta/",
        },
      ],
    },
    {
      title: "Creating and editing pages",
      level: 2,
      paras: [
        "Create page/section starts a wizard or a form with a template. Edit opens the visual editor or entity properties — depends on page type and site settings.",
        "Structure helps move and delete tree nodes. Before deleting, make sure there are no needed links and you have rights to restore from backup.",
      ],
    },
    {
      title: "Edit mode",
      level: 2,
      paras: [
        "Edit mode highlights areas: hover a block — actions appear to change area / page / element. That’s how you edit a header phone, body text, or a catalog product card without hunting the entity in the admin.",
        "Three common objects: include area (shared chunk on many pages), page work area, component area (infoblock element). A mistake in an include area shows on every page that includes it.",
      ],
      tables: [
        {
          caption: "What you’re editing",
          headers: ["Object", "Example"],
          rows: [
            ["Include area", "Phone, footer offer"],
            ["Work area", "Ordinary page text"],
            ["Component / element", "Product name and price"],
          ],
        },
      ],
      notes: [
        {
          title: "Rights beat buttons",
          kind: "tip",
          text: "A catalog editor doesn’t need template debug and site-template switching. Split roles — fewer accidental layout breaks.",
        },
      ],
    },
    {
      title: "Cache, SEO fields, and more",
      level: 2,
      paras: [
        "Clearing cache helps see fresh edits if a page is stuck. Don’t overuse it on high-load prod without understanding the impact.",
        "The SEO block on the bar is about current page properties (title, description). Don’t fill keywords for luck. Built-in Bitrix stats don’t replace Yandex Metrica/analytics for marketing — check what’s actually connected on the project.",
      ],
      links: [
        {
          label: "Installing Yandex Metrica",
          href: "/en/blog/metrika-ustanovka/",
        },
      ],
    },
    {
      title: "Hotkeys",
      level: 2,
      paras: [
        "In settings you can assign shortcuts to frequent actions. Worth it only if the team actually uses them; otherwise mouse and edit mode are enough.",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "The Bitrix public bar is a fast content workflow: create/edit, area edit mode, cache, and page SEO fields. Full module settings live in Administration.",
        "Edition UIs differ: learn role and area logic, don’t memorize icon placement from a 2017 screenshot. Admin login will be covered separately in the migration queue.",
      ],
    },
  ],
  closing: [
    "Sign in with the right permissions, find the public-section bar, and edit via area mode — Bitrix content changes faster that way than hunting forms deep in the admin.",
  ],
  related: [
    "seo-bitrix",
    "adminka-sayta",
    "wordpress-admin",
    "metrika-ustanovka",
    "cms-internet-magazina",
    "uznat-cms",
  ],
};
