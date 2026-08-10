import type { BlogPost } from "../../../data/blog";

/** EN overlay for adaptivnyy-sayt — same structure as RU JSON. */
export const adaptivnyySaytEn: BlogPost = {
  slug: "adaptivnyy-sayt",
  title: "Making a site work across screen sizes: why and how",
  date: "2020-12-08",
  category: "SEO",
  cover: "/images/blog/adaptivnyy-sayt/cover-en.webp",
  excerpt:
    "What a responsive site is, how it differs from a separate mobile version, why it matters for SEO and UX, the build stages, and how to test across screens.",
  lead: [
    "Most visits come from smartphones: people browse the catalog on a phone and often send a lead from there too. A site that floats or needs horizontal scrolling loses both users and quality signals for search.",
    "Below: what screen-size fit means, how responsive differs from a separate m-site, goals for business and SEO, the process, and checks. Layout as a craft is a related article; here the focus is mobile UX.",
  ],
  faq: [
    {
      q: "Are responsive design and a mobile version the same?",
      a: "Not always. Responsive means one URL and markup that adjusts to width. A “mobile version” often means a separate subdomain or template (m.) — less often the default strategy today.",
    },
    {
      q: "Is a viewport meta tag required?",
      a: "Yes for normal phone scaling: meta viewport in `<head>`. Without it the page often renders as a tiny desktop thumbnail.",
    },
    {
      q: "Does responsive design affect SEO?",
      a: "Yes — indirectly and strongly: usability, speed, bounce, mobile-first indexing. A broken mobile view risks visibility and conversion.",
    },
    {
      q: "Is shrinking the desktop layout in CSS enough?",
      a: "No. You need content priority, large tap targets, readable type, usable forms, and sometimes a different block order.",
    },
    {
      q: "Do I need AMP?",
      a: "Not required for most commercial sites. First get responsive and speed right; AMP is a separate choice for narrow cases.",
    },
    {
      q: "How do I check responsive design quickly?",
      a: "DevTools device mode plus real phones, PageSpeed/Lighthouse mobile, and a pass over key templates (home, category, product, form).",
    },
    {
      q: "Do people still build a separate m.site?",
      a: "Sometimes in legacy setups. Downsides: duplicate URLs, redirects, content drift. Prefer responsive on one canonical.",
    },
    {
      q: "Does responsive design mean a fast site?",
      a: "Not automatically. Heavy images and scripts kill mobile UX even with a clean grid. Compress media and cut excess.",
    },
  ],
  sections: [
    {
      title: "What making the site work on mobile means",
      level: 2,
      paras: [
        "Screen-size fit means the layout and UI stay readable and usable on phone, tablet, and desktop. Usually that’s responsive: one URL, CSS media queries or a modern grid, flexible images.",
        "The goal isn’t “fit everything tiny” — it’s to keep the journey: find a service or product → understand the offer → call or send a request without fighting the menu and form.",
      ],
      lists: [
        {
          intro: "Signs of solid responsive design:",
          items: [
            "no pointless horizontal scrolling",
            "text readable without zoom",
            "buttons and links easy to tap",
            "menus and filters open predictably",
            "same content meaning as on desktop",
          ],
        },
      ],
      links: [
        {
          label: "Website layout",
          href: "/en/blog/verstka-saytov/",
        },
      ],
    },
    {
      title: "Why it matters for business and SEO",
      level: 2,
      paras: [
        "Commerce: part of the purchase path starts on mobile. If the product page or form is awkward, the lead goes to a competitor with decent UX.",
        "Search has long judged mobile experience (mobile-first). A slow or broken mobile page hurts crawl and behavior more than “one more keyword in H1.”",
      ],
      lists: [
        {
          intro: "Goals of responsive design:",
          items: [
            "don’t lose phone traffic",
            "keep conversion on a small screen",
            "simplify maintaining one template",
            "meet mobile-first indexing expectations",
          ],
        },
      ],
      links: [
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "Responsive or a separate mobile version",
      level: 2,
      paras: [
        "Responsive site: one address; content and SEO signals don’t multiply. A separate mobile version (often `m.`) means a second template and drift risk — different copy, forgotten noindex, redirect chains.",
        "A separate m. rarely makes sense (heavy legacy, special apps). For a new project and most CMS setups, use responsive plus lighter blocks if needed — not a second site.",
      ],
      lists: [
        {
          intro: "Responsive:",
          items: [
            "one canonical URL",
            "simpler analytics and goals",
            "fewer duplicates",
            "one content-edit loop",
          ],
        },
        {
          intro: "Separate m.:",
          items: [
            "needs merging and careful redirects",
            "easy content drift",
            "double template maintenance",
            "higher risk of technical SEO mistakes",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "If you already have m. — audit first: same meaning, correct redirects and canonical. Often it’s better to collapse to one responsive domain.",
        },
      ],
      links: [
        {
          label: "Duplicate pages",
          href: "/en/blog/dubli-stranits/",
        },
      ],
    },
    {
      title: "How teams build responsive in practice",
      level: 2,
      paras: [
        "Start with priority templates: home, key landings, catalog, product, cart/form, blog. Set breakpoints, rebuild grid, type, spacing, nav (a burger isn’t a dump of the whole desktop menu).",
        "Images — srcset/sizes, compression, don’t load desktop 4K on 360px. Tables and wide blocks — container scroll or a simplified view without breaking the whole layout.",
      ],
      lists: [
        {
          intro: "Typical process:",
          items: [
            "viewport and base grid",
            "mobile menu and header",
            "content blocks and CTAs",
            "forms and clickable phone",
            "media and fonts",
            "desktop regression after edits",
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
      title: "Benefits of solid responsive design",
      level: 2,
      paras: [
        "One site is easier for marketing and engineering. Ads and SEO point to the same URLs. Users don’t jump between a “full” and a “lite” version with different pricing.",
        "For the team, fewer surprises: edit the offer once, check two or three widths — not sync two CMS instances.",
      ],
      lists: [
        {
          intro: "What you gain:",
          items: [
            "conversion from mobile traffic",
            "predictable indexing of one canonical",
            "lower maintenance cost",
            "better Core Web Vitals when weight is optimized",
          ],
        },
      ],
    },
    {
      title: "How to test across screens",
      level: 2,
      paras: [
        "Don’t stop at one iPhone in the emulator. Check mid-range Android widths, landscape, real networks (3G/LTE). Test phone taps, input masks, sticky CTAs, and whether chat covers the send button.",
        "Automation: Lighthouse mobile, a crawler with a mobile user-agent if needed, screenshot review of key URLs after release. After a CMS theme change — full template pass again.",
      ],
      lists: [
        {
          intro: "Acceptance checklist:",
          items: [
            "home / category / product / form",
            "menu and search",
            "no clipped text or overlaps",
            "acceptable mobile speed",
            "legal links and consents tappable",
            "retargeting/chat don’t break UX",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Calling responsive done because “DevTools looks like a phone.” A real finger and a real form keyboard are a required second pass.",
        },
      ],
      links: [
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
  ],
  related: [
    "verstka-saytov",
    "optimizatsiya-konversii",
    "tehnicheskiy-seo-audit",
    "lending",
    "forma-obratnoy-svyazi",
  ],
};

/** ES overlay for adaptivnyy-sayt — same structure as RU JSON / EN. */
export const adaptivnyySaytEs: BlogPost = {
  slug: "adaptivnyy-sayt",
  title: "Hacer que el sitio funcione en todos los tamaños de pantalla: por qué y cómo",
  date: "2020-12-08",
  category: "SEO",
  cover: "/images/blog/adaptivnyy-sayt/cover-es.webp",
  excerpt:
    "Qué es un sitio responsive, en qué se diferencia de una versión móvil aparte, por qué importa para SEO y UX, las etapas de construcción y cómo probarlo en distintas pantallas.",
  lead: [
    "La mayoría de las visitas llegan desde smartphones: la gente mira el catálogo en el teléfono y a menudo envía el lead desde ahí. Un sitio que «flota» o pide scroll horizontal pierde usuarios y señales de calidad para la búsqueda.",
    "Abajo: qué significa encajar en el tamaño de pantalla, en qué se diferencia responsive de un m-site aparte, objetivos para negocio y SEO, el proceso y los checks. El layout como oficio es un artículo hermano; aquí el foco es la UX móvil.",
  ],
  faq: [
    {
      q: "¿Diseño responsive y versión móvil son lo mismo?",
      a: "No siempre. Responsive es una URL y un markup que se ajusta al ancho. Una «versión móvil» a menudo es un subdominio o plantilla aparte (m.) — hoy menos a menudo la estrategia por defecto.",
    },
    {
      q: "¿Es obligatorio el meta viewport?",
      a: "Sí para un escalado normal en el teléfono: meta viewport en `<head>`. Sin él la página suele renderizarse como una miniatura de desktop.",
    },
    {
      q: "¿El diseño responsive afecta al SEO?",
      a: "Sí — de forma indirecta y fuerte: usabilidad, velocidad, bounce, indexación mobile-first. Una vista móvil rota arriesga visibilidad y conversión.",
    },
    {
      q: "¿Basta encoger el layout de desktop en CSS?",
      a: "No. Hace falta prioridad de contenido, targets táctiles grandes, tipografía legible, formularios usables y a veces otro orden de bloques.",
    },
    {
      q: "¿Necesito AMP?",
      a: "No es obligatorio para la mayoría de sitios comerciales. Primero deja bien responsive y velocidad; AMP es una elección aparte para casos estrechos.",
    },
    {
      q: "¿Cómo compruebo el responsive rápido?",
      a: "Modo dispositivo de DevTools más teléfonos reales, PageSpeed/Lighthouse mobile y un pase por plantillas clave (home, categoría, producto, formulario).",
    },
    {
      q: "¿Todavía se construye un m.site aparte?",
      a: "A veces en setups legacy. Inconvenientes: URLs duplicadas, redirects, deriva de contenido. Prefiere responsive en un canónico.",
    },
    {
      q: "¿Responsive significa un sitio rápido?",
      a: "No automáticamente. Imágenes y scripts pesados matan la UX móvil aunque la grid esté limpia. Comprime media y corta el exceso.",
    },
  ],
  sections: [
    {
      title: "Qué significa que el sitio funcione en móvil",
      level: 2,
      paras: [
        "Encajar en el tamaño de pantalla significa que layout y UI siguen legibles y usables en teléfono, tablet y desktop. Suele ser responsive: una URL, media queries CSS o una grid moderna, imágenes flexibles.",
        "El objetivo no es «meterlo todo pequeñito» — es mantener el viaje: encontrar un servicio o producto → entender la oferta → llamar o enviar la solicitud sin pelear con el menú y el formulario.",
      ],
      lists: [
        {
          intro: "Señales de un responsive sólido:",
          items: [
            "sin scroll horizontal inútil",
            "texto legible sin zoom",
            "botones y enlaces fáciles de tocar",
            "menús y filtros que abren de forma predecible",
            "el mismo sentido de contenido que en desktop",
          ],
        },
      ],
      links: [
        {
          label: "Maquetación de sitios",
          href: "/es/blog/verstka-saytov/",
        },
      ],
    },
    {
      title: "Por qué importa para el negocio y el SEO",
      level: 2,
      paras: [
        "Comercio: parte del camino de compra empieza en móvil. Si la ficha de producto o el formulario son incómodos, el lead se va al competidor con UX decente.",
        "La búsqueda lleva tiempo juzgando la experiencia móvil (mobile-first). Una página móvil lenta o rota duele más al crawl y al comportamiento que «una keyword más en el H1».",
      ],
      lists: [
        {
          intro: "Objetivos del diseño responsive:",
          items: [
            "no perder tráfico de teléfono",
            "mantener la conversión en pantalla pequeña",
            "simplificar el mantenimiento de una plantilla",
            "cumplir expectativas de indexación mobile-first",
          ],
        },
      ],
      links: [
        {
          label: "Optimización de conversión",
          href: "/es/blog/optimizatsiya-konversii/",
        },
      ],
    },
    {
      title: "Responsive o una versión móvil aparte",
      level: 2,
      paras: [
        "Sitio responsive: una dirección; contenido y señales SEO no se multiplican. Una versión móvil aparte (a menudo `m.`) implica segunda plantilla y riesgo de deriva — copy distinto, noindex olvidado, cadenas de redirect.",
        "Un m. aparte rara vez tiene sentido (legacy pesado, apps especiales). Para un proyecto nuevo y la mayoría de CMS, usa responsive más bloques más ligeros si hace falta — no un segundo sitio.",
      ],
      lists: [
        {
          intro: "Responsive:",
          items: [
            "una URL canónica",
            "analytics y goals más simples",
            "menos duplicados",
            "un solo ciclo de edición de contenido",
          ],
        },
        {
          intro: "m. aparte:",
          items: [
            "hace falta unificar y redirects cuidadosos",
            "fácil deriva de contenido",
            "doble mantenimiento de plantillas",
            "más riesgo de errores SEO técnicos",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "Si ya tienes m. — audita primero: mismo sentido, redirects y canonical correctos. A menudo conviene colapsar a un dominio responsive.",
        },
      ],
      links: [
        {
          label: "Páginas duplicadas",
          href: "/es/blog/dubli-stranits/",
        },
      ],
    },
    {
      title: "Cómo construyen responsive los equipos en la práctica",
      level: 2,
      paras: [
        "Empieza por plantillas prioritarias: home, landings clave, catálogo, producto, carrito/formulario, blog. Fija breakpoints, rehace grid, tipografía, spacing, nav (un burger no es un vertedero de todo el menú desktop).",
        "Imágenes — srcset/sizes, compresión, no cargues 4K de desktop en 360px. Tablas y bloques anchos — scroll del contenedor o una vista simplificada sin romper todo el layout.",
      ],
      lists: [
        {
          intro: "Proceso típico:",
          items: [
            "viewport y grid base",
            "menú móvil y header",
            "bloques de contenido y CTAs",
            "formularios y teléfono clicable",
            "media y fuentes",
            "regresión desktop tras los cambios",
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
      title: "Beneficios de un responsive sólido",
      level: 2,
      paras: [
        "Un solo sitio es más fácil para marketing e ingeniería. Ads y SEO apuntan a las mismas URLs. Los usuarios no saltan entre una versión «completa» y una «lite» con precios distintos.",
        "Para el equipo, menos sorpresas: editas la oferta una vez, revisas dos o tres anchos — no sincronizas dos instancias de CMS.",
      ],
      lists: [
        {
          intro: "Qué ganas:",
          items: [
            "conversión del tráfico móvil",
            "indexación predecible de un canónico",
            "menor coste de mantenimiento",
            "mejores Core Web Vitals cuando se optimiza el peso",
          ],
        },
      ],
    },
    {
      title: "Cómo probar en distintas pantallas",
      level: 2,
      paras: [
        "No te quedes en un iPhone del emulador. Revisa anchos de Android de gama media, landscape, redes reales (3G/LTE). Prueba toques, máscaras de input, CTAs sticky y si el chat tapa el botón de enviar.",
        "Automatización: Lighthouse mobile, un crawler con user-agent móvil si hace falta, revisión de screenshots de URLs clave tras el release. Tras cambiar el theme del CMS — otra pasada completa de plantillas.",
      ],
      lists: [
        {
          intro: "Checklist de aceptación:",
          items: [
            "home / categoría / producto / formulario",
            "menú y búsqueda",
            "sin texto cortado ni solapamientos",
            "velocidad móvil aceptable",
            "enlaces legales y consentimientos tocables",
            "retargeting/chat no rompen la UX",
          ],
        },
      ],
      notes: [
        {
          title: "Error habitual",
          kind: "tip",
          text: "Dar por hecho el responsive porque «DevTools se ve como un teléfono». Un dedo real y un teclado real del formulario son un segundo pase obligatorio.",
        },
      ],
      links: [
        {
          label: "Auditoría SEO técnica",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
  ],
  related: [
    "verstka-saytov",
    "optimizatsiya-konversii",
    "tehnicheskiy-seo-audit",
    "lending",
    "forma-obratnoy-svyazi",
  ],
};
