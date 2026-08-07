import type { BlogPost } from "../../../data/blog";

/** EN overlay for lending — same structure as RU JSON. */
export const lendingEn: BlogPost = {
  slug: "lending",
  title: "Landing page: what it is and how to build one",
  date: "2021-05-06",
  category: "Digital marketing",
  cover: "/images/blog/lending/cover-en.webp",
  excerpt:
    "What a landing page is, why teams build one, which blocks to assemble, and which mistakes kill conversion — separate from writing the offer copy.",
  lead: [
    "A landing page is a page you send traffic to for one target action: lead, purchase, call, signup. It can be a one-pager or a target URL inside a larger site.",
    "Why a landing exists, section logic, and typical failures are below. How to write offer copy is in the landing-copy article.",
  ],
  faq: [
    {
      q: "Is a landing always a one-page site?",
      a: "No. A catalog/service page on a multi-page site can be a landing if you intentionally send traffic there.",
    },
    {
      q: "Is a landing the same as a sales page?",
      a: "Not necessarily. The goal can be a lead, signup, or download — not only payment.",
    },
    {
      q: "How is this different from the landing-copy article?",
      a: "This article covers the page’s role and section frame. Offer copy, CTAs, and wording are in a separate article.",
    },
    {
      q: "Does a landing need SEO?",
      a: "If you expect organic — yes: Title, structure, speed. For pure paid traffic, offer and load speed matter more.",
    },
    {
      q: "How many CTAs should I place?",
      a: "One main scenario. You can repeat buttons, but don’t spawn competing goals.",
    },
    {
      q: "Do I need a separate landing for every ad?",
      a: "Not always. A separate landing is justified when the campaign has its own segment, offer, or scenario. For close queries, adapting one page and measuring is enough.",
    },
  ],
  sections: [
    {
      title: "Why landings get built",
      level: 2,
      paras: [
        "To focus attention: one offer, minimal distracting links, a clear next step. Handy for ad campaigns and promos.",
      ],
      lists: [
        {
          intro: "Typical goals:",
          items: [
            "lead / call;",
            "purchase;",
            "signup / demo;",
            "download a resource.",
          ],
        },
      ],
    },
    {
      title: "Page frame",
      level: 2,
      paras: [
        "Above the fold: offer, audience, CTA. Next come benefits, proof, how it works, objections, CTA again, contacts.",
      ],
      lists: [
        {
          intro: "What to check in the layout:",
          items: [
            "readable on mobile;",
            "button visible without “where do I tap”;",
            "short form;",
            "no extra nav that sends people “to the blog”;",
            "load speed.",
          ],
        },
      ],
      links: [
        {
          label: "Landing page copy",
          href: "/en/blog/tekst-lendinga/",
        },
      ],
    },
    {
      title: "Strong and weak patterns",
      level: 2,
      paras: [
        "Strong pages clearly answer “what / for whom / why you / what to do.” Weak ones — fluff, tiny type, hidden price with no reason, five different CTAs.",
      ],
      lists: [
        {
          intro: "Common mistakes:",
          items: [
            "offer unreadable on a phone screen;",
            "no proof (cases, numbers, reviews);",
            "a 15-field form;",
            "keyword stuffing instead of meaning;",
            "slow load from heavy banners.",
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
      title: "Start with goal and audience",
      level: 2,
      paras: [
        "You don’t design a landing from a pretty template — from a concrete action and audience segment. One page may explain a service well for small business but poorly answer a buyer at a large company — different criteria, timelines, and objections.",
        "Before design, state the offer in one sentence: what the person gets, who it fits, and what next step you propose. If the answer is vague, blocks and buttons won’t fix it.",
      ],
      lists: [
        {
          intro: "Mini brief for a landing:",
          items: [
            "traffic source and visitor expectation;",
            "one main conversion;",
            "audience and their job;",
            "real advantages and limits of the offer.",
          ],
        },
      ],
    },
    {
      title: "How to build a convincing first screen",
      level: 2,
      paras: [
        "The first screen doesn’t have to hold all sales copy. Its job is to confirm the person landed in the right place and give a reason to scroll or submit. A clear headline, short explanation, obvious button, and visual context usually beat a slogan with no meaning.",
        "Don’t hide important terms behind the form. If price depends on the job, name a range or explain how it’s calculated. Transparency filters random inquiries and builds trust with people who actually fit.",
      ],
      lists: [
        {
          intro: "On the first screen check:",
          items: [
            "is it clear what’s offered;",
            "is it clear who it’s for;",
            "does the CTA match the next step;",
            "is the content readable on a phone.",
          ],
        },
      ],
    },
    {
      title: "Proof and objections",
      level: 2,
      paras: [
        "After the offer, visitors need reasons to trust: work examples, measurable results, process, team, reviews with context. Don’t add decorative logos and “10,000 clients” if you can’t explain or prove them.",
        "Close objections where they arise. Delivery terms near the product, scope near the service, legal details before form submit. That shortens the path to a decision and makes the page more honest.",
      ],
      lists: [
        {
          intro: "Fitting proof:",
          items: [
            "a case with task, process, and result;",
            "real reviews with client permission;",
            "a clear work scheme and timelines;",
            "certificates and documents if they affect the choice.",
          ],
        },
      ],
    },
  ],
};
