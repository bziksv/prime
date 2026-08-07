import type { BlogPost } from "../../../data/blog";

/** EN overlay for affiliat-filtr — same structure as RU JSON. */
export const affiliatFiltrEn: BlogPost = {
  slug: "affiliat-filtr",
  title: "Affiliate sites and the affiliate filter: how to spot it and stay clear",
  date: "2018-01-24",
  category: "SEO",
  cover: "/images/blog/affiliat-filtr/cover-en.webp",
  excerpt:
    "What affiliate sites mean in SEO, why search engines use an affiliate filter, which signals link domains, and how to run several projects safely without clones for the same queries.",
  lead: [
    "Affiliates in search terms are several sites of one owner (or tightly linked) fighting the same queries and looking like duplicate offers. Search may keep one in the SERP and cut or demote the rest of the group.",
    "Linkage signals — shared contacts, templates, hosting, and copy — are what engines look for. The goal isn’t “trick search with different names” but not spawning clones: either one strong site, or truly different brands and offers.",
  ],
  faq: [
    {
      q: "Is an affiliate site the same as a satellite?",
      a: "Related, not synonyms. Satellites more often push links or traffic to a main site. Affiliates are your own domains competing in one SERP.",
    },
    {
      q: "Are partner stores always treated as affiliates?",
      a: "Not always. Risk rises with shared contacts, template, and the same commercial queries. An honest partner network with different legal entities and assortments is another case.",
    },
    {
      q: "How does the affiliate filter show up?",
      a: "Often one site from the group stays in results for target queries; others drop or leave page one. Exact logic differs between Yandex and Google and changes over time.",
    },
    {
      q: "Will changing hosting fix an affiliate filter?",
      a: "One IP alone isn’t enough. Engines look at contacts, content, templates, webmaster accounts, behavior. Fix the bundle of signals — not one trait.",
    },
    {
      q: "What if a competitor copied the site?",
      a: "Document the copy, file webmaster/platform complaints, strengthen your original. Don’t answer with a clone network of your own.",
    },
  ],
  sections: [
    {
      title: "What affiliates are and why the filter exists",
      level: 2,
      paras: [
        "Classic scheme: several domains for one company and the same keywords to fill multiple top slots. For the user it’s the same offer — search limits that monopoly.",
        "Linkage signals (incomplete list): same phones, addresses, and details; copy-paste or weak rewrite; shared hosting/IP/NS; one design template; shared webmaster accounts. Some checks are automatic, some follow complaints.",
        "Yandex has historically cut group duplicates harder in the SERP; Google also fights lookalike grids, with different symptoms. Figures and exceptions from 2007–2010 aren’t current policy.",
        "The affiliate filter differs from “you’re spammy” or link sanctions: it hits competition among your own sites in results — it doesn’t always “kill” a domain entirely.",
      ],
      links: [
        {
          label: "Satellite sites",
          href: "/en/blog/sayty-satellity/",
        },
        {
          label: "Competitor analysis",
          href: "/en/blog/analiz-konkurentov/",
        },
      ],
    },
    {
      title: "How to stay clear and how to check",
      level: 2,
      paras: [
        "Best defense — don’t build a clone grid. Grow one main site. If business needs several domains (different brands, regions, lines) — make them distinct in offer, content, contacts, and keywords — not “the same text on another URL.”",
        "“Register domains under different people” as the main trick is a bad focus: it looks like hiding linkage, not a useful product. Legal separation of entities and brands must be real — not a paper mask.",
        "If you’re already hit: remove duplicates (contacts, texts, templates), split keyword targeting, then you can contact search support with fix facts. No removal guarantee; recovery often takes weeks to months — not a one-week SEO flip.",
        "Checking competitors/clones: search unique text fragments (`intext`), matching phones and addresses, whois/NS where public, manual template review. SEO tools help but don’t replace eyes. Don’t treat “search has access to any private data” as an instruction.",
      ],
      lists: [
        {
          intro: "Checklist before a second site:",
          items: [
            "different offer/audience — not a clone;",
            "unique texts and visuals;",
            "contacts and legal data aren’t copy-paste;",
            "keywords don’t fully match the main site;",
            "no goal to “take 5 slots in one SERP”.",
          ],
        },
      ],
      links: [
        {
          label: "Placing a landing page",
          href: "/en/blog/razmeshchenie-lendinga/",
        },
        {
          label: "Search operators",
          href: "/en/blog/operatory-poiska/",
        },
      ],
    },
  ],
  related: [
    "sayty-satellity",
    "analiz-konkurentov",
    "razmeshchenie-lendinga",
    "operatory-poiska",
    "serm",
  ],
};
