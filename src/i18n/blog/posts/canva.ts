import type { BlogPost } from "../../../data/blog";

/** EN overlay for canva — same structure as RU JSON. */
export const canvaEn: BlogPost = {
  slug: "canva",
  title: "Canva: pros and cons of the online editor for marketing",
  date: "2019-11-18",
  category: "SMM",
  cover: "/images/blog/canva/cover-en.webp",
  excerpt:
    "Who Canva fits, what the free plan covers, where it falls short of Photoshop, and how to keep one visual style in social without promising you’ll never need a designer.",
  lead: [
    "Canva is a template-based online editor for posts, Stories, decks, and simple print. Drag-and-drop instead of Photoshop’s learning curve — which is why marketers, SMM teams, and small businesses like it.",
    "Below: strengths, limits, and when you still want a designer. We don’t lock old free-plan limits or “N thousand templates” — check your current account. A close alternative is VistaCreate (formerly Crello).",
  ],
  faq: [
    {
      q: "Does Canva replace a designer?",
      a: "For regular content in one style — often yes. Complex brand work, packaging, or non-standard layouts still need a professional.",
    },
    {
      q: "How does Canva differ from Crello / VistaCreate?",
      a: "Same class: templates and export for common formats. Choose by habit, library, team pricing, and how well your language and fonts work.",
    },
    {
      q: "Is the free version enough?",
      a: "For tests and simple layouts, often yes. Brand Kit, some stock, Magic Resize, and deeper team features usually sit on paid plans.",
    },
    {
      q: "Can I make a logo in Canva?",
      a: "Drafts and variants — yes. A final logo with guidelines and real-world uses is better from a designer and locked into your identity.",
    },
    {
      q: "Why do letters show up as boxes?",
      a: "The font doesn’t support your writing system (for example, Cyrillic). Pick fonts that include it, or upload licensed fonts you own.",
    },
  ],
  sections: [
    {
      title: "Who Canva is for and why",
      level: 2,
      paras: [
        "You need posts, covers, banners, and decks without a studio for every frame. Pick a template → swap in your text and photos → export PNG, JPG, or PDF.",
        "People who aren’t full-time designers — bloggers, SMM, small-business ads — win when speed and a consistent visual rhythm matter more than a unique illustration from scratch.",
      ],
      lists: [
        {
          intro: "Typical scenarios:",
          items: [
            "social content;",
            "simple banners and posters;",
            "presentations and sales decks;",
            "print drafts (flyer, business card).",
          ],
        },
      ],
      links: [
        {
          label: "Crello / VistaCreate overview",
          href: "/en/blog/crello/",
        },
      ],
    },
    {
      title: "What Canva does well",
      level: 2,
      paras: [
        "Low barrier: drag-and-drop, ready color and font combos, element and stock libraries. Cloud save and team collaboration.",
        "Mobile apps sync drafts. You can build a set of “your” templates with logo and palette — the feed stays coherent without a new random layout every day.",
      ],
      lists: [
        {
          intro: "What people usually value:",
          items: [
            "a fast start without Photoshop;",
            "formats sized for each platform;",
            "team access;",
            "export at the quality you need;",
            "reusing layouts.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice tip",
          text: "Set up a Brand Kit (colors, logo, fonts) — even on a minimal plan, brand discipline beats a pretty template that looks like someone else’s brand.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Brand identity",
          href: "/en/blog/aydentika-brenda/",
        },
        {
          label: "Instagram templates",
          href: "/en/blog/shablon-instagram/",
        },
      ],
    },
    {
      title: "Limits and when it falls short",
      level: 2,
      paras: [
        "This isn’t a “draw from scratch” editor: heavy retouch, vector identity, and non-standard layout hit a ceiling. Some conveniences (resize, premium stock) are on paid plans; terms change.",
        "Non-Latin scripts need a font check. You need a stable internet connection — everything lives in the cloud. Auto-posting to social doesn’t replace a content plan or a clear message in each post.",
      ],
      lists: [
        {
          intro: "When to call a designer:",
          items: [
            "final logo and guidelines;",
            "packaging and complex print;",
            "a campaign with a unique visual language;",
            "layouts where the template still screams another brand.",
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
    "Canva speeds up marketing visuals on templates — if you keep brand discipline and honest expectations. For unique identity and complex formats, leave room for a designer; for a neighboring online editor, see the VistaCreate / Crello overview.",
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
