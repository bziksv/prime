import type { BlogPost } from "../../../data/blog";

/** EN overlay for oshibki-nastroyki-konteksta — same structure as RU JSON. */
export const oshibkiNastroykiKontekstaEn: BlogPost = {
  slug: "oshibki-nastroyki-konteksta",
  title: "Mistakes when setting up paid search ads",
  date: "2018-07-02",
  category: "Paid search",
  cover: "/images/blog/oshibki-nastroyki-konteksta/cover-en.webp",
  excerpt:
    "Typical setup misses in Direct and Ads: ads without contacts and extensions, Search vs networks, geo and ad-group structure, a dead landing, negatives, ad schedule, and remarketing — a checklist before scaling budget.",
  lead: [
    "Paid search isn’t “pour in keywords and wait for clients.” At setup you can lose clicks and money fast: no extensions, mixed surfaces, messy structure, a site that doesn’t open from the ad.",
    "Below: common mistakes from setup audits (not a from-scratch strategy or a full KPI audit). Nearby — campaign management mistakes and the audit process. Interfaces change; hygiene still matters.",
  ],
  faq: [
    {
      q: "How is this different from “10 management mistakes”?",
      a: "That piece covers demand, budget, keywords, and ongoing optimization. Here — setup hygiene: extensions, structure, geo, landing, negatives.",
    },
    {
      q: "Do you need contacts in the ad?",
      a: "Where extensions are available (phone, sitelinks, address) — yes. They grow ad real estate and trust.",
    },
    {
      q: "Search and Display/networks together?",
      a: "Usually split them: different creatives, bids, and KPIs. Networks need banners/images; Search needs text and relevance.",
    },
    {
      q: "Why split geo?",
      a: "To see where CPA is better and not mix cities with different margins and logistics in one campaign without need.",
    },
    {
      q: "Is a landing that “almost” loads fine?",
      a: "No. A slow or crashing landing burns the click. Check the ad URL on mobile before launch.",
    },
    {
      q: "Negatives once and done?",
      a: "No. The list is living: watch search terms and clean regularly.",
    },
    {
      q: "When should you call for an audit?",
      a: "If the setup checklist is done and KPIs still miss — look at a full audit and management mistakes.",
    },
  ],
  sections: [
    {
      title: "The ad and trust in the SERP",
      level: 2,
      paras: [
        "A bare ad without sitelinks, callouts, phone, or a clean display path loses visibility to neighbors even with a strong slot.",
        "A favicon and a correct display URL boost brand recognition in the SERP; a broken icon or a meaningless subdomain path hurts CTR.",
        "The landing in the ad must match the promise: don’t send “PVC windows” to a homepage with a dozen services.",
      ],
      links: [
        {
          label: "Direct responsive ads",
          href: "/en/blog/adaptivnyy-shablon-direkt/",
        },
        {
          label: "Site before advertising",
          href: "/en/blog/sayt-pered-reklamoy/",
        },
      ],
    },
    {
      title: "Search vs networks and geo structure",
      level: 2,
      paras: [
        "Search doesn’t have the same images as networks; creative and copy differ. Copying “as on Search” one-to-one into Display/networks is a common setup mistake.",
        "Regions with different performance are better as separate campaigns — or at least clearly segmented: otherwise optimization averages good and bad geo.",
        "Industry group structure (brand, models, services, promos, competitors — where it fits) gives readable stats; one keyword dump makes it hard to see what works.",
      ],
      links: [
        {
          label: "Campaign management mistakes",
          href: "/en/blog/oshibki-reklamnoy-kampanii/",
        },
        {
          label: "Google Ads campaign types",
          href: "/en/blog/tipy-kampaniy-google-ads/",
        },
      ],
    },
    {
      title: "Landing, tags, and analytics",
      level: 2,
      paras: [
        "Clicks to nowhere: the page doesn’t open, 500/timeout, redirect loop. Check the final URL before budget.",
        "UTMs and goals in Metrika/Analytics should be ready before launch — otherwise you can’t later tell “what worked.”",
        "Without goals, bid optimization turns into an argument about clicks.",
      ],
      links: [
        {
          label: "Ad campaign analysis",
          href: "/en/blog/analiz-reklamnoy-kampanii/",
        },
      ],
    },
    {
      title: "Setup checklist before scaling",
      level: 2,
      paras: [
        "Negatives and cross-negatives between groups — so you don’t compete with yourself. Ad schedule — by real capacity to handle leads, not “24/7 because we can.”",
        "Remarketing on abandoned actions when you have an audience and decent creative; not instead of basic Search setup.",
        "Use this checklist to control a contractor: if basics aren’t closed, it’s early to argue about “too little budget.”",
      ],
      lists: [
        {
          intro: "Minimum before scale:",
          items: [
            "extensions and relevant URLs",
            "Search and networks split",
            "geo and groups make sense",
            "landing opens on mobile",
            "goals and UTMs track",
            "negatives and schedule set",
          ],
        },
      ],
      links: [
        {
          label: "Ad campaign audit",
          href: "/en/blog/audit-reklamnoy-kampanii/",
        },
        {
          label: "Paid-search contractor",
          href: "/en/blog/podryadchik-kontekst/",
        },
      ],
    },
  ],
  closing: [
    "Walk the checklist on your account in half an hour: if extensions, structure, geo, and the landing are solid — next look at economics and management, not “more keywords into the same dump.”",
  ],
  related: [
    "oshibki-reklamnoy-kampanii",
    "audit-reklamnoy-kampanii",
    "sayt-pered-reklamoy",
    "analiz-reklamnoy-kampanii",
    "podryadchik-kontekst",
    "zabluzhdeniya-konteksta",
  ],
};
