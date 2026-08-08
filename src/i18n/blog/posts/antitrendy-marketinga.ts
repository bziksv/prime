import type { BlogPost } from "../../../data/blog";

/** EN overlay for antitrendy-marketinga — same structure as RU JSON. */
export const antitrendyMarketingaEn: BlogPost = {
  slug: "antitrendy-marketinga",
  title: "Marketing anti-trends: what’s outdated and what works instead",
  date: "2020-02-10",
  category: "Digital marketing",
  cover: "/images/blog/antitrendy-marketinga/cover-en.webp",
  excerpt:
    "Which marketing tactics already underperform: one channel, spam SMS, stock “with a smile,” cold calls without consent, cross-posting everywhere — and what to use instead without hype about “trends for rankings.”",
  lead: [
    "Some familiar tactics aren’t banned by physics — they just cost too much: they annoy the audience, break trust, or burn time with no measurable result. Call them anti-trends — not because nobody does this, but because betting on them as the growth core usually loses.",
    "Below: typical traps and working alternatives. Trends don’t create search rankings by themselves: gains across a keyword set come from systemic work — often months after SEO starts, not from swapping an image in a post.",
  ],
  faq: [
    {
      q: "Does “anti-trend” mean the method is dead?",
      a: "No. SMS with consent, useful email, even a precise cold B2B touch can work. An anti-trend is using the method as the only one — without segmentation or value.",
    },
    {
      q: "Is one website enough?",
      a: "The site is the hub, but traffic and trust come from several touches: search, ads, content, partners, reputation. One channel = a fragile model.",
    },
    {
      q: "Is stock photography totally forbidden?",
      a: "Quality visuals are fine if they don’t look like catalog smiles. Live team/product photos usually beat template stock.",
    },
    {
      q: "Why do cold calls underperform?",
      a: "No consent or audience portrait, a pushy script, shady lists — plus personal-data risks.",
    },
    {
      q: "Do you need to be on every social network?",
      a: "No. Better one or two platforms where the audience is, with format-fit content, than the same cross-post everywhere.",
    },
    {
      q: "Are email and push outdated?",
      a: "Not as channels. Spam without segmentation is. Short useful emails and timely notifications still work.",
    },
    {
      q: "What replaces a hard sell on first contact?",
      a: "A funnel: value → trust → offer. USP, content, cases, service — not pressure in the first message.",
    },
  ],
  sections: [
    {
      title: "One channel and hoping “the site will sell itself”",
      level: 2,
      paras: [
        "A site without traffic and an offer is a shop window in an alley. Betting on only one entry point — only SEO, only paid social, only word of mouth — makes the business fragile to algorithm shifts or seasonality.",
        "Working model: site as hub + several measurable channels + consistency. Count leads and cost per lead by channel — not whether the creative feels nice.",
      ],
      lists: [
        {
          intro: "Minimum around the site:",
          items: [
            "tech and usability",
            "content for demand",
            "ads with a test budget",
            "reputation and review replies",
            "ROI tracking — not “it seems to work”",
          ],
        },
      ],
      links: [
        {
          label: "What SEO is",
          href: "/en/blog/chto-takoe-seo/",
        },
        {
          label: "Free advertising at the start",
          href: "/en/blog/besplatnaya-reklama/",
        },
      ],
    },
    {
      title: "SMS and screaming blasts without consent",
      level: 2,
      paras: [
        "Mass promo SMS often feel like spam: no context, hard to pack value into a short line, weak link clicks. The channel isn’t dead for transactions and an explicit opt-in base — but as the main cold marketing play it’s an anti-trend.",
        "Same for pushy push: asking everyone to subscribe drives refusals, and a stream of discounts trains people to ignore alerts. Write less often and on point.",
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Any messaging — only with a lawful basis and an easy unsubscribe. Bought lists and bypassing consent risk fines and anti-advertising.",
        },
      ],
    },
    {
      title: "Faceless stock and hard-sell in one touch",
      level: 2,
      paras: [
        "Template catalog smiles and someone else’s offices don’t build trust. If stock is inevitable — pick non-obvious frames and don’t reuse the shot ten competitors already run. Stronger: your product, team, and process photos.",
        "One-touch selling to a stranger works less often: choice is wide, error risk is high. You need differentiation (USP), useful touches, and service — not “buy now” pressure in the first message.",
      ],
      lists: [
        {
          intro: "Instead of a hard offer:",
          items: [
            "a clear USP",
            "cases and proof",
            "content for audience questions",
            "sequential touches in allowed channels",
          ],
        },
      ],
      links: [
        {
          label: "Native ads: mistakes",
          href: "/en/blog/nativnaya-reklama/",
        },
      ],
    },
    {
      title: "Cold calls without a segment and consent",
      level: 2,
      paras: [
        "Calling someone who doesn’t care, with a “why not?” script — a classic anti-trend. Second problem — a list without a legal basis: personal-data processing is regulated; consent and purpose aren’t a formality.",
        "If you need phone — work warm and inbound, prepare qualification and a short respectful decline path. Cold-calling everyone almost always hits the brand.",
      ],
    },
    {
      title: "Being on every social network with the same posts",
      level: 2,
      paras: [
        "Duplicating one post everywhere saves time at the cost of reach and tone. Formats differ in length, visuals, and audience expectations.",
        "Pick where the audience really is, build a content plan per platform, keep a rhythm. An empty “just in case” account is worse than one live channel.",
      ],
      lists: [
        {
          intro: "More practical:",
          items: [
            "one or two priority platforms",
            "adaptation, not copy-paste",
            "consistency over a one-off “fill and forget”",
            "measure clicks and leads — not only likes",
          ],
        },
      ],
      links: [
        {
          label: "Target audience",
          href: "/en/blog/tselevaya-auditoriya/",
        },
      ],
    },
    {
      title: "What loses power — and what to use instead",
      level: 2,
      paras: [
        "“Old” channels — TV, indiscriminate teasers, spam email — weaken not by themselves, but when there’s no precise audience and offer. Internet channels aren’t magic either: without audience, USP, and landing, budget burns the same way.",
        "Email and notifications stay useful with segmentation and value. Context, targeting, content, maps, careful creator integrations are tools; results come from the product and measurement — not a list of trendy formats.",
      ],
      lists: [
        {
          intro: "A short stack upgrade:",
          items: [
            "several channels with one offer",
            "consent and value in communications",
            "your own visuals where possible",
            "a funnel instead of pressure",
            "lead and ROI analytics",
          ],
        },
      ],
    },
  ],
  closing: [
    "An anti-trend is betting on annoyance, one channel, and a template without an audience. Drop spam and pressure; strengthen measurable touches and the product — marketing ages slower than any “tricks of the year” list.",
  ],
};
