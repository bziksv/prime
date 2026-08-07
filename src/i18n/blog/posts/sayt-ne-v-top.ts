import type { BlogPost } from "../../../data/blog";

/** EN overlay for sayt-ne-v-top — same structure as RU JSON. */
export const saytNeVTopEn: BlogPost = {
  slug: "sayt-ne-v-top",
  title: "Why the site isn’t in TOP: 10 common reasons",
  date: "2020-01-31",
  category: "SEO",
  cover: "/images/blog/sayt-ne-v-top/cover-en.webp",
  excerpt:
    "Ten reasons pages don’t hold TOP-10: age, filters, content, tech, UX, security, hosting, domain, code, and the instant-results myth — with prep and ranking timelines.",
  lead: [
    "Interesting copy and a convenient menu are necessary but not enough. A site can “not be in TOP” because it’s young, under a filter, weak on tech, hard for people, or because people expect miracles in a week.",
    "Below — ten common reasons and what to check. Important: preparing a project for promotion (tech, semantics, copy) takes weeks or about a month; a noticeable share of the core in TOP is a different horizon — usually 2–6 months after work starts, growing month to month, with no date guarantee.",
  ],
  faq: [
    {
      q: "Can you “hit TOP” in a month?",
      a: "In ~a month it’s realistic to prep the site and start work. TOP for a commercial core more often takes 2–6 months of buildup. “Launch = TOP-10” is a harmful myth.",
    },
    {
      q: "Does the sandbox officially exist?",
      a: "Search engines don’t promise a separate “sandbox mode” for everyone. In practice new domains gather trust and signals longer — that’s normal, not a CMS bug.",
    },
    {
      q: "If content is unique, is TOP guaranteed?",
      a: "No. You need intent, structure, tech, competition, and time. Uniqueness is a base — not a ticket to the top ten.",
    },
    {
      q: "How do you know a filter is to blame?",
      a: "A sharp drop across a query group, Webmaster/GSC messages, backlink-profile anomalies. Don’t diagnose from one phrase — watch dynamics and reports.",
    },
    {
      q: "Does a site virus affect rankings?",
      a: "Yes: browser warnings, removal from results, lost trust. Treatment and security first, SEO expectations later.",
    },
    {
      q: "Can bad hosting really drop rankings?",
      a: "Frequent downtime, slow TTFB, and geo far from the audience hurt crawl and UX. It isn’t a “penalty for the host brand” — it’s availability and speed.",
    },
    {
      q: "Are hyphen / IDN / digit domains a sentence?",
      a: "Not always. Domain history, brand, query match, and trust matter more. Renaming for “prettiness” without 301s is a separate risk.",
    },
    {
      q: "Where to start diagnosis?",
      a: "Indexing and panel errors → tech (speed, mobile, status codes) → content and semantics → links/filters → UX and conversion. In parallel lock the work timeline: prep ≠ TOP.",
    },
  ],
  sections: [
    {
      title: "How to read “site not in TOP”",
      level: 2,
      paras: [
        "First clarify which queries: brand, informational, commercial head terms. One URL doesn’t have to be TOP-10 for every niche phrase. Watch core share, traffic, and leads — not one pretty position in a screenshot.",
        "Split stages: the site is ready for promotion (prep) and the site is building rankings (work + time). Confusing them is the main source of disappointment and dangerous “accelerators” like spam links and satellite networks.",
      ],
      lists: [
        {
          intro: "Mini-checklist before panic:",
          items: [
            "the page is indexed and returns 200;",
            "query and intent match the landing;",
            "there is competition and a realistic horizon;",
            "work has already run longer than a couple of weeks.",
          ],
        },
      ],
      links: [
        {
          label: "Semantic core",
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
        "A new domain needs time for crawling and gathering behavioral and link signals. Material that “took off” on an old authoritative site often grows slower on a fresh name — that’s expected. Strengthen the core (head + mid + long-tail), structure, uniqueness, and tech; claim the site in Webmaster and Search Console.",
        "Filters and sanctions are another story: a sharp collapse, warnings, a toxic backlink profile, over-optimization. Then remove the cause first (spam, cloaking, fake engagement) — don’t buy more links. More in the filters and buying-links pieces.",
      ],
      lists: [
        {
          intro: "Useful at the start:",
          items: [
            "build the core and a relevance map;",
            "clear critical tech errors;",
            "don’t expect TOP-10 two weeks after launch;",
            "don’t build “accelerators” like satellites.",
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
      title: "3–4. Content and optimization for crawlers",
      level: 2,
      paras: [
        "Weak, non-unique, or watery copy doesn’t close intent. Copy-paste and template cards without value lose to pages with facts, structure, and an answer to the query. Write for people; compare competitors on meaning — not only a uniqueness % in a tool.",
        "Insufficient optimization isn’t “stuff the key into every paragraph” — it’s clear title/H1, URL structure, internal links, indexing needed sections, and closing junk. The crawler must see main pages and not drown in parameter duplicates.",
      ],
      lists: [
        {
          intro: "Check:",
          items: [
            "uniqueness and completeness of the answer;",
            "title, H1, snippet without stuffing;",
            "sitemap, robots, canonicals;",
            "duplicates and thin pages in the index.",
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
      title: "5–6. People behavior and security",
      level: 2,
      paras: [
        "Ignoring UX is a common reason for “traffic, no results” and weak behavioral signals: long load, aggressive popups, hard navigation, a mobile version “as it landed”. Watch bounce, depth, goals in analytics — and fix the path to a lead.",
        "Malware, phishing, and hacks kill trust faster than any SEO audit. Browsers and search may show warnings or scrub pages. Cleanup, password resets, CMS/plugin updates, HTTPS, and backups first — then rankings again.",
      ],
      lists: [
        {
          intro: "Action signals:",
          items: [
            "high bounce on key landings;",
            "virus / Safe Browsing complaints;",
            "unknown redirects and scripts;",
            "Metrica/Analytics goals don’t add up.",
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
        "Unreliable hosting: downtime, limits, slow server response. The bot crawls successfully less often; users leave. Pick a stable platform closer to the audience; watch uptime and cache.",
        "An “unsuitable” name rarely “bans” a site by itself, but a domain with a bad history, endless redirects, or a full brand mismatch makes life harder. Before buying a used name, check archives and sanctions. Bad HTML, broken assets, mixed content, wrong redirects and statuses hurt indexing — catch them with a crawler and webmaster panels.",
      ],
      lists: [
        {
          intro: "Tech minimum:",
          items: [
            "uptime and speed (including mobile);",
            "domain history on change/purchase;",
            "valid 301s between mirrors;",
            "crawl for 4xx/5xx, broken CSS/JS, duplicates.",
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
      title: "10. Expecting instant TOP",
      level: 2,
      paras: [
        "The most common “reason” is really wrong expectations. Prep: semantics, copy, tech, analytics — about a month (sometimes 2–6 weeks). Ranking buildup: planned 2–6 months after work starts; a noticeable chunk of the core more often near 2–3 months, the rest later — “as it goes”, not a calendar guarantee.",
        "If a vendor promises turnkey TOP-10 “in 30 days” with no caveats on competition and stages — red flag. An honest report shows core-share growth and/or leads month to month — not one magic date.",
      ],
      lists: [
        {
          intro: "How to phrase timelines:",
          items: [
            "Prep: ~1 month (sometimes 2–6 weeks);",
            "TOP for the core: planned 2–6 months after work starts;",
            "KPIs: core share, traffic, leads — not “#1 tomorrow”;",
            "no “acceleration” via networks and link bursts.",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Starting work ≠ hitting TOP-10. Confusing prep with ranking buildup is the main brief mistake.",
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
        "Go from facts to hypotheses: indexing panels → availability and speed → page–query match → content quality → links and filters → UX and conversion. Log changes and watch dynamics over weeks, not overnight.",
        "In parallel remove toxic “accelerators”. Lasting growth comes from content, tech, and normal mentions — plus time. The ten reasons above usually work in combination: rarely is only one checklist line to blame.",
      ],
      lists: [
        {
          intro: "In one line:",
          items: [
            "first make the site worth indexing and clicking;",
            "then work systematically for months;",
            "don’t confuse prep with TOP;",
            "measure leads, not only rankings.",
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
