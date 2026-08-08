import type { BlogPost } from "../../../data/blog";

/** EN overlay for razmeshchenie-lendinga — same structure as RU JSON. */
export const razmeshchenieLendingaEn: BlogPost = {
  slug: "razmeshchenie-lendinga",
  title: "Where to host a landing page: domain, subdomain, or inside the site",
  date: "2019-10-21",
  category: "Digital marketing",
  cover: "/images/blog/razmeshchenie-lendinga/cover-en.webp",
  excerpt:
    "Three ways to place a landing page: a separate domain, a subdomain, or a URL on the main site — pros, cons, SEO, and when to pick which for the offer and audience.",
  lead: [
    "You can put a landing on a new domain, on a subdomain, or as a page inside the main site. There is no universal “always do this”: the choice depends on the offer, closeness to the current brand, and the traffic channel.",
    "Below: a comparison of three schemes — without surveys for surveys’ sake. How to build blocks and copy lives in the landing and landing-copy articles; here it’s only the URL and infrastructure question.",
  ],
  faq: [
    {
      q: "What do people pick most often for paid traffic?",
      a: "Any of the three works if speed and the offer are solid. For SEO, a page on the main domain with history is usually more convenient.",
    },
    {
      q: "Is a separate domain always better?",
      a: "No. You need it when the offer/brand is strongly different or the main site has a bad reputation. Otherwise you pay for age and links again from zero.",
    },
    {
      q: "Does a subdomain inherit the main site’s SEO?",
      a: "Search engines often treat a subdomain as close, but not “the same” site. It feeds the main domain’s behavior and link weight less than an internal page.",
    },
    {
      q: "Is there affiliate-filter risk on a new domain?",
      a: "If you copy contacts, template, and assortment from the main site, risk is higher. A new domain is for a different project/audience — not a clone “for a keyword in the URL.”",
    },
    {
      q: "Should an online store use a separate domain per product?",
      a: "Usually no: the product card/category on one domain is the landing. A separate domain is for another business or a test outside the catalog.",
    },
    {
      q: "What should I choose for a hypothesis test?",
      a: "A fast URL on the main site, or a light separate domain if you can’t touch prod. What matters is measuring conversion — not a pretty address.",
    },
  ],
  sections: [
    {
      title: "Three placement schemes",
      level: 2,
      paras: [
        "Separate domain: `promo.example` → its own site. Subdomain: `lp.site.com`. Inside the site: `site.com/landing/` or a service/promo landing in the structure.",
        "“What’s more popular” surveys rarely help: an agency and a local service have different constraints. Look at how the offer ties to the brand and the channel (SEO vs paid search).",
      ],
      lists: [
        {
          intro: "Options:",
          items: [
            "a new domain",
            "a subdomain",
            "a page on the main site",
          ],
        },
      ],
      links: [
        {
          label: "Landing page: what it is",
          href: "/en/blog/lending/",
        },
        {
          label: "Landing page copy",
          href: "/en/blog/tekst-lendinga/",
        },
      ],
    },
    {
      title: "Separate domain",
      level: 2,
      paras: [
        "Plus — freedom of USP and design unbound from the main site; handy for a new direction or a clean test without risk of breaking prod. You can hand development to a contractor in isolation.",
        "Minuses: zero age and links, almost always paid ads at the start, domain/hosting cost, and affiliate-filter risk if the page is a clone of the main business with the same contacts.",
      ],
      notes: [
        {
          title: "When it fits",
          kind: "tip",
          text: "A new product for a different audience, a strong topic break from the main site, or a bad reputation of the current domain in search/ads.",
        },
      ],
    },
    {
      title: "Subdomain",
      level: 2,
      paras: [
        "Often chosen as a compromise: tied to the brand, but visually and technically separate. Handy to keep several promos (`promo1.`, `event.`) without buying a pile of domains — within DNS/hosting limits.",
        "Minuses: SEO is usually weaker than an internal page; visits barely feed the main site’s metrics; you need setup on the same hosting/access. For close products a section on the main domain is often enough.",
      ],
    },
    {
      title: "Inside the main site",
      level: 2,
      paras: [
        "Pluses: domain age and trust, internal links from catalog and blog, one counter and CRM, cheaper upkeep. Time on page and conversions work in one loop. For SEO this is usually the most practical path.",
        "Constraint — topic and UX must align with the site. A car dealer shouldn’t sell stationery from the same homepage as-is; either a separate section with an honest structure, or another domain.",
      ],
      lists: [
        {
          intro: "It fits well when:",
          items: [
            "the offer is close to the current catalog/services",
            "you need organic and internal linking",
            "unified analytics and brand in the URL matter",
          ],
        },
      ],
    },
    {
      title: "How to choose in practice",
      level: 2,
      paras: [
        "Close offer and a working site → page on the main domain. Branch/line nearby by topic but needs a separate “world” → subdomain. New business or a different audience → separate domain. For a store, product landings almost always live in one domain’s catalog.",
        "A keyword in the domain name alone rarely decides rankings. Speed, offer, traffic, and not cloning contacts matter more. If the main site is under sanctions or burned in ad accounts — a new domain is justified as isolation, not as SEO magic.",
      ],
      links: [
        {
          label: "Traffic sources",
          href: "/en/blog/istochniki-trafika/",
        },
        {
          label: "URL address",
          href: "/en/blog/url-adres/",
        },
      ],
    },
  ],
  closing: [
    "Landing placement is an infrastructure choice for the offer and channel. By default strengthen the main domain; take a subdomain or a new address when topic, risks, or development isolation justify it.",
  ],
  related: [
    "lending",
    "tekst-lendinga",
    "istochniki-trafika",
    "url-adres",
    "prodvizhenie-internet-magazina",
    "start-internet-magazina",
  ],
};
