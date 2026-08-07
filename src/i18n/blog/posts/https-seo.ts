import type { BlogPost } from "../../../data/blog";

/** EN overlay for https-seo — same structure as RU JSON. */
export const httpsSeoEn: BlogPost = {
  slug: "https-seo",
  title: "HTTPS and SEO: ranking hygiene and a safe migration",
  date: "2021-06-17",
  category: "SEO",
  cover: "/images/blog/https-seo/cover-en.webp",
  excerpt:
    "How HTTPS affects SEO today: ranking hygiene, trust, and an http→https migration checklist without losing the index — without “green bar” myths or outdated 2014 studies.",
  lead: [
    "HTTPS (TLS) encrypts the channel between the browser and the site. For SEO it’s long been baseline: plain HTTP hurts trust and clean mirror consolidation.",
    "Below: why HTTPS matters for promotion and a migration checklist. Certificate types are covered in more depth in the SSL article; here the focus is SEO impact and the move itself.",
  ],
  faq: [
    {
      q: "Does HTTPS alone put you in the top results?",
      a: "No. It’s a baseline signal and UX. Content, tech, links, and demand matter more. Without HTTPS you more often lose on trust and mixed content.",
    },
    {
      q: "Is a paid EV certificate required?",
      a: "No. For most sites DV / Let’s Encrypt is enough. EV isn’t the old “green bar” and doesn’t guarantee positions.",
    },
    {
      q: "Why did traffic drop after the switch?",
      a: "More often redirect chains, mixed content, an outdated sitemap or Search Console / Webmaster property, or http/https duplicates. Fix the tech — don’t roll back to HTTP.",
    },
    {
      q: "How does this differ from the SSL article?",
      a: "SSL covers what a certificate is and which types exist. Here we cover why HTTPS matters for SEO and how to migrate without losing signals.",
    },
    {
      q: "Do you still need Host in robots for https?",
      a: "The Host rule is obsolete for Yandex. What matters more: 301s to the canonical mirror and a correct sitemap.",
    },
  ],
  sections: [
    {
      title: "HTTPS as SEO hygiene",
      level: 2,
      paras: [
        "Search engines have long factored in a secure connection. In 2026 an HTTP site looks outdated: browser warnings, weaker form conversion, mixed-content risk.",
        "HTTPS doesn’t replace keyword work and links. It’s a required layer next to speed, mobile layout, and a clear structure. Prep and migration are days to weeks; core ranking growth is still planned for 2–6 months of work — not “flipped HTTPS, hit TOP tomorrow.”",
      ],
      lists: [
        {
          intro: "What it gives in practice:",
          items: [
            "encryption for forms and customer account areas",
            "one canonical protocol",
            "fewer warnings in Chrome and other browsers",
            "baseline for ad accounts and payment systems",
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
    {
      title: "Myths about “factor #1”",
      level: 2,
      paras: [
        "Old reviews of HTTPS share in the top results (2014–2015) aren’t an argument today: almost all strong sites are already on https. Correlation “top-ranking sites use https” ≠ “https pushed them to the top results.”",
        "Don’t expect a ranking jump from a certificate checkbox alone. Expect stable mirrors and no errors after migration.",
      ],
      lists: [],
    },
    {
      title: "http → https migration checklist",
      level: 2,
      paras: [
        "The main risk is a crooked move: redirect chains, both protocols indexed, broken absolute http links to assets.",
        "Do 301s from every http version to the https canon; update internal links, canonicals, sitemap, and Webmaster / Search Console properties.",
      ],
      lists: [
        {
          intro: "Before and after go-live:",
          items: [
            "certificate valid, chain complete",
            "301 http→https (and www policy aligned)",
            "no mixed content (images/scripts over http)",
            "sitemap with https URLs only",
            "change of address / confirm the mirror in Webmaster tools",
            "check response codes on key landings.",
          ],
        },
      ],
      links: [
        {
          label: "Redirects",
          href: "/en/blog/redirekt/",
        },
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "A temporary crawl dip after a protocol change is possible. Panic and rolling back to HTTP is worse than finishing 301s and recrawl.",
        },
      ],
    },
  ],
};
