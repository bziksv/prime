import type { BlogPost } from "../../../data/blog";

/** EN overlay for bitrix-svoystva-infoblokov — same structure as RU JSON. */
export const bitrixSvoystvaInfoblokovEn: BlogPost = {
  slug: "bitrix-svoystva-infoblokov",
  title: "Outputting infoblock properties in 1C-Bitrix",
  date: "2017-12-12",
  category: "Websites",
  cover: "/images/blog/bitrix-svoystva-infoblokov/cover-en.webp",
  excerpt:
    "How to show an infoblock element’s properties in a Bitrix component template: DISPLAY_PROPERTIES, string/list/file/link types — without blindly pasting outdated snippets.",
  lead: [
    "Infoblock properties (SKU, file, list, element link) live in the admin; on the site you output them in the component template — most often in the result’s `template.php`.",
    "Infoblock properties surface in templates via `$arResult` and display keys. Exact syntax and API depend on Bitrix version and component type — check official docs and don’t copy 2017 snippets without testing. You need basic PHP and HTML.",
  ],
  faq: [
    {
      q: "Where do you edit property output in the template?",
      a: "Usually in the needed component template (often `template.php` under `bitrix/templates/...` or the site template). Prefer a component template copy, not core edits.",
    },
    {
      q: "What is DISPLAY_PROPERTIES in Bitrix?",
      a: "An array of element properties prepared for display: name, value(s), type. Handy for card/list output.",
    },
    {
      q: "Why is the property empty on the site?",
      a: "Not marked for detail/list, wrong property code, cache, wrong component template, or the property isn’t filled on the element.",
    },
    {
      q: "How is this different from the public-section bar?",
      a: "The bar edits content visually. This piece covers the template and property output code by a developer.",
    },
    {
      q: "Can you output properties without PHP?",
      a: "Some properties show via stock component parameters. Complex formats still need a template or custom code.",
    },
  ],
  sections: [
    {
      title: "How output works",
      level: 2,
      paras: [
        "The infoblock component builds the element into `$arResult`. Properties for display often live in `$arResult['DISPLAY_PROPERTIES']['PROPERTY_CODE']`. An entry has a name and `DISPLAY_VALUE` (a prepared value or array of values).",
        "You set the property code (called `ATTRIBUTE` in old notes) in the infoblock admin. In the template use your code — not someone else’s from an example.",
      ],
      lists: [
        {
          intro: "Before editing the template:",
          items: [
            "property created and filled on the element;",
            "display enabled for list/detail if the component requires it;",
            "you work in a component template copy;",
            "clear cache after edits.",
          ],
        },
      ],
      links: [
        {
          label: "Bitrix public section",
          href: "/en/blog/bitrix-publichnyy-razdel/",
        },
        {
          label: "SEO in 1C-Bitrix",
          href: "/en/blog/seo-bitrix/",
        },
      ],
    },
    {
      title: "Property types — different output",
      level: 2,
      paras: [
        "String and number often print as one `DISPLAY_VALUE`. A list can be single or multiple — then the value is an array you loop. A file is a download/view link. Element links need extra fetches of related element fields.",
        "Don’t mix raw `PROPERTIES` and `DISPLAY_PROPERTIES` without understanding: the first is closer to DB data, the second to ready display.",
      ],
      tables: [
        {
          caption: "Type → what to watch",
          headers: ["Property type", "In practice"],
          rows: [
            ["String / number", "One value in DISPLAY_VALUE"],
            ["List", "One value or an array"],
            ["File", "Link / path to the file"],
            ["Element link", "IDs/data of related elements"],
            ["HTML/text", "Escaping and allowed tags"],
          ],
        },
      ],
      notes: [
        {
          title: "Output security",
          text: "Don’t print user input without escaping. For HTML properties use the Bitrix filters accepted on the project — not a bare echo.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Practice in the template",
      level: 2,
      paras: [
        "Typical frame: check the property key exists in `DISPLAY_PROPERTIES`, print the name if needed, then the value. For multiples — `foreach`. For a file — build a link from property data.",
        "Comment and view counters are separate fields/modules, not always an “infoblock property.” Wire them only if the project actually uses those mechanisms.",
      ],
      lists: [
        {
          intro: "“Not showing” debug checklist:",
          items: [
            "property code matches the admin;",
            "element is filled;",
            "correct template.php of the component on the page;",
            "cache cleared;",
            "edit/debug mode shows the right area.",
          ],
        },
      ],
    },
    {
      title: "What to avoid",
      level: 2,
      paras: [
        "Don’t edit files in `bitrix/modules` and don’t paste long code walls from 2015–2017 forums without understanding the version. After a core update those edits break.",
        "Don’t dump 200 lines of business logic into the template — move it to result_modifier.php or a service layer if the project allows.",
      ],
    },
    {
      title: "Link to content and SEO",
      level: 2,
      paras: [
        "Properties are handy for product specs, price-list files, badges. For SEO it matters more that needed fields land in visible HTML and meta templates — see the Bitrix SEO article.",
        "An empty property “storefront” on the card is worse for users than a careful set of filled attributes.",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Property output = component template + property code + value type. `DISPLAY_PROPERTIES` is the main display compass.",
        "Check current Bitrix API; the public bar edits content but doesn’t replace template work.",
      ],
    },
  ],
  closing: [
    "Open a component template copy, find `DISPLAY_PROPERTIES` for the property code, and print the value by type — so infoblock attributes appear on the site predictably, not by “magic” from an outdated snippet.",
  ],
  related: [
    "bitrix-publichnyy-razdel",
    "seo-bitrix",
    "cms-internet-magazina",
    "adminka-sayta",
    "uznat-cms",
    "veb-server",
  ],
};
