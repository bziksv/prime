import type { BlogPost } from "../../../data/blog";

/** EN overlay for zashchita-kontenta — same structure as RU JSON. */
export const zashchitaKontentaEn: BlogPost = {
  slug: "zashchita-kontenta",
  title: "How to protect website text content from copying",
  date: "2019-12-21",
  category: "Content marketing",
  cover: "/images/blog/zashchita-kontenta/cover-en.webp",
  excerpt:
    "Text plagiarism: why it hurts, how to monitor copies, what to do after theft, and why disabling right-click barely helps — without cultish outdated link-score myths.",
  lead: [
    "Unique text on the open web can always be copied. You can’t lock that off completely, but you can prove authorship faster, spot mirrors sooner, and act under platform rules and the law.",
    "Below: plagiarism risks, measures that work, and steps after theft. Protection from scraper bots is a separate topic; uniqueness checks when you order copy are too.",
  ],
  faq: [
    {
      q: "Is disabling right-click solid protection?",
      a: "Weak: people copy from source, mobile gestures, screenshots. It also hurts UX and accessibility. Don’t make it the centerpiece.",
    },
    {
      q: "Will search always keep traffic with the original?",
      a: "Often yes if the original is stronger on signals. But disputes and duplicates happen — monitor and report copies.",
    },
    {
      q: "Do I need Copyscape?",
      a: "As one monitoring tool — yes. Also search by unique phrases, alerts, and webmaster / Search Console reports.",
    },
    {
      q: "What if my text was copied?",
      a: "Record date/URL, ask the owner/host to remove it, then platform complaint forms and a lawyer if needed. Panic and “rewrite everything at once” aren’t always required.",
    },
    {
      q: "Do hidden CSS links inside stolen text help?",
      a: "Unreliable and dubious. Prefer clear copyright, monitoring, and official complaint channels.",
    },
    {
      q: "How does this relate to scraping protection?",
      a: "Scraping is mass bot harvest. Here — plagiarism by people/sites. You often need both layers.",
    },
  ],
  sections: [
    {
      title: "Why plagiarism hurts",
      level: 2,
      paras: [
        "Duplicates muddy snippets and brand: readers see your wording somewhere else.",
        "Young sites with thin link profiles suffer more when a copy sits on a more visible domain. A strong original more often keeps priority — but not “automatically forever.”",
      ],
    },
    {
      title: "What actually helps",
      level: 2,
      paras: [
        "Publication proof: date on the site, sitemap, web archive, source files you keep.",
        "Monitoring copies via unique phrases and duplicate-search tools.",
        "Clear copyright and contacts for the rights holder.",
        "Complaints to the host / search engines under their procedures if removal is refused.",
        "A strong original: updates, links, brand — easier to prove you were first.",
      ],
      lists: [
        {
          intro: "Weak “protections”:",
          items: [
            "only disable right-click / block selection",
            "betting on one WP plugin “forever”",
            "ignoring copies “until traffic drops”",
          ],
        },
      ],
      links: [
        {
          label: "Scraping protection",
          href: "/en/blog/zashchita-ot-parsinga/",
        },
        {
          label: "Uniqueness checks",
          href: "/en/blog/proverka-unikalnosti/",
        },
      ],
    },
    {
      title: "If the text was already stolen",
      level: 2,
      paras: [
        "Collect evidence: your dated URL, the copy, screenshots, correspondence.",
        "Start with a polite removal request. Then host and search complaint forms. Court — when damages and proof justify the cost.",
        "Sometimes removal is enough; “rewrite the original out of fear” is a last resort, not the default.",
      ],
      notes: [
        {
          title: "Lawyer",
          text: "Claim wording and notarization depend on jurisdiction. This is informational, not a substitute for advice.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "There is no perfect technical lock.",
        "Monitoring + evidence + complaint process beat right-click tricks.",
        "Scraping and plagiarism are different threats.",
      ],
    },
  ],
  closing: [
    "Once a month, run 3–5 strong articles through search on a rare phrase from the text — you’ll find copies faster than waiting for a traffic dip.",
  ],
  related: [
    "zashchita-ot-parsinga",
    "proverka-unikalnosti",
    "seo-kopirayting",
    "korporativnyy-blog",
    "tehnicheskiy-seo-audit",
    "rss",
  ],
};

/** ES overlay for zashchita-kontenta — same structure as RU JSON. */
export const zashchitaKontentaEs: BlogPost = {
  slug: "zashchita-kontenta",
  title: "Cómo proteger el texto del sitio frente a la copia",
  date: "2019-12-21",
  category: "Content marketing",
  cover: "/images/blog/zashchita-kontenta/cover.webp",
  excerpt:
    "Plagio de texto: por qué hace daño, cómo monitorizar copias, qué hacer tras el robo y por qué desactivar el clic derecho apenas ayuda — sin mitos cultistas de link-score obsoletos.",
  lead: [
    "Un texto único en la web abierta siempre se puede copiar. No se puede cerrar del todo, pero sí probar autoría más rápido, detectar mirrors antes y actuar bajo las reglas de las plataformas y la ley.",
    "Abajo: riesgos de plagio, medidas que funcionan y pasos tras el robo. La protección frente a bots scraper es otro tema; los chequeos de unicidad al encargar copy también.",
  ],
  faq: [
    {
      q: "¿Desactivar el clic derecho es protección sólida?",
      a: "Débil: la gente copia desde el source, gestos en móvil, capturas. También daña UX y accesibilidad. No lo pongas en el centro.",
    },
    {
      q: "¿La búsqueda siempre deja el tráfico con el original?",
      a: "A menudo sí si el original es más fuerte en señales. Pero hay disputas y duplicados — monitoriza y reporta las copias.",
    },
    {
      q: "¿Hace falta Copyscape?",
      a: "Como una tool de monitoreo — sí. También búsqueda por frases únicas, alerts e informes de webmaster / Search Console.",
    },
    {
      q: "¿Y si ya copiaron mi texto?",
      a: "Registra fecha/URL, pide al owner/host que lo quite, luego formularios de denuncia de la plataforma y un abogado si hace falta. El pánico y «reescribirlo todo de golpe» no siempre son necesarios.",
    },
    {
      q: "¿Ayudan enlaces CSS ocultos dentro del texto robado?",
      a: "Poco fiables y dudosos. Mejor copyright claro, monitoreo y canales oficiales de denuncia.",
    },
    {
      q: "¿Cómo se relaciona con la protección frente a scraping?",
      a: "El scraping es cosecha masiva por bots. Aquí — plagio por personas/sitios. A menudo hacen falta ambas capas.",
    },
  ],
  sections: [
    {
      title: "Por qué el plagio hace daño",
      level: 2,
      paras: [
        "Los duplicados ensucian snippets y marca: el lector ve tu wording en otro sitio.",
        "Los sitios jóvenes con perfil de enlaces fino sufren más cuando la copia vive en un dominio más visible. Un original fuerte suele conservar prioridad — pero no «en automático para siempre».",
      ],
    },
    {
      title: "Qué ayuda de verdad",
      level: 2,
      paras: [
        "Prueba de publicación: fecha en el sitio, sitemap, archivo web, fuentes que guardas.",
        "Monitoreo de copias vía frases únicas y tools de búsqueda de duplicados.",
        "Copyright claro y contactos del titular de derechos.",
        "Denuncias al host / buscadores bajo sus procedimientos si se niegan a quitarlo.",
        "Un original fuerte: updates, enlaces, marca — más fácil probar que fuiste primero.",
      ],
      lists: [
        {
          intro: "«Protecciones» flojas:",
          items: [
            "solo desactivar clic derecho / bloquear selección",
            "apostar a un plugin de WP «para siempre»",
            "ignorar copias «hasta que caiga el tráfico»",
          ],
        },
      ],
      links: [
        {
          label: "Protección frente a scraping",
          href: "/es/blog/zashchita-ot-parsinga/",
        },
        {
          label: "Chequeos de unicidad",
          href: "/es/blog/proverka-unikalnosti/",
        },
      ],
    },
    {
      title: "Si el texto ya fue robado",
      level: 2,
      paras: [
        "Reúne evidencia: tu URL con fecha, la copia, capturas, correspondencia.",
        "Empieza con una petición educada de retirada. Luego formularios de host y buscador. Juicio — cuando daños y prueba justifiquen el coste.",
        "A veces basta la retirada; «reescribir el original por miedo» es último recurso, no el default.",
      ],
      notes: [
        {
          title: "Abogado",
          text: "El wording de la reclamación y la notarización dependen de la jurisdicción. Esto es informativo, no sustituye un consejo.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Conclusiones",
      level: 2,
      paras: [
        "No hay un candado técnico perfecto.",
        "Monitoreo + evidencia + proceso de denuncia ganan a trucos de clic derecho.",
        "Scraping y plagio son amenazas distintas.",
      ],
    },
  ],
  closing: [
    "Una vez al mes, pasa 3–5 artículos fuertes por búsqueda con una frase rara del texto — encontrarás copias antes de esperar un bajón de tráfico.",
  ],
  related: [
    "zashchita-ot-parsinga",
    "proverka-unikalnosti",
    "seo-kopirayting",
    "korporativnyy-blog",
    "tehnicheskiy-seo-audit",
    "rss",
  ],
};
