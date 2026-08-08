import type { BlogPost } from "../../../data/blog";

/** EN overlay for kognitivnye-iskazheniya — same structure as RU JSON. */
export const kognitivnyeIskazheniyaEn: BlogPost = {
  slug: "kognitivnye-iskazheniya",
  title: "6 cognitive biases that shape buyer choice",
  date: "2019-01-30",
  category: "Digital marketing",
  cover: "/images/blog/kognitivnye-iskazheniya/cover-en.webp",
  excerpt:
    "Mere exposure, loss aversion, compromise, framing, the IKEA effect, and trust signals — how to use choice psychology in offers and UX without dark patterns.",
  lead: [
    "Buyers rarely choose in a perfectly rational way. Brand familiarity, fear of missing out, the set of prices on the shelf, and how the promise is worded all shape the decision.",
    "Below: six well-known effects and how to apply them ethically — explain value more clearly, honestly remove risk, help people compare packages. Don’t treat CTR or reach figures from old reviews as a norm; run your own tests. Fake urgency and hidden terms still wreck trust and reputation.",
  ],
  faq: [
    {
      q: "Is this about tricking the customer?",
      a: "No. The goal is to understand how people perceive the offer and cut noise. Pressure timers with no real promo are a dark pattern.",
    },
    {
      q: "What is the mere-exposure effect?",
      a: "Familiar products and brands get more trust. Repeat touches (content, retargeting) work if they don’t spam.",
    },
    {
      q: "Why is fear of loss stronger than a gain?",
      a: "Kahneman and Tversky’s research: losses feel sharper. An honest trial and a real promo deadline help; a fake countdown doesn’t.",
    },
    {
      q: "Why offer three plans instead of two?",
      a: "Compromise effect: the middle option often feels “sensible.” Don’t inflate the extremes to absurdity — people notice.",
    },
    {
      q: "What is framing?",
      a: "The same substance in different wording is perceived differently. Tell the truth, choosing a gain or risk angle — don’t distort facts.",
    },
    {
      q: "How does the IKEA effect show up online?",
      a: "People value more what they invested in: configurator, quiz, option picks. Involve them in setup — not a pointless quest.",
    },
  ],
  sections: [
    {
      title: "Familiarity and loss aversion",
      level: 2,
      paras: [
        "Mere exposure: what’s already been seen gets a softer attitude. In marketing that’s retargeting, one product in different formats (article → video → deck), and presence where the audience lives. Frequency without value turns into irritation.",
        "Loss aversion: people react more to “miss out” than to a symmetric “get.” Tactics that work — a trial period, a real limited promo, a clear bonus before the deadline. A countdown timer only fits if the promo truly ends.",
      ],
      lists: [
        {
          intro: "Ethical minimum:",
          items: [
            "retargeting with a frequency cap",
            "trial without a hidden subscription",
            "deadlines only when real",
            "promo terms readable before payment",
          ],
        },
      ],
      links: [
        {
          label: "Retargeting",
          href: "/en/blog/retargeting/",
        },
        {
          label: "Promotions and offers",
          href: "/en/blog/promoaktsii/",
        },
      ],
    },
    {
      title: "Compromise, framing, and involvement",
      level: 2,
      paras: [
        "Compromise effect: with three options people often pick the middle. Classic — “basic / recommended / premium.” Price the extremes honestly for cost and value — not as decoration.",
        "Framing: wording changes choice with the same math (“save 200” vs “lose 400”). In ads: stress purchase benefit or the cost of inaction — without distorting facts or scaring people for clicks.",
        "IKEA effect: taking part in build or setup raises perceived value. Configurators, package picks, customizing a letter or report — fitting formats.",
      ],
      notes: [
        {
          title: "On “late payment penalties”",
          text: "A “discount for early payment” frame usually lands better than a “late fee,” at the same economics. Don’t dress a markup as a “penalty” if it’s just another price.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "USP (unique selling proposition)",
          href: "/en/blog/utp/",
        },
        {
          label: "Consumer insight",
          href: "/en/blog/potrebitelskiy-insayt/",
        },
      ],
    },
    {
      title: "Trust and a “safe” purchase",
      level: 2,
      paras: [
        "A separate block — signals that make someone ready to risk money: a tidy site, speed, clear contacts, return terms, payment and security marks. Without those even a strong offer stalls.",
        "Choice psychology doesn’t cancel unit economics and product quality. Use effects to cut noise and explain value — not to push a doubter with deceit.",
      ],
      lists: [
        {
          intro: "Trust points on the site:",
          items: [
            "contacts and legal info",
            "relevant reviews and case studies",
            "return and warranty terms",
            "HTTPS and familiar payment methods",
          ],
        },
      ],
      links: [
        {
          label: "Abandoned cart",
          href: "/en/blog/broshennaya-korzina/",
        },
        {
          label: "Traffic without leads",
          href: "/en/blog/trafik-bez-lidov/",
        },
      ],
    },
  ],
  closing: [
    "Cognitive biases are a map of how people decide — not a license to pressure. Strengthen familiarity, honestly remove fear of loss, help compare packages, and show trust — the product does the rest.",
  ],
  related: [
    "potrebitelskiy-insayt",
    "utp",
    "promoaktsii",
    "retargeting",
    "broshennaya-korzina",
    "trafik-bez-lidov",
  ],
};
