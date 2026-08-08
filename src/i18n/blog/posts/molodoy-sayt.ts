import type { BlogPost } from "../../../data/blog";

/** EN overlay for molodoy-sayt — same structure as RU JSON. */
export const molodoySaytEn: BlogPost = {
  slug: "molodoy-sayt",
  title: "How to promote a young website",
  date: "2021-03-04",
  category: "SEO",
  cover: "/images/blog/molodoy-sayt/cover-en.webp",
  excerpt:
    "Where to start SEO for a new site: tech, content, commercial factors, and realistic timelines — without behavioral gaming or “bypass competitor” secrets.",
  lead: [
    "A young site rarely outranks strong competitors in a week. First: index, tech, clear service pages, and trust — then demand growth.",
    "Below: work order, commercial signals, trust, and common traps. We don’t cover gaming behavioral signals or gray-hat schemes — and we don’t recommend them.",
  ],
  faq: [
    {
      q: "Is there a young-site “sandbox”?",
      a: "There’s no endless “young = don’t rank” filter as a button. A new domain still needs time for crawl, trust, and useful signals.",
    },
    {
      q: "What should I do in month one?",
      a: "Indexing, Metrika/Webmaster, tech, a keyword set, 5–15 strong landings, contacts, and commercial blocks.",
    },
    {
      q: "Should I game behavioral metrics?",
      a: "No. Sanction risk. Improve UX and attract real traffic: content, ads, PR.",
    },
    {
      q: "When should I expect page one?",
      a: "Prep — weeks (~a month as a guide). Noticeable ranking gains for the core — planned 2–6 months after work starts.",
    },
    {
      q: "Should I buy links right away?",
      a: "Not first. Your own content and site hygiene first; links — selective and quality.",
    },
    {
      q: "How many pages should I start with?",
      a: "No universal number. Priority services/categories and answers to frequent questions, then expand by demand.",
    },
    {
      q: "Do I need paid search?",
      a: "It can bring first leads and demand data if economics work. It doesn’t replace SEO, but it tests offer and landings.",
    },
    {
      q: "New domain or aged with history?",
      a: "A clean aged domain can speed the start; a dirty one is worse than new. Check sanctions and link profile before buying.",
    },
  ],
  sections: [
    {
      title: "Where to start optimization",
      level: 2,
      paras: [
        "Close critical tech, open the site to bots, build a core, make a structure. Without that, content and links run idle.",
        "Every important page should answer a concrete query and be a few clicks away. Don’t create dozens of similar URLs for volume — they cannibalize each other and complicate crawl.",
      ],
      lists: [
        {
          intro: "Start:",
          items: [
            "https, speed, mobile",
            "sitemap and indexing",
            "semantics and priorities",
            "Title/H1 templates without clones",
            "Webmaster and Metrika",
          ],
        },
      ],
      links: [
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
        {
          label: "Technical audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "Content and commercial signals",
      level: 2,
      paras: [
        "Write useful pages for demand; refresh what’s stale. For commerce, prices/cues, terms, contacts, delivery, and trust are critical.",
        "Show who delivers the service and how the deal works: details, team, guarantees, work samples, objection answers. That helps people and site-quality assessment.",
      ],
      lists: [
        {
          intro: "Stronger than “behavioral secrets”:",
          items: [
            "a clear offer",
            "cases and facts",
            "fast forms",
            "honest reviews and company details",
            "a contacts page without a quest",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Prep for promotion is often ~a month. Commercial-core page-one share is a separate stage of 2–6 months.",
        },
      ],
    },
    {
      title: "Analytics from day one",
      level: 2,
      paras: [
        "Without counters and goals you can’t tell “site isn’t moving” from “we don’t see leads.” Set Metrika/Analytics, goals, Webmaster, and Search Console before heavy publishing.",
        "Watch indexing of priority URLs, bounce on landings, where first inquiries come from. Even modest traffic yields edit hypotheses.",
      ],
      lists: [
        {
          intro: "Analytics minimum:",
          items: [
            "counter and lead/call goals",
            "Webmaster + sitemap",
            "a priority URL list to monitor",
            "a weekly look at crawl errors",
          ],
        },
      ],
      links: [
        {
          label: "Goals in Metrika",
          href: "/en/blog/metrika-tseli/",
        },
        {
          label: "Yandex Webmaster",
          href: "/en/blog/yandeks-vebmaster/",
        },
      ],
    },
    {
      title: "Work plan and real timelines",
      level: 2,
      paras: [
        "Prep usually takes about a month: audit, critical fixes, semantics, priority pages, analytics. On a complex project stages run longer.",
        "Page one ≠ the date you start work. For a commercial core, rankings grow planned over 2–6 months: a noticeable chunk nearer month 2–3, the rest by competition and site quality.",
      ],
      lists: [
        {
          intro: "To see progress:",
          items: [
            "indexing of priority pages",
            "share of target queries in visibility",
            "organic and inquiries by channel",
            "pages with growing impressions but weak conversion",
          ],
        },
      ],
      tables: [
        {
          caption: "Don’t confuse stages",
          headers: ["Stage", "Guide"],
          rows: [
            ["Prep / start of work", "~weeks–a month"],
            ["Building rankings for the core", "planned 2–6 mo."],
            ["“Page one in a week via behavioral gaming”", "not a goal — a risk"],
          ],
        },
      ],
    },
    {
      title: "How to grow trust without gray schemes",
      level: 2,
      paras: [
        "Trust is site usefulness plus external proof: cases, maps, honest reviews, expert pieces.",
        "External mentions — via partnerships and industry media their audiences care about. Mass buys and artificial signals don’t stick.",
      ],
      lists: [
        {
          intro: "Clean early signals:",
          items: [
            "profiles on maps and directories",
            "cases with client consent",
            "expert comments",
            "content worth linking to",
          ],
        },
      ],
      links: [
        {
          label: "Buying links: risks",
          href: "/en/blog/pokupka-ssylok/",
        },
        {
          label: "Behavioral gaming: risks",
          href: "/en/blog/nakrutka-pf/",
        },
      ],
    },
    {
      title: "Traps of a young project",
      level: 2,
      paras: [
        "Competitor copy-paste, doorways, behavioral gaming, and expecting miracles from one article — classics. Study competitors for structure ideas, not cloning.",
        "Don’t hide weak commerce behind ranking reports. If leads aren’t handled or the form fails on phone, visibility won’t become revenue.",
      ],
      lists: [
        {
          intro: "Do:",
          items: [
            "competitor analysis by meaning",
            "regular analytics",
            "improve pages with bounce",
            "patience and iterations",
            "an explicit no to gray “accelerators”",
          ],
        },
      ],
      links: [
        {
          label: "Competitor analysis",
          href: "/en/blog/analiz-konkurentov/",
        },
      ],
    },
    {
      title: "When to add ads and PR",
      level: 2,
      paras: [
        "Search and social ads help test demand and collect first leads while organic builds. Don’t mix “bought clicks” with “hit SEO page one” in your head.",
        "PR and partnerships grow brand queries and mentions. That’s a long game beside SEO — not a substitute for tech and content.",
      ],
      lists: [
        {
          intro: "Alongside SEO it fits to:",
          items: [
            "test the offer in Direct/Ads at a sane CPA",
            "map cards",
            "selective expert publishes",
            "not — link packs “for page one”",
          ],
        },
      ],
      links: [
        {
          label: "Brand traffic",
          href: "/en/blog/brendovyy-trafik/",
        },
      ],
    },
  ],
  related: [
    "samostoyatelnoe-seo",
    "tehnicheskiy-seo-audit",
    "nakrutka-pf",
    "pokupka-ssylok",
    "analiz-konkurentov",
    "brendovyy-trafik",
  ],
};
