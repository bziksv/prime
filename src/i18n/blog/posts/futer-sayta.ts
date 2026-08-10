import type { BlogPost } from "../../../data/blog";

/** EN overlay for futer-sayta — same structure as RU JSON. */
export const futerSaytaEn: BlogPost = {
  slug: "futer-sayta",
  title: "Website footer: why it matters and what to put in it",
  date: "2021-04-14",
  category: "SEO",
  cover: "/images/blog/futer-sayta/cover-en.webp",
  excerpt:
    "The role of the site footer in navigation and trust: contacts, links, legal block, and design — without keyword spam in the footer.",
  lead: [
    "The footer is the bottom block of a site. Users who reach it are looking for contacts, documents, or a clear next step after a long page.",
    "A good footer finishes the journey — it doesn’t duplicate the whole menu. Below: contents, priorities, and SEO limits without link spam.",
  ],
  faq: [
    {
      q: "Does the footer affect SEO?",
      a: "Indirectly: navigation, contacts, a shared template. Mass identical SEO links in the footer barely help and look like spam.",
    },
    {
      q: "What’s required in the footer?",
      a: "Contacts/legal entity by niche, links to privacy and key sections. The rest depends on site type.",
    },
    {
      q: "Do I need an HTML sitemap in the footer?",
      a: "A short menu of important sections — yes. A full list of hundreds of URLs — better a separate human sitemap + sitemap.xml for bots.",
    },
    {
      q: "Should I repeat the phone from the header?",
      a: "Yes — handy: the person reached the end and is ready to call.",
    },
    {
      q: "Can I add keywords to the footer?",
      a: "Don’t insert unnatural anchors and city lists. Plain section names are clearer for people and safer for SEO.",
    },
    {
      q: "Do I need social icons?",
      a: "Only for live official profiles. Each icon needs an accessible label, and the link should go to a current page.",
    },
  ],
  sections: [
    {
      title: "What a footer is made of",
      level: 2,
      paras: [
        "Typical set: navigation, contacts, socials or messengers, legal info, and copyright. Not every block is required — composition follows the site’s job.",
        "For a local service, address and hours matter more; for a store — shipping and returns; for media — rubrics and signup. Help the user finish the action first, then add secondary items.",
      ],
      lists: [
        {
          intro: "Common blocks:",
          items: [
            "menu of key sections",
            "phone, email, address",
            "legal details / offer / privacy",
            "social icons without a zoo",
            "payment badges — if it’s a store",
          ],
        },
      ],
    },
    {
      title: "Why it’s needed",
      level: 2,
      paras: [
        "The footer gives a path to action at the end of a long page and serves as backup navigation. It’s especially useful when the header has scrolled away.",
        "Contacts and documents in one predictable place make the company clearer. But a footer doesn’t replace a proper Contacts page and main menu.",
      ],
      lists: [
        {
          intro: "For SEO practice:",
          items: [
            "one shared footer across templates",
            "working links without 404s",
            "contacts match Contacts pages and map listings",
            "no wall of “buy X cheap” anchors",
          ],
        },
      ],
      links: [
        {
          label: "Contact form",
          href: "/en/blog/forma-obratnoy-svyazi/",
        },
      ],
    },
    {
      title: "Design and mistakes",
      level: 2,
      paras: [
        "Keep readable contrast and don’t turn the footer into tiny gray mush. On mobile, phone, messenger, and buttons need large tap targets.",
        "Stack columns in a logical order: contacts and key action first, then navigation and documents. Check the block on a real phone — not only in a mockup.",
      ],
      lists: [
        {
          intro: "Avoid:",
          items: [
            "50 mixed links",
            "broken icons",
            "text hidden in the background color",
            "outdated legal details",
          ],
        },
      ],
    },
    {
      title: "Navigation without duplication",
      level: 2,
      paras: [
        "Pick a few sections that help finish the job: services, catalog, cases, blog, contacts. Group links by meaning — not by CMS structure.",
        "Don’t copy the full multi-level menu into the footer. Rare pages belong in a separate HTML sitemap; keep sitemap.xml for search engines.",
      ],
      lists: [
        {
          intro: "Check navigation:",
          items: [
            "links have clear names",
            "important URLs don’t 404",
            "current services and contacts are one click away",
            "groups aren’t overloaded with dozens of similar items",
          ],
        },
      ],
    },
    {
      title: "Contacts and documents",
      level: 2,
      paras: [
        "Phone, address, and hours in the footer should match Contacts, organization cards, and company ads. Mismatches cut trust and create extra inquiries.",
        "A privacy-policy link should be reachable from any page. For payments and leads, also check the offer, shipping terms, and consent copy.",
      ],
      lists: [
        {
          intro: "Before publish update:",
          items: [
            "legal details and hours",
            "clickable phone and email",
            "links to required documents",
            "a contact for urgent questions",
          ],
        },
      ],
    },
    {
      title: "SEO without link spam",
      level: 2,
      paras: [
        "A shared footer helps people find permanent sections — it isn’t a tool to force queries. Natural internal links with normal names beat a long wall of commercial anchors.",
        "Don’t hide text in the background color, don’t output hundreds of URLs, and don’t add city lists for keywords. That hurts people, crawl, and looks like manipulation.",
      ],
      lists: [
        {
          intro: "Healthy practice:",
          items: [
            "one template where it fits",
            "a few relevant links",
            "regular checks for broken URLs",
            "a separate sitemap for a large page list",
          ],
        },
      ],
    },
  ],
};

