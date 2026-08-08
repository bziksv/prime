import type { BlogPost } from "../../../data/blog";

/** EN overlay for tema-wordpress — same structure as RU JSON. */
export const temaWordpressEn: BlogPost = {
  slug: "tema-wordpress",
  title: "How to choose a WordPress theme for a blog: 10 practical criteria",
  date: "2020-09-22",
  category: "Digital marketing",
  cover: "/images/blog/tema-wordpress/cover-en.webp",
  excerpt:
    "What to check when picking a WordPress theme: blog needs, flexibility, speed, mobile, code, child theme, plugin compatibility — without a “best themes of the year” catalog.",
  lead: [
    "A theme sets the blog’s frame: how posts are read, how archives look, how easily you change blocks without breaking layout. A pretty demo site ≠ a usable theme on your content.",
    "Below: selection criteria and checks before installing on production. Marketplace names and year-end “best of” lists go stale; what matters are updates, code, and fit for the blog’s jobs.",
  ],
  faq: [
    {
      q: "Is a free theme worse than a paid one?",
      a: "Not always. Check updates, reviews, code cleanliness, and needed templates. A free theme with support often beats an abandoned “premium”.",
    },
    {
      q: "Do I need a custom theme?",
      a: "If you need unique design and complex structure — maybe. For a personal/expert blog a solid ready theme + child is often enough.",
    },
    {
      q: "What is a child theme?",
      a: "A separate layer over the parent: style/template edits don’t burn when the parent updates. Useful for safe customizations.",
    },
    {
      q: "Does the theme affect SEO?",
      a: "Indirectly: speed, mobile, clean markup, sensible headings, and structured data. “SEO” in the theme name without tech won’t help.",
    },
    {
      q: "Can I switch themes on a live site?",
      a: "Yes, but staging first: menus, widgets, post templates, and custom fields can break. Match the template files you actually use.",
    },
  ],
  sections: [
    {
      title: "Needs, flexibility, and feature volume",
      level: 2,
      paras: [
        "First lock blog jobs: categories, landings, forms, a mini-product shop, multilingual, focus on images or long text. A “now and in a year” list saves you from a theme that’s pretty but narrow.",
        "Free catalog, marketplace, or custom — different paths. Check author reputation, update frequency, demo on your content type. Before paying for custom, agree on stages and acceptance.",
        "Flexibility: widgets, menus, customizer/block editor, post (single), page, and archive templates. A static “pretty mockup” without settings quickly forces hand code.",
        "Parent/child hierarchy lets you roll back experiments. Too many demo blocks and sliders “for every case” bloat CSS/JS — take what you need, not the maximum pack for a checkbox.",
      ],
      lists: [
        {
          intro: "Minimum before buying/installing:",
          items: [
            "list of needed page types",
            "demo resembles your blog format",
            "updates within the last year",
            "support policy is clear",
            "a path to a child theme exists",
          ],
        },
      ],
      links: [
        {
          label: "WordPress security",
          href: "/en/blog/wordpress-bezopasnost/",
        },
        {
          label: "WordPress SEO plugins",
          href: "/en/blog/wordpress-seo-plaginy/",
        },
      ],
    },
    {
      title: "Speed, code, SEO, and tests",
      level: 2,
      paras: [
        "Mobile layout and fast load are mandatory: heavy sliders and piles of fonts kill bounce. PageSpeed on the demo is a guide; measure real speed on your hosting with your images.",
        "A claimed “SEO-ready” theme doesn’t cancel checks: valid markup, normal heading hierarchy, no hidden links in free “dumps”, compatibility with your SEO plugin.",
        "Review code freshness and browser support. A W3C validator and Chrome/Firefox/Safari catch rough issues. Match the template set (home/front-page, single, page, archive, search, 404) to what you actually use.",
        "Before switching themes on production: staging, backup, check menus/widgets, plugin hooks, forms, and counters. After enabling — click through key reading and signup scenarios.",
        "Bottom line: a good blog theme is fast, updated, flexible enough, and not overloaded. Jobs and tests first — then the “pretty demo”.",
      ],
      lists: [
        {
          intro: "Checklist before shipping a theme:",
          items: [
            "backup and staging",
            "mobile view of key templates",
            "speed with real content",
            "no third-party hidden links",
            "menus, sidebar, forms ready",
            "SEO plugin and counters alive",
          ],
        },
      ],
      links: [
        {
          label: "Responsive site",
          href: "/en/blog/adaptivnyy-sayt/",
        },
        {
          label: "Identify a site’s CMS",
          href: "/en/blog/uznat-cms/",
        },
      ],
    },
  ],
  related: [
    "wordpress-bezopasnost",
    "wordpress-seo-plaginy",
    "adaptivnyy-sayt",
    "uznat-cms",
    "yuzabiliti",
  ],
};
