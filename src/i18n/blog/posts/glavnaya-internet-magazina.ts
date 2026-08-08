import type { BlogPost } from "../../../data/blog";

/** EN overlay for glavnaya-internet-magazina — same structure as RU JSON. */
export const glavnayaInternetMagazinaEn: BlogPost = {
  slug: "glavnaya-internet-magazina",
  title: "How to design an online store homepage",
  date: "2019-10-23",
  category: "E-commerce",
  cover: "/images/blog/glavnaya-internet-magazina/cover-en.webp",
  excerpt:
    "Online store homepage structure: header, menu, showcase and slider, short copy, trust, footer — without feature overload and without the company story on the whole first screen.",
  lead: [
    "An online store homepage isn’t a showcase for beauty’s sake — it’s an entrance: help find a product, remove doubts, and get people to the catalog or cart. Banner overload and “everything at once” confuse more often than they sell.",
    "Below: the working blocks — header, menu, visual showcase, copy, trust, and footer. Category and product-card SEO live in separate pieces; here the focus is first-page composition.",
  ],
  faq: [
    {
      q: "Should the homepage sell by itself?",
      a: "It should lead to a purchase: show assortment, promos, and a path into the catalog. A long “brand story” belongs on About — not the whole first screen.",
    },
    {
      q: "How many products should be on the showcase?",
      a: "A cue is up to ~10 items/cards in the first block: hits, promos, new arrivals, unique SKUs. Then categories and the catalog.",
    },
    {
      q: "Do I need an auto-slider?",
      a: "Yes if slides are readable: ~3–5 sec per frame, pause on hover, no flashing. Fewer slides beat a carousel of ten banners.",
    },
    {
      q: "What’s required in the header?",
      a: "Logo, search, cart, phone/messenger, key sections. Hours and delivery timing — if that’s a critical niche question.",
    },
    {
      q: "Should I duplicate contacts in the footer?",
      a: "Yes, but don’t copy the header one-to-one: footer is navigation, legal, delivery/payment, a form or CTA for people still thinking.",
    },
    {
      q: "Is the homepage more important than categories for SEO?",
      a: "For commerce, categories and product cards usually matter more. The homepage holds brand, navigation, and internal links — don’t stuff the whole keyword core there alone.",
    },
  ],
  sections: [
    {
      title: "Homepage role and block frame",
      level: 2,
      paras: [
        "A visitor should quickly see: what you sell, how to find it, and why they can trust you. Intuitive structure beats decorative “wow”.",
        "Typical frame: header → menu/catalog → visual showcase (promos/hits) → short benefit copy → trust (certificates, reviews) → extra block (news/picks) → footer.",
      ],
      lists: [
        {
          intro: "Structural elements:",
          items: [
            "header with logo and contacts",
            "catalog menu and service sections",
            "showcase/slider",
            "short text block",
            "trust block",
            "footer with navigation and CTA",
          ],
        },
      ],
      links: [
        {
          label: "Starting an online store",
          href: "/en/blog/start-internet-magazina/",
        },
        {
          label: "Online store sales",
          href: "/en/blog/prodazhi-internet-magazin/",
        },
      ],
    },
    {
      title: "Header and menu",
      level: 2,
      paras: [
        "Header space is limited: don’t dump the whole price list and history here. Logo, a short positioning line (or slogan), search, cart, phone/messenger, and quick contact are enough. For some niches — hours and a delivery cue.",
        "The menu is navigation, not an ad showcase. Include a catalog by clear categories, payment, delivery, contacts, and About. The simpler the path to a category, the fewer homepage bounces.",
      ],
      links: [
        {
          label: "Online store categories",
          href: "/en/blog/kategorii-internet-magazina/",
        },
      ],
    },
    {
      title: "Visuals: slider and showcase",
      level: 2,
      paras: [
        "Banners and cards sell faster than a wall of text — if they don’t become a kaleidoscope. A slider under the header shows promos and key categories; rotation speed should be moderate (cue up to ~5 seconds per slide) so the offer can be read.",
        "Put best-sellers, strong deals, new arrivals, and what competitors don’t have on the showcase. Don’t inflate the first block with dozens of SKUs: a strong pick plus a clear path to the catalog is better.",
      ],
      lists: [
        {
          intro: "What to put on the showcase:",
          items: [
            "hit categories",
            "promo items",
            "new arrivals",
            "unique store offers",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Each slide — one idea and one button. “Promo + 5 categories + subscribe” on one frame doesn’t read on a phone.",
        },
      ],
    },
    {
      title: "Copy, trust, and empty space below",
      level: 2,
      paras: [
        "Homepage copy is short: the benefit of working with you, what’s useful — no founder biography. Structure: headings, paragraphs, lists; selling lines without fluff; SEO in moderation, not a keyword sheet.",
        "An “about the business” block: certificates, licenses, awards, reviews — removes objections. If there’s air under the showcase, fill it with news, a pick, or a case — not a random banner “to fill space”.",
      ],
      links: [
        {
          label: "Reviews for sales",
          href: "/en/blog/otzyvy-dlya-prodazh/",
        },
        {
          label: "Online store promotion",
          href: "/en/blog/prodvizhenie-internet-magazina/",
        },
      ],
    },
    {
      title: "Footer as a second chance",
      level: 2,
      paras: [
        "The footer doesn’t copy the header. It’s a logical close: contacts, payment/delivery, a form or CTA, socials (if you run them), policy, and logo. For multi-brand — a neat brand list, not a logo dump.",
        "The job of the page bottom is to hold people who scrolled without ordering: give a next step, not “end of feed”.",
      ],
      links: [
        {
          label: "Site footer",
          href: "/en/blog/futer-sayta/",
        },
      ],
    },
  ],
  closing: [
    "An online store homepage works when it leads into the catalog and removes doubts without visual noise. Assemble header, menu, a strong showcase, short copy, trust, and a useful footer — and measure clicks into categories and add-to-carts, not only “beauty”.",
  ],
  related: [
    "start-internet-magazina",
    "kategorii-internet-magazina",
    "prodazhi-internet-magazin",
    "prodvizhenie-internet-magazina",
    "futer-sayta",
    "otzyvy-dlya-prodazh",
  ],
};
