import type { BlogPost } from "../../../data/blog";

/** EN overlay for privetstvie-sayta — same structure as RU JSON. */
export const privetstvieSaytaEn: BlogPost = {
  slug: "privetstvie-sayta",
  title: "Website greeting: how to welcome visitors without annoying them",
  date: "2021-08-10",
  category: "Internet marketing",
  cover: "/images/blog/privetstvie-sayta/cover-en.webp",
  excerpt:
    "How to shape the first contact on the homepage: hero copy, careful popups, and chat. What builds trust and conversion — and what pushes people away in seconds.",
  lead: [
    "The homepage is the site’s “face”: in the first seconds people decide to stay or leave. A greeting here isn’t necessarily “hello” — it’s a clear signal: who you are, who you help, and what to do next.",
    "Below — the first-screen text block, popups, and chat. Focus on benefit and tone; aggressive pop-unders and a chat one second after entry hurt more often than they help.",
  ],
  faq: [
    {
      q: "Must the homepage say “Hello”?",
      a: "No. A clear offer and audience matter more. A formal greeting with no substance is fluff. A working pattern: benefit + who you are + CTA.",
    },
    {
      q: "How is a greeting different from SEO copy?",
      a: "Greeting / hero is for a human here and now. SEO paragraphs lower or on landings cover queries; don’t dump a keyword sheet into the first screen.",
    },
    {
      q: "Should chat open immediately?",
      a: "Usually no. A passive chat button is calmer. Auto-open fits selectively (promo, abandoned cart) with an easy close.",
    },
    {
      q: "Do you need keywords in the greeting?",
      a: "Meaningful words — yes; keyword spam in the hero — no. Keep linking and the core in page structure, not in one “greeting” paragraph.",
    },
    {
      q: "How does it tie to conversion?",
      a: "A clear first screen and calm UX are CRO hypotheses. See the separate conversion optimization article.",
    },
  ],
  sections: [
    {
      title: "Why greet on the homepage",
      level: 2,
      paras: [
        "The first screen sets expectations. If it’s unclear how the site helps, bounce rises — for ads and organic alike.",
        "A good greeting sparks interest, differentiates from competitors, and leads to action: catalog, request, call. A bad one praises the company with no facts or covers content with popups.",
      ],
      lists: [
        {
          intro: "What a clear first contact gives:",
          items: [
            "interest and trust;",
            "clear benefits;",
            "a next-step hint;",
            "a tone that matches the niche (B2B drier, culture warmer, store toward purchase).",
          ],
        },
      ],
      links: [
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "Text greeting in the first screen",
      level: 2,
      paras: [
        "Classic — a hero block: headline, 1–2 sentences, CTA. Style for the audience: clinic — restrained; creative blog — warmer OK; store — toward choice and price.",
        "The pattern attention → interest → conviction → ask works. What doesn’t: fluff about “quality service,” a slogan with no meaning, owner biography instead of an offer.",
      ],
      lists: [
        {
          intro: "Signs of a strong block:",
          items: [
            "clear what the site is right away;",
            "a concrete benefit or offer;",
            "prices/timelines/facts when relevant;",
            "one main action button;",
            "no clichés or “high art” for beauty’s sake.",
          ],
        },
        {
          intro: "What to avoid in the first paragraph:",
          items: [
            "a global mission with no product;",
            "leadership hobbies;",
            "copy-paste and empty slogans;",
            "an SEO sheet on top of the hero.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "In ad and service copy, “you” is usually lowercase unless it starts a sentence. What matters is benefit and clarity — not an orthography ritual.",
        },
      ],
    },
    {
      title: "Pop-up windows",
      level: 2,
      paras: [
        "Pop-ups and especially pop-unders often annoy: they cover content, interrupt reading, hurt trust. If you use them — rarely, on a trigger (scroll, exit, cart), with a clear close and one idea in the window.",
        "Mass “We’re waiting for you!” one second after entry is a bad norm. Better strengthen the first screen and the lead form themselves.",
      ],
      lists: [
        {
          intro: "Mini rules if a popup is still needed:",
          items: [
            "one offer, not a banner carousel;",
            "easy close;",
            "no more than once per session;",
            "not on every funnel step in a row.",
          ],
        },
      ],
      links: [
        {
          label: "Feedback form",
          href: "/en/blog/forma-obratnoy-svyazi/",
        },
      ],
    },
    {
      title: "Greeting in chat",
      level: 2,
      paras: [
        "Live chat helps with quick questions. A passive button (“Message”) is usually friendlier than auto-open after 1 second with “have you chosen yet?”",
        "Active chat fits selectively: a promo, a complex B2B product, return to an abandoned cart — and only if an operator really replies fast.",
      ],
      lists: [
        {
          intro: "Chat tone:",
          items: [
            "greet and introduce yourself;",
            "photo/name of a real consultant if you have one;",
            "ask for a name without interrogation;",
            "stay on point, no pressure;",
            "offer to continue by email/messenger if they want;",
            "say goodbye and leave a next step.",
          ],
        },
      ],
    },
    {
      title: "Good-tone rules",
      level: 2,
      paras: [
        "One style across the site: homepage, cards, emails. First impression doesn’t repeat — one clear offer beats five shouting widgets.",
      ],
      lists: [
        {
          intro: "Short checklist before publish:",
          items: [
            "hero is clear without scrolling;",
            "one CTA, and it’s visible;",
            "popups don’t smother content;",
            "chat doesn’t yell immediately;",
            "no empty praise instead of facts.",
          ],
        },
      ],
    },
  ],
};
