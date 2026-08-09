import type { BlogPost } from "../../../data/blog";

/** EN overlay for yuzabiliti — same structure as RU JSON. */
export const yuzabilitiEn: BlogPost = {
  slug: "yuzabiliti",
  title: "What website usability is and how to improve it",
  date: "2017-09-11",
  category: "Digital marketing",
  cover: "/images/blog/yuzabiliti/cover-en.webp",
  excerpt:
    "Usability is how easily a site gets people to the goal: short paths, speed, navigation, forms, and mobile. A self-audit checklist and practical fixes — without “rankings in a week” magic.",
  lead: [
    "Usability is how easily someone completes the action you want: buy, submit a lead, find a contact, sign up. On a commercial site, it isn’t decoration — it’s less friction between traffic and conversion.",
    "Below: baseline rules for a selling site, a simple self-audit, and targeted fixes. Checkout mistakes for stores are covered separately; here is the general frame for any commercial site.",
  ],
  faq: [
    {
      q: "Is usability the same as design?",
      a: "Design is part of the picture. Usability is clarity, speed to goal, and no dead ends: navigation, forms, mobile, button copy.",
    },
    {
      q: "Is the “three clicks” rule mandatory?",
      a: "It’s a guide, not dogma. What matters is an obvious path without extra steps — sometimes one screen with a strong CTA is enough.",
    },
    {
      q: "Does it affect SEO?",
      a: "Indirectly — through behavior and query satisfaction. Bad UX raises bounce and kills conversion; it doesn’t replace tech and content, but it amplifies what promotion delivers.",
    },
    {
      q: "How is it different from UX?",
      a: "In everyday talk, people use the terms interchangeably. UX is broader (full experience and emotion); usability is efficiency on a specific task. In practice, the fixes overlap.",
    },
    {
      q: "Where do I start an audit?",
      a: "Walk key scenarios on phone and desktop: find contacts, submit a lead, place an order. Log every friction point — that’s your backlog.",
    },
  ],
  sections: [
    {
      title: "What usability is and basic rules",
      level: 2,
      paras: [
        "Usability is a product’s ability to be used: find what’s needed, understand the interface, finish an action without help. On a site, success means the target action you’re paying to drive.",
        "Short path: the lead or buy button should be visible; don’t bury the next step three menu levels deep. When someone is ready to act, cut extra screens.",
        "Speed: heavy scripts and uncompressed images kill interest faster than imperfect design. Optimize load on critical funnel pages.",
        "Navigation and breadcrumbs on large sites reduce the “I’m lost” effect. Forms — minimum fields; personal-data consent and a privacy-policy link are legal requirements, not decoration.",
        "Mobile is non-negotiable: mobile share is high in most niches. Search engines weigh mobile experience; old claims about dropping from page one aren’t eternal policy — check current requirements and your metrics.",
      ],
      links: [
        {
          label: "Responsive site",
          href: "/en/blog/adaptivnyy-sayt/",
        },
        {
          label: "Behavioral signals",
          href: "/en/blog/povedencheskie-faktory/",
        },
      ],
    },
    {
      title: "Self-audit and quick improvements",
      level: 2,
      paras: [
        "Start free: walk scenarios as a new visitor and write a checklist of what works and what annoys. Add heatmaps and session replay once traffic exists — but eyes and a phone already catch most obvious bugs.",
        "Practical fixes: logo links home; contacts in header and footer as copyable text; header has search and a quick lead path if that’s your channel; tree menu without jumpy dropdowns; on 404 — paths to key sections, not a dead end.",
        "Why it matters for business: a usable site raises the share of visitors who do what they came for. Search responds to usefulness and behavior; usability amplifies SEO and ad ROI, but it doesn’t replace prep or ranking growth — page-one visibility for the keyword set is planned over months.",
        "If you run an online store, go deeper on checkout, product cards, and filters in the dedicated guide. One principle everywhere: less friction, more completed actions.",
      ],
      lists: [
        {
          intro: "Self-audit mini-checklist:",
          items: [
            "looks correct in popular browsers",
            "comfortable on a smartphone",
            "contacts found in seconds",
            "from any page — a path to key sections",
            "from 404 you can return to catalog or services",
            "lead, buy, or call without extra clicks",
          ],
        },
      ],
      links: [
        {
          label: "Ecommerce store usability",
          href: "/en/blog/yuzabiliti-internet-magazina/",
        },
        {
          label: "User engagement",
          href: "/en/blog/vovlechenie-polzovateley/",
        },
      ],
    },
  ],
  related: [
    "adaptivnyy-sayt",
    "povedencheskie-faktory",
    "yuzabiliti-internet-magazina",
    "vovlechenie-polzovateley",
    "oshibki-internet-magazina",
  ],
};

