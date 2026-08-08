import type { BlogPost } from "../../../data/blog";

/** EN overlay for futer-sayta — same structure as RU JSON. */
export const futerSaytaEn: BlogPost = {
  slug: "futer-sayta",
  title: "Website footer: why it matters and what to put in it",
  date: "2021-04-14",
  category: "SEO",
  cover: "/images/blog/futer-sayta/cover-en.webp",
  excerpt:
    "The role of the site footer in navigation and trust: contacts, links, legal block, and design — without keyword spam in the footer.",
  lead: [
    "The footer is the bottom block of a site. Users who reach it are looking for contacts, documents, or a clear next step after a long page.",
    "A good footer finishes the journey — it doesn’t duplicate the whole menu. Below: contents, priorities, and SEO limits without link spam.",
  ],
  faq: [
    {
      q: "Does the footer affect SEO?",
      a: "Indirectly: navigation, contacts, a shared template. Mass identical SEO links in the footer barely help and look like spam.",
    },
    {
      q: "What’s required in the footer?",
      a: "Contacts/legal entity by niche, links to privacy and key sections. The rest depends on site type.",
    },
    {
      q: "Do I need an HTML sitemap in the footer?",
      a: "A short menu of important sections — yes. A full list of hundreds of URLs — better a separate human sitemap + sitemap.xml for bots.",
    },
    {
      q: "Should I repeat the phone from the header?",
      a: "Yes — handy: the person reached the end and is ready to call.",
    },
    {
      q: "Can I add keywords to the footer?",
      a: "Don’t insert unnatural anchors and city lists. Plain section names are clearer for people and safer for SEO.",
    },
    {
      q: "Do I need social icons?",
      a: "Only for live official profiles. Each icon needs an accessible label, and the link should go to a current page.",
    },
  ],
  sections: [
    {
      title: "What a footer is made of",
      level: 2,
      paras: [
        "Typical set: navigation, contacts, socials or messengers, legal info, and copyright. Not every block is required — composition follows the site’s job.",
        "For a local service, address and hours matter more; for a store — shipping and returns; for media — rubrics and signup. Help the user finish the action first, then add secondary items.",
      ],
      lists: [
        {
          intro: "Common blocks:",
          items: [
            "menu of key sections",
            "phone, email, address",
            "legal details / offer / privacy",
            "social icons without a zoo",
            "payment badges — if it’s a store",
          ],
        },
      ],
    },
    {
      title: "Why it’s needed",
      level: 2,
      paras: [
        "The footer gives a path to action at the end of a long page and serves as backup navigation. It’s especially useful when the header has scrolled away.",
        "Contacts and documents in one predictable place make the company clearer. But a footer doesn’t replace a proper Contacts page and main menu.",
      ],
      lists: [
        {
          intro: "For SEO practice:",
          items: [
            "one shared footer across templates",
            "working links without 404s",
            "contacts match Contacts pages and map listings",
            "no wall of “buy X cheap” anchors",
          ],
        },
      ],
      links: [
        {
          label: "Contact form",
          href: "/en/blog/forma-obratnoy-svyazi/",
        },
      ],
    },
    {
      title: "Design and mistakes",
      level: 2,
      paras: [
        "Keep readable contrast and don’t turn the footer into tiny gray mush. On mobile, phone, messenger, and buttons need large tap targets.",
        "Stack columns in a logical order: contacts and key action first, then navigation and documents. Check the block on a real phone — not only in a mockup.",
      ],
      lists: [
        {
          intro: "Avoid:",
          items: [
            "50 mixed links",
            "broken icons",
            "text hidden in the background color",
            "outdated legal details",
          ],
        },
      ],
    },
    {
      title: "Navigation without duplication",
      level: 2,
      paras: [
        "Pick a few sections that help finish the job: services, catalog, cases, blog, contacts. Group links by meaning — not by CMS structure.",
        "Don’t copy the full multi-level menu into the footer. Rare pages belong in a separate HTML sitemap; keep sitemap.xml for search engines.",
      ],
      lists: [
        {
          intro: "Check navigation:",
          items: [
            "links have clear names",
            "important URLs don’t 404",
            "current services and contacts are one click away",
            "groups aren’t overloaded with dozens of similar items",
          ],
        },
      ],
    },
    {
      title: "Contacts and documents",
      level: 2,
      paras: [
        "Phone, address, and hours in the footer should match Contacts, organization cards, and company ads. Mismatches cut trust and create extra inquiries.",
        "A privacy-policy link should be reachable from any page. For payments and leads, also check the offer, shipping terms, and consent copy.",
      ],
      lists: [
        {
          intro: "Before publish update:",
          items: [
            "legal details and hours",
            "clickable phone and email",
            "links to required documents",
            "a contact for urgent questions",
          ],
        },
      ],
    },
    {
      title: "SEO without link spam",
      level: 2,
      paras: [
        "A shared footer helps people find permanent sections — it isn’t a tool to force queries. Natural internal links with normal names beat a long wall of commercial anchors.",
        "Don’t hide text in the background color, don’t output hundreds of URLs, and don’t add city lists for keywords. That hurts people, crawl, and looks like manipulation.",
      ],
      lists: [
        {
          intro: "Healthy practice:",
          items: [
            "one template where it fits",
            "a few relevant links",
            "regular checks for broken URLs",
            "a separate sitemap for a large page list",
          ],
        },
      ],
    },
  ],
};
