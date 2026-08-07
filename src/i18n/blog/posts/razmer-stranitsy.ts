import type { BlogPost } from "../../../data/blog";

/** EN overlay for razmer-stranitsy — same structure as RU JSON. */
export const razmerStranitsyEn: BlogPost = {
  slug: "razmer-stranitsy",
  title: "Webpage size: how to check weight and speed up loading",
  date: "2020-10-12",
  category: "SEO",
  cover: "/images/blog/razmer-stranitsy/cover-en.webp",
  excerpt:
    "What page “weight” means, how to see transfer size in DevTools and tools, why heavy pages hurt UX and SEO, and what to compress first.",
  lead: [
    "Page weight is how many bytes the browser downloads to show the document: HTML, CSS, JS, images, fonts, third-party widgets. The larger the volume and the worse the compression, the longer people wait on a weak connection.",
    "Why to measure weight, how to see it in a minute, and what usually gives the fastest win. This is speed hygiene, not a TOP guarantee.",
  ],
  faq: [
    {
      q: "Is page weight the HTML file size?",
      a: "No. Look at total transfer size of all document resources (and cache vs network). HTML is often tiny next to images and JS.",
    },
    {
      q: "What’s a normal page weight?",
      a: "Depends on type. For a landing on 3G, aim for reasonable hundreds of KB–a couple of MB — not tens of megabytes without a real need. LCP/INP and field data matter more than one number.",
    },
    {
      q: "Where to look in the browser?",
      a: "DevTools → Network: Size column, total at the bottom. Disable cache for a “cold” load. Performance/Lighthouse — extra diagnostics.",
    },
    {
      q: "Does weight affect SEO directly?",
      a: "Through speed and behavior: a heavy page hurts Core Web Vitals and bounce. Search doesn’t rank “by KB”, but slow UX hits visibility indirectly.",
    },
    {
      q: "Is compressing images enough?",
      a: "Often yes as a first step, but heavy JS/CSS and extra widgets matter too. Cut by Network contribution.",
    },
    {
      q: "Are Gzip/Brotli required?",
      a: "Yes for text resources in production. Without compression HTML/CSS/JS balloon several times.",
    },
    {
      q: "Does a CDN reduce weight?",
      a: "Not file weight — delivery latency. Weight is cut by asset optimization; CDN is proximity and cache.",
    },
    {
      q: "Are mobile and desktop the same?",
      a: "Often not: different images, menu, scripts. Measure both profiles and real devices/throttling.",
    },
  ],
  sections: [
    {
      title: "Why know page size",
      level: 2,
      paras: [
        "Large volume on slow LTE/3G = long LCP, blank screen, leave before content. On hosting and CDN extra traffic costs money. For SEO, field speed metrics and whether people finish the page matter.",
        "Weight is a simple “where’s the fat” signal: compare a competitor URL to yours, spot a spike after a widget, control a release.",
      ],
      lists: [
        {
          intro: "When measuring is mandatory:",
          items: [
            "after a redesign / new template",
            "before ad spend on a landing",
            "if mobile bounce grows",
            "when someone says “the site is slow”.",
          ],
        },
      ],
    },
    {
      title: "How to see weight in DevTools",
      level: 2,
      paras: [
        "Open the page → F12 / DevTools → Network tab. Enable Disable cache, refresh. At the bottom you’ll see request count and transferred bytes. Sorting by Size shows the heaviest “eaters”.",
        "Look separately at transferred (over the network) and resource size. Cache distorts the picture — for an audit a cold load matters more.",
      ],
      lists: [
        {
          intro: "Mini ritual:",
          items: [
            "incognito + disable cache",
            "mobile user-agent / throttling",
            "lock top-10 resources by Size",
            "repeat on a key landing and product page.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Looking only at HTML “Save as”. Real weight is the whole waterfall load.",
        },
      ],
      links: [
        {
          label: "Page source code",
          href: "/en/blog/ishodnyy-kod/",
        },
      ],
    },
    {
      title: "Online tools and what they show",
      level: 2,
      paras: [
        "PageSpeed Insights, WebPageTest, GTmetrix and similar give weight estimates, request chains, and recommendations. Tool numbers diverge due to location and cache — compare relative before/after on one tool.",
        "Don’t chase a “100 score” for a screenshot. The goal is cut extra megabytes and improve perceived speed.",
      ],
      lists: [
        {
          intro: "In the report look for:",
          items: [
            "total page weight",
            "images without compression/modern formats",
            "unused CSS/JS",
            "blocking scripts in head",
            "extra redirects.",
          ],
        },
      ],
    },
    {
      title: "What usually bloats a page",
      level: 2,
      paras: [
        "Unoptimized photos and backgrounds, autoplay video, too many fonts, heavy sliders, “just in case” analytics and chats, duplicate libraries, a full-home map without lazy load.",
        "On a CMS — plugins, each with its own CSS/JS. A plugin audit often saves more than “tweaking JPEG quality by 5%”.",
      ],
      lists: [
        {
          intro: "Typical top offenders:",
          items: [
            "images > 200–300 KB without a real need",
            "hero as PNG instead of WebP/AVIF",
            "all of jQuery UI for one button",
            "social widgets and live chat",
            "unminified bundles.",
          ],
        },
      ],
    },
    {
      title: "How to speed up: work order",
      level: 2,
      paras: [
        "First cut the heaviest Network contribution. Images: compression, modern formats, srcset, lazy-load below the fold. Text: Brotli/Gzip. JS/CSS: remove unused, defer/async, code-split.",
        "Browser cache and CDN — after files are light. Otherwise you just deliver the same fat faster.",
      ],
      lists: [
        {
          intro: "Sprint checklist:",
          items: [
            "compress hero and product cards",
            "enable server compression",
            "defer non-critical JS",
            "remove 1–2 extra widgets",
            "remeasure DevTools before/after.",
          ],
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "Production control",
      level: 2,
      paras: [
        "Set a weight budget for templates (home, category, article). In CI or the release checklist — a Network snapshot. Watch field CWV in webmaster panels.",
        "After major releases compare not only Lighthouse scores but real transfer size of key URLs.",
      ],
      lists: [
        {
          intro: "Playbook:",
          items: [
            "reference URLs and their limits",
            "an owner for assets",
            "ban “upload a 5MB photo content” without compression",
            "quarterly re-audit.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "One heavy chat widget often weighs more than all your CSS. Count contribution, not vibes.",
        },
      ],
      links: [
        {
          label: "Page optimization",
          href: "/en/blog/optimizatsiya-stranitsy/",
        },
      ],
    },
  ],
  related: [
    "tehnicheskiy-seo-audit",
    "optimizatsiya-stranitsy",
    "ishodnyy-kod",
    "protokol-http",
    "kod-statusa-http",
  ],
};
