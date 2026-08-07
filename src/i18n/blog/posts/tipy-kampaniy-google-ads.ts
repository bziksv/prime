import type { BlogPost } from "../../../data/blog";

/** EN overlay for tipy-kampaniy-google-ads — same structure as RU JSON. */
export const tipyKampaniyGoogleAdsEn: BlogPost = {
  slug: "tipy-kampaniy-google-ads",
  title: "Google Ads campaign types: a format overview",
  date: "2019-12-19",
  category: "Paid search",
  cover: "/images/blog/tipy-kampaniy-google-ads/cover-en.webp",
  excerpt:
    "What Google Ads campaign types exist: Search, Display, YouTube, Shopping, remarketing, Performance Max, and audiences — how to choose by job, without a 2019 button catalog.",
  lead: [
    "In Google Ads a “campaign type” isn’t only a wizard button — it’s the link between surface, ad format, and optimization signal. People confuse it with bid strategy: strategy answers “how to pay,” type answers “where and in what form to show.”",
    "This is a map of formats: Search, display, video, shopping, remarketing, and smart/mixed campaigns. Account names evolved (Smart Shopping → Performance Max and more) — check the current list in Ads and Google Help.",
  ],
  faq: [
    {
      q: "Is campaign type the same as bid strategy?",
      a: "No. Type sets channel and format. Strategy (clicks, CPA, ROAS) is how the system sets bids inside the campaign.",
    },
    {
      q: "Where should a beginner start?",
      a: "With Search for hot demand, or Shopping if the feed is ready. Display and video — when the funnel role is clear.",
    },
    {
      q: "Do I need brand Search if organic already ranks?",
      a: "Often yes: it protects against competitors on your name and catches ready demand. Track it separately from the rest of the keyword set.",
    },
    {
      q: "Should I buy competitor queries?",
      a: "Possible, but pricier and riskier on click quality. Count CPA and legal/reputation risk separately.",
    },
    {
      q: "What is Performance Max?",
      a: "A campaign with strong automation across several Google surfaces when you have assets and goals. It inherits “smart shopping” ideas but is broader — details in current Help.",
    },
    {
      q: "Does remarketing bring new users?",
      a: "Mostly it returns people who already know you. New users need cold formats and demand.",
    },
    {
      q: "Where are bid strategies covered?",
      a: "In the separate article on Google Ads automated strategies.",
    },
  ],
  sections: [
    {
      title: "Why review types before launch",
      level: 2,
      paras: [
        "Google Ads covers Search, partner sites (Display), YouTube, and shopping blocks. You usually pay per click or another result by campaign model — not “for a permanent slot.”",
        "The auction weighs bid and quality/relevance. An expensive click on a weak ad loses to a more relevant competitor — campaign type doesn’t cancel that.",
        "Choosing a type = funnel role: capture demand, reach, return, catalog. Without a role, budget spreads across every surface at once.",
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
        "Search ads are text (and extensions) above/below the SERP; shopping cards may sit nearby with a feed. The user already phrased a query — that’s hot demand.",
        "Brand queries (people searching for you) are usually cheaper and convert better. Generic and mid-volume terms (“laundry detergent,” “powder”) cost more and need a strong USP. Competitor queries are a separate economy and ethics: don’t mix them with brand in one pile.",
        "Dynamic Search Ads lean on site content: weak page structure → weak auto headlines.",
      ],
      lists: [
        {
          intro: "Search practice:",
          items: [
            "brand separate from the general set;",
            "negatives are required;",
            "extensions raise visibility;",
            "landing = query intent.",
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
      title: "Display, YouTube, and shopping formats",
      level: 2,
      paras: [
        "The Display Network shows banners and responsive ads on partner sites by interests, topics, placements, and audiences. KPIs often differ from Search: don’t expect “a lead from the first banner like a commercial query.”",
        "YouTube — TrueView, Shorts, and other video formats (the set has changed): views, traffic, leads. Annoying non-skippable inserts aren’t the only or always best choice; check current types and goals.",
        "Shopping ads show a card with price and photo from Merchant Center. Treat branded and non-branded shopping demand separately in your head: different CPC and margin.",
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
      title: "Remarketing, audiences, and “smart” campaigns",
      level: 2,
      paras: [
        "Remarketing returns site/app visitors and customer lists. Similar audiences (lookalike / similar-user optimization) expand reach from “warm” signals — quality depends on the seed.",
        "Intent-based Display and hand-picked site placements are different control levels: broader system learning vs a manual placement list.",
        "“Smart Shopping” in old guides is a predecessor of broader auto campaigns like Performance Max: the system distributes impressions given your assets and goals. Easy setup ≠ guaranteed ROI: you need feed/creatives, goals, and control of cannibalization with Search.",
      ],
      notes: [
        {
          kind: "tip",
          text: "Customer lists and Customer Match follow consent rules and Google policies — don’t upload lists casually.",
        },
      ],
    },
    {
      title: "How to choose without spreading the budget thin",
      level: 2,
      paras: [
        "Goal and KPI first, then 1–2 campaign types for a test. A media plan and Performance Planner help allocate spend — but you pick the type.",
        "Don’t copy Spotify guides and outsider “14 types” one-to-one: the market and product UI moved on. Refresh the map each season from Ads Help.",
      ],
      lists: [
        {
          intro: "Remember:",
          items: [
            "type ≠ bid strategy;",
            "Search = demand; Display/video = other KPIs;",
            "brand and competitors = separate economies;",
            "PMax/smart formats need data and control;",
            "current names — only in the account.",
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
    "Pick the channel role (Search / shopping / return / reach), run a narrow test with goals, then add surfaces — clearer than turning on “all of Google at once.”",
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
