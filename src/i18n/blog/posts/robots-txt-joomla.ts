import type { BlogPost } from "../../../data/blog";

/** EN overlay for robots-txt-joomla — same structure as RU JSON. */
export const robotsTxtJoomlaEn: BlogPost = {
  slug: "robots-txt-joomla",
  title: "Robots.txt for Joomla: rules and a careful template",
  date: "2018-02-26",
  category: "SEO",
  cover: "/images/blog/robots-txt-joomla/cover-en.webp",
  excerpt:
    "How robots.txt works on Joomla: User-agent, Allow/Disallow, Sitemap, system paths — without a cult of the Joomla 3.3 template or an outdated Host directive as the only mirror.",
  lead: [
    "The `robots.txt` file sits in the site root (`https://site/robots.txt`) and tells bots which paths are better not to crawl. On Joomla it usually blocks `/administrator/`, system directories, and junk URL parameters.",
    "We cover what the directives mean and Joomla-specific landmarks. Don’t paste a “perfect” list from Joomla 3.x guides onto Joomla 4/5—paths, SEF, and components differ. `robots.txt` doesn’t replace noindex and won’t put you in the TOP in a week.",
  ],
  faq: [
    {
      q: "Does Disallow mean “don’t index”?",
      a: "No. Disallow asks not to crawl a URL. For “keep out of the index,” meta robots / X-Robots-Tag noindex is more reliable (and accessibility for checks). See the deindexing article.",
    },
    {
      q: "Where is the file on Joomla?",
      a: "In the web-server root next to `index.php`, not in `/administrator/`. After edits check `/robots.txt` in the browser and in Webmaster/Search Console.",
    },
    {
      q: "Do I need the Host directive?",
      a: "Historically Host pointed to the mirror for Yandex. Today the main thing is correct 301s, HTTPS, and the preferred host in panels. Don’t rely only on Host from a 2018 template.",
    },
    {
      q: "Should I block /media/ and /templates/?",
      a: "Depends on the site: sometimes needed snippet assets live there. Test; a blind ban “as in the article” can hurt.",
    },
    {
      q: "Will a robots.txt template get me into the TOP?",
      a: "Not directly. It’s crawl hygiene. Building a competitive core into the TOP is planned for 2–6 months of work — not a file tweak.",
    },
  ],
  sections: [
    {
      title: "Why robots.txt on Joomla",
      level: 2,
      paras: [
        "Joomla serves many system URLs: admin, components, print parameters, votes, language tails. Without rules the bot spends crawl budget on junk and sometimes pulls duplicates into the SERP.",
        "The file doesn’t “promote” the site by itself. It cuts noise. Disallow mistakes can close needed sections — so after edits check webmaster tools.",
      ],
      lists: [
        {
          intro: "Usually closed:",
          items: [
            "admin `/administrator/`;",
            "core system directories;",
            "tech parameters (print, mailto, vote, etc.);",
            "clear duplicates like `index2.php` — case by case.",
          ],
        },
      ],
      links: [
        {
          label: "Closing from indexing",
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
        "`User-agent: *` — rules for all bots; separate blocks — for Yandex / Googlebot if needed. `Disallow` blocks crawling a path; `Allow` clarifies exceptions. `Sitemap:` points to the XML map.",
        "`Crawl-delay` was once used on weak hosting; support and meaning differ by bot — don’t treat it as mandatory. `Clean-param` (Yandex) helps with “noisy” GET parameters if they really create duplicates.",
      ],
      tables: [
        {
          caption: "What to remember",
          headers: ["Directive", "Meaning"],
          rows: [
            ["User-agent", "Who the rule block addresses"],
            ["Disallow / Allow", "Block / allow crawling paths"],
            ["Sitemap", "XML map URL"],
            ["Crawl-delay", "Pause between requests (not always important)"],
            ["Clean-param", "Ignore query “noise” (Yandex)"],
          ],
        },
      ],
      notes: [
        {
          title: "Syntax",
          text: "In the real file write `User-agent: *` without angle brackets from old posts. Comments start with `#`. After edits check the file is reachable and there’s no accidental `Disallow: /` for the whole site.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Path landmarks for Joomla",
      level: 2,
      paras: [
        "A base set people often start with: close `/administrator/`, `/cache/`, `/cli/` (if present), `/includes/`, `/language/`, `/libraries/`, `/logs/`, `/tmp/`, and typical tech parameters (`print`, `mailto`, votes). Match the exact list to your Joomla version and SEF structure.",
        "Aggressive bans like “everything with `?`” or all of `/media/` help on some sites and break needed URLs on others. Prefer iterations: close system junk → check coverage in panels → refine.",
      ],
      lists: [
        {
          intro: "Minimum before publishing:",
          items: [
            "admin closed from crawl;",
            "sitemap listed in `Sitemap:`;",
            "no accidental close of important sections;",
            "main mirror set via HTTPS/www redirects;",
            "file served as `text/plain` from the root.",
          ],
        },
      ],
    },
    {
      title: "Sample frame (not dogma)",
      level: 2,
      paras: [
        "Below is a teaching frame of ideas—not “copy and forget.” Put your sitemap domain and adapt it to your Joomla version and real duplicates.",
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
          text: "Old templates wrote `Host: domen.ru` and `Sitemap: http://…`. Today prefer HTTPS map URLs and 301s to the canonical mirror. Host doesn’t replace a certificate and redirects.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Checks after publishing",
      level: 2,
      paras: [
        "Open `/robots.txt` in private mode; check syntax with a validator/report in Yandex Webmaster and Google Search Console. Make sure important landings aren’t under Disallow.",
        "If a page must stay out of the index but still has links — add noindex; don’t rely on robots.txt alone.",
      ],
      links: [
        {
          label: "Closing from indexing",
          href: "/en/blog/zakrytie-ot-indeksatsii/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "On Joomla `robots.txt` is crawl hygiene for system paths and parameters — not a ranking growth button. Adapt the template to your CMS version and check webmaster panels.",
        "General deindexing principles and Disallow vs noindex — in a separate guide; WordPress templates are covered in the related article.",
      ],
    },
  ],
  closing: [
    "Build `robots.txt` for your Joomla: close admin and clear tech junk, point Sitemap over HTTPS, check the file in panels — and don’t blindly copy a Disallow wall from a Joomla 3.3 article.",
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
