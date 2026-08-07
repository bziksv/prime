import type { BlogPost } from "../../../data/blog";

/** EN overlay for podpis-foto-instagram — same structure as RU JSON. */
export const podpisFotoInstagramEn: BlogPost = {
  slug: "podpis-foto-instagram",
  title: "What to write under an Instagram photo: a caption that gets read",
  date: "2020-12-18",
  category: "SMM",
  cover: "/images/blog/podpis-foto-instagram/cover-en.webp",
  excerpt:
    "How to write an Instagram photo caption: link to the frame, structure, quotes, hashtags, and tone for your audience — without gender clichés or the myth that “30 hashtags = reach.”",
  lead: [
    "A photo caption sets the frame’s meaning, tone, and next step for the reader. A pretty shot with no text often gets lost in the feed: people don’t know why to stop.",
    "We cover how to write captions for everyday and business posts. This isn’t the same as a selling-offer framework — sales live in a separate article. Hashtags and Instagram UI change; clarity and match to the frame matter more.",
  ],
  faq: [
    {
      q: "Is a long caption required?",
      a: "No. Sometimes one strong line and an emoji is enough. Length helps when there’s a story, value, or CTA.",
    },
    {
      q: "How many hashtags should I use?",
      a: "A few relevant ones beat dozens of random tags. Tag spam looks noisy and rarely drives steady growth.",
    },
    {
      q: "Can I copy someone else’s quotes?",
      a: "Yes if they fit — and credit the source when you can. Don’t pass off other people’s text as yours without context.",
    },
    {
      q: "How is a caption different from a selling post?",
      a: "A caption explains the frame and mood. A selling post drives a lead or purchase via an offer structure — see the separate guide.",
    },
    {
      q: "Do I need emoji in captions?",
      a: "As accents and breathing room — yes. As the only meaning with no text — weak for business.",
    },
  ],
  sections: [
    {
      title: "Frame first, words second",
      level: 2,
      paras: [
        "Text should amplify the photo, not fight it. Revisit the shot: what hooks, what feeling, which detail the viewer won’t notice.",
        "Food — a recipe or tip. A place — why it matters. A team in frame — who and why. A business shot — value or a mini case, not “just pretty.”",
      ],
      links: [
        {
          label: "Photos for Instagram",
          href: "/en/blog/foto-instagram/",
        },
        {
          label: "Selling Instagram post",
          href: "/en/blog/post-instagram/",
        },
      ],
    },
    {
      title: "Structure of a readable caption",
      level: 2,
      paras: [
        "The first line shows in the feed preview — put meaning or a question there. Then short paragraphs with air: a solid wall of text almost nobody finishes.",
        "Spelling and punctuation are part of trust. Typos in a business profile hurt more than an “imperfect” visual.",
      ],
      lists: [
        {
          intro: "Working outline:",
          items: [
            "hook in the first line",
            "1–3 short paragraphs on the frame’s meaning",
            "a detail or value not visible in the photo",
            "a question or soft CTA at the end",
            "hashtags — in a separate block or at the end, not mashed into the middle of the thought.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Writing a caption “for everyone”: a love quote, a price list, and 40 hashtags. One post — one main idea.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Quotes, thoughts, and audience tone",
      level: 2,
      paras: [
        "A quote works when it rhymes with the frame and the profile’s voice. Credit the source when it fits: film, book, interview.",
        "Tone cue — your comments and best posts: which words hook your audience. Don’t copy someone else’s “million-follower” style blind.",
        "Ready-made gender templates “what to write for girls / guys” age fast and sound flat. Niche, role, and frame context work better.",
      ],
      links: [
        {
          label: "Instagram content plan",
          href: "/en/blog/kontent-plan-instagram/",
        },
      ],
    },
    {
      title: "Hashtags without a reach cult",
      level: 2,
      paras: [
        "Tags help topical search and sometimes recommendations, but they don’t replace a strong visual and text. Pick close-in-meaning tags, not the widest “for numbers.”",
        "Algorithms and limits have changed; don’t promise yourself growth from a pile of random tags. Check that the tag is alive and not flooded with junk.",
      ],
      links: [
        {
          label: "Instagram reach",
          href: "/en/blog/ohvat-instagram/",
        },
      ],
    },
    {
      title: "Where to get ideas when it’s blank",
      level: 2,
      paras: [
        "A phrase stash: books, films, song lines, live client lines, notes from a walk. Keep 10–15 drafts so you’re not writing from zero at deadline.",
        "A route change, a short pause, studying strong captions (not copy-paste) — useful triggers. Profile goal matters more: personal blog, expertise, or sales.",
      ],
      lists: [
        {
          intro: "Quick caption formats:",
          items: [
            "mini story “before → after”",
            "one fact + emotion",
            "a question to the audience",
            "recipe / 3-point checklist",
            "quote + your reply",
            "behind the scenes of the shot.",
          ],
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "A caption ties frame and meaning, reads on a phone, and leads to a reaction or dialogue. Hashtags and emoji are supporting tools.",
        "For hard sales, build the offer structure separately; for everyday photos, a clear voice and link to the image is enough.",
      ],
    },
  ],
  closing: [
    "Before publish, reread the first line and match the tone to the photo. If the meaning is clear in 3 seconds — the caption is already doing its job.",
  ],
  related: [
    "post-instagram",
    "foto-instagram",
    "kontent-plan-instagram",
    "ohvat-instagram",
    "oformlenie-stranicy-instagram",
    "biznes-v-instagram",
  ],
};
