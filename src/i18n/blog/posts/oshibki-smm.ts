import type { BlogPost } from "../../../data/blog";

/** EN overlay for oshibki-smm — same structure as RU JSON. */
export const oshibkiSmmEn: BlogPost = {
  slug: "oshibki-smm",
  title: "Social media promotion mistakes: what most often kills results",
  date: "2020-03-13",
  category: "SMM",
  cover: "/images/blog/oshibki-smm/cover-en.webp",
  excerpt:
    "Typical SMM mistakes: no strategy or audience, boring content, spam and pushiness, saving on everything, ignoring ads, and toxic moderation — without the myth that “social signals = TOP rankings.”",
  lead: [
    "Social media marketing stalls not because of “the wrong button,” but because of the same misses: no goal, no audience on the platform, a feed of site announcements only, or spam and silence in turns.",
    "Fix the goal and the audience before you tweak post timing. Social channels don’t replace SEO via “social signals” on their own: leads and awareness are counted separately from search rankings.",
  ],
  faq: [
    {
      q: "Is climbing search via social the main SMM goal?",
      a: "No. Social brings traffic, trust, and warm-up. A direct “TOP-10 boost from likes” is an outdated myth; SEO follows its own rules.",
    },
    {
      q: "How many posts a day is normal?",
      a: "Depends on the platform and audience. Aim for consistency and read-through, not a rigid “always 2–3.” Watch reach stats.",
    },
    {
      q: "Should you delete all negative comments?",
      a: "No. Spam and toxicity — yes. Reply to constructive criticism on the merits: an empty “five-star storefront” lowers trust.",
    },
    {
      q: "Can one person run all of SMM?",
      a: "At the start — yes. At scale, content + replies + ads usually need roles or a contractor with KPIs.",
    },
    {
      q: "Can you grow with no ad budget?",
      a: "Organic is possible, but slower. You need time, quality, and patience; “free and fast” more often means gray schemes.",
    },
  ],
  sections: [
    {
      title: "No strategy and no audience profile",
      level: 2,
      paras: [
        "A community without jobs (“just be online”) drifts: posts about nothing, vanity metrics.",
        "First: goal (leads, warm-up, HR, support), audience, and the platform where they actually sit. Retirees in one channel and teens in another need different formats.",
        "A 2–4 week content plan removes chaos better than daily “what should we post.”",
      ],
      links: [
        {
          label: "Target audience",
          href: "/en/blog/tselevaya-auditoriya/",
        },
        {
          label: "Content plan",
          href: "/en/blog/kontent-plan/",
        },
      ],
    },
    {
      title: "A boring feed and site announcements only",
      level: 2,
      paras: [
        "A feed of “another blog article” with no value in the post itself quickly kills reach.",
        "Rotate formats: short tips, breakdowns, behind the scenes, audience questions, native CTAs — not only a “read full” link.",
        "Entertainment fits when it matches brand tone, not “a joke for the joke’s sake.”",
      ],
    },
    {
      title: "Moderation: silence vs censorship",
      level: 2,
      paras: [
        "Deleting all negativity is a mistake: the community looks fake. Answering on substance and limiting trolls is normal.",
        "Remove spam, fraud, and insults without debate.",
        "Community rules in the description cut conflict volume.",
      ],
    },
    {
      title: "Rhythm: rare spikes or spam",
      level: 2,
      paras: [
        "A week of silence then ten posts in a row breaks audience habit.",
        "The other extreme is pushiness: the feed is stuffed with one brand and people unfollow.",
        "Keep a predictable rhythm and watch after which volume reach/ER drops.",
      ],
      links: [
        {
          label: "Engagement on social",
          href: "/en/blog/vovlechennost-socseti/",
        },
      ],
    },
    {
      title: "Budget, team, ads",
      level: 2,
      paras: [
        "“Save on everything” usually means weak creative, no Direct replies, and zero paid touch — growth is accidental.",
        "Budget time or money for content, moderation, and at least a test ad/seed.",
        "One person “on everything” burns out: delegate routine or narrow the number of platforms.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Important",
          paras: [
            "“Link exchanges” and mass-liking don’t replace an offer and legitimate targeting. Gray schemes hurt the account more than thrift.",
          ],
        },
      ],
    },
    {
      title: "A platform without your audience",
      level: 2,
      paras: [
        "A perfect strategy on the “wrong” network yields pretty reports and empty leads.",
        "Check where clients already talk: reviews, chats, competitors. One strong platform beats five empty ones.",
        "Audience interest holds with a unique angle (column, expertise, service), not only a prize contest.",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Goal + audience + rhythm are the base; the rest is add-on.",
        "Don’t confuse SMM with a magic SEO button.",
        "Spam and fake engagement are a fast path to a dead base.",
      ],
    },
  ],
  closing: [
    "Pick one platform, one goal for the month, and cut checkbox announcements from the plan — that shrinks the mistake list faster than hiring “yet another SMM for everything.”",
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
