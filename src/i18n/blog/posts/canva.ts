import type { BlogPost } from "../../../data/blog";

/** EN overlay for canva — same structure as RU JSON. */
export const canvaEn: BlogPost = {
  slug: "canva",
  title: "Canva: pros and cons of the online editor for marketing",
  date: "2019-11-18",
  category: "SMM",
  cover: "/images/blog/canva/cover-en.webp",
  excerpt:
    "Who Canva fits, what the free plan can do, where the builder is weaker than Photoshop, and how to keep one style in social without promising “you’ll never need a designer”.",
  lead: [
    "Canva is a template-based online editor: posts, stories, decks, simple print. Drag-and-drop instead of Photoshop’s steep learning curve — that’s why marketers, SMM, and small business like it.",
    "Below — strengths, limits, and when to still call a designer. We don’t lock “N thousand templates” or old free-plan limits: check the current account. A neighboring product class is VistaCreate (formerly Crello).",
  ],
  faq: [
    {
      q: "Does Canva replace a designer?",
      a: "For regular content in one style — often yes. Complex brand, packaging, non-standard layout — a professional’s zone.",
    },
    {
      q: "How is it different from Crello / VistaCreate?",
      a: "Same class: templates and export for formats. Choose by habit, library, team price, and how well your script/fonts work.",
    },
    {
      q: "Is the free version enough?",
      a: "For tests and simple layouts often yes. Brand kit, some stock, resize, and deeper team work — usually on paid plans.",
    },
    {
      q: "Can you make a logo in Canva?",
      a: "Drafts and variants — yes. A final logo with a guideline and applications is better from a designer and locked in identity.",
    },
    {
      q: "Why are letters showing as boxes?",
      a: "The font doesn’t support your script (e.g. Cyrillic). Pick fonts that include it from the list or upload licensed ones of your own.",
    },
  ],
  sections: [
    {
      title: "Who Canva is for and why",
      level: 2,
      paras: [
        "You need posts, covers, banners, and decks without a studio for every frame. Template → your text and photos → export PNG/JPG/PDF.",
        "Non-professional designers, bloggers, SMM, and small-business ads win — when speed and one visual rhythm matter more than a unique illustration from scratch.",
      ],
      lists: [
        {
          intro: "Typical scenarios:",
          items: [
            "social content;",
            "simple banners and posters;",
            "presentations and commercial proposals;",
            "print drafts (flyer, business card).",
          ],
        },
      ],
      links: [
        {
          label: "Crello / VistaCreate",
          href: "/en/blog/crello/",
        },
      ],
    },
    {
      title: "Builder upsides",
      level: 2,
      paras: [
        "Low entry barrier: drag-and-drop, ready color and font combos, element and stock libraries. Cloud save and team collaboration.",
        "Mobile apps sync drafts. You can build a set of “your” templates with logo and palette — the feed looks coherent without a new random layout every day.",
      ],
      lists: [
        {
          intro: "What people usually value:",
          items: [
            "fast start without Photoshop;",
            "formats for platforms;",
            "team access;",
            "export at the quality you need;",
            "reusing layouts.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "Set up a Brand Kit (colors, logo, fonts) — even on a minimal plan, brand discipline beats a “pretty someone else’s template”.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Brand identity",
          href: "/en/blog/aydentika-brenda/",
        },
        {
          label: "Instagram template",
          href: "/en/blog/shablon-instagram/",
        },
      ],
    },
    {
      title: "Downsides and limits",
      level: 2,
      paras: [
        "This isn’t a “draw from scratch” editor: heavy retouch, vector identity, and non-standard layout hit a ceiling. Some conveniences (resize, premium stock) are on paid plans; terms change.",
        "Non-Latin scripts need a font check. You need stable internet: everything is in the cloud. Auto-posting to social doesn’t cancel a content plan and post meaning.",
      ],
      lists: [
        {
          intro: "When to call a designer:",
          items: [
            "final logo and guideline;",
            "packaging and complex print;",
            "a campaign with a unique visual language;",
            "layouts where the template “screams another brand”.",
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
  ],
  closing: [
    "Canva speeds up marketing visual production on templates — if you keep brand discipline and honest expectations. For unique identity and complex carriers, leave room for a designer; for a neighboring online editor, see the VistaCreate/Crello overview.",
  ],
  related: [
    "crello",
    "aydentika-brenda",
    "shablon-instagram",
    "foto-instagram",
    "post-instagram",
    "menedzher-smm",
  ],
};
