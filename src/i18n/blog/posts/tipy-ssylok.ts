import type { BlogPost } from "../../../data/blog";

/** EN overlay for tipy-ssylok — same structure as RU JSON. */
export const tipySsylokEn: BlogPost = {
  slug: "tipy-ssylok",
  title: "Link types and where to earn them",
  date: "2018-11-13",
  category: "SEO",
  cover: "/images/blog/tipy-ssylok/cover-en.webp",
  excerpt:
    "What backlinks look like and where they come from: natural mentions, media, content, partnerships, communities, directories, dofollow/nofollow, permanent vs temporary — without link farms and bulk spam.",
  lead: [
    "Link building hasn’t been “buy a pack on an exchange and grow in a week” for a long time. Search engines weigh donor quality, natural anchors, and reader value — link farms and mass submissions do more harm than good.",
    "Below: a map of link types and acquisition channels — what still makes sense, where the risk line sits, and how it ties to profile analysis and paid placements. We don’t recycle old “.edu for a scholarship” recipes as a playbook.",
  ],
  faq: [
    {
      q: "How is this different from free links?",
      a: "That article covers sources without a media budget. Here — link types and channels overall, including paid and technical attributes.",
    },
    {
      q: "Is dofollow mandatory?",
      a: "No. Nofollow, sponsored, and ugc still bring traffic and brand. Chasing only dofollow on junk sites is pointless.",
    },
    {
      q: "Are permanent links better than rented ones?",
      a: "Often yes for durability if the donor is alive. Temporary ones fit tests and campaigns. Site quality matters more than the “permanent” label.",
    },
    {
      q: "Do internal links count?",
      a: "Yes — that’s your own site’s internal linking. External link building doesn’t replace it.",
    },
    {
      q: "Are directories still useful?",
      a: "Narrow industry and local ones — sometimes. Mass auto-submits — almost never.",
    },
    {
      q: "Can I buy links?",
      a: "As advertising — under law and the platform’s rules. For SEO, package schemes carry high risk. More in the buying article.",
    },
    {
      q: "Where should I start?",
      a: "With strong content and natural mentions, then targeted partnerships and PR. Clean junk from the profile first.",
    },
  ],
  sections: [
    {
      title: "Why “just buy” no longer works",
      level: 2,
      paras: [
        "It used to be easy to grow mass via networks and exchanges. Now a relevant donor, a live audience, and a useful context matter — otherwise growth is short-lived or filtered.",
        "Pick channels for the niche and resources: B2B, local business, and media give mentions differently. There’s no universal “N links a day” checklist.",
      ],
      links: [
        {
          label: "Backlink profile analysis",
          href: "/en/blog/ssylochnyy-profil/",
        },
        {
          label: "Buying links: risks",
          href: "/en/blog/pokupka-ssylok/",
        },
      ],
    },
    {
      title: "Natural and content links",
      level: 2,
      paras: [
        "Natural links appear when people cite your work without an “exchange” deal: research, a tool, a strong guide, news.",
        "Formats that get saved and shared work: guides, screencasts, infographics, open data. Aim for value for the donor’s audience — not an anchor for its own sake.",
        "Expert content and guest pieces on live sites sit closer to a durable profile than spam comments.",
      ],
      links: [
        {
          label: "Free links",
          href: "/en/blog/besplatnye-ssylki/",
        },
        {
          label: "Guest post",
          href: "/en/blog/gostevoy-post/",
        },
      ],
    },
    {
      title: "Media, partners, communities, and directories",
      level: 2,
      paras: [
        "Press and industry outlets give reach and trust when there’s a news hook. Partner programs and mutual mentions work when there’s real value for both sides — not a bulk “link for link” scheme.",
        "Niche forums and communities — only honest answers; fake two-account dialogues hurt reputation. Social usually brings traffic and brand more than classic “link weight.”",
        "Industry and local directories can help navigation and NAP. Mass runs across thousands of directories are noise.",
      ],
      lists: [
        {
          intro: "Channels for a link-building map:",
          items: [
            "content and research",
            "media / PR",
            "partners and suppliers",
            "communities in live discussions",
            "narrow directories and maps",
            "targeted paid placements as advertising",
          ],
        },
      ],
      links: [
        {
          label: "Forum links",
          href: "/en/blog/ssylki-na-forumah/",
        },
        {
          label: "Website directories",
          href: "/en/blog/katalogi-saytov/",
        },
      ],
    },
    {
      title: "Internal links and attributes",
      level: 2,
      paras: [
        "Internal linking distributes weight and helps users. It’s often undervalued while teams chase only external backlinks.",
        "Dofollow signals “may be counted”; nofollow, sponsored, and ugc are normal markup for ads and UGC. Don’t break attributes for the myth of “dofollow only.”",
      ],
      links: [
        {
          label: "Internal linking",
          href: "/en/blog/vnutrennyaya-perelinkovka/",
        },
      ],
    },
    {
      title: "Permanent, rented, and the risk zone",
      level: 2,
      paras: [
        "A “permanent” link on a live site beats a temporary one on a drop. Renting a strong placement can bring traffic for a campaign — count it as media, not a forever SEO asset.",
        "Exchange packages, link farms, .edu/.gov “for trust” schemes, and network reciprocal swaps sit in the high-risk zone. If you pay for placement — treat it as advertising and pick the donor like a media site.",
        "Before growing mass, check the current profile: remove what you control that is clearly spam.",
      ],
      links: [
        {
          label: "Link builder",
          href: "/en/blog/linkbilder/",
        },
        {
          label: "Outreach",
          href: "/en/blog/autrich/",
        },
      ],
      notes: [
        {
          title: "Important",
          kind: "tip",
          text: "Exchange names and .edu/.gov “recipes” from 2010s posts aren’t a strategy anymore. Aim for donor quality, advertising law, and white-hat link building.",
        },
      ],
    },
  ],
  closing: [
    "Draft a short map: which link types you already have, which channels are missing, and what you can give the donor’s audience — so link building becomes a plan, not a “buy more” habit.",
  ],
  related: [
    "besplatnye-ssylki",
    "pokupka-ssylok",
    "ssylochnyy-profil",
    "ssylki-na-forumah",
    "linkbilder",
    "autrich",
  ],
};

