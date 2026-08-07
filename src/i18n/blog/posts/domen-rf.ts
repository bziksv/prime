import type { BlogPost } from "../../../data/blog";

/** EN overlay for domen-rf — same structure as RU JSON. */
export const domenRfEn: BlogPost = {
  slug: "domen-rf",
  title: "The .рф domain: specifics and promotion",
  date: "2021-05-31",
  category: "SEO",
  cover: "/images/blog/domen-rf/cover-en.webp",
  excerpt:
    "What the .рф zone is, why use a Cyrillic domain, which technical nuances remain, and how to promote the site without the myth that “.рф doesn’t rank.”",
  lead: [
    "The `.рф` zone is a Cyrillic top-level domain for Russian-language addresses. The name is easier to type on a Russian keyboard, but tech and email often show punycode.",
    "A short history, common myths, and practical SEO tips. General TLD levels live in the top-level domain article.",
  ],
  faq: [
    {
      q: "Is `.рф` worse than `.ru` for Yandex?",
      a: "Not as a rule. Content, tech, links, and demand decide. The zone is one signal, not a sentence.",
    },
    {
      q: "What is punycode?",
      a: "The Latin encoding of a Cyrillic name (it starts with `xn--…`). You’ll see it in certificates, logs, and some emails.",
    },
    {
      q: "Do I need a mirror `.ru`?",
      a: "Often handy: brand on `.рф` plus a familiar `.ru` with a canonical redirect to one address.",
    },
    {
      q: "Is SSL hard to set up for .рф?",
      a: "Modern certificates support IDN. The key is issuing the cert for the punycode/name correctly and setting up HTTPS.",
    },
    {
      q: "Should I put a keyword in `.рф`?",
      a: "A short clear name helps. A long “keyword-with-hyphens” name usually loses to a brand.",
    },
    {
      q: "Can I use `.рф` for email?",
      a: "Technically possible, but not equally convenient in every client and system. Before you launch corporate mail, test send/receive with key contacts.",
    },
    {
      q: "Should I move an existing `.ru` site to `.рф`?",
      a: "Usually no without a strong brand reason. A domain change is a separate migration with 301s, link updates, and temporary-drop risk.",
    },
  ],
  sections: [
    {
      title: "Where the zone came from",
      level: 2,
      paras: [
        "`.рф` is an IDN — domains in national alphabets. The zone was finalized in the late 2000s, and the first user sites opened in 2010.",
        "The idea was a memorable address for a Russian-language brand without switching keyboard layout. Early on, old browsers and punycode confusion hurt; today support in modern browsers and search is widespread, but technical nuances still matter.",
        "Inside systems a Cyrillic name may show as `xn--…`. That’s normal IDN encoding, not a fake-site mark. You’ll meet it in certificates, logs, DNS settings, and some mail apps.",
      ],
      lists: [],
    },
    {
      title: "Myths about promotion",
      level: 2,
      paras: [
        "“Cyrillic isn’t indexed” is outdated. “You’ll always lose to `.ru`” isn’t a hard rule. “A keyword in `.рф` = rankings” is also a myth: the zone doesn’t replace keyword research, tech quality, and useful pages.",
        "Search engines judge a site by the full mix: intent match, availability, content quality, structure, reputation, and usability. A national zone can be a natural signal for a Russian-language project, but it isn’t a promotion strategy on its own.",
        "Don’t tie a zone change to a promise of fast growth. SEO prep — audit, tech, keywords, copy, and analytics — takes weeks or about a month; getting the core into the top results is planned for 2–6 months of work and depends on competition.",
      ],
      lists: [
        {
          intro: "What matters more than the zone:",
          items: [
            "landing quality and the query set",
            "speed, mobile, security",
            "links and brand mentions",
            "a clear canonical URL (one primary mirror)",
          ],
        },
      ],
      links: [
        {
          label: "Top-level domain",
          href: "/en/blog/domen-pervogo-urovnya/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          text: "Choosing a zone is part of site prep. Getting a commercial keyword set into the top results is planned over 2–6 months of work — not a consequence of `.рф` or `.ru`.",
        },
      ],
    },
    {
      title: "Practical tips",
      level: 2,
      paras: [
        "Check how the name looks in email, messengers, CRM, and ad accounts. Punycode can scare beginners, so use one clear spelling in docs and ads and briefly explain it when needed.",
        "IDN certificates are supported by modern CAs, but the name must land correctly in the request and server settings. After issue, check HTTPS in the browser and no mixed content on the site.",
        "In Webmaster and Search Console, add the canonical host. Set one www/non-www and http→https policy, and send alternate domains there with a permanent 301.",
      ],
      lists: [
        {
          intro: "Owner checklist for `.рф`:",
          items: [
            "a short pronounceable name",
            "SSL and one canonical address",
            "if needed — a paired `.ru` with 301",
            "robots/sitemap without surprises",
            "brand in copy and snippets, not only a “keyword” domain",
          ],
        },
      ],
      links: [
        {
          label: "HTTPS and SEO",
          href: "/en/blog/https-seo/",
        },
      ],
    },
    {
      title: "Pick a name with the brand in mind",
      level: 2,
      paras: [
        "The domain should be short, pronounceable, and easy to dictate. Check how it looks in the search bar, on a card, in ads, in a voice note, and in an email address. The less spelling you must explain, the better.",
        "A keyword in the name can hint at the topic, but it doesn’t replace a brand or guarantee positions. A long hyphenated city-and-service string is hard to remember and ages fast when the assortment grows.",
        "Check name history, legal risk, and similarity to other trademarks before buying. A pretty domain isn’t worth a future dispute or constant mistyped visits to another brand.",
      ],
      lists: [
        {
          intro: "Before registration ask:",
          items: [
            "is the address easy to say on the phone",
            "does it confuse with a similar word or brand",
            "will it fit future products and regions",
            "are important protective name variants available",
          ],
        },
      ],
    },
    {
      title: "Protect the brand and set redirects",
      level: 2,
      paras: [
        "If budget allows, register a close variant in `.ru` or another relevant TLD so users don’t land on a same-name site. Pick one primary address and don’t host the same site on several domains without redirects.",
        "When moving domains, map URLs in advance: each important page should go to the nearest relevant address, not only the home page. Update canonicals, sitemap, internal links, analytics, and business listings.",
        "Check redirects after go-live and keep the old domain during migration. Cutting the old address abruptly loses users, links, and history.",
      ],
      lists: [],
      notes: [
        {
          title: "Don’t confuse timelines",
          text: "A domain change is a technical project with risks — not a quick ranking boost. Prep the migration first, then watch indexing and visibility by cluster.",
        },
      ],
    },
    {
      title: "A practical owner checklist for `.рф`",
      level: 2,
      paras: [
        "The zone itself doesn’t need a special SEO tactic. You need ordinary careful ops: renewal, DNS access, secure HTTPS, backup registrar contacts, and regular checks of key pages.",
        "Every few months confirm the certificate renews, the sitemap is reachable, redirects don’t chain, and mail/forms accept messages. Those basics usually matter more than arguing which zone is “better.”",
        "If the audience hesitates over an unfamiliar address, explain brand benefits and show the URL consistently across channels. Trust comes from a clear site, security, and reputation — not the zone alone.",
      ],
      lists: [],
    },
  ],
};
