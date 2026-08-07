import type { BlogPost } from "../../../data/blog";

/** EN overlay for raskrutka-gruppy-vk — same structure as RU JSON. */
export const raskrutkaGruppyVkEn: BlogPost = {
  slug: "raskrutka-gruppy-vk",
  title: "Growing a VKontakte group: prep and subscriber growth",
  date: "2021-11-02",
  category: "SMM",
  cover: "/images/blog/raskrutka-gruppy-vk/cover-en.webp",
  excerpt:
    "How to grow a VK community yourself: name, content, design, live audience growth methods, and why fake followers are dangerous.",
  lead: [
    "A VK community grows when the niche and offer are clear, content is regular, and acquisition comes from value and ads — not bots. The start is hardest; after the first live followers, retention and replies matter more.",
    "Below — prep, naming, content, design, and growth channels. VK menus change — follow the meaning, not button screenshots.",
  ],
  faq: [
    {
      q: "How many posts per day?",
      a: "Not a mandatory “6”. Better 1–3 solid slots you can sustain than spam for frequency.",
    },
    {
      q: "Do fake followers help?",
      a: "No: sanction risk, dead audience, and ER collapse. Advertisers and algorithms notice.",
    },
    {
      q: "Are keywords in the group name required?",
      a: "The name should be clear and pronounceable. A moderate keyword is fine; stuffing related forms is not.",
    },
    {
      q: "What to do before ads?",
      a: "Design, 10–15 ready posts, a pinned offer, contacts, and a clear audience definition.",
    },
    {
      q: "How is this different from seeding in other publics?",
      a: "Here you grow your own asset. Seeding is posting on others’ pages — see a separate article.",
    },
  ],
  sections: [
    {
      title: "Prep and launch",
      level: 2,
      paras: [
        "Before “gaining” followers, lock the topic, goal (leads, expertise, community), and tone. An empty public with ads burns budget.",
        "At the start the admin mostly creates content and answers early messages. Later moderation and request handling grow — don’t leave spam and toxicity without rules.",
      ],
      lists: [
        {
          intro: "Minimum before scaling:",
          items: [
            "clear niche and offer in the description;",
            "cover and avatar in one style;",
            "a post backlog and draft content plan;",
            "contact / products / services buttons — as needed.",
          ],
        },
      ],
    },
    {
      title: "Group name",
      level: 2,
      paras: [
        "The name is your card in VK search and the feed. It should reflect the topic and be human-friendly — not a Wordstat string.",
        "You can factor in search-suggestion keywords, but without stuffing or colliding with other brands.",
      ],
      lists: [
        {
          intro: "Name criteria:",
          items: [
            "clear in a second;",
            "no legally risky third-party trademarks;",
            "easy to say and find in search;",
            "if trends shift — careful tweaks, not weekly chaos.",
          ],
        },
      ],
    },
    {
      title: "Content and cadence",
      level: 2,
      paras: [
        "Content retains: posts, clips, stories, photos, polls — within the topic and VK rules. Cooking recipes in a legal public break expectations.",
        "Draft ahead, watch stats after publishing, and double down on formats that drive saves and messages — not only likes.",
      ],
      lists: [
        {
          intro: "Content rules:",
          items: [
            "fit the niche and audience;",
            "mix of value, engagement, and soft sells;",
            "unique, quality media;",
            "follow laws and platform rules.",
          ],
        },
      ],
      links: [
        {
          label: "VKontakte Stories",
          href: "/en/blog/istorii-vkontakte/",
        },
        {
          label: "Community comments",
          href: "/en/blog/kommentarii-v-pablike-vk/",
        },
      ],
    },
    {
      title: "Design",
      level: 2,
      paras: [
        "There are no rigid “design laws”, but loud chaotic blocks annoy. One style: cover, menu, buttons, post template.",
      ],
      lists: [
        {
          intro: "What to check:",
          items: [
            "cover with offer/benefit;",
            "readable section menu;",
            "background and widgets without visual noise;",
            "pinned post with a CTA.",
          ],
        },
      ],
    },
    {
      title: "How to attract subscribers",
      level: 2,
      paras: [
        "Paid: VK targeting, seeding, collabs. Organic: value, recommendations, cross-posts on your properties, contests without “follow 20 publics”.",
      ],
      lists: [
        {
          intro: "Fake growth — separately:",
          items: [
            "auto-services promise fast growth;",
            "risks: bans, shadow limits, dead accounts;",
            "ER drops — ads and reach suffer.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "Buying followers “for a pretty number”. Better 500 live than 10,000 bots.",
        },
      ],
      links: [
        {
          label: "Ads in VK communities",
          href: "/en/blog/reklama-v-pablikah-vk/",
        },
      ],
    },
  ],
};
