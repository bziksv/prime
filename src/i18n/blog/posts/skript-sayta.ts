import type { BlogPost } from "../../../data/blog";

/** EN overlay for skript-sayta — same structure as RU JSON. */
export const skriptSaytaEn: BlogPost = {
  slug: "skript-sayta",
  title: "Website script: what it is and why you need it",
  date: "2020-07-16",
  category: "Digital marketing",
  cover: "/images/blog/skript-sayta/cover-en.webp",
  excerpt:
    "What people call a site script: client and server code, languages, typical jobs, and how to insert snippets without hurting speed and security.",
  lead: [
    "A website script is a program or code fragment that runs by rules: on page open, click, form submit, or on a server schedule. It isn’t “SEO magic” — it’s a way to automate UI and backend behavior.",
    "Below: how client-side scripts differ from server-side ones, where each applies, and what to watch when installing. Counter and widget install practice is covered in a separate article.",
  ],
  faq: [
    {
      q: "Are a script and a program the same thing?",
      a: "On the web “script” usually means executable code on the page or server (JS, PHP, etc.). A full app can be many scripts and modules.",
    },
    {
      q: "Is a script always JavaScript?",
      a: "In the browser JavaScript (and WebAssembly) dominate. On the server — PHP, Python, Node.js, Go, and more. Old “JScript / AngelScript” lists for a typical site are outdated.",
    },
    {
      q: "Does every site need scripts?",
      a: "Almost yes in a minimal form: analytics, forms, menus. But “more is better” breaks speed and security. Measure beats a widget pile.",
    },
    {
      q: "How does a script differ from a CMS plugin?",
      a: "A plugin is a packaged admin extension. Inside it are scripts and templates. Separately there are raw snippets in head/body.",
    },
    {
      q: "Are third-party scripts dangerous?",
      a: "Yes if the source is unknown: malware, hidden redirects, session theft. Take code only from the service account or your developer.",
    },
    {
      q: "Do scripts affect SEO?",
      a: "Indirectly: render blocking, heavy JS, content only after a script. Key text and links should be available without extra magic.",
    },
    {
      q: "Where should I paste an analytics counter?",
      a: "See the JavaScript insert article: head/body, Tag Manager, theme fields — without duplicates and stale cache.",
    },
  ],
  sections: [
    {
      title: "What a script is in plain words",
      level: 2,
      paras: [
        "It’s a set of instructions: “if the user clicked a button — show a form”, “if a request arrived — write a lead to the database”. The browser or server reads the code and runs steps in order and by conditions.",
        "A claw-machine analogy fits: coin and buttons are input; mechanics are the script; prize or empty is the result. On a site the input is an event or HTTP request; the result is a response, a DB write, a DOM change.",
      ],
      lists: [
        {
          intro: "A script usually:",
          items: [
            "reacts to an event or request",
            "changes the page, data, or server response",
            "lives in a file, bundle, or template insert",
            "depends on the environment (browser, PHP, Node)",
          ],
        },
      ],
    },
    {
      title: "Client and server scripts",
      level: 2,
      paras: [
        "Client code runs in the user’s browser: animation, form validation before submit, lazy blocks, chat widgets. Users can disable JS — don’t hide critical features behind a script only.",
        "Server code runs on hosting: auth, cart, HTML generation, API, email. The browser sees the result (page or JSON), not necessarily the business-logic source.",
      ],
      lists: [
        {
          intro: "Short version:",
          items: [
            "client — UX and interaction in the browser",
            "server — data, permissions, calculations, integrations",
            "often a pair: JS sends a request → server replies",
          ],
        },
      ],
      links: [
        {
          label: "Web application",
          href: "/en/blog/veb-prilozhenie/",
        },
        {
          label: "Web services",
          href: "/en/blog/veb-servisy/",
        },
      ],
    },
    {
      title: "Which languages are used",
      level: 2,
      paras: [
        "For the UI it’s almost always JavaScript (often with TypeScript and a build). For CMS sites PHP is common on the server; in custom work — Node.js, Python, other stacks for the job and team.",
        "Language choice is about ecosystem, load, and support — not a “coolness contest”. Outdated lists with JScript and exotica for a typical marketing site can be ignored.",
      ],
      lists: [
        {
          intro: "Practical minimum today:",
          items: [
            "JavaScript in the browser",
            "PHP / Node / Python on the backend — by project",
            "SQL and DB drivers next to server logic",
            "HTML/CSS — markup and style, not a “script”, but without them the page won’t assemble",
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
      title: "Where they’re used on a site",
      level: 2,
      paras: [
        "Scripts automate routine and extend the page: sliders, catalog filters, online chat, maps, A/B, ad pixels, analytics goals.",
        "On large properties you can’t avoid automation. But every third-party widget means requests, outage risk, and Core Web Vitals impact. Before install ask: what’s the job, and can it be lighter.",
      ],
      lists: [
        {
          intro: "Typical jobs:",
          items: [
            "stats and goals",
            "forms and calculators",
            "search and filters without reload",
            "accounts and cart",
            "CRM and payment integrations (more often server + a safe client)",
          ],
        },
      ],
    },
    {
      title: "How they’re connected and set up",
      level: 2,
      paras: [
        "A ready service snippet goes into the template, theme “scripts” fields, Tag Manager, or a plugin. A custom module is deployed to the server (CI/CD, SSH, rarely bare FTP), with permissions and config set.",
        "One-click installers from shady catalogs risk malware. For CMS, official repos and contractor code with review are safer.",
      ],
      lists: [
        {
          intro: "Basic order for a snippet:",
          items: [
            "take code from the service account",
            "paste in one place without a duplicate",
            "test on staging",
            "clear cache",
            "confirm the event/counter fires",
          ],
        },
      ],
      links: [
        {
          label: "Inserting JavaScript",
          href: "/en/blog/vstavka-javascript/",
        },
        {
          label: "Google Tag Manager",
          href: "/en/blog/google-tag-manager/",
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Don’t copy “SEO scripts” from forums. For security that’s the same risk class as an unknown plugin.",
        },
      ],
    },
    {
      title: "Speed, SEO, and measure",
      level: 2,
      paras: [
        "Heavy and blocking scripts in head slow first paint. Content that appears only after JS is worse for some bots and for users on slow networks.",
        "Simple rule: needed scenarios — yes; a dozen widgets “just in case” — no. Regularly audit tags in Tag Manager and CMS plugins.",
      ],
      lists: [
        {
          intro: "Hygiene:",
          items: [
            "disable unused tags",
            "load heavy code deferred (defer/async as fits)",
            "don’t duplicate Metrica/Analytics",
            "watch for errors in the browser console",
          ],
        },
      ],
      links: [
        {
          label: "Page size",
          href: "/en/blog/razmer-stranitsy/",
        },
      ],
    },
  ],
  closing: [
    "A script is an automation tool on the client or server. Understanding the code’s role helps install counters and widgets with measure — from a trusted source and without hurting speed.",
  ],
};
