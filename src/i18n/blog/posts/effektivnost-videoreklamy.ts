import type { BlogPost } from "../../../data/blog";

/** EN overlay for effektivnost-videoreklamy — same structure as RU JSON. */
export const effektivnostVideoreklamyEn: BlogPost = {
  slug: "effektivnost-videoreklamy",
  title: "How to measure video ad effectiveness: media, brand, and business metrics",
  date: "2019-05-06",
  category: "Digital marketing",
  cover: "/images/blog/effektivnost-videoreklamy/cover-en.webp",
  excerpt:
    "Video ad metrics by layer: impressions and viewability, VTR/CPV, reach and frequency; Brand Lift and surveys; conversions, promo codes, and assisted paths — without worshipping a single CTR.",
  lead: [
    "You can’t honestly judge a video campaign by CTR alone: an impression ≠ a view, a view ≠ brand interest, interest ≠ a sale. The creative’s job (awareness or performance) sets which metrics matter.",
    "Three layers below: media (delivery and attention), marketing (brand perception), business (conversions and sales contribution). CPM figures, Brand Lift thresholds, and survey prices from old guides go stale — check current platform terms; in Russia also factor in which ad accounts are available at launch.",
  ],
  faq: [
    {
      q: "Is CPV enough on its own?",
      a: "No. CPV says what a contact costs — not whether the viewer remembered the brand or bought.",
    },
    {
      q: "What is viewability for video?",
      a: "Roughly: the ad in an active tab, a meaningful share of the player in view, and a minimum play time. Exact thresholds come from the platform — check the account help.",
    },
    {
      q: "Is Brand Lift required?",
      a: "Useful on large brand buys. On small budgets it’s often unavailable or pointless — then watch brand search, direct visits, surveys, and downstream conversions.",
    },
    {
      q: "How do I link video to sales?",
      a: "Conversion tracking in the ad account, UTM + analytics, promo codes in the creative, assisted conversions and (where available) an end-to-end model. Last-click alone often undervalues video.",
    },
    {
      q: "Does a high VTR mean a good campaign?",
      a: "Completion matters, but the viewer may have stayed distracted without skipping. Tie it to brand and the business goal.",
    },
    {
      q: "Can I compare YouTube and Yandex Video Network head-to-head?",
      a: "Carefully: different auctions, formats, and attribution. Compare contribution to your funnel — not “which platform is better in the abstract.”",
    },
  ],
  sections: [
    {
      title: "Media metrics: delivery and attention",
      level: 2,
      paras: [
        "Impressions are the base of billing and scale — not proof the ad was seen. Viewability separates a “counted impression” from a real in-view contact.",
        "VTR (views as a share of impressions) and CPV (cost per view) are solid operational metrics. They don’t replace judging impact on behavior.",
        "Reach and frequency (including unique reach) show how many unique users saw the message and how often. Without enough volume, reach models are unreliable; cookies and cross-device are approximations, not final truth.",
      ],
      lists: [
        {
          intro: "Minimum at the start:",
          items: [
            "campaign goal: brand / traffic / conversion",
            "frequency caps so you don’t burn the audience",
            "reporting on viewability and completions, not clicks only",
            "creative with early brand appearance",
          ],
        },
      ],
      links: [
        {
          label: "Video ads on YouTube",
          href: "/en/blog/videoreklama-youtube/",
        },
        {
          label: "Ad metrics",
          href: "/en/blog/metriki-reklamy/",
        },
      ],
    },
    {
      title: "Marketing metrics: brand and perception",
      level: 2,
      paras: [
        "Brand Lift and similar studies compare awareness, preference, and intent among exposed vs unexposed. Useful on large budgets; launch thresholds and stats windows are set by the platform — confirm what’s current.",
        "“No Lift” often means weak creative: brand late or invisible, little identity, heavy noise from TV or other channels. Fix — earlier logo and message, then frequency and targeting tweaks.",
        "DIY surveys (panel-style tools and peers) cost less than lift studies but separate “exposed” worse. Handy before launch or for hypotheses — not as the campaign’s only KPI.",
      ],
      notes: [
        {
          title: "Tool availability",
          kind: "tip",
          text: "Service names, budget thresholds, and survey prices change. Don’t copy figures from 2019 articles — check account help and the platform manager.",
        },
      ],
    },
    {
      title: "Business metrics: sales contribution",
      level: 2,
      paras: [
        "Conversion tracking in the ad account (click / view / view-through — per platform rules) links video to leads and purchases. Set goals consistently and account for cross-device limits.",
        "A promo code in the creative is a simple way to see direct sales from the spot. Assisted conversions and paths in analytics show where video was a touch — not last-click.",
        "Bottom line: effectiveness = help for the goal. For brand, watch lift and brand search; for performance — CPA/ROAS and lead quality, not a pretty VTR in a vacuum.",
      ],
      lists: [
        {
          intro: "Put in one table:",
          items: [
            "media: reach, frequency, viewability, VTR, CPV",
            "brand: lift / surveys / brand search (if available)",
            "business: conversions, promo codes, assisted paths, ROAS/CPA",
          ],
        },
      ],
      links: [
        {
          label: "Assisted conversions",
          href: "/en/blog/assotsiirovannye-konversii/",
        },
        {
          label: "ROAS",
          href: "/en/blog/roas/",
        },
      ],
    },
  ],
  closing: [
    "Judge video ads in layers: first delivery and attention, then brand, then money. One metric won’t tell the campaign story — build a panel for the creative’s job and keep platform metrics current.",
  ],
  related: [
    "videoreklama-youtube",
    "metriki-reklamy",
    "assotsiirovannye-konversii",
    "roas",
    "audit-reklamnoy-kampanii",
    "aydentika-brenda",
  ],
};
