import type { BlogPost } from "../../../data/blog";

/** EN overlay for slogan — same structure as RU JSON. */
export const sloganEn: BlogPost = {
  slug: "slogan",
  title: "How to create a slogan for a company and ads",
  date: "2020-01-17",
  category: "Content marketing",
  cover: "/images/blog/slogan/cover-en.webp",
  excerpt:
    "Brand and ad slogans: why they matter, how they differ from a USP, what to avoid, and how to craft a short line without “two-click” generators and empty promises.",
  lead: [
    "A slogan is a short line next to the name and logo: mood, promise, or difference that’s easy to repeat. It doesn’t replace the offer and isn’t required for every company.",
    "We cover when a slogan helps, types by meaning and form, what to avoid, and a simple way to build one. A USP is about “why you”; a slogan is more about memory and tone. Generators give drafts, not strategy.",
  ],
  faq: [
    {
      q: "Is a slogan the same as a USP?",
      a: "Not always. A USP is a concrete difference for choosing. A slogan can be image (“mood”) or closer to the offer. See the USP article.",
    },
    {
      q: "Is a slogan required?",
      a: "No. Sometimes a clear name and USP on the first screen are enough. A slogan strengthens the brand if you actually use it everywhere.",
    },
    {
      q: "How many words is normal for a slogan?",
      a: "Aim short — often up to 5–8 words. Clarity and speakability matter more than a word count.",
    },
    {
      q: "Will an online slogan generator help?",
      a: "As a brainstorm start — sometimes. A final without brief, audience, and promise checks is almost always weak.",
    },
    {
      q: "Can I use rhyme in a slogan?",
      a: "Yes, if the rhyme carries meaning. Clunky “rhyme for rhyme’s sake” slogans sound cheap.",
    },
    {
      q: "Who should write the slogan?",
      a: "A team with a brief, an agency, or a strong copywriter after learning the business. A “pretty line that misses the brand” is worse than plain truth.",
    },
    {
      q: "Do I need to register the slogan?",
      a: "For commercial use, uniqueness and trademark/conflict checks matter — especially for big campaigns. Ask brand counsel when unsure.",
    },
  ],
  sections: [
    {
      title: "Why a slogan exists",
      level: 2,
      paras: [
        "It complements name and logo: what to expect from the brand, which feeling or difference to lock in.",
        "It works in ads, packaging, site, social headers — if it’s one line, not a new motto every quarter without reason.",
      ],
      lists: [
        {
          intro: "By meaning people often split:",
          items: [
            "image — character and values;",
            "product — closer to product or campaign benefit.",
          ],
        },
      ],
      links: [
        {
          label: "USP",
          href: "/en/blog/utp/",
        },
        {
          label: "Logo",
          href: "/en/blog/logotip/",
        },
      ],
    },
    {
      title: "What to avoid",
      level: 2,
      paras: [
        "Fog (“quality and innovation”) with no fact.",
        "Over-promises you don’t deliver.",
        "Offensive or toxic jokes “for virality.”",
        "Bad rhymes and puns that block the meaning.",
      ],
      lists: [],
    },
    {
      title: "How to build one",
      level: 2,
      paras: [
        "Mission and role for the client → real advantages → emotional benefit for the segment → word list → 10–20 drafts → pick short and true → check with logo and name.",
        "By form: statement, question, address, wordplay, metaphor — choose for brand tone, not all at once.",
      ],
      lists: [
        {
          intro: "Criteria for a strong line:",
          items: [
            "clear to the audience on first read;",
            "memorable and speakable;",
            "doesn’t lie or inflate;",
            "sets you apart or sets the mood;",
            "outlives one promo (if it’s a brand slogan).",
          ],
        },
      ],
      notes: [
        {
          title: "Campaign vs brand",
          text: "A campaign slogan can change more often. A corporate motto changes rarely — or recognition blurs.",
        },
      ],
    },
    {
      title: "Key takeaways",
      level: 2,
      paras: [
        "Truth about brand and audience first — then pretty wording.",
        "A slogan ≠ a substitute for USP and offer on the site.",
        "A generator is a draft, not the final.",
      ],
      lists: [],
    },
  ],
  closing: [
    "Write three truths about the business in one line each — an honest slogan usually comes from those faster than from a generator’s “pretty words.”",
  ],
  related: [
    "utp",
    "logotip",
    "zagolovki-4u",
    "prodayushchie-teksty",
    "kopirayting",
    "kommercheskoe-predlozhenie",
  ],
};
