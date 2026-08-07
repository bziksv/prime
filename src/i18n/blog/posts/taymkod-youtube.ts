import type { BlogPost } from "../../../data/blog";

/** EN overlay for taymkod-youtube — same structure as RU JSON. */
export const taymkodYoutubeEn: BlogPost = {
  slug: "taymkod-youtube",
  title: "YouTube timecodes: chapters, timed links, and navigation",
  date: "2021-05-25",
  category: "SMM",
  cover: "/images/blog/taymkod-youtube/cover-en.webp",
  excerpt:
    "What a YouTube timecode is: chapters in the description, clickable markers, a URL with a time parameter — and why viewers and channels benefit, without outdated Studio screenshots.",
  lead: [
    "A YouTube timecode is a time marker in a video: `1:23` in the description or a link that opens at that second. On long uploads it’s a table of contents — not an “algorithm secret.”",
    "This piece covers why chapters help, how to format the description, how to copy a timed URL, and what effect to expect. Studio menus change; use current YouTube Help as the source of truth.",
  ],
  faq: [
    {
      q: "How is a timecode different from chapters?",
      a: "Chapters are a set of description timecodes (often starting at `0:00`) that YouTube draws as segments on the scrubber. A single timed link jumps to a moment without a full TOC.",
    },
    {
      q: "Is starting at 0:00 required?",
      a: "For automatic chapters you usually need a first marker at zero and several items. Check current YouTube Help — limits get updated.",
    },
    {
      q: "What time format should I use?",
      a: "Often `M:SS` or `H:MM:SS` at the start of a description line, then the block title. Example: `0:00 Intro` / `2:15 Case breakdown`.",
    },
    {
      q: "Do timecodes help promotion?",
      a: "Indirectly: easier completion and sharing a clip. Not a recommendation guarantee; topic, thumbnail, and retention matter more.",
    },
    {
      q: "How do I open a video at minute 5?",
      a: "Copy a timed URL from the player (desktop: right-click → copy URL at current time) or add a parameter like `?t=5m` / `&t=300` — formats vary by client.",
    },
    {
      q: "Why doesn’t the video start from the beginning?",
      a: "YouTube often resumes where you left off. Incognito or another account shows “from zero” behavior if the link has no `t=`.",
    },
    {
      q: "Do Shorts need chapters?",
      a: "For short vertical clips a TOC is usually overkill. Timecodes help more on long guides, streams, and podcasts.",
    },
    {
      q: "Can I keep private-only timecodes?",
      a: "There’s no separate private TOC. Save a timed link in bookmarks or notes.",
    },
  ],
  sections: [
    {
      title: "Why timecodes help viewers and creators",
      level: 2,
      paras: [
        "A long video with no TOC makes people scrub at random. Chapters cut friction: viewers jump straight to the block they need.",
        "Creators answer comments more easily (“start at 7:40”), share clips on social, and lock script structure already at edit time.",
        "For webinars, breakdowns, interviews, and album-style videos, timecodes are almost required; for a 30-second Short — not.",
      ],
      lists: [
        {
          intro: "Especially useful for:",
          items: [
            "how-to guides and tutorials;",
            "stream and conference recordings;",
            "podcasts with a topic timeline;",
            "reviews covering several products.",
          ],
        },
      ],
      links: [
        {
          label: "YouTube channel and video description",
          href: "/en/blog/opisanie-youtube-kanala/",
        },
        {
          label: "Growing a YouTube channel",
          href: "/en/blog/raskrutka-youtube/",
        },
      ],
    },
    {
      title: "Chapters in the description",
      level: 2,
      paras: [
        "List markers in the video description: time at the start of the line + a short section title. YouTube recognizes the list and builds clickable chapters on the progress bar when current service rules are met.",
        "Name sections for the viewer (“Install the plugin”), not internal edit notes (“cut 3”).",
        "Don’t turn the description into 40 markers every 20 seconds — a TOC should help, not noise.",
      ],
      lists: [],
      notes: [
        {
          title: "Studio changes",
          text: "Older paths went through “Creator Studio” and other menu names. Edit the description in YouTube Studio on the video; find the current path in Help, not 2021 screenshots.",
        },
      ],
    },
    {
      title: "Link with a time stamp",
      level: 2,
      paras: [
        "To drop someone on a fragment, send a URL with a time marker. On desktop the player usually has “copy link at current time.”",
        "Manually you can add a time parameter to the video URL (seconds or `1m30s` — depends how YouTube accepts links in your client). Test the link in incognito.",
        "Useful for comments, messengers, and blog posts: “bug fix starts at 4:12.”",
      ],
      lists: [
        {
          intro: "Timed-link mini checklist:",
          items: [
            "seek to the right second;",
            "copy the URL with time;",
            "verify in another browser/mode;",
            "say nearby what they’ll see there.",
          ],
        },
      ],
    },
    {
      title: "How to build it into the script and description",
      level: 2,
      paras: [
        "Sketch blocks in the script or edit timeline first — then drop the times into the description.",
        "Put the video gist and CTA in the first description lines; TOC below. That keeps share previews readable.",
        "Align chapters with cards/end screens if you use them: don’t promise a “pricing section” that isn’t there.",
      ],
      lists: [],
      links: [
        {
          label: "YouTube video editing",
          href: "/en/blog/montazh-youtube/",
        },
        {
          label: "Video buttons and elements",
          href: "/en/blog/knopki-youtube/",
        },
      ],
    },
    {
      title: "Mistakes and myths",
      level: 2,
      paras: [
        "Myth: “timecodes alone get you into recommendations.” No — they improve UX. Channel growth is topic, retention, consistency.",
        "Mistake: wrong time format or no zero on the first chapter — the TOC won’t build.",
        "Mistake: copying someone else’s timecodes without checking — times won’t match after a re-edit.",
      ],
      lists: [],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "A timecode is time navigation: chapters in the description and/or a link with `t=`.",
        "Add a TOC on long videos; after publish, check clicks on the scrubber.",
        "It’s a viewer service — not a substitute for strong content and thumbnails.",
      ],
      lists: [],
    },
  ],
  closing: [
    "On your next long video, add a TOC starting at `0:00` with 4–7 blocks, publish, and check scrubber clicks — faster than arguing about “algorithm secrets.”",
  ],
  related: [
    "opisanie-youtube-kanala",
    "raskrutka-youtube",
    "montazh-youtube",
    "knopki-youtube",
    "kluchi-youtube",
    "youtube-monetizaciya",
  ],
};
