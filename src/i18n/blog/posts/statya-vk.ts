import type { BlogPost } from "../../../data/blog";

/** EN overlay for statya-vk — same structure as RU JSON. */
export const statyaVkEn: BlogPost = {
  slug: "statya-vk",
  title: "VK article: how to prepare and publish",
  date: "2021-07-20",
  category: "SMM",
  cover: "/images/blog/statya-vk/cover-en.webp",
  excerpt:
    "How to use the VK articles editor: title, formatting, cover, drafts, stats, and publishing on a wall or in a community.",
  lead: [
    "A VK article is a long-form piece with a title, paragraphs, lists, and a cover — not a single-wall post. It’s better for breakdowns, guides, and expert texts in a community.",
    "Below — prep in the editor, text and media layout, publishing, and stats. VK menu labels change — rely on the meaning of “Articles” / the editor blocks, not outdated screenshots.",
  ],
  faq: [
    {
      q: "How is an article different from a wall post?",
      a: "A post is a short entry with attachments. An article is a separate document with layout, a cover, and easier reading; the wall shows a teaser.",
    },
    {
      q: "Where to write: community or personal page?",
      a: "For business — in a community: subscriber reach and public stats. A personal page — for an author blog.",
    },
    {
      q: "Do you need a cover?",
      a: "Preferably: it lifts teaser clicks. If you skip it — VK may pick an image from the body. Aim for ~16:9; check the exact size in the editor hints.",
    },
    {
      q: "Are drafts saved?",
      a: "Yes, the editor usually autosaves. The drafts section lets you return after closing the tab.",
    },
    {
      q: "Does an article replace a content plan?",
      a: "No. It’s a format. Rhythm and topics are separate; see community growth / management materials.",
    },
  ],
  sections: [
    {
      title: "When you need an article, not a post",
      level: 2,
      paras: [
        "An article fits when the piece is longer than a few paragraphs: a guide, case, roundup, or how-to. A short promo teaser is better as a post with a link to the article or product.",
        "A strong teaser title decides whether people open the text. Without value in the first screens, long-form won’t save it.",
      ],
      lists: [],
      links: [
        {
          label: "Growing a VK group",
          href: "/en/blog/raskrutka-gruppy-vk/",
        },
      ],
    },
    {
      title: "Editor: text and media",
      level: 2,
      paras: [
        "Open create post and switch to article mode (text icon / “Article” — the label may differ). Fill in the title and body.",
        "Formatting on selection: bold, italic, strikethrough, link, headings, quote. Lists often start on a new line with `1.` or `-` and Enter — if the gesture changed, use the toolbar buttons.",
      ],
      lists: [
        {
          intro: "Media inside the article:",
          items: [
            "photos from an album, device, or drag-and-drop;",
            "video in supported formats;",
            "illustrations with a readable scene, not stock for stock’s sake;",
            "a cover separate from in-body images.",
          ],
        },
      ],
      notes: [
        {
          title: "Hotkeys",
          text: "The usual set like Ctrl+B / Ctrl+I and undo Ctrl+Z often works in the web editor; the exact list depends on the browser. Don’t rely on them alone — toolbar buttons are more reliable.",
        },
      ],
    },
    {
      title: "Cover, drafts, and stats",
      level: 2,
      paras: [
        "The cover is the wall teaser banner. Set it explicitly if CTR and brand matter. Reading theme (light/dark) is reader comfort, not SEO.",
        "Drafts and autosave protect against losing text. After publish, watch views, reactions, shares, and link clicks in the material/community stats.",
      ],
      lists: [
        {
          intro: "Before publish:",
          items: [
            "the title is clear without context;",
            "there’s a cover or a strong first illustration;",
            "links open;",
            "no wall of text without subheads;",
            "wall teaser preview checked.",
          ],
        },
      ],
    },
    {
      title: "Publishing on the wall and in a community",
      level: 2,
      paras: [
        "In the publish menu pick the cover, adjust the URL slug if needed, author byline, and placement (wall / community). After save, the piece appears in the feed with a teaser.",
        "Removing from published often leaves a draft copy — you can republish. For engagement, “share” and reader bookmarks help.",
      ],
      lists: [
        {
          intro: "After it goes live:",
          items: [
            "pin a strong article if needed;",
            "announce in community Stories/newsletter;",
            "reply to the first comments;",
            "a day later review stats and hypotheses.",
          ],
        },
      ],
      links: [
        {
          label: "VK newsletter",
          href: "/en/blog/rassylka-vk/",
        },
      ],
    },
  ],
};
