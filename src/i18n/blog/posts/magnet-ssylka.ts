import type { BlogPost } from "../../../data/blog";

/** EN overlay for magnet-ssylka — same structure as RU JSON. */
export const magnetSsylkaEn: BlogPost = {
  slug: "magnet-ssylka",
  title: "Magnet links: what they are and how they work",
  date: "2020-08-06",
  category: "Websites",
  cover: "/images/blog/magnet-ssylka/cover-en.webp",
  excerpt:
    "What a magnet URI is: a file hash instead of a normal URL, xt/dn/tr parameters, how it differs from a .torrent, and download risks. No pirate-tracker catalogs.",
  lead: [
    "A magnet link (magnet URI) isn’t a website address — it’s a string with a content identifier (usually a file hash on the BitTorrent network). The client uses the hash to find peers who have the data and download peer-to-peer.",
    "Below: link structure, legitimate scenarios, and risks. We don’t cover searching for pirated content or bypassing tracker blocks: downloading someone else’s protected material is illegal; you’re responsible for malware in “shares.”",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "How does a magnet differ from a .torrent file?",
      a: "In a .torrent, metadata often lives in the file. A magnet carries the hash (and optionally name/trackers) in the link itself — easy to copy as text. The download is the same P2P class.",
    },
    {
      q: "Is a magnet safer than a normal download link?",
      a: "Not automatically. A hash doesn’t guarantee legality or lack of malware. Check the source and rights to the content.",
    },
    {
      q: "Can I “block” a magnet?",
      a: "The string as text is hard to “ban globally,” but ISPs, platforms, and courts limit access to pirate resources. “Unblockable = you can download anything” is a false conclusion.",
    },
    {
      q: "What are legitimate uses?",
      a: "Sharing your own files with rights, open data, Linux distros and other content under an allowed license — when the rights holder permits it.",
    },
    {
      q: "Do I need a separate client?",
      a: "Yes, a BitTorrent client that understands magnets. The browser usually hands the link to the installed program.",
    },
  ],
  sections: [
    {
      title: "Structure and how it differs from a URL",
      level: 2,
      paras: [
        "A normal URL points to a host and path (https://example.com/file.zip). A magnet starts with `magnet:?` and describes content via parameters separated by `&`.",
        "The key parameter is `xt` (exact topic): often `urn:btih:` plus a BitTorrent Info Hash. The client finds peers by it. Optional: `dn` (name), `xl` (size), `tr` (tracker announce), other fields.",
        "Parameter order isn’t rigid. What matters is a correct hash. Without clients and peers that have the file, the link is “empty”: it’s a pointer, not storage on a server.",
        "The browser may offer to open the magnet in uTorrent, qBittorrent, Transmission, and similar apps. Or you paste the string into the client manually.",
      ],
      lists: [
        {
          intro: "What the string usually contains:",
          items: [
            "`magnet:?` — the scheme",
            "`xt` — content hash/URN",
            "`dn` — display name",
            "`tr` — trackers (not always)",
            "other optional fields",
          ],
        },
      ],
      links: [
        {
          label: "What a URL is",
          href: "/en/blog/url-adres/",
        },
        {
          label: "What a link is",
          href: "/en/blog/chto-takoe-ssylka/",
        },
      ],
    },
    {
      title: "Practice, risks, and the law",
      level: 2,
      paras: [
        "Format benefits for lawful sharing: easy to send as text, no separate .torrent file needed, can combine with DHT and trackers. That’s protocol convenience — not an indulgence for piracy.",
        "Risks: malware disguised as a movie/software, IP exposure in P2P, rights-holder claims. Don’t open dubious magnets “from a forum.”",
        "We don’t recommend catalogs and trackers with clearly pirated content and don’t list them as “where to download.” If you need a legal distro — take it from the project’s official site.",
        "You can create a magnet for your file in a BitTorrent client: add a share → get a Magnet URI. Share only what you have rights to.",
        "Bottom line: a magnet link addresses a file by hash in P2P. Understand the tech and legal limits; don’t confuse format convenience with a right to someone else’s content.",
      ],
      lists: [
        {
          intro: "Before downloading via magnet:",
          items: [
            "rights holder/license is clear",
            "the source is trustworthy",
            "the client is updated",
            "you don’t expect “anonymity by default”",
            "antivirus and common sense are in place",
          ],
        },
      ],
      links: [
        {
          label: "Site security",
          href: "/en/blog/bezopasnost-sayta/",
        },
        {
          label: "Copyright on Instagram",
          href: "/en/blog/avtorskie-prava-instagram/",
        },
      ],
    },
  ],
  related: [
    "url-adres",
    "chto-takoe-ssylka",
    "bezopasnost-sayta",
    "avtorskie-prava-instagram",
    "veb-arhiv",
  ],
};
