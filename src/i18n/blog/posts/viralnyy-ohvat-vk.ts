import type { BlogPost } from "../../../data/blog";

/** EN overlay for viralnyy-ohvat-vk — same structure as RU JSON. */
export const viralnyyOhvatVkEn: BlogPost = {
  slug: "viralnyy-ohvat-vk",
  title: "VK viral reach: what it is and how to grow it",
  date: "2021-08-17",
  category: "SMM",
  cover: "/images/blog/viralnyy-ohvat-vk/cover-en.webp",
  excerpt:
    "What viral reach means in VK stats, how it differs from follower reach, which formats get reposted more, and how to amplify distribution the right way.",
  lead: [
    "Viral reach is post views from people who don’t follow your community: they saw a repost, a recommendation, or someone else’s feed and landed on your post.",
    "Find the metric in community stats, choose topics and formats that travel further, and encourage reposts without forcing it. Viral reach doesn’t replace a consistent content plan and paid ads.",
  ],
  faq: [
    {
      q: "How does viral reach differ from total reach?",
      a: "Total reach counts everyone who saw the post. Viral reach is the “outside” contribution — views from spread beyond your follower base (per VK stat labels).",
    },
    {
      q: "Why are reach stats unavailable?",
      a: "Some reports open only for communities above a certain audience size or type. Check current conditions in VK Help.",
    },
    {
      q: "Do I need provocation for viral reach?",
      a: "Controversial content sparks discussion but easily hurts brand reputation. Trust beats a reach spike.",
    },
    {
      q: "Do stock images go viral?",
      a: "Rarely. A recognizable original visual and a clear message beat another generic template from the internet.",
    },
    {
      q: "Do collaborations help?",
      a: "Yes: post swaps with related communities and creators expand the primary audience for reposts.",
    },
  ],
  sections: [
    {
      title: "What viral reach measures",
      level: 2,
      paras: [
        "It’s a signal that content lives beyond “your people.” New traffic to the community and site often comes from reposts and recommendations.",
        "In community stats, open the reach block and enable viral display (UI labels change). Watch day-by-day and device trends.",
      ],
      lists: [
        {
          intro: "Why track it:",
          items: [
            "which topics spread;",
            "whether non-follower inflow is growing;",
            "whether to boost the format with ads.",
          ],
        },
      ],
      links: [
        {
          label: "Comments in a VK public",
          href: "/en/blog/kommentarii-v-pablike-vk/",
        },
      ],
    },
    {
      title: "Topics people repost more",
      level: 2,
      paras: [
        "People share what boosts their image or emotion: utility, a story, a joke, a strong opinion (used carefully), a timely event.",
      ],
      lists: [
        {
          intro: "Angles that often travel:",
          items: [
            "educational — guides, checklists, breakdowns;",
            "motivational — without empty slogans;",
            "narrative — a case study, behind the scenes;",
            "emotional / entertainment — in brand tone;",
            "timely — a trend filtered through your expertise.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Chasing shock alone. A short reach spike with lasting trust damage is a bad trade.",
        },
      ],
    },
    {
      title: "Formats",
      level: 2,
      paras: [
        "Video, a strong visual, short hook copy, a poll, a quiz, an infographic — pick for the topic. Image quality and caption decide whether people hit “share.”",
      ],
      tables: [
        {
          caption: "Format and trade-offs",
          headers: ["Format", "Strength", "Risk"],
          rows: [
            ["Short video", "High watch-through rate", "Needs a hook in the first seconds"],
            ["Image + text", "Fast to produce", "Stock photos and fluff don’t travel"],
            ["Poll / quiz", "Engagement", "Weak brand offer"],
            ["Long post", "Expertise", "Hard to finish in the feed"],
          ],
        },
      ],
      links: [
        {
          label: "Infographics",
          href: "/en/blog/infografika/",
        },
      ],
    },
    {
      title: "How to amplify spread",
      level: 2,
      paras: [
        "Assemble the post: topic × format × headline × CTA (“what do you think / save / send to a colleague”). An original visual beats someone else’s template.",
        "Seed the link in partner communities by agreement. Ads on a strong organic post are sometimes cheaper than trying to warm up a weak one.",
      ],
      lists: [
        {
          intro: "Pre-publish checklist:",
          items: [
            "benefit clear in three seconds;",
            "a reason to save or forward;",
            "no fluff or fake clickbait;",
            "a soft CTA baked in;",
            "after a day, review reach and reposts.",
          ],
        },
      ],
    },
    {
      title: "Short takeaway",
      level: 2,
      paras: [
        "Viral reach shows whether content breaks out of your follower circle. Grow it with “worth sharing” topics, original visuals, and collabs — without betting everything on provocation.",
      ],
      lists: [],
    },
  ],
};
