import type { BlogPost } from "../../../data/blog";

/** EN overlay for novostnoy-sayt — same structure as RU JSON. */
export const novostnoySaytEn: BlogPost = {
  slug: "novostnoy-sayt",
  title: "How to grow a news site: queries, tech, and distribution",
  date: "2019-07-15",
  category: "SEO",
  cover: "/images/blog/novostnoy-sayt/cover-en.webp",
  excerpt:
    "What news SEO actually needs: a steady stream of fresh URLs, clean templates without duplicates, mobile-first reading, internal links, RSS/push, and aggregators — without “double the audience in a week.”",
  lead: [
    "A news site runs on speed and volume. Building a keyword list once and treating it as finished rarely works. You need fresh URLs, solid tech, comfortable mobile reading, and distribution across search, social, email, and aggregators.",
    "Below: common media SEO traps and a practical work frame. Cleaning tech and templates usually takes weeks. Steady visibility on informational and branded queries is planned over months — not overnight after one tweak.",
  ],
  faq: [
    {
      q: "How is news SEO different from a commercial site?",
      a: "More short-lived queries and daily URLs. Freshness, section structure, and publish speed matter more. You rely less on a single service landing that sits for years.",
    },
    {
      q: "Do you still need a keyword core?",
      a: "Yes — a different kind. Pillars for sections and geo (“city news,” beat topics), names, brands, and events, plus day-of language around breaking stories. Do not try to lock every phrase in advance.",
    },
    {
      q: "Is social enough?",
      a: "No. Social drives quick touches. Durable search traffic and return visits need the site itself, clean tech, and a habit of coming direct or by brand.",
    },
    {
      q: "Are news aggregators worth it?",
      a: "When you meet each platform’s rules — yes, as an extra channel. They do not replace your own audience or the quality of the reporting.",
    },
    {
      q: "How long until search moves?",
      a: "Tech and templates can be put in order in weeks. Stable visibility across pillars and sections is planned over 2–6 months, in step with the publish cadence.",
    },
  ],
  sections: [
    {
      title: "What makes a news property different",
      level: 2,
      paras: [
        "Exclusive and breaking pieces, comments, and tens of thousands of URLs over time. Audience size depends on geo and beat: a local paper and a national feed are different attention economies.",
        "Stories age fast. Value sits in timing, facts, and easy navigation by topic — not in a “forever” commercial landing page.",
      ],
    },
    {
      title: "Typical SEO problems in media",
      level: 2,
      paras: [
        "Without ownership of templates and duplicates, a portal stacks technical debt that hurts crawl and trust.",
      ],
      lists: [
        {
          intro: "A frequent mix:",
          items: [
            "duplicate URLs and boilerplate meta",
            "copy-paste with no added value",
            "weak mobile layout",
            "broken internal links and 404s",
            "slow rendering",
            "flaky hosting, missing HTTPS",
            "no clear robot paths (robots.txt / sitemap)",
          ],
        },
      ],
      links: [
        {
          label: "Duplicate pages",
          href: "/en/blog/dubli-stranits/",
        },
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "Queries and freshness",
      level: 2,
      paras: [
        "Keep pillar queries for sections and geo (“news of …,” beat topics). In parallel, catch long-tail event, name, and brand phrasings — that stream is unpredictable.",
        "The real lever is publishing unique pieces on time, at a steady pace. Keyword research without an editorial rhythm does little.",
      ],
      links: [
        {
          label: "Semantic keyword set",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Expectations",
          paras: [
            "A spike on one news hook is not the same as steady page-one coverage on every high-volume news query. Watch section share in the results, return rate, and direct or branded visits.",
          ],
        },
      ],
    },
    {
      title: "Technical frame",
      level: 2,
      paras: [
        "robots.txt without an accidental Disallow of the whole site; current XML sitemaps (news and by section when the CMS allows).",
        "Canonicals and redirects against duplicates — pagination, GET params, several URLs for one story. Unique title and description from a template: headline + section or geo.",
        "Fix broken links and image alt text. HTTPS and stable hosting are baseline hygiene.",
      ],
      lists: [
        {
          intro: "Minimum checklist:",
          items: [
            "404 and speed monitoring",
            "meta templates that do not copy-paste",
            "sitemap submitted in Search Console / webmaster tools",
            "mobile usability of the main templates",
          ],
        },
      ],
      links: [
        {
          label: "Sitemap",
          href: "/en/blog/karta-sayta/",
        },
        {
          label: "HTTPS and SEO",
          href: "/en/blog/https-seo/",
        },
        {
          label: "Site speed",
          href: "/en/blog/skorost-sayta/",
        },
      ],
    },
    {
      title: "Mobile and internal linking",
      level: 2,
      paras: [
        "Most news is read on phones: responsive layout, readable type, and fast LCP matter more than a polished desktop skin.",
        "Internal links: related blocks, sections, and tags — without spammy identical anchors or links to 404s. The goal is finish the piece and go deeper, not link for link’s sake.",
      ],
      lists: [
        {
          intro: "Avoid:",
          items: [
            "packs of identical links on one page",
            "orphan stories with no entry path",
            "self-links",
            "outbound clutter with no reader value",
          ],
        },
      ],
      links: [
        {
          label: "Responsive site",
          href: "/en/blog/adaptivnyy-sayt/",
        },
        {
          label: "Internal linking",
          href: "/en/blog/vnutrennyaya-perelinkovka/",
        },
      ],
    },
    {
      title: "Distribution: RSS, push, social, aggregators",
      level: 2,
      paras: [
        "RSS and email or push bring loyal readers back — without spam or clickbait on unverified sensations.",
        "Social and messengers drive fast traffic and discussion; style link previews carefully. Ranking impact comes mostly through visits and brand, not “like weight.”",
        "Aggregators and news surfaces follow their own quality and format rules. Treat them as an extra channel, not the whole strategy.",
      ],
      links: [
        {
          label: "Social and SEO",
          href: "/en/blog/socseti-i-seo/",
        },
        {
          label: "Open Graph",
          href: "/en/blog/open-graph/",
        },
        {
          label: "Yandex Zen",
          href: "/en/blog/yandeks-dzen/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "News SEO is fresh content, tech without duplicates, mobile comfort, and smart distribution.",
        "Clear indexing debt and templates first, then grow publish rhythm and channels.",
        "Do not confuse one viral story with steady visibility by section.",
      ],
    },
  ],
  closing: [
    "This week: confirm one story is not living on several URLs, the sitemap is served, and the mobile story card is usable — that beats arguing about “magic aggregators.”",
  ],
  related: [
    "tehnicheskiy-seo-audit",
    "dubli-stranits",
    "semanticheskoe-yadro",
    "vnutrennyaya-perelinkovka",
    "socseti-i-seo",
    "yandeks-dzen",
  ],
};
