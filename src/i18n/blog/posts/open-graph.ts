import type { BlogPost } from "../../../data/blog";

/** EN overlay for open-graph — same structure as RU JSON. */
export const openGraphEn: BlogPost = {
  slug: "open-graph",
  title: "Open Graph: how to style a link from social to your site",
  date: "2020-10-15",
  category: "SEO",
  cover: "/images/blog/open-graph/cover-en.webp",
  excerpt:
    "What Open Graph is, which meta tags set title, description, and image on share, how to check the preview, and typical markup mistakes.",
  lead: [
    "Open Graph controls how a link to your site looks in a preview: title, text, image, object type. Without markup, a network often grabs a random fragment or a tiny image — clicks and trust drop.",
    "Below: why OG matters, base tags, how to check, and common mistakes. Treat related Open Graph posts in the queue as pointing to this as the canon.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Facebook* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Is Open Graph a search ranking factor?",
      a: "It barely participates directly in search rankings. It’s about CTR and recognition on share — and sometimes in messengers.",
    },
    {
      q: "Where should you put the tags?",
      a: "In the page `<head>`: `meta property=\"og:…\"`. On a CMS — SEO plugin or template; on static — in the layout.",
    },
    {
      q: "Which tags are required?",
      a: "Minimum: `og:title`, `og:type`, `og:image`, `og:url`. Useful to add `og:description` and `og:locale`.",
    },
    {
      q: "How does OG differ from Twitter Card?",
      a: "Same preview idea, different meta names. Many networks read OG; for X/Twitter you sometimes also add card tags.",
    },
    {
      q: "Why doesn’t the preview update?",
      a: "Social cache. After edits — debugger / preview cache clear for the URL. Confirm you serve current HTML without old CDN cache.",
    },
    {
      q: "What image size should you use?",
      a: "Roughly ~1200×630 px, absolute https URL, file reachable without auth. Don’t crop important text at the edges.",
    },
    {
      q: "Do you need OG on every page?",
      a: "On pages people share: articles, products, landings. On utility pages — optional.",
    },
    {
      q: "Does OG replace title and description?",
      a: "No. Title/description are for search and the tab; OG is for share previews. They can share meaning, but they’re different layers.",
    },
  ],
  sections: [
    {
      title: "Why you need Open Graph",
      level: 2,
      paras: [
        "When someone pastes a URL into a post or message, the platform builds a card. OG says which image to take, which title and text to show, and which canonical URL is the object.",
        "The protocol started in the Facebook* ecosystem, but other networks and services adopted the tags. For business it’s control of the first impression of a site link — not “traffic from thin air.”",
      ],
      lists: [
        {
          intro: "What you control:",
          items: [
            "preview title and description",
            "image",
            "object URL",
            "type (article, product, website)",
          ],
        },
      ],
    },
    {
      title: "Base tags and example",
      level: 2,
      paras: [
        "In the page head place meta with `property` and `content`. Set `og:url` to the page’s canonical address. `og:type` for articles is often `article`, for the homepage `website`, for a product `product` (if you support extensions).",
        "Image — absolute URL. Description — 1–2 sentences without stuffing; title readable, not a keyword sheet.",
      ],
      lists: [
        {
          intro: "Minimum set:",
          items: [
            "`og:title` — card headline",
            "`og:description` — short text",
            "`og:image` — preview",
            "`og:url` — page canon",
            "`og:type` — object type",
            "`og:locale` — e.g. `en_US`",
          ],
        },
      ],
      links: [
        {
          label: "Page source code",
          href: "/en/blog/ishodnyy-kod/",
        },
        {
          label: "Canonical tag",
          href: "/en/blog/kanonicheskiy-teg/",
        },
      ],
    },
    {
      title: "Images and video",
      level: 2,
      paras: [
        "Bad previews often come from a tiny, vertical, or auth-gated image file. Keep a horizontal frame, enough resolution/weight, and a stable URL (not a one-time token).",
        "For video OG allows extra properties (`og:video` and related) — useful if you actually serve a clip, not only a poster. Otherwise a strong `og:image` is enough.",
      ],
      lists: [
        {
          intro: "Image check:",
          items: [
            "opens via a direct link",
            "https without mixed content",
            "logo/face not cropped at edges",
            "one current version at the URL (no CDN surprises)",
          ],
        },
      ],
    },
    {
      title: "How to verify the markup",
      level: 2,
      paras: [
        "View Source / DevTools: are og tags on the right page. Then — official preview debuggers for the platforms you use (where available). Confirm your title/image loaded, not a random fragment.",
        "After changing the image, clear the preview cache. Make sure the server doesn’t serve different HTML to the social bot (cloaking isn’t allowed).",
      ],
      lists: [
        {
          intro: "Verification checklist:",
          items: [
            "tags in head, not body",
            "one sensible set per URL",
            "`og:url` = canon",
            "preview matches the intent",
            "mobile share stays readable",
          ],
        },
      ],
    },
    {
      title: "Typical mistakes",
      level: 2,
      paras: [
        "Relative path in `og:image`, broken image, one default for every article (“one cover for the whole site”), title from a stuffed meta title, `og:url` pointing home from inner pages.",
        "Conflict with canonical: preview shows one URL, canon another — confusing for people and UTM analytics. Align them.",
      ],
      lists: [
        {
          intro: "Often kills CTR:",
          items: [
            "text cut mid-word",
            "watermark across the frame",
            "clickbait that doesn’t match the page",
            "stale preview from cache",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Common mistake",
          text: "Fix OG and expect instant updates everywhere. Clear preview cache first, then recheck.",
        },
      ],
    },
    {
      title: "Rollout practice",
      level: 2,
      paras: [
        "In CMS templates set fields: title/description/image for OG separately or inherited from SEO fields. Product cards need their own previews. Add a check to the content release checklist.",
        "OG doesn’t replace content and ads: it makes the jump from social cleaner. Measure post CTR and landing bounce — not “tags present” as a KPI.",
      ],
      lists: [
        {
          intro: "For the week:",
          items: [
            "OG on home and 5 key URLs",
            "preview check",
            "rule for new articles",
            "align with canon and UTM",
          ],
        },
      ],
      links: [
        {
          label: "Filling a site",
          href: "/en/blog/napolnenie-sayta/",
        },
      ],
    },
  ],
  related: [
    "kanonicheskiy-teg",
    "ishodnyy-kod",
    "napolnenie-sayta",
    "seo-vkontakte",
    "redirekt",
  ],
};

