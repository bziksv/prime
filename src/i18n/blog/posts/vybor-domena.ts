import type { BlogPost } from "../../../data/blog";

/** EN overlay for vybor-domena — same structure as RU JSON. */
export const vyborDomenaEn: BlogPost = {
  slug: "vybor-domena",
  title: "How to choose a domain name for your site",
  date: "2017-01-25",
  category: "Digital marketing",
  cover: "/images/blog/vybor-domena/cover-en.webp",
  excerpt:
    "How to pick a domain: zone (.ru and others), uniqueness, region in the name, brevity and spoken clarity, which words to use, and why to keep the domain with a registrar — not only the host.",
  lead: [
    "You pick a domain rarely — and live with it for years. A good name is easy to say, remember, and type; a bad one gets mixed up with competitors or forgotten after outdoor ads.",
    "Below: practical criteria — zone, uniqueness, region, length, and how well it survives a phone call. TLD levels and zone SEO are separate; payment steps at the registrar are in the registration guide.",
  ],
  faq: [
    {
      q: "Which zone for a Russian audience?",
      a: "Most often `.ru` or `.рф` for local traffic. Exotic gTLDs fit promos better than as the only main address.",
    },
    {
      q: "Register with the host?",
      a: "You can, but a separate registrar is easier: switch hosting later without losing control of the name.",
    },
    {
      q: "Should the domain include a region?",
      a: "Helpful if you work in one city or area. A downside — with national growth the name can feel too tight.",
    },
    {
      q: "Is a keyword in the domain required?",
      a: "No. A clear brand beats a long hyphenated exact-match.",
    },
    {
      q: "Are hyphens OK?",
      a: "Better without — people often skip the hyphen when typing. If the non-hyphen version is taken, weigh the confusion risk.",
    },
    {
      q: "Several domains for one site?",
      a: "Yes: a short one for ads plus a branded corporate name, with 301 to the canonical.",
    },
    {
      q: "Mix Russian and English in the name?",
      a: "Pick one transliteration or language logic so people don’t guess when typing.",
    },
  ],
  sections: [
    {
      title: "Zone and audience habit",
      level: 2,
      paras: [
        "For business in Russia, `.ru` and `.рф` are familiar. New thematic gTLDs fit campaigns, but as the main address they’re often harder to remember.",
        "If the audience is wider than the CIS — look at `.com` or local ccTLDs on purpose, not “because it’s free.”",
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
      title: "Uniqueness and competitor mix-ups",
      level: 2,
      paras: [
        "A name like neighbors in the niche — one letter changed, or “tech/mech/service” swapped — sends leads to the wrong place and costs you yours.",
        "List competitor domains before you register. Avoid hyphen mirrors of an already taken non-hyphen name.",
      ],
    },
    {
      title: "Short names that survive a phone call",
      level: 2,
      paras: [
        "Rule of thumb: short (often up to ~12 second-level characters), one or two clear roots, no rare letters people spell differently by ear (w/v, j/y, and so on).",
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
    text: "“Wrong zone” traffic examples and registrar UIs are illustrations, not guaranteed figures. Before buying a taken or secondary name, check history and legal risks.",
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
