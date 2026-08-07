import type { BlogPost } from "../../../data/blog";

/** EN overlay for infografika — same structure as RU JSON. */
export const infografikaEn: BlogPost = {
  slug: "infografika",
  title: "Infographics: types, why they matter, and how to keep them clear",
  date: "2021-08-31",
  category: "Content marketing",
  cover: "/images/blog/infografika/cover-en.webp",
  excerpt:
    "What an infographic is, which types exist, how to start a layout, and which mistakes kill readability. Principles beat a list of outdated tools.",
  lead: [
    "An infographic is a visual take on facts, processes, and numbers: a diagram, chart, timeline, map. The job is to grasp something complex faster than from a wall of text.",
    "Below: types, build principles, and typical fails. Layout tools change; meaning and hierarchy first, then a template in Canva, Figma, or another editor.",
  ],
  faq: [
    {
      q: "How is an infographic different from a plain image?",
      a: "It has data structure and a takeaway: the viewer reads relationships (share, steps, comparison), not only atmosphere.",
    },
    {
      q: "When is an infographic better than text?",
      a: "Processes, comparisons, stats, “how it works.” For nuance and caveats you still need text nearby or in a caption.",
    },
    {
      q: "Do you need a designer?",
      a: "For a simple timeline — often no. For a brand report and complex analytics — yes: otherwise you get colorful noise.",
    },
    {
      q: "Which tools should I use?",
      a: "Whatever fits: Figma, Canva, PowerPoint/Keynote, specialized builders. Check export (PNG/SVG/PDF) and template rights.",
    },
    {
      q: "Do infographics help SEO?",
      a: "Indirectly: if people link, save, embed. An image alone without text and alt ranks weakly; you need explaining content beside it.",
    },
  ],
  sections: [
    {
      title: "Why infographics help",
      level: 2,
      paras: [
        "They lower the entry bar: a “what’s in the pizza” diagram beats a paragraph of grams. Works in education, journalism, decks, landings, and reports.",
      ],
      lists: [
        {
          intro: "Where they fit:",
          items: [
            "step-by-step processes",
            "comparing plans/options",
            "stats and shares",
            "geography and routes",
            "product inner logic.",
          ],
        },
      ],
    },
    {
      title: "Types",
      level: 2,
      paras: [
        "Pick the format for the job — not “what looks prettier in the template.”",
      ],
      tables: [
        {
          caption: "Common formats",
          headers: ["Type", "When"],
          rows: [
            ["Chart / diagram", "Trends and shares"],
            ["Table", "Exact values side by side"],
            ["Diagram / flowchart", "Process and branches"],
            ["Timeline", "Stages over time"],
            ["Map", "Geo and coverage"],
            ["Icons + numbers", "Key facts in a row"],
          ],
        },
      ],
    },
    {
      title: "How to start a layout",
      level: 2,
      paras: [
        "Plan → verified data → one main takeaway → visual hierarchy → color and type. Without a plan a template only speeds up chaos.",
      ],
      lists: [
        {
          intro: "Quality checklist:",
          items: [
            "one focus (not five topics on one banner)",
            "number sources stated",
            "text readable on a phone",
            "icons don’t fight the meaning",
            "brand marks don’t cover the data",
            "alt and caption on the site.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Pretty gradients and tiny type: nothing readable on a phone. Contrast and size first, then decoration.",
        },
      ],
    },
    {
      title: "Tools without chasing trends",
      level: 2,
      paras: [
        "Old guides listed dozens of builders — half changed name or pricing. A practical stack: data table → viz in a familiar editor → export.",
        "Canva and similar tools speed templates; Figma — grid control in a team; Excel/Google Sheets + chart paste — for reports. Video infographics are a separate genre with a storyboard.",
      ],
      lists: [
        {
          intro: "Before publishing:",
          items: [
            "verify the facts",
            "export Retina/2x when needed",
            "compress without mushing the numbers",
            "add a text retelling for SEO and accessibility.",
          ],
        },
      ],
    },
    {
      title: "Short takeaway",
      level: 2,
      paras: [
        "An infographic works when there’s a clear takeaway and honest data. Pick the type for the job, build hierarchy, check phone readability. The tool is secondary; noise for “wow” kills understanding.",
      ],
      lists: [],
    },
  ],
};
