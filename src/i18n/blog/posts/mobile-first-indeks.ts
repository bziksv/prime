import type { BlogPost } from "../../../data/blog";

/** EN overlay for mobile-first-indeks — same structure as RU JSON. */
export const mobileFirstIndeksEn: BlogPost = {
  slug: "mobile-first-indeks",
  title: "Google Mobile-First Index: what it is and how to check your site",
  date: "2018-09-18",
  category: "SEO",
  cover: "/images/blog/mobile-first-indeks/cover-en.webp",
  excerpt:
    "What Google’s Mobile-First Index means: why the bot leans on the mobile document, why a stripped m-site hurts, and how to check content parity — without 2018 “transition” panic.",
  lead: [
    "Mobile-First Index is Google’s indexing model where the main reference for understanding a page is the mobile document — what Googlebot Smartphone sees — not the “full” desktop layout.",
    "The shift was announced in 2016–2018; for most sites mobile-first has long been normal. Below: what changed in practice, what to do with responsive vs separate URLs, and what to verify. Mobile SERPs and UX live in the mobile-search article; here the focus is indexing.",
  ],
  faq: [
    {
      q: "Is desktop no longer indexed?",
      a: "URLs still get indexed, but Google builds signals and snippets mainly from the mobile document. A stripped mobile version hurts visibility.",
    },
    {
      q: "Do I need a separate mobile site?",
      a: "No. Prefer responsive on one URL. A separate m. subdomain is legacy with mismatch risks.",
    },
    {
      q: "Is this the same as Mobile-Friendly?",
      a: "No. Friendly is usability. Mobile-first is which document the bot treats as primary for the index.",
    },
    {
      q: "Does Yandex use mobile-first too?",
      a: "Yandex has its own formula with strong mobile weight. Broken smartphone UX is risky in both engines.",
    },
    {
      q: "When should rankings move after mobile fixes?",
      a: "UX and conversion can improve quickly. Competitive-core rankings are planned over 2–6 months of work — not “page one next week.”",
    },
  ],
  sections: [
    {
      title: "Why Google went mobile-first",
      level: 2,
      paras: [
        "Smartphone search share passed desktop by the mid-2010s. Ranking a “pretty PC site” made little sense if users opened a cut mobile copy without text, markup, and CTAs.",
        "Index idea: score what is actually available from a phone. StatCounter 2016 figures from old posts are historical backdrop — not your current report.",
      ],
      links: [
        {
          label: "Mobile search in SEO",
          href: "/en/blog/mobilnyy-poisk/",
        },
      ],
    },
    {
      title: "What changes for your site",
      level: 2,
      paras: [
        "With one responsive URL it’s usually enough that the mobile view delivers the same meaning: text, links, images, structured data. The bot crawls with a smartphone user-agent more often — that is normal.",
        "With separate URLs (m. / dynamic serving) parity is critical: content, title/description in meaning, markup with correct version URLs, crawl access. If mobile is a short storefront and desktop holds the full catalog, the index loses what isn’t on the phone.",
      ],
      tables: [
        {
          caption: "Site type and risk",
          headers: ["Type", "Mobile-first risk", "What to do"],
          rows: [
            [
              "Adaptive / RWD",
              "Low if content is complete",
              "Check UX, speed, forms",
            ],
            [
              "Separate m.",
              "High with cut content",
              "Align meaning or move to one URL",
            ],
            [
              "Desktop only",
              "High",
              "Build proper mobile before scaling SEO",
            ],
          ],
        },
      ],
      notes: [
        {
          title: "A half-empty m-site is worse than no “separate version”",
          text: "One responsive template beats a half-empty m-site the bot may treat as the primary document.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Content, markup, and meta",
      level: 2,
      paras: [
        "Texts and key blocks on mobile should match desktop in meaning — not pixel-perfect, but without cutting the offer, specs, and FAQ “to fit.”",
        "Structured data goes on the version you serve the bot; URLs in markup point to the matching pages. Title and description stay comparable in meaning when versions are split.",
      ],
      lists: [
        {
          intro: "Quick parity check:",
          items: [
            "main text and H1 on smartphone",
            "internal links not buried in a desktop-only menu",
            "images with meaningful alt",
            "JSON-LD / microdata not desktop-only",
            "forms and phone numbers tappable",
          ],
        },
      ],
      links: [
        {
          label: "Responsive site",
          href: "/en/blog/adaptivnyy-sayt/",
        },
        {
          label: "Snippet and markup",
          href: "/en/blog/snippet/",
        },
      ],
    },
    {
      title: "How to check in Search Console and on a device",
      level: 2,
      paras: [
        "In Google Search Console watch indexing reports, URL Inspection (which Googlebot and what’s rendered), mobile usability / page experience — tab names change; the point is whether the bot sees the full document from a phone.",
        "Also: emulation and real smartphones, Googlebot Smartphone logs, speed (Core Web Vitals). 2018 emails saying “site moved to mobile-first” are transition-era archive; today assume mobile is the baseline.",
      ],
      links: [
        {
          label: "Indexing checks",
          href: "/en/blog/proverka-indeksatsii/",
        },
        {
          label: "Technical SEO audit",
          href: "/en/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "Common fears",
      level: 2,
      paras: [
        "“Desktop content will disappear” — not if it also exists on mobile. “Must rush an m. site” — no, finish adaptive instead. “Hamburgers and accordions banned” — no; what hurts is hidden important content, heavy popups, and broken layout.",
        "Ads and blocks covering first-screen text hurt UX and can hurt page evaluation — that’s usability, not a “menu ban.”",
      ],
    },
    {
      title: "What to remember",
      level: 2,
      paras: [
        "Mobile-first means the mobile document is primary for Google. Keep meaning parity and solid smartphone UX.",
        "Don’t build strategy on 2018 news about a “multi-year transition” — check the site now and strengthen what phone users see.",
      ],
    },
  ],
  closing: [
    "Open key URLs in smartphone emulation and Search Console inspection: if meaning, links, and markup are there — you’re in mobile-first logic; if mobile is “lightened,” align content first, then work the rankings over months.",
  ],
  related: [
    "mobilnyy-poisk",
    "adaptivnyy-sayt",
    "proverka-indeksatsii",
    "tehnicheskiy-seo-audit",
    "snippet",
    "seo-yandex-google",
  ],
};

/** ES overlay for mobile-first-indeks — same structure as RU JSON / EN. */
export const mobileFirstIndeksEs: BlogPost = {
  slug: "mobile-first-indeks",
  title: "Mobile-First Index de Google: qué es y cómo revisar tu sitio",
  date: "2018-09-18",
  category: "SEO",
  cover: "/images/blog/mobile-first-indeks/cover-es.webp",
  excerpt:
    "Qué significa el Mobile-First Index de Google: por qué el bot se apoya en el documento móvil, por qué un m-site recortado duele y cómo comprobar paridad de contenido — sin el pánico de la «transición» de 2018.",
  lead: [
    "Mobile-First Index es el modelo de indexación de Google donde la referencia principal para entender una página es el documento móvil — lo que ve Googlebot Smartphone — no el layout «completo» de desktop.",
    "El cambio se anunció en 2016–2018; para la mayoría de sitios el mobile-first ya es lo normal. Abajo: qué cambió en la práctica, qué hacer con responsive vs URLs separadas y qué verificar. SERPs móviles y UX viven en el artículo de búsqueda móvil; aquí el foco es indexación.",
  ],
  faq: [
    {
      q: "¿Desktop ya no se indexa?",
      a: "Las URLs siguen indexándose, pero Google construye señales y snippets sobre todo desde el documento móvil. Una versión móvil recortada duele a la visibilidad.",
    },
    {
      q: "¿Necesito un sitio móvil aparte?",
      a: "No. Prefiere responsive en una sola URL. Un subdominio m. es legado con riesgos de desajuste.",
    },
    {
      q: "¿Es lo mismo que Mobile-Friendly?",
      a: "No. Friendly es usabilidad. Mobile-first es qué documento el bot trata como primario para el índice.",
    },
    {
      q: "¿Yandex también usa mobile-first?",
      a: "Yandex tiene su propia fórmula con fuerte peso móvil. Una UX de smartphone rota es riesgosa en ambos motores.",
    },
    {
      q: "¿Cuándo deberían moverse los rankings tras arreglos móviles?",
      a: "UX y conversión pueden mejorar rápido. Los rankings del núcleo competitivo se planifican en 2–6 meses de trabajo — no «primera página la semana que viene».",
    },
  ],
  sections: [
    {
      title: "Por qué Google pasó a mobile-first",
      level: 2,
      paras: [
        "La cuota de búsqueda en smartphone superó al desktop a mediados de la década de 2010. Rankear un «sitio bonito de PC» tenía poco sentido si los usuarios abrían una copia móvil cortada sin texto, markup y CTAs.",
        "Idea del índice: puntuar lo que realmente está disponible desde un teléfono. Las cifras de StatCounter 2016 de posts viejos son telón histórico — no tu informe actual.",
      ],
      links: [
        {
          label: "Búsqueda móvil en SEO",
          href: "/es/blog/mobilnyy-poisk/",
        },
      ],
    },
    {
      title: "Qué cambia para tu sitio",
      level: 2,
      paras: [
        "Con una sola URL responsive suele bastar que la vista móvil entregue el mismo sentido: texto, enlaces, imágenes, datos estructurados. El bot rastrea más a menudo con user-agent de smartphone — eso es normal.",
        "Con URLs separadas (m. / dynamic serving) la paridad es crítica: contenido, title/description en sentido, markup con URLs de versión correctas, acceso de crawl. Si el móvil es un escaparate corto y el desktop guarda el catálogo completo, el índice pierde lo que no está en el teléfono.",
      ],
      tables: [
        {
          caption: "Tipo de sitio y riesgo",
          headers: ["Tipo", "Riesgo mobile-first", "Qué hacer"],
          rows: [
            [
              "Adaptativo / RWD",
              "Bajo si el contenido está completo",
              "Revisa UX, velocidad, formularios",
            ],
            [
              "m. separado",
              "Alto con contenido cortado",
              "Alinea el sentido o pasa a una URL",
            ],
            [
              "Solo desktop",
              "Alto",
              "Arma un móvil decente antes de escalar SEO",
            ],
          ],
        },
      ],
      notes: [
        {
          title: "Un m-site a medias es peor que no tener «versión separada»",
          text: "Una plantilla responsive gana a un m-site a medias que el bot puede tratar como documento primario.",
          kind: "tip",
        },
      ],
    },
    {
      title: "Contenido, markup y meta",
      level: 2,
      paras: [
        "Textos y bloques clave en móvil deben coincidir con desktop en sentido — no pixel-perfect, pero sin cortar la oferta, specs y FAQ «para que quepa».",
        "Los datos estructurados van en la versión que sirves al bot; las URLs en el markup apuntan a las páginas correspondientes. Title y description siguen comparables en sentido cuando las versiones están separadas.",
      ],
      lists: [
        {
          intro: "Chequeo rápido de paridad:",
          items: [
            "texto principal y H1 en smartphone",
            "enlaces internos no enterrados en un menú solo-desktop",
            "imágenes con alt con sentido",
            "JSON-LD / microdata no solo-desktop",
            "formularios y teléfonos tocables",
          ],
        },
      ],
      links: [
        {
          label: "Sitio responsive",
          href: "/es/blog/adaptivnyy-sayt/",
        },
        {
          label: "Snippet y markup",
          href: "/es/blog/snippet/",
        },
      ],
    },
    {
      title: "Cómo revisar en Search Console y en un dispositivo",
      level: 2,
      paras: [
        "En Google Search Console mira informes de indexación, URL Inspection (qué Googlebot y qué se renderiza), usabilidad móvil / page experience — los nombres de pestaña cambian; el punto es si el bot ve el documento completo desde un teléfono.",
        "También: emulación y smartphones reales, logs de Googlebot Smartphone, velocidad (Core Web Vitals). Los emails de 2018 que decían «el sitio pasó a mobile-first» son archivo de la era de transición; hoy asume que el móvil es la base.",
      ],
      links: [
        {
          label: "Comprobar indexación",
          href: "/es/blog/proverka-indeksatsii/",
        },
        {
          label: "Auditoría SEO técnica",
          href: "/es/blog/tehnicheskiy-seo-audit/",
        },
      ],
    },
    {
      title: "Miedos habituales",
      level: 2,
      paras: [
        "«El contenido de desktop desaparecerá» — no si también existe en móvil. «Hay que correr a un sitio m.» — no, termina el adaptativo. «Hamburguesas y acordeones prohibidos» — no; lo que duele es contenido importante oculto, popups pesados y layout roto.",
        "Anuncios y bloques que tapen el texto del first-screen duelen a la UX y pueden doler a la evaluación de página — eso es usabilidad, no una «prohibición de menú».",
      ],
    },
    {
      title: "Qué recordar",
      level: 2,
      paras: [
        "Mobile-first significa que el documento móvil es primario para Google. Mantén paridad de sentido y una UX sólida de smartphone.",
        "No armes estrategia sobre noticias de 2018 sobre una «transición de varios años» — revisa el sitio ahora y refuerza lo que ven los usuarios de teléfono.",
      ],
    },
  ],
  closing: [
    "Abre URLs clave en emulación de smartphone e inspección de Search Console: si están el sentido, los enlaces y el markup — estás en lógica mobile-first; si el móvil está «aligerado», alinea el contenido primero y luego trabaja los rankings a lo largo de meses.",
  ],
  related: [
    "mobilnyy-poisk",
    "adaptivnyy-sayt",
    "proverka-indeksatsii",
    "tehnicheskiy-seo-audit",
    "snippet",
    "seo-yandex-google",
  ],
};
