import type { BlogPost } from "../../../data/blog";

/** EN overlay for metrika-ne-rabotaet — same structure as RU JSON. */
export const metrikaNeRabotaetEn: BlogPost = {
  slug: "metrika-ne-rabotaet",
  title: "Why Yandex Metrica isn’t working on the site",
  date: "2020-11-19",
  category: "SEO",
  cover: "/images/blog/metrika-ne-rabotaet/cover-en.webp",
  excerpt:
    "What to do if the Metrica counter isn’t counting visits, Session Replay is silent, the informer is empty, or goals don’t fire: a calm diagnostics checklist.",
  lead: [
    "Metrica going silent or lying is common after a theme change, cache, tag manager, or blockers. First separate the cases: code isn’t loading at all, data exists but looks off, or a single module is broken (Session Replay, goals, informer).",
    "Below: typical causes and a check order. Fresh install is in the Metrica setup article; this piece focuses on breakage.",
  ],
  faq: [
    {
      q: "The counter is installed but shows no visits — where should I start?",
      a: "Open the site in incognito without blockers, check Online in the account, DevTools → Network for requests to mc.yandex, and confirm the counter number matches.",
    },
    {
      q: "Why do I see visits and a colleague doesn’t?",
      a: "Often AdBlock, built-in browser protection, or a corporate filter blocks the script. Check reports without your own IP filters.",
    },
    {
      q: "If Session Replay isn’t recording, is Metrica broken?",
      a: "Not necessarily. Session Replay is enabled separately; it’s heavier and sensitive to CSP, mixed content, and settings. Base visits may still flow.",
    },
    {
      q: "If goals don’t fire, is the counter code at fault?",
      a: "More often the goal condition, an SPA without a hit, an AJAX form without reachGoal, or a goal on the wrong URL. Use the goals debugger.",
    },
    {
      q: "Clearing cache helped — is that normal?",
      a: "Yes, if an old template without the counter was served from CDN or a cache plugin. After edits, flush HTML cache.",
    },
    {
      q: "Do I need a separate counter on a subdomain?",
      a: "Depends on the task. Sometimes one counter with host filters; sometimes separate. Main point — code on every needed template.",
    },
    {
      q: "Is an empty informer a disaster?",
      a: "The informer is a site widget. Its failure does not mean the account is dead. Check informer code and cache separately.",
    },
    {
      q: "Is Metrica via GTM worse?",
      a: "Fine if the container is published and fires before the user leaves. Mistakes — draft GTM on production or a double install.",
    },
  ],
  sections: [
    {
      title: "No data or “suspicious” data",
      level: 2,
      paras: [
        "First confirm the page has one current code for the right number. Common silence causes: code only on the homepage, stripped by the theme footer, cache serving old HTML, CSP/blocker cutting `mc.yandex.ru`, site opened locally without the script.",
        "Weird data: own-IP filter, bots, duplicate counters, goals on a test domain, timezone. Check the Online report right after an incognito visit.",
      ],
      lists: [
        {
          intro: "Quick checklist:",
          items: [
            "counter number = account",
            "code in the source of all key templates",
            "Metrica request in Network (not red)",
            "CMS/CDN cache flush",
            "check without AdBlock",
            "no two different counters at once",
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
      title: "Session Replay isn’t working",
      level: 2,
      paras: [
        "Session Replay (Webvisor) records behavior and needs a separate toggle in counter settings. If visits flow but no recordings — check the option, limits, third-party script blocking, and Content-Security-Policy.",
        "On SPAs and pages with strict CSP recording may break. Mixed content (HTTPS site loading HTTP) also hurts. For diagnosis compare a normal hit with Session Replay sessions in the account.",
      ],
      lists: [
        {
          intro: "What to check:",
          items: [
            "Session Replay enabled in settings",
            "no aggressive blocker",
            "CSP not cutting required Yandex domains",
            "page served over HTTPS stably",
            "tried recording from a clean visit",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Session Replay is about UX, not “is there traffic.” Fix regular visits and goals first, then recordings.",
        },
      ],
    },
    {
      title: "Informer shows no numbers",
      level: 2,
      paras: [
        "The informer is a separate code fragment/widget on the site. It can break on a theme change while the Metrica account is fine. Confirm the informer block is present and not hidden by CSS, and cache isn’t serving a stub.",
        "If you only need the account — the informer isn’t required. For public visit counters on the site, remember part of the audience blocks scripts — the number is always incomplete.",
      ],
      lists: [
        {
          intro: "Typical causes:",
          items: [
            "widget removed in a redesign",
            "old informer ID",
            "HTML cache",
            "informer script blocked",
          ],
        },
      ],
    },
    {
      title: "Goals aren’t firing",
      level: 2,
      paras: [
        "A “URL contains” goal won’t fire if thank-you opens without an address change (modal/AJAX). JavaScript goals need `ym(...reachGoal...)` at the right moment. SPAs need a correct hit on screen change.",
        "Check in goals debug mode: condition, URL match, no typo in the goal name, no filters dropping your test.",
      ],
      lists: [
        {
          intro: "Common mistakes:",
          items: [
            "goal on http, site on https",
            "typo in the reachGoal id",
            "form submits but the goal is on another button",
            "CRM has a conversion but no Metrica hit",
            "testing from an IP in exclusions",
          ],
        },
      ],
      links: [
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "Cache, CMS, and tag manager",
      level: 2,
      paras: [
        "After inserting code, flush page cache and minification if it breaks scripts. On WordPress/Bitrix different templates (product, cart, landing) are often forgotten. In GTM publish the container and don’t duplicate native code + tag.",
        "CDN and “JS optimizers” sometimes delay Metrica so short visits never send — balance speed and data completeness.",
      ],
      lists: [
        {
          intro: "After a template edit:",
          items: [
            "cache flush",
            "check 3–4 page types",
            "mobile and desktop",
            "publish GTM if you use it",
          ],
        },
      ],
    },
    {
      title: "Diagnostics order without chaos",
      level: 2,
      paras: [
        "Go in layers: code on the page → network/blockers → account (online) → reports/filters → module (goals / Session Replay / informer). Log what you already checked — or the team spins the same hypotheses.",
        "If data vanished after a release — roll back or diff the template. If it stopped suddenly with no deploy — more often blockers, filters, quota, or a domain/mirror change.",
      ],
      lists: [
        {
          intro: "Mini ritual:",
          items: [
            "incognito + visit",
            "Network for mc.yandex",
            "online in the account",
            "goal / Session Replay specifically",
            "ticket note: symptom → hypothesis → result",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Reinstalling the counter from scratch every time. Find the broken layer first — or you’ll get duplicate numbers and a messy history.",
        },
      ],
      links: [
        {
          label: "Page source code",
          href: "/en/blog/ishodnyy-kod/",
        },
      ],
    },
  ],
  related: [
    "metrika-ustanovka",
    "optimizatsiya-konversii",
    "ishodnyy-kod",
    "dashboard",
    "analitika-kontent-marketinga",
  ],
};
