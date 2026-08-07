import type { BlogPost } from "../../../data/blog";

/** EN overlay for seo-yandex-google — same structure as RU JSON. */
export const seoYandexGoogleEn: BlogPost = {
  slug: "seo-yandex-google",
  title: "SEO differences in Yandex and Google",
  date: "2019-01-14",
  category: "SEO",
  cover: "/images/blog/seo-yandex-google/cover-en.webp",
  excerpt:
    "What’s shared and where Yandex and Google diverge: keywords, commercial factors, locality, webmaster panels, links, and content — a practical map for Russia without the myth “one algorithm for both”.",
  lead: [
    "In the Russian-speaking web you often need both engines: Yandex and Google share depends on niche and region. The base is shared — useful pages, tech, clear intent. Accents differ: Yandex often weighs locality and commercial signals harder on many queries; Google — global practices and its own tool ecosystem.",
    "A practical comparison for a site targeting Russia. Separately: in markets where Google dominates alone, strategy leans toward “Western” SEO. Prep takes weeks; building the core into the TOP is planned for 2–6 months after work starts—in both engines, with no promised date.",
  ],
  faq: [
    {
      q: "Can I promote “Google only” in Russia?",
      a: "You can if the audience is there. You often lose a noticeable share of Yandex demand. Check Metrica/channel share by niche.",
    },
    {
      q: "Should I use the same keyword core for both engines?",
      a: "The core is shared; cross-check frequencies and phrasing in Wordstat and Google tools/GSC. Clusters and landings are usually one set.",
    },
    {
      q: "Are commercial factors more important in Yandex?",
      a: "On commercial queries in Russia, Yandex is often sensitive to contacts, prices, assortment, trust. Google also looks at page quality, but the “storefront” checklist in RU practice is more often run against Yandex.",
    },
    {
      q: "Is a Webmaster region the same as Google’s region signals?",
      a: "Different accounts and signals. Confirm locality with content, NAP, maps — not one checkbox.",
    },
    {
      q: "Do links work the same in both engines?",
      a: "Donor quality matters everywhere. Filter history and anchor weight differed by engine; don’t blindly copy “Western” buy schemes into Russia.",
    },
    {
      q: "Do I need two different sites?",
      a: "Usually no: one site, two panels, shared semantics. Separate domains — for different countries/languages, not for “Yandex vs Google”.",
    },
    {
      q: "Do sanctions and filters match across engines?",
      a: "No. Each has its own rules and action history. Watch both accounts and don’t copy “treatment” one-to-one.",
    },
    {
      q: "What about voice search and mobile?",
      a: "Mobile-first and speed matter for both. Voice scenarios lean more on conversational long-tail, FAQ, and local profiles — see the separate article.",
    },
  ],
  sections: [
    {
      title: "Shared core, different accents",
      level: 2,
      paras: [
        "Both Yandex and Google want to answer the query with a useful document. Tech (HTTPS, speed, indexing), structure, unique content, and clear snippets matter in both.",
        "The difference is signal weight, demand-collection tools, and local ecosystems. Build a strong site for people, then tune panels and SERP specifics.",
      ],
      lists: [
        {
          intro: "Shared minimum:",
          items: [
            "indexing and status codes;",
            "mobile and speed;",
            "clusters → landings;",
            "Webmaster + Search Console.",
          ],
        },
      ],
      links: [
        {
          label: "Internal factors",
          href: "/en/blog/vnutrennie-faktory/",
        },
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "Semantics and commercial signals",
      level: 2,
      paras: [
        "In Russia, frequency and phrasing are convenient via Wordstat, topped up with GSC/ads data. Google-oriented markets lean harder on Search Console, planners, and English-language suites.",
        "Commercial factors (contacts, prices, shipping, assortment, reviews) in Yandex promotion practice on money queries often decide no less than “one more paragraph”. For Google, answer completeness and E-E-A-T-style trust matter — without copy-pasting checklists for the checkbox.",
      ],
      lists: [
        {
          intro: "Practice:",
          items: [
            "one core, two frequency/impression checks;",
            "commercial blocks on money URLs;",
            "don’t create thin duplicates “per engine”.",
          ],
        },
      ],
      links: [
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Commercial factors",
          href: "/en/blog/kommercheskie-faktory/",
        },
      ],
    },
    {
      title: "Locality, maps, and regions",
      level: 2,
      paras: [
        "Yandex has traditionally been strong in geo-dependent SERP and directories. Google — in Maps / Business Profile. For offline business in Russia you usually run both tracks with consistent NAP.",
        "Region in the account is a signal, not a replacement for city pages, contacts, and real delivery terms.",
      ],
      lists: [
        {
          intro: "Local track:",
          items: [
            "Yandex Business / Directory;",
            "Google Business Profile;",
            "consistent name, address, phone;",
            "reviews without faking.",
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
          intro: "Control:",
          items: [
            "both accounts connected;",
            "sitemap and canonical aligned;",
            "links — no “just in case” spam;",
            "manual monitoring after releases.",
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
      title: "When “Google only” and content strategy",
      level: 2,
      paras: [
        "On markets with Google monopoly (many Western ones) the bet on informational content, native language, and country nuances is higher: fewer commercial head terms, the blog often carries organic. In Russia commercial and informational clusters sit differently — don’t copy a Western content plan one-to-one.",
        "Voice search, featured scenarios, and mobile UX matter everywhere, but share and formats differ. Strengthen FAQ and speed without a cult of outdated “50% of queries by voice by 2020” stats.",
      ],
      lists: [
        {
          intro: "International track — separately:",
          items: [
            "language and country locale;",
            "hreflang for multilingual;",
            "native content, not a calque;",
            "legal and payment differences of the market.",
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
        "One canonical site, shared structure, visibility report in both engines. Fix priority by traffic and money — not the team’s “favorite” search engine.",
        "Don’t expect a perfect Google snippet to automatically give TOP in Yandex. One horizon: prep, then rank buildup over months.",
      ],
      lists: [
        {
          intro: "Rhythm:",
          items: [
            "monthly — both accounts;",
            "core and ranks by priority clusters;",
            "commercial and local by real business;",
            "no promises of “TOP in a week in both”.",
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
          kind: "tip",
          text: "Prep — a guide of weeks–month. Core TOP in Yandex and Google planned 2–6 months after systematic work starts.",
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
