import type { BlogPost } from "../../../data/blog";

/** EN overlay for pinterest — same structure as RU JSON. */
export const pinterestEn: BlogPost = {
  slug: "pinterest",
  title: "Pinterest: what it is and why business and personal boards use it",
  date: "2020-08-04",
  category: "SMM",
  cover: "/images/blog/pinterest/cover-en.webp",
  excerpt:
    "What Pinterest is: pins, boards, repins, how it differs from Instagram, and how to use it for ideas and traffic — without outdated demo stats or sales guarantees.",
  lead: [
    "Pinterest is visual search and idea boards: you save pins (images with a link and description) to boards, find references, and send traffic to a site.",
    "Below: platform vocabulary, personal vs business use, and realistic expectations. Don’t treat “millions in the US” or “women 20–45” stats from 2020 roundups as fact. Other people’s images still come with copyright.",
  ],
  faq: [
    {
      q: "Is Pinterest a social network or a search engine?",
      a: "Both in feel: an interest feed plus search by visual and topic. Stronger at “find an idea or product,” weaker at “chat in comments.”",
    },
    {
      q: "How is it different from Instagram?",
      a: "Instagram is stronger on personality and Stories/Reels. Pinterest is stronger on long pin lifespan, repins, and outbound clicks to an external page.",
    },
    {
      q: "Are pinterest.ru and .com different services?",
      a: "Usually one product with language and region settings. Sign in via the official site or app; don’t confuse it with clones.",
    },
    {
      q: "Can I use someone else’s pins in ads?",
      a: "For commerce you need your own materials, a license, or permission. Saving a reference to a board ≠ the right to use it in ads.",
    },
    {
      q: "How do I download an image for myself?",
      a: "With built-in tools — covered in a separate article. Not via shady scrapers.",
    },
  ],
  sections: [
    {
      title: "Glossary: pin, board, repin",
      level: 2,
      paras: [
        "Pin — a card: image, description, often a link to the source or site.",
        "Board — a thematic folder of pins (interior, recipes, product moodboard).",
        "Repin — save someone else’s pin to your board. Ideas spread without rewriting a post from scratch the way you would in an Instagram feed.",
      ],
    },
    {
      title: "How attention works on Pinterest",
      level: 2,
      paras: [
        "The platform is built for viewing images and saving. Tapping a pin opens a larger view and a path to the source site — hence interest from e-commerce and content marketing.",
        "“Pretty image = automatic sales” is a myth. You need an offer, a page, and click analytics.",
        "A strong pin lives longer than a feed post: people find it via search and recommendations for months.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Important",
          text: "Don’t promise ads will “own” attention on their own. Count clicks, saves, and leads with UTM.",
        },
      ],
    },
    {
      title: "For personal use",
      level: 2,
      paras: [
        "Collecting ideas: renovation, recipes, style, travel, learning.",
        "Boards save phone space versus a thousand gallery screenshots.",
        "Handy visual search for “how to make / how it looks,” not only friends’ feeds.",
      ],
    },
    {
      title: "For business",
      level: 2,
      paras: [
        "Product and inspiration storefront: a pin leads to a product card, article, or landing page.",
        "Team references: campaign and packaging moodboards (without stealing other people’s photos into production).",
        "Audience and niches depend on the market; use your account analytics, not other people’s demo portraits from old articles.",
        "Connect the site correctly (domain, Rich Pins / the current Pinterest Help equivalent) and tag campaigns with UTM.",
      ],
      lists: [
        {
          intro: "Mini rules:",
          items: [
            "your own or licensed images",
            "clear text on the pin / in the description",
            "a working mobile link",
            "boards by theme, not a dump",
            "measure traffic and conversions",
          ],
        },
      ],
    },
    {
      title: "Related reading",
      level: 2,
      paras: [
        "Saving files to a device is a separate guide. Here we focus on what the platform is for and common scenarios.",
        "Pinterest doesn’t replace SEO and paid search; it adds a visual entry into the funnel.",
      ],
      links: [
        {
          label: "Download from Pinterest",
          href: "/en/blog/pinterest-skachat/",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Pinterest = idea boards + visual search with an outbound link.",
        "For business, a long-lived pin and traffic matter; for personal use — ordered references without gallery chaos.",
      ],
    },
  ],
  closing: [
    "Build one thematic board for the job (product or moodboard) and pin 5–10 of your own images with links — faster to learn if the format works than reading someone else’s “platform success” story.",
  ],
  related: [
    "pinterest-skachat",
    "kontent-plan-instagram",
    "foto-instagram",
    "nativnaya-reklama",
    "shablon-instagram",
    "oformlenie-stranicy-instagram",
  ],
};

