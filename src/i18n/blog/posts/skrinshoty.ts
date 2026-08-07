import type { BlogPost } from "../../../data/blog";

/** EN overlay for skrinshoty — same structure as RU JSON. */
export const skrinshotyEn: BlogPost = {
  slug: "skrinshoty",
  title: "Screenshots: why you need them and how to take them on PC and phone",
  date: "2021-09-03",
  category: "Content marketing",
  cover: "/images/blog/skrinshoty/cover-en.webp",
  excerpt:
    "What a screenshot is, where it’s used in support and training, how to capture the screen on Windows, macOS, iOS, and Android, and how editors help.",
  lead: [
    "A screenshot is a capture of the whole screen or a selected area. In guides, support tickets, and reports it saves paragraphs of explanation: “here’s where it broke.”",
    "We cover why people take screenshots, built-in options on computer and phone, and basic rules: what to hide, how to annotate, and when a short screen recording is better.",
  ],
  faq: [
    {
      q: "Why is a screenshot better than a long description?",
      a: "It shows the UI as-is: menu items, the error, the URL. Less confusion in support and guides.",
    },
    {
      q: "How do I take a screenshot fast on Windows?",
      a: "Win + Shift + S — region/window/screen to clipboard. Print Screen — full screen; Alt + Print Screen — active window. Then paste into Paint/a messenger or use Snipping Tool / Snip & Sketch.",
    },
    {
      q: "How do I take a screenshot on a Mac?",
      a: "Cmd + Shift + 3 — full screen; Cmd + Shift + 4 — region; Cmd + Shift + 4, then Space — a window. Files usually land on the desktop.",
    },
    {
      q: "Do I need third-party apps?",
      a: "For one-off shots — no. Editors (arrows, blur, long scroll-shots) help documentation teams; pick them on purpose, without giving cloud tools extra rights.",
    },
    {
      q: "What must I hide?",
      a: "Passwords, tokens, client personal data, card numbers, internal URLs with secrets. Blur or crop before sending.",
    },
  ],
  sections: [
    {
      title: "Why screenshots matter",
      level: 2,
      paras: [
        "A screen capture freezes the UI at the moment of a problem or a guide step. It’s a shared language between user, support, and the guide author.",
      ],
      lists: [
        {
          intro: "Typical jobs:",
          items: [
            "support: error, code, version;",
            "training: “click here” without a wall of text;",
            "reports and bug reports;",
            "design/layout review;",
            "proof of a account state (careful with personal data).",
          ],
        },
      ],
    },
    {
      title: "How to take one on a computer",
      level: 2,
      paras: [
        "Windows: Win + Shift + S opens the modern screen snip. Classic Print Screen copies the screen to the clipboard — paste into an editor and save. Snipping Tool / Snip & Sketch adds captions and simple shapes.",
        "macOS: Cmd + Shift + 3/4 as above; holding Control puts the shot on the clipboard instead of a file.",
      ],
      lists: [
        {
          intro: "A mini ritual for a good shot:",
          items: [
            "close extra tabs and notifications;",
            "zoom if small labels matter;",
            "capture only the needed area;",
            "add an arrow/frame at the action point.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "For long pages a browser scroll-shot (DevTools / extensions) or a short Loom/screen recording is better — one frame doesn’t always fit the scenario.",
        },
      ],
    },
    {
      title: "Phone: iOS and Android",
      level: 2,
      paras: [
        "iPhone with Face ID: side button + volume up. With Touch ID: side/top + Home. The shot goes to Photos; then mark it up.",
        "Android: usually power + volume down; some brands use a palm-edge gesture or a Control Center item. Exact gestures depend on the skin — check the device help.",
      ],
      lists: [
        {
          intro: "After capture:",
          items: [
            "crop the excess;",
            "blur chats and personal data;",
            "don’t publish others’ messages without consent.",
          ],
        },
      ],
    },
    {
      title: "Editors and cloud tools",
      level: 2,
      paras: [
        "Third-party tools add cloud, arrow templates, video capture. Names and plans change; what matters are features: region, annotations, blur, team access.",
        "For internal docs, OS built-ins often suffice. If you upload a shot to the cloud — check it for secrets.",
      ],
      lists: [
        {
          intro: "When software is worth it:",
          items: [
            "daily guides with a shared arrow style;",
            "screen recording + frames in one tool;",
            "a shared screenshot library for the team.",
          ],
        },
      ],
    },
    {
      title: "Bottom line",
      level: 2,
      paras: [
        "A screenshot is a fast way to show the UI. Start with built-in hotkeys, crop and annotate what matters, hide personal data. For complex flows a short screen video beats ten unreadable frames.",
      ],
      lists: [],
    },
  ],
};
