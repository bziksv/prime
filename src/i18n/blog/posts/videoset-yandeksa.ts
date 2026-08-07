import type { BlogPost } from "../../../data/blog";

/** EN overlay for videoset-yandeksa — same structure as RU JSON. */
export const videosetYandeksaEn: BlogPost = {
  slug: "videoset-yandeksa",
  title: "Yandex Video Network: formats, targeting, and how to judge a campaign",
  date: "2018-10-18",
  category: "Contextual advertising",
  cover: "/images/blog/videoset-yandeksa/cover-en.webp",
  excerpt:
    "How the Yandex Video Network works: prerolls and in-page, targeting, VTR, and the link to a business goal — without leaning on 2018 industry share and CPV reports.",
  lead: [
    "The Yandex Video Network shows videos on partner sites and in the Yandex ecosystem: before, during, and after content, plus in-page and mobile interstitial formats. It’s not “just another banner” — it’s media with its own completion and contact-cost logic.",
    "Below — formats, what to watch in setup, and how to read results. Industry budget shares, average CPV, and targeting tops from 2018 half-year reviews are a historical market slice — not today’s price list: check current formats and bids in the cabinet.",
  ],
  faq: [
    {
      q: "Are Video Network and the Display Network the same?",
      a: "Related ecosystem contours, but video formats and metrics (VTR, completion) differ from a regular banner. Check campaign type and display conditions in the current UI.",
    },
    {
      q: "What matters more: VTR or clicks?",
      a: "Depends on the goal. For brand and reach — completion and frequency; for performance — conversions and cost per action. VTR alone without a funnel proves nothing.",
    },
    {
      q: "Is a short video always better?",
      a: "Short ones complete more often; longer ones can explain the offer better. Pick length for the job and test creative — don’t copy “market average length”.",
    },
    {
      q: "How is this different from YouTube Ads?",
      a: "Different inventory, auction, and attribution. Compare contribution to your funnel — not an abstract “whose CPM is lower”.",
    },
    {
      q: "Can you lean on old industry rankings?",
      a: "Only as background. Five-year-old auto/finance shares and targeting tops don’t replace your test and current cabinet reports.",
    },
  ],
  sections: [
    {
      title: "What the Video Network is and why businesses use it",
      level: 2,
      paras: [
        "Video covers jobs text ads do poorly: show the product in action, a brand face, service emotion. The Video Network extends reach beyond one host — to partner inventory and devices, including Smart TV where the format exists.",
        "It makes sense when you have a clear creative (even short) and a goal: awareness, warm retargeting, warming before search/performance. Without conversion measurement or brand proxy metrics, it’s easy to buy “pretty views”.",
      ],
      lists: [
        {
          intro: "Typical scenarios:",
          items: [
            "product / season launch;",
            "brand support alongside search;",
            "retargeting site visitors;",
            "warming B2C niches where the decision is emotional.",
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
        "Classic in-stream: preroll at the start, midroll in the middle, postroll at the end. Historically prerolls dominated share — the viewer hasn’t “entered” the content yet. On Smart TV completion is often higher: people watch longer and click past less.",
        "Separately — in-page (video next to text) and interstitial in apps. Cabinet sets and names update: follow the current Direct / Yandex video product list, not a screenshot from an old review.",
      ],
      lists: [
        {
          intro: "What to watch when choosing a format:",
          items: [
            "length and skip: can you land the offer;",
            "device: mobile vs desktop vs TV;",
            "goal: reach vs click to site;",
            "creative: is there a version for a short contact.",
          ],
        },
      ],
      notes: [
        {
          title: "On old average CPV",
          text: "Figures like “preroll 0.29 ₽ per completed view” from 2018 reports can’t be copied into a 2026 plan. Contact cost depends on niche, competition, and creative quality here and now.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Video length and VTR",
      level: 2,
      paras: [
        "VTR (completed-view rate) is usually higher for short videos: easier to hold attention. Advertisers often prefer 8–15 seconds — a balance of completion and meaning.",
        "Don’t chase max VTR at the cost of the message. A video people “finished” but don’t remember the brand or reach the site is weaker than a slightly longer one with a clear CTA and tracking.",
      ],
      tables: [
        {
          caption: "Length choice logic (not a price list)",
          headers: ["Length", "Plus", "Risk"],
          rows: [
            ["Up to ~7 s", "High completion", "Little room for the offer"],
            ["~8–15 s", "Meaning/VTR balance", "Needs a strong hook in the first seconds"],
            ["Longer", "Story / product", "More skips and lower VTR"],
          ],
        },
      ],
    },
    {
      title: "Targeting: from demographics to retargeting",
      level: 2,
      paras: [
        "Market reviews often led with socio-demo segments, interests (film, sports), and search retargeting / user categories. For your campaign, what matters isn’t “industry top-5” but the link: who buys → which cabinet signal is closer → which creative.",
        "Start with a narrow relevant segment and site/CRM retargeting (where available), then expand from data. A broad “entertainment interest” without offer and landing is a classic reach burn.",
      ],
      lists: [
        {
          intro: "Practical order:",
          items: [
            "goal and KPI (reach / traffic / conversion);",
            "1–2 audience hypotheses;",
            "creative for format length;",
            "UTM + Metrika goals;",
            "one–two week test → clean segments.",
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
      title: "How to judge results",
      level: 2,
      paras: [
        "Media layer: impressions, reach, frequency, VTR, viewability by placement rules, CPV/CPM in your auction. Marketing: brand search, direct visits, Brand Lift where available. Business: Metrika goals, leads, assisted conversions — last-click often undervalues video.",
        "Don’t compare “Video Network vs YouTube” by CTR alone. Compare cost per goal action and funnel contribution with comparable creative and period.",
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
        "The Yandex Video Network is a reach and video-contact tool on partner inventory. Format and length for the job, targeting for your buyer, evaluation by media → brand → business layers.",
        "Industry “figures and trends” from old reports are useful as market history — not a ready media plan.",
      ],
    },
  ],
  closing: [
    "Build a short creative for the chosen format, set KPI and analytics goals, test 1–2 audiences — and watch funnel contribution, not only VTR from someone else’s half-year review.",
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
