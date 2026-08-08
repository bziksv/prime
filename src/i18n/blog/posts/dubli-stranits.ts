import type { BlogPost } from "../../../data/blog";

/** EN overlay for dubli-stranits — same structure as RU JSON. */
export const dubliStranitsEn: BlogPost = {
  slug: "dubli-stranits",
  title: "Duplicate pages: why they hurt and how to fix them",
  date: "2021-01-11",
  category: "SEO",
  cover: "/images/blog/dubli-stranits/cover-en.webp",
  excerpt:
    "What counts as page duplicates, exact vs near-duplicates, where they come from on CMS and stores, what they do in search, and how to find and merge URLs.",
  lead: [
    "Duplicates are when the same or nearly the same meaning is available at different addresses. Search wastes crawl on copies, dilutes signals, and may show a version you don’t consider primary.",
    "Below: what counts as a duplicate, the common types and causes, SEO risks, and a practical order: find → choose a canon → merge or remove from the index. Redirects and deindexing tools are covered in sibling articles.",
  ],
  faq: [
    {
      q: "Is a duplicate always full HTML copy-paste?",
      a: "No. An exact duplicate is an almost identical document. A near-duplicate is strong overlap of meaning/blocks at different URLs (often filters, pagination, “similar” cards).",
    },
    {
      q: "How do duplicates differ from plagiarism off another site?",
      a: "Internal duplicates are your domain’s problem. External copy-paste is another story (uniqueness, complaints). Here it’s about internal URL hygiene.",
    },
    {
      q: "Should I use a redirect or a canonical?",
      a: "If the old URL shouldn’t open — 301. If both versions are needed for users but only one in the index — usually `rel=\"canonical\"` plus careful indexing. See the redirects article.",
    },
    {
      q: "Does robots.txt fix duplicates?",
      a: "Not as the main method. Disallow cuts crawl but doesn’t replace merging and canonical. To remove from the index — noindex while the document is reachable, or 301.",
    },
    {
      q: "Are UTM tags dangerous?",
      a: "As separate indexed URLs — yes, if the bot crawls and indexes them. Usually canonical to the clean URL + parameter settings in webmaster panels.",
    },
    {
      q: "How fast can I gauge the scale?",
      a: "A crawler (title/H1/canonical list), “pages in search” export in Webmaster/Search Console, `site:` search for repeated titles. On large catalogs — prioritize by section.",
    },
    {
      q: "Do duplicates mean a forever “duplicate filter”?",
      a: "More often it’s lost efficiency: crawl budget, cannibalization, weak snippets. Hard sanctions are a separate talk; first remove systemic duplicate causes.",
    },
    {
      q: "How long should I wait after merging?",
      a: "Recrawl and canon changes in the SERP aren’t instant: days–weeks, longer on big sites. Watch indexing reports — not overnight rankings.",
    },
  ],
  sections: [
    {
      title: "What duplicate pages are",
      level: 2,
      paras: [
        "In SEO a duplicate is several URLs that look like one document to search or compete for one intent with no clear value in splitting them. Users may open both; the bot chooses which is primary.",
        "Don’t confuse with intentional structure: different products, services, and articles aren’t duplicates even if the template looks similar. The problem starts when meaning and value nearly match — and there are many addresses.",
      ],
      lists: [
        {
          intro: "Signs:",
          items: [
            "one title/H1 on several URLs",
            "the same main copy with different parameters",
            "www and non-www / http and https both return 200 without merging",
            "filters and sorts spawn endless combinations in the index",
          ],
        },
      ],
      links: [
        {
          label: "URL address",
          href: "/en/blog/url-adres/",
        },
      ],
    },
    {
      title: "Exact and near-duplicates",
      level: 2,
      paras: [
        "Exact (or near-exact) — the same document at different addresses: case change, trailing slash, session id, mirrors. Near-duplicates — content overlap: category “as is” and the same with sorting, a card and a print version, thin filter intersections.",
        "Near-duplicates are sneakier: the crawler sees “different” pages while user value is almost zero. Those inflate online-store indexes.",
      ],
      lists: [
        {
          intro: "Exact examples:",
          items: [
            "`example.com` and `www.example.com` without 301",
            "http and https both in the index",
            "URLs with `?utm_…` next to the clean one",
            "a copy at `/index.php` and the pretty URL",
          ],
        },
        {
          intro: "Near-duplicate examples:",
          items: [
            "sort and pagination as separate “full” documents",
            "color+size filter vs color on the same listing",
            "a print page with the same text",
            "blog tag/category duplicates with the same collections",
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
      title: "Where duplicates come from",
      level: 2,
      paras: [
        "Most often it’s not a “malicious copywriter” but CMS, store, and marketing settings: session parameters, several paths to one card, ad landing generation, test copies on subdomains, catalog exports with parameters.",
        "Content near-duplicates appear when almost identical text is stamped under every keyword or when autofill spawns thin pages. Then you fix URL tech and editorial policy.",
      ],
      lists: [
        {
          intro: "Typical sources:",
          items: [
            "mirrors and protocols without a single merge",
            "GET parameters (sort, filter, tags, session)",
            "several templates for one entity",
            "section copies after a redesign without 301",
            "external links to “dirty” URLs that got indexed",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Fix the systemic cause first (canon rule, mirror redirects), or manual URL cleanup never ends.",
        },
      ],
      links: [
        {
          label: "Site autofill",
          href: "/en/blog/avtonapolnenie-sayta/",
        },
      ],
    },
    {
      title: "Why duplicates hurt SEO",
      level: 2,
      paras: [
        "Crawl budget goes to copies instead of new and important URLs. Link and behavioral signals spread across versions. An inconvenient or outdated address may stick in the SERP.",
        "Inside the site you get cannibalization: several URLs claim one query and none gain stability. For a store it’s also analytics noise: goals and assisted conversions get smeared.",
      ],
      lists: [
        {
          intro: "What you’ll notice:",
          items: [
            "thousands of URLs in the index for hundreds of useful ones",
            "canon flips in panels",
            "duplicate titles in the crawl",
            "weak indexing of new sections while filters are heavy",
          ],
        },
      ],
      links: [
        {
          label: "Server logs and crawl",
          href: "/en/blog/logi-servera/",
        },
      ],
    },
    {
      title: "How to find duplicates",
      level: 2,
      paras: [
        "Start with mirrors and protocol: do all variants 301 to one canon. Then crawl the site: group by title, H1, content hash; check canonical and status codes.",
        "In Yandex Webmaster and Google Search Console review indexed URL examples, duplicates, and the chosen canon. `site:domain.com` search and spot-checks of suspicious templates fill the picture.",
      ],
      lists: [
        {
          intro: "Mini audit order:",
          items: [
            "www / https / slash merge",
            "parameter sample (?sort, ?utm, session)",
            "catalog pagination and filters",
            "repeated title/H1",
            "subdomains and staging in the index",
          ],
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "How to fix: canon, 301, noindex",
      level: 2,
      paras: [
        "Pick one preferred URL per entity. Internal links, sitemap, and ads should point to it. The rest — 301 (if not needed) or canonical / agreed noindex (if needed for UX).",
        "Don’t Disallow in robots.txt what you want cleaned with noindex without crawl — the bot may never see the directive. Don’t pile redirect chains. After fixes, recrawl and index monitoring are part of the job — not “click once and forget.”",
      ],
      lists: [
        {
          intro: "Merge tools:",
          items: [
            "301 between mirrors and outdated paths",
            "`rel=\"canonical\"` to the preferred document",
            "meta robots / X-Robots-Tag for utility and some parametric URLs",
            "URL parameter settings in webmaster panels",
            "CMS template fixes so new duplicates don’t spawn",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Merging everything to the homepage “just in case.” You lose landing meaning and dilute the home. Canon is the nearest meaningful URL of the same entity.",
        },
      ],
      links: [
        {
          label: "Redirects",
          href: "/en/blog/redirekt/",
        },
        {
          label: "Deindexing / noindex",
          href: "/en/blog/zakrytie-ot-indeksatsii/",
        },
        {
          label: "HTTPS and merging",
          href: "/en/blog/https-seo/",
        },
      ],
    },
  ],
  related: [
    "zakrytie-ot-indeksatsii",
    "redirekt",
    "paginatsiya",
    "tehnicheskiy-seo-audit",
    "url-adres",
  ],
};
