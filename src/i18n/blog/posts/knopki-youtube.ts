import type { BlogPost } from "../../../data/blog";

/** EN overlay for knopki-youtube — same structure as RU JSON. */
export const knopkiYoutubeEn: BlogPost = {
  slug: "knopki-youtube",
  title: "YouTube cards, end screens, and subscribe prompts",
  date: "2021-05-27",
  category: "SMM",
  cover: "/images/blog/knopki-youtube/cover-en.webp",
  excerpt:
    "Which interactive elements replaced outdated YouTube annotations: subscribe, cards, end screens — and how to use them without cluttering the video.",
  lead: [
    "On-video annotations are long gone. YouTube now offers cards, end screens, description links, and channel layout tools. Each one has a job — help the viewer keep watching, open a related piece, or subscribe.",
    "Interactive elements don’t replace topic, retention, and a clear thumbnail. Used carefully, they turn videos into a path and give the next logical step.",
  ],
  faq: [
    {
      q: "Where are YouTube annotations?",
      a: "The tool is retired. Use cards and end screens in YouTube Studio.",
    },
    {
      q: "Are a card and an end screen the same?",
      a: "No. A card appears during the video; an end screen is at the finish with tiles for a video, playlist, or subscribe.",
    },
    {
      q: "Do I need a Subscribe button on my site?",
      a: "You can embed the official widget if you send traffic to the channel. Growth still comes from videos and retention, not one button.",
    },
    {
      q: "How many cards should I add?",
      a: "One or two relevant cards beat a swarm over the frame. Don’t cover key content or captions.",
    },
    {
      q: "Will this replace channel promotion?",
      a: "No. Elements help navigate your content. Growth is niche, quality, and consistency.",
    },
    {
      q: "Can I put a website link in a card?",
      a: "External link types depend on channel status and YouTube rules. Check limits in Studio before publishing and send viewers only to a relevant page.",
    },
    {
      q: "Should I ask to subscribe at the start?",
      a: "Better show value first and say what the channel delivers. The main CTA fits after a useful segment or at the end.",
    },
  ],
  sections: [
    {
      title: "What replaced annotations",
      level: 2,
      paras: [
        "Annotations were clickable labels in the frame; YouTube dropped them — they worked poorly on mobile and often hid the content. Interactivity now sits in a few formats viewers see in more predictable places.",
        "A card appears mid-watch and suggests a related video, playlist, or channel. An end screen runs in the last seconds: offer the next episode and subscribe. Description, pinned comment, and channel homepage shelves complete that navigation.",
      ],
      lists: [
        {
          intro: "Basic kit for a video:",
          items: [
            "one card to a related video or playlist",
            "an end screen with 2–3 clear tiles",
            "a spoken subscribe ask after a useful segment",
            "chapters and short links in the description — not a URL wall",
          ],
        },
      ],
    },
    {
      title: "Match the element to the job",
      level: 2,
      paras: [
        "Start from the viewer’s path, not button count. If the video answers one question, the end should offer the next step on the same topic. After a tool overview that might be a setup deep-dive — not a random popular upload.",
        "A card helps when you mention a topic but don’t want to derail the story. An end screen works as a fork: “watch the sequel,” “open the playlist,” or “subscribe.” One clear option usually beats a pile of unrelated links.",
      ],
      lists: [
        {
          intro: "Goals vs formats:",
          items: [
            "related material during an explanation — card",
            "series sequel or playlist — end screen",
            "resources and caveats — description and pinned comment",
            "navigation across all content — channel homepage and playlists",
          ],
        },
      ],
    },
    {
      title: "Setting up cards and end screens",
      level: 2,
      paras: [
        "Open the video in YouTube Studio and find the cards or end-screen editor. Add elements after the cut is locked — easier to see if a tile covers titles, the speaker’s face, or a UI demo.",
        "Leave a calm final beat for the end screen. If the last seconds carry an important takeaway, viewers choose between reading and clicking. Finish the thought, then briefly cue the next video.",
      ],
      lists: [
        {
          intro: "Pre-publish check:",
          items: [
            "the card appears after context, not in the first seconds",
            "the end screen uses the last 5–20 seconds and doesn’t fight the finale",
            "the target video is viewable and matches the promise",
            "elements don’t cover captions or key frame details",
          ],
        },
      ],
      notes: [
        {
          title: "The UI changes",
          text: "Studio menu names and templates shift. Check the published video on desktop and phone — not only the editor preview.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Subscribe CTA without nagging",
      level: 2,
      paras: [
        "A Subscribe button alone doesn’t persuade. People subscribe when they understand the channel format: which topics ship, how often, and how new episodes differ from the one they just watched.",
        "Make the ask specific. Instead of “please subscribe,” say the playlist has a sequel and the channel ships weekly deep-dives. That CTA feels like a helpful tip, not pressure.",
      ],
      lists: [
        {
          intro: "A good CTA usually:",
          items: [
            "comes after value, not before the point",
            "explains subscription value in one sentence",
            "matches the real schedule and topics",
            "is echoed on the end screen without blocking the watch",
          ],
        },
      ],
    },
    {
      title: "How to measure whether elements help",
      level: 2,
      paras: [
        "In analytics look past click counts to the path after them. A card with modest CTR can still help if it sends an interested audience to a long topical video and deepens session watch time.",
        "Compare similar videos, not the whole channel at once. A tutorial, a review, and a short entertainment piece set different expectations — the same end-screen layout won’t perform the same.",
      ],
      lists: [
        {
          intro: "Useful signals:",
          items: [
            "end-screen clicks to related videos",
            "share of viewers who continue in a playlist",
            "subscribes after specific uploads",
            "retention in the last seconds of the video",
          ],
        },
      ],
      links: [
        {
          label: "YouTube channel growth",
          href: "/en/blog/raskrutka-youtube/",
        },
        {
          label: "YouTube channel banner",
          href: "/en/blog/shapka-youtube/",
        },
      ],
    },
    {
      title: "What to avoid in packaging",
      level: 2,
      paras: [
        "Don’t turn the video into a stack of pop-up asks. Frequent cards, clickbait labels, and links to unrelated videos distract and erode trust. Packaging should support the material, not compete with it.",
        "Skip third-party “button generators” that ask for your password or channel access. Official elements live in YouTube Studio; the site subscribe widget comes from Google’s docs.",
      ],
      lists: [
        {
          intro: "Red flags:",
          items: [
            "outdated guides that only talk about annotations",
            "the same card on every video with no topic link",
            "covering captions and key frame details",
            "promises that a widget or button alone grows the channel",
          ],
        },
      ],
    },
  ],
};

/** ES overlay for knopki-youtube — same structure as RU JSON / EN. */
export const knopkiYoutubeEs: BlogPost = {
  slug: "knopki-youtube",
  title: "Tarjetas, end screens y prompts de suscripción en YouTube",
  date: "2021-05-27",
  category: "SMM",
  cover: "/images/blog/knopki-youtube/cover.webp",
  excerpt:
    "Qué elementos interactivos sustituyeron las anotaciones antiguas de YouTube: suscripción, tarjetas, end screens — y cómo usarlos sin saturar el vídeo.",
  lead: [
    "Las anotaciones sobre el vídeo ya no existen. YouTube ofrece tarjetas, end screens, enlaces en la descripción y herramientas de layout del canal. Cada una tiene un trabajo — ayudar al espectador a seguir viendo, abrir una pieza relacionada o suscribirse.",
    "Los elementos interactivos no sustituyen tema, retención y una miniatura clara. Usados con cuidado, convierten los vídeos en un camino y dan el siguiente paso lógico.",
  ],
  faq: [
    {
      q: "¿Dónde están las anotaciones de YouTube?",
      a: "La herramienta está retirada. Usa tarjetas y end screens en YouTube Studio.",
    },
    {
      q: "¿Una tarjeta y un end screen son lo mismo?",
      a: "No. Una tarjeta aparece durante el vídeo; un end screen es al final con tiles para un vídeo, playlist o suscripción.",
    },
    {
      q: "¿Hace falta un botón Suscribirse en mi sitio?",
      a: "Puedes incrustar el widget oficial si envías tráfico al canal. El crecimiento sigue viniendo de los vídeos y la retención, no de un solo botón.",
    },
    {
      q: "¿Cuántas tarjetas añado?",
      a: "Una o dos relevantes ganan a un enjambre sobre el fotograma. No cubras contenido clave ni subtítulos.",
    },
    {
      q: "¿Esto sustituye la promoción del canal?",
      a: "No. Los elementos ayudan a navegar tu contenido. El crecimiento es nicho, calidad y constancia.",
    },
    {
      q: "¿Puedo poner un enlace al sitio en una tarjeta?",
      a: "Los tipos de enlace externo dependen del estado del canal y las reglas de YouTube. Revisa los límites en Studio antes de publicar y envía solo a una página relevante.",
    },
    {
      q: "¿Debo pedir suscripción al inicio?",
      a: "Mejor muestra valor primero y di qué entrega el canal. El CTA principal encaja tras un segmento útil o al final.",
    },
  ],
  sections: [
    {
      title: "Qué sustituyó a las anotaciones",
      level: 2,
      paras: [
        "Las anotaciones eran etiquetas clicables en el fotograma; YouTube las retiró — iban mal en móvil y a menudo tapaban el contenido. La interactividad ahora vive en unos pocos formatos que el espectador ve en sitios más predecibles.",
        "Una tarjeta aparece a mitad del visionado y sugiere un vídeo relacionado, playlist o canal. Un end screen corre en los últimos segundos: ofrece el siguiente episodio y suscribirse. Descripción, comentario fijado y estantes de la homepage del canal completan esa navegación.",
      ],
      lists: [
        {
          intro: "Kit básico para un vídeo:",
          items: [
            "una tarjeta a un vídeo o playlist relacionados",
            "un end screen con 2–3 tiles claros",
            "una petición verbal de suscripción tras un segmento útil",
            "capítulos y enlaces cortos en la descripción — no un muro de URLs",
          ],
        },
      ],
    },
    {
      title: "Empareja el elemento con el trabajo",
      level: 2,
      paras: [
        "Parte del camino del espectador, no del conteo de botones. Si el vídeo responde una pregunta, el final debería ofrecer el siguiente paso del mismo tema. Tras un overview de una herramienta eso puede ser un deep-dive de setup — no un upload popular al azar.",
        "Una tarjeta ayuda cuando mencionas un tema pero no quieres descarrilar la historia. Un end screen funciona como bifurcación: «mira la secuela», «abre la playlist» o «suscríbete». Una opción clara suele ganar a un montón de enlaces sin relación.",
      ],
      lists: [
        {
          intro: "Objetivos vs formatos:",
          items: [
            "material relacionado durante una explicación — tarjeta",
            "secuela de serie o playlist — end screen",
            "recursos y matices — descripción y comentario fijado",
            "navegación por todo el contenido — homepage del canal y playlists",
          ],
        },
      ],
    },
    {
      title: "Configurar tarjetas y end screens",
      level: 2,
      paras: [
        "Abre el vídeo en YouTube Studio y busca el editor de tarjetas o end screen. Añade elementos cuando el corte esté cerrado — es más fácil ver si un tile tapa títulos, la cara del speaker o una demo de UI.",
        "Deja un cierre calmado para el end screen. Si los últimos segundos llevan un takeaway importante, el espectador elige entre leer y hacer clic. Termina la idea y luego cuea en breve el siguiente vídeo.",
      ],
      lists: [
        {
          intro: "Chequeo antes de publicar:",
          items: [
            "la tarjeta aparece tras el contexto, no en los primeros segundos",
            "el end screen usa los últimos 5–20 segundos y no pelea con el final",
            "el vídeo destino es visible y cuadra con la promesa",
            "los elementos no tapen subtítulos ni detalles clave del fotograma",
          ],
        },
      ],
      notes: [
        {
          title: "La UI cambia",
          text: "Los nombres de menú y plantillas de Studio se mueven. Revisa el vídeo publicado en escritorio y teléfono — no solo la preview del editor.",
          kind: "tip",
        },
      ],
    },
    {
      title: "CTA de suscripción sin insistir",
      level: 2,
      paras: [
        "Un botón Suscribirse solo no persuade. La gente se suscribe cuando entiende el formato del canal: qué temas salen, con qué frecuencia y cómo los episodios nuevos se diferencian del que acaba de ver.",
        "Haz el pedido concreto. En lugar de «por favor suscríbete», di que la playlist tiene una secuela y el canal publica deep-dives semanales. Ese CTA se siente como un tip útil, no como presión.",
      ],
      lists: [
        {
          intro: "Un buen CTA suele:",
          items: [
            "llegar tras el valor, no antes del punto",
            "explicar el valor de suscribirse en una frase",
            "cuadrar con el calendario y temas reales",
            "ecoarse en el end screen sin bloquear el visionado",
          ],
        },
      ],
    },
    {
      title: "Cómo medir si los elementos ayudan",
      level: 2,
      paras: [
        "En analítica mira más allá del conteo de clics hacia el camino después. Una tarjeta con CTR modesto aún puede ayudar si envía audiencia interesada a un vídeo temático largo y profundiza el tiempo de sesión.",
        "Compara vídeos parecidos, no todo el canal a la vez. Un tutorial, una reseña y una pieza corta de entretenimiento fijan expectativas distintas — el mismo layout de end screen no rendirá igual.",
      ],
      lists: [
        {
          intro: "Señales útiles:",
          items: [
            "clics del end screen a vídeos relacionados",
            "cuota de espectadores que siguen en una playlist",
            "suscripciones tras uploads concretos",
            "retención en los últimos segundos del vídeo",
          ],
        },
      ],
      links: [
        {
          label: "Crecimiento del canal de YouTube",
          href: "/es/blog/raskrutka-youtube/",
        },
        {
          label: "Banner del canal de YouTube",
          href: "/es/blog/shapka-youtube/",
        },
      ],
    },
    {
      title: "Qué evitar en el packaging",
      level: 2,
      paras: [
        "No conviertas el vídeo en una pila de peticiones emergentes. Tarjetas frecuentes, etiquetas clickbait y enlaces a vídeos sin relación distraen y erosionan la confianza. El packaging debe sostener el material, no competir con él.",
        "Salta los «generadores de botones» de terceros que piden tu contraseña o acceso al canal. Los elementos oficiales viven en YouTube Studio; el widget de suscripción del sitio viene de la documentación de Google.",
      ],
      lists: [
        {
          intro: "Banderas rojas:",
          items: [
            "guías antiguas que solo hablan de anotaciones",
            "la misma tarjeta en cada vídeo sin vínculo temático",
            "tapar subtítulos y detalles clave del fotograma",
            "promesas de que un widget o botón solo hace crecer el canal",
          ],
        },
      ],
    },
  ],
  related: [
    "raskrutka-youtube",
    "shapka-youtube",
    "avatar-youtube",
    "opisanie-youtube-kanala",
    "strayk-youtube",
  ],
};
