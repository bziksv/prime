import type { BlogPost } from "../../../data/blog";

/** EN overlay for zaspamlennost-teksta — same structure as RU JSON. */
export const zaspamlennostTekstaEn: BlogPost = {
  slug: "zaspamlennost-teksta",
  title: "Keyword stuffing: what it is and how to fix it",
  date: "2021-10-29",
  category: "SEO",
  cover: "/images/blog/zaspamlennost-teksta/cover-en.webp",
  excerpt:
    "What keyword stuffing and “text nausea” scores mean, how excess keywords hurt readers and SEO, which tools measure density, and how to clean the copy without padding it with fluff.",
  lead: [
    "Keyword stuffing is when target phrases and same-root repeats pile up until the page reads like it was written for a bot. Search engines dislike it. Readers bounce even faster.",
    "Below: how stuffing shows up, why teams still use Advego and text.ru, and how to lower density without turning the article into empty filler. Tool scores are a brief guideline — not a ranking law.",
  ],
  faq: [
    {
      q: "What stuffing percentage counts as “normal”?",
      a: "On text.ru the usual advice is “don’t go to extremes”; briefs often ask for a moderate zone (roughly up to ~45–50% on their scale). Always match the specific tool — the scales don’t line up.",
    },
    {
      q: "Does a high Advego “nausea” score mean a search ban?",
      a: "No direct formula. High classic or academic nausea just flags lots of repeats. Engines weigh meaning, behavior, and overall page quality — not one third-party percentage.",
    },
    {
      q: "Should I pad the text with fluff to drop the score?",
      a: "No. Use synonyms, pronouns, rephrasing, and cut spare keywords. Fluff damages the copy in a different way.",
    },
    {
      q: "Are keywords in the title tag spam?",
      a: "One natural main idea is fine. A comma chain like “buy cheap wholesale city urgent” is already stuffing.",
    },
    {
      q: "What else should I check with?",
      a: "Advego, text.ru, Istio, and similar tools — plus common sense: read it aloud. If you stumble, edit.",
    },
  ],
  sections: [
    {
      title: "What counts as stuffing",
      level: 2,
      paras: [
        "It’s how often keywords (and close forms) show up relative to the length of the text. Keywords belong in the topic — racing to plant the query in every sentence breaks the language.",
        "A classic anti-example: a product blurb where one commercial phrase repeats dozens of times with tiny swaps. Formally “optimized.” In practice — spam.",
      ],
      lists: [
        {
          intro: "Stuffing usually looks like:",
          items: [
            "the same words in every paragraph",
            "unnatural query chains",
            "keyboard-layout tricks and typos “for uniqueness”",
            "copy a human can’t finish reading",
          ],
        },
      ],
    },
    {
      title: "How it connects to rankings",
      level: 2,
      paras: [
        "Relevance matters, but search also judges usefulness, uniqueness, and on-page behavior. Stuffing erodes trust and UX — bounce goes up.",
        "Ranking uses many signals. A third-party “nausea %” is not plugged into the algorithm. Treat the tool as an editor’s helper. Cleaner copy is part of prep; ranking gains for a competitive set are still planned over months (often 2–6), not the day you lower a density score.",
      ],
    },
    {
      title: "Tools that check density",
      level: 2,
      paras: [
        "text.ru reports stuffing, uniqueness, and often spelling issues. Advego reports classic and academic “nausea” — two different density formulas.",
        "Istio, PR-CY, and desktop analyzers are alternatives. Numbers won’t match one-to-one across tools, so name the instrument and threshold in the brief.",
      ],
      lists: [
        {
          intro: "A practical brief approach:",
          items: [
            "name the tool and the threshold",
            "require human readability",
            "don’t chase a “magic” percent at the cost of meaning",
            "recheck the final text after edits",
          ],
        },
      ],
      notes: [
        {
          title: "Practice tip",
          text: "If a tool screams “spam” but the copy reads fine, check whether required product or brand names flooded the report. Fix with judgment — not a blind find-and-replace.",
        },
      ],
    },
    {
      title: "How to reduce stuffing",
      level: 2,
      paras: [
        "Cut spare keyword repeats, swap some for synonyms and pronouns, and rebuild awkward sentences. Passages you can’t save — delete.",
      ],
      lists: [
        {
          intro: "Working order:",
          items: [
            "find the top frequent words in the report",
            "keep the keyword where it still carries meaning",
            "smooth with natural speech, not fluff",
            "don’t spawn same-root forms in every paragraph",
            "read aloud and send for a final proofread",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Inflating the word count with empty phrases so the “keyword %” drops. You just get watery spam of another kind.",
        },
      ],
      links: [
        {
          label: "Copywriting",
          href: "/en/blog/kopirayting/",
        },
        {
          label: "Keyword research",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
  ],
};
