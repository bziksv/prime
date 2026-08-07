import type { BlogPost } from "../../../data/blog";

/** EN overlay for temy-dlya-statey — same structure as RU JSON. */
export const temyDlyaStateyEn: BlogPost = {
  slug: "temy-dlya-statey",
  title: "Article topics: how and where to find ideas",
  date: "2019-06-14",
  category: "Content marketing",
  cover: "/images/blog/temy-dlya-statey/cover-en.webp",
  excerpt:
    "Where to get blog topics: audience, competitors, search demand, trends, and discussion spaces — without copy-pasting others’ texts or chasing “virality.”",
  lead: [
    "The topic decides whether people finish the article and whether search finds it. Unique wording won’t save a question the reader doesn’t care about.",
    "Idea sources are close at hand, how to work with queries, and extra reserves. How-to/guide formats live in content-promotion ideas; the calendar lives in the content-plan article.",
  ],
  faq: [
    {
      q: "Where to start if ideas are zero?",
      a: "With client questions and comments on old posts. Then search demand and competitors.",
    },
    {
      q: "Can I rewrite someone else’s articles?",
      a: "As inspiration and angles — yes. Copy-paste and one-to-one rewrites — no. Add your experience and facts.",
    },
    {
      q: "Is a keyword set required?",
      a: "For organic — yes, at least a cluster of questions. For expert opinion without search intent you can go lighter, but checking demand still helps.",
    },
    {
      q: "Are Google Trends / keyword tools enough?",
      a: "As a seasonality and spike compass — yes. They don’t replace intent and SERP competition analysis.",
    },
    {
      q: "Does asking subscribers work?",
      a: "Yes: poll, form, comments. Weak response is normal; combine with search and support.",
    },
    {
      q: "How is this different from content-promotion ideas?",
      a: "That article covers formats (how-to, guide, myths). Here — where to get concrete topics and questions.",
    },
    {
      q: "Where do I store finds?",
      a: "In a backlog and content plan: topic, intent, priority, status.",
    },
  ],
  sections: [
    {
      title: "Ideas nearby: audience and your own materials",
      level: 2,
      paras: [
        "Your interests and expertise are a start — filter them: what’s useful for the audience, not only for you.",
        "Old hits: update facts, add a new angle, or unpack objections from comments — often stronger than a topic from scratch.",
        "Ask readers in the newsletter, comments, or a short poll. Competitors: a list of topics that worked for them, plus your experience and examples — not a one-to-one structure clone.",
      ],
      lists: [
        {
          intro: "Quick harvest:",
          items: [
            "questions from support and sales;",
            "comments and “what about…”;",
            "top old URLs by traffic/engagement;",
            "notes from client calls.",
          ],
        },
      ],
    },
    {
      title: "Search queries as a topic source",
      level: 2,
      paras: [
        "Search demand describes how people phrase a need. A keyword cluster → article and landing topics.",
        "Hints: Search Console reports, Google Keyword Planner, Semrush/Ahrefs and peers. Add question operators (“how,” “why,” “what is”) to the base query.",
        "Q&A spaces and “People also ask” in the SERP show live wording. Trends help with seasonality — don’t publish a “trendy” post after the peak unless you have an evergreen angle.",
      ],
      links: [
        {
          label: "Semantic keyword set",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Content promotion ideas",
          href: "/en/blog/idei-kontent-prodvizheniya/",
        },
      ],
      notes: [
        {
          title: "Tool UIs change",
          text: "“Questions” buttons in Semrush and similar tools move around. What matters is the logic: question → intent → article — not a 2019 menu screenshot.",
        },
      ],
    },
    {
      title: "Forums, social, video, and international angles",
      level: 2,
      paras: [
        "Live discussions on forums and industry chats surface odd pains that aren’t in the SERP top.",
        "Popular niche posts and videos signal interest; carry the meaning into your format — don’t steal the script.",
        "Webinars and conferences: searching “topic + webinar” shows which questions speakers raise. Materials from other markets are a source of angles thin in your locale; translating “as is” without adaptation and sources is bad practice.",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Topic = audience usefulness + your angle + (for SEO) demand.",
        "Others’ articles — inspiration, not a copy-paste template.",
        "Put anything valuable into the content plan immediately, or ideas vanish.",
      ],
      links: [
        {
          label: "Content plan",
          href: "/en/blog/kontent-plan/",
        },
        {
          label: "Content matrix",
          href: "/en/blog/matritsa-kontenta/",
        },
      ],
    },
  ],
  closing: [
    "In a week, write down 15 questions from support and search — three of them are enough for the next publications without “blank page” pain.",
  ],
  related: [
    "idei-kontent-prodvizheniya",
    "kontent-plan",
    "matritsa-kontenta",
    "semanticheskoe-yadro",
    "kak-napisat-statyu",
    "korporativnyy-blog",
  ],
};
