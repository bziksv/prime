import type { BlogPost } from "../../../data/blog";

/** EN overlay for metrika-ustanovka — same structure as RU JSON. */
export const metrikaUstanovkaEn: BlogPost = {
  slug: "metrika-ustanovka",
  title: "Installing Yandex Metrica on a website",
  date: "2021-04-27",
  category: "SEO",
  cover: "/images/blog/metrika-ustanovka/cover-en.webp",
  excerpt:
    "Where to paste the Yandex Metrica code in WordPress, Bitrix, Joomla, and site builders: counter in head / via plugin, visit checks, and common mistakes.",
  lead: [
    "Yandex Metrica counts visits, goals, and behavior. Without a counter you’re blind in ads and SEO reports.",
    "Below — where to place the code on popular CMS platforms and how to confirm data is flowing. Panel UIs change — look for “counters” / “Analytics.”",
  ],
  faq: [
    {
      q: "Where do you paste the code?",
      a: "Usually in `<head>` on all pages or via a tag manager. On a CMS — a plugin / “scripts in head” field.",
    },
    {
      q: "Is footer-only enough?",
      a: "Better follow Yandex’s recommendation — as early as possible in head, so short visits aren’t lost.",
    },
    {
      q: "Do subdomains need a separate counter?",
      a: "Depends on the job. Often one counter with a host filter; sometimes separate ones for different projects.",
    },
    {
      q: "Why no visits after install?",
      a: "Cache, a blocker, code missing on some templates, a typo in the ID, or the site only open locally to you.",
    },
    {
      q: "Does Metrica replace Webmaster?",
      a: "No. Metrica is user behavior. Webmaster is indexing and search messages.",
    },
    {
      q: "Should you install Metrica via a tag manager?",
      a: "Handy when the site has many marketing tags and someone owns the container. For a simple site, correctly pasting the official counter code into the template is enough.",
    },
  ],
  sections: [
    {
      title: "General principle",
      level: 2,
      paras: [
        "Create a counter in the Metrica cabinet, copy the code, and deploy it on every site template. Enable click map / Session Replay as needed and set goals.",
      ],
      lists: [
        {
          intro: "After pasting:",
          items: [
            "open the site in incognito;",
            "check “online” / visits in the cabinet;",
            "clear CMS and CDN cache;",
            "check mobile and desktop versions.",
          ],
        },
      ],
    },
    {
      title: "WordPress, Bitrix, and others",
      level: 2,
      paras: [
        "WordPress: a Metrica plugin or paste into the theme/child theme / “scripts in head.” Bitrix: support settings / Metrica or header template. Joomla and builders (Wix and peers) — custom code / marketing field.",
      ],
      lists: [
        {
          intro: "Safety rules:",
          items: [
            "don’t edit a parent theme without a child;",
            "one main counter, no duplicates;",
            "Metrica cabinet access — only for needed people;",
            "cookie/analytics consent — per your jurisdiction.",
          ],
        },
      ],
      notes: [
        {
          title: "Plugins",
          text: "Plugin names and menu items change. What matters is that the counter ID matches the cabinet and the code is on live pages.",
        },
      ],
    },
    {
      title: "Common mistakes",
      level: 2,
      paras: [
        "Two different codes at once, counter only on home, cache serving old HTML without the script, goals not set — “visits exist, no leads in the report.”",
      ],
      lists: [
        {
          intro: "Debug checklist:",
          items: [
            "view page source — is `mc.yandex` / the Metrica tag there;",
            "no Adblock blocking during the test;",
            "correct counter ID;",
            "goals and UTM for ads.",
          ],
        },
      ],
      links: [
        {
          label: "SEO on Bitrix",
          href: "/en/blog/seo-bitrix/",
        },
      ],
    },
    {
      title: "Creating a counter and base settings",
      level: 2,
      paras: [
        "In the Metrica cabinet create a counter for the exact site domain, set the time zone, and check access rights. Take the code from that counter’s UI: don’t copy a fragment from an old project, even if both sites belong to one company.",
        "Turn on extra tools deliberately. Session Replay and maps help study behavior, but before use check personal-data rules, field masking, and visitor notice requirements in your jurisdiction.",
      ],
      lists: [
        {
          intro: "Before deploy prepare:",
          items: [
            "owner access to the cabinet;",
            "a list of domains and subdomains to track;",
            "a developer contact or CMS access;",
            "rules for processing analytics data.",
          ],
        },
      ],
    },
    {
      title: "Goals beat total visit count",
      level: 2,
      paras: [
        "A counter without goals shows traffic but not whether the site brings inquiries. Set events for form submit, call, order, signup, or another meaningful action. Goal names should be clear to everyone reading the report.",
        "Fire a goal only after a successful user action — not on a button click. Otherwise the report fills with “leads” from people who opened a form and changed their mind, and ad decisions rest on bad data.",
      ],
      lists: [
        {
          intro: "Useful goals:",
          items: [
            "successful form submit;",
            "order complete or thank-you page;",
            "click on phone or messenger;",
            "download of an important file if it’s part of the funnel.",
          ],
        },
      ],
    },
    {
      title: "How to verify the install",
      level: 2,
      paras: [
        "Open several key pages in incognito and see whether a visit appears in reports. Then check source or DevTools: the page should have one correct tag with the needed counter ID.",
        "Don’t test only the home page. Catalog, blog, cart, and mobile menu templates may build differently, so the code easily lands on only part of the site. After clearing cache, recheck.",
      ],
      lists: [
        {
          intro: "If there’s no data, check in order:",
          items: [
            "counter ID correctness;",
            "tag presence on the problem page;",
            "CMS cache, CDN, and script optimizers;",
            "ad blocker in the tester’s browser.",
          ],
        },
      ],
    },
  ],
};
