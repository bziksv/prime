import type { BlogPost } from "../../../data/blog";

/** EN overlay for arhiv-instagram — same structure as RU JSON. */
export const arhivInstagramEn: BlogPost = {
  slug: "arhiv-instagram",
  title: "Instagram archive: how to hide a post and bring it back to the profile",
  date: "2020-09-28",
  category: "SMM",
  cover: "/images/blog/arhiv-instagram/cover-en.webp",
  excerpt:
    "Why the Instagram post archive exists, how it differs from deletion and the Stories archive, how to hide a post and show it again — without outdated screenshots.",
  lead: [
    "The Instagram post archive hides a photo or video from the profile grid but keeps likes, comments, and the caption. It’s not a forever trash bin and not the same as the 24-hour Stories archive.",
    "Use it to tidy the grid, park timed offers, or stash promo templates without deleting proof of results. Menu labels move — check the current wording in the app. Meta’s product notes and disclaimers sit on the help page for the feature.",
  ],
  faq: [
    {
      q: "Is archive the same as delete?",
      a: "No. Deletion removes the post. Archive hides it from the profile; stats and comments usually stay until you delete from the archive.",
    },
    {
      q: "Can followers see your archive?",
      a: "No — nobody else can open your post archive. It’s your private shelf of hidden posts.",
    },
    {
      q: "Will the post return to its old place in the grid?",
      a: "Usually yes: the post date stays, the post slots back into profile chronology. Check exact behavior in the current version.",
    },
    {
      q: "Is the post archive the same as the Stories archive?",
      a: "No. After 24 hours Stories go to their own story archive (if save is on). This is the feed/grid post archive.",
    },
    {
      q: "Can you share a post from the archive?",
      a: "Often you can send it to yourself/Direct from the archived entry menu — without showing it on the profile. Depends on the app version.",
    },
  ],
  sections: [
    {
      title: "Why archive posts",
      level: 2,
      paras: [
        "A unified profile look: remove frames that break the style without destroying them.",
        "Niche or offer change: old “personal” photos clash with a business storefront — archive, don’t delete.",
        "Timed offers and paid integrations: hide the post after the period but keep likes/comments as proof of result.",
        "Promo and marathon templates: return to the copy and structure without writing from scratch.",
        "Don’t confuse with scheduled posting: archive is about already published. Planning new posts — separate tools and the scheduling article.",
      ],
      notes: [
        {
          title: "Important",
          text: "“A star hid a post” intrigue is a side effect, not a strategy. For business a clear grid and current offer matter more.",
          kind: "tip",
        },
      ],
    },
    {
      title: "How to hide a post",
      level: 2,
      paras: [
        "Open the post fully (not only the grid preview) → “⋯” menu → “Archive.” Confirmation usually isn’t needed — the post leaves the profile right away.",
        "Carousels and video archive the same way as single photos.",
      ],
      lists: [
        {
          intro: "Before archiving it’s useful to:",
          items: [
            "save the source if you need it outside Instagram;",
            "copy caption text/links if you’re editing the offer;",
            "for ad posts — lock metrics in a report, don’t rely on the archive alone.",
          ],
        },
      ],
    },
    {
      title: "Where to find the archive",
      level: 2,
      paras: [
        "Entry is usually from your profile: an archive icon (often “clock-with-arrow”) or a profile-menu item. The section is private: others don’t see it.",
        "Storage isn’t limited by a post “expiry” in the archive — while the account and Meta policy allow. It’s not a substitute for a backup on your own disk.",
      ],
    },
    {
      title: "How to bring a post back to the profile",
      level: 2,
      paras: [
        "Open the entry in the archive → “⋯” → “Show on profile.” The post appears in the grid again.",
        "“Delete” from the archive is already permanent (like a normal delete). If unsure — restore to the profile first or save the file yourself.",
      ],
      notes: [
        {
          title: "Common mistake",
          text: "You can’t archive someone else’s content — only your posts. Saving someone else’s photo to the device is a different topic.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Stories archive is separate",
      level: 2,
      paras: [
        "So Stories don’t vanish forever after 24 hours, Stories settings turn on save to the story archive. That’s a different section from the feed post archive.",
        "More on saving your Stories and risks of third-party “downloaders” — in a separate article.",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Post archive = hide from the profile while keeping reactions; deletion = lose the post.",
        "Keep the grid current, and valuable frames either in the archive or in your own file backup.",
      ],
    },
  ],
  closing: [
    "Hide one extra post in the archive and check how the grid looks — easier to keep the profile storefront without burning content.",
  ],
  related: [
    "skachat-stories-instagram",
    "sohranit-foto-instagram",
    "post-instagram",
    "oformlenie-stranicy-instagram",
    "otlozhennyy-posting-instagram",
    "video-stories-instagram",
  ],
};
