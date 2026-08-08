import type { BlogPost } from "../../../data/blog";

/** EN overlay for keisy-facebook-ads — same structure as RU JSON. */
export const keisyFacebookAdsEn: BlogPost = {
  slug: "keisy-facebook-ads",
  title: "Facebook Ads case studies: mistakes and lessons that travel",
  date: "2020-11-03",
  category: "SMM",
  cover: "/images/blog/keisy-facebook-ads/cover-en.webp",
  excerpt:
    "Typical Meta/Facebook ads mistakes and practical lessons from other people’s campaigns: goal, segment, tests, landing, and remarketing — without copying someone else’s ROI as a guarantee.",
  lead: [
    "Winning Facebook Ads / Meta Ads campaigns rarely hang on one genius creative. More often you win with a clear goal, a narrow segment, ad→landing fit, tests, and bringing warm audiences back.",
    "Below: common mistakes and lessons from public cases (Hubbard, Fernandez, MyBike Cycles, Green Arrow, Webris and similar). Revenue and CPA figures from other reports illustrate someone else’s period, not your plan. How the ads manager works is a separate article. The Meta notice is on the page.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platforms. Facebook* and Instagram* are products of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Can you repeat someone else’s 8x ROI?",
      a: "No guarantee. Take the mechanics (offer, fit, test), not someone else’s dollar amount.",
    },
    {
      q: "Where should a beginner start?",
      a: "Campaign goal, one audience, 2–3 creatives, a landing that matches the ad, pixel/events, and a week-long test with a budget cap.",
    },
    {
      q: "Is remarketing required?",
      a: "For ecommerce and long decision cycles — often yes. Traffic and events first, then site/video audiences.",
    },
    {
      q: "Is one ad enough?",
      a: "No. Without iterations you and the account won’t learn what works. Cut the weak, scale the strong.",
    },
    {
      q: "How is this different from the Facebook Ads guide?",
      a: "That one covers how the channel works. This one breaks down case mistakes and lessons.",
    },
  ],
  sections: [
    {
      title: "Common mistakes before the “pretty cases”",
      level: 2,
      paras: [
        "Wrong goal: you optimize for likes when you need leads — learning the wrong signal. A broad “everyone” audience dilutes learning. One or two ads with no rotation is flying blind.",
        "Without tests of creative, headline, offer, and placements you lock in luck. Ignoring an already warm base and lacking a landing that matches the ad kills conversion even with a cheap click.",
      ],
      lists: [
        {
          intro: "Pre-launch checklist:",
          items: [
            "goal = business metric (lead, purchase, booking)",
            "segment narrower than “all internet interests”",
            "2+ creatives and hypotheses",
            "landing answers the ad’s promise",
            "events/pixel checked",
            "remarketing plan for people who bounced",
          ],
        },
      ],
      links: [
        {
          label: "Facebook Ads: how the channel works",
          href: "/en/blog/facebook-ads/",
        },
      ],
    },
    {
      title: "Lesson: a question in the creative + landing in the same key",
      level: 2,
      paras: [
        "In cases like Andrew Hubbard a strong move is a question the audience already asks themselves, plus a visual that guides the eye to the offer. On the landing the answer should start with the same wording.",
        "Ad ↔ first-screen fit cuts post-click disappointment. Don’t copy someone else’s revenue multiplier into your KPI — copy the consistency principle.",
      ],
      notes: [
        {
          title: "Important",
          text: "Historic “$4k → $36k” sums are someone else’s auction and niche. You have different prices, competition, and traffic quality.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Lesson: lead magnet and a human tone",
      level: 2,
      paras: [
        "Short videos and a personal tone in the spirit of Mary Fernandez’s case often bring subscribers cheaper than a dry banner. A lead magnet must solve a clear pain, not be an empty PDF “for the form.”",
        "A low CPA per subscriber isn’t profit: count how many from the list reach payment.",
      ],
    },
    {
      title: "Lesson: remarketing and an offer with a bonus",
      level: 2,
      paras: [
        "MyBike Cycles and similar stories show the power of a second touch: people who visited the site but didn’t buy. Emoji and a friendly tone are secondary next to a clear offer (delivery, discount, deadline).",
        "Show the product so people want to own it. A bonus works if it’s relevant to the purchase, not covering a weak product.",
      ],
      links: [
        {
          label: "Retargeting",
          href: "/en/blog/retargeting/",
        },
      ],
    },
    {
      title: "Lesson: small budget and a clear deadline",
      level: 2,
      paras: [
        "Cases with budgets in the hundreds of dollars hang on a short offer: benefit, deadline, next step (book/pay). An image about the audience — not generic filler.",
        "A small budget needs a hard CPA stop and fast iterations. Don’t stretch a test for weeks with no conclusions.",
      ],
    },
    {
      title: "Lesson: a funnel through content, not “buy” first",
      level: 2,
      paras: [
        "A webinar/video series (as in Webris stories) builds trust: value first, offer later. Segment people who saw the content and cut the uninterested.",
        "A multi-step funnel doesn’t cancel analytics: watch cost per warmed lead, not only video reach.",
      ],
      links: [
        {
          label: "Facebook group and page",
          href: "/en/blog/gruppa-facebook/",
        },
        {
          label: "Instagram ads",
          href: "/en/blog/reklama-instagram/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Goal → segment → test → landing → remarketing. Other people’s cases are about mechanics, not a promise of the same profit.",
        "A non-standard creative only helps if the offer and landing are honest and measurable.",
      ],
    },
  ],
  closing: [
    "Write down one goal and two creative hypotheses, check the landing matches the ad, and plan remarketing — so lessons from other campaigns become your checklist, not a scrapbook of someone else’s numbers.",
  ],
  related: [
    "facebook-ads",
    "retargeting",
    "gruppa-facebook",
    "reklama-instagram",
    "svyazka-instagram-facebook",
    "nativnaya-reklama",
  ],
};
