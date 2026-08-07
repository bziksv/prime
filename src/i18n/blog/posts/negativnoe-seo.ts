import type { BlogPost } from "../../../data/blog";

/** EN overlay for negativnoe-seo — same structure as RU JSON. */
export const negativnoeSeoEn: BlogPost = {
  slug: "negativnoe-seo",
  title: "Negative SEO: what attacks threaten and how to defend",
  date: "2020-07-23",
  category: "SEO",
  cover: "/images/blog/negativnoe-seo/cover-en.webp",
  excerpt:
    "Negative SEO means attempts to harm someone else’s site in search. Which signals show up, how to monitor and defend — without attack how-tos, DDoS, or “ban a competitor” guides.",
  lead: [
    "Negative SEO is manipulation aimed at worsening another site’s rankings or reputation: toxic links, complaints, content copying, hacking. Searches like “how to ban a competitor” usually lead to harmful advice; we cover defense.",
    "Below — typical threats from a site owner’s view and what to do legally. There are no instructions for attacks, DDoS, hacking, or link “bombs” — and there won’t be.",
  ],
  faq: [
    {
      q: "Is this a guide to remove a competitor from search?",
      a: "No. Defense and diagnosis only. Attacking other sites risks you too (law, reputation, blowback).",
    },
    {
      q: "Does “file a complaint and the competitor is banned” work?",
      a: "A complaint without grounds usually goes nowhere. Engines look at evidence and site quality. False reports are a bad strategy.",
    },
    {
      q: "What is an external link bomb?",
      a: "A sudden flood of junk links to your domain. Monitor backlinks; when needed use disavow/rejection tools per the engine’s rules and strengthen your own profile.",
    },
    {
      q: "Someone stole our copy — what next?",
      a: "Document the facts, contact the copy sites, involve a lawyer if needed. On your side, strengthen uniqueness and publish/authority signals.",
    },
    {
      q: "Are DDoS and hacking SEO?",
      a: "They’re attacks on availability and security. SEO articles don’t “fold them into promotion”; look at infrastructure defense and site-security materials.",
    },
    {
      q: "Competitor affiliates?",
      a: "A network of lookalike sites under one beneficiary risks a filter for them. You care more about not spawning your own mirrors; see the affiliate filter.",
    },
    {
      q: "How do I know a drop isn’t from an attack?",
      a: "Check updates, seasonality, demand, your own edits, Webmaster/GSC. Don’t blame “the competitor banned us” without data.",
    },
    {
      q: "Where do I file a real spam report?",
      a: "Webmaster tools / search-engine spam forms — against a specific URL violation, without fabricating evidence.",
    },
  ],
  sections: [
    {
      title: "Why “ban the competitor” is a bad frame",
      level: 2,
      paras: [
        "Search ranks on quality signals and query fit. Growing your own site steadily beats wars of destruction.",
        "Schemes from old posts (buy access, bomb with links, DDoS) are either illegal or easily hurt the initiator. We don’t describe them as instructions.",
        "If a competitor breaks the law or a platform’s rules — use official channels and a lawyer, not a “nuke the rival” tariff.",
      ],
      lists: [],
    },
    {
      title: "Typical threats (defense overview)",
      level: 2,
      paras: [
        "Toxic backlinks and a sudden rise in spam donors.",
        "Content copied onto third-party sites.",
        "Complaints and behavioral manipulation (hard to prove, but monitoring still matters).",
        "CMS compromise: spam pages, redirects, hidden text — often looks like a “filter,” but it’s a hack.",
        "Availability attacks (DDoS) — infrastructure, not a “button in Webmaster.”",
      ],
      lists: [],
      notes: [
        {
          title: "No attack how-tos",
          text: "Details of running link bombs, cloaking “for a complaint,” hacking, and DDoS are intentionally omitted.",
        },
      ],
      links: [
        {
          label: "Site security",
          href: "/blog/bezopasnost-sayta/",
        },
        {
          label: "Link profile",
          href: "/blog/ssylochnyy-profil/",
        },
      ],
    },
    {
      title: "What to monitor",
      level: 2,
      paras: [
        "Webmaster / Search Console: security, index issues, sharp coverage drops.",
        "Backlinks: anomalous spikes of junk domains.",
        "Uniqueness and scans for copies of key URLs.",
        "CMS file integrity, unknown admins, strange cron jobs and redirects.",
        "Uptime and CDN/overload protection — if the business is availability-critical.",
      ],
      lists: [
        {
          intro: "Monthly mini ritual:",
          items: [
            "core positions/traffic snapshot;",
            "security check in the panels;",
            "a look at new referring domains;",
            "backup and CMS/plugin updates.",
          ],
        },
      ],
      links: [
        {
          label: "Search-engine filters",
          href: "/en/blog/filtry-poiskovikov/",
        },
        {
          label: "Affiliate filter",
          href: "/blog/affiliat-filtr/",
        },
      ],
    },
    {
      title: "What to do if you suspect an attack",
      level: 2,
      paras: [
        "First separate: update / your own mistake / hack / external pressure. Logs, backups, webmaster panels.",
        "On a hack — isolate, restore a clean copy, change passwords, work with the host/contractor. Don’t “buy links back.”",
        "On toxic links — document, follow the engine’s current guidance, strengthen your content and natural profile.",
        "On content copies — DMCA/platform complaints under their rules; a lawyer if there’s damage.",
      ],
      lists: [],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "Negative SEO is a risk to your site; the answer is monitoring and defense, not war.",
        "Attacks like DDoS and hacking sit outside “white SEO” and often outside the law.",
        "Grow your own property: tech, content, links by the rules — stronger than “ban the competitor.”",
      ],
      lists: [],
    },
  ],
  closing: [
    "Set up Webmaster monitoring, backups, and link control — you close real holes faster than hunting a “way to remove a competitor from the SERP.”",
  ],
  related: [
    "filtry-poiskovikov",
    "bezopasnost-sayta",
    "ssylochnyy-profil",
    "affiliat-filtr",
    "proverka-unikalnosti",
    "samostoyatelnoe-seo",
  ],
};
