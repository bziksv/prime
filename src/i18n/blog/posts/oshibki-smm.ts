import type { BlogPost } from "../../../data/blog";

/** EN overlay for oshibki-smm — same structure as RU JSON. */
export const oshibkiSmmEn: BlogPost = {
  slug: "oshibki-smm",
  title: "Social media marketing mistakes: what most often breaks results",
  date: "2020-03-13",
  category: "SMM",
  cover: "/images/blog/oshibki-smm/cover-en.webp",
  excerpt:
    "Typical SMM mistakes: no strategy or audience, boring content, spam and pushiness, cutting every cost, ignoring ads, and toxic moderation — without the myth that “social signals = TOP rankings.”",
  lead: [
    "Social promotion stalls not because of “the wrong button,” but because of the same misses: no goal, no audience on the platform, a feed of site announcements only, or spam and silence in turn.",
    "Below — an error checklist and what to put instead. Social doesn’t replace SEO with “social signals” by itself: leads and awareness are measured separately from search rankings.",
  ],
  legalNotice: {
    title: "Dear readers!",
    text: "This article is informational and does not encourage use of the platforms. Mentions of Instagram* and Direct are illustrative. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Is lifting search rankings via social the main SMM goal?",
      a: "No. Social gives traffic, trust, and warm-up. A direct “TOP-10 boost for likes” is an outdated myth; SEO is scored by its own rules.",
    },
    {
      q: "How many posts a day is normal?",
      a: "Depends on the platform and audience. The guide is consistency and read-through — not a rigid “always 2–3.” Watch reach stats.",
    },
    {
      q: "Should I delete all negative comments?",
      a: "No. Spam and toxicity — yes. Answer constructive criticism on substance: an empty “five-star showcase” lowers trust.",
    },
    {
      q: "Can one person run everything?",
      a: "At the start — yes. At scale, content + replies + ads usually need roles or a contractor with KPIs.",
    },
    {
      q: "Can you grow with no budget?",
      a: "Organic is possible, but slower. You need time, quality, and patience; “free and fast” more often means grey schemes.",
    },
  ],
  sections: [
    {
      title: "No strategy and no audience portrait",
      level: 2,
      paras: [
        "A community with no jobs (“just be there”) spreads thin: posts about nothing, vanity metrics.",
        "First: goal (leads, warm-up, HR, support), audience, and the platform where they actually sit. Retirees on one channel and teens on another — different formats.",
        "A 2–4 week content plan kills chaos better than daily “what should we post.”",
      ],
      lists: [],
      links: [
        {
          label: "Target audience",
          href: "/blog/tselevaya-auditoriya/",
        },
        {
          label: "Content plan",
          href: "/en/blog/kontent-plan/",
        },
      ],
    },
    {
      title: "A boring feed and only site announcements",
      level: 2,
      paras: [
        "A feed of “another blog article” with no value in the post itself quickly kills reach.",
        "Rotate formats: short tips, breakdowns, behind the scenes, audience questions, native CTAs — not only a “read full” link.",
        "Entertainment fits if it’s on-brand — not “a joke for a joke’s sake.”",
      ],
      lists: [],
    },
    {
      title: "Moderation: silence vs censorship",
      level: 2,
      paras: [
        "Deleting all negativity is a mistake: the community looks fake. Answering on substance and limiting trolls is normal.",
        "Remove spam, fraud, and insults without debate.",
        "Community rules in the description cut conflict volume.",
      ],
      lists: [],
    },
    {
      title: "Rhythm: rare spikes or spam",
      level: 2,
      paras: [
        "A week of silence and then ten posts in a row breaks audience habit.",
        "The other extreme is pushiness: the feed is stuffed with one brand and people unfollow.",
        "Keep a predictable rhythm and watch after which volume reach/ER drops.",
      ],
      lists: [],
      links: [
        {
          label: "Engagement in social",
          href: "/blog/vovlechennost-socseti/",
        },
      ],
    },
    {
      title: "Budget, team, ads",
      level: 2,
      paras: [
        "“Cut everything” usually means weak creative, no replies in Direct, and zero paid touch — growth is accidental.",
        "Budget time or money for content, moderation, and at least a test of ads/seed posts.",
        "One person “on everything” burns out: delegate routine or cut the number of platforms.",
      ],
      lists: [],
      notes: [
        {
          title: "Important",
          text: "“Link exchanges” and mass liking don’t replace an offer and legal targeting. Grey schemes hit the account harder than the savings.",
          kind: "tip",
        },
      ],
    },
    {
      title: "A platform without your audience",
      level: 2,
      paras: [
        "A perfect strategy on the “wrong” network gives pretty reports and empty leads.",
        "Check where clients already talk: reviews, chats, competitors. One strong platform beats five empty ones.",
        "Audience interest holds with a unique angle (rubric, expertise, service) — not only a contest with a prize.",
      ],
      lists: [],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "Goal + audience + rhythm are the base; everything else is add-on.",
        "Don’t confuse SMM with a magic SEO button.",
        "Spam and inflation are a fast path to a dead list.",
      ],
      lists: [],
    },
  ],
  closing: [
    "Pick one platform, one goal for the month, and cut checkbox announcements from the plan — that shrinks the error list faster than hiring “one more SMM for everything.”",
  ],
  related: [
    "vovlechennost-socseti",
    "kontent-plan",
    "tselevaya-auditoriya",
    "reklama-instagram",
    "telegram-kanal",
    "geymifikatsiya-socseti",
  ],
};
