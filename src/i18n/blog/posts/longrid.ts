import type { BlogPost } from "../../../data/blog";

/** EN overlay for longrid — same structure as RU JSON. */
export const longridEn: BlogPost = {
  slug: "longrid",
  title: "Longread: what it is and how to make one",
  date: "2019-12-02",
  category: "Content marketing",
  cover: "/images/blog/longrid/cover-en.webp",
  excerpt:
    "A longread isn’t a wall of copy for volume’s sake — it’s a deep story with structure and layout. How to write, design, and update without TOP and virality myths.",
  lead: [
    "A longread is a substantial piece with a detailed take on a topic, an authorial voice, and layout that helps people finish. Length alone doesn’t make text stronger: usefulness, story, and clear structure do.",
    "Depth and delivery set it apart from a long article padded for volume. Principles for different reader types, story, layout, and post-publish work are here; the general article algorithm and author brief live in related guides.",
  ],
  faq: [
    {
      q: "How is a longread different from a long article?",
      a: "Depth and delivery: a story/breakdown with style and deliberate layout — not paragraphs padded “to N thousand characters.”",
    },
    {
      q: "How many minutes should someone read?",
      a: "A 10–40 minute hint isn’t a rule. Better to estimate reading time from length and goal; completion matters more than “longer = better.”",
    },
    {
      q: "Does a longread guarantee search rankings?",
      a: "No. Time on page and depth are useful behavior signals, but they don’t replace intent, technical quality, and the link/content environment. Core TOP growth is planned for 2–6 months of systematic work — not from one publish.",
    },
    {
      q: "Do I need a designer?",
      a: "For a strong longread, visuals are part of the meaning: illustrations, diagrams, media. At the start, tidy layout and relevant images are enough.",
    },
    {
      q: "What is a “Power Page” in this context?",
      a: "A marketing label for expert copy that builds trust and leads toward a request without a hard sell. Not magic — and not always a landing replacement.",
    },
    {
      q: "Can I write a longread without being an expert?",
      a: "Yes, if there’s research, sources, and an honest “figuring it out with the reader” stance. Without facts you’ll get fluff.",
    },
    {
      q: "Should I edit after publishing?",
      a: "Yes: update facts, comments, and spots where completion drops. Don’t rewrite meaning just for clicks.",
    },
  ],
  sections: [
    {
      title: "What a longread is",
      level: 2,
      paras: [
        "In the classic sense it’s a substantial piece built for readability and backed by media. The mistake is thinking “longer is always better.” Strength comes from a detailed take and style — not a character counter.",
        "Long text holds attention when delivery and layout fit, and when the piece reads as a story or sequential breakdown — not a chaotic stream.",
        "Short posts didn’t “kill” long formats: on phones people often read in pauses when they’re ready for calm text. But “everyone loves longreads” is also a myth — watch your audience and completion stats.",
      ],
      notes: [
        {
          title: "Didn’t finish ≠ failure",
          text: "People may save, share, or come back later. Watch shares, returns, and conversions — not only “finished on the first pass.”",
        },
      ],
    },
    {
      title: "Creation principles",
      level: 2,
      paras: [
        "Three pillars: meaning (why read), structure with headings, layout for scanning. Without them, volume only tires.",
        "Audiences roughly split into readers (start from the first lines), evaluators (scan TOC and novelty first), and cross-readers (grab chunks with their eyes). A strong longread serves all three: opening hook, clear H2s, and visual breaks.",
      ],
      lists: [
        {
          intro: "If the piece “didn’t land”:",
          items: [
            "check audience and intent;",
            "review layout and paragraph density;",
            "strengthen usefulness and examples — not only the headline;",
            "don’t rely only on “too many words” comments.",
          ],
        },
      ],
      links: [
        {
          label: "Article structure",
          href: "/en/blog/struktura-stati/",
        },
        {
          label: "How to write an article",
          href: "/en/blog/kak-napisat-statyu/",
        },
      ],
    },
    {
      title: "Expert copy and “Power Page”",
      level: 2,
      paras: [
        "Sometimes clients want copy that presents the company through usefulness: facts, opinion, practice — without an aggressive pitch. That format can support a landing, but it doesn’t “replace” landing pages by itself.",
        "Virality and “high share potential” depend on topic, audience, and distribution. One masterfully written breakdown beats ten checkbox short posts — but reach isn’t guaranteed.",
        "Longer time on page helps the content product; in search it isn’t an automatic TOP ticket. Write for the reader’s question and answer quality.",
      ],
      notes: [
        {
          title: "No “instead of a landing” promises",
          text: "A longread builds trust and expertise. A request more often closes with a clear CTA and a landing for the offer — together, not instead.",
        },
      ],
    },
    {
      title: "How to write long-form",
      level: 2,
      paras: [
        "Research often takes as long as drafting. A rough draft plus hard editing is normal. The format fits poorly with “30k characters a day with no immersion.”",
        "A longread headline isn’t clickbait for CTR at any cost. The job is to hold attention and deliver value — not only drive empty clicks.",
        "A longread is a big story or a set of related stories on one theme: events, people, processes, cases. Volume is secondary: depth matters, not padding.",
      ],
      lists: [
        {
          intro: "Concision inside length:",
          items: [
            "cut empty paragraphs and clichés;",
            "dose adjectives and fluff;",
            "keep opinion when it’s argued;",
            "rebuild the structure entirely if needed.",
          ],
        },
      ],
      links: [
        {
          label: "Copywriter brief",
          href: "/en/blog/tz-kopiraytera/",
        },
        {
          label: "4U headlines",
          href: "/en/blog/zagolovki-4u/",
        },
      ],
    },
    {
      title: "Layout and media",
      level: 2,
      paras: [
        "Picture the finished screen: illustrations, diagrams, video should carry meaning — not “fill holes.” Cut the extra and the story changes.",
        "Media distract: fewer precise elements beat many. Separate interactives (polls, calculators) from the main text so reading isn’t broken.",
        "Two approaches: element substance over quantity; interactivity shouldn’t fight the plot.",
      ],
    },
    {
      title: "What to write about and why",
      level: 2,
      paras: [
        "From the first lines — specifics: people, events, dates, choice drama — instead of textbook-style abstract definitions.",
        "Pick a topic that engages you or the team: otherwise depth is hard to hold. You don’t need to be a guru at everything — you need to reason and cite sources.",
        "Decide access model and CTA early: free reading, subscribe, comment, request. Buttons and popups should be part of the composition — not break mid-chapter.",
      ],
    },
    {
      title: "After publishing",
      level: 2,
      paras: [
        "A longread lives long: update facts, add valuable comments (with consent), fix spots where completion drops.",
        "Don’t rewrite meaning only for commerce and views — you can hollow out the piece. Add usefulness and reading comfort.",
      ],
      lists: [
        {
          intro: "Remember:",
          items: [
            "length ≠ quality;",
            "meaning + structure + layout;",
            "research and editing are required;",
            "search and virality aren’t guaranteed by volume;",
            "update — but don’t dilute the core.",
          ],
        },
      ],
    },
  ],
  closing: [
    "Pick one topic where you have facts and an angle, build an H2 outline, and draft it as a story with a clear ending and CTA — that’s the easiest way to see if you need a designer’s full special project.",
  ],
  related: [
    "struktura-stati",
    "kak-napisat-statyu",
    "bystree-pisat-stati",
    "tz-kopiraytera",
    "prodayushchiy-kontent",
    "eat-kopirayting",
  ],
};
