import type { BlogPost } from "../../../data/blog";

/** EN overlay for dlina-title — same structure as RU JSON. */
export const dlinaTitleEn: BlogPost = {
  slug: "dlina-title",
  title: "Title length: how to fit the snippet headline",
  date: "2020-11-23",
  category: "SEO",
  cover: "/images/blog/dlina-title/cover-en.webp",
  excerpt:
    "What makes the SERP headline, why pixels matter more than “exactly 70 characters,” how to write a Title without truncating meaning, and how it differs from H1.",
  lead: [
    "The Title in `<head>` most often becomes the snippet headline in search. If it’s too long, the engine truncates with an ellipsis — and the offer sense can vanish. If it’s too short and empty — the click goes to a neighbor.",
    "Below: what the SERP headline is made of, how to think about length today, and how not to confuse Title with H1. A full snippet and markup breakdown is in a related article.",
  ],
  faq: [
    {
      q: "How many characters should a Title have?",
      a: "There’s no hard “exactly N” limit: pixel width matters. A practical English cue is often ~50–60 characters before truncation risk — but check previews in Search Console / webmaster tools.",
    },
    {
      q: "Why did people say 70 characters before?",
      a: "Guidelines shifted with snippet width and font. Characters have different widths (W vs i) — hence the pixel approach.",
    },
    {
      q: "Should Title and H1 match?",
      a: "No. Shared meaning, different wording: Title for the SERP click, H1 for the page.",
    },
    {
      q: "Does length affect rankings?",
      a: "Not as “shorter = better rank.” Clarity and CTR matter. A truncated nonsense Title is worse than a readable one.",
    },
    {
      q: "Do I need the brand in the Title?",
      a: "Often yes at the end with a separator if space allows. Early on, brand helps recognition; don’t sacrifice the whole offer for it.",
    },
    {
      q: "How can I check truncation?",
      a: "Previews in webmaster panels, SERP simulators, live results for the query. After edits, wait for recrawl.",
    },
    {
      q: "Does bold in the snippet shorten the Title?",
      a: "Query-match highlighting is rendering. Judge length on the full string; don’t write the Title “for bold.”",
    },
    {
      q: "Should I use one Title for the whole site?",
      a: "No. Each important landing needs its own. Duplicate Titles signal templates and confuse the SERP.",
    },
  ],
  sections: [
    {
      title: "What the snippet headline is made of",
      level: 2,
      paras: [
        "The base is `<title>` content. Search may rewrite the headline if it finds it weak or a better page fragment. Still write a strong Title: it’s your main candidate.",
        "Nearby in the snippet — URL/breadcrumbs and description (or alternate text). Title wins the first glance: the page subject and how you differ from SERP neighbors.",
      ],
      lists: [
        {
          intro: "A good Title:",
          items: [
            "matches page intent",
            "reads before possible truncation",
            "no keyword sheet",
            "unique within the site",
          ],
        },
      ],
      links: [
        {
          label: "SERP snippet",
          href: "/en/blog/snippet/",
        },
      ],
    },
    {
      title: "Characters vs pixels",
      level: 2,
      paras: [
        "The SERP draws the headline in a fixed-width area. Wide letters and long words eat space faster. So “70 characters” is an outdated dogma; the cue is fit meaning into the visible zone.",
        "Keep the offer core in the first ~50–60 characters, brand in the tail if it fits. Check real previews — not only an editor character counter.",
      ],
      lists: [
        {
          intro: "Measurement practice:",
          items: [
            "Title draft in a “URL → title → chars” sheet",
            "preview in Search Console / webmaster tools",
            "spot-check live SERPs for target queries",
            "edits after meaning A/B, not only “cut 3 characters”",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Word order matters more: key meaning first. Truncation hits the tail — put brand and extras there.",
        },
      ],
    },
    {
      title: "How to choose length and wording",
      level: 2,
      paras: [
        "Meaning first: service/product + differentiator + city if needed. Then cut fluff (“best in the world,” “official site” without need). Numbers and specifics (“from 1 day,” “with delivery”) often beat vague adjectives.",
        "Don’t copy H1 one-to-one. Don’t reuse one Title on pagination and filters without clarification — you’ll get duplicates.",
      ],
      lists: [
        {
          intro: "Steps:",
          items: [
            "lock the main URL intent",
            "draft 2–3 Title variants",
            "keep the clearest within visibility",
            "add brand if space remains",
            "check uniqueness on the site",
          ],
        },
      ],
      links: [
        {
          label: "Page optimization",
          href: "/en/blog/optimizatsiya-stranitsy/",
        },
        {
          label: "H1 tag",
          href: "/en/blog/teg-h1/",
        },
      ],
    },
    {
      title: "Typical length and meaning mistakes",
      level: 2,
      paras: [
        "Keyword spam, Title = URL, empty or “Untitled,” one template on 500 product cards, meaning only after character 80. Emoji and ALL CAPS also hurt — look spammy and waste space.",
        "A separate trap — writing Title “for the bot” so a human can’t read the offer. CTR drops even if length is “perfect.”",
      ],
      lists: [
        {
          intro: "Avoid:",
          items: [
            "duplicate Titles",
            "the same keyword five times with commas",
            "the important part only at the end of a long string",
            "competitor copy-paste without your substance",
            "company name only as Title on inner URLs",
          ],
        },
      ],
    },
    {
      title: "SERP highlighting and “bold”",
      level: 2,
      paras: [
        "Search may bold query words in the headline. That’s not a reason to stuff every word form into Title. Highlighting follows query relevance — not an HTML setting.",
        "Don’t optimize “for bold.” Optimize for a clear answer to the query within visible length.",
      ],
      lists: [
        {
          intro: "Focus:",
          items: [
            "clear subject",
            "readable word order",
            "truncation check",
            "alignment with description and H1",
          ],
        },
      ],
    },
    {
      title: "How to roll out and control",
      level: 2,
      paras: [
        "In the CMS set unique Titles for templates: home, categories, products, articles. Crawl current values, find empties and duplicates, prioritize commercial URLs.",
        "After bulk edits request recrawl of important pages and see what the SERP actually shows — sometimes search substitutes its own variant.",
      ],
      lists: [
        {
          intro: "Quarterly control:",
          items: [
            "duplicate and empty Titles",
            "high-traffic pages with weak CTR",
            "new sections without their own headlines",
            "fit with offer redesign",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Change Title and expect rankings in a week. The headline affects click and subject clarity; ranking growth is a separate horizon — months of systematic work (planned often 2–6 months after prep).",
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
    "snippet",
    "teg-h1",
    "optimizatsiya-stranitsy",
    "tehnicheskiy-seo-audit",
    "dubli-stranits",
  ],
};

/** ES overlay for dlina-title — same structure as RU JSON / EN. */
export const dlinaTitleEs: BlogPost = {
  slug: "dlina-title",
  title: "Longitud del Title: cómo encajar el titular del snippet",
  date: "2020-11-23",
  category: "SEO",
  cover: "/images/blog/dlina-title/cover-es.webp",
  excerpt:
    "De qué se hace el titular de la SERP, por qué los píxeles pesan más que «exactamente 70 caracteres», cómo escribir un Title sin truncar el sentido y en qué se diferencia del H1.",
  lead: [
    "El Title en `<head>` suele convertirse en el titular del snippet en la búsqueda. Si es demasiado largo, el motor trunca con puntos suspensivos — y el sentido de la oferta puede desaparecer. Si es demasiado corto y vacío — el clic se va al vecino.",
    "Abajo: de qué está hecho el titular de la SERP, cómo pensar la longitud hoy y cómo no confundir Title con H1. El desglose completo de snippet y markup está en un artículo relacionado.",
  ],
  faq: [
    {
      q: "¿Cuántos caracteres debe tener un Title?",
      a: "No hay un límite duro de «exactamente N»: importa el ancho en píxeles. Una pista práctica en español suele ser ~50–60 caracteres antes del riesgo de truncado — pero revisa previews en Search Console / herramientas de webmaster.",
    },
    {
      q: "¿Por qué antes se decía 70 caracteres?",
      a: "Las guías cambiaron con el ancho del snippet y la fuente. Los caracteres tienen anchos distintos (W vs i) — de ahí el enfoque en píxeles.",
    },
    {
      q: "¿Title y H1 deben coincidir?",
      a: "No. Sentido compartido, redacción distinta: Title para el clic en la SERP, H1 para la página.",
    },
    {
      q: "¿La longitud afecta a los rankings?",
      a: "No como «más corto = mejor rank». Pesan claridad y CTR. Un Title truncado sin sentido es peor que uno legible.",
    },
    {
      q: "¿Hace falta la marca en el Title?",
      a: "A menudo sí al final con un separador si cabe. Al principio, la marca ayuda al reconocimiento; no sacrifiques toda la oferta por ella.",
    },
    {
      q: "¿Cómo compruebo el truncado?",
      a: "Previews en paneles de webmaster, simuladores de SERP, resultados en vivo de la query. Tras editar, espera al recrawl.",
    },
    {
      q: "¿El bold en el snippet acorta el Title?",
      a: "El resaltado de match de query es rendering. Juzga la longitud sobre la cadena completa; no escribas el Title «para el bold».",
    },
    {
      q: "¿Debo usar un Title para todo el sitio?",
      a: "No. Cada landing importante necesita el suyo. Titles duplicados señalan plantillas y confunden la SERP.",
    },
  ],
  sections: [
    {
      title: "De qué está hecho el titular del snippet",
      level: 2,
      paras: [
        "La base es el contenido de `<title>`. La búsqueda puede reescribir el titular si lo ve flojo o encuentra un fragmento de página mejor. Aun así escribe un Title fuerte: es tu candidato principal.",
        "Cerca en el snippet — URL/breadcrumbs y description (o texto alternativo). El Title gana la primera mirada: el tema de la página y en qué te diferencias de los vecinos de la SERP.",
      ],
      lists: [
        {
          intro: "Un buen Title:",
          items: [
            "cuadra con el intent de la página",
            "se lee antes de un posible truncado",
            "sin hoja de keywords",
            "único dentro del sitio",
          ],
        },
      ],
      links: [
        {
          label: "Snippet de la SERP",
          href: "/es/blog/snippet/",
        },
      ],
    },
    {
      title: "Caracteres vs píxeles",
      level: 2,
      paras: [
        "La SERP dibuja el titular en una zona de ancho fijo. Letras anchas y palabras largas comen espacio más rápido. Así que «70 caracteres» es un dogma desfasado; la pista es meter el sentido en la zona visible.",
        "Mantén el núcleo de la oferta en los primeros ~50–60 caracteres, la marca en la cola si cabe. Revisa previews reales — no solo el contador de caracteres del editor.",
      ],
      lists: [
        {
          intro: "Práctica de medición:",
          items: [
            "borrador de Title en una hoja «URL → title → chars»",
            "preview en Search Console / herramientas de webmaster",
            "revisión puntual de SERPs en vivo para queries objetivo",
            "ajustes tras A/B de sentido, no solo «corta 3 caracteres»",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "El orden de palabras importa más: el sentido clave primero. El truncado pega a la cola — pon marca y extras ahí.",
        },
      ],
    },
    {
      title: "Cómo elegir longitud y redacción",
      level: 2,
      paras: [
        "Primero el sentido: servicio/producto + diferencial + ciudad si hace falta. Luego corta relleno («el mejor del mundo», «sitio oficial» sin necesidad). Números y concreto («desde 1 día», «con envío») a menudo ganan a adjetivos vagos.",
        "No copies el H1 uno a uno. No reutilices un Title en paginación y filtros sin aclarar — tendrás duplicados.",
      ],
      lists: [
        {
          intro: "Pasos:",
          items: [
            "fijar el intent principal de la URL",
            "borrador de 2–3 variantes de Title",
            "quedarte con la más clara dentro de la visibilidad",
            "añadir marca si queda espacio",
            "comprobar unicidad en el sitio",
          ],
        },
      ],
      links: [
        {
          label: "Optimización de página",
          href: "/es/blog/optimizatsiya-stranitsy/",
        },
        {
          label: "Etiqueta H1",
          href: "/es/blog/teg-h1/",
        },
      ],
    },
    {
      title: "Errores típicos de longitud y sentido",
      level: 2,
      paras: [
        "Spam de keywords, Title = URL, vacío o «Untitled», una plantilla en 500 fichas de producto, el sentido solo tras el carácter 80. Emoji y MAYÚSCULAS también restan — se ven spam y gastan espacio.",
        "Una trampa aparte — escribir el Title «para el bot» de forma que un humano no lea la oferta. El CTR cae aunque la longitud sea «perfecta».",
      ],
      lists: [
        {
          intro: "Evita:",
          items: [
            "Titles duplicados",
            "la misma keyword cinco veces con comas",
            "lo importante solo al final de una cadena larga",
            "copiar-pegar de un competidor sin tu sustancia",
            "solo el nombre de la empresa como Title en URLs internas",
          ],
        },
      ],
    },
    {
      title: "Resaltado en la SERP y el «bold»",
      level: 2,
      paras: [
        "La búsqueda puede poner en negrita palabras de la query en el titular. Eso no es motivo para meter cada forma de palabra en el Title. El resaltado sigue la relevancia de la query — no un ajuste HTML.",
        "No optimices «para el bold». Optimiza para una respuesta clara a la query dentro de la longitud visible.",
      ],
      lists: [
        {
          intro: "Foco:",
          items: [
            "tema claro",
            "orden de palabras legible",
            "chequeo de truncado",
            "alineación con description y H1",
          ],
        },
      ],
    },
    {
      title: "Cómo desplegar y controlar",
      level: 2,
      paras: [
        "En el CMS fija Titles únicos por plantilla: home, categorías, productos, artículos. Crawl de valores actuales, encuentra vacíos y duplicados, prioriza URLs comerciales.",
        "Tras ediciones masivas pide recrawl de páginas importantes y mira qué muestra de verdad la SERP — a veces la búsqueda sustituye su propia variante.",
      ],
      lists: [
        {
          intro: "Control trimestral:",
          items: [
            "Titles duplicados y vacíos",
            "páginas de alto tráfico con CTR flojo",
            "secciones nuevas sin titular propio",
            "encaje con un rediseño de oferta",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Cambiar el Title y esperar rankings en una semana. El titular afecta al clic y a la claridad del tema; el crecimiento de rankings es un horizonte aparte — meses de trabajo sistemático (a menudo planificado a 2–6 meses tras la prep).",
        },
      ],
      links: [
        {
          label: "Auditoría SEO técnica",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
  ],
  related: [
    "snippet",
    "teg-h1",
    "optimizatsiya-stranitsy",
    "tehnicheskiy-seo-audit",
    "dubli-stranits",
  ],
};
