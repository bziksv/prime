import type { BlogPost } from "../../../data/blog";

/** EN overlay for target-vk — same structure as RU JSON. */
export const targetVkEn: BlogPost = {
  slug: "target-vk",
  title: "VK targeted ads: a step-by-step setup",
  date: "2019-12-24",
  category: "SMM",
  cover: "/images/blog/target-vk/cover-en.webp",
  excerpt:
    "How to launch VK Ads targeting: formats, audience, remarketing and pixel, schedule, CPC/CPM, and reading the stats — without outdated 2019 ad-account click paths.",
  lead: [
    "VK targeting runs ads to segments in the ad account (often under the VK Ads brand today). That isn’t the same as seeding a post in someone else’s community: here you set audience, bids, and format yourself.",
    "We walk through launch order: account and rules, formats, audience, remarketing, schedule, billing, and result control. Menu buttons and creative sizes change — check the current UI; the ads account has shifted more than once since 2019.",
  ],
  faq: [
    {
      q: "How is targeting different from community ads?",
      a: "A community placement reaches that community’s audience. Targeting is an auction by segments (geo, interests, remarketing). They’re often combined.",
    },
    {
      q: "Where should a beginner start?",
      a: "With a goal (traffic, leads, community), one format, a narrow audience, and a daily cap. Don’t turn on every interest “just in case.”",
    },
    {
      q: "Do I need the pixel?",
      a: "For site remarketing and event optimization — yes. More in the VK pixel article.",
    },
    {
      q: "Should I use CPC or CPM?",
      a: "Depends on goal and stage. At the start, use the account forecast and your lead economics; the model often can’t change after ad creation — check before launch.",
    },
    {
      q: "Should I run ads 24/7?",
      a: "Not always. For calls — business hours; for CRM forms — wider is fine. Watch your own time-of-day stats.",
    },
    {
      q: "What if my ad is rejected?",
      a: "Check VK ad policies, remove prohibited content, fix the creative. Bypassing review risks the account and budget.",
    },
    {
      q: "Where do I see results?",
      a: "In account stats plus goals on the site/in the community. Without lead tracking, bid optimization is blind.",
    },
  ],
  sections: [
    {
      title: "Account, rules, and seeding vs targeting",
      level: 2,
      paras: [
        "Create or open a VK ad account; pick a client/agency account if needed. Before launch, read the rules: prohibited topics and creatives get cut in review; repeated violations hit the account.",
        "Seeding in communities works when the community’s audience already matches yours. If you need leads, sales, and a precise segment — targeting is usually required. Don’t paste “millions of VK reach” from old roundups as your own forecast.",
      ],
      links: [
        {
          label: "Ads in VK communities",
          href: "/en/blog/reklama-v-pablikah-vk/",
        },
        {
          label: "Ad account",
          href: "/en/blog/reklamnyy-kabinet/",
        },
      ],
    },
    {
      title: "Ad formats",
      level: 2,
      paras: [
        "In the feed you’ll typically see carousel, a post with a button, universal post, lead forms, Stories, site ads. Separately, community promotion blocks, text+image banners, apps.",
        "Format sets and file limits (weight, JPG/PNG, etc.) have changed — take current requirements from account Help. For a test pick one format for the goal: lead without a site → lead form; traffic to a landing → post/site; brand awareness → reach formats.",
        "You can promote an existing community post or build a creative from scratch. The offer on the image and in the copy must match the landing.",
      ],
      lists: [
        {
          intro: "Before “Create”:",
          items: [
            "campaign goal is clear;",
            "one primary format for the test;",
            "creative reads on mobile;",
            "link / community / form work.",
          ],
        },
      ],
    },
    {
      title: "Audience, remarketing, and schedule",
      level: 2,
      paras: [
        "Build the segment for the offer: geo, gender/age, interests, devices. A narrow relevant audience beats “everyone 18–65 in the city.” Treat the account’s reach forecast as order of magnitude.",
        "Remarketing — warm users: site visitors (pixel), lists, QR and other audience sources available in the account. Exclude buyers from “chase” offers if the job is new sales.",
        "Schedule: match lead handling. Night calls with no operator are a burn; CRM forms can run wider.",
      ],
      links: [
        {
          label: "VK pixel",
          href: "/en/blog/piksel-vk/",
        },
      ],
    },
    {
      title: "Bids, billing, and review",
      level: 2,
      paras: [
        "Billing models are usually CPC and CPM; some goals also use optimized models — names and availability live in the UI. Account bid hints are a market compass, not your economics.",
        "Pick placements (mobile/desktop, network) deliberately. After save, some fields (billing model, format, sometimes URL) can’t change — easier to create a new ad.",
        "Top up the balance for an individual/company, wait for review, and start with a daily cap.",
      ],
      notes: [
        {
          kind: "tip",
          text: "Don’t copy outsider “minimum bids” from 2019 guides. Calculate from acceptable CPA and conversion.",
        },
      ],
    },
    {
      title: "Analysis and iterations",
      level: 2,
      paras: [
        "In the account watch impressions, clicks, CTR, spend, target actions. Cross-check with analytics/CRM: clicks with no leads — fix the offer or audience, not only the bid.",
        "Pause weak combinations, boost working ones, don’t change everything at once. Run remarketing and cold targeting separately by creative and bid.",
      ],
      lists: [
        {
          intro: "Remember:",
          items: [
            "targeting ≠ community seeding;",
            "narrow audience + one hypothesis per test;",
            "pixel for site remarketing;",
            "schedule matched to lead handling;",
            "current UI — in VK Ads Help.",
          ],
        },
      ],
    },
  ],
  closing: [
    "Run a narrow test: one format, one audience, a daily cap, and lead tracking — after a few days expand only what hits your CPA target.",
  ],
  related: [
    "reklama-v-pablikah-vk",
    "piksel-vk",
    "raskrutka-gruppy-vk",
    "reklamnyy-kabinet",
    "sayt-pered-reklamoy",
    "metriki-reklamy",
  ],
};
