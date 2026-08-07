import type { BlogPost } from "../../../data/blog";

/** EN overlay for ssylki-vkontakte — same structure as RU JSON. */
export const ssylkiVkontakteEn: BlogPost = {
  slug: "ssylki-vkontakte",
  title: "Clean VK links: mentions, previews, and post URLs",
  date: "2021-06-16",
  category: "SMM",
  cover: "/images/blog/ssylki-vkontakte/cover-en.webp",
  excerpt:
    "How to make a clickable mention of a person or community on VKontakte, attach a site link with a preview, and copy a post URL — without confusing them with a bare browser address.",
  lead: [
    "On VK a “clean link” isn’t only the raw address from the browser bar. More often it means a clickable profile/group mention with a label, or an external site card with a preview.",
    "Below — why it matters, how to tag a user or community, how to attach a third-party URL, and how to copy a specific post link. The VK UI changes — syntax and meaning matter more than button screenshots.",
  ],
  faq: [
    {
      q: "How does a mention differ from a plain URL?",
      a: "A mention is a blue clickable label to a profile or community plus a notification to the recipient (if settings allow). A bare URL is just address text.",
    },
    {
      q: "Can you label an external site the same way?",
      a: "The `@id… (label)` syntax works for VK profiles/communities. An external site is usually pasted as a URL — the platform builds the preview.",
    },
    {
      q: "Does a mention send a notification?",
      a: "Usually yes if the page isn’t closed and the user isn’t on a block list. On fully private setups the notice may not go out.",
    },
    {
      q: "How do you tag someone who isn’t a friend?",
      a: "Via ID: a format like `@id123456 (Name)` or the current analogue from VK Help. For friends, `*` and suggestions often suffice.",
    },
    {
      q: "Why use an external-link preview?",
      a: "Readers see title and image before the click. The site gets a clearer handoff from the feed.",
    },
    {
      q: "How do you copy the link to a specific post?",
      a: "Open the post (often via the date/time) and copy the URL from the address bar — or use Share.",
    },
    {
      q: "Do you need a link shortener?",
      a: "Not required. Useful for long UTM addresses or when the platform offers its own short form.",
    },
    {
      q: "Relation to HTML links on a site?",
      a: "Different environment. On a site — an `<a href>` tag. On VK — mention markup and previews. See the clickable-link article.",
    },
  ],
  sections: [
    {
      title: "Why format links in VK",
      level: 2,
      paras: [
        "Mentions help tag winners, authors, partners, and colleagues without awkward ID paste. Readers click easier; recipients more often get a signal.",
        "External links with previews send traffic to the site and make a post clearer than a wall of plain text. For a community that’s both convenience and measurable clicks.",
      ],
      lists: [
        {
          intro: "Typical jobs:",
          items: [
            "tag a person in a post or comment;",
            "credit authorship;",
            "announce a site article;",
            "send colleagues the exact post URL.",
          ],
        },
      ],
    },
    {
      title: "Mentioning a user or community",
      level: 2,
      paras: [
        "If someone is a friend, typing `*` and starting the name often works — VK suggests a match and inserts a clickable construct with a label in parentheses. You can edit the label: the feed shows your text; the click goes to the right profile.",
        "If they aren’t a friend, take the ID from the page URL and build the mention by hand, e.g. `@id123456789 (First Last)`. For communities — the same via short address or community ID. Check current syntax in VK Help: UI details change.",
      ],
      lists: [
        {
          intro: "Practice:",
          items: [
            "verify the click opens the right profile;",
            "don’t spam mentions — it annoys and kills trust;",
            "in communities, tagging winners and speakers works well;",
            "respect privacy and block lists.",
          ],
        },
      ],
      links: [
        {
          label: "Comments in a VK public",
          href: "/en/blog/kommentarii-v-pablike-vk/",
        },
        {
          label: "Growing a VK group",
          href: "/en/blog/raskrutka-gruppy-vk/",
        },
      ],
    },
    {
      title: "Link to an external site",
      level: 2,
      paras: [
        "Copy the page’s HTTPS address and paste it into the post with spaces around it. VK usually pulls a preview: title, description, image. You can refresh or remove the preview in the post editor if needed.",
        "For analytics add UTMs on the site side. Don’t paste others’ articles wholesale — a short teaser and a link to the source is better.",
      ],
      lists: [],
      links: [
        {
          label: "UTM tags",
          href: "/blog/utm-metki/",
        },
        {
          label: "Clickable link",
          href: "/en/blog/klikabelnaya-ssylka/",
        },
      ],
    },
    {
      title: "Link to a VK post",
      level: 2,
      paras: [
        "Open the post as its own page (often via the publish date) and copy the URL. Send it in messages, paste into another post, or use it in contests and reports.",
        "Alternative — Share: repost to a wall or community without hand-copying. For a team, a short exact post URL cuts “which one from the feed?” confusion.",
      ],
      lists: [],
      notes: [
        {
          title: "Tip",
          text: "Before mass-sharing a link, check that the post is open to the audience (wall/community not closed to recipients).",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "VK article",
          href: "/en/blog/statya-vk/",
        },
      ],
    },
  ],
  related: [
    "klikabelnaya-ssylka",
    "kommentarii-v-pablike-vk",
    "raskrutka-gruppy-vk",
    "utm-metki",
    "statya-vk",
    "chto-takoe-ssylka",
  ],
};
