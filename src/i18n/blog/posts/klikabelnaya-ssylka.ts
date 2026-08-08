import type { BlogPost } from "../../../data/blog";

/** EN overlay for klikabelnaya-ssylka — same structure as RU JSON. */
export const klikabelnayaSsylkaEn: BlogPost = {
  slug: "klikabelnaya-ssylka",
  title: "Clickable links: how to make an active URL",
  date: "2021-11-02",
  category: "SEO",
  cover: "/images/blog/klikabelnaya-ssylka/cover-en.webp",
  excerpt:
    "How an active link differs from plain text, how to create one in HTML and an editor, nuances in social apps and Word — plus anchor text, target, and common mistakes.",
  lead: [
    "A clickable (active) link opens another URL on click. An inactive one is just an address string you copy by hand. On the web you almost always want real active links.",
    "Below: HTML markup, visual editors, and a short note on social apps and documents. Hypertext theory is a separate article; this is the practical how-to.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Why is an active link better than a bare URL?",
      a: "One click instead of copy-paste into the address bar. More convenient and fewer typos.",
    },
    {
      q: "What’s the minimum HTML?",
      a: "`<a href=\"https://example.com/\">Link text</a>`. For a new tab add `target=\"_blank\"` and preferably `rel=\"noopener\"`.",
    },
    {
      q: "What should the anchor say?",
      a: "The destination’s meaning: “shipping terms”, not “here” or “click”. Clearer for people and more useful for SEO.",
    },
    {
      q: "Why isn’t a link always clickable on Instagram?",
      a: "Format limits: the profile header URL is usually active; in a regular post caption — often not. Check the app’s current help.",
    },
    {
      q: "Is a Word link the same as on a site?",
      a: "Similar idea (click → go), but it’s a document, not an HTML page. For a site you still need markup or a CMS editor.",
    },
  ],
  sections: [
    {
      title: "Active vs inactive links",
      level: 2,
      paras: [
        "Active: click — a page, file, or in-page anchor opens. Inactive: a `https://…` string that isn’t a link — the user copies it themselves.",
        "Active links improve UX and help get people to the right section, product, or form.",
      ],
      lists: [
        {
          intro: "A link can look like:",
          items: [
            "anchor text",
            "a button",
            "an image map",
            "a URL the editor auto-linked",
          ],
        },
      ],
      links: [
        {
          label: "Hypertext: the theory",
          href: "/en/blog/gipertekst/",
        },
      ],
    },
    {
      title: "Creating in HTML",
      level: 2,
      paras: [
        "Basic tag: `<a href=\"URL\">anchor</a>`. The `href` is where it goes. The text between tags is what the user sees.",
      ],
      lists: [
        {
          intro: "Common attributes:",
          items: [
            "`target=\"_blank\"` — new tab",
            "`rel=\"noopener noreferrer\"` — safer with `_blank`",
            "`title` — hover hint (optional)",
            "anchor `href=\"#block\"` — jump inside the page",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "Check that the URL is complete and uses https for external sites. A typo in href = a dead link.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Visual editors and CMS",
      level: 2,
      paras: [
        "In WordPress and most builders: select text → Insert link → paste URL → save. The editor writes the HTML.",
        "Visually an active link is usually underlined or colored — the theme sets the style.",
      ],
      lists: [
        {
          intro: "Steps are almost always the same:",
          items: [
            "select a word, phrase, or image",
            "open the link tool",
            "paste the destination URL",
            "save and test with a click",
          ],
        },
      ],
    },
    {
      title: "Social apps and messengers",
      level: 2,
      paras: [
        "Clickability rules differ. On VKontakte a URL in a post often becomes active by itself; communities use short and full page addresses.",
        "On Instagram clickability is format-limited: a profile-header link or official Stories/ads fields are more reliable — not a “magic code in comments” from old guides.",
      ],
      notes: [
        {
          title: "Info",
          text: "Social UIs change. Follow the platform’s current help, not 2020 screenshots.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Links in Word and documents",
      level: 2,
      paras: [
        "In Word: select text → Insert → Link → set an address or file. After Enter on a URL the editor sometimes auto-activates it.",
        "For the web that’s a side skill: the site still gets HTML from the CMS or layout.",
      ],
      lists: [
        {
          intro: "Typical mistakes:",
          items: [
            "anchors like “here” / “more” with no meaning",
            "broken or http URLs when https exists",
            "links to a “work in progress” utility page",
            "too many useless outbound links",
          ],
        },
      ],
    },
  ],
};
