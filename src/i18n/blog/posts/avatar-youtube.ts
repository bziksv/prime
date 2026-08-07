import type { BlogPost } from "../../../data/blog";

/** EN overlay for avatar-youtube — same structure as RU JSON. */
export const avatarYoutubeEn: BlogPost = {
  slug: "avatar-youtube",
  title: "YouTube channel avatar: requirements, ideas, and how to set it",
  date: "2022-01-12",
  category: "SMM",
  cover: "/images/blog/avatar-youtube/cover-en.webp",
  excerpt:
    "Why a YouTube channel needs an avatar, image requirements, what to show, and how to change the icon from a computer or phone.",
  lead: [
    "A YouTube avatar is the round channel icon under videos, in search, and in comments. People recognize the brand from it faster than from a long name.",
    "The channel icon is how people recognize you in search, subscriptions, and comments. Keep it sharp at tiny sizes; Studio menu items move — look for channel customization.",
  ],
  faq: [
    {
      q: "How is a YouTube avatar different from a channel banner?",
      a: "The avatar is a small permanent mark. The banner is a wide header cover. Both should share one visual system.",
    },
    {
      q: "What size should you prepare for a YouTube avatar?",
      a: "Guide — a high-resolution square (often 800×800 px or more). Check exact limits in YouTube Studio help.",
    },
    {
      q: "Should you use a face photo or a logo?",
      a: "A face — for a personal channel. A logo/mark — for a brand and studio. The main thing is readability in a small circle.",
    },
    {
      q: "Can you use random images from the web?",
      a: "Only if you have rights. Someone else’s stock/character without a license — risk of complaints and bans.",
    },
    {
      q: "What happens without your own YouTube avatar?",
      a: "Google account photo or initials fill in — weaker for channel recognition.",
    },
  ],
  sections: [
    {
      title: "Why you need an avatar",
      level: 2,
      paras: [
        "The icon helps find the channel in recommendations, under videos, and in comments. A click on the avatar opens the channel page.",
        "A strong mark works like a mini-logo: viewers remember shape and color faster than the name text.",
      ],
      lists: [],
    },
    {
      title: "Image requirements",
      level: 2,
      paras: [
        "Prepare a square with margin: edges may crop under the mask. The center of the frame is what matters most.",
      ],
      lists: [
        {
          intro: "Quality criteria:",
          items: [
            "uniqueness — not a clone of another channel;",
            "readability at small size;",
            "link to the topic (animals, cars, learning…);",
            "contrast between background and subject;",
            "your rights to the image.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "Check a preview: shrink the image to ~40–60 px. If meaning disappears — simplify.",
        },
      ],
    },
    {
      title: "What to depict",
      level: 2,
      paras: [
        "Three workable types: host photo, logo/letter mark, illustration. Style should match the tone of the videos.",
      ],
      lists: [
        {
          intro: "Niche tips:",
          items: [
            "personal expert channel — portrait;",
            "brand / media — logo;",
            "kids / entertainment — bright character (with your rights);",
            "travel / nature — a recognizable topic symbol, not random stock.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Using someone else’s face or a meme without rights “because it looks good”. That’s ethics and legal risk.",
        },
      ],
    },
    {
      title: "How to make your avatar",
      level: 2,
      paras: [
        "Best source — your own shoot or brand logo. Editors (Canva, Figma, Photoshop and analogues) are for crop and contrast, not stealing other people’s work.",
      ],
      lists: [
        {
          intro: "Short pipeline:",
          items: [
            "pick the subject (face / mark);",
            "crop to a square with a safe zone;",
            "boost contrast, remove tiny text;",
            "export high-quality PNG/JPG;",
            "check on dark and light UI themes.",
          ],
        },
      ],
    },
    {
      title: "How to set it in YouTube",
      level: 2,
      paras: [
        "In YouTube Studio open channel customization / profile picture and upload the file. On a phone the path is the same via the Studio app or channel settings — look for the channel profile photo block.",
        "After upload wait for cache refresh: the icon in the feed may not change instantly.",
      ],
      lists: [
        {
          intro: "After changing, check:",
          items: [
            "avatar on the channel page;",
            "under a fresh video;",
            "in a comment;",
            "consistency with the banner.",
          ],
        },
      ],
      links: [
        {
          label: "Instagram avatar",
          href: "/en/blog/avatar-instagram/",
        },
      ],
    },
  ],
};
