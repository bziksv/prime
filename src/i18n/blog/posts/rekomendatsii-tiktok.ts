import type { BlogPost } from "../../../data/blog";

/** EN overlay for rekomendatsii-tiktok — same structure as RU JSON. */
export const rekomendatsiiTiktokEn: BlogPost = {
  slug: "rekomendatsii-tiktok",
  title: "TikTok recommendations: how For You works and what actually matters",
  date: "2020-05-25",
  category: "SMM",
  cover: "/images/blog/rekomendatsii-tiktok/cover-en.webp",
  excerpt:
    "How the TikTok For You feed works: retention, watch-through, shares, and comments — without magical 2020 hashtags or “guaranteed trend” promises.",
  lead: [
    "Landing in TikTok recommendations (the For You feed) means impressions beyond your current followers. The platform does not publish a full formula; what you can act on are interest signals: watch-through, replays, likes, comments, shares, and saves.",
    "Here’s practical logic for the 2020s—no outdated hashtag lists and no fake engagement. Analytics UIs change; check TikTok for Business / Creator Help.",
  ],
  faq: [
    {
      q: "Is there a guarantee of hitting For You?",
      a: "No. The algorithm tests a clip on samples; a weak hook and low watch-through cut distribution.",
    },
    {
      q: "How can I tell impressions come from recommendations?",
      a: "In video analytics, check traffic sources (For You / Following / Search, etc.) — labels depend on the Pro/Business version.",
    },
    {
      q: "Do hashtags decide everything?",
      a: "No. They help with topic and search, but they don’t replace first-second retention and watch-through.",
    },
    {
      q: "Should I buy fake likes?",
      a: "No: risk of limits and an empty audience. A strong hook and a clear comment CTA work better.",
    },
    {
      q: "Is filming on a popular sound enough?",
      a: "A trend helps format recognition, but without your own idea the clip sinks among copies.",
    },
  ],
  sections: [
    {
      title: "How distribution works",
      level: 2,
      paras: [
        "A new clip usually gets a small test pool. If people keep watching, rewatch, react, and share — the pool grows. If they swipe on the first second — distribution dies.",
        "The feed is personal: one viewer wants humor, another wants a how-to. The goal is a clear “who this is for” signal in the first frames.",
        "Followers help the start, but For You doesn’t have to serve only “your people”: cold viewers decide by behavior, not blog size.",
      ],
    },
    {
      title: "Signals that matter",
      level: 2,
      paras: [
        "Retention and watch-through share are the base. A short clip watched fully often beats a long one abandoned mid-way.",
        "Comments and thread replies strengthen dialogue; an end question or a controversial (but ethical) hook beats an empty “like this.”",
        "Shares and saves are strong “useful / I want to repeat” signals. Empty reposts can’t be faked honestly.",
      ],
      lists: [
        {
          intro: "Practical priority:",
          items: [
            "1–3 second hook;",
            "one clear story;",
            "a reason to watch to the end;",
            "a reason to comment or save.",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Important",
          paras: [
            "Signal weights have changed and will keep changing. Don’t build strategy on one “likes mattered most in 2020” claim.",
          ],
        },
      ],
    },
    {
      title: "Profile and posting rhythm",
      level: 2,
      paras: [
        "Handle, avatar, and bio should match what the clips promise — otherwise For You visitors won’t follow.",
        "Consistency beats rare “masterpieces once a month”: the algorithm and audience get used to a format.",
        "For business, lock 2–3 format series (before/after, myth/fact, behind the scenes) — easier to repeat what works.",
      ],
    },
    {
      title: "Shooting and script",
      level: 2,
      paras: [
        "Improvisation rarely lands steadily: sketch a hook, middle, and ending with a CTA.",
        "Vertical frame, light, audible speech or readable captions — without them watch-through drops on any trend.",
        "Challenges and trending sounds accelerate recognition; they don’t replace meaning. One-to-one copy-paste reads as noise.",
      ],
    },
    {
      title: "Hashtags and caption",
      level: 2,
      paras: [
        "A short caption + one question to the viewer. A wall of tags isn’t needed.",
        "Hashtags: a mix of niche and current trending — without spammy dozens of irrelevant ones.",
        "“Top hashtags of May 2020” catalogs are outdated: look at what’s trending in the app today, not in old articles.",
      ],
    },
    {
      title: "Analytics: where traffic comes from",
      level: 2,
      paras: [
        "In Pro/Business open video analytics → sources. A rising For You share with solid retention is a good sign.",
        "Compare series: which hook gave higher watch-through %, which CTA more comments.",
        "Paid and organic are different jobs; a paid boost doesn’t cancel hook work for organic.",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "For You feeds on viewer behavior, not hashtag magic.",
        "Hook and watch-through first — scale second.",
        "Fake engagement and blind trend copy hurt the account more than one honest rare clip.",
      ],
    },
  ],
  closing: [
    "Shoot one clip with a strong first frame and a clear ending, post it, and a day later review retention and sources in analytics — faster than hunting a “secret hashtag.”",
  ],
  related: [
    "video-stories-instagram",
    "prosmotry-stories-instagram",
    "vovlechennost-socseti",
    "kontent-plan",
    "analitika-kontent-marketinga",
    "reklama-instagram",
  ],
};
