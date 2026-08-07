import type { BlogPost } from "../../../data/blog";

/** EN overlay for opisanie-youtube-kanala — same structure as RU JSON. */
export const opisanieYoutubeKanalaEn: BlogPost = {
  slug: "opisanie-youtube-kanala",
  title: "YouTube channel description: how to write it and where to put it",
  date: "2021-12-10",
  category: "SMM",
  cover: "/images/blog/opisanie-youtube-kanala/cover-en.webp",
  excerpt:
    "How to write a YouTube channel description: opening lines, keywords, links, common mistakes, and how to update the text in Studio.",
  lead: [
    "A channel description is a short “what this project is about”. People read it on the channel page and sometimes see it in search. The first sentences decide whether someone stays.",
    "Below — structure, keywords without spam, links, and typical mistakes. YouTube Studio menu items change — look for Customization / About.",
  ],
  faq: [
    {
      q: "How many characters are allowed?",
      a: "The platform limit is around a thousand characters; the preview often shows only the first ~100–200. Check exact limits in Studio — they can change.",
    },
    {
      q: "Do you need keywords in the description?",
      a: "Yes, but moderately: topic, niche, brand, creator name — naturally in the text. Overstuffing hurts people and search.",
    },
    {
      q: "How is a channel description different from a video description?",
      a: "Channel description is the project’s business card. Video description is about that clip, timestamps, and a CTA for that episode.",
    },
    {
      q: "How do you make links clickable?",
      a: "Via the links field in channel settings / customization, not a bare URL in a paragraph. Link labels should match the project’s site and socials.",
    },
    {
      q: "Can you skip a description?",
      a: "Only if people already know you by name. For new and niche channels an empty About is a missed chance to explain the offer.",
    },
  ],
  sections: [
    {
      title: "Why you need a description",
      level: 2,
      paras: [
        "The text answers three questions: what the channel is about, who it’s for, and what to expect next. Without it viewers guess from thumbnails alone.",
        "The description helps search and trust: coherent, clean copy looks like a real project, not a draft.",
      ],
      lists: [],
    },
    {
      title: "Opening lines and limits",
      level: 2,
      paras: [
        "Collapsed view shows only the first characters. Name the topic and format right away: reviews, learning, entertainment, product.",
      ],
      lists: [
        {
          intro: "Working frame:",
          items: [
            "1–2 sentences — essence and who it’s for;",
            "what goes out regularly (rubrics, cadence);",
            "how you differ from similar channels;",
            "where to go next (site, socials — via the links field);",
            "a soft CTA: subscribe, watch a playlist, write.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "Draft 600–800 characters, then cut fluff. Check that meaning is clear if the text is cut after the second sentence.",
        },
      ],
    },
    {
      title: "Keywords and tags without spam",
      level: 2,
      paras: [
        "Niche terms, brand name, and host name fit naturally into the text. You can check demand in keyword tools — but don’t turn the description into a query list.",
        "Channel tags and hashtags are a support layer. Clarity for humans matters more than keyword density.",
      ],
      lists: [
        {
          intro: "Placement:",
          items: [
            "at the start — main topic and brand;",
            "in the middle — niche and format details;",
            "at the end — extra phrasing and CTA.",
          ],
        },
      ],
      links: [
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Platform rules and audience",
      level: 2,
      paras: [
        "Copy and links must follow YouTube rules: no banned content, others’ materials without rights, deception, or harmful links.",
        "Write in the audience’s language: travel viewers get one tone, B2B learning another. Mismatch with video topics reads as bait-and-switch.",
      ],
      lists: [
        {
          intro: "State the format clearly:",
          items: [
            "product / service reviews;",
            "learning and breakdowns;",
            "entertainment, vlogs, games;",
            "niche (cars, film, kids, business…).",
          ],
        },
      ],
    },
    {
      title: "Common mistakes",
      level: 2,
      paras: [
        "Short text seems simple — but typical misses hurt both search and trust.",
      ],
      lists: [
        {
          intro: "Avoid:",
          items: [
            "keyword stuffing;",
            "copy-pasting someone else’s description;",
            "a description that doesn’t match the channel;",
            "spelling issues and an off tone;",
            "links to someone else’s / suspicious resources.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Writing “the best channel about everything”. Better one concrete niche and a clear format — that’s how the right subscribers arrive.",
        },
      ],
    },
    {
      title: "How to add and update in Studio",
      level: 2,
      paras: [
        "In YouTube Studio open channel customization / about and the description field. Paste the text, save.",
        "Add links in the separate channel links block: site, socials, shop. After a topic shift or rebrand, update the description, avatar, and banner together.",
      ],
      lists: [],
      links: [
        {
          label: "YouTube channel avatar",
          href: "/en/blog/avatar-youtube/",
        },
      ],
    },
    {
      title: "Approach examples",
      level: 2,
      paras: [
        "Strong descriptions name topic and method from the first lines (e.g. product expertise) and give a clear next step.",
        "Short intriguing texts also work — if the brand is already known. Celebrities sometimes need only a name and links; a newcomer without copy has a harder time.",
      ],
      lists: [
        {
          intro: "Before publishing:",
          items: [
            "read 3–5 channels in your niche;",
            "note what hooks in the opening lines;",
            "write your version without copy-paste;",
            "check uniqueness and literacy.",
          ],
        },
      ],
    },
  ],
};
