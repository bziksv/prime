import type { BlogPost } from "../../../data/blog";

/** EN overlay for montazh-youtube — same structure as RU JSON. */
export const montazhYoutubeEn: BlogPost = {
  slug: "montazh-youtube",
  title: "YouTube video editing: where to start and how to pick a tool",
  date: "2020-08-18",
  category: "SMM",
  cover: "/images/blog/montazh-youtube/cover-en.webp",
  excerpt:
    "How to edit videos for YouTube: the job of editing, a basic pipeline, editor classes (beginner / pro / mobile / online), and what matters more than software — rhythm, audio, and matching the thumbnail.",
  lead: [
    "Editing for YouTube isn’t “add 20 transitions.” It’s building a watchable video: cut dead air, set the order, clean audio and color, add titles and a clear CTA.",
    "Below: a working pipeline and how to choose an editor by level — not by a list of fifteen outdated names. Roundups of “what creator X used in 2020” age fast; tool classes and skills don’t.",
  ],
  faq: [
    {
      q: "Which program is “best”?",
      a: "The one where you consistently finish channel tasks. Beginners often do fine with CapCut, DaVinci Resolve Free, or iMovie; pros usually land on Premiere, Final Cut, or Resolve Studio.",
    },
    {
      q: "Do I need expensive software?",
      a: "Not at the start. Cleaner audio, a clear hook in the first seconds, and no dead pauses matter more.",
    },
    {
      q: "Are online editors okay?",
      a: "For simple cuts — yes. For long projects and confidential footage, local software is usually better: speed and file control.",
    },
    {
      q: "Do I need heavy effects?",
      a: "Rarely. Viewers leave from boredom and bad audio more often than from “missing a 3D title.”",
    },
    {
      q: "What should I export for YouTube?",
      a: "Usually H.264/H.265, 1080p or higher from the source, and a sensible bitrate. Check YouTube’s help for current recommendations — they update.",
    },
  ],
  sections: [
    {
      title: "What editing is for — and a basic pipeline",
      level: 2,
      paras: [
        "The goal is a video that matches the thumbnail promise and watches well on a phone. Editing cuts fluff, strengthens the story, levels volume, and helps orientation (timestamps, on-screen text accents).",
        "Pipeline: pick takes → rough cut by script → clean pauses and filler words → audio (noise, licensed music) → color/exposure → graphics and captions → export → check on a phone before upload.",
        "Copyright on music and other people’s clips is mandatory. Licensed music libraries and YouTube Audio Library / your own tracks are safer than “downloaded from search.”",
        "Package the channel side in parallel — title, description, keywords, and thumbnail. The edit has to deliver on the click promise, or high CTR turns into unsubscribes.",
      ],
      lists: [
        {
          intro: "Minimum video quality:",
          items: [
            "a hook in the first 3–10 seconds",
            "no long silences and filler “ums”",
            "voice audible without hiss",
            "on-screen text readable on a smartphone",
            "an ending with a clear next step",
          ],
        },
      ],
      links: [
        {
          label: "YouTube promotion",
          href: "/en/blog/raskrutka-youtube/",
        },
        {
          label: "YouTube keywords",
          href: "/en/blog/kluchi-youtube/",
        },
      ],
    },
    {
      title: "How to choose an editor",
      level: 2,
      paras: [
        "Beginner / short videos and Shorts: mobile and simple desktop editors (CapCut, iMovie and similar, YouTube’s built-in trimmer). A fast start beats a “cinematic” UI.",
        "Intermediate: DaVinci Resolve (has a free tier), Premiere, Vegas/Magix and similar — multi-track, decent audio and color. Pick where there’s learning material in your language and your hardware can handle it.",
        "Pro / team: Final Cut on Apple, Premiere/Avid in studios, Resolve Studio for color. Plugins and collaboration make sense when video volume is steady.",
        "Online services are handy to trim and stitch in the browser, but they depend on upload speed and plans. Don’t put confidential shoots there without reading the service policy.",
        "Don’t copy software “like a famous creator” blindly: they have different jobs and budgets. Pick one tool, finish 10 videos — then decide if you need an upgrade.",
        "Bottom line: YouTube editing is rhythm, audio, and clarity. Software is a means; consistency and matching the thumbnail matter more than a long program list.",
      ],
      lists: [
        {
          intro: "Before choosing a program, ask:",
          items: [
            "PC, Mac, or phone?",
            "long videos or Shorts?",
            "do you need color grading and multi-track audio?",
            "is there budget for a subscription?",
            "are you ready to learn for 2–3 evenings to start?",
          ],
        },
      ],
      links: [
        {
          label: "YouTube channel description",
          href: "/en/blog/opisanie-youtube-kanala/",
        },
        {
          label: "YouTube monetization",
          href: "/en/blog/youtube-monetizaciya/",
        },
      ],
    },
  ],
  related: [
    "raskrutka-youtube",
    "kluchi-youtube",
    "opisanie-youtube-kanala",
    "youtube-monetizaciya",
    "videoreklama-youtube",
  ],
};

