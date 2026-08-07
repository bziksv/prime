import type { BlogPost } from "../../../data/blog";

/** EN overlay for novostnoy-sayt — same structure as RU JSON. */
export const novostnoySaytEn: BlogPost = {
  slug: "novostnoy-sayt",
  title: "How to promote a news site: semantics, tech, and distribution",
  date: "2019-07-15",
  category: "SEO",
  cover: "/images/blog/novostnoy-sayt/cover-en.webp",
  excerpt:
    "SEO specifics for a news portal: fresh content instead of a rigid keyword set, clean tech without duplicates, mobile UX, internal links, RSS/push, and aggregators — without promising “audience ×2 in a week.”",
  lead: [
    "A news site lives on speed and a stream of pieces: the classic “build a keyword set once forever” works poorly. You need fresh URLs, clean tech, mobile comfort, and distribution — search, social, newsletters, aggregators.",
    "Media SEO piles up technical debt fast if nobody owns templates and duplicates. Tech and templates take on the order of a few weeks; visibility growth on informational and branded queries is planned over months — not “TOP tomorrow after one fix.”",
  ],
  faq: [
    {
      q: "How does news SEO differ from a commercial site?",
      a: "More transient queries and daily URLs, stronger roles for freshness, section structure, and publish speed. Less “a service landing for years.”",
    },
    {
      q: "Do you need a semantic keyword set?",
      a: "Yes, but different: pillar high/mid-frequency terms (“city news,” section topics), names, brands, events plus operational semantics for news hooks. Don’t try to lock every keyword in advance.",
    },
    {
      q: "Are social networks enough for a news site?",
      a: "No. Social gives fast touches; steady search and reader returns need the site, tech, and a habit of coming direct or by brand.",
    },
    {
      q: "Do news aggregators help?",
      a: "When you meet platform requirements — yes, as an extra channel. Not a replacement for your own audience and material quality.",
    },
    {
      q: "How long until you see search impact?",
      a: "Tech and templates can be cleaned up in weeks. Stable visibility across the core and sections is planned over 2–6 months, in parallel with the publishing rhythm.",
    },
  ],
  sections: [
    {
      title: "How a news property differs",
      level: 2,
      paras: [
        "A stream of exclusive and breaking pieces, discussion, tens of thousands of URLs over time. Audience scale depends on geo and topic: a district paper and a national feed are different attention economies.",
        "Content ages fast: value is in timing, facts, and easy navigation by topic — not a “forever” commercial landing.",
      ],
    },
    {
      title: "Typical SEO problems in media",
      level: 2,
      paras: [
        "Without optimization discipline a portal piles up technical debt that cuts crawl and trust.",
      ],
      lists: [
        {
          intro: "A common set:",
          items: [
            "URL duplicates and templated meta",
            "copy-paste without added value",
            "weak mobile layout",
            "broken internal links and 404s",
            "slow rendering",
            "hosting failures, no HTTPS",
            "no clear robot routes (robots/sitemap).",
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
        "Keep pillar queries for sections and geo (“news of …,” section topics). In parallel catch long-tail event, name, and brand phrasings — that stream is unpredictable.",
        "The main lever is publishing unique pieces on time, regularly. Empty “semantics for semantics” without an editorial team won’t work.",
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
            "A spike on a news hook ≠ stable TOP across all news head terms. Watch section share in the SERP, return rate, and direct/branded visits.",
          ],
        },
      ],
    },
    {
      title: "Technical frame",
      level: 2,
      paras: [
        "robots.txt without an accidental Disallow of the whole site; current XML Sitemaps (including news/by section — when the platform allows).",
        "Canonicals and redirects against duplicates (pagination, GET params, “several URLs for one story”). Unique title/description by template: headline + section/geo.",
        "Broken links and alt on images. HTTPS and stable hosting are basic hygiene.",
      ],
      lists: [
        {
          intro: "Minimum control:",
          items: [
            "404 and speed monitoring",
            "meta templates without copy-paste",
            "sitemap in Search Console / webmaster tools",
            "mobile usability of main templates.",
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
        "News is read on phones: responsive layout, readable type, fast LCP beat a “pretty desktop.”",
        "Internal links: “related” blocks, sections, tags without spammy identical anchors and 404s. The goal is finish reading and go deeper — not “a link for a link’s sake.”",
      ],
      lists: [
        {
          intro: "What to avoid:",
          items: [
            "packs of identical links on a page",
            "orphan pieces with no entry path",
            "self-links",
            "outbound overload with no value.",
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
        "RSS and email/push bring loyal readers back — without spam and clickbait on unchecked sensations.",
        "Social and messengers — fast traffic and discussion; style link previews. Impact on rankings is mostly via visits and brand, not “like weight.”",
        "Aggregators and news surfaces — by their quality and format rules. An extra channel, not the only strategy.",
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
        "News SEO = fresh content + tech without duplicates + mobile + smart distribution.",
        "First clear indexing debt and templates, then grow rhythm and channels.",
        "Don’t confuse a one-off viral story with steady visibility by section.",
      ],
    },
  ],
  closing: [
    "In one week check: no duplicate URLs for one story, sitemap is served, and the mobile story card is usable — that beats arguing about “magic aggregators.”",
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
