import type { BlogPost } from "../../../data/blog";

/** EN overlay for piksel-vk — same structure as RU JSON. */
export const pikselVkEn: BlogPost = {
  slug: "piksel-vk",
  title: "VK pixel: setup and retargeting audiences",
  date: "2021-06-15",
  category: "SMM",
  cover: "/images/blog/piksel-vk/cover-en.webp",
  excerpt:
    "What the VK Ads pixel is, why it matters for retargeting, how to install it on a site, and how to build action-based audiences — without outdated account click-paths.",
  lead: [
    "The VKontakte pixel is a code snippet on your site that helps build audiences for VK ads: visitors, cart, purchase, and other events.",
    "Below: what the tool is for, how install works in practice, and how to shape segments. The account UI changes often — use current labels in VK Ads / the ads account.",
  ],
  faq: [
    {
      q: "How does the pixel differ from Yandex Metrica?",
      a: "Metrica is behavior analytics. The VK pixel is mainly fuel for audiences and ad optimization inside the VK ecosystem.",
    },
    {
      q: "Is Google Tag Manager required?",
      a: "No. You can paste the code into the site template. GTM helps when you have many tags and want flexibility without code releases.",
    },
    {
      q: "How large does an audience need to be?",
      a: "Launch thresholds have changed. Aim for a base large enough for learning and delivery; check exact minima in account help.",
    },
    {
      q: "Should I exclude buyers?",
      a: "Often yes: keep a separate “purchased” segment and exclude it from “abandoned cart” offers so you don’t burn budget.",
    },
    {
      q: "Does a site pixel replace a VK community pixel?",
      a: "They serve different roles. A site pixel tracks visits to your domain; social ads may also use other audience sources.",
    },
  ],
  sections: [
    {
      title: "Why you need the pixel",
      level: 2,
      paras: [
        "Without site events it’s hard to carefully retarget people who already visited: viewed a service, added to cart, or placed an order. The pixel ties the visit to the ads account.",
        "Segments let you send different offers to warm users and skip people who already bought.",
      ],
      lists: [
        {
          intro: "Typical scenarios:",
          items: [
            "retarget visitors of key URLs",
            "abandoned cart or lead form",
            "exclude buyers",
            "lookalike or similar audiences from a base (if available in the account)",
          ],
        },
      ],
    },
    {
      title: "Install: the general flow",
      level: 2,
      paras: [
        "Create a pixel in the retargeting section of the VK ads account, set the site and topic, then copy the code.",
        "Paste the code into `<head>` or via GTM on all needed pages. Confirm activity status after a test visit.",
      ],
      lists: [
        {
          intro: "Checks after install:",
          items: [
            "code appears once per page",
            "no unnecessary Consent or CSP blocking",
            "goal events set if you use them",
            "test visit visible in the account",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Practice",
          text: "Don’t treat 2021 click-by-click scripts as gospel: look up the current “Pixels / Retargeting” section in VK Ads help.",
        },
      ],
    },
    {
      title: "Audiences and exclusions",
      level: 2,
      paras: [
        "For a landing page, two segments often suffice: were on the site / completed a goal. For a shop, split by categories and funnel stages.",
        "Set audience membership lifetime (the retargeting window), or you’ll keep serving ads to cold visits for too long.",
      ],
      lists: [
        {
          intro: "Example for a store:",
          items: [
            "viewed category A",
            "added to cart",
            "purchased (exclude from “cart”)",
            "window of 7–30 days — match your deal cycle",
          ],
        },
      ],
      links: [
        {
          label: "Ads in VK communities",
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
