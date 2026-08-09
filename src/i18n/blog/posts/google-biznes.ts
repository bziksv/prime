import type { BlogPost } from "../../../data/blog";

/** EN overlay for google-biznes — same structure as RU JSON. */
export const googleBiznesEn: BlogPost = {
  slug: "google-biznes",
  title: "Business listing on Google Maps: how to add your business",
  date: "2020-12-24",
  category: "SEO",
  cover: "/images/blog/google-biznes/cover-en.webp",
  excerpt:
    "How to appear in Google Maps and the local pack: Google Business Profile, verification, data, photos, and reviews — without outdated “Google My Business 2020” screenshots.",
  lead: [
    "Local Google search often shows a map and business cards next to the regular results. To show up for “service + city” and on the map, you need a correct company profile — today that means Google Business Profile (older UIs were called Google My Business).",
    "Below: the launch flow — account, create profile, verify, fill out, and maintain the listing. Menu names change — follow Google Help and the profile dashboard, not screenshots from old articles.",
  ],
  faq: [
    {
      q: "Are Google My Business and Business Profile the same thing?",
      a: "In essence yes: the name and UI evolved for the Maps / local-pack card. Same idea — a managed business profile.",
    },
    {
      q: "Do you need a website for the listing?",
      a: "Preferably: a site link builds trust and a path to the lead. You can sometimes create a profile without a site, but in many niches site + map work stronger together.",
    },
    {
      q: "How is the profile verified?",
      a: "Methods depend on business type and region: postcard, phone, video, in-product request, and others. The current list appears during profile creation.",
    },
    {
      q: "Can one profile cover several addresses?",
      a: "Usually each physical location needs its own profile (or a location group per Google’s rules). Don’t add addresses that aren’t yours.",
    },
    {
      q: "Does the profile affect regular site SEO?",
      a: "It’s a separate local layer: map, reviews, NAP. It indirectly helps awareness and traffic; it doesn’t replace site SEO.",
    },
    {
      q: "What is NAP?",
      a: "Name, Address, Phone — consistent name, address, and phone on the site, in the profile, and in directories. Mismatches hurt trust.",
    },
    {
      q: "Should I ask customers for reviews?",
      a: "Yes — honest reviews and replies matter in the local pack. Buying ratings breaks the rules and is risky.",
    },
    {
      q: "Should I use Yandex directories instead of Google?",
      a: "In Russia you often need both layers for different audiences. They’re different dashboards; one “export” doesn’t replace NAP consistency.",
    },
  ],
  sections: [
    {
      title: "Why a business needs a map listing",
      level: 2,
      paras: [
        "For queries with local intent Google shows a map pack: pins, rating, hours, directions. Without a profile you only compete as websites — and lose people who choose “nearby / on the map.”",
        "The card also helps after the click: call, directions, site visit, messenger — if those actions are enabled and data is current.",
      ],
      lists: [
        {
          intro: "Especially useful for:",
          items: [
            "offline locations (cafés, clinics, services)",
            "field or on-site services with a service area",
            "B2C with “near me” queries",
            "chains with several branches (per Google’s rules)",
          ],
        },
      ],
    },
    {
      title: "Account and creating a profile",
      level: 2,
      paras: [
        "You need a Google account — preferably a company one shared with several owners via manager roles, not a personal login of someone who will leave.",
        "When you create a profile: use the name as on the storefront, pick a category, add an address or service area, and contacts. Don’t stuff keywords into the name (“Best iPhone repair cheap”) — that breaks the rules and can lead to limits.",
      ],
      lists: [
        {
          intro: "Before verification:",
          items: [
            "check whether a listing for your place already exists (claim it)",
            "match NAP with the site",
            "pick primary and secondary categories honestly",
            "store access in the company password manager",
          ],
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Creation UI and menu items update. If the path doesn’t match a 2020 article — start from Maps / “Business Profile” search / Google Help.",
        },
      ],
    },
    {
      title: "Verifying the business",
      level: 2,
      paras: [
        "Until the profile is verified, full management and display are limited. Google offers a verification method available for your case — follow the account steps and don’t buy “gray verification” from middlemen.",
        "After verification keep the listing “open” with correct hours: mismatch with reality hits reviews and trust faster than an imperfect SEO description.",
      ],
      lists: [
        {
          intro: "Practice:",
          items: [
            "don’t ignore verification emails/notifications",
            "log verification date and owner",
            "on legal entity/address change, update per the rules — don’t spawn a duplicate listing without need",
          ],
        },
      ],
    },
    {
      title: "What to fill after verification",
      level: 2,
      paras: [
        "Description without stuffing, services/products, attributes (accessibility, payment), hours, phone, website, action button. Photos: facade, interior, team, work — your own, not a media-library filler.",
        "Match the site: same name, address, phone as in the footer and contacts. UTM on the site link is optional, for analytics of map clicks.",
      ],
      lists: [
        {
          intro: "Minimum for a strong listing:",
          items: [
            "NAP without typos",
            "current hours and holidays",
            "categories that match reality",
            "site / messenger / call",
            "10+ decent photos",
            "replies to reviews",
          ],
        },
      ],
      links: [
        {
          label: "Young site and trust",
          href: "/en/blog/molodoy-sayt/",
        },
      ],
    },
    {
      title: "Reviews, posts, and maintenance",
      level: 2,
      paras: [
        "Ask real clients for reviews through honest channels. Reply to negatives calmly and factually. Rating fraud leads to filters and losing the listing.",
        "If updates/posts are available in the profile — use them for promos and news without spam. The main thing is fresh data: a move, new hours, or phone change should hit the listing the same day.",
      ],
      lists: [
        {
          intro: "Regularly:",
          items: [
            "monitor new reviews",
            "check NAP quarterly",
            "fresh photos every few months",
            "audit employee access rights",
          ],
        },
      ],
    },
    {
      title: "Common mistakes and the site link",
      level: 2,
      paras: [
        "Duplicate listings for one address, keywords in the name, wrong category, closed hours while the shop is open, different phones on the site and Maps — classics of local-pack drops.",
        "On the site make a contacts page with the same NAP, a map (if it fits), and organization markup when possible. Local site SEO and the listing reinforce each other — they don’t replace each other.",
      ],
      lists: [
        {
          intro: "Don’t:",
          items: [
            "buy “100 reviews tomorrow”",
            "create a second listing “for SEO”",
            "list a coworking address if you aren’t there",
            "forget to revoke access from former contractors",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "In Russia, plan Yandex Business / Directory in parallel — map audiences differ. NAP consistency across layers beats racing for one platform.",
        },
      ],
      links: [
        {
          label: "Promoting an online store",
          href: "/en/blog/prodvizhenie-internet-magazina/",
        },
      ],
    },
  ],
  related: [
    "molodoy-sayt",
    "optimizatsiya-stranitsy",
    "regionalnoe-seo",
    "forma-obratnoy-svyazi",
    "prodvizhenie-internet-magazina",
  ],
};

/** ES overlay for google-biznes — same structure as RU JSON / EN. */
export const googleBiznesEs: BlogPost = {
  slug: "google-biznes",
  title: "Ficha de negocio en Google Maps: cómo añadir tu empresa",
  date: "2020-12-24",
  category: "SEO",
  cover: "/images/blog/google-biznes/cover.webp",
  excerpt:
    "Cómo aparecer en Google Maps y en el local pack: Google Business Profile, verificación, datos, fotos y reseñas — sin capturas obsoletas de «Google My Business 2020».",
  lead: [
    "La búsqueda local de Google a menudo muestra un mapa y fichas de negocio junto a los resultados normales. Para aparecer en «servicio + ciudad» y en el mapa, hace falta un perfil de empresa correcto — hoy eso es Google Business Profile (las UIs más antiguas se llamaban Google My Business).",
    "Abajo: el flujo de lanzamiento — cuenta, crear perfil, verificar, rellenar y mantener la ficha. Los nombres de menú cambian — sigue la Ayuda de Google y el panel del perfil, no capturas de artículos viejos.",
  ],
  faq: [
    {
      q: "¿Google My Business y Business Profile son lo mismo?",
      a: "En esencia sí: el nombre y la UI evolucionaron para la ficha de Maps / local pack. Misma idea — un perfil de negocio gestionado.",
    },
    {
      q: "¿Hace falta un sitio web para la ficha?",
      a: "Preferible: un enlace al sitio genera confianza y un camino al lead. A veces se puede crear un perfil sin sitio, pero en muchos nichos sitio + mapa funcionan más fuertes juntos.",
    },
    {
      q: "¿Cómo se verifica el perfil?",
      a: "Los métodos dependen del tipo de negocio y la región: postal, teléfono, vídeo, solicitud in-product y otros. La lista actual aparece al crear el perfil.",
    },
    {
      q: "¿Un perfil puede cubrir varias direcciones?",
      a: "Normalmente cada ubicación física necesita su propio perfil (o un grupo de ubicaciones según las reglas de Google). No añadas direcciones que no sean tuyas.",
    },
    {
      q: "¿El perfil afecta al SEO normal del sitio?",
      a: "Es una capa local aparte: mapa, reseñas, NAP. Ayuda de forma indirecta a awareness y tráfico; no sustituye el SEO del sitio.",
    },
    {
      q: "¿Qué es NAP?",
      a: "Name, Address, Phone — nombre, dirección y teléfono coherentes en el sitio, en el perfil y en directorios. Los desajustes dañan la confianza.",
    },
    {
      q: "¿Debo pedir reseñas a los clientes?",
      a: "Sí — reseñas honestas y respuestas importan en el local pack. Comprar valoraciones rompe las reglas y es arriesgado.",
    },
    {
      q: "¿Debo usar directorios de Yandex en vez de Google?",
      a: "En Rusia a menudo hacen falta ambas capas para audiencias distintas. Son paneles distintos; un «export» no sustituye la coherencia de NAP.",
    },
  ],
  sections: [
    {
      title: "Por qué un negocio necesita ficha en el mapa",
      level: 2,
      paras: [
        "Para consultas con intent local Google muestra un map pack: pines, valoración, horario, cómo llegar. Sin perfil solo compites como sitios web — y pierdes a quien elige «cerca / en el mapa».",
        "La ficha también ayuda tras el clic: llamada, indicaciones, visita al sitio, messenger — si esas acciones están activas y los datos al día.",
      ],
      lists: [
        {
          intro: "Especialmente útil para:",
          items: [
            "ubicaciones offline (cafés, clínicas, servicios)",
            "servicios a domicilio o in situ con zona de servicio",
            "B2C con consultas «cerca de mí»",
            "cadenas con varias sucursales (según las reglas de Google)",
          ],
        },
      ],
    },
    {
      title: "Cuenta y creación del perfil",
      level: 2,
      paras: [
        "Hace falta una cuenta de Google — preferible una de empresa compartida con varios owners vía roles de manager, no el login personal de alguien que se irá.",
        "Al crear el perfil: usa el nombre como en la vitrina, elige una categoría, añade dirección o zona de servicio y contactos. No metas keywords en el nombre («Mejor reparación iPhone barata») — rompe las reglas y puede llevar a límites.",
      ],
      lists: [
        {
          intro: "Antes de la verificación:",
          items: [
            "comprobar si ya existe una ficha de tu lugar (reclámala)",
            "alinear NAP con el sitio",
            "elegir categorías primaria y secundaria con honestidad",
            "guardar el acceso en el gestor de contraseñas de la empresa",
          ],
        },
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "La UI de creación y los ítems de menú se actualizan. Si el camino no coincide con un artículo de 2020 — empieza desde Maps / búsqueda de «Business Profile» / Ayuda de Google.",
        },
      ],
    },
    {
      title: "Verificar el negocio",
      level: 2,
      paras: [
        "Hasta que el perfil esté verificado, la gestión completa y la visualización están limitadas. Google ofrece un método de verificación disponible para tu caso — sigue los pasos de la cuenta y no compres «verificación gris» a intermediarios.",
        "Tras la verificación mantén la ficha «abierta» con horario correcto: un desajuste con la realidad golpea reseñas y confianza más rápido que una descripción SEO imperfecta.",
      ],
      lists: [
        {
          intro: "Práctica:",
          items: [
            "no ignores emails/notificaciones de verificación",
            "registra fecha de verificación y owner",
            "si cambia la entidad legal/dirección, actualiza según las reglas — no generes una ficha duplicada sin necesidad",
          ],
        },
      ],
    },
    {
      title: "Qué rellenar tras la verificación",
      level: 2,
      paras: [
        "Descripción sin stuffing, servicios/productos, atributos (accesibilidad, pago), horario, teléfono, sitio web, botón de acción. Fotos: fachada, interior, equipo, trabajo — tuyas, no relleno de una media library.",
        "Alinea con el sitio: mismo nombre, dirección y teléfono que en el footer y contactos. UTM en el enlace al sitio es opcional, para analítica de clics desde el mapa.",
      ],
      lists: [
        {
          intro: "Mínimo para una ficha fuerte:",
          items: [
            "NAP sin typos",
            "horario y festivos actuales",
            "categorías que coincidan con la realidad",
            "sitio / messenger / llamada",
            "10+ fotos decentes",
            "respuestas a reseñas",
          ],
        },
      ],
      links: [
        {
          label: "Sitio joven y confianza",
          href: "/es/blog/molodoy-sayt/",
        },
      ],
    },
    {
      title: "Reseñas, posts y mantenimiento",
      level: 2,
      paras: [
        "Pide reseñas a clientes reales por canales honestos. Responde a negativos con calma y hechos. El fraude de valoraciones lleva a filtros y a perder la ficha.",
        "Si hay updates/posts disponibles en el perfil — úsalos para promos y noticias sin spam. Lo principal son datos frescos: un traslado, nuevo horario o cambio de teléfono debería llegar a la ficha el mismo día.",
      ],
      lists: [
        {
          intro: "Con regularidad:",
          items: [
            "monitorizar reseñas nuevas",
            "revisar NAP cada trimestre",
            "fotos frescas cada pocos meses",
            "auditar derechos de acceso de empleados",
          ],
        },
      ],
    },
    {
      title: "Errores frecuentes y el vínculo con el sitio",
      level: 2,
      paras: [
        "Fichas duplicadas para una dirección, keywords en el nombre, categoría incorrecta, horario cerrado mientras la tienda está abierta, teléfonos distintos en sitio y Maps — clásicos de caídas en el local pack.",
        "En el sitio haz una página de contactos con el mismo NAP, un mapa (si encaja) y markup de organización cuando sea posible. El SEO local del sitio y la ficha se refuerzan — no se sustituyen.",
      ],
      lists: [
        {
          intro: "No hagas:",
          items: [
            "comprar «100 reseñas mañana»",
            "crear una segunda ficha «para SEO»",
            "poner la dirección de un coworking si no estás ahí",
            "olvidar revocar el acceso a contratistas antiguos",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "En Rusia, planifica Yandex Business / Directory en paralelo — las audiencias del mapa difieren. La coherencia de NAP entre capas gana a correr por una sola plataforma.",
        },
      ],
      links: [
        {
          label: "Promoción de una tienda online",
          href: "/es/blog/prodvizhenie-internet-magazina/",
        },
      ],
    },
  ],
  related: [
    "molodoy-sayt",
    "optimizatsiya-stranitsy",
    "regionalnoe-seo",
    "forma-obratnoy-svyazi",
    "prodvizhenie-internet-magazina",
  ],
};
