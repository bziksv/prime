import type { BlogPost } from "../../../data/blog";

/** EN overlay for viralnyy-ohvat-vk — same structure as RU JSON. */
export const viralnyyOhvatVkEn: BlogPost = {
  slug: "viralnyy-ohvat-vk",
  title: "VK viral reach: what it is and how to grow it",
  date: "2021-08-17",
  category: "SMM",
  cover: "/images/blog/viralnyy-ohvat-vk/cover-en.webp",
  excerpt:
    "What viral reach means in VK stats, how it differs from follower reach, which formats get reposted more, and how to amplify distribution carefully.",
  lead: [
    "Viral reach is post views by people who don’t follow the community: they saw a repost, a recommendation, or someone else’s feed and reached the post.",
    "Below — where to find the metric, which topics and formats spread more, and how to ask for a repost without cringe. Viral doesn’t replace a system content plan and ads.",
  ],
  faq: [
    {
      q: "How does viral reach differ from total reach?",
      a: "Total reach counts everyone who saw the post. Viral is the “outsider” contribution via spread beyond your follower base (per VK stats labels).",
    },
    {
      q: "Why is reach stats unavailable?",
      a: "Some reports open for communities with enough audience/type. Check current conditions in VK Help.",
    },
    {
      q: "Do you need provocation for viral?",
      a: "Controversial content sparks discussion, but easily hurts brand reputation. Measure beats a reach spike.",
    },
    {
      q: "Do stock images go viral?",
      a: "Rarely. A recognizable own visual and a clear message beat another “from the internet” template.",
    },
    {
      q: "Do collaborations help?",
      a: "Yes: post swaps with related publics and creators expand the primary audience for reposts.",
    },
  ],
  sections: [
    {
      title: "What viral reach counts",
      level: 2,
      paras: [
        "It’s a signal that content lives beyond “your people.” New traffic to the community and site often comes from reposts and recommendations.",
        "In community stats open the reach block and enable viral display (UI labels change). Watch day-by-day and device trends.",
      ],
      lists: [
        {
          intro: "Why watch it:",
          items: [
            "which topics spread;",
            "whether non-follower inflow grows;",
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
        "People share what boosts their image or emotion: utility, a story, a joke, a strong opinion (carefully), a timely event.",
      ],
      lists: [
        {
          intro: "Directions:",
          items: [
            "educational — guides, checklists, breakdowns;",
            "motivational — without empty slogans;",
            "narrative — a case, behind the scenes;",
            "emotional / entertainment — in brand tone;",
            "timely — a trend with your expertise.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Chasing only shock. A short reach spike with lasting trust damage is a bad trade.",
        },
      ],
    },
    {
      title: "Formats",
      level: 2,
      paras: [
        "Video, a bright visual, short hook copy, a poll, a quiz, an infographic — pick for the topic. Image quality and caption decide whether people hit “share.”",
      ],
      tables: [
        {
          caption: "Format and bet",
          headers: ["Format", "Plus", "Risk"],
          rows: [
            ["Short video", "High chance of watch-through", "Needs a hook in the first seconds"],
            ["Image + text", "Fast to make", "Stock and fluff don’t fly"],
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
        "Assemble the post: topic × format × headline × CTA (“what do you think / save / send to a colleague”). Own visual beats someone else’s template.",
        "Seed the link in partner publics by agreement. Ads on a strong organic post are sometimes cheaper than warming a weak one.",
      ],
      lists: [
        {
          intro: "Publish checklist:",
          items: [
            "benefit clear in 3 seconds;",
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
        "Viral reach shows whether content leaves the follower circle. Grow it with “worth sharing” topics, own visuals, and collabs — without betting only on provocation.",
      ],
      lists: [],
    },
  ],
};
