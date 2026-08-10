import type { BlogPost } from "../../../data/blog";

/** EN overlay for tilda — same structure as RU JSON. */
export const tildaEn: BlogPost = {
  slug: "tilda",
  title: "How to build a site on Tilda: structure, content, and publish",
  date: "2018-12-28",
  category: "Digital marketing",
  cover: "/images/blog/tilda/cover-en.webp",
  excerpt:
    "How to assemble a landing on Tilda: block structure, copy and visuals, Zero Block vs ready blocks, SEO basics, domain, and checks — without promising a “ready site in two days” for every project.",
  lead: [
    "Tilda is a block website builder: good for landings, simple multi-page sites, and fast prototypes. A large catalog or heavy 1C-style logic often hits platform limits.",
    "Below: a work order for a landing — structure → content → design → build → SEO and QA. Tilda’s UI changes; follow the meaning of the steps, not 2018 screenshots. “Two days” is a guide for a simple landing with ready copy — not a guarantee.",
  ],
  faq: [
    {
      q: "Is Tilda fit for an online store?",
      a: "For a small assortment and simple payments — often yes. For a large catalog and complex integrations, look at specialized CMS.",
    },
    {
      q: "Do I need a designer?",
      a: "Templates and careful content are enough to start. A unique grid needs Zero Block or a designer if the brand requires it.",
    },
    {
      q: "Can I use stock photos?",
      a: "Only with a suitable commercial license. Your product and team photos are stronger. Don’t publish others’ shots without rights.",
    },
    {
      q: "Does Tilda rank itself?",
      a: "No. You need page meaning, title/description, speed, indexing, and demand. Rankings take planned months of work — not publish day.",
    },
    {
      q: "Is a custom domain required?",
      a: "For business — yes: trust and normal URLs. Connect the domain in project settings.",
    },
  ],
  sections: [
    {
      title: "Structure first, blocks later",
      level: 2,
      paras: [
        "Site type sets the frame. A course landing ≠ a designer portfolio ≠ a multi-page services site. For a landing classic: offer above the fold → product → benefits → trust → CTA → contacts.",
        "In Tilda one screen ≈ a block (or group). Draft a block list for the job and cut extras: a paintball club needs a short funnel; B2B equipment needs more proof.",
      ],
      lists: [
        {
          intro: "Example set for a course:",
          items: [
            "cover with offer",
            "numbers / results",
            "program",
            "author / team",
            "price and plans",
            "FAQ",
            "form and contacts",
          ],
        },
      ],
      links: [
        {
          label: "Landing page",
          href: "/en/blog/lending/",
        },
        {
          label: "Landing copy",
          href: "/en/blog/tekst-lendinga/",
        },
      ],
    },
    {
      title: "Content: copy and visuals",
      level: 2,
      paras: [
        "Write simply, like to a client in chat: benefit, proof, objection answers. Don’t dump “everything you know” onto one screen.",
        "Visuals: your photos and screens beat generic images. External images only with a commercial license. Compress files — heavy photos kill mobile speed.",
      ],
      lists: [
        {
          intro: "Prepare before building:",
          items: [
            "offer and headlines",
            "block copy",
            "photos / icons",
            "prices and terms",
            "privacy policy if you have forms",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          text: "First “click pretty,” then hunt for meaning. Without copy and offer a template doesn’t sell.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Prototype, fonts, and color",
      level: 2,
      paras: [
        "Beginners can sketch on paper, in Docs, or Figma: block order and CTAs. In Tilda design often starts from the block library — a prototype still saves rework.",
        "Keep color and type in one system: 1–2 fonts, contrasting buttons, readable mobile size. Take inspiration from competitors and landing galleries — don’t copy someone else’s brand.",
      ],
    },
    {
      title: "Building in Tilda",
      level: 2,
      paras: [
        "Create a project, assemble the page from blocks, drop in content, set menu and forms. For a non-standard grid — Zero Block; for speed — ready blocks.",
        "Check responsive: phone beats “beauty on a 27″ monitor.” Forms must reach email or CRM, not nowhere.",
      ],
      lists: [
        {
          intro: "Before publish:",
          items: [
            "all CTAs go where they should",
            "forms tested",
            "no broken images",
            "mobile layout without overlaps",
            "favicon and social preview",
          ],
        },
      ],
    },
    {
      title: "SEO basics, domain, and tests",
      level: 2,
      paras: [
        "Set H1/H2, title and description (separate for search and sharing if the project settings allow). Enable indexing, connect the domain, add analytics.",
        "If you collect personal data — document and consent. Run a speed/display checklist and send a test lead. Tilda’s SEO hint panel is a helper, not a promotion strategy.",
      ],
      links: [
        {
          label: "Building an online store",
          href: "/en/blog/sozdanie-internet-magazina/",
        },
        {
          label: "CMS for a store",
          href: "/en/blog/cms-internet-magazina/",
        },
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "Tilda speeds assembly when structure and content already exist. Order: meaning → blocks → domain and checks.",
        "Judge the job honestly: a service landing — yes; heavy e-commerce — often another stack.",
      ],
    },
  ],
  closing: [
    "Gather offer and copy, lay out blocks, connect domain and forms, check mobile — that’s how a Tilda landing appears faster than a “site without a brief,” without the illusion that the builder does SEO alone.",
  ],
  related: [
    "lending",
    "tekst-lendinga",
    "cms-internet-magazina",
    "sozdanie-internet-magazina",
    "formy-zahvata",
    "ssl-sertifikat",
  ],
};

/** ES overlay for tilda — same structure as RU JSON / EN. */
export const tildaEs: BlogPost = {
  slug: "tilda",
  title: "Cómo montar un sitio en Tilda: estructura, contenido y publicar",
  date: "2018-12-28",
  category: "Digital marketing",
  cover: "/images/blog/tilda/cover-es.webp",
  excerpt:
    "Cómo armar una landing en Tilda: estructura de bloques, copy y visuales, Zero Block vs bloques listos, SEO básico, dominio y chequeos — sin prometer un «sitio listo en dos días» para cada proyecto.",
  lead: [
    "Tilda es un website builder por bloques: bueno para landings, sitios multipágina simples y prototipos rápidos. Un catálogo grande o lógica pesada tipo 1C a menudo choca con los límites de la plataforma.",
    "Abajo: un orden de trabajo para una landing — estructura → contenido → diseño → build → SEO y QA. La UI de Tilda cambia; sigue el sentido de los pasos, no screenshots de 2018. «Dos días» es una guía para una landing simple con copy lista — no una garantía.",
  ],
  faq: [
    {
      q: "¿Tilda encaja para una tienda online?",
      a: "Para un surtido pequeño y pagos simples — a menudo sí. Para un catálogo grande e integraciones complejas, mira CMS especializadas.",
    },
    {
      q: "¿Hace falta un diseñador?",
      a: "Plantillas y contenido cuidadoso bastan para arrancar. Un grid único necesita Zero Block o un diseñador si la marca lo exige.",
    },
    {
      q: "¿Puedo usar fotos de stock?",
      a: "Solo con una licencia comercial adecuada. Fotos de tu producto y equipo son más fuertes. No publiques tomas ajenas sin derechos.",
    },
    {
      q: "¿Tilda se rankea sola?",
      a: "No. Hace falta sentido de página, title/description, velocidad, indexación y demanda. Los rankings llevan meses planificados de trabajo — no el día de publicar.",
    },
    {
      q: "¿Es obligatorio un dominio propio?",
      a: "Para el negocio — sí: trust y URLs normales. Conecta el dominio en los ajustes del proyecto.",
    },
  ],
  sections: [
    {
      title: "Primero la estructura, luego los bloques",
      level: 2,
      paras: [
        "El tipo de sitio fija el marco. Una landing de curso ≠ un portfolio de diseñador ≠ un sitio multipágina de servicios. Para una landing clásica: oferta above the fold → producto → beneficios → trust → CTA → contactos.",
        "En Tilda una pantalla ≈ un bloque (o grupo). Esboza una lista de bloques para el trabajo y corta extras: un club de paintball necesita un funnel corto; equipo B2B necesita más prueba.",
      ],
      lists: [
        {
          intro: "Set de ejemplo para un curso:",
          items: [
            "cover con oferta",
            "números / resultados",
            "programa",
            "autor / equipo",
            "precio y planes",
            "FAQ",
            "formulario y contactos",
          ],
        },
      ],
      links: [
        {
          label: "Landing page",
          href: "/es/blog/lending/",
        },
        {
          label: "Copy de landing",
          href: "/es/blog/tekst-lendinga/",
        },
      ],
    },
    {
      title: "Contenido: copy y visuales",
      level: 2,
      paras: [
        "Escribe simple, como a un cliente en chat: beneficio, prueba, respuestas a objeciones. No vuelques «todo lo que sabes» en una pantalla.",
        "Visuales: tus fotos y screens ganan a imágenes genéricas. Imágenes externas solo con licencia comercial. Comprime archivos — las fotos pesadas matan la velocidad móvil.",
      ],
      lists: [
        {
          intro: "Prepara antes de construir:",
          items: [
            "oferta y titulares",
            "copy de bloques",
            "fotos / iconos",
            "precios y términos",
            "política de privacidad si hay formularios",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          text: "Primero «clic bonito», luego cazar el sentido. Sin copy y oferta una plantilla no vende.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Prototipo, fuentes y color",
      level: 2,
      paras: [
        "Los principiantes pueden bocetar en papel, en Docs o Figma: orden de bloques y CTAs. En Tilda el diseño a menudo arranca desde la biblioteca de bloques — un prototipo aún ahorra retrabajo.",
        "Mantén color y tipografía en un sistema: 1–2 fuentes, botones contrastados, tamaño móvil legible. Inspírate en competidores y galerías de landings — no copies la marca de otro.",
      ],
    },
    {
      title: "Construir en Tilda",
      level: 2,
      paras: [
        "Crea un proyecto, arma la página con bloques, mete el contenido, fija menú y formularios. Para un grid no estándar — Zero Block; para velocidad — bloques listos.",
        "Comprueba responsive: el teléfono gana a «belleza en un monitor de 27″». Los formularios deben llegar a email o CRM, no a la nada.",
      ],
      lists: [
        {
          intro: "Antes de publicar:",
          items: [
            "todos los CTAs van donde deben",
            "formularios testeados",
            "sin imágenes rotas",
            "layout móvil sin solapes",
            "favicon y preview social",
          ],
        },
      ],
    },
    {
      title: "SEO básico, dominio y tests",
      level: 2,
      paras: [
        "Fija H1/H2, title y description (aparte para búsqueda y sharing si los ajustes del proyecto lo permiten). Activa indexación, conecta el dominio, añade analytics.",
        "Si recoges datos personales — documento y consentimiento. Corre un checklist de velocidad/display y envía un lead de prueba. El panel de hints SEO de Tilda es un helper, no una estrategia de promoción.",
      ],
      links: [
        {
          label: "Crear una tienda online",
          href: "/es/blog/sozdanie-internet-magazina/",
        },
        {
          label: "CMS para una tienda",
          href: "/es/blog/cms-internet-magazina/",
        },
      ],
    },
    {
      title: "Qué recordar",
      level: 2,
      paras: [
        "Tilda acelera el montaje cuando ya existen estructura y contenido. Orden: sentido → bloques → dominio y chequeos.",
        "Juzga el trabajo con honestidad: una landing de servicio — sí; e-commerce pesado — a menudo otro stack.",
      ],
    },
  ],
  closing: [
    "Reúne oferta y copy, monta bloques, conecta dominio y formularios, comprueba móvil — así aparece una landing Tilda más rápido que un «sitio sin brief», sin la ilusión de que el builder hace SEO solo.",
  ],
  related: [
    "lending",
    "tekst-lendinga",
    "cms-internet-magazina",
    "sozdanie-internet-magazina",
    "formy-zahvata",
    "ssl-sertifikat",
  ],
};
