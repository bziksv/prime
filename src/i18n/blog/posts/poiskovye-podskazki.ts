import type { BlogPost } from "../../../data/blog";

/** EN overlay for poiskovye-podskazki — same structure as RU JSON. */
export const poiskovyePodskazkiEn: BlogPost = {
  slug: "poiskovye-podskazki",
  title: "Search suggestions: what they are and how to use in SEO",
  date: "2018-02-19",
  category: "SEO",
  cover: "/images/blog/poiskovye-podskazki/cover-en.webp",
  excerpt:
    "How Yandex and Google suggestions form, how they help semantics and content, why you can’t “get into suggest” by faking queries, and how to collect ideas without spam.",
  lead: [
    "Search suggestions (autocomplete) are query variants that appear as you type in the search box. They reflect popular and “fresh” wording, region, and sometimes personal history.",
    "For SEO, suggestions are a source of ideas for the core and headlines — not a “TOP” button. Below — how they work, how Yandex and Google differ, and how to use them without query inflation.",
  ],
  faq: [
    {
      q: "Where do suggestions come from?",
      a: "From real user queries after filters (profanity, banned, etc.), with frequency, region, language, and trends.",
    },
    {
      q: "Are suggestions the semantic core?",
      a: "No — an extra wording source. The core is built systematically (Wordstat, cabinets, exports) and clustered under URLs.",
    },
    {
      q: "Can you buy a place in suggestions?",
      a: "Query inflation is a risk and usually short-lived. Engines cut manipulation; bet on brand awareness and demand.",
    },
    {
      q: "Do suggestions help page ranking?",
      a: "Indirectly: you cover real wording with content. Being “in suggest” alone doesn’t put a URL in TOP.",
    },
    {
      q: "Do Yandex and Google differ?",
      a: "Yes: update cadence, personalization, sometimes answers/weather right in suggest. Collect ideas in both if both channels matter.",
    },
    {
      q: "How to remove a suggestion in your Chrome?",
      a: "That’s browser history: highlight the item and Shift+Delete (Windows) / the macOS equivalent. Unrelated to site SEO.",
    },
    {
      q: "Need suggest parsers?",
      a: "Optional for volume. At the start, manual marker typing + Wordstat/cabinet suggestions is enough.",
    },
    {
      q: "Is brand in suggestions an SEO goal?",
      a: "More a result of demand and marketing. SEO covers pages for wording that already exists.",
    },
  ],
  sections: [
    {
      title: "What search suggestions are",
      level: 2,
      paras: [
        "Suggest offers continuations and refinements from the first characters. Users formulate the job easier; marketers see how people really search the topic.",
        "They appeared in Google (2000s), then in Yandex. Today it’s familiar search UX and a source of “live” wording for semantics.",
      ],
      lists: [
        {
          intro: "Formation is influenced by:",
          items: [
            "query frequency;",
            "region and language;",
            "freshness / trends;",
            "personal history (if on);",
            "search policy filters.",
          ],
        },
      ],
    },
    {
      title: "Yandex and Google: nuances",
      level: 2,
      paras: [
        "Yandex suggest often updates faster on news and “hot” topics; there can be quick answers, weather, brand jumps to a site.",
        "Google has its own expansion and synonym logic, its own rules for hiding toxic suggestions. Don’t treat update cadence from old reviews as law — watch the live SERP.",
      ],
      lists: [
        {
          intro: "Collection practice:",
          items: [
            "private mode + needed region;",
            "service/product markers by letter;",
            "brand and competitors separately;",
            "log into the core table.",
          ],
        },
      ],
      links: [
        {
          label: "SEO for Yandex and Google",
          href: "/en/blog/seo-yandex-google/",
        },
      ],
    },
    {
      title: "Role in semantics and content",
      level: 2,
      paras: [
        "Suggestions hint at tails, refinements, and related questions: “price”, “reviews”, “DIY”, geo. Put them in the core, cluster, and cover with landings or FAQ blocks — not a separate “page per letter”.",
        "If the answer is already in suggest (a fact, weather), some info traffic may never reach the site — for commerce, landings under “buy / order / price” demand matter more.",
      ],
      lists: [
        {
          intro: "How to apply:",
          items: [
            "enrich clusters with suggest wording;",
            "strengthen H2/FAQ with real questions;",
            "don’t spawn duplicate URLs per suggestion;",
            "match intent to the SERP.",
          ],
        },
      ],
      links: [
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "User intent",
          href: "/en/blog/user-intent/",
        },
      ],
    },
    {
      title: "“Getting into suggestions” without inflation",
      level: 2,
      paras: [
        "A brand or product appearing in suggest follows real demand — not a separate “SEO button”. Higher awareness and natural query frequency raise the odds.",
        "Artificial query inflation is a bad idea: short effect and risk of devaluing behavioral signals. The working path is content, ads, PR, and service people search by name themselves.",
      ],
      notes: [
        {
          title: "Not practiced here",
          text: "We don’t describe or recommend suggest-inflation schemes. If you see a “guaranteed place in suggestions” pitch — that’s a red flag.",
          kind: "tip",
        },
      ],
      lists: [
        {
          intro: "Clean demand levers:",
          items: [
            "useful content and social;",
            "offline/online brand mentions;",
            "stable product quality;",
            "ads with a memorable name.",
          ],
        },
      ],
    },
    {
      title: "Collection tools",
      level: 2,
      paras: [
        "Manual marker typing + Wordstat/planners is the base. Suggest parsers (and Ubersuggest/Keyword Tool-class tools) speed volume but don’t replace cleanup and clustering.",
        "Keep a “suggest” source column in the table: easier not to mix Wordstat frequency with “just saw it in autocomplete”.",
      ],
      links: [
        {
          label: "Query frequency",
          href: "/en/blog/chastotnost-zaprosov/",
        },
        {
          label: "Excel and Google Sheets for SEO",
          href: "/en/blog/excel-google-tablitsy/",
        },
      ],
    },
    {
      title: "What not to confuse with SEO effect",
      level: 2,
      paras: [
        "Clearing suggestions in your own browser is local history, not the site’s SERP.",
        "Suggest doesn’t replace tech, intent, and content. Site prep takes weeks; core rank buildup planned 2–6 months. Suggestions only help hit demand language more precisely.",
      ],
      notes: [
        {
          title: "Timelines",
          text: "Expanding the core from suggest speeds wording coverage, but doesn’t guarantee TOP “after adding an H2”.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
      ],
    },
  ],
  related: [
    "semanticheskoe-yadro",
    "user-intent",
    "chastotnost-zaprosov",
    "seo-yandex-google",
    "excel-google-tablitsy",
    "golosovoy-poisk",
  ],
};
