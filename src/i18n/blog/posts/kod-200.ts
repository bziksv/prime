import type { BlogPost } from "../../../data/blog";

/** EN overlay for kod-200 — same structure as RU JSON. */
export const kod200En: BlogPost = {
  slug: "kod-200",
  title: "Response code 200 OK: what it means for the site and indexing",
  date: "2021-01-29",
  category: "SEO",
  cover: "/images/blog/kod-200/cover-en.webp",
  excerpt:
    "What HTTP 200 OK means, how it relates to indexing, why soft 404 behind a 200 is dangerous, and how to check that important URLs really return success.",
  lead: [
    "200 OK means the server successfully handled the request and returned content. For a page in search that’s the basic green light: the document can be read and considered for the index.",
    "Below: how 200 works, what it means for crawl, and traps when the status says “success” but the page effectively isn’t there. Other codes are covered in the HTTP status article.",
    "200 alone doesn’t guarantee page one: it only says the response succeeded. Content, links, commercial factors, and competition do the rest.",
  ],
  faq: [
    {
      q: "Is a 200 status a good sign?",
      a: "For existing useful pages — yes. For removed or empty ones — no: better 404/410 or a 301 to a relevant URL.",
    },
    {
      q: "If it’s 200, is the page definitely indexed?",
      a: "No. 200 enables indexing, but the bot may skip the URL due to quality, noindex, duplicates, or crawl limits.",
    },
    {
      q: "What is a soft 404?",
      a: "A 200 response with “page not found” / empty results content. It confuses users and search.",
    },
    {
      q: "How does 200 differ from 304?",
      a: "304 — “not modified,” use the cache. For SEO checks, look at both 200 and correct caching.",
    },
    {
      q: "Do you need 200 on a redirect?",
      a: "No. Redirects should be 3xx. A meta-refresh “redirect” at 200 is weaker for search than an explicit 301.",
    },
    {
      q: "Why does the crawler see 200 but the browser shows an error?",
      a: "Different geo/CDN, auth, a JS error after HTML loads, bot blocking. Compare headers and body.",
    },
    {
      q: "How often to check 200 on key URLs?",
      a: "Continuously via uptime monitoring + after every release. Full crawl — on events.",
    },
  ],
  sections: [
    {
      title: "How 200 OK works",
      level: 2,
      paras: [
        "The client requested a resource; the server found it and returned it with code 200. The body may be HTML, API JSON, a file — depending on the URL.",
        "For a site that’s the normal response for a product card, article, or homepage. Abnormal — when “success” masks a missing entity.",
      ],
      lists: [
        {
          intro: "Alongside headers, check:",
          items: [
            "Content-Type",
            "cache (Cache-Control / ETag)",
            "encoding",
            "unexpected Set-Cookie on static assets",
          ],
        },
      ],
      links: [
        {
          label: "HTTP status code",
          href: "/en/blog/kod-statusa-http/",
        },
      ],
    },
    {
      title: "200 and indexing",
      level: 2,
      paras: [
        "Bots prefer crawling available documents. Stable 200 on canonical URLs is a condition for normal crawl. Then robots, meta robots, quality, and duplicates decide.",
        "After a move, make sure new addresses themselves return 200 and old ones return 301 — not both 200 with the same content.",
      ],
      lists: [
        {
          intro: "So 200 “works” for SEO:",
          items: [
            "canonical points to this same URL",
            "no noindex on important pages",
            "content is unique and useful",
            "the page is in the sitemap if it should be indexed",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Fixing statuses is part of technical prep. Appearance and growth of rankings for a core after that is planned months — not the result of “everything is 200.”",
        },
      ],
    },
    {
      title: "The soft 404 trap",
      level: 2,
      paras: [
        "The store removed a product, but the template says “out of stock” or “not found” at code 200. Or a catalog filter with no results returns success with an empty grid.",
        "Search may treat the document as useless or keep junk in the index. An honest 404/410 or a 301 to the category is usually cleaner.",
      ],
      lists: [
        {
          intro: "Where soft 404 shows up most:",
          items: [
            "deleted product cards",
            "pagination past the end",
            "on-site search with no results",
            "outdated promo landings",
          ],
        },
      ],
      links: [
        {
          label: "Pagination",
          href: "/en/blog/paginatsiya/",
        },
      ],
    },
    {
      title: "How to check",
      level: 2,
      paras: [
        "`curl -I`, DevTools, a crawler, monitoring. For SPAs, check whether the server returns a 200 stub for every route while the client shows a real 404.",
        "Compare the status in Webmaster / URL Inspection with the actual server response — sometimes you’re seeing a CDN cache.",
      ],
      lists: [
        {
          intro: "Mini check for a landing:",
          items: [
            "final code 200",
            "one canonical host",
            "content matches the query",
            "no hidden noindex",
          ],
        },
      ],
    },
    {
      title: "Tie-in with other codes",
      level: 2,
      paras: [
        "The chain should end meaningfully: old URL → 301 → new with 200. Don’t keep important documents on a forever 302.",
        "During outages prefer an honest 503 with Retry-After over a half-alive 200 with broken layout — but fix long 5xx quickly too.",
      ],
      lists: [
        {
          intro: "Pairs “when what”:",
          items: [
            "page is alive → 200",
            "permanent move → 301 + 200 on the target",
            "gone for good → 404/410",
            "maintenance → 503",
          ],
        },
      ],
      links: [
        {
          label: "Redirects",
          href: "/en/blog/redirekt/",
        },
        {
          label: "502 error",
          href: "/en/blog/oshibka-502/",
        },
      ],
    },
    {
      title: "Practice for the team",
      level: 2,
      paras: [
        "In the release Definition of Done: key templates return expected statuses. In the content process: removing a piece = a 301/410 decision, not “just drop it from the menu.”",
        "That way 200 stays a signal that the page exists and is useful — not a universal stub.",
      ],
      lists: [
        {
          intro: "Put in place:",
          items: [
            "a URL list for smoke checks",
            "CMS rules for entity deletion",
            "an alert if home/catalog ≠ 200",
            "a soft-404 review in the audit quarterly",
          ],
        },
      ],
    },
  ],
};
