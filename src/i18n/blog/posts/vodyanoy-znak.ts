import type { BlogPost } from "../../../data/blog";

/** EN overlay for vodyanoy-znak — same structure as RU JSON. */
export const vodyanoyZnakEn: BlogPost = {
  slug: "vodyanoy-znak",
  title: "Photo watermarks: why they help and when they hurt",
  date: "2020-09-16",
  category: "Internet marketing",
  cover: "/images/blog/vodyanoy-znak/cover-en.webp",
  excerpt:
    "What a watermark on digital photos is: protection and branding, downsides for perception and sharing, how to apply it carefully, and alternatives (previews, contracts, metadata).",
  lead: [
    "A watermark is a semi-transparent signature, logo, or URL over an image. The idea came from paper and banknotes; on the web the mark reminds of the author and slightly complicates “quiet” copying.",
    "Below — when a watermark fits, why it doesn’t replace legal protection, and how not to spoil the shot. Specific buttons in online tools and Photoshop panels change — the principle matters: opacity, size, placement.",
  ],
  faq: [
    {
      q: "Is a watermark = legal protection?",
      a: "No. It’s a visual signal and a light barrier. Rights are confirmed by contract, authorship records, and evidence in a dispute — not a corner logo.",
    },
    {
      q: "Can a watermark be removed?",
      a: "An experienced person will often crop or retouch it. Don’t build protection on the mark alone.",
    },
    {
      q: "Where to place the mark?",
      a: "So it doesn’t hit the subject: a corner, a light repeating pattern, or a zone outside the main object. Too large a mark kills the frame.",
    },
    {
      q: "Do you need it on every site photo?",
      a: "Not always. For portfolios and stock — more often yes; for UX illustrations and social sharing a clean smaller preview is sometimes better.",
    },
    {
      q: "What can replace it?",
      a: "Publish smaller previews, keep originals offline, licenses/contracts, metadata, and when needed — registries and legal support.",
    },
  ],
  sections: [
    {
      title: "Why people add them and who benefits",
      level: 2,
      paras: [
        "On stock sites and among photographers a watermark lowers the temptation to download “as is” and also advertises the author if the frame still travels further online.",
        "Site owners mark their visuals with a logo or domain: protection + recognition. A good mark is almost unnoticeable but readable when copied.",
        "Marketers sometimes make the mark part of the brand: the image “wanders”, the logo travels with it. That works only if the mark doesn’t ruin the composition.",
      ],
      lists: [
        {
          intro: "Typical goals:",
          items: [
            "reduce free-riding copies;",
            "credit the author on a repost;",
            "strengthen brand on shared previews;",
            "tell a demo frame from a paid license.",
          ],
        },
      ],
      links: [
        {
          label: "Copyright on Instagram",
          href: "/en/blog/avtorskie-prava-instagram/",
        },
        {
          label: "Open Graph",
          href: "/en/blog/open-graph/",
        },
      ],
    },
    {
      title: "Downsides, tools, and practice",
      level: 2,
      paras: [
        "Downsides: the mark distracts from the frame; a crude watermark looks cheap; social sharing drops if the image is “smeared”; legally one corner isn’t enough.",
        "Tools: a graphics editor (Photoshop, Photopea, GIMP and peers), batch processing in Lightroom/plugins, online services with file upload. Don’t upload photos with sensitive data to shady sites — for commercial originals local software is preferable.",
        "Application practice: a separate layer, 15–40% opacity, contrast against the background, one style across the site. For portfolios a small preview without a mark + the full file on request/payment is sometimes better.",
        "Whether to use one depends on the goal: stock and selling rights — more often yes; atmospheric blog illustrations — to taste; if sharing and aesthetics matter more — previews and contracts beat a fat logo across half the frame.",
        "Bottom line: a watermark is a useful protection and brand layer, not armor. Do it carefully or choose previews and a legal frame.",
      ],
      lists: [
        {
          intro: "Careful watermark checklist:",
          items: [
            "doesn’t cover face/product;",
            "one style across the series;",
            "readable on a preview, but doesn’t shout;",
            "a backup file without the mark exists;",
            "rights and licenses are handled separately.",
          ],
        },
      ],
      links: [
        {
          label: "Photos for Instagram",
          href: "/en/blog/foto-instagram/",
        },
        {
          label: "Favicon",
          href: "/en/blog/favikon/",
        },
      ],
    },
  ],
  related: [
    "avtorskie-prava-instagram",
    "open-graph",
    "foto-instagram",
    "favikon",
    "sohranit-foto-instagram",
  ],
};
