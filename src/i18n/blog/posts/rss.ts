import type { BlogPost } from "../../../data/blog";

/** EN overlay for rss — same structure as RU JSON. */
export const rssEn: BlogPost = {
  slug: "rss",
  title: "Site RSS: why you need it and how to enable it",
  date: "2020-06-30",
  category: "Content marketing",
  cover: "/images/blog/rss/cover-en.webp",
  excerpt:
    "What an RSS feed is, who still benefits from it, benefits and risks for a site, how to enable a feed on a CMS — without a Feedburner cult or “link mass” promises.",
  lead: [
    "RSS is an XML feed of article teasers and links to full pages. Readers gather several sites in one reader; the site publishes new posts without forcing a homepage visit every time.",
    "The format is less visible than in the 2010s—social and push notifications pulled attention away. For blogs, media, and docs, the feed is still useful. We cover why keep RSS, which risks to watch, and how to enable it on a typical CMS. Reader and generator lists change — check current services.",
  ],
  faq: [
    {
      q: "Is RSS still alive?",
      a: "Yes, but the audience is smaller. Useful for reader subscribers, aggregators, integrations, and as a technical feed for your own channels.",
    },
    {
      q: "Is it an SEO ranking factor?",
      a: "Directly — almost never. Indirectly — repeat visits from loyal readers and distribution. Don’t confuse it with “pumping link mass.”",
    },
    {
      q: "Should I publish full text in the feed or a teaser?",
      a: "More often a teaser/lead: it motivates a site visit and lowers the risk of aggregators copying the whole piece.",
    },
    {
      q: "What’s the difference between Atom and RSS 2.0?",
      a: "Both are feed formats. In practice whatever the CMS outputs is enough; a stable URL and correct items matter more.",
    },
    {
      q: "Do I need Feedburner?",
      a: "Not required. Many CMS apps already expose `/feed/` or `/rss.xml`. Third-party “burners” are optional, not a standard.",
    },
    {
      q: "Can other sites steal from RSS?",
      a: "Yes — parsers love XML. Absolute protection is hard; teasers instead of full text plus copy monitoring reduce damage.",
    },
    {
      q: "Does this connect to auto-filling a site?",
      a: "Someone else’s RSS as grabber fuel for “uniquifying” is bad SEO practice. Your RSS is for subscribers — not doorway farms.",
    },
    {
      q: "How do I check the feed?",
      a: "Open the feed URL in a browser/validator, subscribe in a reader, and confirm new posts appear.",
    },
  ],
  sections: [
    {
      title: "Why RSS helps the site and the reader",
      level: 2,
      paras: [
        "For the reader: one feed instead of ten bookmarks, read markers, sometimes offline cache in an app.",
        "For the site: a return channel for blog/news audiences, a handy feed for partners and internal integrations, a familiar “subscribe” button for people who aren’t on social.",
      ],
      lists: [
        {
          intro: "Especially useful when:",
          items: [
            "you publish regularly (blog, media);",
            "docs publish a changelog;",
            "you need a machine-readable update list.",
          ],
        },
      ],
    },
    {
      title: "Structure and formats",
      level: 2,
      paras: [
        "A feed usually has a channel (title, description, site link) and items: title, short text, URL, date, sometimes category and image.",
        "You’ll meet RSS 2.0 and Atom. For a publisher, validity and a stable address matter more than version debates.",
      ],
      lists: [],
    },
    {
      title: "Benefits and risks",
      level: 2,
      paras: [
        "Benefits: subscriber convenience, fast “new post” signals, fewer empty “is there a post?” visits.",
        "Risks: feed overload for the user; aggregators copying teasers/text; mess if the feed dumps full HTML with utility blocks.",
        "Don’t expect RSS to “raise link mass by itself”: it’s a distribution channel, not a substitute for SEO and content.",
      ],
      lists: [],
      notes: [
        {
          title: "Teaser vs full text",
          text: "For a commercial blog a short description + link to the article usually beats dumping the whole piece into XML.",
        },
      ],
      links: [
        {
          label: "Auto-filling a site",
          href: "/en/blog/avtonapolnenie-sayta/",
        },
        {
          label: "News site and SEO",
          href: "/en/blog/novostnoy-sayt/",
        },
      ],
    },
    {
      title: "How to add RSS",
      level: 2,
      paras: [
        "On WordPress and many CMS apps the feed already exists (often `/feed/`). Theme/settings turn on the icon and autodiscovery.",
        "You can also publish XML by hand or via a plugin/service. After enabling, check the URL in a reader.",
        "App lists from 2020 age fast: pick a current reader for your OS — don’t copy old catalogs blind.",
      ],
      lists: [],
    },
    {
      title: "Key takeaways",
      level: 2,
      paras: [
        "RSS is a handy update feed — not ranking magic.",
        "For a site the built-in CMS feed and teasers are usually enough.",
        "Someone else’s RSS as grabber fuel is a bad idea.",
      ],
      lists: [],
    },
  ],
  closing: [
    "Open `/feed/` or your CMS equivalent in a browser: if XML with fresh posts is there — basic RSS already works.",
  ],
  related: [
    "avtonapolnenie-sayta",
    "novostnoy-sayt",
    "korporativnyy-blog",
    "kak-napisat-statyu",
    "proverka-unikalnosti",
    "obnovlenie-kontenta",
  ],
};
