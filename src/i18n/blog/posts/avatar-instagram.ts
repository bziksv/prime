import type { BlogPost } from "../../../data/blog";

/** EN overlay for avatar-instagram — same structure as RU JSON. */
export const avatarInstagramEn: BlogPost = {
  slug: "avatar-instagram",
  title: "Instagram avatar: how to make a unique profile picture",
  date: "2022-01-04",
  category: "SMM",
  cover: "/images/blog/avatar-instagram/cover-en.webp",
  excerpt:
    "How to choose and make an Instagram avatar: photo or drawing, readability in a circle, editors, and swapping the image without rights headaches.",
  lead: [
    "An Instagram avatar is the first thing people see in the feed, Stories, and comments. On a tiny circle a face, logo, or simple mark has to read clearly.",
    "Below: criteria for commerce and blogs, how to build the image yourself, and what to avoid. This is about the avatar; the full profile is covered in the design article.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Photo or logo?",
      a: "Personal blog — usually a face. Brand or shop — a logo or service mark. What matters is recognition at small size.",
    },
    {
      q: "Do you need text on the avatar?",
      a: "Usually no: letters in a 40 px circle turn into mush. Put text in the name and bio.",
    },
    {
      q: "Can you use stock images?",
      a: "Only with a license that allows it. Other people’s photos without rights are a risk. Safer: your photo, logo, or generation with clear rights.",
    },
    {
      q: "What file size should it be?",
      a: "A high-resolution square (guide 1080×1080 and up). Exact limits are in the app Help.",
    },
    {
      q: "How often should you change it?",
      a: "Rarely. Frequent swaps break recognition. Exception — a rebrand or seasonal offer with a return to the main mark.",
    },
  ],
  sections: [
    {
      title: "Why an avatar “works”",
      level: 2,
      paras: [
        "For commerce, the image should answer in a second: who you are and what the profile is about. A pretty frame isn’t enough — it must tie to the offer.",
        "For a personal account “just so something is there” the bar is softer; for a brand the avatar is part of packaging.",
      ],
      lists: [
        {
          intro: "A good avatar:",
          items: [
            "reads in a circle",
            "stands apart from competitors in the niche",
            "matches the feed tone",
            "doesn’t violate others’ rights",
          ],
        },
      ],
      links: [
        {
          label: "Instagram profile design",
          href: "/en/blog/oformlenie-stranicy-instagram/",
        },
      ],
    },
    {
      title: "Photo avatar",
      level: 2,
      paras: [
        "Portrait to chest/face, even light, calm background. A natural expression — skip the grimace. A product in frame only if it doesn’t fight the face and still reads small.",
      ],
      lists: [
        {
          intro: "Shoot checklist:",
          items: [
            "eyes in the upper third of the frame",
            "background without visual noise",
            "no tiny shirt text in the crop zone",
            "same color tone as the feed",
          ],
        },
      ],
    },
    {
      title: "Drawn avatar and logo",
      level: 2,
      paras: [
        "Illustration and a mark suit brands. Keep the background simple and contrast high. Effects sparingly: complex art becomes a blob in a circle.",
      ],
      lists: [
        {
          intro: "Mark rules:",
          items: [
            "one dominant object",
            "large shapes, few details",
            "check on light and dark UI backgrounds",
            "don’t copy someone else’s logo “almost 1:1”",
          ],
        },
      ],
    },
    {
      title: "What to build the image with",
      level: 2,
      paras: [
        "Online editors and desktop apps with crop and layers work. Specific services come and go — look for current Canva, Photopea, or mobile-editor analogues.",
        "A template is a start, not the finish: replace stock faces with your own materials.",
      ],
      lists: [
        {
          intro: "Minimum steps in the editor:",
          items: [
            "square canvas",
            "subject centered",
            "crop with margin for the mask",
            "export without heavy compression",
          ],
        },
      ],
      notes: [
        {
          title: "On rights",
          kind: "tip",
          text: "Don’t download “free avatars” from shady sites: often that’s someone else’s content and malware wrappers. Your photo, brand book, or a licensed asset is safer.",
        },
      ],
    },
    {
      title: "Image sources",
      level: 2,
      paras: [
        "Priority: your own shoot and logo. Licensed libraries — only if the license covers avatar/social use, and the image isn’t already on half your competitors’ profiles.",
        "AI generation is fine if you understand the service rules and don’t imitate another brand.",
      ],
      lists: [
        {
          intro: "Preference order:",
          items: [
            "your photo / logo",
            "designer work",
            "licensed asset / generation",
            "never — other people’s photos from other profiles",
          ],
        },
      ],
    },
    {
      title: "How to change the avatar",
      level: 2,
      paras: [
        "In the profile open the photo → edit / upload new. The path in the app drifts a bit — look for edit profile photo.",
      ],
      lists: [
        {
          intro: "After upload:",
          items: [
            "check the circle on the preview",
            "match highlight covers",
            "make sure the header CTA doesn’t fight the new mark",
          ],
        },
      ],
      links: [
        {
          label: "YouTube channel avatar",
          href: "/en/blog/avatar-youtube/",
        },
        {
          label: "Instagram business account",
          href: "/en/blog/biznes-akkaunt-instagram/",
        },
      ],
    },
  ],
};
