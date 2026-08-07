import type { BlogPost } from "../../../data/blog";

/** EN overlay for aydentika-brenda — same structure as RU JSON. */
export const aydentikaBrendaEn: BlogPost = {
  slug: "aydentika-brenda",
  title: "Brand identity: color, type, form, and the brand book",
  date: "2019-12-06",
  category: "Internet marketing",
  cover: "/images/blog/aydentika-brenda/cover-en.webp",
  excerpt:
    "What brand identity is, how it differs from branding and corporate style, what the foundation is (color, type, form), and how to build it without carrier chaos.",
  lead: [
    "Brand identity is the system of visual and meaning signals that make a brand recognizable without a prompt: name, logo, colors, typefaces, shapes, and rules in a brand book. It’s not “a picture for the website”, but a set of elements across carriers — from a sign to an avatar.",
    "Below — what the foundation is made of, how identity differs from branding and corporate style, and the usual development stages. Channel brand promotion is a neighboring topic; here — a recognizable look.",
  ],
  faq: [
    {
      q: "Is identity just the logo?",
      a: "The logo is part of it. You also need a palette, typography, shapes, tone, and application rules across carriers.",
    },
    {
      q: "How is it different from corporate style?",
      a: "Corporate style more often means the visual set. Identity is broader: naming, values expressed in carriers, and a system for managing the look (brand book).",
    },
    {
      q: "And branding?",
      a: "Branding works on perception and positioning as a whole. Identity is the tool that makes that perception recognizable visually and by feel.",
    },
    {
      q: "Does a small business need a full identity?",
      a: "Not always “corporate scale”. A minimum is name, logo, 2–3 colors, typefaces, and “how not to break it” rules. Scale grows with channels.",
    },
    {
      q: "Why a brand book?",
      a: "So contractors and staff don’t each draw “their own brand”. Inside — mission/tone (as needed), visuals, and application instructions.",
    },
    {
      q: "Can you copy another brand’s colors?",
      a: "Bad idea: confusion and legal risk. Take mood references and meaning — not someone else’s mark and palette one-to-one.",
    },
  ],
  sections: [
    {
      title: "What identity includes",
      level: 2,
      paras: [
        "The classic set: naming, logo, corporate style (visual system), brand book with rules. From that come carriers: site, packaging, signs, decks, merch, avatars — everything a client sees or holds.",
        "Strong identity works even without text: silhouette, color, and shape character already name the brand. Small businesses often need a lean but consistent set.",
      ],
      lists: [
        {
          intro: "Why business needs it:",
          items: [
            "recognition when channels and offers change;",
            "differentiation from competitors;",
            "an emotional anchor;",
            "a sense of a “serious” company;",
            "passing values without a long lecture.",
          ],
        },
      ],
      links: [
        {
          label: "Brand promotion",
          href: "/en/blog/prodvizhenie-brenda/",
        },
      ],
    },
    {
      title: "Foundation: color, type, form",
      level: 2,
      paras: [
        "Most carriers rest on three pillars. Color affects attention and associations — but meanings are culture-dependent; don’t copy someone else’s “red = appetite” without checking your niche and market.",
        "Type sets character: strict, playful, handwritten “authorial”. A bad choice pushes people away faster than it seems. Geometric form in the logo and patterns (circle, angle, softness) locks silhouette recognition.",
      ],
      lists: [
        {
          intro: "Selection practice:",
          items: [
            "2–3 main colors + neutrals;",
            "1–2 type families with fallback weights;",
            "a mark that reads at small size;",
            "bans: distortions, random effects, accidental gradients.",
          ],
        },
      ],
    },
    {
      title: "Identity, branding, and corporate style",
      level: 2,
      paras: [
        "Branding answers “who we are” and “how we differ” in market perception. Identity packs the answer into a system of signs. Corporate style is the visual layer (letterheads, decks, venue design) — often part of identity, but not the whole story with naming and a brand book.",
        "Term confusion isn’t fatal if the team agrees: what we approve, who stores source files, and how the logo must not be used.",
      ],
      tables: [
        {
          caption: "Terms in short",
          headers: ["Concept", "Focus"],
          rows: [
            ["Branding", "Positioning and perception"],
            ["Identity", "System of recognizable elements"],
            ["Corporate style", "Visual carriers and styling"],
            ["Brand book", "Application rules"],
          ],
        },
      ],
    },
    {
      title: "How it’s usually created",
      level: 2,
      paras: [
        "Start with a brief: niche, audience, competitors, tone, constraints. Then concepts (several directions), choose and refine mark/palette/type, assemble the brand book, hand over sources, and train the team.",
        "Without a brief you get “pretty, but not about us”. Without application rules, in a month the site, card, and ads look like three different companies.",
      ],
      lists: [
        {
          intro: "Stages (rough):",
          items: [
            "research and brief;",
            "naming (if needed);",
            "logo and style concepts;",
            "palette and typography;",
            "brand book and templates;",
            "rollout onto carriers.",
          ],
        },
      ],
      links: [
        {
          label: "Website specification",
          href: "/en/blog/tz-na-sayt/",
        },
        {
          label: "Target audience",
          href: "/en/blog/tselevaya-auditoriya/",
        },
      ],
    },
    {
      title: "How not to break the system",
      level: 2,
      paras: [
        "Keep sources (vector logo, colors in HEX/CMYK/RGB, font files/licenses). Give contractors a short brand-book extract — not “do it like the site by eye”.",
        "Rebranding is a separate project: changing a color “because we’re bored” without strategy costs more than it seems. Plan small updates (mark refinement, contrast accessibility) on purpose.",
      ],
      notes: [
        {
          title: "Important",
          text: "Check font licenses and stock for carriers before a mass launch. “Downloaded for free” often equals claim risk.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Personal brand",
          href: "/en/blog/lichnyy-brend/",
        },
      ],
    },
  ],
  closing: [
    "Identity makes a brand recognizable on any carrier: color, type, form, and brand-book rules beat a one-off “pretty logo”. Build a minimum system and protect it from contractor freelancing.",
  ],
  related: [
    "prodvizhenie-brenda",
    "lichnyy-brend",
    "tz-na-sayt",
    "tselevaya-auditoriya",
    "utp",
    "brendovyy-trafik",
  ],
};
