import type { BlogPost } from "../../../data/blog";

/** EN overlay for veb-prilozhenie — same structure as RU JSON. */
export const vebPrilozhenieEn: BlogPost = {
  slug: "veb-prilozhenie",
  title: "Web application: how it differs from a site and why business needs it",
  date: "2020-09-22",
  category: "Internet marketing",
  cover: "/images/blog/veb-prilozhenie/cover-en.webp",
  excerpt:
    "What a web app is, how it differs from a showcase site, how the browser–server chain works, and when business needs an account, cart, or SPA — not only a landing page.",
  lead: [
    "A web application is a program in the browser: the user doesn’t only read pages — they act: search, fill forms, buy, work in an account. Data lives on the server; the UI opens by URL.",
    "Below — differences from a “simple site”, static vs dynamic, interface types, and typical business scenarios. This is not a framework-picking guide and not a substitute for a development brief.",
  ],
  faq: [
    {
      q: "Are a site and a web app the same?",
      a: "They overlap. A brochure site is almost static. A store, browser CRM, or personal account is already an app: state, roles, operations.",
    },
    {
      q: "Do you need desktop software?",
      a: "Usually no: a browser is enough. Install a native app when you need offline, push, or deep device integration.",
    },
    {
      q: "What is an SPA?",
      a: "Single Page Application: the UI updates without a full reload. Handy for accounts; for SEO and analytics you still need correct URLs and hits.",
    },
    {
      q: "Is Ajax required?",
      a: "Not as a “2010s brand”, but as an idea: load data without redrawing the whole page. Today the same is done with fetch/API and modern frameworks.",
    },
    {
      q: "When is a landing enough?",
      a: "When the job is to explain an offer and collect a lead. If you need orders, roles, calculations, integrations — design it as an application.",
    },
    {
      q: "Does this affect SEO?",
      a: "Yes: indexable URLs, speed, SSR/prerender when needed matter. A “pretty account” with no public landings doesn’t deliver TOP by itself.",
    },
    {
      q: "Where to start buying development?",
      a: "With user scenarios and roles — not the stack. Then data, integrations, access rights, and acceptance criteria.",
    },
  ],
  sections: [
    {
      title: "What makes a web application",
      level: 2,
      paras: [
        "Logic is split between server and browser: the server stores and calculates; the client shows the UI and takes input. The user works through a browser — without installing a “thick” client in most cases.",
        "A static page is served almost the same to everyone. A dynamic one is built for the request, session, cart, or role: after login a person sees their data, not a shared showcase.",
      ],
      lists: [
        {
          intro: "App signals:",
          items: [
            "actions with a result (order, save, calculate);",
            "user state (session, cart, permissions);",
            "talk with the server and often external APIs;",
            "UI reacts to input, not only shows text.",
          ],
        },
      ],
      links: [
        {
          label: "What a website is",
          href: "/en/blog/chto-takoe-veb-sayt/",
        },
      ],
    },
    {
      title: "The technical side without stack worship",
      level: 2,
      paras: [
        "Browser and server can run on different OSes and languages — a web plus. What matters isn’t “which framework is trendy”, but contracts: API, security, response speed, clear errors.",
        "Partial UI updates (once often called Ajax) cut needless reloads. On SPAs watch analytics and reachable URLs: otherwise counters/goals and SEO break on client-side navigation.",
      ],
      links: [
        {
          label: "Web server",
          href: "/en/blog/veb-server/",
        },
      ],
    },
    {
      title: "Types by business job",
      level: 2,
      paras: [
        "Roughly: storefronts with catalog and cart, accounts (client/staff), editors and builders, collaboration tools, embedded widgets. Boundaries blur: one product can mix several roles.",
      ],
      lists: [
        {
          intro: "Examples:",
          items: [
            "online store with payment and order statuses;",
            "service personal account or B2B portal;",
            "CRM/accounting in the browser;",
            "online booking, calculators, estimate builders;",
            "site admin as a separate application.",
          ],
        },
      ],
    },
    {
      title: "When to plan an app, not “just a site”",
      level: 2,
      paras: [
        "If value is in the process (order, status, documents, roles), budget and timeline as a product: scenarios, data, integrations, rights, tests. Marketing landings stay — their structure and SEO are designed separately from a closed account.",
        "For the public part, speed and clear URLs matter; for the account — security, action audit, and daily usability.",
      ],
    },
  ],
  closing: [
    "A web application is a site where the user works, not only reads. The difference from a brochure is state, roles, and operations; pick the stack after scenarios — not before.",
  ],
};
