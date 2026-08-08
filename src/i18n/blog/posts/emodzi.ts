import type { BlogPost } from "../../../data/blog";

/** EN overlay for emodzi — same structure as RU JSON. */
export const emodziEn: BlogPost = {
  slug: "emodzi",
  title: "Emoji in marketing: when they help and when they annoy",
  date: "2020-08-25",
  category: "Content marketing",
  cover: "/images/blog/emodzi/cover-en.webp",
  excerpt:
    "What emoji are and how to use them in posts, chat, and snippets: tone for the audience, measure, and risks — without CTR guarantees or the “Apple only” myth.",
  lead: [
    "Emoji are pictograms in text: emotions, objects, gestures. They speed up reading mood and save words, but they easily turn an offer into visual noise.",
    "Below: why marketing uses them, how to test tone for the audience, and where they fit in social and snippets. We don’t copy other people’s “millions of shares” cases as a guarantee. If you work with Instagram/Facebook, follow Meta’s notice on the page.",
  ],
  faq: [
    {
      q: "Are emoji the same as colon smileys?",
      a: "Smileys like `:-)` are text. Emoji are standardized Unicode symbols; they look a bit different across OSes.",
    },
    {
      q: "Are emoji required in B2B?",
      a: "No. In conservative niches, 0–1 symbol next to a list is enough. Overload annoys a “serious” audience faster than it helps.",
    },
    {
      q: "Do emoji raise search rankings?",
      a: "Not as a ranking factor. Sometimes they affect snippet CTR — and even then not always, not everywhere. Title/Description meaning matters more.",
    },
    {
      q: "How many emoji are normal in one post?",
      a: "Cue: they strengthen structure (list, CTA), not sit after every word. Better A/B on your own audience.",
    },
    {
      q: "Why does someone see a square instead of an icon?",
      a: "An old OS/font doesn’t know the symbol. For critical meanings, duplicate in text.",
    },
  ],
  sections: [
    {
      title: "What they are and where they came from",
      level: 2,
      paras: [
        "Emoji came from Japanese mobile cultures in the 1990s and then entered Unicode — so they don’t live only in one smartphone brand.",
        "References like Emojipedia help check meaning and render variants. For marketing, collecting every glyph matters less than hitting audience tone.",
      ],
    },
    {
      title: "Why marketing uses them",
      level: 2,
      paras: [
        "Scanning: the eye catches list markers and CTAs.",
        "Tone: a softer ask, warmer support reply, clearer status (“ok,” “attention”).",
        "International: some meanings read without translation — but cultural differences remain (gestures, colors).",
      ],
      notes: [
        {
          title: "Measure",
          kind: "tip",
          text: "Emoji don’t replace the offer, facts, and proof. If you remove every symbol and the text falls apart — fix the copy first.",
        },
      ],
    },
    {
      title: "How to start without failing",
      level: 2,
      paras: [
        "Ask: will the audience read the symbol the same way you do? Will the point get lost behind decoration?",
        "Match brand tone: a bank and a kids’ brand tolerate different emoji density.",
        "Check rendering on iOS and Android — especially rare symbols.",
        "Ad accounts and landings sometimes strip emoji or render them oddly — check the preview.",
      ],
      lists: [
        {
          intro: "Mini test before publish:",
          items: [
            "emoji removed — meaning still holds",
            "no more than 1–2 accents per paragraph",
            "no contested gestures or double meanings",
            "CTA reads without the icon",
          ],
        },
      ],
    },
    {
      title: "Where they fit",
      level: 2,
      paras: [
        "Social and Stories: list markers, reactions, a light service tone.",
        "Email and messengers: subject line and first screen — carefully; spam filters and corporate style matter.",
        "Search snippets: a rare CTR experiment. Don’t spam Title with emoji for a click — trust and page match beat a short spike.",
      ],
      notes: [
        {
          title: "No illusions",
          kind: "tip",
          text: "Cases like “they replied with a pizza emoji — and ordered” show a mechanic idea, not a template of “add emoji — grow 10x.”",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Emoji strengthen tone and scanning when the audience accepts them.",
        "Not a ranking factor and not a substitute for strong copy; overload is worse than none.",
      ],
    },
  ],
  closing: [
    "Add one fitting emoji to the CTA or list in the next post and compare replies/saves with a version without it — faster than copying someone else’s “viral” numbers.",
  ],
  related: [
    "podpis-foto-instagram",
    "kontent-plan-instagram",
    "seo-kopirayting",
    "nativnaya-reklama",
    "viralnyy-kontent",
    "geymifikatsiya-socseti",
  ],
};
