import type { BlogPost } from "../../../data/blog";

/** EN overlay for google-search-console — same structure as RU JSON. */
export const googleSearchConsoleEn: BlogPost = {
  slug: "google-search-console",
  title: "Google Search Console: what it is and why you need it",
  date: "2020-08-17",
  category: "SEO",
  cover: "/images/blog/google-search-console/cover-en.webp",
  excerpt:
    "What Google Search Console (formerly Webmaster Tools) does: verify the site, submit a sitemap, read index and error reports, and review queries — without treating it like a ranking switch.",
  lead: [
    "Google Search Console (formerly Google Webmaster Tools) is a free panel that connects your site to Google Search: indexing, crawl errors, search queries, sitemaps, and URL checks.",
    "Below: why it matters, how to verify a property, what to watch after setup, and how not to confuse reports with a ranking guarantee. The UI moves; report meaning matters more than where the buttons sit.",
  ],
  faq: [
    {
      q: "Are Webmaster Tools and Search Console the same?",
      a: "Essentially yes — the old name became Search Console. Older articles still say Webmaster.",
    },
    {
      q: "Do I need a Google account?",
      a: "Yes. Verification uses an HTML file, meta tag, DNS, or a link through Analytics / Tag Manager when those are connected.",
    },
    {
      q: "Is a sitemap required?",
      a: "Not the only way Google finds URLs, but it helps a lot on mid-size and large sites. List it in robots.txt and in GSC.",
    },
    {
      q: "Does GSC replace Yandex Webmaster?",
      a: "No. For a Russian audience you usually run both panels.",
    },
    {
      q: "Are impressions and clicks the same as rankings?",
      a: "They’re Google Search data for your URLs. Average position is a guide — not an exact “#1 every day.”",
    },
    {
      q: "How often should I check it?",
      a: "After releases — right away. On a plan, weekly: errors, coverage, queries. Not hourly.",
    },
    {
      q: "What does URL Inspection do?",
      a: "Shows how Google sees the page; you can request indexing. It doesn’t push you onto page one overnight.",
    },
    {
      q: "Security and malware warnings?",
      a: "GSC can flag hacks and issues. That’s a cue to investigate — not an automatic forever ban without review.",
    },
  ],
  sections: [
    {
      title: "Why Search Console matters",
      level: 2,
      paras: [
        "You see which queries drive impressions and clicks, which URLs are indexed, where 404s and server errors appear, how mobile usability and Core Web Vitals look (in current reports), and where markup breaks.",
        "Without the panel you’re flying blind: the site changed, but Google hasn’t picked it up — or errors are quietly stacking.",
      ],
      lists: [
        {
          intro: "Typical jobs:",
          items: [
            "verify domain or URL-prefix ownership",
            "track index and errors",
            "submit a sitemap",
            "review queries and pages",
            "inspect a specific URL",
          ],
        },
      ],
    },
    {
      title: "Setup and verification",
      level: 2,
      paras: [
        "Add a property. Prefer a domain property via DNS — it covers all subdomains and protocols. Alternative: a URL prefix (`https://www.example.com/`).",
        "Verification methods: DNS record, HTML file in the root, meta in `<head>`, or a link with GA4/GTM. Use what you can access. Don’t leave test meta on someone else’s template.",
      ],
      lists: [
        {
          intro: "After verification:",
          items: [
            "users and team permissions",
            "preferred host already via 301, not only in the panel",
            "link Analytics if needed",
            "add a sitemap",
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
      title: "Sitemaps and crawling",
      level: 2,
      paras: [
        "In Sitemaps, add the `sitemap.xml` URL or a sitemap index. Watch processing status and errors. A map doesn’t force junk into the index — submit canons only.",
        "Coverage / pages reports show excluded URLs and why. Fix systemic issues (duplicates, noindex, 404s), not every single URL by hand.",
      ],
      lists: [
        {
          intro: "Cross-check:",
          items: [
            "sitemap in GSC and in robots.txt",
            "discovered vs expected counts",
            "server and redirect errors in the map",
            "mobile issues on templates",
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
      title: "Queries, pages, and URL Inspection",
      level: 2,
      paras: [
        "Search performance: queries, pages, countries, devices. Hunt pages with impressions but no clicks (weak snippet) and clicks landing on the wrong URLs.",
        "URL Inspection (older guides said “Fetch as Google”) checks one address and lets you request indexing after important edits.",
      ],
      lists: [
        {
          intro: "Weekly minimum:",
          items: [
            "new coverage errors",
            "click drops on key URLs",
            "manual actions (if any)",
            "CWV / usability by template priority",
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
      title: "HTML issues and what the panel won’t do",
      level: 2,
      paras: [
        "Historically Webmaster flagged title/description problems. Same idea today: duplicate titles, too long or too short, missing. Fix in the CMS, then wait for recrawl.",
        "Don’t expect the panel to write SEO for you. It diagnoses; content and structure are your job.",
      ],
      lists: [
        {
          intro: "Tied back to the site:",
          items: [
            "unique Title and H1",
            "canonicals",
            "template speed",
            "clean filter indexing",
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
        "GSC is the source of truth for Google, not for Yandex. Data lags and can be sampled on large sites. Cross-check with logs and analytics.",
        "Prep can take weeks; ranking and traffic growth is planned over 2–6 months after that work — the panel shows progress and problems; it doesn’t flip on a “rankings mode.”",
      ],
      lists: [
        {
          intro: "Rollout checklist:",
          items: [
            "domain verified",
            "sitemap added",
            "team with the right permissions",
            "error-review playbook",
            "mirror setup in Yandex Webmaster",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Fix mass coverage errors first — then spot-request indexing for key URLs.",
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
