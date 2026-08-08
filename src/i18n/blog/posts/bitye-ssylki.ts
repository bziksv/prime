import type { BlogPost } from "../../../data/blog";

/** EN overlay for bitye-ssylki — same structure as RU JSON. */
export const bityeSsylkiEn: BlogPost = {
  slug: "bitye-ssylki",
  title: "Broken links on a site: how to find and fix them",
  date: "2021-03-30",
  category: "SEO",
  cover: "/images/blog/bitye-ssylki/cover-en.webp",
  excerpt:
    "What broken links are (404 and other errors), how they hurt UX and SEO, how to find them with a crawler, and what to do: edit, 301, or remove.",
  lead: [
    "A broken link points to an unavailable URL: 404, 410, timeout, a broken redirect chain. The user hits a dead end, the bot wastes crawl budget, and internal link equity leaks nowhere.",
    "Below: how to find, prioritize, and fix them. Mass-redirecting every 404 to the homepage is bad practice — it hides the problem and confuses both people and search.",
  ],
  faq: [
    {
      q: "Do broken links mean only 404?",
      a: "Most often yes, but 5xx, redirects to nowhere, and soft-404 (page returns 200 but means “not found”) also hurt. Check status code and content.",
    },
    {
      q: "Do they affect rankings?",
      a: "Indirectly: worse UX, lost internal link flow, crawl junk. One or two links won’t kill a site; systemic mess in menus and templates will.",
    },
    {
      q: "What should I use to find them?",
      a: "Crawlers (Screaming Frog and peers), Webmaster/Search Console reports, server logs, spot checks after slug changes.",
    },
    {
      q: "Should I always use a 301?",
      a: "If there’s a close-in-meaning page — yes. If the topic is gone — a correct 404/410 and fix the outbound link. Don’t redirect “just to get 200.”",
    },
    {
      q: "What about broken outbound external links?",
      a: "Fix or remove those too: they hurt trust and the reader, especially in old pieces and a “partners” footer.",
    },
    {
      q: "How often should I check?",
      a: "Right after releases and migrations. For a stable site — at least quarterly. Priority: templates, traffic URLs, and addresses with external backlinks.",
    },
    {
      q: "What is a soft-404?",
      a: "The server returns 200, but the user sees “product removed” / an empty shell. For search that’s noise: better an honest 404/410 or a 301 to a current equivalent.",
    },
    {
      q: "Is a three-hop 301 chain OK?",
      a: "It may work, but shorten to one hop to the final URL. Long chains slow and confuse crawl.",
    },
  ],
  sections: [
    {
      title: "What counts as broken — and why it hurts",
      level: 2,
      paras: [
        "A broken link is any click where the target is unavailable or meaningless: 404/410, 5xx, timeout, redirect to an error, soft-404. Internal broken links in the menu hit the whole site; in an old article — locally, but they pile up.",
        "For the user it’s a broken journey: left a card, tapped “similar product” — empty. For SEO — wasted crawl budget, diluted internal signals, and weaker behavior on affected templates. Not a separate “penalty for one link,” but hygiene without which site quality is hard to grow.",
      ],
      lists: [
        {
          intro: "Where it breaks most often:",
          items: [
            "menu, footer, breadcrumbs after a structure change",
            "cards and “similar” blocks on the storefront",
            "old blog posts with outdated URLs",
            "buttons and banners in email/account templates",
          ],
        },
      ],
      links: [
        {
          label: "What a link is",
          href: "/en/blog/chto-takoe-ssylka/",
        },
        {
          label: "HTTP status codes",
          href: "/en/blog/kod-statusa-http/",
        },
      ],
    },
    {
      title: "How to find: crawler, panels, logs",
      level: 2,
      paras: [
        "Crawl the site, export 404s from Webmaster and Search Console, cross-check logs after a slug change. One source isn’t enough: the crawler sees internal links, panels show what search engines saw, logs show real hits from people and bots.",
        "Build a table right away: broken URL, status code, source page, hit count. Then the report becomes a task queue — not an endless list of red lines with no owner.",
      ],
      lists: [
        {
          intro: "Mini check set:",
          items: [
            "full crawl (or at least priority sections)",
            "pages-with-errors report in accounts",
            "log sample of 404s for a period",
            "manual click through menu/footer after a release",
          ],
        },
      ],
      links: [
        {
          label: "Screaming Frog",
          href: "/en/blog/screaming-frog/",
        },
        {
          label: "Yandex Webmaster",
          href: "/en/blog/yandeks-vebmaster/",
        },
      ],
    },
    {
      title: "Prioritization: what to fix first",
      level: 2,
      paras: [
        "Not every broken link is equally urgent. An error in the main menu, checkout, or a traffic article beats a forgotten URL with no hits for half a year.",
        "Separately handle addresses with external links and frequent log requests: people and bots already land there, so a relevant fix (edit or 301) pays off faster than archive cosmetics.",
      ],
      lists: [
        {
          intro: "First:",
          items: [
            "navigation and footer",
            "service and product pages",
            "materials with organic traffic",
            "URLs with external backlinks",
            "then — the tail of old posts",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Fixing random 404s from the long tail while a broken section link hangs in the header. Start with templates.",
        },
      ],
    },
    {
      title: "How to fix: edit, 301, 410",
      level: 2,
      paras: [
        "Fix the href to a live URL, restore the needed page, set a 301 to a close-in-meaning address, or remove the link. For a section move, prepare a redirect map ahead — not as complaints arrive.",
        "A 301 is justified when old and new pages share user intent. A redirect “just for 200,” especially to home, doesn’t help people and hides a structure hole. If the content is gone for good — honest 404/410 plus remove the outbound link.",
      ],
      lists: [
        {
          intro: "Algorithm for one URL:",
          items: [
            "find every source of the link",
            "decide whether the target page is still needed",
            "choose: edit href / 301 / 410 / remove",
            "shorten redirect chains",
            "recrawl and cross-check reports",
          ],
        },
      ],
      links: [
        {
          label: "301 in .htaccess",
          href: "/en/blog/htaccess-301/",
        },
        {
          label: "Redirect",
          href: "/en/blog/redirekt/",
        },
      ],
    },
    {
      title: "Internal vs outbound external",
      level: 2,
      paras: [
        "Internal broken links matter more for SEO structure: they’re under your control and affect crawl. Outbound links to other people’s 404s hurt reader trust (“the site is abandoned”) and UX of guides with many external sources.",
        "In old articles, every half year it’s worth spot-checking external links to key services and documents. Replace with a current URL or remove the link if the resource is gone.",
      ],
      lists: [
        {
          intro: "Practice:",
          items: [
            "internal — into the backlog after every crawl",
            "external — selectively in evergreen pieces",
            "don’t leave broken partner buttons in the footer for years",
          ],
        },
      ],
    },
    {
      title: "Prevention after releases and CMS changes",
      level: 2,
      paras: [
        "Don’t delete popular URLs without a replacement plan or a correct response. After a CMS or slug change, walk menu, cards, forms, sitemap, and top traffic articles — that’s where old paths most often fall off.",
        "Assign an owner for checks and keep a fix history. Then a repeat 404 after a release can be tied to a specific deploy — not hunted at random.",
      ],
      lists: [
        {
          intro: "Avoid:",
          items: [
            "all 404 → home",
            "ignoring broken links in a template for years",
            "redirect to irrelevance “just for 200”",
            "slug change without a 301 map",
          ],
        },
      ],
      links: [
        {
          label: "Sitemap",
          href: "/en/blog/karta-sayta/",
        },
      ],
    },
    {
      title: "Checking the result",
      level: 2,
      paras: [
        "After fixes, crawl again and manually check key paths. Make sure the 301 goes straight to the final relevant page — no chains through three intermediate addresses.",
        "Webmaster reports don’t update instantly — watch trends, not one day. If a URL should disappear forever, a correct 410 is more honest than a random redirect. Log old URL, source, decision, and recheck date.",
      ],
      lists: [
        {
          intro: "Closing the case:",
          items: [
            "recrawl without critical 404s in templates",
            "manual smoke of menu/footer",
            "drop in hits to old 404s in logs",
            "note in backlog/wiki what you did",
          ],
        },
      ],
      notes: [
        {
          title: "SEO timelines",
          kind: "tip",
          text: "Cleaning broken links is part of prep and hygiene. Page-one share for a commercial core is planned for two to six months after work starts — a separate horizon.",
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
    "chto-takoe-ssylka",
    "htaccess-301",
    "kod-statusa-http",
    "screaming-frog",
    "tehnicheskiy-seo-audit",
    "karta-sayta",
  ],
};
