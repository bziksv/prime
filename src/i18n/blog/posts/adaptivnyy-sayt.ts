import type { BlogPost } from "../../../data/blog";

/** EN overlay for adaptivnyy-sayt — same structure as RU JSON. */
export const adaptivnyySaytEn: BlogPost = {
  slug: "adaptivnyy-sayt",
  title: "Making a site work across screen sizes: why and how",
  date: "2020-12-08",
  category: "SEO",
  cover: "/images/blog/adaptivnyy-sayt/cover-en.webp",
  excerpt:
    "What a responsive site is, how it differs from a separate mobile version, why it matters for SEO and UX, the build stages, and how to test across screens.",
  lead: [
    "Most visits come from smartphones: people browse the catalog on a phone and often send a lead from there too. A site that “floats” or needs horizontal scrolling loses both users and quality signals for search.",
    "Responsive design keeps one URL and lets the layout adjust to width — unlike a separate m-site. For business that means conversion on a small screen; for SEO, mobile-first indexing expects a usable phone experience. Layout craft is a related article; here the focus is mobile UX.",
  ],
  faq: [
    {
      q: "Are responsive design and a mobile version the same?",
      a: "Not always. Responsive means one URL and markup that adjusts to width. A “mobile version” often means a separate subdomain or template (m.) — less often the default strategy today.",
    },
    {
      q: "Is a viewport meta tag required?",
      a: "Yes for normal phone scaling: meta viewport in `<head>`. Without it the page often renders as a tiny desktop thumbnail.",
    },
    {
      q: "Does responsive design affect SEO?",
      a: "Yes — indirectly and strongly: usability, speed, bounce, mobile-first indexing. A broken mobile view risks visibility and conversion.",
    },
    {
      q: "Is shrinking the desktop layout in CSS enough?",
      a: "No. You need content priority, large tap targets, readable type, usable forms, and sometimes a different block order.",
    },
    {
      q: "Do you need AMP?",
      a: "Not required for most commercial sites. First get responsive and speed right; AMP is a separate choice for narrow cases.",
    },
    {
      q: "How do you check responsive design quickly?",
      a: "DevTools device mode plus real phones, PageSpeed/Lighthouse mobile, and a pass over key templates (home, category, product, form).",
    },
    {
      q: "Do people still build a separate m.site?",
      a: "Sometimes in legacy setups. Downsides: duplicate URLs, redirects, content drift. Prefer responsive on one canonical.",
    },
    {
      q: "Does responsive design mean a fast site?",
      a: "Not automatically. Heavy images and scripts kill mobile UX even with a clean grid. Compress media and cut excess.",
    },
  ],
  sections: [
    {
      title: "What making the site work on mobile means",
      level: 2,
      paras: [
        "Screen-size fit means the layout and UI stay readable and usable on phone, tablet, and desktop. Usually that’s responsive: one URL, CSS media queries or a modern grid, flexible images.",
        "The goal isn’t “fit everything tiny” — it’s to keep the journey: find a service or product → understand the offer → call or send a request without fighting the menu and form.",
      ],
      lists: [
        {
          intro: "Signs of solid responsive design:",
          items: [
            "no pointless horizontal scrolling;",
            "text readable without zoom;",
            "buttons and links easy to tap;",
            "menus and filters open predictably;",
            "same content meaning as on desktop.",
          ],
        },
      ],
      links: [
        {
          label: "Website layout",
          href: "/en/blog/verstka-saytov/",
        },
      ],
    },
    {
      title: "Why it matters for business and SEO",
      level: 2,
      paras: [
        "Commerce: part of the purchase path starts on mobile. If the product page or form is awkward, the lead goes to a competitor with decent UX.",
        "Search has long judged mobile experience (mobile-first). A slow or broken mobile page hurts crawl and behavior more than “one more keyword in H1.”",
      ],
      lists: [
        {
          intro: "Goals of responsive design:",
          items: [
            "don’t lose phone traffic;",
            "keep conversion on a small screen;",
            "simplify maintaining one template;",
            "meet mobile-first indexing expectations.",
          ],
        },
      ],
      links: [
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "Responsive or a separate mobile version",
      level: 2,
      paras: [
        "Responsive site: one address; content and SEO signals don’t multiply. A separate mobile version (often `m.`) means a second template and drift risk — different copy, forgotten noindex, redirect chains.",
        "A separate m. rarely makes sense (heavy legacy, special apps). For a new project and most CMS setups, use responsive plus lighter blocks if needed — not a second site.",
      ],
      lists: [
        {
          intro: "Responsive:",
          items: [
            "one canonical URL;",
            "simpler analytics and goals;",
            "fewer duplicates;",
            "one content-edit loop.",
          ],
        },
        {
          intro: "Separate m.:",
          items: [
            "needs merging and careful redirects;",
            "easy content drift;",
            "double template maintenance;",
            "higher risk of technical SEO mistakes.",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "If you already have m. — audit first: same meaning, correct redirects and canonical. Often it’s better to collapse to one responsive domain.",
        },
      ],
      links: [
        {
          label: "Duplicate pages",
          href: "/en/blog/dubli-stranits/",
        },
      ],
    },
    {
      title: "How teams build responsive in practice",
      level: 2,
      paras: [
        "Start with priority templates: home, key landings, catalog, product, cart/form, blog. Set breakpoints, rebuild grid, type, spacing, nav (a burger isn’t a dump of the whole desktop menu).",
        "Images — srcset/sizes, compression, don’t load desktop 4K on 360px. Tables and wide blocks — container scroll or a simplified view without breaking the whole layout.",
      ],
      lists: [
        {
          intro: "Typical process:",
          items: [
            "viewport and base grid;",
            "mobile menu and header;",
            "content blocks and CTAs;",
            "forms and clickable phone;",
            "media and fonts;",
            "desktop regression after edits.",
          ],
        },
      ],
      links: [
        {
          label: "Contact form",
          href: "/en/blog/forma-obratnoy-svyazi/",
        },
      ],
    },
    {
      title: "Benefits of solid responsive design",
      level: 2,
      paras: [
        "One site is easier for marketing and engineering. Ads and SEO point to the same URLs. Users don’t jump between a “full” and a “lite” version with different pricing.",
        "For the team, fewer surprises: edit the offer once, check two or three widths — not sync two CMS instances.",
      ],
      lists: [
        {
          intro: "What you gain:",
          items: [
            "conversion from mobile traffic;",
            "predictable indexing of one canonical;",
            "lower maintenance cost;",
            "better Core Web Vitals when weight is optimized.",
          ],
        },
      ],
    },
    {
      title: "How to test across screens",
      level: 2,
      paras: [
        "Don’t stop at one iPhone in the emulator. Check mid-range Android widths, landscape, real networks (3G/LTE). Test phone taps, input masks, sticky CTAs, and whether chat covers the send button.",
        "Automation: Lighthouse mobile, a crawler with a mobile user-agent if needed, screenshot review of key URLs after release. After a CMS theme change — full template pass again.",
      ],
      lists: [
        {
          intro: "Acceptance checklist:",
          items: [
            "home / category / product / form;",
            "menu and search;",
            "no clipped text or overlaps;",
            "acceptable mobile speed;",
            "legal links and consents tappable;",
            "retargeting/chat don’t break UX.",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Calling responsive done because “DevTools looks like a phone.” A real finger and a real form keyboard are a required second pass.",
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
  ],
  related: [
    "verstka-saytov",
    "optimizatsiya-konversii",
    "tehnicheskiy-seo-audit",
    "lending",
    "forma-obratnoy-svyazi",
  ],
};
