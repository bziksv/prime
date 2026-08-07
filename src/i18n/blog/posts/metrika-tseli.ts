import type { BlogPost } from "../../../data/blog";

/** EN overlay for metrika-tseli — same structure as RU JSON. */
export const metrikaTseliEn: BlogPost = {
  slug: "metrika-tseli",
  title: "Goals in Yandex Metrica: types and setup",
  date: "2020-07-15",
  category: "SEO",
  cover: "/images/blog/metrika-tseli/cover-en.webp",
  excerpt:
    "How to set up goals in Yandex Metrica: pageviews, page visits, JavaScript events, and a multi-step goal — with verification and the current reachGoal form.",
  lead: [
    "Goals in Metrica show whether visitors reach the actions that matter: thank-you page, “Buy” click, form submit, session depth. Without goals, ads and SEO reports stay “visits for visits’ sake”.",
    "Below — goal types, when to pick which, how to set a URL condition and an event via `reachGoal`, how to build a multi-step funnel and verify firing. Counter install is a separate article; the UI moves — follow the meaning of Goals / conditions.",
  ],
  faq: [
    {
      q: "Counter first or goals?",
      a: "A working counter on all templates first, then goals. Otherwise you’re configuring into the void.",
    },
    {
      q: "When is a “page visit” goal better than an event?",
      a: "A URL goal is simpler: no code on the button. An event is more precise for clicks, forms, and steps without a URL change.",
    },
    {
      q: "Which reachGoal code is current?",
      a: "Modern form: `ym(XXXXXX,'reachGoal','TARGET_NAME')`, where XXXXXX is the counter ID. Legacy `yaCounter….reachGoal` still appears — better migrate to `ym`.",
    },
    {
      q: "How many steps in a multi-step goal?",
      a: "As many meaningful funnel stages as you need (often 2–5). Don’t split every click — you get noise and broken sessions.",
    },
    {
      q: "Why isn’t the goal counting?",
      a: "Wrong URL condition, event not firing, “Don’t count my visits”, blocker, goal not saved, cached old JS.",
    },
    {
      q: "Do you need goals for Yandex Direct?",
      a: "Yes if you optimize and judge campaigns by conversions. Linking counter and ad account follows current Yandex rules.",
    },
    {
      q: "Do goals replace the ecommerce report?",
      a: "No. Ecommerce/purchases are a separate data track. Goals are universal conversions and micro-conversions.",
    },
    {
      q: "Can a store use “pageview count” as a goal?",
      a: "As soft interest — yes. For money, cart, checkout, and leads matter more. Don’t confuse engagement with revenue.",
    },
  ],
  sections: [
    {
      title: "What goal types exist",
      level: 2,
      paras: [
        "The base set: pageview count (session depth), page visit (URL condition), JavaScript event (click/submit/custom), multi-step goal (chain of steps). Pick the type for the action that actually means business.",
        "First state the site goal: lead, purchase, call, signup. Then translate it into a measurable Metrica condition. Configure before scaling ads — otherwise you optimize blind.",
      ],
      lists: [
        {
          intro: "Four practical types:",
          items: [
            "pageviews — engagement;",
            "URL — thank-you, cart, contacts;",
            "JS event — buttons and forms;",
            "multi-step — funnel stages.",
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
      title: "“Pageview count” goal",
      level: 2,
      paras: [
        "Counts sessions where the person opened at least N pages. Useful on media, learning series, and brand blogs: is navigation clear, does content stick.",
        "For pure ecommerce it’s a weak money KPI. Use it as an extra quality signal — not the store’s main conversion.",
      ],
      lists: [
        {
          intro: "When it fits:",
          items: [
            "content portal;",
            "course of article series;",
            "B2B warm-up blog;",
            "checking “do they read past the homepage”.",
          ],
        },
      ],
      notes: [
        {
          title: "Setup (step meaning)",
          kind: "tip",
          text: "Settings → Goals → Add → name and pageview threshold → save. UI labels may differ slightly.",
        },
      ],
    },
    {
      title: "“Page visit” goal",
      level: 2,
      paras: [
        "Fires when the visit URL matches a condition: exact match, “starts with”, “contains”, or a regular expression. Classics — `/thanks/`, `/cart/`, `/order/success/`, shipping page.",
        "You see whether people reach the key URL, whether internal links work, and conversion of paths to checkout. For groups of cards, “starts with” / “contains” help — but don’t make the condition too broad or you get noise.",
      ],
      lists: [
        {
          intro: "URL conditions:",
          items: [
            "equals — one exact address;",
            "starts with — catalog/checkout branch;",
            "contains — shared fragment in pretty URLs;",
            "regexp — complex masks (watch for mistakes).",
          ],
        },
      ],
      tables: [
        {
          caption: "URL goal examples",
          headers: ["Job", "Condition", "Example"],
          rows: [
            ["Thank-you", "equals / contains", "/order/success/"],
            ["Cart", "contains", "/cart"],
            ["Category", "starts with", "/catalog/pumps/"],
            ["Contacts", "equals", "/contacts/"],
          ],
        },
      ],
    },
    {
      title: "JavaScript event and reachGoal",
      level: 2,
      paras: [
        "You need an event when the URL doesn’t change: “Buy” click, form submit, popup open, “show phone”. In the cabinet create a JavaScript goal and set an identifier (Latin letters, digits, `_`).",
        "On the site call goal completion. Current call: `ym(12345678, 'reachGoal', 'ORDER_CLICK');` — plug in your counter ID and identifier. For forms, fire on successful submit/callback — not on every field focus.",
      ],
      lists: [
        {
          intro: "Typical events:",
          items: [
            "CTA click “Order” / “Add to cart”;",
            "successful form submit;",
            "chat start / phone reveal;",
            "configuration pick;",
            "share (if it matters for KPIs).",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Identifier in the cabinet and in code differ by case/typo — the goal stays silent. Match them one-to-one.",
        },
      ],
    },
    {
      title: "Multi-step goal and funnel",
      level: 2,
      paras: [
        "A multi-step goal is a chain of steps (URL and/or events). It shows where people drop: catalog → product → cart → checkout. Steps must be required and in a logical order.",
        "Mind session timeout: a long idle can break the chain. Don’t assemble 10 micro-steps “just in case” — keep stages you actually decide on.",
      ],
      lists: [
        {
          intro: "Sample ecommerce funnel:",
          items: [
            "category view;",
            "product card;",
            "cart;",
            "checkout start;",
            "successful order (URL or event).",
          ],
        },
      ],
    },
    {
      title: "Verification and common failures",
      level: 2,
      paras: [
        "After saving wait a couple of minutes, turn off “Don’t count my visits” for the test, walk the scenario yourself, and check the goals report. For events open the console: any JS errors, does `ym` fire.",
        "If there’s no data — also see “Metrica isn’t working”: blockers, cache, counter missing on some templates, wrong ID. Online chats and widgets send their own events — match current names in the widget docs; don’t copy outdated lists blindly.",
      ],
      lists: [
        {
          intro: "Verification checklist:",
          items: [
            "goal saved in the cabinet;",
            "URL condition matches the live address;",
            "reachGoal with the right id and counter number;",
            "test visit not filtered out;",
            "no console errors on click/submit.",
          ],
        },
      ],
      links: [
        {
          label: "Metrica isn’t working",
          href: "/en/blog/metrika-ne-rabotaet/",
        },
        {
          label: "Contact form",
          href: "/en/blog/forma-obratnoy-svyazi/",
        },
        {
          label: "Inserting JavaScript",
          href: "/en/blog/vstavka-javascript/",
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Keep a table: goal name → type → where in code/URL → who owns edits.",
        },
      ],
    },
  ],
  related: [
    "metrika-ustanovka",
    "metrika-ne-rabotaet",
    "google-analytics",
    "dashboard",
    "forma-obratnoy-svyazi",
    "vstavka-javascript",
  ],
};
