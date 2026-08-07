import type { BlogPost } from "../../../data/blog";

/** EN overlay for videokontent — same structure as RU JSON. */
export const videokontentEn: BlogPost = {
  slug: "videokontent",
  title: "Video content: formats and types for marketing",
  date: "2019-12-20",
  category: "Content marketing",
  cover: "/images/blog/videokontent/cover-en.webp",
  excerpt:
    "Types of marketing video: review, how-to, testimonial, webinar, teaser, and more — plus script, shoot, and placement without the “80% of traffic will be video” cult or 2019 price lists.",
  lead: [
    "Video covers what text handles poorly: process, emotion, product scale, a live answer to an objection. It’s not a mandatory replacement for articles — it’s a format matched to the job and audience.",
    "Pick the clip type for the job, decide in-house vs vendor, script before you shoot, and place video where it supports the offer. “Video will be 80% of traffic” figures and other people’s watch-hours from old roundups aren’t universal. Mentions of Instagram are informational.",
  ],
  faq: [
    {
      q: "Do you need video for every product?",
      a: "No. Prioritize top SKUs, complex services, training, and funnel stages where text stalls.",
    },
    {
      q: "Is a smartphone enough?",
      a: "For many formats yes: light, stability, and sound beat camera brand. A studio fits staged brand films.",
    },
    {
      q: "How much does a vendor cost?",
      a: "Wide range: from a simple edit to full production. Anchor on brief and portfolio, not a “2019 average price.”",
    },
    {
      q: "Is a script required?",
      a: "For selling, training, and staged pieces — yes. A greeting or short live can run on talking points.",
    },
    {
      q: "Where should you publish video?",
      a: "On the site/product page + hosting (YouTube and similar) + channels where the audience is. One file “only on the site” is often too little.",
    },
    {
      q: "How is this different from video ads?",
      a: "Here — content types and production. Campaign metrics and CPV/VTR live in the video-ad effectiveness piece.",
    },
    {
      q: "Is MP4 mandatory?",
      a: "A common, convenient container for the web. Check platform requirements and file weight on the site.",
    },
  ],
  sections: [
    {
      title: "Pros and cons",
      level: 2,
      paras: [
        "Pros: clarity, emotion, easier to show product and process, higher share chance with a strong story.",
        "Cons: time, light/sound/edit, script, updating stale clips. Bad video is worse than none.",
      ],
    },
    {
      title: "Types of marketing video",
      level: 2,
      paras: [
        "Greeting and company intro.",
        "Product/service review and demo.",
        "Customer testimonials (only with consent — no staged fakes).",
        "Teaser, event invite.",
        "Interview and expert breakdown.",
        "How-to and training; screen-record for software.",
        "Webinar / live; process footage.",
        "Short selling clip with a CTA.",
      ],
      links: [
        {
          label: "Product video review",
          href: "/en/blog/video-obzor-tovara/",
        },
      ],
      notes: [
        {
          title: "One clip — one job",
          text: "Don’t mix a greeting with a hard catalog pitch. Goal and audience set length and tone.",
        },
      ],
    },
    {
      title: "Vendor or in-house",
      level: 2,
      paras: [
        "Vendor: portfolio, clear brief, stages (script → shoot → edit), rights to source files.",
        "In-house: script, light, tripod, clean audio, short edit. For product pages and FAQ that’s often enough.",
      ],
    },
    {
      title: "Script and placement",
      level: 2,
      paras: [
        "Selling arc: hook → need → solution → proof → objections → CTA. Training — steps without fluff.",
        "Title and description with useful intent keywords; thumbnail; link to site/product; measure completion and clicks.",
      ],
      lists: [
        {
          intro: "Typical mistakes:",
          items: [
            "clip with no goal or CTA;",
            "bad audio under a pretty picture;",
            "too long with no structure;",
            "published and never reviewed;",
            "promises in the video that aren’t on the site.",
          ],
        },
      ],
      links: [
        {
          label: "YouTube video ads",
          href: "/en/blog/videoreklama-youtube/",
        },
        {
          label: "Video ad effectiveness",
          href: "/en/blog/effektivnost-videoreklamy/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Format for the job — not “video for video’s sake.”",
        "Script and sound decide more often than the camera.",
        "Site + hosting + audience channels.",
      ],
    },
  ],
  closing: [
    "Pick one funnel job (top-SKU review, how-to, or testimonial) and shoot one short clip with a clear CTA — that’s the easiest way to learn whether you need a vendor.",
  ],
  related: [
    "video-obzor-tovara",
    "videoreklama-youtube",
    "effektivnost-videoreklamy",
    "matritsa-kontenta",
    "prodayushchiy-kontent",
    "video-stories-instagram",
  ],
};
