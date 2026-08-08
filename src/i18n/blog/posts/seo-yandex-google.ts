import type { BlogPost } from "../../../data/blog";

/** EN overlay for seo-yandex-google — same structure as RU JSON. */
export const seoYandexGoogleEn: BlogPost = {
  slug: "seo-yandex-google",
  title: "Yandex vs Google SEO: what actually differs",
  date: "2019-01-14",
  category: "SEO",
  cover: "/images/blog/seo-yandex-google/cover-en.webp",
  excerpt:
    "What’s shared and where Yandex and Google diverge: keywords, commercial signals, local SEO, webmaster tools, links, and content — a practical map for Russia, without the myth of “one algorithm for both.”",
  lead: [
    "On the Russian-speaking web you often need both engines. Yandex vs Google share depends on niche and region. The base is the same — useful pages, solid tech, clear intent. The accents differ: Yandex often weighs locality and commercial signals harder; Google brings global practices and its own tool stack.",
    "Here’s a working comparison for a Russia-focused site. In markets where Google stands alone, strategy leans toward “Western” SEO. Prep takes weeks; ranking growth for the keyword set is planned over 2–6 months after work starts — in both engines, with no promised date.",
  ],
  faq: [
    {
      q: "Can I run “Google only” SEO in Russia?",
      a: "You can if that’s where the audience is. You’ll often leave a real slice of Yandex demand on the table. Check analytics and channel share by niche.",
    },
    {
      q: "Same keyword set for both engines?",
      a: "Yes — one shared set. Cross-check frequencies and phrasing in Wordstat and Google tools / Search Console. Clusters and landings are usually one map.",
    },
    {
      q: "Are commercial factors more important in Yandex?",
      a: "On commercial queries in Russia, Yandex is often sensitive to contacts, prices, assortment, and trust. Google cares about page quality too, but RU teams more often run the “storefront” checklist against Yandex.",
    },
    {
      q: "Is a Webmaster region setting the same as Google’s local signals?",
      a: "Different accounts, different signals. Prove locality with content, NAP, and maps — not one checkbox.",
    },
    {
      q: "Do backlinks work the same way?",
      a: "Donor quality matters everywhere. Filter history and anchor weight have differed by engine — don’t blindly paste Western link-buy playbooks into Russia.",
    },
    {
      q: "Do I need two different sites?",
      a: "Usually no: one site, two panels, one keyword map. Separate domains are for countries or languages — not for “Yandex vs Google.”",
    },
    {
      q: "Do penalties and filters match across engines?",
      a: "No. Each has its own rules and history. Watch both accounts and don’t copy a “fix” from one engine onto the other.",
    },
    {
      q: "What about voice search and mobile?",
      a: "Mobile-first and speed matter for both. Voice leans on conversational long-tail, FAQs, and local profiles — see the separate article.",
    },
  ],
  sections: [
    {
      title: "Shared foundation, different accents",
      level: 2,
      paras: [
        "Both Yandex and Google want to answer the query with a useful document. Tech (HTTPS, speed, indexing), structure, unique content, and clear snippets matter in both.",
        "The gap is signal weight, demand-research tools, and local ecosystems. Build a strong site for people, then tune panels and SERP specifics.",
      ],
      lists: [
        {
          intro: "Shared minimum:",
          items: [
            "indexing and status codes",
            "mobile and speed",
            "clusters mapped to landings",
            "Yandex Webmaster + Google Search Console",
          ],
        },
      ],
      links: [
        {
          label: "On-page / internal factors",
          href: "/en/blog/vnutrennie-faktory/",
        },
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "Keywords and commercial signals",
      level: 2,
      paras: [
        "In Russia, frequency and phrasing are convenient via Wordstat, topped up with Search Console and ads data. Google-first markets lean harder on Search Console, planners, and English-language suites.",
        "Commercial factors — contacts, prices, shipping, assortment, reviews — often decide money queries in Yandex as much as “one more paragraph” of copy. For Google, answer completeness and E-E-A-T-style trust matter — without copy-pasting checklists just to look busy.",
      ],
      lists: [
        {
          intro: "Practice:",
          items: [
            "one keyword set, two frequency / impression checks",
            "commercial blocks on money URLs",
            "no thin duplicates “one per engine”",
          ],
        },
      ],
      links: [
        {
          label: "Keyword research",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Commercial factors",
          href: "/en/blog/kommercheskie-faktory/",
        },
      ],
    },
    {
      title: "Local SEO, maps, and regions",
      level: 2,
      paras: [
        "Yandex has long been strong in geo-dependent results and directories. Google’s track is Maps / Business Profile. Offline businesses in Russia usually run both with consistent NAP.",
        "A region setting in the account is a signal — not a substitute for city pages, contacts, and real delivery terms.",
      ],
      lists: [
        {
          intro: "Local track:",
          items: [
            "Yandex Business / Directory",
            "Google Business Profile",
            "consistent name, address, phone",
            "reviews without faking",
          ],
        },
      ],
      links: [
        {
          label: "Regional SEO",
          href: "/en/blog/regionalnoe-seo/",
        },
        {
          label: "Google Business Profile",
          href: "/en/blog/google-biznes/",
        },
      ],
    },
    {
      title: "Panels, tech, and links",
      level: 2,
      paras: [
        "Yandex Webmaster and Google Search Console are a required duo for Russia: crawl errors, coverage, queries, security. Don’t only fix one account.",
        "Judge the backlink profile carefully: quality over volume. Schemes tied to one market transfer poorly without filter-risk analysis.",
      ],
      lists: [
        {
          intro: "Control checklist:",
          items: [
            "both accounts connected",
            "sitemap and canonical aligned",
            "links without “just in case” spam",
            "manual checks after releases",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Webmaster",
          href: "/en/blog/yandeks-vebmaster/",
        },
        {
          label: "Google Search Console",
          href: "/en/blog/google-search-console/",
        },
        {
          label: "Backlink profile",
          href: "/en/blog/ssylochnyy-profil/",
        },
      ],
    },
    {
      title: "When “Google only” and how content strategy shifts",
      level: 2,
      paras: [
        "In markets where Google dominates, informational content, native language, and country nuances carry more weight: fewer commercial head terms, the blog often drives organic. In Russia commercial and informational clusters sit differently — don’t paste a Western content plan line for line.",
        "Voice search, rich results, and mobile UX matter everywhere, but share and formats differ. Strengthen FAQs and speed without clinging to outdated “50% of queries will be voice by 2020” stats.",
      ],
      lists: [
        {
          intro: "International track — separately:",
          items: [
            "language and country locale",
            "hreflang for multilingual sites",
            "native content, not a calque",
            "legal and payment differences of the market",
          ],
        },
      ],
      links: [
        {
          label: "Voice search",
          href: "/en/blog/golosovoy-poisk/",
        },
      ],
    },
    {
      title: "How to run both without splitting the site",
      level: 2,
      paras: [
        "One canonical site, shared structure, visibility reported in both engines. Prioritize fixes by traffic and money — not the team’s favorite search engine.",
        "Don’t expect a perfect Google snippet to automatically win Yandex. One horizon for both: prep, then ranking growth over months.",
      ],
      lists: [
        {
          intro: "Cadence:",
          items: [
            "monthly — both accounts",
            "keyword set and ranks on priority clusters",
            "commercial and local work that matches the real business",
            "no promises of “page one in a week in both”",
          ],
        },
      ],
      links: [
        {
          label: "SEO effectiveness",
          href: "/en/blog/effektivnost-seo/",
        },
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          text: "Prep — often weeks to about a month. Ranking the keyword set in Yandex and Google is planned over 2–6 months after systematic work starts.",
        },
      ],
    },
  ],
  related: [
    "regionalnoe-seo",
    "google-biznes",
    "yandeks-vebmaster",
    "google-search-console",
    "kommercheskie-faktory",
    "effektivnost-seo",
  ],
};
