import type { BlogPost } from "../../../data/blog";

/** EN overlay for parsing-python — same structure as RU JSON. */
export const parsingPythonEn: BlogPost = {
  slug: "parsing-python",
  title: "Scraping websites with Python: a beginner’s start",
  date: "2020-03-27",
  category: "Digital marketing",
  cover: "/images/blog/parsing-python/cover-en.webp",
  excerpt:
    "Why Python is often chosen for scraping, how Scrapy, Beautiful Soup, and Selenium differ, how to set up the environment, and where legal data collection ends.",
  lead: [
    "Python is handy for learning and writing scrapers: clear syntax, packages, and libraries for HTTP and HTML parsing. But “easy to write” ≠ “you may download any site.”",
    "Below: language upsides, tool classes, and a safe start. No guides on bypassing anti-bot, faking a User-Agent “like a browser,” or scraping closed sections — ToS, robots.txt, and official APIs come first.",
  ],
  faq: [
    {
      q: "Why Python, not PHP?",
      a: "Both can make network requests. Python has a strong data/script stack (requests, BS4, Scrapy) and a lower bar for learning code. The choice still depends on the team and infrastructure.",
    },
    {
      q: "Which library should you try first?",
      a: "For learning: requests + Beautiful Soup on static HTML. For large crawls: Scrapy. If the page is JavaScript-rendered, look at an API or a careful browser driver, not “breaking protection.”",
    },
    {
      q: "Can I scrape if the site “won’t let me”?",
      a: "A refusal, captcha, or rate limit is a signal to stop or find an official data channel. Bypassing protection and spoofing a user to harvest someone else’s database is claims-and-blocks territory.",
    },
    {
      q: "How is this different from the general scraping article?",
      a: "That piece covers meaning, scenarios, and limits. This one is a Python stack for beginners. The legality basics are the same.",
    },
    {
      q: "Do I need Selenium for everything?",
      a: "No. It’s heavier and slower. First check an API or JSON response; use a browser driver only when JS render is required and data is legally available.",
    },
  ],
  sections: [
    {
      title: "Why Python for scrapers",
      level: 2,
      paras: [
        "It’s a general-purpose language: scripts, data, simple OOP. For scraping, readable code, pip packages, and a community with examples matter.",
        "Typical pipeline: HTTP request → HTML/JSON → field extraction → CSV/DB. Analysis after that is a separate job.",
      ],
      lists: [
        {
          intro: "Pros for beginners:",
          items: [
            "clear syntax",
            "libraries for network and markup parsing",
            "handy debugging in a REPL or IDE",
            "easy to connect to tables and reports",
          ],
        },
      ],
      links: [
        {
          label: "Data scraping: meaning and limits",
          href: "/en/blog/parsing/",
        },
      ],
    },
    {
      title: "Environment: install and first .py",
      level: 2,
      paras: [
        "Download current Python from python.org; on Windows, check “Add to PATH”. Check: in a terminal `python --version` and `print(\"Hello\")`.",
        "Write code in a `.py` file and run it from a terminal or IDE — don’t keep long scripts only in an interactive session. Online sandboxes fit short exercises, not a production crawler.",
      ],
      lists: [
        {
          intro: "Minimum before scraping:",
          items: [
            "Python 3 installed",
            "virtual environment (venv)",
            "pip and base packages for the task",
            "a clear target source and rights to the data",
          ],
        },
      ],
    },
    {
      title: "Scrapy, Beautiful Soup, Selenium",
      level: 2,
      paras: [
        "Scrapy is a spider framework: URL queues, pipelines, high performance at volume. It fits a stable crawl of open pages with limits and respect for site rules.",
        "Beautiful Soup parses already downloaded HTML/XML. It doesn’t fetch by itself: usually next to `requests` (or another HTTP client). Useful for learning scripts and one-off samples.",
        "Selenium and peers are browser automation. Their main job is UI tests; for data collection it’s a heavy path. Don’t use a driver to bypass captcha and anti-bot.",
      ],
      lists: [
        {
          intro: "Rough guide:",
          items: [
            "learning / one page → requests + Beautiful Soup",
            "many URLs and a pipeline → Scrapy",
            "need JS render → API first; otherwise a deliberate browser stack without bypassing protection",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Important",
          text: "We don’t give “set User-Agent like Firefox and pass the block” examples. If the site blocks robots, lower the load, read the rules, or use an official export/API.",
        },
      ],
      links: [
        {
          label: "Protecting a site from scraping",
          href: "/en/blog/zashchita-ot-parsinga/",
        },
      ],
    },
    {
      title: "Legality and ethics of collection",
      level: 2,
      paras: [
        "An open storefront in a browser is not a license for a database. Check ToS, robots.txt, copyright, and personal data rules.",
        "Risky: mass limit ignoring, bypassing blocks, scraping closed content, reselling others’ databases, auto-filling a site with copies.",
      ],
      lists: [
        {
          intro: "Safer paths:",
          items: [
            "official APIs and partner feeds",
            "pauses and request limits",
            "don’t take personal data without a legal basis",
            "don’t publish someone else’s unique content as yours",
            "document the data source for the business",
          ],
        },
      ],
      links: [
        {
          label: "Auto-filling a site",
          href: "/en/blog/avtonapolnenie-sayta/",
        },
      ],
    },
  ],
  closing: [
    "Python is a handy scraper start: set up the environment, pick a library class for the job, and keep collection ethics. For meaning and limits see the scraping overview; for protecting your own site — a separate piece.",
  ],
  related: [
    "parsing",
    "zashchita-ot-parsinga",
    "avtonapolnenie-sayta",
    "analiz-konkurentov",
    "yml-fayl",
    "json",
  ],
};
