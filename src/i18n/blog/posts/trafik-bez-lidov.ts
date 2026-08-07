import type { BlogPost } from "../../../data/blog";

/** EN overlay for trafik-bez-lidov — same structure as RU JSON. */
export const trafikBezLidovEn: BlogPost = {
  slug: "trafik-bez-lidov",
  title: "Traffic without leads: offer, benefit, and CTA",
  date: "2019-03-25",
  category: "Digital marketing",
  cover: "/images/blog/trafik-bez-lidov/cover-en.webp",
  excerpt:
    "Traffic grows but leads don’t: weak offer, selling the “drill instead of the hole”, no CTA, wrong audience — a landing-copy fix checklist without magic words.",
  lead: [
    "When visits rise and leads don’t, it’s often not “not enough ads” — people don’t see why to leave a contact: no clear offer, no visible benefit, no call to action and form.",
    "This guide covers how traffic differs from leads, typical offer mistakes, the “so what for me?” move, the CTA’s role, and a copy checklist. Check tech and speed too, but with live traffic you more oftenen fix the meaning of the pitch. There’s no universal “average conversion” — watch your funnel.",
  ],
  faq: [
    {
      q: "Are traffic and leads the same?",
      a: "No. Traffic is visits. A lead is a contact/request with intent. You can buy many clicks and get zero applications.",
    },
    {
      q: "Should I fix copy or ads first?",
      a: "If the ad promises one thing and the page another — fix both. With relevant traffic and an empty funnel, start with offer and CTA.",
    },
    {
      q: "Is a pretty first-screen image enough?",
      a: "No. You need product + benefit in plain language. An image with no offer is a mystery storefront.",
    },
    {
      q: "What is a “result of the result”?",
      a: "Not a feature (“vinyl wallpaper”), but the end life benefit after a chain of “so what for me?”.",
    },
    {
      q: "Is a CTA required on every page?",
      a: "On commercial pages — yes: form, call, messenger. “Figure it out yourself” almost never converts.",
    },
    {
      q: "Can the product simply not fit the audience?",
      a: "Yes. Then no copywriting saves you without changing offer, price, or audience. Honestly check demand.",
    },
  ],
  sections: [
    {
      title: "Offer: simplicity and patterns",
      level: 2,
      paras: [
        "The first screen should answer: what you offer and what benefit the person gets. Complex SEO text with no pitch doesn’t create leads.",
        "Working patterns: product → benefit; product → benefit + timing/figure; product → benefit + risk removal (no cuts, with a guarantee, etc.). Numbers help when they’re true and checkable.",
        "Typical fail: pretty advantages and a price list with no main offer — or a page where it’s unclear what’s even for sale.",
      ],
      lists: [
        {
          intro: "Before editing ask:",
          items: [
            "what exactly they buy in 5 seconds of reading;",
            "what the main benefit is — not a feature list;",
            "whether the promise matches the ad/query.",
          ],
        },
      ],
      links: [
        {
          label: "USP",
          href: "/en/blog/utp/",
        },
        {
          label: "Landing page copy",
          href: "/en/blog/tekst-lendinga/",
        },
      ],
    },
    {
      title: "Benefit, audience, and call to action",
      level: 2,
      paras: [
        "Sell the “hole in the wall”, not the drill: push features through “so what for me?” a few times until you land on a clear life benefit.",
        "If the product doesn’t cover a real pain for the chosen audience (or price/format miss), more traffic only shows the miss more expensively. Sometimes you need a positioning change — not “one more paragraph”.",
        "Without a CTA and a way to contact, leads won’t appear: form, button, several contact channels. A concrete ask beats a row of identical “subscribe” lines.",
      ],
      notes: [
        {
          title: "Tech can be guilty too",
          text: "Broken form, no mobile layout, slow load — check. But with steady traffic and zero leads, the pitch meaning is usually weak.",
          kind: "tip",
        },
      ],
      links: [
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
        {
          label: "Lead-capture forms",
          href: "/en/blog/formy-zahvata/",
        },
      ],
    },
    {
      title: "Copy checklist for site and landing",
      level: 2,
      paras: [
        "Build the page as answers to audience questions: offer (product + benefit), pains, differences, “result of the result”, proof (figures, cases, facts), service scope, CTA.",
        "Lean on how the audience phrases queries — say plainly they’ll find what they searched for. Then measure conversion in analytics — not a “pretty copy” feeling.",
      ],
    },
  ],
  closing: [
    "Traffic without leads signals the page promise doesn’t hook or doesn’t invite action. Strengthen the offer, turn features into benefits, add a CTA, and check the audience — magic words don’t exist.",
  ],
  related: [
    "utp",
    "tekst-lendinga",
    "optimizatsiya-konversii",
    "formy-zahvata",
    "lending",
    "potrebitelskiy-insayt",
  ],
};
