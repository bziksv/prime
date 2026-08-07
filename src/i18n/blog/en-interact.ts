import type { BlogInteractConfig } from "../../data/blog-interact";

/** English interactives; afterTitleIncludes must match EN section titles. */
export const blogInteractEn: Record<string, BlogInteractConfig> = {
  "oformlenie-stranicy-instagram": {
    checklist: {
      afterTitleIncludes: "A consistent feed style",
      title: "Profile design checklist",
      lead: "Complete before publishing “pretty stuff” — progress saves in the browser.",
      items: [
        { id: "pos", label: "Lock positioning: personal / business" },
        { id: "bio", label: "Build the About block with benefit and CTA" },
        { id: "ava", label: "Update avatar (reads in a small circle)" },
        { id: "style", label: "Pick one feed-style constant" },
        { id: "pack", label: "Prep a buffer of 10–15 frames/drafts" },
        { id: "post", label: "Post template: hook → value → CTA" },
        { id: "video", label: "Split Stories vs short-clip jobs" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "The About block",
        title: "Mini quiz: profile design",
        lead: "Two questions on the header and style.",
        questions: [
          {
            id: "i1",
            question: "The main job of the About block is…",
            options: [
              "Fit as many emoji as possible",
              "In 3–5 seconds explain who you are and why follow",
              "List every city hashtag",
              "Hide the offer",
            ],
            correct: 1,
            explain:
              "It’s a pitch: benefit, fact, action. Emoji are only accents.",
          },
          {
            id: "i2",
            question: "A consistent feed style is needed so…",
            options: [
              "You post less often",
              "The grid looks coherent and the brand is recognizable",
              "You can turn off comments",
              "You can replace post captions",
            ],
            correct: 1,
            explain:
              "A repeating device (color, grid, template) makes the profile recognizable.",
          },
        ],
      },
    ],
  },

  "pryamoy-efir-instagram": {
    checklist: {
      afterTitleIncludes: "Prep: script and tech",
      title: "Checklist before going live",
      lead: "Check these off before you go on air.",
      items: [
        { id: "goal", label: "Define the goal and CTA" },
        { id: "script", label: "Write a minute-by-minute script" },
        { id: "tech", label: "Check light, sound, internet, battery" },
        { id: "ann", label: "Announce to the audience in advance" },
        { id: "mod", label: "Assign chat moderation (or rules for yourself)" },
        { id: "backup", label: "Decide how you’ll save/reuse the recording" },
        { id: "review", label: "After the stream, review peak and retention" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why go live",
        title: "Mini quiz: Instagram Live",
        lead: "Two questions on prep.",
        questions: [
          {
            id: "l1",
            question: "Before a live stream, the most important thing is…",
            options: [
              "A random topic “as it goes”",
              "Goal, script, and working tech",
              "Only a pretty filter",
              "Max ads in the first minute with no topic",
            ],
            correct: 1,
            explain:
              "Without a goal and outline the stream falls apart; tech keeps you from dropping mid-way.",
          },
          {
            id: "l2",
            question: "An announcement is needed to…",
            options: [
              "Make prep harder",
              "Gather the right audience by start time",
              "Replace the script",
              "Turn off comments",
            ],
            correct: 1,
            explain:
              "People show up for topic and time. Without an announcement, retention is usually weaker.",
          },
        ],
      },
    ],
  },

  "semanticheskoe-yadro": {
    checklist: {
      afterTitleIncludes: "Step 4",
      title: "Semantic core checklist",
      lead: "Check steps as you go — progress saves in this browser. Keep the CSV template from the guide section nearby.",
      items: [
        { id: "markers", label: "Collect marker queries for services and products" },
        { id: "wordstat", label: "Expand the core in Wordstat / Key Collector" },
        { id: "clean", label: "Clean junk, duplicates, and off-target wording" },
        { id: "types", label: "Tag types: commercial / informational / geo" },
        { id: "cluster", label: "Cluster queries by meaning and intent" },
        { id: "map", label: "Map clusters to landings / site structure" },
        { id: "priority", label: "Prioritize: what goes into work first" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "User needs",
        title: "Mini quiz: query types",
        lead: "Test yourself — 4 short questions on the material above.",
        questions: [
          {
            id: "q1",
            question: "The query “buy PVC windows Voronezh” is primarily…",
            options: [
              "Informational",
              "Commercial + geo-dependent",
              "Vital (branded)",
              "Generic with no intent",
            ],
            correct: 1,
            explain:
              "Clear buy intent plus a city — commerce + geo. Such keys usually lead to service/catalog landings.",
          },
          {
            id: "q2",
            question: "The query “how to build a semantic core” is closer to…",
            options: [
              "Transactional (buy)",
              "Navigational (find a site)",
              "Informational",
              "Vital",
            ],
            correct: 2,
            explain:
              "The person wants knowledge, not an order. Fit articles, guides, FAQ.",
          },
          {
            id: "q3",
            question: "Why cluster the core?",
            options: [
              "To raise keyword frequency",
              "To group close queries under one landing",
              "To drop all long-tail terms",
              "To replace Title with H1",
            ],
            correct: 1,
            explain:
              "A cluster = queries with a shared intent. Cover them with one page, don’t spawn duplicates.",
          },
          {
            id: "q4",
            question: "What’s the smarter first move when building a core?",
            options: [
              "Write copy for every key immediately",
              "Collect markers and expand, then clean and group",
              "Buy links for high-frequency queries",
              "Block the site from indexing",
            ],
            correct: 1,
            explain:
              "Markers and expansion first, then cleanup and clusters — otherwise copy is written into the void.",
          },
        ],
      },
      {
        afterTitleIncludes: "Cluster the core",
        title: "Mini quiz: clusters",
        lead: "Two questions on step 3 — lock in landing logic.",
        questions: [
          {
            id: "c1",
            question: "“buy pvc windows” and “pvc windows price” with one intent…",
            options: [
              "Always on different URLs",
              "Usually one cluster / one landing",
              "Only in ads, not SEO",
              "Delete as Wordstat duplicates",
            ],
            correct: 1,
            explain:
              "Close commercial intent is covered by one section page — not clones for every word form.",
          },
          {
            id: "c2",
            question: "What’s worst for an SEO core?",
            options: [
              "Keep informational queries in a separate cluster",
              "Dump the whole core onto the homepage",
              "Add region to commercial phrases",
              "Keep a marker → URL table",
            ],
            correct: 1,
            explain:
              "The homepage shouldn’t swallow every cluster: sections and services need their own landings.",
          },
        ],
      },
    ],
  },

  "kommentarii-v-pablike-vk": {
    checklist: {
      afterTitleIncludes: "What a commercial community should choose",
      title: "VK comment moderation checklist",
      lead: "Check these off before pushing ads into the community.",
      items: [
        { id: "wall", label: "Pick wall type (usually limited)" },
        { id: "open", label: "Decide: comments open / selectively closed" },
        { id: "filter", label: "Enable profanity filter + your stop list" },
        { id: "rules", label: "Publish communication rules in a pin" },
        { id: "duty", label: "Assign a duty moderator for peak hours" },
        { id: "feed", label: "Check the combined comments feed" },
        { id: "week", label: "Weekly: review filter false positives" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Three wall modes",
        title: "Mini quiz: VK comments",
        lead: "Two questions on community setup.",
        questions: [
          {
            id: "vk1",
            question: "For a commercial community it’s usually better to…",
            options: [
              "Fully open wall with no filters",
              "Limited wall + open comments and moderation",
              "Permanently turn off any replies",
              "Post only in admin DMs",
            ],
            correct: 1,
            explain:
              "You control content, discussion keeps engagement, filters and a moderator cut the junk.",
          },
          {
            id: "vk2",
            question: "An auto profanity filter…",
            options: [
              "Fully replaces a moderator",
              "Helps, but typos bypass it — you still need manual review",
              "Is only needed for closed walls",
              "Works only in direct messages",
            ],
            correct: 1,
            explain:
              "Filters catch patterns. Hints and letter swaps get through — watch the feed manually.",
          },
        ],
      },
    ],
  },

  "istorii-vkontakte": {
    checklist: {
      afterTitleIncludes: "Limits and quality",
      title: "Checklist before a Stories series",
      lead: "Complete before publishing the series.",
      items: [
        { id: "goal", label: "Define the series goal and CTA" },
        { id: "vert", label: "Shoot/prep vertical frames" },
        { id: "hook", label: "Put a hook on the first screen" },
        { id: "text", label: "Large type, one idea per frame" },
        { id: "who", label: "Choose: personal page or community" },
        { id: "rules", label: "Check content doesn’t break VK rules" },
        { id: "review", label: "After 24h, review completion and response" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why Stories matter",
        title: "Mini quiz: VK Stories",
        lead: "Two questions on the format.",
        questions: [
          {
            id: "st1",
            question: "The main strength of Stories is…",
            options: [
              "Evergreen SEO copy for a year",
              "Short “here and now” contact between posts",
              "Replacing the whole community wall",
              "Publishing with no goal or CTA",
            ],
            correct: 1,
            explain:
              "Stories live briefly and hold attention between longer posts — with a clear job per release.",
          },
          {
            id: "st2",
            question: "Before a series, the most important thing is…",
            options: [
              "Stuff every sticker on at once",
              "Goal, vertical frame, and a clear next step",
              "Copy wall text without adapting",
              "Shoot an hour of video in one take",
            ],
            correct: 1,
            explain:
              "One idea per frame, a hook at the start, and a CTA at the end beat decoration.",
          },
        ],
      },
    ],
  },

  "avtonapolnenie-sayta": {
    checklist: {
      afterTitleIncludes: "Does it make sense",
      title: "Checklist: content without auto junk",
      lead: "If you’re considering automation — check this sober minimum.",
      items: [
        { id: "goal", label: "Lock the site goal (leads / brand ≠ content farm)" },
        { id: "clusters", label: "Align topics with the semantic core and landings" },
        { id: "source", label: "If RSS — only own/partner sources with a link" },
        { id: "mod", label: "Enable moderation: draft → human → publish" },
        { id: "no-syn", label: "Don’t ship synonymizer “to prod” without editing" },
        { id: "index", label: "Ensure junk and duplicates don’t hit the index" },
        { id: "plan", label: "Plan editorial work instead of a grabber “forever”" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Tools: grabbers",
        title: "Mini quiz: auto-filling",
        lead: "Two questions — where the method breaks SEO.",
        questions: [
          {
            id: "a1",
            question: "Mass grabbing + synonymizer for a service site…",
            options: [
              "The best strategy for search",
              "Usually harmful due to thin and others’ content",
              "Required by regulation",
              "Replaces a technical audit",
            ],
            correct: 1,
            explain:
              "Search values useful materials for intent. Auto junk adds page volume, not trust and leads.",
          },
          {
            id: "a2",
            question: "Sensible automation is…",
            options: [
              "Publish everything from others’ feeds unchecked",
              "Drafts/import of your own data + human moderation",
              "Only a synonymizer overnight",
              "Turn off indexing entirely",
            ],
            correct: 1,
            explain:
              "You can automate drafts and data. Meaning and final publish stay with the editorial team.",
          },
        ],
      },
    ],
  },

  "menedzher-smm": {
    checklist: {
      afterTitleIncludes: "How to learn the profession",
      title: "SMM entry checklist",
      lead: "Check these off in your first practice month.",
      items: [
        { id: "goal", label: "Pick a niche and 1–2 platforms" },
        { id: "offer", label: "Write the offer for a learning project" },
        { id: "plan", label: "Build a 2–4 week content plan" },
        { id: "pack", label: "Prep 12–15 content pieces" },
        { id: "ads", label: "Run a small ad test" },
        { id: "report", label: "Write a report: numbers → takeaways → plan" },
        { id: "case", label: "Package a 1–2 page case" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Core duties",
        title: "Mini quiz: SMM manager role",
        lead: "Two questions on the responsibility zone.",
        questions: [
          {
            id: "m1",
            question: "An SMM manager is primarily responsible for…",
            options: [
              "Pretty pictures with no goal",
              "Linking strategy, content, growth, communication, and metrics to the business goal",
              "Only buying followers",
              "Only website layout",
            ],
            correct: 1,
            explain:
              "The role is wider than content: plan, growth, communication, and reporting under KPIs.",
          },
          {
            id: "m2",
            question: "A strong beginner portfolio shows…",
            options: [
              "A course screenshot with no practice",
              "A case: plan → posts → test → takeaways",
              "Only a count of apps learned",
              "A hashtag list with no results",
            ],
            correct: 1,
            explain:
              "Clients care more about thinking and numbers than a certificate.",
          },
        ],
      },
    ],
  },

  "zarabotok-blogerov-instagram": {
    checklist: {
      afterTitleIncludes: "Launching a blog before first profit",
      title: "Checklist before blog monetization",
      lead: "Close these before your first ad rate card.",
      items: [
        { id: "pos", label: "Header position and offer clear in 3 seconds" },
        { id: "rub", label: "2–3 rubrics locked" },
        { id: "pack", label: "Two-week content buffer ready" },
        { id: "er", label: "Engagement understood (not only followers)" },
        { id: "kit", label: "Simple media kit / pitch assembled" },
        { id: "metric", label: "Agreed how to measure integration results" },
        { id: "mix", label: "Ads don’t fill the whole feed" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Benchmarks for paid integrations",
        title: "Mini quiz: blogger income",
        lead: "Two questions on monetization.",
        questions: [
          {
            id: "z1",
            question: "Integration price depends more on…",
            options: [
              "Only a round follower number",
              "Audience relevance and engagement quality",
              "How many photo filters you use",
              "Having a pink highlights cover",
            ],
            correct: 1,
            explain:
              "Clients pay for the right people’s attention and actions — not “empty” thousands.",
          },
          {
            id: "z2",
            question: "Fake-engagement exchanges as main income…",
            options: [
              "The best multi-year strategy",
              "A weak ceiling and a reputation risk",
              "Required for every blogger",
              "Replace a media kit",
            ],
            correct: 1,
            explain:
              "Penny tasks don’t scale and look weak in a portfolio.",
          },
        ],
      },
    ],
  },

  "bloger-dlya-reklamy-instagram": {
    checklist: {
      afterTitleIncludes: "How to vet a profile",
      title: "Creator vetting checklist",
      lead: "Complete before you pay for an integration.",
      items: [
        { id: "brief", label: "Brief ready: offer, geo, budget, CTA" },
        { id: "fit", label: "Creator topic matches the product" },
        { id: "er", label: "Live comments and a solid ER" },
        { id: "bots", label: "No clear fake-engagement signs" },
        { id: "ads", label: "Feed isn’t packed with ads" },
        { id: "deal", label: "Format, deadlines, and measurement locked" },
        { id: "risk", label: "Revisions and force majeure discussed" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why advertise with creators",
        title: "Mini quiz: picking a creator",
        lead: "Two questions from the client side.",
        questions: [
          {
            id: "b1",
            question: "The main criterion when choosing a creator…",
            options: [
              "Maximum followers at any cost",
              "Relevant live audience and dialogue quality",
              "Lowest marketplace price",
              "Pink highlight covers",
            ],
            correct: 1,
            explain:
              "You pay for the right people’s attention. “Empty” thousands don’t pay back.",
          },
          {
            id: "b2",
            question: "A creator marketplace…",
            options: [
              "Guarantees no fake engagement",
              "Is handy as a shop window, but you still vet yourself",
              "Replaces the brief",
              "Is only for micro-creators",
            ],
            correct: 1,
            explain:
              "Shop windows hold a lot of junk. Short-list + manual checks are required.",
          },
        ],
      },
    ],
  },

  "reklama-v-pablikah-vk": {
    checklist: {
      afterTitleIncludes: "How to shortlist communities",
      title: "VK community seeding checklist",
      lead: "Mark these before you pay for placement.",
      items: [
        { id: "ca", label: "Audience segment and desired action defined" },
        { id: "list", label: "Community short-list ready" },
        { id: "er", label: "ER and recent reach checked" },
        { id: "bots", label: "Bot / dead-base share assessed" },
        { id: "post", label: "Post ready: hook → value → CTA" },
        { id: "mod", label: "Comment moderation agreed" },
        { id: "utm", label: "Measurement set (UTM / promo / leads)" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Target audience",
        title: "Mini quiz: VK community ads",
        lead: "Two questions on selection.",
        questions: [
          {
            id: "v1",
            question: "Before paying a community, what matters more…",
            options: [
              "Only follower count",
              "Audience fit, live ER, and solid post reach",
              "A pretty community cover",
              "Maximum competitor ads in the feed",
            ],
            correct: 1,
            explain:
              "A large dead base doesn’t convert. Look at composition and reaction.",
          },
          {
            id: "v2",
            question: "Seeding success is measured by…",
            options: [
              "Only likes under the ad post",
              "Cost per desired action and lead quality",
              "Emoji count in comments",
              "Post text length",
            ],
            correct: 1,
            explain:
              "Likes are intermediate. You need leads/clicks and a sane CPL.",
          },
        ],
      },
    ],
  },

  "gipertekst": {
    checklist: {
      afterTitleIncludes: "Hypertext on a commercial site",
      title: "Site hypertext checklist",
      lead: "Walk through key landing pages.",
      items: [
        { id: "h", label: "H1–H3 hierarchy without chaos" },
        { id: "menu", label: "Menu points to real sections" },
        { id: "anchor", label: "Link anchors meaningful (not “here”)" },
        { id: "int", label: "From articles/services there’s a path to a lead" },
        { id: "404", label: "No mass broken internal links" },
        { id: "mob", label: "Links easy to tap on mobile" },
        { id: "depth", label: "Important URLs reachable in 2–3 clicks" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Structure: content and markup",
        title: "Mini quiz: hypertext",
        lead: "Two questions on the core idea.",
        questions: [
          {
            id: "h1",
            question: "Hypertext on the web is primarily…",
            options: [
              "Only a pretty font",
              "A document with links and structural markup",
              "Only images with no text",
              "A PDF with no navigation",
            ],
            correct: 1,
            explain:
              "The point is links between fragments/pages and clear structure for the browser.",
          },
          {
            id: "h2",
            question: "A good link anchor…",
            options: [
              "Always the word “more”",
              "Describes where the click goes",
              "Should be empty",
              "Only a Latin URL with no text",
            ],
            correct: 1,
            explain:
              "“Shipping and payment” is clearer than “click here”.",
          },
        ],
      },
    ],
  },

  "biznes-akkaunt-instagram": {
    checklist: {
      afterTitleIncludes: "How to switch account type",
      title: "Instagram business profile checklist",
      lead: "After changing account type.",
      items: [
        { id: "type", label: "Professional/business mode enabled" },
        { id: "cat", label: "Category matches the offer" },
        { id: "bio", label: "About + CTA aligned with buttons" },
        { id: "contact", label: "Working contacts in the header" },
        { id: "link", label: "Link goes to a current page" },
        { id: "stat", label: "Insights open and understood" },
        { id: "lead", label: "A way to count leads, not only likes" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Personal or business profile",
        title: "Mini quiz: business account",
        lead: "Two questions on choosing the mode.",
        questions: [
          {
            id: "ig1",
            question: "Business mode is needed to…",
            options: [
              "Automatically hit recommendations",
              "Get insights, contacts, and easier promotion work",
              "Turn off comments forever",
              "Replace a content plan",
            ],
            correct: 1,
            explain:
              "These are tools. Reach still depends on content and traffic.",
          },
          {
            id: "ig2",
            question: "After switching, the most important thing is…",
            options: [
              "Ignore the header",
              "Fill category, contacts, and tie insights to leads",
              "Buy fake engagement right away",
              "Delete all posts",
            ],
            correct: 1,
            explain:
              "An empty business profile with no offer and lead tracking barely helps.",
          },
        ],
      },
    ],
  },

  "verstka-saytov": {
    checklist: {
      afterTitleIncludes: "Quality criteria",
      title: "Layout acceptance checklist",
      lead: "Before handing the page to the client.",
      items: [
        { id: "maket", label: "Match to mockup within tolerance" },
        { id: "adapt", label: "Mobile version checked" },
        { id: "browsers", label: "Viewed in 2–3 current browsers" },
        { id: "headings", label: "H1–H3 by meaning, not decoration" },
        { id: "img", label: "Images compressed, alt in place" },
        { id: "console", label: "No critical console errors" },
        { id: "cta", label: "Buttons and links tappable on phone" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What layout is",
        title: "Mini quiz: website layout",
        lead: "Two questions on the layout engineer’s role.",
        questions: [
          {
            id: "v1",
            question: "Layout is…",
            options: [
              "Only drawing a logo",
              "Turning a mockup into an HTML/CSS page for the browser",
              "Only writing copy",
              "Buying backlinks",
            ],
            correct: 1,
            explain:
              "Design sets the look; layout makes the page work on the web.",
          },
          {
            id: "v2",
            question: "For a page grid today, better to…",
            options: [
              "Lay out the whole site with <table>",
              "Use CSS (flex/grid) and semantic markup",
              "Only one full-page image with no HTML",
              "One huge <font>",
            ],
            correct: 1,
            explain:
              "Tables are for data. Mockups are built with modern CSS.",
          },
        ],
      },
    ],
  },

  "kontent-plan-instagram": {
    checklist: {
      afterTitleIncludes: "How to build a plan in 5 steps",
      title: "Monthly content plan checklist",
      lead: "Mark these before publishing starts.",
      items: [
        { id: "goal", label: "Period goal written down" },
        { id: "rub", label: "4–6 rubrics defined" },
        { id: "mix", label: "Value / sales / engagement mix set" },
        { id: "cal", label: "Slots on the calendar" },
        { id: "stock", label: "5+ evergreen drafts ready" },
        { id: "stories", label: "Stories blocks planned separately" },
        { id: "review", label: "Weekly insights review booked" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why you need a content plan",
        title: "Mini quiz: content plan",
        lead: "Two questions on the publishing system.",
        questions: [
          {
            id: "k1",
            question: "A content plan is primarily needed to…",
            options: [
              "Post only ads every day",
              "Tie posting cadence to the account goal",
              "Replace profile design",
              "Turn off insights",
            ],
            correct: 1,
            explain:
              "It’s a calendar under a goal — not a list of random photos.",
          },
          {
            id: "k2",
            question: "Selling posts are better…",
            options: [
              "Made 100% of the feed",
              "Kept as a minority mixed with value",
              "Removed forever",
              "Published only without a CTA",
            ],
            correct: 1,
            explain:
              "Wall-to-wall sales burn the audience. You need balance.",
          },
        ],
      },
    ],
  },

  "avatar-youtube": {
    checklist: {
      afterTitleIncludes: "How to make your avatar",
      title: "YouTube avatar checklist",
      lead: "Before uploading in Studio.",
      items: [
        { id: "sq", label: "High-resolution square" },
        { id: "read", label: "Reads clearly when heavily scaled down" },
        { id: "theme", label: "Tied to the channel topic" },
        { id: "rights", label: "Image rights confirmed" },
        { id: "match", label: "Matched to the banner" },
        { id: "upload", label: "Uploaded in channel customization" },
        { id: "check", label: "Checked under a video and in a comment" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why you need an avatar",
        title: "Mini quiz: YouTube avatar",
        lead: "Two questions on the channel icon.",
        questions: [
          {
            id: "y1",
            question: "The main job of a channel avatar…",
            options: [
              "Replace all video thumbnails",
              "Give fast recognition in the feed and search",
              "Store a full service price list",
              "Turn off comments",
            ],
            correct: 1,
            explain:
              "It’s the channel’s mini-logo at small size.",
          },
          {
            id: "y2",
            question: "Someone else’s photo from the web…",
            options: [
              "Is always fine with no limits",
              "Isn’t allowed without rights / a license",
              "Must be used by everyone",
              "Is only needed for Shorts",
            ],
            correct: 1,
            explain:
              "Risk of rights-holder complaints and lost audience trust.",
          },
        ],
      },
    ],
  },

  "avatar-instagram": {
    checklist: {
      afterTitleIncludes: "What to build the image with",
      title: "Instagram avatar checklist",
      lead: "Before changing the profile photo.",
      items: [
        { id: "goal", label: "Clear: personal blog or brand" },
        { id: "circle", label: "Subject reads in a circle" },
        { id: "text", label: "No tiny text on the avatar" },
        { id: "rights", label: "Your photo / logo / license" },
        { id: "tone", label: "Tone matches the feed" },
        { id: "export", label: "Exported as a square without heavy compression" },
        { id: "bio", label: "Header and CTA aligned with the new mark" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why an avatar “works”",
        title: "Mini quiz: Instagram avatar",
        lead: "Two questions on the profile image.",
        questions: [
          {
            id: "a1",
            question: "On a circular avatar, what matters most…",
            options: [
              "A long slogan in tiny type",
              "A large readable subject (face or mark)",
              "A collage of ten photos",
              "Someone else’s stock without a license",
            ],
            correct: 1,
            explain:
              "At small size only simple shapes survive.",
          },
          {
            id: "a2",
            question: "Best source for a commercial avatar…",
            options: [
              "A random photo from someone else’s profile",
              "Your photo or logo with rights",
              "Any image from a shady “free” site",
              "A screenshot of someone else’s YouTube channel",
            ],
            correct: 1,
            explain:
              "Rights and recognition beat “download something pretty”.",
          },
        ],
      },
    ],
  },

  "veb-server": {
    checklist: {
      afterTitleIncludes: "Link to SEO and site availability",
      title: "Checklist after a host change",
      lead: "Walk through in the first 24 hours.",
      items: [
        { id: "https", label: "HTTPS works, http redirect set" },
        { id: "dns", label: "DNS points to the new IP/host" },
        { id: "200", label: "Home and key URLs return 200" },
        { id: "www", label: "www / non-www consistent" },
        { id: "robots", label: "robots.txt and sitemap open" },
        { id: "logs", label: "No 5xx spike in logs/monitoring" },
        { id: "backup", label: "Backup and panel access checked" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "In plain words",
        title: "Mini quiz: web server",
        lead: "Two questions on the basic model.",
        questions: [
          {
            id: "s1",
            question: "A web server primarily…",
            options: [
              "Draws the company logo",
              "Accepts HTTP(S) requests and returns responses to the client",
              "Writes blog copy",
              "Replaces DNS",
            ],
            correct: 1,
            explain:
              "It’s software (and an environment) that serves browser requests.",
          },
          {
            id: "s2",
            question: "For most small sites…",
            options: [
              "You must buy a rack of servers for the office",
              "Hosting/VPS from a provider is enough",
              "HTTPS isn’t needed",
              "DNS alone without a web server is enough",
            ],
            correct: 1,
            explain:
              "Own hardware is the exception. Usually you rent a ready environment.",
          },
        ],
      },
    ],
  },

  "didzhital-agentstvo": {
    checklist: {
      afterTitleIncludes: "How to choose a contractor",
      title: "Digital agency selection checklist",
      lead: "Before signing the contract.",
      items: [
        { id: "goal", label: "Goals and KPIs written as numbers" },
        { id: "cases", label: "Cases in a related niche exist" },
        { id: "access", label: "Ad account access stays with you" },
        { id: "report", label: "Monthly report format is clear" },
        { id: "team", label: "Roles clear: SEO / ads / web / account" },
        { id: "sla", label: "Deadlines and ownership in the contract" },
        { id: "no", label: "No “TOP-1 in a month” guarantee without caveats" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "The role of a digital agency",
        title: "Mini quiz: digital agency",
        lead: "Two questions on what a contractor is for.",
        questions: [
          {
            id: "d1",
            question: "At its core a digital agency works through…",
            options: [
              "Only printed flyers",
              "Digital channels with measurable results",
              "Only outdoor ads with no site",
              "Guessing from reach with no goals",
            ],
            correct: 1,
            explain:
              "Site, search, ads, analytics — tied to business metrics.",
          },
          {
            id: "d2",
            question: "A strong start of collaboration is…",
            options: [
              "A “viral video” right away with no brief",
              "Goals, audit, and a period plan",
              "Turning off all analytics",
              "Handing over passwords with no contract",
            ],
            correct: 1,
            explain:
              "Without goals and an audit, in a quarter you argue about abstract reach.",
          },
        ],
      },
    ],
  },

  "opisanie-youtube-kanala": {
    checklist: {
      afterTitleIncludes: "How to add and update in Studio",
      title: "Channel description checklist",
      lead: "Before saving in Studio.",
      items: [
        { id: "hook", label: "First 2 sentences clear without “more”" },
        { id: "who", label: "Clear who the channel is for and the format" },
        { id: "keys", label: "Keywords fit naturally, no spam" },
        { id: "links", label: "Links added in the channel links block" },
        { id: "match", label: "Copy matches the video topic" },
        { id: "rules", label: "No banned or others’ content" },
        { id: "cta", label: "A soft next step is present" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Opening lines and limits",
        title: "Mini quiz: YouTube description",
        lead: "Two questions on the channel business card.",
        questions: [
          {
            id: "y1",
            question: "Why are the first sentences critical?",
            options: [
              "Because YouTube requires poetry",
              "The preview shows only the first characters",
              "Because keywords can only go at the end",
              "Because links only work there",
            ],
            correct: 1,
            explain:
              "The collapsed block shows the start — the point must be immediate.",
          },
          {
            id: "y2",
            question: "How do you add clickable links correctly?",
            options: [
              "Paste a long URL into the paragraph as-is",
              "Via the links field in channel customization",
              "Only in comments under every video",
              "Only in the channel name",
            ],
            correct: 1,
            explain:
              "Channel links are set in a separate block, not as bare text.",
          },
        ],
      },
    ],
  },

  "post-instagram": {
    checklist: {
      afterTitleIncludes: "Headline and copy structure",
      title: "Selling post checklist",
      lead: "Before publishing to the feed.",
      items: [
        { id: "hook", label: "First line hooks without fake clickbait" },
        { id: "offer", label: "Product / service / offer is clear" },
        { id: "benefit", label: "Benefits present, not only specs" },
        { id: "usp", label: "Difference from competitors is clear" },
        { id: "cta", label: "CTA: what to do and where" },
        { id: "visual", label: "Visual supports the copy, doesn’t fight it" },
        { id: "reply", label: "Who replies to comments in the first minutes" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What a selling post is",
        title: "Mini quiz: Instagram post",
        lead: "Two questions on structure.",
        questions: [
          {
            id: "p1",
            question: "The main job of a selling post is —",
            options: [
              "Get likes at any cost",
              "Lead to a clear action (lead, purchase…)",
              "Copy a competitor’s text 1:1",
              "Replace the whole content plan",
            ],
            correct: 1,
            explain:
              "A selling post is a funnel step with a CTA — not a reach contest.",
          },
          {
            id: "p2",
            question: "A typical intro mistake is —",
            options: [
              "Making it a short hook",
              "Dumping the whole point and then repeating it in the middle",
              "Asking 1–2 questions into the body",
              "Leaving the CTA for the close",
            ],
            correct: 1,
            explain:
              "The intro is a lead-in; value unfolds in the body.",
          },
        ],
      },
    ],
  },

  "raskrutka-youtube": {
    checklist: {
      afterTitleIncludes: "Shooting, script, edit",
      title: "Channel start checklist",
      lead: "Before mass subscriber “hunting”.",
      items: [
        { id: "niche", label: "Niche chosen and held 8+ weeks" },
        { id: "plan", label: "Plan for 8–12 videos ready" },
        { id: "pack", label: "Name, avatar, banner, description done" },
        { id: "hook", label: "Title and thumbnail honest and readable" },
        { id: "seo", label: "Video description with point and on-topic keywords" },
        { id: "rhythm", label: "Realistic posting cadence locked" },
        { id: "reply", label: "Habit of replying in comments" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Niche and audience",
        title: "Mini quiz: YouTube growth",
        lead: "Two questions for beginners.",
        questions: [
          {
            id: "r1",
            question: "The main risk of a channel “about everything” —",
            options: [
              "Thumbnails that are too pretty",
              "Hard to build a loyal audience",
              "A mandatory word-for-word script",
              "A ban on Shorts",
            ],
            correct: 1,
            explain:
              "People subscribe to a clear topic; mixed genres blur expectations.",
          },
          {
            id: "r2",
            question: "What matters more at the start?",
            options: [
              "Fake subscribers",
              "Cadence and relevant content",
              "Changing niche every week",
              "Only streams with no regular videos",
            ],
            correct: 1,
            explain:
              "Algorithms and trust grow on watch time and returns — not dead follows.",
          },
        ],
      },
    ],
  },

  "kopirayting": {
    checklist: {
      afterTitleIncludes: "Tips for clients",
      title: "Copywriter brief checklist",
      lead: "Before the text starts.",
      items: [
        { id: "goal", label: "Text goal written (what the reader should do)" },
        { id: "aud", label: "Audience and tone described" },
        { id: "facts", label: "Facts, offer, constraints ready" },
        { id: "seo", label: "Keywords/cluster shared or marked “not needed”" },
        { id: "vol", label: "Length and structure agreed" },
        { id: "ex", label: "1–2 like / dislike examples given" },
        { id: "accept", label: "Acceptance criteria and revision count locked" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Two big directions",
        title: "Mini quiz: copywriting",
        lead: "Two questions on the core idea.",
        questions: [
          {
            id: "k1",
            question: "Selling copy should primarily…",
            options: [
              "Stuff as many keywords as possible",
              "Lead to the desired action",
              "Be longer than 20,000 characters",
              "Repeat someone else’s rewrite",
            ],
            correct: 1,
            explain:
              "Commercial copywriting is about motivating a lead/purchase — not length.",
          },
          {
            id: "k2",
            question: "A strong brief for a writer is…",
            options: [
              "“Write something pretty”",
              "Goal, audience, facts, keywords, acceptance criteria",
              "Only the desired character count",
              "A link to stock photos",
            ],
            correct: 1,
            explain:
              "Clearer job and facts mean fewer rewrites.",
          },
        ],
      },
    ],
  },

  "nakrutka-laykov-instagram": {
    checklist: {
      afterTitleIncludes: "What to use instead of artificial activity",
      title: "Checklist instead of fake likes",
      lead: "Before you search for “likes in an hour”.",
      items: [
        { id: "offer", label: "Offer and profile header clear without explanation" },
        { id: "hook", label: "First line and visual hook honestly" },
        { id: "plan", label: "Posting rhythm for 2–4 weeks ready" },
        { id: "cta", label: "Posts have an action beyond “just like”" },
        { id: "reply", label: "Who replies in comments in the first minutes" },
        { id: "metrics", label: "Watch saves/replies/clicks, not likes alone" },
        { id: "ads", label: "Promotion via platform rules, not bots" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What fake likes promise",
        title: "Mini quiz: fake likes",
        lead: "Two questions on the risks.",
        questions: [
          {
            id: "n1",
            question: "The main downside of bought likes —",
            options: [
              "They’re always pricier than paid ads",
              "No live audience and sanction risk",
              "Instagram requires them by the rules",
              "They only improve Reels audio",
            ],
            correct: 1,
            explain:
              "Bots don’t buy; anti-fraud and advertisers dislike those numbers.",
          },
          {
            id: "n2",
            question: "Instead of fake likes it’s smarter to…",
            options: [
              "Hand login/password to a “top guarantee” service",
              "Strengthen content and honest promotion",
              "Buy only followers with no likes",
              "Delete all comments",
            ],
            correct: 1,
            explain:
              "Growth is built on value and legal channels — not rule bypasses.",
          },
        ],
      },
    ],
  },

  "besplatnoe-razmeshchenie-statey": {
    checklist: {
      afterTitleIncludes: "How to prepare the piece",
      title: "Guest article checklist",
      lead: "Before emailing the editor.",
      items: [
        { id: "fit", label: "Outlet matches your audience topic" },
        { id: "rules", label: "Current author guidelines read" },
        { id: "uniq", label: "Text unique / adapted, not a raw duplicate" },
        { id: "value", label: "Value present: case, how-to, breakdown" },
        { id: "ads", label: "No direct “buy now” ads" },
        { id: "meta", label: "Headline and lead clear without clickbait" },
        { id: "mail", label: "Email: topic, value, draft, work samples" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why publish articles off your own site",
        title: "Mini quiz: guest posts",
        lead: "Two questions on the idea.",
        questions: [
          {
            id: "b1",
            question: "Stronger for promotion…",
            options: [
              "10 weak texts on junk sites",
              "1 strong piece on a relevant medium",
              "A copy of someone else’s article with no edits",
              "Only a Title with no body",
            ],
            correct: 1,
            explain:
              "Quality and topical fit beat a pile of filler placements.",
          },
          {
            id: "b2",
            question: "If it’s the same text —",
            options: [
              "Someone else’s site first, then yours",
              "Your site and indexing first, then an adapted outward version",
              "Everywhere at once with no edits",
              "Only on a link exchange",
            ],
            correct: 1,
            explain:
              "Otherwise search may treat your original as a copy.",
          },
        ],
      },
    ],
  },

  "reklama-instagram": {
    checklist: {
      afterTitleIncludes: "How to track effectiveness",
      title: "Ad launch checklist",
      lead: "Before the budget starts spending.",
      items: [
        { id: "goal", label: "Goal: reach / traffic / leads / sales" },
        { id: "offer", label: "Offer and landing ready" },
        { id: "track", label: "UTM or promo codes per channel/creator" },
        { id: "creative", label: "Creative and CTA match the format" },
        { id: "audience", label: "Segment or creator checked for audience fit" },
        { id: "budget", label: "Test budget and timeline locked" },
        { id: "kpi", label: "KPI: CPA/leads, not likes alone" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Ad types",
        title: "Mini quiz: Instagram ads",
        lead: "Two questions on choosing the channel.",
        questions: [
          {
            id: "ri1",
            question: "Paid targeting primarily gives…",
            options: [
              "A TOP-1 guarantee in search",
              "Control of segment and impression scale",
              "Free bots as followers",
              "No need for an offer",
            ],
            correct: 1,
            explain:
              "The ads manager is about audience and budget settings — not SEO rankings.",
          },
          {
            id: "ri2",
            question: "Mass-liking as a growth strategy —",
            options: [
              "An official Meta method",
              "Risky noise instead of a live audience",
              "A UTM replacement",
              "Required before targeting",
            ],
            correct: 1,
            explain:
              "The platform cuts unnatural activity; better content and legal ads.",
          },
        ],
      },
    ],
  },

  "ssl-sertifikat": {
    checklist: {
      afterTitleIncludes: "How to choose and where to get it",
      title: "HTTPS checklist",
      lead: "After installing the certificate.",
      items: [
        { id: "https", label: "Site opens on https with no errors" },
        { id: "redir", label: "http→https redirect set" },
        { id: "mix", label: "No mixed content (http resources)" },
        { id: "www", label: "www / non-www consistent" },
        { id: "renew", label: "Auto-renew / expiry clear" },
        { id: "host", label: "Analytics primary host is HTTPS" },
        { id: "forms", label: "Forms and cabinet only over HTTPS" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why you need a certificate",
        title: "Mini quiz: SSL / HTTPS",
        lead: "Two questions on the idea.",
        questions: [
          {
            id: "s1",
            question: "HTTPS primarily…",
            options: [
              "Makes the site immune to CMS hacks",
              "Encrypts the channel between browser and server",
              "Replaces backups",
              "Removes the need for passwords",
            ],
            correct: 1,
            explain:
              "The certificate is about encryption and server trust — not plugin patches.",
          },
          {
            id: "s2",
            question: "For a regular site at the start, often enough is…",
            options: [
              "Only HTTP with no redirect",
              "DV / Let’s Encrypt with auto-renew",
              "EV with a green bar required",
              "A certificate for someone else’s domain",
            ],
            correct: 1,
            explain:
              "Free DV covers encryption for most projects.",
          },
        ],
      },
    ],
  },

  "dashboard": {
    checklist: {
      afterTitleIncludes: "Build outline",
      title: "First dashboard checklist",
      lead: "Before picking a “pretty” BI.",
      items: [
        { id: "goal", label: "Panel goal and viewer role clear" },
        { id: "kpi", label: "No more than 5–7 KPIs on the first screen" },
        { id: "src", label: "Data sources listed" },
        { id: "def", label: "Metric formulas locked" },
        { id: "period", label: "Period and timezone agreed" },
        { id: "access", label: "Access rights granted by role" },
        { id: "check", label: "Numbers reconciled with a raw report" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What a dashboard is",
        title: "Mini quiz: dashboard",
        lead: "Two questions on what the panel is for.",
        questions: [
          {
            id: "db1",
            question: "A dashboard is primarily needed to…",
            options: [
              "Store employee passwords",
              "See key metrics fast and decide",
              "Replace the whole company site",
              "Fake search rankings",
            ],
            correct: 1,
            explain:
              "It’s a KPI shop window for decisions — not a dump of everything.",
          },
          {
            id: "db2",
            question: "A typical startup mistake is —",
            options: [
              "Start with questions and KPIs",
              "Hang 40 widgets with no goal",
              "Reconcile numbers with the source",
              "Limit access rights",
            ],
            correct: 1,
            explain:
              "Goal and metrics first, visualization second.",
          },
        ],
      },
    ],
  },

  "parol-instagram": {
    checklist: {
      afterTitleIncludes: "If the account was hacked",
      title: "Lost-access checklist",
      lead: "Follow the order.",
      items: [
        { id: "official", label: "Official app/site only" },
        { id: "reset", label: "Reset via your email or SMS" },
        { id: "unique", label: "New password unique and long" },
        { id: "mail", label: "Email password also changed if hacked" },
        { id: "2fa", label: "Two-factor authentication on" },
        { id: "sessions", label: "Active sessions / devices checked" },
        { id: "support", label: "If hacked — contact support" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "When to change the password",
        title: "Mini quiz: Instagram password",
        lead: "Two questions on security.",
        questions: [
          {
            id: "pi1",
            question: "We open a password-reset email…",
            options: [
              "From any email with the word Instagram",
              "Only from the official recovery flow",
              "From a “fake-engagement helper”",
              "From an ad banner",
            ],
            correct: 1,
            explain:
              "Phishing mimics resets — start from the platform login screen.",
          },
          {
            id: "pi2",
            question: "After a hack it’s important to…",
            options: [
              "Tell no one and wait",
              "Change passwords, enable 2FA, and contact support",
              "Hand the account to a fake-engagement service",
              "Delete only the avatar",
            ],
            correct: 1,
            explain:
              "Speed + access changes + official support.",
          },
        ],
      },
    ],
  },

  "prodvizhenie-internet-magazina": {
    checklist: {
      afterTitleIncludes: "Technical audit",
      title: "Store SEO checklist",
      lead: "Before scaling the keyword core.",
      items: [
        { id: "tech", label: "Speed, mobile, HTTPS without critical issues" },
        { id: "filters", label: "Filters don’t spawn junk index URLs" },
        { id: "struct", label: "Categories → products clear in 1–2 clicks" },
        { id: "title", label: "Title templates are unique" },
        { id: "cards", label: "Product pages: photos, specs, no marketplace copy-paste" },
        { id: "comm", label: "Shipping, payment, contacts filled in" },
        { id: "time", label: "Plan separates prep and ranking growth" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Semantics, Title, and copy",
        title: "Mini quiz: store SEO",
        lead: "Two questions on timelines and foundations.",
        questions: [
          {
            id: "im1",
            question: "Preparing a store for SEO and reaching TOP are…",
            options: [
              "The same thing: write copy = TOP in a month",
              "Different stages: prep is faster, rankings build longer",
              "Only banners are needed",
              "Buying links is enough",
            ],
            correct: 1,
            explain:
              "Tech and copy are prep; TOP on the core usually takes months of work.",
          },
          {
            id: "im2",
            question: "A strong e-commerce SEO base is…",
            options: [
              "Only dense keyword stuffing in the footer",
              "Tech, catalog structure, and solid product pages",
              "Turning off HTTPS",
              "Hiding contacts",
            ],
            correct: 1,
            explain:
              "Without tech and catalog, copy almost never carries the store.",
          },
        ],
      },
    ],
  },

  "prodazha-trafika": {
    checklist: {
      afterTitleIncludes: "How not to kill the property",
      title: "Traffic monetization checklist",
      lead: "Before full-screen aggressive blocks.",
      items: [
        { id: "aud", label: "Audience and site topic are clear" },
        { id: "model", label: "Model chosen: CPC / CPM / CPA / direct" },
        { id: "rules", label: "Network / offer rules read" },
        { id: "ux", label: "Ads don’t block reading the content" },
        { id: "stats", label: "Report on impressions, clicks, revenue" },
        { id: "quality", label: "No fake traffic or misleading teasers" },
        { id: "balance", label: "Watch bounce/returns, not only eCPM" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "How the model works",
        title: "Mini quiz: selling traffic",
        lead: "Two questions on monetization.",
        questions: [
          {
            id: "pt1",
            question: "CPA means paying…",
            options: [
              "Only for a banner impression",
              "For a user’s target action",
              "For the word count on the site",
              "For signing up on any exchange",
            ],
            correct: 1,
            explain: "Cost Per Action — lead, purchase, signup, etc.",
          },
          {
            id: "pt2",
            question: "An aggressive clickunder more often…",
            options: [
              "Improves reader loyalty",
              "Risks hurting UX and retention",
              "Is required by every ad network",
              "Replaces a semantic core",
            ],
            correct: 1,
            explain: "Short-term eCPM isn’t worth losing the audience.",
          },
        ],
      },
    ],
  },

  "parsing": {
    checklist: {
      afterTitleIncludes: "Legality and ethics",
      title: "Checklist before parsing",
      lead: "Before any collection run.",
      items: [
        { id: "goal", label: "Goal stated (not “scrape everything”)" },
        { id: "tos", label: "ToS / site rules checked" },
        { id: "robots", label: "robots.txt respected" },
        { id: "rate", label: "Load limits on the remote server set" },
        { id: "rights", label: "No plan to copy unique content" },
        { id: "api", label: "API / official export option checked" },
        { id: "store", label: "Clear where data lives and who can access it" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What parsing is",
        title: "Mini quiz: parsing",
        lead: "Two questions on the limits.",
        questions: [
          {
            id: "pa1",
            question: "Parsing is primarily…",
            options: [
              "A TOP-1 guarantee",
              "Automated collection and structuring of data",
              "Mandatory site hacking",
              "A replacement for a semantic core",
            ],
            correct: 1,
            explain: "Collection and a table are the base; analysis comes next.",
          },
          {
            id: "pa2",
            question: "Ignoring robots.txt is…",
            options: [
              "Recommended practice",
              "A bad idea: rule conflict and risks",
              "Required for HTTPS",
              "Required by law",
            ],
            correct: 1,
            explain: "robots.txt sets bot rules — follow them.",
          },
        ],
      },
    ],
  },

  "klikabelnaya-ssylka": {
    checklist: {
      afterTitleIncludes: "Creating in HTML",
      title: "Link checklist",
      lead: "Before publishing.",
      items: [
        { id: "href", label: "href points to the right live URL" },
        { id: "https", label: "External links use https when possible" },
        { id: "anchor", label: "Anchor is clear — not “here/click”" },
        { id: "blank", label: "If _blank — rel=noopener added" },
        { id: "click", label: "Click tested on mobile and desktop" },
        { id: "seo", label: "Internal links go to useful pages" },
        { id: "spam", label: "No spam of useless outbound links" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Active vs inactive links",
        title: "Mini quiz: clickable links",
        lead: "Two practice questions.",
        questions: [
          {
            id: "kl1",
            question: "A minimal HTML link is built with…",
            options: [
              "CSS only, no tags",
              "An <a> tag with an href attribute",
              "Required Flash",
              "Only a screenshot of the URL",
            ],
            correct: 1,
            explain: "`<a href=\"…\">anchor</a>` is the basic active link.",
          },
          {
            id: "kl2",
            question: "A good anchor is…",
            options: [
              "“Here” and “click”",
              "Text that reflects the destination page",
              "A random keyword dump",
              "An empty string",
            ],
            correct: 1,
            explain: "The anchor should promise where the user will land.",
          },
        ],
      },
    ],
  },

  "raskrutka-gruppy-vk": {
    checklist: {
      afterTitleIncludes: "Prep and launch",
      title: "VK public launch checklist",
      lead: "Before buying ads.",
      items: [
        { id: "niche", label: "Niche and community goal are clear" },
        { id: "name", label: "Name is clear, not stuffed" },
        { id: "design", label: "Cover, menu, pinned CTA" },
        { id: "stock", label: "10–15 posts / drafts ready" },
        { id: "rules", label: "Moderation rules understood" },
        { id: "channel", label: "Growth channel chosen: organic / ads / seeding" },
        { id: "no-bots", label: "Fake followers ruled out" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "How to attract subscribers",
        title: "Mini quiz: VK group",
        lead: "Two growth questions.",
        questions: [
          {
            id: "vk1",
            question: "Fake followers more often lead to…",
            options: [
              "Stable high ER",
              "Sanction risk and a dead audience",
              "Guaranteed TOP in VK search",
              "No need for moderation",
            ],
            correct: 1,
            explain: "Bots hurt stats and trust — live growth is better.",
          },
          {
            id: "vk2",
            question: "Before ads it’s important to…",
            options: [
              "Leave the public empty",
              "Have design, offer, and a content backlog",
              "Only buy bots",
              "Turn off stats",
            ],
            correct: 1,
            explain: "An empty public with ads burns budget.",
          },
        ],
      },
    ],
  },

  "zaspamlennost-teksta": {
    checklist: {
      afterTitleIncludes: "How to reduce stuffing",
      title: "Anti-stuffing checklist",
      lead: "Before handing over SEO copy.",
      items: [
        { id: "read", label: "Text reads aloud without stumbling" },
        { id: "keys", label: "Keyword not in every sentence" },
        { id: "syn", label: "Synonyms and natural swaps present" },
        { id: "tool", label: "Checked in the agreed tool" },
        { id: "title", label: "Title isn’t a comma list of queries" },
        { id: "water", label: "No padding with empty fluff" },
        { id: "sense", label: "Meaning beats a “magic %”" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What counts as stuffing",
        title: "Mini quiz: keyword stuffing",
        lead: "Two meaning checks.",
        questions: [
          {
            id: "zs1",
            question: "Stuffing is mainly…",
            options: [
              "Site load speed",
              "Excess keywords and same-type repeats",
              "Having HTTPS",
              "Image count",
            ],
            correct: 1,
            explain: "Too many keywords break the copy and quality signals.",
          },
          {
            id: "zs2",
            question: "To reduce stuffing, better…",
            options: [
              "Add meaningless fluff",
              "Cut spare repeats and rewrite phrases",
              "Double every keyword",
              "Delete all headings",
            ],
            correct: 1,
            explain: "Edit repeats and meaning — don’t inflate with emptiness.",
          },
        ],
      },
    ],
  },

  "kontent-plan": {
    checklist: {
      afterTitleIncludes: "How to build it",
      title: "Content plan checklist",
      lead: "Before publishing starts.",
      items: [
        { id: "goal", label: "Goal and audience written down" },
        { id: "formats", label: "Content formats chosen" },
        { id: "rubrics", label: "Rubrics / slot types exist" },
        { id: "calendar", label: "2–4 week schedule filled" },
        { id: "owners", label: "Each slot has an owner" },
        { id: "backup", label: "5+ backup topics ready" },
        { id: "review", label: "Results review is planned" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Terms: content plan, editorial, media plan",
        title: "Mini quiz: content plan",
        lead: "Two term checks.",
        questions: [
          {
            id: "kp1",
            question: "A media plan is more about…",
            options: [
              "A blog article queue",
              "Ad campaigns and budgets",
              "Cover color only",
              "DNS setup",
            ],
            correct: 1,
            explain: "Media plan = ads; content plan = editorial publishing.",
          },
          {
            id: "kp2",
            question: "The main benefit of a content plan is…",
            options: [
              "TOP-1 in a week guaranteed",
              "Cadence and clarity: what ships when",
              "Cancelling semantics",
              "Replacing moderation",
            ],
            correct: 1,
            explain: "A plan cuts chaos and helps the team work by slots.",
          },
        ],
      },
    ],
  },

  yukassa: {
    checklist: {
      afterTitleIncludes: "How merchants connect",
      title: "Payments onboarding checklist",
      lead: "Before live charges.",
      items: [
        { id: "docs", label: "Sole trader / company details ready" },
        { id: "offer", label: "Goods/services and site are clear" },
        { id: "tariff", label: "Current tariff checked on the service site" },
        { id: "cms", label: "Module/API exists for your platform" },
        { id: "kkt", label: "Receipt / online cash-register scheme decided" },
        { id: "test", label: "Test payment completed" },
        { id: "refund", label: "Refund process understood" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What YooKassa does",
        title: "Mini quiz: YooKassa",
        lead: "Two meaning checks on the aggregator.",
        questions: [
          {
            id: "yk1",
            question: "YooKassa is first of all…",
            options: [
              "An SEO copywriter",
              "An online payment acceptor for business",
              "A ranking booster",
              "A hosting replacement",
            ],
            correct: 1,
            explain: "It’s a payment aggregator for shops and services.",
          },
          {
            id: "yk2",
            question: "A fee from a 2021 article…",
            options: [
              "Can go straight into a client contract",
              "Must be checked against the current service tariff",
              "Is always zero",
              "Replaces cash-register law",
            ],
            correct: 1,
            explain: "Tariffs change — only the official price list counts.",
          },
        ],
      },
    ],
  },

  "analiz-konkurentov": {
    checklist: {
      afterTitleIncludes: "How to decide",
      title: "Competitor review checklist",
      lead: "Before strategy conclusions.",
      items: [
        { id: "list", label: "List of 3–5 real competitors in the niche" },
        { id: "tools", label: "Slice from 2+ estimation tools" },
        { id: "order", label: "Traffic order of magnitude locked — not a fake exact number" },
        { id: "channels", label: "Main channels clear (search/direct/social)" },
        { id: "pages", label: "Strong landings / topics written down" },
        { id: "rep", label: "Reviews and soft signals checked" },
        { id: "hyp", label: "Hypotheses for your site exist (not copy-paste)" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Traffic estimation tools",
        title: "Mini quiz: competitor analysis",
        lead: "Two questions on estimates.",
        questions: [
          {
            id: "ak1",
            question: "SimilarWeb / Ahrefs numbers are…",
            options: [
              "An exact export from the competitor’s analytics",
              "Estimates with error — watch order of magnitude",
              "A ranking guarantee",
              "A legally certified report",
            ],
            correct: 1,
            explain: "Without cabinet access there is no exact competitor traffic.",
          },
          {
            id: "ak2",
            question: "Alexa in 2026 as a primary tool…",
            options: [
              "Is required for SEO",
              "Is no longer a pillar — the product left the market",
              "Replaces Semrush",
              "Issues cash-register receipts",
            ],
            correct: 1,
            explain: "Old Alexa guides are archive — use current tools.",
          },
        ],
      },
    ],
  },

  "prodayushchie-teksty": {
    checklist: {
      afterTitleIncludes: "Intro, body, close",
      title: "Sales copy checklist",
      lead: "Before publishing.",
      items: [
        { id: "aud", label: "Audience and target action are clear" },
        { id: "benefit", label: "Benefits beat brand self-praise" },
        { id: "hook", label: "Headline promises benefit without lying" },
        { id: "proof", label: "Facts / cases / proof present" },
        { id: "price", label: "Price and terms are clear" },
        { id: "cta", label: "One clear CTA" },
        { id: "honest", label: "No hidden critical downsides" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Sales copy principles",
        title: "Mini quiz: sales copy",
        lead: "Two meaning checks.",
        questions: [
          {
            id: "pt1",
            question: "Strong sales copy puts at the center…",
            options: [
              "“We’re the best” with no proof",
              "The reader’s job and the solution’s benefit",
              "As many keywords in a row as possible",
              "Only the company story",
            ],
            correct: 1,
            explain: "Clients care what changes in their life/business.",
          },
          {
            id: "pt2",
            question: "The close of commercial copy usually has…",
            options: [
              "Only a competitor list",
              "Summary, terms, and a call to action",
              "Analytics turned off",
              "Price removed",
            ],
            correct: 1,
            explain: "Without a CTA the reader doesn’t know the next step.",
          },
        ],
      },
    ],
  },

  "domen-pervogo-urovnya": {
    checklist: {
      afterTitleIncludes: "How to choose a name",
      title: "Domain choice checklist",
      lead: "Before paying the registrar.",
      items: [
        { id: "aud", label: "Audience and geo are clear" },
        { id: "zone", label: "Priority zone (TLD) chosen" },
        { id: "name", label: "Name is pronounced and spelled unambiguously" },
        { id: "free", label: "Name is free in the needed zone" },
        { id: "tm", label: "No clash with another brand" },
        { id: "dns", label: "Hosting and DNS after registration are clear" },
        { id: "renew", label: "Auto-renew / reminder enabled" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Domain name levels",
        title: "Mini quiz: top-level domain",
        lead: "Two TLD checks.",
        questions: [
          {
            id: "d1",
            question: "A top-level domain is…",
            options: [
              "Only the shop. subdomain",
              "The zone after the last dot (.ru, .com…)",
              "The hosting password",
              "The homepage title",
            ],
            correct: 1,
            explain: "TLD is the address tail; creativity is usually at level 2.",
          },
          {
            id: "d2",
            question: "The zone by itself…",
            options: [
              "Guarantees TOP-1",
              "Doesn’t replace content and tech, but shapes expectations and CTR",
              "Cancels HTTPS",
              "Replaces a semantic core",
            ],
            correct: 1,
            explain: "TLD is a weak factor; sites rank through work, not zone alone.",
          },
        ],
      },
    ],
  },

  "statistika-instagram": {
    checklist: {
      afterTitleIncludes: "Profile and post metrics",
      title: "Weekly review checklist",
      lead: "15 minutes once a week.",
      items: [
        { id: "pro", label: "Professional account is on" },
        { id: "top", label: "2–3 best posts marked by saves/replies" },
        { id: "low", label: "Flop understood + fix hypothesis" },
        { id: "time", label: "Audience activity hours checked" },
        { id: "cta", label: "Taps/messages exist — not only likes" },
        { id: "utm", label: "Bio link has UTM (if you send to a site)" },
        { id: "safe", label: "No login into shady “spy” apps" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why look at statistics",
        title: "Mini quiz: Instagram statistics",
        lead: "Two metric checks.",
        questions: [
          {
            id: "si1",
            question: "Reach is…",
            options: [
              "All repeat views in a row",
              "Unique accounts that saw the content",
              "Follower count only",
              "Ad cost",
            ],
            correct: 1,
            explain: "Impressions count all views; reach is unique accounts.",
          },
          {
            id: "si2",
            question: "For business it’s more useful to watch…",
            options: [
              "Likes only",
              "Saves, replies, taps, and leads",
              "Photo filters only",
              "Other people’s passwords",
            ],
            correct: 1,
            explain: "Likes are a weak KPI; actions closer to the goal matter.",
          },
        ],
      },
    ],
  },

  "stories-instagram-inkognito": {
    checklist: {
      afterTitleIncludes: "Privacy for your own Stories",
      title: "Stories privacy checklist",
      lead: "Before posting sensitive content.",
      items: [
        { id: "aud", label: "Audience clear: everyone / Close Friends / hide from…" },
        { id: "data", label: "No passwords, contracts, or client personal data" },
        { id: "safe", label: "Not logging into third-party “anonymous” apps" },
        { id: "comp", label: "Competitors watched openly or hypotheses logged by hand" },
        { id: "team", label: "Internal updates — not in public Stories" },
        { id: "2fa", label: "Two-factor protection enabled on the account" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why people seek anonymous viewing",
        title: "Mini quiz: Stories and “incognito”",
        lead: "Two risk checks.",
        questions: [
          {
            id: "st1",
            question: "A built-in “invisible” mode for others’ Stories…",
            options: [
              "Exists in settings for everyone",
              "Doesn’t — viewing from an account is usually visible to the author",
              "Turns on only via Wi‑Fi password",
              "Works only on competitors’ Stories",
            ],
            correct: 1,
            explain: "No official invisibility; third-party promises are a risk zone.",
          },
          {
            id: "st2",
            question: "The most dangerous step with a “spy” app is —",
            options: [
              "Screenshot an open Story",
              "Enter Instagram login and password",
              "Open Close Friends",
              "View your own Insights",
            ],
            correct: 1,
            explain: "Password in a third-party app is a path to account takeover.",
          },
        ],
      },
    ],
  },

  "forma-obratnoy-svyazi": {
    checklist: {
      afterTitleIncludes: "Field structure",
      title: "Website form checklist",
      lead: "Before releasing the lead block.",
      items: [
        { id: "goal", label: "Form goal is clear (call / question / request)" },
        { id: "fields", label: "Minimum required fields" },
        { id: "pdn", label: "Personal-data processing consent present" },
        { id: "deliv", label: "Test request reaches email/CRM" },
        { id: "spam", label: "Antispam exists (honeypot/captcha/limit)" },
        { id: "place", label: "Form on contacts and/or by the offer" },
        { id: "sla", label: "Thank-you states a real reply window" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Form goals and jobs",
        title: "Mini quiz: feedback form",
        lead: "Two checks on placement and fields.",
        questions: [
          {
            id: "f1",
            question: "Extra required fields usually…",
            options: [
              "Always raise conversion",
              "Cut the share of submits",
              "Replace SPF",
              "Disable mobile layout",
            ],
            correct: 1,
            explain:
              "The longer the required brief before first contact, the fewer leads.",
          },
          {
            id: "f2",
            question: "Reliable lead delivery is…",
            options: [
              "Only a pretty button with no server",
              "CRM/CMS plus notification and email spam checks",
              "Only captcha with no validation",
              "Duplicating a full form in every footer",
            ],
            correct: 1,
            explain: "You need write + notify and working DNS/SMTP.",
          },
        ],
      },
    ],
  },

  "yandeks-toloka": {
    checklist: {
      afterTitleIncludes: "Sign-up and roles",
      title: "Checklist before tasks",
      lead: "So you don’t burn rating for nothing.",
      items: [
        { id: "region", label: "Current service for your region is clear" },
        { id: "train", label: "Training / practice tasks completed" },
        { id: "instr", label: "Instruction is read before start, not after rejection" },
        { id: "stats", label: "Accepted/rejected share is watched" },
        { id: "field", label: "Field tasks account for travel and time" },
        { id: "payout", label: "Payout, fees, and tax status checked" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What Toloka is",
        title: "Mini quiz: Toloka",
        lead: "Two meaning checks on the service.",
        questions: [
          {
            id: "t1",
            question: "Toloka is first of all…",
            options: [
              "A behavioral-factor boosting exchange",
              "Crowdsourced human labeling and data judgment",
              "Website hosting",
              "A search-ads cabinet",
            ],
            correct: 1,
            explain:
              "People label and judge data for search, services, and AI.",
          },
          {
            id: "t2",
            question: "“$ a day” figures from 2020–2021 guides…",
            options: [
              "Are guaranteed to all beginners",
              "Are often outdated: feed, region, and rules changed",
              "Replace an employment contract",
              "Grow from auto-surfing",
            ],
            correct: 1,
            explain:
              "Watch the live feed and your accepted tasks, not old screenshots.",
          },
        ],
      },
    ],
  },

  "serfing-saytov": {
    checklist: {
      afterTitleIncludes: "Why it’s harmful for a site owner",
      title: "Checklist instead of surfing",
      lead: "If the goal is leads, not “numbers in analytics.”",
      items: [
        { id: "goal", label: "Traffic goal stated (leads / sales)" },
        { id: "src", label: "Channel is legal: SEO, ads, content, partnerships" },
        { id: "utm", label: "Tags and goals in analytics are set" },
        { id: "quality", label: "Watch bounce and conversion, not visits alone" },
        { id: "noauto", label: "No auto-surfing or buying empty visits" },
        { id: "report", label: "Client report has no “boosted” sessions" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What surfing looks like",
        title: "Mini quiz: website surfing",
        lead: "Two checks on meaning and risks.",
        questions: [
          {
            id: "s1",
            question: "Paid surfing for a site mainly gives…",
            options: [
              "Guaranteed TOP-10",
              "Analytics noise without a target audience",
              "Free SSL",
              "A semantic core",
            ],
            correct: 1,
            explain: "Not an audience and not leads — empty visits spoil metrics.",
          },
          {
            id: "s2",
            question: "Auto-surfing with bots…",
            options: [
              "Is the best SEO strategy",
              "Is even more toxic than empty manual visits and breaks exchange rules",
              "Replaces a content plan",
              "Is required for HTTPS",
            ],
            correct: 1,
            explain: "Bots amplify junk in stats and ban risk.",
          },
        ],
      },
    ],
  },

  "zakrytie-ot-indeksatsii": {
    checklist: {
      afterTitleIncludes: "meta robots and X-Robots-Tag",
      title: "Indexing block checklist",
      lead: "Before production edits.",
      items: [
        { id: "why", label: "Goal clear: utility / duplicate / staging" },
        { id: "method", label: "Method chosen: robots vs noindex vs 301/canonical" },
        { id: "crawl", label: "For noindex the URL is crawlable (not Disallow for no reason)" },
        { id: "cssjs", label: "robots doesn’t cut needed template CSS/JS" },
        { id: "stage", label: "Staging under password or noindex + reminder to remove" },
        { id: "gsc", label: "Check in Search Console / webmaster tools after deploy" },
        { id: "nocloak", label: "No JS cloaking or “hiding” content from bots" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "When to block from indexing",
        title: "Mini quiz: indexing",
        lead: "Two method checks.",
        questions: [
          {
            id: "z1",
            question: "Disallow in robots.txt first of all…",
            options: [
              "Guarantees removing a URL from the index in a minute",
              "Asks the robot not to crawl the URL",
              "Turns on HTTPS",
              "Replaces a semantic core",
            ],
            correct: 1,
            explain:
              "It’s a crawl rule; for noindex you need meta/X-Robots-Tag with robot access.",
          },
          {
            id: "z2",
            question: "Hiding different text from bots via JS is…",
            options: [
              "A recommended white-hat move",
              "Cloaking and a sanctions risk zone",
              "A canonical replacement",
              "Required for images",
            ],
            correct: 1,
            explain:
              "Content for people and robots should match; otherwise it’s manipulation.",
          },
        ],
      },
    ],
  },

  "chto-takoe-ssylka": {
    checklist: {
      afterTitleIncludes: "Anchors and bare links",
      title: "Link hygiene checklist",
      lead: "On your site and in materials.",
      items: [
        { id: "int", label: "Important URLs are tied by internal linking" },
        { id: "anc", label: "Anchors are readable, without keyword stuffing" },
        { id: "ext", label: "Outbound on purpose; sponsored/ugc where needed" },
        { id: "404", label: "Broken links checked after migrations" },
        { id: "abs", label: "Clear where absolute vs relative URLs are used" },
        { id: "buy", label: "No bet on bought anchor spam alone" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "How a link works in HTML",
        title: "Mini quiz: what a link is",
        lead: "Two basic-concept checks.",
        questions: [
          {
            id: "l1",
            question: "A link anchor is…",
            options: [
              "Only the server IP address",
              "The text (or substitute) between <a> tags that people click",
              "The robots.txt file",
              "A 301 status code",
            ],
            correct: 1,
            explain: "The anchor is the visible/clickable part of the link.",
          },
          {
            id: "l2",
            question: "Internal links first of all…",
            options: [
              "Always lower site quality scores",
              "Help navigation and crawl of important URLs",
              "Replace HTTPS",
              "Are only for bought SEO",
            ],
            correct: 1,
            explain: "Internal linking is a site map for people and robots.",
          },
        ],
      },
    ],
  },

  sklikivanie: {
    checklist: {
      afterTitleIncludes: "First measures",
      title: "Checklist if you suspect click fraud",
      lead: "Before the budget drains away.",
      items: [
        { id: "pause", label: "Campaign paused or hard daily cap set" },
        { id: "geo", label: "Geo, devices, and placements checked vs targeting" },
        { id: "utm", label: "Cabinet cross-checked with Analytics via UTM" },
        { id: "minus", label: "Suspicious placements / IPs excluded" },
        { id: "support", label: "Support got facts and screenshots, not only emotions" },
        { id: "offer", label: "Offer and landing checked in parallel" },
        { id: "alert", label: "Spend alerts enabled for the next days" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What click fraud is",
        title: "Mini quiz: click fraud",
        lead: "Two click-fraud checks.",
        questions: [
          {
            id: "sk1",
            question: "Low conversion after clicks most often…",
            options: [
              "Is always 100% proven click fraud",
              "May be a weak offer or landing, not only fraud",
              "Means you need auto-surfing",
              "Cancels Direct filters",
            ],
            correct: 1,
            explain: "Funnel and relevance first; fraud — by an anomaly combo.",
          },
          {
            id: "sk2",
            question: "On a sharp unexplained click spike, first…",
            options: [
              "Double the bids",
              "Limit spend and dig into reports",
              "Turn off HTTPS",
              "Buy bots in return",
            ],
            correct: 1,
            explain: "Stop the bleed first, then review and support.",
          },
        ],
      },
    ],
  },

  "kartinka-ssylka": {
    checklist: {
      afterTitleIncludes: "HTML: a + img wrapper",
      title: "Image-link checklist",
      lead: "Before publishing a banner.",
      items: [
        { id: "href", label: "href goes to the right URL (https, no typos)" },
        { id: "alt", label: "alt describes meaning / destination" },
        { id: "host", label: "File on your hosting/CDN, not a hotlink" },
        { id: "weight", label: "Image compressed for the real slot size" },
        { id: "lcp", label: "First-screen hero — no unnecessary lazy" },
        { id: "touch", label: "Tap target is comfortable on mobile" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why people use image links",
        title: "Mini quiz: image link",
        lead: "Two markup checks.",
        questions: [
          {
            id: "k1",
            question: "An image link in HTML is…",
            options: [
              "Only CSS without an a tag",
              "Usually <a href> around <img>",
              "A robots.txt replacement",
              "Required nofollow on the logo",
            ],
            correct: 1,
            explain: "The click comes from the link wrapper around the image.",
          },
          {
            id: "k2",
            question: "img width/height attributes…",
            options: [
              "Compress the file on disk by themselves",
              "Help reserve layout space; file weight is separate",
              "Turn off HTTPS",
              "Replace alt",
            ],
            correct: 1,
            explain: "Markup sizes ≠ optimizing file bytes.",
          },
        ],
      },
    ],
  },

  "optimizatsiya-konversii": {
    checklist: {
      afterTitleIncludes: "Hypotheses: forms, CTAs, speed, trust",
      title: "Conversion growth checklist",
      lead: "Before launching tests.",
      items: [
        { id: "goal", label: "Conversion goal fixed (lead/order/call)" },
        { id: "track", label: "Goals in Analytics/GA4 and UTM work" },
        { id: "offer", label: "Landing offer matches the ad/snippet" },
        { id: "form", label: "Form has a minimum of required fields" },
        { id: "speed", label: "Mobile speed and path to CTA checked" },
        { id: "trust", label: "Proof exists: reviews, cases, contacts" },
        { id: "one", label: "The test changes one hypothesis at a time" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What conversion is",
        title: "Mini quiz: conversion",
        lead: "Two CR checks.",
        questions: [
          {
            id: "c1",
            question: "5% conversion with 150 actions from 3000 visits is…",
            options: [
              "A formula error",
              "A correct CR calculation",
              "A TOP-1 guarantee",
              "Only a CTR metric",
            ],
            correct: 1,
            explain: "150 ÷ 3000 × 100% = 5%.",
          },
          {
            id: "c2",
            question: "With expensive traffic and a leaky funnel it’s wiser to…",
            options: [
              "Pour double budget right away",
              "Fix conversion and barriers first",
              "Turn off analytics",
              "Buy surfing visits",
            ],
            correct: 1,
            explain: "Otherwise you scale losses on every click.",
          },
        ],
      },
    ],
  },

  "seo-s-nulya": {
    checklist: {
      afterTitleIncludes: "A learning path without chaos",
      title: "SEO entry checklist",
      lead: "First month of learning.",
      items: [
        { id: "terms", label: "Core terms and scope of responsibility learned" },
        { id: "core", label: "Training core and structure draft collected" },
        { id: "tech", label: "Basic tech checklist completed" },
        { id: "site", label: "A training/own site exists for practice" },
        { id: "log", label: "Hypothesis and results journal is kept" },
        { id: "time", label: "Timelines clear: prep ≠ instant TOP" },
        { id: "white", label: "Grey schemes known as risk, not a plan" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Who an SEO specialist is",
        title: "Mini quiz: SEO from scratch",
        lead: "Two start checks.",
        questions: [
          {
            id: "n1",
            question: "Site prep in ~a month means…",
            options: [
              "Automatic TOP-10 on the core",
              "Ready for promotion; rankings grow separately over months",
              "Courses are no longer needed",
              "Tech doesn’t matter",
            ],
            correct: 1,
            explain: "Prep and reaching TOP are different stages by timeline.",
          },
          {
            id: "n2",
            question: "The best SEO learning accelerator is —",
            options: [
              "Only SERP memes",
              "Practice and review with people who already ship projects",
              "Buying links on day one",
              "Turning off Search Console",
            ],
            correct: 1,
            explain: "Theory without practice and feedback barely sticks.",
          },
        ],
      },
    ],
  },

  skrinshoty: {
    checklist: {
      afterTitleIncludes: "How to take one on a computer",
      title: "Screenshot checklist for a guide",
      lead: "Before sending to chat or an article.",
      items: [
        { id: "area", label: "Only the needed area captured" },
        { id: "noise", label: "Extra tabs and notifications closed" },
        { id: "pdn", label: "Personal data, passwords, and tokens hidden" },
        { id: "mark", label: "Arrow/frame at the action point" },
        { id: "read", label: "Text on the shot is readable on a phone" },
        { id: "fmt", label: "File saved (not only on the clipboard)" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why screenshots matter",
        title: "Mini quiz: screenshots",
        lead: "Two practical checks.",
        questions: [
          {
            id: "sc1",
            question: "A quick screen snip on modern Windows is —",
            options: [
              "Only Ctrl + Alt + Delete",
              "Win + Shift + S",
              "F1",
              "Only a reboot",
            ],
            correct: 1,
            explain: "Win + Shift + S is the built-in snip tool.",
          },
          {
            id: "sc2",
            question: "Before sending a shot to support it’s important to…",
            options: [
              "Leave the password in frame “for convenience”",
              "Hide personal data and secrets",
              "Capture the whole desktop with mail open",
              "Remove arrows",
            ],
            correct: 1,
            explain: "Personal data and tokens on a shot are a common leak.",
          },
        ],
      },
    ],
  },

  infografika: {
    checklist: {
      afterTitleIncludes: "How to start a layout",
      title: "Infographic checklist",
      lead: "Before exporting to PNG.",
      items: [
        { id: "focus", label: "One main takeaway on the layout" },
        { id: "data", label: "Numbers verified, source stated" },
        { id: "type", label: "Format (scheme/chart/timeline) fits the job" },
        { id: "mobile", label: "Readable on a narrow screen" },
        { id: "alt", label: "Site has alt and a text retelling" },
        { id: "weight", label: "File compressed without mushing numbers" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why infographics help",
        title: "Mini quiz: infographics",
        lead: "Two meaning checks.",
        questions: [
          {
            id: "ig1",
            question: "An infographic first of all should…",
            options: [
              "Be as colorful as possible",
              "Give a clear takeaway from the data",
              "Replace a semantic core",
              "Hide the number source",
            ],
            correct: 1,
            explain: "Meaning and hierarchy beat decoration.",
          },
          {
            id: "ig2",
            question: "For SEO, one image without text usually…",
            options: [
              "Is enough for TOP-1",
              "Isn’t enough: you need explaining copy and alt",
              "Needs only a watermark",
              "Needs only a purple gradient",
            ],
            correct: 1,
            explain: "The image supports the piece; it doesn’t replace it.",
          },
        ],
      },
    ],
  },

  lid: {
    checklist: {
      afterTitleIncludes: "How to find leads in practice",
      title: "Before scaling leads",
      lead: "Definition beats “count.”",
      items: [
        { id: "def", label: "What counts as a lead is written down" },
        { id: "optin", label: "Capture only with consent / opt-in" },
        { id: "crm", label: "Requests land in CRM with an owner" },
        { id: "speed", label: "Hot-lead response speed plan exists" },
        { id: "cpl", label: "CPL watched with qualified share" },
        { id: "nobuy", label: "No buying someone else’s lists" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: lead",
        lead: "Two checks.",
        questions: [
          {
            id: "lid1",
            question: "A lead is…",
            options: [
              "Any site visitor",
              "A potential customer with a contact/target action",
              "Only someone who paid",
              "A synonym for audience",
            ],
            correct: 1,
            explain: "Interest + a way to continue the dialogue.",
          },
          {
            id: "lid2",
            question: "Buying someone else’s “lead list”…",
            options: [
              "Is the best way to start",
              "Risks law and deal quality",
              "Replaces a CRM",
              "Guarantees SQL",
            ],
            correct: 1,
            explain: "Build your own list through consent.",
          },
        ],
      },
    ],
  },

  "lichnyy-brend": {
    checklist: {
      afterTitleIncludes: "Niche, image, one channel",
      title: "Personal brand start checklist",
      lead: "Before daily posting.",
      items: [
        { id: "niche", label: "Niche narrowed to real demand" },
        { id: "aud", label: "Audience portrait and pain list exist" },
        { id: "ch", label: "One flagship channel chosen" },
        { id: "mix", label: "Plan has personal / expert / selling" },
        { id: "offer", label: "Paid next step after value is clear" },
        { id: "kpi", label: "KPIs include dialogues/leads, not only followers" },
        { id: "pace", label: "Realistic cadence without burnout is set" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What a personal brand is",
        title: "Mini quiz: personal brand",
        lead: "Two strategy checks.",
        questions: [
          {
            id: "lb1",
            question: "At the start it’s better to run…",
            options: [
              "Every social network via cross-post at once",
              "One main channel",
              "Only fake followers",
              "Only offline with no content",
            ],
            correct: 1,
            explain: "Depth on one channel beats empty reach everywhere.",
          },
          {
            id: "lb2",
            question: "A niche that’s too broad usually…",
            options: [
              "Guarantees fast TOP",
              "Drowns in competition without differentiation",
              "Replaces a content plan",
              "Cancels metrics",
            ],
            correct: 1,
            explain: "You need the overlap of expertise and demand.",
          },
        ],
      },
    ],
  },

  redirekt: {
    checklist: {
      afterTitleIncludes: "When to set 301",
      title: "Redirect checklist",
      lead: "After server edits.",
      items: [
        { id: "type", label: "301 chosen for a permanent move" },
        { id: "one", label: "No A→B→C chains" },
        { id: "https", label: "http→https and www variant merged" },
        { id: "map", label: "Old URLs go to relevant new ones" },
        { id: "sitemap", label: "Sitemap on final addresses" },
        { id: "check", label: "Homepage and key sections checked (status code)" },
        { id: "can", label: "Clear where canonical is needed, not a redirect" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What a redirect is",
        title: "Mini quiz: redirect",
        lead: "Two code checks.",
        questions: [
          {
            id: "r1",
            question: "A permanent URL move in SEO is…",
            options: [
              "302",
              "301",
              "304",
              "Only JavaScript with no header",
            ],
            correct: 1,
            explain: "301 Moved Permanently — main tool for merges and migrations.",
          },
          {
            id: "r2",
            question: "A redirect chain…",
            options: [
              "Is always useful",
              "Slows things down and weakens signal — prefer one hop",
              "Replaces HTTPS",
              "Is required for canonical",
            ],
            correct: 1,
            explain: "Keep A→final without intermediate hops.",
          },
        ],
      },
    ],
  },

  "strayk-youtube": {
    checklist: {
      afterTitleIncludes: "Report, talks, appeal",
      title: "Strike checklist",
      lead: "First steps in Studio.",
      items: [
        { id: "read", label: "Reason read in channel status" },
        { id: "type", label: "Type clear: Community Guidelines vs Copyright" },
        { id: "fix", label: "Content fixed or removed on a real violation" },
        { id: "proof", label: "Appeal proof gathered (if it’s an error)" },
        { id: "rights", label: "Music/video rights checked on new uploads" },
        { id: "mirror", label: "No mirror channels to dodge a ban" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What a strike is",
        title: "Mini quiz: YouTube strike",
        lead: "Two sanction-type checks.",
        questions: [
          {
            id: "yt1",
            question: "A Content ID claim and a Community Guidelines strike…",
            options: [
              "Are always the same thing",
              "Are different mechanisms: rights vs community policy",
              "Both only turn off comments",
              "Only apply to Shorts",
            ],
            correct: 1,
            explain:
              "Don’t confuse Content ID claims/monetization with community strikes.",
          },
          {
            id: "yt2",
            question: "On a false claim a sensible step is —",
            options: [
              "Create 10 new channels at once",
              "Appeal/counter-notification with proof",
              "Ignore Studio",
              "Re-upload the same pirated video",
            ],
            correct: 1,
            explain: "Official process + proof beats mirror channels.",
          },
        ],
      },
    ],
  },

  "menedzher-internet-magazina": {
    checklist: {
      afterTitleIncludes: "Daily duties",
      title: "Store manager shift checklist",
      lead: "Before closing the day.",
      items: [
        { id: "inbox", label: "All new requests in CRM with a status" },
        { id: "pay", label: "Payments matched to order statuses" },
        { id: "ship", label: "Handed to pick/delivery with no hangers" },
        { id: "sla", label: "Clients got a clear reply/delivery window" },
        { id: "esc", label: "Misses escalated, not hidden" },
        { id: "rep", label: "Short orders/cancellations report ready" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "The role in short",
        title: "Mini quiz: store manager",
        lead: "Two role checks.",
        questions: [
          {
            id: "m1",
            question: "The main ops job of a store manager is —",
            options: [
              "Only design a logo",
              "Take a request through to a paid and delivered order",
              "Only write SEO copy",
              "Turn off analytics",
            ],
            correct: 1,
            explain: "Service and the deal are the core of the role.",
          },
          {
            id: "m2",
            question: "In a small team the manager often…",
            options: [
              "Gets fewer tasks than in a large one",
              "Gets adjacent roles — boundaries must be fixed",
              "Doesn’t need CRM",
              "Doesn’t need to answer clients",
            ],
            correct: 1,
            explain: "Otherwise burnout and service gaps.",
          },
        ],
      },
    ],
  },

  "rassylka-vk": {
    checklist: {
      afterTitleIncludes: "Official path: community widget",
      title: "VK broadcast checklist",
      lead: "Before the first mass send.",
      items: [
        { id: "opt", label: "Only subscribers with consent (opt-in)" },
        { id: "app", label: "App from the VK catalog, not a grey exe" },
        { id: "msg", label: "Community messages enabled" },
        { id: "btn", label: "Page has a broadcast subscribe button" },
        { id: "test", label: "Self-test: copy and links OK" },
        { id: "freq", label: "Frequency moderate, rubric plan exists" },
        { id: "stats", label: "Watch unsubscribes and reports after a send" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why a community needs broadcasts",
        title: "Mini quiz: VK broadcast",
        lead: "Two rules checks.",
        questions: [
          {
            id: "rv1",
            question: "Cold mass template DMs to friends…",
            options: [
              "Are the officially best growth method",
              "Often lead to reports and limits",
              "Replace a content plan",
              "Are required for HTTPS",
            ],
            correct: 1,
            explain: "Community opt-in is safer than cold spam.",
          },
          {
            id: "rv2",
            question: "A legal broadcast start is…",
            options: [
              "Any downloaded “sender” with a ban guarantee",
              "A catalog widget + community subscribe",
              "Faking dialogue volume",
              "Turning stats off",
            ],
            correct: 1,
            explain: "Official apps and audience consent.",
          },
        ],
      },
    ],
  },

  "viralnyy-ohvat-vk": {
    checklist: {
      afterTitleIncludes: "How to amplify spread",
      title: "Viral post checklist",
      lead: "Before publishing.",
      items: [
        { id: "hook", label: "Benefit/emotion reads in 3 seconds" },
        { id: "own", label: "Own visual or unique angle, not a stock template" },
        { id: "share", label: "A reason to save or forward exists" },
        { id: "cta", label: "Soft CTA without shouting" },
        { id: "tone", label: "Provocation (if any) doesn’t hurt reputation" },
        { id: "collab", label: "Collab/seeding plan ready for a strong post" },
        { id: "measure", label: "After a day, check viral reach and reposts" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What viral reach counts",
        title: "Mini quiz: viral reach",
        lead: "Two metric checks.",
        questions: [
          {
            id: "vv1",
            question: "Viral reach is first of all about…",
            options: [
              "Only ad-cabinet impressions",
              "Views beyond “just followers” via distribution",
              "Admin count only",
              "Site speed",
            ],
            correct: 1,
            explain: "It’s the outsider audience via reposts/recommendations.",
          },
          {
            id: "vv2",
            question: "Betting only on shock content…",
            options: [
              "Is always the best SMM strategy",
              "Can buy reach at the cost of reputation",
              "Replaces a semantic core",
              "Is required for stats",
            ],
            correct: 1,
            explain: "Measure beats a short spike.",
          },
        ],
      },
    ],
  },

  "url-adres": {
    checklist: {
      afterTitleIncludes: "How to write a clear address",
      title: "URL checklist",
      lead: "Before launch or address changes.",
      items: [
        { id: "https", label: "Primary mirror on HTTPS" },
        { id: "www", label: "www / non-www merged with 301" },
        { id: "chpu", label: "Human-readable paths, no ?id=" },
        { id: "hyphen", label: "Hyphens, no mixed-case chaos" },
        { id: "short", label: "Path short and matching page meaning" },
        { id: "canon", label: "Canonical / no filter duplicates in the index" },
        { id: "redir", label: "URL change only with redirect from the old one" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "How URL affects SEO",
        title: "Mini quiz: URL and SEO",
        lead: "Two address checks.",
        questions: [
          {
            id: "ua1",
            question: "A human-readable URL is…",
            options: [
              "Only a domain with no path",
              "A readable path in words instead of an id in params",
              "A required homepage pop-up",
              "An SSL replacement",
            ],
            correct: 1,
            explain: "Readable URLs help UX and the snippet.",
          },
          {
            id: "ua2",
            question: "A keyword in the URL by itself…",
            options: [
              "Guarantees TOP-10 in a month",
              "Is a weak signal; content and tech matter more",
              "Replaces a semantic core",
              "Is only needed for FTP",
            ],
            correct: 1,
            explain: "The address helps, but doesn’t replace promotion.",
          },
        ],
      },
    ],
  },

  "privetstvie-sayta": {
    checklist: {
      afterTitleIncludes: "Good-tone rules",
      title: "First-screen checklist",
      lead: "Before publishing the homepage.",
      items: [
        { id: "offer", label: "In 3 seconds it’s clear how the site helps" },
        { id: "cta", label: "One main CTA" },
        { id: "facts", label: "Facts/benefit exist, not only “quality”" },
        { id: "popup", label: "Popups don’t cover content immediately" },
        { id: "chat", label: "Chat is passive or uses a soft trigger" },
        { id: "tone", label: "Tone matches the niche" },
        { id: "seo", label: "SEO sheet is not instead of the hero" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Greeting in chat",
        title: "Mini quiz: greeting",
        lead: "Two UX checks.",
        questions: [
          {
            id: "ps1",
            question: "Auto-opening chat after 1 second…",
            options: [
              "Is always best practice",
              "Often annoys; a passive button is calmer",
              "Is required for SEO",
              "Replaces the lead form forever",
            ],
            correct: 1,
            explain: "Let people look around unless there’s a strong reason.",
          },
          {
            id: "ps2",
            question: "A strong first screen first of all gives…",
            options: [
              "Keyword density only",
              "A clear offer and next step",
              "A required pop-under",
              "Hidden prices",
            ],
            correct: 1,
            explain: "Clarity and CTA beat a formal “hello.”",
          },
        ],
      },
    ],
  },

  "top-instagram": {
    checklist: {
      afterTitleIncludes: "What recommendation visibility gives you",
      title: "Instagram visibility checklist",
      lead: "Before a post aimed at recommendations.",
      items: [
        { id: "offer", label: "Profile and offer are clear on the first screen" },
        { id: "hook", label: "Visual and first line hook in 1–2 seconds" },
        { id: "tags", label: "Tags match the topic — no spam dozen" },
        { id: "save", label: "There’s a reason to save or reply" },
        { id: "geo", label: "Geo added if the business is local" },
        { id: "engage", label: "Ready to reply to comments in the first hours" },
        { id: "no-bots", label: "No plan to buy likes/comments" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Fake engagement and why it hurts",
        title: "Mini quiz: Instagram TOP",
        lead: "Two visibility checks.",
        questions: [
          {
            id: "ti1",
            question: "A fixed like count “for TOP”…",
            options: [
              "Is always exactly 1000",
              "Doesn’t exist: niche, tag, and live reactions matter",
              "Is only geolocation",
              "Is only caption length",
            ],
            correct: 1,
            explain: "The threshold is relative; engagement quality matters more.",
          },
          {
            id: "ti2",
            question: "A sharp fake-like spike…",
            options: [
              "Is the official best way into recommendations",
              "Risks anti-fraud and trust loss",
              "Is required for Stories",
              "Replaces a content plan",
            ],
            correct: 1,
            explain: "Live saves and comments beat bots.",
          },
        ],
      },
    ],
  },

  "telegram-kanal": {
    checklist: {
      afterTitleIncludes: "Traffic and advertising",
      title: "Telegram channel launch checklist",
      lead: "Before the announce and ad buys.",
      items: [
        { id: "topic", label: "Topic and tone are fixed" },
        { id: "avatar", label: "Avatar reads in a small circle" },
        { id: "desc", label: "Description + contact in the header" },
        { id: "posts", label: "There are 5–10 starter posts" },
        { id: "schedule", label: "Publishing slots based on stats" },
        { id: "traffic", label: "Plan for external traffic sources" },
        { id: "ads", label: "Before ads — check ER and subscriber spikes" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Content, headlines, and rhythm",
        title: "Mini quiz: Telegram channel",
        lead: "Two launch checks.",
        questions: [
          {
            id: "tk1",
            question: "Most Telegram subscriber growth usually comes…",
            options: [
              "Only from in-app channel search",
              "From external sources and ads in related channels",
              "Only from fake growth",
              "Automatically after creating an @username",
            ],
            correct: 1,
            explain: "In-app discovery is weak — you need outside traffic.",
          },
          {
            id: "tk2",
            question: "Clickbait without substance…",
            options: [
              "Is always the best headline strategy",
              "Burns trust and hurts retention",
              "Is required for Telegraph",
              "Replaces the avatar",
            ],
            correct: 1,
            explain: "A calm headline plus real value works better.",
          },
        ],
      },
    ],
  },

  "optimizatsiya-stranitsy": {
    checklist: {
      afterTitleIncludes: "URL and images",
      title: "On-page checklist",
      lead: "Before publishing a landing for a query.",
      items: [
        { id: "intent", label: "One main intent per URL" },
        { id: "title", label: "Title with the topic early — no keyword sheet" },
        { id: "h1", label: "One H1, different from Title" },
        { id: "text", label: "Copy answers the query without stuffing" },
        { id: "desc", label: "Useful description with a CTA" },
        { id: "links", label: "Internal links to/from the page" },
        { id: "url", label: "Readable URL + alt on key images" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Title, H1, and subheads",
        title: "Mini quiz: on-page",
        lead: "Two page-optimization checks.",
        questions: [
          {
            id: "os1",
            question: "Title and H1…",
            options: [
              "Must be word-for-word identical",
              "Share one meaning, preferably different wording",
              "Are only needed on the homepage",
              "Replace the semantic core",
            ],
            correct: 1,
            explain: "Shared topic — yes; pasting Title into H1 is not required.",
          },
          {
            id: "os2",
            question: "Must the keyword be in the first and last paragraph?",
            options: [
              "Yes, or the page won’t rank",
              "No hard rule; a clear topic without stuffing matters more",
              "Only in image alt text",
              "Only in the URL",
            ],
            correct: 1,
            explain: "The “start+end” myth leads to unnatural copy.",
          },
        ],
      },
    ],
  },

  telegram: {
    checklist: {
      afterTitleIncludes: "Channels, bots, and business",
      title: "Checklist: Telegram for business",
      lead: "Before launching a channel or bot.",
      items: [
        { id: "goal", label: "Goal is clear: news / support / warm-up" },
        { id: "aud", label: "The audience actually uses Telegram" },
        { id: "sec", label: "Two-factor auth and session control" },
        { id: "channel", label: "If it’s a channel — rubrics and starter posts exist" },
        { id: "bot", label: "The bot solves a job, not “bot for a bot’s sake”" },
        { id: "traffic", label: "Traffic plan from the site and other channels" },
        { id: "legal", label: "Legal status and platform policies are considered" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Comparison with other messengers",
        title: "Mini quiz: Telegram",
        lead: "Two platform checks.",
        questions: [
          {
            id: "tg1",
            question: "A Telegram channel is first of all…",
            options: [
              "The same as a one-to-one secret chat",
              "An author feed for subscribers",
              "Only for fake growth",
              "A website SSL replacement",
            ],
            correct: 1,
            explain: "A channel is media/broadcast, not a private secret dialogue.",
          },
          {
            id: "tg2",
            question: "Channel subscriber growth usually…",
            options: [
              "Happens automatically from in-app search",
              "Needs external sources and advertising",
              "Is guaranteed after creating an @username",
              "Is impossible without WhatsApp",
            ],
            correct: 1,
            explain: "In-app discovery is weak — you need outside traffic.",
          },
        ],
      },
    ],
  },

  "shablon-instagram": {
    checklist: {
      afterTitleIncludes: "Tools and ready mockups",
      title: "Instagram template checklist",
      lead: "Before you lock the brand kit.",
      items: [
        { id: "size", label: "Canvas size matches the current post format" },
        { id: "safe", label: "Margins: text and faces aren’t cropped" },
        { id: "palette", label: "2–3 palette colors are fixed" },
        { id: "fonts", label: "No more than 1–2 font pairs" },
        { id: "preset", label: "One color/filter preset for the series" },
        { id: "grid", label: "A 9-post grid preview looks coherent" },
        { id: "match", label: "Aligned with avatar and highlights" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Feed layout schemes",
        title: "Mini quiz: Instagram templates",
        lead: "Two visual checks.",
        questions: [
          {
            id: "si1",
            question: "A post template is first of all…",
            options: [
              "A content-plan replacement",
              "A size, margin, and style frame for a publish series",
              "A required checkerboard pattern",
              "Only for Stories",
            ],
            correct: 1,
            explain: "The mockup speeds up design; it doesn’t decide post topics.",
          },
          {
            id: "si2",
            question: "Sharply changing the feed style every week…",
            options: [
              "Is always good for the algorithm",
              "Often breaks brand recognition",
              "Is required for Canva",
              "Is needed instead of highlight covers",
            ],
            correct: 1,
            explain: "Palette evolution beats a new brand every row.",
          },
        ],
      },
    ],
  },

  "tehnicheskiy-seo-audit": {
    checklist: {
      afterTitleIncludes: "Technical (platform)",
      title: "Technical audit checklist",
      lead: "Express loop before a deep report. Progress saves in the browser.",
      items: [
        { id: "index", label: "Check homepage and key services indexing in webmaster tools" },
        { id: "status", label: "Crawl for 4xx/5xx and redirect chains" },
        { id: "robots", label: "Align robots.txt and XML sitemap" },
        { id: "dupes", label: "Find HTTP/HTTPS, WWW, and param duplicates without canonical" },
        { id: "cwv", label: "Measure speed / CWV on mobile for main URLs" },
        { id: "mobile", label: "Check mobile layout of key landings" },
        { id: "https", label: "Check HTTPS and mixed content" },
        { id: "prio", label: "Build a fix list prioritized critical → later" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Audit types",
        title: "Mini quiz: audit types",
        lead: "Three questions — what counts as tech.",
        questions: [
          {
            id: "t1",
            question: "What belongs to a technical audit first?",
            options: [
              "Only writing sales copy",
              "Indexing, status codes, speed, robots/sitemap",
              "Only banner design",
              "Only buying links",
            ],
            correct: 1,
            explain: "Tech is crawl, page delivery, and stability. Copy and links are neighboring loops.",
          },
          {
            id: "t2",
            question: "An audit without implementing fixes…",
            options: [
              "Is enough for ranking growth",
              "Stays a report with no effect",
              "Replaces the semantic core",
              "Is only needed for paid search",
            ],
            correct: 1,
            explain: "Audit value is in the fixes. A PDF alone doesn’t lift traffic.",
          },
          {
            id: "t3",
            question: "If there’s no budget for fixes, an audit…",
            options: [
              "Is still mandatory “for show”",
              "Is often smarter to postpone",
              "Replaces building a new site",
              "Is only needed for SMM",
            ],
            correct: 1,
            explain: "Without budget to fix critical errors, a deep audit is of little use.",
          },
        ],
      },
    ],
  },

  "statya-vk": {
    checklist: {
      afterTitleIncludes: "Publishing on the wall and in a community",
      title: "VK article checklist",
      lead: "Before you hit Publish.",
      items: [
        { id: "title", label: "Title is clear in the teaser" },
        { id: "cover", label: "Cover set or auto-pick checked" },
        { id: "fmt", label: "Subheads and lists — not a wall of text" },
        { id: "links", label: "In-body links open" },
        { id: "place", label: "Community / wall placement chosen" },
        { id: "preview", label: "Wall teaser preview looks OK" },
        { id: "stats", label: "Plan: review stats after a day" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Editor: text and media",
        title: "Mini quiz: VK article",
        lead: "Two format checks.",
        questions: [
          {
            id: "sv1",
            question: "A VK article beats a regular post when…",
            options: [
              "You only need an emoji and one line",
              "The piece is long: guide, case, how-to",
              "You only need fake engagement",
              "There’s no community",
            ],
            correct: 1,
            explain: "Long-form is easier in the articles editor.",
          },
          {
            id: "sv2",
            question: "An article cover…",
            options: [
              "Is always forbidden",
              "Helps the wall teaser get clicks",
              "Replaces the title",
              "Is only for Stories",
            ],
            correct: 1,
            explain: "The teaser banner raises the chance people open the text.",
          },
        ],
      },
    ],
  },

  "logi-servera": {
    checklist: {
      afterTitleIncludes: "Crawl errors and what to fix",
      title: "Log review checklist",
      lead: "After exporting an access log for a period.",
      items: [
        { id: "slice", label: "Take a week–month slice" },
        { id: "ua", label: "Filter Googlebot / YandexBot" },
        { id: "top", label: "Top URLs by bot hits" },
        { id: "codes", label: "Share of 4xx/5xx for crawlers" },
        { id: "params", label: "Parameters and duplicates with ?" },
        { id: "fix", label: "Fix top broken internal links" },
        { id: "recheck", label: "Re-check a slice in 2–4 weeks" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Crawl budget and priorities",
        title: "Mini quiz: logs and crawlers",
        lead: "Two crawl checks.",
        questions: [
          {
            id: "ls1",
            question: "An access log first of all shows…",
            options: [
              "Exact TOP-10 positions",
              "Real HTTP requests to the server, including bots",
              "Only form conversion",
              "The hosting password",
            ],
            correct: 1,
            explain: "It’s a request journal, not a rankings report.",
          },
          {
            id: "ls2",
            question: "Parameter duplicates for crawl budget…",
            options: [
              "Are always helpful",
              "Often waste crawler attention",
              "Replace the sitemap",
              "Are only needed for SSL",
            ],
            correct: 1,
            explain: "Junk URLs pull crawl away from important pages.",
          },
        ],
      },
    ],
  },

  "svyazka-instagram-facebook": {
    checklist: {
      afterTitleIncludes: "How to unlink",
      title: "Instagram–Facebook link checklist",
      lead: "Before and after working in Accounts Center.",
      items: [
        { id: "goal", label: "Goal is clear: ads / Page / pro mode" },
        { id: "2fa", label: "Two-factor auth and current passwords" },
        { id: "page", label: "The right Facebook Page is ready" },
        { id: "center", label: "Linking via official Accounts Center" },
        { id: "check", label: "Contacts and selected Page verified" },
        { id: "ads", label: "Ads Manager access if needed" },
        { id: "unlink", label: "You know where to unlink when changing Page" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why link accounts",
        title: "Mini quiz: IG and FB link",
        lead: "Two expectation checks.",
        questions: [
          {
            id: "sf1",
            question: "Linking accounts by itself…",
            options: [
              "Guarantees reach growth",
              "Is a handy ecosystem tools loop — not ER magic",
              "Replaces two-factor auth",
              "Is required for every personal blog",
            ],
            correct: 1,
            explain: "It’s an access setup, not auto-promotion.",
          },
          {
            id: "sf2",
            question: "Unlinking via Accounts Center is needed if…",
            options: [
              "You want to change Page or split profiles",
              "You need a new SSL on the site",
              "The content plan ended",
              "Only for Stories",
            ],
            correct: 0,
            explain: "Changing Page and split scenarios are typical reasons.",
          },
        ],
      },
    ],
  },

  "oblozhka-vk": {
    checklist: {
      afterTitleIncludes: "How to upload in VK",
      title: "Before uploading a VK cover",
      lead: "Meaning beats a pixel grid from an old guide.",
      items: [
        { id: "size", label: "Size matched to current VK Help" },
        { id: "safe", label: "Offer and logo in the safe zone" },
        { id: "mobile", label: "Readability checked on a phone" },
        { id: "rights", label: "Photo/illustration rights covered" },
        { id: "avatar", label: "Style aligned with the avatar" },
        { id: "src", label: "Mockup source file saved" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: VK cover",
        lead: "Two questions.",
        questions: [
          {
            id: "ov1",
            question: "A tiny price list across the whole header…",
            options: [
              "Is required for a store",
              "Usually doesn’t read on mobile — better menu and posts",
              "Guarantees reach",
              "Replaces the community description",
            ],
            correct: 1,
            explain: "The cover needs one idea.",
          },
          {
            id: "ov2",
            question: "A Google Image Search picture without a license…",
            options: [
              "Is normal for publics",
              "Risks complaints — you need your own rights",
              "Is a VK requirement",
              "Is better than animation",
            ],
            correct: 1,
            explain: "Rights beat “it’s free.”",
          },
        ],
      },
    ],
  },

  "blokirovka-instagram": {
    checklist: {
      afterTitleIncludes: "How to lower lockout risk",
      title: "Checklist for an Instagram restriction",
      lead: "If you see a ban or “action blocked.”",
      items: [
        { id: "screen", label: "Screenshot of the notice and the date" },
        { id: "type", label: "Type is clear: action limit / full lockout" },
        { id: "pass", label: "If login works — sessions and password checked" },
        { id: "official", label: "Appeal only via official support" },
        { id: "honest", label: "Request states the facts — no fake “hack” story" },
        { id: "wait", label: "Buffer time for a support reply" },
        { id: "hygiene", label: "After recovery — 2FA and no bots" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Temporary action limit",
        title: "Mini quiz: Instagram lockout",
        lead: "Two restriction checks.",
        questions: [
          {
            id: "bi1",
            question: "“Action blocked” most often…",
            options: [
              "Deletes the account forever",
              "Is a temporary anti-spam limit after an activity spike",
              "Means only a forgotten password",
              "Is fixed by buying likes",
            ],
            correct: 1,
            explain: "Slow down and wait; bots only make it worse.",
          },
          {
            id: "bi2",
            question: "A “guaranteed unlock” from middlemen…",
            options: [
              "Is the official safe path",
              "Is a fraud risk; use official forms",
              "Is required for a business account",
              "Replaces two-factor auth",
            ],
            correct: 1,
            explain: "Only the platform’s official support.",
          },
        ],
      },
    ],
  },

  "otchet-klientu": {
    checklist: {
      afterTitleIncludes: "8–9. Details and business context",
      title: "Client report checklist",
      lead: "Before sending an ad report.",
      items: [
        { id: "goals", label: "Goals and money outcome up front" },
        { id: "period", label: "Period and channels stated clearly" },
        { id: "same", label: "KPIs match the previous report" },
        { id: "summary", label: "One-page summary / dashboard exists" },
        { id: "glossary", label: "Hard terms are explained" },
        { id: "offline", label: "Calls/offline counted if they matter" },
        { id: "next", label: "Next steps for the next period exist" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "1–3. Honesty, structure, and goals",
        title: "Mini quiz: client report",
        lead: "Two presentation checks.",
        questions: [
          {
            id: "ok1",
            question: "At the start of a client report, what matters more…",
            options: [
              "Only CTR and impressions",
              "Business goals and money impact, then details",
              "A full keyword list with no summary",
              "An account settings screenshot with no takeaways",
            ],
            correct: 1,
            explain: "Business first, then metric breakdown.",
          },
          {
            id: "ok2",
            question: "Changing the KPI set every report…",
            options: [
              "Is always good for “freshness”",
              "Confuses the client; keep one system",
              "Is required for Direct",
              "Replaces a glossary",
            ],
            correct: 1,
            explain: "Metric consistency builds trust.",
          },
        ],
      },
    ],
  },

  "ishodnyy-kod": {
    checklist: {
      afterTitleIncludes: "What to check in HTML",
      title: "Source inspection checklist",
      lead: "A quick page check in DevTools.",
      items: [
        { id: "source", label: "View Source or Elements is open" },
        { id: "title", label: "title and one meaningful h1 found" },
        { id: "meta", label: "description / robots / canonical checked" },
        { id: "links", label: "Key links and img alt are in place" },
        { id: "console", label: "Console has no critical JS errors" },
        { id: "https", label: "Security: certificate OK (if needed)" },
        { id: "mix", label: "No obvious HTTP/HTTPS mix on resources" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "How to open code in the browser",
        title: "Mini quiz: source code",
        lead: "Two inspection checks.",
        questions: [
          {
            id: "ik1",
            question: "Edits via Inspect in your browser…",
            options: [
              "Save to the server for everyone immediately",
              "Are local: they won’t reach hosting by themselves",
              "Replace the CMS",
              "Are required for SSL",
            ],
            correct: 1,
            explain: "DevTools only changes your view of the page.",
          },
          {
            id: "ik2",
            question: "Meta description usually lives in…",
            options: [
              "CSS only",
              "The HTML head block",
              "robots.txt",
              "The sitemap only",
            ],
            correct: 1,
            explain: "Utility meta tags sit in the document head.",
          },
        ],
      },
    ],
  },

  "obnovlenie-kontenta": {
    checklist: {
      afterTitleIncludes: "Seeding and monitoring",
      title: "Article refresh checklist",
      lead: "Before publishing a refresh of an old URL.",
      items: [
        { id: "pick", label: "URL picked by impressions/position/conversion" },
        { id: "serp", label: "Compared with today’s TOP-10" },
        { id: "text", label: "Copy and facts updated" },
        { id: "ux", label: "Structure is readable (H2, lists)" },
        { id: "tech", label: "Broken links, alt, image weight OK" },
        { id: "promo", label: "Seeding / internal-link plan exists" },
        { id: "measure", label: "Before/after metrics logged" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why refresh instead of only writing new",
        title: "Mini quiz: content refresh",
        lead: "Two strategy checks.",
        questions: [
          {
            id: "okc1",
            question: "Doubling traffic in 3 months…",
            options: [
              "Is a guarantee for any blog",
              "Can be a case with a strong base — not the norm for everyone",
              "Equals commercial-core TOP rankings",
              "Is achieved only by changing the date with no edits",
            ],
            correct: 1,
            explain: "Cases aren’t a timeline promise for every site.",
          },
          {
            id: "okc2",
            question: "Best refresh candidates are…",
            options: [
              "Only empty URLs with no impressions",
              "Pages with visibility but outside the top / outdated facts",
              "Any post older than a week",
              "Only the homepage",
            ],
            correct: 1,
            explain: "Demand plus a head start — cheaper to strengthen than abandon.",
          },
        ],
      },
    ],
  },

  "onlayn-oplata": {
    checklist: {
      afterTitleIncludes: "Fees, cash register, and common mistakes",
      title: "Online payment checklist",
      lead: "Before launching payment acceptance.",
      items: [
        { id: "model", label: "Model chosen: aggregator or acquiring" },
        { id: "methods", label: "Payment methods match the audience" },
        { id: "https", label: "Site is on HTTPS" },
        { id: "test", label: "Success/fail test payments passed" },
        { id: "callback", label: "Order status notifications work" },
        { id: "kkt", label: "54-FZ / cash-register scheme agreed" },
        { id: "refund", label: "Refund scenario is clear" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Gateway, system, aggregator, acquirer",
        title: "Mini quiz: online payments",
        lead: "Two model checks.",
        questions: [
          {
            id: "oo1",
            question: "A payment aggregator first of all gives…",
            options: [
              "A zero-fee guarantee",
              "One contract and a set of methods / modules",
              "An always-on cash-register replacement",
              "CVV storage on your server",
            ],
            correct: 1,
            explain: "Handy start; register and PCI are separate loops.",
          },
          {
            id: "oo2",
            question: "A payment service by itself…",
            options: [
              "Always covers 54-FZ without a register",
              "Doesn’t replace fiscalization when it’s required",
              "Bans SBP",
              "Is only needed for SMS pay",
            ],
            correct: 1,
            explain: "Receipts are a cash-register and business-scheme question.",
          },
        ],
      },
    ],
  },

  "istoriya-poiska-instagram": {
    checklist: {
      afterTitleIncludes: "Privacy is wider than one button",
      title: "Before clearing search history",
      lead: "The settings button isn’t all of security.",
      items: [
        { id: "why", label: "Clear reason is clear (shared screen / handing over phone)" },
        { id: "menu", label: "Found search history in current settings" },
        { id: "check", label: "Checked the search field after clearing" },
        { id: "sessions", label: "If someone else had access — reviewed active sessions" },
        { id: "2fa", label: "2FA and password are in order" },
        { id: "nosoft", label: "No third-party “cleaners” with your Instagram password" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: search history",
        lead: "Two questions.",
        questions: [
          {
            id: "ip1",
            question: "Clearing search history…",
            options: [
              "Deletes all follows",
              "Removes recent queries without touching follows and Direct",
              "Resets the algorithm forever",
              "Is required every hour",
            ],
            correct: 1,
            explain: "It’s a search log, not the whole account.",
          },
          {
            id: "ip2",
            question: "The main risk of “showing” recent search…",
            options: [
              "SEO only",
              "Someone else accessing an unlocked phone / shared session",
              "A guaranteed Meta ban",
              "Losing likes",
            ],
            correct: 1,
            explain: "Device privacy.",
          },
        ],
      },
    ],
  },

  "pochtovyy-servis": {
    checklist: {
      afterTitleIncludes: "Temporary mail and security",
      title: "Mailbox checklist",
      lead: "When choosing or auditing your main email.",
      items: [
        { id: "goal", label: "Task is clear: personal / work / one-off" },
        { id: "2fa", label: "Two-factor auth is on" },
        { id: "backup", label: "Backup email or phone exists" },
        { id: "spam", label: "Filters and false spam checked" },
        { id: "apps", label: "Extra apps with access revoked" },
        { id: "temp", label: "Temporary mail not used for banks or gov services" },
        { id: "brand", label: "For a company — plan mail on your domain" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Permanent or temporary inbox",
        title: "Mini quiz: email service",
        lead: "Two choice checks.",
        questions: [
          {
            id: "ps1",
            question: "Temporary mail fits…",
            options: [
              "The main bank login",
              "A one-off signup with no lasting inbox value",
              "The only channel for client password recovery",
              "Corporate correspondence under a contract",
            ],
            correct: 1,
            explain: "A disposable address disappears — don’t put anything important there.",
          },
          {
            id: "ps2",
            question: "Minimum protection for a permanent inbox…",
            options: [
              "Only a pretty theme",
              "2FA, recovery backup, caution with phishing",
              "Required refusal of filters",
              "Password published in desktop sticky notes",
            ],
            correct: 1,
            explain: "Mail is the key to many services.",
          },
        ],
      },
    ],
  },

  snippet: {
    checklist: {
      afterTitleIncludes: "Schema.org and JSON-LD",
      title: "Snippet checklist",
      lead: "Before checking in the SERP and a validator.",
      items: [
        { id: "title", label: "Title is unique with benefit early" },
        { id: "desc", label: "Description is useful, not stuffed" },
        { id: "match", label: "Snippet promise = page content" },
        { id: "crumbs", label: "On-site breadcrumbs work" },
        { id: "schema", label: "Schema type matches the real page" },
        { id: "valid", label: "Run through a rich results test" },
        { id: "console", label: "Watch enhanced-result reports" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Rich results (extended snippets)",
        title: "Mini quiz: snippet",
        lead: "Two SERP checks.",
        questions: [
          {
            id: "sn1",
            question: "Meta description…",
            options: [
              "Always appears word-for-word in the snippet",
              "Is a hint; the engine may take another fragment",
              "Is the main TOP-1 factor",
              "Replaces Title",
            ],
            correct: 1,
            explain: "Description affects CTR but doesn’t guarantee SERP text.",
          },
          {
            id: "sn2",
            question: "JSON-LD for rich results…",
            options: [
              "Guarantees TOP in a week",
              "Helps extensions with valid markup and type rules",
              "Is only needed in robots.txt",
              "Is banned for products",
            ],
            correct: 1,
            explain: "Markup is a condition, not a ranking guarantee.",
          },
        ],
      },
    ],
  },

  "kategorii-internet-magazina": {
    checklist: {
      afterTitleIncludes: "Category content and risks",
      title: "Store category checklist",
      lead: "Before launching or auditing a section.",
      items: [
        { id: "demand", label: "Demand / query cluster exists" },
        { id: "sku", label: "Assortment is enough to choose from" },
        { id: "intent", label: "Intent doesn’t duplicate a neighboring URL" },
        { id: "meta", label: "Title / H1 / URL are aligned" },
        { id: "text", label: "Useful copy without hidden stuffing" },
        { id: "filters", label: "Filters don’t spawn index junk" },
        { id: "links", label: "Links from parent and product cards" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "When to create a new category",
        title: "Mini quiz: store categories",
        lead: "Two section checks.",
        questions: [
          {
            id: "ki1",
            question: "A new category “for a keyword” with 2–3 products…",
            options: [
              "Is always best SEO practice",
              "Is often weak: better a filter or more assortment first",
              "Is required for the homepage",
              "Replaces the semantic core",
            ],
            correct: 1,
            explain: "A thin section rarely beats strong listings.",
          },
          {
            id: "ki2",
            question: "Cannibalization is…",
            options: [
              "Only about site speed",
              "Several URLs fighting for one query",
              "A required rich snippet",
              "A synonym for 301",
            ],
            correct: 1,
            explain: "Split intents or merge duplicates.",
          },
        ],
      },
    ],
  },

  "yandeks-dzen": {
    checklist: {
      afterTitleIncludes: "Monetization: expectations without myths",
      title: "Zen channel checklist",
      lead: "Before counting on the partner program.",
      items: [
        { id: "niche", label: "Niche and rubrics are fixed" },
        { id: "plan", label: "Topic backlog for 2–4 weeks" },
        { id: "rules", label: "Platform rules are read" },
        { id: "unique", label: "Content is yours / with added value" },
        { id: "stats", label: "Watch read-through, not only views" },
        { id: "terms", label: "Current monetization terms checked in the dashboard" },
        { id: "links", label: "Site links stay within the rules" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Rules and publication quality",
        title: "Mini quiz: Zen",
        lead: "Two author checks.",
        questions: [
          {
            id: "dz1",
            question: "Monetization thresholds from 2021 guides…",
            options: [
              "Are always current",
              "Must be checked in the dashboard — terms changed",
              "Guarantee money in a week",
              "Replace text quality",
            ],
            correct: 1,
            explain: "The partner program and thresholds update; old numbers aren’t the norm.",
          },
          {
            id: "dz2",
            question: "Machine-translating others’ articles as a strategy…",
            options: [
              "Is the best way to hit 7000 views",
              "Is risky: thin content and weak uniqueness",
              "Is required by Zen rules",
              "Replaces expertise",
            ],
            correct: 1,
            explain: "Better your own experience and verified facts.",
          },
        ],
      },
    ],
  },

  "chto-takoe-veb-sayt": {
    checklist: {
      afterTitleIncludes: "How to create one",
      title: "Before you build a site",
      lead: "Type and path should match the job — not “what everyone has.”",
      items: [
        { id: "goal", label: "Site job is stated" },
        { id: "type", label: "Type chosen (brochure/corp/store…)" },
        { id: "budget", label: "Budget and timeline are realistic" },
        { id: "way", label: "Path: studio / builder / ready-made — chosen on purpose" },
        { id: "owner", label: "Who updates content is clear" },
        { id: "seo", label: "Structure and mobile planned for growth" },
        { id: "lead", label: "Inquiry/contact channel exists" },
        { id: "promo", label: "Promo plan isn’t “the site will bring them”" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "A site as a “book” in the browser",
        title: "Mini quiz: website",
        lead: "Two checks.",
        questions: [
          {
            id: "vs1",
            question: "For business a site is first of all…",
            options: [
              "A replacement for all marketing",
              "A storefront, leads, and a trust point next to ads",
              "Only a pretty image with no contacts",
              "Always a hypermarket with 10,000 SKUs",
            ],
            correct: 1,
            explain: "Channel infrastructure, not magic.",
          },
          {
            id: "vs2",
            question: "Buying a ready site from a marketplace…",
            options: [
              "Is always safe and better than a studio",
              "Saves time but carries filter and third-party baggage risks",
              "Is impossible",
              "Guarantees TOP in search",
            ],
            correct: 1,
            explain: "Check history and quality, not only price.",
          },
        ],
      },
    ],
  },

  "foto-instagram": {
    checklist: {
      afterTitleIncludes: "Editing and publishing rhythm",
      title: "Feed photo checklist",
      lead: "Before a post series.",
      items: [
        { id: "idea", label: "Idea and role of the frame in the profile are clear" },
        { id: "light", label: "Light is enough without noise" },
        { id: "comp", label: "Composition: subject, background, edges" },
        { id: "preset", label: "Series preset is consistent" },
        { id: "grid", label: "Frame fits the profile grid" },
        { id: "caption", label: "Caption with value and CTA" },
        { id: "rules", label: "No plagiarism or rule breaks" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Composition and light",
        title: "Mini quiz: Instagram photos",
        lead: "Two frame checks.",
        questions: [
          {
            id: "fi1",
            question: "Digital zoom instead of stepping closer…",
            options: [
              "Always improves quality",
              "Often adds noise and loses detail",
              "Is required for business",
              "Replaces light",
            ],
            correct: 1,
            explain: "Better change the angle with your feet or crop later.",
          },
          {
            id: "fi2",
            question: "Copying competitors’ frames pixel-perfect…",
            options: [
              "Is a normal growth strategy",
              "Risks claims and an empty feed without your voice",
              "Is a Meta requirement",
              "Replaces a content plan",
            ],
            correct: 1,
            explain: "Ideas — yes; other people’s files and 1:1 style — no.",
          },
        ],
      },
    ],
  },

  "cpm-ili-cpc": {
    checklist: {
      afterTitleIncludes: "How to choose",
      title: "Before picking CPM/CPC",
      lead: "Goal first, then the payment model.",
      items: [
        { id: "goal", label: "Goal: reach or leads/sales" },
        { id: "kpi", label: "KPI and acceptable CPA defined" },
        { id: "lp", label: "For CPC — a landing for the offer" },
        { id: "creative", label: "For CPM — strong creative" },
        { id: "target", label: "Audience/targeting set" },
        { id: "utm", label: "Visit tracking (UTM/dashboard) set up" },
        { id: "test", label: "Test budget and period fixed" },
        { id: "compare", label: "Compare leads/revenue, not only CTR" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Clicks and impressions in plain words",
        title: "Mini quiz: CPM or CPC",
        lead: "Two checks.",
        questions: [
          {
            id: "cc1",
            question: "CPM is mainly about…",
            options: [
              "Paying only for a purchase",
              "Paying for impressions (usually per 1,000)",
              "A lead guarantee",
              "Free traffic",
            ],
            correct: 1,
            explain: "You pay for impressions, not for the click.",
          },
          {
            id: "cc2",
            question: "If the goal is site leads, you’re usually closer to…",
            options: [
              "Max CPM only with no landing",
              "CPC/CPA and conversion control",
              "Skipping analytics",
              "Paying for a pretty banner with no goal",
            ],
            correct: 1,
            explain: "Clicks and actions sit closer to sales.",
          },
        ],
      },
    ],
  },

  "otmetki-instagram": {
    checklist: {
      afterTitleIncludes: "Value for promotion",
      title: "Tag checklist",
      lead: "Before a collab or Stories series.",
      items: [
        { id: "nick", label: "Handle checked, no extra characters" },
        { id: "access", label: "Profile reachable (not blocked)" },
        { id: "consent", label: "Consent for commercial mention" },
        { id: "limit", label: "Tag limit per post not exceeded" },
        { id: "context", label: "Clear why the tag is in the frame" },
        { id: "measure", label: "Plan to measure replies / visits" },
        { id: "tools", label: "Scheduler is trusted only" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Typical mistakes",
        title: "Mini quiz: Instagram tags",
        lead: "Two tag checks.",
        questions: [
          {
            id: "ot1",
            question: "Tagging someone who blocked you…",
            options: [
              "Always works",
              "Usually unavailable",
              "Is required for ads",
              "Replaces Stories",
            ],
            correct: 1,
            explain: "Without profile access the tag usually won’t set.",
          },
          {
            id: "ot2",
            question: "Dozens of random tags “for reach”…",
            options: [
              "Are the best growth hack",
              "Often spam; one meaningful tag is stronger",
              "Are required by Meta",
              "Replace a content plan",
            ],
            correct: 1,
            explain: "Context and consent beat volume.",
          },
        ],
      },
    ],
  },

  "analogi-yandeks-market": {
    checklist: {
      afterTitleIncludes: "How to fit it into the sales system",
      title: "New sales-channel checklist",
      lead: "Before connecting a platform next to Market.",
      items: [
        { id: "margin", label: "Margin after fees and logistics calculated" },
        { id: "feed", label: "Feed and categories are compatible" },
        { id: "rules", label: "Content rules and penalties read" },
        { id: "pilot", label: "Pilot on part of the assortment" },
        { id: "stock", label: "One source of prices and stock" },
        { id: "analytics", label: "End-to-end order analytics" },
        { id: "alive", label: "Platform verified as active" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "How to choose a channel",
        title: "Mini quiz: Market alternatives",
        lead: "Two channel checks.",
        questions: [
          {
            id: "am1",
            question: "Aggregator lists from 2021 guides…",
            options: [
              "Are always current",
              "Need re-checking: many closed or changed model",
              "Replace unit economics",
              "Are required for SEO",
            ],
            correct: 1,
            explain: "The market moved — use live platforms and a pilot.",
          },
          {
            id: "am2",
            question: "One YML with no adaptation for every platform…",
            options: [
              "Is always enough",
              "Is risky: platforms have their own fields and moderation",
              "Is banned by Market rules",
              "Replaces product photos",
            ],
            correct: 1,
            explain: "One base; exports often need adaptation.",
          },
        ],
      },
    ],
  },

  "tenevoy-ban-instagram": {
    checklist: {
      afterTitleIncludes: "What to do",
      title: "When Instagram reach drops",
      lead: "No gray schemes or phishing “detectors.”",
      items: [
        { id: "diff", label: "Separated from a full block / action limit" },
        { id: "apps", label: "Gray apps and extra access removed" },
        { id: "tags", label: "Hashtags checked (not broken/banned)" },
        { id: "spam", label: "Spam pace and mass actions stopped" },
        { id: "check", label: "Manual post check from another account" },
        { id: "stats", label: "Reach in insights compared across periods" },
        { id: "content", label: "Content improvement plan exists" },
        { id: "support", label: "For a clear violation — official support" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What people mean by shadow ban",
        title: "Mini quiz: shadow ban",
        lead: "Two checks.",
        questions: [
          {
            id: "tb1",
            question: "“Shadow ban” is most often…",
            options: [
              "An official status button in settings",
              "Slang for visibility drop; a separate label often doesn’t exist",
              "A guaranteed ban for one hashtag",
              "A reason to buy fake engagement",
            ],
            correct: 1,
            explain: "Industry slang, not always a separate status.",
          },
          {
            id: "tb2",
            question: "Best first step when you suspect it…",
            options: [
              "Mass-follow “to boost”",
              "Remove automation, check tags, lower spam pace",
              "Enter the password on a third-party detector",
              "Ignore platform rules",
            ],
            correct: 1,
            explain: "Legal account hygiene.",
          },
        ],
      },
    ],
  },

  "seo-bitrix": {
    checklist: {
      afterTitleIncludes: "Analytics and Webmaster tools",
      title: "Bitrix SEO checklist",
      lead: "After baseline CMS setup.",
      items: [
        { id: "https", label: "HTTPS and mirror consolidation" },
        { id: "robots", label: "robots.txt checked in Webmaster tools" },
        { id: "sitemap", label: "XML sitemap served and submitted" },
        { id: "meta", label: "Title/Description templates without junk" },
        { id: "chpu", label: "Clean URLs stable; changes with 301s" },
        { id: "counters", label: "Counters without duplicates in the template" },
        { id: "plugins", label: "Marketplace modules only for a real gap" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "robots.txt and crawling",
        title: "Mini quiz: SEO Bitrix",
        lead: "Two setup checks.",
        questions: [
          {
            id: "bx1",
            question: "Disallow in robots.txt…",
            options: [
              "Instantly removes a URL from the index",
              "Affects crawling; removal from results needs noindex/deletion",
              "Replaces Title",
              "Is required for analytics",
            ],
            correct: 1,
            explain: "Blocking crawl ≠ dropping from search results.",
          },
          {
            id: "bx2",
            question: "Installing SEO modules “as a Marketplace pack”…",
            options: [
              "Is the best promotion strategy",
              "Is risky: take them only for a gap in the built-in module",
              "Replaces content",
              "Guarantees TOP-10",
            ],
            correct: 1,
            explain: "Tech and content first; plugins as needed.",
          },
        ],
      },
    ],
  },

  "prosmotry-vk": {
    checklist: {
      afterTitleIncludes: "Media and limits",
      title: "VK reach reading checklist",
      lead: "Before drawing content conclusions.",
      items: [
        { id: "compare", label: "Compare same-type posts to each other" },
        { id: "er", label: "Watch reactions/clicks, not only “eyes”" },
        { id: "stats", label: "Reconciled with community statistics" },
        { id: "goal", label: "Post goal exists (reach / click / lead)" },
        { id: "table", label: "Topic and format logged in a table" },
        { id: "no-fake", label: "No fake views" },
        { id: "ads", label: "For ads lean on the cabinet, not only the counter" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "How a view is counted",
        title: "Mini quiz: VK views",
        lead: "Two counter checks.",
        questions: [
          {
            id: "pv1",
            question: "An instant scroll past a post…",
            options: [
              "Always counts as a view",
              "Usually doesn’t count without a meaningful show",
              "Doubles reach",
              "Replaces a like",
            ],
            correct: 1,
            explain: "You need an actual show, not a flash in the feed.",
          },
          {
            id: "pv2",
            question: "Buying fake views…",
            options: [
              "Improves ad quality",
              "Distorts analytics and hurts decisions",
              "Is required for communities",
              "Hides the counter from competitors",
            ],
            correct: 1,
            explain: "Watch real audience actions.",
          },
        ],
      },
    ],
  },

  "karusel-instagram": {
    checklist: {
      afterTitleIncludes: "Stories and series",
      title: "Carousel checklist",
      lead: "Before publishing a slide series.",
      items: [
        { id: "story", label: "Slide scenario 1→N exists" },
        { id: "hook", label: "First frame is the hook" },
        { id: "style", label: "One preset / style" },
        { id: "cta", label: "Last slide has a CTA" },
        { id: "order", label: "Media order checked" },
        { id: "caption", label: "Caption with value" },
        { id: "app", label: "App updated" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "How to build a multi-media post",
        title: "Mini quiz: carousel",
        lead: "Two format checks.",
        questions: [
          {
            id: "ki1",
            question: "A collage of 9 tiny photos instead of a carousel…",
            options: [
              "Is always better for details",
              "Is often worse: details read better on slides",
              "Is required for business",
              "Replaces Stories",
            ],
            correct: 1,
            explain: "A full-screen slide beats a tiny grid.",
          },
          {
            id: "ki2",
            question: "“Download someone else’s Instagram” services…",
            options: [
              "Are needed to run your own account",
              "Aren’t needed; others’ content without rights is a risk",
              "Replace a carousel",
              "Are required by Meta",
            ],
            correct: 1,
            explain: "For your archive — official export methods.",
          },
        ],
      },
    ],
  },

  "https-seo": {
    checklist: {
      afterTitleIncludes: "http → https migration checklist",
      title: "HTTPS SEO checklist",
      lead: "For a migration or protocol audit.",
      items: [
        { id: "cert", label: "Certificate is valid" },
        { id: "301", label: "301 http→https configured" },
        { id: "www", label: "www policy aligned" },
        { id: "mixed", label: "No mixed content" },
        { id: "sitemap", label: "Sitemap https only" },
        { id: "wm", label: "Webmaster tools updated" },
        { id: "check", label: "Landing response codes checked" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Myths about “factor #1”",
        title: "Mini quiz: HTTPS and SEO",
        lead: "Two migration checks.",
        questions: [
          {
            id: "hs1",
            question: "HTTPS guarantees the TOP…",
            options: [
              "Yes, it’s the main factor",
              "No: it’s hygiene; positions come from content and demand",
              "Only with an EV certificate",
              "Only without redirects",
            ],
            correct: 1,
            explain: "A certificate doesn’t replace semantics and links.",
          },
          {
            id: "hs2",
            question: "After a crooked migration it’s better to…",
            options: [
              "Roll back to HTTP immediately",
              "Finish 301s, sitemap, and recrawl",
              "Delete robots.txt",
              "Turn off analytics",
            ],
            correct: 1,
            explain: "Rolling back to HTTP worsens duplicates and trust.",
          },
        ],
      },
    ],
  },

  "biznes-v-instagram": {
    checklist: {
      afterTitleIncludes: "Tools without a zoo",
      title: "Business on Instagram checklist",
      lead: "Before scaling ads.",
      items: [
        { id: "offer", label: "Bio offer is clear in 3 seconds" },
        { id: "contact", label: "Contacts / CTA available" },
        { id: "plan", label: "Rubrics and publish rhythm exist" },
        { id: "visual", label: "One visual style" },
        { id: "dialog", label: "Replies to comments and Direct" },
        { id: "stats", label: "Weekly insights review" },
        { id: "tools", label: "No shady SMM tools with your password" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "A running system, not one-off posts",
        title: "Mini quiz: business on IG",
        lead: "Two running checks.",
        questions: [
          {
            id: "bi1",
            question: "11–30 hashtags on every post…",
            options: [
              "Is a required SEO rule",
              "Is outdated: a few relevant tags are better",
              "Replace the bio offer",
              "Guarantee recommendations",
            ],
            correct: 1,
            explain: "Tag spam isn’t a strategy.",
          },
          {
            id: "bi2",
            question: "The business-account article…",
            options: [
              "Replaces a running strategy",
              "Covers profile type; running is a separate contour",
              "Bans carousels",
              "Is only for Stories",
            ],
            correct: 1,
            explain: "Account setup ≠ a content system.",
          },
        ],
      },
    ],
  },

  "ssylki-vkontakte": {
    checklist: {
      afterTitleIncludes: "Link to a VK post",
      title: "VK links and mentions",
      lead: "Click and preview beat a bare URL.",
      items: [
        { id: "mention", label: "Profile/community mentions are clickable" },
        { id: "label", label: "Parenthetical label is clear to readers" },
        { id: "notify", label: "Privacy and block lists considered" },
        { id: "ext", label: "External URL produces a correct preview" },
        { id: "utm", label: "UTMs on the site when needed" },
        { id: "post", label: "Exact post URL copied" },
        { id: "spam", label: "No mention spam" },
        { id: "access", label: "Post/wall open to the target audience" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why format links in VK",
        title: "Mini quiz: VK links",
        lead: "Two checks.",
        questions: [
          {
            id: "sv1",
            question: "A `@id… (Name)` mention primarily…",
            options: [
              "Makes a clickable jump to a profile/community",
              "Replaces UTMs on the site",
              "Guarantees TOP in VK search",
              "Is only for external sites",
            ],
            correct: 0,
            explain: "It’s mention markup inside VK.",
          },
          {
            id: "sv2",
            question: "An external site in a VK post is usually…",
            options: [
              "Formatted with the same `@id` syntax",
              "Pasted as a URL — the platform builds a preview",
              "Impossible to attach at all",
              "Works only via HTML `<a>`",
            ],
            correct: 1,
            explain: "Preview from an HTTPS address.",
          },
        ],
      },
    ],
  },

  "snizhenie-trafika": {
    checklist: {
      afterTitleIncludes: "What to do after the diagnosis",
      title: "Traffic-drop checklist",
      lead: "While you hunt the cause.",
      items: [
        { id: "counter", label: "Analytics counter verified" },
        { id: "channel", label: "Clear which channel dropped" },
        { id: "season", label: "Seasonality checked vs Wordstat" },
        { id: "tech", label: "Availability, mirrors, speed" },
        { id: "wm", label: "Webmaster: crawl / security" },
        { id: "content", label: "Key URLs and uniqueness" },
        { id: "log", label: "Hypothesis → fix → date logged" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Common drop causes",
        title: "Mini quiz: traffic drop",
        lead: "Two diagnosis checks.",
        questions: [
          {
            id: "st1",
            question: "Deleting half the sections “just in case”…",
            options: [
              "Is the best first step",
              "Is risky: diagnose first, then targeted fixes",
              "Is required on every update",
              "Replaces Webmaster",
            ],
            correct: 1,
            explain: "Radical cuts often deepen the drop.",
          },
          {
            id: "st2",
            question: "A drop only in Metrica while Webmaster grows…",
            options: [
              "Is definitely a Yandex filter",
              "First check the counter and report filters",
              "Needs only Disavow",
              "Means closing the site in robots",
            ],
            correct: 1,
            explain: "Panel mismatches are often analytics issues.",
          },
        ],
      },
    ],
  },

  "piksel-vk": {
    checklist: {
      afterTitleIncludes: "Audiences and exclusions",
      title: "VK pixel checklist",
      lead: "Before launching retargeting.",
      items: [
        { id: "create", label: "Pixel created in the cabinet" },
        { id: "code", label: "Code on all needed URLs" },
        { id: "test", label: "Test visit recorded" },
        { id: "seg", label: "Funnel segments named clearly" },
        { id: "ttl", label: "Audience membership window set" },
        { id: "excl", label: "Buyers excluded from chase offers" },
        { id: "consent", label: "Consent/cookie policy considered if needed" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Install: the general scheme",
        title: "Mini quiz: VK pixel",
        lead: "Two retargeting checks.",
        questions: [
          {
            id: "pk1",
            question: "Showing one offer to everyone who visited the site…",
            options: [
              "Is always optimal",
              "Is often weak: segment funnel stages",
              "Replaces the pixel",
              "Is banned by the cabinet",
            ],
            correct: 1,
            explain: "Cart and “just visited” need different messages.",
          },
          {
            id: "pk2",
            question: "GTM for the pixel…",
            options: [
              "Is the only install method",
              "Is convenient but not required",
              "Replaces the ads cabinet",
              "Is only for Stories",
            ],
            correct: 1,
            explain: "You can also paste into the site template.",
          },
        ],
      },
    ],
  },

  "pinterest-skachat": {
    checklist: {
      afterTitleIncludes: "Boards and copyright",
      title: "Pinterest reference checklist",
      lead: "Before using images in work.",
      items: [
        { id: "board", label: "Boards by project theme created" },
        { id: "save", label: "Pins saved to the account" },
        { id: "rights", label: "Commercial-use rights are clear" },
        { id: "own", label: "Own shoot/layout planned for ads" },
        { id: "ext", label: "No shady “download everything” extensions" },
        { id: "quality", label: "If a file is needed — built-in download" },
        { id: "brief", label: "References go into a brief, not copy-paste" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "On a computer",
        title: "Mini quiz: Pinterest",
        lead: "Two save checks.",
        questions: [
          {
            id: "ps1",
            question: "Downloading someone else’s pin into shop ads…",
            options: [
              "Is always legal",
              "Is a risk without a license/permission",
              "Is a Pinterest requirement",
              "Replaces product photos",
            ],
            correct: 1,
            explain: "A reference ≠ a ready ad file.",
          },
          {
            id: "ps2",
            question: "Pinterest boards are for…",
            options: [
              "Bypassing copyright",
              "Structuring ideas and briefs",
              "Ranking the site in the TOP",
              "Replacing the site",
            ],
            correct: 1,
            explain: "It’s a reference organizer.",
          },
        ],
      },
    ],
  },

  "razblokirovka-instagram": {
    checklist: {
      afterTitleIncludes: "How to find the blocked list",
      title: "Unblock checklist",
      lead: "Before you message the person again.",
      items: [
        { id: "list", label: "Blocked list opened in settings" },
        { id: "find", label: "Person found in the list or by handle" },
        { id: "unblock", label: "Unblock tapped" },
        { id: "wait", label: "Wait for sync (sometimes minutes)" },
        { id: "not-ban", label: "This isn’t a Meta ban on your account" },
        { id: "no-app", label: "No third-party Instagram clients" },
        { id: "privacy", label: "Decided whether contact should resume" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What changes after a block",
        title: "Mini quiz: Instagram block",
        lead: "Two checks.",
        questions: [
          {
            id: "ri1",
            question: "Blocking a user and a platform account ban are…",
            options: [
              "The same thing",
              "Different things",
              "Only for Direct",
              "Only for Stories",
            ],
            correct: 1,
            explain: "Block is your list; a ban is a Meta limit.",
          },
          {
            id: "ri2",
            question: "Where do people most often unblock?",
            options: [
              "In Ads Manager",
              "In the blocked list / from the profile",
              "Only via Meta support",
              "Via a third-party client",
            ],
            correct: 1,
            explain: "Built-in Instagram settings are enough.",
          },
        ],
      },
    ],
  },

  "tekst-lendinga": {
    checklist: {
      afterTitleIncludes: "Build a persuasion path",
      title: "Landing copy checklist",
      lead: "Before publishing the page.",
      items: [
        { id: "offer", label: "Offer and benefit clear on the first screen" },
        { id: "audience", label: "Clear who the page is for" },
        { id: "proof", label: "Proof / cases block present" },
        { id: "objections", label: "Main objections addressed" },
        { id: "cta", label: "One main CTA, repeated where it fits" },
        { id: "spam", label: "No keyword stuffing in the copy" },
        { id: "mobile", label: "Copy reads well on mobile" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Offer and first screen",
        title: "Mini quiz: landing",
        lead: "Two copy checks.",
        questions: [
          {
            id: "tl1",
            question: "The main job of the first screen is to…",
            options: [
              "Stuff in maximum keywords",
              "Show the offer and the next step",
              "Retell the whole company",
              "Hide price at any cost",
            ],
            correct: 1,
            explain: "People need “what / for whom / what to do.”",
          },
          {
            id: "tl2",
            question: "Keyword stuffing on a landing…",
            options: [
              "Improves conversion",
              "Hurts reading and SEO",
              "Is a search-engine requirement",
              "Replaces the offer",
            ],
            correct: 1,
            explain: "Write for people; keywords stay natural.",
          },
        ],
      },
    ],
  },

  "blog-instagram": {
    checklist: {
      afterTitleIncludes: "Set up the profile for a first visit",
      title: "Blog start checklist",
      lead: "Before the first wave of posts.",
      items: [
        { id: "niche", label: "Niche and audience stated" },
        { id: "goal", label: "Account goal clear (leads / expertise / brand)" },
        { id: "bio", label: "Bio: who you are + value + CTA" },
        { id: "avatar", label: "Avatar is recognizable" },
        { id: "grid", label: "Plan for 5–10 first posts exists" },
        { id: "rhythm", label: "Publish rhythm is realistic" },
        { id: "no-bots", label: "No fake engagement or shady services" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Goal, audience, and niche",
        title: "Mini quiz: Instagram blog",
        lead: "Two checks.",
        questions: [
          {
            id: "bl1",
            question: "It’s better to start with…",
            options: [
              "Posting every hour at any cost",
              "Niche, audience, and goal",
              "Buying followers",
              "Copying someone else’s grid 1:1",
            ],
            correct: 1,
            explain: "Without a frame, content spreads thin.",
          },
          {
            id: "bl2",
            question: "Daily posts “for show”…",
            options: [
              "Are always required",
              "Are worse than a steady realistic rhythm",
              "Guarantee reach",
              "Replace the bio offer",
            ],
            correct: 1,
            explain: "Quality and regularity beat empty daily posting.",
          },
        ],
      },
    ],
  },

  "filtry-poiskovikov": {
    checklist: {
      afterTitleIncludes: "Strengthen content and intent",
      title: "After-filter checklist",
      lead: "A white-hat plan — no “bypass schemes.”",
      items: [
        { id: "diag", label: "Diagnosis exists: what fell and when" },
        { id: "tech", label: "Tech and indexing checked" },
        { id: "quality", label: "Weak/duplicate pages in progress" },
        { id: "links", label: "Links and anchors without spam" },
        { id: "content", label: "Useful content, no over-optimization" },
        { id: "metrics", label: "Metrics logged before/after" },
        { id: "no-bypass", label: "No cloaking / fake engagement / “bypass” plans" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Diagnosis first, not “schemes”",
        title: "Mini quiz: filters",
        lead: "Two checks.",
        questions: [
          {
            id: "fp1",
            question: "“Bypassing a filter” with gray schemes is…",
            options: [
              "Normal practice",
              "A risk of new penalties",
              "The only growth path",
              "A search-engine requirement",
            ],
            correct: 1,
            explain: "Fix the cause with white-hat edits.",
          },
          {
            id: "fp2",
            question: "The first step when rankings drop is…",
            options: [
              "Buying links in bulk",
              "Diagnosis and facts",
              "Changing the domain immediately",
              "Cloaking",
            ],
            correct: 1,
            explain: "Without a diagnosis, treatment is random.",
          },
        ],
      },
    ],
  },

  "proverka-unikalnosti": {
    checklist: {
      afterTitleIncludes: "How to read the report",
      title: "Uniqueness checklist",
      lead: "Before publishing the text.",
      items: [
        { id: "brief", label: "Text written from a brief, not someone else’s article" },
        { id: "check", label: "Run through a tool with a match report" },
        { id: "sources", label: "Match sources reviewed" },
        { id: "rewrite", label: "Problem paragraphs rewritten" },
        { id: "quotes", label: "Quotes attributed honestly" },
        { id: "spam", label: "Keywords without stuffing" },
        { id: "nda", label: "Sensitive text not exposed in public tools" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why check before publishing",
        title: "Mini quiz: uniqueness",
        lead: "Two checks.",
        questions: [
          {
            id: "pu1",
            question: "Chasing exactly 100% uniqueness…",
            options: [
              "Is always required",
              "Isn’t required — look at the matches",
              "Is a search-engine requirement",
              "Replaces usefulness",
            ],
            correct: 1,
            explain: "Long foreign chunks matter, not a perfect number.",
          },
          {
            id: "pu2",
            question: "A synonymizer instead of writing…",
            options: [
              "Is good practice",
              "Makes unreadable, risky copy",
              "Guarantees the TOP",
              "Is an exchange requirement",
            ],
            correct: 1,
            explain: "Rewrite from facts.",
          },
        ],
      },
    ],
  },

  "shapka-youtube": {
    checklist: {
      afterTitleIncludes: "How to change it in Studio",
      title: "YouTube banner checklist",
      lead: "Before uploading the banner.",
      items: [
        { id: "size", label: "Size and safe area accounted for" },
        { id: "center", label: "Essentials centered, edges clear" },
        { id: "style", label: "Style matches the avatar" },
        { id: "text", label: "Text is large and short" },
        { id: "rights", label: "Photo/illustration rights are yours" },
        { id: "preview", label: "TV / PC / phone previews checked" },
        { id: "niche", label: "Channel niche reads in 2 seconds" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why the banner matters",
        title: "Mini quiz: channel banner",
        lead: "Two checks.",
        questions: [
          {
            id: "sy1",
            question: "The banner by itself…",
            options: [
              "Guarantees recommendations",
              "Boosts recognition; doesn’t replace videos",
              "Matters more than retention",
              "Replaces the description",
            ],
            correct: 1,
            explain: "Visuals help; growth comes from content.",
          },
          {
            id: "sy2",
            question: "A tiny price list across the banner…",
            options: [
              "Reads great on mobile",
              "Usually doesn’t — a short slogan is better",
              "Is a YouTube requirement",
              "Replaces the avatar",
            ],
            correct: 1,
            explain: "Keep it short and centered.",
          },
        ],
      },
    ],
  },

  "domen-rf": {
    checklist: {
      afterTitleIncludes: "Practical tips",
      title: ".рф site checklist",
      lead: "Before launch and in Webmaster tools.",
      items: [
        { id: "name", label: "Name is short and pronounceable" },
        { id: "ssl", label: "HTTPS and certificate for IDN/punycode" },
        { id: "canon", label: "One canonical host" },
        { id: "mirror", label: "If needed — paired .ru with 301" },
        { id: "wm", label: "Host added in Webmaster / Search Console" },
        { id: "brand", label: "Brand in copy, not only a keyword domain" },
        { id: "myth", label: "No bet on zone “magic” alone" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Myths about promotion",
        title: "Mini quiz: .рф",
        lead: "Two checks.",
        questions: [
          {
            id: "dr1",
            question: "A Cyrillic .рф domain…",
            options: [
              "Isn’t indexed",
              "Can rank normally with a strong site",
              "Is always better than .ru",
              "Is banned by Yandex",
            ],
            correct: 1,
            explain: "The zone isn’t a sentence or a cheat.",
          },
          {
            id: "dr2",
            question: "Punycode exists to…",
            options: [
              "Trick filters",
              "Represent a Cyrillic name in Latin technically",
              "Speed up the TOP",
              "Replace SSL",
            ],
            correct: 1,
            explain: "It’s the IDN technical form.",
          },
        ],
      },
    ],
  },

  "instagram-s-kompyutera": {
    checklist: {
      afterTitleIncludes: "Business Suite and scheduling",
      title: "PC posting checklist",
      lead: "Before the first computer publish.",
      items: [
        { id: "web", label: "Official Instagram web checked" },
        { id: "pro", label: "Professional account if needed" },
        { id: "suite", label: "Business Suite / creator tools connected" },
        { id: "files", label: "Files prepared on disk" },
        { id: "no-client", label: "No third-party clients with password" },
        { id: "2fa", label: "Two-factor auth on" },
        { id: "plan", label: "Realistic calendar, not an empty queue" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to avoid",
        title: "Mini quiz: Instagram from PC",
        lead: "Two checks.",
        questions: [
          {
            id: "ic1",
            question: "The best first way to post from a PC is…",
            options: [
              "A random desktop client with your password",
              "Official web / Business Suite",
              "BlueStacks only",
              "Any “Instagram for Windows”",
            ],
            correct: 1,
            explain: "Built-in Meta tools are safer.",
          },
          {
            id: "ic2",
            question: "A third-party client that takes your login…",
            options: [
              "Is always safe",
              "Risks a ban and a leak",
              "Is an Instagram requirement",
              "Replaces a content plan",
            ],
            correct: 1,
            explain: "Giving the password to third parties is a bad idea.",
          },
        ],
      },
    ],
  },

  "kommentarii-instagram": {
    checklist: {
      afterTitleIncludes: "Process for the team",
      title: "Instagram comments for business",
      lead: "Dialogue beats faking threads.",
      items: [
        { id: "sla", label: "Reply SLA for questions is set" },
        { id: "tone", label: "Reply tone is calm and on-point" },
        { id: "cta", label: "Reply has a next step (Direct/site)" },
        { id: "neg", label: "Negativity is handled; spam is removed" },
        { id: "filter", label: "Unwanted-word filters configured" },
        { id: "roles", label: "Team access via roles, not a shared password" },
        { id: "faq", label: "Frequent questions go to FAQ/Highlights" },
        { id: "no-bots", label: "No auto-commenting or fake engagement" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why business needs comments",
        title: "Mini quiz: Instagram comments",
        lead: "Two checks.",
        questions: [
          {
            id: "cm1",
            question: "The main role of comments for commerce is…",
            options: [
              "Replacing the site and checkout",
              "Dialogue, answers, and trust next to the post",
              "A guaranteed algorithm boost",
              "Only a place for hashtags",
            ],
            correct: 1,
            explain: "Service and social proof.",
          },
          {
            id: "cm2",
            question: "Constructive criticism is better…",
            options: [
              "Deleted in bulk immediately",
              "Handled briefly or moved to Direct; spam separately",
              "Always ignored",
              "Answered with insults",
            ],
            correct: 1,
            explain: "Trust beats a “clean” feed.",
          },
        ],
      },
    ],
  },

  "knopki-youtube": {
    checklist: {
      afterTitleIncludes: "Setting up cards and end screens",
      title: "Video elements checklist",
      lead: "Before you publish.",
      items: [
        { id: "cards", label: "1–2 cards that match the topic" },
        { id: "end", label: "End screen with clear tiles" },
        { id: "timing", label: "Card not in the first seconds" },
        { id: "cover", label: "Doesn’t cover face or captions" },
        { id: "sub", label: "Subscribe ask is well timed" },
        { id: "desc", label: "Description links without spam" },
        { id: "no-ann", label: "No reliance on retired annotations" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What replaced annotations",
        title: "Mini quiz: YouTube buttons",
        lead: "Two checks.",
        questions: [
          {
            id: "ky1",
            question: "YouTube annotations today are…",
            options: [
              "The main tool",
              "Retired — use cards and end screens",
              "Required for monetization",
              "A substitute for the description",
            ],
            correct: 1,
            explain: "The platform removed the tool.",
          },
          {
            id: "ky2",
            question: "A swarm of cards every minute…",
            options: [
              "Improves retention",
              "Hurts the watch — keep them purposeful",
              "Is a YouTube requirement",
              "Replaces niche and quality",
            ],
            correct: 1,
            explain: "Fewer, and on-topic.",
          },
        ],
      },
    ],
  },

  "taymkod-youtube": {
    checklist: {
      afterTitleIncludes: "How to build it into the script",
      title: "Before publishing with chapters",
      lead: "The TOC should be clickable.",
      items: [
        { id: "long", label: "Video is long enough for a TOC" },
        { id: "zero", label: "First marker at 0:00 (if you want chapters)" },
        { id: "names", label: "Block names make sense to viewers" },
        { id: "desc", label: "TOC in the description after gist/CTA" },
        { id: "link", label: "Timed link verified" },
        { id: "bar", label: "Scrubber clicks checked after publish" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: YouTube timecodes",
        lead: "Two checks.",
        questions: [
          {
            id: "tk1",
            question: "YouTube chapters primarily…",
            options: [
              "Guarantee recommendations",
              "Help navigate a long video",
              "Replace the thumbnail",
              "Are required for Shorts",
            ],
            correct: 1,
            explain: "UX navigation — not an “algorithm secret.”",
          },
          {
            id: "tk2",
            question: "A link with a time parameter…",
            options: [
              "Opens the video at that second",
              "Deletes comments",
              "Turns on monetization",
              "Changes the thumbnail",
            ],
            correct: 0,
            explain: "Handy for sharing a clip and answering comments.",
          },
        ],
      },
    ],
  },

  "yumoney": {
    checklist: {
      afterTitleIncludes: "Top-up, transfer, withdrawal",
      title: "Before a large YooMoney operation",
      lead: "Limits and security beat speed.",
      items: [
        { id: "product", label: "Clear: need a wallet, not YooKassa for a store" },
        { id: "id", label: "ID level is enough for the limit" },
        { id: "recv", label: "Recipient details verified" },
        { id: "fee", label: "Fee visible before confirm" },
        { id: "auth", label: "Login protection / 2FA on where available" },
        { id: "phish", label: "No password on “recovery sites” from email" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: YooMoney",
        lead: "Two checks.",
        questions: [
          {
            id: "ym1",
            question: "YooMoney is…",
            options: [
              "A payment aggregator for an online store",
              "A user’s e-wallet",
              "Hosting",
              "An SEO plugin",
            ],
            correct: 1,
            explain: "For taking payments on a site, look at YooKassa.",
          },
          {
            id: "ym2",
            question: "Identification is needed to…",
            options: [
              "Decorate the avatar",
              "Widen limits and withdrawals",
              "Bypass receipt rules",
              "Replace a bank contract for a store",
            ],
            correct: 1,
            explain: "Status affects operation limits.",
          },
        ],
      },
    ],
  },

  "gaiq": {
    checklist: {
      afterTitleIncludes: "How people prepped then",
      title: "Before an “Analytics certificate”",
      lead: "Paper without practice weighs little.",
      items: [
        { id: "path", label: "Found a current Skillshop course/assessment (not a 2021 GAIQ guide)" },
        { id: "ga4", label: "Working stack is GA4, not UA" },
        { id: "prop", label: "Have a training or live property for practice" },
        { id: "events", label: "Key events/conversions marked" },
        { id: "nodumps", label: "Not relying on answer dumps" },
        { id: "resume", label: "Résumé will list current certificate name and year" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: GAIQ",
        lead: "Two checks.",
        questions: [
          {
            id: "gq1",
            question: "Classic GAIQ from 2021 articles is…",
            options: [
              "A current exam instruction today",
              "A historical exam; rules and UA context are outdated",
              "A substitute for GA4 setup",
              "Required for every site",
            ],
            correct: 1,
            explain: "Use Skillshop and GA4 practice.",
          },
          {
            id: "gq2",
            question: "Best prep is…",
            options: [
              "Drilling others’ answer dumps",
              "Official course + practice on a property",
              "Ignoring events",
              "Only a PDF with no Analytics account",
            ],
            correct: 1,
            explain: "Concepts plus hands in the UI.",
          },
        ],
      },
    ],
  },

  "metategi": {
    checklist: {
      afterTitleIncludes: "How to add them on a site",
      title: "Before shipping meta tags",
      lead: "A tag map — not a keywords hunt.",
      items: [
        { id: "title", label: "Unique title on money URLs" },
        { id: "desc", label: "Description matches the page" },
        { id: "h1", label: "H1 aligned in meaning with title" },
        { id: "robots", label: "No accidental noindex on landings" },
        { id: "kw", label: "Not spending time on meta keywords for rankings" },
        { id: "check", label: "Checked <head> in page source" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: meta tags",
        lead: "Two checks.",
        questions: [
          {
            id: "mt1",
            question: "Meta keywords today…",
            options: [
              "The main TOP-1 factor",
              "Barely affect rankings in major engines",
              "Replace title",
              "Required for indexing",
            ],
            correct: 1,
            explain: "Title, description, and content matter more.",
          },
          {
            id: "mt2",
            question: "Meta robots and robots.txt are…",
            options: [
              "The same thing",
              "Related levels: page vs crawler path hints",
              "Only for social networks",
              "What turns off HTTPS",
            ],
            correct: 1,
            explain: "Different close/hint tools.",
          },
        ],
      },
    ],
  },

  "veb-interfeys": {
    checklist: {
      afterTitleIncludes: "Hosting panel",
      title: "Before working in a web interface",
      lead: "Browser ≠ “just a website.”",
      items: [
        { id: "https", label: "Open the panel over HTTPS / a trusted network" },
        { id: "pass", label: "Changed the factory password (router/panel)" },
        { id: "role", label: "Know the job: mail / DNS / SSL / files" },
        { id: "backup", label: "Backup exists before risky edits" },
        { id: "no-expose", label: "Router admin not exposed to the open internet unprotected" },
        { id: "docs", label: "Menu items checked against Help, not a 2021 screenshot" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: web interface",
        lead: "Two checks.",
        questions: [
          {
            id: "vi1",
            question: "A web interface is primarily…",
            options: [
              "Only a company landing page",
              "Controlling a service through the browser",
              "A DNS replacement",
              "Only an API for programs",
            ],
            correct: 1,
            explain: "Mail, panels, accounts — typical examples.",
          },
          {
            id: "vi2",
            question: "A Plesk/cPanel hosting panel is…",
            options: [
              "Not a web interface",
              "A classic admin web UI",
              "Only a mobile app",
              "A TOP-1 ranking factor",
            ],
            correct: 1,
            explain: "A graphical shell on the server via the browser.",
          },
        ],
      },
    ],
  },

  "messendzher": {
    checklist: {
      afterTitleIncludes: "Corporate use",
      title: "Before rolling a messenger into the business",
      lead: "A channel without a playbook = chaos.",
      items: [
        { id: "aud", label: "Clear where the audience already is" },
        { id: "one", label: "Picked 1–2 main channels, not five" },
        { id: "sla", label: "Reply-speed rule exists" },
        { id: "crm", label: "Leads land somewhere (CRM/sheet)" },
        { id: "consent", label: "No spam to strangers’ numbers without consent" },
        { id: "owner", label: "Clear owner of the corporate number/bot" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: messengers",
        lead: "Two checks.",
        questions: [
          {
            id: "ms1",
            question: "Messaging from WhatsApp* into Telegram…",
            options: [
              "Works in one shared chat",
              "Doesn’t: both need the same messenger",
              "Only via SMS",
              "Only via email",
            ],
            correct: 1,
            explain: "Chats don’t mix across services.",
          },
          {
            id: "ms2",
            question: "A messenger for business…",
            options: [
              "Replaces CRM",
              "Is a channel; deals belong in a tracker",
              "Guarantees sales growth by itself",
              "Needs no consent for broadcasts",
            ],
            correct: 1,
            explain: "Chat is a channel, not a deal system.",
          },
        ],
      },
    ],
  },

  "ftp": {
    checklist: {
      afterTitleIncludes: "How to connect",
      title: "Before working over FTP/SFTP",
      lead: "Password and backup beat drag-and-drop.",
      items: [
        { id: "sftp", label: "Connecting via SFTP/FTPS, not open FTP without need" },
        { id: "creds", label: "Host/login taken from my hosting panel" },
        { id: "client", label: "Client downloaded from the official site" },
        { id: "backup", label: "Backup exists before editing critical files" },
        { id: "rights", label: "Not setting “everyone everything” chmod without reason" },
        { id: "pass", label: "Password not stored in the clear on a shared PC" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: FTP",
        lead: "Two checks.",
        questions: [
          {
            id: "ftp1",
            question: "Compared with plain FTP, SFTP is…",
            options: [
              "The same without encryption",
              "Usually safer thanks to an encrypted channel",
              "Windows-only",
              "A hosting replacement",
            ],
            correct: 1,
            explain: "Password and data shouldn’t travel in clear text.",
          },
          {
            id: "ftp2",
            question: "An FTP client is for…",
            options: [
              "Guaranteeing TOP-1",
              "Exchanging files with the site server",
              "Replacing DNS",
              "Writing WordPress posts",
            ],
            correct: 1,
            explain: "Upload, download, permissions, emergency access.",
          },
        ],
      },
    ],
  },

  "runet": {
    checklist: {
      afterTitleIncludes: "Search and advertising",
      title: "Before targeting a Runet audience",
      lead: "Audience and channels beat the dictionary definition.",
      items: [
        { id: "aud", label: "Geo and language of the audience are fixed" },
        { id: "domain", label: "Role of .ru / .рф / .com for the brand is clear" },
        { id: "search", label: "Plan for Yandex and/or Google based on your analytics" },
        { id: "pay", label: "Payment and delivery fit the region" },
        { id: "tone", label: "Site and social tone match the audience" },
        { id: "nostat", label: "Pitch has no 2020-roundup figures without a fresh source" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: Runet",
        lead: "Two checks.",
        questions: [
          {
            id: "ru1",
            question: "Runet is primarily about…",
            options: [
              "Only the .ru domain",
              "Audience, language, and local ecosystems",
              "Banning Google",
              "Only FTP",
            ],
            correct: 1,
            explain: "The domain is one signal, not the whole story.",
          },
          {
            id: "ru2",
            question: "Audience stereotypes from old roundups…",
            options: [
              "Can go straight into the media plan",
              "Don’t replace your own analytics",
              "Matter more than Wordstat",
              "Are required for SEO",
            ],
            correct: 1,
            explain: "Check fresh data and your niche.",
          },
        ],
      },
    ],
  },

  "html-seo": {
    checklist: {
      afterTitleIncludes: "Practice: tying SEO and HTML",
      title: "Before handing layout to SEO",
      lead: "DOM beats a checkbox validator.",
      items: [
        { id: "title", label: "Unique title on money URLs" },
        { id: "h1", label: "One meaningful H1" },
        { id: "dom", label: "Key text exists in HTML/DOM" },
        { id: "desc", label: "Description matches the page" },
        { id: "links", label: "Internal links are clickable <a>" },
        { id: "crit", label: "No critical structure breaks (unclosed blocks)" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: HTML and SEO",
        lead: "Two checks.",
        questions: [
          {
            id: "hs1",
            question: "Invalid HTML…",
            options: [
              "Automatically bans the site",
              "Isn’t a sentence, but mess hurts people and parsing",
              "Matters more than semantics",
              "Replaces title",
            ],
            correct: 1,
            explain: "Fix what’s critical; a validator isn’t TOP rankings.",
          },
          {
            id: "hs2",
            question: "In markup, SEO cares most about…",
            options: [
              "Only button colors in CSS",
              "Structure: title, headings, links, text in the DOM",
              "Meta keywords",
              "Hidden display:none text",
            ],
            correct: 1,
            explain: "Document meaning for bots and people.",
          },
        ],
      },
    ],
  },

  "adult-trafik": {
    checklist: {
      afterTitleIncludes: "Risks",
      title: "If an adult idea comes up",
      lead: "Law and policies first — not “schemes.”",
      items: [
        { id: "legal", label: "Understand legal limits in my GEO" },
        { id: "ads", label: "Checked ad/payment partner policies" },
        { id: "nogrey", label: "No TGP / traffic exchange / bypassing blocks" },
        { id: "age", label: "18+ model and moderation are clear" },
        { id: "rep", label: "Brand/agency reputation impact assessed" },
        { id: "alt", label: "Legal alternative niches considered" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: adult traffic",
        lead: "Two checks.",
        questions: [
          {
            id: "at1",
            question: "Adult traffic is…",
            options: [
              "Any traffic from adults 35+",
              "Visits in the 18+/erotic content segment",
              "A free boost method",
              "Only Google Ads",
            ],
            correct: 1,
            explain: "A content-niche label, not B2B age.",
          },
          {
            id: "at2",
            question: "Grey directories and bypassing blocks…",
            options: [
              "We recommend as SEO basics",
              "We don’t cover or recommend",
              "Are required everywhere",
              "Replace a lawyer",
            ],
            correct: 1,
            explain: "Focus on risks and the legal field.",
          },
        ],
      },
    ],
  },

  "negativnoe-seo": {
    checklist: {
      afterTitleIncludes: "What to monitor",
      title: "Defense against negative SEO",
      lead: "Monitoring beats “war.”",
      items: [
        { id: "wm", label: "Webmaster / GSC: security and coverage" },
        { id: "links", label: "Backlink snapshot for anomalies" },
        { id: "cms", label: "CMS/plugins updated, no extra admins" },
        { id: "backup", label: "Fresh backup exists" },
        { id: "copy", label: "Key URLs checked for copies" },
        { id: "noattack", label: "No plans to “attack a competitor”" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: negative SEO",
        lead: "Two checks.",
        questions: [
          {
            id: "ns1",
            question: "“How to ban a competitor” is…",
            options: [
              "A normal SEO strategy",
              "A bad frame; focus on your defense and growth",
              "A required brief step",
              "A content replacement",
            ],
            correct: 1,
            explain: "We don’t teach attacks; grow your site.",
          },
          {
            id: "ns2",
            question: "If you suspect toxic links…",
            options: [
              "DDoS back immediately",
              "Document, follow the engine’s guidance, strengthen your profile",
              "Delete the whole site",
              "Buy more spam links",
            ],
            correct: 1,
            explain: "Defense and data, not escalation.",
          },
        ],
      },
    ],
  },

  "poiskovye-sistemy": {
    checklist: {
      afterTitleIncludes: "Practical takeaway for a site",
      title: "Before expanding the search-engine list",
      lead: "Data first, exotic engines later.",
      items: [
        { id: "share", label: "Checked YA/Google share in Metrica" },
        { id: "panels", label: "Webmaster and Search Console connected" },
        { id: "bing", label: "Bing Webmaster — only if I see value/visits" },
        { id: "dead", label: "No budget for dead brands from 2010s articles" },
        { id: "geo", label: "For a new GEO, checked the local search leader" },
        { id: "focus", label: "Core SEO closed before spreading thin" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: search engines",
        lead: "Two checks.",
        questions: [
          {
            id: "ps1",
            question: "For commercial SEO in Russia the core is usually…",
            options: [
              "Only DuckDuckGo",
              "Yandex and Google per your analytics",
              "Only Rambler",
              "Ten dead engines at once",
            ],
            correct: 1,
            explain: "Look at your channel share.",
          },
          {
            id: "ps2",
            question: "Market shares from a 2020 article…",
            options: [
              "Can go straight into a pitch",
              "Need a check against fresh data / your counter",
              "Matter more than semantics",
              "Replace Webmaster",
            ],
            correct: 1,
            explain: "Stats go stale.",
          },
        ],
      },
    ],
  },

  "rsya-metrika": {
    checklist: {
      afterTitleIncludes: "How connection works",
      title: "Before YAN revenue reports",
      lead: "Counters must match.",
      items: [
        { id: "partner", label: "YAN partner site is active" },
        { id: "metrika", label: "Metrica counter works on the site" },
        { id: "link", label: "Revenue transfer set per current Help" },
        { id: "id", label: "Counter/site IDs match" },
        { id: "acl", label: "Financial-report access is limited" },
        { id: "read", label: "I compare revenue with visits by page" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: YAN in Metrica",
        lead: "Two checks.",
        questions: [
          {
            id: "rm1",
            question: "YAN revenue metrics in Metrica are…",
            options: [
              "Advertiser spend in Direct",
              "Publisher income from YAN impressions",
              "Only SEO positions",
              "A Wordstat replacement",
            ],
            correct: 1,
            explain: "Publisher reports, not a buy-side cabinet.",
          },
          {
            id: "rm2",
            question: "Without a YAN partnership…",
            options: [
              "Revenue reports still appear",
              "Full revenue reports won’t appear",
              "GA alone is enough",
              "Only FTP is needed",
            ],
            correct: 1,
            explain: "Need network participation and matched counters.",
          },
        ],
      },
    ],
  },

  "posmotret-avatar-instagram": {
    checklist: {
      afterTitleIncludes: "What to avoid",
      title: "Before viewing an avatar",
      lead: "Official methods first.",
      items: [
        { id: "feed", label: "Checked feed and Stories for full size" },
        { id: "web", label: "Opened the profile in official web on PC" },
        { id: "pwd", label: "Didn’t enter the password in a third-party “viewer”" },
        { id: "closed", label: "Not looking for a private-account bypass" },
        { id: "rights", label: "Not taking someone else’s photo without rights" },
        { id: "own", label: "For my own avatar, using the creation guide" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: Instagram avatar",
        lead: "Two checks.",
        questions: [
          {
            id: "pai1",
            question: "The calmest way to see an avatar larger…",
            options: [
              "Enter the password in Gramotool",
              "Feed/Stories or the official web",
              "A “open private profile” service",
              "Only a mobile magnifier app",
            ],
            correct: 1,
            explain: "Official channels without grey parsers.",
          },
          {
            id: "pai2",
            question: "A third-party “Profile Picture Viewer”…",
            options: [
              "Is an official Meta product",
              "Is often extra ToS and security risk",
              "Is required for business",
              "Improves the source resolution",
            ],
            correct: 1,
            explain: "We don’t recommend viewer catalogs.",
          },
        ],
      },
    ],
  },

  "glavnaya-stranitsa": {
    checklist: {
      afterTitleIncludes: "Block frame",
      title: "Homepage checklist",
      lead: "Before redesigning the first screen.",
      items: [
        { id: "offer", label: "Offer reads in five seconds" },
        { id: "cta", label: "CTA visible on mobile" },
        { id: "nav", label: "Menu leads to key sections" },
        { id: "proof", label: "Proof without fakes" },
        { id: "slider", label: "No slider for slider’s sake" },
        { id: "footer", label: "Footer with contacts and site map" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: homepage",
        lead: "Two checks.",
        questions: [
          {
            id: "gs1",
            question: "The homepage should…",
            options: [
              "Fit the whole site as text",
              "Explain the meaning and direct further",
              "Be only a slider",
              "Duplicate every landing page",
            ],
            correct: 1,
            explain: "Intro and navigation, not a wall of text.",
          },
          {
            id: "gs2",
            question: "A ten-banner slider…",
            options: [
              "Is required for SEO",
              "Often hurts; one clear screen is stronger",
              "Replaces the offer",
              "Is needed instead of a footer",
            ],
            correct: 1,
            explain: "Clarity beats the carousel.",
          },
        ],
      },
    ],
  },

  "zapusk-internet-magazina": {
    checklist: {
      afterTitleIncludes: "Business plan before the domain",
      title: "Before launching a store",
      lead: "Economics first, banners later.",
      items: [
        { id: "plan", label: "Draft unit economics and supply exist" },
        { id: "model", label: "Model chosen: warehouse / dropship / fulfillment" },
        { id: "cms", label: "Platform fits catalog and integrations" },
        { id: "legal", label: "Legal form and receipts checked against current rules" },
        { id: "pay", label: "Payments and checkout tested" },
        { id: "seo", label: "SEO expectations: prep ~1 month, TOP 2–6 months" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: store launch",
        lead: "Two checks.",
        questions: [
          {
            id: "zim1",
            question: "Before choosing a CMS, what matters more…",
            options: [
              "Only a pretty template",
              "Plan, supply, and unit economics",
              "Buying someone else’s “ready” store blind",
              "Buying links immediately",
            ],
            correct: 1,
            explain: "A platform won’t save empty economics.",
          },
          {
            id: "zim2",
            question: "Ranking the core after launch…",
            options: [
              "Is guaranteed in a week",
              "Is planned over 2–6 months of work after prep",
              "Is a side effect of one CMS",
              "Doesn’t need a catalog",
            ],
            correct: 1,
            explain: "SEO is a months-long horizon.",
          },
        ],
      },
    ],
  },

  "napominanie-klientu": {
    checklist: {
      afterTitleIncludes: "Principle: an occasion, not pressure",
      title: "Before a reminder series",
      lead: "Consent and usefulness beat frequency.",
      items: [
        { id: "optin", label: "Marketing consent and unsubscribe exist" },
        { id: "reason", label: "Every touch has a clear occasion" },
        { id: "cart", label: "Cart — hours/days, not “in a month and a half”" },
        { id: "bd", label: "Birthdays only from our legal data" },
        { id: "tone", label: "No “you haven’t visited” template as the base" },
        { id: "measure", label: "I watch complaints/unsubscribes, not only opens" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: client reminders",
        lead: "Two checks.",
        questions: [
          {
            id: "nk1",
            question: "The best reminder tone is…",
            options: [
              "Only “buy now” every day",
              "Usefulness and a fitting occasion with consent",
              "Scraping birthdays from other profiles",
              "Email with no unsubscribe",
            ],
            correct: 1,
            explain: "Occasion + opt-in.",
          },
          {
            id: "nk2",
            question: "An abandoned-cart email usually…",
            options: [
              "Waits 1–1.5 months",
              "Goes relatively fast (hours–days) as a series",
              "Replaces payment",
              "Needs no consent",
            ],
            correct: 1,
            explain: "A fresh trigger beats late spam.",
          },
        ],
      },
    ],
  },

  "kontent-i-nativnaya": {
    checklist: {
      afterTitleIncludes: "Main differences",
      title: "Before a “content or native” brief",
      lead: "Roles first, budget second.",
      items: [
        { id: "owned", label: "Have an owned asset to send traffic to" },
        { id: "mark", label: "Paid integrations include ad labeling" },
        { id: "kpi", label: "KPIs differ: trust system vs placement/traffic" },
        { id: "terms", label: "Brief doesn’t treat the terms as synonyms" },
        { id: "combo", label: "If native — next step on our site is clear" },
        { id: "stats", label: "Not relying on CPC/reach from 2020 articles" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: content and native",
        lead: "Two checks.",
        questions: [
          {
            id: "kin1",
            question: "Native advertising is primarily…",
            options: [
              "A free post on your own blog",
              "A paid piece in someone else’s format",
              "SEO only with no payment",
              "A substitute for labeling",
            ],
            correct: 1,
            explain: "Pay-to-play in someone else’s environment.",
          },
          {
            id: "kin2",
            question: "Content marketing…",
            options: [
              "Always equals Taboola",
              "Is a system of useful brand assets on a long horizon",
              "Bans native forever",
              "Needs no landing page",
            ],
            correct: 1,
            explain: "Your usefulness system — not only placement.",
          },
        ],
      },
    ],
  },

  "tekst-glavnoy-stranitsy": {
    checklist: {
      afterTitleIncludes: "What annoys people on a homepage",
      title: "Homepage copy cleanup",
      lead: "Before publishing the offer.",
      items: [
        { id: "super", label: "Removed “best/#1” without proof" },
        { id: "stamp", label: "Cut “personalized approach” clichés without facts" },
        { id: "keys", label: "Keywords read naturally" },
        { id: "you", label: "Consistent “you” style" },
        { id: "short", label: "First screen short; details on inner pages" },
        { id: "cta", label: "One clear CTA" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: homepage copy",
        lead: "Two checks.",
        questions: [
          {
            id: "tgs1",
            question: "“Best specialists” with no facts…",
            options: [
              "Is required for SEO",
              "Is usually noise and a weak offer",
              "Replaces the CTA",
              "Belongs in every paragraph",
            ],
            correct: 1,
            explain: "Concrete proof is better.",
          },
          {
            id: "tgs2",
            question: "A long SEO text on the homepage…",
            options: [
              "Always raises conversion",
              "Is often unnecessary: details belong on inner pages",
              "Is required instead of the offer",
              "Replaces the header",
            ],
            correct: 1,
            explain: "The homepage introduces; it doesn’t store everything.",
          },
        ],
      },
    ],
  },

  "kak-napisat-statyu": {
    checklist: {
      afterTitleIncludes: "Analysis first, typing second",
      title: "Before drafting an article",
      lead: "Without a goal the text is empty.",
      items: [
        { id: "goal", label: "Goal and audience written down" },
        { id: "plan", label: "H2/H3 outline exists" },
        { id: "facts", label: "Facts/examples at hand" },
        { id: "draft", label: "Draft follows the outline — no freeze on one phrase" },
        { id: "edit", label: "Structure and fluff edit done" },
        { id: "seo", label: "SEO only on top of readable text" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: how to write an article",
        lead: "Two checks.",
        questions: [
          {
            id: "kns1",
            question: "The right article start is…",
            options: [
              "Open Word and write a stream",
              "Goal, audience, and outline — then a draft",
              "Only keyword density",
              "Publish with no editing",
            ],
            correct: 1,
            explain: "Analysis before typing.",
          },
          {
            id: "kns2",
            question: "SEO in an article…",
            options: [
              "Always matters more than meaning",
              "Strengthens finished useful text",
              "Guarantees TOP in a week",
              "Needs a keyword in every sentence",
            ],
            correct: 1,
            explain: "Usefulness first, then optimization.",
          },
        ],
      },
    ],
  },

  "rss": {
    checklist: {
      afterTitleIncludes: "How to add RSS",
      title: "Before enabling the feed",
      lead: "Stable URL first, button second.",
      items: [
        { id: "url", label: "Know the CMS feed URL (/feed/ or equivalent)" },
        { id: "anon", label: "Feed uses teasers, not necessarily full text" },
        { id: "valid", label: "Checked the feed in a browser/reader" },
        { id: "icon", label: "Subscribe link/icon exists on the site" },
        { id: "steal", label: "Understand copy risk from XML" },
        { id: "no-grab", label: "Not using someone else’s RSS for a grabber" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: RSS",
        lead: "Two checks.",
        questions: [
          {
            id: "rss1",
            question: "RSS is primarily…",
            options: [
              "A TOP-10 guarantee",
              "A teaser feed for subscribers and integrations",
              "A semantic-core replacement",
              "A text synonymizer",
            ],
            correct: 1,
            explain: "Update distribution — not SEO magic.",
          },
          {
            id: "rss2",
            question: "Full article text in the feed…",
            options: [
              "Is always required",
              "Is often worse than a teaser: fewer reasons to visit and higher copy risk",
              "Is banned by law",
              "Is only for doorway sites",
            ],
            correct: 1,
            explain: "Teaser + link is usually more practical.",
          },
        ],
      },
    ],
  },

  "tz-kopiraytera": {
    checklist: {
      afterTitleIncludes: "Frame for selling copy",
      title: "Before sending the brief",
      lead: "Without a goal, revisions never end.",
      items: [
        { id: "goal", label: "Goal and CTA are written" },
        { id: "aud", label: "Audience is described" },
        { id: "facts", label: "Facts/figures attached by you — not “just Google it”" },
        { id: "plan", label: "Outline or questionnaire exists" },
        { id: "stop", label: "Stop-list and tone are stated" },
        { id: "accept", label: "Acceptance criteria and revision limit are clear" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: copywriter brief",
        lead: "Two checks.",
        questions: [
          {
            id: "tz1",
            question: "A vague “write something nice about the service”…",
            options: [
              "Guarantees perfect copy",
              "Often misses the brief and adds extra revisions",
              "Replaces semantics",
              "Is only needed for SEO",
            ],
            correct: 1,
            explain: "A clear brief saves rewrites.",
          },
          {
            id: "tz2",
            question: "Uniqueness % in the brief…",
            options: [
              "Is the only KPI for the text",
              "Is a check guide, not a substitute for meaning and offer",
              "Matters more than the page goal",
              "Must be exactly 100%",
            ],
            correct: 1,
            explain: "Usefulness and offer first; checker score second.",
          },
        ],
      },
    ],
  },

  "zagolovki-4u": {
    checklist: {
      afterTitleIncludes: "Four pillars",
      title: "Before publishing a headline",
      lead: "Benefit and fact beat clickbait.",
      items: [
        { id: "use", label: "There’s a benefit for the reader" },
        { id: "uniq", label: "There’s a difference without empty “#1”" },
        { id: "spec", label: "There’s a number/segment — or a conscious skip" },
        { id: "urg", label: "Urgency is honest or absent" },
        { id: "fmt", label: "A long 4U is split into headline + subhead" },
        { id: "test", label: "Ready to compare 2–3 variants" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: 4U headlines",
        lead: "Two checks.",
        questions: [
          {
            id: "u41",
            question: "The almost-always required 4U element is…",
            options: [
              "A fake timer",
              "A benefit for the reader",
              "The word “unique” with no fact",
              "Exactly 12 words in the title",
            ],
            correct: 1,
            explain: "Without a benefit the headline is empty.",
          },
          {
            id: "u42",
            question: "An online 4U generator…",
            options: [
              "Replaces a marketer",
              "Usually glues your words weakly",
              "Guarantees CTR ×10",
              "Is required by law",
            ],
            correct: 1,
            explain: "A live headline after a brief is stronger.",
          },
        ],
      },
    ],
  },

  "o-kompanii": {
    checklist: {
      afterTitleIncludes: "What is useful to write",
      title: "Before publishing About",
      lead: "Facts beat biography.",
      items: [
        { id: "who", label: "Clear who you serve and which job you close" },
        { id: "proof", label: "Proof exists (cases, numbers with context)" },
        { id: "tone", label: "Tone matched to the audience" },
        { id: "no-empty", label: "Empty “we’re the best / innovation” removed" },
        { id: "promise", label: "Promises are deliverable" },
        { id: "not-seo", label: "Page is not a keyword sheet" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: About the company",
        lead: "Two checks.",
        questions: [
          {
            id: "ok1",
            question: "The main goal of About is…",
            options: [
              "Cover every niche keyword",
              "Reduce doubts and confirm trust",
              "Tell founders’ biography across 10 screens",
              "Replace reviews and cases",
            ],
            correct: 1,
            explain: "Trust and facts for choosing — not a novel.",
          },
          {
            id: "ok2",
            question: "Template “why us: professionals and approach” with no facts…",
            options: [
              "Is required for SEO",
              "Is better replaced with specifics",
              "Guarantees conversion",
              "Replaces legal details",
            ],
            correct: 1,
            explain: "Empty stamps don’t help people choose.",
          },
        ],
      },
    ],
  },

  "avtovoronka-instagram": {
    checklist: {
      afterTitleIncludes: "Profile prep",
      title: "Before launching an Instagram funnel",
      lead: "Scenario beats the bot.",
      items: [
        { id: "map", label: "Step map is drawn" },
        { id: "cta", label: "Profile has a clear CTA and contacts" },
        { id: "direct", label: "First Direct reply scenario exists" },
        { id: "offer", label: "Core offer is clear" },
        { id: "tos", label: "No cold spam or grey software" },
        { id: "pilot", label: "Pilot plan with step measurement" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: Instagram autofunnel",
        lead: "Two checks.",
        questions: [
          {
            id: "ai1",
            question: "Cold mass Direct blasting…",
            options: [
              "Is required for a funnel",
              "Risks complaints and restrictions",
              "Guarantees conversion ×10",
              "Replaces ads",
            ],
            correct: 1,
            explain: "Message inbound and opted-in people.",
          },
          {
            id: "ai2",
            question: "What’s the smarter start?",
            options: [
              "A catalogue of grey bots",
              "Path map, profile, and offer",
              "Only emojis in posts",
              "Turn off managers immediately",
            ],
            correct: 1,
            explain: "Scenario first, automation second.",
          },
        ],
      },
    ],
  },

  "avtovoronka-vk": {
    checklist: {
      afterTitleIncludes: "How to build it",
      title: "Before launching a VK funnel",
      lead: "Opt-in beats frequency.",
      items: [
        { id: "comm", label: "Community with a clear offer" },
        { id: "optin", label: "Message subscription exists" },
        { id: "chain", label: "3–5 step chain with copy" },
        { id: "tool", label: "Tool from VK catalog / within ToS" },
        { id: "human", label: "Path to an operator is planned" },
        { id: "metrics", label: "Step metrics — not someone else’s %" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: VK autofunnel",
        lead: "Two checks.",
        questions: [
          {
            id: "vk1",
            question: "Community message broadcasts are for…",
            options: [
              "All friends without consent",
              "People who opted into messages",
              "Only the wall of the wall",
              "Instead of an offer",
            ],
            correct: 1,
            explain: "Opt-in is the base of a legal chain.",
          },
          {
            id: "vk2",
            question: "Someone else’s “80% open rate”…",
            options: [
              "Is a guarantee for you",
              "Is an old-review guide — use your own numbers",
              "Replaces a CRM",
              "Is required in the report",
            ],
            correct: 1,
            explain: "Count your own steps.",
          },
        ],
      },
    ],
  },

  "prodayushchiy-kontent": {
    checklist: {
      afterTitleIncludes: "How to build the plan",
      title: "Before a selling plan",
      lead: "Mix beats a daily shop window.",
      items: [
        { id: "aud", label: "Audience and purchase path described" },
        { id: "mix", label: "Plan has offer / value / brand" },
        { id: "cta", label: "Selling slots have a clear CTA" },
        { id: "honest", label: "Promises and urgency are honest" },
        { id: "b2", label: "Tone matched to B2C or B2B" },
        { id: "metric", label: "Measure leads/clicks, not only likes" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: selling content",
        lead: "Two checks.",
        questions: [
          {
            id: "pk1",
            question: "Selling content in social is primarily…",
            options: [
              "Only daily −50% sales",
              "A clear action while keeping trust",
              "A website replacement",
              "A guarantee of 500,000 followers in a month",
            ],
            correct: 1,
            explain: "Action + trust, not only a shop window.",
          },
          {
            id: "pk2",
            question: "Fake urgency “only 2 left”…",
            options: [
              "Is required in every post",
              "Hurts trust and ad rules if untrue",
              "Replaces a USP",
              "Is only for B2B",
            ],
            correct: 1,
            explain: "Honesty beats the trick.",
          },
        ],
      },
    ],
  },

  "nazvanie-internet-magazina": {
    checklist: {
      afterTitleIncludes: "How to pick from a shortlist",
      title: "Online store name checklist",
      lead: "Before registering domain and logo.",
      items: [
        { id: "audience", label: "Name is clear to the target audience" },
        { id: "assort", label: "Tied to assortment / niche" },
        { id: "sound", label: "Easy to say and dictate" },
        { id: "domain", label: "Domain and social handles free / aligned" },
        { id: "unique", label: "No confusion with another brand" },
        { id: "length", label: "1–3 words, fits a logo" },
        { id: "survey", label: "Short audience survey done" },
        { id: "spell", label: "Spelling and translit locked" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why the name matters for a store",
        title: "Mini quiz: store name",
        lead: "Two checks.",
        questions: [
          {
            id: "nm1",
            question: "Keyword stuffing “buy … cheap” into the brand…",
            options: [
              "Is required for SEO",
              "Usually hurts trust and sound",
              "Replaces a domain",
              "Guarantees TOP rankings",
            ],
            correct: 1,
            explain: "A brand is about recognition — not a query sheet.",
          },
          {
            id: "nm2",
            question: "Before the final name choice…",
            options: [
              "“We like it” is enough",
              "Check domain, search, and an audience survey",
              "Only register a company",
              "Only buy links",
            ],
            correct: 1,
            explain: "Checks cut conflicts and pronunciation fails.",
          },
        ],
      },
    ],
  },

  "parsing-python": {
    checklist: {
      afterTitleIncludes: "Environment: install and first .py",
      title: "Before the first parser",
      lead: "A stack without grey tricks.",
      items: [
        { id: "venv", label: "Python 3 and venv installed" },
        { id: "source", label: "Source ToS/robots understood" },
        { id: "api", label: "Checked for an official API" },
        { id: "lib", label: "Library class chosen for the task" },
        { id: "limits", label: "Pauses and limits planned" },
        { id: "bypass", label: "No plan to bypass anti-bot" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Legality and ethics of collection",
        title: "Mini quiz: Python parsing",
        lead: "Two checks.",
        questions: [
          {
            id: "pp1",
            question: "The site responds with captcha and limits. What next?",
            options: [
              "Spoof User-Agent and continue",
              "Stop / lower load / look for an API",
              "Turn on Selenium and “break” protection",
              "Ignore robots.txt",
            ],
            correct: 1,
            explain: "A platform refusal isn’t a bypass homework.",
          },
          {
            id: "pp2",
            question: "For learning static HTML parsing, better…",
            options: [
              "Selenium for everything right away",
              "requests + Beautiful Soup",
              "Only PHP with no HTTP",
              "Proxy farms for someone else’s database",
            ],
            correct: 1,
            explain: "Light stack for static; browser isn’t the default.",
          },
        ],
      },
    ],
  },

  "json": {
    checklist: {
      afterTitleIncludes: "Syntax: objects and arrays",
      title: "Before shipping JSON in an API",
      lead: "Strict syntax saves integrations.",
      items: [
        { id: "quotes", label: "Keys and strings in double quotes" },
        { id: "comma", label: "No trailing comma at the end" },
        { id: "phone", label: "Phones/SKUs as strings" },
        { id: "parse", label: "On the client only JSON.parse / equivalent" },
        { id: "secrets", label: "Secrets not in public JSON" },
        { id: "valid", label: "File run through a validator/formatter" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Ajax, API, and security",
        title: "Mini quiz: JSON",
        lead: "Two checks.",
        questions: [
          {
            id: "js1",
            question: "Parsing foreign JSON with eval…",
            options: [
              "Fine for production",
              "Dangerous: it can execute code",
              "Required in old browsers",
              "Needed for robots.txt",
            ],
            correct: 1,
            explain: "Only a built-in parser — not eval.",
          },
          {
            id: "js2",
            question: "JSON is…",
            options: [
              "A programming language",
              "A text format for data exchange",
              "Only a Yandex Market format",
              "A replacement for HTTPS",
            ],
            correct: 1,
            explain: "A data format, not a language.",
          },
        ],
      },
    ],
  },

  "analiz-reklamnoy-kampanii": {
    checklist: {
      afterTitleIncludes: "Linking the account to analytics",
      title: "Before reviewing a campaign",
      lead: "Data before bid tweaks.",
      items: [
        { id: "link", label: "Account linked to Metrica / Analytics" },
        { id: "goals", label: "Goals / purchases are tracked" },
        { id: "keys", label: "Keywords and placements reviewed" },
        { id: "aud", label: "Demographics, time, devices, geo" },
        { id: "land", label: "Landings matched to ads" },
        { id: "actions", label: "Fix list and review date" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "How to close the review",
        title: "Mini quiz: campaign analysis",
        lead: "Two checks.",
        questions: [
          {
            id: "ar1",
            question: "Optimizing bids without goals in analytics…",
            options: [
              "Is fine",
              "Is guessing — link and conversions first",
              "CTR is enough",
              "Only for display networks",
            ],
            correct: 1,
            explain: "Without goals there’s no economics.",
          },
          {
            id: "ar2",
            question: "Low mobile conversion more often…",
            options: [
              "Means turn off all mobile immediately",
              "Means fix the bid and/or landing",
              "Means keywords are perfect",
              "Is ignored",
            ],
            correct: 1,
            explain: "Cutting a whole segment is a last resort.",
          },
        ],
      },
    ],
  },

  "primery-email-rassylok": {
    checklist: {
      afterTitleIncludes: "Offer creative, progress, and feedback",
      title: "Before sending “creative”",
      lead: "Technique beats copying someone else’s layout.",
      items: [
        { id: "idea", label: "One main technique (choice / tone / progress / feedback)" },
        { id: "cta", label: "One clear CTA" },
        { id: "tone", label: "Tone matches the brand" },
        { id: "mobile", label: "Email reads on a phone" },
        { id: "optin", label: "Opt-in list, unsubscribe in place" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Choice and comparison in one email",
        title: "Mini quiz: email examples",
        lead: "Two checks.",
        questions: [
          {
            id: "pe1",
            question: "Another brand’s layout is better…",
            options: [
              "Copied one-to-one",
              "Broken into a technique and adapted",
              "With the CTA ignored",
              "Sent without unsubscribe",
            ],
            correct: 1,
            explain: "Logic transfers; visuals stay yours.",
          },
          {
            id: "pe2",
            question: "Two plans in one email fit when…",
            options: [
              "The segment is still rough and needs a choice",
              "Always — more buttons are better",
              "Only without a subject",
              "Only without consent",
            ],
            correct: 0,
            explain: "Give a choice, not a ten-CTA shop window.",
          },
        ],
      },
    ],
  },

  "nativnaya-reklama": {
    checklist: {
      afterTitleIncludes: "Thin content and sloppy",
      title: "Before launching native",
      lead: "Honesty beats “blending in” without labeling.",
      items: [
        { id: "mark", label: "Ad labeling agreed" },
        { id: "tone", label: "Tone matches the platform/author" },
        { id: "product", label: "Author had product or case access" },
        { id: "story", label: "There’s a plot/value, not only a USP" },
        { id: "link", label: "Link is woven in, doesn’t split the text" },
        { id: "length", label: "Enough room for integration context" },
        { id: "cta", label: "CTA without fake excitement" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Fake emotions",
        title: "Mini quiz: native advertising",
        lead: "Two checks.",
        questions: [
          {
            id: "na1",
            question: "Hiding that the piece is advertising…",
            options: [
              "Is required for native",
              "Is not allowed — labeling is required",
              "Is replaced by useful text",
              "Is an SEO requirement",
            ],
            correct: 1,
            explain: "Organic feel ≠ camouflage.",
          },
          {
            id: "na2",
            question: "A short “pains → buy” roundup…",
            options: [
              "Is the best native format",
              "Often reads as an ad",
              "Replaces labeling",
              "Is needed for TOP rankings",
            ],
            correct: 1,
            explain: "You need story and experience.",
          },
        ],
      },
    ],
  },

  "sayt-pered-reklamoy": {
    checklist: {
      afterTitleIncludes: "Goal and KPI first",
      title: "Before turning on budget",
      lead: "Landing before bids.",
      items: [
        { id: "kpi", label: "KPI in money / lead cost" },
        { id: "forms", label: "Forms and thank-you / event work" },
        { id: "analytics", label: "Goal fires in Metrica/Analytics" },
        { id: "offer", label: "First screen matches the ad promise" },
        { id: "mobile", label: "Mobile: CTA and lead form OK" },
        { id: "lead", label: "Test lead reached a manager" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Launch order without burning budget",
        title: "Mini quiz: site before ads",
        lead: "Two checks.",
        questions: [
          {
            id: "sp1",
            question: "Clicks but no leads — first…",
            options: [
              "Raise bids ×2",
              "Check goals, forms, and the site offer",
              "Turn off all analytics",
              "Buy more keywords",
            ],
            correct: 1,
            explain: "A raw landing burns budget.",
          },
          {
            id: "sp2",
            question: "The main KPI for launching paid search…",
            options: [
              "Only CTR",
              "Tied to leads/revenue and cost",
              "Impression count",
              "Having a favicon",
            ],
            correct: 1,
            explain: "Clicks without economics aren’t success.",
          },
        ],
      },
    ],
  },

  "besplatnaya-reklama": {
    checklist: {
      afterTitleIncludes: "When to add budget",
      title: "Start without a media budget",
      lead: "Time is a resource too.",
      items: [
        { id: "offer", label: "Offer and landing are clear" },
        { id: "channel", label: "1–2 honest channels chosen for the niche" },
        { id: "rules", label: "Platform rules accounted for" },
        { id: "no-gray", label: "No mass bots or bought lists" },
        { id: "measure", label: "Leads are measured" },
        { id: "time", label: "Weekly hours per channel are realistic" },
        { id: "next", label: "A small paid test channel is planned" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What not to do",
        title: "Mini quiz: free advertising",
        lead: "Two checks.",
        questions: [
          {
            id: "br1",
            question: "Mass follow with bots as a strategy…",
            options: [
              "Is the best free channel",
              "Risks bans — don’t build growth on it",
              "Is required for SEO",
              "Replaces a landing",
            ],
            correct: 1,
            explain: "A grey path with restriction risk.",
          },
          {
            id: "br2",
            question: "Fully free promotion…",
            options: [
              "Always exists with zero cost",
              "Doesn’t exist: you pay with money or time",
              "Guarantees TOP in a week",
              "Replaces the product",
            ],
            correct: 1,
            explain: "Time is a cost too.",
          },
        ],
      },
    ],
  },

  "amp": {
    checklist: {
      afterTitleIncludes: "Do you need AMP now",
      title: "Before deciding on AMP",
      lead: "Your own mobile beats a 2015 format.",
      items: [
        { id: "vitals", label: "Core Web Vitals measured on the canonical" },
        { id: "adaptive", label: "Responsive is readable and fast without AMP" },
        { id: "cta", label: "Conversions counted on the full site" },
        { id: "canon", label: "Canonical doesn’t confuse /amp and the main URL" },
        { id: "analytics", label: "Analytics set up on the main version" },
        { id: "must", label: "Not adding AMP “for an SEO checkbox”" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Upsides and downsides of the AMP era",
        title: "Mini quiz: AMP",
        lead: "Two checks.",
        questions: [
          {
            id: "amp1",
            question: "In 2026 for a typical commercial site AMP is…",
            options: [
              "Required for TOP-10",
              "Not a must-have; a fast own mobile matters more",
              "A full replacement for responsive",
              "Needed only for Yandex",
            ],
            correct: 1,
            explain: "Speed is covered on canonical URLs.",
          },
          {
            id: "amp2",
            question: "Google’s AMP cache meant…",
            options: [
              "Traffic always went only to your host",
              "A copy could be served from search infrastructure",
              "A conversion guarantee",
              "Analytics forever disabled",
            ],
            correct: 1,
            explain: "Some views came from the cache, not your server.",
          },
        ],
      },
    ],
  },

  "oshibki-smm": {
    checklist: {
      afterTitleIncludes: "No strategy and no audience portrait",
      title: "Before the next month of SMM",
      lead: "Goal and platform beat checkbox posts.",
      items: [
        { id: "goal", label: "There’s a monthly goal (not “just post”)" },
        { id: "audience", label: "Audience really exists on the chosen platform" },
        { id: "plan", label: "Content plan for 2+ weeks" },
        { id: "rhythm", label: "Rhythm without silence spikes and spam" },
        { id: "moderation", label: "Rules: spam out, criticism answered" },
        { id: "budget", label: "Time/money for content and an ad test" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: SMM mistakes",
        lead: "Two checks.",
        questions: [
          {
            id: "os1",
            question: "Social networks by themselves…",
            options: [
              "Guarantee TOP-10 in search",
              "Give traffic and warm-up; SEO is scored separately",
              "Replace the offer",
              "Require only mass liking",
            ],
            correct: 1,
            explain: "Don’t confuse SMM with SERP positions.",
          },
          {
            id: "os2",
            question: "Deleting all negative comments…",
            options: [
              "Is always right",
              "Lowers trust; answer on substance, remove spam",
              "Is required for SEO",
              "Replaces a content plan",
            ],
            correct: 1,
            explain: "A “fives only” showcase looks fake.",
          },
        ],
      },
    ],
  },

  "infopovod": {
    checklist: {
      afterTitleIncludes: "Mechanism: from idea",
      title: "Before launching a news hook",
      lead: "One clear news line beats noise.",
      items: [
        { id: "one", label: "News stated in one sentence" },
        { id: "why", label: "Clear why the audience cares now" },
        { id: "role", label: "Brand role fits, no stretch" },
        { id: "pack", label: "Editor pack ready (facts, quote, photo)" },
        { id: "ethic", label: "No toxic newsjacking" },
        { id: "metric", label: "Success metric set in advance" },
        { id: "follow", label: "Plan to lock the topic (article/FAQ/case)" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Newsjacking",
        title: "Mini quiz: news hook",
        lead: "Two checks.",
        questions: [
          {
            id: "ip1",
            question: "Newsjacking around a tragedy…",
            options: [
              "Is the best reach tactic",
              "Almost always hurts the brand",
              "Is required in PR",
              "Replaces research",
            ],
            correct: 1,
            explain: "Ethics beat hype.",
          },
          {
            id: "ip2",
            question: "A planned news hook…",
            options: [
              "Is always worse than unplanned",
              "You prepare: release, research, anniversary",
              "Is banned by law",
              "Only works with memes",
            ],
            correct: 1,
            explain: "You can package it in advance.",
          },
        ],
      },
    ],
  },

  "autrich": {
    checklist: {
      afterTitleIncludes: "How to fit it into the SEO plan",
      title: "Outreach checklist",
      lead: "Before a wave of editor emails.",
      items: [
        { id: "base", label: "Own site isn’t raw: tech and strong pages" },
        { id: "list", label: "Donor table with topical fit" },
        { id: "spam", label: "Obvious link spam filtered out" },
        { id: "pitch", label: "Emails personalized per platform" },
        { id: "value", label: "Topic helps readers, not “article with a link”" },
        { id: "legal", label: "Ads labeled per platform rules" },
        { id: "check", label: "After publish: URL and mention checked" },
        { id: "kpi", label: "KPI: replies/pubs/traffic, not only links" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "When outreach makes sense",
        title: "Mini quiz: outreach",
        lead: "Two checks.",
        questions: [
          {
            id: "au1",
            question: "“Bad links for naturalness”…",
            options: [
              "Are required",
              "Aren’t needed; fewer strong mentions are better",
              "Replace content",
              "Are required by Wikipedia",
            ],
            correct: 1,
            explain: "We don’t add junk on purpose.",
          },
          {
            id: "au2",
            question: "Wikipedia in outreach…",
            options: [
              "Is the main link donor",
              "Isn’t the goal: edits for a link break the rules",
              "Is required for TOP",
              "Replaces guest posts",
            ],
            correct: 1,
            explain: "No Wikipedia link schemes.",
          },
        ],
      },
    ],
  },

  "programmy-seo": {
    checklist: {
      afterTitleIncludes: "How to build the stack",
      title: "SEO stack checklist",
      lead: "Before paying for new subscriptions.",
      items: [
        { id: "tasks", label: "Project task list is written down" },
        { id: "core", label: "Wordstat + Webmaster/GSC + counter exist" },
        { id: "crawl", label: "There’s a crawler for your site" },
        { id: "goals", label: "Analytics goals are set" },
        { id: "text", label: "Copy-check tool agreed in the brief" },
        { id: "paid", label: "Paid suites only for a real pain" },
        { id: "table", label: "Table: task → tool → limits" },
        { id: "review", label: "Quarterly audit of unused subscriptions" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Semantics and demand",
        title: "Mini quiz: SEO software",
        lead: "Two checks.",
        questions: [
          {
            id: "ps1",
            question: "At project start…",
            options: [
              "Buy every paid suite immediately",
              "Base: Wordstat, webmaster panels, counter, crawler",
              "Only Rookee",
              "Only Alexa",
            ],
            correct: 1,
            explain: "Tasks and the free layer first.",
          },
          {
            id: "ps2",
            question: "Installing SEO software…",
            options: [
              "Guarantees TOP in a week",
              "Speeds data collection; TOP takes months after work",
              "Replaces semantics",
              "Replaces Metrica",
            ],
            correct: 1,
            explain: "A tool ≠ SERP results.",
          },
        ],
      },
    ],
  },

  "email-marketing-2020": {
    checklist: {
      afterTitleIncludes: "Mobile emails without fanaticism",
      title: "Before a “trendy” campaign",
      lead: "List and mobile first, experiments second.",
      items: [
        { id: "mobile", label: "Subject and CTA checked on a phone" },
        { id: "html", label: "Plain HTML fallback exists" },
        { id: "trigger", label: "At least one trigger scenario exists" },
        { id: "crm", label: "CRM/site link is clear" },
        { id: "no-amp", label: "Not betting only on experimental interactivity" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Personalization and segments",
        title: "Mini quiz: email practice",
        lead: "Two checks.",
        questions: [
          {
            id: "em1",
            question: "Complex interactivity in emails…",
            options: [
              "Is required for every ESP",
              "Is optional; needs an HTML fallback",
              "Replaces consent",
              "Guarantees TOP in search",
            ],
            correct: 1,
            explain: "Client support is uneven.",
          },
          {
            id: "em2",
            question: "Stronger than “name in the subject” is…",
            options: [
              "A random subject with no segment",
              "Segment, behavior, and triggers",
              "Buying other people’s lists",
              "Turning off unsubscribe",
            ],
            correct: 1,
            explain: "Personalization goes deeper than a name.",
          },
        ],
      },
    ],
  },

  "operatory-poiska": {
    checklist: {
      afterTitleIncludes: "Limits and place in the process",
      title: "Search operators checklist",
      lead: "After a release or on an audit.",
      items: [
        { id: "site", label: "site: checked on key sections" },
        { id: "title", label: "Suspicious intitle: duplicates reviewed" },
        { id: "files", label: "Extra filetype: in the index noted" },
        { id: "params", label: "Utility inurl: (session/sort) checked" },
        { id: "yandex", label: "Yandex slice cross-checked with Google" },
        { id: "panels", label: "Gaps checked against Webmaster/GSC" },
        { id: "dead", label: "Outdated related:/cache: not in strategy" },
        { id: "ticket", label: "Findings turned into fix tickets" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Key Google operators for SEO",
        title: "Mini quiz: search operators",
        lead: "Two checks.",
        questions: [
          {
            id: "op1",
            question: "site:example.com…",
            options: [
              "A full forever list of every site URL",
              "A sample of domain pages in the SERP (an estimate)",
              "A Screaming Frog replacement",
              "A TOP-1 guarantee",
            ],
            correct: 1,
            explain: "A SERP slice — not a CMS inventory.",
          },
          {
            id: "op2",
            question: "Operators by themselves…",
            options: [
              "Raise rankings",
              "Help diagnose; fixes are done separately",
              "Replace semantics",
              "Are required hourly",
            ],
            correct: 1,
            explain: "Diagnostics ≠ ranking.",
          },
        ],
      },
    ],
  },

  "parsing-email": {
    checklist: {
      afterTitleIncludes: "Legal alternatives to parsing",
      title: "Before an email campaign",
      lead: "Consent beats list size.",
      items: [
        { id: "optin", label: "Addresses from your forms/CRM with consent" },
        { id: "source", label: "Source of each contact is clear" },
        { id: "unsub", label: "Easy unsubscribe exists" },
        { id: "bounce", label: "Hard bounces cleaned on your own list" },
        { id: "cold", label: "Not buying “scraped” lists" },
        { id: "parser", label: "Not planning mass harvest of others’ emails" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Risks: law, spam, and reputation",
        title: "Mini quiz: email parsing",
        lead: "Two checks.",
        questions: [
          {
            id: "pe1",
            question: "A bought “niche list” for cold mail…",
            options: [
              "Is the best email marketing start",
              "Risks complaints, bounce, and domain reputation drop",
              "Is required by law",
              "Replaces site forms",
            ],
            correct: 1,
            explain: "An opt-in list outlasts any “cheap” dump.",
          },
          {
            id: "pe2",
            question: "A legal alternative to an email parser…",
            options: [
              "Bypassing social anti-bot",
              "A lead magnet and forms with consent",
              "A script harvesting every mailto: from the SERP",
              "Ignoring unsubscribe",
            ],
            correct: 1,
            explain: "People leave the address themselves — the list lasts longer.",
          },
        ],
      },
    ],
  },

  "mixed-content": {
    checklist: {
      afterTitleIncludes: "How to remove",
      title: "After the HTTPS move",
      lead: "A certificate ≠ clean resources.",
      items: [
        { id: "devtools", label: "Checked key URLs in Console/Security" },
        { id: "active", label: "No http in script/CSS/iframe" },
        { id: "imgs", label: "Images and fonts on https or relative" },
        { id: "templates", label: "Templates and widgets updated" },
        { id: "canon", label: "Canonical and sitemap https-only" },
        { id: "backup", label: "Backup taken before mass replace" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: mixed content",
        lead: "Two checks.",
        questions: [
          {
            id: "mc1",
            question: "Mixed content is…",
            options: [
              "A mix of sales and useful posts",
              "An HTTPS page with HTTP resources",
              "Two H1s on a page",
              "Only the absence of SSL",
            ],
            correct: 1,
            explain: "Page and resource protocols must match.",
          },
          {
            id: "mc2",
            question: "Removing mixed content…",
            options: [
              "Guarantees TOP-1",
              "Fixes UX and trust after the HTTPS move",
              "Replaces semantics",
              "Is needed only for the blog",
            ],
            correct: 1,
            explain: "Hygiene — not a ranking button.",
          },
        ],
      },
    ],
  },

  "reklamnyy-banner": {
    checklist: {
      afterTitleIncludes: "Design principles that work",
      title: "Before launching a banner",
      lead: "Offer beats decoration.",
      items: [
        { id: "offer", label: "Offer reads in a second" },
        { id: "cta", label: "CTA is noticeable" },
        { id: "brand", label: "Brand/product is recognizable" },
        { id: "size", label: "Size and weight match platform specs" },
        { id: "lp", label: "Landing matches the offer" },
        { id: "utm", label: "UTM and analytics goal exist" },
        { id: "test", label: "A/B creative plan exists" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Banner blindness",
        title: "Mini quiz: ad banner",
        lead: "Two checks.",
        questions: [
          {
            id: "rb1",
            question: "Banner blindness is best fixed by…",
            options: [
              "Endless GIF flashing",
              "Relevance and creative tests",
              "Deleting the landing page",
              "Only a black background",
            ],
            correct: 1,
            explain: "Meaning and tests beat “screaming.”",
          },
          {
            id: "rb2",
            question: "An aggressive pop-up on every visit…",
            options: [
              "Is always best practice",
              "Often hurts UX — use rarely and carefully",
              "Replaces UTM",
              "Is required for SEO",
            ],
            correct: 1,
            explain: "Attention ≠ trust.",
          },
        ],
      },
    ],
  },

  "crm": {
    checklist: {
      afterTitleIncludes: "How to choose without a “magic ranking”",
      title: "Before paying for a CRM",
      lead: "Process beats the logo on the banner.",
      items: [
        { id: "funnel", label: "Funnel and stages described" },
        { id: "owner", label: "Someone owns the CRM playbook" },
        { id: "integ", label: "Key integrations checked on demo" },
        { id: "tco", label: "TCO counted — not only the tariff" },
        { id: "pilot", label: "Pilot planned for one team" },
        { id: "rank", label: "Not choosing only by someone else’s “top-10”" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Solution types: don’t confuse “portal” and funnel",
        title: "Mini quiz: CRM",
        lead: "Two checks.",
        questions: [
          {
            id: "crm1",
            question: "A 2020 CRM ranking…",
            options: [
              "Is enough to buy today",
              "Ages fast; your process and demos matter more",
              "Replaces manager training",
              "Guarantees end-to-end analytics",
            ],
            correct: 1,
            explain: "Tariffs and products change — watch scenarios.",
          },
          {
            id: "crm2",
            question: "Excel instead of a CRM fits…",
            options: [
              "Always, even with ten managers",
              "Sometimes at the very start; later it breaks on stages and duplicates",
              "Only if you have Salesforce",
              "Never, even for a freelancer",
            ],
            correct: 1,
            explain: "Scale and headcount decide.",
          },
        ],
      },
    ],
  },

  "meta-description": {
    checklist: {
      afterTitleIncludes: "How to write and where to check",
      title: "Before shipping a description",
      lead: "Honesty beats length.",
      items: [
        { id: "unique", label: "Unique per URL" },
        { id: "intent", label: "Reflects page intent" },
        { id: "start", label: "Meaning at the start of the line" },
        { id: "spam", label: "No keyword sheet" },
        { id: "match", label: "Matches the first screen" },
        { id: "preview", label: "Snippet preview reviewed" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Snippet, CTR, and an honest promise",
        title: "Mini quiz: meta description",
        lead: "Two checks.",
        questions: [
          {
            id: "md1",
            question: "Description directly…",
            options: [
              "Guarantees TOP-1",
              "Isn’t a scoring factor; works via snippet and clicks",
              "Matters more than page content",
              "Replaces the title",
            ],
            correct: 1,
            explain: "A candidate for SERP text — not a ranking button.",
          },
          {
            id: "md2",
            question: "Does search always show your description?",
            options: [
              "Yes, always",
              "No — it may take a fragment from the page",
              "Only if keywords exist",
              "Only in Yandex",
            ],
            correct: 1,
            explain: "The tag is a strong hint, not an order.",
          },
        ],
      },
    ],
  },

  "parsing-auditorii": {
    checklist: {
      afterTitleIncludes: "Legal ways to segment an audience",
      title: "Before collecting an audience",
      lead: "Your own base beats someone else’s dump.",
      items: [
        { id: "portrait", label: "Audience portrait and anti-portrait exist" },
        { id: "pixel", label: "Site events / pixel are set up" },
        { id: "crm", label: "Own customers in CRM with consent" },
        { id: "ads", label: "Segments built in the official ad account" },
        { id: "dump", label: "Not buying a “competitor base” as a file" },
        { id: "parser", label: "Not planning a ToS-bypass parser" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Risks: platform rules and personal data",
        title: "Mini quiz: audience parsing",
        lead: "Two checks.",
        questions: [
          {
            id: "pa1",
            question: "Exporting a competitor’s followers with a parser…",
            options: [
              "Is the best targeting start",
              "Risks bans and claims; legal alternatives exist",
              "Is required by law",
              "Replaces an audience portrait",
            ],
            correct: 1,
            explain: "Official audiences and your own base last longer.",
          },
          {
            id: "pa2",
            question: "A legal parser replacement…",
            options: [
              "A catalog of desktop parsers",
              "Lookalikes and retargeting from your data",
              "Bypassing a social API",
              "A cold list without consent",
            ],
            correct: 1,
            explain: "Ad accounts and first-party data are the working path.",
          },
        ],
      },
    ],
  },

  "antitrendy-marketinga": {
    checklist: {
      afterTitleIncludes: "What loses power",
      title: "Anti-trend audit",
      lead: "What to drop from the growth core.",
      items: [
        { id: "channels", label: "Not one channel — a backup path exists" },
        { id: "consent", label: "Messaging only with consent" },
        { id: "visual", label: "Visuals aren’t template “smile” stock" },
        { id: "funnel", label: "There’s a funnel — not only hard pressure" },
        { id: "cold", label: "No cold calling without a lawful basis" },
        { id: "social", label: "Social without blind cross-posting" },
        { id: "roi", label: "Leads/ROI counted — not only reach" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "One channel",
        title: "Mini quiz: marketing anti-trends",
        lead: "Two checks.",
        questions: [
          {
            id: "at1",
            question: "A site with no other traffic channels…",
            options: [
              "Is always enough on its own",
              "Is a fragile model — you need measurable touches",
              "Guarantees TOP",
              "Replaces a UVP",
            ],
            correct: 1,
            explain: "One channel = risk.",
          },
          {
            id: "at2",
            question: "Cross-posting one text to every social network…",
            options: [
              "Is best practice in the 2020s",
              "Is a weak tactic — better 1–2 platforms with adaptation",
              "Is required by law",
              "Replaces SMS consent",
            ],
            correct: 1,
            explain: "Formats differ.",
          },
        ],
      },
    ],
  },

  "analitika-telegram": {
    checklist: {
      afterTitleIncludes: "What to watch regularly",
      title: "Weekly channel review",
      lead: "Median views beat a one-off record.",
      items: [
        { id: "subs", label: "Subscriber growth/churn logged" },
        { id: "median", label: "Median views calculated" },
        { id: "top", label: "Top and bottom posts noted" },
        { id: "utm", label: "UTM / site or bot clicks exist" },
        { id: "no-bots", label: "No buying views" },
        { id: "insights", label: "Checked Insights (if available)" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: Telegram analytics",
        lead: "Two checks.",
        questions: [
          {
            id: "tg1",
            question: "The post “eye” counter is…",
            options: [
              "Ready ER like on Instagram",
              "Views; engagement is counted separately",
              "Always unique people only",
              "Subscriber count",
            ],
            correct: 1,
            explain: "Don’t mix views and reactions.",
          },
          {
            id: "tg2",
            question: "Buying views…",
            options: [
              "Improves ad pricing",
              "Distorts metrics and hurts trust",
              "Is required before Insights",
              "Replaces UTM",
            ],
            correct: 1,
            explain: "Honest numbers beat a pretty eye.",
          },
        ],
      },
    ],
  },

  "google-partner": {
    checklist: {
      afterTitleIncludes: "Certification in Skillshop",
      title: "Before applying for Partner",
      lead: "Current thresholds before the badge.",
      items: [
        { id: "mcc", label: "MCC and staff access are in order" },
        { id: "cert", label: "Required Skillshop certs are live" },
        { id: "spend", label: "Spend thresholds checked against help" },
        { id: "quality", label: "Client account management quality is ok" },
        { id: "badge", label: "Badge usage rules are clear" },
        { id: "renew", label: "Exam retake calendar is set" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Practical order",
        title: "Mini quiz: Google Partner",
        lead: "Two checks.",
        questions: [
          {
            id: "gp1",
            question: "Partner spend thresholds from a 2018 article…",
            options: [
              "Are always current",
              "May be outdated — check official criteria",
              "Matter more than the client favicon",
              "Replace certification",
            ],
            correct: 1,
            explain: "Program rules change.",
          },
          {
            id: "gp2",
            question: "A Partner badge guarantees the client a low CPA…",
            options: [
              "Yes",
              "No — it’s an expertise signal, not a KPI promise",
              "Only for Premier",
              "Only in Search",
            ],
            correct: 1,
            explain: "Campaign economics are separate.",
          },
        ],
      },
    ],
  },

  "udalenie-botov-instagram": {
    checklist: {
      afterTitleIncludes: "Manual cleanup",
      title: "Before cleaning followers",
      lead: "In batches — and without handing over the password.",
      items: [
        { id: "stop-grey", label: "Fake growth / mass-follow stopped" },
        { id: "criteria", label: "Bot criteria wider than “no avatar”" },
        { id: "batch", label: "Batch cleanup plan — not a weekend crash" },
        { id: "manual", label: "Start with obvious spam by hand" },
        { id: "no-login", label: "No password auto-cleaners" },
        { id: "content", label: "Content/ER strengthened in parallel" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: Instagram bots",
        lead: "Two checks.",
        questions: [
          {
            id: "ub1",
            question: "Wiping half the base in three days…",
            options: [
              "Is always safe",
              "Risks a reach drop; better in batches",
              "Is required for Insights",
              "Replaces content",
            ],
            correct: 1,
            explain: "A sharp base crash looks bad for delivery.",
          },
          {
            id: "ub2",
            question: "An “auto-delete bots” service that wants your login…",
            options: [
              "Is an official Meta feature",
              "Risks account theft and ToS issues",
              "Is the only method that works",
              "Is required for a business profile",
            ],
            correct: 1,
            explain: "Don’t give Instagram passwords to third-party sites.",
          },
        ],
      },
    ],
  },

  "sayty-satellity": {
    checklist: {
      afterTitleIncludes: "What to do instead of a network",
      title: "Checklist instead of satellites",
      lead: "Before agreeing to a “farm.”",
      items: [
        { id: "audit", label: "Main site: tech and content are in order" },
        { id: "no-new", label: "No new satellites/doorways planned" },
        { id: "profile", label: "Link profile without a dense own network" },
        { id: "vendor", label: "Vendor doesn’t promise TOP via a domain net" },
        { id: "mentions", label: "Mentions plan: PR/outreach/live sites" },
        { id: "metrics", label: "KPI: traffic and leads — not your domain count" },
        { id: "timeline", label: "Timelines: prep ≠ TOP; TOP 2–6 months" },
        { id: "exit", label: "If a network exists — wind-down plan agreed" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why the scheme breaks",
        title: "Mini quiz: satellites",
        lead: "Two checks.",
        questions: [
          {
            id: "sat1",
            question: "A satellite network for business…",
            options: [
              "Is a reliable path to TOP in a month",
              "Is high risk of filters and losing the main domain",
              "Is required for a young site",
              "Replaces semantics",
            ],
            correct: 1,
            explain: "The scheme is manipulative and often penalized.",
          },
          {
            id: "sat2",
            question: "Instead of a domain farm, better…",
            options: [
              "Even more same-type pads",
              "Content, tech, and precise mentions on live sites",
              "Hide owners at any cost",
              "Promise the client TOP in 7 days",
            ],
            correct: 1,
            explain: "Sustainable growth without a controlled network.",
          },
        ],
      },
    ],
  },

  "planirovshchik-rezultatov-google": {
    checklist: {
      afterTitleIncludes: "What Performance Planner can do",
      title: "Before a budget scenario",
      lead: "Live data before the chart.",
      items: [
        { id: "goals", label: "Ads conversions are the ones you need now" },
        { id: "group", label: "Plan includes campaigns with similar goals" },
        { id: "cpa", label: "Target CPA / value is set" },
        { id: "season", label: "Period and seasonality make sense" },
        { id: "compare", label: "Compared 2–3 points on the curve" },
        { id: "apply", label: "Applying changes isn’t confused with saving a plan" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Limits and common sense",
        title: "Mini quiz: Performance Planner",
        lead: "Two checks.",
        questions: [
          {
            id: "pp1",
            question: "Performance Planner and Keyword Planner…",
            options: [
              "Are one tool",
              "Differ: campaign budget scenarios vs keyword demand",
              "Are only for Yandex Direct",
              "Guarantee the same outcome",
            ],
            correct: 1,
            explain: "Different input and job.",
          },
          {
            id: "pp2",
            question: "A planner forecast…",
            options: [
              "Always matches reality",
              "Is a model — a guide, not a guarantee",
              "Replaces a channel media plan",
              "Changes bids in the account by itself",
            ],
            correct: 1,
            explain: "Applying changes is a separate step.",
          },
        ],
      },
    ],
  },

  "utp": {
    checklist: {
      afterTitleIncludes: "How to test the phrasing",
      title: "USP check",
      lead: "Truth beats pretty wording.",
      items: [
        { id: "caa", label: "Audience and choice criterion are locked" },
        { id: "diff", label: "Difference vs 3–5 competitors is written out" },
        { id: "concrete", label: "Line is concrete (deadline/segment/result)" },
        { id: "proof", label: "Proof or condition exists" },
        { id: "real", label: "Promise is actually deliverable" },
        { id: "not-sale", label: "It’s not a one-off promo" },
        { id: "place", label: "USP is on the first screen / in the ad" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What a USP is",
        title: "Mini quiz: USP",
        lead: "Two checks.",
        questions: [
          {
            id: "ut1",
            question: "A “−20% until Friday” discount…",
            options: [
              "Is a classic USP",
              "Is a promo, not a lasting USP",
              "Replaces the audience",
              "Is required for SEO",
            ],
            correct: 1,
            explain: "A promo is temporary.",
          },
          {
            id: "ut2",
            question: "“Quality and a personal approach”…",
            options: [
              "Is a strong USP",
              "Is too generic — needs specifics",
              "Is enough for any niche",
              "Replaces a guarantee",
            ],
            correct: 1,
            explain: "You need facts and difference.",
          },
        ],
      },
    ],
  },

  "sayt-ne-v-top": {
    checklist: {
      afterTitleIncludes: "A practical diagnosis order",
      title: "“Why not in the TOP” checklist",
      lead: "Go in order.",
      items: [
        { id: "intent", label: "Queries and landings matched by intent" },
        { id: "index", label: "Index and statuses checked in Webmaster/GSC" },
        { id: "young", label: "Age/trust accounted for (no TOP in a week)" },
        { id: "filter", label: "Filter hypothesis checked via dynamics and links" },
        { id: "content", label: "Content closes the query — no thin duplicates" },
        { id: "tech", label: "Speed, mobile, crawl errors fixed" },
        { id: "ux", label: "UX and analytics goals look at leads" },
        { id: "secure", label: "No malware / hostile redirects" },
        { id: "host", label: "Hosting stable; domain without toxic history" },
        { id: "time", label: "Timelines: prep ~1 mo.; TOP planned 2–6 mo." },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Expecting an instant TOP",
        title: "Mini quiz: timelines and TOP",
        lead: "Two checks.",
        questions: [
          {
            id: "top1",
            question: "Site prep in ~a month…",
            options: [
              "Equals hitting TOP-10",
              "Gets the project ready to promote; TOP is a separate horizon",
              "Guarantees #1",
              "Is only needed for stores",
            ],
            correct: 1,
            explain: "Prep ≠ ranking growth.",
          },
          {
            id: "top2",
            question: "Planned core share in the TOP more often takes…",
            options: [
              "2–3 days after release",
              "2–6 months after work starts",
              "Only after buying satellites",
              "Instantly with unique text",
            ],
            correct: 1,
            explain: "Guide is 2–6 months — no date guarantee.",
          },
        ],
      },
    ],
  },

  "eat-kopirayting": {
    checklist: {
      afterTitleIncludes: "Site and copy trustworthiness",
      title: "Before shipping E-E-A-T copy",
      lead: "Facts and author beat keyword density.",
      items: [
        { id: "author", label: "Author/editorial is clear (not “Admin”)" },
        { id: "facts", label: "Facts are verifiable; no clickbait title" },
        { id: "ymyl", label: "YMYL has expert review" },
        { id: "trust", label: "Site has contacts and terms" },
        { id: "match", label: "Snippet promise = page content" },
        { id: "update", label: "Date/update shown when needed" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: E-E-A-T copywriting",
        lead: "Two checks.",
        questions: [
          {
            id: "eat1",
            question: "E-E-A-T is first of all…",
            options: [
              "A Search Console button",
              "A quality frame: experience, expertise, authority, trust",
              "A substitute for technical SEO",
              "A ×10 conversion guarantee",
            ],
            correct: 1,
            explain: "A quality checklist — not a TOP lever.",
          },
          {
            id: "eat2",
            question: "For medical advice it’s better to…",
            options: [
              "Anonymous rewrite with no review",
              "An expert + clear byline and facts",
              "Only keyword density",
              "Delete every negative review on the site",
            ],
            correct: 1,
            explain: "YMYL needs ownership of meaning.",
          },
        ],
      },
    ],
  },

  "lestnitsa-hanta": {
    checklist: {
      afterTitleIncludes: "What to do on each step",
      title: "Message per step",
      lead: "Traffic temperature beats a pretty offer.",
      items: [
        { id: "map", label: "Clear which step main traffic is on" },
        { id: "hero", label: "First screen matches that temperature" },
        { id: "path", label: "Content exists for problem and for choice" },
        { id: "utp-late", label: "Hard USP not before context" },
        { id: "retarget", label: "Retargeting doesn’t hammer a cold offer" },
        { id: "cta", label: "CTA is realistic for the step" },
        { id: "measure", label: "We watch leads — not only clicks" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Five awareness",
        title: "Mini quiz: awareness ladder",
        lead: "Two checks.",
        questions: [
          {
            id: "lh1",
            question: "Hard-selling someone who doesn’t see the problem…",
            options: [
              "Is best practice",
              "Is weak — meaning and job awareness first",
              "Is required for banners",
              "Replaces a USP",
            ],
            correct: 1,
            explain: "You can’t ignore the steps.",
          },
          {
            id: "lh2",
            question: "The classic five awareness levels…",
            options: [
              "Were invented only in 2020 context",
              "Come from Schwartz; in RU often called Hunt’s ladder",
              "Equal five social networks",
              "Are only needed for SMS",
            ],
            correct: 1,
            explain: "The steps matter — not the naming fight.",
          },
        ],
      },
    ],
  },

  "yandeks-vebmaster": {
    checklist: {
      afterTitleIncludes: "Settings, support, and place in SEO",
      title: "Yandex Webmaster checklist",
      lead: "After connecting and ongoing.",
      items: [
        { id: "verify", label: "Site verified; canonical mirror set" },
        { id: "sitemap", label: "Sitemap added and error-free" },
        { id: "notify", label: "Critical-issue notifications on" },
        { id: "diag", label: "Diagnostics and security reviewed" },
        { id: "index", label: "Pages in search checked vs expectations" },
        { id: "queries", label: "Commercial-core query groups set up" },
        { id: "tools", label: "robots/server response checked after release" },
        { id: "gsc", label: "Google Search Console watched in parallel" },
        { id: "support", label: "Tickets only after self-check" },
        { id: "time", label: "Reports not confused with a 1-month TOP promise" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Indexing: crawls, sitemap, migration",
        title: "Mini quiz: Webmaster",
        lead: "Two checks.",
        questions: [
          {
            id: "yw1",
            question: "URL recrawl…",
            options: [
              "Guarantees TOP-1",
              "Asks to look at the page sooner; rankings are separate",
              "Replaces semantics",
              "Is needed hourly for every URL",
            ],
            correct: 1,
            explain: "It’s a crawl queue — not ranking.",
          },
          {
            id: "yw2",
            question: "Webmaster and Search Console…",
            options: [
              "Are interchangeable — one is enough",
              "Complement each other for Yandex and Google",
              "Are only for stores",
              "Raise rankings by themselves",
            ],
            correct: 1,
            explain: "Two search engines — two panels.",
          },
        ],
      },
    ],
  },

  "tochki-kontakta": {
    checklist: {
      afterTitleIncludes: "How to work through and score",
      title: "Touchpoint audit",
      lead: "A weak link beats a pretty banner.",
      items: [
        { id: "map", label: "Key online/offline points listed" },
        { id: "walk", label: "Customer path walked from outside" },
        { id: "comp", label: "Competitor path compared" },
        { id: "neg", label: "Negative points found" },
        { id: "chain", label: "Chain exists before and after purchase" },
        { id: "owner", label: "Critical points have an owner" },
        { id: "metric", label: "We watch conversion at the joints" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Where touchpoints show up",
        title: "Mini quiz: touchpoints",
        lead: "Two checks.",
        questions: [
          {
            id: "tk1",
            question: "A touchpoint and an SEO entry point…",
            options: [
              "Are always the same",
              "Differ: brand contact vs URL that starts a search visit",
              "Are offline only",
              "Are only banners",
            ],
            correct: 1,
            explain: "Different analysis jobs.",
          },
          {
            id: "tk2",
            question: "One strong point without a chain…",
            options: [
              "Is enough for all sales",
              "Often breaks at the next weak link",
              "Replaces a USP",
              "Isn’t needed after purchase",
            ],
            correct: 1,
            explain: "You need consistent touches.",
          },
        ],
      },
    ],
  },

  "trendy-seo": {
    checklist: {
      afterTitleIncludes: "What doesn’t change",
      title: "SEO trends response checklist",
      lead: "After auditing the SERP and content.",
      items: [
        { id: "serp", label: "Zero-click and SERP blocks in expectations" },
        { id: "intent", label: "Pages written for intent, not density" },
        { id: "snippet", label: "Title/description strengthened on key URLs" },
        { id: "mobile", label: "First screen and mobile UX checked" },
        { id: "zombies", label: "Thin URLs merged or removed from index" },
        { id: "mentions", label: "White-hat mentions/outreach plan exists" },
        { id: "panels", label: "Webmaster and GSC in the weekly ritual" },
        { id: "time", label: "Timelines: prep ≠ TOP; TOP 2–6 months" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Two big shifts",
        title: "Mini quiz: SEO trends",
        lead: "Two checks.",
        questions: [
          {
            id: "tr1",
            question: "Zero-click means…",
            options: [
              "SEO is no longer needed",
              "Part of demand closes in the SERP without a site visit",
              "You should buy satellites",
              "TOP is guaranteed in a week",
            ],
            correct: 1,
            explain: "Clicks still matter; some intents resolve in the SERP.",
          },
          {
            id: "tr2",
            question: "The best answer to semantic algorithms…",
            options: [
              "Stuff keywords denser",
              "A full answer to the user’s job and strong landings",
              "Ignore snippets",
              "Delete analytics",
            ],
            correct: 1,
            explain: "Intent and usefulness beat density.",
          },
        ],
      },
    ],
  },

  "tochki-vhoda": {
    checklist: {
      afterTitleIncludes: "How not to turn analysis into copying",
      title: "Entry points checklist",
      lead: "After reviewing competitors.",
      items: [
        { id: "core", label: "Own core (at least a draft) is collected" },
        { id: "serp", label: "TOP for the core pulled; candidate domains exist" },
        { id: "ep", label: "3–10 EPs per top competitor logged" },
        { id: "keys", label: "Keywords from strong URLs exported and clustered" },
        { id: "gaps", label: "Gaps in your landings turned into tasks" },
        { id: "nocopy", label: "Plan without copy-pasting others’ text" },
        { id: "own", label: "Own organic landing pages checked in analytics" },
        { id: "time", label: "Research ≠ instant TOP" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What an entry point is",
        title: "Mini quiz: entry points",
        lead: "Two checks.",
        questions: [
          {
            id: "ep1",
            question: "An entry point is…",
            options: [
              "Only the homepage",
              "The first page in a session (from search — often a landing)",
              "The robots.txt file",
              "A link exchange",
            ],
            correct: 1,
            explain: "EP = first URL of the visit; from organic often not the home.",
          },
          {
            id: "ep2",
            question: "Exporting keywords from a competitor EP is for…",
            options: [
              "Copying their text 1:1",
              "Growing the core and understanding strong landing intent",
              "Guaranteeing TOP in a month",
              "Replacing Webmaster",
            ],
            correct: 1,
            explain: "Hypotheses and semantics — not copy-paste.",
          },
        ],
      },
    ],
  },

  "ssylki-v-instagram": {
    checklist: {
      afterTitleIncludes: "Link in the profile header",
      title: "Before sending traffic from Instagram",
      lead: "One clear exit beats a dozen dead URLs.",
      items: [
        { id: "bio", label: "Bio has a current URL or link-in-bio" },
        { id: "utm", label: "UTM/promo code for measurement" },
        { id: "stories", label: "Stories link-sticker plan exists" },
        { id: "cta", label: "Posts make clear where to tap" },
        { id: "buttons", label: "Business-profile buttons aren’t cluttered" },
        { id: "landing", label: "Landing opens fine on mobile" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: Instagram links",
        lead: "Two checks.",
        questions: [
          {
            id: "svi1",
            question: "A link in a regular post caption in the app…",
            options: [
              "Is always tappable",
              "Often isn’t; send people to bio or Stories",
              "Replaces Ads",
              "Works only on IGTV",
            ],
            correct: 1,
            explain: "Tappable spots are few — plan them.",
          },
          {
            id: "svi2",
            question: "Link-in-bio is handy, but…",
            options: [
              "Is an official Meta Ads replacement",
              "Adds a click and dependence on a service",
              "Is banned for business",
              "Never needs UTM",
            ],
            correct: 1,
            explain: "Weigh convenience against service risk.",
          },
        ],
      },
    ],
  },

  "sarafannoe-radio": {
    checklist: {
      afterTitleIncludes: "Ask: reviews",
      title: "Before launching word of mouth",
      lead: "Experience first — then the ask.",
      items: [
        { id: "quality", label: "Product promise is delivered consistently" },
        { id: "moment", label: "Review-ask moment is chosen" },
        { id: "link", label: "Easy link/place for a review exists" },
        { id: "no-fake", label: "No buying fake reviews" },
        { id: "ref", label: "Referral is clear for both sides" },
        { id: "ask", label: "“How did you hear” is logged" },
        { id: "service", label: "Post-sale service doesn’t drop off" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why recommendations",
        title: "Mini quiz: word of mouth",
        lead: "Two checks.",
        questions: [
          {
            id: "sr1",
            question: "Asking for a review after a successful result…",
            options: [
              "Is never allowed",
              "Is fine politely and without pressure",
              "Only via fake engagement",
              "Replaces product quality",
            ],
            correct: 1,
            explain: "An honest ask is normal.",
          },
          {
            id: "sr2",
            question: "Fake reviews…",
            options: [
              "Are the best word-of-mouth method",
              "Risk trust and platform rules",
              "Are required for SEO",
              "Replace a USP",
            ],
            correct: 1,
            explain: "Build on real experience.",
          },
        ],
      },
    ],
  },

  "slogan": {
    checklist: {
      afterTitleIncludes: "How to build one",
      title: "Before finalizing a slogan",
      lead: "Truth beats generator beauty.",
      items: [
        { id: "need", label: "Clear why you need a slogan (not “just because”)" },
        { id: "aud", label: "Line is clear to the audience on first read" },
        { id: "true", label: "Promise is deliverable" },
        { id: "short", label: "Short and speakable" },
        { id: "vs-utp", label: "Not confusing slogan and USP without need" },
        { id: "fit", label: "Fits with name and logo" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: slogan",
        lead: "Two checks.",
        questions: [
          {
            id: "sl1",
            question: "A slogan is first of all…",
            options: [
              "A substitute for USP and site offer",
              "A short memorable brand/campaign line",
              "Required by law",
              "A generator output with no edit",
            ],
            correct: 1,
            explain: "Memory and tone — not all of marketing.",
          },
          {
            id: "sl2",
            question: "Vague “quality and innovation”…",
            options: [
              "Is the best corporate slogan",
              "Is better replaced with specifics or honest mood",
              "Guarantees recognition",
              "Is needed by every brand",
            ],
            correct: 1,
            explain: "Empty clichés don’t stick.",
          },
        ],
      },
    ],
  },

  "crello": {
    checklist: {
      afterTitleIncludes: "How to work without feed chaos",
      title: "Before exporting a layout",
      lead: "Brand beats a random template.",
      items: [
        { id: "format", label: "Size matches the platform" },
        { id: "brand", label: "Colors/logo stay inside the guide" },
        { id: "read", label: "Text is readable on a phone" },
        { id: "license", label: "Stock is cleared for commercial use" },
        { id: "export", label: "Export without an unwanted watermark" },
        { id: "likes", label: "Not expecting “likes guaranteed” from the editor" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What matters in the Crello / VistaCreate class",
        title: "Mini quiz: Crello",
        lead: "Two checks.",
        questions: [
          {
            id: "cr1",
            question: "Crello today…",
            options: [
              "Is a dead service with no successor",
              "Is the same product class under the VistaCreate name",
              "Is offline Photoshop only",
              "Replaces a CRM",
            ],
            correct: 1,
            explain: "A rebrand; the point is an online builder.",
          },
          {
            id: "cr2",
            question: "Does the builder guarantee likes?",
            options: [
              "Yes, always",
              "No — it speeds layouts; offer and distribution still decide",
              "Only on a paid plan",
              "If you pick animation",
            ],
            correct: 1,
            explain: "Visuals help — they don’t sell alone.",
          },
        ],
      },
    ],
  },

  "adaptivnyy-shablon-direkt": {
    checklist: {
      afterTitleIncludes: "How creative assembly works",
      title: "Before launching an adaptive creative",
      lead: "Previews before go-live.",
      items: [
        { id: "bg", label: "Background without critical text at the edges" },
        { id: "smart", label: "Smart center on the main object" },
        { id: "contrast", label: "Text contrast against the background is ok" },
        { id: "legal", label: "Age / legal labels match the topic" },
        { id: "preview", label: "Narrow and wide block previews checked" },
        { id: "land", label: "Offer matches the landing" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Limits and common sense",
        title: "Mini quiz: Direct adaptive template",
        lead: "Two checks.",
        questions: [
          {
            id: "as1",
            question: "A Direct adaptive template…",
            options: [
              "Is the same as a responsive site",
              "Is a creative for different ad-block sizes",
              "Is only for Google Ads",
              "Guarantees conversion growth",
            ],
            correct: 1,
            explain: "About the ad — not site layout.",
          },
          {
            id: "as2",
            question: "Smart center is needed to…",
            options: [
              "Raise bids",
              "Keep important image details in a small block",
              "Turn off moderation",
              "Replace negative keywords",
            ],
            correct: 1,
            explain: "Otherwise the system crops at random.",
          },
        ],
      },
    ],
  },

  "rassylka-whatsapp": {
    checklist: {
      afterTitleIncludes: "Business API and templates",
      title: "Before a WhatsApp* broadcast",
      lead: "Consent beats “base reach.”",
      items: [
        { id: "consent", label: "Opt-in base, not a bought list" },
        { id: "goal", label: "Goal: service / reminder / offer" },
        { id: "channel", label: "Manual broadcast or official API" },
        { id: "template", label: "Template approved under platform rules" },
        { id: "banned", label: "Niche not banned for ads" },
        { id: "optout", label: "Respect block and don’t write again" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: WhatsApp* broadcast",
        lead: "Two checks.",
        questions: [
          {
            id: "wa1",
            question: "A bought “number base”…",
            options: [
              "Is a normal scale start",
              "Is a red flag: spam and complaints",
              "Is required for Business API",
              "Replaces customer consent",
            ],
            correct: 1,
            explain: "Work with your own opt-in base.",
          },
          {
            id: "wa2",
            question: "Official scale usually goes through…",
            options: [
              "A grey sender with no contract",
              "Business API and templates",
              "Broadcasting to everyone in someone else’s book",
              "Google+ only",
            ],
            correct: 1,
            explain: "API + platform rules.",
          },
        ],
      },
    ],
  },

  "podozritelnyy-trafik-google": {
    checklist: {
      afterTitleIncludes: "What to do first",
      title: "Checklist for Google captcha",
      lead: "Go in order — the first steps often fix it.",
      items: [
        { id: "av", label: "Scan devices with antivirus" },
        { id: "router", label: "Reboot router / switch network to check" },
        { id: "captcha", label: "Complete captcha and recheck search access" },
        { id: "others", label: "Compare: one PC or the whole network/office" },
        { id: "pass", label: "Change passwords if you suspect malware" },
        { id: "parse", label: "Lower aggressive scraping / bots from this IP" },
        { id: "isp", label: "If it stays — write the ISP" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Where suspicious traffic comes from",
        title: "Mini quiz: Google captcha",
        lead: "Two checks on what the warning means.",
        questions: [
          {
            id: "g1",
            question: "A suspicious-traffic message usually means…",
            options: [
              "The site was permanently removed from the index",
              "Google doesn’t trust requests from your IP/network",
              "You must buy links urgently",
              "Only Safari is broken",
            ],
            correct: 1,
            explain:
              "Search protection against bots on the network address — not an automatic ban of all your URLs.",
          },
          {
            id: "g2",
            question: "If captcha hits every device on Wi‑Fi…",
            options: [
              "Only one laptop’s browser cache is to blame",
              "Check the network, router, ISP, or shared IP",
              "You must delete WordPress",
              "It’s normal — do nothing",
            ],
            correct: 1,
            explain:
              "The same symptom on every gadget points to network/IP, not one browser.",
          },
        ],
      },
    ],
  },

  "sotsialnye-seti": {
    checklist: {
      afterTitleIncludes: "Platform types by job",
      title: "Before choosing platforms",
      lead: "Job and audience beat someone else’s TOP-10.",
      items: [
        { id: "task", label: "1–2 business jobs for the period are clear" },
        { id: "geo", label: "Geography and jurisdiction accounted for" },
        { id: "aud", label: "Where the audience already is — checked" },
        { id: "count", label: "No more than 1–2 strong channels at start" },
        { id: "site", label: "Link to site/CRM exists" },
        { id: "risk", label: "2FA and minimal extra profile data" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: social networks",
        lead: "Two checks.",
        questions: [
          {
            id: "sn1",
            question: "Copying a world TOP-10 as a media plan…",
            options: [
              "Is best practice",
              "Is a mistake: audience and geography first",
              "Is required for SEO",
              "Replaces the site",
            ],
            correct: 1,
            explain: "Platform for the audience — not for a ranking.",
          },
          {
            id: "sn2",
            question: "Google+ in 2026…",
            options: [
              "Is a key business channel",
              "Is closed — don’t plan around it",
              "Replaces CRM",
              "Is required in Russia",
            ],
            correct: 1,
            explain: "Strike dead platforms from old roundups.",
          },
        ],
      },
    ],
  },

  "chastotnost-zaprosov": {
    checklist: {
      afterTitleIncludes: "Refined frequency",
      title: "Checklist for working with frequency",
      lead: "A short loop before prioritizing the keyword set.",
      items: [
        { id: "region", label: "Set region and device type in Wordstat" },
        { id: "base", label: "Pull base frequency on seeds (topic sizing)" },
        { id: "exact", label: "Pull exact «…» frequency on working phrases" },
        { id: "refined", label: "Cross-check refined variants (! / current operators)" },
        { id: "split", label: "Label HF / MF / LF without threshold fanaticism" },
        { id: "google", label: "Check disputed clusters in Keyword Planner / Trends" },
        { id: "priority", label: "Prioritize clusters for real landings" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Low-frequency queries",
        title: "Mini quiz: query frequency",
        lead: "Three checks on HF/MF/LF and Wordstat.",
        questions: [
          {
            id: "f1",
            question: "Base frequency without operators…",
            options: [
              "Always equals exact phrase impressions",
              "Is a broad estimate of topic and tails",
              "Is only for Google",
              "Replaces clustering",
            ],
            correct: 1,
            explain:
              "Without quotes Wordstat sums many variants. For a keyword set use exact modes.",
          },
          {
            id: "f2",
            question: "Low-frequency queries usually…",
            options: [
              "Are shorter and always useless",
              "Are more specific and closer to targeted traffic",
              "Must not go into the keyword set",
              "Matter only for the Apple brand",
            ],
            correct: 1,
            explain:
              "Long-tail is easier to cover with landings and copy, especially early on.",
          },
          {
            id: "f3",
            question: "High-frequency on a new site…",
            options: [
              "Guarantees TOP in a month",
              "Is often too early to put first due to competition",
              "Doesn’t exist in Wordstat",
              "Belongs only in robots.txt",
            ],
            correct: 1,
            explain:
              "First cover doable MF/LF and structure; HF comes as the site gains strength.",
          },
        ],
      },
    ],
  },

  "sohranennaya-kopiya-yandex": {
    checklist: {
      afterTitleIncludes: "Why the copy doesn’t appear",
      title: "Checklist: no cached copy",
      lead: "Diagnose without panic.",
      items: [
        { id: "open", label: "Try opening cache from the Yandex/Google SERP" },
        { id: "code", label: "Check meta robots / X-Robots-Tag for noarchive" },
        { id: "robots", label: "Cross-check robots.txt and URL response code" },
        { id: "index", label: "Check URL indexing in Webmaster / GSC" },
        { id: "date", label: "If cache exists — match snapshot date to edits" },
        { id: "prio", label: "Don’t fix “cache for cache’s sake” if index and 200 are fine" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "How a cached copy helps",
        title: "Mini quiz: Yandex cache",
        lead: "Two checks — why the snapshot matters.",
        questions: [
          {
            id: "c1",
            question: "A cached copy is first of all…",
            options: [
              "A direct TOP-1 factor",
              "A page snapshot for diagnostics and content access",
              "A full hosting backup of the whole site",
              "Required for robots.txt",
            ],
            correct: 1,
            explain:
              "Cache shows what the bot saw and opens text if the site is down — not a ranking button.",
          },
          {
            id: "c2",
            question: "A common reason there’s no copy…",
            options: [
              "Design that’s too pretty",
              "noarchive in robots meta / closed from indexing",
              "Having breadcrumbs",
              "HTTPS on the site",
            ],
            correct: 1,
            explain:
              "Check cache bans and indexing first, then SERP UI quirks.",
          },
        ],
      },
    ],
  },

  "seo-struktura-sayta": {
    checklist: {
      afterTitleIncludes: "Online store",
      title: "SEO structure checklist",
      lead: "Mark the steps — progress stays in this browser.",
      items: [
        { id: "goals", label: "Lock site type and goals (services / catalog / content)" },
        { id: "tree", label: "Pick a hierarchy model (usually tree)" },
        { id: "clusters", label: "Map query clusters onto future sections" },
        { id: "urls", label: "Write clean URLs and depth to key landings" },
        { id: "nav", label: "Design navigation and breadcrumbs" },
        { id: "link", label: "Sketch internal links between related sections" },
        { id: "tech", label: "Plan sitemap.xml and robots.txt rules" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Tree",
        title: "Mini quiz: hierarchies",
        lead: "Three checks on structure schemes.",
        questions: [
          {
            id: "s1",
            question: "Which scheme usually fits a commercial services site?",
            options: [
              "Linear only",
              "Tree",
              "Fully without hierarchy",
              "Block only, no sections",
            ],
            correct: 1,
            explain:
              "A tree gives section and landing levels — easier to scale services and articles.",
          },
          {
            id: "s2",
            question: "What makes more sense earlier?",
            options: [
              "Write all texts, structure later",
              "Approve the section scheme, then content",
              "Buy links right away",
              "Close the site from indexing forever",
            ],
            correct: 1,
            explain:
              "Section map under intents first — otherwise content spreads across random URLs.",
          },
          {
            id: "s3",
            question: "Commercial and informational intent…",
            options: [
              "Always on one “buy” page",
              "Better split: service / guide",
              "Can’t be clustered",
              "Belong only on the home page",
            ],
            correct: 1,
            explain:
              "“Buy” and “how to choose” are different user jobs and different landings.",
          },
        ],
      },
    ],
  },

  "instagram-direct": {
    checklist: {
      afterTitleIncludes: "How to run it without grey schemes",
      title: "Before automating Direct",
      lead: "Service beats a spam pack.",
      items: [
        { id: "owner", label: "Someone owns dialogues" },
        { id: "sla", label: "Reply SLA for business hours exists" },
        { id: "tpl", label: "Templates without cold spam" },
        { id: "crm", label: "Leads are tracked (sheet/CRM)" },
        { id: "no-grey", label: "No mass like / mass follow / cold batches" },
        { id: "cta", label: "Content has a “write yourself” CTA" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Mass broadcasts: risks",
        title: "Mini quiz: Instagram* Direct",
        lead: "Two checks.",
        questions: [
          {
            id: "id1",
            question: "A cold mass broadcast in Direct…",
            options: [
              "Is the main legal growth method",
              "Risks reports and limits; warm chats are better",
              "Is required for a business account",
              "Always replaces ads",
            ],
            correct: 1,
            explain: "Spam hits the account and reputation.",
          },
          {
            id: "id2",
            question: "An auto-greeting fits…",
            options: [
              "To message thousands of strangers",
              "As a fast reply to inbound contact",
              "Only with mass liking",
              "Instead of content",
            ],
            correct: 1,
            explain: "Inbound service — not cold spam.",
          },
        ],
      },
    ],
  },

  "instagram-direct-gid": {
    checklist: {
      afterTitleIncludes: "Quick replies and business chat",
      title: "Before working in Direct",
      lead: "Process first, templates second.",
      items: [
        { id: "find", label: "Clear where the chat list opens" },
        { id: "req", label: "Policy for Requests from strangers" },
        { id: "tpl", label: "3–5 topical quick replies ready" },
        { id: "owner", label: "Who replies during business hours" },
        { id: "lead", label: "Leads logged outside the chat" },
        { id: "no-spam", label: "No plan for cold mass broadcasts" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Promotion via Direct — sober view",
        title: "Mini quiz: Direct guide",
        lead: "Two checks.",
        questions: [
          {
            id: "dg1",
            question: "A “message everyone” broadcast in official Direct…",
            options: [
              "Is a built-in settings button",
              "Isn’t provided; cold spam is risky",
              "Is required for business",
              "Replaces Stories",
            ],
            correct: 1,
            explain: "A dialogue channel — not spam batches.",
          },
          {
            id: "dg2",
            question: "Quick replies exist to…",
            options: [
              "Replace a manager forever",
              "Speed up common questions with live follow-up",
              "Bypass a block",
              "Farm followers",
            ],
            correct: 1,
            explain: "A template is a start — not the whole service.",
          },
        ],
      },
    ],
  },

  "dekorativnyy-shrift-instagram": {
    checklist: {
      afterTitleIncludes: "How to fit it into the header without harm",
      title: "Before a decorative font",
      lead: "Meaning beats “pretty” letters.",
      items: [
        { id: "draft", label: "Bio written in plain text first" },
        { id: "one", label: "No more than one Unicode accent" },
        { id: "cyr", label: "Script coverage checked in the chosen style" },
        { id: "devices", label: "Viewed on iOS and Android" },
        { id: "pwd", label: "No Instagram* password entered in a generator" },
        { id: "cta", label: "CTA and niche readable without décor" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: decorative font",
        lead: "Two checks.",
        questions: [
          {
            id: "ds1",
            question: "A “font” in the Instagram* bio is usually…",
            options: [
              "A setting in the profile menu",
              "Unicode characters copied from a generator",
              "A required reach factor",
              "Only paid Meta Ads",
            ],
            correct: 1,
            explain: "The platform doesn’t offer a typeface picker in text fields.",
          },
          {
            id: "ds2",
            question: "An app that asks for a password “for a font”…",
            options: [
              "Is normal practice",
              "Risks account theft — don’t use it",
              "Is the only way for non-Latin scripts",
              "Is required for Stories",
            ],
            correct: 1,
            explain: "Clipboard is enough.",
          },
        ],
      },
    ],
  },

  "whatsapp-v-instagram": {
    checklist: {
      afterTitleIncludes: "How to phrase the CTA in content",
      title: "Before launching wa.me in the header",
      lead: "A link is useless without a reply in chat.",
      items: [
        { id: "fmt", label: "wa.me URL with country code, no +, brackets, or spaces" },
        { id: "test", label: "Tap tested from another device" },
        { id: "text", label: "Short text= or deliberately without it" },
        { id: "bio", label: "Bio has offer and reply hours" },
        { id: "who", label: "Someone assigned to answer on WhatsApp*" },
        { id: "multi", label: "Multi-link only if there are several exits" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to remember",
        title: "Mini quiz: WhatsApp* on Instagram*",
        lead: "Two checks.",
        questions: [
          {
            id: "wi1",
            question: "For one WhatsApp* in the header you usually need…",
            options: [
              "A catalog of 8 link-in-bio tools",
              "A direct wa.me to a working number",
              "An Instagram* password for a third-party service",
              "Only a post caption with no URL",
            ],
            correct: 1,
            explain: "An extra multi-link click isn’t required.",
          },
          {
            id: "wi2",
            question: "A header link is…",
            options: [
              "A cold broadcast to someone else’s list",
              "The client coming to you on click",
              "A guarantee of a 30-second reply",
              "A replacement for a content plan",
            ],
            correct: 1,
            explain: "Outbound spam is another topic and other rules.",
          },
        ],
      },
    ],
  },

  "ssylki-na-forumah": {
    checklist: {
      afterTitleIncludes: "How to write a useful reply",
      title: "Forum crowd checklist",
      lead: "Before the first link.",
      items: [
        { id: "live", label: "Board is live, not abandoned" },
        { id: "topic", label: "Thread topic matches your expertise" },
        { id: "rules", label: "Section rules read" },
        { id: "karma", label: "Replies without links already exist" },
        { id: "useful", label: "The link truly helps the answer" },
        { id: "no-clone", label: "No copy-paste of one text across threads" },
        { id: "mod", label: "Ready to stop if a moderator cleans up" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Which forums to choose",
        title: "Mini quiz: forums",
        lead: "Two checks.",
        questions: [
          {
            id: "sf1",
            question: "Mass forum spam…",
            options: [
              "Is required SEO",
              "Is risky and usually useless",
              "Guarantees TOP",
              "Replaces content",
            ],
            correct: 1,
            explain: "Pointed usefulness beats packs.",
          },
          {
            id: "sf2",
            question: "A link is better placed…",
            options: [
              "In every post signature",
              "When it helps the answer",
              "Only via a nofollow exchange",
              "On abandoned boards",
            ],
            correct: 1,
            explain: "Meaning first, then the URL.",
          },
        ],
      },
    ],
  },

  "lending": {
    checklist: {
      afterTitleIncludes: "Page frame",
      title: "Landing checklist",
      lead: "Before sending traffic.",
      items: [
        { id: "goal", label: "One target action is clear" },
        { id: "offer", label: "Offer reads on the first screen" },
        { id: "cta", label: "Main CTA is noticeable" },
        { id: "proof", label: "Proof exists" },
        { id: "form", label: "Form is short" },
        { id: "mobile", label: "Mobile version checked" },
        { id: "speed", label: "Page loads acceptably" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why landings get built",
        title: "Mini quiz: landing page",
        lead: "Two checks.",
        questions: [
          {
            id: "ld1",
            question: "A landing is always…",
            options: [
              "Only a one-page site",
              "A page for one target action (including inside a site)",
              "Only for SEO",
              "Without a CTA",
            ],
            correct: 1,
            explain: "Focus matters — not site length.",
          },
          {
            id: "ld2",
            question: "Five different CTAs on one page…",
            options: [
              "Boost conversion",
              "Often blur the goal",
              "Are required by ad platforms",
              "Replace the offer",
            ],
            correct: 1,
            explain: "One main scenario.",
          },
        ],
      },
    ],
  },

  "samostoyatelnoe-seo": {
    checklist: {
      afterTitleIncludes: "Prep and diagnosis",
      title: "Month-one checklist",
      lead: "DIY SEO start.",
      items: [
        { id: "wm", label: "Webmaster / Search Console connected" },
        { id: "metrika", label: "Analytics counting visits" },
        { id: "tech", label: "Critical tech checked" },
        { id: "core", label: "Keyword draft and priorities exist" },
        { id: "pages", label: "Landings in progress" },
        { id: "no-links", label: "No bet on packs of bought links" },
        { id: "timeline", label: "TOP timeline expectations are realistic" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Off-site and analytics",
        title: "Mini quiz: DIY SEO",
        lead: "Two checks.",
        questions: [
          {
            id: "ss1",
            question: "Month one is better started with…",
            options: [
              "Buying links",
              "Tech, analytics, and a keyword set",
              "Changing the domain",
              "Cloaking",
            ],
            correct: 1,
            explain: "Foundation beats off-site mass.",
          },
          {
            id: "ss2",
            question: "TOP-10 across a commercial set…",
            options: [
              "Is guaranteed in a week",
              "Is planned as months of work after prep",
              "Follows from one Title edit",
              "Depends only on a .ru zone",
            ],
            correct: 1,
            explain: "Prep ≠ TOP.",
          },
        ],
      },
    ],
  },

  "metrika-ustanovka": {
    checklist: {
      afterTitleIncludes: "WordPress, Bitrix, and others",
      title: "Metrica install checklist",
      lead: "After pasting the code.",
      items: [
        { id: "code", label: "Code on every template / in head" },
        { id: "id", label: "Counter ID matches the cabinet" },
        { id: "dup", label: "No duplicate counters" },
        { id: "cache", label: "Cache cleared" },
        { id: "visit", label: "Test visit visible" },
        { id: "goals", label: "Goals set or planned" },
        { id: "access", label: "Cabinet access limited" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Common mistakes",
        title: "Mini quiz: Metrica",
        lead: "Two checks.",
        questions: [
          {
            id: "mu1",
            question: "Metrica instead of Webmaster…",
            options: [
              "Fully replaces it",
              "Doesn’t replace it — different jobs",
              "Is only for Yandex Direct",
              "Isn’t needed on a CMS",
            ],
            correct: 1,
            explain: "Behavior ≠ indexing.",
          },
          {
            id: "mu2",
            question: "No visits after install — first…",
            options: [
              "Buy links",
              "Check code, cache, and counter ID",
              "Change CMS",
              "Turn off HTTPS",
            ],
            correct: 1,
            explain: "Debug the install first.",
          },
        ],
      },
    ],
  },

  "youtube-monetizaciya": {
    checklist: {
      afterTitleIncludes: "Income models",
      title: "YouTube creator checklist",
      lead: "Before betting on monetization.",
      items: [
        { id: "niche", label: "Niche and format are clear" },
        { id: "brand", label: "Channel branding assembled" },
        { id: "rules", label: "Current Partner Program thresholds checked" },
        { id: "rights", label: "Music and third-party content without violations" },
        { id: "models", label: "Income isn’t only “ads in the video”" },
        { id: "cta", label: "Navigation: playlists, end screens" },
        { id: "no-bots", label: "No fake subscriber growth" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "The channel as a storefront",
        title: "Mini quiz: YouTube and income",
        lead: "Two checks.",
        questions: [
          {
            id: "ym1",
            question: "Monetization thresholds…",
            options: [
              "Are fixed forever in old articles",
              "Must be checked in official Help",
              "Don’t matter",
              "Are replaced by fake growth",
            ],
            correct: 1,
            explain: "Rules change.",
          },
          {
            id: "ym2",
            question: "Is monetization only ads?",
            options: [
              "Yes",
              "No — there are other income models",
              "Only donations",
              "Only the Google Store",
            ],
            correct: 1,
            explain: "Sponsorships, products, memberships, and more.",
          },
        ],
      },
    ],
  },

  "reklamnyy-kabinet": {
    checklist: {
      afterTitleIncludes: "General account scheme",
      title: "First-launch checklist",
      lead: "Before turning on delivery.",
      items: [
        { id: "goal", label: "Campaign goal stated" },
        { id: "lp", label: "Landing ready" },
        { id: "budget", label: "Test budget set" },
        { id: "analytics", label: "Analytics and tagging exist" },
        { id: "creatives", label: "Creatives and offer assembled" },
        { id: "structure", label: "Campaign structure is clear" },
        { id: "mod", label: "Plan to check after moderation" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Typical start mistakes",
        title: "Mini quiz: ad account",
        lead: "Two checks.",
        questions: [
          {
            id: "rk1",
            question: "Sending traffic to home with no offer…",
            options: [
              "Is fine",
              "Often lowers conversion",
              "Is required by Direct",
              "Replaces analytics",
            ],
            correct: 1,
            explain: "You need a landing for the goal.",
          },
          {
            id: "rk2",
            question: "An ad account by itself…",
            options: [
              "Guarantees sales",
              "Manages delivery; conversion is on the site",
              "Replaces Metrica",
              "Isn’t needed for Direct",
            ],
            correct: 1,
            explain: "UI ≠ funnel.",
          },
        ],
      },
    ],
  },

  "htaccess-301": {
    checklist: {
      afterTitleIncludes: "Typical rules",
      title: ".htaccess edit checklist",
      lead: "Before going live.",
      items: [
        { id: "backup", label: "Backup of the current file" },
        { id: "stage", label: "Test on staging / a copy" },
        { id: "one", label: "Rules added one at a time" },
        { id: "chain", label: "No A→B→C chains" },
        { id: "curl", label: "301 headers checked" },
        { id: "https", label: "https/www merge agreed" },
        { id: "home", label: "No mass dump of 404s to home" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "When you need a 301",
        title: "Mini quiz: .htaccess",
        lead: "Two checks.",
        questions: [
          {
            id: "h1",
            question: "Apache .htaccess rules on nginx…",
            options: [
              "Work one-to-one",
              "Need different syntax",
              "Are never needed",
              "Replace DNS",
            ],
            correct: 1,
            explain: "Different server — different config.",
          },
          {
            id: "h2",
            question: "Before editing production…",
            options: [
              "Backup isn’t needed",
              "You need a backup and a check",
              "Canonical alone is enough",
              "Only 302",
            ],
            correct: 1,
            explain: "A mistake can take the site down.",
          },
        ],
      },
    ],
  },

  "futer-sayta": {
    checklist: {
      afterTitleIncludes: "What a footer is made of",
      title: "Footer checklist",
      lead: "Before releasing the template.",
      items: [
        { id: "contacts", label: "Contacts are current" },
        { id: "nav", label: "Menu links work" },
        { id: "legal", label: "Legal / privacy in place" },
        { id: "mobile", label: "Readable on mobile" },
        { id: "spam", label: "No wall of SEO anchors" },
        { id: "404", label: "No broken links" },
        { id: "same", label: "Shared footer across templates" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why it’s needed",
        title: "Mini quiz: footer",
        lead: "Two checks.",
        questions: [
          {
            id: "fs1",
            question: "Keyword spam in the footer…",
            options: [
              "Is a strong SEO trick",
              "Hurts trust and can hurt SEO",
              "Is required for Yandex",
              "Replaces a sitemap",
            ],
            correct: 1,
            explain: "The footer is for people and clarity.",
          },
          {
            id: "fs2",
            question: "A phone in the footer…",
            options: [
              "Is useless",
              "Helps people who scrolled to the end",
              "Belongs only in the header",
              "Is forbidden",
            ],
            correct: 1,
            explain: "Repeating the contact is fine.",
          },
        ],
      },
    ],
  },

  "oblachnyy-servis": {
    checklist: {
      afterTitleIncludes: "Security and risks",
      title: "Team cloud checklist",
      lead: "Before moving data.",
      items: [
        { id: "task", label: "Service job is clear (files / SaaS / infra)" },
        { id: "2fa", label: "2FA enabled" },
        { id: "acl", label: "Least-privilege access" },
        { id: "backup", label: "Critical-data backup planned" },
        { id: "legal", label: "Jurisdiction and personal data considered" },
        { id: "offboard", label: "Access revocation process exists" },
        { id: "share", label: "Public links not open to the whole internet for no reason" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Types and upsides",
        title: "Mini quiz: cloud",
        lead: "Two checks.",
        questions: [
          {
            id: "os1",
            question: "SaaS is…",
            options: [
              "Only your own hardware server",
              "Ready software by subscription in the cloud",
              "Only a CDN",
              "Only email",
            ],
            correct: 1,
            explain: "CRM, mail, drives, and similar.",
          },
          {
            id: "os2",
            question: "The main practical risk is often…",
            options: [
              "The mere fact of the cloud",
              "Weak passwords and excess permissions",
              "Having HTTPS",
              "Having a backup",
            ],
            correct: 1,
            explain: "Access and processes.",
          },
        ],
      },
    ],
  },

  "shaut-instagram": {
    checklist: {
      afterTitleIncludes: "How to raise return",
      title: "Before a shoutout / SFS",
      lead: "Relevance beats “just lots of followers.”",
      items: [
        { id: "niche", label: "Partner niche matches yours" },
        { id: "live", label: "Profile activity checked (not bots)" },
        { id: "terms", label: "Format, date, and tags locked" },
        { id: "creative", label: "Creative doesn’t look like a spam collage" },
        { id: "freq", label: "SFS frequency doesn’t kill the feed" },
        { id: "metric", label: "Measurement plan exists (follows/leads)" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Downsides and risks",
        title: "Mini quiz: Instagram* shoutout",
        lead: "Two checks.",
        questions: [
          {
            id: "sh1",
            question: "SFS with an inflated account…",
            options: [
              "Guarantees sales",
              "Adds noise and a weak result",
              "Is required once a week",
              "Replaces ads",
            ],
            correct: 1,
            explain: "Audience quality beats the header number.",
          },
          {
            id: "sh2",
            question: "A “free” shoutout means…",
            options: [
              "Zero time cost and risk",
              "No platform fee; time and selection still needed",
              "You don’t need to check the partner",
              "#SFS alone brings clients",
            ],
            correct: 1,
            explain: "Organization still costs resources.",
          },
        ],
      },
    ],
  },

  "ssylka-instagram": {
    checklist: {
      afterTitleIncludes: "Where to put it and how to present it",
      title: "Before publishing the link",
      lead: "The profile matters more than the URL itself.",
      items: [
        { id: "url", label: "Link tested from another device" },
        { id: "nick", label: "Username in the URL matches the brand" },
        { id: "open", label: "Profile opens as intended" },
        { id: "bio", label: "Header and offer clear after the tap" },
        { id: "cta", label: "Next step exists (Direct/site)" },
        { id: "place", label: "Link placement fits the audience" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Build the link by hand",
        title: "Mini quiz: Instagram* link",
        lead: "Two checks.",
        questions: [
          {
            id: "si1",
            question: "A profile URL usually looks like…",
            options: [
              "Only a username without a domain",
              "https://www.instagram.com/username/",
              "Any Story",
              "Only a QR with no check",
            ],
            correct: 1,
            explain: "Domain + username.",
          },
          {
            id: "si2",
            question: "Many external links to the profile…",
            options: [
              "Guarantee sales growth",
              "Only open the profile; content and offer decide next",
              "Replace profile design",
              "Remove the need to test the URL",
            ],
            correct: 1,
            explain: "The link is an entry — not the result.",
          },
        ],
      },
    ],
  },

  "paginatsiya": {
    checklist: {
      afterTitleIncludes: "SEO setup",
      title: "Pagination checklist",
      lead: "Before indexing listings.",
      items: [
        { id: "url", label: "Page URLs are predictable and consistent" },
        { id: "ux", label: "Navigation readable on mobile" },
        { id: "canon", label: "Canonical/indexing thought through" },
        { id: "title", label: "Title/H1 aren’t meaningless clones" },
        { id: "empty", label: "No thousands of empty page=N in the index" },
        { id: "filters", label: "Facets don’t spawn junk URLs" },
        { id: "404", label: "Nonexistent pages return an error" },
        { id: "audit", label: "After catalog release — crawl again" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why pagination exists",
        title: "Mini quiz: pagination",
        lead: "Two checks.",
        questions: [
          {
            id: "pg1",
            question: "Must all page=2,3… be indexed?",
            options: [
              "Always yes",
              "Only if useful; otherwise limit them",
              "Never",
              "Only via rel=prev/next",
            ],
            correct: 1,
            explain: "Quality beats indexing every tail.",
          },
          {
            id: "pg2",
            question: "rel=prev/next today…",
            options: [
              "Is Google’s main signal",
              "Isn’t a universal crutch — canonical and usefulness matter more",
              "Replaces the sitemap",
              "Is required for Yandex",
            ],
            correct: 1,
            explain: "Don’t rely only on outdated guides.",
          },
        ],
      },
    ],
  },

  "bitye-ssylki": {
    checklist: {
      afterTitleIncludes: "How to fix: edit, 301, 410",
      title: "Broken links checklist",
      lead: "After the crawl.",
      items: [
        { id: "crawl", label: "Site crawled with a crawler" },
        { id: "panels", label: "Webmaster / GSC reports reviewed" },
        { id: "menu", label: "Menu and footer without 404s" },
        { id: "fix", label: "Key traffic pages fixed" },
        { id: "redir", label: "Where needed — a relevant 301" },
        { id: "nohome", label: "No mass dump to the homepage" },
        { id: "chains", label: "Redirect chains shortened" },
        { id: "recheck", label: "Recheck after fixes" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "How to find: crawler, panels, logs",
        title: "Mini quiz: broken links",
        lead: "Two checks.",
        questions: [
          {
            id: "bs1",
            question: "Sending every 404 to the homepage…",
            options: [
              "Best practice",
              "A bad idea — it blurs meaning",
              "A Yandex requirement",
              "Replaces fixing the href",
            ],
            correct: 1,
            explain: "Fix pointwise or 301 to something relevant.",
          },
          {
            id: "bs2",
            question: "A broken link is…",
            options: [
              "Only nofollow",
              "A click to an unavailable / error URL",
              "Any external link",
              "Only canonical",
            ],
            correct: 1,
            explain: "Most often 404 and similar.",
          },
        ],
      },
    ],
  },

  "kontent-menedzher": {
    checklist: {
      afterTitleIncludes: "How to enter the profession",
      title: "Role-entry checklist",
      lead: "Before applying for a job.",
      items: [
        { id: "cms", label: "One CMS practiced hands-on" },
        { id: "portfolio", label: "5–10 publish examples ready" },
        { id: "grammar", label: "Grammar and text structure OK" },
        { id: "plan", label: "You understand a content plan" },
        { id: "seo", label: "Basic page SEO check is familiar" },
        { id: "deadline", label: "You can hold deadlines" },
        { id: "diff", label: "You separate the role from pure SMM/copy" },
        { id: "preview", label: "There’s a preview checklist before publish" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Who a content manager is",
        title: "Mini quiz: content manager",
        lead: "Two checks.",
        questions: [
          {
            id: "km1",
            question: "Is a content manager always a copywriter?",
            options: [
              "Yes",
              "No — often broader: plan, CMS, edits",
              "Only SMM",
              "Only design",
            ],
            correct: 1,
            explain: "Roles overlap, but aren’t equal.",
          },
          {
            id: "km2",
            question: "A strong start without experience is…",
            options: [
              "Course theory only",
              "CMS practice and a publish portfolio",
              "Behavioral-factor gaming",
              "Buying links",
            ],
            correct: 1,
            explain: "Real publishes beat certificates.",
          },
        ],
      },
    ],
  },

  "regionalnoe-seo": {
    checklist: {
      afterTitleIncludes: "How to set region and site",
      title: "Region checklist",
      lead: "Before claiming local TOP.",
      items: [
        { id: "nap", label: "NAP consistent on site and directories" },
        { id: "pages", label: "City landings are unique" },
        { id: "wm", label: "Webmaster region matches the business" },
        { id: "maps", label: "Maps / directories in progress" },
        { id: "core", label: "Geo-dependent keyword core built" },
        { id: "nofake", label: "No fake addresses" },
        { id: "reviews", label: "Reviews and replies are managed" },
        { id: "time", label: "TOP timeline expectations are realistic" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to avoid",
        title: "Mini quiz: regional SEO",
        lead: "Two checks.",
        questions: [
          {
            id: "rs1",
            question: "Setting a region in Webmaster alone…",
            options: [
              "Is enough for TOP",
              "Isn’t enough — you need pages and local signals",
              "Is never needed",
              "Replaces content",
            ],
            correct: 1,
            explain: "The panel isn’t a magic button.",
          },
          {
            id: "rs2",
            question: "Copy-paste with a city name swap…",
            options: [
              "Great practice",
              "Risky and usually weak",
              "A Yandex requirement",
              "Replaces maps",
            ],
            correct: 1,
            explain: "You need real uniqueness.",
          },
        ],
      },
    ],
  },

  "klyuchi-google-ads": {
    checklist: {
      afterTitleIncludes: "Negatives and the search terms report",
      title: "Ads keywords checklist",
      lead: "Before scaling budget.",
      items: [
        { id: "offer", label: "Keywords tied to the offer" },
        { id: "groups", label: "Ad groups structured" },
        { id: "neg", label: "Negatives added" },
        { id: "lp", label: "Landings match the keywords" },
        { id: "search", label: "Search terms report is a ritual" },
        { id: "match", label: "Match types chosen on purpose" },
        { id: "conv", label: "Conversions tracked" },
        { id: "cpa", label: "CPA target aligned with margin" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Keyword list concept",
        title: "Mini quiz: Google Ads keywords",
        lead: "Two checks.",
        questions: [
          {
            id: "ga1",
            question: "An SEO core and Ads keywords…",
            options: [
              "Are always one list",
              "Overlap, but get cleaned for ads",
              "Aren’t related",
              "Are broad match only",
            ],
            correct: 1,
            explain: "Intent and negatives matter in Ads.",
          },
          {
            id: "ga2",
            question: "AdWords is…",
            options: [
              "A different product",
              "The old name for Google Ads",
              "An SEO-only tool",
              "Only Yandex Direct",
            ],
            correct: 1,
            explain: "A rename.",
          },
        ],
      },
    ],
  },

  "telegram-boty": {
    checklist: {
      afterTitleIncludes: "Flow before development",
      title: "Bot checklist",
      lead: "Before launching the flow.",
      items: [
        { id: "goal", label: "Bot goal is clear (lead / FAQ / status)" },
        { id: "start", label: "`/start` and menu are clear" },
        { id: "token", label: "Token isn’t exposed publicly" },
        { id: "rights", label: "Bot permissions are minimal" },
        { id: "privacy", label: "Collected data is explained" },
        { id: "no-spam", label: "No spam broadcasts without consent" },
        { id: "handoff", label: "Path to a live manager exists" },
        { id: "metrics", label: "Flow metrics are defined" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Security and choosing services",
        title: "Mini quiz: Telegram bots",
        lead: "Two checks.",
        questions: [
          {
            id: "tb1",
            question: "A subscriber-boost bot…",
            options: [
              "We recommend it",
              "Is risky and against the rules",
              "Is required for a channel",
              "Replaces content",
            ],
            correct: 1,
            explain: "Stick to clean flows.",
          },
          {
            id: "tb2",
            question: "Channel and bot…",
            options: [
              "Are the same thing",
              "Have different roles: feed vs automation",
              "A bot is always worse than a site",
              "Bots are banned",
            ],
            correct: 1,
            explain: "They complement each other.",
          },
        ],
      },
    ],
  },

  "stavki-direkt": {
    checklist: {
      afterTitleIncludes: "Setting bids",
      title: "Direct bids checklist",
      lead: "Before raising CPC.",
      items: [
        { id: "goal", label: "Target CPA / economics are clear" },
        { id: "neg", label: "Negatives are in place" },
        { id: "ads", label: "Ads match the keywords" },
        { id: "lp", label: "Landing converts" },
        { id: "budget", label: "Daily budget is capped" },
        { id: "metrika", label: "Conversions visible in Metrika" },
        { id: "noego", label: "No race for #1 at any cost" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Managing impressions",
        title: "Mini quiz: Direct bids",
        lead: "Two checks.",
        questions: [
          {
            id: "sd1",
            question: "Higher bid always = higher position?",
            options: [
              "Yes",
              "Not always — quality and relevance matter",
              "Only in networks",
              "Only at night",
            ],
            correct: 1,
            explain: "The auction is more than “who paid more”.",
          },
          {
            id: "sd2",
            question: "A bid without a decent landing…",
            options: [
              "Saves the campaign",
              "Burns budget",
              "Doesn’t need Metrika",
              "Replaces negatives",
            ],
            correct: 1,
            explain: "Funnel first, then CPC.",
          },
        ],
      },
    ],
  },

  "molodoy-sayt": {
    checklist: {
      afterTitleIncludes: "Where to start optimization",
      title: "Young site checklist",
      lead: "First month.",
      items: [
        { id: "index", label: "Indexing and Webmaster OK" },
        { id: "tech", label: "Critical tech closed" },
        { id: "core", label: "Core and priorities exist" },
        { id: "pages", label: "Strong landings in progress" },
        { id: "commerce", label: "Commercial factors in place" },
        { id: "analytics", label: "Goals and counters set" },
        { id: "nopf", label: "No behavioral gaming" },
        { id: "time", label: "TOP timelines realistic (months)" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Traps of a young project",
        title: "Mini quiz: young site",
        lead: "Two checks.",
        questions: [
          {
            id: "ms1",
            question: "Behavioral-factor gaming…",
            options: [
              "Is the TOP secret",
              "Risks sanctions — we don’t do it",
              "Is required for new domains",
              "Replaces content",
            ],
            correct: 1,
            explain: "Only clean growth.",
          },
          {
            id: "ms2",
            question: "Month one is better spent on…",
            options: [
              "Buying links in bulk",
              "Tech, core, landings",
              "Cloning a competitor",
              "Waiting for TOP with no work",
            ],
            correct: 1,
            explain: "Foundation beats external mass.",
          },
        ],
      },
    ],
  },

  "oshibka-502": {
    checklist: {
      afterTitleIncludes: "How to fix it",
      title: "502 checklist",
      lead: "While the site is down.",
      items: [
        { id: "confirm", label: "502 confirmed from outside" },
        { id: "host", label: "Hosting / CDN status checked" },
        { id: "logs", label: "Gateway and app logs open" },
        { id: "load", label: "CPU / RAM / disk load noted" },
        { id: "deploy", label: "Last deploy accounted for" },
        { id: "plugin", label: "Fresh CMS plugin checked" },
        { id: "monitor", label: "Uptime alert set for later" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Typical causes",
        title: "Mini quiz: 502",
        lead: "Two checks.",
        questions: [
          {
            id: "e502a",
            question: "502 Bad Gateway is usually about…",
            options: [
              "A Yandex filter",
              "The gateway not getting a valid backend response",
              "DNS only",
              "robots.txt only",
            ],
            correct: 1,
            explain: "Infrastructure — not a “sanction”.",
          },
          {
            id: "e502b",
            question: "Masking 502 with a redirect…",
            options: [
              "Best practice",
              "Don’t — fix the server",
              "An SEO requirement",
              "Replaces logs",
            ],
            correct: 1,
            explain: "Treat the cause.",
          },
        ],
      },
    ],
  },

  "feyk-stranitsa": {
    checklist: {
      afterTitleIncludes: "How to spot it",
      title: "Site check checklist",
      lead: "Before paying a stranger.",
      items: [
        { id: "domain", label: "Domain checked for typos" },
        { id: "official", label: "URL from an official source" },
        { id: "contacts", label: "Contacts and details look plausible" },
        { id: "pressure", label: "No “pay in 5 minutes” pressure" },
        { id: "https", label: "HTTPS present (not the only criterion)" },
        { id: "reviews", label: "Reviews checked off-site" },
        { id: "report", label: "Report plan if it’s a brand clone" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Brand protection",
        title: "Mini quiz: fake pages",
        lead: "Two checks.",
        questions: [
          {
            id: "fk1",
            question: "Building fakes for SEO…",
            options: [
              "Is a normal clean tactic",
              "Risks bans and legal trouble",
              "Is a Webmaster requirement",
              "Replaces content",
            ],
            correct: 1,
            explain: "Forgeries aren’t a strategy.",
          },
          {
            id: "fk2",
            question: "A typo in a store domain…",
            options: [
              "Doesn’t matter",
              "Is a phishing red flag",
              "Means strong SEO",
              "Replaces company details",
            ],
            correct: 1,
            explain: "Match the brand domain.",
          },
        ],
      },
    ],
  },

  "lichnyy-kabinet": {
    checklist: {
      afterTitleIncludes: "Development: what to watch",
      title: "Cabinet checklist",
      lead: "Before the developer brief.",
      items: [
        { id: "need", label: "Why the business needs a cabinet is clear" },
        { id: "roles", label: "Roles and permissions described" },
        { id: "auth", label: "Login and password recovery thought through" },
        { id: "mobile", label: "Mobile UX in the requirements" },
        { id: "secure", label: "HTTPS and basic security" },
        { id: "crm", label: "Integrations (payment/CRM) listed" },
        { id: "pdn", label: "Personal data and consents covered" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why you need a cabinet",
        title: "Mini quiz: personal account",
        lead: "Two checks.",
        questions: [
          {
            id: "lk1",
            question: "A cabinet on a one-page landing…",
            options: [
              "Is always required",
              "Is often excess",
              "Replaces the lead form",
              "Is only for SEO",
            ],
            correct: 1,
            explain: "Fit the flow — not a checkbox.",
          },
          {
            id: "lk2",
            question: "A closed cabinet…",
            options: [
              "Should be fully indexed",
              "Isn’t for search — public content stays separate",
              "Replaces the blog",
              "Doesn’t need HTTPS",
            ],
            correct: 1,
            explain: "SEO is for open pages.",
          },
        ],
      },
    ],
  },

  "spetsrazmeshchenie-direkt": {
    checklist: {
      afterTitleIncludes: "Levers instead of chasing a name",
      title: "Checklist instead of “I want special”",
      lead: "Before racing for the top block.",
      items: [
        { id: "goal", label: "Goal and CPA are set" },
        { id: "ads", label: "Ads are strong and relevant" },
        { id: "keys", label: "Keywords and negatives in order" },
        { id: "lp", label: "Landing converts" },
        { id: "bid", label: "Bid / strategy chosen on purpose" },
        { id: "roi", label: "You calculate whether the top pays" },
        { id: "docs", label: "Current Direct formats checked" },
        { id: "report", label: "Client sees CPA, not a block name" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What people remember as “special placement”",
        title: "Mini quiz: special placement",
        lead: "Two checks.",
        questions: [
          {
            id: "sp1",
            question: "Old “special placement” as a tariff…",
            options: [
              "Works like in 2015",
              "Is outdated — follow the current auction",
              "Is the only way to show",
              "Replaces Metrika",
            ],
            correct: 1,
            explain: "UI and logic changed.",
          },
          {
            id: "sp2",
            question: "Top at any cost…",
            options: [
              "Always best ROI",
              "Only makes sense if it pays back",
              "Doesn’t depend on ads",
              "Doesn’t need a landing",
            ],
            correct: 1,
            explain: "Economics beat the block name.",
          },
        ],
      },
    ],
  },

  "viralnyy-kontent": {
    checklist: {
      afterTitleIncludes: "How to prep a piece for spread",
      title: "Viral packaging checklist",
      lead: "Before publishing “for the share”.",
      items: [
        { id: "hook", label: "Hook in the first seconds is clear" },
        { id: "why", label: "There’s a reason to share" },
        { id: "format", label: "Format is easy to forward" },
        { id: "brand", label: "Brand doesn’t drown the point" },
        { id: "lp", label: "If leads are the goal — a path to the site" },
        { id: "no-bots", label: "No bought shares" },
        { id: "facts", label: "Facts and content rights checked" },
        { id: "expect", label: "No virus guarantee in the KPI" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What counts as viral",
        title: "Mini quiz: virality",
        lead: "Two checks.",
        questions: [
          {
            id: "vk1",
            question: "Guaranteeing a virus…",
            options: [
              "Is possible by contract",
              "Isn’t — you only raise the odds",
              "Is possible by buying shares",
              "Is possible with one CTA",
            ],
            correct: 1,
            explain: "The effect is probabilistic.",
          },
          {
            id: "vk2",
            question: "Virality and VK reach…",
            options: [
              "Are always full synonyms",
              "Are related, but the VK metric is a special case",
              "Aren’t related",
              "Are YouTube-only",
            ],
            correct: 1,
            explain: "The general idea is wider than one metric.",
          },
        ],
      },
    ],
  },

  "pokupka-ssylok": {
    checklist: {
      afterTitleIncludes: "Donor criteria",
      title: "Checklist before paying for a placement",
      lead: "If you still pay for a mention.",
      items: [
        { id: "need", label: "Content and tech on your site first" },
        { id: "topic", label: "Donor is topically close" },
        { id: "spam", label: "Site isn’t link spam" },
        { id: "anchor", label: "Anchors without over-optimization" },
        { id: "traffic", label: "You expect traffic/brand — not “magic weight”" },
        { id: "report", label: "Contract / report for the placement" },
        { id: "nopak", label: "No “100 links in a week” pack" },
        { id: "track", label: "UTM and a placements log" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "How to fit it into strategy",
        title: "Mini quiz: buying links",
        lead: "Two checks.",
        questions: [
          {
            id: "ps1",
            question: "Mass link exchanges…",
            options: [
              "Are a safe must-have",
              "Carry high filter risk",
              "Replace content",
              "Guarantee TOP in a week",
            ],
            correct: 1,
            explain: "Quality beats packs.",
          },
          {
            id: "ps2",
            question: "A good donor is…",
            options: [
              "Any site with 2012 PageRank",
              "A live audience and a close topic",
              "Only free forum spam",
              "A site with no content",
            ],
            correct: 1,
            explain: "Audience and relevance.",
          },
        ],
      },
    ],
  },

  "nisha-sayta": {
    checklist: {
      afterTitleIncludes: "Choice framework",
      title: "Niche-choice checklist",
      lead: "Before investing in a site.",
      items: [
        { id: "pain", label: "Client pain is stated" },
        { id: "demand", label: "Demand checked with numbers" },
        { id: "margin", label: "Margin and LTV sketched" },
        { id: "comp", label: "Competitors reviewed" },
        { id: "diff", label: "Difference from the top is clear" },
        { id: "channel", label: "Traffic channel #1 for a test chosen" },
        { id: "focus", label: "One niche at the start — not ten" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Demand, competition, money",
        title: "Mini quiz: niche",
        lead: "Two checks.",
        questions: [
          {
            id: "ns1",
            question: "An empty niche with no competitors…",
            options: [
              "Is always a jackpot",
              "Often means no demand",
              "Guarantees TOP",
              "Doesn’t need demand checks",
            ],
            correct: 1,
            explain: "Look for where you can be better.",
          },
          {
            id: "ns2",
            question: "A “profitable niches 2021” ranking…",
            options: [
              "Is eternal truth",
              "Ages fast — run your own economics",
              "Replaces expertise",
              "Doesn’t need demand",
            ],
            correct: 1,
            explain: "Your numbers beat lists.",
          },
        ],
      },
    ],
  },

  "internet-portal": {
    checklist: {
      afterTitleIncludes: "When a business needs a portal",
      title: "Checklist before starting a portal",
      lead: "Before the brief and budget.",
      items: [
        { id: "diff", label: "Clear how this isn’t a regular services site" },
        { id: "mvp", label: "1–3 required MVP flows chosen" },
        { id: "nav", label: "Section map sketched" },
        { id: "roles", label: "User roles described" },
        { id: "content", label: "Who fills content every week" },
        { id: "metric", label: "Success metrics wider than “just traffic”" },
        { id: "budget", label: "Support budget for a year+ reserved" },
        { id: "seo", label: "Draft clusters for sections exist" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Site vs portal: the difference",
        title: "Mini quiz: portal",
        lead: "Two checks.",
        questions: [
          {
            id: "ip1",
            question: "A portal mainly differs from a services site by…",
            options: [
              "Only brighter design",
              "Multi-service depth and flows",
              "A mandatory marketplace",
              "No SEO",
            ],
            correct: 1,
            explain: "An ecosystem of jobs — not “prettier”.",
          },
          {
            id: "ip2",
            question: "For one service and leads it’s usually better…",
            options: [
              "A huge portal right away",
              "A site or landing for the flow",
              "Intranet only",
              "Ten empty sections",
            ],
            correct: 1,
            explain: "Scale to the job.",
          },
        ],
      },
    ],
  },

  "kod-statusa-http": {
    checklist: {
      afterTitleIncludes: "Checking the whole site",
      title: "Status checklist",
      lead: "After a release or move.",
      items: [
        { id: "smoke", label: "Key URLs checked via headers" },
        { id: "redir", label: "Redirects without long chains" },
        { id: "soft", label: "No soft 404 on removed entities" },
        { id: "crawl", label: "Crawl / template sample done" },
        { id: "wm", label: "404/5xx spikes in panels reviewed" },
        { id: "map", label: "301 map for removals exists" },
        { id: "monitor", label: "5xx alert on main hosts" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Classes 1xx–5xx",
        title: "Mini quiz: HTTP statuses",
        lead: "Two checks.",
        questions: [
          {
            id: "hs1",
            question: "Class 4xx means…",
            options: [
              "Server success",
              "A client / request-side error",
              "Redirect only",
              "Cache only",
            ],
            correct: 1,
            explain: "404, 403, 410, and similar.",
          },
          {
            id: "hs2",
            question: "A permanent URL move is best returned as…",
            options: [
              "200 with different content",
              "301",
              "500",
              "Meta refresh only",
            ],
            correct: 1,
            explain: "An explicit permanent redirect.",
          },
        ],
      },
    ],
  },

  "kod-200": {
    checklist: {
      afterTitleIncludes: "The soft 404 trap",
      title: "“Real” 200 checklist",
      lead: "For important landings.",
      items: [
        { id: "ok", label: "Final response is 200" },
        { id: "canon", label: "Canonical points to this URL" },
        { id: "index", label: "No accidental noindex" },
        { id: "content", label: "Content isn’t an empty stub" },
        { id: "del", label: "Deleted entities don’t hang as 200" },
        { id: "spa", label: "SPA routes don’t mask 404" },
        { id: "smoke", label: "Post-release smoke passed" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "200 and indexing",
        title: "Mini quiz: code 200",
        lead: "Two checks.",
        questions: [
          {
            id: "k200a",
            question: "Does 200 guarantee indexing?",
            options: [
              "Yes, always",
              "No — only a chance to crawl/read",
              "Only in Google",
              "Only with a 301",
            ],
            correct: 1,
            explain: "Then quality, directives, duplicates.",
          },
          {
            id: "k200b",
            question: "A soft 404 is…",
            options: [
              "An honest 404",
              "200 when the page effectively isn’t there",
              "503 only",
              "A redirect only",
            ],
            correct: 1,
            explain: "Masking missing content.",
          },
        ],
      },
    ],
  },

  "videoreklama-youtube": {
    checklist: {
      afterTitleIncludes: "Should you launch",
      title: "Checklist before YouTube Ads",
      lead: "Before turning budget on.",
      items: [
        { id: "goal", label: "Goal and target CPA/ROMI are clear" },
        { id: "offer", label: "Offer and CTA in the clip are unambiguous" },
        { id: "creatives", label: "At least 2 creatives for a test" },
        { id: "lp", label: "Landing ready for the offer" },
        { id: "measure", label: "Metrika / conversions set" },
        { id: "limit", label: "Test cap and deadline set" },
        { id: "stop", label: "Stop / scale rule written" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Sales and the funnel",
        title: "Mini quiz: video ads",
        lead: "Two checks.",
        questions: [
          {
            id: "vy1",
            question: "YouTube Ads and channel monetization are…",
            options: [
              "The same thing",
              "Different: you pay vs the creator earns",
              "SEO only",
              "Banners only",
            ],
            correct: 1,
            explain: "Ads account ≠ Partner Program.",
          },
          {
            id: "vy2",
            question: "Without conversion measurement, optimization goes…",
            options: [
              "To leads by itself",
              "Often to views, not money",
              "To SEO only",
              "Without needing a landing",
            ],
            correct: 1,
            explain: "Goals in analytics first.",
          },
        ],
      },
    ],
  },

  "veb-stranitsa": {
    checklist: {
      afterTitleIncludes: "“Page moved”",
      title: "Page health checklist",
      lead: "For the site owner.",
      items: [
        { id: "url", label: "Important URLs are stable and clear" },
        { id: "status", label: "Key pages return the expected status" },
        { id: "speed", label: "No heavy scripts “just because”" },
        { id: "forms", label: "Forms don’t break on “outdated” without PRG" },
        { id: "redir", label: "Moves closed with 301" },
        { id: "monitor", label: "Unavailable alert exists" },
        { id: "backup", label: "Site backup ≠ “Save as”" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why webpages exist",
        title: "Mini quiz: webpage",
        lead: "Two checks.",
        questions: [
          {
            id: "vs1",
            question: "A webpage is…",
            options: [
              "The whole internet",
              "A document with a URL the server returns",
              "Only an image",
              "Only DNS",
            ],
            correct: 1,
            explain: "One address — one document/response.",
          },
          {
            id: "vs2",
            question: "On a URL move, for SEO it’s better to…",
            options: [
              "Keep the old 200 with different meaning",
              "Set a 301 to the new address",
              "Always delete with no redirect",
              "JS redirect only",
            ],
            correct: 1,
            explain: "An explicit permanent redirect.",
          },
        ],
      },
    ],
  },

  "klyuchi-internet-magazin": {
    checklist: {
      afterTitleIncludes: "Clusters: category, filter, card",
      title: "Store semantics checklist",
      lead: "Before mass page generation.",
      items: [
        { id: "markers", label: "Assortment markers collected" },
        { id: "clean", label: "Junk and foreign brands filtered" },
        { id: "cluster", label: "Clusters mapped to URL types" },
        { id: "priority", label: "Priority by margin/demand exists" },
        { id: "facet", label: "Filter indexing policy is clear" },
        { id: "file", label: "Living core file with URL/status column" },
        { id: "ads", label: "Overlap with ads keywords accounted for" },
        { id: "time", label: "TOP expectations realistic (months)" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to avoid",
        title: "Mini quiz: store keywords",
        lead: "Two checks.",
        questions: [
          {
            id: "kim1",
            question: "Copying a competitor’s core wholesale…",
            options: [
              "Is best practice",
              "Is risky: different structure and assortment",
              "Guarantees TOP",
              "Replaces Wordstat",
            ],
            correct: 1,
            explain: "Ideas — yes; blind copy-paste — no.",
          },
          {
            id: "kim2",
            question: "Modifier queries usually go…",
            options: [
              "Only to the homepage",
              "To filters/landings or cards by meaning",
              "Always to the blog",
              "Only to Ads",
            ],
            correct: 1,
            explain: "Map by page type.",
          },
        ],
      },
    ],
  },

  "analitika-kontent-marketinga": {
    checklist: {
      afterTitleIncludes: "How to turn numbers into decisions",
      title: "Content analytics checklist",
      lead: "Before the weekly editorial report.",
      items: [
        { id: "goal", label: "Channel goal for the period is locked" },
        { id: "kpi", label: "5–7 KPIs aligned with the goal" },
        { id: "goals", label: "Metrika/GA goals work" },
        { id: "cost", label: "Production costs counted" },
        { id: "compare", label: "Platforms aren’t compared by raw views" },
        { id: "top", label: "Top and anti-top pieces reviewed" },
        { id: "next", label: "Hypotheses for the next sprint written" },
        { id: "seo", label: "SEO horizon is months — not “TOP in a week”" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Editorial ops metrics",
        title: "Mini quiz: content metrics",
        lead: "Two checks.",
        questions: [
          {
            id: "akm1",
            question: "Likes as the only KPI…",
            options: [
              "Are enough for business",
              "Are a weak stand-in for goals (leads/sales/retention)",
              "Replace Metrika",
              "Guarantee ROI",
            ],
            correct: 1,
            explain: "Likes are a signal, not a business result.",
          },
          {
            id: "akm2",
            question: "Editorial ops metrics exist to…",
            options: [
              "Report pretty likes",
              "Tie effect to production cost and time",
              "Replace CRM",
              "Turn off site analytics",
            ],
            correct: 1,
            explain: "Otherwise cheap noise looks better than a strong guide.",
          },
        ],
      },
    ],
  },

  "bazy-dannyh-sayta": {
    checklist: {
      afterTitleIncludes: "Backup: what and how",
      title: "Site backup checklist",
      lead: "Before a CMS update and major edits.",
      items: [
        { id: "db", label: "DB dump is in the backup" },
        { id: "files", label: "Files (code + uploads) are copied" },
        { id: "offsite", label: "Copy isn’t only on the same disk" },
        { id: "schedule", label: "Schedule and retention are clear" },
        { id: "pre", label: "Fresh point before updates" },
        { id: "test", label: "Restore tested at least once" },
        { id: "access", label: "DB passwords strong, access limited" },
        { id: "public", label: "Dumps aren’t in public_html" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Tie-in with SEO and stability",
        title: "Mini quiz: site DB",
        lead: "Two checks.",
        questions: [
          {
            id: "bds1",
            question: "Backing up theme files only…",
            options: [
              "Fully restores orders and posts",
              "Isn’t enough without a DB dump",
              "Replaces hosting",
              "Is needed once every five years",
            ],
            correct: 1,
            explain: "Live data usually sits in the DB.",
          },
          {
            id: "bds2",
            question: "An untested backup…",
            options: [
              "Is always perfect",
              "Is false safety until you restore from it",
              "Is enough without a schedule",
              "Replaces monitoring",
            ],
            correct: 1,
            explain: "You need a restore test.",
          },
        ],
      },
    ],
  },

  "dubli-stranits": {
    checklist: {
      afterTitleIncludes: "How to fix: canon, 301, noindex",
      title: "Duplicate-fighting checklist",
      lead: "After finding the systemic cause.",
      items: [
        { id: "mirrors", label: "www / https / slash merged with 301" },
        { id: "canon", label: "Canon chosen per entity" },
        { id: "links", label: "Internal links and sitemap to the canon" },
        { id: "params", label: "Parameters (utm/sort/session) under control" },
        { id: "facet", label: "Filter/pagination policy is clear" },
        { id: "crawl", label: "Crawl: few repeated title/H1" },
        { id: "panels", label: "Webmaster/GSC: canon and index checked" },
        { id: "source", label: "CMS template no longer spawns the same duplicates" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why duplicates hurt SEO",
        title: "Mini quiz: page duplicates",
        lead: "Two checks.",
        questions: [
          {
            id: "ds1",
            question: "robots.txt as the main way to remove duplicates…",
            options: [
              "Is best practice",
              "Doesn’t replace merging and canonical",
              "Equals 301",
              "Guarantees TOP",
            ],
            correct: 1,
            explain: "Disallow is about crawl, not a full merge.",
          },
          {
            id: "ds2",
            question: "If the old URL shouldn’t open…",
            options: [
              "Canonical only, never a redirect",
              "Usually a 301 to the live canon",
              "Delete with no server response",
              "Keep both as 200 “just in case”",
            ],
            correct: 1,
            explain: "Users and bots go to the live address.",
          },
        ],
      },
    ],
  },

  "teg-h1": {
    checklist: {
      afterTitleIncludes: "How to check H1 on the site",
      title: "H1 checklist",
      lead: "After a CMS template change.",
      items: [
        { id: "one", label: "One meaningful H1 per URL" },
        { id: "logo", label: "Header logo doesn’t occupy H1" },
        { id: "title", label: "H1 isn’t a word-for-word Title clone" },
        { id: "intent", label: "Wording = page intent" },
        { id: "h2", label: "H2–H3 follow meaning, no skip for type size" },
        { id: "spam", label: "No keyword sheet in H1" },
        { id: "crawl", label: "Crawl: no empty or mass-duplicate H1s" },
        { id: "templates", label: "Different templates checked (home/card/blog)" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "H1–H6 hierarchy",
        title: "Mini quiz: H1 tag",
        lead: "Two checks.",
        questions: [
          {
            id: "h11",
            question: "Title and H1 should…",
            options: [
              "Always match verbatim",
              "Share meaning but may differ in wording",
              "Be empty",
              "Be keywords only, comma-separated",
            ],
            correct: 1,
            explain: "Snippet and on-page heading have different roles.",
          },
          {
            id: "h12",
            question: "Several H1s in the template…",
            options: [
              "Are best SEO practice",
              "Usually hurt: they blur the page topic",
              "Are required for TOP",
              "Replace Title",
            ],
            correct: 1,
            explain: "One clear H1 for the main content.",
          },
        ],
      },
    ],
  },

  "google-biznes": {
    checklist: {
      afterTitleIncludes: "Common mistakes and the site link",
      title: "Google Business Profile checklist",
      lead: "Before calling the listing “done”.",
      items: [
        { id: "claim", label: "Listing rights claimed / verified" },
        { id: "nap", label: "NAP matches the site" },
        { id: "name", label: "No keyword spam in the name" },
        { id: "hours", label: "Hours are current" },
        { id: "cat", label: "Categories match reality" },
        { id: "photo", label: "Own photos, not stock" },
        { id: "reviews", label: "Reviews monitored, no fake ratings" },
        { id: "access", label: "Staff access is up to date" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to fill after verification",
        title: "Mini quiz: Google listing",
        lead: "Two checks.",
        questions: [
          {
            id: "gb1",
            question: "Keywords in the business name…",
            options: [
              "Are required for Maps",
              "Break the rules and are risky",
              "Replace the category",
              "Are needed instead of an address",
            ],
            correct: 1,
            explain: "Name as on the storefront.",
          },
          {
            id: "gb2",
            question: "NAP is…",
            options: [
              "Only the logo",
              "Consistent name, address, phone",
              "Only reviews",
              "Only UTM",
            ],
            correct: 1,
            explain: "Name, Address, Phone.",
          },
        ],
      },
    ],
  },

  "protokol-http": {
    checklist: {
      afterTitleIncludes: "HTTP through an SEO lens",
      title: "HTTP hygiene checklist",
      lead: "Before fine SEO copy.",
      items: [
        { id: "https", label: "Site opens over HTTPS" },
        { id: "redirect", label: "HTTP → HTTPS merged with 301" },
        { id: "status", label: "Key URLs return the expected status" },
        { id: "chain", label: "No long redirect chains" },
        { id: "mixed", label: "No mixed content" },
        { id: "type", label: "Page Content-Type is correct" },
        { id: "tools", label: "You can check a URL in DevTools/curl" },
        { id: "logs", label: "You treat the bot as an HTTP client" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "HTTP and HTTPS",
        title: "Mini quiz: HTTP protocol",
        lead: "Two checks.",
        questions: [
          {
            id: "ph1",
            question: "HTTP is…",
            options: [
              "A markup language like HTML",
              "A request/response protocol between client and server",
              "Only a certificate",
              "Only DNS",
            ],
            correct: 1,
            explain: "Resource delivery — not markup.",
          },
          {
            id: "ph2",
            question: "HTTPS relative to HTTP is…",
            options: [
              "A different HTML language",
              "The same HTTP over TLS",
              "Disabling statuses",
              "Replacing SEO",
            ],
            correct: 1,
            explain: "Channel encryption + certificate.",
          },
        ],
      },
    ],
  },

  "adaptivnyy-sayt": {
    checklist: {
      afterTitleIncludes: "How to test adaptation",
      title: "Mobile responsive checklist",
      lead: "Before shipping a theme or major layout.",
      items: [
        { id: "viewport", label: "meta viewport in place" },
        { id: "scroll", label: "No stray horizontal scroll" },
        { id: "tap", label: "Button/link tap targets large enough" },
        { id: "form", label: "Form and phone usable on mobile" },
        { id: "img", label: "Images compressed / srcset considered" },
        { id: "templates", label: "Home, catalog, product, form checked" },
        { id: "speed", label: "Mobile speed acceptable" },
        { id: "real", label: "Checked on a real device" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Responsive or a separate mobile version",
        title: "Mini quiz: responsive site",
        lead: "Two checks.",
        questions: [
          {
            id: "as1",
            question: "For a new site it’s usually better to…",
            options: [
              "A separate m. with different content",
              "Responsive on one canonical URL",
              "Desktop only",
              "Two sites with no redirects",
            ],
            correct: 1,
            explain: "Fewer duplicates and simpler maintenance.",
          },
          {
            id: "as2",
            question: "Responsive by itself…",
            options: [
              "Guarantees a fast site",
              "Doesn’t replace media compression and light JS",
              "Disables SEO",
              "Always equals AMP",
            ],
            correct: 1,
            explain: "Layout ≠ performance.",
          },
        ],
      },
    ],
  },

  "bezopasnost-sayta": {
    checklist: {
      afterTitleIncludes: "Basic security hygiene",
      title: "Website security checklist",
      lead: "Minimum for an owner before an incident.",
      items: [
        { id: "upd", label: "CMS and plugins updated" },
        { id: "pwd", label: "Passwords strong and unique" },
        { id: "backup", label: "DB+files backup with restore test" },
        { id: "rights", label: "DB and file privileges least needed" },
        { id: "plugins", label: "Extra plugins removed" },
        { id: "admin", label: "Admin not on a weak default password" },
        { id: "monitor", label: "Watch webmaster/host mail" },
        { id: "owner", label: "Incident owner assigned" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "SQL injection: the idea without",
        title: "Mini quiz: website security",
        lead: "Two checks.",
        questions: [
          {
            id: "bs1",
            question: "HTTPS protects against SQL injection…",
            options: [
              "Completely yes",
              "No: it encrypts the channel, not app code",
              "Replaces CMS updates",
              "Only needed for images",
            ],
            correct: 1,
            explain: "TLS ≠ injection-proof application.",
          },
          {
            id: "bs2",
            question: "After a breach it’s critical to…",
            options: [
              "Only delete one suspicious file",
              "Rotate access and restore from a clean backup",
              "Lower prices on the site",
              "Disable HTTPS",
            ],
            correct: 1,
            explain: "Otherwise they log in again with the same password.",
          },
        ],
      },
    ],
  },

  "dlina-title": {
    checklist: {
      afterTitleIncludes: "How to roll out and control",
      title: "Title checklist",
      lead: "Before bulk meta edits.",
      items: [
        { id: "intent", label: "URL intent is clear" },
        { id: "start", label: "Meaning at the start of the string" },
        { id: "uniq", label: "Title is unique" },
        { id: "len", label: "Truncation preview checked" },
        { id: "h1", label: "Not a verbatim H1 clone" },
        { id: "spam", label: "No keyword sheet" },
        { id: "brand", label: "Brand in the tail where it fits" },
        { id: "crawl", label: "Crawl: no empty/duplicate Titles" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Characters vs pixels",
        title: "Mini quiz: Title length",
        lead: "Two checks.",
        questions: [
          {
            id: "dt1",
            question: "The hard rule “exactly 70 characters”…",
            options: [
              "Is always current",
              "Is outdated dogma; pixels and meaning matter",
              "Replaces uniqueness",
              "Is required for H1",
            ],
            correct: 1,
            explain: "Letter widths differ; limits changed.",
          },
          {
            id: "dt2",
            question: "Title and H1…",
            options: [
              "Must match word for word",
              "Share meaning; wording can differ",
              "Can both stay empty",
              "Are only needed on the homepage",
            ],
            correct: 1,
            explain: "Snippet and on-page headline have different roles.",
          },
        ],
      },
    ],
  },

  "metrika-ne-rabotaet": {
    checklist: {
      afterTitleIncludes: "Diagnostics order without chaos",
      title: "Checklist: Metrica is silent",
      lead: "Before reinstalling the counter.",
      items: [
        { id: "num", label: "Counter number matches the cabinet" },
        { id: "src", label: "Code is in the source of needed templates" },
        { id: "net", label: "Network shows a Metrica request" },
        { id: "adblock", label: "Checked without a blocker" },
        { id: "cache", label: "CMS/CDN cache flushed" },
        { id: "online", label: "Visit visible in Online" },
        { id: "goals", label: "Goals checked in debugger if needed" },
        { id: "dup", label: "No double install (native + GTM)" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Goals aren’t firing",
        title: "Mini quiz: Metrica breakage",
        lead: "Two checks.",
        questions: [
          {
            id: "mnr1",
            question: "Webvisor isn’t recording, visits flow…",
            options: [
              "Means the counter is fully dead",
              "Often a separate module setting/limit",
              "Need to remove HTTPS",
              "Always only AdBlock’s fault",
            ],
            correct: 1,
            explain: "Diagnose modules separately.",
          },
          {
            id: "mnr2",
            question: "Thank-you goal with AJAX and no URL change…",
            options: [
              "Always fires on “URL contains”",
              "Often needs reachGoal or another condition",
              "Is never needed",
              "Is fixed only by the informer",
            ],
            correct: 1,
            explain: "Without an address change a URL goal stays silent.",
          },
        ],
      },
    ],
  },

  "sohranit-foto-instagram": {
    checklist: {
      afterTitleIncludes: "First: your photos vs others",
      title: "Checklist before saving",
      lead: "To avoid rights issues and phishing.",
      items: [
        { id: "own", label: "Content is yours or you have permission" },
        { id: "official", label: "Official app/cabinet only" },
        { id: "nologin", label: "Password not entered on a third-party “downloader”" },
        { id: "source", label: "For print, original exists outside the feed" },
        { id: "direct", label: "Vanishing Direct attachments not “cracked” with shady tools" },
        { id: "backup", label: "Work files live on team cloud/disk" },
        { id: "2fa", label: "2FA enabled on the account" },
        { id: "client", label: "Client gets a rights-cleared file, not a screenshot of someone else’s post" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Browser and computer",
        title: "Mini quiz: saving IG photos",
        lead: "Two checks.",
        questions: [
          {
            id: "sfi1",
            question: "A third-party “download from Instagram” site asks for a password…",
            options: [
              "Normal practice",
              "Phishing risk — don’t enter it",
              "Required for your own posts",
              "Replaces 2FA",
            ],
            correct: 1,
            explain: "Password only in official login forms.",
          },
          {
            id: "sfi2",
            question: "Someone else’s photo for site ads…",
            options: [
              "Always fine after a screenshot",
              "Needs rights / author permission",
              "A repost is enough",
              "Allowed by any downloader",
            ],
            correct: 1,
            explain: "Copyright isn’t cleared by a screenshot.",
          },
        ],
      },
    ],
  },

  "vstavka-javascript": {
    checklist: {
      afterTitleIncludes: "Typical mistakes after insert",
      title: "JS insert checklist",
      lead: "Before publishing to production.",
      items: [
        { id: "source", label: "Code from the official service cabinet" },
        { id: "place", label: "One central place (template/GTM)" },
        { id: "backup", label: "Theme/file backup before edit" },
        { id: "cache", label: "Cache flushed" },
        { id: "pages", label: "Several URL types checked" },
        { id: "dup", label: "No double install" },
        { id: "console", label: "No new critical console errors" },
        { id: "cabinet", label: "Event/visit visible in the service cabinet" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "WordPress (self-hosted)",
        title: "Mini quiz: inserting JavaScript",
        lead: "Two checks.",
        questions: [
          {
            id: "vj1",
            question: "Inserting JS via the post visual editor…",
            options: [
              "Best practice",
              "Bad: the editor often strips scripts",
              "Required for SEO",
              "Always replaces GTM",
            ],
            correct: 1,
            explain: "Need script fields or the template.",
          },
          {
            id: "vj2",
            question: "An “SEO accelerator” snippet from an unknown forum…",
            options: [
              "Always safe",
              "Malware risk — don’t use it",
              "Needed instead of Metrica",
              "Required on Wix",
            ],
            correct: 1,
            explain: "Only trusted service cabinets.",
          },
        ],
      },
    ],
  },

  "seo-malyy-biznes": {
    checklist: {
      afterTitleIncludes: "What to postpone and what to avoid",
      title: "SEO checklist for SMB",
      lead: "Minimum on a modest budget.",
      items: [
        { id: "mobile", label: "Mobile view and speed OK" },
        { id: "nap", label: "NAP and map listings filled" },
        { id: "pages", label: "Landings exist for main services" },
        { id: "intent", label: "Semantics without gigantomania" },
        { id: "phone", label: "Phone/lead form usable on mobile" },
        { id: "time", label: "TOP expectations — months, not “in a week”" },
        { id: "spam", label: "No spam tactics or “TOP guarantees”" },
        { id: "month", label: "Monthly review of search leads" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Realistic expectations for small business",
        title: "Mini quiz: SEO for small business",
        lead: "Two checks.",
        questions: [
          {
            id: "smb1",
            question: "Site prep and hitting TOP…",
            options: [
              "Are the same thing “in a week”",
              "Prep is weeks; core TOP is planned months",
              "TOP always in 3 days after Title",
              "Landings aren’t needed",
            ],
            correct: 1,
            explain: "Don’t mix prep timelines and ranking growth.",
          },
          {
            id: "smb2",
            question: "For local services a stronger start is often…",
            options: [
              "Only buying 1000 links",
              "Maps + clear landings + speed",
              "Only head terms with no geo",
              "Disable the phone on the site",
            ],
            correct: 1,
            explain: "Local loop and easy lead capture.",
          },
        ],
      },
    ],
  },

  "navigatsiya-sayta": {
    checklist: {
      afterTitleIncludes: "How to check and improve",
      title: "Navigation checklist",
      lead: "Before shipping a menu or redesign.",
      items: [
        { id: "labels", label: "Menu labels clear without explanations" },
        { id: "depth", label: "Main goals in 1–3 clicks" },
        { id: "mobile", label: "Mobile burger works reliably" },
        { id: "crumbs", label: "Breadcrumbs in catalog (if needed)" },
        { id: "contacts", label: "Contacts/lead found quickly" },
        { id: "footer", label: "Footer isn’t a spam sheet duplicate" },
        { id: "facets", label: "Filters aligned with SEO policy" },
        { id: "broken", label: "No broken links in the menu" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Navigation and conversion",
        title: "Mini quiz: website navigation",
        lead: "Two checks.",
        questions: [
          {
            id: "ns1",
            question: "A main menu of 20 equal-weight items…",
            options: [
              "Always better for SEO",
              "Often worse: users get lost",
              "Replaces search",
              "Required for a landing",
            ],
            correct: 1,
            explain: "Better 5–7 clear sections.",
          },
          {
            id: "ns2",
            question: "Catalog filters for SEO…",
            options: [
              "Always index every combination",
              "Need an indexing policy, or duplicates",
              "Aren’t related to navigation",
              "Replace the menu",
            ],
            correct: 1,
            explain: "UX navigation ≠ infinite index.",
          },
        ],
      },
    ],
  },

  "karta-sayta": {
    checklist: {
      afterTitleIncludes: "Typical mistakes and control",
      title: "Sitemap checklist",
      lead: "Before submitting to webmaster panels.",
      items: [
        { id: "canon", label: "Only canonical https URLs in the map" },
        { id: "status", label: "URLs return 200, no chains" },
        { id: "clean", label: "No filters/utility/noindex" },
        { id: "robots", label: "Sitemap listed in robots.txt" },
        { id: "panels", label: "Added in Search Console / webmaster tools" },
        { id: "auto", label: "Auto-update when new URLs appear" },
        { id: "index", label: "Sitemap index for large volumes" },
        { id: "audit", label: "URL count matches expectations" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "XML and HTML: two different",
        title: "Mini quiz: sitemap",
        lead: "Two checks.",
        questions: [
          {
            id: "ks1",
            question: "sitemap.xml is primarily…",
            options: [
              "A pretty menu for people",
              "A hint for bots with a URL list",
              "A TOP-1 guarantee",
              "A robots.txt replacement",
            ],
            correct: 1,
            explain: "Machine-readable list for crawl.",
          },
          {
            id: "ks2",
            question: "Including every filter URL in the sitemap…",
            options: [
              "Best practice",
              "Risk of noise and bloated crawl",
              "Required for an HTML map",
              "Replaces canonical",
            ],
            correct: 1,
            explain: "Only meaningful canonicals.",
          },
        ],
      },
    ],
  },

  "ssylochnyy-profil": {
    checklist: {
      afterTitleIncludes: "What to do after the screen",
      title: "Backlink screen checklist",
      lead: "Lock conclusions, not only numbers.",
      items: [
        { id: "snap", label: "Domain/link snapshot with a date" },
        { id: "panels", label: "Cross-check with Search Console / webmaster tools" },
        { id: "donors", label: "Top donors reviewed for spam" },
        { id: "anchors", label: "Anchor list: commercial skew noted" },
        { id: "comp", label: "Compared with 2–3 competitors" },
        { id: "dyn", label: "30–90 day dynamics recorded" },
        { id: "actions", label: "Task list: cleanup / content / monitoring" },
        { id: "alert", label: "Alert on abnormal growth" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What’s in a “profile” and why audit",
        title: "Mini quiz: backlink profile",
        lead: "Two checks.",
        questions: [
          {
            id: "sp1",
            question: "For assessment, more often matters…",
            options: [
              "Only raw backlink count",
              "Referring domains and donor quality",
              "Only a competitor’s DR",
              "Nofollow count alone",
            ],
            correct: 1,
            explain: "Domains and quality beat “thousands from one satellite”.",
          },
          {
            id: "sp2",
            question: "Mass disavow “just in case”…",
            options: [
              "Required after any audit",
              "Risky without review; controlled junk first",
              "Replaces content",
              "Guarantees growth",
            ],
            correct: 1,
            explain: "Own/clear junk first; disavow surgically.",
          },
        ],
      },
    ],
  },

  "kanonicheskiy-teg": {
    checklist: {
      afterTitleIncludes: "Diagnosing problems",
      title: "Canonical checklist",
      lead: "Before calling duplicates “closed”.",
      items: [
        { id: "one", label: "One canonical per document" },
        { id: "abs", label: "Absolute https to the final URL" },
        { id: "ok", label: "Canon returns 200, no chain" },
        { id: "self", label: "Self-ref or explicit canon in the template" },
        { id: "vs301", label: "Clear where 301 vs canonical applies" },
        { id: "map", label: "Sitemap and menu point to canons" },
        { id: "crawl", label: "Crawler: no conflicting canons" },
        { id: "panels", label: "Declared vs selected canon checked in panels" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What the canonical tag is",
        title: "Mini quiz: canonical",
        lead: "Two checks.",
        questions: [
          {
            id: "ct1",
            question: "rel=canonical primarily…",
            options: [
              "Deletes a URL instantly like a 404",
              "Points to the preferred URL among copies",
              "Replaces robots.txt",
              "Guarantees TOP",
            ],
            correct: 1,
            explain: "A preference signal, not a hard 301.",
          },
          {
            id: "ct2",
            question: "Old URL is no longer needed for users…",
            options: [
              "Canonical is enough",
              "Usually a 301 to the new address",
              "Only noindex",
              "Disallow in robots",
            ],
            correct: 1,
            explain: "A move needs a redirect.",
          },
        ],
      },
    ],
  },

  "napolnenie-sayta": {
    checklist: {
      afterTitleIncludes: "Publishing rules and an example",
      title: "Content fill checklist",
      lead: "Before chasing volume.",
      items: [
        { id: "niche", label: "Niche, audience, required pages locked" },
        { id: "comp", label: "3–5 competitors reviewed by topic" },
        { id: "sem", label: "Topics tied to demand clusters" },
        { id: "plan", label: "30-day queue with priorities" },
        { id: "tz", label: "Brief with goal, blocks, and CTA" },
        { id: "uniq", label: "Uniqueness and facts checked" },
        { id: "media", label: "Media by meaning, not stock for stock’s sake" },
        { id: "pub", label: "Release checklist (title, links, index)" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Niche, audience, and content type",
        title: "Mini quiz: filling a site",
        lead: "Two checks.",
        questions: [
          {
            id: "ns1",
            question: "Copying competitors’ texts…",
            options: [
              "Normal SEO practice",
              "Not as a base; studying topics is fine",
              "Required for uniqueness",
              "Replaces semantics",
            ],
            correct: 1,
            explain: "Ideas and structure — yes; copy-paste — no.",
          },
          {
            id: "ns2",
            question: "Grabber auto-fill for commerce…",
            options: [
              "Best way to fill the site",
              "Usually harmful; better your own content on a plan",
              "Guarantees TOP",
              "Replaces a brief",
            ],
            correct: 1,
            explain: "Quality and meaning beat volume.",
          },
        ],
      },
    ],
  },

  "seo-vkontakte": {
    checklist: {
      afterTitleIncludes: "Recommendations and control",
      title: "VK SEO checklist",
      lead: "Packaging the community for search.",
      items: [
        { id: "name", label: "Name is clear, no keyword spam" },
        { id: "desc", label: "Description: who, for whom, geo, value" },
        { id: "public", label: "Needed sections public for crawl" },
        { id: "sem", label: "Short core spread across fields/posts" },
        { id: "pin", label: "Pin with offer and path to the site" },
        { id: "posts", label: "Evergreen useful posts exist" },
        { id: "site", label: "Links to relevant landings" },
        { id: "audit", label: "Quarterly search + stats review" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why SEO for a VK community",
        title: "Mini quiz: VK SEO",
        lead: "Two checks.",
        questions: [
          {
            id: "sv1",
            question: "VK community SEO…",
            options: [
              "Fully replaces a website",
              "Extra search visibility next to SMM",
              "Only about buying subscribers",
              "A commercial TOP guarantee",
            ],
            correct: 1,
            explain: "A channel next to the site, not a replacement.",
          },
          {
            id: "sv2",
            question: "Main risk of keyword spam in the name…",
            options: [
              "No risk",
              "Weak trust and an unnatural snippet",
              "Required for indexing",
              "Replaces the description",
            ],
            correct: 1,
            explain: "Moderate keyword, clear name.",
          },
        ],
      },
    ],
  },

  "open-graph": {
    checklist: {
      afterTitleIncludes: "Rollout practice",
      title: "Open Graph checklist",
      lead: "Before sharing key URLs.",
      items: [
        { id: "tags", label: "og:title, type, image, url in place" },
        { id: "desc", label: "og:description readable, no stuffing" },
        { id: "img", label: "Image ~1200×630, absolute https" },
        { id: "canon", label: "og:url matches page canon" },
        { id: "head", label: "Tags in head, not body" },
        { id: "preview", label: "Preview checked in a debugger" },
        { id: "cache", label: "After image change — clear preview cache" },
        { id: "tmpl", label: "Rule for new articles/cards" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why you need Open Graph",
        title: "Mini quiz: Open Graph",
        lead: "Two checks.",
        questions: [
          {
            id: "og1",
            question: "Open Graph primarily affects…",
            options: [
              "Direct search rankings",
              "Link preview on share",
              "TTFB speed",
              "robots.txt",
            ],
            correct: 1,
            explain: "Share card, not a ranking factor.",
          },
          {
            id: "og2",
            question: "Preview didn’t update after an edit…",
            options: [
              "Means tags can’t be changed",
              "Often platform cache — clear/recheck",
              "Only Twitter Card is needed",
              "Changing the sitemap is enough",
            ],
            correct: 1,
            explain: "Preview cache keeps the old card.",
          },
        ],
      },
    ],
  },

  "google-analytics": {
    checklist: {
      afterTitleIncludes: "Limits and data hygiene",
      title: "GA checklist for a store",
      lead: "So reports reflect real orders.",
      items: [
        { id: "tag", label: "GA4 on all templates, no duplicate" },
        { id: "ecom", label: "Funnel / ecommerce events set up" },
        { id: "filter", label: "Internal traffic filtered" },
        { id: "weekly", label: "Weekly pass: channels + funnel" },
        { id: "seg", label: "2–3 working segments exist" },
        { id: "crm", label: "Purchase reconciled with CRM orders" },
        { id: "hyp", label: "Takeaways written as hypotheses/tasks" },
        { id: "mobile", label: "Mobile reviewed separately" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What you need before analysis",
        title: "Mini quiz: GA for a store",
        lead: "Two checks.",
        questions: [
          {
            id: "ga1",
            question: "Without ecommerce markup you mostly see…",
            options: [
              "Revenue by SKU automatically",
              "Views/sessions without a full purchase funnel",
              "A conversion-growth guarantee",
              "Only Metrica",
            ],
            correct: 1,
            explain: "You need purchase and step events.",
          },
          {
            id: "ga2",
            question: "Segments are needed so you…",
            options: [
              "Replace goals",
              "Don’t stare at one sitewide “average”",
              "Turn off mobile traffic",
              "Delete GA3",
            ],
            correct: 1,
            explain: "Audience and funnel slices.",
          },
        ],
      },
    ],
  },

  "razmer-stranitsy": {
    checklist: {
      afterTitleIncludes: "Production control",
      title: "Page weight checklist",
      lead: "Before shipping a template.",
      items: [
        { id: "net", label: "Network: cold load without cache" },
        { id: "top", label: "Top resources by Size recorded" },
        { id: "img", label: "Hero/cards compressed, modern formats" },
        { id: "compr", label: "Brotli/Gzip on text resources" },
        { id: "js", label: "Extra JS/widgets removed or deferred" },
        { id: "mobile", label: "Checked on mobile / throttling" },
        { id: "budget", label: "Weight budget for key templates" },
        { id: "after", label: "Before/after transfer size logged" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why know page size",
        title: "Mini quiz: page weight",
        lead: "Two checks.",
        questions: [
          {
            id: "rs1",
            question: "Page weight is primarily…",
            options: [
              "Only HTML length in characters",
              "Total volume of loaded resources",
              "Number of outbound links",
              "TOP-10 position",
            ],
            correct: 1,
            explain: "Transfer of all document assets.",
          },
          {
            id: "rs2",
            question: "The most common quick win…",
            options: [
              "Add another slider",
              "Compress images and cut extra JS",
              "Disable Gzip",
              "Increase hero resolution",
            ],
            correct: 1,
            explain: "Images and scripts are usually the fat.",
          },
        ],
      },
    ],
  },

  "katalogi-saytov": {
    checklist: {
      afterTitleIncludes: "Classifieds and spam caution",
      title: "Directories checklist",
      lead: "Before mass registration.",
      items: [
        { id: "nap", label: "NAP consistent on site and listings" },
        { id: "list", label: "Platform whitelist, no farms" },
        { id: "maps", label: "Maps / business profiles prioritized" },
        { id: "desc", label: "Descriptions not copy-pasted everywhere" },
        { id: "anchor", label: "Anchors brand/URL, not keyword bulk" },
        { id: "table", label: "Table: listing URL and access" },
        { id: "noauto", label: "No auto-submit to thousands of directories" },
        { id: "audit", label: "Quarterly currency check" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What registration gives today",
        title: "Mini quiz: directories",
        lead: "Two checks.",
        questions: [
          {
            id: "ks1",
            question: "Mass registration in 500 directories…",
            options: [
              "Best SEO method in 2026",
              "Outdated and risky practice",
              "Required for Yandex",
              "Replaces maps",
            ],
            correct: 1,
            explain: "Selective live directories, not spam.",
          },
          {
            id: "ks2",
            question: "NAP is…",
            options: [
              "An anchor type",
              "Consistent name, address, phone",
              "A sitemap format",
              "An analytics counter",
            ],
            correct: 1,
            explain: "Unified contact data.",
          },
        ],
      },
    ],
  },

  "otkazy-sayta": {
    checklist: {
      afterTitleIncludes: "Work order",
      title: "Bounce reduction checklist",
      lead: "By top landings, not sitewide average.",
      items: [
        { id: "seg", label: "Bounce reviewed by segments/URLs" },
        { id: "speed", label: "Speed and first-screen weight OK" },
        { id: "match", label: "H1/offer match query/ad" },
        { id: "nav", label: "Navigation and CTA are clear" },
        { id: "popup", label: "No aggressive pop-ups immediately" },
        { id: "fresh", label: "Prices/facts are current" },
        { id: "mobile", label: "Mobile checked separately" },
        { id: "goal", label: "Measure the action, not bounce alone" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "How to read bounce rate",
        title: "Mini quiz: bounce",
        lead: "Two checks.",
        questions: [
          {
            id: "ot1",
            question: "High bounce on an info page…",
            options: [
              "Always a disaster",
              "Can be normal if the answer was found",
              "Means you need a pop-up",
              "Is fixed only with links",
            ],
            correct: 1,
            explain: "“Found it and left” isn’t always bad.",
          },
          {
            id: "ot2",
            question: "First step on a commercial landing…",
            options: [
              "Buy more traffic",
              "Check speed, offer, and first screen",
              "Disable Metrica",
              "Remove all internal links",
            ],
            correct: 1,
            explain: "Expectation match and UX.",
          },
        ],
      },
    ],
  },

  "yandeks-xml": {
    checklist: {
      afterTitleIncludes: "Migrating from old integrations",
      title: "Checklist after Yandex.XML",
      lead: "Once classic XML is gone.",
      items: [
        { id: "dead", label: "Old XML calls found and disabled" },
        { id: "api", label: "Search API connected per docs if needed" },
        { id: "tos", label: "ToS and quotas accounted for" },
        { id: "cache", label: "Cache/request dedupe configured" },
        { id: "keys", label: "Keys not in git, least privilege" },
        { id: "nohtml", label: "No HTML SERP scraper in production" },
        { id: "alt", label: "For a small core — Webmaster/licensed tool" },
        { id: "owner", label: "Key owner and playbook documented" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What Yandex.XML was",
        title: "Mini quiz: Yandex.XML",
        lead: "Two checks.",
        questions: [
          {
            id: "yx1",
            question: "Classic Yandex.XML now is…",
            options: [
              "The main free channel for everyone",
              "Retired; look at Search API",
              "Required for Webmaster",
              "A Metrica replacement",
            ],
            correct: 1,
            explain: "Service closed autumn 2023.",
          },
          {
            id: "yx2",
            question: "Scraping Yandex HTML SERPs…",
            options: [
              "Recommended practice",
              "Risky and against rules; use an official channel",
              "The only Search API method",
              "Needed for sitemaps",
            ],
            correct: 1,
            explain: "Official API / licensed tools.",
          },
        ],
      },
    ],
  },

  "ssylki-telegram": {
    checklist: {
      afterTitleIncludes: "Opening URLs and typical mistakes",
      title: "Telegram links checklist",
      lead: "Before announcing a channel or chat.",
      items: [
        { id: "user", label: "Username readable and stable" },
        { id: "https", label: "On the site — https://t.me/…" },
        { id: "public", label: "Public channel vs invite separated" },
        { id: "invite", label: "Invite limit/expiry checked" },
        { id: "click", label: "Link clicked on iOS and Android" },
        { id: "label", label: "Creatives clear: channel / chat / bot" },
        { id: "kit", label: "Canonical URL in the brand kit" },
        { id: "preview", label: "Site link preview looks right" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Public links: username and t.me",
        title: "Mini quiz: Telegram links",
        lead: "Two checks.",
        questions: [
          {
            id: "st1",
            question: "A private channel is usually shared via…",
            options: [
              "Only @username always",
              "An invite link from settings",
              "Email only",
              "robots.txt",
            ],
            correct: 1,
            explain: "Invite when there’s no public address.",
          },
          {
            id: "st2",
            question: "A hyperlink on a word in a post…",
            options: [
              "Is impossible",
              "Is done with “link” formatting",
              "Only via a bot",
              "Breaks Open Graph",
            ],
            correct: 1,
            explain: "Standard client formatting.",
          },
        ],
      },
    ],
  },

  "kartinki-vnimanie": {
    checklist: {
      afterTitleIncludes: "Rollout practice",
      title: "Visual checklist",
      lead: "Before shipping hero and preview.",
      items: [
        { id: "sense", label: "Frame linked to the offer in 2 seconds" },
        { id: "contrast", label: "Contrast and one color accent" },
        { id: "air", label: "Air present, no visual noise" },
        { id: "text", label: "Meaning duplicated in HTML, not only on the JPEG" },
        { id: "alt", label: "alt is meaningful" },
        { id: "weight", label: "File compressed, modern format" },
        { id: "mobile", label: "Mobile crop checked" },
        { id: "stock", label: "No banned/empty stock" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why visuals at all",
        title: "Mini quiz: images and attention",
        lead: "Two checks.",
        questions: [
          {
            id: "kv1",
            question: "The whole offer only on a banner image…",
            options: [
              "Best SEO practice",
              "Bad for accessibility and reliability",
              "Required for CTR",
              "Replaces Title",
            ],
            correct: 1,
            explain: "Duplicate meaning as text on the page.",
          },
          {
            id: "kv2",
            question: "Template stock “coffee and laptop”…",
            options: [
              "Always raises conversion",
              "Often skipped as a cliché",
              "Required in B2B",
              "Replaces the product",
            ],
            correct: 1,
            explain: "Your own frame and meaning win.",
          },
        ],
      },
    ],
  },

  "baidu": {
    checklist: {
      afterTitleIncludes: "When Baidu isn’t your channel",
      title: "Baidu checklist",
      lead: "Only if the PRC market is real.",
      items: [
        { id: "need", label: "Business goal in China, not “just in case”" },
        { id: "speed", label: "Site reachable/fast from the target region" },
        { id: "lang", label: "Chinese content, not raw machine translation" },
        { id: "legal", label: "Account via official registration" },
        { id: "wm", label: "Webmaster: site verified, sitemap submitted" },
        { id: "owner", label: "Cabinet owner assigned in the company" },
        { id: "no-gray", label: "No grey numbers or verification bypass" },
        { id: "budget", label: "Support budget planned, not a one-off visit" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "SEO specifics for China",
        title: "Mini quiz: Baidu",
        lead: "Two checks.",
        questions: [
          {
            id: "bd1",
            question: "Baidu for a site only targeting RU…",
            options: [
              "Is required",
              "Usually not needed without a PRC audience",
              "Replaces Yandex",
              "Gives TOP in a week",
            ],
            correct: 1,
            explain: "A channel for the Chinese market.",
          },
          {
            id: "bd2",
            question: "Grey registration schemes…",
            options: [
              "Recommended practice",
              "Block risk; need official access",
              "The only Webmaster method",
              "Needed for sitemaps",
            ],
            correct: 1,
            explain: "Legal path only.",
          },
        ],
      },
    ],
  },

  "cookies": {
    checklist: {
      afterTitleIncludes: "Practice for a webmaster",
      title: "Cookies checklist",
      lead: "Before production and the consent banner.",
      items: [
        { id: "inv", label: "Inventory of all cookies/tags" },
        { id: "flags", label: "Auth: HttpOnly, Secure, SameSite as needed" },
        { id: "https", label: "Site on HTTPS" },
        { id: "policy", label: "Cookie/privacy policy updated" },
        { id: "cmp", label: "Optional tags wait for consent (if required)" },
        { id: "test", label: "Login and cart work after rejecting optional" },
        { id: "third", label: "Extra third parties removed" },
        { id: "ttl", label: "Lifetimes not inflated to “10 years”" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What cookies are for",
        title: "Mini quiz: cookies",
        lead: "Two checks.",
        questions: [
          {
            id: "ck1",
            question: "In a normal setup a cookie holds…",
            options: [
              "The password in plain text",
              "A session ID/token, not the password",
              "Only the page HTML",
              "The robots.txt file",
            ],
            correct: 1,
            explain: "Password on the server; session in the browser.",
          },
          {
            id: "ck2",
            question: "HttpOnly is needed so…",
            options: [
              "Images load faster",
              "JS can’t read the cookie (XSS theft protection)",
              "HTTPS is disabled",
              "SameSite is replaced",
            ],
            correct: 1,
            explain: "Reduces session theft by script.",
          },
        ],
      },
    ],
  },

  "alt-img": {
    checklist: {
      afterTitleIncludes: "Rollout practice",
      title: "Alt/title checklist",
      lead: "Before shipping galleries and banners.",
      items: [
        { id: "info", label: "Informative imgs have meaningful alt" },
        { id: "deco", label: "Decor — empty alt=\"\"" },
        { id: "link", label: "Image link: alt = destination" },
        { id: "spam", label: "No commercial stuffing in every alt" },
        { id: "names", label: "No alt like photo/img_123" },
        { id: "title", label: "img title not used as a keyword dump" },
        { id: "cms", label: "In CMS alt is filled on upload" },
        { id: "crawl", label: "Crawl: no mass empty informative alts" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why img attributes exist",
        title: "Mini quiz: alt and title",
        lead: "Two checks.",
        questions: [
          {
            id: "ai1",
            question: "Alt’s main role is…",
            options: [
              "A TOP-1 guarantee",
              "Text meaning for accessibility and context",
              "A page Title replacement",
              "A required hover title",
            ],
            correct: 1,
            explain: "Alternative text, not ranking magic.",
          },
          {
            id: "ai2",
            question: "Img title for SEO is…",
            options: [
              "Required and stronger than alt",
              "Weak/optional; not a keyword cult",
              "A figcaption replacement",
              "Needed for HTTPS",
            ],
            correct: 1,
            explain: "Focus on alt and page content.",
          },
        ],
      },
    ],
  },

  "uznat-cms": {
    checklist: {
      afterTitleIncludes: "Ethics and boundaries",
      title: "CMS detection checklist",
      lead: "Public signals only.",
      items: [
        { id: "src", label: "View Source: generator and static paths" },
        { id: "net", label: "Network: typical asset URLs" },
        { id: "robots", label: "robots.txt / sitemap for system paths" },
        { id: "cookie", label: "Cookie names as a hint" },
        { id: "tools", label: "1–2 detectors + eye check" },
        { id: "hyp", label: "CMS hypothesis with confidence level" },
        { id: "no-scan", label: "No vulnerability scanners or brute force" },
        { id: "report", label: "In the report: “looks like…, confirm with access”" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Manual HTML review",
        title: "Mini quiz: CMS",
        lead: "Two checks.",
        questions: [
          {
            id: "uc1",
            question: "No meta generator…",
            options: [
              "Means the site is definitely not on a CMS",
              "Normal: it’s often disabled",
              "The site can’t be indexed",
              "Only Wix is possible",
            ],
            correct: 1,
            explain: "Look for other markers.",
          },
          {
            id: "uc2",
            question: "A legal reason to learn the CMS…",
            options: [
              "Guess the admin password",
              "Estimate the stack and work complexity",
              "Scan CVEs in bulk",
              "Bypass robots",
            ],
            correct: 1,
            explain: "Recon for analysis, not attack.",
          },
        ],
      },
    ],
  },

  "rozygrysh-instagram": {
    checklist: {
      afterTitleIncludes: "What not to do",
      title: "Fair giveaway checklist",
      lead: "Before, during, and on results day.",
      items: [
        { id: "rules", label: "Rules and random method announced upfront" },
        { id: "list", label: "Participant list numbered after cleanup" },
        { id: "n", label: "N locked publicly before generation" },
        { id: "rec", label: "Recording/screenshot of the procedure exists" },
        { id: "post", label: "Final post with number and winner" },
        { id: "backup", label: "Backup winner per rules" },
        { id: "no-pass", label: "Tools don’t ask for the account password" },
        { id: "no-cheat", label: "No spam and no rule changes after start" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why fair random matters",
        title: "Mini quiz: giveaway",
        lead: "Two checks.",
        questions: [
          {
            id: "ri1",
            question: "Fair RNG for a participant…",
            options: [
              "Gives a secret winning system",
              "Gives no “win scheme”; builds trust in the result",
              "Replaces platform rules",
              "Requires an Instagram password",
            ],
            correct: 1,
            explain: "Organizer transparency, not cheats.",
          },
          {
            id: "ri2",
            question: "Changing terms on results day…",
            options: [
              "Normal practice",
              "Kills trust and looks like a fix",
              "Required for random.org",
              "Needed for SEO",
            ],
            correct: 1,
            explain: "Lock rules before start.",
          },
        ],
      },
    ],
  },

  "google-search-console": {
    checklist: {
      afterTitleIncludes: "Practice and limits",
      title: "Search Console checklist",
      lead: "After adding the site.",
      items: [
        { id: "prop", label: "Property verified (prefer domain via DNS)" },
        { id: "mirror", label: "Mirrors glued with 301 to the canon" },
        { id: "map", label: "Sitemap added and error-free" },
        { id: "team", label: "Team permissions granted" },
        { id: "cover", label: "Coverage-error review playbook" },
        { id: "query", label: "Weekly look at queries/pages" },
        { id: "inspect", label: "URL Inspection after key releases" },
        { id: "yandex", label: "Yandex Webmaster set up in parallel" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why Search Console matters",
        title: "Mini quiz: GSC",
        lead: "Two checks.",
        questions: [
          {
            id: "gsc1",
            question: "Google Webmaster today is…",
            options: [
              "A separate paid product",
              "The former name of Search Console",
              "YouTube-only",
              "A Metrika replacement",
            ],
            correct: 1,
            explain: "Same service, new name.",
          },
          {
            id: "gsc2",
            question: "A sitemap in GSC…",
            options: [
              "Guarantees TOP-1",
              "Helps crawling; doesn’t replace URL quality",
              "Is never needed",
              "Replaces 301s",
            ],
            correct: 1,
            explain: "A hint for crawlers, not ranking magic.",
          },
        ],
      },
    ],
  },

  "avtorskie-prava-instagram": {
    checklist: {
      afterTitleIncludes: "Liability and article limits",
      title: "Content-rights checklist",
      lead: "Before a Reels and posts series.",
      items: [
        { id: "music", label: "Music from the official library or with a license" },
        { id: "photo", label: "Photos/video yours or licensed" },
        { id: "ugc", label: "UGC has the author’s permission" },
        { id: "store", label: "Proof of rights stored" },
        { id: "alt", label: "Backup legal track ready" },
        { id: "no-bypass", label: "No rightsholder-block bypass schemes" },
        { id: "appeal", label: "Official appeal path understood" },
        { id: "team", label: "Team playbook documented" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "How violations get noticed",
        title: "Mini quiz: copyright",
        lead: "Two checks.",
        questions: [
          {
            id: "ap1",
            question: "Bypassing a block on someone else’s track…",
            options: [
              "Recommended practice",
              "Risky; use legal sound or a license",
              "Required for Reels",
              "Replaces stock",
            ],
            correct: 1,
            explain: "Don’t bypass rights — change the material.",
          },
          {
            id: "ap2",
            question: "A photo “from Google Images” without a license…",
            options: [
              "Always free to use",
              "Rights-infringement risk",
              "Only needed for Stories",
              "Replaces your own frame in ads",
            ],
            correct: 1,
            explain: "Need a license or your own shot.",
          },
        ],
      },
    ],
  },

  "golosovoy-poisk": {
    checklist: {
      afterTitleIncludes: "A joined-up approach and timelines",
      title: "Voice-search checklist",
      lead: "Before shipping FAQ and local landings.",
      items: [
        { id: "speed", label: "Mobile speed of key templates is fine" },
        { id: "https", label: "HTTPS sitewide" },
        { id: "answer", label: "Short direct answer at the top of strong pages" },
        { id: "faq", label: "FAQ with natural audience questions" },
        { id: "cluster", label: "Conversational long-tail grouped into clusters" },
        { id: "nodupe", label: "No thin duplicates per spoken variant" },
        { id: "local", label: "Map profiles and NAP updated (if local business)" },
        { id: "gsc", label: "Queries and CTR watched in Search Console / Webmaster" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What changes in voice queries",
        title: "Mini quiz: voice search",
        lead: "Two checks.",
        questions: [
          {
            id: "gp1",
            question: "Separate “voice SEO” is…",
            options: [
              "The only way to hit TOP in a week",
              "Stronger classic SEO: answers, mobile, long-tail",
              "A replacement for semantics and tech",
              "Mandatory Schema of every type",
            ],
            correct: 1,
            explain: "Same base; strengthen answer format and scenarios.",
          },
          {
            id: "gp2",
            question: "Page prep and hitting TOP…",
            options: [
              "Are the same: a week = TOP",
              "Prep — weeks; TOP for the core usually 2–6 months after work starts",
              "TOP is guaranteed by FAQ",
              "Only Trends is needed",
            ],
            correct: 1,
            explain: "Don’t confuse prep with ranking buildup.",
          },
        ],
      },
    ],
  },

  "statistika-google-prodazhi": {
    checklist: {
      afterTitleIncludes: "From numbers to sales: a working loop",
      title: "Google stats → sales checklist",
      lead: "Before buying ads and the content plan.",
      items: [
        { id: "planner", label: "Key and negative list from Keyword Planner" },
        { id: "wordstat", label: "Cross-check with Wordstat for Yandex (if RU)" },
        { id: "trends", label: "Season and regions checked in Trends" },
        { id: "intent", label: "Cluster intent split (info / commercial)" },
        { id: "landing", label: "Landings assigned to clusters" },
        { id: "goals", label: "Goals/events in Analytics configured" },
        { id: "utm", label: "Ad UTMs consistent" },
        { id: "review", label: "Review in 1–2 weeks scheduled" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why marketing needs search stats",
        title: "Mini quiz: Google stats",
        lead: "Two checks.",
        questions: [
          {
            id: "sg1",
            question: "Google Trends shows…",
            options: [
              "Exact impression counts like Planner",
              "Relative interest (index), not absolute frequency",
              "Guaranteed CPC",
              "TOP-10 rankings",
            ],
            correct: 1,
            explain: "Index to 100 — not “thousands of queries”.",
          },
          {
            id: "sg2",
            question: "Planner replaces Wordstat…",
            options: [
              "Yes, always",
              "No: Yandex needs its own track",
              "Only for Instagram",
              "Only for Baidu",
            ],
            correct: 1,
            explain: "Different search engines — different demand sources.",
          },
        ],
      },
    ],
  },

  "toshnota-teksta": {
    checklist: {
      afterTitleIncludes: "How to edit without a percentage cult",
      title: "Nausea and density checklist",
      lead: "Before handing in SEO copy against a brief.",
      items: [
        { id: "tool", label: "Checked in the agreed tool (Advego/text.ru/…)" },
        { id: "classic", label: "Classic nausea inside the brief corridor" },
        { id: "academic", label: "Academic nausea without extremes" },
        { id: "density", label: "Main-key density is moderate" },
        { id: "title", label: "Title/H1 without a query dump" },
        { id: "terms", label: "Required niche terms not scrubbed to zero" },
        { id: "water", label: "No water padding for the percentage" },
        { id: "read", label: "Text reads aloud fine" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Classic and academic nausea",
        title: "Mini quiz: text nausea",
        lead: "Two checks.",
        questions: [
          {
            id: "tt1",
            question: "Classic nausea in the Advego scheme ties to…",
            options: [
              "Site speed",
              "The most frequent word (√ of repeats)",
              "Image count",
              "HTTPS",
            ],
            correct: 1,
            explain: "The frequency champion pulls classic up.",
          },
          {
            id: "tt2",
            question: "A nausea % from a tool is…",
            options: [
              "A direct Yandex ban formula",
              "A guide for the brief and editing — not a ranking law",
              "A TOP-1 guarantee",
              "A uniqueness replacement",
            ],
            correct: 1,
            explain: "Search looks wider; the tool helps the author.",
          },
        ],
      },
    ],
  },

  "opisanie-tovara": {
    checklist: {
      afterTitleIncludes: "Strong-card checklist",
      title: "Product description checklist",
      lead: "Before publishing an SKU.",
      items: [
        { id: "lead", label: "Lead answers “why me” without fluff" },
        { id: "props", label: "Features linked to benefits" },
        { id: "specs", label: "Specs complete (size, composition, kit)" },
        { id: "whyus", label: "Argument for buying specifically from you" },
        { id: "photo", label: "Photo and copy aligned" },
        { id: "mobile", label: "List readable on a phone" },
        { id: "keys", label: "Keys natural, no dump" },
        { id: "chat", label: "Frequent chat questions closed by copy" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why the card needs strong copy",
        title: "Mini quiz: product description",
        lead: "Two checks.",
        questions: [
          {
            id: "ot1",
            question: "At a high price the buyer most often…",
            options: [
              "Looks only at the photo and pays immediately",
              "Looks in the text for price arguments and specs",
              "Ignores characteristics",
              "Needs only the site Title",
            ],
            correct: 1,
            explain: "Copy closes doubts after the visual.",
          },
          {
            id: "ot2",
            question: "Copy-paste from the manufacturer site…",
            options: [
              "Is always best",
              "Risks identical cards; better uniqueize for your audience",
              "Is required for SEO",
              "Replaces photos",
            ],
            correct: 1,
            explain: "Stand out with service and clarity for your audience.",
          },
        ],
      },
    ],
  },

  "metrika-tseli": {
    checklist: {
      afterTitleIncludes: "Verification and common failures",
      title: "Metrica goals checklist",
      lead: "Before launching ads.",
      items: [
        { id: "counter", label: "Counter on all templates" },
        { id: "biz", label: "Business goal stated (lead/purchase/…)" },
        { id: "url", label: "URL goals match live addresses" },
        { id: "event", label: "reachGoal: ym(ID,'reachGoal','NAME') matches the cabinet" },
        { id: "funnel", label: "Multi-step funnel without extra micro-steps" },
        { id: "test", label: "Test visit passed, goal counted" },
        { id: "filter", label: "Clear whether own visits are counted on the test" },
        { id: "table", label: "Goals table and owners exist" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What goal types exist",
        title: "Mini quiz: Metrica goals",
        lead: "Two checks.",
        questions: [
          {
            id: "mt1",
            question: "For a “Buy” click without a URL change, better…",
            options: [
              "Only a pageview-count goal",
              "A JavaScript event (reachGoal)",
              "Only Webmaster",
              "Only a sitemap",
            ],
            correct: 1,
            explain: "An event catches the on-page action.",
          },
          {
            id: "mt2",
            question: "The current goal call is…",
            options: [
              "Only yaCounter without ym",
              "ym(id, 'reachGoal', 'name')",
              "Only Google Ads",
              "Only robots.txt",
            ],
            correct: 1,
            explain: "The modern official call goes through ym.",
          },
        ],
      },
    ],
  },

  "google-analytics-tseli": {
    checklist: {
      afterTitleIncludes: "Funnels and report checks",
      title: "GA4 conversions checklist",
      lead: "Before scaling Ads.",
      items: [
        { id: "tag", label: "GA4 tag on all templates" },
        { id: "dict", label: "Event dictionary agreed with the team" },
        { id: "thanks", label: "Thank-you / purchase / lead tagged" },
        { id: "key", label: "Key events marked in Admin" },
        { id: "debug", label: "DebugView clean on the scenario" },
        { id: "pdn", label: "No unnecessary personal data in parameters" },
        { id: "funnel", label: "Funnel in Explorations set up" },
        { id: "docs", label: "Event docs saved" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "From Universal goals to GA4 events",
        title: "Mini quiz: GA4 conversions",
        lead: "Two checks.",
        questions: [
          {
            id: "ga1",
            question: "In GA4 instead of the UA goals builder…",
            options: [
              "Only Yandex.XML",
              "Events marked as key / conversions",
              "Only a sitemap",
              "Only robots.txt",
            ],
            correct: 1,
            explain: "Event model + key events.",
          },
          {
            id: "ga2",
            question: "A thank-you destination goal in GA4…",
            options: [
              "Is impossible",
              "Via page_view success or a purchase/lead event",
              "Only via Universal",
              "Only via Screaming Frog",
            ],
            correct: 1,
            explain: "Success URL or a reliable backend/GTM event.",
          },
        ],
      },
    ],
  },

  "screaming-frog": {
    checklist: {
      afterTitleIncludes: "How to fold the crawl into the workflow",
      title: "Screaming Frog run checklist",
      lead: "After a release or a scheduled audit.",
      items: [
        { id: "host", label: "Start URL is canonical https" },
        { id: "speed", label: "Crawl speed is safe for hosting" },
        { id: "codes", label: "4xx/5xx and No Response reviewed" },
        { id: "meta", label: "Missing and duplicate title/H1 exported" },
        { id: "img", label: "Heavy images and Missing Alt flagged" },
        { id: "url", label: "Duplicate and problem URLs in tickets" },
        { id: "export", label: "CSV/Excel attached to tasks" },
        { id: "recheck", label: "Recrawl after fixes scheduled" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why a crawler and where to start",
        title: "Mini quiz: Screaming Frog",
        lead: "Two checks.",
        questions: [
          {
            id: "sf1",
            question: "Screaming Frog primarily…",
            options: [
              "Guarantees TOP-1",
              "Collects a technical crawl of URLs and errors",
              "Writes product-card copy",
              "Replaces the semantic core",
            ],
            correct: 1,
            explain: "A tech crawler — not a “TOP button”.",
          },
          {
            id: "sf2",
            question: "Lots of No Response during a crawl…",
            options: [
              "Fine to ignore",
              "Lower speed and recheck",
              "Means the site is in TOP",
              "Only Wordstat is needed",
            ],
            correct: 1,
            explain: "Often overload or network — dial speed down.",
          },
        ],
      },
    ],
  },

  "podderzhka-yandeks": {
    checklist: {
      afterTitleIncludes: "What support won’t replace",
      title: "Yandex support ticket checklist",
      lead: "Before sending the ticket.",
      items: [
        { id: "self", label: "Self-check: codes, robots, sitemap, cabinet reports" },
        { id: "help", label: "Service Help read for the symptom" },
        { id: "product", label: "Right product chosen (Mail / Webmaster / …)" },
        { id: "facts", label: "URL, start date, reproduction steps ready" },
        { id: "shots", label: "Error/report screenshots without passwords" },
        { id: "tried", label: "What you already tried is listed" },
        { id: "one", label: "One ticket — one problem" },
        { id: "no-top", label: "No expectation of “put us in TOP by hand”" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "When to write vs fix it yourself",
        title: "Mini quiz: Yandex support",
        lead: "Two checks.",
        questions: [
          {
            id: "py1",
            question: "Site not in TOP with no technical signals…",
            options: [
              "Call immediately and demand rankings",
              "Audit and content first; ticket if a tool is broken",
              "Only Platon is needed",
              "Block the site in robots",
            ],
            correct: 1,
            explain: "Support doesn’t rank manually.",
          },
          {
            id: "py2",
            question: "A phone number from a 2020 article…",
            options: [
              "Is always current",
              "May be stale; take the contact from current Help",
              "Replaces Webmaster",
              "Guarantees TOP",
            ],
            correct: 1,
            explain: "Channels change — only official Help.",
          },
        ],
      },
    ],
  },

                    "vnutrennyaya-perelinkovka": {
    checklist: {
      afterTitleIncludes: "A practical work order",
      title: "Internal linking checklist",
      lead: "After structure and the core.",
      items: [
        { id: "prio", label: "Priority URLs from the core locked" },
        { id: "crawl", label: "Crawl of internal and broken links done" },
        { id: "menu", label: "Menu and breadcrumbs lead to the right sections" },
        { id: "context", label: "Contextual links to money pages added" },
        { id: "anchors", label: "Anchors varied, no exact-key spam" },
        { id: "orphans", label: "Orphans with 0–1 inbound strengthened or closed" },
        { id: "related", label: "Related/auto blocks don’t lead past intent" },
        { id: "time", label: "Linking doesn’t promise TOP in a week" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Anchor and bare links",
        title: "Mini quiz: linking",
        lead: "Two checks.",
        questions: [
          {
            id: "pl1",
            question: "Internal linking primarily…",
            options: [
              "Guarantees TOP-1",
              "Helps navigation and crawl, strengthens important URLs",
              "Replaces semantics",
              "Requires blocking all outbound links",
            ],
            correct: 1,
            explain: "Connections and clarity — not a magic ranking button.",
          },
          {
            id: "pl2",
            question: "The same commercial anchor on every link…",
            options: [
              "Is best practice",
              "Risks over-optimization; a natural mix is needed",
              "Is required for stores",
              "Replaces the menu",
            ],
            correct: 1,
            explain: "Anchor variety is safer than spam.",
          },
        ],
      },
    ],
  },

  "nakrutka-pf": {
    checklist: {
      afterTitleIncludes: "If a contractor offers",
      title: "Checklist instead of faking engagement",
      lead: "Before agreeing to “behavior”.",
      items: [
        { id: "no-buy", label: "Fake engagement not in the plan or contract" },
        { id: "ux", label: "Speed, mobile UX, and offer strengthened" },
        { id: "intent", label: "Snippet and page match intent" },
        { id: "goals", label: "Analytics goals set and reviewed" },
        { id: "spike", label: "Abnormal traffic spikes investigated" },
        { id: "support", label: "On attack — facts to search support" },
        { id: "vendor", label: "Vendor doesn’t promise TOP via fake engagement" },
        { id: "time", label: "Timelines: prep ≠ TOP 2–6 months" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why the scheme breaks",
        title: "Mini quiz: fake behavioral signals",
        lead: "Two checks.",
        questions: [
          {
            id: "pf1",
            question: "Faking behavioral signals is…",
            options: [
              "A white-hat TOP accelerator",
              "Manipulation with high filter risk",
              "Required for young sites",
              "A content replacement",
            ],
            correct: 1,
            explain: "Breaks search rules; sanctions are common.",
          },
          {
            id: "pf2",
            question: "Instead of faking, better…",
            options: [
              "Order a cheaper “manual” scheme",
              "Improve UX, relevance, and conversion",
              "Ignore analytics",
              "Promise the client TOP in 7 days",
            ],
            correct: 1,
            explain: "Real behavior is built by site quality.",
          },
        ],
      },
    ],
  },

  "dlina-seo-teksta": {
    checklist: {
      afterTitleIncludes: "Volume in strategy, not a cult",
      title: "SEO text length checklist",
      lead: "Before the writer brief.",
      items: [
        { id: "intent", label: "Intent and page type locked" },
        { id: "serp", label: "TOP-10 pulled in incognito" },
        { id: "measure", label: "Competitor volume measured one way" },
        { id: "median", label: "Guide: mean/median, not one giant" },
        { id: "tz", label: "Brief: min/target/max without mandatory fluff" },
        { id: "structure", label: "H2/lists structure beats “pad characters”" },
        { id: "empty", label: "Empty URLs not proliferated" },
        { id: "time", label: "Volume ≠ TOP guarantee in a month" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "How to take a guide from the TOP-10",
        title: "Mini quiz: text length",
        lead: "Two checks.",
        questions: [
          {
            id: "len1",
            question: "Optimal SEO text length…",
            options: [
              "Always 2,000 characters",
              "Depends on intent and a relevant TOP guide",
              "More is always better with no exceptions",
              "Is set only by Advego",
            ],
            correct: 1,
            explain: "No single norm — look at the job and competitors.",
          },
          {
            id: "len2",
            question: "A long-read makes sense when…",
            options: [
              "You need to beat character counts urgently",
              "There’s usefulness, structure, and topic depth",
              "A product card feels short",
              "You want to replace semantics",
            ],
            correct: 1,
            explain: "Length without substance doesn’t help.",
          },
        ],
      },
    ],
  },

  "wordpress-bezopasnost": {
    checklist: {
      afterTitleIncludes: "What not to treat as a silver bullet",
      title: "WordPress security checklist",
      lead: "On prod and after an audit.",
      items: [
        { id: "upd", label: "Core, themes, and plugins updated" },
        { id: "pass", label: "Strong passwords + 2FA for admins" },
        { id: "plugins", label: "Extra plugins/themes removed" },
        { id: "https", label: "HTTPS works site-wide" },
        { id: "backup", label: "Backups exist and restore verified" },
        { id: "edit", label: "File edit from admin disabled on prod" },
        { id: "src", label: "Themes/plugins only from trusted sources" },
        { id: "incident", label: "Breach response plan is clear" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Updates, plugins, and themes",
        title: "Mini quiz: WP security",
        lead: "Two checks.",
        questions: [
          {
            id: "wp1",
            question: "The main risk for a typical WP site is…",
            options: [
              "The mere presence of a CMS",
              "Outdated plugins, weak passwords, and pirated themes",
              "Having SSL",
              "Rare backups as the only problem",
            ],
            correct: 1,
            explain: "Attack surface is extensions and access.",
          },
          {
            id: "wp2",
            question: "A security plugin…",
            options: [
              "Replaces all updates",
              "Adds a layer, but doesn’t replace patches and passwords",
              "Guarantees TOP",
              "Is needed only for stores",
            ],
            correct: 1,
            explain: "A defense layer, not the only measure.",
          },
        ],
      },
    ],
  },

  "wordpress-seo-plaginy": {
    checklist: {
      afterTitleIncludes: "Multilingual, spam, and a sane minimum",
      title: "WordPress SEO plugins checklist",
      lead: "Before installing on prod.",
      items: [
        { id: "one", label: "One SEO suite chosen (not two)" },
        { id: "sitemap", label: "Sitemap and meta templates configured" },
        { id: "redir", label: "Redirects/404 covered by a tool or the suite" },
        { id: "speed", label: "No more than one cache/minify stack" },
        { id: "img", label: "Image compression without breaking LCP" },
        { id: "upd", label: "Plugins from trusted sources, kept updated" },
        { id: "panels", label: "Webmaster and Search Console connected separately" },
        { id: "time", label: "Plugins don’t promise TOP in a week" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "SEO suites: meta, sitemap, markup",
        title: "Mini quiz: WP SEO plugins",
        lead: "Two checks.",
        questions: [
          {
            id: "wpp1",
            question: "Yoast and Rank Math together…",
            options: [
              "Give double TOP",
              "Usually hurt: conflicts and duplicate settings",
              "Are required for stores",
              "Replace semantics",
            ],
            correct: 1,
            explain: "One suite per site.",
          },
          {
            id: "wpp2",
            question: "Green indicators in an SEO plugin…",
            options: [
              "Guarantee ranks",
              "Heuristics; page meaning and tech matter more",
              "Replace Webmaster",
              "Are needed hourly",
            ],
            correct: 1,
            explain: "Tips ≠ the ranking algorithm.",
          },
        ],
      },
    ],
  },

  "seo-kopirayting": {
    checklist: {
      afterTitleIncludes: "Checklist and common mistakes",
      title: "SEO copywriting checklist",
      lead: "Before handing off the text.",
      items: [
        { id: "intent", label: "Intent and cluster locked in the brief" },
        { id: "h1", label: "One H1, logical H2/H3" },
        { id: "lsi", label: "LSI/topic questions covered without stuffing" },
        { id: "meta", label: "Title/description aligned with the page" },
        { id: "spam", label: "Nausea/fluff checked, no bold keys" },
        { id: "uniq", label: "Uniqueness and facts verified" },
        { id: "cta", label: "CTA in place (if the page is commercial)" },
        { id: "time", label: "Text doesn’t promise TOP in a week" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "LSI and meaning instead of stuffing",
        title: "Mini quiz: SEO copywriting",
        lead: "Two checks.",
        questions: [
          {
            id: "sc1",
            question: "Bolding keywords is…",
            options: [
              "Required for SEO",
              "An outdated trick — better not",
              "A semantics replacement",
              "A TOP guarantee",
            ],
            correct: 1,
            explain: "Write for people, without “bot markers”.",
          },
          {
            id: "sc2",
            question: "LSI in copywriting practice is…",
            options: [
              "Only exact keyword matches",
              "Meaningful phrasing around the topic and intent",
              "Meta keywords",
              "A content marketplace",
            ],
            correct: 1,
            explain: "Cover meaning, not density.",
          },
        ],
      },
    ],
  },

  "veb-analitik": {
    checklist: {
      afterTitleIncludes: "Pros and costs of the profession",
      title: "Web analyst starter checklist",
      lead: "For beginners and hiring.",
      items: [
        { id: "tools", label: "Metrica/Analytics: goals and segments are clear" },
        { id: "funnel", label: "Funnel and site KPIs described" },
        { id: "hyp", label: "Habit: data → hypothesis → recommendation" },
        { id: "ab", label: "A/B understanding and how to measure effect" },
        { id: "report", label: "Report readable for non-analysts" },
        { id: "scope", label: "Role borders agreed with the client" },
        { id: "cases", label: "2–3 mini-cases in the portfolio" },
        { id: "time", label: "Report not confused with instant TOP" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Who a web analyst is",
        title: "Mini quiz: web analyst",
        lead: "Two checks.",
        questions: [
          {
            id: "wa1",
            question: "An analyst’s main value is…",
            options: [
              "Exporting a raw report",
              "Data-driven decisions: hypotheses and priorities",
              "Only setting up Yandex Direct",
              "Faking behavioral signals",
            ],
            correct: 1,
            explain: "Conclusions and actions, not a file for its own sake.",
          },
          {
            id: "wa2",
            question: "Web analyst and SEO…",
            options: [
              "Are the same role",
              "Overlap, but the focus differs",
              "Mutually exclude each other",
              "Are needed only for stores",
            ],
            correct: 1,
            explain: "Adjacent skills, different ownership zones.",
          },
        ],
      },
    ],
  },

  "chrome-rasshireniya-seo": {
    checklist: {
      afterTitleIncludes: "Semantics, passwords, and a sane minimum",
      title: "Chrome SEO extensions checklist",
      lead: "Before installing on a work profile.",
      items: [
        { id: "profile", label: "Separate Chrome profile for work" },
        { id: "store", label: "Official store / trusted source only" },
        { id: "perms", label: "Extension permissions read" },
        { id: "seo", label: "A page SEO-snapshot tool is in the stack" },
        { id: "utm", label: "UTM builder in the stack" },
        { id: "sem", label: "Semantics: Wordstat + sheet/assistant" },
        { id: "pass", label: "Password manager for cabinets" },
        { id: "trim", label: "Extra add-ons disabled/removed" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "How to build an extension stack",
        title: "Mini quiz: Chrome for SEO",
        lead: "Two checks.",
        questions: [
          {
            id: "ch1",
            question: "Chrome extensions…",
            options: [
              "Guarantee TOP-10",
              "Speed up audits; ranks depend on the site and work",
              "Replace Webmaster",
              "Require all 50 of them",
            ],
            correct: 1,
            explain: "A tool ≠ ranking.",
          },
          {
            id: "ch2",
            question: "Before installing an add-on it’s important to…",
            options: [
              "Ignore permissions",
              "Check the store, updates, and permissions",
              "Install only from torrents",
              "Enable everything at once",
            ],
            correct: 1,
            explain: "Safety and freshness beat “popularity in a 2019 article”.",
          },
        ],
      },
    ],
  },

  "otzyvy-dlya-prodazh": {
    checklist: {
      afterTitleIncludes: "How to build a review workflow",
      title: "Review workflow checklist",
      lead: "For local business and services.",
      items: [
        { id: "maps", label: "Map profiles verified (per branch)" },
        { id: "nap", label: "NAP matches the site" },
        { id: "ask", label: "A post-success review-ask script exists" },
        { id: "watch", label: "Someone monitors new reviews" },
        { id: "reply", label: "Negative-reply templates + escalation" },
        { id: "site", label: "Easy to leave a review on the site" },
        { id: "no-fake", label: "No buying/faking reviews" },
        { id: "learn", label: "Complaints feed product/service fixes" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "How many reviews are “enough”",
        title: "Mini quiz: reviews",
        lead: "Two checks.",
        questions: [
          {
            id: "ot1",
            question: "The “~40 reviews” threshold from research is…",
            options: [
              "A maps TOP guarantee",
              "A trust guide; check niche and competitors",
              "Required for any niche in a week",
              "A replacement for site SEO",
            ],
            correct: 1,
            explain: "An averaged guide, not a ranking law.",
          },
          {
            id: "ot2",
            question: "Buying reviews is…",
            options: [
              "Normal SEO tactics",
              "Against the rules and risky for reputation",
              "Needed only for competitors",
              "Required for the local pack",
            ],
            correct: 1,
            explain: "Only real clients and replies.",
          },
        ],
      },
    ],
  },

  "brendovyy-trafik": {
    checklist: {
      afterTitleIncludes: "How to measure branded traffic",
      title: "Branded traffic checklist",
      lead: "Once a month.",
      items: [
        { id: "list", label: "Brand spelling variants list collected" },
        { id: "metrika", label: "Metrica segment/filter set" },
        { id: "gsc", label: "Brand filter in GSC / Webmaster" },
        { id: "ads", label: "Brand defense in paid search checked" },
        { id: "maps", label: "Map profiles with consistent NAP" },
        { id: "name", label: "One naming across all channels" },
        { id: "conv", label: "Watch brand conversion, not only visits" },
        { id: "trend", label: "Brand share compared month to month" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What branded traffic is",
        title: "Mini quiz: branded traffic",
        lead: "Two checks.",
        questions: [
          {
            id: "br1",
            question: "Branded traffic is…",
            options: [
              "Any traffic from ads",
              "Visits from queries with the brand/product name",
              "Only bots on a key",
              "A synonym for TOP-10",
            ],
            correct: 1,
            explain: "Demand by name, not any click.",
          },
          {
            id: "br2",
            question: "Brand growth alone…",
            options: [
              "Guarantees TOP across all semantics in a month",
              "Strengthens resilience and conversion, but doesn’t replace SEO work",
              "Is needed only for offline stores",
              "Is measured only via SimilarWeb",
            ],
            correct: 1,
            explain: "A demand layer next to classic SEO.",
          },
        ],
      },
    ],
  },

  "diplinking": {
    checklist: {
      afterTitleIncludes: "Mistakes and a sane minimum",
      title: "Deeplink checklist before scale",
      lead: "For app ads and messaging.",
      items: [
        { id: "screen", label: "Target screen exists and matches the offer" },
        { id: "deferred", label: "Deferred deeplink after install verified" },
        { id: "fallback", label: "Web fallback / backup URL exists" },
        { id: "utm", label: "Campaign tags reach analytics" },
        { id: "devices", label: "Tested on iOS and Android (installed / not)" },
        { id: "events", label: "Events: open → screen → conversion" },
        { id: "ab", label: "Small A/B: with deeplink vs without" },
        { id: "stale", label: "Stale promo/product id handling" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What deeplinking is",
        title: "Mini quiz: deeplinking",
        lead: "Two checks.",
        questions: [
          {
            id: "dl1",
            question: "A deferred deeplink is needed when…",
            options: [
              "The app is already installed",
              "There’s no app: install → then the target screen",
              "Only for site SEO",
              "Only for desktop banners",
            ],
            correct: 1,
            explain: "Deferred keeps the promised screen after install.",
          },
          {
            id: "dl2",
            question: "A deeplink alone…",
            options: [
              "Guarantees a purchase",
              "Shortens the path to the screen; conversion depends on offer and UX",
              "Replaces the creative",
              "Is needed only for offline stores",
            ],
            correct: 1,
            explain: "Friction down, but offer and UX decide.",
          },
        ],
      },
    ],
  },

  "seo-oshibki": {
    checklist: {
      afterTitleIncludes: "How to control without waiting for miracles",
      title: "Common SEO mistakes checklist",
      lead: "After a release or once a month.",
      items: [
        { id: "status", label: "Status codes on priority URLs are healthy" },
        { id: "https", label: "HTTPS without mixed content on key templates" },
        { id: "title", label: "Unique title/description on money pages" },
        { id: "h1", label: "One clear H1, heading hierarchy logical" },
        { id: "links", label: "No mass 404s in menu/footer/breadcrumbs" },
        { id: "og", label: "OG/markup on key landings checked" },
        { id: "cabinets", label: "Webmaster/GSC without critical error spikes" },
        { id: "backlog", label: "Fix backlog by priority, not a “green score”" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Title, description, and outdated keywords",
        title: "Mini quiz: SEO mistakes",
        lead: "Two checks.",
        questions: [
          {
            id: "so1",
            question: "Meta keywords today…",
            options: [
              "Are the main TOP factor",
              "Barely matter; title, description, and content matter more",
              "Are required for Yandex",
              "Replace H1",
            ],
            correct: 1,
            explain: "Don’t build strategy on keywords.",
          },
          {
            id: "so2",
            question: "Fixing tech…",
            options: [
              "Guarantees TOP in a week",
              "Is part of prep; core ranks build planned over months",
              "Is needed only for blogs",
              "Replaces semantics",
            ],
            correct: 1,
            explain: "Cleanup ≠ instant TOP.",
          },
        ],
      },
    ],
  },

  "kannibalizatsiya-zaprosov": {
    checklist: {
      afterTitleIncludes: "How to resolve the conflict",
      title: "Cannibalization checklist",
      lead: "Per query cluster.",
      items: [
        { id: "map", label: "URL × main key table collected" },
        { id: "gsc", label: "GSC/Webmaster shows several URLs for a phrase" },
        { id: "winner", label: "Cluster canon chosen" },
        { id: "fix", label: "Extra URLs: 301 / canonical / intent change" },
        { id: "titles", label: "Titles unique and not competing" },
        { id: "links", label: "Internal linking strengthened to the canon" },
        { id: "sitemap", label: "Sitemap without merged-away extras" },
        { id: "recheck", label: "After recrawl impressions converge on the canon" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What query cannibalization is",
        title: "Mini quiz: cannibalization",
        lead: "Two checks.",
        questions: [
          {
            id: "kn1",
            question: "Cannibalization is…",
            options: [
              "Buying links",
              "Several of your URLs fighting for one query",
              "Only external copy-paste",
              "A synonym for HTTPS",
            ],
            correct: 1,
            explain: "Internal document competition.",
          },
          {
            id: "kn2",
            question: "Best first step in a conflict…",
            options: [
              "Fake behavioral signals",
              "Pick a cluster canon and merge/separate the rest",
              "Delete Webmaster",
              "Merge everything to home without review",
            ],
            correct: 1,
            explain: "One strong URL per intent.",
          },
        ],
      },
    ],
  },

  "vnutrennie-faktory": {
    checklist: {
      afterTitleIncludes: "Work order and timeline expectations",
      title: "Internal factors checklist",
      lead: "On-page base before the external track.",
      items: [
        { id: "index", label: "Indexing and status codes on money URLs healthy" },
        { id: "https", label: "HTTPS without mixed content" },
        { id: "meta", label: "Unique title/H1 on landings" },
        { id: "struct", label: "Structure and clean URLs aligned with semantics" },
        { id: "links", label: "Internal linking strengthens cluster canons" },
        { id: "speed", label: "Speed/CWV acceptable on key templates" },
        { id: "mobile", label: "Mobile: forms and taps without traps" },
        { id: "global", label: "robots/sitemap/canonical without global holes" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Map: internal vs external",
        title: "Mini quiz: internal factors",
        lead: "Two checks.",
        questions: [
          {
            id: "vf1",
            question: "Internal factors are primarily…",
            options: [
              "Only buying links",
              "What you fix on your site: content, tech, structure",
              "Only social signals",
              "A synonym for fake engagement",
            ],
            correct: 1,
            explain: "On-page under your control.",
          },
          {
            id: "vf2",
            question: "After on-page fixes, TOP for the core…",
            options: [
              "Is guaranteed next week",
              "Builds planned over months after work starts; fixes are part of prep",
              "Doesn’t need content",
              "Replaces semantics",
            ],
            correct: 1,
            explain: "Prep ≠ instant TOP.",
          },
        ],
      },
    ],
  },

  "tselevaya-auditoriya": {
    checklist: {
      afterTitleIncludes: "How to lock it in and not lose it",
      title: "Target audience checklist",
      lead: "Before launching the core and ads.",
      items: [
        { id: "demo", label: "Demographics and geo locked as a frame" },
        { id: "job", label: "Jobs / JTBD described per segment" },
        { id: "anti", label: "Anti-persona and negatives collected" },
        { id: "comp", label: "Direct and indirect competitors noted" },
        { id: "seg", label: "2–5 working segments in a table" },
        { id: "trigger", label: "Purchase triggers are clear" },
        { id: "seo", label: "Segments tied to core clusters" },
        { id: "check", label: "Checked against real leads/orders" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why describe the audience explicitly",
        title: "Mini quiz: target audience",
        lead: "Two checks.",
        questions: [
          {
            id: "ca1",
            question: "An anti-persona is needed to…",
            options: [
              "Grow reach at any cost",
              "Exclude obvious non-targets and save budget",
              "Replace semantics",
              "Hide content from the bot",
            ],
            correct: 1,
            explain: "Negatives and focus beat “everyone”.",
          },
          {
            id: "ca2",
            question: "Optimal segments at the start…",
            options: [
              "Hundreds of micro-personas without different offers",
              "Usually 2–5 working ones with different jobs",
              "Only gender and age",
              "One segment forever without edits",
            ],
            correct: 1,
            explain: "A segment should change the offer or creative.",
          },
        ],
      },
    ],
  },

  "kloaking": {
    checklist: {
      afterTitleIncludes: "How to check the site for swapping",
      title: "Checklist: is there cloaking?",
      lead: "Bot vs human compare + security.",
      items: [
        { id: "gsc", label: "View as Googlebot / webmaster tools used" },
        { id: "html", label: "Bot HTML meaning ≈ browser HTML" },
        { id: "snip", label: "Snippet matches the landing promise" },
        { id: "redir", label: "No odd redirects to foreign domains" },
        { id: "files", label: "No unknown files/cron after a breach" },
        { id: "ua", label: "User-Agent screen if suspicion remains" },
        { id: "cms", label: "CMS/plugins updated, passwords rotated on incident" },
        { id: "agency", label: "No “bots-only SERP” in the vendor contract" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What the method is",
        title: "Mini quiz: cloaking",
        lead: "Two checks.",
        questions: [
          {
            id: "kl1",
            question: "Cloaking in SEO is…",
            options: [
              "A white way to speed up TOP",
              "Serving different content to bots and people",
              "A synonym for HTTPS",
              "Only an A/B button test",
            ],
            correct: 1,
            explain: "Masking breaks search rules.",
          },
          {
            id: "kl2",
            question: "The right reaction to a cloaking offer…",
            options: [
              "Implement “just a little”",
              "Refuse; check the site for breach/swapping",
              "Hide only from Yandex",
              "Replace semantics",
            ],
            correct: 1,
            explain: "Filter risk and a security incident.",
          },
        ],
      },
    ],
  },

  "effektivnost-seo": {
    checklist: {
      afterTitleIncludes: "How to read dynamics without panic",
      title: "SEO evaluation checklist",
      lead: "Before the monthly client review.",
      items: [
        { id: "goals", label: "Goals in Metrica/Analytics set" },
        { id: "organic", label: "Organic MoM/YoY pulled" },
        { id: "brand", label: "Brand / non-brand cut exists" },
        { id: "pos", label: "Core TOP share by priority locked" },
        { id: "landing", label: "Top search landings reviewed" },
        { id: "cpa", label: "Leads/CPA/SEO budget tied together" },
        { id: "flags", label: "Red flags (traffic without leads, etc.) noted" },
        { id: "horizon", label: "2–6 month TOP horizon agreed with the client" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why lock KPIs upfront",
        title: "Mini quiz: SEO effectiveness",
        lead: "Two checks.",
        questions: [
          {
            id: "es1",
            question: "The main point of SEO KPIs…",
            options: [
              "Replace content",
              "A shared client–vendor language for channel dynamics",
              "A TOP guarantee in a week",
              "Only backlink count",
            ],
            correct: 1,
            explain: "Without metrics you’re left with gut feel and conflict.",
          },
          {
            id: "es2",
            question: "A daily −2 spots on one key…",
            options: [
              "A reason to rebuild the whole strategy now",
              "Usually noise; watch cluster trend and business metrics",
              "Means SEO doesn’t work",
              "Requires cloaking",
            ],
            correct: 1,
            explain: "Judge periods and clusters, not one day.",
          },
        ],
      },
    ],
  },

  "kommercheskie-faktory": {
    checklist: {
      afterTitleIncludes: "How to implement and measure",
      title: "Commercial factors checklist",
      lead: "Benchmark vs niche TOP before release.",
      items: [
        { id: "contacts", label: "Phone, domain email, live form/chat" },
        { id: "nap", label: "Address/map or honest service area" },
        { id: "assort", label: "Catalog/offer without empty indexed sections" },
        { id: "price", label: "Prices or clear guides on money URLs" },
        { id: "terms", label: "Shipping, payment, warranty, returns visible" },
        { id: "about", label: "About / legal details / cases" },
        { id: "reviews", label: "Reviews and replies are current" },
        { id: "maps", label: "Maps/directories with consistent NAP (if local)" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What it is and why",
        title: "Mini quiz: commercial factors",
        lead: "Two checks.",
        questions: [
          {
            id: "kf1",
            question: "Commercial factors are primarily…",
            options: [
              "Cloaking scripts",
              "Trust and purchase elements on the site",
              "Only external link count",
              "A synonym for meta keywords",
            ],
            correct: 1,
            explain: "Contacts, terms, assortment, transparency.",
          },
          {
            id: "kf2",
            question: "Added a chat and prices — TOP tomorrow?",
            options: [
              "Yes, always",
              "No: that’s prep; core ranks build planned over months",
              "Only if you buy links",
              "Only for blogs",
            ],
            correct: 1,
            explain: "Commercial signals strengthen the site; they don’t date TOP.",
          },
        ],
      },
    ],
  },

  "excel-google-tablitsy": {
    checklist: {
      afterTitleIncludes: "A work rhythm without a formula cult",
      title: "Core cleanup checklist in a spreadsheet",
      lead: "Before clustering and briefs.",
      items: [
        { id: "links", label: "Wordstat hyperlinks removed" },
        { id: "chars", label: "Junk characters (+ etc.) removed" },
        { id: "trim", label: "TRIM applied" },
        { id: "dup", label: "Query duplicates removed" },
        { id: "minus", label: "Negatives tagged and agreed" },
        { id: "freq", label: "Frequency sort/slice done" },
        { id: "cluster", label: "Cluster/URL column filled" },
        { id: "share", label: "File shared with the team and permissions" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why an SEO needs spreadsheets",
        title: "Mini quiz: Excel and Sheets for SEO",
        lead: "Two checks.",
        questions: [
          {
            id: "ex1",
            question: "Spreadsheets instead of Key Collector…",
            options: [
              "Fully replace frequency collection",
              "Are handy for cleanup and merging already exported data",
              "Guarantee TOP",
              "Are needed only for design",
            ],
            correct: 1,
            explain: "Collection and frequencies — in tools; cleanup — in the sheet.",
          },
          {
            id: "ex2",
            question: "Before removing duplicates it’s better to…",
            options: [
              "Run UNIQUE with no normalization",
              "Strip links/spaces and normalize the string",
              "Buy links",
              "Block the site in robots",
            ],
            correct: 1,
            explain: "Otherwise “almost identical” phrases remain.",
          },
        ],
      },
    ],
  },

  "kontekst-i-seo": {
    checklist: {
      afterTitleIncludes: "How to use them together without illusions",
      title: "Checklist: paid search × SEO",
      lead: "Without the myth “ads = ranks”.",
      items: [
        { id: "myth", label: "Team knows: no direct organic boost from paying" },
        { id: "goals", label: "Same goals/call tracking on paid and organic" },
        { id: "keys", label: "Working ad keys moved into the core/negatives" },
        { id: "land", label: "Strong Ads landings strengthened for SEO" },
        { id: "brand", label: "Brand defended in ads when needed" },
        { id: "cpa", label: "CPA organic vs paid compared in the report" },
        { id: "nofraud", label: "No task to “warm engagement” with ads for SEO" },
        { id: "horizon", label: "TOP horizon 2–6 months not tied to Direct budget" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Myths: “bought ads — bought/lost TOP”",
        title: "Mini quiz: paid search and SEO",
        lead: "Two checks.",
        questions: [
          {
            id: "ks1",
            question: "Paying for contextual ads directly…",
            options: [
              "Guarantees TOP-1 in organic",
              "Does not buy organic ranks",
              "Removes the site from the index",
              "Replaces semantics",
            ],
            correct: 1,
            explain: "Paid and organic blocks are different systems.",
          },
          {
            id: "ks2",
            question: "Best joint use…",
            options: [
              "Fake engagement with clicks",
              "Ads tests and demand → site and SEO fixes",
              "Ads only without a site",
              "Turn off Webmaster",
            ],
            correct: 1,
            explain: "Ads speed feedback; they don’t replace SEO.",
          },
        ],
      },
    ],
  },

  "seo-yandex-google": {
    checklist: {
      afterTitleIncludes: "How to run both without splitting the site",
      title: "Checklist: Yandex × Google",
      lead: "One site — two cabinets.",
      items: [
        { id: "wm", label: "Yandex Webmaster connected" },
        { id: "gsc", label: "Google Search Console connected" },
        { id: "core", label: "Core cross-checked in both impression/frequency systems" },
        { id: "comm", label: "Commercial blocks on money URLs" },
        { id: "local", label: "NAP + maps/directories by audience" },
        { id: "tech", label: "HTTPS, mobile, speed healthy" },
        { id: "links", label: "Backlink profile without spam schemes “for one engine”" },
        { id: "report", label: "Monthly visibility report for both" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Shared core, different accents",
        title: "Mini quiz: Yandex and Google",
        lead: "Two checks.",
        questions: [
          {
            id: "yg1",
            question: "For a site in Russia usually…",
            options: [
              "One search engine is always enough",
              "Both engines are watched; share depends on niche",
              "Two different domains are required",
              "Ads alone are enough",
            ],
            correct: 1,
            explain: "Base is shared; cabinets and accents differ.",
          },
          {
            id: "yg2",
            question: "Region only in Webmaster…",
            options: [
              "Guarantees TOP in every city",
              "Doesn’t replace landings, NAP, and maps",
              "Turns Google off",
              "Replaces semantics",
            ],
            correct: 1,
            explain: "Locality is confirmed by facts on the site and in profiles.",
          },
        ],
      },
    ],
  },

  "prazdnichnyy-retargeting": {
    checklist: {
      afterTitleIncludes: "Setup rules and measurement",
      title: "Holiday retargeting checklist",
      lead: "Before enabling impressions.",
      items: [
        { id: "camp", label: "Retargeting in a separate campaign" },
        { id: "goals", label: "Metrica goals and promo landings ready" },
        { id: "soc", label: "Social segment saved (if needed)" },
        { id: "aud", label: "Interests/Audiences combined with visits" },
        { id: "media", label: "Display with a frequency cap" },
        { id: "cascade", label: "Day cascade with buyers excluded" },
        { id: "offer", label: "Offer and delivery timelines realistic" },
        { id: "cpa", label: "Budget and CPA control by segment" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why retargeting specifically for holidays",
        title: "Mini quiz: holiday retargeting",
        lead: "Two checks.",
        questions: [
          {
            id: "pr1",
            question: "Holiday retargeting is better…",
            options: [
              "Mixed with cold search in one campaign",
              "In a separate campaign with its own bids",
              "As an SEO replacement",
              "Run without segments on one banner",
            ],
            correct: 1,
            explain: "Easier management and CPA reporting.",
          },
          {
            id: "pr2",
            question: "Cascade retargeting is…",
            options: [
              "One banner forever",
              "Changing the offer by visit “age” with conversions excluded",
              "Only display without goals",
              "Fake engagement",
            ],
            correct: 1,
            explain: "Reminder → benefit → deadline.",
          },
        ],
      },
    ],
  },

  "seo-posle-topa": {
    checklist: {
      afterTitleIncludes: "Demand expansion and freshness",
      title: "SEO support checklist after TOP",
      lead: "Don’t switch the channel off entirely.",
      items: [
        { id: "cabinets", label: "Monthly Webmaster/GSC review" },
        { id: "snip", label: "Money-URL snippets strengthened" },
        { id: "cr", label: "Organic CR on priority URLs measured" },
        { id: "core", label: "Quarterly core-expansion plan exists" },
        { id: "ux", label: "Top landings checked on mobile/speed" },
        { id: "comp", label: "Competitors by cluster reviewed" },
        { id: "tech", label: "Post-release smoke not skipped" },
        { id: "budget", label: "Support budget agreed vs CPA/leads" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why “we turned SEO off” is a bad idea",
        title: "Mini quiz: SEO after TOP",
        lead: "Two checks.",
        questions: [
          {
            id: "sp1",
            question: "After reaching TOP, SEO…",
            options: [
              "Can be fully turned off with no risk",
              "Needs support: hold, CTR, conversion, new clusters",
              "Is replaced only by buying links",
              "Needs display only",
            ],
            correct: 1,
            explain: "The SERP and competitors don’t stand still.",
          },
          {
            id: "sp2",
            question: "A common priority after TOP…",
            options: [
              "Ignore snippets",
              "Squeeze conversion and CTR at the same visibility",
              "Delete Metrica",
              "Turn off Webmaster",
            ],
            correct: 1,
            explain: "Same traffic → more leads cheaper than a new TOP chase.",
          },
        ],
      },
    ],
  },

  "instrumenty-veb-analitiki": {
    checklist: {
      afterTitleIncludes: "How not to drown in reports",
      title: "Analytics tools checklist",
      lead: "Base before fancy dashboards.",
      items: [
        { id: "code", label: "Counter on all needed templates" },
        { id: "goals", label: "Goals/events set and verified" },
        { id: "utm", label: "UTMs on ad campaigns" },
        { id: "filter", label: "Own IPs/test traffic filtered" },
        { id: "weekly", label: "Weekly channel and CR review" },
        { id: "logs", label: "On bot disputes — cross-check with logs" },
        { id: "kpi", label: "5–7 KPIs under one goal locked" },
        { id: "access", label: "Team access granted on purpose" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What web analytics is",
        title: "Mini quiz: analytics tools",
        lead: "Two checks.",
        questions: [
          {
            id: "ia1",
            question: "A JS counter first of all…",
            options: [
              "Replaces an SEO audit",
              "Suits user behavior and goals",
              "Guarantees TOP",
              "Is only for designers",
            ],
            correct: 1,
            explain: "Logs are stronger on tech and bots.",
          },
          {
            id: "ia2",
            question: "Without goals a counter…",
            options: [
              "Is still enough for decisions",
              "Shows visits but weakly answers “why”",
              "Replaces CRM",
              "Turns ads off",
            ],
            correct: 1,
            explain: "Conversion markup first.",
          },
        ],
      },
    ],
  },

  "mobilnaya-reklama-google": {
    checklist: {
      afterTitleIncludes: "How to measure yourself, not by someone else’s PDF",
      title: "Google mobile ads checklist",
      lead: "Your numbers beat someone else’s CTR.",
      items: [
        { id: "split", label: "Search and Display separated" },
        { id: "device", label: "Mobile slice enabled in reports" },
        { id: "cpa", label: "Target CPA from margin locked" },
        { id: "land", label: "Landing usable on a phone" },
        { id: "goals", label: "Ads conversions = analytics goals" },
        { id: "bench", label: "External benchmarks not copied as law" },
        { id: "ads", label: "Mobile offers tested separately" },
        { id: "month", label: "Monthly CPA mobile vs desktop compare" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What people usually call “efficiency”",
        title: "Mini quiz: Google mobile ads",
        lead: "Two checks.",
        questions: [
          {
            id: "mr1",
            question: "Someone else’s average CTR from a study…",
            options: [
              "A mandatory KPI for your account",
              "Order-of-magnitude guide; plan from your CPA",
              "Replaces the landing",
              "Guarantees ROMI",
            ],
            correct: 1,
            explain: "Auction and niche differ for everyone.",
          },
          {
            id: "mr2",
            question: "Search and Display on mobile…",
            options: [
              "Always one campaign",
              "Better separated: different intent and economics",
              "Can’t be measured apart",
              "Only for SEO",
            ],
            correct: 1,
            explain: "Otherwise optimization mixes channels.",
          },
        ],
      },
    ],
  },

  "strategiya-prodvizheniya": {
    checklist: {
      afterTitleIncludes: "How to assemble a quarter plan",
      title: "Promotion strategy checklist",
      lead: "Diagnosis first, then tactics.",
      items: [
        { id: "goal", label: "Goal and KPIs locked in analytics" },
        { id: "type", label: "Site type/age and SEO history accounted for" },
        { id: "content", label: "Content checked for intent and duplicates" },
        { id: "links", label: "Backlink profile assessed (clean/spam)" },
        { id: "tech", label: "Tech and core ↔ URL aligned" },
        { id: "scenario", label: "90-day scenario chosen" },
        { id: "prio", label: "1–2 main levers, not “everything at once”" },
        { id: "month", label: "Monthly cluster and lead review" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Goal before tactics",
        title: "Mini quiz: SEO strategy",
        lead: "Two checks.",
        questions: [
          {
            id: "sp1",
            question: "An SEO strategy is best started with…",
            options: [
              "Buying links",
              "A measurable goal and site-state diagnosis",
              "Copying TOP-1 competitor one-to-one",
              "A promise of “TOP in a week”",
            ],
            correct: 1,
            explain: "Without a goal and inputs the plan is empty.",
          },
          {
            id: "sp2",
            question: "Commercial-core TOP buildup is planned…",
            options: [
              "Guaranteed in 7 days",
              "2–6 months after work starts (prep is separate)",
              "Independent of competition",
              "Equal to writing one text",
            ],
            correct: 1,
            explain: "Prep ≠ rank buildup.",
          },
        ],
      },
    ],
  },

  "user-intent": {
    checklist: {
      afterTitleIncludes: "Practice in content and structure",
      title: "User intent checklist",
      lead: "Intention before keyword density.",
      items: [
        { id: "serp", label: "TOP-10–20 broken down by page types" },
        { id: "yg", label: "Yandex and Google cross-checked if both needed" },
        { id: "one", label: "One main intent per canonical URL" },
        { id: "mix", label: "Mix only when SERPs match" },
        { id: "tz", label: "Intent locked in brief/cluster" },
        { id: "snip", label: "Title/H1 promise the same intention" },
        { id: "cta", label: "CTA doesn’t fight info intent" },
        { id: "metric", label: "Organic bounce/CR watched after edits" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why intent beats “the keyword”",
        title: "Mini quiz: user intent",
        lead: "Two checks.",
        questions: [
          {
            id: "ui1",
            question: "The main way to read query intent…",
            options: [
              "Count Wordstat frequency only",
              "Look at page types in the TOP SERP",
              "Buy more links",
              "Raise text “nausea”",
            ],
            correct: 1,
            explain: "The SERP reflects dominant intention.",
          },
          {
            id: "ui2",
            question: "An informational ranking and “buy”…",
            options: [
              "Always one page",
              "Usually different URLs: intentions conflict",
              "Can’t be interlinked",
              "Solved by text length alone",
            ],
            correct: 1,
            explain: "Mixing without a SERP signal is weaker.",
          },
        ],
      },
    ],
  },

  "turbo-stranitsy": {
    checklist: {
      afterTitleIncludes: "Mobile site instead of Turbo",
      title: "After Turbo checklist",
      lead: "Your mobile beats someone else’s format.",
      items: [
        { id: "status", label: "No plan built on new Turbo" },
        { id: "adapt", label: "Responsive on one canonical URL" },
        { id: "speed", label: "Top-URL mobile speed checked" },
        { id: "related", label: "Related/internal links on your site" },
        { id: "ads", label: "Monetization/CTA on your pages" },
        { id: "forms", label: "Forms and phone usable on smartphone" },
        { id: "cabinets", label: "Webmaster/GSC mobile errors closed" },
        { id: "traffic", label: "Mobile traffic reviewed 2–4 weeks" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What Turbo and auto recommendations were",
        title: "Mini quiz: Turbo pages",
        lead: "Two checks.",
        questions: [
          {
            id: "tb1",
            question: "Turbo pages in Yandex search now…",
            options: [
              "A mandatory TOP-10 factor",
              "Are off; rely on your own mobile site",
              "Replace the semantic core",
              "Are required for every service landing",
            ],
            correct: 1,
            explain: "The format was retired; UX lives on your URLs.",
          },
          {
            id: "tb2",
            question: "The auto recommendations feed mattered most for…",
            options: [
              "Product cards with no articles only",
              "Media, portals, and informational blogs",
              "Buying links",
              "Turning Metrica off",
            ],
            correct: 1,
            explain: "Reading depth — content sites.",
          },
        ],
      },
    ],
  },

  "mobilnyy-poisk": {
    checklist: {
      afterTitleIncludes: "How to fold mobile into the SEO process",
      title: "Mobile search checklist",
      lead: "SERP and UX from a smartphone.",
      items: [
        { id: "share", label: "Mobile share in analytics known" },
        { id: "pos", label: "Mobile ranks on the core pulled separately" },
        { id: "adapt", label: "Adaptive on one URL (not a broken m.)" },
        { id: "templates", label: "Top templates checked on a real phone" },
        { id: "speed", label: "Lighthouse/PageSpeed mobile on key URLs" },
        { id: "popup", label: "No aggressive entry overlays" },
        { id: "cabinets", label: "Mobile errors in GSC/Webmaster closed" },
        { id: "no-turbo", label: "Strategy not tied to Turbo/AMP by default" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why you can’t ignore mobile search",
        title: "Mini quiz: mobile search",
        lead: "Two checks.",
        questions: [
          {
            id: "mp1",
            question: "Mobile and desktop SERPs…",
            options: [
              "Are always identical",
              "Can differ in ranks and blocks",
              "Matter only for ads",
              "Don’t affect SEO",
            ],
            correct: 1,
            explain: "Pull the mobile slice separately.",
          },
          {
            id: "mp2",
            question: "After Turbo shutdown the bet is on…",
            options: [
              "Buying Turbo traffic",
              "Speed and responsive on your own site",
              "Flash only",
              "Dropping HTTPS",
            ],
            correct: 1,
            explain: "Your URLs are the main channel.",
          },
        ],
      },
    ],
  },

  "utm-metki": {
    checklist: {
      afterTitleIncludes: "How to create tags without chaos",
      title: "UTM tags checklist",
      lead: "One dictionary beats a generator.",
      items: [
        { id: "three", label: "source + medium + campaign on ad URLs" },
        { id: "dict", label: "Value dictionary agreed in the team" },
        { id: "case", label: "Latin, lowercase, no spaces" },
        { id: "no-int", label: "Internal site links without UTM" },
        { id: "test", label: "Test click visible in Metrica/GA" },
        { id: "content", label: "utm_content for A/B ads when needed" },
        { id: "ads", label: "Direct/Ads templates don’t fight the scheme" },
        { id: "table", label: "Campaigns ↔ tags table maintained" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why tag links",
        title: "Mini quiz: UTM tags",
        lead: "Two checks.",
        questions: [
          {
            id: "utm1",
            question: "The usual required UTM minimum is…",
            options: [
              "utm_content only",
              "utm_source, utm_medium, utm_campaign",
              "Cyrillic tags only",
              "UTM on every site menu item",
            ],
            correct: 1,
            explain: "Three fields are the attribution base.",
          },
          {
            id: "utm2",
            question: "Different spellings of one source (Yandex vs yandex)…",
            options: [
              "Don’t affect reports",
              "Split stats into fake “sources”",
              "Improve SEO",
              "Replace analytics goals",
            ],
            correct: 1,
            explain: "Keep one dictionary.",
          },
        ],
      },
    ],
  },

  "retargeting": {
    checklist: {
      afterTitleIncludes: "Where you set it up",
      title: "Retargeting checklist",
      lead: "Warm base without nagging.",
      items: [
        { id: "pixel", label: "Counter/pixel and goals verified" },
        { id: "seg", label: "Segments by funnel stage collected" },
        { id: "excl", label: "Buyers excluded (or separate upsell)" },
        { id: "camp", label: "Retarget in a separate campaign" },
        { id: "freq", label: "Impression frequency capped" },
        { id: "offer", label: "Offer matches the site" },
        { id: "utm", label: "UTM on ads" },
        { id: "cpa", label: "Segment CPA/ROMI watched separately" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Retargeting vs targeting",
        title: "Mini quiz: retargeting",
        lead: "Two checks.",
        questions: [
          {
            id: "rt1",
            question: "Retargeting primarily works with…",
            options: [
              "A random cold audience with no touches",
              "People who already were on the site/in CRM",
              "Offline billboards only",
              "A semantic-core replacement",
            ],
            correct: 1,
            explain: "Warm base after a touch.",
          },
          {
            id: "rt2",
            question: "Dynamic retarget usually shows…",
            options: [
              "One generic logo to everyone",
              "Products/services the user viewed",
              "SEO texts only",
              "Random competitor banners",
            ],
            correct: 1,
            explain: "Relevance to the view.",
          },
        ],
      },
    ],
  },

  "poiskovye-podskazki": {
    checklist: {
      afterTitleIncludes: "Role in semantics and content",
      title: "Search suggestions checklist",
      lead: "Suggest is ideas, not a TOP button.",
      items: [
        { id: "incog", label: "Collected in private mode with the right region" },
        { id: "both", label: "Yandex and Google if both needed" },
        { id: "table", label: "Wording added to the core table" },
        { id: "intent", label: "Intent matched to the SERP" },
        { id: "cluster", label: "No duplicate URLs per suggestion" },
        { id: "faq", label: "Suggest questions in H2/FAQ where fit" },
        { id: "no-hack", label: "Suggest inflation not used" },
        { id: "brand", label: "Brand in suggest via demand, not schemes" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What search suggestions are",
        title: "Mini quiz: search suggestions",
        lead: "Two checks.",
        questions: [
          {
            id: "pp1",
            question: "For SEO, suggest primarily…",
            options: [
              "Guarantees TOP-1",
              "Gives live wording for the core and content",
              "Replaces a technical audit",
              "Requires query inflation",
            ],
            correct: 1,
            explain: "Idea source, not a magic button.",
          },
          {
            id: "pp2",
            question: "Inflating a place in suggestions…",
            options: [
              "Is recommended practice",
              "Is a risk and usually short-lived; we don’t do it",
              "Is required for every brand",
              "Replaces content marketing",
            ],
            correct: 1,
            explain: "Bet on natural demand.",
          },
        ],
      },
    ],
  },

  "zerkalo-sayta": {
    checklist: {
      afterTitleIncludes: "How to check",
      title: "Site mirrors checklist",
      lead: "One canon — the rest 301.",
      items: [
        { id: "canon", label: "Main mirror chosen (https + www/not)" },
        { id: "www", label: "www ↔ non-www return 301 to canon" },
        { id: "https", label: "http → https configured" },
        { id: "alias", label: "Synonym domains point to canon" },
        { id: "chain", label: "No long redirect chains" },
        { id: "links", label: "Internal links and sitemap on canon" },
        { id: "wm", label: "Webmaster/GSC aligned with canon" },
        { id: "curl", label: "Non-canon header check passed" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Three meanings of “mirror”",
        title: "Mini quiz: website mirror",
        lead: "Two checks.",
        questions: [
          {
            id: "zs1",
            question: "www and non-www without 301 for search…",
            options: [
              "Always the same URL",
              "Different hosts with duplicate risk",
              "Don’t affect the index",
              "Replace HTTPS",
            ],
            correct: 1,
            explain: "Merge to one canon.",
          },
          {
            id: "zs2",
            question: "The main way to merge host mirrors…",
            options: [
              "meta keywords only",
              "Permanent 301 to the canonical URL",
              "Behavioral inflation",
              "Turn sitemap off",
            ],
            correct: 1,
            explain: "Host in robots is an outdated accent.",
          },
        ],
      },
    ],
  },

  "hlebnye-kroshki": {
    checklist: {
      afterTitleIncludes: "Typical mistakes",
      title: "Breadcrumbs checklist",
      lead: "Hierarchy on screen and in the snippet.",
      items: [
        { id: "no-home", label: "No breadcrumbs on the homepage" },
        { id: "last", label: "Current item without a self-link" },
        { id: "place", label: "One block above content on templates" },
        { id: "mobile", label: "Readable on a smartphone" },
        { id: "names", label: "Names = real sections" },
        { id: "schema", label: "BreadcrumbList matches HTML" },
        { id: "canon", label: "URLs in markup are canonical" },
        { id: "crawl", label: "Crawler sees upper-level links" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What they are and where the name comes from",
        title: "Mini quiz: breadcrumbs",
        lead: "Two checks.",
        questions: [
          {
            id: "hk1",
            question: "Breadcrumbs primarily…",
            options: [
              "Guarantee TOP-1",
              "Show place in hierarchy and a path up",
              "Replace the semantic core",
              "Are needed only on the homepage",
            ],
            correct: 1,
            explain: "UX + linking, not a TOP button.",
          },
          {
            id: "hk2",
            question: "The current page in breadcrumbs…",
            options: [
              "Is always linked to itself",
              "Stays as text without a self href",
              "Is removed from the trail entirely",
              "Must be duplicated in the footer",
            ],
            correct: 1,
            explain: "Links go to levels above.",
          },
        ],
      },
    ],
  },

  "algoritm-korolyov": {
    checklist: {
      afterTitleIncludes: "How to treat updates today",
      title: "Checklist after a noisy update",
      lead: "Page meaning beats the algorithm name.",
      items: [
        { id: "intent", label: "Top-cluster intent matched to SERP" },
        { id: "spam", label: "Exact-match spam removed" },
        { id: "value", label: "Pages answer the job, not density" },
        { id: "faq", label: "User questions covered in structure" },
        { id: "tech", label: "Tech/mobile without regressions after edits" },
        { id: "wm", label: "Webmaster/GSC checked for drops" },
        { id: "kpi", label: "Organic and leads watched by cluster" },
        { id: "horizon", label: "Judged over weeks–months, not a day" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What was announced in 2017",
        title: "Mini quiz: “Korolyov”",
        lead: "Two checks.",
        questions: [
          {
            id: "ak1",
            question: "The main practical “Korolyov” signal for SEO…",
            options: [
              "Write exact matches only",
              "Stronger meaning and usefulness; weaker nausea cult",
              "Turn off the semantic core",
              "TOP guaranteed in a week",
            ],
            correct: 1,
            explain: "Semantic fit beats formalism.",
          },
          {
            id: "ak2",
            question: "Optimizing “for the 2017 update brand” now…",
            options: [
              "Is required by the presentation checklist",
              "Isn’t needed; work from intent and current practice",
              "Only via buying links",
              "Only via Host in robots",
            ],
            correct: 1,
            explain: "Update names fade; meaning stays.",
          },
        ],
      },
    ],
  },

  "strategii-yandeks-direkt": {
    checklist: {
      afterTitleIncludes: "What to start from when choosing a strategy",
      title: "Before choosing a Direct strategy",
      lead: "Economics and goals first, then the cabinet button.",
      items: [
        { id: "goal", label: "Metrica goal set and verified" },
        { id: "cpa", label: "Acceptable lead/order cost defined" },
        { id: "lp", label: "Landing relevant to the cluster" },
        { id: "minus", label: "Negatives and non-target traffic under control" },
        { id: "budget", label: "Budget cap and test window set" },
        { id: "data", label: "Conversion volume enough for auto (if needed)" },
        { id: "crm", label: "Lead-quality feedback exists" },
        { id: "kpi", label: "Watch CPA/revenue, not only “block height”" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What happened then",
        title: "Mini quiz: Direct strategies",
        lead: "Two checks.",
        questions: [
          {
            id: "sd1",
            question: "The main takeaway after “simple” strategies left…",
            options: [
              "Direct is no longer needed",
              "Without goals and economics, bids run blind",
              "Always manual bids only",
              "Leads guaranteed by the strategy name",
            ],
            correct: 1,
            explain: "A button doesn’t replace CPA and data.",
          },
          {
            id: "sd2",
            question: "Where should a beginner start logically?",
            options: [
              "The “simplest” strategy with no goals",
              "A narrow core, Metrica goals, and a budget cap",
              "Max bid on every query",
              "Retargeting only with no search",
            ],
            correct: 1,
            explain: "Accounting loop and a narrow test first.",
          },
        ],
      },
    ],
  },

  "relevantnost-sayta": {
    checklist: {
      afterTitleIncludes: "What to do on the site",
      title: "Page relevance checklist",
      lead: "Meaning and the user job beat keyword density.",
      items: [
        { id: "intent", label: "Cluster intent matched to TOP page type" },
        { id: "title", label: "Title/H1 reflect the job without overspam" },
        { id: "answer", label: "Main answer present in the first screen" },
        { id: "structure", label: "Subheads/FAQ cover related questions" },
        { id: "spam", label: "4–5% density cult and Keywords removed from briefs" },
        { id: "tech", label: "Tech doesn’t block indexing" },
        { id: "links", label: "On-topic internal linking exists" },
        { id: "horizon", label: "TOP expectations — months, not a day" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "In plain words",
        title: "Mini quiz: relevance",
        lead: "Two checks.",
        questions: [
          {
            id: "rs1",
            question: "Page relevance is…",
            options: [
              "Only 4–5% keyword density",
              "How well the page matches the user job",
              "Having meta Keywords",
              "A TOP-10 guarantee",
            ],
            correct: 1,
            explain: "Meaning and usefulness, not formal nausea.",
          },
          {
            id: "rs2",
            question: "Does a relevant page auto-enter TOP?",
            options: [
              "Yes, right after publish",
              "No: it’s the base; ranks also need competition and signals",
              "Yes, if you buy links",
              "Yes, if you fill Keywords",
            ],
            correct: 1,
            explain: "Relevance ≠ instant TOP.",
          },
        ],
      },
    ],
  },

  "sotsseti-dlya-biznesa": {
    checklist: {
      afterTitleIncludes: "How to start without a big team",
      title: "Social start for business",
      lead: "One live channel beats five empty ones.",
      items: [
        { id: "audience", label: "Platform chosen for the audience" },
        { id: "profile", label: "Profile: who you are, offer, contacts" },
        { id: "rhythm", label: "Posting rhythm is realistic" },
        { id: "replies", label: "Message reply rule set" },
        { id: "site", label: "Link to site/lead form exists" },
        { id: "utm", label: "Clicks distinguishable in analytics" },
        { id: "tone", label: "Tone matches ticket and niche" },
        { id: "kpi", label: "Watch inquiries, not likes alone" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Social’s role in choosing a seller",
        title: "Mini quiz: social for business",
        lead: "Two checks.",
        questions: [
          {
            id: "sb1",
            question: "A live channel’s main role for local business…",
            options: [
              "Fully replace the site",
              "Lower “bought and abandoned” fear and help pick a seller",
              "Guarantee search TOP",
              "Only inflate followers",
            ],
            correct: 1,
            explain: "Trust and service next to the offer.",
          },
          {
            id: "sb2",
            question: "Where to start logically?",
            options: [
              "Five platforms with no replies at once",
              "1–2 channels where clients already are, plus regularity",
              "Like inflation only",
              "Stories only with no contacts",
            ],
            correct: 1,
            explain: "Focus and replies beat “presence everywhere”.",
          },
        ],
      },
    ],
  },

  "ctr-faktor-google": {
    checklist: {
      afterTitleIncludes: "What to do in practice",
      title: "CTR without inflation",
      lead: "Snippet and relevance beat bots.",
      items: [
        { id: "gsc", label: "CTR watched by cluster in GSC/Webmaster" },
        { id: "title", label: "Title reflects the query job" },
        { id: "desc", label: "Description honestly promises content" },
        { id: "intent", label: "Page closes intent after the click" },
        { id: "mobile", label: "Mobile/speed don’t kill the visit" },
        { id: "no-bots", label: "No click-inflation schemes" },
        { id: "position", label: "Position’s own effect on CTR accounted for" },
        { id: "horizon", label: "TOP expectations — months, not a day" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Where the debate came from",
        title: "Mini quiz: CTR and Google",
        lead: "Two checks.",
        questions: [
          {
            id: "cg1",
            question: "The best bet instead of CTR inflation…",
            options: [
              "Buy clicks on your URLs",
              "Improve the snippet and page relevance",
              "Turn Search Console off",
              "TOP guaranteed after a week of clicks",
            ],
            correct: 1,
            explain: "Honest snippet and an answer to the query.",
          },
          {
            id: "cg2",
            question: "CTR in Search Console primarily…",
            options: [
              "A direct ranking lever “bought — rose”",
              "Snippet and query-fit diagnostics",
              "A semantic-core replacement",
              "Proof that inflation is safe",
            ],
            correct: 1,
            explain: "A metric for title/description and intent fixes.",
          },
        ],
      },
    ],
  },

  "chto-takoe-seo": {
    checklist: {
      afterTitleIncludes: "What a client should understand",
      title: "SEO understanding checklist",
      lead: "Prep ≠ instant TOP.",
      items: [
        { id: "def", label: "Goal is leads/sales, not “TOP for TOP’s sake”" },
        { id: "demand", label: "Search demand in the niche checked" },
        { id: "site", label: "Site ready to take inquiries" },
        { id: "prep", label: "Prep timelines separated from TOP 2–6 months" },
        { id: "kpi", label: "KPI: organic, core ranks, leads" },
        { id: "biz", label: "Service and offer ready for the flow" },
        { id: "spam", label: "Spam methods out of the strategy" },
        { id: "report", label: "Clear plan and reporting with the contractor" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "A definition without mystique",
        title: "Mini quiz: what SEO is",
        lead: "Two checks.",
        questions: [
          {
            id: "cs1",
            question: "SEO primarily is…",
            options: [
              "A TOP-10 guarantee in a month for everyone",
              "Work so target queries find the site and bring inquiries",
              "Only buying links",
              "A sales-team replacement",
            ],
            correct: 1,
            explain: "Search + site + business result.",
          },
          {
            id: "cs2",
            question: "Site prep and reaching TOP…",
            options: [
              "Are the same: launch = TOP",
              "Are different stages: prep — weeks; TOP buildup — planned months",
              "Aren’t needed at all",
              "Always exactly 7 days",
            ],
            correct: 1,
            explain: "Don’t mix prep and ranks.",
          },
        ],
      },
    ],
  },

    "razmery-bannera": {
    checklist: {
      afterTitleIncludes: "How to find a banner’s size",
      title: "Before your own banner",
      lead: "Slot size ≠ copy-paste of someone else’s file.",
      items: [
        { id: "inspect", label: "Display size pulled via Inspect" },
        { id: "file", label: "Intrinsic file size checked if needed" },
        { id: "slot", label: "Own layout slot / max-width clear" },
        { id: "own", label: "Creative is yours — no unlicensed assets" },
        { id: "weight", label: "File compressed, modern format" },
        { id: "attrs", label: "width/height present in markup" },
        { id: "lazy", label: "Lazy below the fold, not on LCP hero" },
        { id: "link", label: "Click goes to the right landing" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Sizes: standards and reality",
        title: "Mini quiz: banner sizes",
        lead: "Two checks.",
        questions: [
          {
            id: "rb1",
            question: "Does img width always equal the file on disk?",
            options: [
              "Yes, always one-to-one",
              "No: CSS and attributes can scale display",
              "Yes, if it’s a GIF",
              "Only in Safari",
            ],
            correct: 1,
            explain: "Display and intrinsic often diverge.",
          },
          {
            id: "rb2",
            question: "Why check a competitor’s banner size?",
            options: [
              "To download and reupload their file",
              "To learn slot dimensions for your creative",
              "To bypass AdBlock",
              "To guarantee search TOP",
            ],
            correct: 1,
            explain: "Slot and proportions — not asset theft.",
          },
        ],
      },
    ],
  },

  "otsenka-stoimosti-sayta": {
    checklist: {
      afterTitleIncludes: "What to look at instead of a magic number",
      title: "Before talking site price",
      lead: "A calculator is a draft, not a deal.",
      items: [
        { id: "pnl", label: "Revenue/profit for 6–12 months available" },
        { id: "channels", label: "Traffic channel share understood" },
        { id: "risks", label: "Risks logged (filters, legal, dependence)" },
        { id: "assets", label: "Assets described: content, brand, code, base" },
        { id: "multi", label: "Market/deal guides checked, not one widget" },
        { id: "trend", label: "Online estimates treated as trend, not absolute" },
        { id: "docs", label: "Sale pack ready — not a service screenshot" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why calculators spit different sums",
        title: "Mini quiz: site valuation",
        lead: "Two checks.",
        questions: [
          {
            id: "os1",
            question: "An online domain valuation is…",
            options: [
              "A legally binding deal price",
              "A rough guide with a wide spread",
              "Exact project P&L",
              "A risk-audit replacement",
            ],
            correct: 1,
            explain: "A model without your books is guessing.",
          },
          {
            id: "os2",
            question: "What beats the widget in a sale?",
            options: [
              "Domain age only",
              "Income, traffic stability, and risks",
              "Button count on the homepage",
              "Having PageRank",
            ],
            correct: 1,
            explain: "Buyers look at the business and risks.",
          },
        ],
      },
    ],
  },

  "tsena-klika-yandeks": {
    checklist: {
      afterTitleIncludes: "Economics first, then the bid",
      title: "Before launching bids",
      lead: "CPA and conversion first, then the auction.",
      items: [
        { id: "goal", label: "Metrica goal set and verified" },
        { id: "cpa", label: "Target CPA from margin/LTV locked" },
        { id: "cr", label: "Click → goal conversion estimated" },
        { id: "cpc", label: "CPC ceiling calculated (CPA × CR / 100)" },
        { id: "seg", label: "Strong segments counted separately" },
        { id: "funnel", label: "If auction is pricey — check landing and negatives" },
        { id: "not-ctr", label: "Success not judged by CTR alone" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "How to calculate click price",
        title: "Mini quiz: click price",
        lead: "Two checks.",
        questions: [
          {
            id: "tk1",
            question: "Acceptable CPC at CPA 200 ₽ and CR 2% ≈",
            options: ["400 ₽", "4 ₽", "0.4 ₽", "200 ₽"],
            correct: 1,
            explain: "200 × 2 / 100 = 4.",
          },
          {
            id: "tk2",
            question: "If the auction is above your CPC ceiling…",
            options: [
              "Always raise the bid",
              "Improve funnel/semantics or admit the channel loses money",
              "Turn Metrica off",
              "Watch CTR only",
            ],
            correct: 1,
            explain: "Economics beats position.",
          },
        ],
      },
    ],
  },

  "linkedin": {
    checklist: {
      afterTitleIncludes: "Profile: the minimum",
      title: "LinkedIn without an empty profile",
      lead: "Clarity first, then Premium.",
      items: [
        { id: "photo", label: "Business photo and clear headline present" },
        { id: "about", label: "About and experience with results filled" },
        { id: "skills", label: "Skills and site/portfolio link in place" },
        { id: "company", label: "Company page created — or consciously skipped" },
        { id: "tone", label: "Tone professional, no message spam" },
        { id: "goal", label: "Presence goal clear: hiring / job / B2B" },
        { id: "premium", label: "Premium only for a concrete task" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What LinkedIn was built for",
        title: "Mini quiz: LinkedIn",
        lead: "Two checks.",
        questions: [
          {
            id: "li1",
            question: "LinkedIn’s main difference from entertainment networks…",
            options: [
              "Food photos only",
              "Focus on career, hiring, and professional expertise",
              "Mandatory Premium for everyone",
              "A corporate-site replacement",
            ],
            correct: 1,
            explain: "Business context and competence.",
          },
          {
            id: "li2",
            question: "Cold template spam in messages…",
            options: [
              "The best growth strategy",
              "Is risky and hurts reputation",
              "Is required for Premium",
              "Replaces a company page",
            ],
            correct: 1,
            explain: "Write on point and with context.",
          },
        ],
      },
    ],
  },

  "reklama-odnoklassniki": {
    checklist: {
      afterTitleIncludes: "Setup: audience and bid",
      title: "Before launching in OK",
      lead: "Offer concreteness beats “Class” reactions.",
      items: [
        { id: "offer", label: "Offer is concrete: price/deadline/geo" },
        { id: "creative", label: "Creative is readable on a phone" },
        { id: "sizes", label: "Sizes checked against current account help" },
        { id: "lp", label: "Landing matches the ad promise" },
        { id: "audience", label: "Audience set without over-splitting at start" },
        { id: "budget", label: "Budget and campaign goal locked" },
        { id: "kpi", label: "We watch CPA/leads, not only “Class”" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Audience and offer tone",
        title: "Mini quiz: OK ads",
        lead: "Two checks.",
        questions: [
          {
            id: "ok1",
            question: "What usually strengthens response in OK?",
            options: [
              "Abstract lifestyle with no offer",
              "A concrete benefit, deadline, and clear next step",
              "Only a giveaway with no landing",
              "Copy-paste creative from Instagram unchanged",
            ],
            correct: 1,
            explain: "Concreteness and a clear offer.",
          },
          {
            id: "ok2",
            question: "The main sales metric is…",
            options: [
              "Only the number of “Class” reactions",
              "CPA and lead/purchase quality",
              "Headline character length",
              "Having a GIF at any cost",
            ],
            correct: 1,
            explain: "Money and leads beat reactions.",
          },
        ],
      },
    ],
  },

  "roi-marketinga": {
    checklist: {
      afterTitleIncludes: "ROI/ROMI formulas",
      title: "Before calculating ROMI",
      lead: "One formula and one attribution model.",
      items: [
        { id: "def", label: "Formula locked (profit vs turnover)" },
        { id: "cost", label: "Costs include only the agreed marketing budget" },
        { id: "attr", label: "Attribution and period match for comparison" },
        { id: "cpa", label: "CR and CPA counted alongside" },
        { id: "slice", label: "Channel cut exists, not only “all marketing”" },
        { id: "lag", label: "SEO/content has a horizon, not one week" },
        { id: "decide", label: "Decision from numbers: scale / fix / cut" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "ROI/ROMI formulas",
        title: "Mini quiz: marketing ROI",
        lead: "Two checks.",
        questions: [
          {
            id: "rm1",
            question: "With ROMI = (profit − costs) / costs × 100%, zero means…",
            options: [
              "Ads are definitely losing money",
              "Spend returned with no profit on top",
              "You must urgently double the budget",
              "Conversion is 100%",
            ],
            correct: 1,
            explain: "Zero is break-even contribution — not a “100% threshold”.",
          },
          {
            id: "rm2",
            question: "Is conversion CR enough to judge payback?",
            options: [
              "Yes, always",
              "No: you need traffic cost, margin, and ROMI/CPA",
              "Yes, if CTR is high",
              "Only for SEO",
            ],
            correct: 1,
            explain: "CR without money doesn’t answer about profit.",
          },
        ],
      },
    ],
  },

  "prodvizhenie-brenda": {
    checklist: {
      afterTitleIncludes: "SMART goals for promotion",
      title: "Before brand budget",
      lead: "Goal first, then channels.",
      items: [
        { id: "goal", label: "Goal framed as a result, not as “posts”" },
        { id: "smart", label: "Goal passes SMART (number and deadline)" },
        { id: "tasks", label: "Tasks follow from the goal, not the reverse" },
        { id: "swot", label: "Short SWOT / market risks done" },
        { id: "channels", label: "1–2 priority channels chosen" },
        { id: "kpi", label: "KPIs and data source locked" },
        { id: "seo-time", label: "SEO core horizon set at 2–6 months" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Goal and tasks: don’t mix",
        title: "Mini quiz: brand promotion",
        lead: "Two checks.",
        questions: [
          {
            id: "pb1",
            question: "“Write 20 SEO articles” is…",
            options: [
              "Always the final business goal",
              "A task/means if there is a goal and metric",
              "A SWOT replacement",
              "A guarantee of TOP in a week",
            ],
            correct: 1,
            explain: "Result first, then work volume.",
          },
          {
            id: "pb2",
            question: "A SMART goal must include…",
            options: [
              "Only a pretty slogan",
              "Measurability and a deadline among other criteria",
              "Mandatory launch on every social network at once",
              "Dropping analytics",
            ],
            correct: 1,
            explain: "Number and deadline are part of SMART.",
          },
        ],
      },
    ],
  },

  "gruppa-facebook": {
    checklist: {
      afterTitleIncludes: "Start: setup and content",
      title: "Before publishing on Facebook",
      lead: "Page role first, then ads.",
      items: [
        { id: "role", label: "Role clear: Page / Group / both" },
        { id: "profile", label: "About, contacts, and site filled" },
        { id: "content", label: "Starter useful content ready" },
        { id: "mod", label: "Comment owner assigned" },
        { id: "geo", label: "Audience/geo relevance checked" },
        { id: "kpi", label: "Metrics: not likes alone — leads/dialogue" },
        { id: "ads", label: "Ads only after offer and landing" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why a business Facebook presence",
        title: "Mini quiz: Facebook for business",
        lead: "Two checks.",
        questions: [
          {
            id: "gf1",
            question: "A Page is primarily…",
            options: [
              "A site and warehouse replacement",
              "The official brand profile and base for tools",
              "Required for every local kiosk",
              "A way to inflate reactions",
            ],
            correct: 1,
            explain: "Brand showcase and working profile.",
          },
          {
            id: "gf2",
            question: "The main business success signal is…",
            options: [
              "Like count alone",
              "Dialogues, clicks, and leads / lead quality",
              "A daily post with no meaning",
              "Maximum cross-posting",
            ],
            correct: 1,
            explain: "Business metrics beat reactions.",
          },
        ],
      },
    ],
  },

  "start-internet-magazina": {
    checklist: {
      afterTitleIncludes: "Business first, then",
      title: "Before launching a store",
      lead: "Economics beats a “great book”.",
      items: [
        { id: "unit", label: "Unit economics and returns calculated" },
        { id: "supply", label: "Supplier and lead times clear" },
        { id: "pay", label: "Payment and receipt scheme chosen" },
        { id: "log", label: "Logistics and returns described" },
        { id: "cards", label: "Cards: price, stock, description" },
        { id: "demand", label: "Demand-test plan exists (not SEO only)" },
        { id: "books", label: "Reading without “million with no effort” promises" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "How to read books and courses",
        title: "Mini quiz: starting an online store",
        lead: "Two checks.",
        questions: [
          {
            id: "si1",
            question: "A book promising a “passive million with almost no effort”…",
            options: [
              "Is a reliable store business plan",
              "Is mostly marketing for the book; you need operations",
              "Replaces payment and logistics",
              "Guarantees TOP in a week",
            ],
            correct: 1,
            explain: "Look at practice and economics.",
          },
          {
            id: "si2",
            question: "What to close before pretty design?",
            options: [
              "Only having Instagram",
              "Niche, margin, payment, delivery, and service",
              "Only a long SEO text",
              "Behavioral traffic inflation",
            ],
            correct: 1,
            explain: "Business contour first.",
          },
        ],
      },
    ],
  },

  "yml-fayl": {
    checklist: {
      afterTitleIncludes: "How to create and upload",
      title: "Before connecting YML",
      lead: "Source of truth beats hand-written XML.",
      items: [
        { id: "source", label: "Prices and stock come from one inventory system" },
        { id: "ids", label: "Products have stable ids" },
        { id: "url", label: "URLs and photos in the feed work" },
        { id: "https", label: "Feed is served at an HTTPS URL" },
        { id: "auto", label: "Auto-refresh set — not a one-off upload" },
        { id: "mod", label: "Process exists for moderation errors" },
        { id: "map", label: "Categories/params mapped to Market requirements" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why a store needs a Market feed",
        title: "Mini quiz: YML file",
        lead: "Two checks.",
        questions: [
          {
            id: "ym1",
            question: "On a large catalog, prefer…",
            options: [
              "Only a hand XLS once a quarter",
              "YML with auto-export from inventory/CMS",
              "Copy-pasting cards into support chat",
              "One CSV for every marketplace with no adaptation",
            ],
            correct: 1,
            explain: "Auto feed and current stock.",
          },
          {
            id: "ym2",
            question: "Stale availability in the feed…",
            options: [
              "Affects nothing",
              "Hurts rating, returns, and trust",
              "Improves site SEO",
              "Replaces moderation",
            ],
            correct: 1,
            explain: "Price-list freshness is critical.",
          },
        ],
      },
    ],
  },

  "google-tag-manager": {
    checklist: {
      afterTitleIncludes: "Account, container, and site code",
      title: "Before publishing GTM",
      lead: "Preview is required; duplicates are not.",
      items: [
        { id: "code", label: "Container code on every needed template" },
        { id: "nodup", label: "No double install of the same counters in the theme" },
        { id: "preview", label: "Tags checked in Preview / Tag Assistant" },
        { id: "publish", label: "Container published — not draft only" },
        { id: "names", label: "Naming scheme for tags and events exists" },
        { id: "ga4", label: "GA4/Metrica visible in Debug / realtime" },
        { id: "access", label: "Account access rights locked" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Tags, triggers, variables",
        title: "Mini quiz: Google Tag Manager",
        lead: "Two checks.",
        questions: [
          {
            id: "gt1",
            question: "A trigger in GTM defines…",
            options: [
              "Only site design",
              "When a tag fires",
              "Replacing GA4 forever",
              "Domain registration",
            ],
            correct: 1,
            explain: "The tag’s firing condition.",
          },
          {
            id: "gt2",
            question: "GTM code in the theme + the same counter natively…",
            options: [
              "Is always useful",
              "Risks double hits — usually a mistake",
              "Is required for Metrica",
              "Replaces Preview",
            ],
            correct: 1,
            explain: "One delivery path per counter.",
          },
        ],
      },
    ],
  },

  "veb-prilozhenie": {
    checklist: {
      afterTitleIncludes: "When to plan an app",
      title: "Before a web-app brief",
      lead: "Scenarios first, stack second.",
      items: [
        { id: "roles", label: "User roles described" },
        { id: "actions", label: "Key actions with results locked" },
        { id: "data", label: "Data and integrations are clear" },
        { id: "public", label: "Public landings separated from the account" },
        { id: "seo", label: "Public part accounts for URLs and speed" },
        { id: "analytics", label: "SPA/AJAX hits and goals thought through" },
        { id: "accept", label: "Acceptance criteria exist — not only “pretty”" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What makes a web application",
        title: "Mini quiz: web application",
        lead: "Two checks.",
        questions: [
          {
            id: "vp1",
            question: "The main difference from a brochure site…",
            options: [
              "Having a logo only",
              "User actions, state, and operations",
              "Mandatory Flash",
              "No server at all",
            ],
            correct: 1,
            explain: "The user works, not only reads.",
          },
          {
            id: "vp2",
            question: "You pick the stack…",
            options: [
              "Before scenarios, by what’s trendy",
              "After scenarios, data, and integrations",
              "Only by button color",
              "Instead of a brief",
            ],
            correct: 1,
            explain: "Job first, tools second.",
          },
        ],
      },
    ],
  },

  "veb-servisy": {
    checklist: {
      afterTitleIncludes: "Architecture without UDDI nostalgia",
      title: "Before an API integration",
      lead: "Contract and monitoring beat acronyms.",
      items: [
        { id: "scenario", label: "Business scenario clear (payments/stock/CRM…)" },
        { id: "docs", label: "Current provider documentation exists" },
        { id: "auth", label: "Keys and permissions not in public code" },
        { id: "sync", label: "Data refresh frequency is clear" },
        { id: "fail", label: "Plan exists for API downtime" },
        { id: "log", label: "Errors are logged and reviewed" },
        { id: "owner", label: "Integration owner assigned" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What a web service does",
        title: "Mini quiz: web services",
        lead: "Two checks.",
        questions: [
          {
            id: "vs1",
            question: "A web service is primarily…",
            options: [
              "Pretty layout for people",
              "A data-exchange interface between programs",
              "A domain replacement",
              "Only SOAP from 2005",
            ],
            correct: 1,
            explain: "Machines agree on a contract.",
          },
          {
            id: "vs2",
            question: "For new e-commerce you more often start with…",
            options: [
              "A mandatory UDDI registry",
              "Ready payment/delivery/CRM APIs and a clear contract",
              "Copy-pasting prices by hand forever",
              "Turning HTTPS off",
            ],
            correct: 1,
            explain: "Practical integrations for the job.",
          },
        ],
      },
    ],
  },

  "adminka-sayta": {
    checklist: {
      afterTitleIncludes: "Access and order in the team",
      title: "Before handing out admin access",
      lead: "Roles beat one shared password.",
      items: [
        { id: "roles", label: "Editor/admin roles are split" },
        { id: "accounts", label: "Everyone has their own account" },
        { id: "2fa", label: "2FA/strong passwords where available" },
        { id: "updates", label: "CMS and plugin update plan exists" },
        { id: "backup", label: "Backup before major edits" },
        { id: "not-lk", label: "Admin not mixed with customer account" },
        { id: "train", label: "Editors know what they may/may not touch" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why you need an admin panel",
        title: "Mini quiz: site admin panel",
        lead: "Two checks.",
        questions: [
          {
            id: "ad1",
            question: "An admin panel is primarily needed…",
            options: [
              "To replace hosting",
              "So the team edits content without changing code",
              "To guarantee TOP rankings",
              "Instead of SSL",
            ],
            correct: 1,
            explain: "A content control panel.",
          },
          {
            id: "ad2",
            question: "One shared password “for the whole team”…",
            options: [
              "Is best practice",
              "Is a risk: no audit and harder to revoke access",
              "Is required for SEO",
              "Replaces backups",
            ],
            correct: 1,
            explain: "Personal accounts and roles.",
          },
        ],
      },
    ],
  },

  "oshibka-500": {
    checklist: {
      afterTitleIncludes: "How to diagnose",
      title: "Checklist for a 500",
      lead: "While the page is down.",
      items: [
        { id: "confirm", label: "500 confirmed from outside (curl/incognito)" },
        { id: "time", label: "Time and URL locked" },
        { id: "logs", label: "PHP/app and web-server logs opened" },
        { id: "change", label: "Last change accounted for" },
        { id: "limits", label: "Disk and PHP limits checked" },
        { id: "plugin", label: "Fresh plugin/theme checked on CMS" },
        { id: "monitor", label: "Uptime alert set for the future" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What 500 Internal Server Error means",
        title: "Mini quiz: 500 error",
        lead: "Two checks.",
        questions: [
          {
            id: "e500a",
            question: "500 Internal Server Error usually means…",
            options: [
              "The page was deleted (like 404)",
              "The server/app failed while handling the request",
              "Only a DNS problem",
              "A search-engine penalty",
            ],
            correct: 1,
            explain: "An error on the server/code side.",
          },
          {
            id: "e500b",
            question: "Masking 500 with a redirect…",
            options: [
              "Is normal practice",
              "Is wrong — you need to fix the cause",
              "Is required for SEO",
              "Replaces logs",
            ],
            correct: 1,
            explain: "Treat the cause, not the symptom.",
          },
        ],
      },
    ],
  },

  "skript-sayta": {
    checklist: {
      afterTitleIncludes: "How they’re connected",
      title: "Before installing a script",
      lead: "Measure beats a widget pile.",
      items: [
        { id: "task", label: "Script job is written down" },
        { id: "source", label: "Code from a trusted source" },
        { id: "place", label: "One insert place without a duplicate" },
        { id: "staging", label: "Checked on staging" },
        { id: "cache", label: "Cache cleared after publish" },
        { id: "speed", label: "Speed impact considered" },
        { id: "unused", label: "Old unused tags disabled" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Client and server scripts",
        title: "Mini quiz: website script",
        lead: "Two checks.",
        questions: [
          {
            id: "scr1",
            question: "A client script runs…",
            options: [
              "Only on the hosting server",
              "In the user’s browser",
              "Only in robots.txt",
              "Instead of HTML",
            ],
            correct: 1,
            explain: "JS and UI — in the browser.",
          },
          {
            id: "scr2",
            question: "A random “SEO script” from a forum…",
            options: [
              "Is always safe",
              "Is a malware risk — don’t take it",
              "Is required for TOP rankings",
              "Replaces HTTPS",
            ],
            correct: 1,
            explain: "Trusted source only.",
          },
        ],
      },
    ],
  },

  "pozdravlenie-klienta": {
    checklist: {
      afterTitleIncludes: "Process in CRM",
      title: "Before an auto birthday greeting",
      lead: "The database beats a pretty template.",
      items: [
        { id: "consent", label: "Consent for the channel exists" },
        { id: "name", label: "Name and date checked in CRM" },
        { id: "tone", label: "Tone fits the niche" },
        { id: "rotate", label: "Template rotation exists" },
        { id: "timing", label: "Send on the birthday, not “when we remembered”" },
        { id: "vip", label: "VIP — manager task for a personal message" },
        { id: "unsub", label: "Email has unsubscribe" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "A letter from the company",
        title: "Mini quiz: client birthday greeting",
        lead: "Two checks.",
        questions: [
          {
            id: "pz1",
            question: "Addressing “Dear client!” in a mailing…",
            options: [
              "Is best practice",
              "Depersonalizes and weakens value",
              "Is required for B2B",
              "Replaces consent",
            ],
            correct: 1,
            explain: "You need a name and a living tone.",
          },
          {
            id: "pz2",
            question: "Generator poetry in a business SMS…",
            options: [
              "Is always appropriate",
              "Usually sounds insincere",
              "Is a legal requirement",
              "Replaces the name",
            ],
            correct: 1,
            explain: "Simple language is better.",
          },
        ],
      },
    ],
  },

  "looker-studio": {
    checklist: {
      afterTitleIncludes: "How to build the first report",
      title: "First dashboard checklist",
      lead: "KPIs first, charts second.",
      items: [
        { id: "kpi", label: "5–7 KPIs locked" },
        { id: "source", label: "One reliable source connected" },
        { id: "defs", label: "Lead/conversion definitions are shared" },
        { id: "utm", label: "UTMs and spend are aligned" },
        { id: "crm", label: "If end-to-end is needed — CRM data exists" },
        { id: "check", label: "Numbers reconciled with the source account" },
        { id: "access", label: "Client has view-only access" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "End-to-end analytics",
        title: "Mini quiz: Looker Studio",
        lead: "Two checks.",
        questions: [
          {
            id: "ls1",
            question: "Looker Studio primarily…",
            options: [
              "Replaces CRM",
              "Visualizes already collected data",
              "Collects clicks instead of a counter",
              "Guarantees TOP rankings",
            ],
            correct: 1,
            explain: "It’s a reporting layer.",
          },
          {
            id: "ls2",
            question: "End-to-end analytics without CRM and spend…",
            options: [
              "Is complete in any chart",
              "Stays a site picture of clicks/goals",
              "Isn’t needed for business",
              "Is done only with SMS poetry",
            ],
            correct: 1,
            explain: "You need a join with money and leads.",
          },
        ],
      },
    ],
  },

  "kviz-sayt": {
    checklist: {
      afterTitleIncludes: "Build algorithm",
      title: "Before launching a quiz",
      lead: "Questions must lead to the offer.",
      items: [
        { id: "goal", label: "Quiz goal locked" },
        { id: "len", label: "4–8 questions without fluff" },
        { id: "result", label: "Outcome is useful for the user" },
        { id: "crm", label: "Answers go to CRM/a sheet" },
        { id: "consent", label: "Consent to contact exists" },
        { id: "mobile", label: "Mobile version checked" },
        { id: "funnel", label: "We watch step drop-offs" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "When a quiz is needed",
        title: "Mini quiz: quiz site",
        lead: "Two checks.",
        questions: [
          {
            id: "kz1",
            question: "A quiz is always better than a normal landing…",
            options: [
              "Yes, for every niche",
              "No — it depends on traffic temperature and the job",
              "Only instead of SEO",
              "Only without a contact form",
            ],
            correct: 1,
            explain: "Format for the job.",
          },
          {
            id: "kz2",
            question: "Asking for a phone before any value…",
            options: [
              "Is best practice",
              "Is a common mistake — scenario usefulness first",
              "Is required by law",
              "Replaces CRM",
            ],
            correct: 1,
            explain: "Meaning first, then contact.",
          },
        ],
      },
    ],
  },

  "http-zagolovki": {
    checklist: {
      afterTitleIncludes: "How to roll out and verify",
      title: "Security headers checklist",
      lead: "Staging first, then production.",
      items: [
        { id: "backup", label: "Config backup done" },
        { id: "https", label: "HTTPS and redirect stable before HSTS" },
        { id: "nosniff", label: "X-Content-Type-Options: nosniff" },
        { id: "frame", label: "iframe limited (XFO / frame-ancestors)" },
        { id: "csp", label: "CSP at least in Report-Only" },
        { id: "ref", label: "Referrer-Policy set" },
        { id: "check", label: "Home, forms, and widgets checked" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "HSTS",
        title: "Mini quiz: HTTP headers",
        lead: "Two checks.",
        questions: [
          {
            id: "hz1",
            question: "HSTS without working HTTPS…",
            options: [
              "Is normal practice",
              "Is wrong — stable HTTPS first",
              "Replaces CSP",
              "Is only needed for SEO TOP",
            ],
            correct: 1,
            explain: "HSTS on top of HTTPS.",
          },
          {
            id: "hz2",
            question: "X-XSS-Protection as the base of protection…",
            options: [
              "Is the current standard",
              "Is outdated — rely on CSP",
              "Replaces passwords",
              "Is required in robots.txt",
            ],
            correct: 1,
            explain: "Modern focus is CSP.",
          },
        ],
      },
    ],
  },

  "retargeting-meta": {
    checklist: {
      afterTitleIncludes: "How not to break the campaign",
      title: "Before launching retarget",
      lead: "A segment without excluding conversions annoys the audience.",
      items: [
        { id: "pixel", label: "Site events/pixel verified" },
        { id: "window", label: "Lookback window set" },
        { id: "exclude", label: "Buyers excluded" },
        { id: "freq", label: "Impression frequency capped" },
        { id: "creative", label: "Creative matches funnel stage" },
        { id: "consent", label: "Consent/basis for lists accounted for" },
        { id: "cpa", label: "We watch segment CPA, not only reach" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Site visitors",
        title: "Mini quiz: Meta retarget",
        lead: "Two checks.",
        questions: [
          {
            id: "rm1",
            question: "A “site visitors” custom audience without a tag…",
            options: [
              "Works by default",
              "Is usually empty — no events",
              "Replaces a CRM list",
              "Is only needed for SEO",
            ],
            correct: 1,
            explain: "Visit events are required.",
          },
          {
            id: "rm2",
            question: "Copying old Ads Manager screenshots…",
            options: [
              "Is required",
              "Is a bad idea — menus change; audience type matters more",
              "Replaces a data policy",
              "Is needed for lookalike",
            ],
            correct: 1,
            explain: "Orient on segment logic.",
          },
        ],
      },
    ],
  },

  "interaktivnyy-kontent": {
    checklist: {
      afterTitleIncludes: "What matters more than",
      title: "Before launching interactive",
      lead: "Usefulness beats animation.",
      items: [
        { id: "goal", label: "User job locked" },
        { id: "type", label: "Format type chosen for the niche" },
        { id: "result", label: "Outcome is useful, not empty" },
        { id: "mobile", label: "Mobile version checked" },
        { id: "events", label: "Analytics events configured" },
        { id: "cta", label: "Next step exists (lead/contact)" },
        { id: "one", label: "We start with one strong scenario" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Tests, surveys, and quizzes",
        title: "Mini quiz: interactive content",
        lead: "Two checks.",
        questions: [
          {
            id: "ik1",
            question: "Interactive “wow” without usefulness…",
            options: [
              "Always grows sales",
              "Often gets clicks without leads",
              "Replaces a USP",
              "Is needed on every page",
            ],
            correct: 1,
            explain: "Client job first.",
          },
          {
            id: "ik2",
            question: "A site calculator is strongest when…",
            options: [
              "The formula is opaque",
              "It closes “how much / how long” pain",
              "It sits on every page at once",
              "It has no next step",
            ],
            correct: 1,
            explain: "A number instead of a call into the void.",
          },
        ],
      },
    ],
  },

  "istochniki-trafika": {
    checklist: {
      afterTitleIncludes: "How to choose and test",
      title: "Before a channel test",
      lead: "Measurement first, budget second.",
      items: [
        { id: "offer", label: "Offer and landing ready" },
        { id: "goals", label: "Goals/leads in analytics" },
        { id: "utm", label: "UTMs set on campaigns" },
        { id: "budget", label: "Test budget and length locked" },
        { id: "cpa", label: "We watch CPA/lead quality" },
        { id: "one", label: "Not testing everything at once on pennies" },
        { id: "seo", label: "Organic prepped in parallel — no instant TOP expectation" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Organic search",
        title: "Mini quiz: traffic sources",
        lead: "Two checks.",
        questions: [
          {
            id: "it1",
            question: "Organic is “free” in the sense…",
            options: [
              "It needs no time",
              "No pay-per-click, but there is work and a ranking ramp",
              "It guarantees TOP in a week",
              "It replaces analytics",
            ],
            correct: 1,
            explain: "You pay with labor and time.",
          },
          {
            id: "it2",
            question: "Creating a social community…",
            options: [
              "Immediately gives a stable lead flow",
              "Isn’t a source yet — you need content and often ads",
              "Always replaces paid search",
              "Needs no posts",
            ],
            correct: 1,
            explain: "A group ≠ traffic.",
          },
        ],
      },
    ],
  },

  "virusnyy-marketing": {
    checklist: {
      afterTitleIncludes: "How to work on a viral video",
      title: "Before launching a “virus”",
      lead: "Idea and seeding beat a view pack.",
      items: [
        { id: "goal", label: "Video/format goal is clear" },
        { id: "audience", label: "Audience and platforms chosen" },
        { id: "hook", label: "There’s a hook and a reason to share" },
        { id: "bridge", label: "Bridge to product/landing exists" },
        { id: "seed", label: "Seeding plan without fake inflation" },
        { id: "metrics", label: "We count shares and leads, not views only" },
        { id: "risk", label: "Tone and reputation risks checked" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Upsides and limits",
        title: "Mini quiz: viral marketing",
        lead: "Two checks.",
        questions: [
          {
            id: "vm1",
            question: "Guaranteeing viral reach…",
            options: [
              "Can be done by contractor contract",
              "Can’t — you can raise odds with idea and seeding",
              "Is easy with a view pack",
              "Is only needed for SEO TOP",
            ],
            correct: 1,
            explain: "No guarantees.",
          },
          {
            id: "vm2",
            question: "A virus with no bridge to the product…",
            options: [
              "Always pays back",
              "Often gives noise without leads",
              "Replaces a USP",
              "Is only needed in email",
            ],
            correct: 1,
            explain: "You need a next step.",
          },
        ],
      },
    ],
  },

  "assotsiirovannye-konversii": {
    checklist: {
      afterTitleIncludes: "What to do in practice",
      title: "Before a budget decision",
      lead: "Last click isn’t the only truth.",
      items: [
        { id: "goals", label: "Goals/ecommerce configured" },
        { id: "utm", label: "UTMs are consistent" },
        { id: "window", label: "Period ≥ sales cycle" },
        { id: "models", label: "Compared 2–3 attribution models" },
        { id: "paths", label: "Checked channel roles in paths" },
        { id: "brand", label: "Not cutting top-of-funnel because brand looks strong" },
        { id: "hyp", label: "Hypothesis and decision date locked" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What counts as an assisted conversion",
        title: "Mini quiz: assisted conversions",
        lead: "Two checks.",
        questions: [
          {
            id: "ak1",
            question: "A channel with zero last click but frequent in paths…",
            options: [
              "Is always useless",
              "May be an important helper — don’t cut blind",
              "Replaces SEO",
              "Is only needed for banners",
            ],
            correct: 1,
            explain: "Look at the role in the chain.",
          },
          {
            id: "ak2",
            question: "Assisted totals across channels exceed orders…",
            options: [
              "Always a counter bug",
              "Is normal: one path has several helpers",
              "Means you should turn analytics off",
              "Only happens in SEO",
            ],
            correct: 1,
            explain: "Don’t add them into revenue blindly.",
          },
        ],
      },
    ],
  },

  "sredniy-chek": {
    checklist: {
      afterTitleIncludes: "How to roll out without hurting margin",
      title: "Before an AOV test",
      lead: "AOV without margin is an empty win.",
      items: [
        { id: "base", label: "Current AOV calculated" },
        { id: "margin", label: "Bundle/threshold margin checked" },
        { id: "one", label: "Testing one lever at a time" },
        { id: "cross", label: "Cross-sell fits the main purchase" },
        { id: "ship", label: "Shipping threshold a bit above current AOV" },
        { id: "honest", label: "No fake timers/stock claims" },
        { id: "cr", label: "Watch AOV together with order CR" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Cross-sell and upsell",
        title: "Mini quiz: average order value",
        lead: "Two checks.",
        questions: [
          {
            id: "sc1",
            question: "Upsell is…",
            options: [
              "Any homepage banner",
              "Offering a fuller/more expensive version of the same solution",
              "Only free shipping",
              "A replacement for analytics",
            ],
            correct: 1,
            explain: "A better version of the same choice.",
          },
          {
            id: "sc2",
            question: "A free-shipping threshold “from thin air”…",
            options: [
              "Is always ideal",
              "Is a risk: too high annoys, too low eats margin",
              "Is only needed for SEO",
              "Replaces cross-sell",
            ],
            correct: 1,
            explain: "Anchor to current AOV.",
          },
        ],
      },
    ],
  },

  "sem-kasaniy": {
    checklist: {
      afterTitleIncludes: "How to build the chain in practice",
      title: "Before linking channels",
      lead: "Audience and tracking first, then “seven touches”.",
      items: [
        { id: "audience", label: "Audience portrait locked" },
        { id: "offer", label: "One clear promise per stage" },
        { id: "land", label: "Landing matched to traffic temperature" },
        { id: "utm", label: "UTMs and goals configured" },
        { id: "channels", label: "2–3 channels + retarget chosen" },
        { id: "msg", label: "Message changes by stage" },
        { id: "window", label: "Test length ≥ decision cycle" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "The 7-touch hypothesis",
        title: "Mini quiz: 7 touches",
        lead: "Two checks.",
        questions: [
          {
            id: "sk1",
            question: "Exactly seven touches are required…",
            options: [
              "Always, by marketing law",
              "No — it’s a guide; the number depends on niche and check",
              "Only for SEO TOP",
              "They replace a USP",
            ],
            correct: 1,
            explain: "A hypothesis, not dogma.",
          },
          {
            id: "sk2",
            question: "An empty banner impression with no attention…",
            options: [
              "Equals a full touch",
              "Is a weak contribution — noticed interaction matters",
              "Guarantees a lead",
              "Is only needed in email",
            ],
            correct: 1,
            explain: "Count meaning, not a cookie.",
          },
        ],
      },
    ],
  },

  "prodazhi-internet-magazin": {
    checklist: {
      afterTitleIncludes: "AOV and assortment",
      title: "Before a sales-growth test",
      lead: "One lever — one metric.",
      items: [
        { id: "bottleneck", label: "Funnel bottleneck named" },
        { id: "metric", label: "Success metric locked" },
        { id: "one", label: "Testing 1–2 changes, not twenty" },
        { id: "mobile", label: "Mobile checkout checked" },
        { id: "margin", label: "Promo/add-on margin calculated" },
        { id: "utm", label: "UTMs on traffic are set" },
        { id: "service", label: "Replies/chat won’t collapse when leads grow" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "UX, cart, and service",
        title: "Mini quiz: store sales",
        lead: "Two checks.",
        questions: [
          {
            id: "pm1",
            question: "Turning on all “20 ways” at once…",
            options: [
              "Is best practice",
              "Is a bad idea — you won’t know what worked",
              "Is required for SEO",
              "Replaces analytics",
            ],
            correct: 1,
            explain: "Test pointedly.",
          },
          {
            id: "pm2",
            question: "An app is required at the start…",
            options: [
              "Yes, otherwise no sales",
              "No — first a responsive site and easy checkout",
              "Only instead of a website",
              "Is always needed for AOV",
            ],
            correct: 1,
            explain: "Site and funnel first.",
          },
        ],
      },
    ],
  },

  "linkbilder": {
    checklist: {
      afterTitleIncludes: "Strategy: quality instead of an explosion",
      title: "Before growing mentions",
      lead: "Donor quality beats a pack.",
      items: [
        { id: "audit", label: "Current link profile reviewed" },
        { id: "criteria", label: "Donor criteria locked" },
        { id: "anchors", label: "Anchor plan without over-spam" },
        { id: "pace", label: "Pace without a sharp mass spike" },
        { id: "track", label: "Placement tracking and UTMs kept" },
        { id: "risk", label: "Exchange packs not the only strategy" },
        { id: "expect", label: "No “TOP tomorrow” promises from links" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What a link builder does",
        title: "Mini quiz: link builder",
        lead: "Two checks.",
        questions: [
          {
            id: "lb1",
            question: "Mass-buying links in packs…",
            options: [
              "Is the modern standard",
              "Is a risky strategy after filters",
              "Replaces content",
              "Guarantees TOP in a week",
            ],
            correct: 1,
            explain: "Quality beats volume.",
          },
          {
            id: "lb2",
            question: "Link building guarantees TOP…",
            options: [
              "Yes, always",
              "No — one factor; visibility grows over months of work",
              "Only via exchanges",
              "Only without anchors",
            ],
            correct: 1,
            explain: "No TOP date guarantees.",
          },
        ],
      },
    ],
  },

  "tz-na-sayt": {
    checklist: {
      afterTitleIncludes: "Common client mistakes",
      title: "Before development starts",
      lead: "No “make it pretty” into the void.",
      items: [
        { id: "goal", label: "Site goal and CTA agreed" },
        { id: "audience", label: "Audience described" },
        { id: "refs", label: "References exist, not taste alone" },
        { id: "structure", label: "Page structure locked" },
        { id: "content", label: "Who prepares copy/photos is clear" },
        { id: "deadlines", label: "Stage deadlines written" },
        { id: "access", label: "Domain/hosting access stays with the client" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Brief first, then the document",
        title: "Mini quiz: website specification",
        lead: "Two checks.",
        questions: [
          {
            id: "tz1",
            question: "A brief and a full spec…",
            options: [
              "Are the same thing",
              "Brief is discussion; the spec is the final guide",
              "Are only needed for SEO",
              "Replace a contract",
            ],
            correct: 1,
            explain: "Agreement first, then instructions.",
          },
          {
            id: "tz2",
            question: "The phrase “make it pretty”…",
            options: [
              "Is enough for design",
              "Is too vague — you need references",
              "Replaces a prototype",
              "Is only needed in the contract",
            ],
            correct: 1,
            explain: "Everyone reads “pretty” differently.",
          },
        ],
      },
    ],
  },

  "project-manager": {
    checklist: {
      afterTitleIncludes: "Duties",
      title: "Before the project starts",
      lead: "Boundaries and “done” criteria first.",
      items: [
        { id: "goal", label: "Goals and scope agreed" },
        { id: "roles", label: "Team roles named" },
        { id: "done", label: "“Done” criteria written down" },
        { id: "plan", label: "Stages and dates visible to everyone" },
        { id: "risk", label: "Risks listed and escalated" },
        { id: "status", label: "Status-report rhythm set" },
        { id: "tz", label: "Requirements / spec not fuzzy" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why a project manager is needed",
        title: "Mini quiz: project manager",
        lead: "Two checks.",
        questions: [
          {
            id: "pm1",
            question: "A PM and a product manager…",
            options: [
              "Are always one role",
              "Often different focuses: delivery vs product “what/why”",
              "Are only needed in SEO",
              "Replace a specification",
            ],
            correct: 1,
            explain: "In small teams they can blur.",
          },
          {
            id: "pm2",
            question: "A “high salary immediately” course…",
            options: [
              "Is a reliable entry",
              "Is a red flag — project practice matters more",
              "Is required by law",
              "Replaces the team",
            ],
            correct: 1,
            explain: "Look at real experience.",
          },
        ],
      },
    ],
  },

  "udalennaya-rabota": {
    checklist: {
      afterTitleIncludes: "Manage by outcomes, not by “sitting”",
      title: "Before launching remote work",
      lead: "Outcomes beat online presence.",
      items: [
        { id: "kpi", label: "KPIs / outcome criteria are clear" },
        { id: "tracker", label: "One shared task tracker" },
        { id: "sync", label: "Sync windows agreed" },
        { id: "docs", label: "Knowledge base / guides available" },
        { id: "onboard", label: "Newcomer onboarding described" },
        { id: "report", label: "Status rhythm without extra meetings" },
        { id: "trust", label: "No default total surveillance" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why companies go remote",
        title: "Mini quiz: remote work",
        lead: "Two checks.",
        questions: [
          {
            id: "ur1",
            question: "Remote people are best managed…",
            options: [
              "By minutes in a chair",
              "By outcomes and transparent statuses",
              "Only with screen screenshots",
              "Without tasks and KPIs",
            ],
            correct: 1,
            explain: "Presence ≠ value.",
          },
          {
            id: "ur2",
            question: "Office and remote in different trackers…",
            options: [
              "Is normal practice",
              "Risks second-class status and agreement chaos",
              "Are required by law",
              "Replace a knowledge base",
            ],
            correct: 1,
            explain: "One process loop.",
          },
        ],
      },
    ],
  },

  "aydentika-brenda": {
    checklist: {
      afterTitleIncludes: "How not to break the system",
      title: "Before rolling out identity",
      lead: "Rules beat a one-off logo.",
      items: [
        { id: "brief", label: "Brief and audience locked" },
        { id: "logo", label: "Mark reads at small size" },
        { id: "color", label: "2–3 main colors + neutrals" },
        { id: "type", label: "Fonts and licenses checked" },
        { id: "book", label: "Brand book / short rules exist" },
        { id: "src", label: "Sources stored with the client" },
        { id: "use", label: "Contractors got an extract, not “by eye”" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Identity, branding, and corporate style",
        title: "Mini quiz: brand identity",
        lead: "Two checks.",
        questions: [
          {
            id: "ab1",
            question: "Identity is only the logo…",
            options: [
              "Yes",
              "No — a system of color, type, form, and rules",
              "Only for SEO TOP",
              "It replaces a USP",
            ],
            correct: 1,
            explain: "The logo is part of the system.",
          },
          {
            id: "ab2",
            question: "A brand book is needed to…",
            options: [
              "Replace marketing",
              "Apply visuals consistently and not break the look",
              "Guarantee viral reach",
              "Cancel references",
            ],
            correct: 1,
            explain: "Application rules.",
          },
        ],
      },
    ],
  },

  "negativnyy-otzyv": {
    checklist: {
      afterTitleIncludes: "Fix the problem — don’t “close the comment”",
      title: "Before replying to negativity",
      lead: "Tone and next step beat winning the argument.",
      items: [
        { id: "calm", label: "Emotions cooled — no aggression" },
        { id: "fact", label: "Case facts checked" },
        { id: "tone", label: "No flattery or bureaucratese" },
        { id: "next", label: "Concrete next step / contact ready" },
        { id: "sorry", label: "Apology only if the error is confirmed" },
        { id: "place", label: "Reply on the right platform (maps / reviews)" },
        { id: "fix", label: "After resolution — a short thread update" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "No aggression — even if the client is wrong",
        title: "Mini quiz: negative review",
        lead: "Two checks.",
        questions: [
          {
            id: "no1",
            question: "Client is wrong — reply “your fault”…",
            options: [
              "Yes, that’s honest",
              "No — tone hits reputation harder than the dispute",
              "Only in SEO",
              "Required by law",
            ],
            correct: 1,
            explain: "Calm facts and a review of the case.",
          },
          {
            id: "no2",
            question: "A “sorry for the inconvenience” template with no fix…",
            options: [
              "Is always enough",
              "Reads as a brush-off — need substance and a next step",
              "Always replaces compensation",
              "Is only for deleting the review",
            ],
            correct: 1,
            explain: "Fix the problem.",
          },
        ],
      },
    ],
  },

  "sms-rassylka": {
    checklist: {
      afterTitleIncludes: "Launch stages",
      title: "Before the first SMS campaign",
      lead: "Consent and measurement beat reach.",
      items: [
        { id: "goal", label: "Goal and KPI locked" },
        { id: "consent", label: "List only with consent" },
        { id: "text", label: "Copy short — no caps, no typos" },
        { id: "sender", label: "Sender name approved" },
        { id: "measure", label: "Promo code / UTM / tracking number" },
        { id: "time", label: "Time and timezone without night pings" },
        { id: "optout", label: "Clear opt-out from the list" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Practical recommendations",
        title: "Mini quiz: SMS campaigns",
        lead: "Two checks.",
        questions: [
          {
            id: "sms1",
            question: "A bought number list without consent…",
            options: [
              "Is a normal start for reach",
              "Risks complaints and blocks — better your own list",
              "Is required by law",
              "Is only needed for SEO",
            ],
            correct: 1,
            explain: "Consent and your own audience.",
          },
          {
            id: "sms2",
            question: "The main KPI of an SMS campaign…",
            options: [
              "Only “delivered”",
              "Actions (calls/orders) + unsubscribes/complaints",
              "Copy length in characters",
              "Number of carriers in the contract",
            ],
            correct: 1,
            explain: "Watch results and reputation.",
          },
        ],
      },
    ],
  },

  "skvoznaya-analitika": {
    checklist: {
      afterTitleIncludes: "Three ways to build the loop",
      title: "Before rolling out end-to-end analytics",
      lead: "Data and discipline beat the vendor.",
      items: [
        { id: "budget", label: "Ad volume justifies the loop" },
        { id: "utm", label: "UTM on all paid campaigns" },
        { id: "crm", label: "CRM rules and amounts in deals" },
        { id: "channels", label: "Calls, chat, email are counted" },
        { id: "attr", label: "Attribution model matches the deal cycle" },
        { id: "owner", label: "Someone owns join maintenance" },
        { id: "accept", label: "Acceptance checklist + 2–4 weeks of reconciliation" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Mistake: too little time for setup",
        title: "Mini quiz: end-to-end analytics",
        lead: "Two checks.",
        questions: [
          {
            id: "sa1",
            question: "Looker Studio without CRM…",
            options: [
              "Is already full end-to-end analytics",
              "Is a storefront; without deals it’s not ROMI",
              "Replaces UTM",
              "Is only needed for SEO",
            ],
            correct: 1,
            explain: "You need a join to revenue.",
          },
          {
            id: "sa2",
            question: "Managers don’t fill amounts in CRM…",
            options: [
              "Doesn’t affect reports",
              "Breaks ROMI — discipline first",
              "Is fixed only by BigQuery",
              "Is solved by one dashboard",
            ],
            correct: 1,
            explain: "Garbage in = garbage out.",
          },
        ],
      },
    ],
  },

  "prodvizhenie-prilozheniy": {
    checklist: {
      afterTitleIncludes: "From theory to practice and metrics",
      title: "Before scaling app campaigns",
      lead: "Retention beats cheap installs.",
      items: [
        { id: "event", label: "Success event locked" },
        { id: "tracker", label: "Tracker/MMP connected" },
        { id: "creative", label: "Creative tests ready (incl. vertical)" },
        { id: "segment", label: "Segments by category, not “everyone 18–45”" },
        { id: "deeplink", label: "Deep links to the target screen" },
        { id: "remark", label: "Event-based remarketing set up" },
        { id: "kpi", label: "We track CPI + retention D1/D7" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Deep links: a short path to action",
        title: "Mini quiz: app promotion",
        lead: "Two checks.",
        questions: [
          {
            id: "app1",
            question: "The main risk of cheap installs…",
            options: [
              "Low CTR",
              "Day-1 churn and empty LTV",
              "Trailer too long",
              "Extra UTM",
            ],
            correct: 1,
            explain: "Watch retention.",
          },
          {
            id: "app2",
            question: "A deep link is needed to…",
            options: [
              "Replace the store",
              "Land on the right screen after click/install",
              "Increase APK size",
              "Turn off remarketing",
            ],
            correct: 1,
            explain: "Short path to action.",
          },
        ],
      },
    ],
  },

  "glavnaya-internet-magazina": {
    checklist: {
      afterTitleIncludes: "Visuals: slider and showcase",
      title: "Online store homepage checklist",
      lead: "Before release or redesign.",
      items: [
        { id: "header", label: "Header: logo, search, cart, contact" },
        { id: "menu", label: "Menu leads to clear categories" },
        { id: "hero", label: "Showcase/slider without visual noise" },
        { id: "sku", label: "Showcase ≤ ~10 strong items" },
        { id: "text", label: "Copy short — no “story since 1990”" },
        { id: "trust", label: "Trust/reviews block present" },
        { id: "footer", label: "Footer with CTA and service links" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Footer as a second chance",
        title: "Mini quiz: store homepage",
        lead: "Two checks.",
        questions: [
          {
            id: "im1",
            question: "A long company bio on the first screen…",
            options: [
              "Is required for SEO",
              "Gets in the way — better a path to catalog and benefits",
              "Replaces the showcase",
              "Is needed instead of the footer",
            ],
            correct: 1,
            explain: "The homepage leads to purchase.",
          },
          {
            id: "im2",
            question: "The footer should…",
            options: [
              "Fully copy the header",
              "Give navigation, contacts, and a next step",
              "Contain only socials",
              "Be empty",
            ],
            correct: 1,
            explain: "A second chance for scrollers.",
          },
        ],
      },
    ],
  },

  "razmeshchenie-lendinga": {
    checklist: {
      afterTitleIncludes: "How to choose in practice",
      title: "Before choosing a landing URL",
      lead: "Offer and channel beat a “pretty” domain.",
      items: [
        { id: "offer", label: "Offer is close to the current site — or not" },
        { id: "channel", label: "Main channel: SEO / paid / test" },
        { id: "brand", label: "Whether isolation from the main brand is needed" },
        { id: "seo", label: "Organic needed with domain history" },
        { id: "risk", label: "Affiliate / contact-clone risk checked" },
        { id: "analytics", label: "Unified analytics and CRM thought through" },
        { id: "speed", label: "Speed and SSL on the chosen scheme" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Inside the main site",
        title: "Mini quiz: landing placement",
        lead: "Two checks.",
        questions: [
          {
            id: "lp1",
            question: "Close offer and a live site — usually better…",
            options: [
              "A new domain “for the keyword”",
              "A page on the main domain",
              "Ten subdomains at once",
              "Only a PDF with no URL",
            ],
            correct: 1,
            explain: "History and internal linking.",
          },
          {
            id: "lp2",
            question: "A separate domain is justified when…",
            options: [
              "You simply want another CMS",
              "New audience/topic or risk isolation",
              "You only need a footer",
              "Always, no exceptions",
            ],
            correct: 1,
            explain: "Isolation and a different product.",
          },
        ],
      },
    ],
  },

  "prognoz-trafika": {
    checklist: {
      afterTitleIncludes: "Step-by-step calculation",
      title: "Before an SEO traffic forecast",
      lead: "A model with assumptions — not a visit guarantee.",
      items: [
        { id: "core", label: "Core/clusters gathered from demand" },
        { id: "freq", label: "Frequency without double-counting duplicates" },
        { id: "season", label: "Seasonality at least qualitatively considered" },
        { id: "pos", label: "Position scenarios (cautious / base)" },
        { id: "ctr", label: "CTR by place — not 100% of demand" },
        { id: "comp", label: "Competition on priority phrases estimated" },
        { id: "horizon", label: "TOP 2–6 months separated from the potential figure" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "How to read the result",
        title: "Mini quiz: traffic forecast",
        lead: "Two checks.",
        questions: [
          {
            id: "pt1",
            question: "Summing frequencies of “buy X” and “X buy”…",
            options: [
              "Is correct — more potential",
              "Risks double-counting one demand pool",
              "Is required for Ads",
              "Is only needed for brand",
            ],
            correct: 1,
            explain: "Planners often merge them.",
          },
          {
            id: "pt2",
            question: "Potential forecast at TOP-3…",
            options: [
              "Equals a “TOP in a month” timeline",
              "Is not the same as time to gather positions — horizons differ",
              "Replaces semantics",
              "Guarantees visits in a contract",
            ],
            correct: 1,
            explain: "Potential ≠ TOP calendar.",
          },
        ],
      },
    ],
  },

  "metriki-reklamy": {
    checklist: {
      afterTitleIncludes: "Conversion: CPA, CPO, and CR",
      title: "Minimum ad metrics",
      lead: "From click to client economics.",
      items: [
        { id: "goal", label: "Campaign goal locked" },
        { id: "ctr", label: "CTR and CPC watched at the entrance" },
        { id: "bounce", label: "Bounce / visit quality on the landing" },
        { id: "cr", label: "CR and CPA/CPO calculated" },
        { id: "margin", label: "CPA checked against margin / allowed" },
        { id: "role", label: "Channel role (reach vs close) accounted for" },
        { id: "ltv", label: "View on average order value / LTV" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Money: average order value and LTV",
        title: "Mini quiz: ad metrics",
        lead: "Two checks.",
        questions: [
          {
            id: "mr1",
            question: "High CTR with zero leads…",
            options: [
              "Means ads definitely paid off",
              "Problem lower in the funnel or in the offer/landing",
              "Replaces CPA",
              "Is only needed for SEO",
            ],
            correct: 1,
            explain: "Clicks ≠ money.",
          },
          {
            id: "mr2",
            question: "LTV helps…",
            options: [
              "Replace CTR",
              "See acceptable CPA when repeat purchases are strong",
              "Turn off analytics",
              "Count impressions only",
            ],
            correct: 1,
            explain: "Client economics.",
          },
        ],
      },
    ],
  },

  "onlayn-obuchenie": {
    checklist: {
      afterTitleIncludes: "Pull people into creation and practice",
      title: "Before launching an online program",
      lead: "Process beats “yet another” platform.",
      items: [
        { id: "goal", label: "Training goal and success criteria" },
        { id: "adapt", label: "Materials adapted for the screen" },
        { id: "rhythm", label: "Activity change every 3–5 minutes" },
        { id: "speaker", label: "Speaker rehearsed" },
        { id: "practice", label: "Practice/assignments between live sessions" },
        { id: "feedback", label: "Feedback channel and a coordinator" },
        { id: "hybrid", label: "Decided where in-person contact is needed" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Feedback and a hybrid with in-person",
        title: "Mini quiz: online training",
        lead: "Two checks.",
        questions: [
          {
            id: "oo1",
            question: "Switching platform without a script…",
            options: [
              "Usually saves engagement",
              "Rarely helps — you need rhythm and practice",
              "Is required by law",
              "Replaces feedback",
            ],
            correct: 1,
            explain: "Content and process come first.",
          },
          {
            id: "oo2",
            question: "Dropping in-person meetings entirely…",
            options: [
              "Is always right",
              "Is often weaker than hybrid for energy and ties",
              "Is only needed for SEO",
              "Replaces assignments",
            ],
            correct: 1,
            explain: "Hybrid is often stronger.",
          },
        ],
      },
    ],
  },

  "marketingovaya-strategiya": {
    checklist: {
      afterTitleIncludes: "Schedule and measurement",
      title: "Before approving the marketing plan",
      lead: "Goal and KPIs beat a pile of channels.",
      items: [
        { id: "goal", label: "One main goal with a deadline" },
        { id: "kpi", label: "Success metrics locked" },
        { id: "base", label: "Baseline (conversions, budget, resources) counted" },
        { id: "audience", label: "Audience segments described" },
        { id: "channels", label: "1–2 priority channels chosen" },
        { id: "landing", label: "Landing matches the offer" },
        { id: "calendar", label: "Calendar and measurement points exist" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Content, landing, and brand",
        title: "Mini quiz: marketing strategy",
        lead: "Two checks.",
        questions: [
          {
            id: "ms1",
            question: "A “become better known” goal with no number…",
            options: [
              "Is enough for a plan",
              "Is too vague — need a metric and a deadline",
              "Replaces the audience",
              "Is only needed for SEO",
            ],
            correct: 1,
            explain: "SMART and measurability.",
          },
          {
            id: "ms2",
            question: "Better to turn on all channels at once…",
            options: [
              "Yes, always",
              "No — first strong 1–2 under the goal",
              "Offline only",
              "Without a landing",
            ],
            correct: 1,
            explain: "Focus, then scale.",
          },
        ],
      },
    ],
  },

  "tochki-rosta-sayta": {
    checklist: {
      afterTitleIncludes: "Additional traffic channels",
      title: "Diagnosis before growth points",
      lead: "Find the bottleneck, then the lever.",
      items: [
        { id: "base", label: "Baseline: traffic, CR, visibility locked" },
        { id: "bottleneck", label: "Bottleneck: demand / positions / conversion / channels" },
        { id: "semantics", label: "Uncovered core clusters checked" },
        { id: "cro", label: "Landings checked vs competitors and objections" },
        { id: "speed", label: "Speed and mobile on key URLs" },
        { id: "channels", label: "1–2 extra channels chosen — not “all at once”" },
        { id: "horizon", label: "SEO TOP 2–6 month horizon counted separately" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Behavior, content, and speed",
        title: "Mini quiz: growth points",
        lead: "Two checks.",
        questions: [
          {
            id: "tr1",
            question: "A growth plateau usually means…",
            options: [
              "A physical ceiling forever",
              "Uncovered clusters, CRO, or a narrow channel set",
              "That you only need an EV certificate",
              "That it’s time to fake engagement metrics",
            ],
            correct: 1,
            explain: "Find levers in the diagnosis.",
          },
          {
            id: "tr2",
            question: "Better to turn on every channel at once…",
            options: [
              "Yes",
              "No — 1–2 under the bottleneck with measurement",
              "Forums only",
              "Without landings",
            ],
            correct: 1,
            explain: "Focus and tracking.",
          },
        ],
      },
    ],
  },

  "formy-zahvata": {
    checklist: {
      afterTitleIncludes: "How to make the form usable",
      title: "Before launching a lead form",
      lead: "Value and process beat “yet another popup”.",
      items: [
        { id: "goal", label: "One form goal locked" },
        { id: "fields", label: "Minimum required fields" },
        { id: "consent", label: "Personal-data consent and policy link" },
        { id: "place", label: "Form doesn’t cover content without need" },
        { id: "thanks", label: "“Thanks” and reply horizon exist" },
        { id: "crm", label: "Leads go to CRM/email with an owner" },
        { id: "test", label: "Test lead arrives" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Scenarios by goal",
        title: "Mini quiz: capture forms",
        lead: "Two checks.",
        questions: [
          {
            id: "fz1",
            question: "An exit pop-up with no offer…",
            options: [
              "Always raises leads",
              "Often annoys and raises bounce",
              "Replaces personal-data consent",
              "Is only needed for SEO",
            ],
            correct: 1,
            explain: "Real value is required.",
          },
          {
            id: "fz2",
            question: "Fewer required fields…",
            options: [
              "Always hurt conversion",
              "Often raise conversion when the goal is clear",
              "Make the form illegal",
              "Mean no manager reply is needed",
            ],
            correct: 1,
            explain: "Minimum for the next step.",
          },
        ],
      },
    ],
  },

  "giperlokalnyy-targeting": {
    checklist: {
      afterTitleIncludes: "How to choose and launch",
      title: "Before a hyperlocal campaign",
      lead: "Geo and measurement beat “spy” hardware.",
      items: [
        { id: "point", label: "Point/zone set on the map" },
        { id: "offer", label: "“Why come here” offer ready" },
        { id: "segment", label: "Segment (live/work/visit) chosen" },
        { id: "measure", label: "Promo code/call tracking/UTM set" },
        { id: "privacy", label: "Audience sources lawful and within account rules" },
        { id: "landing", label: "Landing or offer for a local visit" },
        { id: "scale", label: "Plan B if the zone is too tight for impressions" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Offline signal collection: 2020s expectations",
        title: "Mini quiz: hyperlocal targeting",
        lead: "Two checks.",
        questions: [
          {
            id: "gl1",
            question: "A “MAC radar at a competitor only” strategy…",
            options: [
              "Is the best start in the 2020s",
              "Is risky and technically weaker than account geo",
              "Is required by law",
              "Replaces the offer",
            ],
            correct: 1,
            explain: "Privacy and MAC randomization.",
          },
          {
            id: "gl2",
            question: "A tight polygon with no impressions — what’s more logical?",
            options: [
              "Ignore and wait",
              "Widen the zone/strengthen creative — not gray ID collection",
              "Turn off measurement",
              "Blast the whole country",
            ],
            correct: 1,
            explain: "Reach and offer.",
          },
        ],
      },
    ],
  },

  "omnikanalnyy-kontent-marketing": {
    checklist: {
      afterTitleIncludes: "Five steps to coherent content",
      title: "Before omnichannel content",
      lead: "One path beats channel count.",
      items: [
        { id: "journey", label: "Client journey walked on phone and desktop" },
        { id: "gaps", label: "Offer/tone breaks logged" },
        { id: "source", label: "Source of truth for prices and terms exists" },
        { id: "segments", label: "Segments and their questions described" },
        { id: "channels", label: "Priority 2–3 channels chosen" },
        { id: "teams", label: "Marketing, sales, and support on one scenario" },
        { id: "measure", label: "Breaks between channels are measured" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Multichannel and omnichannel",
        title: "Mini quiz: omnichannel content",
        lead: "Two checks.",
        questions: [
          {
            id: "om1",
            question: "Omnichannel is first of all…",
            options: [
              "Maximum social networks",
              "A continuous client experience across channels",
              "A separate KPI per channel with no link",
              "An offline showcase only",
            ],
            correct: 1,
            explain: "The path through the client’s eyes.",
          },
          {
            id: "om2",
            question: "Best start for a small business?",
            options: [
              "Copy Disney one-to-one",
              "Walk your path and close breaks on key channels",
              "Turn off analytics",
              "Launch every platform at once",
            ],
            correct: 1,
            explain: "Touchpoint audit.",
          },
        ],
      },
    ],
  },

  "prodvizhenie-offlayn-biznesa": {
    checklist: {
      afterTitleIncludes: "Maps and directories",
      title: "Before promoting an offline point",
      lead: "NAP and measurement beat “radar”.",
      items: [
        { id: "nap", label: "NAP matches on site and maps" },
        { id: "photos", label: "Photos and hours are current" },
        { id: "reviews", label: "A review-reply process exists" },
        { id: "geo", label: "Geozone / “nearby” offer prepared" },
        { id: "measure", label: "Promo code/call tracking/UTM set" },
        { id: "privacy", label: "Audience collection is lawful — no MAC cult" },
        { id: "budget", label: "Channel test with a clear visit/call KPI" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "MAC and Wi‑Fi: 2020s expectations",
        title: "Mini quiz: offline promotion",
        lead: "Two checks.",
        questions: [
          {
            id: "of1",
            question: "Best start without a big budget?",
            options: [
              "MAC radar at a competitor only",
              "Map listings + reviews, then geo ads",
              "Fake five-star reviews",
              "Remove phones from the listing",
            ],
            correct: 1,
            explain: "NAP and reputation.",
          },
          {
            id: "of2",
            question: "A “Wi‑Fi/MAC radar only” strategy in the 2020s…",
            options: [
              "Is a reliable growth base",
              "Is weaker due to privacy and MAC randomization",
              "Is required by law",
              "Replaces maps",
            ],
            correct: 1,
            explain: "Not a strategy base.",
          },
        ],
      },
    ],
  },

  "uchastie-v-tenderah": {
    checklist: {
      afterTitleIncludes: "Documents and terms",
      title: "Before submitting a tender bid",
      lead: "Contract and economics beat excitement.",
      items: [
        { id: "docs", label: "Doc set and cases assembled" },
        { id: "contract", label: "Draft contract read before the bid" },
        { id: "margin", label: "Contract economics calculated with a buffer" },
        { id: "flags", label: "“Show tender” red flags checked" },
        { id: "platform", label: "Accreditation / e-signature on the platform ready" },
        { id: "capacity", label: "Team can meet SLA after a win" },
        { id: "cash", label: "Cash gap (pay later) accounted for" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "When it’s better not to join",
        title: "Mini quiz: tenders",
        lead: "Two checks.",
        questions: [
          {
            id: "tn1",
            question: "Deadline too short + holes in the brief…",
            options: [
              "Is an ideal tender",
              "Is a red flag — often worth walking away",
              "Guarantees a win",
              "Is a reason to dump into a loss",
            ],
            correct: 1,
            explain: "Risk of a fake / undeliverable procurement.",
          },
          {
            id: "tn2",
            question: "Winning at any cost with negative margin…",
            options: [
              "Always pays off in reputation",
              "Often leads to a loss-making contract",
              "Is required for beginners",
              "Replaces reading the contract",
            ],
            correct: 1,
            explain: "Count the economics.",
          },
        ],
      },
    ],
  },

  "korporativnoe-obuchenie": {
    checklist: {
      afterTitleIncludes: "System and goal",
      title: "Before launching training",
      lead: "Plan and voluntary buy-in beat an order.",
      items: [
        { id: "roles", label: "Roles and needed skills described" },
        { id: "plan", label: "Module learning plan ready" },
        { id: "goal", label: "Measurable “by module end” goal set" },
        { id: "expert", label: "Expert / mentor assigned" },
        { id: "practice", label: "Practice on live tasks planned" },
        { id: "track", label: "Link to career / grade clear to the employee" },
        { id: "format", label: "Format (online / in-person) chosen for the job" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Two conditions of the model",
        title: "Mini quiz: corporate training",
        lead: "Two checks.",
        questions: [
          {
            id: "ko1",
            question: "An order “from Monday everyone studies” with no plan…",
            options: [
              "Always delivers results",
              "Almost never works without a system and goal",
              "Replaces the expert",
              "Is only needed for SEO",
            ],
            correct: 1,
            explain: "You need a frame and motivation.",
          },
          {
            id: "ko2",
            question: "Mandatory course payment by the employee is…",
            options: [
              "The only law of adult learning",
              "One “stake” option — not dogma",
              "A substitute for a learning plan",
              "A reason to cancel practice",
            ],
            correct: 1,
            explain: "Engagement and resource matter.",
          },
        ],
      },
    ],
  },

  "korporativnyy-blog": {
    checklist: {
      afterTitleIncludes: "Plan, goals, and tasks",
      title: "Before launching a corporate blog",
      lead: "A business goal beats “like everyone else”.",
      items: [
        { id: "need", label: "Decided whether the niche needs a blog at all" },
        { id: "goal", label: "Measurable business goal locked" },
        { id: "audience", label: "Audience and tone described" },
        { id: "rubrics", label: "Rubrics and frequency set" },
        { id: "budget", label: "Production and distribution budget counted" },
        { id: "owner", label: "Result owner inside the company exists" },
        { id: "kpi", label: "KPIs for 3–6 months defined" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Why a blog — and which goals are false",
        title: "Mini quiz: corporate blog",
        lead: "Two checks.",
        questions: [
          {
            id: "kb1",
            question: "A goal “do it like a famous media brand” without your economics…",
            options: [
              "Is the best start",
              "Is a false cue with no link to the business",
              "Replaces KPIs",
              "Is only needed for wholesale",
            ],
            correct: 1,
            explain: "Your goal first.",
          },
          {
            id: "kb2",
            question: "A blog is truly needed when…",
            options: [
              "Every competitor has a feed",
              "The client has questions and compares, and content leads to a service",
              "The CEO wants a personal diary",
              "There is no website",
            ],
            correct: 1,
            explain: "Link to choice and sales.",
          },
        ],
      },
    ],
  },

  "performance-marketing": {
    checklist: {
      afterTitleIncludes: "What performance is",
      title: "Before a performance campaign",
      lead: "Goal and data beat the channel name.",
      items: [
        { id: "goal", label: "Business goal and KPIs locked in the brief" },
        { id: "track", label: "Lead/call/sale tracking works" },
        { id: "landing", label: "Landing and offer match the ad" },
        { id: "channels", label: "Channels chosen for funnel role" },
        { id: "economy", label: "CPA/ROAS threshold clear before scale" },
        { id: "report", label: "Business report format agreed" },
        { id: "owner", label: "Who owns the result is clear" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Performance and branding",
        title: "Mini quiz: performance marketing",
        lead: "Two checks.",
        questions: [
          {
            id: "pm1",
            question: "Performance is first of all about…",
            options: [
              "Pretty reach with no measurement",
              "A measurable action and economics",
              "An offline sign only",
              "Turning off analytics",
            ],
            correct: 1,
            explain: "Result and KPIs.",
          },
          {
            id: "pm2",
            question: "A cheap click with zero sales is…",
            options: [
              "A performance win",
              "Not a win: goal economics matter",
              "A brief substitute",
              "A reason to turn off tracking",
            ],
            correct: 1,
            explain: "Count the action and the money.",
          },
        ],
      },
    ],
  },

  "avtovoronka": {
    checklist: {
      afterTitleIncludes: "Key elements",
      title: "Before launching an auto-funnel",
      lead: "A step map beats “yet another bot”.",
      items: [
        { id: "map", label: "Current customer path drawn" },
        { id: "drops", label: "Breaks found in the data" },
        { id: "offer", label: "Offer and product matrix clear" },
        { id: "scripts", label: "Yes/no scenarios and human escalation ready" },
        { id: "track", label: "Step→step measurement set" },
        { id: "crm", label: "Contacts go into CRM/list" },
        { id: "test", label: "Before/after test plan locked" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Types by complexity",
        title: "Mini quiz: auto-funnel",
        lead: "Two checks.",
        questions: [
          {
            id: "av1",
            question: "A simple “ads → payment” funnel fits best…",
            options: [
              "Any multi-million B2B deal",
              "Hot demand and a relatively simple offer",
              "TV ads only",
              "Turning off analytics",
            ],
            correct: 1,
            explain: "Short cycle.",
          },
          {
            id: "av2",
            question: "Does automation fully replace the sales team?",
            options: [
              "Always yes",
              "No: it removes routine; complex deals often need people",
              "Only in SEO",
              "Only without CRM",
            ],
            correct: 1,
            explain: "Escalate to a human.",
          },
        ],
      },
    ],
  },

  "nayti-marketologa": {
    checklist: {
      afterTitleIncludes: "Money, KPIs, and the team",
      title: "Before hiring a marketer",
      lead: "A brief beats a loud resume.",
      items: [
        { id: "goal", label: "Goal and result horizon described" },
        { id: "budget", label: "Budget for work and media locked" },
        { id: "scope", label: "Ownership area (channels) clear" },
        { id: "kpi", label: "KPIs and “good lead” definition agreed" },
        { id: "format", label: "Format: agency / in-house / hybrid chosen" },
        { id: "cases", label: "Cases and candidate role checked" },
        { id: "report", label: "Reporting format agreed" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Agency: pros and cons",
        title: "Mini quiz: hiring a marketer",
        lead: "Two checks.",
        questions: [
          {
            id: "nm1",
            question: "Hiring a marketer with no clear brief…",
            options: [
              "Always drives growth",
              "Often leads to work into the void",
              "Replaces a brief",
              "Is only needed for SEO",
            ],
            correct: 1,
            explain: "Goal and KPIs first.",
          },
          {
            id: "nm2",
            question: "A “exactly 10,000 hours of experience” filter…",
            options: [
              "Is required by law",
              "Is a metaphor; cases and ownership matter more",
              "Replaces a paid test",
              "Guarantees ROI",
            ],
            correct: 1,
            explain: "Look at result and role.",
          },
        ],
      },
    ],
  },

  "zashchita-ot-parsinga": {
    checklist: {
      afterTitleIncludes: "Services and the legal layer",
      title: "Before anti-scraping protection",
      lead: "Limits and white robots beat captcha everywhere.",
      items: [
        { id: "logs", label: "Log anomaly monitoring exists" },
        { id: "rate", label: "Rate limit on catalog/API set" },
        { id: "white", label: "Search crawler allowlist accounted for" },
        { id: "honeypot", label: "Honeypot added on forms" },
        { id: "captcha", label: "Captcha/challenge only by risk" },
        { id: "ux", label: "UX checked for real users" },
        { id: "tos", label: "Auto-collection ban locked in site rules" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Honeypot, IP, and limits",
        title: "Mini quiz: scraping protection",
        lead: "Two checks.",
        questions: [
          {
            id: "zp1",
            question: "Blocking all bots wholesale…",
            options: [
              "Is best practice",
              "Is risky: search crawlers will suffer",
              "Replaces rate limit",
              "Is required by law",
            ],
            correct: 1,
            explain: "You need a white-robot allowlist.",
          },
          {
            id: "zp2",
            question: "Captcha on every page…",
            options: [
              "Is ideal for conversion",
              "Often hits UX; better a risk-based check",
              "Guarantees 100% protection",
              "Is only needed for SEO texts",
            ],
            correct: 1,
            explain: "Balance UX and protection.",
          },
        ],
      },
    ],
  },

  "bystrye-otvety-google": {
    checklist: {
      afterTitleIncludes: "How to format the answer on the page",
      title: "Before working toward a featured snippet",
      lead: "Question and short answer beat “zero magic”.",
      items: [
        { id: "queries", label: "Question long-tails gathered" },
        { id: "visibility", label: "Basic visibility on the topic exists" },
        { id: "h2", label: "Subheads worded as questions" },
        { id: "answer", label: "Short answer right under the question" },
        { id: "format", label: "List/table where the intent fits" },
        { id: "depth", label: "Useful depth below the answer" },
        { id: "monitor", label: "SERP and Search Console watched" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Which blocks exist",
        title: "Mini quiz: Google featured snippets",
        lead: "Two checks.",
        questions: [
          {
            id: "bo1",
            question: "A featured snippet and a regular title/description snippet…",
            options: [
              "Are the same thing",
              "Are different: an answer block vs a result line",
              "Are only about Yandex",
              "Are only about schema.org",
            ],
            correct: 1,
            explain: "Position zero ≠ meta description.",
          },
          {
            id: "bo2",
            question: "A guarantee of entering the block in a week…",
            options: [
              "Is always realistic",
              "No: the algorithm picks the fragment; the SERP changes",
              "Is given via FAQ JSON-LD",
              "Needs fake engagement metrics only",
            ],
            correct: 1,
            explain: "No guarantees.",
          },
        ],
      },
    ],
  },

  "potrebitelskiy-insayt": {
    checklist: {
      afterTitleIncludes: "Ways to search",
      title: "Before hunting for an insight",
      lead: "An “I want…, but…” conflict beats a pretty slogan.",
      items: [
        { id: "data", label: "CRM/analytics/reviews reviewed" },
        { id: "talk", label: "Surveys or interviews planned" },
        { id: "conflict", label: "Hypothesis worded as “I want…, but…”" },
        { id: "barrier", label: "Barrier the product removes is named" },
        { id: "sources", label: "2–3 external sources (forums/competitors) checked" },
        { id: "test", label: "Plan to test the hypothesis on creative/offer" },
        { id: "ethics", label: "No gray audience scraping" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What a consumer insight is",
        title: "Mini quiz: consumer insight",
        lead: "Two checks.",
        questions: [
          {
            id: "pi1",
            question: "A strong insight formula is closest to…",
            options: [
              "“Women 25–45”",
              "“I want…, but…”",
              "“We have a low price”",
              "“More likes”",
            ],
            correct: 1,
            explain: "Conflict of desire and barrier.",
          },
          {
            id: "pi2",
            question: "A multiple-choice survey…",
            options: [
              "Always gives a full insight",
              "Helps, but isn’t enough without behavior and depth",
              "Replaces CRM",
              "Is only needed for SEO",
            ],
            correct: 1,
            explain: "People answer incompletely.",
          },
        ],
      },
    ],
  },

  "prognoz-trafika-google-ads": {
    checklist: {
      afterTitleIncludes: "CTR, CPC, and budget",
      title: "Before an Ads forecast",
      lead: "Groups and assumptions beat one Planner figure.",
      items: [
        { id: "goal", label: "Campaign KPI/goal locked" },
        { id: "seeds", label: "Seed bases gathered one by one" },
        { id: "clean", label: "Top off-target high-volume cleaned" },
        { id: "groups", label: "Queries grouped by economics" },
        { id: "ctr", label: "CTR from fact/niche — not a “country average”" },
        { id: "cpc", label: "CPC with an impression-share assumption" },
        { id: "range", label: "Budget given as a range, not one guarantee" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Gathering and cleaning semantics",
        title: "Mini quiz: Ads traffic forecast",
        lead: "Two checks.",
        questions: [
          {
            id: "pg1",
            question: "An Ads forecast and an SEO traffic forecast…",
            options: [
              "Are the same model",
              "Differ: auction/bids vs organic positions",
              "Are only for Yandex",
              "Replace KPIs",
            ],
            correct: 1,
            explain: "Different assumptions.",
          },
          {
            id: "pg2",
            question: "A universal 15% CTR for the whole niche…",
            options: [
              "Is always accurate",
              "Is a weak assumption; better fact and calc by groups",
              "Is required in Keyword Planner",
              "Replaces semantics cleaning",
            ],
            correct: 1,
            explain: "Take fact by groups.",
          },
        ],
      },
    ],
  },

  "audit-reklamnoy-kampanii": {
    checklist: {
      afterTitleIncludes: "Technical stage",
      title: "Before an ad audit",
      lead: "Tech and goals first, then KPIs.",
      items: [
        { id: "brief", label: "Audit motive and client KPIs clear" },
        { id: "goals", label: "Conversions/goals in the account checked" },
        { id: "tech", label: "Geo, structure, negatives, landings reviewed" },
        { id: "period", label: "Period, seasonality, and conversion lag counted" },
        { id: "ops", label: "Optimization regularity assessed" },
        { id: "budget", label: "Budget split vs priorities unpacked" },
        { id: "deliver", label: "Short conclusion + detailed appendix ready" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Form of the result",
        title: "Mini quiz: ad campaign audit",
        lead: "Two checks.",
        questions: [
          {
            id: "ak1",
            question: "When tech is broken, first…",
            options: [
              "Count ROMI only",
              "Fix/rebuild the base — or KPIs count noise",
              "Turn off analytics",
              "Double the bids",
            ],
            correct: 1,
            explain: "Settings first.",
          },
          {
            id: "ak2",
            question: "The final audit for the client is better as…",
            options: [
              "Only a jargon wall",
              "A short conclusion and strategy + details in an appendix",
              "Screenshots with no conclusions",
              "An error list with no strengths",
            ],
            correct: 1,
            explain: "Clear delivery.",
          },
        ],
      },
    ],
  },

  "vrednye-sovety-rukovoditelyam": {
    checklist: {
      afterTitleIncludes: "Neglecting the strong",
      title: "Anti-checklist of a toxic manager",
      lead: "If you recognize yourself — do the opposite.",
      items: [
        { id: "critique", label: "On-merit critique allowed without shouting" },
        { id: "agenda", label: "Meetings only with agenda and a decision" },
        { id: "promises", label: "Your promises are written and kept" },
        { id: "no-gossip", label: "No gossip or pitting people against each other" },
        { id: "own-job", label: "Your duties aren’t dumped on the team" },
        { id: "retain", label: "Strong people are retained, not devalued" },
        { id: "feedback", label: "A direct channel for questions to the manager exists" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "“I’m always right” and the genius cult",
        title: "Mini quiz: bad advice for managers",
        lead: "Two checks.",
        questions: [
          {
            id: "vs1",
            question: "Killing a debate by shouting “you don’t trust me”…",
            options: [
              "Is a sign of a strong leader",
              "Is an antipattern: the team stops warning about risks",
              "Is a required agency ritual",
              "Replaces an agenda",
            ],
            correct: 1,
            explain: "Facts, not theater.",
          },
          {
            id: "vs2",
            question: "Constantly praising newcomers while devaluing proven people…",
            options: [
              "Is the best core motivation",
              "Often demotivates those who already deliver",
              "Replaces KPIs",
              "Is only needed in SEO",
            ],
            correct: 1,
            explain: "Retain the strong.",
          },
        ],
      },
    ],
  },

  promoaktsii: {
    checklist: {
      afterTitleIncludes: "How to launch without damage",
      title: "Before launching a promo",
      lead: "Goal and margin beat the size of the discount.",
      items: [
        { id: "goal", label: "Promo goal (volume / new / base) is clear" },
        { id: "margin", label: "Economics after discount/gift calculated" },
        { id: "rules", label: "Rules and dates published for the customer" },
        { id: "pdn", label: "Personal-data consent when collecting contacts" },
        { id: "channel", label: "Channel and promo code / UTM ready to measure" },
        { id: "mix", label: "Mechanic is not only “eternal −50%”" },
        { id: "legal", label: "Giveaway formalized per platform / law" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Popular mechanics",
        title: "Mini quiz: promotions",
        lead: "Two checks.",
        questions: [
          {
            id: "pr1",
            question: "A constant deep price dump…",
            options: [
              "Always grows LTV",
              "Trains people to wait for a sale and eats margin",
              "Replaces loyalty",
              "Is only for B2B",
            ],
            correct: 1,
            explain: "Rotate mechanics.",
          },
          {
            id: "pr2",
            question: "Before a prize giveaway it’s important to…",
            options: [
              "Hide the rules",
              "Publish terms, dates, and how the winner is chosen",
              "Ask for max personal data with no consent",
              "Promise a prize without fulfilling",
            ],
            correct: 1,
            explain: "Honesty and the law.",
          },
        ],
      },
    ],
  },

  "kartochka-tovara": {
    checklist: {
      afterTitleIncludes: "What must be on the page",
      title: "Before publishing a product page",
      lead: "Media and CTA beat a “pretty template”.",
      items: [
        { id: "title", label: "Full name and key attributes are clear" },
        { id: "media", label: "Several angles / variants / zoom" },
        { id: "price", label: "Price visible next to CTA" },
        { id: "buy", label: "Buy button readable on mobile" },
        { id: "specs", label: "Specs and delivery terms filled in" },
        { id: "copy", label: "Description removes main objections" },
        { id: "reviews", label: "Reviews are real — or the block is honestly absent" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Photos and video",
        title: "Mini quiz: product page",
        lead: "Two checks.",
        questions: [
          {
            id: "kt1",
            question: "Hiding the price “for intrigue” in regular e-com…",
            options: [
              "Always raises CR",
              "Often raises bounce",
              "Replaces photos",
              "Is only needed for SEO",
            ],
            correct: 1,
            explain: "Price next to CTA.",
          },
          {
            id: "kt2",
            question: "Product description and the full product page…",
            options: [
              "Are the same thing",
              "Description is copy; the page is media, CTA, and the rest",
              "Are only for landing pages",
              "Replace categories",
            ],
            correct: 1,
            explain: "Different focus.",
          },
        ],
      },
    ],
  },

  "vygoranie-sotrudnikov": {
    checklist: {
      afterTitleIncludes: "Stress, breaks, focus",
      title: "Before burnout prevention",
      lead: "Load and clarity beat team-building.",
      items: [
        { id: "load", label: "Real load and crunch reviewed" },
        { id: "goals", label: "Tasks clear: what and why" },
        { id: "feedback", label: "Regular feedback and recognition exist" },
        { id: "breaks", label: "Breaks and off-shift boundaries protected" },
        { id: "multitask", label: "Extra multitasking removed" },
        { id: "growth", label: "A growth track exists, not only routine" },
        { id: "humor", label: "Humor without toxic topics" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Trust and meaning at work",
        title: "Mini quiz: employee burnout",
        lead: "Two checks.",
        questions: [
          {
            id: "vg1",
            question: "Burnout differs from tiredness in that it…",
            options: [
              "Always goes away after one weekend",
              "Lasts and isn’t fixed by ordinary rest",
              "Is cured only with memes",
              "Only happens to freelancers",
            ],
            correct: 1,
            explain: "Chronic exhaustion.",
          },
          {
            id: "vg2",
            question: "Meditation instead of fixing overload…",
            options: [
              "Is the full company strategy",
              "Doesn’t replace org measures and a realistic plan",
              "Is required by labor law",
              "Replaces pay",
            ],
            correct: 1,
            explain: "Add-on, not a substitute.",
          },
        ],
      },
    ],
  },

  "kpi-menedzhera-prodazh": {
    checklist: {
      afterTitleIncludes: "Example schemes and metrics",
      title: "Before rolling out seller KPIs",
      lead: "Few metrics and a link to margin.",
      items: [
        { id: "profit", label: "Bonus doesn’t eat company profit" },
        { id: "few", label: "No more than a sensible KPI count (guide ≤10–15)" },
        { id: "crm", label: "Deals and statuses visible in CRM" },
        { id: "result", label: "Main focus on deals/margin, not only calls" },
        { id: "ceiling", label: "No demotivating salary ceiling without reason" },
        { id: "abuse", label: "Protection from fake clients and empty promises" },
        { id: "review", label: "Missed-plan review process described" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "How the system breaks — and how to control",
        title: "Mini quiz: sales manager KPIs",
        lead: "Two checks.",
        questions: [
          {
            id: "kp1",
            question: "The main seller KPI criterion is closer to…",
            options: [
              "Emails per day",
              "Deal results and economics",
              "Resume length",
              "Number of meetings",
            ],
            correct: 1,
            explain: "Result, not only activity.",
          },
          {
            id: "kp2",
            question: "A sharp unjustified plan hike…",
            options: [
              "Always grows revenue",
              "Often drops results and pushes people to leave",
              "Replaces CRM",
              "Is needed every month",
            ],
            correct: 1,
            explain: "Lean on history and the market.",
          },
        ],
      },
    ],
  },

  "akkaunt-menedzher": {
    checklist: {
      afterTitleIncludes: "Core responsibilities",
      title: "Account manager checklist",
      lead: "Before starting account care.",
      items: [
        { id: "goals", label: "Client goals locked in the brief" },
        { id: "plan", label: "Work plan agreed with the team" },
        { id: "report", label: "Client knows how to read reports" },
        { id: "money", label: "Payments and deadlines under control" },
        { id: "claims", label: "Complaint-handling process exists" },
        { id: "cadence", label: "Regular calls/status updates scheduled" },
        { id: "upsale", label: "Upsell only from a real need" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What people usually underestimate",
        title: "Mini quiz: account vs sales",
        lead: "Two checks.",
        questions: [
          {
            id: "am1",
            question: "An account manager primarily…",
            options: [
              "Cold-calls from zero",
              "Runs an existing client",
              "Only writes site code",
              "Replaces accounting",
            ],
            correct: 1,
            explain: "After the first deal — relationship and account growth.",
          },
          {
            id: "am2",
            question: "The difference from a project manager is closer to…",
            options: [
              "Account = deploy only",
              "PM — deadlines/team; account — client and growing the partnership",
              "They’re always the same",
              "PM never talks to people",
            ],
            correct: 1,
            explain: "In small teams roles blend, but focus differs.",
          },
        ],
      },
    ],
  },

  "oshibki-internet-magazina": {
    checklist: {
      afterTitleIncludes: "Duplicates and catalog mess",
      title: "Hidden store-mistakes checklist",
      lead: "Walk through before an SEO push.",
      items: [
        { id: "pag", label: "Category text not cloned on page=2…n" },
        { id: "cat", label: "Category page 1 shows products from the name" },
        { id: "price", label: "Price filter is usable (steps, not “space”)" },
        { id: "photo", label: "Product photos readable, several angles" },
        { id: "region", label: "Region doesn’t block first screen without need" },
        { id: "popup", label: "No pop-up queue before product choice" },
        { id: "filt", label: "Junk filters not in the index" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Filters, photos, and the first screen",
        title: "Mini quiz: store mistakes",
        lead: "Two checks.",
        questions: [
          {
            id: "im1",
            question: "“Cheapest first” sort in a mixed category often…",
            options: [
              "Always helps SEO",
              "Pushes spare parts instead of the core product",
              "Replaces semantics",
              "Removes duplicates automatically",
            ],
            correct: 1,
            explain: "First screen should show products from the section name.",
          },
          {
            id: "im2",
            question: "A region pop-up on entry is OK if…",
            options: [
              "It’s “just how it’s done”",
              "Price, delivery, or pickup points depend on region",
              "You need more clicks",
              "There’s no mobile layout",
            ],
            correct: 1,
            explain: "Otherwise it only hurts first contact.",
          },
        ],
      },
    ],
  },

  "effektivnost-videoreklamy": {
    checklist: {
      afterTitleIncludes: "Media metrics: delivery and attention",
      title: "Video evaluation panel",
      lead: "Before calling it “worked / didn’t”.",
      items: [
        { id: "goal", label: "Creative goal locked (brand / performance)" },
        { id: "view", label: "Watch viewability and completions, not clicks only" },
        { id: "freq", label: "Impression frequency capped" },
        { id: "brand", label: "Brand appears early in the creative" },
        { id: "track", label: "Conversions / promo codes / UTM set up" },
        { id: "assoc", label: "Assisted paths counted — not only last-click" },
        { id: "fresh", label: "Brand Lift / survey thresholds checked with the platform" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Business metrics: sales contribution",
        title: "Mini quiz: video metrics",
        lead: "Two checks.",
        questions: [
          {
            id: "vid1",
            question: "A high VTR by itself…",
            options: [
              "Proves sales growth",
              "Shows completion, but doesn’t replace brand and business metrics",
              "Replaces viewability",
              "Is only for banners",
            ],
            correct: 1,
            explain: "Completion ≠ purchase and ≠ brand recall.",
          },
          {
            id: "vid2",
            question: "A promo code in the creative is useful to…",
            options: [
              "Raise CTR only",
              "See direct sales from the spot",
              "Replace conversion tracking forever",
              "Turn off analytics",
            ],
            correct: 1,
            explain: "A simple way to link the ad to orders.",
          },
        ],
      },
    ],
  },

  "broshennaya-korzina": {
    checklist: {
      afterTitleIncludes: "Registration, trust, and payment",
      title: "Anti–abandoned-cart checklist",
      lead: "Before digging into the funnel.",
      items: [
        { id: "guest", label: "Guest checkout or a field minimum exists" },
        { id: "trust", label: "Contacts, returns, HTTPS visible" },
        { id: "pay", label: "Enough payment methods for the niche" },
        { id: "ship", label: "Shipping price and timing visible before the end" },
        { id: "bugs", label: "Cart removes items and recalculates correctly" },
        { id: "mobile", label: "Checkout is usable on mobile" },
        { id: "recover", label: "Recovery only with communication consent" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "UX, cart bugs, and hidden surprises",
        title: "Mini quiz: abandoned cart",
        lead: "Two checks.",
        questions: [
          {
            id: "bk1",
            question: "Hidden shipping on the last step more often…",
            options: [
              "Raises trust",
              "Triggers purchase drop-off",
              "Replaces SEO",
              "Is always needed",
            ],
            correct: 1,
            explain: "A price surprise is classic abandonment.",
          },
          {
            id: "bk2",
            question: "The goal for abandoned carts is…",
            options: [
              "Drive abandonment to zero",
              "Remove extra friction and recover some customers",
              "Turn off funnel analytics",
              "Remove all payment methods",
            ],
            correct: 1,
            explain: "Zero abandonment is unrealistic and unnecessary.",
          },
        ],
      },
    ],
  },

  "kommercheskoe-predlozhenie": {
    checklist: {
      afterTitleIncludes: "A structure that works",
      title: "Before sending a proposal",
      lead: "A short quality check.",
      items: [
        { id: "temp", label: "Proposal type matches audience temperature" },
        { id: "benefit", label: "Reader benefit in the first lines" },
        { id: "price", label: "Price or range with reasoning" },
        { id: "spam", label: "No spam clichés in subject or body" },
        { id: "cta", label: "One clear next step" },
        { id: "contacts", label: "Contacts and company signature in place" },
        { id: "legal", label: "Send channel is lawful (not a bought list)" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "How to write so they finish reading",
        title: "Mini quiz: commercial proposal",
        lead: "Two checks.",
        questions: [
          {
            id: "kp1",
            question: "A hot proposal primarily…",
            options: [
              "A template for a thousand addresses",
              "Locks terms after talks",
              "Always replaces a contract",
              "Contains no price",
            ],
            correct: 1,
            explain: "Personal: timing, scope, price, next step.",
          },
          {
            id: "kp2",
            question: "Phrases like “today only / guaranteed win”…",
            options: [
              "Always raise conversion",
              "Risk spam filters and lower trust",
              "Are required in cold proposals",
              "Replace a USP",
            ],
            correct: 1,
            explain: "Better facts and a clear benefit.",
          },
        ],
      },
    ],
  },

  "trafik-bez-lidov": {
    checklist: {
      afterTitleIncludes: "Offer: simplicity and patterns",
      title: "If there’s traffic but no leads",
      lead: "Before pouring more budget.",
      items: [
        { id: "offer", label: "First screen has product + benefit" },
        { id: "match", label: "Promise matches the ad/query" },
        { id: "benefit", label: "Features translated via “so what for me?”" },
        { id: "cta", label: "Clear CTA and a working form" },
        { id: "aud", label: "Audience and price checked against demand" },
        { id: "tech", label: "Form and mobile layout don’t break" },
        { id: "measure", label: "Conversion is measured in analytics" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Benefit, audience, and call to action",
        title: "Mini quiz: traffic without leads",
        lead: "Two checks.",
        questions: [
          {
            id: "tl1",
            question: "Rising visits with zero leads most often means…",
            options: [
              "You only need to buy more traffic",
              "Weak offer, benefit, or CTA on the page",
              "SEO never works again",
              "You should remove all forms",
            ],
            correct: 1,
            explain: "Pitch meaning and call to action first.",
          },
          {
            id: "tl2",
            question: "The “so what for me?” move is needed to…",
            options: [
              "Add more keywords to the copy",
              "Push a feature to a clear benefit",
              "Replace analytics",
              "Remove price from the site",
            ],
            correct: 1,
            explain: "From feature to client outcome.",
          },
        ],
      },
    ],
  },

  "elektronnaya-kniga": {
    checklist: {
      afterTitleIncludes: "Two ways to make the book",
      title: "Before publishing an ebook",
      lead: "A short check.",
      items: [
        { id: "theme", label: "One theme and a promise to the reader" },
        { id: "toc", label: "Contents and current facts" },
        { id: "format", label: "Format chosen (usually PDF to start)" },
        { id: "license", label: "Images with own/clear license" },
        { id: "page", label: "Landing or a way to download exists" },
        { id: "consent", label: "If collecting contacts — personal-data consent" },
        { id: "dist", label: "Distribution plan (blog, email, partners)" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "How to distribute",
        title: "Mini quiz: ebook",
        lead: "Two checks.",
        questions: [
          {
            id: "eb1",
            question: "For a first working book it’s usually enough to…",
            options: [
              "Only ePub with complex formulas",
              "PDF from an editor or builder",
              "A print shop with no file",
              "Buy someone else’s stock text",
            ],
            correct: 1,
            explain: "PDF is easier to start.",
          },
          {
            id: "eb2",
            question: "An ebook as a lead magnet needs…",
            options: [
              "Hidden file value",
              "Clear value and consent to contact",
              "Mandatory designer payment",
              "Download analytics turned off",
            ],
            correct: 1,
            explain: "Value + lawful contact collection.",
          },
        ],
      },
    ],
  },

  roas: {
    checklist: {
      afterTitleIncludes: "Formula and difference from ROI",
      title: "Before calculating ROAS",
      lead: "So the number doesn’t lie.",
      items: [
        { id: "rev", label: "Revenue attributed with the chosen model" },
        { id: "cost", label: "Spend includes media and needed production" },
        { id: "margin", label: "Acceptable ROAS derived from margin" },
        { id: "goal", label: "Campaign goal: reach vs revenue — separated" },
        { id: "b2b", label: "In B2B there is a link to the CRM deal" },
        { id: "compare", label: "Campaigns compared on money, not only CTR" },
        { id: "romi", label: "ROI/ROMI watched next to ROAS" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Comparing campaigns and B2B",
        title: "Mini quiz: ROAS",
        lead: "Two checks.",
        questions: [
          {
            id: "ro1",
            question: "ROAS 4:1 on spend of 20,000 usually means…",
            options: [
              "Net profit of 80,000",
              "About 80,000 revenue on that spend",
              "CTR = 4%",
              "ROMI is always 400%",
            ],
            correct: 1,
            explain: "Turnover per ad unit — not net profit.",
          },
          {
            id: "ro2",
            question: "In B2B without end-to-end analytics ROAS often…",
            options: [
              "Is exact to the cent",
              "Lies because the deal sits outside the ad account",
              "Is never needed",
              "Replaces CRM",
            ],
            correct: 1,
            explain: "You need lead → payment stitching.",
          },
        ],
      },
    ],
  },

  "ustarevshiy-sayt": {
    checklist: {
      afterTitleIncludes: "Structure, mobile, and features",
      title: "“Is the site outdated?” checklist",
      lead: "Before budgeting a redesign.",
      items: [
        { id: "ia", label: "Nav lets people find a section in reasonable time" },
        { id: "mobile", label: "Usable on phone (not a shrunk desktop)" },
        { id: "speed", label: "Pages load acceptably on mobile" },
        { id: "flash", label: "No Flash or dead plugins" },
        { id: "seo", label: "No walls of text for keyword density" },
        { id: "brand", label: "Design matches current identity" },
        { id: "func", label: "Features that actually help the deal exist" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Tech debt: Flash and speed",
        title: "Mini quiz: outdated website",
        lead: "Two checks.",
        questions: [
          {
            id: "us1",
            question: "Flash on a site today…",
            options: [
              "Is required for SEO",
              "Is tech debt: doesn’t work in modern browsers",
              "Speeds up mobile load",
              "Replaces responsive design",
            ],
            correct: 1,
            explain: "Move to HTML/video.",
          },
          {
            id: "us2",
            question: "A redesign by itself…",
            options: [
              "Guarantees TOP-10 in a week",
              "Doesn’t guarantee ranking growth without tech and content",
              "Removes the need for responsive",
              "Replaces analytics",
            ],
            correct: 1,
            explain: "UX/speed/URLs first; positions take months.",
          },
        ],
      },
    ],
  },

  "kognitivnye-iskazheniya": {
    checklist: {
      afterTitleIncludes: "Familiarity and loss aversion",
      title: "Ethical choice-psychology checklist",
      lead: "Before rolling out tactics.",
      items: [
        { id: "familiar", label: "Repeat touches with a frequency cap" },
        { id: "loss", label: "Deadlines and timers only for a real promo" },
        { id: "trial", label: "Trial without a hidden subscription" },
        { id: "tiers", label: "Price tiers honest — not decorative extremes" },
        { id: "frame", label: "Framing doesn’t distort facts" },
        { id: "ikea", label: "Involvement in setup is meaningful" },
        { id: "trust", label: "Contacts, returns, and security in place" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Compromise, framing, and involvement",
        title: "Mini quiz: cognitive biases",
        lead: "Two checks.",
        questions: [
          {
            id: "ki1",
            question: "A forever fake countdown…",
            options: [
              "Always raises LTV",
              "Is a dark pattern that hits trust",
              "Is required for SEO",
              "Replaces a USP",
            ],
            correct: 1,
            explain: "Urgency only if the promo is real.",
          },
          {
            id: "ki2",
            question: "The compromise effect shows most when…",
            options: [
              "One product is shown with no price",
              "There are three packages and the middle looks “sensible”",
              "Analytics is off",
              "There’s no mobile layout",
            ],
            correct: 1,
            explain: "The middle option is often chosen more.",
          },
        ],
      },
    ],
  },

  "monitoring-pozitsiy": {
    checklist: {
      afterTitleIncludes: "When rankings fit as a KPI",
      title: "Before worshipping TOP in the report",
      lead: "Check against the business model.",
      items: [
        { id: "money", label: "KPIs exist for leads/sales/ROMI" },
        { id: "core", label: "Query core for tracking is locked" },
        { id: "mobile", label: "Mobile cut is tracked — not desktop only" },
        { id: "trend", label: "Weekly trends watched — not one day" },
        { id: "when", label: "Clear why TOP matters for this project type" },
        { id: "ppc", label: "Paid search covers cash while SEO grows" },
        { id: "time", label: "No TOP-by-date promises without caveats" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "How to judge results",
        title: "Mini quiz: rank monitoring",
        lead: "Two checks.",
        questions: [
          {
            id: "mp1",
            question: "A TOP-3 rank with zero leads…",
            options: [
              "Is always SEO success",
              "Is a reason to check offer, landing, and traffic quality",
              "Means ROMI is maxed",
              "Cancels a technical audit",
            ],
            correct: 1,
            explain: "Ranks without money aren’t a win.",
          },
          {
            id: "mp2",
            question: "Core into TOP is planned…",
            options: [
              "Guaranteed a week after the contract",
              "Often 2–6 months after work starts",
              "Independent of site prep",
              "Equal to launching paid search",
            ],
            correct: 1,
            explain: "Prep and rank growth are different stages.",
          },
        ],
      },
    ],
  },

  "cheklist-sayta": {
    checklist: {
      afterTitleIncludes: "Tech and navigation",
      title: "Base before launch",
      lead: "Not all “50 items” at once.",
      items: [
        { id: "speed", label: "Mobile speed is acceptable" },
        { id: "https", label: "HTTPS is on" },
        { id: "adaptive", label: "Responsive is usable on phone" },
        { id: "contacts", label: "Phone/form in view" },
        { id: "offer", label: "Home offer is clear" },
        { id: "privacy", label: "Privacy policy when collecting data" },
        { id: "cta", label: "One clear call to action" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Content and conversion",
        title: "Mini quiz: website checklist",
        lead: "Two checks.",
        questions: [
          {
            id: "cs1",
            question: "Usually close first…",
            options: [
              "A calendar of every event for the year",
              "The path “offer → contact” and mobile UX",
              "As many social widgets as possible",
              "Only a blog with no contacts",
            ],
            correct: 1,
            explain: "Lead path and usability first.",
          },
          {
            id: "cs2",
            question: "The line “without item N the site is doomed”…",
            options: [
              "Is an exact engineering norm",
              "Is hyperbole; prioritization matters",
              "Replaces an audit",
              "Cancels HTTPS",
            ],
            correct: 1,
            explain: "A checklist is a tool, not a verdict.",
          },
        ],
      },
    ],
  },

  "intent-sotsialnye-prodazhi": {
    checklist: {
      afterTitleIncludes: "Three levels of intent",
      title: "Before replying to intent",
      lead: "Ethical minimum.",
      items: [
        { id: "type", label: "Intent type clear (want / comparing / buy)" },
        { id: "speed", label: "Hot signals get a fast reply per SLA" },
        { id: "crm", label: "Lead lands in CRM without duplicates" },
        { id: "spam", label: "No hard offer on first contact" },
        { id: "rules", label: "Reply follows platform rules" },
        { id: "legal", label: "Channel is lawful for your audience" },
        { id: "seo", label: "Not confused with SEO user intent" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "How to set up the work",
        title: "Mini quiz: intent in social",
        lead: "Two checks.",
        questions: [
          {
            id: "is1",
            question: "Social intent and SEO user intent…",
            options: [
              "Are the same thing",
              "Differ: post/comment vs search-query intent",
              "Are both only about Title",
              "Are both banned",
            ],
            correct: 1,
            explain: "Different channels and jobs.",
          },
          {
            id: "is2",
            question: "On “just want” with no budget it’s better to…",
            options: [
              "Drop a hard price list in DM immediately",
              "Not push a sale — note the topic",
              "Ignore every signal forever",
              "Promise TOP-10",
            ],
            correct: 1,
            explain: "Cold wishes rarely convert at once.",
          },
        ],
      },
    ],
  },

  "yuzabiliti-internet-magazina": {
    checklist: {
      afterTitleIncludes: "Entering the catalog: forms, search, mobile",
      title: "Store UX checklist",
      lead: "Before raising ad spend.",
      items: [
        { id: "search", label: "Working catalog search exists" },
        { id: "mobile", label: "Checkout is usable on smartphone" },
        { id: "guest", label: "Can buy without long registration" },
        { id: "stock", label: "Stock visible on the product page" },
        { id: "cart", label: "Cart doesn’t empty without reason" },
        { id: "total", label: "Total with shipping/fees recalculates" },
        { id: "email", label: "Order is duplicated by email" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Payment and order finish",
        title: "Mini quiz: store usability",
        lead: "Two checks.",
        questions: [
          {
            id: "yi1",
            question: "Hidden shipping on the last step more often…",
            options: [
              "Raises trust",
              "Triggers purchase drop-off",
              "Replaces search",
              "Is needed for SEO",
            ],
            correct: 1,
            explain: "Transparent total earlier — less abandonment.",
          },
          {
            id: "yi2",
            question: "A mobile app…",
            options: [
              "Is required instead of a responsive site",
              "Isn’t required: first a usable responsive site",
              "Cancels the cart",
              "Guarantees ROMI",
            ],
            correct: 1,
            explain: "An app is by model — not a must-have.",
          },
        ],
      },
    ],
  },

  "google-assessory": {
    checklist: {
      afterTitleIncludes: "Why raters exist and what they look at",
      title: "Quality checklist under QRG",
      lead: "Before “optimizing for a rater”.",
      items: [
        { id: "purpose", label: "Page purpose clear from the first screen" },
        { id: "eeat", label: "Expert topics show author/editors" },
        { id: "ymyl", label: "YMYL topics backed by qualification" },
        { id: "match", label: "Headline matches the content" },
        { id: "ads", label: "Ads don’t cover the main content" },
        { id: "trust", label: "Contacts and policies aren’t fake" },
        { id: "myth", label: "No expectation that a rater hands you TOP" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What tanks the score",
        title: "Mini quiz: Google raters",
        lead: "Two checks.",
        questions: [
          {
            id: "ga1",
            question: "A rater score…",
            options: [
              "Directly puts a URL in TOP-1",
              "Helps improve algorithms — doesn’t rank by hand",
              "Replaces a technical audit",
              "Is only for Yandex",
            ],
            correct: 1,
            explain: "The link to ranking is indirect.",
          },
          {
            id: "ga2",
            question: "YMYL topics require…",
            options: [
              "Only more keywords",
              "Higher expertise and source trust",
              "Turning HTTPS off",
              "Behavioral gaming",
            ],
            correct: 1,
            explain: "Mistakes hit money/health/safety.",
          },
        ],
      },
    ],
  },

  "povedencheskie-faktory": {
    checklist: {
      afterTitleIncludes: "On-site UX: structure, mobile, speed",
      title: "Lawful behavioral checklist",
      lead: "Without gaming services.",
      items: [
        { id: "mobile", label: "Key path is usable on smartphone" },
        { id: "speed", label: "Speed doesn’t kill the first screen" },
        { id: "nav", label: "Needed items found in a reasonable click count" },
        { id: "content", label: "Copy is structured — not a wall of text" },
        { id: "snippet", label: "Title/description match the page" },
        { id: "tech", label: "No mass 404s or broken forms" },
        { id: "nocheat", label: "Behavioral gaming excluded" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Snippet, tech, and relevance",
        title: "Mini quiz: behavioral signals",
        lead: "Two checks.",
        questions: [
          {
            id: "pf1",
            question: "Gaming behavioral signals…",
            options: [
              "Is a recommended path to TOP",
              "Risks filters; work on UX",
              "Is required for e-com",
              "Replaces the snippet",
            ],
            correct: 1,
            explain: "Only lawful experience improvements.",
          },
          {
            id: "pf2",
            question: "High snippet CTR with a useless page…",
            options: [
              "Guarantees ranking growth forever",
              "Often means return to the SERP and a weak result",
              "Cancels responsive design",
              "Is only for banners",
            ],
            correct: 1,
            explain: "A click without value doesn’t hold.",
          },
        ],
      },
    ],
  },

  "oshibki-reklamnoy-kampanii": {
    checklist: {
      afterTitleIncludes: "Demand, competitors, and budget",
      title: "Before scaling paid search",
      lead: "Typical launch fails.",
      items: [
        { id: "demand", label: "Real search demand exists (or another channel chosen)" },
        { id: "comp", label: "Competitor ads and offers reviewed" },
        { id: "budget", label: "Daily cap and test KPI are realistic" },
        { id: "keys", label: "Semantics not dumped in one pile without negatives" },
        { id: "match", label: "Query → ad → landing aligned" },
        { id: "geo", label: "Geo matches the service area" },
        { id: "split", label: "Search and Display split by campaign" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Management, extensions, and strategies",
        title: "Mini quiz: campaign mistakes",
        lead: "Two checks.",
        questions: [
          {
            id: "rk1",
            question: "Paid search for a product with no search demand…",
            options: [
              "Is always the best start",
              "Is often a waste; use other warm-up channels",
              "Replaces the landing",
              "Cancels limits",
            ],
            correct: 1,
            explain: "Demand first — or reach formats.",
          },
          {
            id: "rk2",
            question: "Search and Display under one settings strategy…",
            options: [
              "Is always optimal",
              "Usually hurts optimization — better to split",
              "Is required by law",
              "Replaces analytics",
            ],
            correct: 1,
            explain: "Different creatives, bids, and KPIs.",
          },
        ],
      },
    ],
  },

  "pered-zapuskom-sayta": {
    checklist: {
      afterTitleIncludes: "Indexation, server responses, and speed",
      title: "Tech checklist before open",
      lead: "Critical items before ads.",
      items: [
        { id: "codes", label: "Key URLs return 200 — no mass 5xx" },
        { id: "robots", label: "robots/sitemap don’t cut needed sections" },
        { id: "https", label: "HTTPS without mixed content" },
        { id: "mobile", label: "Responsive checked on a real phone" },
        { id: "meta", label: "Titles unique on money pages" },
        { id: "analytics", label: "Counters/GTM and webmaster tools connected" },
        { id: "amp", label: "AMP not treated as a mandatory must-have" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Content, markup, and resilience",
        title: "Mini quiz: before launch",
        lead: "Two checks.",
        questions: [
          {
            id: "pz1",
            question: "AMP before releasing a commercial site…",
            options: [
              "Is always required",
              "Usually isn’t; responsive and speed matter more",
              "Replaces HTTPS",
              "Is only for the cart",
            ],
            correct: 1,
            explain: "UX and tech base first.",
          },
          {
            id: "pz2",
            question: "A wrong Disallow in robots.txt…",
            options: [
              "Speeds up indexation",
              "Can block important sections from the index",
              "Replaces the sitemap",
              "Is needed on every page",
            ],
            correct: 1,
            explain: "Check directives before launch.",
          },
        ],
      },
    ],
  },

  "problemnye-klienty": {
    checklist: {
      afterTitleIncludes: "Unsure, know-it-all, aggressive, impulsive",
      title: "Before a hard dialogue",
      lead: "A frame without escalation.",
      items: [
        { id: "listen", label: "Listened and restated the problem in your words" },
        { id: "fact", label: "Gave a fact: timing, price, stock" },
        { id: "steps", label: "Offered 1–2 clear next steps" },
        { id: "crm", label: "Locked the agreement in chat/CRM" },
        { id: "stop", label: "Stop line exists for insults/threats" },
        { id: "alt", label: "Honest alternative if “out of stock”" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Thrifty, demanding, pessimist",
        title: "Mini quiz: difficult clients",
        lead: "Two checks.",
        questions: [
          {
            id: "pk1",
            question: "An aggressive client presses with a complaint. Better to…",
            options: [
              "Argue until you win",
              "Listen calmly, don’t escalate with emotion, offer a solution frame",
              "Give any discount immediately",
              "Ignore the messages",
            ],
            correct: 1,
            explain: "Emotion on emotion fuels conflict.",
          },
          {
            id: "pk2",
            question: "A client demands what’s not in assortment…",
            options: [
              "Promise “tomorrow” without checking",
              "Understand the need and give max from stock or an honest alternative",
              "Argue that they’re wrong",
              "Silently close the chat",
            ],
            correct: 1,
            explain: "Honesty + an alternative keeps trust.",
          },
        ],
      },
    ],
  },

  "sozdanie-internet-magazina": {
    checklist: {
      afterTitleIncludes: "Design, mobile, and photos",
      title: "Storefront before ads",
      lead: "E-com base.",
      items: [
        { id: "mobile", label: "Catalog and checkout usable on smartphone" },
        { id: "photos", label: "Key SKUs have a proper gallery" },
        { id: "nav", label: "Categories and menu clear without hints" },
        { id: "pay", label: "Payment and HTTPS work end-to-end" },
        { id: "stock", label: "Prices and stock are current" },
        { id: "search", label: "Internal search finds the product" },
        { id: "speed", label: "Product page doesn’t hang on mobile" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Search, support, speed, and reviews",
        title: "Mini quiz: building a store",
        lead: "Two checks.",
        questions: [
          {
            id: "sim1",
            question: "Before aggressive ads, more important is…",
            options: [
              "Only a pretty banner",
              "Working payment, stock, mobile checkout, and speed",
              "Fake reviews",
              "Turning responsive off",
            ],
            correct: 1,
            explain: "Traffic into a broken funnel is waste.",
          },
          {
            id: "sim2",
            question: "An empty chat widget with no reply…",
            options: [
              "Always raises conversion",
              "Is worse than an honest channel with a reply SLA",
              "Replaces payment",
              "Is needed instead of search",
            ],
            correct: 1,
            explain: "Waiting with no answer hits trust.",
          },
        ],
      },
    ],
  },

  "tendentsii-veb-dizayna": {
    checklist: {
      afterTitleIncludes: "How to pick trends without chasing fashion",
      title: "Before shipping a trend",
      lead: "Not for fashion’s sake.",
      items: [
        { id: "goal", label: "The technique has a goal in the path" },
        { id: "mobile", label: "Checked on a real smartphone" },
        { id: "speed", label: "Doesn’t break speed / Core Web Vitals" },
        { id: "a11y", label: "Reduced-motion and readability accounted for" },
        { id: "brand", label: "Fits the brand — doesn’t fight it" },
        { id: "test", label: "Hypothesis and a way to measure effect exist" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Tools, email, and e-com",
        title: "Mini quiz: design trends",
        lead: "Two checks.",
        questions: [
          {
            id: "tvd1",
            question: "Animation on a commercial site…",
            options: [
              "Is always required",
              "Fits with a goal; without one it’s often noise and a speed hit",
              "Replaces the offer",
              "Is only needed in email",
            ],
            correct: 1,
            explain: "Motion is a tool — not default décor.",
          },
          {
            id: "tvd2",
            question: "Choosing a design tool matters most for…",
            options: [
              "One process and a component library on the team",
              "Guaranteed SEO growth",
              "Replacing mobile-first",
              "Automatic conversion growth",
            ],
            correct: 0,
            explain: "Stacks change; process and components beat announcements.",
          },
        ],
      },
    ],
  },

  "tsvet-internet-magazina": {
    checklist: {
      afterTitleIncludes: "Brand, psychology, and niche",
      title: "Storefront palette",
      lead: "Before repainting the whole catalog.",
      items: [
        { id: "brand", label: "Colors align with logo/ads" },
        { id: "audience", label: "Palette doesn’t cut the needed audience" },
        { id: "base", label: "Base + 1 accent — not 7 “main” colors" },
        { id: "cta", label: "CTA visible on mobile" },
        { id: "contrast", label: "Text reads (not yellow on white)" },
        { id: "test", label: "CTA change is an A/B hypothesis — not “magic”" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Harmony, accent, and readability",
        title: "Mini quiz: store color",
        lead: "Two checks.",
        questions: [
          {
            id: "tim1",
            question: "Button color by itself…",
            options: [
              "Guarantees sales growth by tens of percent",
              "Is a test hypothesis; without offer and service it rarely saves",
              "Matters more than assortment",
              "Replaces identity",
            ],
            correct: 1,
            explain: "Product and funnel first.",
          },
          {
            id: "tim2",
            question: "How many colors usually enough for a storefront?",
            options: [
              "10+ for “richness”",
              "2–3: base, support, accent",
              "Only one across the whole site",
              "As many as in stock photos",
            ],
            correct: 1,
            explain: "A short palette reads better.",
          },
        ],
      },
    ],
  },

  favikon: {
    checklist: {
      afterTitleIncludes: "Why you need one and what design works",
      title: "Favicon for release",
      lead: "Minimum without others’ galleries.",
      items: [
        { id: "brand", label: "Mark from your identity — not a stock gallery" },
        { id: "simple", label: "Reads at 16×16" },
        { id: "png", label: "PNG/SVG exist (and ICO if needed)" },
        { id: "head", label: "Wired in head / site root" },
        { id: "apple", label: "apple-touch-icon for shortcuts exists" },
        { id: "check", label: "Checked in the tab in 2+ browsers" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "How to install and what to generate with",
        title: "Mini quiz: favicon",
        lead: "Two checks.",
        questions: [
          {
            id: "fv1",
            question: "A favicon by itself…",
            options: [
              "Guarantees ranking growth into TOP",
              "Strengthens recognition; doesn’t replace SEO and offer",
              "Is required only in IE",
              "Must be an animated GIF",
            ],
            correct: 1,
            explain: "UI/brand — not a TOP lever.",
          },
          {
            id: "fv2",
            question: "An image from someone else’s favicon gallery…",
            options: [
              "Is always the best choice",
              "Risks duplicates and rights; better your own mark",
              "Is a Yandex requirement",
              "Replaces the header logo",
            ],
            correct: 1,
            explain: "Uniqueness and license beat “download fast”.",
          },
        ],
      },
    ],
  },

  "vovlechenie-polzovateley": {
    checklist: {
      afterTitleIncludes: "Visit source and reacting to passivity",
      title: "Engagement without chaos",
      lead: "Five steps in miniature.",
      items: [
        { id: "source", label: "Visit sources tagged (UTM/survey)" },
        { id: "match", label: "Landing offer matches channel expectation" },
        { id: "passive", label: "Reaction to passivity exists (demo/cart)" },
        { id: "social", label: "Social dialogues don’t hang without a reply" },
        { id: "feedback", label: "Watch CSAT/replies — not only reach" },
        { id: "onboard", label: "Product adoption stop-points are known" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Social channels, feedback, and product adoption",
        title: "Mini quiz: engagement",
        lead: "Two checks.",
        questions: [
          {
            id: "vp1",
            question: "A user downloaded a demo and vanished. Better to…",
            options: [
              "Ignore them",
              "Find the reason and help — not only send a discount",
              "Game behavioral signals",
              "Turn analytics off",
            ],
            correct: 1,
            explain: "Passivity signals friction to unpack.",
          },
          {
            id: "vp2",
            question: "Engagement and SEO behavioral signals…",
            options: [
              "Are full synonyms",
              "Are related, but here the focus is product and service — not gaming",
              "Are the same as banner CTR",
              "Replace payment",
            ],
            correct: 1,
            explain: "Different jobs and metrics.",
          },
        ],
      },
    ],
  },

  "poseshhaemost-sayta": {
    checklist: {
      afterTitleIncludes: "Site prep first",
      title: "Before scaling traffic",
      lead: "Basics beat the channel.",
      items: [
        { id: "speed", label: "Key pages are fast on mobile" },
        { id: "nav", label: "Navigation is clear without hints" },
        { id: "content", label: "Current pages exist for demand" },
        { id: "analytics", label: "Counters and goals are set" },
        { id: "filters", label: "No obvious sanctions / weird drop" },
        { id: "channel", label: "1–2 channels chosen to test — not “everything”" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Ways to attract visitors",
        title: "Mini quiz: traffic",
        lead: "Two checks.",
        questions: [
          {
            id: "ps1",
            question: "SEO brings traffic…",
            options: [
              "Always into TOP for the whole core in 1–2 months",
              "After prep; core TOP is planned over months — not “right after posts”",
              "Only via black-hat methods",
              "Without content and tech",
            ],
            correct: 1,
            explain: "Prep ≠ reaching TOP.",
          },
          {
            id: "ps2",
            question: "Before buying traffic, more important is…",
            options: [
              "Only a new banner",
              "Speed, navigation, and what to do on the site",
              "Turning analytics off",
              "A mandatory forum",
            ],
            correct: 1,
            explain: "A broken site wastes visits.",
          },
        ],
      },
    ],
  },

  serm: {
    checklist: {
      afterTitleIncludes: "What SERM is and why business needs it",
      title: "Ethical SERM",
      lead: "No review factory.",
      items: [
        { id: "monitor", label: "Brand SERP snapshot exists (+ reviews)" },
        { id: "owner", label: "Owner assigned for replies" },
        { id: "fix", label: "Real claims are closed in service" },
        { id: "owned", label: "Owned SERP URLs strengthened (site, profiles)" },
        { id: "legal", label: "Defamation has a legal/platform plan" },
        { id: "nofake", label: "Fake reviews and gaming are out" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "When you need it and how to build strategy",
        title: "Mini quiz: SERM",
        lead: "Two checks.",
        questions: [
          {
            id: "sm1",
            question: "A paid stream of “positive” reviews…",
            options: [
              "Is the main SERM method",
              "Risks reputation and platforms; facts and service are better",
              "Is a search requirement",
              "Replaces the site",
            ],
            correct: 1,
            explain: "Ethical SERM ≠ fake factory.",
          },
          {
            id: "sm2",
            question: "SERM and ORM…",
            options: [
              "Are full synonyms",
              "SERM is the search slice; ORM is wider across channels",
              "Are only about ads",
              "Are only about email",
            ],
            correct: 1,
            explain: "SERM sits inside broader ORM.",
          },
        ],
      },
    ],
  },

  "kraud-marketing": {
    checklist: {
      afterTitleIncludes: "Goals and when crowd fits",
      title: "Before a crowd campaign",
      lead: "No spam across threads.",
      items: [
        { id: "audience", label: "Audience and niche are described" },
        { id: "sites", label: "2–5 live platforms chosen" },
        { id: "value", label: "Something useful to say without a URL" },
        { id: "rules", label: "Platform rules are read" },
        { id: "kpi", label: "KPI: survival, clicks, inquiries" },
        { id: "nofake", label: "Fake reviews are out" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Platforms and links without spam",
        title: "Mini quiz: crowd marketing",
        lead: "Two checks.",
        questions: [
          {
            id: "km1",
            question: "Crowd and outreach…",
            options: [
              "Are the same thing",
              "Crowd is discussions; outreach is contacting editors",
              "Are only about ads",
              "Are only about email",
            ],
            correct: 1,
            explain: "Different touch channels.",
          },
          {
            id: "km2",
            question: "A pack of links in other people’s threads…",
            options: [
              "Guarantees TOP in a month",
              "Is usually spam: removals and brand damage",
              "Is required for SEO",
              "Replaces on-site content",
            ],
            correct: 1,
            explain: "Targeted value beats volume.",
          },
        ],
      },
    ],
  },

  "affiliat-filtr": {
    checklist: {
      afterTitleIncludes: "What affiliates are and why the filter exists",
      title: "Before a second domain",
      lead: "No clone grid.",
      items: [
        { id: "offer", label: "Offer/brand is truly different — not a copy" },
        { id: "content", label: "Texts and visuals are unique" },
        { id: "contacts", label: "Contacts aren’t one-to-one copy-paste" },
        { id: "keys", label: "Semantics don’t fully match the main site" },
        { id: "goal", label: "No goal to take several slots in one SERP" },
        { id: "sat", label: "This isn’t a satellite link grid" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "How to stay clear and how to check",
        title: "Mini quiz: affiliate filter",
        lead: "Two checks.",
        questions: [
          {
            id: "af1",
            question: "Several clones for the same keys…",
            options: [
              "A reliable way to own the whole TOP",
              "Affiliate-filter risk; better one strong site",
              "Are required for SEO",
              "Replace content",
            ],
            correct: 1,
            explain: "Search cuts clone monopolies.",
          },
          {
            id: "af2",
            question: "Affiliates and satellites…",
            options: [
              "Are full synonyms",
              "Related: satellites more about links; affiliates — your domains competing in one SERP",
              "Are only about ads",
              "Are only about email",
            ],
            correct: 1,
            explain: "Different schemes, similar risks.",
          },
        ],
      },
    ],
  },

  "agregatory-kontenta": {
    checklist: {
      afterTitleIncludes: "Why they matter and how they work",
      title: "Before launching an aggregator",
      lead: "Value and rights beat volume.",
      items: [
        { id: "rights", label: "Rights/agreements for sources" },
        { id: "filters", label: "Filters and comparison — not only a list" },
        { id: "templates", label: "Page templates with basic SEO" },
        { id: "links", label: "Internal links and a section map" },
        { id: "metrics", label: "Metrics: retention, click to source, lead" },
        { id: "ux", label: "UX beats a “link warehouse”" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Aggregator types and launch",
        title: "Mini quiz: content aggregators",
        lead: "Two checks.",
        questions: [
          {
            id: "ag1",
            question: "A mature aggregator primarily…",
            options: [
              "Copies others’ articles in full without rights",
              "Brings sources into a convenient interface with filters and links",
              "Replaces SEO",
              "Guarantees TOP in a week",
            ],
            correct: 1,
            explain: "Value is a useful hub — not pirate republish.",
          },
          {
            id: "ag2",
            question: "Auto-generating pages…",
            options: [
              "Is always harmful",
              "Is fine if it covers real intent and doesn’t spawn empty duplicates",
              "Is required without templates",
              "Is only for social",
            ],
            correct: 1,
            explain: "Empty templates hurt; useful ones power large catalogs.",
          },
        ],
      },
    ],
  },

  yuzabiliti: {
    checklist: {
      afterTitleIncludes: "What usability is and basic rules",
      title: "Usability self-audit",
      lead: "Walk it as a new visitor.",
      items: [
        { id: "browsers", label: "Looks correct in popular browsers" },
        { id: "mobile", label: "Comfortable on a smartphone" },
        { id: "contacts", label: "Contacts found in seconds" },
        { id: "nav", label: "From any page — a path to key sections" },
        { id: "e404", label: "From 404 you can return to catalog/services" },
        { id: "cta", label: "Lead/buy without extra clicks" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Self-audit and quick improvements",
        title: "Mini quiz: usability",
        lead: "Two checks.",
        questions: [
          {
            id: "ux1",
            question: "Website usability is primarily about…",
            options: [
              "Pretty design only",
              "Ease of reaching the goal: lead, purchase, contact",
              "Logo color only",
              "Page count only",
            ],
            correct: 1,
            explain: "Ease of the path to the target action.",
          },
          {
            id: "ux2",
            question: "General usability and the store guide…",
            options: [
              "Are the same text",
              "General frame here; checkout/card — in the store piece",
              "Are only about SEO copy",
              "Are only about ads",
            ],
            correct: 1,
            explain: "Different depth, same less-friction logic.",
          },
        ],
      },
    ],
  },

  "den-v-prime": {
    checklist: {
      afterTitleIncludes: "Morning before the monitor",
      title: "What the client usually doesn’t see",
      lead: "Behind “one line in the account”.",
      items: [
        { id: "seo-ctx", label: "One day can hold both SEO and paid search" },
        { id: "incidents", label: "Incidents get reviewed after calls" },
        { id: "newproj", label: "A new project often starts near zero" },
        { id: "roles", label: "Team roles need coordination" },
        { id: "prep", label: "Prep is separate from TOP growth" },
        { id: "humans", label: "Behind the numbers — live tasks and people" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "SEO, paid search, and “fresh” feedback",
        title: "Mini quiz: a day at the agency",
        lead: "Two checks.",
        questions: [
          {
            id: "dp1",
            question: "A column about a day at PRIME is…",
            options: [
              "Today’s current headcount",
              "A humorous snapshot of atmosphere and process",
              "A TOP-10 guarantee in a week",
              "A guide to gaming behavioral signals",
            ],
            correct: 1,
            explain: "Atmosphere and the work’s point — not an org chart.",
          },
          {
            id: "dp2",
            question: "A new SEO project…",
            options: [
              "Hits TOP on launch day",
              "Grows through prep and months of ranking gains",
              "Needs only a banner",
              "Is replaced by one paid-search bid",
            ],
            correct: 1,
            explain: "Prep ≠ TOP; positions build gradually.",
          },
        ],
      },
    ],
  },

  "vidy-reklamy": {
    checklist: {
      afterTitleIncludes: "SEO and paid search",
      title: "Before choosing a channel",
      lead: "Count leads, not fashion.",
      items: [
        { id: "offer", label: "Site and clear offer exist" },
        { id: "demand", label: "Demand is searched in search or social" },
        { id: "speed", label: "Clear if you need fast leads or a long channel" },
        { id: "metrics", label: "You count leads/CPL — not only clicks" },
        { id: "mix", label: "SEO and paid search as a pair" },
        { id: "teaser", label: "No teasers “for cheap” at brand cost" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Targeting, teasers, banners — and choosing",
        title: "Mini quiz: ad types",
        lead: "Two checks.",
        questions: [
          {
            id: "vr1",
            question: "For fast leads with a ready landing, people more often take…",
            options: [
              "SEO only, no ads",
              "Paid search or social targeting",
              "Shock teasers only",
              "A TOP-10 guarantee",
            ],
            correct: 1,
            explain: "Paid channels are faster; SEO is a long track.",
          },
          {
            id: "vr2",
            question: "“Pay only for TOP-10”…",
            options: [
              "Is an honest SERP guarantee",
              "Doesn’t cancel algorithm-change risk; work and metrics matter",
              "Replaces paid search forever",
              "Is required for teasers",
            ],
            correct: 1,
            explain: "Search doesn’t sell positions by contract.",
          },
        ],
      },
    ],
  },

  "kluchi-youtube": {
    checklist: {
      afterTitleIncludes: "Why keywords alone aren’t enough",
      title: "Before publishing a video",
      lead: "Keywords + watch-through.",
      items: [
        { id: "title", label: "Title with the main query, no lies" },
        { id: "desc", label: "Description: essence, keywords, timestamps" },
        { id: "tags", label: "On-topic tags, no spam" },
        { id: "thumb", label: "Thumbnail matches the promise" },
        { id: "retain", label: "Plan to watch retention in Studio" },
        { id: "nf", label: "Against giants on head terms — a long-tail angle ready" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "How to build the core and where to place it",
        title: "Mini quiz: YouTube keywords",
        lead: "Two checks.",
        questions: [
          {
            id: "ky1",
            question: "Perfect keywords without strong watch-through…",
            options: [
              "Guarantee top forever",
              "Don’t beat a more useful video with better retention",
              "Replace the thumbnail",
              "Are only for Shorts",
            ],
            correct: 1,
            explain: "Viewer behavior beats tag stuffing.",
          },
          {
            id: "ky2",
            question: "If giants own the head terms…",
            options: [
              "Copy all their tags",
              "Aim at narrow long-tail and your answer angle",
              "Drop keywords entirely",
              "Buy fake views",
            ],
            correct: 1,
            explain: "A narrow relevant query beats fighting giants.",
          },
        ],
      },
    ],
  },

  ga4: {
    checklist: {
      afterTitleIncludes: "Main model shifts",
      title: "After creating a GA4 property",
      lead: "Events, not UA screenshots.",
      items: [
        { id: "tag", label: "Tag on all templates, no duplicate" },
        { id: "enhanced", label: "Enhanced measurements on as needed" },
        { id: "keys", label: "Key events/conversions marked" },
        { id: "ecom", label: "Ecommerce or purchase set up" },
        { id: "debug", label: "Checked in realtime / DebugView" },
        { id: "internal", label: "Internal traffic filter" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Reports, audiences, and migration practice",
        title: "Mini quiz: GA4",
        lead: "Two checks.",
        questions: [
          {
            id: "g41",
            question: "GA4’s main shift vs UA…",
            options: [
              "Only a new UI color",
              "Event model instead of hits/sessions as the axis",
              "Cookies cancelled forever",
              "Replacing every other analytics tool",
            ],
            correct: 1,
            explain: "Events and parameters are GA4’s core.",
          },
          {
            id: "g42",
            question: "UA and GA4 figures on one chart…",
            options: [
              "Always match 1:1",
              "Aren’t directly comparable due to a different model",
              "Are only for teasers",
              "Replace GTM",
            ],
            correct: 1,
            explain: "Watch trends inside GA4.",
          },
        ],
      },
    ],
  },

  adblock: {
    checklist: {
      afterTitleIncludes: "Why people install it and how it works",
      title: "If the site “broke”",
      lead: "Pause first — not a Windows reinstall.",
      items: [
        { id: "pause", label: "Extension paused on the domain" },
        { id: "reload", label: "Page reloaded" },
        { id: "other", label: "Checked another browser without a blocker" },
        { id: "vpn", label: "Not confusing it with VPN/antivirus" },
        { id: "incognito", label: "For counters — incognito without extensions" },
        { id: "owner", label: "Remember: some visits are invisible in analytics" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Pause, exceptions, and the site owner’s view",
        title: "Mini quiz: AdBlock",
        lead: "Two checks.",
        questions: [
          {
            id: "ab1",
            question: "An ad blocker can…",
            options: [
              "Only hide banners and nothing else",
              "Cut widgets, pixels, and analytics counters",
              "Guarantee TOP in search",
              "Replace GTM",
            ],
            correct: 1,
            explain: "Side effects go beyond “no banner”.",
          },
          {
            id: "ab2",
            question: "To debug Metrika/GA it’s better to…",
            options: [
              "Leave all extensions on",
              "Check without a blocker / in a clean profile",
              "Delete the site",
              "Inflate visits",
            ],
            correct: 1,
            explain: "Otherwise you get false “counter is dead”.",
          },
        ],
      },
    ],
  },

  "nakrutka-zriteley-youtube": {
    checklist: {
      afterTitleIncludes: "Why people chase concurrent and why it’s a trap",
      title: "Before a stream without inflation",
      lead: "A live audience beats a peak.",
      items: [
        { id: "topic", label: "Topic and time announced early" },
        { id: "announce", label: "Link and reminder in owned channels" },
        { id: "hook", label: "Light/audio and a hook in the first 3 minutes" },
        { id: "chat", label: "Plan to reply in chat" },
        { id: "after", label: "After the stream — clip/description/playlist" },
        { id: "no-bots", label: "No bots or concurrent marketplaces" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Risks and a white-hat alternative",
        title: "Mini quiz: viewer inflation",
        lead: "Two checks.",
        questions: [
          {
            id: "nz1",
            question: "Inflated concurrent on a stream…",
            options: [
              "Guarantees recommendations forever",
              "Gives a number without interest and carries sanction risk",
              "Is required for monetization",
              "Replaces announcements and content",
            ],
            correct: 1,
            explain: "Bots don’t watch and don’t return.",
          },
          {
            id: "nz2",
            question: "Instead of proxy software it’s better to…",
            options: [
              "Buy other software",
              "Announce, stay regular, improve the stream, use legal reach",
              "Inflate chat only",
              "Turn analytics off",
            ],
            correct: 1,
            explain: "White growth is built on a real audience.",
          },
        ],
      },
    ],
  },

  "tema-wordpress": {
    checklist: {
      afterTitleIncludes: "Needs, flexibility, and feature volume",
      title: "Before installing a theme on production",
      lead: "Staging first.",
      items: [
        { id: "backup", label: "Backup and staging ready" },
        { id: "mobile", label: "Mobile view of key templates OK" },
        { id: "speed", label: "Speed checked with real content" },
        { id: "links", label: "No third-party hidden links" },
        { id: "menus", label: "Menus, sidebar, forms in place" },
        { id: "seo", label: "SEO plugin and counters alive" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Speed, code, SEO, and tests",
        title: "Mini quiz: WordPress theme",
        lead: "Two checks.",
        questions: [
          {
            id: "tw1",
            question: "A child theme is needed to…",
            options: [
              "Speed up hosting automatically",
              "Customize without losing edits when the parent updates",
              "Replace the SEO plugin",
              "Inflate traffic",
            ],
            correct: 1,
            explain: "Edits live in the child; the parent updates.",
          },
          {
            id: "tw2",
            question: "An overloaded theme with tons of demo blocks…",
            options: [
              "Is always better for SEO",
              "Often slows things down and isn’t needed in full",
              "Is required for a blog",
              "Replaces a backup",
            ],
            correct: 1,
            explain: "Take needed features, not the maximum pack.",
          },
        ],
      },
    ],
  },

  "veb-arhiv": {
    checklist: {
      afterTitleIncludes: "How to use the Wayback Machine",
      title: "Before deleting an important page",
      lead: "The archive doesn’t replace a backup.",
      items: [
        { id: "backup", label: "File and DB backup exists" },
        { id: "save", label: "Save Page Now on key URLs" },
        { id: "export", label: "Text exported to your side" },
        { id: "redirect", label: "301 to a replacement planned if the URL leaves" },
        { id: "rights", label: "Others’ archive content isn’t copied without rights" },
        { id: "robots", label: "If needed — block the archive bot" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Recovery, rights, and blocking archiving",
        title: "Mini quiz: web archive",
        lead: "Two checks.",
        questions: [
          {
            id: "va1",
            question: "The Wayback Machine primarily…",
            options: [
              "Buys TOP-10 positions",
              "Stores historical page snapshots",
              "Replaces hosting",
              "Inflates traffic",
            ],
            correct: 1,
            explain: "It’s a snapshot archive — not an SEO button.",
          },
          {
            id: "va2",
            question: "Texts from someone else’s closed site in the archive…",
            options: [
              "Can always be published as yours",
              "Need rights or a lawful basis; otherwise claim risk",
              "Become public domain automatically",
              "Are only for paid search",
            ],
            correct: 1,
            explain: "Closing a site ≠ giving up copyright.",
          },
        ],
      },
    ],
  },

  "vodyanoy-znak": {
    checklist: {
      afterTitleIncludes: "Why people add them and who benefits",
      title: "A careful watermark",
      lead: "The mark shouldn’t kill the frame.",
      items: [
        { id: "subject", label: "Doesn’t cover face/product" },
        { id: "style", label: "One style across the series" },
        { id: "read", label: "Readable on a preview, but doesn’t shout" },
        { id: "backup", label: "A file without the mark exists" },
        { id: "legal", label: "Rights/licenses handled separately" },
        { id: "alt", label: "For sharing, a clean preview was considered" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Downsides, tools, and practice",
        title: "Mini quiz: watermark",
        lead: "Two checks.",
        questions: [
          {
            id: "vz1",
            question: "A watermark…",
            options: [
              "Fully replaces legal protection",
              "Is a visual signal and light barrier — not armor",
              "Is required on every blog photo",
              "Guarantees TOP in search",
            ],
            correct: 1,
            explain: "Rights are handled separately from a corner logo.",
          },
          {
            id: "vz2",
            question: "If aesthetics and sharing matter more…",
            options: [
              "Put a huge logo across the whole frame",
              "Often a smaller preview without a crude mark is better",
              "Drop all rights",
              "Publish RAW only",
            ],
            correct: 1,
            explain: "Preview + contract sometimes beats a fat watermark.",
          },
        ],
      },
    ],
  },

  "yandeks-disk": {
    checklist: {
      afterTitleIncludes: "Why you need it and what it can do",
      title: "Disk setup",
      lead: "Not a dump across the whole account.",
      items: [
        { id: "2fa", label: "2FA on the account is on" },
        { id: "folders", label: "Clear folder structure" },
        { id: "links", label: "Public-link permissions checked" },
        { id: "apps", label: "Client on work devices" },
        { id: "quota", label: "Quota/plan verified on Yandex’s site" },
        { id: "backup", label: "You know: Disk ≠ the only site backup" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Getting started, Google comparison, and practice",
        title: "Mini quiz: Yandex Disk",
        lead: "Two checks.",
        questions: [
          {
            id: "yd1",
            question: "Free-GB figures from 2020 articles…",
            options: [
              "Are eternal facts",
              "Must be checked against current service plans",
              "Matter only for SEO",
              "Replace 2FA",
            ],
            correct: 1,
            explain: "Quotas change; check the official page.",
          },
          {
            id: "yd2",
            question: "For a site backup, Disk…",
            options: [
              "Fully replaces hosting backups",
              "Can store a copy, but doesn’t replace a dump strategy",
              "Is only for Shorts",
              "Is forbidden for documents",
            ],
            correct: 1,
            explain: "Sites need scheduled DB/file dumps.",
          },
        ],
      },
    ],
  },

  "montazh-youtube": {
    checklist: {
      afterTitleIncludes: "The job of editing and a basic pipeline",
      title: "Before exporting a video",
      lead: "Rhythm and audio beat effects.",
      items: [
        { id: "hook", label: "Hook in the first seconds" },
        { id: "pauses", label: "Long pauses and filler words removed" },
        { id: "audio", label: "Voice is clear; music is licensed" },
        { id: "mobile", label: "Text reads on a smartphone" },
        { id: "cta", label: "A clear next step exists" },
        { id: "phone", label: "Export checked on a phone" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "How to choose an editor",
        title: "Mini quiz: YouTube editing",
        lead: "Two checks.",
        questions: [
          {
            id: "my1",
            question: "At the start, more important is…",
            options: [
              "Buying the most expensive software like a creator",
              "Clean audio, a hook, and no dead pauses",
              "Twenty transitions per minute",
              "View inflation",
            ],
            correct: 1,
            explain: "Software is secondary to basic video quality.",
          },
          {
            id: "my2",
            question: "A list of 15 editors from 2020…",
            options: [
              "Must be learned in full",
              "Ages fast; the tool class for the job matters more",
              "Replaces a script",
              "Is needed for robots.txt",
            ],
            correct: 1,
            explain: "Pick one editor and finish a series of videos.",
          },
        ],
      },
    ],
  },

  "magnet-ssylka": {
    checklist: {
      afterTitleIncludes: "Structure and how it differs from a URL",
      title: "Before downloading via magnet",
      lead: "A hash ≠ an indulgence.",
      items: [
        { id: "rights", label: "Rights/license for the content are clear" },
        { id: "source", label: "The source is trustworthy" },
        { id: "client", label: "The client is updated" },
        { id: "anon", label: "You don’t expect anonymity by default" },
        { id: "av", label: "Antivirus and common sense are in place" },
        { id: "pirate", label: "You’re not hunting pirate catalogs “for convenience”" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Practice, risks, and the law",
        title: "Mini quiz: magnet link",
        lead: "Two checks.",
        questions: [
          {
            id: "ms1",
            question: "A magnet URI primarily is…",
            options: [
              "A site address like a normal URL",
              "A string with a content hash for a P2P client",
              "A guarantee the file is legal",
              "A way to inflate SEO",
            ],
            correct: 1,
            explain: "It’s a content pointer by hash — not hosting.",
          },
          {
            id: "ms2",
            question: "“Magnets can’t be blocked” means…",
            options: [
              "You can download any others’ content",
              "Format convenience doesn’t cancel law and malware risk",
              "You don’t need a client",
              "It’s safer than a bank",
            ],
            correct: 1,
            explain: "Tech ≠ permission for piracy.",
          },
        ],
      },
    ],
  },

  "virtualnyy-nomer": {
    checklist: {
      afterTitleIncludes: "Who needs it and which jobs it covers",
      title: "Before choosing a provider",
      lead: "Contract beats “pennies per number”.",
      items: [
        { id: "contract", label: "Clear contract and invoices" },
        { id: "geo", label: "Needed country/city codes" },
        { id: "sip", label: "Forwarding and/or SIP" },
        { id: "logs", label: "Logs/recording within the rules" },
        { id: "crm", label: "CRM/analytics integration" },
        { id: "public", label: "No public SMS numbers for anything important" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "How to choose and what to check",
        title: "Mini quiz: virtual number",
        lead: "Two checks.",
        questions: [
          {
            id: "vn1",
            question: "A free public SMS number for banking…",
            options: [
              "Is ideal",
              "Is risky: outsiders can see the codes",
              "Is required by law",
              "Replaces CRM",
            ],
            correct: 1,
            explain: "Shared SMS showcases are opaque and dangerous.",
          },
          {
            id: "vn2",
            question: "A city code on the number…",
            options: [
              "Legally puts the office “in that city”",
              "Doesn’t replace an honest offer and shouldn’t fake location",
              "Guarantees TOP in search",
              "Is only for torrents",
            ],
            correct: 1,
            explain: "Don’t use a number to mask an address.",
          },
        ],
      },
    ],
  },

  "chrome-rasshireniya-marketing": {
    checklist: {
      afterTitleIncludes: "Stack hygiene",
      title: "Before installing extensions",
      lead: "A short stack is safer than a top-25.",
      items: [
        { id: "task", label: "Each plugin’s task is clear" },
        { id: "store", label: "Source is the Chrome Web Store" },
        { id: "perms", label: "Permissions match the function" },
        { id: "profile", label: "Work profile is separate" },
        { id: "alexa", label: "You’re not relying on dead Alexa Rank" },
        { id: "spam", label: "Email plugins aren’t for cold spam" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Creative, screenshots, and quick research",
        title: "Mini quiz: Chrome for marketing",
        lead: "Two checks.",
        questions: [
          {
            id: "cm1",
            question: "A catalog of 25 extensions from 2020…",
            options: [
              "Must be installed in full",
              "Ages; take task classes and check the store",
              "Replaces site analytics",
              "Guarantees sales growth",
            ],
            correct: 1,
            explain: "The store and products change constantly.",
          },
          {
            id: "cm2",
            question: "The SEO extensions article…",
            options: [
              "Is a full duplicate of this one",
              "Is about URL audit; here — marketing routine",
              "Is about Photoshop",
              "Is about email scraping",
            ],
            correct: 1,
            explain: "Two different angles on the same browser.",
          },
        ],
      },
    ],
  },

  canva: {
    checklist: {
      afterTitleIncludes: "Downsides and limits",
      title: "Before a Canva layout series",
      lead: "Style beats a random template.",
      items: [
        { id: "brand", label: "Colors/logo/fonts are locked" },
        { id: "cyr", label: "Fonts support your script (e.g. Cyrillic)" },
        { id: "size", label: "Platform format chosen upfront" },
        { id: "license", label: "Stock is OK for commercial use" },
        { id: "export", label: "Needed export format is clear" },
        { id: "designer", label: "Complex brand wasn’t “closed with a template”" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Builder upsides",
        title: "Mini quiz: Canva",
        lead: "Two checks.",
        questions: [
          {
            id: "cv1",
            question: "Does Canva fully replace a designer?",
            options: [
              "Yes, always",
              "For regular SMM — often; complex brand — no",
              "Only offline",
              "Only instead of CRM",
            ],
            correct: 1,
            explain: "A builder ≠ unique identity.",
          },
          {
            id: "cv2",
            question: "Boxes instead of letters mean…",
            options: [
              "Canva is broken forever",
              "The font lacks your script — switch to one that supports it",
              "You need Photoshop",
              "You need Alexa Rank",
            ],
            correct: 1,
            explain: "Pick a font with the needed character set.",
          },
        ],
      },
    ],
  },

  "uskorenie-wordpress": {
    checklist: {
      afterTitleIncludes: "Theme, plugins, and media",
      title: "Before speed fixes",
      lead: "Staging and measurement beat a “speed up everything” plugin.",
      items: [
        { id: "backup", label: "Backup and staging exist" },
        { id: "measure", label: "Measured before changes" },
        { id: "ttfb", label: "TTFB vs front-end is clear" },
        { id: "plugins", label: "Extra plugins removed" },
        { id: "images", label: "Images compressed / right size" },
        { id: "score", label: "You’re not breaking the cart for 100/100" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Hosting and the server layer",
        title: "Mini quiz: WordPress speed",
        lead: "Two checks.",
        questions: [
          {
            id: "uw1",
            question: "TTFB of 1–2 seconds more often points to…",
            options: [
              "Only button color",
              "Hosting / server response problems",
              "Missing Instagram templates",
              "Missing meta keywords",
            ],
            correct: 1,
            explain: "Server and cache first, then theme cosmetics.",
          },
          {
            id: "uw2",
            question: "A cache plugin…",
            options: [
              "Replaces cleaning a heavy theme and plugins",
              "Helps, but doesn’t cure a “combo” of 40 plugins",
              "Guarantees TOP-1 in a week",
              "Is only for AMP",
            ],
            correct: 1,
            explain: "Cache is a layer — not an indulgence for clutter.",
          },
        ],
      },
    ],
  },

  pwa: {
    checklist: {
      afterTitleIncludes: "Basic site requirements",
      title: "Before rolling out a PWA",
      lead: "A fast HTTPS site first.",
      items: [
        { id: "https", label: "HTTPS on all URLs" },
        { id: "mobile", label: "Mobile UX is OK without PWA" },
        { id: "manifest", label: "Manifest and icons are ready" },
        { id: "sw", label: "Service Worker strategy is agreed" },
        { id: "cart", label: "Cart/account aren’t broken by cache" },
        { id: "seo", label: "You’re not expecting “auto-TOP” from PWA alone" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Pros and cons for business",
        title: "Mini quiz: PWA",
        lead: "Two checks.",
        questions: [
          {
            id: "pwa1",
            question: "A PWA directly…",
            options: [
              "Guarantees TOP in Google",
              "Isn’t a ranking score factor; speed and UX matter",
              "Replaces HTTPS",
              "Always works fully offline",
            ],
            correct: 1,
            explain: "Convenience and tech — yes; ranking magic — no.",
          },
          {
            id: "pwa2",
            question: "Minimum for an installable PWA…",
            options: [
              "Only a pretty icon in Photoshop",
              "HTTPS, manifest, and Service Worker",
              "Only AMP",
              "Only meta keywords",
            ],
            correct: 1,
            explain: "The three pillars of a classic PWA.",
          },
        ],
      },
    ],
  },

  "yandeks-spravochnik": {
    checklist: {
      afterTitleIncludes: "How to create and verify the organization",
      title: "Before publishing the card",
      lead: "NAP beats a “pretty” borrowed address.",
      items: [
        { id: "rights", label: "Owner rights are verified" },
        { id: "nap", label: "Name/address/phone match the site" },
        { id: "hours", label: "Opening hours are current" },
        { id: "photos", label: "Photos are yours — not stock" },
        { id: "category", label: "Category matches real activity" },
        { id: "reviews", label: "No plan to inflate reviews" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Posts, prices, reviews",
        title: "Mini quiz: Yandex Directory",
        lead: "Two checks.",
        questions: [
          {
            id: "ys1",
            question: "A Yandex organization card…",
            options: [
              "Fully replaces site SEO",
              "Is a local layer next to the site: maps, reviews, NAP",
              "Is only for Google",
              "Always works without verifying rights",
            ],
            correct: 1,
            explain: "It complements the site — doesn’t cancel it.",
          },
          {
            id: "ys2",
            question: "NAP is…",
            options: [
              "A WordPress plugin name",
              "Consistent Name, Address, Phone across platforms",
              "A Service Worker type",
              "An AMP format",
            ],
            correct: 1,
            explain: "Matching contacts is critical for local search.",
          },
        ],
      },
    ],
  },

  logotip: {
    checklist: {
      afterTitleIncludes: "How to make one: builder, freelance, studio",
      title: "Before finalizing the logo",
      lead: "Sources beat a pretty PNG.",
      items: [
        { id: "type", label: "Type chosen: mark / wordmark / combo" },
        { id: "small", label: "Reads at small size" },
        { id: "vector", label: "Vector and monochrome exist" },
        { id: "rights", label: "Usage rights are clear" },
        { id: "fonts", label: "Font licenses are closed" },
        { id: "guide", label: "Short spacing rules exist" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Types: mark, wordmark, combination",
        title: "Mini quiz: logo",
        lead: "Two checks.",
        questions: [
          {
            id: "lg1",
            question: "Logo and identity…",
            options: [
              "Are the same thing",
              "Logo is a part; you still need color, fonts, rules",
              "Identity is only for print",
              "A logo always replaces a brand book",
            ],
            correct: 1,
            explain: "A mark without a system drifts across carriers.",
          },
          {
            id: "lg2",
            question: "Canva for a logo…",
            options: [
              "Is always final production",
              "Is handy for a draft; final needs rights and vector",
              "Is forbidden",
              "Replaces trademark registration",
            ],
            correct: 1,
            explain: "A builder ≠ a closed brand package.",
          },
        ],
      },
    ],
  },

  "google-analytics-nastroyka": {
    checklist: {
      afterTitleIncludes: "Installing the tag on the site",
      title: "After the basic GA4 install",
      lead: "Realtime beats a screenshot from an old guide.",
      items: [
        { id: "prop", label: "GA4 property and web stream created" },
        { id: "tag", label: "Tag/GTM on all needed pages" },
        { id: "dup", label: "No duplicate counter" },
        { id: "rt", label: "Realtime/DebugView sees the visit" },
        { id: "consent", label: "Cookie consent is accounted for" },
        { id: "ua", label: "You’re not copying Universal Analytics settings" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "What to turn on right after the basic install",
        title: "Mini quiz: GA4 setup",
        lead: "Two checks.",
        questions: [
          {
            id: "gan1",
            question: "For a new site the foundation is…",
            options: [
              "Universal Analytics with views",
              "Google Analytics 4",
              "Only meta keywords",
              "Only Alexa Rank",
            ],
            correct: 1,
            explain: "UA as a foundation is no longer current.",
          },
          {
            id: "gan2",
            question: "GTM…",
            options: [
              "Is forbidden for GA4",
              "Is handy when there are many tags and events",
              "Replaces HTTPS",
              "Is only for logos",
            ],
            correct: 1,
            explain: "A container simplifies tag upkeep.",
          },
        ],
      },
    ],
  },

  "google-otzyvy-klientov": {
    checklist: {
      afterTitleIncludes: "Connection: meaning of the steps",
      title: "Before launching Customer Reviews",
      lead: "Google’s rules beat a badge “for CTR”.",
      items: [
        { id: "mc", label: "Merchant Center and eligibility checked" },
        { id: "ty", label: "Survey code on the thank-you page" },
        { id: "gtin", label: "GTINs for product reviews are correct" },
        { id: "consent", label: "Survey consent is voluntary" },
        { id: "badge", label: "No badge before display conditions" },
        { id: "fake", label: "No plan to fake reviews" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Seller rating, products, and common mistakes",
        title: "Mini quiz: Google Customer Reviews",
        lead: "Two checks.",
        questions: [
          {
            id: "gok1",
            question: "Customer Reviews is…",
            options: [
              "The same as Google Maps reviews",
              "Post-purchase surveys in the Merchant/Shopping contour",
              "A replacement for Yandex Directory",
              "A WordPress SEO-only plugin",
            ],
            correct: 1,
            explain: "Google’s shopping contour — not a Maps card.",
          },
          {
            id: "gok2",
            question: "A guaranteed +10% CTR from the program…",
            options: [
              "Is mandatory",
              "We don’t promise; a rating may help under display conditions",
              "Replaces the product feed",
              "Is required for GA4",
            ],
            correct: 1,
            explain: "Old marketing figures aren’t a law of nature.",
          },
        ],
      },
    ],
  },

  "ip-telefoniya": {
    checklist: {
      afterTitleIncludes: "How to choose a provider",
      title: "Before an IP telephony contract",
      lead: "Channel quality beats a “cheap minute”.",
      items: [
        { id: "tasks", label: "Scenarios: queues, cities, IVR" },
        { id: "net", label: "Internet for voice is checked" },
        { id: "sla", label: "SLA and billing are clear in the contract" },
        { id: "crm", label: "Whether CRM integration is needed" },
        { id: "record", label: "Recording and personal data are agreed" },
        { id: "save", label: "You don’t believe fixed “−15% for everyone”" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Which jobs IP telephony covers",
        title: "Mini quiz: IP telephony",
        lead: "Two checks.",
        questions: [
          {
            id: "ip1",
            question: "IP telephony is primarily…",
            options: [
              "Voice over the internet (VoIP/SIP class)",
              "Only SMS showcases",
              "A replacement for HTTPS",
              "Only audience scraping",
            ],
            correct: 0,
            explain: "Digitized voice over an IP network.",
          },
          {
            id: "ip2",
            question: "A virtual number and an IP PBX…",
            options: [
              "Are always the same thing",
              "Are related: a number can be part of the scheme; PBX is wider",
              "Are incompatible",
              "Are only for torrents",
            ],
            correct: 1,
            explain: "PBX/queues are wider than one DID.",
          },
        ],
      },
    ],
  },

  "voronka-prodazh-gtm": {
    checklist: {
      afterTitleIncludes: "Events via GTM instead of UA virtual pages",
      title: "Before publishing the funnel in GTM",
      lead: "Events beat fake UA pageviews.",
      items: [
        { id: "map", label: "Checkout step map is described" },
        { id: "events", label: "GA4 event names are agreed" },
        { id: "nodup", label: "No tag duplicate in theme and GTM" },
        { id: "preview", label: "Preview and DebugView checked" },
        { id: "purchase", label: "purchase/lead — not a “Buy” click" },
        { id: "consent", label: "Cookie consent is accounted for" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "How to read the funnel in reports",
        title: "Mini quiz: funnel via GTM",
        lead: "Two checks.",
        questions: [
          {
            id: "vgtm1",
            question: "For the funnel, GTM…",
            options: [
              "Draws the report by itself without events",
              "Delivers tags/events; you view the funnel in analytics",
              "Replaces checkout UX",
              "Is only for logos",
            ],
            correct: 1,
            explain: "The container is transport — not the report.",
          },
          {
            id: "vgtm2",
            question: "In GA4, instead of UA virtual pages it’s cleaner to…",
            options: [
              "Use only meta keywords",
              "Send ecommerce events / your own steps",
              "Turn all goals off",
              "Copy UA pageviews unchanged",
            ],
            correct: 1,
            explain: "Events are GA4’s main language.",
          },
        ],
      },
    ],
  },

  "retargeting-direkt": {
    checklist: {
      afterTitleIncludes: "Three ways to build the audience",
      title: "Before launching retargeting in Direct",
      lead: "Segment and excluding buyers beat someone else’s CTR.",
      items: [
        { id: "goals", label: "Metrika goals on lead/purchase" },
        { id: "seg", label: "2–3 segments for the funnel stage" },
        { id: "excl", label: "Buyers are excluded" },
        { id: "camp", label: "Retargeting in a separate campaign" },
        { id: "freq", label: "Impression frequency is capped" },
        { id: "pdn", label: "CRM lists — only with consent" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Stats: what to watch after launch",
        title: "Mini quiz: Direct retargeting",
        lead: "Two checks.",
        questions: [
          {
            id: "rd1",
            question: "Metrika segments vs “just a goal”…",
            options: [
              "Are always worse",
              "Describe the audience more flexibly and suit tests better",
              "Are forbidden in Direct",
              "Are only for SEO",
            ],
            correct: 1,
            explain: "Segments give more behavior slices.",
          },
          {
            id: "rd2",
            question: "A rigid “CTR always >0.5%” threshold…",
            options: [
              "Is mandatory for every niche",
              "Isn’t universal; compare your periods and segments",
              "Replaces CPA",
              "Is only for Google Ads",
            ],
            correct: 1,
            explain: "The guide is your economics — not someone else’s norm.",
          },
        ],
      },
    ],
  },

  "google-kalendar": {
    checklist: {
      afterTitleIncludes: "Several calendars for different goals",
      title: "Basic Google Calendar setup",
      lead: "Layers and sharing beat the perfect color.",
      items: [
        { id: "layers", label: "2+ calendars by purpose" },
        { id: "hours", label: "Working hours are set" },
        { id: "meet", label: "Meet on events — not Hangouts" },
        { id: "files", label: "Materials on the event, not email chaos" },
        { id: "acl", label: "Sharing not public without need" },
        { id: "buffer", label: "Buffer between calls" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Video and materials on the event",
        title: "Mini quiz: Google Calendar",
        lead: "Two checks.",
        questions: [
          {
            id: "gk1",
            question: "Several colored calendars…",
            options: [
              "Are forbidden by Google",
              "Help separate clients, internal, and personal",
              "Are only for SEO",
              "Replace a site content plan",
            ],
            correct: 1,
            explain: "Layers cut noise in one stream.",
          },
          {
            id: "gk2",
            question: "Instead of Hangouts from old guides…",
            options: [
              "Skype 2010",
              "Google Meet on the event",
              "Only in-person meetings",
              "Only SMS",
            ],
            correct: 1,
            explain: "Meet is current video in the Google ecosystem.",
          },
        ],
      },
    ],
  },

  "vebvizor": {
    checklist: {
      afterTitleIncludes: "How to enable in Metrika",
      title: "Before reviewing sessions",
      lead: "Numbers and the counter option first.",
      items: [
        { id: "counter", label: "Counter on all needed templates" },
        { id: "on", label: "Webvisor enabled in settings" },
        { id: "nodup", label: "No code duplicate" },
        { id: "tech", label: "CSP/mixed content don’t cut recording" },
        { id: "seg", label: "Sample by painful URLs, not “everything”" },
        { id: "pdn", label: "Analytics policy/consent accounted for" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "How to use: filters and sampling",
        title: "Mini quiz: Webvisor",
        lead: "Two checks.",
        questions: [
          {
            id: "vv1",
            question: "Webvisor primarily…",
            options: [
              "Guarantees TOP in search",
              "Shows behavior for UX hypotheses",
              "Replaces Metrika goals",
              "Is only for email campaigns",
            ],
            correct: 1,
            explain: "Recordings help understand “how”, not “rank #1”.",
          },
          {
            id: "vv2",
            question: "Watching every session in a row…",
            options: [
              "Is required every day",
              "Is inefficient; better filter by problem",
              "Is forbidden by Yandex",
              "Replaces A/B tests",
            ],
            correct: 1,
            explain: "Metrics first, then a targeted sample.",
          },
        ],
      },
    ],
  },

  "google-alerts": {
    checklist: {
      afterTitleIncludes: "How to create an alert",
      title: "After setting up Google Alerts",
      lead: "Narrow queries beat a hundred keys.",
      items: [
        { id: "brand", label: "Alert on brand and spelling variants" },
        { id: "narrow", label: "No overly broad queries" },
        { id: "mail", label: "Email confirmed" },
        { id: "freq", label: "Frequency matched to topic noise" },
        { id: "exclude", label: "Own site excluded when needed" },
        { id: "clean", label: "Plan to clean dead alerts" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Scenarios for a company",
        title: "Mini quiz: Google Alerts",
        lead: "Two checks.",
        questions: [
          {
            id: "ga1",
            question: "Google Alerts primarily…",
            options: [
              "Guarantees ranking growth",
              "Emails new results for a query",
              "Replaces Metrika",
              "Is only for Yandex Direct",
            ],
            correct: 1,
            explain: "It’s Google search alerts — not an SEO button.",
          },
          {
            id: "ga2",
            question: "Social monitoring via Alerts…",
            options: [
              "Is complete and reliable",
              "Is weak; much content isn’t in web search",
              "Is forbidden by Google",
              "Replaces on-site reviews",
            ],
            correct: 1,
            explain: "Social needs separate tools.",
          },
        ],
      },
    ],
  },

  "istoriya-domena": {
    checklist: {
      afterTitleIncludes: "History in the Wayback Machine",
      title: "Before paying for a domain",
      lead: "Archive and links beat a “pretty name”.",
      items: [
        { id: "wayback", label: "Snapshots reviewed by year" },
        { id: "topic", label: "Past topic is close or risk accepted" },
        { id: "links", label: "Backlink profile without clear spam" },
        { id: "site", label: "site: and brand checked in search" },
        { id: "filter", label: "No clear sanctions/doorway signs" },
        { id: "seo", label: "Not expecting TOP only from domain age" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Drops and SEO expectations",
        title: "Mini quiz: domain history",
        lead: "Two checks.",
        questions: [
          {
            id: "id1",
            question: "An old drop domain…",
            options: [
              "Guarantees TOP in a week",
              "Can help or hurt — you need a check",
              "Is always forbidden",
              "Replaces site content",
            ],
            correct: 1,
            explain: "The past can be useful or toxic.",
          },
          {
            id: "id2",
            question: "The Wayback Machine…",
            options: [
              "Always shows full history with no gaps",
              "Is useful, but snapshots may be missing",
              "Replaces backlink analysis",
              "Is only for .рф",
            ],
            correct: 1,
            explain: "The archive is important but incomplete.",
          },
        ],
      },
    ],
  },

  "cms-internet-magazina": {
    checklist: {
      afterTitleIncludes: "How to read CMS downsides",
      title: "Before choosing a store CMS",
      lead: "TCO and integrations beat a trendy name.",
      items: [
        { id: "sku", label: "Catalog size and filters estimated" },
        { id: "1c", label: "Need for a 1C link decided" },
        { id: "team", label: "Clear who will maintain it" },
        { id: "tco", label: "License + build + hosting counted" },
        { id: "seo", label: "SEO hygiene for URLs/speed planned" },
        { id: "demo", label: "Pilot/demo for your scenario exists" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "How to choose without fanaticism",
        title: "Mini quiz: CMS for a store",
        lead: "Two checks.",
        questions: [
          {
            id: "cms1",
            question: "A free CMS…",
            options: [
              "Is always cheaper over 2 years",
              "Can cost more due to modules and hosting",
              "Guarantees TOP rankings",
              "Isn’t needed for a catalog",
            ],
            correct: 1,
            explain: "Count full cost of ownership.",
          },
          {
            id: "cms2",
            question: "OpenCart “doesn’t work with search”…",
            options: [
              "Is always absolutely true",
              "Is overstated: tech and duplicates are fixable",
              "Means you need only Magento",
              "Means SEO isn’t needed",
            ],
            correct: 1,
            explain: "Problems are usually setup — not an “engine curse”.",
          },
        ],
      },
    ],
  },

  "facebook-ads": {
    checklist: {
      afterTitleIncludes: "First-test checklist",
      title: "Before the test budget",
      lead: "Events and offer beat FOMO.",
      items: [
        { id: "pixel", label: "Pixel/events verified" },
        { id: "offer", label: "Offer and landing ready" },
        { id: "aud", label: "Cold + look-alike + retarget with exclusions" },
        { id: "crea", label: "Several creatives" },
        { id: "kpi", label: "Measuring CPA/ROI, not CTR only" },
        { id: "legal", label: "Platform legal context accounted for" },
      ],
    },
    quizzes: [
      {
        afterTitleIncludes: "Pixel, events, and optimization",
        title: "Mini quiz: Facebook Ads",
        lead: "Two checks.",
        questions: [
          {
            id: "fb1",
            question: "This Facebook Ads article…",
            options: [
              "Urges you to launch ads immediately",
              "Is an informational channel breakdown",
              "Guarantees cheap traffic",
              "Always replaces search ads",
            ],
            correct: 1,
            explain: "Tone is informational — no “right now” FOMO.",
          },
          {
            id: "fb2",
            question: "The pixel is needed…",
            options: [
              "Only for a pretty picture",
              "For site events and optimization learning",
              "Instead of a landing page",
              "Only for SEO",
            ],
            correct: 1,
            explain: "Without events the cabinet learns poorly.",
          },
        ],
      },
    ],
  },
};
