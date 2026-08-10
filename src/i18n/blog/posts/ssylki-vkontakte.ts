import type { BlogPost } from "../../../data/blog";

/** EN overlay for ssylki-vkontakte — same structure as RU JSON. */
export const ssylkiVkontakteEn: BlogPost = {
  slug: "ssylki-vkontakte",
  title: "VK links: mentions, previews, and post URLs",
  date: "2021-06-16",
  category: "SMM",
  cover: "/images/blog/ssylki-vkontakte/cover-en.webp",
  excerpt:
    "How to make a clickable mention of a person or community on VKontakte, attach a site link with a preview, and copy a post URL — without confusing them with a bare browser address.",
  lead: [
    "On VK, a “styled link” isn’t just the raw address from the browser bar. More often it means a clickable profile or group mention with a label, or an external site card with a preview.",
    "Below: why that formatting matters, how to tag a user or community, how to attach an external URL, and how to copy a link to a specific post. The VK UI changes — focus on syntax and meaning, not button screenshots.",
  ],
  faq: [
    {
      q: "How does a mention differ from a plain URL?",
      a: "A mention is a blue clickable label to a profile or community, plus a notification to the recipient (if settings allow). A bare URL is just address text.",
    },
    {
      q: "Can I label an external site the same way?",
      a: "The `@id… (label)` syntax works for VK profiles and communities. An external site is usually pasted as a URL — the platform builds the preview.",
    },
    {
      q: "Does a mention send a notification?",
      a: "Usually yes if the page isn’t closed and the user isn’t on a block list. On fully private setups the notice may not go out.",
    },
    {
      q: "How do I tag someone who isn’t a friend?",
      a: "Via ID: a format like `@id123456 (Name)` or the current analogue from VK Help. For friends, `*` and suggestions often suffice.",
    },
    {
      q: "Why use an external-link preview?",
      a: "Readers see title and image before they click. The site gets a clearer handoff from the feed.",
    },
    {
      q: "How do I copy the link to a specific post?",
      a: "Open the post (often via the date/time) and copy the URL from the address bar — or use Share.",
    },
    {
      q: "Do I need a link shortener?",
      a: "Not required. Useful for long UTM addresses or when the platform offers its own short form.",
    },
    {
      q: "How does this relate to HTML links on a site?",
      a: "Different environment. On a site you use an `<a href>` tag. On VK you use mention markup and previews. See the clickable-link article.",
    },
  ],
  sections: [
    {
      title: "Why format links in VK",
      level: 2,
      paras: [
        "Mentions help tag winners, authors, partners, and colleagues without awkward ID paste. Readers click more easily; recipients are more likely to get a signal.",
        "External links with previews send traffic to the site and make a post clearer than a wall of plain text. For a community that’s both convenience and measurable clicks.",
      ],
      lists: [
        {
          intro: "Typical jobs:",
          items: [
            "tag a person in a post or comment",
            "credit authorship",
            "announce a site article",
            "send colleagues the exact post URL",
          ],
        },
      ],
    },
    {
      title: "Mentioning a user or community",
      level: 2,
      paras: [
        "If someone is a friend, typing `*` and starting the name often works — VK suggests a match and inserts a clickable construct with a label in parentheses. You can edit the label: the feed shows your text; the click goes to the right profile.",
        "If they aren’t a friend, take the ID from the page URL and build the mention by hand, e.g. `@id123456789 (First Last)`. For communities, do the same via short address or community ID. Check current syntax in VK Help: UI details change.",
      ],
      lists: [
        {
          intro: "Practical tips:",
          items: [
            "verify the click opens the right profile",
            "don’t spam mentions — it annoys people and kills trust",
            "in communities, tagging winners and speakers works well",
            "respect privacy and block lists",
          ],
        },
      ],
      links: [
        {
          label: "Comments in a VK public",
          href: "/en/blog/kommentarii-v-pablike-vk/",
        },
        {
          label: "Growing a VK group",
          href: "/en/blog/raskrutka-gruppy-vk/",
        },
      ],
    },
    {
      title: "Link to an external site",
      level: 2,
      paras: [
        "Copy the page’s HTTPS address and paste it into the post with spaces around it. VK usually pulls a preview: title, description, image. You can refresh or remove the preview in the post editor if needed.",
        "For analytics, add UTMs on the site side. Don’t paste other people’s articles wholesale — a short teaser and a link to the source is better.",
      ],
      links: [
        {
          label: "UTM tags explained",
          href: "/en/blog/utm-metki/",
        },
        {
          label: "What a clickable link is",
          href: "/en/blog/klikabelnaya-ssylka/",
        },
      ],
    },
    {
      title: "Link to a VK post",
      level: 2,
      paras: [
        "Open the post as its own page (often via the publish date) and copy the URL. Send it in messages, paste into another post, or use it in contests and reports.",
        "Alternatively, use Share: repost to a wall or community without hand-copying. For a team, a short exact post URL cuts “which one from the feed?” confusion.",
      ],
      notes: [
        {
          title: "Tip",
          kind: "tip",
          text: "Before mass-sharing a link, check that the post is open to the audience (wall or community not closed to recipients).",
        },
      ],
      links: [
        {
          label: "VK articles",
          href: "/en/blog/statya-vk/",
        },
      ],
    },
  ],
  related: [
    "klikabelnaya-ssylka",
    "kommentarii-v-pablike-vk",
    "raskrutka-gruppy-vk",
    "utm-metki",
    "statya-vk",
    "chto-takoe-ssylka",
  ],
};

