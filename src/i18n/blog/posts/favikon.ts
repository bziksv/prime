import type { BlogPost } from "../../../data/blog";

/** EN overlay for favikon — same structure as RU JSON. */
export const favikonEn: BlogPost = {
  slug: "favikon",
  title: "What a favicon is and what it’s for",
  date: "2018-05-10",
  category: "Websites",
  cover: "/images/blog/favikon/cover-en.webp",
  excerpt:
    "A favicon is the site icon in the tab, bookmarks, and often in the SERP. Why you need one, which sizes and formats to ship, how to connect it, and how not to spoil the brand with someone else’s gallery image.",
  lead: [
    "A favicon (favorite icon) is the small icon next to the site name in the browser tab, bookmarks, on the desktop, and often in the search snippet. It’s not a ranking lever — it’s recognition and a tidy UI.",
    "Below: why you should set one, how to make and connect it, and what to watch in the design. Claims like “a favicon makes traffic beat competitors” are really about everyday recognition — not a proven traffic switch.",
  ],
  faq: [
    {
      q: "Is a favicon required?",
      a: "Technically, the site works without it. In practice, an empty square or someone else’s default looks unfinished and is harder to remember.",
    },
    {
      q: "What size do I need?",
      a: "The base is 16×16 and 32×32. Larger sets help for shortcuts and devices (48, 180 for apple-touch, and similar). Often built from one PNG/SVG source.",
    },
    {
      q: "Which format should I use?",
      a: "Modern minimum: PNG and/or SVG + ICO if needed for old clients. GIF/animation is almost never needed and poorly supported.",
    },
    {
      q: "Does it affect rankings?",
      a: "There’s no direct ranking weight. Indirectly, it helps recognition in the SERP and bookmarks if the icon reads at small size.",
    },
    {
      q: "How fast does it update in search and the browser?",
      a: "Browsers and CDNs often cache hard. In the SERP it can take days to weeks after a change. There’s no hard “exactly one week” rule.",
    },
    {
      q: "Can I take an icon from a free gallery?",
      a: "You risk matching another site and creating rights issues. Better to simplify your logo or a mark from the identity.",
    },
  ],
  sections: [
    {
      title: "Why you need one and what design works",
      level: 2,
      paras: [
        "A favicon helps tell tabs apart among dozens open and recognize the brand in bookmarks. In search (where the icon shows) it strengthens the visual anchor next to the title.",
        "Keep the design simple. Tiny details vanish at 16×16. A logo silhouette, letter monogram, or simple mark in brand colors works better — kept in one system with the site.",
        "For an appliance store you don’t have to “draw a fridge”: a recognizable brand mark is enough. The job is association with the site — not a product catalog in a handful of pixels.",
      ],
      lists: [
        {
          intro: "Visual checklist:",
          items: [
            "reads on dark and light tabs",
            "not overloaded with text",
            "matches identity — not a random gallery mark",
            "a fallback without fine detail exists",
          ],
        },
      ],
      links: [
        {
          label: "Brand identity",
          href: "/en/blog/aydentika-brenda/",
        },
      ],
    },
    {
      title: "How to install and what to generate with",
      level: 2,
      paras: [
        "The classic approach: a file at the site root (`/favicon.ico`) and/or explicit links in `<head>`: `rel=\"icon\"` to PNG/SVG, `apple-touch-icon` if needed. Exact syntax depends on CMS and build — check theme docs or the manifest generator.",
        "Online generators (Favicon Generator and similar tools) are handy for turning one PNG into a size pack. Lists of specific 2018-era services go stale fast: pick a current tool and check the source license.",
        "Ready-made “favicon galleries” are a bad idea for a commercial site: you risk duplicates and rights issues. No designer? Simplify the logo into a square or order a mark with the identity.",
        "After a change, clear the browser/CDN cache and wait for search updates. While the cache lives, the old icon may still show.",
      ],
      lists: [
        {
          intro: "Minimum for release:",
          items: [
            "32×32 icon (PNG) + SVG when possible",
            "apple-touch-icon for an iOS shortcut",
            "check in Chrome/Safari/Firefox tabs",
            "uniqueness vs niche competitors",
          ],
        },
      ],
      links: [
        {
          label: "Before launching a site",
          href: "/en/blog/pered-zapuskom-sayta/",
        },
        {
          label: "Website checklist",
          href: "/en/blog/cheklist-sayta/",
        },
      ],
    },
  ],
  related: [
    "aydentika-brenda",
    "pered-zapuskom-sayta",
    "cheklist-sayta",
    "tendentsii-veb-dizayna",
  ],
};

