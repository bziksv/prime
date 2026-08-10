import type { BlogPost } from "../../../data/blog";

/** EN overlay for dekorativnyy-shrift-instagram — same structure as RU JSON. */
export const dekorativnyyShriftInstagramEn: BlogPost = {
  slug: "dekorativnyy-shrift-instagram",
  title: "Decorative fonts on Instagram*: bio, posts, and common sense",
  date: "2021-11-22",
  category: "SMM",
  cover: "/images/blog/dekorativnyy-shrift-instagram/cover-en.webp",
  excerpt:
    "How to get “pretty” text in the Instagram* bio and on images: Unicode styles, editors, non-Latin scripts, readability, and risks — without a catalog of outdated apps.",
  lead: [
    "Instagram* itself has no typeface picker in the bio or captions: bold, italic, and “handwritten” looks usually come from Unicode characters or text baked into an image.",
    "Below: where that fits, how to paste a style without handing your password to third-party “Font for Instagram*” tools, why non-Latin scripts often break, and when décor hurts reach and trust. See the Meta notice on this page.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Are there built-in fonts in the bio?",
      a: "There’s no separate “font” menu. What looks like another typeface in profile text is usually special Unicode characters copied from a generator.",
    },
    {
      q: "Why does non-Latin text turn into “squares”?",
      a: "Many generators are Latin-only. Some styles don’t include Cyrillic or other scripts — on another device the character simply won’t render.",
    },
    {
      q: "Does a decorative font affect reach?",
      a: "Not as an algorithm secret. It may make the header a bit more noticeable — or it may cut readability and trust. Content and audience decide.",
    },
    {
      q: "Are Fonts for Instagram* apps safe?",
      a: "Generators that only copy text are usually fine. Tools that ask for Instagram* login and password risk account theft. Don’t enter a password just for a font.",
    },
    {
      q: "How is bio text different from text on a photo?",
      a: "In the bio, you’re using Unicode or plain letters. On a post or Story, you use a real typeface in an editor (Canva, Snapseed, and similar tools): that’s an image, not a profile field.",
    },
    {
      q: "How many styles are normal in the header?",
      a: "One accent on a headline or CTA is enough. Every word in a different “font” reads worse and looks spammy.",
    },
    {
      q: "Do I need invisible characters for “centering”?",
      a: "People sometimes use invisible or space Unicode to shift lines. Behavior varies by client — don’t treat the trick as a brand standard.",
    },
    {
      q: "Does décor help sales?",
      a: "Only if it strengthens a clear offer. Pretty mush without “who you are / what you offer / where to write” doesn’t convert.",
    },
  ],
  sections: [
    {
      title: "What you can actually dress up",
      level: 2,
      paras: [
        "Name and bio: people most often paste Unicode styles — 𝖇𝖔𝖑𝖉, 𝓬𝓾𝓻𝓼𝓲𝓿𝓮, and similar sets. Bio length is limited; décor burns through the character budget faster than plain text.",
        "Post captions and comments: same trick, but a long decorative paragraph tires people out. Better to accent the headline or CTA.",
        "Images, carousels, highlight covers, and Stories: real editor fonts work here. More reliable for Cyrillic and brand work than Unicode in the bio.",
      ],
      notes: [
        {
          title: "Don’t confuse this with feed design",
          kind: "tip",
          text: "A unified grid style, avatar, and header structure are a separate topic. A decorative font is just one trick inside text or a layout.",
        },
      ],
    },
    {
      title: "Unicode styles: how it works",
      level: 2,
      paras: [
        "A generator swaps ordinary letters for other Unicode code points that many devices draw as “bold” or “script.” Instagram* doesn’t apply a CSS font — it just shows the characters.",
        "Typical path: open a web or mobile generator → type a phrase → copy → paste into Edit profile or a caption. App names change every year; the “copied text” pattern matters more than the utility’s brand.",
        "Before you publish, open the profile on another device (iOS and Android): rare styles look different on one OS or fall into “tofu” (□).",
      ],
      lists: [
        {
          intro: "When Unicode fits:",
          items: [
            "a short accent in the name or first bio line",
            "highlighting one CTA (“book,” “price list”)",
            "a light blog where the tone allows some play",
          ],
        },
        {
          intro: "When you’re better off skipping it:",
          items: [
            "long addresses, prices, legal wording",
            "B2B with a conservative audience",
            "the whole bio in one script style",
          ],
        },
      ],
    },
    {
      title: "Scripts, accessibility, and discovery",
      level: 2,
      paras: [
        "Many “fancy font” sets are incomplete for Cyrillic and other non-Latin alphabets. Check every letter — or part of the word vanishes for a follower.",
        "Screen readers and some clients voice decorative characters poorly. Duplicate critical meaning (niche, city, phone) in plain type.",
        "In-app search and OCR on images don’t replace a clear offer in plain letters in the bio. Décor is a shell — not a platform SEO hack.",
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "The whole bio in one script style. On a small screen it’s mush: people don’t get who you are in three seconds and leave.",
        },
      ],
    },
    {
      title: "Text on images",
      level: 2,
      paras: [
        "For posts and Stories it’s safer to overlay text in an editor: Canva, Figma, Snapseed, built-in Story text stickers, and similar tools. Pick a typeface with your script, size, and contrast.",
        "Keep one or two font pairs in the brand kit — same idea as feed templates. A jumping typeface set every week breaks recognition more than a boring unified style.",
        "Leave margins: grid previews and platform UI crop the edges. A large headline plus a short subhead reads better than a tiny wall of text.",
      ],
      lists: [
        {
          intro: "Mini layout rules:",
          items: [
            "enough text-to-background contrast",
            "no more than two accents per frame",
            "faces and logo not covered by letters",
            "readable on a phone without zoom",
          ],
        },
      ],
    },
    {
      title: "Safety and outdated app catalogs",
      level: 2,
      paras: [
        "Old roundups pushed dozens of utilities with store ratings and local prices. The list ages fast: apps rename, change policy, and switch monetization.",
        "Don’t download “font unlock” tools that ask for Instagram* password or session. A clipboard is enough to generate text.",
        "Paid editors with solid script support make sense if you regularly make covers. A one-off post usually fits Canva or built-in Story text.",
      ],
      notes: [
        {
          title: "Grey promises",
          kind: "tip",
          text: "“This font will multiply reach N times” is utility marketing, not fact. Test header noticeability on your audience — not on someone else’s screenshots.",
        },
      ],
    },
    {
      title: "How to fit it into the profile without harm",
      level: 2,
      paras: [
        "First draft the bio in plain text: who you are, the benefit, geo/hours, CTA, and link (if you have one). Then add one decorative accent.",
        "Profile name and username should stay recognizable: a too “broken” display name makes you hard to find in chats and mentions.",
        "Combine with emoji in moderation: décor and pictograms compete for attention. Clear structure beats a carnival of styles.",
      ],
      lists: [
        {
          intro: "Quick order of operations:",
          items: [
            "write the meaning without décor",
            "pick one Unicode style or keep the bio plain",
            "check iOS and Android",
            "match avatar and highlight covers",
            "in a week, see whether the CTA is read (link clicks, DMs)",
          ],
        },
      ],
    },
    {
      title: "Key takeaways",
      level: 2,
      paras: [
        "A “pretty font” on Instagram* is either Unicode in text fields or a real typeface on an image. The platform doesn’t offer a bio font menu.",
        "Script coverage, readability, and safety beat an app catalog. One accent beats a wall of décor.",
        "Bio meaning and a unified feed visual sell better than an exotic letter in every word.",
      ],
    },
  ],
  closing: [
    "Rewrite the bio in plain text, then add one decorative accent on the CTA and check display on two devices — faster than stacking ten styles for luck.",
  ],
  related: [
    "oformlenie-stranicy-instagram",
    "shablon-instagram",
    "emodzi",
    "podpis-foto-instagram",
    "avatar-instagram",
    "post-instagram",
  ],
};

