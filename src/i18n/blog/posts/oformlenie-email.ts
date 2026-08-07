import type { BlogPost } from "../../../data/blog";

/** EN overlay for oformlenie-email — same structure as RU JSON. */
export const oformlenieEmailEn: BlogPost = {
  slug: "oformlenie-email",
  title: "Email design: hierarchy and style",
  date: "2019-07-30",
  category: "Email marketing",
  cover: "/images/blog/oformlenie-email/cover-en.webp",
  excerpt:
    "How to design an email: common mistakes, width and modules, visual hierarchy, images, brand style, and a pre-send checklist — next to technical HTML layout.",
  lead: [
    "Email design isn’t “make it pretty” — it’s making clear in seconds: who is writing, why the email exists, and what to tap.",
    "Hierarchy, width, modules, and a unified series style do more for clicks than extra decoration. How it renders in mail clients is in the HTML layout piece.",
  ],
  faq: [
    {
      q: "What email width should you use?",
      a: "A common desktop-column guide is about 600px. On mobile one column and large buttons matter more than “squeeze three in.”",
    },
    {
      q: "How many columns should an email have?",
      a: "On mobile one is safer. Two — only with a responsive stack.",
    },
    {
      q: "Why use a unified series style?",
      a: "Brand recognition and trust. Every email “from another planet” lowers sender recognition.",
    },
    {
      q: "Where should you put the main offer?",
      a: "Up top: preheader, first screen, CTA before a long scroll.",
    },
    {
      q: "Is lots of decoration good in email?",
      a: "No. Extra lines, stock, and tiny text hurt hierarchy.",
    },
    {
      q: "Should you use brand fonts in email?",
      a: "Yes with web fonts and a system fallback. Readability beats exotic type.",
    },
    {
      q: "How is design different from email layout?",
      a: "Design is composition and meaning. Layout is HTML/CSS so it doesn’t fall apart in Outlook.",
    },
  ],
  sections: [
    {
      title: "Typical mistakes",
      level: 2,
      paras: [
        "The email “repels” but it’s unclear why; the designer’s intent doesn’t read; no series style; sender is invisible; chaotic block rhythm; tiny text; no clear CTA.",
        "First cut noise and restore hierarchy — often no “magic” is needed.",
      ],
    },
    {
      title: "Structure, hierarchy, images",
      level: 2,
      paras: [
        "Modular grid: branded header → offer/lead → proof → CTA → footer with unsubscribe. Important content above the fold.",
        "Visual hierarchy: size, contrast, spacing. Group related elements (proximity), separate sections with air.",
        "Images in one key: light, crop, captions. Don’t put all meaning only in the image — some clients won’t show it.",
      ],
      lists: [
        {
          intro: "A quick visual checklist:",
          items: [
            "recognizable sender/logo",
            "one main idea",
            "one main button",
            "enough text contrast",
            "style matches previous emails.",
          ],
        },
      ],
      links: [
        {
          label: "HTML email layout",
          href: "/en/blog/verstka-email/",
        },
        {
          label: "Strong email examples",
          href: "/en/blog/primery-email-rassylok/",
        },
      ],
    },
    {
      title: "Series style and final check",
      level: 2,
      paras: [
        "Lock tokens: colors, buttons, fonts, module spacing. Build new emails from the same blocks — faster, and the brand holds.",
        "Before send: preheader, mobile view, alt, links, unsubscribe, match to offer copy.",
      ],
      links: [
        {
          label: "Newsletter copy",
          href: "/en/blog/tekst-email-rassylki/",
        },
        {
          label: "Email strategy",
          href: "/en/blog/email-strategiya/",
        },
      ],
    },
  ],
  notes: {
    title: "Important",
    text: "“600px” width and modular grids are working guides, not dogma. ESP responsive templates may differ; check previews on your device segments.",
  },
  closing: [
    "Assemble modules with clear hierarchy and a unified series style, and leave technical stability to HTML layout rules — so design helps CTR instead of fighting the mail client.",
  ],
  related: [
    "verstka-email",
    "tekst-email-rassylki",
    "primery-email-rassylok",
    "email-strategiya",
    "email-marketing-2020",
    "email-dlya-biznesa",
  ],
};
