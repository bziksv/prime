import type { BlogPost } from "../../../data/blog";

/** EN overlay for istorii-vkontakte — same structure as RU JSON. */
export const istoriiVkontakteEn: BlogPost = {
  slug: "istorii-vkontakte",
  title: "VKontakte Stories: how to publish and what to fill them with",
  date: "2022-02-18",
  category: "SMM",
  cover: "/images/blog/istorii-vkontakte/cover-en.webp",
  excerpt:
    "How to work with VK Stories: why they matter, framing a shot, publishing from phone and from a community, business ideas, and platform limits.",
  lead: [
    "VKontakte Stories are a short vertical format in the strip above the feed: photos and clips live about a day and work well for “here and now.”",
    "Below: the meaning of the steps and a content frame — not a click-path over old icons. The app UI changes; check current limits and community access in VK Help.",
  ],
  faq: [
    {
      q: "How do Stories differ from a wall post?",
      a: "Short lifespan, vertical format, emphasis on urgency and behind-the-scenes. A wall post lives longer and fits evergreen topics better.",
    },
    {
      q: "Can I publish Stories as a community?",
      a: "Yes, if the community has the feature under current VK rules. In the editor you choose whose name publishes — personal page or group.",
    },
    {
      q: "How long do Stories last?",
      a: "Usually up to 24 hours; you can delete earlier. Some material can be saved to highlights if the platform allows it.",
    },
    {
      q: "Are there technical guidelines for Stories?",
      a: "Vertical around 1080×1920, short clips, moderate file size. Exact VK limits change — check current requirements before a video series.",
    },
    {
      q: "What should a business publish?",
      a: "Behind the scenes, announcements, Q&A, mini-tips, polls, product in use — one idea per frame, a clear CTA.",
    },
  ],
  sections: [
    {
      title: "Why Stories matter",
      level: 2,
      paras: [
        "Stories keep contact between big posts: remind about the brand, warm people up for a promo, show a live process.",
        "The format forgives a draft more than the feed, but the job remains: why should someone watch to the end, and what should they do next.",
      ],
      lists: [
        {
          intro: "Good jobs for Stories:",
          items: [
            "announce a post / live / promo",
            "answer a frequent question",
            "behind-the-scenes of production or the office",
            "collect reactions with a poll / sticker",
          ],
        },
      ],
    },
    {
      title: "Framing the shot",
      level: 2,
      paras: [
        "Shoot vertical, mind safe zones: avatars and timer along the upper edge, buttons along the lower edge. Large type, one idea per screen.",
        "Keep clips short: better a series of 3–5 frames than one unstructured minute.",
      ],
      lists: [
        {
          intro: "Before publishing:",
          items: [
            "light and readable audio (or captions)",
            "first frame with a hook",
            "CTA at the end of the series",
            "check you don’t break VK rules",
          ],
        },
      ],
      notes: [
        {
          title: "App UI",
          kind: "tip",
          text: "Entry is usually near the Stories block in the feed or on the profile page (camera / “add”). Icons move — teach the team a meaning checklist, not “tap the pink button.”",
        },
      ],
    },
    {
      title: "Publishing from a phone",
      level: 2,
      paras: [
        "Open the Stories editor: shoot a photo/short video or upload from the gallery. Add text, stickers, a poll — with purpose, not every sticker at once.",
        "Before sending, pick the audience (if lists are available) and publish. You can delete earlier than 24 hours via the Story’s own menu.",
      ],
      lists: [
        {
          intro: "Basic flow:",
          items: [
            "open the Story editor",
            "shoot or pick a file",
            "add text / sticker / poll",
            "publish and check the feed preview",
          ],
        },
      ],
    },
    {
      title: "Community Stories",
      level: 2,
      paras: [
        "For a public page the flow is the same, but at the end you choose publish as the community. Access depends on group type and current platform rules — if the option is missing, the feature isn’t open yet or you need another admin role.",
        "Agree inside the team: one tone, one cadence, who answers reaction replies.",
      ],
      lists: [
        {
          intro: "Roles:",
          items: [
            "who shoots",
            "who approves offers and prices",
            "who replies in DM after the CTA",
          ],
        },
      ],
    },
    {
      title: "Ideas for business",
      level: 2,
      paras: [
        "Don’t chase pretty for Stories’ sake. A series should lead to an action: message, answer a poll, finish a post, visit the location.",
      ],
      lists: [
        {
          intro: "Working formats:",
          items: [
            "day / shift report",
            "new product and stock",
            "3-slide mini tip",
            "before/after",
            "“what to choose” poll",
            "client-mistake walkthrough without toxicity",
            "promo reminder with a deadline",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Dumping the same wall-post text into Stories without adapting. Stories need large phrases, face/product bigger, and a clear next step.",
        },
      ],
    },
    {
      title: "Limits and quality",
      level: 2,
      paras: [
        "The platform limits clip length, file weight, and daily publishes. Guides like 1080×1920 vertical help prep in an editor, but check limits before a big series.",
        "Content must not break VK rules: spam, banned topics, others’ content without rights — risk not only for the Story, but for the community.",
      ],
      lists: [
        {
          intro: "Series quality checklist:",
          items: [
            "one topic per release",
            "3–7 frames max",
            "readable text without clutter",
            "CTA and a contact path",
            "after 24 hours — takeaway: what was watched / where people clicked",
          ],
        },
      ],
      links: [
        {
          label: "VK community comments",
          href: "/en/blog/kommentarii-v-pablike-vk/",
        },
      ],
    },
  ],
};

/** ES overlay for istorii-vkontakte — same structure as RU JSON / EN. */
export const istoriiVkontakteEs: BlogPost = {
  slug: "istorii-vkontakte",
  title: "Stories de VKontakte: cómo publicar y con qué llenarlas",
  date: "2022-02-18",
  category: "SMM",
  cover: "/images/blog/istorii-vkontakte/cover-es.webp",
  excerpt:
    "Cómo trabajar con Stories de VK: por qué importan, encuadre del shot, publicar desde el teléfono y desde una comunidad, ideas de negocio y límites de la plataforma.",
  lead: [
    "Las Stories de VKontakte son un formato vertical corto en la franja sobre el feed: fotos y clips viven alrededor de un día y funcionan bien para «aquí y ahora».",
    "Abajo: el sentido de los pasos y un marco de contenido — no una ruta de clics sobre iconos viejos. La UI de la app cambia; revisa límites actuales y acceso de la comunidad en la Help de VK.",
  ],
  faq: [
    {
      q: "¿En qué se diferencian las Stories de un post en el muro?",
      a: "Vida corta, formato vertical, énfasis en urgencia y behind-the-scenes. Un post del muro vive más y encaja mejor con temas evergreen.",
    },
    {
      q: "¿Puedo publicar Stories como comunidad?",
      a: "Sí, si la comunidad tiene la función bajo las reglas actuales de VK. En el editor eliges a nombre de quién publicas — página personal o grupo.",
    },
    {
      q: "¿Cuánto duran las Stories?",
      a: "Por lo general hasta 24 horas; puedes borrar antes. Parte del material se puede guardar en highlights si la plataforma lo permite.",
    },
    {
      q: "¿Hay guidelines técnicas para Stories?",
      a: "Vertical alrededor de 1080×1920, clips cortos, tamaño de archivo moderado. Los límites exactos de VK cambian — revisa los requisitos actuales antes de una serie de vídeo.",
    },
    {
      q: "¿Qué debería publicar un negocio?",
      a: "Behind the scenes, anuncios, Q&A, mini-tips, polls, producto en uso — una idea por frame, un CTA claro.",
    },
  ],
  sections: [
    {
      title: "Por qué importan las Stories",
      level: 2,
      paras: [
        "Las Stories mantienen el contacto entre posts grandes: recuerdan la marca, calientan para una promo, muestran un proceso en vivo.",
        "El formato perdona un borrador más que el feed, pero el trabajo sigue: por qué alguien debería ver hasta el final, y qué debería hacer después.",
      ],
      lists: [
        {
          intro: "Buenos trabajos para Stories:",
          items: [
            "anunciar un post / live / promo",
            "responder una pregunta frecuente",
            "behind-the-scenes de producción o de la oficina",
            "recoger reacciones con un poll / sticker",
          ],
        },
      ],
    },
    {
      title: "Encuadrar el shot",
      level: 2,
      paras: [
        "Rueda en vertical, cuida las safe zones: avatares y timer en el borde superior, botones en el inferior. Tipografía grande, una idea por pantalla.",
        "Mantén los clips cortos: mejor una serie de 3–5 frames que un minuto sin estructura.",
      ],
      lists: [
        {
          intro: "Antes de publicar:",
          items: [
            "luz y audio legible (o captions)",
            "primer frame con un gancho",
            "CTA al final de la serie",
            "comprueba que no rompes las reglas de VK",
          ],
        },
      ],
      notes: [
        {
          title: "UI de la app",
          kind: "tip",
          text: "La entrada suele estar cerca del bloque de Stories en el feed o en la página de perfil (cámara / «añadir»). Los iconos se mueven — enseña al equipo un checklist de sentido, no «toca el botón rosa».",
        },
      ],
    },
    {
      title: "Publicar desde el teléfono",
      level: 2,
      paras: [
        "Abre el editor de Stories: rueda una foto/vídeo corto o sube desde la galería. Añade texto, stickers, un poll — con propósito, no todos los stickers a la vez.",
        "Antes de enviar, elige la audiencia (si hay listas) y publica. Puedes borrar antes de las 24 horas vía el menú propio de la Story.",
      ],
      lists: [
        {
          intro: "Flujo básico:",
          items: [
            "abrir el editor de Story",
            "rodar o elegir un archivo",
            "añadir texto / sticker / poll",
            "publicar y revisar el preview del feed",
          ],
        },
      ],
    },
    {
      title: "Stories de la comunidad",
      level: 2,
      paras: [
        "Para una página pública el flujo es el mismo, pero al final eliges publicar como la comunidad. El acceso depende del tipo de grupo y de las reglas actuales de la plataforma — si falta la opción, la función aún no está abierta o necesitas otro rol de admin.",
        "Acordad en el equipo: un tono, una cadencia, quién responde a las reacciones.",
      ],
      lists: [
        {
          intro: "Roles:",
          items: [
            "quién rueda",
            "quién aprueba ofertas y precios",
            "quién responde por DM tras el CTA",
          ],
        },
      ],
    },
    {
      title: "Ideas para el negocio",
      level: 2,
      paras: [
        "No persigas lo bonito solo por las Stories. Una serie debe llevar a una acción: mensaje, responder un poll, terminar un post, visitar el local.",
      ],
      lists: [
        {
          intro: "Formatos que funcionan:",
          items: [
            "parte del día / del turno",
            "producto nuevo y stock",
            "mini tip en 3 slides",
            "antes/después",
            "poll «qué elegir»",
            "recorrido de un error de cliente sin toxicidad",
            "recordatorio de promo con deadline",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Volcar el mismo texto del post del muro en Stories sin adaptar. Las Stories necesitan frases grandes, cara/producto más grandes y un siguiente paso claro.",
        },
      ],
    },
    {
      title: "Límites y calidad",
      level: 2,
      paras: [
        "La plataforma limita la duración del clip, el peso del archivo y las publicaciones diarias. Guías tipo 1080×1920 vertical ayudan a preparar en un editor, pero revisa los límites antes de una serie grande.",
        "El contenido no debe romper las reglas de VK: spam, temas prohibidos, contenido ajeno sin derechos — riesgo no solo para la Story, sino para la comunidad.",
      ],
      lists: [
        {
          intro: "Checklist de calidad de la serie:",
          items: [
            "un tema por release",
            "3–7 frames como máximo",
            "texto legible sin clutter",
            "CTA y un camino de contacto",
            "tras 24 horas — takeaway: qué se vio / dónde hicieron clic",
          ],
        },
      ],
      links: [
        {
          label: "Comentarios en comunidad VK",
          href: "/es/blog/kommentarii-v-pablike-vk/",
        },
      ],
    },
  ],
};
