import type { BlogPost } from "../../../data/blog";

/** EN overlay for strayk-youtube — same structure as RU JSON. */
export const straykYoutubeEn: BlogPost = {
  slug: "strayk-youtube",
  title: "YouTube strike: what it is, why you get one, and what to do",
  date: "2021-08-24",
  category: "SMM",
  cover: "/images/blog/strayk-youtube/cover-en.webp",
  excerpt:
    "How a Community Guidelines strike differs from a copyright complaint, which limits apply, how to check channel status, and how to appeal or avoid sanctions.",
  lead: [
    "A YouTube strike is a sanction for breaking the rules: channel feature limits up to removal. In slang, “throw a strike” means reporting a video or channel.",
    "Below — what gets punished, how community and copyright violations differ, how to check status, and what to do on a false claim. Studio labels change — verify against current YouTube Help.",
  ],
  faq: [
    {
      q: "Are a strike and Content ID the same?",
      a: "No. Content ID often means a claim/monetization for the rights holder without a “community strike.” A copyright strike is a separate copyright-law track. A Community Guidelines strike is for platform policy.",
    },
    {
      q: "How many strikes until deletion?",
      a: "On the classic scheme, three active Community Guidelines strikes in a time window lead to channel removal. Exact terms are in Help — don’t copy numbers from old guides unchecked.",
    },
    {
      q: "Does a strike clear on its own?",
      a: "A Community Guidelines strike usually expires after a set period if you follow the rules. A copyright strike clears via claim withdrawal, a counter-notification, or expiry — per platform process.",
    },
    {
      q: "Can you appeal?",
      a: "Yes: appeal / counter-notification with proof (correspondence, rights, context). False claims can be punished too.",
    },
    {
      q: "Where do you see channel status?",
      a: "YouTube Studio → a section like Feature eligibility / Channel status: the violation scale and details.",
    },
  ],
  sections: [
    {
      title: "What a strike is",
      level: 2,
      paras: [
        "It’s an official warning/sanction on the channel account. Moderation triggers from a report, automatic filters, or the platform’s initiative.",
        "A practice example: a store review by agreement, then a “privacy” complaint — sanctions were lifted after correspondence screenshots. Takeaway: keep proof of agreements.",
      ],
      lists: [
        {
          intro: "Two common tracks:",
          items: [
            "Community Guidelines — community policy;",
            "Copyright — rights to music, video, images.",
          ],
        },
      ],
      links: [
        {
          label: "YouTube promotion",
          href: "/en/blog/raskrutka-youtube/",
        },
      ],
    },
    {
      title: "What earns sanctions",
      level: 2,
      paras: [
        "Don’t publish others’ content without rights, pass off others’ videos as yours, or dodge Content ID with a token trim. Community rules ban violence, bullying, NSFW outside allowed context, dangerous challenges, spam, fraud, and disclosing others’ personal data without grounds.",
      ],
      lists: [
        {
          intro: "Risk zones:",
          items: [
            "music and TV/film clips without a license;",
            "thumbnails that lie about the content;",
            "links to malware/banned resources;",
            "repeat violations after warnings.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          text: "Rules update. Before a risky format, read the current Community Guidelines and Copyright Center.",
        },
      ],
    },
    {
      title: "Limits and channel status",
      level: 2,
      paras: [
        "After a strike, long uploads, livestreams, part of monetization, and visibility are often cut. Details depend on type and “severity.”",
        "In Studio, check feature status: green zone — clean; closer to warnings — active sanctions and a “learn more” link.",
      ],
      lists: [
        {
          intro: "Typical progression (confirm in Help):",
          items: [
            "first strike — limits for a period;",
            "repeat — stricter (incl. monetization);",
            "a series of active ones — channel removal risk.",
          ],
        },
      ],
    },
    {
      title: "Report, talks, appeal",
      level: 2,
      paras: [
        "The platform advises contacting the channel owner first. A rights holder can withdraw a claim — faster than a fight.",
        "Formal paths: Report under the video / Copyright removal request. For the respondent — appeal or counter-notification with proof. Review time depends on the case type.",
      ],
      lists: [
        {
          intro: "If you got a strike:",
          items: [
            "read the reason in Studio;",
            "remove/fix the content on a real violation;",
            "gather proof if it’s an error;",
            "don’t spawn mirror channels to dodge a ban — that’s a separate violation.",
          ],
        },
      ],
    },
    {
      title: "Short takeaway",
      level: 2,
      paras: [
        "A strike is a signal to follow the rules and rights. Tell apart community policy and copyright, watch status in Studio, keep permissions for reviews and third-party material. Best defense — your own content and a check before publishing.",
      ],
      lists: [],
    },
  ],
};