/** ES overlay for favikon — same structure as RU JSON / EN. */
export const favikonEs: BlogPost = {
  slug: "favikon",
  title: "Qué es un favicon y para qué sirve",
  date: "2018-05-10",
  category: "Websites",
  cover: "/images/blog/favikon/cover.webp",
  excerpt:
    "El favicon es el icono del sitio en la pestaña, favoritos y a menudo en el SERP. Por qué hace falta, qué tamaños y formatos publicar, cómo conectarlo y cómo no estropear la marca con una imagen de galería ajena.",
  lead: [
    "Un favicon (favorite icon) es el icono pequeño junto al nombre del sitio en la pestaña del navegador, favoritos, en el escritorio y a menudo en el snippet de búsqueda. No es una palanca de rankings — es reconocimiento y una UI ordenada.",
    "Abajo: por qué conviene ponerlo, cómo hacerlo y conectarlo, y qué mirar en el diseño. Afirmaciones tipo «un favicon hace que el tráfico gane a los competidores» hablan de reconocimiento cotidiano — no de un interruptor de tráfico probado.",
  ],
  faq: [
    {
      q: "¿Es obligatorio el favicon?",
      a: "Técnicamente el sitio funciona sin él. En la práctica, un cuadrado vacío o el default de otro se ve incompleto y cuesta más recordarlo.",
    },
    {
      q: "¿Qué tamaño necesito?",
      a: "La base es 16×16 y 32×32. Sets más grandes ayudan para accesos directos y dispositivos (48, 180 para apple-touch y similares). A menudo se parten de un solo origen PNG/SVG.",
    },
    {
      q: "¿Qué formato usar?",
      a: "Mínimo moderno: PNG y/o SVG + ICO si hace falta para clientes viejos. GIF/animación casi nunca hace falta y se soporta mal.",
    },
    {
      q: "¿Afecta a los rankings?",
      a: "No hay peso directo de ranking. De forma indirecta ayuda al reconocimiento en el SERP y favoritos si el icono se lee en tamaño pequeño.",
    },
    {
      q: "¿Qué tan rápido se actualiza en búsqueda y en el navegador?",
      a: "Navegadores y CDNs suelen cachear fuerte. En el SERP pueden pasar días o semanas tras el cambio. No hay regla dura de «exactamente una semana».",
    },
    {
      q: "¿Puedo coger un icono de una galería gratis?",
      a: "Arriesgas coincidir con otro sitio y problemas de derechos. Mejor simplificar tu logo o una marca de la identidad.",
    },
  ],
  sections: [
    {
      title: "Por qué hace falta y qué diseño funciona",
      level: 2,
      paras: [
        "El favicon ayuda a distinguir pestañas entre docenas abiertas y a reconocer la marca en favoritos. En búsqueda (donde se muestra el icono) refuerza el ancla visual junto al title.",
        "Mantén el diseño simple. Los detalles diminutos desaparecen a 16×16. Funciona mejor una silueta de logo, monograma o marca simple en colores de marca — en un mismo sistema con el sitio.",
        "Para una tienda de electrodomésticos no hace falta «dibujar una nevera»: basta un símbolo de marca reconocible. El trabajo es asociación con el sitio — no un catálogo de producto en un puñado de píxeles.",
      ],
      lists: [
        {
          intro: "Checklist visual:",
          items: [
            "se lee en pestañas oscuras y claras",
            "no sobrecargado de texto",
            "encaja con la identidad — no una marca random de galería",
            "existe un fallback sin detalle fino",
          ],
        },
      ],
      links: [
        {
          label: "Identidad de marca",
          href: "/es/blog/aydentika-brenda/",
        },
      ],
    },
    {
      title: "Cómo instalarlo y con qué generarlo",
      level: 2,
      paras: [
        "El enfoque clásico: un archivo en la raíz del sitio (`/favicon.ico`) y/o links explícitos en `<head>`: `rel=\"icon\"` a PNG/SVG, `apple-touch-icon` si hace falta. La sintaxis exacta depende del CMS y del build — mira la docs del theme o el generador de manifest.",
        "Los generadores online (Favicon Generator y herramientas similares) sirven para partir un PNG en un pack de tamaños. Las listas de servicios concretos de 2018 se quedan viejas pronto: elige una herramienta actual y revisa la licencia del origen.",
        "Las «galerías de favicons» listas son mala idea para un sitio comercial: arriesgas duplicados y derechos. ¿Sin diseñador? Simplifica el logo a un cuadrado o pide una marca con la identidad.",
        "Tras el cambio, limpia la caché del navegador/CDN y espera las actualizaciones de búsqueda. Mientras vive la caché, puede verse el icono viejo.",
      ],
      lists: [
        {
          intro: "Mínimo para el release:",
          items: [
            "icono 32×32 (PNG) + SVG cuando se pueda",
            "apple-touch-icon para acceso directo en iOS",
            "check en pestañas Chrome/Safari/Firefox",
            "unicidad frente a competidores del nicho",
          ],
        },
      ],
      links: [
        {
          label: "Antes de lanzar un sitio",
          href: "/es/blog/pered-zapuskom-sayta/",
        },
        {
          label: "Checklist del sitio",
          href: "/es/blog/cheklist-sayta/",
        },
      ],
    },
  ],
  related: [
    "aydentika-brenda",
    "pered-zapuskom-sayta",
    "cheklist-sayta",
    "tendentsii-veb-dizayna",
  ],
};
