import type { BlogPost } from "../../../data/blog";

/** EN overlay for kartinka-ssylka — same structure as RU JSON. */
export const kartinkaSsylkaEn: BlogPost = {
  slug: "kartinka-ssylka",
  title: "Image link: how to make an image clickable",
  date: "2021-09-14",
  category: "SEO",
  cover: "/images/blog/kartinka-ssylka/cover-en.webp",
  excerpt:
    "How to wrap an image in a link in HTML and an editor, why alt matters, why your own files beat hotlinking, and how not to kill page speed with banners.",
  lead: [
    "An image link is a picture that leads to a URL on click: a banner, a header logo, a gallery preview. In HTML that is `<a href=\"…\"><img …></a>`.",
    "Below: when to use it, how to mark up the code, which attributes matter, and how an image link differs from a text link for SEO and UX. Link-type basics are in related pieces.",
  ],
  faq: [
    {
      q: "Is a text link better than an image for SEO?",
      a: "For passing anchor meaning — usually yes: text is unambiguous. An image needs clear alt and context. Menu navigation is more often text.",
    },
    {
      q: "Is alt required?",
      a: "Yes for accessibility and clarity when the image carries meaning. For purely decorative — empty alt=\"\", but then do not make them the only path to an important section.",
    },
    {
      q: "Can I link to someone else’s image by URL?",
      a: "Technically yes (hotlink); in practice bad: rights, speed, their CDN may serve a stub. Host files yourself and optimize them.",
    },
    {
      q: "Do width and height speed up the site?",
      a: "They reserve layout space (fewer shifts). The file itself does not get lighter — you need compression, a modern format, and a sensible pixel size.",
    },
    {
      q: "Is an image link the same as a banner?",
      a: "A banner is a special case: an ad creative with a link. Same rules: file weight, clear offer, do not cover content.",
    },
  ],
  sections: [
    {
      title: "Why people use image links",
      level: 2,
      paras: [
        "Visuals catch the eye faster than text: logo to home, product preview to a card, map to contacts, promo banner to a landing.",
        "For crawlers, text anchors and structure matter more. Images support UX; do not hang the whole site’s internal linking on them.",
      ],
      lists: [
        {
          intro: "Good scenarios:",
          items: [
            "logo → homepage",
            "preview in a catalog or blog",
            "promo banner → landing",
            "lightbox/gallery (click opens larger — UX, not necessarily an SEO anchor)",
          ],
        },
      ],
      links: [
        {
          label: "What a link is",
          href: "/en/blog/chto-takoe-ssylka/",
        },
        {
          label: "Clickable link",
          href: "/en/blog/klikabelnaya-ssylka/",
        },
      ],
    },
    {
      title: "HTML: a + img wrapper",
      level: 2,
      paras: [
        "Basic template: `<a href=\"/catalog/\"><img src=\"/images/banner.webp\" alt=\"Pump catalog\" width=\"600\" height=\"200\"></a>`.",
        "In a CMS usually: select the image → “insert link” → set the URL. Check that href is complete and goes where it should (https, no typos).",
      ],
      lists: [
        {
          intro: "Useful img attributes:",
          items: [
            "`src` — path to the file on your hosting",
            "`alt` — meaning for screen readers and if the file fails",
            "`width` / `height` — proportions in the layout",
            "`loading=\"lazy\"` — for below-the-fold banners (not for the LCP hero)",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "For the main first-screen banner do not use lazy if it is the LCP element — you will slow first paint.",
        },
      ],
    },
    {
      title: "Your own files and weight",
      level: 2,
      paras: [
        "Upload images to your server or CDN. Someone else’s hotlink breaks when the donor changes the URL or blocks external requests.",
        "Compress: WebP/AVIF where the pipeline supports it, correct size for the slot (not 4000px in a 300px column). width/height attributes do not replace file optimization.",
      ],
      lists: [
        {
          intro: "Weight checklist:",
          items: [
            "your own creatives",
            "compression without mushing banner text",
            "do not stack a dozen heavy banners on one page",
            "check mobile width",
          ],
        },
      ],
    },
    {
      title: "UX and SEO hygiene",
      level: 2,
      paras: [
        "Caption and alt should match the link destination. “Click here” on an image with no alt is a weak pattern.",
        "Hover effects (shadow, opacity) are fine if they do not hurt touch taps: the tap target must be large enough.",
      ],
      lists: [
        {
          intro: "Placement rules:",
          items: [
            "moderation: banners do not cover text and forms",
            "match the page topic",
            "for menus and key CTAs also add a text link nearby",
            "do not present ads as “just a picture” where labeling is required",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Believing a “unique image link” alone will put you on page one. It is a navigation and CTR element; rankings move with content, tech, and demand — not one banner.",
        },
      ],
    },
    {
      title: "Short takeaway",
      level: 2,
      paras: [
        "An image link is handy for visual jumps: wrap img in `<a>`, set alt, and serve a light file from your hosting. For meaning and SEO, text links are stronger — combine them; do not replace all navigation with images.",
      ],
    },
  ],
};

/** ES overlay for kartinka-ssylka — same structure as RU JSON / EN. */
export const kartinkaSsylkaEs: BlogPost = {
  slug: "kartinka-ssylka",
  title: "Enlace de imagen: cómo hacer una imagen clicable",
  date: "2021-09-14",
  category: "SEO",
  cover: "/images/blog/kartinka-ssylka/cover-es.webp",
  excerpt:
    "Cómo envolver una imagen en un enlace en HTML y en un editor, por qué importa el alt, por qué tus propios archivos ganan al hotlinking, y cómo no matar la velocidad de la página con banners.",
  lead: [
    "Un enlace de imagen es una foto que lleva a una URL al hacer clic: un banner, el logo del header, una preview de galería. En HTML es `<a href=\"…\"><img …></a>`.",
    "Abajo: cuándo usarlo, cómo marcar el código, qué atributos importan y en qué se diferencia un enlace de imagen de uno de texto para SEO y UX. Lo básico de tipos de enlace está en piezas relacionadas.",
  ],
  faq: [
    {
      q: "¿Un enlace de texto es mejor que una imagen para SEO?",
      a: "Para pasar el sentido del ancla — suele sí: el texto es inequívoco. Una imagen necesita alt claro y contexto. La navegación del menú es más a menudo texto.",
    },
    {
      q: "¿El alt es obligatorio?",
      a: "Sí para accesibilidad y claridad cuando la imagen lleva sentido. Si es puramente decorativa — alt=\"\" vacío, pero entonces no las hagas el único camino a una sección importante.",
    },
    {
      q: "¿Puedo enlazar a la imagen de otro por URL?",
      a: "Técnicamente sí (hotlink); en la práctica mal: derechos, velocidad, su CDN puede servir un stub. Aloja los archivos tú y optimízalos.",
    },
    {
      q: "¿Width y height aceleran el sitio?",
      a: "Reservan espacio en el layout (menos shifts). El archivo en sí no se aligera — hace falta compresión, formato moderno y un tamaño en píxeles sensato.",
    },
    {
      q: "¿Un enlace de imagen es lo mismo que un banner?",
      a: "Un banner es un caso especial: un creativo de ads con enlace. Las mismas reglas: peso del archivo, oferta clara, no tapar el contenido.",
    },
  ],
  sections: [
    {
      title: "Por qué se usan enlaces de imagen",
      level: 2,
      paras: [
        "Lo visual atrapa la mirada más rápido que el texto: logo a la home, preview de producto a una ficha, mapa a contactos, banner promo a un landing.",
        "Para los crawlers pesan más las anclas de texto y la estructura. Las imágenes sostienen la UX; no cuelgues de ellas todo el enlazado interno del sitio.",
      ],
      lists: [
        {
          intro: "Buenos escenarios:",
          items: [
            "logo → homepage",
            "preview en un catálogo o blog",
            "banner promo → landing",
            "lightbox/galería (el clic abre más grande — UX, no necesariamente un ancla SEO)",
          ],
        },
      ],
      links: [
        {
          label: "Qué es un enlace",
          href: "/es/blog/chto-takoe-ssylka/",
        },
        {
          label: "Enlace clicable",
          href: "/es/blog/klikabelnaya-ssylka/",
        },
      ],
    },
    {
      title: "HTML: wrapper a + img",
      level: 2,
      paras: [
        "Plantilla básica: `<a href=\"/catalog/\"><img src=\"/images/banner.webp\" alt=\"Catálogo de bombas\" width=\"600\" height=\"200\"></a>`.",
        "En un CMS suele: seleccionar la imagen → «insertar enlace» → fijar la URL. Comprueba que el href esté completo y vaya donde debe (https, sin typos).",
      ],
      lists: [
        {
          intro: "Atributos útiles de img:",
          items: [
            "`src` — path al archivo en tu hosting",
            "`alt` — sentido para lectores de pantalla y si el archivo falla",
            "`width` / `height` — proporciones en el layout",
            "`loading=\"lazy\"` — para banners below-the-fold (no para el hero LCP)",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "Para el banner principal de primera pantalla no uses lazy si es el elemento LCP — ralentizarás el first paint.",
        },
      ],
    },
    {
      title: "Tus propios archivos y el peso",
      level: 2,
      paras: [
        "Sube las imágenes a tu servidor o CDN. El hotlink ajeno se rompe cuando el donante cambia la URL o bloquea peticiones externas.",
        "Comprime: WebP/AVIF donde el pipeline lo soporte, tamaño correcto para el hueco (no 4000px en una columna de 300px). Los atributos width/height no sustituyen la optimización del archivo.",
      ],
      lists: [
        {
          intro: "Checklist de peso:",
          items: [
            "creativos propios",
            "compresión sin emborronar el texto del banner",
            "no apiles una docena de banners pesados en una página",
            "revisa el ancho en móvil",
          ],
        },
      ],
    },
    {
      title: "Higiene de UX y SEO",
      level: 2,
      paras: [
        "El pie de foto y el alt deben cuadrar con el destino del enlace. «Clic aquí» en una imagen sin alt es un patrón flojo.",
        "Efectos hover (sombra, opacity) están bien si no estorban en touch: el tap target tiene que ser lo bastante grande.",
      ],
      lists: [
        {
          intro: "Reglas de colocación:",
          items: [
            "moderación: los banners no tapan texto ni formularios",
            "que cuadre con el tema de la página",
            "para menús y CTAs clave añade también un enlace de texto cerca",
            "no presentes ads como «solo una foto» donde haga falta etiquetado",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Creer que un «enlace de imagen único» solo te pondrá en primera página. Es un elemento de navegación y CTR; los rankings se mueven con contenido, técnica y demanda — no con un banner.",
        },
      ],
    },
    {
      title: "Resumen corto",
      level: 2,
      paras: [
        "Un enlace de imagen viene bien para saltos visuales: envuelve img en `<a>`, pon alt y sirve un archivo ligero desde tu hosting. Para sentido y SEO, los enlaces de texto son más fuertes — combínalos; no sustituyas toda la navegación por imágenes.",
      ],
    },
  ],
};
