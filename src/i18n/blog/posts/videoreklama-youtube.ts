import type { BlogPost } from "../../../data/blog";

/** EN overlay for videoreklama-youtube — same structure as RU JSON. */
export const videoreklamaYoutubeEn: BlogPost = {
  slug: "videoreklama-youtube",
  title: "Video ads on YouTube: is it worth launching",
  date: "2021-01-28",
  category: "Contextual advertising",
  cover: "/images/blog/videoreklama-youtube/cover-en.webp",
  excerpt:
    "When YouTube video ads pay off, which formats exist, how to judge audience and budget — without “most effective on the internet” claims or outdated prices.",
  lead: [
    "Ads in YouTube videos annoy some viewers, but they deliver reach, awareness, and occasionally leads — if offer, creative, and landing form one funnel.",
    "Below — format upsides, audience work, sales linkage, and how to think about budget. CPM/CPC figures from old guides age fast: use your own test and Google Ads help.",
    "In some markets, also check account availability and platform policy at launch time.",
  ],
  faq: [
    {
      q: "Are YouTube Ads the same as channel monetization?",
      a: "No. Monetization is the creator’s income from ads in their videos. YouTube Ads is you paying to show your ads.",
    },
    {
      q: "Must viewers watch 30 seconds?",
      a: "Depends on format: skippable in-stream can be skipped after a few seconds; other types exist. Check current formats in the account.",
    },
    {
      q: "Will ads help sales?",
      a: "Yes if there’s a strong offer and landing. Merely “a clip before a video” sells nothing.",
    },
    {
      q: "Is there an SEO bonus from Ads?",
      a: "No direct “Ads = TOP”. Indirectly — brand, demand, site traffic. Organic grows from content and SEO work.",
    },
    {
      q: "What budget to start with?",
      a: "Enough to see stats over a 1–2 week test, with a daily cap — not a vacuum “market average”.",
    },
    {
      q: "Do you need your own channel?",
      a: "Preferably: trust, retargeting, content. For an ads test, a showcase channel is also used.",
    },
    {
      q: "What if YouTube Ads isn’t available?",
      a: "Other video and performance platforms in your market, content on your channel, performance in available accounts.",
    },
  ],
  sections: [
    {
      title: "Upsides and limits of the format",
      level: 2,
      paras: [
        "Video carries emotion, the product “in action”, a brand face. Reach is large; targeting is flexible (interests, keywords, audiences).",
        "Downsides: creative costs more than a banner, some viewers skip, and without conversion measurement it’s easy to burn budget on views.",
        "Don’t compare “YouTube vs the whole internet” — compare YouTube vs other channels in your funnel: where the target action is cheaper at comparable lead quality.",
      ],
      lists: [
        {
          intro: "When the format is strong:",
          items: [
            "a complex product needs to be shown;",
            "brand and trust matter;",
            "there’s a landing for the action;",
            "you’re ready to test 2–3 creatives;",
            "you have capacity for edit and iteration.",
          ],
        },
      ],
    },
    {
      title: "Audience and message",
      level: 2,
      paras: [
        "Targeting without an offer is useless. First “who / which pain / what to do”, then account settings.",
        "The first seconds decide: hook, product in frame, subtitles (many watch without sound).",
        "Split segments with intent: new audience, site-visitor retargeting, lookalikes from leads — each needs its own creative and CPA expectation.",
      ],
      lists: [
        {
          intro: "Before shooting:",
          items: [
            "one main CTA;",
            "proof (numbers, case, demo);",
            "customer language, not agency jargon;",
            "a 15–30s version and a shorter hook.",
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
        "Clip → click/visit → lead/purchase. Without Metrika/pixel and goals you optimize views, not money.",
        "For cold audiences, reach plus retargeting of people who finished the video or visited the site often works better.",
      ],
      lists: [
        {
          intro: "The chain is mandatory:",
          items: [
            "UTM or campaign tagging;",
            "a landing matching the clip’s offer;",
            "a goal: lead/purchase/call;",
            "exclude irrelevant placements.",
          ],
        },
      ],
      links: [
        {
          label: "Landing page",
          href: "/en/blog/lending/",
        },
        {
          label: "Installing Metrika",
          href: "/en/blog/metrika-ustanovka/",
        },
      ],
    },
    {
      title: "Budget and price expectations",
      level: 2,
      paras: [
        "Click and view cost swing by niche, ad quality, and competition. Don’t treat old “from N currency” lines in 2021 articles as fact.",
        "Plan a test: hypothesis → cap → review in 7–14 days → scale or stop.",
      ],
      lists: [
        {
          intro: "What to watch in the report:",
          items: [
            "frequency and completion;",
            "CTR and cost per target action;",
            "site traffic quality (bounce, depth);",
            "which creatives pull conversions.",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "“The most effective advertising on the internet” is a slogan. Effective is what hits your unit economics.",
        },
      ],
    },
    {
      title: "Tie-in with SEO and the channel",
      level: 2,
      paras: [
        "Ads don’t replace SEO and don’t “buy” organic directly. They can boost brand demand and show which offers stick.",
        "Your own channel with useful videos plays the long game: organic + retargeting + trust.",
      ],
      lists: [
        {
          intro: "Alongside ads:",
          items: [
            "channel branding;",
            "videos for audience questions;",
            "landings for demand clusters;",
            "realistic SEO timelines (months, not days).",
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
      notes: [
        {
          title: "SEO timelines",
          kind: "tip",
          text: "Paid video tests demand now. Organic for a core grows separately: site prep roughly weeks to a month; TOP planned 2–6 months of work.",
        },
      ],
    },
    {
      title: "Should you launch",
      level: 2,
      paras: [
        "Yes if the product is visual, you have budget for a measured test, and the landing is ready. No or later — if there’s no offer, site, or analytics: foundation first.",
        "Bottom line: video ads are a performance/brand tool — not a magic button.",
      ],
      lists: [
        {
          intro: "Mini decision:",
          items: [
            "goal and CPA/ROMI exist;",
            "at least 2 creatives for a test;",
            "cap and deadline set;",
            "a stop / scale plan written.",
          ],
        },
      ],
    },
  ],
};
