import type { BlogPost } from "../../../data/blog";

/** EN overlay for sayt-ne-v-top — same structure as RU JSON. */
export const saytNeVTopEn: BlogPost = {
  slug: "sayt-ne-v-top",
  title: "Why your pages aren’t ranking: 10 common reasons",
  date: "2020-01-31",
  category: "SEO",
  cover: "/images/blog/sayt-ne-v-top/cover-en.webp",
  excerpt:
    "Ten reasons pages miss page one: age, filters, content, tech, UX, security, hosting, domain, code, and the instant-results myth — with prep timelines separate from ranking growth.",
  lead: [
    "Strong copy and a clear menu help, but they are not enough. Pages can sit far down the results because the domain is young, under a filter, weak on tech, hard to use — or because someone expected miracles in a week.",
    "Below: ten frequent causes and what to check. Prep for promotion (tech, keywords, copy) usually takes weeks or about a month. Growing a solid share of the commercial core into page-one visibility is a different horizon — typically 2–6 months after work starts, improving month to month, with no guaranteed calendar date.",
  ],
  faq: [
    {
      q: "Can you reach page one in a month?",
      a: "In about a month it is realistic to prepare the site and start work. Ranking a commercial core on page one more often takes 2–6 months of buildup. “Launch equals page one” is a harmful myth.",
    },
    {
      q: "Does the sandbox officially exist?",
      a: "Search engines do not promise a separate “sandbox mode” for every new site. In practice new domains gather trust and signals longer — that is normal, not a CMS bug.",
    },
    {
      q: "If the content is unique, is page one guaranteed?",
      a: "No. You still need intent match, structure, tech, competition, and time. Uniqueness is a baseline — not a ticket to the first ten results.",
    },
    {
      q: "How do you tell a filter is to blame?",
      a: "A sharp drop across a query group, messages in Webmaster or Search Console, anomalies in the backlink profile. Do not diagnose from one phrase — watch trends and reports.",
    },
    {
      q: "Does malware on the site affect rankings?",
      a: "Yes: browser warnings, removal from results, lost trust. Clean and secure first; SEO expectations later.",
    },
    {
      q: "Can bad hosting really hurt rankings?",
      a: "Frequent downtime, slow TTFB, and a server far from the audience hurt crawl and UX. It is not a “penalty for the host brand” — it is availability and speed.",
    },
    {
      q: "Are hyphen, IDN, or digit domains a dead end?",
      a: "Not always. History, brand, query match, and trust matter more. Renaming for looks without proper 301s is a separate risk.",
    },
    {
      q: "Where should diagnosis start?",
      a: "Indexing and panel errors → tech (speed, mobile, status codes) → content and keywords → links and filters → UX and conversion. In parallel, lock the timeline: prep is not the same as ranking growth.",
    },
  ],
  sections: [
    {
      title: "How to read “we’re not ranking”",
      level: 2,
      paras: [
        "First clarify which queries: brand, informational, or commercial head terms. One URL does not have to sit on page one for every phrase in the niche. Watch core share, traffic, and leads — not one pretty position in a screenshot.",
        "Split the stages: the site is ready for promotion (prep) versus the site is building rankings (work plus time). Mixing them up is the main source of disappointment — and of dangerous “accelerators” like spam links and satellite networks.",
      ],
      lists: [
        {
          intro: "Mini-checklist before panic:",
          items: [
            "the page is indexed and returns 200",
            "query and intent match the landing",
            "there is real competition and a realistic horizon",
            "work has already run longer than a couple of weeks",
          ],
        },
      ],
      links: [
        {
          label: "Semantic keyword set",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
      ],
    },
    {
      title: "1–2. Young site and filters",
      level: 2,
      paras: [
        "A new domain needs time for crawl and for behavioral and link signals to accumulate. A piece that “took off” on an old authoritative site often grows slower on a fresh name — that is expected. Strengthen the core (head, mid, and long-tail), structure, uniqueness, and tech; claim the property in Webmaster and Search Console.",
        "Filters and sanctions are a different story: a sharp collapse, warnings, a toxic backlink profile, over-optimization. Remove the cause first (spam, cloaking, fake engagement) — do not buy more links. See the filters and buying-links pieces for more.",
      ],
      lists: [
        {
          intro: "Useful at the start:",
          items: [
            "build the core and a relevance map",
            "clear critical tech errors",
            "do not expect page one two weeks after launch",
            "do not build “accelerators” like satellite networks",
          ],
        },
      ],
      links: [
        {
          label: "Young site",
          href: "/en/blog/molodoy-sayt/",
        },
        {
          label: "Search engine filters",
          href: "/en/blog/filtry-poiskovikov/",
        },
        {
          label: "Satellite sites",
          href: "/en/blog/sayty-satellity/",
        },
      ],
    },
    {
      title: "3–4. Content and crawler-facing optimization",
      level: 2,
      paras: [
        "Weak, non-unique, or watery copy fails intent. Copy-paste and thin template cards lose to pages with facts, structure, and a real answer. Write for people; compare competitors on meaning — not only a uniqueness score in a tool.",
        "“Not enough optimization” does not mean stuffing a keyword into every paragraph. It means clear title and H1, sensible URLs, internal links, indexing the right sections, and keeping junk out. The crawler should see the main pages and not drown in parameter duplicates.",
      ],
      lists: [
        {
          intro: "Check:",
          items: [
            "uniqueness and a complete answer to the query",
            "title, H1, and snippet without stuffing",
            "sitemap, robots, canonicals",
            "duplicates and thin pages in the index",
          ],
        },
      ],
      links: [
        {
          label: "Site content",
          href: "/en/blog/napolnenie-sayta/",
        },
        {
          label: "Duplicate pages",
          href: "/en/blog/dubli-stranits/",
        },
        {
          label: "Title length",
          href: "/en/blog/dlina-title/",
        },
      ],
    },
    {
      title: "5–6. User behavior and security",
      level: 2,
      paras: [
        "Ignoring UX is a common reason for “traffic, no results” and weak engagement signals: slow load, aggressive popups, confusing navigation, a mobile layout that barely works. Watch bounce, depth, and goals in analytics — then fix the path to a lead.",
        "Malware, phishing, and hacks kill trust faster than any SEO audit. Browsers and search may show warnings or scrub pages. Cleanup, password resets, CMS and plugin updates, HTTPS, and backups come first — rankings second.",
      ],
      lists: [
        {
          intro: "Action signals:",
          items: [
            "high bounce on key landings",
            "virus or Safe Browsing complaints",
            "unknown redirects and scripts",
            "Metrica / Analytics goals that do not add up",
          ],
        },
      ],
      links: [
        {
          label: "Site security",
          href: "/en/blog/bezopasnost-sayta/",
        },
        {
          label: "Site navigation",
          href: "/en/blog/navigatsiya-sayta/",
        },
        {
          label: "Goals in Metrica",
          href: "/en/blog/metrika-tseli/",
        },
      ],
    },
    {
      title: "7–9. Hosting, domain, and code errors",
      level: 2,
      paras: [
        "Unreliable hosting means downtime, limits, and slow server response. The bot crawls successfully less often; users leave. Pick a stable platform closer to the audience; watch uptime and caching.",
        "An “awkward” name rarely bans a site by itself, but a domain with a bad history, endless redirects, or a full brand mismatch makes life harder. Before buying a used name, check archives and sanctions. Broken HTML, missing assets, mixed content, wrong redirects, and bad status codes hurt indexing — catch them with a crawler and webmaster panels.",
      ],
      lists: [
        {
          intro: "Tech minimum:",
          items: [
            "uptime and speed (including mobile)",
            "domain history on change or purchase",
            "valid 301s between mirrors",
            "crawl for 4xx/5xx, broken CSS/JS, duplicates",
          ],
        },
      ],
      links: [
        {
          label: "Screaming Frog",
          href: "/en/blog/screaming-frog/",
        },
        {
          label: "HTTP status codes",
          href: "/en/blog/kod-statusa-http/",
        },
        {
          label: "Page size",
          href: "/en/blog/razmer-stranitsy/",
        },
      ],
    },
    {
      title: "10. Expecting instant page-one results",
      level: 2,
      paras: [
        "The most common “reason” is wrong expectations. Prep — keywords, copy, tech, analytics — is on the order of a month (sometimes 2–6 weeks). Ranking buildup is planned over 2–6 months after work starts; a noticeable chunk of the core more often appears near 2–3 months, the rest later — “as it goes,” not a calendar guarantee.",
        "If a vendor promises turnkey page one “in 30 days” with no caveats on competition and stages — treat it as a red flag. An honest report shows core-share growth and/or leads month to month — not one magic date.",
      ],
      lists: [
        {
          intro: "How to phrase timelines:",
          items: [
            "Prep: ~1 month (sometimes 2–6 weeks)",
            "Page-one share of the core: planned 2–6 months after work starts",
            "KPIs: core share, traffic, leads — not “#1 tomorrow”",
            "no “acceleration” via networks and link bursts",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Timelines",
          text: "Starting work is not the same as reaching page one. Confusing prep with ranking buildup is the main brief mistake.",
        },
      ],
      links: [
        {
          label: "SEO for small business",
          href: "/en/blog/seo-malyy-biznes/",
        },
        {
          label: "Buying links",
          href: "/en/blog/pokupka-ssylok/",
        },
      ],
    },
    {
      title: "A practical diagnosis order",
      level: 2,
      paras: [
        "Move from facts to hypotheses: indexing panels → availability and speed → page–query match → content quality → links and filters → UX and conversion. Log changes and watch trends over weeks, not overnight.",
        "In parallel, remove toxic “accelerators.” Lasting growth comes from content, tech, and normal mentions — plus time. The ten reasons above usually stack: rarely is only one checklist line to blame.",
      ],
      lists: [
        {
          intro: "In one line:",
          items: [
            "first make the site worth indexing and clicking",
            "then work systematically for months",
            "do not confuse prep with ranking growth",
            "measure leads, not only positions",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Webmaster / support",
          href: "/en/blog/podderzhka-yandeks/",
        },
        {
          label: "Google Search Console",
          href: "/en/blog/google-search-console/",
        },
      ],
    },
  ],
  related: [
    "molodoy-sayt",
    "filtry-poiskovikov",
    "samostoyatelnoe-seo",
    "sayty-satellity",
    "napolnenie-sayta",
    "bezopasnost-sayta",
  ],
};
