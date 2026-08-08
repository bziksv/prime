import type { BlogPost } from "../../../data/blog";

/** EN overlay for tsvet-internet-magazina — same structure as RU JSON. */
export const tsvetInternetMagazinaEn: BlogPost = {
  slug: "tsvet-internet-magazina",
  title: "Choosing a color scheme for an online store",
  date: "2018-05-16",
  category: "Digital marketing",
  cover: "/images/blog/tsvet-internet-magazina/cover-en.webp",
  excerpt:
    "How to pick a storefront palette: link to brand and product, audience, color wheel, CTA accent, and readability — without the myth that “color alone boosts conversion by tens of percent”.",
  lead: [
    "Storefront color shapes brand perception and button visibility — it doesn’t replace demand, price, and service. Changing a CTA shade sometimes moves conversion in an A/B — and often gives zero if the offer is weak.",
    "Below: a practical frame — one scheme with the brand, fit to niche and audience, 2–3 colors plus a “loud” accent, text contrast. Figures like “in 85% of cases color decides the purchase” from old reviews aren’t used as fact — a subjective guide.",
  ],
  faq: [
    {
      q: "Is button color the main sales lever?",
      a: "No. Offer, availability, price, delivery, and trust first. CTA color is a test hypothesis — not magic.",
    },
    {
      q: "How many colors should be in the palette?",
      a: "Usually 2–3: base, support, accent. More — risk of visual noise on the catalog.",
    },
    {
      q: "Does blue always create trust?",
      a: "A common stereotype (finance, IT), not a law. Check niche, competitors, and your identity; validate with the real audience.",
    },
    {
      q: "How do I align site and ads colors?",
      a: "One palette across storefront, banners, and packaging reduces the “another company” feel. Mismatches hurt recognition.",
    },
    {
      q: "How does this link to brand identity?",
      a: "The store palette is part of identity. If logo and ads share colors and the shop doesn’t — the brand falls apart.",
    },
  ],
  sections: [
    {
      title: "Brand, psychology, and niche",
      level: 2,
      paras: [
        "Unify business visuals into one scheme: site, emails, product cards, outdoor. Complex palettes are rarely needed for small e-com; simpler is more recognizable.",
        "Before picking color, state: who the best customer is, what the brand stands for, which emotions fit the purchase. That’s the palette base — not “scientific mind control”.",
        "Color psychology is a soft guide: shades associate differently across people and cultures. Blue often lands in finance “for trust”, green in eco/health, dark metals in luxury. Templates — not a sales guarantee.",
        "Fit the palette to product and audience. “Feminine” pastels on a mixed audience may cut some men; loud pink in B2B tools often looks foreign. Watch competitors — so you don’t blend in or shock the niche for no reason.",
      ],
      lists: [
        {
          intro: "Mini color brief:",
          items: [
            "who buys and in what context",
            "which emotions fit (calm / energy / premium)",
            "which 1–2 colors already live in the logo",
            "what should “shout” (CTA, price, badge)",
          ],
        },
      ],
      links: [
        {
          label: "Brand identity",
          href: "/en/blog/aydentika-brenda/",
        },
      ],
    },
    {
      title: "Harmony, accent, and readability",
      level: 2,
      paras: [
        "Color-wheel approach: (1) base color for brand emotion; (2) secondary — contrasting but compatible (often opposite on the wheel); (3) accent — for CTA and key labels, not the whole UI.",
        "Two accents at once (square on the wheel) complicate the storefront. Successful shops more often keep a short palette and repeat the accent in the funnel: Add to cart, Available, promo badge.",
        "Text must read: yellow on white, gray on gray — a classic fail. Contrast beats “pretty in the mockup”; check product pages and checkout on mobile under different lighting.",
        "Bottom line: color strengthens clarity and brand if the product is needed. Experiment in spots (A/B on CTA or first-screen background) — don’t repaint the whole catalog every week.",
      ],
      links: [
        {
          label: "Building an online store",
          href: "/en/blog/sozdanie-internet-magazina/",
        },
        {
          label: "Online store usability",
          href: "/en/blog/yuzabiliti-internet-magazina/",
        },
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
    },
  ],
  related: [
    "aydentika-brenda",
    "sozdanie-internet-magazina",
    "yuzabiliti-internet-magazina",
    "tendentsii-veb-dizayna",
    "optimizatsiya-konversii",
  ],
};
