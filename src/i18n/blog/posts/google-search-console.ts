import type { BlogPost } from "../../../data/blog";

/** EN overlay for google-search-console — same structure as RU JSON. */
export const googleSearchConsoleEn: BlogPost = {
  slug: "google-search-console",
  title: "Google Search Console: what it is and why webmasters need it",
  date: "2020-08-17",
  category: "SEO",
  cover: "/images/blog/google-search-console/cover-en.webp",
  excerpt:
    "What Google Search Console (formerly Webmaster Tools) is: how to verify a site, why a sitemap matters, index and error reports, and queries — without a “ranking button” cult.",
  lead: [
    "Google Search Console (formerly Google Webmaster Tools) is a free panel that connects your site to Google Search: indexing, crawl errors, search queries, sitemaps, and URL checks.",
    "It’s how you see whether Google can crawl and index your pages, which queries drive impressions, and where errors pile up. The UI moves; report meaning matters more than button placement — and none of it is a “ranking guarantee.”",
  ],
  faq: [
    {
      q: "Are Webmaster Tools and Search Console the same?",
      a: "Essentially yes: the old product name became Search Console. Older articles still say Webmaster.",
    },
    {
      q: "Do I need a Google account?",
      a: "Yes. Site verification uses an HTML file, meta tag, DNS, or Google Analytics/Tag Manager when linked.",
    },
    {
      q: "Is a sitemap required?",
      a: "Not the only way Google finds URLs, but it helps a lot on mid-size and large sites. List it in robots.txt and in GSC.",
    },
    {
      q: "Does GSC replace Yandex Webmaster?",
      a: "No. For an RU audience you usually need both panels.",
    },
    {
      q: "Are impressions and clicks the same as “positions”?",
      a: "They are Google Search data for your URLs. Average position is a guide, not an exact “#1 every day”.",
    },
    {
      q: "How often should you check Search Console?",
      a: "After releases — right away. On a plan, weekly: errors, coverage, queries. Not hourly.",
    },
    {
      q: "What does URL Inspection give you?",
      a: "How Google sees the page; you can request indexing. Not instant rankings.",
    },
    {
      q: "Does Search Console warn about security and malware?",
      a: "There are hack/issue warnings. That’s a signal to check the site — not an automatic “forever ban” without review.",
    },
  ],
  sections: [
    {
      title: "Why Search Console matters",
      level: 2,
      paras: [
        "You see which queries drive impressions and clicks, which URLs are indexed, where 404/server errors appear, how mobile usability and Core Web Vitals look (in current reports), and markup issues.",
        "Without the panel you’re flying blind: site changes exist, but Google hasn’t picked them up yet — or errors are piling up.",
      ],
      lists: [
        {
          intro: "Typical jobs:",
          items: [
            "verify domain/URL-prefix ownership",
            "track index and errors",
            "submit a sitemap",
            "review queries and pages",
            "inspect a specific URL.",
          ],
        },
      ],
    },
    {
      title: "Setup and verification",
      level: 2,
      paras: [
        "Add a property: prefer a domain property (via DNS) — it covers all subdomains and protocols. Alternative — a URL prefix (`https://www.example.com/`).",
        "Verification methods: DNS record, HTML file in the root, meta in `<head>`, link with GA4/GTM. Pick what you can access. Don’t leave test meta on other people’s templates.",
      ],
      lists: [
        {
          intro: "After verification:",
          items: [
            "users and team permissions",
            "preferred host already via 301, not only in the panel",
            "link Analytics if needed",
            "add a sitemap.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Verifying only `http://` or only non-www while the canon is different. Glue mirrors with 301 first.",
        },
      ],
      links: [
        {
          label: "Redirects",
          href: "/en/blog/redirekt/",
        },
      ],
    },
    {
      title: "Sitemap and crawling",
      level: 2,
      paras: [
        "In Sitemaps, add the `sitemap.xml` URL or a sitemap index. Watch processing status and errors. A map doesn’t force junk into the index — submit only canons.",
        "Coverage/pages reports show excluded URLs and reasons. Fix systemic issues (duplicates, noindex, 404), not every single URL by hand.",
      ],
      lists: [
        {
          intro: "Cross-check:",
          items: [
            "sitemap in GSC and in robots.txt",
            "discovered vs expected counts",
            "server and redirect errors in the map",
            "mobile issues on templates.",
          ],
        },
      ],
      links: [
        {
          label: "XML sitemap",
          href: "/en/blog/karta-sayta/",
        },
      ],
    },
    {
      title: "Queries, pages, and inspection",
      level: 2,
      paras: [
        "Search performance: queries, pages, countries, devices. Look for pages with impressions but no clicks (weak snippet) and clicks on irrelevant URLs.",
        "URL Inspection / “Fetch as Google” in older guides — check a specific address and request indexing after important edits.",
      ],
      lists: [
        {
          intro: "Weekly minimum:",
          items: [
            "new coverage errors",
            "click drops on key URLs",
            "manual actions (if any)",
            "CWV/usability — by template priority.",
          ],
        },
      ],
      links: [
        {
          label: "Snippets",
          href: "/en/blog/snippet/",
        },
      ],
    },
    {
      title: "HTML and “optimization” in the panel",
      level: 2,
      paras: [
        "Historically Webmaster flagged title/description issues. Same idea: duplicate titles, too long/short, missing. Fix in the CMS, then recrawl.",
        "Don’t expect the panel to “write SEO for you”. It diagnoses; content and structure are your job.",
      ],
      lists: [
        {
          intro: "Tied to the site:",
          items: [
            "unique Title/H1",
            "canonical",
            "template speed",
            "clean filter indexing.",
          ],
        },
      ],
      links: [
        {
          label: "On-page optimization",
          href: "/en/blog/optimizatsiya-stranitsy/",
        },
      ],
    },
    {
      title: "Practice and limits",
      level: 2,
      paras: [
        "GSC is the source of truth for Google, not for Yandex. Data lags and can be sampled on large sites. Cross-check with logs and Metrika/Analytics.",
        "Prep can take weeks; core ranking growth is planned for 2–6 months of work after prep — the panel only shows progress and problems; it doesn’t switch on a “ranking mode”.",
      ],
      lists: [
        {
          intro: "Rollout checklist:",
          items: [
            "domain verified",
            "sitemap added",
            "team with the right permissions",
            "error-review playbook",
            "mirror setup in Yandex Webmaster.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Fix mass coverage errors first — then spot “request indexing” for key URLs.",
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
  ],
  related: [
    "karta-sayta",
    "tehnicheskiy-seo-audit",
    "metrika-ustanovka",
    "snippet",
    "kanonicheskiy-teg",
  ],
};
