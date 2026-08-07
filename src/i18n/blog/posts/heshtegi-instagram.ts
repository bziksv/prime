import type { BlogPost } from "../../../data/blog";

/** EN overlay for heshtegi-instagram — same structure as RU JSON. */
export const heshtegiInstagramEn: BlogPost = {
  slug: "heshtegi-instagram",
  title: "Hashtags and geotags on Instagram: help reach without spam",
  date: "2018-10-05",
  category: "SMM",
  cover: "/images/blog/heshtegi-instagram/cover-en.webp",
  excerpt:
    "How to choose hashtags and location tags for an Instagram business profile: niche, brand tag, place on the map — without the myth that “30 tags = rankings” or outdated 2018 formulas.",
  lead: [
    "A hashtag is a clickable label in the caption or a comment; a geotag is the shoot location or a business point on the map. Both help people find content outside the follower feed, but they don’t replace a strong frame and offer.",
    "Pick tags for relevance, keep the list short, use a brand tag when it fits, and add geo when place matters for local business. Hashtag roles in the algorithm have changed: measure your own stats, not other people’s ranking guarantees.",
  ],
  faq: [
    {
      q: "Are 30 hashtags required?",
      a: "No. The platform limit is a maximum, not a goal. A small relevant set often suffices; a wall of the same tags on every post looks like spam.",
    },
    {
      q: "Do hashtags guarantee Explore or discovery?",
      a: "No. Retention, saves, replies, and creative quality matter more. Tags are a secondary discovery channel.",
    },
    {
      q: "Should hashtags go in the caption or the first comment?",
      a: "Both work. In the caption, 1–3 key tags are convenient; a long list often moves to the first comment so it doesn’t clutter the copy.",
    },
    {
      q: "Do you always need a geotag?",
      a: "No. It helps local business, events, sales points, and travel. For a pure online offer with no place tie — optional.",
    },
    {
      q: "Should you only use ultra-popular tags?",
      a: "Risky: the post sinks fast. Mix niche and moderate tags; avoid labels where the feed tone and quality don’t match yours.",
    },
  ],
  sections: [
    {
      title: "Why tags matter for business",
      level: 2,
      paras: [
        "Hashtags group posts by topic: someone searches a niche tag and may see yours. A geotag shows content on a location feed and map — useful for cafés, salons, showrooms, hotels.",
        "This isn’t “free ads with guaranteed clients.” Without a clear offer and regular content, tags bring random likes, not leads.",
        "In Insights, see where views come from: if tags contribute little, don’t inflate the list out of 2018 habit.",
      ],
      links: [
        {
          label: "Business on Instagram",
          href: "/en/blog/biznes-v-instagram/",
        },
        {
          label: "Instagram reach",
          href: "/en/blog/ohvat-instagram/",
        },
      ],
    },
    {
      title: "Which hashtags to choose",
      level: 2,
      paras: [
        "Build a pool for the brand and post types: product, service, city, format (before/after, recipe, case). Team brainstorm + reviewing strong niche posts is a solid start.",
        "In Instagram search, check post volume and the tag feed: if it’s junk, bots, or a foreign style — skip the tag even if it’s “popular.”",
        "Specific beats generic love/selfie tags: a narrow tag brings people closer to your offer. A brand tag (brand name, UGC campaign) helps collect user content — only if the audience actually uses it.",
        "Keep a working list in notes and update it: stats tests beat someone else’s “winning 5+7+3 formula.”",
      ],
      lists: [
        {
          intro: "Practical mix per post:",
          items: [
            "a few niche/local tags",
            "a couple of moderately popular topic tags",
            "1–2 brand or campaign tags",
            "no copy-paste of the same block on every post.",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Common mistake",
          paras: [
            "Promising “ranking by hashtag = client flow” and chasing tags with hundreds of thousands of posts. A click without relevance and trust doesn’t convert.",
          ],
        },
      ],
    },
    {
      title: "How many to use and how to format",
      level: 2,
      paras: [
        "The platform limits tags per post — check the current Help for the exact cap. For engaging your own base, a short list often suffices; “filling to the max” isn’t required.",
        "Keep the main copy readable: meaning and CTA beat a wall of #. Put a long set in the first comment right after publish if that’s your process.",
        "Don’t change the set only for “algorithm freshness”: change when tags stop bringing relevant people or ruin the caption look.",
      ],
      links: [
        {
          label: "Instagram post",
          href: "/en/blog/post-instagram/",
        },
        {
          label: "Profile design",
          href: "/en/blog/oformlenie-stranicy-instagram/",
        },
      ],
    },
    {
      title: "Geotags: when they work",
      level: 2,
      paras: [
        "A location tag ties the post to a place: location page, map, nearby search. Local business and travel get an extra “find nearby” channel.",
        "Use a real or meaningful place (branch, event, district), not someone else’s viral spot for reach — that confuses clients and looks manipulative.",
        "Neighbor geos can add cross-visibility, but it’s cleaner to lean on your own points and partner locations by agreement — not “parasite” on someone else’s traffic.",
      ],
    },
    {
      title: "How to add a place to a post",
      level: 2,
      paras: [
        "When creating a post, find Add location (wording in the app changes), pick from suggestions or search the point.",
        "For Stories the mechanic is similar: a location sticker if available in your UI. Check that the map opens your business, not a same-name stranger.",
        "Match the address with the bio and site — mismatch hurts trust more than missing geo.",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Hashtags and geo are secondary discovery — not a content/offer replacement.",
        "Relevance and niche beat max tag count and “ranking guarantees.”",
        "For local business a geotag often beats a dozen generic hashtags; for online — a strong brand tag and topical labels.",
      ],
    },
  ],
  closing: [
    "Build a short pool of 15–25 working tags by post type, add geo to upcoming posts with a sales point, and in two weeks check the Insights contribution — fairer than copying someone else’s “20-tag formula.”",
  ],
  related: [
    "biznes-v-instagram",
    "ohvat-instagram",
    "post-instagram",
    "oformlenie-stranicy-instagram",
    "kontent-plan-instagram",
    "vovlechennost-instagram",
  ],
};
