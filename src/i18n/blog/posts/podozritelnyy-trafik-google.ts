import type { BlogPost } from "../../../data/blog";

/** EN overlay for podozritelnyy-trafik-google — same structure as RU JSON. */
export const podozritelnyyTrafikGoogleEn: BlogPost = {
  slug: "podozritelnyy-trafik-google",
  title: "Suspicious traffic in Google: causes and what to do",
  date: "2022-01-28",
  category: "SEO",
  cover: "/images/blog/podozritelnyy-trafik-google/cover-en.webp",
  excerpt:
    "Captcha and Google’s unusual-traffic warning from your network: typical causes and a calm step-by-step check — without panic.",
  lead: [
    "A message like “we have detected unusual traffic from your network” and a captcha before search means Google temporarily doesn’t trust requests from your IP or network.",
    "It’s more often about network security and software than a “site penalty.” Below — what to do first and where the signal usually comes from.",
  ],
  faq: [
    {
      q: "Is this a ban of my site in search?",
      a: "Usually no. Access to Google from a specific IP/network is blocked or made harder. Your site isn’t “removed from the index” by this message alone.",
    },
    {
      q: "Why does captcha appear?",
      a: "Too many similar requests from one address: bots, malware, shared Wi‑Fi, an ISP glitch, or aggressive scraping.",
    },
    {
      q: "What to do first?",
      a: "Scan devices with antivirus, reboot the router, complete the captcha, tell the corporate network admin.",
    },
    {
      q: "Is it related to SEO scrapers?",
      a: "It can be: mass SERP harvests without limits look like bots. Lower frequency, change IP/proxy per the service rules, don’t hammer search with DIY scripts.",
    },
    {
      q: "When to call the ISP?",
      a: "If captcha hits every device on one network and still appears after cleaning the PC — it may be the ISP or neighbors on the same IP.",
    },
  ],
  sections: [
    {
      title: "What to do first",
      level: 2,
      paras: [
        "Google cuts unnatural streams: identical queries, malware activity, manipulation. After the warning:",
      ],
      lists: [
        {
          intro: null,
          items: [
            "scan PCs and phones with up-to-date antivirus;",
            "reboot the router/modem (many ISPs rotate IP);",
            "complete the captcha and check whether the block lifted;",
            "in an office — tell the system administrator.",
          ],
        },
      ],
      notes: [
        {
          title: "Note",
          text: "Captcha on unfamiliar sites plus odd SMS is a reason to urgently check the device for malware — not only to “Google the error.”",
        },
      ],
      tables: [
        {
          caption: "Quick order",
          headers: ["Step", "Why"],
          rows: [
            ["Antivirus + cleanup", "Remove bots on the device"],
            ["Router reboot", "New IP / session reset"],
            ["Captcha in Google", "Confirm you’re human"],
            ["Check other devices", "One PC or the whole network"],
          ],
        },
      ],
    },
    {
      title: "Where suspicious traffic comes from",
      level: 2,
      paras: [
        "The signal may come not “from your site,” but from the address you use to reach the internet.",
      ],
      lists: [
        {
          intro: "Typical causes:",
          items: [
            "ISP glitches or NAT — captcha for many clients on one network;",
            "shared Wi‑Fi / office IP: a neighbor’s infected PC hurts everyone;",
            "viruses and stealers that send requests themselves;",
            "pirated OS/cracks with “activators” phoning home;",
            "aggressive scrapers and bots without anti-abuse limits.",
          ],
        },
      ],
    },
    {
      title: "How to fix it",
      level: 2,
      paras: ["Work in layers: device → network → automation habits."],
      lists: [
        {
          intro: null,
          items: [
            "remove found threats, update protection;",
            "clear cookies/cache, change passwords for important accounts;",
            "check router settings; reset if needed;",
            "use official OS and software;",
            "for data collection — only tools with limits and official APIs, no hammering the SERP.",
          ],
        },
      ],
      notes: [
        {
          title: "If it doesn’t help",
          text: "Write the ISP or switch networks (mobile data as a check). In parallel make sure the site server isn’t hacked and isn’t sending spam — that’s a different track; see technical SEO audit.",
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
  ],
};
