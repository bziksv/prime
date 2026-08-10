import type { BlogPost } from "../../../data/blog";

/** EN overlay for vodyanoy-znak — same structure as RU JSON. */
export const vodyanoyZnakEn: BlogPost = {
  slug: "vodyanoy-znak",
  title: "Photo watermarks: why they help and when they hurt",
  date: "2020-09-16",
  category: "Digital marketing",
  cover: "/images/blog/vodyanoy-znak/cover-en.webp",
  excerpt:
    "What a watermark on digital photos is: protection and branding, downsides for perception and sharing, how to apply it carefully, and alternatives (previews, contracts, metadata).",
  lead: [
    "A watermark is a semi-transparent signature, logo, or URL overlaid on an image. The idea came from paper and banknotes; on the web the mark reminds viewers of the author and slightly complicates “quiet” copying.",
    "Below: when a watermark fits, why it doesn’t replace legal protection, and how not to ruin the shot. Online-tool buttons and Photoshop panels change — the principle matters: opacity, size, placement.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platform. Instagram* is a product of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the service may have legal consequences.",
  },
  faq: [
    {
      q: "Is a watermark the same as legal protection?",
      a: "No. It’s a visual signal and a light barrier. Rights are confirmed by contract, authorship records, and evidence in a dispute — not a corner logo.",
    },
    {
      q: "Can a watermark be removed?",
      a: "Someone with skill will often crop or retouch it. Don’t build protection on the mark alone.",
    },
    {
      q: "Where should I place the mark?",
      a: "So it doesn’t hit the subject: a corner, a light repeating pattern, or a zone outside the main object. Too large a mark kills the frame.",
    },
    {
      q: "Do I need it on every site photo?",
      a: "Not always. For portfolios and licensed-asset marketplaces — more often yes; for UX illustrations and social sharing, a clean smaller preview is sometimes better.",
    },
    {
      q: "What can replace a watermark?",
      a: "Publish smaller previews, keep originals offline, licenses and contracts, metadata, and when needed — registries and legal support.",
    },
  ],
  sections: [
    {
      title: "Why people add them and who benefits",
      level: 2,
      paras: [
        "On photo libraries and among photographers, a watermark lowers the temptation to download “as is” and also advertises the author if the image keeps traveling online.",
        "Site owners mark visuals with a logo or domain: protection plus recognition. A good mark is almost unnoticeable but readable when copied.",
        "Marketers sometimes make the mark part of the brand: the image “wanders,” the logo travels with it. That works only if the mark doesn’t ruin the composition.",
      ],
      lists: [
        {
          intro: "Typical goals:",
          items: [
            "reduce free-riding copies",
            "credit the author on a repost",
            "strengthen brand on shared previews",
            "distinguish a demo frame from a paid license",
          ],
        },
      ],
      links: [
        {
          label: "Copyright on Instagram",
          href: "/en/blog/avtorskie-prava-instagram/",
        },
        {
          label: "Open Graph",
          href: "/en/blog/open-graph/",
        },
      ],
    },
    {
      title: "Downsides, tools, and practice",
      level: 2,
      paras: [
        "Downsides: the mark distracts from the image; a crude watermark looks cheap; social sharing drops if the image is “smeared”; legally, one corner logo isn’t enough.",
        "Tools: a graphics editor (Photoshop, Photopea, GIMP, and peers), batch processing in Lightroom or plugins, online services with file upload. Don’t upload photos with sensitive data to shady sites — for commercial originals, local software is preferable.",
        "Application practice: a separate layer, 15–40% opacity, contrast against the background, one style across the site. For portfolios, a small preview without a mark plus the full file on request or payment is sometimes better.",
        "Whether to use one depends on the goal: selling licenses — more often yes; atmospheric blog illustrations — case by case; if sharing and aesthetics matter more — previews and contracts beat a fat logo across half the frame.",
        "Bottom line: a watermark is a useful protection and brand layer, not armor. Apply it carefully or choose previews and a legal framework.",
      ],
      lists: [
        {
          intro: "Careful watermark checklist:",
          items: [
            "doesn’t cover face or product",
            "one style across the series",
            "readable on a preview but doesn’t shout",
            "a backup file without the mark exists",
            "rights and licenses handled separately",
          ],
        },
      ],
      links: [
        {
          label: "Photos for Instagram",
          href: "/en/blog/foto-instagram/",
        },
        {
          label: "Favicon",
          href: "/en/blog/favikon/",
        },
      ],
    },
  ],
  related: [
    "avtorskie-prava-instagram",
    "open-graph",
    "foto-instagram",
    "favikon",
    "sohranit-foto-instagram",
  ],
};

