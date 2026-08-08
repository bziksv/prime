import type { BlogPost } from "../../../data/blog";

/** EN overlay for obzor-cms — same structure as RU JSON. */
export const obzorCmsEn: BlogPost = {
  slug: "obzor-cms",
  title: "CMS overview: WordPress, Joomla, Bitrix, Drupal, MODX, and DLE",
  date: "2017-01-10",
  category: "Digital marketing",
  cover: "/images/blog/obzor-cms/cover-en.webp",
  excerpt:
    "A look at popular CMS options: WordPress, Joomla, 1C-Bitrix, Drupal, MODX, and DLE — pros, cons, and which jobs they fit, without 2017 market-share charts or the myth that “the engine ranks you.”",
  lead: [
    "A CMS is how you edit pages, catalogs, and media without rewriting the whole site in a text editor. Choice depends on the job, budget, hosting, and who will support the project.",
    "Below is a short tour of six engines people ask about most — not a forever “#1” ranking. Market share and fashion change. For stores, see a separate platform comparison; Bitrix gets a deeper piece of its own.",
  ],
  faq: [
    {
      q: "Which CMS is best?",
      a: "The one that covers the job at acceptable TCO. There is no universal winner.",
    },
    {
      q: "Is a free CMS always cheaper?",
      a: "Entry is cheaper; ownership isn’t: plugins, security, a developer, hosting. Count a year of ownership.",
    },
    {
      q: "Does the CMS put you on page one?",
      a: "No. The engine should not block SEO. Rankings come from content, tech, and months of work — prep ≠ page one. Core growth is planned over 2–6 months after work starts.",
    },
    {
      q: "How do you detect another site’s CMS?",
      a: "From open HTML and path clues — in a separate article. Not hacking.",
    },
    {
      q: "Should I use a site builder instead?",
      a: "For a landing and a simple site — often yes. For a complex catalog and custom integrations — more often a classic CMS or custom build.",
    },
  ],
  sections: [
    {
      title: "What a CMS is in plain English",
      level: 2,
      paras: [
        "A CMS gives you an admin: pages, menus, users, media, sometimes a store and forms. Under the hood — templates, a database, and code that serves HTML to visitors.",
        "Before choosing, lock: brochure, blog, portal, store; whether you need root on the server; who edits content daily.",
      ],
      links: [
        {
          label: "How to detect a CMS",
          href: "/en/blog/uznat-cms/",
        },
        {
          label: "Hosting",
          href: "/en/blog/hosting/",
        },
      ],
    },
    {
      title: "WordPress",
      level: 2,
      paras: [
        "Open source, a huge theme and plugin ecosystem, an easy entry for editors. Blogs, corporate sites, landings; a store — via WooCommerce and solid hosting.",
        "Downsides: popularity attracts attackers (fixed with updates and hygiene); on weak hosting with a plugin pile it’s easy to hit speed limits. No personal vendor support like paid CMS — community and contractors.",
      ],
      lists: [
        {
          intro: "When it fits:",
          items: [
            "content and marketing sites",
            "need a fast admin for editors",
            "budget for plugin care",
            "mid-size Woo store — on purpose",
          ],
        },
      ],
      links: [
        {
          label: "Installing WordPress",
          href: "/en/blog/wordpress-ustanovka/",
        },
        {
          label: "WordPress security",
          href: "/en/blog/wordpress-bezopasnost/",
        },
      ],
    },
    {
      title: "Joomla",
      level: 2,
      paras: [
        "A universal open-source CMS: brochure sites, corporate, small catalogs. More flexible “out of the box” in structure than a simple blog, but a higher entry bar than WordPress.",
        "The extension ecosystem is alive but no longer at the center of hype: plan for a specialist and security updates.",
      ],
    },
    {
      title: "1C-Bitrix",
      level: 2,
      paras: [
        "A commercial platform with a strong ecosystem in Russia: roles, modules, corporate and store scenarios, 1C integrations. Hosting and budget needs are higher than a “blog on shared.”",
        "UI and custom work need discipline: chaotic changes make the project heavy. A full pros/cons breakdown is separate; store-context downsides live in the store-engine overview.",
      ],
      links: [
        {
          label: "Bitrix pros and cons",
          href: "/en/blog/bitrix-plyusy-minusy/",
        },
        {
          label: "CMS for an online store",
          href: "/en/blog/cms-internet-magazina/",
        },
      ],
    },
    {
      title: "Drupal",
      level: 2,
      paras: [
        "Closer to a CMF: from modules you assemble portals, complex roles, sometimes stores and internal systems. Powerful and flexible, but costlier to implement and support than “install a theme and write posts.”",
        "DB load and hosting needs are above average — you need a capable admin or a managed environment.",
      ],
    },
    {
      title: "MODX",
      level: 2,
      paras: [
        "A free CMS with strong markup control: handy when layout and structure matter more than a “one-click theme shop.” For beginners the downside is fewer ready “install and forget” templates than WordPress.",
        "Fits sites where clean HTML and custom logic matter with a relatively light core.",
      ],
      links: [
        {
          label: "MODX on localhost",
          href: "/en/blog/modx-local/",
        },
      ],
    },
    {
      title: "DLE (DataLife Engine)",
      level: 2,
      paras: [
        "Historically popular for news and media portals: feeds, categories, load. Check the license model and terms with the vendor; don’t rely on “free nulled” builds.",
        "For beginners the admin and templates are often less friendly than WordPress: some work goes through templates and extra fields. Take it if the team already knows DLE and the job is a media feed.",
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Picking a CMS from a “2017 popularity ranking” article without weighing the team and TCO.",
          kind: "tip",
        },
      ],
    },
    {
      title: "How to choose in one pass",
      level: 2,
      paras: [
        "Build a matrix: site type × integrations × who admins × yearly budget × speed and SEO needs. Cut platforms that are too heavy for a landing and too light for a complex B2B catalog.",
        "A demo and pilot on staging beat arguments about which engine is “cooler.”",
      ],
      lists: [
        {
          intro: "Rough compass:",
          items: [
            "blog / marketing site — WordPress",
            "corporate with roles in RU — often Bitrix",
            "complex portal — Drupal or Bitrix",
            "custom layout — MODX / a framework",
            "media feed — DLE if the team knows it",
            "store — a separate store-platform comparison",
          ],
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "A CMS is a tool for the job and the team. Popularity eases hiring but does not cancel security, backups, and speed.",
        "The engine does not replace content and promotion. Requirements first, then license and theme.",
      ],
    },
  ],
  closing: [
    "Describe the job and TCO, compare WordPress, Bitrix, and the rest against the real support team — and only then buy a license or install the “most popular” engine from someone else’s ranking.",
  ],
  related: [
    "uznat-cms",
    "cms-internet-magazina",
    "bitrix-plyusy-minusy",
    "wordpress-ustanovka",
    "hosting",
    "modx-local",
  ],
};
