import type { BlogPost } from "../../../data/blog";

/** EN overlay for lestnitsa-hanta — same structure as RU JSON. */
export const lestnitsaHantaEn: BlogPost = {
  slug: "lestnitsa-hanta",
  title: "Hunt awareness ladder: 5 levels of customer awareness",
  date: "2020-01-24",
  category: "Digital marketing",
  cover: "/images/blog/lestnitsa-hanta/cover-en.webp",
  excerpt:
    "How the awareness ladder works: from “doesn’t know the problem” to ready to buy — and what to say at each step in ads and on the landing page.",
  lead: [
    "The awareness ladder is a five-level model: how clearly someone sees the problem, solution classes, and your product. In RU marketing it’s often called Hunt’s ladder; the classic audience-awareness levels were described by Eugene Schwartz.",
    "The idea is simple: you can’t hard-sell someone who doesn’t see the need yet. Below: the steps and what to do on each in copy, ads, and scripts.",
  ],
  faq: [
    {
      q: "Is this Hunt’s ladder or Schwartz’s?",
      a: "The five awareness levels come from Schwartz’s tradition. RU materials locked in the name “Hunt’s ladder”; the steps matter more than the naming fight.",
    },
    {
      q: "How many steps are there?",
      a: "Five: unaware → problem-aware → solution-aware → product/vendor compare → ready to buy from you (or nearly).",
    },
    {
      q: "Can I skip steps?",
      a: "Hard skips are a bad idea: lead cold traffic through the problem and value. Sometimes steps compress into one piece, but you don’t drop the “why do I need this” logic.",
    },
    {
      q: "Where can I apply it?",
      a: "Landings, ads, email, scripts, content plans: different entry for different traffic temperature.",
    },
    {
      q: "Does only the fifth step buy?",
      a: "Purchase is more common where trust in you already exists. But you build the path to the fifth with content and offer from the lower steps.",
    },
    {
      q: "How does it tie to USP (unique selling proposition)?",
      a: "On lower steps, problem and outcome matter more. USP and competitor comparison are stronger on product- and brand-choice steps.",
    },
    {
      q: "Does it fit banners?",
      a: "Yes: outdoor/display banners more often target people already seeking a solution — benefits and difference, not a long pain lecture.",
    },
  ],
  sections: [
    {
      title: "Five awareness steps",
      level: 2,
      paras: [
        "People in one niche stand on different steps. Anti-aging care is early for a schoolgirl; an adult segment already knows the topic. Ads should speak the language of the step someone is on now.",
        "For any niche, the most aware audience was once on step one. Marketing’s job is to walk them up the ladder — not demand a purchase on first touch.",
      ],
      lists: [
        {
          intro: "The steps:",
          items: [
            "1 — doesn’t see the problem",
            "2 — knows the problem, not the solutions",
            "3 — knows solution types, picking an approach",
            "4 — compares products/vendors",
            "5 — knows you and is close to buying",
          ],
        },
      ],
      notes: [
        {
          title: "Worth remembering",
          kind: "tip",
          text: "Jumping from “I don’t know I have a problem” straight to “buy Premium” almost always gets a no. Meaning first, offer second.",
        },
      ],
    },
    {
      title: "How to apply it in practice",
      level: 2,
      paras: [
        "The model is universal: creatives, traffic, scripts, landing structure. First decide where the person comes from and what they already understand.",
        "Example: a landing for “cold” traffic — first screen shows inaction costs and the problem; benefits and pricing lower. A banner for people already picking a vendor — your benefits right away, no pain lecture.",
      ],
      lists: [
        {
          intro: "Before a creative ask:",
          items: [
            "where is the traffic from (search, ads, email)?",
            "what query/intent?",
            "what has the person already tried?",
            "what next action is realistic?",
          ],
        },
      ],
      links: [
        {
          label: "Landing page copy",
          href: "/en/blog/tekst-lendinga/",
        },
        {
          label: "Ad banner",
          href: "/en/blog/reklamnyy-banner/",
        },
      ],
    },
    {
      title: "What to do on each step",
      level: 2,
      paras: [
        "Steps 1–2: convince the job exists and its cost is rising. Content, before/after cases, simple explanations without brand jargon.",
        "Step 3: show the problem is solvable in different ways — articles, approach comparisons, video, infographics. Step 4: compare solution options and choice criteria. Step 5: prove you’re the best choice — USP, guarantees, reviews, offer.",
      ],
      lists: [
        {
          intro: "Message focus:",
          items: [
            "1–2 — problem and cost of inaction",
            "3 — solution classes",
            "4 — criteria and comparison",
            "5 — your brand, risks, CTA",
          ],
        },
      ],
      links: [
        {
          label: "USP (unique selling proposition)",
          href: "/en/blog/utp/",
        },
        {
          label: "Target audience",
          href: "/en/blog/tselevaya-auditoriya/",
        },
      ],
    },
    {
      title: "One piece — several steps",
      level: 2,
      paras: [
        "A strong long-form piece or landing can walk several steps in a row: pain → options → why this approach → why you → action. The main thing — don’t open with price for people who don’t get the job yet.",
        "In ad accounts, segment: different creatives for lookalikes/interests vs retargeting “already on the site.” One ad for every step talks past part of the audience.",
      ],
    },
    {
      title: "Tie-in with funnel and channels",
      level: 2,
      paras: [
        "Content and SEO often feed the lower steps. Paid search on commercial queries — middle and upper. Retargeting and email — people who already know you.",
        "Measure more than the click: read-through, lead, lead quality. If hot queries convert but reach doesn’t — check whether you’re selling step five to a step-one audience.",
      ],
      lists: [
        {
          intro: "Mini audit:",
          items: [
            "first screen matches traffic temperature",
            "there’s content for “problem” and for “choice”",
            "USP doesn’t appear before context is clear",
            "retargeting doesn’t hammer a cold offer for a month straight",
          ],
        },
      ],
      links: [
        {
          label: "Marketing anti-trends",
          href: "/en/blog/antitrendy-marketinga/",
        },
      ],
    },
  ],
  closing: [
    "The awareness ladder reminds you: purchase is the end of a path through understanding. Speak to the person on their step — then ads and landings stop being a shout into the void.",
  ],
};