/** ES overlay for tipy-ssylok — same structure as RU JSON / EN. */
export const tipySsylokEs: BlogPost = {
  slug: "tipy-ssylok",
  title: "Tipos de enlaces y dónde conseguirlos",
  date: "2018-11-13",
  category: "SEO",
  cover: "/images/blog/tipy-ssylok/cover.webp",
  excerpt:
    "Cómo se ven los backlinks y de dónde salen: menciones naturales, medios, contenido, partnerships, comunidades, directorios, dofollow/nofollow, permanentes vs temporales — sin link farms ni spam masivo.",
  lead: [
    "El link building ya no es «compra un paquete en un exchange y crece en una semana» desde hace tiempo. Los buscadores pesan la calidad del donante, anclas naturales y valor para el lector — las link farms y los envíos masivos restan más de lo que suman.",
    "Abajo: un mapa de tipos de enlaces y canales de adquisición — qué sigue teniendo sentido, dónde está la línea de riesgo y cómo se ata al análisis de perfil y a las colocaciones de pago. No reciclamos recetas viejas de «.edu por una beca» como playbook.",
  ],
  faq: [
    {
      q: "¿En qué se diferencia de los enlaces gratis?",
      a: "Ese artículo cubre fuentes sin presupuesto de media. Aquí — tipos de enlaces y canales en general, incluidos atributos de pago y técnicos.",
    },
    {
      q: "¿Dofollow es obligatorio?",
      a: "No. Nofollow, sponsored y ugc siguen trayendo tráfico y marca. Perseguir solo dofollow en sitios basura no tiene sentido.",
    },
    {
      q: "¿Los enlaces permanentes son mejores que los alquilados?",
      a: "A menudo sí por durabilidad si el donante está vivo. Los temporales encajan en tests y campañas. La calidad del sitio pesa más que la etiqueta «permanente».",
    },
    {
      q: "¿Cuentan los enlaces internos?",
      a: "Sí — eso es el enlazado interno de tu propio sitio. El link building externo no lo sustituye.",
    },
    {
      q: "¿Los directorios siguen siendo útiles?",
      a: "Los de nicho e industria y los locales — a veces. Los auto-envíos masivos — casi nunca.",
    },
    {
      q: "¿Puedo comprar enlaces?",
      a: "Como publicidad — bajo la ley y las reglas de la plataforma. Para SEO, los esquemas de paquetes llevan alto riesgo. Más en el artículo de compra.",
    },
    {
      q: "¿Por dónde empiezo?",
      a: "Con contenido fuerte y menciones naturales, luego partnerships y PR dirigidos. Primero limpia la basura del perfil.",
    },
  ],
  sections: [
    {
      title: "Por qué «solo comprar» ya no funciona",
      level: 2,
      paras: [
        "Antes era fácil crecer en masa vía redes y exchanges. Ahora importan un donante relevante, una audiencia viva y un contexto útil — si no, el crecimiento dura poco o se filtra.",
        "Elige canales según nicho y recursos: B2B, negocio local y medios dan menciones de formas distintas. No hay un checklist universal de «N enlaces al día».",
      ],
      links: [
        {
          label: "Análisis del perfil de backlinks",
          href: "/es/blog/ssylochnyy-profil/",
        },
        {
          label: "Comprar enlaces: riesgos",
          href: "/es/blog/pokupka-ssylok/",
        },
      ],
    },
    {
      title: "Enlaces naturales y de contenido",
      level: 2,
      paras: [
        "Los enlaces naturales aparecen cuando la gente cita tu trabajo sin un trato de «exchange»: investigación, una herramienta, una guía fuerte, una noticia.",
        "Funcionan los formatos que se guardan y se comparten: guías, screencasts, infografías, datos abiertos. Apunta a valor para la audiencia del donante — no a un ancla por el ancla.",
        "El contenido experto y las piezas guest en sitios vivos se acercan más a un perfil durable que los comentarios spam.",
      ],
      links: [
        {
          label: "Enlaces gratis",
          href: "/es/blog/besplatnye-ssylki/",
        },
        {
          label: "Guest post",
          href: "/es/blog/gostevoy-post/",
        },
      ],
    },
    {
      title: "Medios, partners, comunidades y directorios",
      level: 2,
      paras: [
        "Prensa y medios de industria dan alcance y confianza cuando hay un gancho de noticia. Los programas de partners y las menciones mutuas funcionan cuando hay valor real para ambos lados — no un esquema masivo de «enlace por enlace».",
        "Foros y comunidades de nicho — solo respuestas honestas; los diálogos falsos con dos cuentas duelen a la reputación. Lo social suele traer tráfico y marca más que el «peso de enlace» clásico.",
        "Los directorios de industria y locales ayudan a la navegación y al NAP. Las corridas masivas por miles de directorios son ruido.",
      ],
      lists: [
        {
          intro: "Canales para un mapa de link building:",
          items: [
            "contenido e investigación",
            "medios / PR",
            "partners y proveedores",
            "comunidades en discusiones vivas",
            "directorios estrechos y mapas",
            "colocaciones de pago dirigidas como publicidad",
          ],
        },
      ],
      links: [
        {
          label: "Enlaces en foros",
          href: "/es/blog/ssylki-na-forumah/",
        },
        {
          label: "Directorios de sitios",
          href: "/es/blog/katalogi-saytov/",
        },
      ],
    },
    {
      title: "Enlaces internos y atributos",
      level: 2,
      paras: [
        "El enlazado interno reparte peso y ayuda a los usuarios. A menudo se infravalora mientras los equipos persiguen solo backlinks externos.",
        "Dofollow señala «puede contarse»; nofollow, sponsored y ugc son markup normal para ads y UGC. No rompas atributos por el mito de «solo dofollow».",
      ],
      links: [
        {
          label: "Enlazado interno",
          href: "/es/blog/vnutrennyaya-perelinkovka/",
        },
      ],
    },
    {
      title: "Permanentes, alquilados y la zona de riesgo",
      level: 2,
      paras: [
        "Un enlace «permanente» en un sitio vivo gana a uno temporal en un drop. Alquilar una colocación fuerte puede traer tráfico para una campaña — cuéntalo como media, no como un activo SEO eterno.",
        "Paquetes de exchange, link farms, esquemas «.edu/.gov por confianza» e intercambios recíprocos en red están en zona de alto riesgo. Si pagas por colocación — trátalo como publicidad y elige el donante como un medio.",
        "Antes de crecer en masa, revisa el perfil actual: quita lo que controles que sea spam claro.",
      ],
      links: [
        {
          label: "Link builder",
          href: "/es/blog/linkbilder/",
        },
        {
          label: "Outreach",
          href: "/es/blog/autrich/",
        },
      ],
      notes: [
        {
          title: "Importante",
          kind: "tip",
          text: "Los nombres de exchanges y las «recetas» .edu/.gov de posts de los 2010 ya no son una estrategia. Apunta a calidad del donante, ley de publicidad y link building white-hat.",
        },
      ],
    },
  ],
  closing: [
    "Arma un mapa corto: qué tipos de enlaces ya tienes, qué canales faltan y qué puedes dar a la audiencia del donante — así el link building pasa a plan, no a hábito de «comprar más».",
  ],
  related: [
    "besplatnye-ssylki",
    "pokupka-ssylok",
    "ssylochnyy-profil",
    "ssylki-na-forumah",
    "linkbilder",
    "autrich",
  ],
};
