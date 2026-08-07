import type { BlogPost } from "../../../data/blog";

/** EN overlay for kartochka-tovara — same structure as RU JSON. */
export const kartochkaTovaraEn: BlogPost = {
  slug: "kartochka-tovara",
  title: "Product page: structure, photos, price, and the Buy button",
  date: "2019-06-10",
  category: "Internet marketing",
  cover: "/images/blog/kartochka-tovara/cover-en.webp",
  excerpt:
    "How to build an ecommerce product page: required blocks, photos and video, description, price with CTA, delivery, and reviews — so the purchase decision doesn’t stall.",
  lead: [
    "The SKU page is where a visitor decides “I’ll take it” or “I’ll look more”. Home and catalog lead in; the product page needs facts, trust, and a clear next step.",
    "Below — page frame, media requirements, price and button, reviews. How to write description copy is a separate piece; here the focus is the full card, not copy alone.",
  ],
  faq: [
    {
      q: "How is it different from a product description?",
      a: "Description is a text block. The product page is the whole page: media, price, CTA, delivery, reviews, variants.",
    },
    {
      q: "Is 360° required?",
      a: "Not always. Several angles, zoom, and variant shots matter. 360°/video help expensive and tactile goods.",
    },
    {
      q: "Can you hide the price?",
      a: "In e-com usually no: a hidden price raises bounce. Exceptions — B2B “on request” with a clear reason.",
    },
    {
      q: "Where to put Buy?",
      a: "Next to price, above the fold on mobile; duplicate on long pages. One primary button beats five competing ones.",
    },
    {
      q: "Do you need reviews on the page?",
      a: "Yes if they’re real. Fakes hurt. Buyer photos and store replies to negatives help.",
    },
    {
      q: "Does this replace category SEO?",
      a: "No. The product page covers a model/SKU; categories capture group demand. You need both layers.",
    },
  ],
  sections: [
    {
      title: "What must be on the page",
      level: 2,
      paras: [
        "Minimum: full name, price, a visible order button, photos, key specs, payment/delivery terms, a way to contact. Plus reviews and stock/ship time when that drives choice.",
        "UX guides: familiar store patterns (prototypicality), a clear path to buy (intuitiveness), enough proof (persuasiveness). A template for its own sake with no data won’t convert.",
      ],
      lists: [
        {
          intro: "Product-page blocks:",
          items: [
            "name and brand;",
            "gallery / video;",
            "price and CTA;",
            "specs and description;",
            "variants (color, size);",
            "delivery and payment;",
            "reviews.",
          ],
        },
      ],
    },
    {
      title: "Photos and video",
      level: 2,
      paras: [
        "Quality and a consistent gallery style are mandatory. Several angles, all colors/configurations, zoom on details. For apparel, furniture, bags — product “in life” (on a model, in a room) answers scale.",
        "Short video (overview, fit, device power-on) closes what a still can’t. Don’t promise “3D always”: honest angles and load speed matter more.",
      ],
      lists: [
        {
          intro: "Media checklist:",
          items: [
            "high resolution without blur;",
            "consistent background/light in the catalog;",
            "all SKU variants;",
            "zoom;",
            "usage context where it fits.",
          ],
        },
      ],
    },
    {
      title: "Description, price, CTA, reviews",
      level: 2,
      paras: [
        "Copy answers “why me” and removes objections; wording details live in the description article. On the page keep scanability: lead, property list, “why us” block.",
        "Price — high contrast and next to Buy / Add to cart. Nearby — stock, delivery time, warranty. Reviews with context strengthen the decision; template five-stars with no detail do the opposite.",
      ],
      links: [
        {
          label: "Product description",
          href: "/en/blog/opisanie-tovara/",
        },
        {
          label: "Reviews that sell",
          href: "/en/blog/otzyvy-dlya-prodazh/",
        },
        {
          label: "Online store homepage",
          href: "/en/blog/glavnaya-internet-magazina/",
        },
      ],
    },
  ],
  closing: [
    "A strong product page is media, clear facts, price with a button, and trust — not a “perfect template”. Close the choice questions on the page: otherwise the buyer leaves for a place where everything is already written.",
  ],
  related: [
    "video-obzor-tovara",
    "opisanie-tovara",
    "glavnaya-internet-magazina",
    "prodazhi-internet-magazin",
    "kategorii-internet-magazina",
    "otzyvy-dlya-prodazh",
  ],
};