/** ES overlay for futer-sayta — same structure as RU JSON / EN. */
export const futerSaytaEs: BlogPost = {
  slug: "futer-sayta",
  title: "Footer del sitio: por qué importa y qué poner",
  date: "2021-04-14",
  category: "SEO",
  cover: "/images/blog/futer-sayta/cover-es.webp",
  excerpt:
    "El rol del footer en navegación y confianza: contactos, enlaces, bloque legal y diseño — sin spam de keywords en el pie.",
  lead: [
    "El footer es el bloque inferior del sitio. Quien llega ahí busca contactos, documentos o un siguiente paso claro tras una página larga.",
    "Un buen footer cierra el recorrido — no duplica el menú entero. Abajo: contenido, prioridades y límites SEO sin spam de enlaces.",
  ],
  faq: [
    {
      q: "¿El footer afecta al SEO?",
      a: "De forma indirecta: navegación, contactos, una plantilla compartida. Enlaces SEO idénticos en masa en el footer casi no ayudan y parecen spam.",
    },
    {
      q: "¿Qué es obligatorio en el footer?",
      a: "Contactos / entidad legal según el nicho, enlaces a privacidad y secciones clave. El resto depende del tipo de sitio.",
    },
    {
      q: "¿Hace falta un sitemap HTML en el footer?",
      a: "Un menú corto de secciones importantes — sí. Una lista completa de cientos de URLs — mejor un sitemap humano aparte + sitemap.xml para bots.",
    },
    {
      q: "¿Repito el teléfono del header?",
      a: "Sí — es práctico: la persona llegó al final y está lista para llamar.",
    },
    {
      q: "¿Puedo meter keywords en el footer?",
      a: "No metas anchors antinaturales ni listas de ciudades. Nombres claros de sección son más legibles para personas y más seguros para SEO.",
    },
    {
      q: "¿Hacen falta iconos de redes?",
      a: "Solo para perfiles oficiales vivos. Cada icono necesita una etiqueta accesible, y el enlace debe ir a una página actual.",
    },
  ],
  sections: [
    {
      title: "De qué está hecho un footer",
      level: 2,
      paras: [
        "Set típico: navegación, contactos, redes o mensajeros, info legal y copyright. No todo bloque es obligatorio — la composición sigue el trabajo del sitio.",
        "Para un servicio local, dirección y horario importan más; para una tienda — envíos y devoluciones; para media — rúbricas y alta. Ayuda primero a terminar la acción, luego añade lo secundario.",
      ],
      lists: [
        {
          intro: "Bloques habituales:",
          items: [
            "menú de secciones clave",
            "teléfono, email, dirección",
            "datos legales / oferta / privacidad",
            "iconos sociales sin zoológico",
            "badges de pago — si es tienda",
          ],
        },
      ],
    },
    {
      title: "Para qué sirve",
      level: 2,
      paras: [
        "El footer da un camino a la acción al final de una página larga y sirve de navegación de respaldo. Es especialmente útil cuando el header ya se fue al hacer scroll.",
        "Contactos y documentos en un lugar predecible hacen más clara la empresa. Pero el footer no sustituye una página de Contactos bien hecha ni el menú principal.",
      ],
      lists: [
        {
          intro: "Para la práctica SEO:",
          items: [
            "un footer compartido en las plantillas",
            "enlaces que funcionan, sin 404",
            "contactos alineados con Contactos y fichas de mapa",
            "sin muro de anchors «compra X barato»",
          ],
        },
      ],
      links: [
        {
          label: "Formulario de contacto",
          href: "/es/blog/forma-obratnoy-svyazi/",
        },
      ],
    },
    {
      title: "Diseño y errores",
      level: 2,
      paras: [
        "Mantén contraste legible y no conviertas el footer en papilla gris diminuta. En móvil, teléfono, mensajero y botones necesitan áreas de toque grandes.",
        "Apila columnas en orden lógico: primero contactos y acción clave, luego navegación y documentos. Revisa el bloque en un teléfono real — no solo en el mockup.",
      ],
      lists: [
        {
          intro: "Evita:",
          items: [
            "50 enlaces mezclados",
            "iconos rotos",
            "texto escondido en el color de fondo",
            "datos legales desactualizados",
          ],
        },
      ],
    },
    {
      title: "Navegación sin duplicar",
      level: 2,
      paras: [
        "Elige unas pocas secciones que ayuden a terminar el trabajo: servicios, catálogo, casos, blog, contactos. Agrupa enlaces por sentido — no por la estructura del CMS.",
        "No copies el menú multinivel completo al footer. Las páginas raras van a un sitemap HTML aparte; deja sitemap.xml para los buscadores.",
      ],
      lists: [
        {
          intro: "Revisa la navegación:",
          items: [
            "los enlaces tienen nombres claros",
            "las URLs importantes no dan 404",
            "servicios y contactos actuales están a un clic",
            "los grupos no se sobrecargan con docenas de ítems parecidos",
          ],
        },
      ],
    },
    {
      title: "Contactos y documentos",
      level: 2,
      paras: [
        "Teléfono, dirección y horario en el footer deben coincidir con Contactos, fichas de organización y ads de la empresa. Los desajustes cortan confianza y generan consultas de más.",
        "El enlace a la política de privacidad debe alcanzarse desde cualquier página. Con pagos y leads, revisa también la oferta, términos de envío y el texto de consentimiento.",
      ],
      lists: [
        {
          intro: "Antes de publicar, actualiza:",
          items: [
            "datos legales y horario",
            "teléfono y email clicables",
            "enlaces a documentos obligatorios",
            "un contacto para preguntas urgentes",
          ],
        },
      ],
    },
    {
      title: "SEO sin spam de enlaces",
      level: 2,
      paras: [
        "Un footer compartido ayuda a encontrar secciones permanentes — no es una herramienta para forzar queries. Enlaces internos naturales con nombres normales ganan a un muro largo de anchors comerciales.",
        "No escondas texto en el color de fondo, no saques cientos de URLs y no metas listas de ciudades por keywords. Eso perjudica a personas, al crawl y parece manipulación.",
      ],
      lists: [
        {
          intro: "Práctica sana:",
          items: [
            "una plantilla donde encaje",
            "unos pocos enlaces relevantes",
            "chequeos regulares de URLs rotas",
            "un sitemap aparte si la lista de páginas es grande",
          ],
        },
      ],
    },
  ],
};
