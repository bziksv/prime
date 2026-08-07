import type { BlogPost } from "../../../data/blog";

/** EN overlay for stranitsa-kontaktov — same structure as RU JSON. */
export const stranitsaKontaktovEn: BlogPost = {
  slug: "stranitsa-kontaktov",
  title: "How to design a website contact page",
  date: "2019-11-07",
  category: "Content marketing",
  cover: "/images/blog/stranitsa-kontaktov/cover-en.webp",
  excerpt:
    "A dedicated Contacts page: what to list, how not to overload the header, clickable phones, map and form — without turning the block into a dump of legal details.",
  lead: [
    "The contact page is a trust and quick-reach point: address, phones, email, map, hours, and a way to write. Mistakes and empty fields push people away harder here than on About.",
    "A dedicated page helps: keep a clear minimum of data, stay comfortable on mobile, and hold one visual system. Lead forms are covered separately; About-page copy has its own article.",
  ],
  faq: [
    {
      q: "Are phones in the header enough?",
      a: "In the header — 1–2 main numbers and a link to Contacts. Full addresses, branches, and legal details belong on a dedicated page.",
    },
    {
      q: "Do I need legal / company details?",
      a: "For e-commerce and B2B — yes: legal name, address, registration/tax IDs as required. Accuracy beats pretty layout.",
    },
    {
      q: "Is a map required?",
      a: "If there’s pickup or an office visit — yes; interactive beats a static sketch. For a pure online service with no address — not required.",
    },
    {
      q: "Should I SEO-optimize the page?",
      a: "Not to “stuff keywords.” A normal Contacts title/H1 plus brand/city and accurate NAP is enough. Traffic more often comes via brand and the menu.",
    },
    {
      q: "Should the phone be an image or text?",
      a: "As text and clickable (`tel:` / `mailto:`). An image hurts copying and accessibility.",
    },
    {
      q: "Where should messengers go?",
      a: "To live support channels with a clear response expectation. Don’t duplicate a dozen dead icons.",
    },
    {
      q: "How is this different from a contact form?",
      a: "Contacts — all reach points and NAP. The form is one channel on this page or on service pages.",
    },
  ],
  sections: [
    {
      title: "A dedicated page — not a wall in the header",
      level: 2,
      paras: [
        "The header already carries logo, menu, cart, login. Stuffing every branch, legal line, and hours there scatters attention and bloats the bar.",
        "A separate Contacts page lightens the header: up top — one or two phones and a short hours hint; in the menu and footer — a link to the full page.",
        "In one place the client finds service phones, addresses, map, email, and contact terms — without a scavenger hunt. Open NAP reduces the “fly-by-night” feel.",
      ],
      notes: [
        {
          title: "Not a place to “cram more ads”",
          text: "Space freed in the header is better spent on navigation and the offer — not another banner.",
        },
      ],
      links: [
        {
          label: "About the company",
          href: "/en/blog/o-kompanii/",
        },
      ],
    },
    {
      title: "Complete and truthful data",
      level: 2,
      paras: [
        "On the page, include: phones labeled by who answers (office, delivery, support); service emails; working social and messenger profiles; office/warehouse/pickup addresses; hours and operator reply windows.",
        "For trust — legal name, registered address when needed, bank details for wire transfers. Nearby — a contact form or chat if the team actually replies.",
        "Update any change immediately: a stale number or “phantom” address hits trust harder than an empty page.",
      ],
      lists: [
        {
          intro: "Commerce minimum:",
          items: [
            "phone and/or messenger with reply expectation;",
            "email or form;",
            "NAP (name, address, phone) aligned with maps and footer;",
            "business hours;",
            "map or clear “how to get here” if visits happen.",
          ],
        },
      ],
    },
    {
      title: "Usefulness — not a field dump",
      level: 2,
      paras: [
        "Highlight what most people need: payment, delivery, pickup, returns — briefly or via links to dedicated pages. Facade photos and a route sketch help an offline location.",
        "Don’t turn Contacts into an SEO wall for “buy X cheap.” The page’s job is to connect and verify the company — not compete with a product page.",
      ],
      links: [
        {
          label: "Contact form",
          href: "/en/blog/forma-obratnoy-svyazi/",
        },
      ],
    },
    {
      title: "Comfort on any device",
      level: 2,
      paras: [
        "The page should read well on a phone: large clickable phones and email, copyable details as text (not a screenshot).",
        "An interactive map beats an image: routes by transit and car. Watch that the widget doesn’t kill speed or cover buttons on mobile.",
      ],
      notes: [
        {
          title: "NAP consistency",
          text: "Same name, address, and phone — in the footer, on Contacts, and on the business profile. Mismatches confuse people and local SEO.",
        },
      ],
      links: [
        {
          label: "Google Business Profile",
          href: "/en/blog/google-biznes/",
        },
      ],
    },
    {
      title: "Style and hierarchy",
      level: 2,
      paras: [
        "Match the site style: fonts, color, spacing, logo. Data in blocks: Reach us, Addresses, Legal details, Write to us.",
        "Copy without errors, keep it short. Links to About, reviews, delivery are fine if the page doesn’t become a second homepage.",
        "Contacts aren’t a “minor utility”: clear reach drives leads and the sense of reliability.",
      ],
      lists: [
        {
          intro: "Remember:",
          items: [
            "dedicated page + compact header;",
            "current NAP and legal details as needed;",
            "clickable text — not images;",
            "map and form — when they truly help;",
            "one style and clear blocks.",
          ],
        },
      ],
    },
  ],
  closing: [
    "Open Contacts on a phone: one-tap call, email copies, map opens, form submits cleanly — if any of that breaks, fix it first.",
  ],
  related: [
    "forma-obratnoy-svyazi",
    "o-kompanii",
    "google-biznes",
    "molodoy-sayt",
    "regionalnoe-seo",
    "tekst-lendinga",
  ],
};
