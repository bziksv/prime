import type { BlogPost } from "../../../data/blog";

/** EN overlay for vybor-domena — same structure as RU JSON. */
export const vyborDomenaEn: BlogPost = {
  slug: "vybor-domena",
  title: "How to choose a domain name for your website",
  date: "2017-01-25",
  category: "Digital marketing",
  cover: "/images/blog/vybor-domena/cover-en.webp",
  excerpt:
    "How to choose a domain: zone (.ru and others), uniqueness, region in the name, brevity and spoken readability, which words to use, and why to keep the domain with a registrar — not only the host.",
  lead: [
    "You pick a domain rarely — and live with it for years. A good name is easier to say aloud, remember, and type; a bad one gets confused with competitors or forgotten after outdoor ads.",
    "Use this checklist: zone, uniqueness, region, length, and how well it survives a phone call. TLD levels and zone SEO are separate topics; payment steps at the registrar are in the registration guide.",
  ],
  faq: [
    {
      q: "Which zone works best for Russia?",
      a: "Most often `.ru` or `.рф` for a local audience. Exotic gTLDs fit promos better than as the only main address.",
    },
    {
      q: "Should I register the domain with my host?",
      a: "You can, but a separate registrar is easier: simpler to change hosting without losing control of the name.",
    },
    {
      q: "Do you need a region in the domain?",
      a: "A plus if you work in one city or region. A downside — with national growth the name can feel too tight.",
    },
    {
      q: "Is a keyword in the domain required?",
      a: "No. A clear brand beats a long hyphenated exact-match.",
    },
    {
      q: "Are hyphens OK in a domain name?",
      a: "Better without: people often skip the hyphen when typing. If the non-hyphen version is taken — weigh confusion risk.",
    },
    {
      q: "Can I use several domains for one site?",
      a: "Yes: a short one for ads plus a branded corporate name, with 301 to the canonical.",
    },
    {
      q: "Should I mix Russian and English in the name?",
      a: "Better pick one transliteration or language logic so people don't guess when typing.",
    },
  ],
  sections: [
    {
      title: "Zone and audience habit",
      level: 2,
      paras: [
        "For business in Russia, `.ru` and `.рф` are familiar. New thematic gTLDs fit campaigns, but as the main address they're often harder to remember.",
        "If the audience is wider than the CIS — look at `.com` or local ccTLDs on purpose, not \"because it's free.\"",
      ],
      links: [
        {
          label: "Top-level domain",
          href: "/en/blog/domen-pervogo-urovnya/",
        },
        {
          label: ".рф domain",
          href: "/en/blog/domen-rf/",
        },
      ],
    },
    {
      title: "Uniqueness and confusion with competitors",
      level: 2,
      paras: [
        "A name like neighbors in the niche — one letter changed or \"tech/mech/service\" swapped — sends traffic to competitors and costs you leads.",
        "List competitor domains before registering. Avoid hyphen mirrors of an already taken non-hyphen name.",
      ],
    },
    {
      title: "Brevity and spoken readability",
      level: 2,
      paras: [
        "Rule of thumb: short (often up to ~12 second-level characters), 1–2 clear roots, no rare letters people spell differently by ear (w/v, j/y, etc.).",
        "Test: dictate the name to colleagues on the phone. If they argue about spelling — simplify.",
      ],
      lists: [
        {
          intro: "Name checklist:",
          items: [
            "zone is clear to the audience",
            "not confused with competitors",
            "easy to dictate",
            "no extra hyphens",
            "domain history checked before purchase",
          ],
        },
      ],
      links: [
        {
          label: "Domain history",
          href: "/en/blog/istoriya-domena/",
        },
        {
          label: "Domain registration",
          href: "/en/blog/registratsiya-domena/",
        },
      ],
    },
  ],
  notes: {
    title: "Important",
    text: "\"Wrong zone\" traffic examples and registrar UIs are illustrations, not guaranteed figures. Before buying a taken or secondary name, check history and legal risks.",
  },
  closing: [
    "Pick a short unique name in a familiar zone, register with a reliable registrar, and set the canonical — so the domain helps marketing instead of becoming a spoken riddle for the client.",
  ],
  related: [
    "domen-pervogo-urovnya",
    "domen-rf",
    "registratsiya-domena",
    "istoriya-domena",
    "redirekt",
    "pochta-dlya-domena",
  ],
};
