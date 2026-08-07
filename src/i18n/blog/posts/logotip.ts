import type { BlogPost } from "../../../data/blog";

/** EN overlay for logotip — same structure as RU JSON. */
export const logotipEn: BlogPost = {
  slug: "logotip",
  title: "How to make a company logo: types and criteria",
  date: "2019-08-26",
  category: "Internet marketing",
  cover: "/images/blog/logotip/cover-en.webp",
  excerpt:
    "Why you need a logo, where it lives, how a mark, wordmark, and combo differ, and how to choose a path: builder, freelance, studio — without outdated “market percentage” claims.",
  lead: [
    "A logo is a short visual brand anchor: a mark, a word, or both. It doesn’t replace product and service, but helps people recognize the company on the site, in ads, and on packaging.",
    "Below — why a logo at the start, which types exist, “works / doesn’t work” criteria, and how to order or draft one. Full color, type, and brand-book system — in the identity piece.",
  ],
  faq: [
    {
      q: "Is a logo = brand identity?",
      a: "No. The logo is a part. You still need palette, fonts, and rules for carriers. Otherwise the mark “floats” in every layout.",
    },
    {
      q: "Can you make a logo in Canva?",
      a: "Drafts and variants — yes. A final mark with rights, vector, and guideline is better closed with a designer — especially if the brand is serious.",
    },
    {
      q: "How many colors are OK?",
      a: "A guide is 2–3 main ones. Complex gradients and a “rainbow” scale poorly to print and favicon.",
    },
    {
      q: "Do you need trademark registration?",
      a: "For a serious brand — yes, separately from “the logo file”. Legal registration ≠ ordering a layout from a designer.",
    },
    {
      q: "What matters more — uniqueness or simplicity?",
      a: "Both. A complex mark reads poorly at 16×16 and on a stamp. Copying someone else’s risks claims and confusion.",
    },
  ],
  sections: [
    {
      title: "Why a logo and where it lives",
      level: 2,
      paras: [
        "A mark speeds recognition: people see the symbol before they read a long name. At business launch the logo sets the tone of communication — even if you’re not Apple yet.",
        "Carriers: site and favicon, social, cards, letterhead, packaging, signage, ads, uniforms, decks. One “pretty on monitor” file isn’t enough — you need versions for light/dark backgrounds and small size.",
      ],
      lists: [
        {
          intro: "Delivery minimum:",
          items: [
            "primary logo (horizontal/mark);",
            "monochrome / reverse;",
            "favicon and avatar;",
            "vector (SVG/PDF) + raster;",
            "short spacing and don’t-do rules.",
          ],
        },
      ],
      links: [
        {
          label: "Brand identity",
          href: "/en/blog/aydentika-brenda/",
        },
        {
          label: "Favicon",
          href: "/en/blog/favikon/",
        },
      ],
    },
    {
      title: "Types: mark, wordmark, combination",
      level: 2,
      paras: [
        "A graphic mark (symbol without words) is strong when the image is already known or the niche allows a metaphor. A wordmark is built on the name and distinctive typography — a solid path for a new brand.",
        "A combined option — mark + name — is the most common: it gives flexibility (mark only in the icon, full lockup on the site). Don’t overload the primary mark with founding year and a long slogan.",
      ],
      lists: [
        {
          intro: "Criteria for a working logo:",
          items: [
            "reads at small size;",
            "differs from niche competitors;",
            "doesn’t depend on a trendy filter;",
            "fits the business character;",
            "scales to print and digital.",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          text: "We don’t spread “what % of companies use which logo type” from old reviews — pick the type for name, niche, and carriers, not someone else’s stats.",
          kind: "tip",
        },
      ],
    },
    {
      title: "How to make one: builder, freelance, studio",
      level: 2,
      paras: [
        "Builders (Canva and peers) — a fast draft and hypothesis tests. Freelance and crowd platforms give several options from a brief; check portfolio and rights to sources. A studio / brand designer — when you need a system, not one picture.",
        "In the brief describe niche, audience, anti-examples (“not like competitor X”), carriers, and constraints. After choosing the mark, lock colors (HEX/CMYK), fonts, and don’ts — or a “new version” appears in messengers a month later.",
      ],
      lists: [
        {
          intro: "What to request from the vendor:",
          items: [
            "vector sources;",
            "variants for dark/light backgrounds;",
            "usage rights;",
            "fonts (licenses);",
            "a short application guide.",
          ],
        },
      ],
      links: [
        {
          label: "Canva",
          href: "/en/blog/canva/",
        },
        {
          label: "Crello / VistaCreate",
          href: "/en/blog/crello/",
        },
      ],
    },
  ],
  closing: [
    "A logo works when it’s simple, recognizable, and aligned with carriers — not when it’s “the most creative in the feed”. Pick the type for the brand, close rights and sources, and gather palette and rules into identity.",
  ],
  related: [
    "aydentika-brenda",
    "favikon",
    "canva",
    "crello",
    "prodvizhenie-brenda",
    "shablon-instagram",
  ],
};
