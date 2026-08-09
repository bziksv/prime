import type { BlogPost } from "../../../data/blog";

/** EN overlay for taymkod-youtube — same structure as RU JSON. */
export const taymkodYoutubeEn: BlogPost = {
  slug: "taymkod-youtube",
  title: "YouTube timecodes: chapters, timed links, and navigation",
  date: "2021-05-25",
  category: "SMM",
  cover: "/images/blog/taymkod-youtube/cover-en.webp",
  excerpt:
    "What a YouTube timecode is: chapters in the description, clickable markers, a URL with a time parameter — and why viewers and channels benefit, without outdated Studio screenshots.",
  lead: [
    "A YouTube timecode is a time marker in a video: `1:23` in the description or a link that opens at that second. On long uploads it’s a table of contents — not an “algorithm secret.”",
    "Below: why chapters help, how to format the description, how to copy a timed URL, and what effect to expect. Studio menus change; use current YouTube Help as the source of truth.",
  ],
  faq: [
    {
      q: "How is a timecode different from chapters?",
      a: "Chapters are a set of description timecodes (often starting at `0:00`) that YouTube draws as segments on the scrubber. A single timed link jumps to a moment without a full TOC.",
    },
    {
      q: "Is starting at 0:00 required?",
      a: "For automatic chapters you usually need a first marker at zero and several items. Check current YouTube Help — limits get updated.",
    },
    {
      q: "What time format should I use?",
      a: "Often `M:SS` or `H:MM:SS` at the start of a description line, then the block title. Example: `0:00 Intro` / `2:15 Case breakdown`.",
    },
    {
      q: "Do timecodes help promotion?",
      a: "Indirectly: easier completion and sharing a clip. Not a recommendation guarantee; topic, thumbnail, and retention matter more.",
    },
    {
      q: "How do I open a video at minute 5?",
      a: "Copy a timed URL from the player (desktop: right-click → copy URL at current time) or add a parameter like `?t=5m` / `&t=300` — formats vary by client.",
    },
    {
      q: "Why doesn’t the video start from the beginning?",
      a: "YouTube often resumes where you left off. Incognito or another account shows “from zero” behavior if the link has no `t=`.",
    },
    {
      q: "Do Shorts need chapters?",
      a: "For short vertical clips a TOC is usually overkill. Timecodes help more on long guides, streams, and podcasts.",
    },
    {
      q: "Can I keep private-only timecodes?",
      a: "There’s no separate private TOC. Save a timed link in bookmarks or notes.",
    },
  ],
  sections: [
    {
      title: "Why timecodes help viewers and creators",
      level: 2,
      paras: [
        "A long video with no TOC makes people scrub at random. Chapters cut friction: viewers jump straight to the block they need.",
        "Creators answer comments more easily (“start at 7:40”), share clips on social, and lock script structure already at edit time.",
        "For webinars, breakdowns, interviews, and album-style videos, timecodes are almost required; for a 30-second Short — not.",
      ],
      lists: [
        {
          intro: "Especially useful for:",
          items: [
            "how-to guides and tutorials",
            "stream and conference recordings",
            "podcasts with a topic timeline",
            "reviews covering several products",
          ],
        },
      ],
      links: [
        {
          label: "YouTube channel and video description",
          href: "/en/blog/opisanie-youtube-kanala/",
        },
        {
          label: "Growing a YouTube channel",
          href: "/en/blog/raskrutka-youtube/",
        },
      ],
    },
    {
      title: "Chapters in the description",
      level: 2,
      paras: [
        "List markers in the video description: time at the start of the line + a short section title. YouTube recognizes the list and builds clickable chapters on the progress bar when current service rules are met.",
        "Name sections for the viewer (“Install the plugin”), not internal edit notes (“cut 3”).",
        "Don’t turn the description into 40 markers every 20 seconds — a TOC should help, not noise.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Studio changes",
          text: "Older paths went through “Creator Studio” and other menu names. Edit the description in YouTube Studio on the video; find the current path in Help, not 2021 screenshots.",
        },
      ],
    },
    {
      title: "Link with a time stamp",
      level: 2,
      paras: [
        "To drop someone on a fragment, send a URL with a time marker. On desktop the player usually has “copy link at current time.”",
        "Manually you can add a time parameter to the video URL (seconds or `1m30s` — depends how YouTube accepts links in your client). Test the link in incognito.",
        "Useful for comments, messengers, and blog posts: “bug fix starts at 4:12.”",
      ],
      lists: [
        {
          intro: "Timed-link mini checklist:",
          items: [
            "seek to the right second",
            "copy the URL with time",
            "verify in another browser/mode",
            "say nearby what they’ll see there",
          ],
        },
      ],
    },
    {
      title: "How to build it into the script and description",
      level: 2,
      paras: [
        "Sketch blocks in the script or edit timeline first — then drop the times into the description.",
        "Put the video gist and CTA in the first description lines; TOC below. That keeps share previews readable.",
        "Align chapters with cards/end screens if you use them: don’t promise a “pricing section” that isn’t there.",
      ],
      links: [
        {
          label: "YouTube video editing",
          href: "/en/blog/montazh-youtube/",
        },
        {
          label: "Video buttons and elements",
          href: "/en/blog/knopki-youtube/",
        },
      ],
    },
    {
      title: "Mistakes and myths",
      level: 2,
      paras: [
        "Myth: “timecodes alone get you into recommendations.” No — they improve UX. Channel growth is topic, retention, consistency.",
        "Mistake: wrong time format or no zero on the first chapter — the TOC won’t build.",
        "Mistake: copying someone else’s timecodes without checking — times won’t match after a re-edit.",
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "A timecode is time navigation: chapters in the description and/or a link with `t=`.",
        "Add a TOC on long videos; after publish, check clicks on the scrubber.",
        "It’s a viewer service — not a substitute for strong content and thumbnails.",
      ],
    },
  ],
  closing: [
    "On your next long video, add a TOC starting at `0:00` with 4–7 blocks, publish, and check scrubber clicks — faster than arguing about “algorithm secrets.”",
  ],
  related: [
    "opisanie-youtube-kanala",
    "raskrutka-youtube",
    "montazh-youtube",
    "knopki-youtube",
    "kluchi-youtube",
    "youtube-monetizaciya",
  ],
};

