import type { BlogPost } from "../../../data/blog";

/** EN overlay for piksel-vk — same structure as RU JSON. */
export const pikselVkEn: BlogPost = {
  slug: "piksel-vk",
  title: "VK pixel: setup and retargeting audiences",
  date: "2021-06-15",
  category: "SMM",
  cover: "/images/blog/piksel-vk/cover-en.webp",
  excerpt:
    "What the VK Ads pixel is, why it matters for retargeting, how to install it on a site, and how to build action-based audiences — without outdated cabinet click-paths.",
  lead: [
    "The VKontakte pixel is a code snippet on the site that helps build audiences for VK ads: visitors, cart, purchase, and other events.",
    "Below — what the tool is for, install logic, and segments. The cabinet UI changes; check current labels in VK Ads / the ads cabinet.",
  ],
  faq: [
    {
      q: "How does the pixel differ from Metrica?",
      a: "Metrica is behavior analytics. The VK pixel is mainly fuel for audiences and ad optimization inside the VK ecosystem.",
    },
    {
      q: "Is Google Tag Manager required?",
      a: "No. You can paste into the site template. GTM helps when you have many tags and want flexibility without releases.",
    },
    {
      q: "How many people does an audience need?",
      a: "Launch thresholds have changed. Aim for a base large enough for learning and delivery; check exact minima in cabinet help.",
    },
    {
      q: "Should you exclude buyers?",
      a: "Often yes: a separate “purchased” segment and exclusion from “abandoned cart” offers so you don’t burn budget.",
    },
    {
      q: "Does this replace a VK community pixel?",
      a: "Different contours. A site pixel is about visits to your domain; social ads may also use other audience sources.",
    },
  ],
  sections: [
    {
      title: "Why the pixel",
      level: 2,
      paras: [
        "Without site events it’s hard to carefully retarget people who already visited: viewed a service, added to cart, placed an order. The pixel ties the visit to the ads cabinet.",
        "Segments let you send different offers to “warm” users and skip people who already bought.",
      ],
      lists: [
        {
          intro: "Typical scenarios:",
          items: [
            "retarget visitors of key URLs;",
            "abandoned cart / lead form;",
            "exclude buyers;",
            "lookalike / similar to a base (if available in the cabinet).",
          ],
        },
      ],
    },
    {
      title: "Install: the general scheme",
      level: 2,
      paras: [
        "Create a pixel in the retargeting section of the VK ads cabinet, set the site and topic, copy the code.",
        "Paste the code into `<head>` or via GTM on all needed pages. Check activity status after a test visit.",
      ],
      lists: [
        {
          intro: "Control after insert:",
          items: [
            "code once per page;",
            "no unnecessary Consent/CSP tag blocking;",
            "goal events set if you use them;",
            "test visit visible in the cabinet.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "Don’t treat 2021 click scripts as gospel: look up the current “Pixels / Retargeting” section in VK Ads help.",
        },
      ],
    },
    {
      title: "Audiences and exclusions",
      level: 2,
      paras: [
        "For a landing two segments often suffice: were on the site / completed a goal. For a shop, split by categories and funnel stages.",
        "Set audience membership lifetime (retargeting window), or you’ll keep serving “cold” visits for too long.",
      ],
      lists: [
        {
          intro: "Example for a store:",
          items: [
            "viewed category A;",
            "added to cart;",
            "purchased (exclude from “cart”);",
            "window 7–30 days — by deal cycle.",
          ],
        },
      ],
      links: [
        {
          label: "Ads in VK publics",
          href: "/en/blog/reklama-v-pablikah-vk/",
        },
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
    },
  ],
};
