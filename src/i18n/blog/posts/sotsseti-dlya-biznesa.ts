import type { BlogPost } from "../../../data/blog";

/** EN overlay for sotsseti-dlya-biznesa — same structure as RU JSON. */
export const sotssetiDlyaBiznesaEn: BlogPost = {
  slug: "sotsseti-dlya-biznesa",
  title: "Why business needs social media: trust, service, and sales",
  date: "2017-03-06",
  category: "SMM",
  cover: "/images/blog/sotsseti-dlya-biznesa/cover-en.webp",
  legalNotice: {
    title: "Dear readers!",
    text: "This article is informational and does not encourage use of the platform. Facebook* and Instagram* ads run through Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  excerpt:
    "Why a company needs a social page: how a live channel tips the choice between similar sellers, how sales work differs from brand image, and how to start without a full-time SMM hire.",
  lead: [
    "Social media is rarely the only purchase criterion — but it often becomes the tipping point when two local sellers look alike on price and assortment. Buyers check for live replies, reviews, and clear post-sale service.",
    "We look at how channels shape how a business is perceived, when the feed helps sell versus when brand image matters more, and how to start without a large team. Platforms and laws change — pick channels by audience and jurisdiction.",
  ],
  faq: [
    {
      q: "Are social networks mandatory for every business?",
      a: "Not as a checkbox for its own sake. If clients compare sellers online and expect fast replies, missing a live channel often loses to a competitor who has one.",
    },
    {
      q: "Which platform should I start with?",
      a: "Wherever your audience already is. For many local RU niches that’s VK and messengers; for B2B — sometimes other channels. Don’t scatter across five empty profiles.",
    },
    {
      q: "Do social networks replace the site?",
      a: "No. The site is the base for SEO, catalog, and trust. Social is touchpoints, service, and traffic. A pair beats “feed only.”",
    },
    {
      q: "Do I need a full-time SMM manager?",
      a: "Not at once. At the start, regular expert posts and replies in a reasonable time are enough. When volume grows, hire the role separately.",
    },
    {
      q: "What matters more: likes or leads?",
      a: "Leads, visits, chats, and repeat contacts. Likes alone are a weak KPI.",
    },
    {
      q: "Does a hard discount tone fit a large brand?",
      a: "Often no. Premium and B2B usually keep image: content quality, expertise, and service — without shouting discounts.",
    },
    {
      q: "How often should I post?",
      a: "Regularly and within capacity: better 2–3 strong touchpoints a week than daily noise. Main thing — don’t disappear for months.",
    },
    {
      q: "How do I measure the effect?",
      a: "UTM tags to the site, inquiries from messages, saved contacts, and repeat questions after purchase — not only follower growth.",
    },
  ],
  sections: [
    {
      title: "Social’s role in choosing a seller",
      level: 2,
      paras: [
        "Typical case: two regional sellers with similar prices. The buyer opens one group — updates, product breakdowns, reviews, live photos, a way to ask other clients. The other — silence or a storefront with no replies.",
        "Even simple activity from a salon, auto shop, or electronics store lowers the fear of “bought and abandoned.” Here social proves service — not a “trendy account.”",
      ],
      lists: [
        {
          intro: "What clients usually check:",
          items: [
            "are there fresh posts;",
            "do they answer questions;",
            "are there live photos and reviews;",
            "is post-purchase support clear.",
          ],
        },
      ],
    },
    {
      title: "When the feed works for sales",
      level: 2,
      paras: [
        "In visual product niches (fashion, beauty, local retail) a catalog and chat in the feed or messages often speed the deal: people see stock and price, and can ask about size or timing.",
        "In VK, Odnoklassniki, and messengers the same logic fits a more local and older audience — sometimes even for expensive services if content explains the product, not only “pushes emotion.”",
      ],
      lists: [
        {
          intro: "Working minimum for channel sales:",
          items: [
            "clear offer and contacts;",
            "current photos and stock;",
            "replies in business hours;",
            "link to the site or lead form;",
            "honest delivery and warranty terms.",
          ],
        },
      ],
      links: [
        {
          label: "Ads in VK publics",
          href: "/en/blog/reklama-v-pablikah-vk/",
        },
        {
          label: "Growing a VK group",
          href: "/en/blog/raskrutka-gruppy-vk/",
        },
      ],
    },
    {
      title: "Image isn’t always “deal of the day”",
      level: 2,
      paras: [
        "Not every business needs a showroom tone. For some companies a calm expert image matters more: quality materials, feature breakdowns, proof of price value — without aggressive CTAs.",
        "Mistake — copying someone else’s tone of voice. Match language to your ticket and audience: local service ≠ premium brand ≠ wholesale B2B.",
      ],
      notes: [
        {
          title: "About Instagram and Meta",
          text: "If the material mentions Meta products (including Instagram), see the legal notice on the page. Pick platforms with audience and applicable law in mind.",
          kind: "legal",
        },
      ],
      links: [
        {
          label: "Instagram business account",
          href: "/en/blog/biznes-akkaunt-instagram/",
        },
        {
          label: "What an SMM manager does",
          href: "/en/blog/menedzher-smm/",
        },
      ],
    },
    {
      title: "How to start without a large team",
      level: 2,
      paras: [
        "Pick 1–2 channels where your clients already are. Set the profile: who you are, what you sell, how to contact. Start a simple content rhythm: value, cases or work samples, FAQ answers, and service behind the scenes.",
        "Full-time SMM isn’t required in month one. Regularity and replies to messages are. When touchpoints and ads grow, bring in a specialist or agency.",
      ],
      lists: [
        {
          intro: "First 30 days checklist:",
          items: [
            "one main channel plus contacts;",
            "10–12 topic drafts;",
            "reply rule (e.g. within the business day);",
            "UTM or tag on site clicks;",
            "monthly slice: inquiries and chat quality.",
          ],
        },
      ],
      links: [
        {
          label: "Personal brand on social",
          href: "/en/blog/lichnyy-brend/",
        },
        {
          label: "How to build a content plan",
          href: "/en/blog/kontent-plan/",
        },
      ],
    },
  ],
  related: [
    "menedzher-smm",
    "reklama-v-pablikah-vk",
    "raskrutka-gruppy-vk",
    "biznes-akkaunt-instagram",
    "lichnyy-brend",
    "kontent-plan",
  ],
};
