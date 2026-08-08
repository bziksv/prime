import type { BlogPost } from "../../../data/blog";

/** EN overlay for veb-arhiv — same structure as RU JSON. */
export const vebArhivEn: BlogPost = {
  slug: "veb-arhiv",
  title: "What a web archive is: Wayback Machine and why you need it",
  date: "2020-09-17",
  category: "Digital marketing",
  cover: "/images/blog/veb-arhiv/cover-en.webp",
  excerpt:
    "How Internet Archive / Wayback Machine works: find an old page version, understand snapshot gaps, restore your content legally, and limit archiving via robots — without schemes to “steal texts from other domains.”",
  lead: [
    "A web archive stores historical page snapshots. The best-known public service is the Wayback Machine on archive.org: a bot periodically saves URL copies you can open “as it was” on a chosen date.",
    "Below: how to view a site’s history, why a snapshot is sometimes missing, and what to do when you need to recover your own old content. You can’t simply move others’ materials from the archive onto a new domain “to avoid paying authors” — that’s a copyright question.",
  ],
  faq: [
    {
      q: "Is this the same as Yandex or Google cache?",
      a: "Related in idea, different service. Search cache is a fresh snapshot for the index; Wayback is a long snapshot history, often with gaps.",
    },
    {
      q: "Why isn’t the site in the archive?",
      a: "Not crawled yet, blocked by robots or exclusions, removed after a rights complaint, or the owner requested deletion. Not every URL gets archived.",
    },
    {
      q: "Can you restore a whole site with one click?",
      a: "Rarely perfectly: some assets, forms, and scripts weren’t saved. For your project — manual transfer of key pages or specialized exports; vet third-party “restorers” for risk.",
    },
    {
      q: "How do you forbid archiving?",
      a: "Via archive-bot rules in robots.txt and/or Internet Archive exclusion tools. There’s no absolute “never” guarantee, but for many cases it’s enough.",
    },
    {
      q: "Is it legal to copy someone else’s text from the archive?",
      a: "For your own deleted content — usually yes as recovery. For someone else’s — you need rights or a lawful exception; “free copy-paste from an expired domain” is a bad idea.",
    },
  ],
  sections: [
    {
      title: "How to use the Wayback Machine",
      level: 2,
      paras: [
        "Internet Archive (since 1996; Wayback Machine public since the early 2000s) saves web snapshots as a digital library. Volumes and data centers grow; we don’t copy specific “billions of pages” from old press releases as an eternal figure.",
        "Open archive.org, paste a site or page URL. The calendar shows snapshot dates: denser dots mean more frequent crawls. Pick a date — you’ll see HTML and some images/files that were saved.",
        "Save Page Now lets you manually capture a current URL — useful before a major redesign or deleting an important page. It doesn’t replace hosting and database backups.",
        "Gaps happen: a new site wasn’t crawled yet, aggressive robots, legal takedown, crawler glitches. Then try nearby dates or other URLs in the same section.",
      ],
      lists: [
        {
          intro: "Typical marketing and SEO jobs:",
          items: [
            "see a competitor’s old offer",
            "recover your deleted text",
            "check domain history before buying",
            "document proof of publication on a date",
          ],
        },
      ],
      links: [
        {
          label: "Yandex cached copy",
          href: "/en/blog/sohranennaya-kopiya-yandex/",
        },
        {
          label: "Competitor analysis",
          href: "/en/blog/analiz-konkurentov/",
        },
      ],
    },
    {
      title: "Recovery, rights, and blocking archiving",
      level: 2,
      paras: [
        "If your site went down and there’s no backup: open key URLs in the archive, save text and media, fix internal links by hand. A full clone with all scripts from Wayback doesn’t always work — the archive isn’t obliged to store everything.",
        "Third-party “one-click restorers” appear and vanish; before use, assess security and license. Don’t count on magic: legally and technically it’s simpler to keep your own backups.",
        "Content from abandoned others’ domains in the archive doesn’t become “public domain” just because the site closed. Moving others’ articles to save on copywriting risks claims. Use the archive for research and recovering your own.",
        "To reduce archiving: robots.txt rules for the archive user-agent and current Internet Archive exclusion tools (wording in their help). After a block, old snapshots may remain until the request is processed.",
        "Bottom line: a web archive is a powerful web-history tool. View, recover yours, capture what matters — and don’t build a content strategy on others’ copies without rights.",
      ],
      lists: [
        {
          intro: "Before deleting an important page:",
          items: [
            "file and DB backup",
            "Save Page Now on key URLs",
            "export text into your own repository",
            "301 to a current replacement if the URL leaves the index",
          ],
        },
      ],
      links: [
        {
          label: "Broken links",
          href: "/en/blog/bitye-ssylki/",
        },
        {
          label: "Site databases",
          href: "/en/blog/bazy-dannyh-sayta/",
        },
      ],
    },
  ],
  related: [
    "sohranennaya-kopiya-yandex",
    "analiz-konkurentov",
    "bitye-ssylki",
    "bazy-dannyh-sayta",
    "avtorskie-prava-instagram",
  ],
};
