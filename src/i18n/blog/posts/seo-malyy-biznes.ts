import type { BlogPost } from "../../../data/blog";

/** EN overlay for seo-malyy-biznes — same structure as RU JSON. */
export const seoMalyyBiznesEn: BlogPost = {
  slug: "seo-malyy-biznes",
  title: "SEO for small business: where to start and what not to scatter on",
  date: "2020-11-13",
  category: "SEO",
  cover: "/images/blog/seo-malyy-biznes/cover-en.webp",
  excerpt:
    "Practical SEO priorities for small business: local demand, speed, clear pages, semantics without gigantomania. No “TOP in a week” myth and no enterprise budget.",
  lead: [
    "A small business doesn’t need “SEO like a marketplace”. It needs a clear site for real client queries, decent speed, local visibility, and an honest horizon: prep — weeks; ranking growth — planned months (often 2–6 after work starts).",
    "We cover what to prioritize on a modest budget—and what not to do. A DIY owner checklist is in the self-SEO article; here we focus on small-business priorities.",
  ],
  faq: [
    {
      q: "Where should I start if the budget is small?",
      a: "With tech and clarity: mobile, speed, contacts, 5–15 priority landings for demand, Google/Yandex business listings. Then content and links as capacity allows.",
    },
    {
      q: "How soon will I hit the TOP?",
      a: "You can prep the site in weeks. Sustained commercial-core TOP is planned for 2–6 months of systematic work — not “launch = TOP”.",
    },
    {
      q: "Do I need thousands of keywords?",
      a: "No. A small project needs real intent coverage and strong pages more than a sheet of long-tails with no demand in your area.",
    },
    {
      q: "Are social channels enough instead of SEO?",
      a: "Social is another channel. Search catches people intending to “find a service/product”. Usually you need both, by role.",
    },
    {
      q: "Is schema markup required?",
      a: "Useful for the snippet (organization, product, FAQ — by type), but it doesn’t replace copy and links. Page meaning first, then schema.",
    },
    {
      q: "Should I buy links in bulk?",
      a: "Mass buying for “volume” is risky. Prefer local mentions, partners, maps, useful content.",
    },
    {
      q: "How is this different from “SEO from scratch”?",
      a: "That article is an entry to the craft. This one is small-business owner priorities: what to do first with limited hands and budget.",
    },
    {
      q: "Is a blog mandatory for small business SEO?",
      a: "Not always. If you cover services with landings and local demand — the blog is secondary. Write when you have expertise and capacity to maintain it.",
    },
  ],
  sections: [
    {
      title: "Realistic expectations for small business",
      level: 2,
      paras: [
        "SEO is a cumulative channel: tech and structure → demand-led content → authority and behavior. “Pick keywords overnight and be in the TOP by morning” doesn’t work.",
        "Plan stages: get the site in order (weeks), then regularly strengthen priority URLs. Rankings and calls grow unevenly — watch clusters, not one phrase.",
      ],
      lists: [
        {
          intro: "What counts as early success:",
          items: [
            "the site opens fast on a phone;",
            "pages exist for main services/areas;",
            "map listings are filled;",
            "search leads start accumulating;",
            "core in the TOP grows month to month.",
          ],
        },
      ],
      links: [
        {
          label: "DIY SEO",
          href: "/en/blog/samostoyatelnoe-seo/",
        },
      ],
    },
    {
      title: "Speed and mobile — a cheap foundation",
      level: 2,
      paras: [
        "A small-business client often arrives on a phone “here and now”. Heavy sliders, uncompressed photos, and pop-ups cut both SEO and leads.",
        "Check mobile views of key pages, compress images, remove extra plugins. CDN — if needed, not as a fetish; first simple hosting and a light template.",
      ],
      lists: [
        {
          intro: "Quick wins:",
          items: [
            "responsive and readable type;",
            "image compression;",
            "clickable phone in the header;",
            "a form without friction;",
            "HTTPS without errors.",
          ],
        },
      ],
      links: [
        {
          label: "Responsive site",
          href: "/en/blog/adaptivnyy-sayt/",
        },
      ],
    },
    {
      title: "Local demand and trust",
      level: 2,
      paras: [
        "For “nearby” services, city/area queries and maps are strong. A business listing, consistent NAP on the site and directories, reviews — often bring leads faster than chasing head terms without a landing.",
        "On the site: address, map, service area, photos of the place/team. Don’t hide contacts just to force a form fill.",
      ],
      lists: [
        {
          intro: "Local essentials:",
          items: [
            "service pages + geo if you truly work there;",
            "Google Business / Yandex Business;",
            "reviews without fake ratings;",
            "same name, address, phone.",
          ],
        },
      ],
      links: [
        {
          label: "Google Business",
          href: "/en/blog/google-biznes/",
        },
        {
          label: "Regional SEO",
          href: "/en/blog/regionalnoe-seo/",
        },
      ],
    },
    {
      title: "Semantics without gigantomania",
      level: 2,
      paras: [
        "Collect demand markers: how clients name the service, plus city. Cluster into real pages — don’t create thin URLs “for every tail”.",
        "How people speak matters more than bureaucratic wording. Check suggestions, keyword tools, on-site search, sales questions.",
      ],
      lists: [
        {
          intro: "SMB practice:",
          items: [
            "15–50 priority keywords to start is fine;",
            "one page — one main intent;",
            "services with margin and demand first;",
            "a blog — only if you can keep a cadence.",
          ],
        },
      ],
      links: [
        {
          label: "Semantic core",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Content, expertise, and the snippet",
      level: 2,
      paras: [
        "A small business’s strength is live expertise: cases, FAQ answers, clear prices/terms. Quotes and links to real norms (laws, standards, vendors) fit when relevant — not “for SEO checkbox”.",
        "Organization/service schema helps the snippet but doesn’t replace copy. Write Title and description for a human click.",
      ],
      lists: [
        {
          intro: "Content that pays off:",
          items: [
            "FAQ with real objections;",
            "before/after work photos;",
            "warranty and payment terms;",
            "updating old pages beats a pile of new thin ones.",
          ],
        },
      ],
      links: [
        {
          label: "Snippet",
          href: "/en/blog/snippet/",
        },
        {
          label: "Title length",
          href: "/en/blog/dlina-title/",
        },
      ],
    },
    {
      title: "What to postpone and what to avoid",
      level: 2,
      paras: [
        "Postpone: endless audit for audit’s sake, buying “1000 links”, copying a niche giant’s structure, a blog with no plan. Avoid behavioral spam and TOP guarantees “by Friday”.",
        "If hands are few — outsource surgically: tech + 10 landings + maps. A stable minimum beats a failed “full cycle like a 10-person agency”.",
      ],
      lists: [
        {
          intro: "Red flags:",
          items: [
            "“TOP-1 in 7 days” in the contract;",
            "secret link exchanges with no report;",
            "edits only for keyword density;",
            "ignoring mobile and telephony.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Once a month check: search leads, core visibility, speed, map reviews. Average position alone without leads is a weak compass.",
        },
      ],
      links: [
        {
          label: "Young site",
          href: "/en/blog/molodoy-sayt/",
        },
      ],
    },
  ],
  related: [
    "samostoyatelnoe-seo",
    "seo-s-nulya",
    "regionalnoe-seo",
    "google-biznes",
    "molodoy-sayt",
  ],
};
