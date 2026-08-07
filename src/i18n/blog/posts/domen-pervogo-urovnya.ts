import type { BlogPost } from "../../../data/blog";

/** EN overlay for domen-pervogo-urovnya — same structure as RU JSON. */
export const domenPervogoUrovnyaEn: BlogPost = {
  slug: "domen-pervogo-urovnya",
  title: "Top-level domain: what it is and how it affects SEO",
  date: "2021-10-12",
  category: "SEO",
  cover: "/images/blog/domen-pervogo-urovnya/cover-en.webp",
  excerpt:
    "What a top-level domain (TLD) is: .ru, .com, and other zones. How name levels differ, how the zone ties to SEO and traffic, and how to choose a name.",
  lead: [
    "A top-level domain (TLD) is the tail after the last dot: `.ru`, `.com`, `.online`. Site owners don’t invent zones — they already exist; creativity lives in the second-level name.",
    "Below — domain levels, zone types, and a realistic SEO impact. A good name helps brand and SERP click, but it doesn’t replace content, tech, and links.",
  ],
  faq: [
    {
      q: "What is a top-level domain?",
      a: "TLD is the zone at the end of the name (`example.ru` → `.ru`). Everything left of it is lower levels (second, third…).",
    },
    {
      q: "Can I create my own .mybrand zone?",
      a: "For a typical business — no. New gTLDs come through ICANN/registries; for a site you pick an existing zone and a free second-level name.",
    },
    {
      q: "Is `.ru` better than `.com` for local search in Russia?",
      a: "For a RU audience `.ru` / `.рф` are often expected. Local signals and content matter more than “zone magic”; a strong `.com` can rank too.",
    },
    {
      q: "Does a keyword in the domain help?",
      a: "A mild plus for click and meaning is possible, but exact-match isn’t a cheat boost anymore. A narrow keyword hurts if the niche changes.",
    },
    {
      q: "How is a subdomain different from a TLD?",
      a: "Subdomain is on the left: `shop.example.ru`. TLD is on the right: `.ru`. Subdomains often cover sections, regions, services.",
    },
  ],
  sections: [
    {
      title: "Domain name levels",
      level: 2,
      paras: [
        "Read right to left. First level is the zone (`.com`). Second is your name (`google` in `google.com`). Third and further are subdomains or compound zones like `example.co.uk` (public-suffix structure is more complex).",
      ],
      lists: [
        {
          intro: "Examples:",
          items: [
            "`site.ru` — second level + `.ru`;",
            "`blog.site.ru` — subdomain;",
            "`mail.yandex.ru` — a service on a subdomain.",
          ],
        },
      ],
      links: [
        {
          label: "Web server",
          href: "/en/blog/veb-server/",
        },
      ],
    },
    {
      title: "What kinds of TLD exist",
      level: 2,
      paras: [
        "Country-code (ccTLD): `.ru`, `.by`, `.kz`… Generic (gTLD): `.com`, `.net`, `.org`, `.online`, `.shop`, and hundreds more. Some zones imply an industry or registration limits.",
      ],
      lists: [
        {
          intro: "Zone choice cues:",
          items: [
            "where the main audience is;",
            "trust in the niche (what clients expect to see);",
            "whether a short second-level name is free;",
            "registry legal rules.",
          ],
        },
      ],
    },
    {
      title: "Impact on SEO and traffic",
      level: 2,
      paras: [
        "Search engines use geo signals, including the zone, but it’s one factor among many. Content, structure, E-E-A-T signals, links, and behavior matter more.",
        "The name affects CTR: short, pronounceable, without spammy hyphens get more clicks. A keyword in the domain won’t replace landings and a semantic core.",
      ],
      lists: [
        {
          intro: "Practical tips:",
          items: [
            "a brand or clear general word beats a narrow “pizza-sushi-2021”;",
            "check trademarks and confusion with competitors;",
            "close www/non-www and https with redirects;",
            "don’t expect TOP only because of a `.ru` zone.",
          ],
        },
      ],
      notes: [
        {
          title: "Timelines",
          text: "Picking a domain is part of site prep. Reaching TOP on a commercial core is a separate months-long process — not the result of one zone.",
        },
      ],
    },
    {
      title: "How to choose a name",
      level: 2,
      paras: [
        "Strategy first (brand / geo / niche), then availability in the zones you need, then registrar signup and DNS to hosting.",
      ],
      lists: [
        {
          intro: "Name checklist:",
          items: [
            "easy to say on a call;",
            "no ambiguous spelling;",
            "free in the priority zone;",
            "email and social handles free if possible;",
            "registration term and auto-renew set.",
          ],
        },
      ],
      links: [
        {
          label: "SSL certificate",
          href: "/en/blog/ssl-sertifikat/",
        },
      ],
    },
  ],
};
