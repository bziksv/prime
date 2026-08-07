import type { BlogPost } from "../../../data/blog";

/** EN overlay for zakrytie-ot-indeksatsii — same structure as RU JSON. */
export const zakrytieOtIndeksatsiiEn: BlogPost = {
  slug: "zakrytie-ot-indeksatsii",
  title: "Blocking a site or pages from indexing: robots, meta, and when you need it",
  date: "2021-09-22",
  category: "SEO",
  cover: "/images/blog/zakrytie-ot-indeksatsii/cover-en.webp",
  excerpt:
    "When to block pages from indexing, how robots.txt, meta robots, and X-Robots-Tag differ, how to remove duplicates and utility sections — without cloaking or outdated tricks.",
  lead: [
    "Not everything on a site should enter the index: utility sections, drafts, filter duplicates, test subdomains. Blocking from indexing is a normal SEO tool — not a hide-and-seek game to trick robots.",
    "Why you block URLs, which methods work in 2026, and what to avoid (JS cloaking, “hiding” content from bots). The backbone is robots.txt, meta robots / X-Robots-Tag, canonical, and response codes.",
  ],
  faq: [
    {
      q: "Does robots.txt forbid indexing?",
      a: "No: Disallow asks not to crawl a URL. The page can still appear in results via links without a snippet. For “don’t index,” meta robots / X-Robots-Tag noindex (when crawlable) or restricted access is more reliable.",
    },
    {
      q: "How is noindex different from Disallow?",
      a: "Disallow — don’t crawl. noindex — may crawl, but don’t put in the index (or remove). Often combined on purpose: utility URLs blocked from crawl and with noindex.",
    },
    {
      q: "Do I still need the old Yandex <noindex> tag?",
      a: "Obsolete practice. The modern standard is meta name=\"robots\" content=\"noindex\" and/or the HTTP header X-Robots-Tag.",
    },
    {
      q: "How do I block the whole site during development?",
      a: "Better password / IP allowlist / a separate staging host. Temporary noindex on all pages is OK, but easy to forget to remove. Don’t rely on robots.txt alone.",
    },
    {
      q: "Can I hide text from robots with JavaScript?",
      a: "Not as an SEO tactic. Showing different content to people and bots is cloaking — sanction risk. Needed content is either in the index, or the page is honestly blocked.",
    },
  ],
  sections: [
    {
      title: "When to block from indexing",
      level: 2,
      paras: [
        "The goal is not to pollute the index or compete with yourself via duplicates. Block what shouldn’t answer search demand.",
      ],
      lists: [
        {
          intro: "Typical cases:",
          items: [
            "cart, account area, site search, filters with endless URLs;",
            "drafts, thank-you pages, technical landings;",
            "duplicates (www/non-www, http/https, UTM params — better canonical/redirects);",
            "staging and demo subdomains;",
            "outdated sections until a 301 to current ones.",
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
      title: "robots.txt: crawl rules, not “index magic”",
      level: 2,
      paras: [
        "The `/robots.txt` file sets crawl rules per User-agent. It’s handy for blocking folders (`/admin/`, `/cgi-bin/`), utility scripts, and sometimes heavy sections from extra crawling.",
        "Limit: a crawl ban ≠ a guarantee of absence from the index. If search already knows the URL, Disallow can block delivering noindex.",
      ],
      lists: [
        {
          intro: "Practice:",
          items: [
            "don’t block CSS/JS needed to render key pages;",
            "check the file after deploy (a Disallow typo breaks crawl);",
            "for “whole site” on production almost never use `Disallow: /` without a hard need.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "After robots edits, check crawl reports in Search Console and your local webmaster tools — you’ll see what is actually cut.",
        },
      ],
    },
    {
      title: "meta robots and X-Robots-Tag",
      level: 2,
      paras: [
        "On an HTML page: `<meta name=\"robots\" content=\"noindex, follow\">` (or `noindex, nofollow` — on purpose). For PDF and non-HTML, the `X-Robots-Tag: noindex` header is easier.",
        "For noindex to work, the robot must get the document. Don’t block such URLs in robots.txt if the goal is to remove them from the index.",
      ],
      lists: [
        {
          intro: "Common directives:",
          items: [
            "`noindex` — don’t show in results;",
            "`nofollow` — don’t pass link equity from the page (meaning evolved; don’t confuse with rel on a single link);",
            "`noarchive` — no cached copy;",
            "`none` — shorthand for noindex, nofollow.",
          ],
        },
      ],
      links: [
        {
          label: "Cached page copy",
          href: "/en/blog/sohranennaya-kopiya-yandex/",
        },
      ],
    },
    {
      title: "Duplicates, sections, folders, subdomains",
      level: 2,
      paras: [
        "Duplicates are better not “hidden forever,” but collapsed to one URL: 301, `rel=\"canonical\"`, unified params. robots/noindex is a backup if the duplicate can’t be removed yet.",
        "A section or folder is blocked with robots rules and/or a meta template on all section URLs. A subdomain is a separate host for search: set rules there too.",
      ],
      tables: [
        {
          caption: "What to choose",
          headers: ["Job", "Preferred method"],
          rows: [
            ["Utility folder", "Disallow in robots.txt"],
            ["Page “not in search”", "noindex (+ crawlable)"],
            ["Content duplicate", "301 or canonical"],
            ["Staging", "Auth / IP, plus noindex"],
            ["Gone forever", "410 or 301 to a replacement"],
          ],
        },
      ],
    },
    {
      title: "Links, images, and outdated tricks",
      level: 2,
      paras: [
        "Individual outbound links get `rel=\"nofollow\"` / `sponsored` / `ugc` by meaning — that isn’t “blocking the site from indexing.” Images: `noimageindex` is rarely needed; more important not to steal photos and to serve sensible sizes.",
        "Old guides suggested `<noindex>`, SEOhide, and Base64/JS-encoded blocks “so the bot doesn’t see them.” Don’t: that’s cloaking and a fragile scheme. Show needed content the same to everyone, or honestly block the URL.",
      ],
      lists: [
        {
          intro: "What to avoid:",
          items: [
            "different HTML for bots and people;",
            "hiding commercial text only from robots;",
            "forever Disallow of the whole production site “just in case”;",
            "forgotten noindex after launch.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Blocking important services in robots during development and not opening them after release. Symptom — “the site exists, search is empty.”",
        },
      ],
    },
    {
      title: "Server responses and passwords",
      level: 2,
      paras: [
        "403/401 with auth is a hard block: the robot won’t get content. 410 — “gone forever.” 404 — “not found” (OK for temporary holes; for moves prefer 301).",
        "A password on staging beats hoping for robots: random links and scanners won’t drag a draft into the index.",
        "Opening pages after launch is part of prep — not a ranking shortcut. Core keyword positions typically build over 2–6 months once the right URLs are crawlable and indexed.",
      ],
      lists: [],
    },
    {
      title: "Short takeaway",
      level: 2,
      paras: [
        "Blocking from indexing is site hygiene: utility URLs and duplicates shouldn’t answer in search. Use robots for crawl, noindex/X-Robots-Tag for the index, canonical/301 for duplicates. No cloaking and no “clever” JS hide tricks.",
      ],
      lists: [],
    },
  ],
};
