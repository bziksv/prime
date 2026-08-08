import type { BlogPost } from "../../../data/blog";

/** EN overlay for videoreklama-youtube — same structure as RU JSON. */
export const videoreklamaYoutubeEn: BlogPost = {
  slug: "videoreklama-youtube",
  title: "YouTube video ads: when they’re worth running",
  date: "2021-01-28",
  category: "Paid search",
  cover: "/images/blog/videoreklama-youtube/cover-en.webp",
  excerpt:
    "When YouTube video ads pay off, which formats exist, and how to judge audience fit and budget — without “most effective on the internet” hype or stale price quotes.",
  lead: [
    "Pre-roll and in-stream ads annoy some viewers, but they can deliver reach, awareness, and sometimes leads — if the offer, creative, and landing page work as one funnel.",
    "Below: format pros, audience work, the path to sales, and how to think about budget. CPM and CPC figures from old guides go stale — run your own test and check current Google Ads Help.",
    "For Russia, account for ads-account availability and platform policy at launch time.",
  ],
  faq: [
    {
      q: "Are YouTube Ads the same as channel monetization?",
      a: "No. Monetization is what creators earn from ads on their videos. YouTube Ads is what you pay to show your own ads.",
    },
    {
      q: "Do viewers have to watch 30 seconds?",
      a: "It depends on the format. Skippable in-stream ads can be skipped after a few seconds; other types work differently. Check current formats in your account.",
    },
    {
      q: "Will ads drive sales?",
      a: "Yes — if you have a strong offer and landing page. A clip running before someone else’s video doesn’t sell anything by itself.",
    },
    {
      q: "Is there an SEO bonus from YouTube Ads?",
      a: "No direct “Ads = page-one organic.” Indirectly, ads can lift brand demand and site traffic. Organic growth still comes from content and SEO work.",
    },
    {
      q: "What budget should I start with?",
      a: "Enough to gather meaningful stats over a one- to two-week test, with a daily cap — not a vague “industry average.”",
    },
    {
      q: "Do I need my own channel?",
      a: "Ideally yes: trust, retargeting, and content all help. For an ads test, a showcase channel works too.",
    },
    {
      q: "What if YouTube Ads isn’t available in my market?",
      a: "Look at other video and performance platforms, organic content on your channel, and paid campaigns in accounts you can access.",
    },
  ],
  sections: [
    {
      title: "Pros and cons of the format",
      level: 2,
      paras: [
        "Video carries emotion, shows the product in action, and puts a face on the brand. Reach is large; targeting is flexible — interests, keywords, audiences.",
        "The downsides: creative costs more than a banner, some viewers skip, and without conversion tracking it’s easy to burn budget on views alone.",
        "Don’t compare “YouTube vs. the whole internet.” Compare YouTube to other channels in your funnel — where can you get a target action at comparable lead quality?",
      ],
      lists: [
        {
          intro: "When video ads shine:",
          items: [
            "a complex product needs to be shown",
            "brand and trust matter",
            "you have a landing page ready for the action",
            "you’re willing to test two or three creatives",
            "you have bandwidth for editing and iteration",
          ],
        },
      ],
    },
    {
      title: "Audience and message",
      level: 2,
      paras: [
        "Targeting without an offer is wasted spend. Define who you’re reaching, what pain you solve, and what you want them to do — then set up the account.",
        "The first seconds decide everything: hook, product in frame, subtitles (many people watch without sound).",
        "Split segments by intent: cold audience, site-visitor retargeting, lookalikes from leads — each needs its own creative and CPA target.",
      ],
      lists: [
        {
          intro: "Before you shoot:",
          items: [
            "one primary CTA",
            "proof (numbers, case study, demo)",
            "customer language, not agency jargon",
            "a 15–30s version and a shorter hook cut",
          ],
        },
      ],
      links: [
        {
          label: "Ads account basics",
          href: "/en/blog/reklamnyy-kabinet/",
        },
      ],
    },
    {
      title: "Sales and the funnel",
      level: 2,
      paras: [
        "Clip → click or visit → lead or purchase. Without a pixel and conversion goals, you optimize for views, not revenue.",
        "For cold audiences, reach plus retargeting of people who finished the video or visited the site often beats a single blast.",
      ],
      lists: [
        {
          intro: "The chain you need:",
          items: [
            "UTM or campaign tagging",
            "a landing page that matches the clip’s offer",
            "a goal: lead, purchase, or call",
            "irrelevant placements excluded",
          ],
        },
      ],
      links: [
        {
          label: "Landing page",
          href: "/en/blog/lending/",
        },
        {
          label: "Installing Yandex Metrica",
          href: "/en/blog/metrika-ustanovka/",
        },
      ],
    },
    {
      title: "Budget and price expectations",
      level: 2,
      paras: [
        "Click and view costs swing by niche, ad quality, and competition. Don’t treat old “from $N” figures in 2021 articles as current fact.",
        "Plan a test: hypothesis → daily cap → review in 7–14 days → scale or stop.",
      ],
      lists: [
        {
          intro: "What to watch in the report:",
          items: [
            "frequency and completion rate",
            "CTR and cost per target action",
            "site traffic quality (bounce rate, pages per session)",
            "which creatives drive conversions",
          ],
        },
      ],
      notes: [
        {
          title: "Note",
          kind: "tip",
          text: "“The most effective advertising on the internet” is a slogan. What’s effective is what fits your unit economics.",
        },
      ],
    },
    {
      title: "How this ties to SEO and your channel",
      level: 2,
      paras: [
        "Ads don’t replace SEO and don’t buy organic rankings directly. They can lift brand demand and show which offers resonate.",
        "Your own channel with useful videos plays the long game: organic discovery, retargeting, and trust.",
      ],
      lists: [
        {
          intro: "Run ads alongside:",
          items: [
            "channel branding",
            "videos that answer audience questions",
            "landing pages for demand clusters",
            "realistic SEO timelines (months, not days)",
          ],
        },
      ],
      links: [
        {
          label: "Growing a YouTube channel",
          href: "/en/blog/raskrutka-youtube/",
        },
        {
          label: "YouTube monetization",
          href: "/en/blog/youtube-monetizaciya/",
        },
      ],
    },
    {
      title: "Should you launch?",
      level: 2,
      paras: [
        "Yes — if the product is visual, you have budget for a measured test, and the landing page is ready. Wait — if there’s no offer, site, or analytics. Build the foundation first.",
        "Bottom line: video ads are a performance and brand tool, not a magic button.",
      ],
      lists: [
        {
          intro: "Quick decision checklist:",
          items: [
            "goal and CPA/ROAS targets are set",
            "at least two creatives ready for testing",
            "daily cap and review deadline defined",
            "a stop-or-scale plan written down",
          ],
        },
      ],
    },
  ],
};