/** ES overlay for open-graph — same structure as RU JSON / EN. */
export const openGraphEs: BlogPost = {
  slug: "open-graph",
  title: "Open Graph: cómo vestir un enlace desde redes a tu sitio",
  date: "2020-10-15",
  category: "SEO",
  cover: "/images/blog/open-graph/cover-es.webp",
  excerpt:
    "Qué es Open Graph, qué meta tags fijan title, description e imagen al compartir, cómo comprobar el preview y errores habituales de markup.",
  lead: [
    "Open Graph controla cómo se ve un enlace a tu sitio en un preview: title, texto, imagen, tipo de objeto. Sin markup, una red a menudo coge un fragmento al azar o una imagen minúscula — caen clics y confianza.",
    "Abajo: por qué importa OG, tags base, cómo comprobar y errores habituales. Trata los posts relacionados de Open Graph en la cola como si apuntaran a este como canon.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no fomenta el uso de la plataforma. Facebook* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿Open Graph es un factor de ranking en búsqueda?",
      a: "Apenas participa de forma directa en los rankings de búsqueda. Va de CTR y reconocimiento al compartir — y a veces en messengers.",
    },
    {
      q: "¿Dónde pones las tags?",
      a: "En el `<head>` de la página: `meta property=\"og:…\"`. En un CMS — plugin SEO o plantilla; en estático — en el layout.",
    },
    {
      q: "¿Qué tags son obligatorias?",
      a: "Mínimo: `og:title`, `og:type`, `og:image`, `og:url`. Conviene añadir `og:description` y `og:locale`.",
    },
    {
      q: "¿En qué se diferencia OG de Twitter Card?",
      a: "Misma idea de preview, distintos nombres de meta. Muchas redes leen OG; para X/Twitter a veces también añades tags de card.",
    },
    {
      q: "¿Por qué no se actualiza el preview?",
      a: "Caché social. Tras editar — debugger / limpiar caché de preview de la URL. Confirma que sirves HTML actual sin caché vieja de CDN.",
    },
    {
      q: "¿Qué tamaño de imagen usar?",
      a: "Más o menos ~1200×630 px, URL absoluta https, archivo alcanzable sin auth. No recortes texto importante en los bordes.",
    },
    {
      q: "¿Hace falta OG en cada página?",
      a: "En páginas que la gente comparte: artículos, productos, landings. En páginas utilitarias — opcional.",
    },
    {
      q: "¿OG sustituye title y description?",
      a: "No. Title/description son para la búsqueda y la pestaña; OG es para previews al compartir. Pueden compartir sentido, pero son capas distintas.",
    },
  ],
  sections: [
    {
      title: "Por qué necesitas Open Graph",
      level: 2,
      paras: [
        "Cuando alguien pega una URL en un post o mensaje, la plataforma arma una tarjeta. OG dice qué imagen coger, qué title y texto mostrar, y qué URL canónica es el objeto.",
        "El protocolo nació en el ecosistema de Facebook*, pero otras redes y servicios adoptaron las tags. Para el negocio es control de la primera impresión de un enlace al sitio — no «tráfico de la nada».",
      ],
      lists: [
        {
          intro: "Qué controlas:",
          items: [
            "title y description del preview",
            "imagen",
            "URL del objeto",
            "tipo (article, product, website)",
          ],
        },
      ],
    },
    {
      title: "Tags base y ejemplo",
      level: 2,
      paras: [
        "En el head de la página coloca meta con `property` y `content`. Fija `og:url` a la dirección canónica de la página. `og:type` para artículos suele ser `article`, para la homepage `website`, para un producto `product` (si soportas extensiones).",
        "Imagen — URL absoluta. Description — 1–2 frases sin stuffing; title legible, no una hoja de keywords.",
      ],
      lists: [
        {
          intro: "Set mínimo:",
          items: [
            "`og:title` — titular de la tarjeta",
            "`og:description` — texto corto",
            "`og:image` — preview",
            "`og:url` — canon de la página",
            "`og:type` — tipo de objeto",
            "`og:locale` — p. ej. `es_ES`",
          ],
        },
      ],
      links: [
        {
          label: "Código fuente de la página",
          href: "/es/blog/ishodnyy-kod/",
        },
        {
          label: "Etiqueta canonical",
          href: "/es/blog/kanonicheskiy-teg/",
        },
      ],
    },
    {
      title: "Imágenes y vídeo",
      level: 2,
      paras: [
        "Los previews malos a menudo vienen de un archivo de imagen minúsculo, vertical o detrás de auth. Mantén un marco horizontal, resolución/peso suficientes y una URL estable (no un token de un solo uso).",
        "Para vídeo OG permite propiedades extra (`og:video` y relacionadas) — útil si de verdad sirves un clip, no solo un póster. Si no, basta un `og:image` fuerte.",
      ],
      lists: [
        {
          intro: "Chequeo de imagen:",
          items: [
            "abre por enlace directo",
            "https sin mixed content",
            "logo/cara no recortados en los bordes",
            "una versión actual en la URL (sin sorpresas de CDN)",
          ],
        },
      ],
    },
    {
      title: "Cómo verificar el markup",
      level: 2,
      paras: [
        "View Source / DevTools: ¿están las tags og en la página correcta? Luego — debuggers oficiales de preview de las plataformas que uses (donde existan). Confirma que cargaron tu title/imagen, no un fragmento al azar.",
        "Tras cambiar la imagen, limpia la caché de preview. Asegúrate de que el servidor no sirve HTML distinto al bot social (el cloaking no está permitido).",
      ],
      lists: [
        {
          intro: "Checklist de verificación:",
          items: [
            "tags en head, no en body",
            "un set sensato por URL",
            "`og:url` = canon",
            "el preview cuadra con el intent",
            "el share en móvil se sigue leyendo",
          ],
        },
      ],
    },
    {
      title: "Errores típicos",
      level: 2,
      paras: [
        "Path relativo en `og:image`, imagen rota, un default para cada artículo («una portada para todo el sitio»), title de un meta title atiborrado, `og:url` apuntando a la home desde páginas internas.",
        "Conflicto con canonical: el preview muestra una URL, el canon otra — confunde a la gente y a la analítica con UTM. Alinea ambos.",
      ],
      lists: [
        {
          intro: "A menudo mata el CTR:",
          items: [
            "texto cortado a mitad de palabra",
            "watermark a través del marco",
            "clickbait que no cuadra con la página",
            "preview viejo de la caché",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Error habitual",
          text: "Arreglar OG y esperar updates al instante en todas partes. Primero limpia la caché de preview, luego vuelve a comprobar.",
        },
      ],
    },
    {
      title: "Práctica de despliegue",
      level: 2,
      paras: [
        "En plantillas del CMS fija campos: title/description/image para OG aparte o heredados de campos SEO. Las fichas de producto necesitan sus propios previews. Añade un check al checklist de release de contenido.",
        "OG no sustituye contenido ni ads: hace más limpio el salto desde social. Mide CTR del post y bounce del landing — no «tags presentes» como KPI.",
      ],
      lists: [
        {
          intro: "Para la semana:",
          items: [
            "OG en home y 5 URLs clave",
            "chequeo de preview",
            "regla para artículos nuevos",
            "alinear con canon y UTM",
          ],
        },
      ],
      links: [
        {
          label: "Rellenar un sitio",
          href: "/es/blog/napolnenie-sayta/",
        },
      ],
    },
  ],
  related: [
    "kanonicheskiy-teg",
    "ishodnyy-kod",
    "napolnenie-sayta",
    "seo-vkontakte",
    "redirekt",
  ],
};
