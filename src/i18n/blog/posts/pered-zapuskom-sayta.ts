import type { BlogPost } from "../../../data/blog";

/** EN overlay for pered-zapuskom-sayta — same structure as RU JSON. */
export const peredZapuskomSaytaEn: BlogPost = {
  slug: "pered-zapuskom-sayta",
  title: "Before launching a site: a technical checklist",
  date: "2018-07-20",
  category: "Internet marketing",
  cover: "/images/blog/pered-zapuskom-sayta/cover-en.webp",
  excerpt:
    "Status codes, speed, sitemap and robots, 404, mixed content, duplicates, Title/URL, mobile, analytics, images, internal links, and structured data — without worshipping AMP or one crawler brand.",
  lead: [
    "A perfect bug-free launch almost never happens. Pre-production’s job is to catch the critical: indexation, speed, mobile, and analytics — so you don’t open the site blind.",
    "Below — a technical checklist before release. Business elements (offer, contacts) live in a neighboring piece. Specific crawlers and AMP from old guides aren’t required: pick any handy scanner and current standards.",
  ],
  faq: [
    {
      q: "Is AMP required?",
      a: "For most commercial sites — no. First proper responsive and speed. AMP is a separate choice for narrow cases.",
    },
    {
      q: "Which status code for pages in the index?",
      a: "Main documents — 200. Fix mass 404/5xx and redirect chains before promotion.",
    },
    {
      q: "Can robots.txt block the site?",
      a: "Yes — a wrong Disallow on important sections. Check robots, meta robots, and X-Robots-Tag.",
    },
    {
      q: "What about mixed content?",
      a: "After HTTPS all assets must load over https, or the browser cuts scripts/styles and UX suffers.",
    },
    {
      q: "Is structured data needed immediately?",
      a: "By page meaning (organization, product, FAQ). Not “every type at once” for a checkbox.",
    },
    {
      q: "Analytics before launch?",
      a: "Yes: counters/GTM and webmaster tools access so you see traffic and index errors from day one.",
    },
  ],
  sections: [
    {
      title: "Indexation, server responses, and speed",
      level: 2,
      paras: [
        "Crawl status codes: 200 on important URLs, no surprise 404/5xx/429. Check server response and content load before ad traffic.",
        "XML sitemap is valid and listed in robots; indexation rules don’t cut needed sections. The 404 page is useful, with a path back into the catalog.",
        "Mixed content after SSL is a common release bug. Duplicates (WWW/non-WWW, slash, parameters, template copies) close with canonical/redirects before junk gets indexed.",
      ],
      lists: [
        {
          intro: "Minimum before open:",
          items: [
            "status codes of key templates;",
            "sitemap + robots aligned;",
            "HTTPS without mixed content;",
            "no accidental sitewide noindex.",
          ],
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
        {
          label: "Website checklist",
          href: "/en/blog/cheklist-sayta/",
        },
      ],
    },
    {
      title: "URL, meta, mobile, and analytics",
      level: 2,
      paras: [
        "Clean URLs by section structure. Title and description unique on money pages. Responsive checked on a real phone — not only DevTools.",
        "Analytics counters and a tag container on all needed templates; webmaster tools connected. Images compressed, with meaningful alt where needed.",
        "Internal linking and link equity: important sections reachable from the menu and hubs, no “orphans”.",
      ],
      links: [
        {
          label: "Responsive website",
          href: "/en/blog/adaptivnyy-sayt/",
        },
        {
          label: "URL address",
          href: "/en/blog/url-adres/",
        },
      ],
    },
    {
      title: "Content, markup, and resilience",
      level: 2,
      paras: [
        "Heading hierarchy and text structure are readable. Structured data — by page type. Social links — by need, not a mandatory button zoo.",
        "Resilience: backups, uptime monitoring, basic security — so the release doesn’t die the first night. After launch watch Search Console / webmaster tools for coverage errors.",
      ],
      notes: [
        {
          title: "Tools",
          text: "Old guides often name one commercial crawler. Any scanner + PageSpeed/Lighthouse + webmaster panels works — the point is a repeatable checklist.",
          kind: "tip",
        },
      ],
    },
  ],
  closing: [
    "Before launch close indexation, speed, mobile, and analytics — catch up the rest in iterations. There won’t be perfection, but critical blockers are better caught before ad budget.",
  ],
  related: [
    "tehnicheskiy-seo-audit",
    "cheklist-sayta",
    "adaptivnyy-sayt",
    "seo-struktura-sayta",
    "ustarevshiy-sayt",
    "url-adres",
  ],
};
