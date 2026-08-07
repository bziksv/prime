import type { BlogPost } from "../../../data/blog";

/** EN overlay for parsing-auditorii — same structure as RU JSON. */
export const parsingAuditoriiEn: BlogPost = {
  slug: "parsing-auditorii",
  title: "Audience parsing: what it is and what to use instead",
  date: "2020-02-25",
  category: "Internet marketing",
  cover: "/images/blog/parsing-auditorii/cover-en.webp",
  excerpt:
    "What marketers mean by audience parsing on social networks, risks of mass profile harvesting, and how to segment legally — via ad accounts, your own base, and research.",
  lead: [
    "“Audience parsing” in marketing jargon is automatic collection of user and community lists by gender, geo, follows, and activity — then to target ads or message people in DMs.",
    "Below — why the idea feels convenient, where ToS and law draw the line, and which alternatives work without parser catalogs or “export a competitor’s base” guides. Separately: a target-audience portrait without dumping others’ profiles — in the target audience piece.",
  ],
  faq: [
    {
      q: "How is it different from defining a target audience?",
      a: "Target audience is who your customer is and what job they have. Audience parsing in the narrow sense is mass export of others’ profiles/IDs. The first is always needed; the second often breaks platform rules.",
    },
    {
      q: "Can I parse a competitor’s followers?",
      a: "Tools promise a lot. Under platform rules and personal-data law it’s a risk zone: bans, claims, a junk base. Safer: official ads and your own consent.",
    },
    {
      q: "What replaces a parser for targeting?",
      a: "Pixel/account audiences, lookalikes from your customers, site retargeting, CRM segments, surveys and content tests — without dumping others’ contacts into Excel.",
    },
    {
      q: "Is an online parser better than a desktop one?",
      a: "For grey schemes the question is secondary. What matters is whether you break ToS and why you need others’ personal data. We don’t compare software for bypassing protections.",
    },
    {
      q: "Do I need parsing if I already have a base?",
      a: "Your own base with consent and deal history beats any “bought dump.” Parsing doesn’t replace it.",
    },
  ],
  sections: [
    {
      title: "What people usually call audience parsing",
      level: 2,
      paras: [
        "A service crawls open or semi-open social data, filters people by criteria, and returns a table: IDs, links, sometimes contacts and demographics. Then the list goes into ads, email, or manual outreach.",
        "Separately people hunt communities where a similar audience “lives” — to advertise in publics or build interest hypotheses. The hypothesis itself is useful; mass profile export is a different risk level.",
      ],
      lists: [
        {
          intro: "Typical promises of such tools:",
          items: [
            "collect a community’s followers;",
            "find audience overlaps;",
            "filter by city/age;",
            "export the result to a file.",
          ],
        },
      ],
      links: [
        {
          label: "Target audience",
          href: "/blog/tselevaya-auditoriya/",
        },
        {
          label: "Data parsing: boundaries",
          href: "/en/blog/parsing/",
        },
      ],
    },
    {
      title: "Risks: platform rules and personal data",
      level: 2,
      paras: [
        "Social networks ban automated collection that bypasses APIs and protections. Accounts and domains tied to such schemes get blocked. “Everyone does it” doesn’t cancel ToS.",
        "Personal data and contacts can’t be piled into a base for cold ads without control. That hits reputation harder than saving on research.",
        "We don’t publish catalogs of specific parsers or step-by-step bypass guides — not for Instagram/Facebook, not for other platforms.",
      ],
      lists: [
        {
          intro: "What breaks in practice:",
          items: [
            "ad/personal account ban;",
            "complaints and personal-data claims;",
            "stale and fake profiles in the dump;",
            "team time on a “dirty” base instead of the offer.",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "If a vendor sells a “ready competitor audience as a file” — that’s a red flag, not a faster launch.",
        },
      ],
      links: [
        {
          label: "Email parsing: risks",
          href: "/en/blog/parsing-email/",
        },
      ],
    },
    {
      title: "Legal ways to segment an audience",
      level: 2,
      paras: [
        "Official ad accounts offer interests, geo, retargeting, and lookalikes from your uploaded customers (per platform rules). A site pixel/counter builds visitor audiences without parsing others’ profiles.",
        "Your CRM, leads, email/SMS with consent, surveys, and manager interviews beat an ID dump. For “where the audience lives” hypotheses, use open community stats, competitor content, and search demand — without exporting people.",
        "First answer who the customer is and what job they have (audience portrait), then pick the delivery channel — not the other way around.",
      ],
      lists: [
        {
          intro: "A working setup without a parser:",
          items: [
            "audience portrait and anti-portrait;",
            "site events → retargeting audiences;",
            "lookalikes from quality customers;",
            "creative and offer tests;",
            "regular cleanup of your own base.",
          ],
        },
      ],
      links: [
        {
          label: "Retargeting",
          href: "/blog/retargeting/",
        },
        {
          label: "Capture forms",
          href: "/blog/formy-zahvata/",
        },
      ],
    },
  ],
  closing: [
    "Audience parsing as mass export of others’ profiles is a short path to bans and a toxic base. Segment via official ad tools, your analytics, and a real audience portrait — the channel lasts longer than one “warmup dump.”",
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
