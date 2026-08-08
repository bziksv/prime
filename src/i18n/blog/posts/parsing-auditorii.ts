import type { BlogPost } from "../../../data/blog";

/** EN overlay for parsing-auditorii — same structure as RU JSON. */
export const parsingAuditoriiEn: BlogPost = {
  slug: "parsing-auditorii",
  title: "Audience scraping: what it is and what to use instead",
  date: "2020-02-25",
  category: "Digital marketing",
  cover: "/images/blog/parsing-auditorii/cover-en.webp",
  excerpt:
    "What marketers mean by audience scraping on social networks, risks of mass profile harvesting, and how to segment legally — via ad accounts, your own list, and research.",
  lead: [
    "“Audience parsing” in marketing jargon means automatically collecting user and community lists by gender, geo, follows, and activity — then using them to target ads or message people in DMs.",
    "Below: why the idea looks convenient, where ToS and the law draw the line, and working alternatives without scraper catalogs or “export a competitor’s list” how-tos. Separately: a target-audience portrait without dumping other people’s profiles — in the related piece.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platforms. Mentions of Instagram* and Facebook* are illustrative. Instagram* and Facebook* are products of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the services may have legal consequences.",
  },
  faq: [
    {
      q: "How is it different from defining a target audience?",
      a: "Target audience is who your customer is and what job they have. Audience scraping in the narrow sense is mass export of other people’s profiles or IDs. The first is always needed; the second often breaks platform rules.",
    },
    {
      q: "Can I scrape a competitor’s followers?",
      a: "Tools promise a lot. Under platform rules and personal-data law it’s a risk zone: bans, claims, a junk list. Safer: official ads and your own consent.",
    },
    {
      q: "What replaces a scraper for targeting?",
      a: "Pixel/account audiences, lookalikes from your customers, site retargeting, CRM segments, surveys and content tests — without dumping other people’s contacts into Excel.",
    },
    {
      q: "Is an online scraper better than a desktop one?",
      a: "For gray schemes the question is secondary. What matters is whether you break ToS and why you need other people’s personal data. We don’t recommend tools meant to bypass protections.",
    },
    {
      q: "Do I need scraping if I already have a list?",
      a: "Your own list with consent and deal history beats any bought dump. Scraping doesn’t replace it.",
    },
  ],
  sections: [
    {
      title: "What marketers usually mean by audience scraping",
      level: 2,
      paras: [
        "A service crawls open or semi-open social data, filters people by criteria, and returns a table: IDs, links, sometimes contacts and demographics. Then the list goes into ads, email, or manual outreach.",
        "Separately, people hunt communities where a similar audience lives — to advertise there or build interest hypotheses. The hypothesis itself is useful; mass profile export is a different risk level.",
      ],
      lists: [
        {
          intro: "Typical promises of such tools:",
          items: [
            "collect a community’s followers",
            "find audience overlaps",
            "filter by city/age",
            "export the result to a file",
          ],
        },
      ],
      links: [
        {
          label: "Target audience",
          href: "/en/blog/tselevaya-auditoriya/",
        },
        {
          label: "Data scraping: boundaries",
          href: "/en/blog/parsing/",
        },
      ],
    },
    {
      title: "Risks: platform rules and personal data",
      level: 2,
      paras: [
        "Social networks ban automated collection that bypasses APIs and protections. Accounts and domains tied to such schemes get blocked. “Everyone does it” doesn’t cancel ToS.",
        "Personal data and contacts can’t be piled into a list for cold ads without control. That hits reputation harder than saving on research.",
        "We don’t publish roundups of specific scrapers or step-by-step bypass guides — not for Instagram/Facebook, not for other platforms.",
      ],
      lists: [
        {
          intro: "What breaks in practice:",
          items: [
            "ad or personal account ban",
            "complaints and personal-data claims",
            "stale and fake profiles in the dump",
            "team time on a dirty list instead of the offer",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Important",
          text: "If a vendor sells a “ready competitor audience as a file” — that’s a red flag, not a faster launch.",
        },
      ],
      links: [
        {
          label: "Email scraping: risks",
          href: "/en/blog/parsing-email/",
        },
      ],
    },
    {
      title: "Legal ways to segment an audience",
      level: 2,
      paras: [
        "Official ad accounts offer interests, geo, retargeting, and lookalikes from your uploaded customers (per platform rules). A site pixel builds visitor audiences without scraping other people’s profiles.",
        "Your CRM, leads, email/SMS with consent, surveys, and manager interviews beat an ID dump. For “where the audience lives” hypotheses, use open community stats, competitor content, and search demand — without exporting people.",
        "First answer who the customer is and what job they have (audience portrait), then pick the delivery channel — not the other way around.",
      ],
      lists: [
        {
          intro: "A working setup without a scraper:",
          items: [
            "audience portrait and who is not a fit",
            "site events → retargeting audiences",
            "lookalikes from quality customers",
            "creative and offer tests",
            "regular cleanup of your own list",
          ],
        },
      ],
      links: [
        {
          label: "Retargeting",
          href: "/en/blog/retargeting/",
        },
        {
          label: "Capture forms",
          href: "/en/blog/formy-zahvata/",
        },
      ],
    },
  ],
  closing: [
    "Audience scraping as mass export of other people’s profiles is a short path to bans and a toxic list. Segment via official ad tools, your analytics, and a real audience portrait — the channel lasts longer than one scraped warm-up list.",
  ],
  related: [
    "tselevaya-auditoriya",
    "parsing",
    "parsing-email",
    "retargeting",
    "formy-zahvata",
    "zashchita-ot-parsinga",
  ],
};
