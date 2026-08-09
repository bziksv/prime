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

/** ES overlay for tema-wordpress — same structure as RU JSON / EN. */
export const temaWordpressEs: BlogPost = {
  slug: "tema-wordpress",
  title: "Cómo elegir un tema de WordPress para un blog: 10 criterios prácticos",
  date: "2020-09-22",
  category: "Digital marketing",
  cover: "/images/blog/tema-wordpress/cover.webp",
  excerpt:
    "Qué revisar al elegir un tema de WordPress: necesidades del blog, flexibilidad, velocidad, móvil, código, child theme, compatibilidad con plugins — sin un catálogo de «mejores temas del año».",
  lead: [
    "Un tema fija el marco del blog: cómo se leen los posts, cómo se ven los archivos, con qué facilidad cambias bloques sin romper el layout. Un demo bonito ≠ un tema usable con tu contenido.",
    "Abajo: criterios de selección y comprobaciones antes de instalar en producción. Los nombres de marketplace y las listas «best of» de fin de año se quedan viejos; lo que importa son updates, código y encaje con los trabajos del blog.",
  ],
  faq: [
    {
      q: "¿Un tema gratis es peor que uno de pago?",
      a: "No siempre. Mira updates, reviews, limpieza de código y plantillas necesarias. Un tema gratis con soporte a menudo gana a un «premium» abandonado.",
    },
    {
      q: "¿Hace falta un tema a medida?",
      a: "Si necesitas diseño único y estructura compleja — quizá. Para un blog personal/experto suele bastar un tema ready sólido + child.",
    },
    {
      q: "¿Qué es un child theme?",
      a: "Una capa aparte sobre el parent: las ediciones de estilo/plantilla no se queman cuando actualiza el parent. Útil para customizaciones seguras.",
    },
    {
      q: "¿El tema afecta al SEO?",
      a: "De forma indirecta: velocidad, móvil, markup limpio, headings sensatos y datos estructurados. «SEO» en el nombre del tema sin técnica no ayuda.",
    },
    {
      q: "¿Puedo cambiar de tema en un sitio en vivo?",
      a: "Sí, pero staging primero: menús, widgets, plantillas de post y custom fields pueden romperse. Empareja los archivos de plantilla que realmente usas.",
    },
  ],
  sections: [
    {
      title: "Necesidades, flexibilidad y volumen de features",
      level: 2,
      paras: [
        "Primero fija los trabajos del blog: categorías, landings, formularios, una mini-tienda de producto, multilingüe, foco en imágenes o texto largo. Una lista «ahora y en un año» te salva de un tema bonito pero estrecho.",
        "Catálogo gratis, marketplace o a medida — caminos distintos. Mira reputación del autor, frecuencia de updates, demo en tu tipo de contenido. Antes de pagar a medida, acuerda etapas y aceptación.",
        "Flexibilidad: widgets, menús, customizer/block editor, plantillas de post (single), page y archive. Un «mockup bonito» estático sin ajustes te fuerza pronto a código a mano.",
        "La jerarquía parent/child permite revertir experimentos. Demasiados bloques demo y sliders «para todos los casos» hinchan CSS/JS — toma lo que necesitas, no el pack máximo por un checkbox.",
      ],
      lists: [
        {
          intro: "Mínimo antes de comprar/instalar:",
          items: [
            "lista de tipos de página necesarios",
            "el demo se parece al formato de tu blog",
            "updates en el último año",
            "política de soporte clara",
            "existe un camino a un child theme",
          ],
        },
      ],
      links: [
        {
          label: "Seguridad en WordPress",
          href: "/es/blog/wordpress-bezopasnost/",
        },
        {
          label: "Plugins SEO de WordPress",
          href: "/es/blog/wordpress-seo-plaginy/",
        },
        {
          label: "Plugins de WordPress",
          href: "/es/blog/wordpress-plaginy/",
        },
      ],
    },
    {
      title: "Velocidad, código, SEO y pruebas",
      level: 2,
      paras: [
        "Layout móvil y carga rápida son obligatorios: sliders pesados y montones de fuentes matan el bounce. PageSpeed en el demo es una guía; mide velocidad real en tu hosting con tus imágenes.",
        "Un tema que se declara «SEO-ready» no cancela comprobaciones: markup válido, jerarquía normal de headings, sin enlaces ocultos en «dumps» gratis, compatibilidad con tu plugin SEO.",
        "Revisa frescura de código y soporte de navegadores. Un validador W3C y Chrome/Firefox/Safari pillan issues áridas. Empareja el set de plantillas (home/front-page, single, page, archive, search, 404) con lo que realmente usas.",
        "Antes de cambiar de tema en producción: staging, backup, revisa menús/widgets, hooks de plugins, formularios y contadores. Tras activar — recorre escenarios clave de lectura y alta.",
        "Al final: un buen tema de blog es rápido, actualizado, flexible de verdad y no sobrecargado. Primero trabajos y pruebas — luego el «demo bonito».",
      ],
      lists: [
        {
          intro: "Checklist antes de sacar un tema a prod:",
          items: [
            "backup y staging",
            "vista móvil de plantillas clave",
            "velocidad con contenido real",
            "sin enlaces ocultos de terceros",
            "menús, sidebar y formularios listos",
            "plugin SEO y contadores vivos",
          ],
        },
      ],
      links: [
        {
          label: "Sitio responsive",
          href: "/blog/adaptivnyy-sayt/",
        },
        {
          label: "Identificar el CMS de un sitio",
          href: "/blog/uznat-cms/",
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
