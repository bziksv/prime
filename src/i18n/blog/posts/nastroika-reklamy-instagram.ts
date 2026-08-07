import type { BlogPost } from "../../../data/blog";

/** EN overlay for nastroika-reklamy-instagram — same structure as RU JSON. */
export const nastroikaReklamyInstagramEn: BlogPost = {
  slug: "nastroika-reklamy-instagram",
  title: "Instagram ads via Meta Ads: how to launch a campaign",
  date: "2020-04-27",
  category: "SMM",
  cover: "/images/blog/nastroika-reklamy-instagram/cover-en.webp",
  excerpt:
    "How to run Instagram ads from Meta Ads Manager: account linking, campaign goal, Instagram-only placements, budget, and testing — without outdated 2020 bid screenshots.",
  lead: [
    "Serious Instagram targeting usually runs from a Meta ad account (historically “via Facebook”): goals, audiences, Feed/Stories/Reels placements, and optimization. That’s broader than the in-app Promote button.",
    "Before you click Create: prepare the account link, pick one clear goal, limit delivery to Instagram when that’s the job, and set a test budget with a review date. Menu labels change — check Meta Business Help. See the Meta notice on this page.",
  ],
  faq: [
    {
      q: "How is this different from in-app Promote?",
      a: "Promote is a quick post boost. Meta Ads offers more goals, audiences, placements, and control. For a campaign system — use Ads Manager.",
    },
    {
      q: "Is a Facebook profile required to run ads?",
      a: "You need access to Business Manager / a Meta ad account and a link to Instagram. The exact path is through Accounts Center; details in Help.",
    },
    {
      q: "Can I run ads on Instagram only?",
      a: "Yes: in placements keep Instagram (Feed, Stories, Reels — by task) and remove extra surfaces if the account allows it.",
    },
    {
      q: "How much budget should a beginner set?",
      a: "There’s no single “right” number. Set a test limit and period long enough to gather learning events — not “all money on day one.”",
    },
    {
      q: "Do I need the Meta pixel?",
      a: "For optimizing toward site leads or purchases — yes. Without events the account learns poorly; for simple DMs a “messages” goal can be enough.",
    },
  ],
  sections: [
    {
      title: "What to prepare before Ads Manager",
      level: 2,
      paras: [
        "A professional Instagram account and ads permissions for the right person.",
        "Link to Meta Business / the ad account, a payment method, a clear offer, and creatives built for vertical.",
        "If the goal is the website: a working landing page, UTM, and pixel/CAPI when possible.",
      ],
      lists: [
        {
          intro: "Minimum:",
          items: [
            "one test goal",
            "1–2 strong creatives",
            "an audience or interest hypothesis",
            "budget limit and review date.",
          ],
        },
      ],
      links: [
        {
          label: "Instagram business account",
          href: "/en/blog/biznes-akkaunt-instagram/",
        },
        {
          label: "Promote (boost) on Instagram",
          href: "/en/blog/promo-instagram/",
        },
      ],
    },
    {
      title: "Campaign: goal first, buttons second",
      level: 2,
      paras: [
        "In Ads Manager you create a campaign and choose a result: awareness, traffic, leads, sales, messages, etc. — the set depends on the account.",
        "Name the campaign and ad set so a month later it’s clear: offer · geo · goal · date.",
        "Turn on A/B and Advantage+ options when you have capacity to read results — not as “magic by default.”",
      ],
      notes: [
        {
          kind: "tip",
          title: "Important",
          paras: [
            "Old bid-strategy names (“bid cap / cost cap” from 2020 guides) have moved. Use current cost-control modes in Ads Manager, not screenshots from an article.",
          ],
        },
      ],
    },
    {
      title: "Ad set: audience and Instagram only",
      level: 2,
      paras: [
        "Set geo, age, interests, or custom audiences / lookalikes under platform rules.",
        "In placements, manually keep Instagram if you don’t need Facebook/Audience Network. Check previews: Feed, Stories, and Reels behave differently.",
        "Delivery optimization should match the goal: clicks, conversions, messages — one primary event per test.",
      ],
      links: [
        {
          label: "Naming Instagram audiences",
          href: "/en/blog/nazvanie-auditorii-instagram/",
        },
        {
          label: "Meta retargeting",
          href: "/en/blog/retargeting-meta/",
        },
      ],
    },
    {
      title: "Ad and creative",
      level: 2,
      paras: [
        "Frame and copy for the format: vertical for Stories/Reels, a readable offer without sound, a clear CTA.",
        "You can boost an existing Instagram post or build the creative in Ads Manager — depends on goal and permissions.",
        "Dynamic headline/image combinations help when you have test volume, not instead of a strong original offer.",
      ],
    },
    {
      title: "Budget, learning, review",
      level: 2,
      paras: [
        "Daily or lifetime limit — whichever keeps spend controllable. Don’t expect a stable CPA in the first hours: learning is underway.",
        "Watch cost per result and lead/dialogue quality, not only reach and likes.",
        "Ad types and creators are covered in the overview article; the Meta Ads ecosystem — in the Facebook/Meta Ads piece.",
      ],
      links: [
        {
          label: "Instagram ads: types and metrics",
          href: "/en/blog/reklama-instagram/",
        },
        {
          label: "Facebook / Meta Ads",
          href: "/en/blog/facebook-ads/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Instagram targeting means Meta Ads plus the right placements.",
        "Goal and offer first, fine bid tuning later.",
        "Promote — for a quick post test; Ads Manager — for a system.",
      ],
    },
  ],
  closing: [
    "Link Instagram to the ad account, pick one goal, keep Instagram placements, and launch a small test with a clear review date — faster than copying outdated bid screenshots.",
  ],
  related: [
    "reklama-instagram",
    "facebook-ads",
    "promo-instagram",
    "retargeting-meta",
    "nazvanie-auditorii-instagram",
    "biznes-akkaunt-instagram",
  ],
};
