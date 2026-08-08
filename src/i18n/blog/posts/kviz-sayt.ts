import type { BlogPost } from "../../../data/blog";

/** EN overlay for kviz-sayt — same structure as RU JSON. */
export const kvizSaytEn: BlogPost = {
  slug: "kviz-sayt",
  title: "Quiz site: when you need one and how to make it work",
  date: "2020-01-14",
  category: "Digital marketing",
  cover: "/images/blog/kviz-sayt/cover-en.webp",
  excerpt:
    "What a quiz site and a landing quiz are: gamification, when a multi-step survey beats a long page, a build algorithm, and builder vs agency.",
  lead: [
    "A quiz site (or a quiz block on a landing) is a step-by-step survey in game form: the user answers questions, gets a personal result or calculation, and the business gets a segment and a contact.",
    "It isn’t a “newest replacement for every landing” — it’s a format for a job: warm up colder traffic and collect a lead without a wall of copy. Below: when it works, how to build it, and what to watch.",
  ],
  faq: [
    {
      q: "Does a quiz replace a normal landing?",
      a: "Not always. For hot demand with a clear offer, classics often suffice. A quiz is stronger when you need to clarify the job and lower the lead barrier.",
    },
    {
      q: "How does it differ from a regular form?",
      a: "Several steps, a sense of progress, a personal outcome. A form is fields right away; a quiz is a dialogue with a result.",
    },
    {
      q: "Which step of Hunt’s awareness ladder does it fit?",
      a: "Often for people still choosing a solution (middle steps). On steps 4–5 a short offer without a long survey is sometimes enough.",
    },
    {
      q: "How many questions is normal?",
      a: "Usually 4–8 that earn their place. Ten “for looks” raise drop-off. Every question should affect the offer or qualification.",
    },
    {
      q: "Builder or agency?",
      a: "A simple test — a builder. Complex calculation, brand design, CRM integrations — more often a contractor. Stake and cost of error decide.",
    },
    {
      q: "Where do leads go?",
      a: "Into CRM or a sheet with quiz answers. Without passing the segment to sales, the survey loses its point.",
    },
    {
      q: "Is this manipulation?",
      a: "Progress and personalization boost engagement. The line is an honest result and consent to contact — no fake “you won” tricks.",
    },
  ],
  sections: [
    {
      title: "What a quiz site is",
      level: 2,
      paras: [
        "It’s a landing (separate URL or block) where instead of a long text the user runs a mini scenario: questions → branching logic → outcome (selection, calculation, recommendation) → contact form.",
        "Landings didn’t disappear: a quiz adapts to “learn the need and give an answer.” Poor classic-page conversion is a reason to test a quiz hypothesis — not to blindly copy someone else’s template.",
      ],
      lists: [
        {
          intro: "Why business uses it:",
          items: [
            "lead qualification",
            "a personal offer",
            "a lower barrier than “leave a request into the void”",
            "data for the sales script",
          ],
        },
      ],
      links: [
        {
          label: "Awareness ladder (Hunt’s ladder)",
          href: "/en/blog/lestnitsa-hanta/",
        },
        {
          label: "Landing page copy",
          href: "/en/blog/tekst-lendinga/",
        },
      ],
    },
    {
      title: "Gamification: why progress matters",
      level: 2,
      paras: [
        "Steps, a progress bar, and “2 questions left” raise completion: an unfinished scenario wants closing. Use that on purpose — not to deceive, but to guide a choice.",
        "It works when questions are short, options are clear, and the outcome is truly useful. Otherwise the user feels an empty game for a phone number.",
      ],
    },
    {
      title: "When a quiz is needed — and when not",
      level: 2,
      paras: [
        "It makes sense: a complex product with branches (renovation, training, service match), cold/warm traffic, segmentation needed before a call. Weaker: impulse buy at one price, audience already on-site with a ready “buy X” intent.",
        "Tied to awareness: a long multi-page often waits for hot visitors. A quiz helps those who still need to name the job — and leads to a request more gently.",
      ],
      lists: [
        {
          intro: "Signals it’s worth testing:",
          items: [
            "customers have many types of jobs",
            "managers spend time on first-line qualification",
            "drop-offs on a long form",
            "ads bring mixed-temperature traffic",
          ],
        },
      ],
    },
    {
      title: "Build algorithm",
      level: 2,
      paras: [
        "Goal first: a personal offer for mature demand, or choice help for colder traffic. Goal drives questions and the finale (price/package vs guide/selection).",
        "Then: audience and branches → question map → copy and visuals → form and consent → integration → ad traffic → fixes from step drop-offs.",
      ],
      lists: [
        {
          intro: "Practical order:",
          items: [
            "goal and metric (lead, qualification)",
            "4–8 questions without fluff",
            "a clear outcome before or right after asking for contact",
            "answers passed into CRM",
            "A/B of length and wording",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Asking for a phone on the first screen before any value. Scenario usefulness first — then contact, if the funnel logic allows it.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Target audience",
          href: "/en/blog/tselevaya-auditoriya/",
        },
        {
          label: "USP (unique selling proposition)",
          href: "/en/blog/utp/",
        },
      ],
    },
    {
      title: "Builder or agency",
      level: 2,
      paras: [
        "A builder speeds up a hypothesis: a day or two for a draft with a clear audience. An agency or custom build — when you need brand, complex logic, calculations, integrations, and ownership of ad conversion.",
        "There’s no absolute “always DIY / always contractor.” With a high media budget, a bad quiz costs more than saving on a template.",
      ],
    },
    {
      title: "What to watch in an effective quiz",
      level: 2,
      paras: [
        "Mobile layout, speed, honest outcome, clear CTA, data policy. Answers should change the manager’s next step — otherwise it’s a decorative survey.",
        "You can embed it in an existing site or make a separate URL for ads. Don’t spawn conflicting offers between the quiz and the main site.",
      ],
      lists: [
        {
          intro: "Quality criteria:",
          items: [
            "questions affect the offer",
            "few mid-funnel drop-offs",
            "leads tagged with a segment",
            "consent to contact",
            "the promised outcome matches reality",
          ],
        },
      ],
    },
  ],
  closing: [
    "A quiz site strengthens the funnel when questions and outcome tie to the customer’s job. Build short logic, measure steps, and hand answers to sales — or it stays a “pretty game.”",
  ],
};
