import type { BlogPost } from "../../../data/blog";

/** EN overlay for raskrutka-youtube — same structure as RU JSON. */
export const raskrutkaYoutubeEn: BlogPost = {
  slug: "raskrutka-youtube",
  title: "How to grow a YouTube channel: ideas for beginners",
  date: "2021-12-03",
  category: "SMM",
  cover: "/images/blog/raskrutka-youtube/cover-en.webp",
  excerpt:
    "Where to start a YouTube channel: niche, packaging, script, video formats, posting cadence, content ideas, and subscriber growth without empty promises.",
  lead: [
    "Growing on YouTube isn’t a “viral hit in a week” — it’s niche, regular videos, clear packaging, and audience work. For beginners a system beats a lucky hit.",
    "Below — channel start, formats, attracting subscribers, and topic ideas. Algorithms and Studio menus change — lean on the substance, not button screenshots.",
  ],
  faq: [
    {
      q: "Where to start if there’s no camera yet?",
      a: "With a niche and 5–10 video ideas. Gear is secondary: a phone + light + clean audio often enough at the start.",
    },
    {
      q: "Do you need a rigid script?",
      a: "Not word for word. You need a plan: hook, blocks, CTA. Improvisation is fine; chaos without structure isn’t.",
    },
    {
      q: "How often should you upload?",
      a: "Consistency beats frequency. Better 1 video a week steadily than 5 in a burst and silence for a month.",
    },
    {
      q: "Do fake subscribers help?",
      a: "No: sanction risk and a dead audience. Grow via relevant content and solid collaborations.",
    },
    {
      q: "What matters more — SEO or thumbnails?",
      a: "Both. Thumbnail and title decide the click; title, description, and match to the query help search and watch time.",
    },
  ],
  sections: [
    {
      title: "Niche and audience",
      level: 2,
      paras: [
        "First pick a topic you’re ready to film for a long time. Mixing everything makes it hard to build loyal subscribers.",
        "Look at niche competitors: what works, where the gaps are, what tone. Don’t copy — find your angle and format.",
      ],
      lists: [
        {
          intro: "Before launching the channel:",
          items: [
            "one clear niche;",
            "viewer portrait;",
            "draft content plan for 8–12 videos;",
            "name, avatar, banner, description.",
          ],
        },
      ],
      links: [
        {
          label: "YouTube channel description",
          href: "/en/blog/opisanie-youtube-kanala/",
        },
        {
          label: "Channel avatar",
          href: "/en/blog/avatar-youtube/",
        },
      ],
    },
    {
      title: "Shooting, script, edit",
      level: 2,
      paras: [
        "Shoot with spare takes. Sound and light often matter more than a “cinematic” look.",
        "Editing — Premiere, Final Cut, DaVinci, CapCut or whatever tool fits you. Goal: the video matches the thumbnail promise and watches well on a phone.",
      ],
      lists: [
        {
          intro: "Before publishing:",
          items: [
            "title without fake clickbait;",
            "thumbnail readable at small size;",
            "description with the point and on-topic keywords;",
            "timestamps if the video is long;",
            "cards/end screens to the next videos.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "Don’t launch an empty channel. At least 2–3 ready videos + a month plan lowers the risk of quitting after the first upload.",
        },
      ],
    },
    {
      title: "Video formats",
      level: 2,
      paras: [
        "Pick the format for the niche and your capacity: you don’t need to film “like the top creators” at every turn.",
      ],
      lists: [
        {
          intro: "Basic types:",
          items: [
            "regular videos and Shorts;",
            "lives / streams;",
            "screencasts (learning, software reviews);",
            "product reviews and breakdowns;",
            "animation / motion — if you have the resource;",
          ],
        },
      ],
    },
    {
      title: "How to attract subscribers",
      level: 2,
      paras: [
        "Quality + cadence + a clear topic. Reply in comments, turn questions into next episodes, build playlists.",
        "Ads in videos (integrations, product mentions) work when trust already exists. Early on, watch time and holding the niche matter more.",
      ],
      lists: [
        {
          intro: "Working growth levers:",
          items: [
            "a series on one pain point;",
            "collabs with nearby channels;",
            "announcements on your socials and email;",
            "subscribe CTA at the end once value is delivered;",
            "analytics review: retention, traffic sources.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Chasing only subscribers. Viewers who finish and return matter more — that’s what the recommendation feed is built on.",
        },
      ],
    },
    {
      title: "Cadence and reputation",
      level: 2,
      paras: [
        "Lock a rhythm you can actually keep. Missing the schedule for months is worse than rare but steady uploads.",
        "Reputation: honest thumbnail promises, respect for the audience, platform rules. Complaints and misleading content hit the channel harder than “too few posts”.",
      ],
      lists: [],
    },
    {
      title: "Content ideas",
      level: 2,
      paras: [
        "Take ideas from audience questions, comments, adjacent niches, and your experience. Below — directions, not ready scripts: adapt them.",
      ],
      lists: [
        {
          intro: "Example directions:",
          items: [
            "learning and “how to do X” breakdowns;",
            "tool / product reviews;",
            "before/after cases and beginner mistakes;",
            "interviews and joint lives;",
            "lifestyle niches: sport, home, cars, games, travel — only if that’s your expertise.",
          ],
        },
      ],
    },
  ],
};
