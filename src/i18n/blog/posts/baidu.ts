import type { BlogPost } from "../../../data/blog";

/** EN overlay for baidu — same structure as RU JSON. */
export const baiduEn: BlogPost = {
  slug: "baidu",
  title: "Baidu and promotion in China: registration and key services",
  date: "2020-09-03",
  category: "SEO",
  cover: "/images/blog/baidu/cover-en.webp",
  excerpt:
    "When you need Baidu, how Chinese search differs from Yandex/Google, which ecosystem services matter for SEO, and how to approach registration without grey schemes.",
  lead: [
    "Baidu is the main search engine in mainland China. If the audience is in the PRC, familiar Google/Yandex and a Western stack are often unavailable or secondary: you need local hosting/licenses, Chinese content, and the Baidu ecosystem.",
    "Below — local SEO specifics, an overview of key services, and a realistic take on registration. No verification-bypass how-tos or grey “phone numbers”.",
  ],
  faq: [
    {
      q: "Does a Russian site with no PRC sales need Baidu?",
      a: "Usually no. It makes sense when entering the Chinese market, partners, or an audience inside the firewall.",
    },
    {
      q: "Why not “just like Google”?",
      a: "Different SERP, language, speed requirements from inside China; ICP and local infrastructure are often needed. A Western site “from outside” loads poorly.",
    },
    {
      q: "Will a Russian phone number work for an account?",
      a: "Registration and verification are often tied to local rules and may fail. Plan legal corporate access — not grey schemes.",
    },
    {
      q: "What is Baidu Webmaster?",
      a: "A webmaster cabinet: indexing, errors, sitemap — similar in spirit to Webmaster/GSC, but in the Baidu ecosystem.",
    },
    {
      q: "Are Baike and Zhidao required?",
      a: "Not always. Baike is an encyclopedia; Zhidao is Q&A. Useful for brand and demand if content is quality and follows platform rules.",
    },
    {
      q: "Do you need Chinese on the site?",
      a: "Yes for Baidu organic. Quick machine translation usually loses to local editing.",
    },
    {
      q: "Is Baidu ads separate?",
      a: "Yes: paid formats have their own cabinet and budget. Organic and paid aren’t interchangeable.",
    },
    {
      q: "How long until effect?",
      a: "Same as elsewhere: site prep ≠ TOP. Index and visibility grow over months of steady work — planned TOP often 2–6 months after prep, not a registration checkbox.",
    },
  ],
  sections: [
    {
      title: "SEO specifics for China",
      level: 2,
      paras: [
        "Load speed from mainland China is critical: CDN/hosting outside the region often means poor UX. Content and meta — in Simplified Chinese for intent. Mobile traffic dominates.",
        "Legal and infrastructure wrapping (domain, ICP, company) is a separate loop; without a local partner, launching “from scratch from abroad” is rarely smooth.",
      ],
      lists: [
        {
          intro: "Differences from familiar SEO:",
          items: [
            "another link and social-signal ecosystem;",
            "Baidu services instead of a Google stack;",
            "stricter locality requirements;",
            "different content filters and rules.",
          ],
        },
      ],
    },
    {
      title: "Registration: a realistic approach",
      level: 2,
      paras: [
        "Official path: an account via current Baidu forms, verification per service rules, then access to needed products (Webmaster and others). UIs and requirements change — follow Baidu help, not 2018–2020 guides.",
        "Grey methods (“someone else’s number”, bypassing checks) risk blocks, lost access, and legal trouble. Business needs transparent access and a cabinet owner.",
      ],
      lists: [
        {
          intro: "Before registration lock:",
          items: [
            "goal (brand / leads / store);",
            "domain and hosting reachable from China;",
            "Chinese editorial;",
            "who owns the account in the company.",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "We don’t publish or recommend verification-bypass schemes. Official channels only.",
        },
      ],
    },
    {
      title: "Baidu Webmaster and the index",
      level: 2,
      paras: [
        "Webmaster is the base panel: site verification, sitemap, crawl and error monitoring. Without it it’s hard to know whether Baidu sees your URLs.",
        "Baidu Index estimates query interest (similar in spirit to keyword/trends tools). Useful for demand — not as the only semantics source.",
      ],
      lists: [
        {
          intro: "Minimum after access:",
          items: [
            "verify the site;",
            "submit a sitemap;",
            "check mobile availability from China;",
            "keep an indexing-error log.",
          ],
        },
      ],
      links: [
        {
          label: "Sitemap",
          href: "/en/blog/karta-sayta/",
        },
      ],
    },
    {
      title: "Content platforms in the ecosystem",
      level: 2,
      paras: [
        "Baidu Baike — encyclopedic articles (strict moderation). Zhidao — Q&A. Tieba — interest forums. Feng Yun Bang and rankings — more trend monitoring than a “TOP button”.",
        "Use platforms for expertise and brand, not identical-anchor spam. Moderation rules are stricter than Western blogs suggest.",
      ],
      lists: [
        {
          intro: "Practice:",
          items: [
            "site and Webmaster first;",
            "then selective Baike/Zhidao by niche;",
            "no machine-translation auto-fill;",
            "one brand and contacts.",
          ],
        },
      ],
    },
    {
      title: "Product and analytics loop",
      level: 2,
      paras: [
        "Design the funnel inside China: messengers, local payment and support platforms. Western GA may be unavailable to the audience — use locally allowed analytics and server logs.",
        "Build semantics for Chinese demand — not a calque of a Russian core.",
      ],
      lists: [
        {
          intro: "Launch checklist:",
          items: [
            "speed from target provinces;",
            "mobile layout;",
            "local contacts/payments for the business model;",
            "Chinese content plan;",
            "budget for ongoing support, not a one-off “visit”.",
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
      title: "When Baidu isn’t your channel",
      level: 2,
      paras: [
        "If clients are in RU/CIS and there’s no Chinese supply — better invest in Google/Yandex, maps, and local-language content. “Register in Baidu just in case” almost never helps.",
        "If the PRC market is real — budget a local contractor or legal structure, not only an SEO article.",
      ],
      lists: [
        {
          intro: "Contractor red flags:",
          items: [
            "Baidu TOP guarantee in a week;",
            "grey “turnkey” accounts;",
            "no Webmaster report;",
            "only link buying without a site in China.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Site reachability from China and language first, then Baidu cabinets — or you optimize emptiness.",
        },
      ],
    },
  ],
  related: [
    "karta-sayta",
    "semanticheskoe-yadro",
    "tehnicheskiy-seo-audit",
    "seo-malyy-biznes",
    "katalogi-saytov",
  ],
};
