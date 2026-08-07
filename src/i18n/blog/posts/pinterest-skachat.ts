import type { BlogPost } from "../../../data/blog";

/** EN overlay for pinterest-skachat — same structure as RU JSON. */
export const pinterestSkachatEn: BlogPost = {
  slug: "pinterest-skachat",
  title: "How to save a Pinterest image to phone and computer",
  date: "2021-06-14",
  category: "SMM",
  cover: "/images/blog/pinterest-skachat/cover-en.webp",
  excerpt:
    "How to legally save an image from Pinterest to a device: built-in download, the app, and idea boards — with a reminder about copyright.",
  lead: [
    "Pinterest works well as a reference board. You can save an image to a device with the site and app’s own tools — no third-party “parsers.”",
    "Below — basic methods for computer and phone. Others’ work is copyrighted: for commercial use you need your own photos, a license, or the author’s permission.",
  ],
  faq: [
    {
      q: "Can you use someone else’s pins in ads?",
      a: "Without a license/permission — claim risk. For ads and the site use your own shoots, properly licensed assets, or AI under the license terms.",
    },
    {
      q: "Screenshot instead of Download?",
      a: "Technically yes, but quality is worse and rights are the same. Prefer the built-in download when it’s available.",
    },
    {
      q: "Why boards if you can save to the gallery?",
      a: "Boards structure ideas (mood, product, competitors). The gallery is a one-off file.",
    },
    {
      q: "Do you need browser extensions?",
      a: "The official Pin It tool is handy for saving into your account. Third-party “download everything” extensions are often unnecessary and risky.",
    },
    {
      q: "Is this about SEO?",
      a: "More about content and references. For search, unique images on your own site matter more.",
    },
  ],
  sections: [
    {
      title: "On a computer",
      level: 2,
      paras: [
        "Open the pin → menu (⋯) → download image if the author/platform shows it. Or “Save image as…” via right-click on the preview file — quality may differ.",
        "For idea work, save the pin to your board so references don’t get lost.",
      ],
      lists: [],
    },
    {
      title: "On a phone",
      level: 2,
      paras: [
        "In the Pinterest app open the image → menu → save/download (wording depends on OS and version). The file appears in the gallery.",
        "A screenshot is a fallback if download isn’t available; crop the extras.",
      ],
      lists: [],
    },
    {
      title: "Boards and copyright",
      level: 2,
      paras: [
        "Create boards by project theme and sort pins into sections. That speeds a design and shoot brief.",
        "Download ≠ permission for commercial use. For posts and ads plan your own frames or legal sources.",
      ],
      lists: [],
      links: [
        {
          label: "Photos for Instagram",
          href: "/en/blog/foto-instagram/",
        },
        {
          label: "Infographics",
          href: "/en/blog/infografika/",
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "Pinterest reference → your own shoot/layout. Copying someone else’s file into ads is a short path to a complaint.",
        },
      ],
    },
  ],
};
