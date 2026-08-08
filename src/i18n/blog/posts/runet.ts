import type { BlogPost } from "../../../data/blog";

/** EN overlay for runet — same structure as RU JSON. */
export const runetEn: BlogPost = {
  slug: "runet",
  title: "Runet: what it is and how the segment differs",
  date: "2020-10-13",
  category: "Blog",
  cover: "/images/blog/runet/cover-en.webp",
  excerpt:
    "Runet is the Russian-language / Russia-facing segment of the internet: .ru and .рф domains, Cyrillic content, search and service ecosystems — traits without outdated stats and stereotypes.",
  lead: [
    "Runet usually means the Russian and, more broadly, Russian-language segment of the internet: content in Russian, familiar domains (.ru, .рф, partly .su), and local service ecosystems. The border isn’t rigid: a .com site can still be “about Runet” if the audience and language are Russian.",
    "Below: segment traits that matter for marketing and product. We don’t recycle “millions of sites” figures or 2020 stereotypes as today’s facts.",
  ],
  faq: [
    {
      q: "Is Runet only the .ru domain?",
      a: "No. It’s more about language, audience, and familiar platforms. You’ll see .рф, .com, regional TLDs, and services without a classic website of their own.",
    },
    {
      q: "How does it differ from the “global” internet?",
      a: "Cyrillic in content and often in URLs, a strong role for local search and super-apps, regional social/messengers, plus legal and payment specifics.",
    },
    {
      q: "Do I need a .рф site?",
      a: "Optional. What matters is a clear brand, solid tech, and visibility in target search. .рф helps Cyrillic spelling but isn’t required.",
    },
    {
      q: "Is Yandex required and Google optional?",
      a: "For many Russia-facing niches Yandex is critical; Google often still takes a share. Use your analytics, not someone else’s “2015 league table.”",
    },
    {
      q: "Is Runet only about Russia?",
      a: "Conversation often mixes RF and the Russian-speaking diaspora/CIS. For strategy, define who you actually serve (geo, currency, delivery, law).",
    },
    {
      q: "Why does the network language feel “special”?",
      a: "Lots of calques, abbreviations, emoji, and casual register in comments. For a brand that’s a cue to set tone: formal on the site, livelier on social — by audience.",
    },
    {
      q: "Do portals like Yandex/Mail still matter?",
      a: "As entry points and ecosystems — yes. Habits also shift to apps, messengers, and search. Don’t build strategy only on a “2010s portal banner.”",
    },
    {
      q: "What matters most for business in Runet?",
      a: "A clear offer in Russian, local traffic channels, payment and delivery for the region, and compliance with platform and data rules.",
    },
  ],
  sections: [
    {
      title: "What people call Runet",
      level: 2,
      paras: [
        "The word blends `ru` (zone / country) and `net` (network). In practice it isn’t one closed garden — it’s an overlap of language, audience, domains, and services.",
        "A user abroad can open a Russian-language site; a company in Russia can run on .com. For marketing, audience and intent beat a formal definition.",
      ],
      lists: [
        {
          intro: "Segment landmarks:",
          items: [
            "Russian as the main content language",
            ".ru / .рф domains and mixed zones",
            "local search, maps, payments, support",
            "familiar regional social apps and messengers",
          ],
        },
      ],
      links: [
        {
          label: "The .рф domain",
          href: "/en/blog/domen-rf/",
        },
        {
          label: "Messengers",
          href: "/en/blog/messendzher/",
        },
      ],
    },
    {
      title: "Content and services",
      level: 2,
      paras: [
        "Beyond websites the segment includes mail, clouds, streaming, marketplaces, government services, and apps — “the internet” isn’t just a site on hosting.",
        "Portal ecosystems (search + mail + news + services) were historically strong. Today users often live in apps, but a “start with Yandex/search” habit remains for part of the audience.",
        "For SEO and ads that means: Russian keywords, snippets for local SERPs, and separate hypotheses for Yandex and Google.",
      ],
      links: [
        {
          label: "Email service",
          href: "/en/blog/pochtovyy-servis/",
        },
        {
          label: "Social media for business",
          href: "/en/blog/sotsseti-dlya-biznesa/",
        },
      ],
    },
    {
      title: "Search and advertising",
      level: 2,
      paras: [
        "Local search engines and ad accounts are tuned for language, maps, and regional commercial factors. A global “US SEO” template without adaptation often underperforms.",
        "Don’t lean on myths like “women only search in translit” — that’s a stereotype from old roundups, not a research method. Use your Wordstat/GSC and surveys.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Stats go stale",
          text: "Don’t put “N million sites” or “younger than the West” claims from 2020 texts into a pitch without a fresh source.",
        },
      ],
      links: [
        {
          label: "Yandex Wordstat",
          href: "/en/blog/wordstat/",
        },
        {
          label: "SEO for Yandex and Google",
          href: "/en/blog/seo-yandex-google/",
        },
      ],
    },
    {
      title: "Communication and net culture",
      level: 2,
      paras: [
        "Comments, chats, and social are a dense part of Runet: from work chats to memes. Fake profiles and DM spam are familiar background; brands need moderation and official contact channels.",
        "Network language: calques, shortenings, emoji. Corporate sites usually keep a neutral literate tone; content marketing can sit closer to audience speech without losing meaning.",
      ],
    },
    {
      title: "Key takeaways",
      level: 2,
      paras: [
        "Runet is about audience and language more than one domain.",
        "Build product and marketing for local channels and rules, and check figures against fresh data.",
        "Stereotypes from old “Runet portraits” don’t replace analytics.",
      ],
    },
  ],
  closing: [
    "Define who you treat as your “Runet audience” (geo, language, channels) and check site and ads against that audience frame — more useful than arguing over the word “Runet.”",
  ],
  related: [
    "domen-rf",
    "seo-yandex-google",
    "wordstat",
    "sotsseti-dlya-biznesa",
    "messendzher",
    "pochtovyy-servis",
  ],
};
