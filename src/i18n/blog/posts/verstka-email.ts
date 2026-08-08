import type { BlogPost } from "../../../data/blog";

/** EN overlay for verstka-email — same structure as RU JSON. */
export const verstkaEmailEn: BlogPost = {
  slug: "verstka-email",
  title: "HTML email layout: keep it predictable",
  date: "2019-08-30",
  category: "Email marketing",
  cover: "/images/blog/verstka-email/cover-en.webp",
  excerpt:
    "How to build HTML emails: why tables beat divs, CSS limits, responsive design, images, Outlook, and client testing — without the myth that a broken layout equals instant spam.",
  lead: [
    "A polished Figma mock doesn’t guarantee the same look in Gmail, Yandex Mail, Apple Mail, and Outlook. Clients strip CSS differently, so email layout plays by its own rules.",
    "Below: what broken layout costs, the basic code structure, content limits, and how to test. Treat 2019 DOCTYPE tips as historical and match them against your ESP’s current templates.",
  ],
  faq: [
    {
      q: "Why use tables instead of flex or grid?",
      a: "Many clients (especially older Outlook) choke on modern block layout. Tables are still the most predictable frame.",
    },
    {
      q: "Can you use HTML5 in email?",
      a: "Carefully. Teams often stick with a simple transitional DOCTYPE and a narrow tag set. Test experiments in real clients.",
    },
    {
      q: "Is inline CSS required?",
      a: "Yes for critical styles: many clients strip `<style>` or ignore shorthand.",
    },
    {
      q: "Does a broken layout put you in spam?",
      a: "Not automatically. Spam hinges on domain reputation, complaints, and content. But a broken email still kills clicks.",
    },
    {
      q: "Do you need a responsive email?",
      a: "Yes: media queries where they’re supported, plus a single-column fallback and large tap targets.",
    },
    {
      q: "How should you test emails?",
      a: "ESP previews, Litmus/Email on Acid–class tools, and manual sends to Gmail, Yandex, Outlook, and iOS.",
    },
    {
      q: "Is an image-only email a bad idea?",
      a: "Yes — some clients block images. Mirror the meaning in copy and alt text.",
    },
  ],
  sections: [
    {
      title: "What breaks an email",
      level: 2,
      paras: [
        "Different looks across clients, horizontal scroll on mobile, missing blocks, a mangled Outlook render, heavy images and slow load — the usual cost of ignoring email limits.",
        "Interactivity and complex animation often never arrive. Get a readable frame and CTA right first, then decorate.",
      ],
    },
    {
      title: "Structure and code",
      level: 2,
      paras: [
        "The frame is tables with fixed or fluid width (often ~600px for the desktop column). Nested tables for modules beat complex floats.",
        "Spell out CSS where clients fuss (longhand margins instead of shorthand); put critical styles inline. Background images and rare properties need a separate Outlook check.",
        "Valid, simple markup beats “pretty” modern CSS copied from a website.",
      ],
      lists: [
        {
          intro: "Basic rules:",
          items: [
            "table frame",
            "inline for key styles",
            "web-safe or linked fonts with a fallback",
            "large tap targets",
            "test in Outlook and on iOS",
          ],
        },
      ],
      links: [
        {
          label: "Email design",
          href: "/en/blog/oformlenie-email/",
        },
      ],
    },
    {
      title: "Content, images, tools",
      level: 2,
      paras: [
        "Copy has to read with images off. Compress images, set width/height, and don’t bury the whole offer in a JPG.",
        "ESP editors and ready-made templates speed the work; custom HTML when you need full control. External testers catch surprises before subscribers do.",
      ],
      links: [
        {
          label: "Newsletter copy",
          href: "/en/blog/tekst-email-rassylki/",
        },
        {
          label: "Email: lessons from 2020",
          href: "/en/blog/email-marketing-2020/",
        },
      ],
    },
  ],
  notes: {
    title: "Note",
    text: "Tips on a specific DOCTYPE and CSS list are a ~2019 practice snapshot. Clients keep changing; keep a library of proven modules and run regression tests before a big send.",
  },
  closing: [
    "Build a table frame, inline the critical styles, leave a text fallback, and run the email through several clients — so layout stops being a lottery of “looks great in my Chrome.”",
  ],
  related: [
    "oformlenie-email",
    "tekst-email-rassylki",
    "email-marketing-2020",
    "primery-email-rassylok",
    "email-strategiya",
    "triggernye-rassylki",
  ],
};
