import type { BlogPost } from "../../../data/blog";

/** EN overlay for kanonicheskiy-teg — same structure as RU JSON. */
export const kanonicheskiyTegEn: BlogPost = {
  slug: "kanonicheskiy-teg",
  title: "Canonical tag rel=canonical: how it works and how to set it",
  date: "2020-10-20",
  category: "SEO",
  cover: "/images/blog/kanonicheskiy-teg/cover-en.webp",
  excerpt:
    "What rel=canonical is, how it differs from 301 and noindex, how to set the canon in HTML and HTTP, typical mistakes, and when the tag doesn’t help.",
  lead: [
    "`rel=\"canonical\"` tells search engines the preferred URL among available copies or near-variants of a page. It’s not a “delete duplicate” button — a preference signal that can be ignored when signals strongly conflict.",
    "Below — syntax, why it matters for duplicates, absolute URL rules, how it differs from redirects and noindex, and typical mistakes. Treat this as the canonical take on Rel Canonical among related posts.",
  ],
  faq: [
    {
      q: "Does canonical remove a duplicate from the SERP?",
      a: "Not always instantly and not like a 301. It states a preference. With conflicting signals the bot may choose otherwise.",
    },
    {
      q: "When 301, when canonical?",
      a: "If the old URL shouldn’t open — 301. If both addresses are needed for people (filters, print, UTM landing) but one should be indexed — often canonical. See the redirects article.",
    },
    {
      q: "Where to put the tag?",
      a: "In HTML `<head>`: `<link rel=\"canonical\" href=\"https://example.com/page/\">`. Alternative — HTTP `Link` header with rel=canonical for non-HTML.",
    },
    {
      q: "Can href be relative?",
      a: "Prefer absolute with https and the final host. Relative paths more often break when templates are copied.",
    },
    {
      q: "Several canonicals on a page?",
      a: "No. One preferred. Several different ones — conflict and chaos for the bot.",
    },
    {
      q: "Do you need a self-referencing canonical?",
      a: "Often yes: it explicitly locks the page canon and helps with parameters and CMS templates.",
    },
    {
      q: "Canonical instead of noindex?",
      a: "Different tools. noindex — “don’t index this document”. Canonical — “prefer that URL”. Don’t confuse with Disallow in robots.txt.",
    },
    {
      q: "Does it help with full copy-paste from another site?",
      a: "Weakly. External plagiarism is another story. Canonical mainly solves your internal URL variants.",
    },
  ],
  sections: [
    {
      title: "What the canonical tag is",
      level: 2,
      paras: [
        "The tag exists to tell search: “among these similar addresses, treat this one as primary”. Typical cases — sort parameters, sessions, https/www variants before merging, print versions, partial product-card duplicates.",
        "Canonical doesn’t replace a clean URL structure and internal links. If the whole site links to “crooked” addresses, one tag in head won’t carry the fix.",
      ],
      lists: [
        {
          intro: "Roles in short:",
          items: [
            "canonical — preference among available URLs;",
            "301 — move; old URL shouldn’t live;",
            "noindex — document not in the index;",
            "robots Disallow — about crawl, not merging.",
          ],
        },
      ],
      links: [
        {
          label: "Duplicate pages",
          href: "/en/blog/dubli-stranits/",
        },
      ],
    },
    {
      title: "How to set it: HTML and header",
      level: 2,
      paras: [
        "Basic form in `<head>`: `<link rel=\"canonical\" href=\"https://www.example.com/catalog/item/\">`. The URL should be the one you want in the index and, where possible, in snippets.",
        "For PDFs and non-HTML responses use the HTTP header `Link: <https://...>; rel=\"canonical\"`. On a CMS an SEO plugin field is usually enough — check it doesn’t spawn a second tag.",
      ],
      lists: [
        {
          intro: "Rules of thumb:",
          items: [
            "absolute https URL;",
            "same host as the site canon (www or not);",
            "one tag per document;",
            "canon returns 200, not a redirect chain;",
            "internal links preferably point to the canon already.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Canonical pointing to a URL that itself 301s further. The bot gets extra confusion — point to the final address.",
        },
      ],
      links: [
        {
          label: "Page source code",
          href: "/en/blog/ishodnyy-kod/",
        },
      ],
    },
    {
      title: "Why SEO needs it — and when the tag doesn’t save you",
      level: 2,
      paras: [
        "The goal is to gather signals (links, behavior, relevance) onto one URL and cut duplicate noise in the index. That’s hygiene — not a “ranking boost overnight”.",
        "If there are no duplicates and URLs are clean — a self-reference is still useful as an anchor. If content is thin or pages differ in meaning, “everything to homepage” canonical hurts: you merge unrelated pages.",
      ],
      lists: [
        {
          intro: "Good cases:",
          items: [
            "UTM and ad parameters;",
            "sorts/light filters with the same content;",
            "www and https before a full merge;",
            "AMP/alternate templates with the same meaning.",
          ],
        },
      ],
    },
    {
      title: "Practice: typical setups",
      level: 2,
      paras: [
        "Online store: product card — canon on the clean URL without `?color=` if content is the same; if color is a separate entity with unique copy — its own canon on that card.",
        "Pagination: don’t blindly fold every list page onto the first via canonical — follow current guidance and how it ties to `rel` prev/next / UI. Filters: indexing policy + canonical, or you get a thousand near-identical URLs.",
      ],
      lists: [
        {
          intro: "Before rollout:",
          items: [
            "pick one canon per entity;",
            "update CMS templates;",
            "check View Source / DevTools;",
            "align sitemap and menu with canons;",
            "monitor “pages in search”.",
          ],
        },
      ],
      links: [
        {
          label: "Pagination",
          href: "/en/blog/paginatsiya/",
        },
        {
          label: "Redirect",
          href: "/en/blog/redirekt/",
        },
      ],
    },
    {
      title: "Mistakes that break canonical",
      level: 2,
      paras: [
        "Blocking a duplicate in robots.txt and expecting canonical to work: the bot may see the tag worse. Putting noindex on the canon while copies point to it. Serving 4xx/5xx on the canonical URL. Sending every filter to the homepage “just in case”.",
        "Conflict with hreflang: language versions should agree canons within a locale — not collapse all languages into one URL without a policy.",
      ],
      lists: [
        {
          intro: "Bug checklist:",
          items: [
            "several different canonicals in head;",
            "broken relative paths;",
            "canon to another domain without reason;",
            "canon ≠ what’s in the sitemap;",
            "OG/social meta pointing to another URL without need.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "First merge mirrors with 301 (http→https, www). Then set canonical for parameters and templates.",
        },
      ],
      links: [
        {
          label: "Closing from indexing",
          href: "/en/blog/zakrytie-ot-indeksatsii/",
        },
      ],
    },
    {
      title: "Diagnosing problems",
      level: 2,
      paras: [
        "If the SERP shows the “wrong” URL — check: which canonical is in the code, where internal links go, any redirect chains, what’s in the sitemap. In Search Console / webmaster tools compare the bot-selected canon vs the one you declared.",
        "Mass duplicates without tags, a canon pointing to a thin low-authority page, or an unavailable canon while the duplicate is open — typical reasons for “tag is there, no effect”.",
      ],
      lists: [
        {
          intro: "Tools:",
          items: [
            "crawler: canonical column;",
            "spot View Source;",
            "indexing reports in panels;",
            "compare title/H1 across duplicate groups.",
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
  ],
  related: [
    "dubli-stranits",
    "redirekt",
    "zakrytie-ot-indeksatsii",
    "url-adres",
    "paginatsiya",
  ],
};