/** ES overlay for montazh-youtube — same structure as RU JSON / EN. */
export const montazhYoutubeEs: BlogPost = {
  slug: "montazh-youtube",
  title: "Edición de vídeo en YouTube: por dónde empezar y cómo elegir una tool",
  date: "2020-08-18",
  category: "SMM",
  cover: "/images/blog/montazh-youtube/cover.webp",
  excerpt:
    "Cómo editar vídeos para YouTube: el trabajo del montaje, un pipeline básico, clases de editores (principiante / pro / móvil / online) y qué importa más que el software — ritmo, audio y encaje con el thumbnail.",
  lead: [
    "Editar para YouTube no es «añadir 20 transiciones». Es construir un vídeo que se mire: cortar silencio muerto, fijar el orden, limpiar audio y color, añadir títulos y un CTA claro.",
    "Abajo: un pipeline que funciona y cómo elegir editor por nivel — no por una lista de quince nombres caducados. Los roundups de «qué usó el creator X en 2020» envejecen rápido; las clases de tools y las skills no.",
  ],
  faq: [
    {
      q: "¿Qué programa es «el mejor»?",
      a: "Aquel en el que terminas con constancia las tareas del canal. Los principiantes a menudo se apañan con CapCut, DaVinci Resolve Free o iMovie; los pros suelen aterrizar en Premiere, Final Cut o Resolve Studio.",
    },
    {
      q: "¿Hace falta software caro?",
      a: "No al empezar. Importan más un audio más limpio, un gancho claro en los primeros segundos y que no haya pausas muertas.",
    },
    {
      q: "¿Están bien los editores online?",
      a: "Para cortes simples — sí. Para proyectos largos y material confidencial, el software local suele ser mejor: velocidad y control de archivos.",
    },
    {
      q: "¿Hacen falta efectos pesados?",
      a: "Rara vez. Los espectadores se van más por aburrimiento y mal audio que por «falta un título 3D».",
    },
    {
      q: "¿Qué debo exportar para YouTube?",
      a: "Suele ser H.264/H.265, 1080p o más desde la fuente, y un bitrate sensato. Mira la help de YouTube para recomendaciones actuales — se actualizan.",
    },
  ],
  sections: [
    {
      title: "Para qué sirve el montaje — y un pipeline básico",
      level: 2,
      paras: [
        "La meta es un vídeo que cumpla la promesa del thumbnail y se mire bien en un teléfono. El montaje corta relleno, refuerza la historia, nivela volumen y ayuda a orientarse (timestamps, acentos de texto en pantalla).",
        "Pipeline: elige tomas → rough cut por guion → limpia pausas y muletillas → audio (ruido, música con licencia) → color/exposición → gráficos y captions → export → comprueba en un teléfono antes de subir.",
        "El copyright de música y clips ajenos es obligatorio. Bibliotecas de música con licencia y YouTube Audio Library / tus propias pistas son más seguras que «descargado de la búsqueda».",
        "Empaqueta el lado del canal en paralelo — título, descripción, keywords y thumbnail. El montaje tiene que cumplir la promesa del clic, o un CTR alto se vuelve bajas de suscripción.",
      ],
      lists: [
        {
          intro: "Calidad mínima del vídeo:",
          items: [
            "un gancho en los primeros 3–10 segundos",
            "sin silencios largos ni «eh» de relleno",
            "voz audible sin siseo",
            "texto en pantalla legible en smartphone",
            "un final con un siguiente paso claro",
          ],
        },
      ],
      links: [
        {
          label: "Promoción en YouTube",
          href: "/es/blog/raskrutka-youtube/",
        },
        {
          label: "Keywords de YouTube",
          href: "/es/blog/kluchi-youtube/",
        },
      ],
    },
    {
      title: "Cómo elegir un editor",
      level: 2,
      paras: [
        "Principiante / vídeos cortos y Shorts: editores móviles y desktop simples (CapCut, iMovie y similares, el trimmer integrado de YouTube). Un arranque rápido gana a una UI «cinemática».",
        "Intermedio: DaVinci Resolve (tiene tier gratis), Premiere, Vegas/Magix y similares — multi-pista, audio y color decentes. Elige donde haya material de aprendizaje en tu idioma y tu hardware aguante.",
        "Pro / equipo: Final Cut en Apple, Premiere/Avid en estudios, Resolve Studio para color. Plugins y colaboración tienen sentido cuando el volumen de vídeo es estable.",
        "Los servicios online sirven para recortar y unir en el navegador, pero dependen de la velocidad de upload y de los planes. No subas shoots confidenciales sin leer la política del servicio.",
        "No copies software «como un creator famoso» a ciegas: tienen trabajos y presupuestos distintos. Elige una tool, termina 10 vídeos — luego decide si necesitas un upgrade.",
        "En resumen: el montaje de YouTube es ritmo, audio y claridad. El software es un medio; la constancia y el encaje con el thumbnail importan más que una lista larga de programas.",
      ],
      lists: [
        {
          intro: "Antes de elegir un programa, pregunta:",
          items: [
            "¿PC, Mac o teléfono?",
            "¿vídeos largos o Shorts?",
            "¿necesitas color grading y audio multi-pista?",
            "¿hay presupuesto para una suscripción?",
            "¿estás listo para aprender 2–3 tardes para arrancar?",
          ],
        },
      ],
      links: [
        {
          label: "Descripción del canal de YouTube",
          href: "/es/blog/opisanie-youtube-kanala/",
        },
        {
          label: "Monetización de YouTube",
          href: "/es/blog/youtube-monetizaciya/",
        },
      ],
    },
  ],
  related: [
    "raskrutka-youtube",
    "kluchi-youtube",
    "opisanie-youtube-kanala",
    "youtube-monetizaciya",
    "videoreklama-youtube",
  ],
};
