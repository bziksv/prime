import type { BlogPost } from "../../../data/blog";

/** EN overlay for pryamoy-efir-instagram — same structure as RU JSON. */
export const pryamoyEfirInstagramEn: BlogPost = {
  slug: "pryamoy-efir-instagram",
  title: "Instagram Live: prep, hosting, and review",
  date: "2022-03-04",
  category: "SMM",
  cover: "/images/blog/pryamoy-efir-instagram/cover-en.webp",
  excerpt:
    "How to prepare a live stream: goal, script, tech, announcement, comment handling, and post-stream stats review.",
  lead: [
    "A live stream is how you show the product, answer questions, and bring the audience to life in real time. Below: prep, hosting, and a review after the stream. App menu items change — follow current Help. See the Meta note on this page.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Where should I start with a live stream?",
      a: "With a goal and a script: what the viewer should understand or do in 20–40 minutes.",
    },
    {
      q: "Do I need an announcement?",
      a: "Yes: topic, time, benefit. Without an announcement you get random viewers and retention drops.",
    },
    {
      q: "What matters more — tech or script?",
      a: "Both. Bad audio kills a stream faster than weak light; without a script the stream drifts.",
    },
    {
      q: "How do I handle comments?",
      a: "Decide in advance whether you answer live; if needed, restrict toxic profiles and moderate the flow.",
    },
    {
      q: "What should I check after the stream?",
      a: "Peak viewers, retention, questions from chat, saves/responses — and what to improve next time.",
    },
  ],
  sections: [
    {
      title: "Why go live",
      level: 2,
      paras: [
        "Live covers what a static post does poorly: a live demo, objection handling, Q&A, behind the scenes.",
        "Start with the goal: sales, warm-up, expertise, hiring, customer support. Goal drives length, guests, and CTA.",
      ],
      lists: [
        {
          intro: "Example goals:",
          items: [
            "show a product or service and answer questions",
            "announce a launch or promo",
            "interview an expert",
            "walk through a case or beginner mistakes",
          ],
        },
      ],
    },
    {
      title: "Prep: script and tech",
      level: 2,
      paras: [
        "The script is block timing: greeting, 2–3 topics, Q&A, final CTA. Keep a backup plan if a guest is late.",
        "Check light, sound, background, battery, and internet. Do a test recording on a second phone.",
      ],
      lists: [
        {
          intro: "Minimum before you go live:",
          items: [
            "goal and CTA",
            "minute-by-minute talking points",
            "water, charger, backup contact channel",
            "who moderates chat",
          ],
        },
      ],
      notes: [
        {
          title: "App UI",
          text: "Going live usually sits near Stories/camera, but icons move. Don’t train the team on “tap the third button on the left” — train the prep checklist.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Announcement and audience",
      level: 2,
      paras: [
        "Announce ahead: Stories, a post, email, a highlight pin. State topic, time, and benefit.",
        "Pick time by your audience’s activity (check profile insights), not “whenever the host is free.”",
      ],
    },
    {
      title: "Hosting the stream",
      level: 2,
      paras: [
        "At the start greet people, restate the topic and chat rules. Watch the viewer count and questions, but don’t silently scroll the feed for minutes.",
        "Turn comments on to match the stream’s job. For business sessions a moderator helps; restrict toxic profiles ahead of time.",
      ],
      lists: [
        {
          intro: "How to hold attention:",
          items: [
            "calm pace and natural language",
            "change the plan: show → explain → ask the chat",
            "short blocks instead of a 40-minute lecture",
            "repeat the key CTA two or three times",
          ],
        },
      ],
    },
    {
      title: "Wrap-up and saving",
      level: 2,
      paras: [
        "At the end sum up takeaways and repeat the action (DM, sign up, click through). Duration limits and save options depend on the current app version — decide ahead whether you need a repost or an external-camera recording.",
      ],
    },
    {
      title: "Co-hosted lives",
      level: 2,
      paras: [
        "A guest raises interest when they bring their own audience and an agreed script. Align roles: who leads, who answers chat, who closes the sale.",
      ],
      lists: [
        {
          intro: "Before a co-hosted live:",
          items: [
            "shared goal and timing",
            "who moderates comments",
            "how you introduce each other",
            "shared CTA at the end",
          ],
        },
      ],
    },
    {
      title: "Topic ideas",
      level: 2,
      paras: [
        "Pull topics from customer questions and demand signals — not thin air.",
      ],
      lists: [
        {
          intro: null,
          items: [
            "answers to frequent questions",
            "live product walkthrough",
            "a day in the office / production",
            "mini-training on a narrow topic",
            "interview with a client or expert",
          ],
        },
      ],
      tables: [
        {
          caption: "30-minute live outline",
          headers: ["Minutes", "Block"],
          rows: [
            ["0–3", "Greeting and topic"],
            ["3–12", "Block 1 + example"],
            ["12–20", "Block 2 + demo"],
            ["20–27", "Questions from chat"],
            ["27–30", "Wrap-up and CTA"],
          ],
        },
      ],
      links: [
        {
          label: "Instagram profile design",
          href: "/en/blog/oformlenie-stranicy-instagram/",
        },
      ],
    },
    {
      title: "Review after the stream",
      level: 2,
      paras: [
        "Keep the numbers: peak viewers, average watch time, comment count, CTA response. Note which minutes people left — that’s a hole in the script.",
        "Plan the next live as an iteration: one improvement hypothesis (light, guest, length, topic).",
      ],
    },
  ],
};
