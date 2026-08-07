import type { BlogPost } from "../../../data/blog";

/** EN overlay for prizyv-k-deystviyu — same structure as RU JSON. */
export const prizyvKDeystviyuEn: BlogPost = {
  slug: "prizyv-k-deystviyu",
  title: "How to write a call to action (CTA)",
  date: "2019-08-21",
  category: "Content marketing",
  cover: "/images/blog/prizyv-k-deystviyu/cover-en.webp",
  excerpt:
    "Calls to action on a site: page goal, button copy, benefit, placement, and A/B — without fake scarcity and a swarm of pushy popups.",
  lead: [
    "A call to action (CTA) is a short instruction for “what to do next”: buy, submit a lead, subscribe, call. Without it even strong copy often ends in nothing.",
    "We cover how to pick the goal, write the copy, style the button, and where to place the block. Full selling-copy structure is separate; here the focus is the ask itself.",
  ],
  faq: [
    {
      q: "Should I use one CTA per page or several?",
      a: "One primary. Repeats of the same action fit after strong blocks. Competing goals on one screen confuse people.",
    },
    {
      q: "Do I need “today only” urgency?",
      a: "Only if it’s true. Fake timers and false scarcity hurt trust and can break advertising rules.",
    },
    {
      q: "How long should button copy be?",
      a: "Short and clear: verb + outcome. “Get a quote” beats a paragraph on the button.",
    },
    {
      q: "Is a bright color required?",
      a: "Contrast with the background matters. Color should live in the brand palette — not scream with alien neon.",
    },
    {
      q: "Do CTA popups actually help?",
      a: "Sometimes — for exit intent or a lead magnet. Often they annoy. Test carefully and let people close without a quest.",
    },
    {
      q: "How do you know the CTA works?",
      a: "Watch clicks/goal conversion — not “I like the design.” Compare variants (A/B) when traffic is enough.",
    },
    {
      q: "How is this different from selling copy?",
      a: "Selling copy is the full argument path. CTA is the final and mid-path action steps.",
    },
  ],
  sections: [
    {
      title: "Goal first, button second",
      level: 2,
      paras: [
        "On a product page the CTA is “Add to cart” / “Buy.” On Contacts — “Call” / “Write.” On a blog — “Subscribe” or “Download the guide.” The page goal sets the wording.",
        "Map the user path: where they’re ready to act vs still reading. A younger impulsive segment often responds to a short visible CTA; B2B and a more cautious audience usually want facts first — ask after value, not instead of it.",
        "Without analytics (goals in Analytics, button clicks) you won’t know if new copy helped. After launch, watch behavior and bounce.",
      ],
      notes: [
        {
          title: "Not “more buttons = better”",
          text: "Several entry points to one action — fine. Ten different offers on one screen — noise.",
        },
      ],
    },
    {
      title: "CTA copy",
      level: 2,
      paras: [
        "An imperative verb helps clarity: “Get,” “Calculate,” “Book.” That isn’t “people hate deciding” manipulation — it removes ambiguity.",
        "Show the benefit next to the action: “Get 10% off your first order,” “Download the checklist” — not only “Submit.”",
        "Short lines usually read better than long ones. Numbers and social proof fit when true: “12,000 customers” with a meaningful source; “best on the internet” with no facts — empty stamp.",
      ],
      lists: [
        {
          intro: "Working copy pillars:",
          items: [
            "what to do",
            "what the person gets",
            "how long it takes / what the next step is",
            "no false reply-time promises.",
          ],
        },
      ],
      links: [
        {
          label: "Selling copy",
          href: "/en/blog/prodayushchie-teksty/",
        },
        {
          label: "Selling content",
          href: "/en/blog/prodayushchiy-kontent/",
        },
      ],
    },
    {
      title: "Urgency without deceit",
      level: 2,
      paras: [
        "A real promo deadline or seat limit can be stated. “We’ll call back in 30 seconds” — only if the process can deliver.",
        "Fake forever “−70%” scarcity destroys trust faster than it wins clicks. Prefer an honest offer and a clear next step.",
      ],
    },
    {
      title: "Design and placement",
      level: 2,
      paras: [
        "The button should be visible at the decision moment: after the offer, after benefits, at the end of an article, in the header — by page scenario. Don’t cover reading with a sticky half-screen banner.",
        "Color — contrast to the background and aligned with the brand. Icons and graphics — on purpose, without visual noise.",
        "In-content text CTAs support the button when they lead to the same action.",
      ],
      lists: [
        {
          intro: "Design checklist:",
          items: [
            "contrast and size on mobile",
            "one primary goal per screen",
            "hover/disabled states are clear",
            "after click — a clear next screen/form.",
          ],
        },
      ],
      links: [
        {
          label: "Contact form",
          href: "/en/blog/forma-obratnoy-svyazi/",
        },
        {
          label: "Contact page",
          href: "/en/blog/stranitsa-kontaktov/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "CTA = a clear action for the page goal.",
        "Benefit and truth beat fake scarcity.",
        "Measure clicks and leads — not “pretty button.”",
      ],
    },
  ],
  closing: [
    "Pick one page with traffic, write one primary CTA with a benefit, and measure conversion before/after — faster than arguing about color in a vacuum.",
  ],
  related: [
    "prodayushchie-teksty",
    "prodayushchiy-kontent",
    "forma-obratnoy-svyazi",
    "tekst-lendinga",
    "zagolovki-4u",
    "stranitsa-kontaktov",
  ],
};
