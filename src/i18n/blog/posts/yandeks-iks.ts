import type { BlogPost } from "../../../data/blog";

/** EN overlay for yandeks-iks — same structure as RU JSON. */
export const yandeksIksEn: BlogPost = {
  slug: "yandeks-iks",
  title: "Yandex SQI: what the quality index was — and what to watch now",
  date: "2018-09-19",
  category: "SEO",
  cover: "/images/blog/yandeks-iks/cover-en.webp",
  excerpt:
    "What Yandex SQI (IKS) was, how it differed from TIC, and why chasing an outdated score is pointless — plus which Webmaster reports to use instead of a “quality index.”",
  lead: [
    "SQI (site quality index, Russian ИКС) was Yandex’s public score that replaced TIC in 2018. It reflected demand and quality for audiences — not just link weight. The scale was stepped (10, 20, 40…), like old TIC.",
    "The public badge later left the familiar Webmaster UI, so chasing a number from 2018–2019 guides is pointless. Below: why the metric appeared, how it differed from TIC, and what to use now. Webmaster does not place sites by hand; share of a commercial set on page one usually grows over months after work starts.",
  ],
  faq: [
    {
      q: "Is SQI still shown in Webmaster?",
      a: "Not as the familiar public badge. Focus on diagnostics, index, queries, security, and behavior in analytics.",
    },
    {
      q: "Is SQI the same as a search position?",
      a: "No. Even when SQI was live, a high score did not guarantee page-one rankings. Relevance, page quality, and competition still decide.",
    },
    {
      q: "How did SQI differ from TIC?",
      a: "TIC leaned on link citation. SQI shifted toward audience, satisfaction, and trust. The exact formula was never disclosed.",
    },
    {
      q: "Can you inflate SQI?",
      a: "Gaming behavioral and link signals is risky — and pointless for a vanished badge. Improve the site and the business.",
    },
    {
      q: "What should I watch on competitors instead of SQI?",
      a: "Visibility on the shared keyword set, traffic estimates from tools, snippets, content, and commercial factors — not someone’s archived score.",
    },
  ],
  sections: [
    {
      title: "From TIC to SQI: why the metric changed",
      level: 2,
      paras: [
        "TIC (thematic citation index) measured link weight from the late 1990s. By the 2010s directories and link exchanges were built on it, while in general search zero-TIC sites often beat heavily linked ones. The metric stopped explaining quality for users.",
        "In August 2018 Yandex announced the swap: TIC off, SQI on. The idea was to show how useful the site is for audiences and the business around it — not only how many links you bought.",
      ],
      tables: [
        {
          caption: "Rough meaning comparison",
          headers: ["Metric", "Focus", "Limit"],
          rows: [
            ["TIC", "Link citation", "Easy to detach from human value"],
            [
              "SQI",
              "Audience, trust, satisfaction",
              "Closed formula; score ≠ rankings",
            ],
            ["Now", "Webmaster reports + analytics", "No single main number"],
          ],
        },
      ],
      links: [
        {
          label: "Yandex Webmaster",
          href: "/en/blog/yandeks-vebmaster/",
        },
      ],
    },
    {
      title: "How SQI was calculated (as far as known)",
      level: 2,
      paras: [
        "Officially they named directions: audience size, satisfaction, trust. Experts tied growth to the ecosystem (Search, Maps, content surfaces) and behavior — sources, depth, bounce, time — without promised exact weights.",
        "Yandex kept the right to change the method and zero scores for manipulation. Peak SQI from other people’s 2018 screenshots is museum trivia, not an optimization goal.",
      ],
      notes: [
        {
          title: "Not a one-to-one ranking dial",
          kind: "tip",
          text: "Even when SQI was shown, it was a quality and demand indicator — not a knob you turn to buy page-one visibility.",
        },
      ],
    },
    {
      title: "How people used to check SQI",
      level: 2,
      paras: [
        "Historically the score lived in the Webmaster summary, notification emails, and direct check URLs. For other people’s sites they used public checkers and third-party tools — many are outdated now.",
        "If an old report said SQI was missing, the site might be new, weakly present in search, or outside the sample. Today a missing number is normal: the badge metric was removed.",
      ],
    },
    {
      title: "Why “raise SQI” is a bad goal today",
      level: 2,
      paras: [
        "Optimizing for a vanished indicator distracts from indexing, content, commercial factors, and speed. Links for “quality” with no page value risk filters — not a path to better rankings.",
        "After prep, share of a commercial set on page one usually takes months of steady work — often in the 2–6 month range — not “we nudged SQI in a week.”",
      ],
      lists: [
        {
          intro: "What to do instead of chasing the score:",
          items: [
            "fix critical errors in Webmaster",
            "strengthen useful URLs for demand",
            "improve UX and conversion",
            "watch clicks and queries",
            "measure business goals in Metrika or CRM",
          ],
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
        {
          label: "Indexing checks",
          href: "/en/blog/proverka-indeksatsii/",
        },
      ],
    },
    {
      title: "What to watch instead of SQI",
      level: 2,
      paras: [
        "In Webmaster: diagnostics and security, pages in search, queries and clicks, sitemap, crawl. In analytics — goal traffic and conversions. On competitors — visibility on the overlapping keyword set, not archived SQI.",
        "Trends and other quality slices in the dashboard (if your version still shows them) beat one historical number: they tie to the site’s current state.",
      ],
      links: [
        {
          label: "Yandex Webmaster",
          href: "/en/blog/yandeks-vebmaster/",
        },
        {
          label: "Yandex support",
          href: "/en/blog/podderzhka-yandeks/",
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "SQI tried to replace link-based TIC with a demand indicator. As a public compass it is outdated.",
        "Build quality for people and business, read current Webmaster reports — and do not plan SEO around a score from 2018 articles.",
      ],
    },
  ],
  closing: [
    "If an old audit still says “boost SQI,” rewrite the task to Webmaster diagnostics, indexing important URLs, and conversions — that is the working replacement for the vanished badge.",
  ],
  related: [
    "yandeks-vebmaster",
    "tehnicheskiy-seo-audit",
    "proverka-indeksatsii",
    "podderzhka-yandeks",
    "ssylochnyy-profil",
    "molodoy-sayt",
  ],
};
