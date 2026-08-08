import type { BlogPost } from "../../../data/blog";

/** EN overlay for robots-txt-joomla — same structure as RU JSON. */
export const robotsTxtJoomlaEn: BlogPost = {
  slug: "robots-txt-joomla",
  title: "Robots.txt for Joomla: rules and a careful template",
  date: "2018-02-26",
  category: "SEO",
  cover: "/images/blog/robots-txt-joomla/cover-en.webp",
  excerpt:
    "How robots.txt works on Joomla: User-agent, Allow/Disallow, Sitemap, and system paths — without treating a Joomla 3.3 paste as gospel or leaning on an outdated Host line as your only mirror.",
  lead: [
    "`robots.txt` lives at the site root (`https://example.com/robots.txt`) and tells crawlers which paths to skip. On Joomla you usually block `/administrator/`, core system folders, and noisy URL parameters.",
    "Below: what the directives mean and sensible Joomla starting points. Do not paste a “perfect” Joomla 3.x list onto Joomla 4/5 — paths, SEF, and components differ. The file does not replace noindex, and it will not put a query core on page one in a week.",
  ],
  faq: [
    {
      q: "Does Disallow mean “don’t index”?",
      a: "No. Disallow asks bots not to crawl a URL. To keep a page out of the index, meta robots or X-Robots-Tag noindex is more reliable (and still checkable). See the deindexing article.",
    },
    {
      q: "Where does the file live on Joomla?",
      a: "In the web-server root next to `index.php`, not under `/administrator/`. After edits, open `/robots.txt` in the browser and in Webmaster Tools / Search Console.",
    },
    {
      q: "Do you still need Host?",
      a: "Host once pointed Yandex at a preferred host. Today what matters is correct 301s, HTTPS, and the preferred host in the panels. Do not rely only on a Host line from a 2018 template.",
    },
    {
      q: "Should you block /media/ and /templates/?",
      a: "It depends. Those folders sometimes hold assets used in snippets. Test; a blind ban “as in the article” can hurt.",
    },
    {
      q: "Will a robots.txt template improve rankings?",
      a: "Not directly. It is crawl hygiene. Growing a competitive query core is separate work — typically planned over 2–6 months after the technical base is sound.",
    },
  ],
  sections: [
    {
      title: "Why robots.txt on Joomla",
      level: 2,
      paras: [
        "Joomla exposes many system URLs: admin, components, print parameters, votes, language tails. Without rules, bots burn crawl budget on junk and sometimes pull duplicates into results.",
        "The file does not “rank” the site by itself. It cuts noise. A bad Disallow can hide sections you need — so after edits, check webmaster tools.",
      ],
      lists: [
        {
          intro: "Usually blocked:",
          items: [
            "admin `/administrator/`",
            "core system directories",
            "tech parameters (print, mailto, vote, and similar)",
            "obvious duplicates like `index2.php` — case by case",
          ],
        },
      ],
      links: [
        {
          label: "Closing pages from indexing",
          href: "/en/blog/zakrytie-ot-indeksatsii/",
        },
        {
          label: "Duplicate pages",
          href: "/en/blog/dubli-stranits/",
        },
      ],
    },
    {
      title: "Main directives",
      level: 2,
      paras: [
        "`User-agent: *` sets rules for all bots; use separate blocks for Yandex or Googlebot when you need them. `Disallow` blocks a path from crawl; `Allow` carves out exceptions. `Sitemap:` points to the XML sitemap.",
        "`Crawl-delay` was once used on weak hosting; support and meaning differ by bot — do not treat it as mandatory. `Clean-param` (Yandex) helps with noisy GET parameters when they really spawn duplicates.",
      ],
      tables: [
        {
          caption: "What to remember",
          headers: ["Directive", "Meaning"],
          rows: [
            ["User-agent", "Who the rule block is for"],
            ["Disallow / Allow", "Block or allow crawling paths"],
            ["Sitemap", "XML sitemap URL"],
            ["Crawl-delay", "Pause between requests (not always useful)"],
            ["Clean-param", "Ignore query “noise” (Yandex)"],
          ],
        },
      ],
      notes: [
        {
          title: "Syntax",
          kind: "tip",
          text: "In the real file write `User-agent: *` — no angle brackets from old posts. Comments start with `#`. After edits, confirm the file is reachable and you did not leave an accidental `Disallow: /` that blocks the whole site.",
        },
      ],
    },
    {
      title: "Path landmarks for Joomla",
      level: 2,
      paras: [
        "A common starting set: block `/administrator/`, `/cache/`, `/cli/` (if present), `/includes/`, `/language/`, `/libraries/`, `/logs/`, `/tmp/`, and typical tech parameters (`print`, `mailto`, votes). Match the exact list to your Joomla version and SEF setup.",
        "Aggressive rules like “everything with `?`” or all of `/media/` help on some sites and break needed URLs on others. Prefer iterations: close system junk → check coverage in the panels → refine.",
      ],
      lists: [
        {
          intro: "Minimum before you ship:",
          items: [
            "admin is closed from crawl",
            "sitemap is listed in `Sitemap:`",
            "important sections are not blocked by accident",
            "the main mirror is set with HTTPS/www redirects",
            "the file is served as `text/plain` from the root",
          ],
        },
      ],
    },
    {
      title: "Sample frame (not dogma)",
      level: 2,
      paras: [
        "Below is a teaching skeleton — not “copy and forget.” Put your own sitemap domain and adapt the lines to your Joomla version and real duplicates.",
      ],
      lists: [
        {
          intro: "Line ideas:",
          items: [
            "`User-agent: *`",
            "`Disallow: /administrator/`",
            "`Disallow: /cache/`",
            "`Disallow: /tmp/`",
            "`Disallow: /*format=`",
            "`Disallow: /*print=`",
            "`Sitemap: https://example.com/sitemap.xml`",
          ],
        },
      ],
      notes: [
        {
          title: "On Host and http://",
          kind: "tip",
          text: "Old templates wrote `Host: example.com` and `Sitemap: http://…`. Prefer HTTPS sitemap URLs and 301s to the canonical host. Host does not replace a certificate or redirects.",
        },
      ],
    },
    {
      title: "Checks after publishing",
      level: 2,
      paras: [
        "Open `/robots.txt` in a private window. Validate syntax in Yandex Webmaster and Google Search Console reports. Confirm important landings are not under Disallow.",
        "If a page must stay out of the index but still has inbound links, add noindex — do not rely on robots.txt alone.",
      ],
      links: [
        {
          label: "Closing pages from indexing",
          href: "/en/blog/zakrytie-ot-indeksatsii/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "On Joomla, `robots.txt` is crawl hygiene for system paths and parameters — not a ranking lever. Adapt any template to your CMS version and verify it in webmaster panels.",
        "General deindexing principles and Disallow vs noindex live in a separate guide; WordPress-oriented templates are covered in the related robots.txt article.",
      ],
    },
  ],
  closing: [
    "Build `robots.txt` for your Joomla: block admin and clear tech junk, point Sitemap over HTTPS, check the file in the panels — and do not blindly copy a Disallow wall from a Joomla 3.3 post.",
  ],
  related: [
    "zakrytie-ot-indeksatsii",
    "dubli-stranits",
    "seo-bitrix",
    "tehnicheskiy-seo-audit",
    "https-seo",
    "veb-server",
  ],
};