/** ES overlay for yuzabiliti — same structure as RU JSON / EN. */
export const yuzabilitiEs: BlogPost = {
  slug: "yuzabiliti",
  title: "Qué es la usabilidad web y cómo mejorarla",
  date: "2017-09-11",
  category: "Digital marketing",
  cover: "/images/blog/yuzabiliti/cover.webp",
  excerpt:
    "Usabilidad es lo fácil que un sitio lleva a la gente a la meta: caminos cortos, velocidad, navegación, formularios y móvil. Checklist de autoauditoría y arreglos prácticos — sin magia de «rankings en una semana».",
  lead: [
    "Usabilidad es lo fácil que alguien completa la acción que quieres: comprar, enviar un lead, hallar un contacto, registrarse. En un sitio comercial no es decoración — es menos fricción entre tráfico y conversión.",
    "Abajo: reglas baseline de un sitio que vende, una autoauditoría simple y arreglos puntuales. Los errores de checkout de tiendas se cubren aparte; aquí está el marco general para cualquier sitio comercial.",
  ],
  faq: [
    {
      q: "¿Usabilidad es lo mismo que diseño?",
      a: "El diseño es parte del cuadro. Usabilidad es claridad, velocidad hasta la meta y sin callejones sin salida: navegación, formularios, móvil, copy de botones.",
    },
    {
      q: "¿La regla de «tres clics» es obligatoria?",
      a: "Es una guía, no dogma. Lo que importa es un camino obvio sin pasos de más — a veces basta una pantalla con un CTA fuerte.",
    },
    {
      q: "¿Afecta al SEO?",
      a: "De forma indirecta — vía comportamiento y satisfacción de la query. Un UX malo sube el rebote y mata la conversión; no sustituye técnica y contenido, pero amplifica lo que entrega la promoción.",
    },
    {
      q: "¿En qué se diferencia de UX?",
      a: "En el habla cotidiana se usan como sinónimos. UX es más amplio (experiencia completa y emoción); usabilidad es eficiencia en una tarea concreta. En la práctica, los arreglos se solapan.",
    },
    {
      q: "¿Por dónde empiezo una auditoría?",
      a: "Recorre escenarios clave en teléfono y desktop: hallar contactos, enviar un lead, hacer un pedido. Anota cada punto de fricción — ese es tu backlog.",
    },
  ],
  sections: [
    {
      title: "Qué es usabilidad y reglas básicas",
      level: 2,
      paras: [
        "Usabilidad es la capacidad de un producto de usarse: hallar lo necesario, entender la interfaz, terminar una acción sin ayuda. En un sitio, el éxito es la acción objetivo por la que pagas.",
        "Camino corto: el botón de lead o compra debe verse; no entierres el siguiente paso tres niveles de menú abajo. Cuando alguien está listo para actuar, corta pantallas de más.",
        "Velocidad: scripts pesados e imágenes sin comprimir matan el interés más rápido que un diseño imperfecto. Optimiza la carga en páginas críticas del funnel.",
        "Navegación y breadcrumbs en sitios grandes reducen el efecto «estoy perdido». Formularios — campos al mínimo; consentimiento de datos personales y enlace a la política de privacidad son requisitos legales, no decoración.",
        "El móvil no es negociable: la cuota móvil es alta en la mayoría de nichos. Los buscadores pesan la experiencia móvil; afirmaciones viejas sobre caer de la primera página no son política eterna — mira requisitos actuales y tus métricas.",
      ],
      links: [
        {
          label: "Sitio responsive",
          href: "/es/blog/adaptivnyy-sayt/",
        },
        {
          label: "Señales de comportamiento",
          href: "/es/blog/povedencheskie-faktory/",
        },
      ],
    },
    {
      title: "Autoauditoría y mejoras rápidas",
      level: 2,
      paras: [
        "Empieza gratis: recorre escenarios como visitante nuevo y escribe un checklist de lo que funciona y lo que irrita. Añade heatmaps y session replay cuando haya tráfico — pero ojos y un teléfono ya pillan la mayoría de bugs obvios.",
        "Arreglos prácticos: el logo enlaza a home; contactos en header y footer como texto copiable; el header tiene búsqueda y un camino rápido a lead si ese es tu canal; menú en árbol sin dropdowns saltarines; en 404 — caminos a secciones clave, no un callejón sin salida.",
        "Por qué importa al negocio: un sitio usable sube la cuota de visitantes que hacen lo que vinieron a hacer. La búsqueda responde a utilidad y comportamiento; la usabilidad amplifica el ROI de SEO y ads, pero no sustituye la prep ni el crecimiento de rankings — la visibilidad en primera página del set de keywords se planifica a lo largo de meses.",
        "Si llevas una tienda online, profundiza en checkout, fichas de producto y filtros en la guía dedicada. Un principio en todas partes: menos fricción, más acciones completadas.",
      ],
      lists: [
        {
          intro: "Mini-checklist de autoauditoría:",
          items: [
            "se ve correcto en navegadores populares",
            "cómodo en un smartphone",
            "contactos hallados en segundos",
            "desde cualquier página — camino a secciones clave",
            "desde 404 puedes volver a catálogo o servicios",
            "lead, compra o llamada sin clics de más",
          ],
        },
      ],
      links: [
        {
          label: "Usabilidad de tienda ecommerce",
          href: "/es/blog/yuzabiliti-internet-magazina/",
        },
        {
          label: "Engagement de usuarios",
          href: "/es/blog/vovlechenie-polzovateley/",
        },
      ],
    },
  ],
  related: [
    "adaptivnyy-sayt",
    "povedencheskie-faktory",
    "yuzabiliti-internet-magazina",
    "vovlechenie-polzovateley",
    "oshibki-internet-magazina",
  ],
};
