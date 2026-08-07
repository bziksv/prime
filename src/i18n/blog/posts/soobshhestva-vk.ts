import type { BlogPost } from "../../../data/blog";

/** EN overlay for soobshhestva-vk — same structure as RU JSON. */
export const soobshhestvaVkEn: BlogPost = {
  slug: "soobshhestva-vk",
  title: "VK communities: public page vs. group vs. event",
  date: "2020-11-06",
  category: "SMM",
  cover: "/images/blog/soobshhestva-vk/cover-en.webp",
  excerpt:
    "How a VK public page differs from a group and an event, when to pick which format, and how to get started — without outdated screenshots or a bot catalog.",
  lead: [
    "A VK community is a space around a topic or brand: news, chat, products, events. Several formats exist, and tools and growth tactics depend on which you choose.",
    "We compare public pages, groups, and events, then cover type changes, branding, and content. VK’s UI shifts often; don’t treat old platform reach figures as fact. Audience growth is covered in the group-promotion article; seeding is in community ads.",
  ],
  faq: [
    {
      q: "Should a business pick a public page or a group?",
      a: "Businesses often start with a public page for brand or media presence. A group fits better when you need privacy, join requests, and a more “club” feel. Check current differences in VK Help.",
    },
    {
      q: "Can I change the community type later?",
      a: "Yes, usually with limits on how often and on base size. Large communities sometimes need support.",
    },
    {
      q: "Do I need a bot from day one?",
      a: "No. First nail the offer, content, and human replies. Add bots for routine only after scenarios are clear and within the rules.",
    },
    {
      q: "How is an event different from a group?",
      a: "An event has a date, attendance status, and reminders. It’s better for one-off and recurring events than a plain feed.",
    },
    {
      q: "Does a community guarantee sales?",
      a: "No. It’s a channel. You still need an offer, content, replies, and ads when needed.",
    },
  ],
  sections: [
    {
      title: "Why business needs a community",
      level: 2,
      paras: [
        "A community keeps contact with the audience: news, FAQ, reviews, promos, and nurture into leads. It’s not a “social checkbox,” but a working channel next to the site.",
        "Before you run ads, lock in topic, audience, and goal: leads, expertise, service, or an interest club.",
      ],
      links: [
        {
          label: "How to promote a VK group",
          href: "/en/blog/raskrutka-gruppy-vk/",
        },
      ],
    },
    {
      title: "Public page",
      level: 2,
      paras: [
        "A public page is built for open brand content: followers see posts, and often a wider audience does too. Historically it’s easier to follow passively than to join a closed group.",
        "Posts are usually run by the team; post suggestions and comments are configurable. Description and contacts stay in plain sight. Check exact UI differences in current VK.",
      ],
      lists: [
        {
          intro: "When a public page fits:",
          items: [
            "brand, media, or expert channel;",
            "a regular feed without an invite-only club;",
            "focus on reach and content;",
            "shop or services via products and messages.",
          ],
        },
      ],
    },
    {
      title: "Group",
      level: 2,
      paras: [
        "A group is more flexible on access: open, closed, or private. It’s handy when discussion, join requests, and member moderation matter.",
        "You can lean harder on UGC (if you allow the wall), discussion FAQs, and invites. For sales, connect products and messages — same toolkit as a public page, applied by niche.",
      ],
      notes: [
        {
          title: "Important",
          text: "Old claims like “a group never appears on the home feed” age with the feed. Use current delivery and your own stats, not a 2018 myth.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Event",
      level: 2,
      paras: [
        "A format for date and place (online or offline): “going / maybe” statuses, reminders, invites. The organizer can be a person or a community.",
        "For a series of events, update the date on the same page instead of spawning empty shells. Check invite limits in Help — numbers in old guides may be wrong.",
      ],
    },
    {
      title: "Changing format and starting branding",
      level: 2,
      paras: [
        "You can sometimes change community type if you picked wrong at the start. Bigger bases make it harder. After a change, recheck sections, roles, and the menu.",
        "In manage, enable the sections you need (photos, video, products, discussions). Keep the description short: who you are, what a follower gets, contact and CTA. Use the menu for quick links to pricing, a lead form, and FAQ.",
      ],
      links: [
        {
          label: "Community greeting message",
          href: "/en/blog/privetstvie-vk/",
        },
        {
          label: "Comments in a VK public",
          href: "/en/blog/kommentarii-v-pablike-vk/",
        },
      ],
    },
    {
      title: "Content, bots, and ads without magic",
      level: 2,
      paras: [
        "Mix value, news, social proof, and soft sales. The wall is the main stage: text, visuals, polls, clips — by niche.",
        "Bots handle routine (FAQ, lead statuses) but don’t replace a clear offer and live answers on hard questions. We don’t catalog 2020 bot builders — pick a current tool within VK rules.",
        "Promotion: VK ads account, seeding in topical publics, partner reposts. “Guaranteed sales growth” from merely creating a community is a marketing myth.",
      ],
      links: [
        {
          label: "Ads in VK publics",
          href: "/en/blog/reklama-v-pablikah-vk/",
        },
        {
          label: "VK follower reach",
          href: "/en/blog/ohvat-podpischikov-vk/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Goal and format first, then branding and posting rhythm. Public pages, groups, and events solve different jobs.",
        "Growth comes through value and legitimate ads — not fake followers and spam bots.",
      ],
    },
  ],
  closing: [
    "Pick the type for the job, fill in the description and 10–15 starter posts, set up replies — and only then scale with ads. That’s how a community becomes a channel, not an empty shell.",
  ],
  related: [
    "raskrutka-gruppy-vk",
    "privetstvie-vk",
    "kommentarii-v-pablike-vk",
    "reklama-v-pablikah-vk",
    "ohvat-podpischikov-vk",
    "aktivnost-vk",
  ],
};
