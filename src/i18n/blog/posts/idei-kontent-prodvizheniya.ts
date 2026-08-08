import type { BlogPost } from "../../../data/blog";

/** EN overlay for idei-kontent-prodvizheniya — same structure as RU JSON. */
export const ideiKontentProdvizheniyaEn: BlogPost = {
  slug: "idei-kontent-prodvizheniya",
  title: "Ideas for content-led site promotion",
  date: "2019-08-13",
  category: "Content marketing",
  cover: "/images/blog/idei-kontent-prodvizheniya/cover-en.webp",
  excerpt:
    "Content formats for organic traffic and trust: how-tos, beginner guides, research, experience, reviews, and myth-busting — without “first line of Google” promises.",
  lead: [
    "Content-led promotion means answering audience questions in a blog and knowledge base: that grows organic traffic and trust in expertise. It isn’t free traffic by button — it’s systematic work on topics and quality.",
    "Below: working idea formats. Matrix and calendar are separate; here — what to write to meet demand and strengthen the brand.",
  ],
  faq: [
    {
      q: "Where should I start if there’s no blog yet?",
      a: "With FAQ and 5–10 how-tos on frequent client questions. Then guides and reviews.",
    },
    {
      q: "Does a guide guarantee rankings?",
      a: "No. Strong material raises odds when tech, links, and intent line up — but it doesn’t promise first place.",
    },
    {
      q: "Do you need infographics?",
      a: "As a way to explain a process — yes. Not required in every article; clarity and facts matter more.",
    },
    {
      q: "Are personal stories SEO?",
      a: "Rarely via keywords directly. They do hold attention, support E-E-A-T, and create share reasons.",
    },
    {
      q: "Can you monetize reviews?",
      a: "Yes, with honest ad/affiliate labeling and real experience. Native deception gets spotted fast.",
    },
    {
      q: "Where do topics come from?",
      a: "Client inquiries, search/suggest, competitors, your managers. Not only what flared in trends.",
    },
    {
      q: "How is this different from a content matrix?",
      a: "The matrix is a stage/goal/channel system. Here — a set of idea formats to fill it.",
    },
  ],
  sections: [
    {
      title: "How-to instructions",
      level: 2,
      paras: [
        "People rarely read the paper manual — they search for an answer. Cover typical problems on the site: FAQ and how-to articles with a clear question headline.",
        "Watch real audience queries and add usage tips for your product. Example: “How to get a bank guarantee” for a niche firm — if the piece is honest and complete.",
      ],
      notes: [
        {
          title: "No ranking magic",
          kind: "tip",
          text: "Landing in a knowledge panel or page-one results depends on quality, competition, and the site overall — not one lucky wording.",
        },
      ],
      links: [
        {
          label: "How to write an article",
          href: "/en/blog/kak-napisat-statyu/",
        },
      ],
    },
    {
      title: "Beginner guides",
      level: 2,
      paras: [
        "A “from scratch” format often captures broad informational demand. Break down steps, terms, and beginner mistakes.",
        "An infographic or process diagram helps scanning. Online editors (Canva and similar tools) speed visuals — meaning and facts beat the template.",
      ],
    },
    {
      title: "Deep guides",
      level: 2,
      paras: [
        "Experts want “everything on the topic”: instructions, guides, “all you need to know.” Back claims with numbers and sources; check freshness.",
        "Original research or a summary with permitted data can earn links and trust. State period and method — or it’s just marketing.",
      ],
      lists: [
        {
          intro: "Headline patterns:",
          items: [
            "How to…",
            "A complete guide to…",
            "Guide: …",
            "What to know about… before you choose",
          ],
        },
      ],
      links: [
        {
          label: "Longread",
          href: "/en/blog/longrid/",
        },
        {
          label: "E-A-T in copywriting",
          href: "/en/blog/eat-kopirayting/",
        },
      ],
    },
    {
      title: "Personal experience and cases",
      level: 2,
      paras: [
        "Practice stories don’t replace keyword structure, but they strengthen brand connection and retention. Show an ordinary workday, a task breakdown, honest limits.",
        "Intrigue fits when it leads to usefulness — not clickbait with no answer.",
      ],
    },
    {
      title: "Reviews and myth-busting",
      level: 2,
      paras: [
        "Product/service review: what it is, who it’s for, pros/cons, price, where to buy. An honest cons list builds trust.",
        "Myth-busting in the niche is a strong hook: collect client misconceptions and answer them with facts. Practical usefulness beats a show.",
      ],
      links: [
        {
          label: "Product video review",
          href: "/en/blog/video-obzor-tovara/",
        },
        {
          label: "Content matrix",
          href: "/en/blog/matritsa-kontenta/",
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "Ideas without a system burn out fast — tie formats to audience and journey stages.",
        "Openness and usefulness build trust better than empty “become an expert in a week” promises.",
        "Organic grows from regular answers to demand — not one viral post.",
      ],
    },
  ],
  closing: [
    "List ten client questions from the last month and cover three with a how-to or FAQ — faster than an abstract “we need a blog.”",
  ],
  related: [
    "matritsa-kontenta",
    "kontent-plan",
    "kak-napisat-statyu",
    "longrid",
    "eat-kopirayting",
    "prodayushchiy-kontent",
  ],
};
