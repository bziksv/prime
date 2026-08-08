import type { BlogPost } from "../../../data/blog";

/** EN overlay for videoset-yandeksa — same structure as RU JSON. */
export const videosetYandeksaEn: BlogPost = {
  slug: "videoset-yandeksa",
  title:
    "Yandex Video Network: formats, targeting, and how to evaluate a campaign",
  date: "2018-10-18",
  category: "Paid search",
  cover: "/images/blog/videoset-yandeksa/cover-en.webp",
  excerpt:
    "How the Yandex Video Network works: prerolls and in-page placements, targeting, VTR, and tying results to business goals — without treating 2018 industry-share and CPV reports as today’s price list.",
  lead: [
    "The Yandex Video Network runs video on partner sites and across the Yandex ecosystem: before, during, and after content, plus in-page and mobile interstitial formats. It’s not “just another banner” — it’s video media with its own completion and cost-per-contact logic.",
    "Below: formats, what to watch in setup, and how to read results. Industry budget shares, average CPV, and targeting leaderboards from 2018 half-year reviews are a historical snapshot — not a current media plan. Check formats and bids in the live account.",
  ],
  faq: [
    {
      q: "Are the Video Network and the Display Network the same thing?",
      a: "They’re related parts of the same ecosystem, but video formats and metrics (VTR, completion) differ from standard banners. Check campaign type and display conditions in the current interface.",
    },
    {
      q: "What matters more: VTR or clicks?",
      a: "It depends on the goal. For brand and reach, watch completion and frequency. For performance, watch conversions and cost per action. VTR alone, without a funnel, proves nothing.",
    },
    {
      q: "Is a short video always better?",
      a: "Short clips complete more often; longer ones can explain the offer better. Match length to the job and test creative — don’t copy a “market average length.”",
    },
    {
      q: "How is this different from YouTube Ads?",
      a: "Different inventory, auction, and attribution. Compare each channel’s contribution to your funnel — not an abstract “whose CPM is lower.”",
    },
    {
      q: "Can I rely on old industry rankings?",
      a: "Only as background. Five-year-old auto and finance share data and old targeting leaderboards don’t replace your own test and current account reports.",
    },
  ],
  sections: [
    {
      title: "What the Video Network is and why businesses use it",
      level: 2,
      paras: [
        "Video handles jobs text ads do poorly: show the product in action, put a face on the brand, convey emotion. The Video Network extends reach beyond a single host — to partner inventory and devices, including Smart TV where the format is available.",
        "It makes sense when you have a clear creative (even a short one) and a defined goal: awareness, warm retargeting, or warming prospects before search or performance campaigns. Without conversion tracking or brand proxy metrics, it’s easy to buy “pretty views.”",
      ],
      lists: [
        {
          intro: "Typical use cases:",
          items: [
            "product or season launch",
            "brand support alongside search",
            "retargeting site visitors",
            "warming B2C niches where the buying decision is emotional",
          ],
        },
      ],
      links: [
        {
          label: "Video ad effectiveness",
          href: "/en/blog/effektivnost-videoreklamy/",
        },
        {
          label: "YouTube video ads",
          href: "/en/blog/videoreklama-youtube/",
        },
      ],
    },
    {
      title: "Placement formats",
      level: 2,
      paras: [
        "Classic in-stream: preroll at the start, midroll in the middle, postroll at the end. Historically prerolls dominated — the viewer hasn’t settled into the content yet. On Smart TV, completion is often higher: people watch longer and skip less.",
        "Separately — in-page (video next to text) and interstitial in apps. Account settings and format names change over time: follow the current Yandex Direct / video product list, not a screenshot from an old review.",
      ],
      lists: [
        {
          intro: "What to weigh when choosing a format:",
          items: [
            "length and skip rules: can you land the offer",
            "device: mobile vs. desktop vs. TV",
            "goal: reach vs. click through to the site",
            "creative: do you have a version built for a short contact",
          ],
        },
      ],
      notes: [
        {
          title: "On old average CPV figures",
          kind: "tip",
          text: "Numbers like “preroll 0.29 ₽ per completed view” from 2018 reports can’t be copied into a 2026 plan. Cost per contact depends on niche, competition, and creative quality right now.",
        },
      ],
    },
    {
      title: "Video length and VTR",
      level: 2,
      paras: [
        "VTR (view-through rate) is usually higher for short videos — easier to hold attention. Advertisers often prefer 8–15 seconds as a balance of completion and message.",
        "Don’t chase max VTR at the cost of the message. A video people “finished” but don’t remember — or never click through from — is weaker than a slightly longer clip with a clear CTA and tracking.",
      ],
      tables: [
        {
          caption: "Length choice logic (not a price list)",
          headers: ["Length", "Strength", "Risk"],
          rows: [
            ["Up to ~7 s", "High completion", "Little room for the offer"],
            ["~8–15 s", "Message/VTR balance", "Needs a strong hook in the first seconds"],
            ["Longer", "Story or product detail", "More skips and lower VTR"],
          ],
        },
      ],
    },
    {
      title: "Targeting: from demographics to retargeting",
      level: 2,
      paras: [
        "Market reviews often led with socio-demographic segments, interests (film, sports), and search retargeting / user categories. For your campaign, what matters isn’t an industry leaderboard of five but the link: who buys → which account signal is closest → which creative.",
        "Start with a narrow, relevant segment and site or CRM retargeting (where available), then expand from the data. A broad “entertainment interest” audience without an offer and landing page is a classic way to burn reach budget.",
      ],
      lists: [
        {
          intro: "A practical order:",
          items: [
            "goal and KPI (reach / traffic / conversion)",
            "one or two audience hypotheses",
            "creative matched to format length",
            "UTM + Metrika goals",
            "a one- to two-week test → refine segments",
          ],
        },
      ],
      links: [
        {
          label: "Yandex Direct strategies",
          href: "/en/blog/strategii-yandeks-direkt/",
        },
        {
          label: "Retargeting",
          href: "/en/blog/retargeting/",
        },
      ],
    },
    {
      title: "How to evaluate results",
      level: 2,
      paras: [
        "Media layer: impressions, reach, frequency, VTR, viewability by placement rules, CPV/CPM in your auction. Marketing layer: brand search, direct visits, Brand Lift where available. Business layer: Metrika goals, leads, assisted conversions — last-click often undervalues video.",
        "Don’t compare “Video Network vs. YouTube” by CTR alone. Compare cost per goal action and funnel contribution with comparable creative and time period.",
      ],
      links: [
        {
          label: "Video ad effectiveness",
          href: "/en/blog/effektivnost-videoreklamy/",
        },
        {
          label: "Ad campaign audit",
          href: "/en/blog/audit-reklamnoy-kampanii/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "The Yandex Video Network is a reach and video-contact tool on partner inventory. Match format and length to the job, targeting to your buyer, and evaluation to media → brand → business layers.",
        "Industry “figures and trends” from old reports are useful as market history — not a ready-made media plan.",
      ],
    },
  ],
  closing: [
    "Build a short creative for the chosen format, set KPIs and analytics goals, test one or two audiences — and watch funnel contribution, not just VTR from someone else’s half-year review.",
  ],
  related: [
    "effektivnost-videoreklamy",
    "videoreklama-youtube",
    "strategii-yandeks-direkt",
    "retargeting",
    "audit-reklamnoy-kampanii",
    "metriki-reklamy",
  ],
};