/** ES overlay for vodyanoy-znak — same structure as RU JSON / EN. */
export const vodyanoyZnakEs: BlogPost = {
  slug: "vodyanoy-znak",
  title: "Marcas de agua en fotos: por qué ayudan y cuándo hacen daño",
  date: "2020-09-16",
  category: "Digital marketing",
  cover: "/images/blog/vodyanoy-znak/cover-es.webp",
  excerpt:
    "Qué es una watermark en fotos digitales: protección y branding, contras para percepción y shares, cómo aplicarla con cuidado y alternativas (previews, contratos, metadata).",
  lead: [
    "Una watermark es una firma, logo o URL semitransparente superpuesta a una imagen. La idea viene del papel y los billetes; en la web la marca recuerda al autor y complica un poco la copia «silenciosa».",
    "Abajo: cuándo encaja una watermark, por qué no sustituye la protección legal y cómo no arruinar la toma. Los botones de tools online y paneles de Photoshop cambian — importa el principio: opacidad, tamaño, colocación.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no fomenta el uso de la plataforma. Instagram* es un producto de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso del servicio puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿Una watermark es lo mismo que protección legal?",
      a: "No. Es una señal visual y una barrera ligera. Los derechos se confirman con contrato, registros de autoría y pruebas en un litigio — no un logo en la esquina.",
    },
    {
      q: "¿Se puede quitar una watermark?",
      a: "Alguien con skill a menudo la recorta o retoca. No armes la protección solo sobre la marca.",
    },
    {
      q: "¿Dónde debo colocar la marca?",
      a: "Para que no pegue al sujeto: una esquina, un patrón ligero que se repite o una zona fuera del objeto principal. Una marca demasiado grande mata el frame.",
    },
    {
      q: "¿Hace falta en cada foto del sitio?",
      a: "No siempre. En portfolios y marketplaces de assets con licencia — más a menudo sí; para ilustraciones de UX y shares en social, a veces es mejor un preview limpio y más pequeño.",
    },
    {
      q: "¿Qué puede sustituir una watermark?",
      a: "Publicar previews más pequeños, guardar originales offline, licencias y contratos, metadata y, cuando haga falta — registros y apoyo legal.",
    },
  ],
  sections: [
    {
      title: "Por qué se añaden y a quién benefician",
      level: 2,
      paras: [
        "En bibliotecas de fotos y entre fotógrafos, una watermark baja la tentación de descargar «tal cual» y también anuncia al autor si la imagen sigue viajando online.",
        "Los dueños de sitios marcan visuales con logo o dominio: protección más reconocimiento. Una buena marca casi no se nota pero se lee al copiar.",
        "Los marketers a veces hacen de la marca parte del brand: la imagen «vaga», el logo viaja con ella. Eso funciona solo si la marca no arruina la composición.",
      ],
      lists: [
        {
          intro: "Metas típicas:",
          items: [
            "reducir copias free-riding",
            "acreditar al autor en un repost",
            "reforzar marca en previews compartidos",
            "distinguir un frame demo de una licencia de pago",
          ],
        },
      ],
      links: [
        {
          label: "Copyright en Instagram",
          href: "/es/blog/avtorskie-prava-instagram/",
        },
        {
          label: "Open Graph",
          href: "/es/blog/open-graph/",
        },
      ],
    },
    {
      title: "Contras, tools y práctica",
      level: 2,
      paras: [
        "Contras: la marca distrae de la imagen; una watermark burda se ve barata; el sharing social cae si la imagen está «untada»; legalmente, un logo en la esquina no basta.",
        "Tools: un editor gráfico (Photoshop, Photopea, GIMP y pares), procesamiento por lotes en Lightroom o plugins, servicios online con upload. No subas fotos con datos sensibles a sitios dudosos — para originales comerciales, software local es preferible.",
        "Práctica de aplicación: una capa aparte, opacidad 15–40%, contraste contra el fondo, un estilo en todo el sitio. En portfolios, a veces es mejor un preview pequeño sin marca más el archivo completo bajo petición o pago.",
        "Usarla o no depende de la meta: vender licencias — más a menudo sí; ilustraciones atmosféricas de blog — caso a caso; si importan más sharing y estética — previews y contratos ganan a un logo gordo a media frame.",
        "En resumen: una watermark es una capa útil de protección y marca, no armadura. Aplícala con cuidado o elige previews y un marco legal.",
      ],
      lists: [
        {
          intro: "Checklist de watermark cuidadosa:",
          items: [
            "no tapa cara ni producto",
            "un estilo en toda la serie",
            "legible en un preview pero no grita",
            "existe un archivo backup sin la marca",
            "derechos y licencias se tratan aparte",
          ],
        },
      ],
      links: [
        {
          label: "Fotos para Instagram",
          href: "/es/blog/foto-instagram/",
        },
        {
          label: "Favicon",
          href: "/es/blog/favikon/",
        },
      ],
    },
  ],
  related: [
    "avtorskie-prava-instagram",
    "open-graph",
    "foto-instagram",
    "favikon",
    "sohranit-foto-instagram",
  ],
};
