import type { BlogPost } from "../../../data/blog";

/** EN overlay for strategii-yandeks-direkt — same structure as RU JSON. */
export const strategiiYandeksDirektEn: BlogPost = {
  slug: "strategii-yandeks-direkt",
  title: "Yandex Direct strategies: start from economics, not the button label",
  date: "2017-07-02",
  category: "Paid search",
  cover: "/images/blog/strategii-yandeks-direkt/cover-en.webp",
  excerpt:
    "Why Direct’s “easy mode for beginners” faded, why goals and CPA matter, and how to choose a strategy from unit economics — not auction anxiety.",
  lead: [
    "In July 2017 Direct retired “Show in the block at minimum price” — the mode many used to “just try ads” without a CPA target. Strategy names and screens have changed again since then.",
    "The durable lesson isn’t about one 2017 button: without a clear cost per lead or order and feedback from sales, both automation and manual bids fly blind. Here’s how to think about strategies now.",
  ],
  faq: [
    {
      q: "What disappeared in 2017?",
      a: "The “show in the block at minimum price” strategy — a beginner-friendly “stay in the block, keep the bid down” mode. That magic button is gone; auctions and auto-bidding are still here.",
    },
    {
      q: "Can I run Direct without numbers?",
      a: "You can burn budget. You can’t steer results. Floor: a goal action, cost per lead or order, and margin.",
    },
    {
      q: "Are auto-strategies better than manual bids?",
      a: "Depends on volume and goal quality. Sparse conversions and dirty goals — the algorithm learns noise. Clean conversions at scale — auto-strategies earn their keep.",
    },
    {
      q: "Where should a beginner start today?",
      a: "A tight keyword set, a matching landing, analytics goals, and a hard budget cap. Not “pick the simplest strategy and hope.”",
    },
    {
      q: "Is “we got calls / we didn’t” enough?",
      a: "As a rough signal — yes. As the only KPI — no. You need cost per inquiry, lead quality, and a line to sales.",
    },
    {
      q: "Should I chase premium placement?",
      a: "Block height isn’t the goal. Economics is. See the premium placement article.",
    },
    {
      q: "When do I need a specialist?",
      a: "When spend is material and nobody inside joins bids, analytics, and sales. Otherwise you stall at “we’re fine” or “paid search doesn’t work.”",
    },
    {
      q: "Does the right strategy guarantee leads?",
      a: "No. A strategy only allocates budget. Without demand, offer, and landing it won’t carry the campaign.",
    },
  ],
  sections: [
    {
      title: "What changed back then",
      level: 2,
      paras: [
        "“Show in the block at minimum price” felt like control for beginners: “we’re in the block, the bid isn’t crazy.” For agencies and experienced advertisers it was already too blunt — no CPA, ROI, or competitive footing.",
        "Yandex moved toward richer strategies and metrics, closer to other large ad platforms. Fewer buttons for people who don’t count; more pressure to set goals and feed clean data.",
      ],
      notes: [
        {
          title: "Historical context",
          text: "2017 strategy names and screenshots are archives. Configure campaigns from current Direct Help and your analytics goals — not old article click-paths.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Why “just try it” got harder",
      level: 2,
      paras: [
        "Without an average cost per call, lead, or deal, a bid is a lottery. “There were calls — good” never answers what a lead costs or whether ads pay off.",
        "Some teams skip analytics on purpose (“no bandwidth”). Others tried “standard” strategies, saw nothing, and blamed paid search — while goals, keywords, or the landing were usually broken.",
      ],
      lists: [
        {
          intro: "The usual gap:",
          items: [
            "Direct spends on impressions and clicks",
            "the business only asks “were there calls?”",
            "nobody ties lead cost to lead quality",
            "the strategy gets swapped at random",
          ],
        },
      ],
    },
    {
      title: "What to decide before you pick a strategy",
      level: 2,
      paras: [
        "Economics and the goal first; strategy type second. You need a target action, enough conversions for learning, an acceptable CPA or ad-spend share, and budget limits.",
        "Manual bidding fits launches, tests, and thin data. Auto-strategies fit when goals are clean and volume is high enough that the algorithm isn’t guessing.",
      ],
      lists: [
        {
          intro: "Minimum before you go live:",
          items: [
            "an analytics goal that actually fires",
            "a ceiling for cost per lead",
            "a landing that matches the query cluster",
            "negatives and a check on junk traffic",
            "a budget cap and a test window",
          ],
        },
      ],
      links: [
        {
          label: "Premium placement in Direct",
          href: "/en/blog/spetsrazmeshchenie-direkt/",
        },
        {
          label: "UTM tags",
          href: "/en/blog/utm-metki/",
        },
        {
          label: "Retargeting",
          href: "/en/blog/retargeting/",
        },
      ],
    },
    {
      title: "Feedback beats the strategy button",
      level: 2,
      paras: [
        "Even a strong media buyer is stuck if CRM only says “someone called” with no status or deal value. Cleaner lead and sales data means sharper bids and better auto-strategies.",
        "A strategy allocates budget. Campaign result = demand × offer × landing × measurement. No UI button replaces that chain.",
      ],
      notes: [
        {
          title: "Practice",
          text: "Don’t copy a strategy name from someone else’s case. Match conversion volume, sales-cycle length, and goal quality — then pick the optimization mode.",
          kind: "tip",
        },
      ],
    },
  ],
  related: [
    "spetsrazmeshchenie-direkt",
    "utm-metki",
    "retargeting",
    "kontekst-i-seo",
    "prazdnichnyy-retargeting",
  ],
};
