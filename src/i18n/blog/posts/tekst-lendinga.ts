import type { BlogPost } from "../../../data/blog";

/** EN overlay for tekst-lendinga — same structure as RU JSON. */
export const tekstLendingaEn: BlogPost = {
  slug: "tekst-lendinga",
  title: "Landing page copy: structure, offer, and CTA",
  date: "2021-06-07",
  category: "Content marketing",
  cover: "/images/blog/tekst-lendinga/cover-en.webp",
  excerpt:
    "How to write landing page copy: offer, benefit blocks, proof, form, and CTA — without keyword stuffing in every alt and the myth of “keywords in the domain.”",
  lead: [
    "A landing works when it has one clear job: get a lead, book a consult, buy a product, or schedule a service. The copy should take the visitor from recognizing their situation to a safe next step.",
    "Below: landing structure, argumentation, the form, and SEO hygiene. What matters isn’t magic formulas, but a clear offer, proof, and mobile comfort.",
  ],
  faq: [
    {
      q: "How does a landing differ from a selling article?",
      a: "An article can teach. A landing focuses on one offer and a short path to the CTA.",
    },
    {
      q: "How many screens of copy do you need?",
      a: "As many as it takes to clear objections. A cheap simple offer — shorter; expensive/complex — more proof.",
    },
    {
      q: "Are keywords in every alt and in the domain required?",
      a: "No. Alt is about accessibility and image meaning. The domain is brand and convenience, not a keyword sheet.",
    },
    {
      q: "How many form fields?",
      a: "The minimum for a lead: usually name + phone/email. Extra fields cut conversion.",
    },
    {
      q: "Do I need reviews?",
      a: "Yes if they’re real: cases, numbers, client logos, fuller stories. Fakes kill trust.",
    },
    {
      q: "Can all ad traffic go to one landing?",
      a: "Only if campaigns share the same demand and offer. Different segments and services usually need separate landings with a matching message.",
    },
    {
      q: "How do I know the copy hurts conversion?",
      a: "Watch session recordings, scroll depth, CTA clicks, and lead quality. Test one hypothesis at a time — don’t rewrite the whole screen at once.",
    },
  ],
  sections: [
    {
      title: "Offer and first screen",
      level: 2,
      paras: [
        "The first screen answers four questions: what’s offered, who it fits, what result the visitor gets, and what to do next. H1 doesn’t have to be a keyword pile: name the service and a concrete benefit in plain language.",
        "The subhead adds conditions, geography, format, or a limit that filters non-target demand. Nearby you need a clear CTA with an action: “Get an estimate,” “Get the program,” “Book a site visit” — not a vague “Learn more.”",
        "Don’t hide the key benefit behind company history or animation. On phone the visitor should grasp the offer and open the form without a long scroll.",
      ],
      lists: [
        {
          intro: "The first screen covers:",
          items: [
            "who you are and for whom",
            "the main benefit",
            "difference from alternatives",
            "the next step (button/form)",
          ],
        },
      ],
      links: [
        {
          label: "Selling copy",
          href: "/en/blog/prodayushchie-teksty/",
        },
        {
          label: "Contact form",
          href: "/en/blog/forma-obratnoy-svyazi/",
        },
      ],
    },
    {
      title: "Build a persuasion path",
      level: 2,
      paras: [
        "Next the visitor needs answers to natural doubts: what’s included, how work runs, what it costs, who it fits, and why you’re trustworthy. Order blocks by decision logic, not by how staff usually tell the company story.",
        "For a simple purchase a short structure is enough. For an expensive service, construction, B2B, or medicine the path is longer: stages, limits, documents, cases, and a fuller FAQ help. Length alone doesn’t sell — each block should reduce a specific doubt.",
        "Short paragraphs, image captions, and bullet lists help scanning. A phone number in the header matters, but doesn’t replace a clear button or form for people who won’t call.",
      ],
      lists: [
        {
          intro: "Typical block order:",
          items: [
            "offer and main CTA",
            "result and client benefits",
            "service scope or product specs",
            "stages, timelines, and terms",
            "cases, reviews, guarantees, and documents",
            "FAQ and a repeated call to action",
          ],
        },
      ],
    },
    {
      title: "Write benefits without empty promises",
      level: 2,
      paras: [
        "“Quality and affordable” explains almost nothing — everyone writes that. Verifiable details work better: scope of work, manager response time, report format, industry experience, a price range with what drives it.",
        "Separate feature from benefit. Example: “engineer site visit” is a feature; “checks measurements before the contract so you don’t redo the project” is a benefit. Don’t promise a guaranteed outcome where it depends on outside factors or the client’s actions.",
        "Tone should match the audience. For a complex service — calm expertise and term explanations; for a clear product — more specifics on choice and delivery.",
      ],
      notes: [
        {
          title: "Check",
          kind: "tip",
          text: "Read each block and ask: “Which visitor worry disappears after this?” If there’s no answer, rewrite, shorten, or replace with proof.",
        },
      ],
    },
    {
      title: "Proof and objections",
      level: 2,
      paras: [
        "Trust comes from coherent details: real cases, clear legal details, process photos, reviews with context, certificates, and transparent terms. One logo without permission or an anonymous five-star review doesn’t add trust.",
        "Don’t paper over objections. If price is custom, explain the pricing inputs and offer a range. If there are region, timeline, or stock limits, state them before the form — you’ll get fewer empty leads.",
        "Place proof next to the claim. After promising fast delivery, show the terms; after experience — a relevant case; next to the form — what happens after submit.",
      ],
    },
    {
      title: "Form and CTA: cut friction",
      level: 2,
      paras: [
        "The form starts a conversation, not a full visitor dossier. Keep fields a manager needs to reply: usually name and a contact channel. A task question can be optional or moved to the next step.",
        "Under the button briefly say when and how you’ll reply. If you collect personal data, link the privacy policy and add a checkbox when required. Don’t replace consent with a pre-ticked box.",
        "CTAs repeat on a long page, but each matches context: after price — “Get a quote,” after the program — “Request a consult.” Several different actions on one screen dilute focus.",
      ],
      lists: [
        {
          intro: "Check before launch:",
          items: [
            "the form submits and shows a clear result",
            "phone and email are tappable on mobile",
            "the right person gets the notification",
            "analytics goals track submits and calls",
            "the page reads without horizontal scroll",
          ],
        },
      ],
      links: [
        {
          label: "Contact form",
          href: "/en/blog/forma-obratnoy-svyazi/",
        },
      ],
    },
    {
      title: "SEO without stuffing",
      level: 2,
      paras: [
        "Before writing, gather queries with one intent: order, compare, calculate, or learn terms. One landing doesn’t have to cover every market phrasing — separate pages fit different services and segments better.",
        "Use audience language in Title, H1, subheads, and body naturally. Don’t repeat the exact keyword in every paragraph or replace useful copy with a city list. Alt describes the image for accessibility — it isn’t a keyword dump.",
        "For a local service state the real region, contacts, address, and visit terms. Connect analytics goals so you measure not only visits but form submits, calls, and lead quality.",
      ],
      lists: [
        {
          intro: "Hygiene:",
          items: [
            "one main intent per URL",
            "Title/Description by the offer",
            "a fast mobile page",
            "honest reviews and legal details when needed",
          ],
        },
      ],
      links: [
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "Validate the page after launch",
      level: 2,
      paras: [
        "Launch starts the check, it isn’t the finish line. First confirm the form, telephony, goals, privacy policy, and mobile version work. Then collect managers’ first questions — they often show which explanation the page lacks.",
        "Test one hypothesis at a time: first-screen clarity, block order, button text, proof, or field count. Compare changes on enough traffic and watch not only conversion but the share of qualified leads.",
        "Revisit the landing when product, prices, season, or audience change. Regular honest updates beat a yearly cosmetic redesign with no behavior analysis.",
      ],
    },
  ],
};
