import type { BlogPost } from "../../../data/blog";

/** EN overlay for ustarevshiy-sayt — same structure as RU JSON. */
export const ustarevshiySaytEn: BlogPost = {
  slug: "ustarevshiy-sayt",
  title: "Signs of an outdated website: a checklist before redesign",
  date: "2019-02-25",
  category: "Internet marketing",
  cover: "/images/blog/ustarevshiy-sayt/cover-en.webp",
  excerpt:
    "When a site feels “outdated”: bulky structure, no responsive layout, thin features, overstuffed copy, design/brand mismatch, Flash legacy, and slow load — without TOP guarantees after a redesign.",
  lead: [
    "Falling leads and rankings don’t always mean “you need a brand-new design from scratch”. Often the site simply stopped matching expectations: awkward structure, no decent mobile UX, heavy pages, copy written for robots.",
    "Below — signs of aging and what to do. “Flat design” trends from old guides are no longer dogma: clarity, speed, and brand fit matter more. Getting into TOP after fixes is planned months of work — not “repaint and instantly rank first”.",
  ],
  faq: [
    {
      q: "Does a redesign always lift SEO?",
      a: "No. If you break URLs, speed, or content, you can drop. Plan redirects and keep useful pages.",
    },
    {
      q: "Is responsive required?",
      a: "For commerce — practically yes. A separate m-site is rarely needed; more often one responsive domain.",
    },
    {
      q: "Is Flash still relevant?",
      a: "No. The tech is end-of-life. Do video and animation on modern web standards (HTML/CSS/JS).",
    },
    {
      q: "Is over-optimized copy a sign of age?",
      a: "Yes if it’s walls of text for keyword density. Today usefulness, structure, and meaning for people matter more.",
    },
    {
      q: "Where to start if everything is bad?",
      a: "Mobile UX and speed, then structure/nav, then visuals and brand. Don’t start with a “new hero image”.",
    },
    {
      q: "Do you need a full relaunch?",
      a: "Not always. Sometimes IA, templates, and speedups are enough. Full redesign — when brand, UX, and tech have hopelessly drifted apart.",
    },
  ],
  sections: [
    {
      title: "Structure, mobile, and features",
      level: 2,
      paras: [
        "The business grew — the site grew pages with no sections. Clients don’t hunt a “wall of links”; they leave. Fix: thematic IA, consistent nav, less visual noise. Test a “find X” path with newcomers or session replay.",
        "No usable mobile view — you lose a large share of visits. You need responsive: readable text, large tap targets, reflowed blocks — not a shrunk desktop.",
        "Thin features vs competitors (no calculator, compare, decent search, consult) also look like a “site from the past”. Add what really helps the deal; A/B test — don’t copy everything.",
      ],
      links: [
        {
          label: "Responsive website",
          href: "/en/blog/adaptivnyy-sayt/",
        },
        {
          label: "Online store mistakes",
          href: "/en/blog/oshibki-internet-magazina/",
        },
      ],
    },
    {
      title: "Content, design, and brand",
      level: 2,
      paras: [
        "Keyword stuffing and “SEO walls” with no value mark an outdated approach. Subheads, examples, visuals, and a clear answer to the query beat density.",
        "Design builds trust. Dated tricks (heavy skeuomorphism, noisy textures, chaotic type) lower the sense that the business is current. Modern isn’t chasing this year’s fashion — it’s readability and clean hierarchy.",
        "If the site doesn’t match identity (colors, fonts, logo), the brand looks fragmented. Sync with the brand book.",
      ],
      links: [
        {
          label: "Brand identity",
          href: "/en/blog/aydentika-brenda/",
        },
        {
          label: "Content updates",
          href: "/en/blog/obnovlenie-kontenta/",
        },
      ],
    },
    {
      title: "Tech debt: Flash and speed",
      level: 2,
      paras: [
        "Flash on a site is a red flag: it doesn’t work in modern browsers or on mobile. Move clips and banners to HTML5/video.",
        "Slow load raises bounce. Compress images, cache, cut heavy JS/CSS, check PageSpeed and real devices. “Leave after 3 seconds” figures from old surveys are a guide — measure your TTFB/LCP.",
        "Living on an outdated site hurts both leads and trust. The checklist above is a diagnosis order before budgeting a “pretty picture”.",
      ],
      notes: [
        {
          title: "Redesign ≠ magic",
          text: "After launch watch indexation, 404s, and conversion. Core SEO positions grow over months if the tech and content base are sound.",
          kind: "tip",
        },
      ],
    },
  ],
  closing: [
    "An outdated site shows up as friction: hard to find, awkward on phone, slow, off-brand, and tech debt like Flash. Walk the checklist, prioritize mobile and speed — and only then argue about button trends.",
  ],
  related: [
    "adaptivnyy-sayt",
    "aydentika-brenda",
    "obnovlenie-kontenta",
    "oshibki-internet-magazina",
    "seo-oshibki",
    "trafik-bez-lidov",
  ],
};
