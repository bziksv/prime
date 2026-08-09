import type { BlogPost } from "../../../data/blog";

/** EN overlay for opisanie-youtube-kanala — same structure as RU JSON. */
export const opisanieYoutubeKanalaEn: BlogPost = {
  slug: "opisanie-youtube-kanala",
  title: "YouTube channel description: how to write it and where to put it",
  date: "2021-12-10",
  category: "SMM",
  cover: "/images/blog/opisanie-youtube-kanala/cover-en.webp",
  excerpt:
    "How to write a YouTube channel description: opening lines, keywords, links, common mistakes, and how to update the text in Studio.",
  lead: [
    "A channel description is a short “what this project is about.” People read it on the channel page and sometimes see it in search. The first sentences decide whether someone stays.",
    "Below: structure, keywords without spam, links, and typical mistakes. YouTube Studio menu items change — look for Customization / About.",
  ],
  faq: [
    {
      q: "How many characters are allowed?",
      a: "The platform limit is around a thousand characters; the preview often shows only the first ~100–200. Check exact limits in Studio — they can change.",
    },
    {
      q: "Do you need keywords in the description?",
      a: "Yes, but moderately: topic, niche, brand, creator name — naturally in the text. Overstuffing hurts people and search.",
    },
    {
      q: "How is a channel description different from a video description?",
      a: "Channel description is the project’s business card. Video description is about that clip, timestamps, and a CTA for that episode.",
    },
    {
      q: "How do you make links clickable?",
      a: "Via the links field in channel settings / customization, not a bare URL in a paragraph. Link labels should match the project’s site and socials.",
    },
    {
      q: "Can you skip a description?",
      a: "Only if people already know you by name. For new and niche channels an empty About is a missed chance to explain the offer.",
    },
  ],
  sections: [
    {
      title: "Why you need a description",
      level: 2,
      paras: [
        "The text answers three questions: what the channel is about, who it’s for, and what to expect next. Without it viewers guess from thumbnails alone.",
        "The description helps search and trust: coherent, clean copy looks like a real project, not a draft.",
      ],
    },
    {
      title: "Opening lines and limits",
      level: 2,
      paras: [
        "Collapsed view shows only the first characters. Name the topic and format right away: reviews, learning, entertainment, product.",
      ],
      lists: [
        {
          intro: "Working frame:",
          items: [
            "1–2 sentences — essence and who it’s for",
            "what goes out regularly (content pillars, cadence)",
            "how you differ from similar channels",
            "where to go next (site, socials — via the links field)",
            "a soft CTA: subscribe, watch a playlist, write",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Practice",
          text: "Draft 600–800 characters, then cut fluff. Check that meaning is clear if the text is cut after the second sentence.",
        },
      ],
    },
    {
      title: "Keywords and tags without spam",
      level: 2,
      paras: [
        "Niche terms, brand name, and host name fit naturally into the text. You can check demand in keyword tools — but don’t turn the description into a query list.",
        "Channel tags and hashtags are a support layer. Clarity for humans matters more than keyword density.",
      ],
      lists: [
        {
          intro: "Placement:",
          items: [
            "at the start — main topic and brand",
            "in the middle — niche and format details",
            "at the end — extra phrasing and CTA",
          ],
        },
      ],
      links: [
        {
          label: "Keyword set",
          href: "/en/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Platform rules and audience",
      level: 2,
      paras: [
        "Copy and links must follow YouTube rules: no banned content, others’ materials without rights, deception, or harmful links.",
        "Write in the audience’s language: travel viewers get one tone, B2B learning another. Mismatch with video topics reads as bait-and-switch.",
      ],
      lists: [
        {
          intro: "State the format clearly:",
          items: [
            "product / service reviews",
            "learning and breakdowns",
            "entertainment, vlogs, games",
            "niche (cars, film, kids, business…)",
          ],
        },
      ],
    },
    {
      title: "Common mistakes",
      level: 2,
      paras: [
        "Short text seems simple — but typical misses hurt both search and trust.",
      ],
      lists: [
        {
          intro: "Avoid:",
          items: [
            "keyword stuffing",
            "copy-pasting someone else’s description",
            "a description that doesn’t match the channel",
            "spelling issues and an off tone",
            "links to someone else’s / suspicious resources",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Common mistake",
          text: "Writing “the greatest channel about everything.” Better one concrete niche and a clear format — that’s how the right subscribers arrive.",
        },
      ],
    },
    {
      title: "How to add and update in Studio",
      level: 2,
      paras: [
        "In YouTube Studio open channel customization / about and the description field. Paste the text, save.",
        "Add links in the separate channel links block: site, socials, shop. After a topic shift or rebrand, update the description, avatar, and banner together.",
      ],
      links: [
        {
          label: "YouTube channel avatar",
          href: "/en/blog/avatar-youtube/",
        },
      ],
    },
    {
      title: "Approach examples",
      level: 2,
      paras: [
        "Strong descriptions name topic and method from the first lines (e.g. product expertise) and give a clear next step.",
        "Short intriguing texts also work — if the brand is already known. Celebrities sometimes need only a name and links; a newcomer without copy has a harder time.",
      ],
      lists: [
        {
          intro: "Before publishing:",
          items: [
            "read 3–5 channels in your niche",
            "note what hooks in the opening lines",
            "write your version without copy-paste",
            "check uniqueness and literacy",
          ],
        },
      ],
    },
  ],
};

/** ES overlay for opisanie-youtube-kanala — same structure as RU JSON / EN. */
export const opisanieYoutubeKanalaEs: BlogPost = {
  slug: "opisanie-youtube-kanala",
  title: "Descripción del canal de YouTube: cómo escribirla y dónde ponerla",
  date: "2021-12-10",
  category: "SMM",
  cover: "/images/blog/opisanie-youtube-kanala/cover.webp",
  excerpt:
    "Cómo escribir la descripción de un canal de YouTube: primeras líneas, keywords, enlaces, errores habituales y cómo actualizar el texto en Studio.",
  lead: [
    "La descripción del canal es un «de qué va este proyecto» corto. La gente la lee en la página del canal y a veces la ve en la búsqueda. Las primeras frases deciden si alguien se queda.",
    "Abajo: estructura, keywords sin spam, enlaces y errores típicos. Los ítems del menú de YouTube Studio cambian — busca Customization / About.",
  ],
  faq: [
    {
      q: "¿Cuántos caracteres se permiten?",
      a: "El límite de la plataforma ronda los mil caracteres; el preview a menudo muestra solo los primeros ~100–200. Revisa los límites exactos en Studio — pueden cambiar.",
    },
    {
      q: "¿Hacen falta keywords en la descripción?",
      a: "Sí, pero con mesura: tema, nicho, marca, nombre del creator — de forma natural en el texto. El overstuffing perjudica a personas y a la búsqueda.",
    },
    {
      q: "¿En qué se diferencia la descripción del canal de la del vídeo?",
      a: "La del canal es la tarjeta de visita del proyecto. La del vídeo va de ese clip, timestamps y un CTA de ese episodio.",
    },
    {
      q: "¿Cómo hacer los enlaces clicables?",
      a: "Vía el campo de enlaces en ajustes / personalización del canal, no una URL suelta en un párrafo. Las etiquetas de enlace deberían encajar con el sitio y redes del proyecto.",
    },
    {
      q: "¿Se puede omitir la descripción?",
      a: "Solo si la gente ya te conoce por nombre. Para canales nuevos y de nicho, un About vacío es una oportunidad perdida de explicar la oferta.",
    },
  ],
  sections: [
    {
      title: "Por qué necesitas una descripción",
      level: 2,
      paras: [
        "El texto responde tres preguntas: de qué va el canal, para quién es y qué esperar después. Sin ella los viewers adivinan solo por thumbnails.",
        "La descripción ayuda a la búsqueda y a la confianza: un copy coherente y limpio se ve como un proyecto real, no un borrador.",
      ],
    },
    {
      title: "Primeras líneas y límites",
      level: 2,
      paras: [
        "La vista colapsada muestra solo los primeros caracteres. Nombra el tema y el formato de inmediato: reseñas, aprendizaje, entretenimiento, producto.",
      ],
      lists: [
        {
          intro: "Marco workable:",
          items: [
            "1–2 frases — esencia y para quién",
            "qué sale con regularidad (pilares de contenido, cadencia)",
            "en qué te diferencias de canales similares",
            "adónde ir después (sitio, redes — vía el campo de enlaces)",
            "un CTA suave: suscribirse, ver una playlist, escribir",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Práctica",
          text: "Escribe un borrador de 600–800 caracteres y luego corta el relleno. Comprueba que el sentido queda claro si el texto se corta tras la segunda frase.",
        },
      ],
    },
    {
      title: "Keywords y tags sin spam",
      level: 2,
      paras: [
        "Términos de nicho, nombre de marca y nombre del host encajan de forma natural en el texto. Puedes revisar demanda en herramientas de keywords — pero no conviertas la descripción en una lista de consultas.",
        "Los tags del canal y hashtags son una capa de apoyo. La claridad para humanos importa más que la densidad de keywords.",
      ],
      lists: [
        {
          intro: "Colocación:",
          items: [
            "al inicio — tema principal y marca",
            "en el medio — detalles de nicho y formato",
            "al final — wording extra y CTA",
          ],
        },
      ],
      links: [
        {
          label: "Núcleo de keywords",
          href: "/es/blog/semanticheskoe-yadro/",
        },
      ],
    },
    {
      title: "Reglas de la plataforma y audiencia",
      level: 2,
      paras: [
        "El copy y los enlaces deben seguir las reglas de YouTube: sin contenido prohibido, materiales ajenos sin derechos, engaño o enlaces dañinos.",
        "Escribe en el lenguaje de la audiencia: viewers de viajes tienen un tono, aprendizaje B2B otro. El desajuste con los temas de los vídeos se lee como bait-and-switch.",
      ],
      lists: [
        {
          intro: "Di el formato con claridad:",
          items: [
            "reseñas de producto / servicio",
            "aprendizaje y desgloses",
            "entretenimiento, vlogs, juegos",
            "nicho (coches, cine, niños, negocio…)",
          ],
        },
      ],
    },
    {
      title: "Errores habituales",
      level: 2,
      paras: [
        "Un texto corto parece simple — pero fallos típicos perjudican búsqueda y confianza.",
      ],
      lists: [
        {
          intro: "Evita:",
          items: [
            "keyword stuffing",
            "copiar y pegar la descripción de otro",
            "una descripción que no encaja con el canal",
            "problemas de ortografía y un tono descentrado",
            "enlaces a recursos ajenos / sospechosos",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Error habitual",
          text: "Escribir «el mejor canal de todo un poco». Mejor un nicho concreto y un formato claro — así llegan los suscriptores correctos.",
        },
      ],
    },
    {
      title: "Cómo añadir y actualizar en Studio",
      level: 2,
      paras: [
        "En YouTube Studio abre personalización del canal / about y el campo de descripción. Pega el texto, guarda.",
        "Añade enlaces en el bloque aparte de enlaces del canal: sitio, redes, tienda. Tras un cambio de tema o rebrand, actualiza juntos la descripción, el avatar y el banner.",
      ],
      links: [
        {
          label: "Avatar del canal de YouTube",
          href: "/es/blog/avatar-youtube/",
        },
      ],
    },
    {
      title: "Ejemplos de enfoque",
      level: 2,
      paras: [
        "Las descripciones fuertes nombran tema y método desde las primeras líneas (p. ej. expertise de producto) y dan un siguiente paso claro.",
        "Textos cortos e intrigantes también funcionan — si la marca ya se conoce. Las celebridades a veces necesitan solo un nombre y enlaces; un recién llegado sin copy lo tiene más duro.",
      ],
      lists: [
        {
          intro: "Antes de publicar:",
          items: [
            "leer 3–5 canales de tu nicho",
            "anotar qué engancha en las primeras líneas",
            "escribir tu versión sin copy-paste",
            "revisar unicidad y ortografía",
          ],
        },
      ],
    },
  ],
};
