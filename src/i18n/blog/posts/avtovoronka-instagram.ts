import type { BlogPost } from "../../../data/blog";

/** EN overlay for avtovoronka-instagram — same structure as RU JSON. */
export const avtovoronkaInstagramEn: BlogPost = {
  slug: "avtovoronka-instagram",
  title: "Instagram autofunnel: scenario, Direct, and policy limits",
  date: "2020-04-15",
  category: "Content marketing",
  cover: "/images/blog/avtovoronka-instagram/cover-en.webp",
  excerpt:
    "How to build an Instagram autofunnel: profile, lead magnet, touch chain, and Direct — without cold spam, grey bots, or “conversion will grow by itself.”",
  lead: [
    "An Instagram autofunnel is a mapped path: someone saw content or an ad → showed interest → got value → reached a lead or purchase. Some steps can be automated (greeting, reminder); hard questions stay human.",
    "The basic funnel logic is in the general piece. Here — platform nuances: profile, content, Direct, and what not to do. UI and available auto-replies change; use the scenario and rules as the guide, not 2020 screenshots.",
  ],
  legalNotice: {
    title: "Dear readers!",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "How is this different from a general autofunnel?",
      a: "Same scheme (touch → warm-up → offer). On Instagram the profile, Stories/Reels, and Direct dialogue matter more; an email chain is optional.",
    },
    {
      q: "Can I blast an offer to all followers in Direct?",
      a: "Cold mass spam breaks the rules and annoys people. Message those who started the chat or clearly opted in under the ToS.",
    },
    {
      q: "Do I need third-party “autofunnels” with mass liking?",
      a: "We don’t recommend them. Limit and restriction risk outweighs the upside. Use only tools within platform rules.",
    },
    {
      q: "Which businesses does it fit?",
      a: "More often services, info products, and medium/long cycles. Impulse e-com with a huge catalog is harder to force into one chain.",
    },
    {
      q: "Are a lead magnet and tripwire mandatory?",
      a: "Not always. Hot demand can work with a short offer. A product matrix is a tool, not dogma.",
    },
    {
      q: "When do you need a manager?",
      a: "The pricier and more complex the deal — the earlier. Automation doesn’t replace a consult.",
    },
    {
      q: "Where do I start?",
      a: "Path map and drop-off measurement → clear profile and CTA → Direct/content scenario → test on small traffic.",
    },
  ],
  sections: [
    {
      title: "Why a funnel on Instagram",
      level: 2,
      paras: [
        "It cuts lead loss between “liked” and “messaged.” It buys warm-up time when the decision isn’t impulse.",
        "Not “hidden ads the client won’t notice” — an honest useful path to the offer. Manipulation without value kills trust.",
      ],
      lists: [],
      links: [
        {
          label: "Autofunnel: basics",
          href: "/blog/avtovoronka/",
        },
      ],
    },
    {
      title: "Profile prep",
      level: 2,
      paras: [
        "Professional account, clear avatar and name, bio “who / for whom / what to do next,” contacts and a link.",
        "A consistent feed style and regular content beat a “perfect header.” Without traffic and touches the funnel is empty.",
      ],
      lists: [
        {
          intro: "Minimum before launch:",
          items: [
            "a clear CTA in the bio or pinned post;",
            "a post/Story with delivery/payment terms if relevant;",
            "a first-reply scenario in Direct.",
          ],
        },
      ],
      links: [
        {
          label: "Instagram business account",
          href: "/en/blog/biznes-akkaunt-instagram/",
        },
        {
          label: "Page design",
          href: "/en/blog/oformlenie-stranicy-instagram/",
        },
      ],
    },
    {
      title: "Stages and product matrix",
      level: 2,
      paras: [
        "Classic: lead magnet (value for a contact / chat opt-in) → affordable entry offer → core product → upsell. Between steps — useful content, not only “buy.”",
        "Timelines like “main product in exactly two weeks” are old-scheme guides, not law. Watch segment behavior and tests.",
      ],
      lists: [],
      notes: [
        {
          title: "If the client stalls",
          text: "An extra chain fits with honest motivation (discount, demo, content piece) — not pressure. Frequency and tone follow unsubscribes and complaints.",
        },
      ],
    },
    {
      title: "Direct and automation",
      level: 2,
      paras: [
        "Working scenarios: reply to inbound, clarify a lead after an ad/Story, deliver material on a keyword — within the rules.",
        "Don’t confuse a service auto-reply with a cold blast to strangers. More in the Direct piece.",
      ],
      lists: [],
      links: [
        {
          label: "Direct without spam",
          href: "/blog/instagram-direct/",
        },
      ],
    },
    {
      title: "Common mistakes",
      level: 2,
      paras: [
        "A weak or vague core offer with a pile of “satellites.”",
        "Content for content’s sake with no link to the funnel stage.",
        "Betting on grey software instead of scenario and ads.",
        "Dropping humans entirely on an expensive deal.",
        "Company-wide launch with no pilot and step metrics.",
      ],
      lists: [],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "Path map and offer first, automation second.",
        "Direct is service for inbound and opt-ins — not a spam cannon.",
        "Platform UI ages faster than the scenario — update steps; don’t copy old screenshots.",
      ],
      lists: [],
    },
  ],
  closing: [
    "Sketch 4–5 steps of your Instagram funnel and mark where drop-off is now: usually you fix the profile, the first Direct reply, and offer clarity — not “one more bot.”",
  ],
  related: [
    "avtovoronka",
    "instagram-direct",
    "biznes-akkaunt-instagram",
    "oformlenie-stranicy-instagram",
    "reklama-instagram",
    "formy-zahvata",
  ],
};