/** ES overlay for taymkod-youtube — same structure as RU JSON / EN. */
export const taymkodYoutubeEs: BlogPost = {
  slug: "taymkod-youtube",
  title: "Timecodes en YouTube: capítulos, enlaces con tiempo y navegación",
  date: "2021-05-25",
  category: "SMM",
  cover: "/images/blog/taymkod-youtube/cover.webp",
  excerpt:
    "Qué es un timecode de YouTube: capítulos en la descripción, marcadores clicables, una URL con parámetro de tiempo — y por qué ayudan a espectadores y canales, sin capturas antiguas de Studio.",
  lead: [
    "Un timecode de YouTube es un marcador de tiempo en un vídeo: `1:23` en la descripción o un enlace que abre en ese segundo. En uploads largos es una tabla de contenidos — no un «secreto del algoritmo».",
    "Abajo: por qué ayudan los capítulos, cómo formatear la descripción, cómo copiar una URL con tiempo y qué efecto esperar. Los menús de Studio cambian; usa la Help actual de YouTube como fuente de verdad.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia un timecode de los capítulos?",
      a: "Los capítulos son un set de timecodes en la descripción (a menudo empezando en `0:00`) que YouTube dibuja como segmentos en la barra. Un solo enlace con tiempo salta a un momento sin un TOC completo.",
    },
    {
      q: "¿Hace falta empezar en 0:00?",
      a: "Para capítulos automáticos suele hacer falta un primer marcador en cero y varios ítems. Revisa la Help actual de YouTube — los límites se actualizan.",
    },
    {
      q: "¿Qué formato de tiempo uso?",
      a: "A menudo `M:SS` o `H:MM:SS` al inicio de una línea de descripción, luego el título del bloque. Ejemplo: `0:00 Intro` / `2:15 Desglose del caso`.",
    },
    {
      q: "¿Los timecodes ayudan a la promoción?",
      a: "De forma indirecta: más fácil completar y compartir un clip. No son garantía de recomendaciones; tema, miniatura y retención importan más.",
    },
    {
      q: "¿Cómo abro un vídeo en el minuto 5?",
      a: "Copia una URL con tiempo desde el player (escritorio: clic derecho → copiar URL en el tiempo actual) o añade un parámetro tipo `?t=5m` / `&t=300` — los formatos varían según el cliente.",
    },
    {
      q: "¿Por qué el vídeo no arranca desde el principio?",
      a: "YouTube a menudo reanuda donde lo dejaste. Incógnito u otra cuenta muestran el comportamiento «desde cero» si el enlace no tiene `t=`.",
    },
    {
      q: "¿Los Shorts necesitan capítulos?",
      a: "Para clips verticales cortos un TOC suele sobrar. Los timecodes ayudan más en guías largas, streams y podcasts.",
    },
    {
      q: "¿Puedo guardar timecodes solo privados?",
      a: "No hay un TOC privado aparte. Guarda un enlace con tiempo en favoritos o notas.",
    },
  ],
  sections: [
    {
      title: "Por qué los timecodes ayudan a espectadores y creadores",
      level: 2,
      paras: [
        "Un vídeo largo sin TOC hace que la gente haga scrub al azar. Los capítulos bajan la fricción: el espectador salta directo al bloque que necesita.",
        "Los creadores responden comentarios con más facilidad («empieza en 7:40»), comparten clips en redes y fijan la estructura del guion ya en el montaje.",
        "Para webinars, desgloses, entrevistas y vídeos tipo álbum, los timecodes casi son obligatorios; para un Short de 30 segundos — no.",
      ],
      lists: [
        {
          intro: "Especialmente útiles para:",
          items: [
            "guías how-to y tutoriales",
            "grabaciones de streams y conferencias",
            "podcasts con timeline temático",
            "reseñas que cubren varios productos",
          ],
        },
      ],
      links: [
        {
          label: "Descripción del canal y del vídeo en YouTube",
          href: "/es/blog/opisanie-youtube-kanala/",
        },
        {
          label: "Crecer un canal de YouTube",
          href: "/es/blog/raskrutka-youtube/",
        },
      ],
    },
    {
      title: "Capítulos en la descripción",
      level: 2,
      paras: [
        "Lista marcadores en la descripción del vídeo: tiempo al inicio de la línea + un título corto de sección. YouTube reconoce la lista y arma capítulos clicables en la barra de progreso cuando se cumplen las reglas actuales del servicio.",
        "Nombra secciones para el espectador («Instala el plugin»), no notas internas de montaje («corte 3»).",
        "No conviertas la descripción en 40 marcadores cada 20 segundos — un TOC debe ayudar, no hacer ruido.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Studio cambia",
          text: "Rutas antiguas pasaban por «Creator Studio» y otros nombres de menú. Edita la descripción en YouTube Studio en el vídeo; busca el camino actual en Help, no en capturas de 2021.",
        },
      ],
    },
    {
      title: "Enlace con marca de tiempo",
      level: 2,
      paras: [
        "Para dejar a alguien en un fragmento, envía una URL con marcador de tiempo. En escritorio el player suele tener «copiar enlace en el tiempo actual».",
        "A mano puedes añadir un parámetro de tiempo a la URL del vídeo (segundos o `1m30s` — depende de cómo YouTube acepte enlaces en tu cliente). Prueba el enlace en incógnito.",
        "Útil para comentarios, messengers y posts del blog: «el fix del bug empieza en 4:12».",
      ],
      lists: [
        {
          intro: "Mini checklist del enlace con tiempo:",
          items: [
            "ve al segundo correcto",
            "copia la URL con tiempo",
            "verifica en otro navegador/modo",
            "di cerca qué verán ahí",
          ],
        },
      ],
    },
    {
      title: "Cómo integrarlo en el guion y la descripción",
      level: 2,
      paras: [
        "Esboza bloques en el guion o en la timeline de montaje primero — luego pasa los tiempos a la descripción.",
        "Pon la esencia del vídeo y el CTA en las primeras líneas de la descripción; el TOC debajo. Así las previews al compartir se leen bien.",
        "Alinea capítulos con tarjetas/end screens si los usas: no prometas una «sección de precios» que no está.",
      ],
      links: [
        {
          label: "Montaje de vídeo en YouTube",
          href: "/blog/montazh-youtube/",
        },
        {
          label: "Botones y elementos del vídeo",
          href: "/es/blog/knopki-youtube/",
        },
      ],
    },
    {
      title: "Errores y mitos",
      level: 2,
      paras: [
        "Mito: «solo con timecodes entras en recomendaciones». No — mejoran la UX. El crecimiento del canal es tema, retención, constancia.",
        "Error: formato de tiempo incorrecto o sin cero en el primer capítulo — el TOC no se arma.",
        "Error: copiar timecodes ajenos sin comprobar — los tiempos no cuadrarán tras un re-edit.",
      ],
    },
    {
      title: "Qué recordar",
      level: 2,
      paras: [
        "Un timecode es navegación por tiempo: capítulos en la descripción y/o un enlace con `t=`.",
        "Añade un TOC en vídeos largos; tras publicar, revisa clics en la barra.",
        "Es un servicio al espectador — no un sustituto de contenido fuerte y miniaturas.",
      ],
    },
  ],
  closing: [
    "En tu próximo vídeo largo, añade un TOC que empiece en `0:00` con 4–7 bloques, publica y revisa los clics en la barra — más rápido que discutir «secretos del algoritmo».",
  ],
  related: [
    "opisanie-youtube-kanala",
    "raskrutka-youtube",
    "knopki-youtube",
    "shapka-youtube",
    "strayk-youtube",
    "montazh-youtube",
  ],
};
