import type { BlogPost } from "../../../data/blog";

/** EN overlay for baden-baden — same structure as RU JSON. */
export const badenBadenEn: BlogPost = {
  slug: "baden-baden",
  title: "Yandex Baden-Baden and copy without keyword stuffing",
  date: "2017-04-27",
  category: "SEO",
  cover: "/images/blog/baden-baden/cover-en.webp",
  excerpt:
    "What the Baden-Baden algorithm did: fighting over-optimized text, how to write useful content, and how “LSI” differs from synonym-stuffing — next to filters and “Turgenev.”",
  lead: [
    "Baden-Baden was a Yandex wave against stuffing and keyword “sheets”: useful text beats density games. Since 2017 that logic lives in content quality — not a “filter day” calendar.",
    "Yandex’s Baden-Baden line hit over-optimized, thin, and spammy texts. Lower risk with useful, intent-led copy — not keyword sheets. This isn’t a bypass guide and isn’t a ranking promise. Drop diagnosis is in the filters piece; over-optimization checks are in “Turgenev.” Prep isn’t TOP — recovery and growth are planned over months, often 2–6.",
  ],
  faq: [
    {
      q: "Does Baden-Baden still turn on on a fixed schedule?",
      a: "The name is historical. Yandex weighs text spam continuously. Don’t wait for an update date as the only lever.",
    },
    {
      q: "How is Baden-Baden different from Minusinsk?",
      a: "Minusinsk was tied to link spam. Baden-Baden — to over-optimized text.",
    },
    {
      q: "Is Turgenev the same as Baden-Baden?",
      a: "No. Turgenev is a third-party risk checker. Search’s decision is broader.",
    },
    {
      q: "Does LSI copywriting guarantee growth?",
      a: "No. Synonyms and related terms help cover a topic; treating “LSI keywords” as a stuffing checklist is spam again.",
    },
    {
      q: "Is a keyword stuffing sheet dangerous?",
      a: "Yes as UX and as a low-quality signal. Prefer structure, lists, meaning, and moderate occurrences.",
    },
    {
      q: "Is zero keyword density required?",
      a: "No. Niche terms repeat. Chase readability, not a magic percentage.",
    },
    {
      q: "What should you do if you suspect a text filter?",
      a: "Remove stuffing, strengthen page value, check Webmaster. Don’t buy “filter removal.”",
    },
  ],
  sections: [
    {
      title: "Why Baden-Baden existed",
      level: 2,
      paras: [
        "Yandex increased pressure on sites with repeating keywords, long meaningless text, and weak structure — content “for the bot,” not for people.",
        "The idea is close to Google’s fight with thin/spammy text: meaning and usefulness beat exact match.",
      ],
      links: [
        {
          label: "Search engine filters",
          href: "/en/blog/filtry-poiskovikov/",
        },
        {
          label: "Google algorithms",
          href: "/en/blog/algoritmy-google/",
        },
      ],
    },
    {
      title: "How to lower risk",
      level: 2,
      paras: [
        "Write an answer to intent: subheads, paragraphs, lists, tables, and images that earn their place — not a keyword sheet.",
        "Cut unnatural repeats of commercial keywords. One clear H1 and normal language beat telegraphic spam.",
        "Check disputed copy with density/risk tools, but edit for the reader — not for a zero score.",
      ],
      lists: [
        {
          intro: "Red flags in text:",
          items: [
            "the same phrase in every sentence;",
            "no structure or meaning;",
            "keywords instead of answers;",
            "a page for SEO with no offer/value.",
          ],
        },
      ],
      links: [
        {
          label: "Text spamminess",
          href: "/en/blog/zaspamlennost-teksta/",
        },
        {
          label: "Text keyword density",
          href: "/en/blog/toshnota-teksta/",
        },
        {
          label: "Turgenev tool",
          href: "/en/blog/turgenev/",
        },
      ],
    },
    {
      title: "LSI without the cult",
      level: 2,
      paras: [
        "In practice “LSI” usually means covering the topic: synonyms, related concepts, answers to side questions — people’s language, not a generator list.",
        "Synonyms for a checkbox hurt as much as exact-match stuffing. Topic and value first, then natural wording.",
        "Quality copy costs more than exchange “SEO for pennies” — and that’s fine if the page should work for years.",
      ],
      links: [
        {
          label: "Copywriting",
          href: "/en/blog/kopirayting/",
        },
        {
          label: "User intent",
          href: "/en/blog/user-intent/",
        },
      ],
    },
  ],
  notes: {
    title: "Important",
    text: "Baden-Baden 2017 is a historical name for a wave against text spam. Check current quality rules in Yandex Help; don’t buy “remove Baden-Baden” services.",
  },
  closing: [
    "Read one commercial URL out loud: if the keyword phrase breaks meaning — fix the copy; that matches why Baden-Baden was introduced, without hunting a mythical LSI dictionary.",
  ],
  related: [
    "filtry-poiskovikov",
    "turgenev",
    "zaspamlennost-teksta",
    "toshnota-teksta",
    "user-intent",
    "kopirayting",
  ],
};