/** ES overlay for dekorativnyy-shrift-instagram — same structure as RU JSON / EN. */
export const dekorativnyyShriftInstagramEs: BlogPost = {
  slug: "dekorativnyy-shrift-instagram",
  title: "Fuentes decorativas en Instagram*: bio, posts y sentido común",
  date: "2021-11-22",
  category: "SMM",
  cover: "/images/blog/dekorativnyy-shrift-instagram/cover-es.webp",
  excerpt:
    "Cómo lograr texto «bonito» en la bio de Instagram* y en imágenes: estilos Unicode, editores, escrituras no latinas, legibilidad y riesgos — sin un catálogo de apps obsoletas.",
  lead: [
    "Instagram* en sí no tiene selector de tipografía en la bio ni en los captions: el look bold, italic y «manuscrito» suele venir de caracteres Unicode o de texto horneado en una imagen.",
    "Abajo: dónde encaja, cómo pegar un estilo sin entregar la contraseña a tools de terceros «Font for Instagram*», por qué las escrituras no latinas a menudo se rompen y cuándo el décor daña el alcance y la confianza. Ver la nota Meta en esta página.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no fomenta el uso de la plataforma. Instagram* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta se reconoce como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿Hay fuentes integradas en la bio?",
      a: "No hay un menú aparte de «fuente». Lo que parece otra tipografía en el texto del perfil suele ser caracteres Unicode especiales copiados de un generador.",
    },
    {
      q: "¿Por qué el texto no latino se vuelve «cuadrados»?",
      a: "Muchos generadores son solo latinos. Algunos estilos no incluyen cirílico u otras escrituras — en otro dispositivo el carácter simplemente no se renderiza.",
    },
    {
      q: "¿Una fuente decorativa afecta el alcance?",
      a: "No como un secreto del algoritmo. Puede hacer el header un poco más notable — o puede cortar legibilidad y confianza. Deciden el contenido y la audiencia.",
    },
    {
      q: "¿Son seguras las apps Fonts for Instagram*?",
      a: "Los generadores que solo copian texto suelen estar bien. Las tools que piden login y contraseña de Instagram* arriesgan el robo de la cuenta. No metas una contraseña solo por una fuente.",
    },
    {
      q: "¿En qué se diferencia el texto de la bio del texto en una foto?",
      a: "En la bio usas Unicode o letras planas. En un post o Story usas una tipografía real en un editor (Canva, Snapseed y similares): eso es una imagen, no un campo del perfil.",
    },
    {
      q: "¿Cuántos estilos son normales en el header?",
      a: "Un acento en un titular o CTA basta. Cada palabra en una «fuente» distinta se lee peor y parece spam.",
    },
    {
      q: "¿Hacen falta caracteres invisibles para «centrar»?",
      a: "A veces se usan Unicode invisibles o de espacio para desplazar líneas. El comportamiento varía por cliente — no trates el truco como estándar de marca.",
    },
    {
      q: "¿El décor ayuda a las ventas?",
      a: "Solo si refuerza una oferta clara. Un mush bonito sin «quién eres / qué ofreces / dónde escribir» no convierte.",
    },
  ],
  sections: [
    {
      title: "Qué puedes vestir de verdad",
      level: 2,
      paras: [
        "Nombre y bio: la gente suele pegar estilos Unicode — 𝖇𝖔𝖑𝖉, 𝓬𝓾𝓻𝓼𝓲𝓿𝓮 y sets similares. La longitud de la bio es limitada; el décor quema el presupuesto de caracteres más rápido que el texto plano.",
        "Captions de posts y comentarios: el mismo truco, pero un párrafo decorativo largo cansa. Mejor acentuar el titular o el CTA.",
        "Imágenes, carruseles, covers de highlights y Stories: aquí funcionan fuentes reales de editor. Más fiable para cirílico y trabajo de marca que Unicode en la bio.",
      ],
      notes: [
        {
          title: "No lo confundas con el diseño del feed",
          kind: "tip",
          text: "Un estilo de grid unificado, avatar y estructura del header son otro tema. Una fuente decorativa es solo un truco dentro del texto o del layout.",
        },
      ],
    },
    {
      title: "Estilos Unicode: cómo funciona",
      level: 2,
      paras: [
        "Un generador cambia letras ordinarias por otros code points Unicode que muchos dispositivos dibujan como «bold» o «script». Instagram* no aplica una fuente CSS — solo muestra los caracteres.",
        "Camino típico: abrir un generador web o móvil → escribir una frase → copiar → pegar en Edit profile o en un caption. Los nombres de apps cambian cada año; importa más el patrón de «texto copiado» que la marca de la utilidad.",
        "Antes de publicar, abre el perfil en otro dispositivo (iOS y Android): estilos raros se ven distintos en un OS o caen en «tofu» (□).",
      ],
      lists: [
        {
          intro: "Cuándo encaja Unicode:",
          items: [
            "un acento corto en el nombre o la primera línea de la bio",
            "destacar un CTA («reserva», «lista de precios»)",
            "un blog ligero donde el tono permite algo de juego",
          ],
        },
        {
          intro: "Cuándo mejor saltártelo:",
          items: [
            "direcciones largas, precios, wording legal",
            "B2B con audiencia conservadora",
            "toda la bio en un solo estilo script",
          ],
        },
      ],
    },
    {
      title: "Escrituras, accesibilidad y discovery",
      level: 2,
      paras: [
        "Muchos sets de «fancy font» están incompletos para cirílico y otros alfabetos no latinos. Revisa cada letra — o parte de la palabra desaparece para un follower.",
        "Los lectores de pantalla y algunos clientes pronuncian mal los caracteres decorativos. Duplica el significado crítico (nicho, ciudad, teléfono) en tipografía plana.",
        "La búsqueda in-app y el OCR en imágenes no sustituyen una oferta clara en letras planas en la bio. El décor es una cáscara — no un hack SEO de la plataforma.",
      ],
      notes: [
        {
          title: "Error frecuente",
          kind: "tip",
          text: "Toda la bio en un solo estilo script. En una pantalla pequeña es mush: la gente no entiende quién eres en tres segundos y se va.",
        },
      ],
    },
    {
      title: "Texto en imágenes",
      level: 2,
      paras: [
        "Para posts y Stories es más seguro superponer texto en un editor: Canva, Figma, Snapseed, stickers de texto integrados de Story y similares. Elige una tipografía con tu escritura, tamaño y contraste.",
        "Mantén uno o dos pares de fuentes en el brand kit — la misma idea que las plantillas del feed. Un set tipográfico que salta cada semana rompe el reconocimiento más que un estilo unificado aburrido.",
        "Deja márgenes: los previews del grid y la UI de la plataforma recortan los bordes. Un titular grande más un subhead corto se lee mejor que un muro diminuto de texto.",
      ],
      lists: [
        {
          intro: "Mini reglas de layout:",
          items: [
            "contraste suficiente texto-fondo",
            "no más de dos acentos por frame",
            "caras y logo no tapados por letras",
            "legible en el teléfono sin zoom",
          ],
        },
      ],
    },
    {
      title: "Seguridad y catálogos de apps obsoletos",
      level: 2,
      paras: [
        "Los roundups viejos empujaban docenas de utilidades con ratings de store y precios locales. La lista envejece rápido: las apps se renombran, cambian política y monetización.",
        "No descargues tools de «font unlock» que pidan contraseña o sesión de Instagram*. Un portapapeles basta para generar texto.",
        "Los editores de pago con buen soporte de escritura tienen sentido si haces covers con regularidad. Un post puntual suele encajar en Canva o en el texto integrado de Story.",
      ],
      notes: [
        {
          title: "Promesas grises",
          kind: "tip",
          text: "«Esta fuente multiplicará el alcance N veces» es marketing de la utilidad, no un hecho. Prueba la notabilidad del header en tu audiencia — no en screenshots ajenos.",
        },
      ],
    },
    {
      title: "Cómo encajarlo en el perfil sin daño",
      level: 2,
      paras: [
        "Primero redacta la bio en texto plano: quién eres, el beneficio, geo/horario, CTA y enlace (si tienes). Luego suma un acento decorativo.",
        "El nombre de perfil y el username deben seguir siendo reconocibles: un display name demasiado «roto» te hace difícil de encontrar en chats y menciones.",
        "Combina con emoji con moderación: décor y pictogramas compiten por la atención. Una estructura clara gana a un carnaval de estilos.",
      ],
      lists: [
        {
          intro: "Orden rápido de operaciones:",
          items: [
            "escribe el significado sin décor",
            "elige un estilo Unicode o deja la bio plana",
            "comprueba iOS y Android",
            "alinea avatar y covers de highlights",
            "en una semana, mira si se lee el CTA (clics al enlace, DMs)",
          ],
        },
      ],
    },
    {
      title: "Claves a recordar",
      level: 2,
      paras: [
        "Una «fuente bonita» en Instagram* es Unicode en campos de texto o una tipografía real en una imagen. La plataforma no ofrece un menú de fuente en la bio.",
        "Cobertura de escritura, legibilidad y seguridad ganan a un catálogo de apps. Un acento gana a un muro de décor.",
        "El significado de la bio y un visual unificado del feed venden mejor que una letra exótica en cada palabra.",
      ],
    },
  ],
  closing: [
    "Reescribe la bio en texto plano, luego suma un acento decorativo en el CTA y comprueba la visualización en dos dispositivos — más rápido que apilar diez estilos por suerte.",
  ],
  related: [
    "oformlenie-stranicy-instagram",
    "shablon-instagram",
    "avatar-instagram",
    "post-instagram",
    "emodzi",
    "podpis-foto-instagram",
  ],
};
