import type { BlogPost } from "../../../data/blog";

/** EN overlay for pinterest — same structure as RU JSON. */
export const pinterestEn: BlogPost = {
  slug: "pinterest",
  title: "Pinterest: what it is and why business and personal boards use it",
  date: "2020-08-04",
  category: "SMM",
  cover: "/images/blog/pinterest/cover-en.webp",
  excerpt:
    "What Pinterest is: pins, boards, repins, how it differs from Instagram, and how to use it for ideas and traffic — without outdated demo stats or sales guarantees.",
  lead: [
    "Pinterest is visual search and idea boards: you save pins (images with a link and description) to boards, find references, and drive traffic to a site.",
    "We cover the platform vocabulary, personal vs business use, and realistic expectations. Don’t treat “millions in the US” or “women 20–45” stats from 2020 roundups as fact. Other people’s images still come with copyright.",
  ],
  faq: [
    {
      q: "Is Pinterest a social network or a search engine?",
      a: "Both in feel: an interest feed plus search by visual and topic. Stronger at “find an idea or product,” weaker at “chat in comments.”",
    },
    {
      q: "How is it different from Instagram?",
      a: "Instagram is stronger on personality and Stories/Reels. Pinterest is stronger on long pin lifespan, repins, and outbound clicks via link to an external page.",
    },
    {
      q: "Are pinterest.ru and .com different services?",
      a: "Usually one product with language and region settings. Current login is via the official site or app; don’t confuse it with clones.",
    },
    {
      q: "Can I use someone else’s pins in ads?",
      a: "For commerce you need your own materials, a license, or permission. Saving a reference to a board ≠ the right to use it in ads.",
    },
    {
      q: "How do I download an image for myself?",
      a: "With built-in tools — covered in a separate article. Not via shady scrapers.",
    },
  ],
  sections: [
    {
      title: "Glossary: pin, board, repin",
      level: 2,
      paras: [
        "Pin — a card: image, description, often a link to the source or site.",
        "Board — a thematic folder of pins (interior, recipes, product moodboard).",
        "Repin — save someone else’s pin to your board. Ideas spread without rewriting a post from scratch the way you would in an Instagram feed.",
      ],
    },
    {
      title: "How attention works on Pinterest",
      level: 2,
      paras: [
        "The platform is built for viewing images and saving. Tapping a pin opens a larger view and a path to the source site — hence interest from e-commerce and content marketing.",
        "“Pretty image = automatic sales” is a myth. You need an offer, a page, and click analytics.",
        "A strong pin lives longer than a feed post: people find it via search and recommendations for months.",
      ],
      notes: [
        {
          title: "Important",
          text: "Don’t promise ads will “own” attention on their own. Count clicks, saves, and leads with UTM.",
          kind: "tip",
        },
      ],
    },
    {
      title: "For personal use",
      level: 2,
      paras: [
        "Collecting ideas: renovation, recipes, style, travel, learning.",
        "Boards save phone space versus a thousand gallery screenshots.",
        "Handy visual search for “how to make / how it looks,” not only friends’ feeds.",
      ],
    },
    {
      title: "For business",
      level: 2,
      paras: [
        "Product and inspiration storefront: a pin leads to a product card, article, or landing page.",
        "Team references: campaign and packaging moodboards (without stealing other people’s photos into production).",
        "Audience and niches depend on the market; use your account analytics, not other people’s demo portraits from old articles.",
        "Connect the site correctly (domain, Rich Pins / the current Pinterest Help equivalent) and tag campaigns with UTM.",
      ],
      lists: [
        {
          intro: "Mini rules:",
          items: [
            "your own or licensed images",
            "clear text on the pin / in the description",
            "a working mobile link",
            "boards by theme, not a dump",
            "measure traffic and conversions.",
          ],
        },
      ],
    },
    {
      title: "Related reading",
      level: 2,
      paras: [
        "Saving files to a device is a separate guide. Here we focus on platform meaning and scenarios.",
        "Pinterest doesn’t replace SEO and paid search; it adds a visual entry into the funnel.",
      ],
      links: [
        {
          label: "Download from Pinterest",
          href: "/en/blog/pinterest-skachat/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Pinterest = idea boards + visual search with an outbound link.",
        "For business, a long-lived pin and traffic matter; for personal use — ordered references without gallery chaos.",
      ],
    },
  ],
  closing: [
    "Build one thematic board for the job (product or moodboard) and pin 5–10 of your own images with links — faster to learn if the format works than reading someone else’s “platform success” story.",
  ],
  related: [
    "pinterest-skachat",
    "kontent-plan-instagram",
    "foto-instagram",
    "nativnaya-reklama",
    "shablon-instagram",
    "oformlenie-stranicy-instagram",
  ],
};
