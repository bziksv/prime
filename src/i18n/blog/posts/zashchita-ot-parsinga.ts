import type { BlogPost } from "../../../data/blog";

/** EN overlay for zashchita-ot-parsinga — same structure as RU JSON. */
export const zashchitaOtParsingaEn: BlogPost = {
  slug: "zashchita-ot-parsinga",
  title: "How to protect a site from scraping: captcha, limits, honeypot, and common sense",
  date: "2019-07-22",
  category: "Digital marketing",
  cover: "/images/blog/zashchita-ot-parsinga/cover-en.webp",
  excerpt:
    "Protecting a site from aggressive scraping: bot behavior, honeypots, IP analysis/limits, WAF/CDN — and why you mustn’t cut search crawlers together with the bad actors.",
  lead: [
    "Scrapers harvest prices, copy, reviews, and full catalogs. You can’t make a public site scraper-proof, but you can raise the cost of collection and limit damage to performance and SEO.",
    "Practical layers and common mistakes — without explaining how to bypass protection. What scraping is and where ethical collection ends are covered elsewhere; this piece is for site owners.",
  ],
  faq: [
    {
      q: "Is captcha on every page a good plan?",
      a: "Usually no: it hits UX and conversion. Better risk scoring and a challenge only on suspicious behavior.",
    },
    {
      q: "Can I block all bots?",
      a: "No. You need “good” search crawlers and preview services. Cut anomalous traffic, not all robotic traffic.",
    },
    {
      q: "Does robots.txt help against scrapers?",
      a: "For well-behaved robots — yes. A malicious scraper ignores it; it’s not the only defense.",
    },
    {
      q: "What is a honeypot?",
      a: "A hidden bait (link/field) a human doesn’t see but a dumb bot touches. Helps detect — not a silver bullet.",
    },
    {
      q: "Are CDN and WAF required?",
      a: "For high load and frequent attacks — useful (limits, bot management). A small site often needs rate limit + log monitoring.",
    },
    {
      q: "Does 100% protection exist?",
      a: "No. The goal is to lower damage and cost for the attacker, plus legal and contractual measures for content.",
    },
  ],
  sections: [
    {
      title: "Why protect",
      level: 2,
      paras: [
        "Aggressive scraping copies content, pulls prices for dumping, floods forms, and loads the server. Sometimes the goal is competitor analytics (prices), sometimes auto-filling clones.",
        "Priority: site availability for people and search engines, data integrity, less theft of unique content.",
      ],
      links: [
        {
          label: "Scraping: what it is and the boundaries",
          href: "/en/blog/parsing/",
        },
      ],
    },
    {
      title: "Captcha and behavioral scoring",
      level: 2,
      paras: [
        "Classic captcha on every step annoys. More modern — risk scoring (bot/human) and a challenge only when suspicious. Cookies/session reduce repeated checks for returning users.",
        "Remember: captcha-solving services exist — one captcha won’t stop a determined collector. Combine with request limits.",
      ],
    },
    {
      title: "Honeypot, IP, and limits",
      level: 2,
      paras: [
        "Honeypot: a hidden element a bot clicks/fills. The event is a log signal and a reason to tighten rules for the IP/session.",
        "IP signals (hosting vs consumer ISP, PTR for known crawlers) help but break with proxies. Rate limit is more reliable: many URLs/sec from one address → throttle or a temporary ban. Separately tell a traffic spike from a DDoS.",
      ],
      lists: [
        {
          intro: "When to cut access:",
          items: [
            "anomalous RPS from one IP/subnet;",
            "bypassing typical human patterns;",
            "mass catalog crawl with no referrer / weird UA;",
            "attacks on forms and the admin area.",
          ],
        },
      ],
      notes: [
        {
          title: "White robots",
          text: "Don’t blanket-block all bots: indexing and link previews will suffer. Keep an allowlist of known crawlers and verify them per platform docs (reverse DNS, etc.).",
          kind: "tip",
        },
      ],
    },
    {
      title: "Services and the legal layer",
      level: 2,
      paras: [
        "CDN/WAF with bot management (Cloudflare and peers) take part of the load: limits, JS challenge, geo/ASN rules. Paid antibot tools make scraping costlier but don’t give absolute guarantees — names and plans change; pick for traffic and budget.",
        "In the terms of use, ban automated collection. That doesn’t replace tech, but supports claims when content is copied. Also protect unique copy and photos with clone monitoring.",
      ],
      lists: [
        {
          intro: "Practical minimum:",
          items: [
            "rate limit on catalog and API;",
            "monitoring 5xx and log anomalies;",
            "honeypot on forms;",
            "captcha/challenge by risk;",
            "don’t cut search crawlers;",
            "backups and catalog integrity checks.",
          ],
        },
      ],
    },
  ],
  closing: [
    "Scraping protection is about making collection expensive and keeping UX/SEO — not an “invisible site”. Start with limits and monitoring, add risk-based captcha, and don’t block white crawlers together with the bad actors.",
  ],
  related: [
    "zashchita-kontenta",
    "parsing",
    "avtonapolnenie-sayta",
    "feyk-stranitsa",
    "ssl-sertifikat",
    "analiz-konkurentov",
  ],
};
