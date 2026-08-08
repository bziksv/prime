import type { BlogPost } from "../../../data/blog";

/** EN overlay for tipy-kampaniy-google-ads — same structure as RU JSON. */
export const tipyKampaniyGoogleAdsEn: BlogPost = {
  slug: "tipy-kampaniy-google-ads",
  title: "Google Ads campaign types: which format fits which job",
  date: "2019-12-19",
  category: "Paid search",
  cover: "/images/blog/tipy-kampaniy-google-ads/cover-en.webp",
  excerpt:
    "Search, Display, YouTube, Shopping, remarketing, Performance Max, audiences — how to pick a Google Ads campaign type by role, not by a 2019 button catalog.",
  lead: [
    "A campaign type in Google Ads isn’t just a wizard radio button. It ties surface, ad format, and the signal the system optimizes for. People mix it up with bid strategy: strategy answers “how you pay,” type answers “where and in what form you show.”",
    "Below is a format map: Search, display, video, shopping, remarketing, and automated / mixed campaigns. Labels moved (Smart Shopping → Performance Max and more) — confirm the live list in Ads and Google Help.",
  ],
  faq: [
    {
      q: "Is campaign type the same as bid strategy?",
      a: "No. Type sets channel and format. Strategy (clicks, CPA, ROAS) sets how bids are assigned inside the campaign.",
    },
    {
      q: "Where should a beginner start?",
      a: "Search for hot demand, or Shopping if the product feed is ready. Display and video wait until you know their funnel job.",
    },
    {
      q: "Do I need brand Search if organic already ranks?",
      a: "Often yes — it blocks competitors on your name and captures ready demand. Measure it apart from the rest of the keyword set.",
    },
    {
      q: "Should I bid on competitor names?",
      a: "You can, but clicks cost more and quality is uneven. Price CPA and legal/reputation risk on their own line.",
    },
    {
      q: "What is Performance Max?",
      a: "A heavily automated campaign across several Google surfaces when you supply assets and goals. It grew out of “smart shopping” ideas but runs wider — see current Help for details.",
    },
    {
      q: "Does remarketing find new customers?",
      a: "Mostly it brings back people who already know you. New users need cold formats and real demand.",
    },
    {
      q: "Where are bid strategies covered?",
      a: "In the separate article on Google Ads automated strategies.",
    },
  ],
  sections: [
    {
      title: "Why types come before launch",
      level: 2,
      paras: [
        "Google Ads covers Search, partner sites (Display), YouTube, and shopping units. You usually pay per click or another outcome tied to the campaign model — not for a permanent slot.",
        "The auction weighs bid and quality/relevance. An expensive click on a weak ad still loses to a more relevant competitor. Campaign type doesn’t cancel that.",
        "Picking a type means picking a funnel job: capture demand, reach, win-back, or catalog. Without a job, budget leaks across every surface at once.",
      ],
      links: [
        {
          label: "Google Ads strategies",
          href: "/en/blog/strategii-google-ads/",
        },
      ],
    },
    {
      title: "Search: brand, generic, and competitor queries",
      level: 2,
      paras: [
        "Search ads are text (plus extensions) above or below the results; shopping cards can sit nearby when you have a feed. The user already typed a query — that’s hot demand.",
        "Brand queries (people looking for you) are usually cheaper and convert better. Generic and mid-volume terms cost more and need a sharp USP. Competitor queries are a separate economy and ethics call — don’t dump them into the brand campaign.",
        "Dynamic Search Ads lean on site content: weak page structure means weak auto headlines.",
      ],
      lists: [
        {
          intro: "Search habits that pay off:",
          items: [
            "brand split from the rest of the set",
            "negatives are non-negotiable",
            "extensions lift visibility",
            "landing page matches query intent",
          ],
        },
      ],
      links: [
        {
          label: "Google Ads keywords",
          href: "/en/blog/klyuchi-google-ads/",
        },
      ],
    },
    {
      title: "Display, YouTube, and shopping",
      level: 2,
      paras: [
        "The Display Network places banners and responsive ads on partner sites by interest, topic, placement, and audience. KPIs differ from Search — don’t expect a first-banner lead like a commercial query.",
        "YouTube spans TrueView, Shorts, and other video formats (the menu keeps changing): views, traffic, leads. Non-skippable inserts aren’t the only or always best option — match type to goal in the current UI.",
        "Shopping ads show a card with price and photo from Merchant Center. Treat branded and non-branded shopping demand as different economics: CPC and margin won’t match.",
      ],
      links: [
        {
          label: "Responsive display ads",
          href: "/en/blog/adaptivnye-mediynye-obyavleniya/",
        },
        {
          label: "Google Merchant Center",
          href: "/en/blog/google-merchant-center/",
        },
        {
          label: "YouTube video ads",
          href: "/en/blog/videoreklama-youtube/",
        },
      ],
    },
    {
      title: "Remarketing, audiences, and automated campaigns",
      level: 2,
      paras: [
        "Remarketing brings back site or app visitors and customer lists. Similar audiences (lookalike-style expansion) grow reach from warm signals — quality tracks the seed list.",
        "Intent-based Display and hand-picked placements trade off control: broader learning vs a manual site list.",
        "“Smart Shopping” in old guides is the ancestor of wider auto campaigns like Performance Max: the system allocates impressions given your assets and goals. Easy setup ≠ guaranteed ROI. You still need feed or creatives, clean goals, and a check that Search isn’t being cannibalized.",
      ],
      notes: [
        {
          kind: "tip",
          text: "Customer lists and Customer Match follow consent rules and Google policies — don’t upload databases casually.",
        },
      ],
    },
    {
      title: "How to choose without thinning the budget",
      level: 2,
      paras: [
        "Goal and KPI first, then one or two campaign types for a test. A media plan and Performance Planner help size spend — you still pick the type.",
        "Don’t paste someone else’s “14 types” checklist or an old Spotify-style guide. The product UI moved on. Refresh the map each season from Ads Help.",
      ],
      lists: [
        {
          intro: "Keep in mind:",
          items: [
            "type ≠ bid strategy",
            "Search = demand; Display/video = different KPIs",
            "brand and competitors = separate economics",
            "PMax and smart formats need data and oversight",
            "live names live only in the account",
          ],
        },
      ],
      links: [
        {
          label: "Google Performance Planner",
          href: "/en/blog/planirovshchik-rezultatov-google/",
        },
        {
          label: "Media plan",
          href: "/en/blog/mediaplan/",
        },
      ],
    },
  ],
  closing: [
    "Name the job (Search / shopping / win-back / reach), run a narrow test with goals, then add surfaces — clearer than flipping on “all of Google at once.”",
  ],
  related: [
    "strategii-google-ads",
    "klyuchi-google-ads",
    "prognoz-trafika-google-ads",
    "adaptivnye-mediynye-obyavleniya",
    "google-merchant-center",
    "planirovshchik-rezultatov-google",
  ],
};
