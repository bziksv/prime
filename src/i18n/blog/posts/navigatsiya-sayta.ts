import type { BlogPost } from "../../../data/blog";

/** EN overlay for navigatsiya-sayta — same structure as RU JSON. */
export const navigatsiyaSaytaEn: BlogPost = {
  slug: "navigatsiya-sayta",
  title: "Website navigation: requirements, types, and conversion impact",
  date: "2020-10-30",
  category: "SEO",
  cover: "/images/blog/navigatsiya-sayta/cover-en.webp",
  excerpt:
    "What usable navigation means: menus, breadcrumbs, footer, catalog filters. How to keep users from getting lost — and how navigation ties to SEO and leads.",
  lead: [
    "Navigation is the system of moves across the site: menu, links, breadcrumbs, search, filters. If a person finds a service or product on autopilot, navigation works. If they wander and leave — you lose UX and part of the SEO signal.",
    "Below: requirements for usable navigation, the main types, and the conversion link. URL structure and section meaning for SEO are in the SEO structure piece; here the focus is user orientation.",
  ],
  faq: [
    {
      q: "How does navigation differ from site structure?",
      a: "Structure is the logic of sections and URLs. Navigation is how users walk them: menu, breadcrumbs, internal links, search.",
    },
    {
      q: "How many items belong in the main menu?",
      a: "Aim for 5–7 clear sections. Short and clear beats a sheet of 20 equal-weight items.",
    },
    {
      q: "Do you need breadcrumbs?",
      a: "Yes for catalogs and nested sections: orientation plus extra internal links. On a one-pager they’re often excess.",
    },
    {
      q: "Does the menu affect SEO?",
      a: "Yes indirectly: internal links, crawl, topic clarity. But “a keyword in every menu item” is a path to spam.",
    },
    {
      q: "Is a hamburger menu okay on desktop?",
      a: "On phone — yes. On a wide screen hiding everything important behind an icon often cuts section discovery.",
    },
    {
      q: "Does the footer count as navigation?",
      a: "Yes, secondary: contacts, legal links, section map. Don’t duplicate the main menu as a giant list for SEO.",
    },
    {
      q: "Are catalog filters navigation — or duplicate pages?",
      a: "For the user — navigation. For SEO you need an indexing policy, or endless URLs. See duplicates and pagination.",
    },
    {
      q: "How do you check navigation quality?",
      a: "Run “find service / product / contacts” scenarios on phone and desktop, review session replay, and listen to support questions like “where is your…”.",
    },
  ],
  sections: [
    {
      title: "Requirements for usable navigation",
      level: 2,
      paras: [
        "Clear labels, predictable placement, a short path to the goal, visible contacts/cart. Users shouldn’t guess what’s behind a creative label.",
        "Same rules sitewide: where the menu is, how submenus open, where the logo goes. Broken mobile navigation kills the journey faster than an “imperfect” desktop.",
      ],
      lists: [
        {
          intro: "Quality criteria:",
          items: [
            "the goal is found in 1–3 clicks",
            "items read without explanations",
            "the current section is visually clear",
            "search and contacts are in view",
            "no dead ends or broken links in the menu",
          ],
        },
      ],
      links: [
        {
          label: "Responsive site",
          href: "/en/blog/adaptivnyy-sayt/",
        },
      ],
    },
    {
      title: "Main types of navigation",
      level: 2,
      paras: [
        "Horizontal/vertical menu, mega-menu for large catalogs, breadcrumbs, footer, blog side categories, tags, on-site search, pagination and filters, scroll-up controls, product-card tabs.",
        "You don’t need everything at once. Pick a set for the site type: services — clear menu + CTA; store — catalog, search, filters, cart; media — categories and search.",
      ],
      lists: [
        {
          intro: "Common set:",
          items: [
            "main menu",
            "breadcrumbs (catalog)",
            "search",
            "footer with contacts",
            "persistent lead/phone link",
          ],
        },
      ],
      links: [
        {
          label: "SEO site structure",
          href: "/en/blog/seo-struktura-sayta/",
        },
      ],
    },
    {
      title: "Menu and information architecture",
      level: 2,
      paras: [
        "Menu items reflect real client jobs, not the company’s org chart. Vague “Products / Solutions / About” is weaker than “Services / Pricing / Cases / Contacts” if that’s how people look.",
        "Keep nesting shallow: two–three levels max for most SMBs. Deep “sub-sub-sections” hide pages from bots and people.",
      ],
      lists: [
        {
          intro: "Anti-patterns:",
          items: [
            "an “More” item with half the site",
            "identical names for different sections",
            "menu as images only, no text",
            "links to empty “coming soon” pages",
          ],
        },
      ],
    },
    {
      title: "Catalog: search, filters, pagination",
      level: 2,
      paras: [
        "In e-commerce navigation also means on-site search and facets. They should speed choice — not create thousands of indexed copies of one listing.",
        "Align UX and SEO: which filter combos are indexed, which are closed, how canonical and pagination behave.",
      ],
      lists: [
        {
          intro: "Align with the team:",
          items: [
            "which filters become landings",
            "what’s in noindex / canonical",
            "is there a “clear filters” control",
            "does the mobile menu break with open facets",
          ],
        },
      ],
      links: [
        {
          label: "Duplicate pages",
          href: "/en/blog/dubli-stranits/",
        },
        {
          label: "Pagination",
          href: "/en/blog/paginatsiya/",
        },
      ],
    },
    {
      title: "Navigation and conversion",
      level: 2,
      paras: [
        "The shorter the path to a lead or purchase, the fewer losses. Navigation doesn’t replace the offer, but it removes friction: “where’s pricing,” “how to contact,” “do you deliver to my city.”",
        "Watch session replay and click maps: if people hunt in the footer for what’s missing in the header — move the important stuff higher on the page.",
      ],
      lists: [
        {
          intro: "Conversion boosters:",
          items: [
            "clickable phone in the header",
            "lead button on key screens",
            "breadcrumbs and “back to catalog”",
            "don’t cover the menu with an aggressive chat",
          ],
        },
      ],
      links: [
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
        {
          label: "Site footer",
          href: "/en/blog/futer-sayta/",
        },
      ],
    },
    {
      title: "How to check and improve",
      level: 2,
      paras: [
        "Walk 5 newbie scenarios on a phone. Collect sales questions “clients can’t find…”. Crawl broken links in the menu and footer.",
        "After a redesign, retest: burger, landing anchors, and filters often break. Small label tweaks sometimes beat a new “creative” menu design.",
      ],
      lists: [
        {
          intro: "Release checklist:",
          items: [
            "main sections in 1 click from home",
            "logo goes home",
            "mobile menu closes and doesn’t break scroll",
            "no duplicate items",
            "contacts found in ≤2 clicks",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Design navigation from user jobs — not from stuffing every keyword into the menu.",
        },
      ],
      links: [
        {
          label: "Broken links",
          href: "/en/blog/bitye-ssylki/",
        },
      ],
    },
  ],
  related: [
    "seo-struktura-sayta",
    "adaptivnyy-sayt",
    "futer-sayta",
    "optimizatsiya-konversii",
    "paginatsiya",
  ],
};