/** ES overlay for pinterest — same structure as RU JSON / EN. */
export const pinterestEs: BlogPost = {
  slug: "pinterest",
  title: "Pinterest: qué es y por qué lo usan negocio y boards personales",
  date: "2020-08-04",
  category: "SMM",
  cover: "/images/blog/pinterest/cover-es.webp",
  excerpt:
    "Qué es Pinterest: pins, boards, repins, en qué se diferencia de Instagram y cómo usarlo para ideas y tráfico — sin stats demo obsoletas ni garantías de ventas.",
  lead: [
    "Pinterest es búsqueda visual y boards de ideas: guardas pins (imágenes con enlace y descripción) en boards, encuentras referencias y envías tráfico a un sitio.",
    "Abajo: vocabulario de la plataforma, uso personal vs business y expectativas realistas. No trates como hecho las stats de «millones en EE. UU.» o «mujeres 20–45» de roundups de 2020. Las imágenes ajenas siguen trayendo copyright.",
  ],
  faq: [
    {
      q: "¿Pinterest es una red social o un buscador?",
      a: "Las dos en feeling: un feed de intereses más búsqueda por visual y tema. Más fuerte en «encontrar una idea o producto», más débil en «charlar en comentarios».",
    },
    {
      q: "¿En qué se diferencia de Instagram?",
      a: "Instagram es más fuerte en personalidad y Stories/Reels. Pinterest es más fuerte en la vida larga del pin, repins y clics salientes a una página externa.",
    },
    {
      q: "¿pinterest.ru y .com son servicios distintos?",
      a: "Suele ser un solo producto con settings de idioma y región. Inicia sesión vía el sitio o la app oficial; no lo confundas con clones.",
    },
    {
      q: "¿Puedo usar pins ajenos en ads?",
      a: "Para comercio necesitas materiales propios, una licencia o permiso. Guardar una referencia en un board ≠ derecho a usarla en ads.",
    },
    {
      q: "¿Cómo descargo una imagen para mí?",
      a: "Con herramientas built-in — cubierto en un artículo aparte. No vía scrapers dudosos.",
    },
  ],
  sections: [
    {
      title: "Glosario: pin, board, repin",
      level: 2,
      paras: [
        "Pin — una tarjeta: imagen, descripción, a menudo un enlace a la fuente o al sitio.",
        "Board — una carpeta temática de pins (interior, recetas, moodboard de producto).",
        "Repin — guardar el pin de otro en tu board. Las ideas se difunden sin reescribir un post desde cero como en el feed de Instagram.",
      ],
    },
    {
      title: "Cómo funciona la atención en Pinterest",
      level: 2,
      paras: [
        "La plataforma está hecha para ver imágenes y guardar. Tocar un pin abre una vista mayor y un camino al sitio fuente — de ahí el interés de e-commerce y content marketing.",
        "«Imagen bonita = ventas automáticas» es un mito. Hace falta oferta, página y analítica de clics.",
        "Un pin fuerte vive más que un post del feed: la gente lo encuentra vía search y recomendaciones durante meses.",
      ],
      notes: [
        {
          kind: "tip",
          title: "Importante",
          text: "No prometas que los ads «poseerán» la atención solos. Cuenta clics, saves y leads con UTM.",
        },
      ],
    },
    {
      title: "Para uso personal",
      level: 2,
      paras: [
        "Recoger ideas: reforma, recetas, estilo, viajes, aprendizaje.",
        "Los boards ahorran espacio en el teléfono frente a mil capturas de galería.",
        "Búsqueda visual útil para «cómo hacer / cómo se ve», no solo feeds de amigos.",
      ],
    },
    {
      title: "Para negocio",
      level: 2,
      paras: [
        "Escaparate de producto e inspiración: un pin lleva a una ficha de producto, artículo o landing.",
        "Referencias de equipo: moodboards de campaña y packaging (sin robar fotos ajenas a producción).",
        "Audiencia y nichos dependen del mercado; usa la analítica de tu cuenta, no los retratos demo ajenos de artículos viejos.",
        "Conecta el sitio correctamente (dominio, Rich Pins / el equivalente actual de Pinterest Help) y etiqueta campañas con UTM.",
      ],
      lists: [
        {
          intro: "Mini reglas:",
          items: [
            "imágenes propias o con licencia",
            "texto claro en el pin / en la descripción",
            "un enlace móvil que funcione",
            "boards por tema, no un vertedero",
            "medir tráfico y conversiones",
          ],
        },
      ],
    },
    {
      title: "Lectura relacionada",
      level: 2,
      paras: [
        "Guardar archivos en el dispositivo es una guía aparte. Aquí nos centramos en para qué es la plataforma y escenarios habituales.",
        "Pinterest no sustituye SEO ni paid search; añade una entrada visual al funnel.",
      ],
      links: [
        {
          label: "Descargar de Pinterest",
          href: "/es/blog/pinterest-skachat/",
        },
      ],
    },
    {
      title: "Qué llevarte",
      level: 2,
      paras: [
        "Pinterest = boards de ideas + búsqueda visual con enlace de salida.",
        "Para negocio importan un pin longevo y el tráfico; para uso personal — referencias ordenadas sin caos de galería.",
      ],
    },
  ],
  closing: [
    "Arma un board temático para el trabajo (producto o moodboard) y pinnea 5–10 imágenes propias con enlaces — más rápido saber si el formato funciona que leer la historia ajena de «éxito en la plataforma».",
  ],
  related: [
    "pinterest-skachat",
    "kontent-plan-instagram",
    "foto-instagram",
    "nativnaya-reklama",
    "shablon-instagram",
    "oformlenie-stranicy-instagram",
  ],
};