/** ES overlay for ssylki-vkontakte — same structure as RU JSON / EN. */
export const ssylkiVkontakteEs: BlogPost = {
  slug: "ssylki-vkontakte",
  title: "Enlaces en VK: menciones, previews y URLs de posts",
  date: "2021-06-16",
  category: "SMM",
  cover: "/images/blog/ssylki-vkontakte/cover-es.webp",
  excerpt:
    "Cómo hacer una mención clicable de una persona o comunidad en VKontakte, adjuntar un enlace al sitio con preview y copiar la URL de un post — sin confundirlas con la dirección desnuda del navegador.",
  lead: [
    "En VK, un «enlace con estilo» no es solo la dirección cruda de la barra del navegador. Más a menudo significa una mención clicable de perfil o grupo con una etiqueta, o una tarjeta de sitio externo con preview.",
    "Abajo: por qué importa ese formato, cómo etiquetar a un usuario o comunidad, cómo adjuntar una URL externa y cómo copiar el enlace a un post concreto. La UI de VK cambia — enfócate en la sintaxis y el sentido, no en capturas de botones.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia una mención de una URL plana?",
      a: "Una mención es una etiqueta azul clicable a un perfil o comunidad, más una notificación al destinatario (si los ajustes lo permiten). Una URL desnuda es solo texto de dirección.",
    },
    {
      q: "¿Puedo etiquetar un sitio externo igual?",
      a: "La sintaxis `@id… (etiqueta)` funciona para perfiles y comunidades de VK. Un sitio externo suele pegarse como URL — la plataforma construye el preview.",
    },
    {
      q: "¿Una mención envía una notificación?",
      a: "Suele sí si la página no está cerrada y el usuario no está en una lista de bloqueo. En setups totalmente privados el aviso puede no salir.",
    },
    {
      q: "¿Cómo etiqueto a alguien que no es amigo?",
      a: "Vía ID: un formato tipo `@id123456 (Nombre)` o el análogo actual de la Help de VK. Para amigos, `*` y las sugerencias a menudo bastan.",
    },
    {
      q: "¿Por qué usar un preview de enlace externo?",
      a: "Los lectores ven título e imagen antes de hacer clic. El sitio obtiene un handoff más claro desde el feed.",
    },
    {
      q: "¿Cómo copio el enlace a un post concreto?",
      a: "Abre el post (a menudo vía la fecha/hora) y copia la URL de la barra de dirección — o usa Compartir.",
    },
    {
      q: "¿Hace falta un acortador de enlaces?",
      a: "No es obligatorio. Útil para direcciones UTM largas o cuando la plataforma ofrece su propia forma corta.",
    },
    {
      q: "¿Cómo se relaciona esto con enlaces HTML en un sitio?",
      a: "Entorno distinto. En un sitio usas un tag `<a href>`. En VK usas markup de mención y previews. Ver el artículo de enlace clicable.",
    },
  ],
  sections: [
    {
      title: "Por qué formatear enlaces en VK",
      level: 2,
      paras: [
        "Las menciones ayudan a etiquetar ganadores, autores, partners y colegas sin pegar IDs torpes. Los lectores hacen clic con más facilidad; los destinatarios tienen más chance de recibir una señal.",
        "Los enlaces externos con preview mandan tráfico al sitio y hacen un post más claro que un muro de texto plano. Para una comunidad eso es comodidad y clics medibles.",
      ],
      lists: [
        {
          intro: "Trabajos típicos:",
          items: [
            "etiquetar a una persona en un post o comentario",
            "acreditar autoría",
            "anunciar un artículo del sitio",
            "enviar a colegas la URL exacta del post",
          ],
        },
      ],
    },
    {
      title: "Mencionar a un usuario o comunidad",
      level: 2,
      paras: [
        "Si alguien es amigo, teclear `*` y empezar el nombre suele funcionar — VK sugiere un match e inserta un constructo clicable con etiqueta entre paréntesis. Puedes editar la etiqueta: el feed muestra tu texto; el clic va al perfil correcto.",
        "Si no es amigo, toma el ID de la URL de la página y construye la mención a mano, p. ej. `@id123456789 (Nombre Apellido)`. Para comunidades, igual vía dirección corta o ID de comunidad. Revisa la sintaxis actual en la Help de VK: los detalles de UI cambian.",
      ],
      lists: [
        {
          intro: "Tips prácticos:",
          items: [
            "verificar que el clic abre el perfil correcto",
            "no spamear menciones — molesta y mata la confianza",
            "en comunidades, etiquetar ganadores y speakers funciona bien",
            "respetar privacidad y listas de bloqueo",
          ],
        },
      ],
      links: [
        {
          label: "Comentarios en un público de VK",
          href: "/es/blog/kommentarii-v-pablike-vk/",
        },
        {
          label: "Crecer un grupo de VK",
          href: "/es/blog/raskrutka-gruppy-vk/",
        },
      ],
    },
    {
      title: "Enlace a un sitio externo",
      level: 2,
      paras: [
        "Copia la dirección HTTPS de la página y pégala en el post con espacios alrededor. VK suele armar un preview: título, descripción, imagen. Puedes refrescar o quitar el preview en el editor del post si hace falta.",
        "Para analítica, añade UTMs del lado del sitio. No pegues artículos ajenos enteros — mejor un teaser corto y un enlace a la fuente.",
      ],
      links: [
        {
          label: "UTM tags explicados",
          href: "/es/blog/utm-metki/",
        },
        {
          label: "Qué es un enlace clicable",
          href: "/es/blog/klikabelnaya-ssylka/",
        },
      ],
    },
    {
      title: "Enlace a un post de VK",
      level: 2,
      paras: [
        "Abre el post como página propia (a menudo vía la fecha de publicación) y copia la URL. Envíala en mensajes, pégala en otro post o úsala en concursos e informes.",
        "Como alternativa, usa Compartir: repost al muro o a la comunidad sin copiar a mano. Para un equipo, una URL corta y exacta del post corta la confusión de «¿cuál del feed?».",
      ],
      notes: [
        {
          title: "Consejo",
          kind: "tip",
          text: "Antes de compartir un enlace en masa, comprueba que el post esté abierto a la audiencia (muro o comunidad no cerrados para los destinatarios).",
        },
      ],
      links: [
        {
          label: "Artículos en VK",
          href: "/es/blog/statya-vk/",
        },
      ],
    },
  ],
  related: [
    "klikabelnaya-ssylka",
    "kommentarii-v-pablike-vk",
    "raskrutka-gruppy-vk",
    "utm-metki",
    "statya-vk",
    "chto-takoe-ssylka",
  ],
};
