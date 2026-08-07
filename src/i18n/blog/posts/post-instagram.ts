import type { BlogPost } from "../../../data/blog";

/** EN overlay for post-instagram — same structure as RU JSON. */
export const postInstagramEn: BlogPost = {
  slug: "post-instagram",
  title: "A selling Instagram post: structure and headline",
  date: "2021-12-07",
  category: "SMM",
  cover: "/images/blog/post-instagram/cover-en.webp",
  excerpt:
    "How to build a selling Instagram post: offer, USP, copy structure, headline, CTA, and handling comments.",
  lead: [
    "A selling post is copy plus visuals about a specific product or service with a clear benefit and a call to action. It’s not a “pretty paragraph” — it’s a step in the dialogue with the buyer.",
    "Below — audience, positioning, copy frame, and handling negativity. Instagram’s UI changes — copy logic matters more than button screenshots.",
  ],
  legalNotice: {
    title: "Dear readers!",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "How is a selling post different from a value post?",
      a: "A value post teaches or entertains. A selling post leads to an action: lead, purchase, click, booking. In the feed, sales are usually a minority — see the content plan.",
    },
    {
      q: "Do you need keywords in the first line?",
      a: "Meaning and benefit beat query density. A keyword is fine if it sounds human; otherwise the first line pushes people away.",
    },
    {
      q: "How much text is normal?",
      a: "Enough to handle an objection and give a CTA. Long posts work if there’s air, lists, and a strong hook in the preview.",
    },
    {
      q: "Should you delete negative comments?",
      a: "Mass-deleting criticism kills trust. Move the argument to DMs; spam and insults — per moderation rules.",
    },
    {
      q: "Is one strong post enough?",
      a: "No. You need rhythm, warm-up, and profile packaging. One post is a hypothesis test, not the whole funnel.",
    },
  ],
  sections: [
    {
      title: "What a selling post is",
      level: 2,
      paras: [
        "It’s a publication that grabs attention, clearly describes the offer, and nudges a step: message, click, buy, book.",
        "A strong post stands out in the feed, hits an audience need, and doesn’t hide the next step.",
      ],
      lists: [
        {
          intro: "Signs of a working post:",
          items: [
            "noticeable visual and first line;",
            "a concrete product / service / offer;",
            "benefits, not only “specs”;",
            "a clear CTA.",
          ],
        },
      ],
    },
    {
      title: "Goal and what to write",
      level: 2,
      paras: [
        "The goal is leads and sales, not “likes for likes”. Copy is a precise tool: features, benefits, difference from analogues.",
      ],
      lists: [
        {
          intro: "The text usually includes:",
          items: [
            "key features;",
            "benefits for the client;",
            "options / offer formats;",
            "proof (figures, case, guarantee) — when possible.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "Ask yourself: “Why buy from us, not the neighbor?” That answer is the post’s core.",
        },
      ],
    },
    {
      title: "Audience and competitors",
      level: 2,
      paras: [
        "Without an audience portrait the post is written “for everyone” and hooks no one. Gender, age, city, income, activities, pains — the basic frame.",
        "Look at competitors: topics, tone, what gets response. Copying their texts is off — the platform and audience notice. Take meanings and repackage for your offer.",
      ],
      lists: [],
    },
    {
      title: "Positioning and USP",
      level: 2,
      paras: [
        "The same product sells better when the difference is clear: delivery, timeline, service, expertise, guarantee, format.",
        "Example: two confectioners in one city — you don’t win with “tastier in words”, but with a clear edge (delivery, giveaway, lead time).",
      ],
      lists: [
        {
          intro: "Positioning jobs in the post:",
          items: [
            "show the benefit;",
            "differentiate from analogues;",
            "warm interest in the next step.",
          ],
        },
      ],
    },
    {
      title: "Headline and copy structure",
      level: 2,
      paras: [
        "The first line is the feed headline. Without a hook the post won’t expand.",
      ],
      lists: [
        {
          intro: "First-line requirements:",
          items: [
            "concise and not banal;",
            "offer or pain clear right away;",
            "a keyword — only if it sounds natural.",
          ],
        },
        {
          intro: "Post frame:",
          items: [
            "intro — 2–3 sentences, hook questions;",
            "body — features, benefits, use cases, soft proof;",
            "close — a clear CTA (what to do and where).",
          ],
        },
        {
          intro: "CTA examples:",
          items: [
            "“DM us the word … — we’ll call back”;",
            "“Book — link in bio / reply to the operator”;",
            "“Contacts in profile — name a convenient time”.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Dumping the whole point in the intro and repeating it in the middle. The intro is a lead-in; value lives in the body.",
        },
      ],
      links: [
        {
          label: "Instagram content plan",
          href: "/en/blog/kontent-plan-instagram/",
        },
        {
          label: "Page design",
          href: "/en/blog/oformlenie-stranicy-instagram/",
        },
      ],
    },
    {
      title: "Comments and negativity",
      level: 2,
      paras: [
        "Reply speed matters: a hot lead goes to a competitor. Active accounts need someone owning DMs and comments.",
        "Negativity is better moved to private messages and handled calmly. Spam and toxicity — per moderation rules; mass-scrubbing criticism “for looks” isn’t worth it.",
      ],
      lists: [],
    },
  ],
};
