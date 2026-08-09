import type { BlogPost } from "../../../data/blog";

/** EN overlay for gaiq — same structure as RU JSON. */
export const gaiqEn: BlogPost = {
  slug: "gaiq",
  title: "GAIQ and Google Analytics certification: what it was and what replaced it",
  date: "2021-04-08",
  category: "Digital marketing",
  cover: "/images/blog/gaiq/cover-en.webp",
  excerpt:
    "What GAIQ (Google Analytics Individual Qualification) was, why old “70 questions” guides are outdated, and where to look for current Google analytics courses and certificates.",
  lead: [
    "GAIQ (Google Analytics Individual Qualification) was Google’s online individual qualification exam for Analytics. Articles from 2010–2021 often described it as “70 questions / 80% / 90 minutes.”",
    "Google’s certification programs changed repeatedly: Universal Analytics is gone, GA4 is the center, and learning/exams live in Skillshop and related courses. Below: GAIQ as a historical landmark and how to prep for a knowledge check now — without memorizing outdated screenshots.",
  ],
  faq: [
    {
      q: "Can I still take GAIQ?",
      a: "Classic GAIQ as in 2021 guides is not current. Look for today’s courses and assessments in Google Skillshop / official GA4 materials.",
    },
    {
      q: "Why should I read about GAIQ then?",
      a: "To parse job posts and old résumés (“has GAIQ”), not confuse it with an “agency certificate,” and not drill dead UA rules.",
    },
    {
      q: "What replaced GAIQ?",
      a: "Google’s Analytics/Ads course and certificate lineup in Skillshop and related academies. Names and formats update — check the official catalog.",
    },
    {
      q: "Does a certificate mean you can set up GA?",
      a: "No. The exam checks concepts. Real skill is working properties, events, consent, and reports on a live site.",
    },
    {
      q: "Do employers need the certificate?",
      a: "Sometimes as a résumé plus. More often they want cases: funnel, ecommerce, ads linkage. Paper without practice weighs little.",
    },
    {
      q: "How long did old GAIQ last?",
      a: "Older write-ups mentioned about 18 months — that’s archive. Check validity on the current Skillshop certificate.",
    },
    {
      q: "Can I prep from answer dumps?",
      a: "Bad idea: questions change, UA≠GA4, and “leaks” often lie. Prefer official courses + practice in a demo account.",
    },
    {
      q: "Where should I start practice next to the course?",
      a: "Install GA4, mark key events/conversions, learn to read sources and the funnel — see related Analytics materials.",
    },
  ],
  sections: [
    {
      title: "What GAIQ was",
      level: 2,
      paras: [
        "Historically GAIQ was Google’s text test on Analytics understanding: install and reports, goals/filters, segments, ads linkage, ecommerce concepts.",
        "It was a landmark for specialists who needed to prove basics. Don’t confuse it with Google partner agency status or a university diploma.",
        "Figures like “70 questions, 80%, 90 minutes, retake in a week” from old articles are a snapshot of rules then. Don’t use them as today’s exam instructions.",
      ],
      notes: [
        {
          title: "UA is archived",
          kind: "tip",
          text: "Most classic GAIQ questions lived in Universal Analytics logic. Prepping for “that same exam” from UA screenshots is pointless: the working stack is GA4.",
        },
      ],
      links: [
        {
          label: "Google Analytics for a store",
          href: "/en/blog/google-analytics/",
        },
        {
          label: "GA4 setup",
          href: "/en/blog/google-analytics-nastroyka/",
        },
      ],
    },
    {
      title: "How people prepped then — and what to take now",
      level: 2,
      paras: [
        "Google used to publish reference materials next to the start button and Analytics Academy courses: basics, advanced, Tag Manager, mobile apps.",
        "Today’s sensible path: the official GA4 course in Skillshop (or the current catalog equivalent), then practice on your own or a training property.",
        "Also lock in: events and parameters, consent/cookies, Google Ads linkage, debugging via Tag Assistant / debug mode — without clinging to 2021 menu names.",
      ],
      lists: [
        {
          intro: "Mini prep plan:",
          items: [
            "take the official course for the current Analytics version",
            "build a test GA4 property",
            "mark 3–5 key events",
            "read source and funnel reports",
            "only then sit the Skillshop assessment/exam",
          ],
        },
      ],
      links: [
        {
          label: "Goals in Google Analytics",
          href: "/en/blog/google-analytics-tseli/",
        },
        {
          label: "Google Tag Manager",
          href: "/en/blog/google-tag-manager/",
        },
      ],
    },
    {
      title: "What they asked (themes, not a dump)",
      level: 2,
      paras: [
        "The old test roughly split into blocks: basics (code, reports), account settings and integrations, goals and filters, source and content analysis, segments and events.",
        "Learn the meaning of those blocks in GA4 — don’t drill someone else’s “GAIQ answers.”",
        "Tricky wording was normal: read the question fully and separate “how to configure” from “how to interpret.”",
      ],
      lists: [
        {
          intro: "Self-check themes:",
          items: [
            "how a property differs from a data stream",
            "what an event and a parameter are",
            "how not to mix sources without UTM",
            "why filters/exclusions for internal traffic",
            "how a segment changes a conversion conclusion",
          ],
        },
      ],
    },
    {
      title: "The certificate on a résumé",
      level: 2,
      paras: [
        "A certificate shows you passed Google’s assessment on the issue date. It doesn’t replace a portfolio of reports and breakdowns.",
        "On a résumé list the current course/certificate name and year. “GAIQ 2019” with no GA4 practice looks archival.",
        "For agencies, stable project analytics and clear dashboards beat a PDF collection.",
      ],
    },
    {
      title: "Key takeaways",
      level: 2,
      paras: [
        "GAIQ was a historical Analytics exam; don’t copy old-post rules and UA context as instructions.",
        "Prep with official GA4 courses and lock it in on a real property.",
        "A certificate is a résumé plus — not a substitute for reading a funnel and fixing tagging.",
      ],
    },
  ],
  closing: [
    "Open the current GA4 course in Skillshop and, in parallel, mark events on a training site — more useful than drilling “70 GAIQ questions” from 2021 articles.",
  ],
  related: [
    "google-analytics",
    "google-analytics-nastroyka",
    "google-analytics-tseli",
    "google-tag-manager",
    "looker-studio",
    "utm-metki",
  ],
};

/** ES overlay for gaiq — same structure as RU JSON / EN. */
export const gaiqEs: BlogPost = {
  slug: "gaiq",
  title: "GAIQ y la certificación de Google Analytics: qué fue y qué lo sustituyó",
  date: "2021-04-08",
  category: "Marketing digital",
  cover: "/images/blog/gaiq/cover.webp",
  excerpt:
    "Qué era GAIQ (Google Analytics Individual Qualification), por qué las guías antiguas de «70 preguntas» están obsoletas y dónde buscar cursos y certificados actuales de analítica de Google.",
  lead: [
    "GAIQ (Google Analytics Individual Qualification) era el examen online individual de Google sobre Analytics. Artículos de 2010–2021 a menudo lo describían como «70 preguntas / 80% / 90 minutos».",
    "Los programas de certificación de Google cambiaron varias veces: Universal Analytics ya no está, GA4 es el centro, y el aprendizaje/exámenes viven en Skillshop y cursos relacionados. Abajo: GAIQ como hito histórico y cómo prepararte hoy para una comprobación de conocimiento — sin memorizar capturas obsoletas.",
  ],
  faq: [
    {
      q: "¿Todavía se puede hacer GAIQ?",
      a: "El GAIQ clásico de las guías de 2021 no está vigente. Busca cursos y evaluaciones de hoy en Google Skillshop / materiales oficiales de GA4.",
    },
    {
      q: "¿Por qué leer sobre GAIQ entonces?",
      a: "Para interpretar ofertas de empleo y CVs antiguos («tiene GAIQ»), no confundirlo con un «certificado de agencia» y no practicar reglas muertas de UA.",
    },
    {
      q: "¿Qué sustituyó a GAIQ?",
      a: "La línea de cursos y certificados de Analytics/Ads de Google en Skillshop y academias relacionadas. Nombres y formatos se actualizan — revisa el catálogo oficial.",
    },
    {
      q: "¿Un certificado significa que sabes configurar GA?",
      a: "No. El examen comprueba conceptos. La habilidad real es trabajar properties, eventos, consent e informes en un sitio vivo.",
    },
    {
      q: "¿Los empleadores necesitan el certificado?",
      a: "A veces como plus en el CV. Más a menudo quieren casos: embudo, ecommerce, vínculo con ads. El papel sin práctica pesa poco.",
    },
    {
      q: "¿Cuánto duraba el GAIQ antiguo?",
      a: "Textos viejos mencionaban unos 18 meses — eso es archivo. Revisa la validez en el certificado actual de Skillshop.",
    },
    {
      q: "¿Puedo prepararme con dumps de respuestas?",
      a: "Mala idea: las preguntas cambian, UA≠GA4, y las «filtraciones» a menudo mienten. Prefiere cursos oficiales + práctica en una cuenta demo.",
    },
    {
      q: "¿Por dónde empezar la práctica junto al curso?",
      a: "Instala GA4, marca eventos/conversiones clave, aprende a leer fuentes y el embudo — ver materiales relacionados de Analytics.",
    },
  ],
  sections: [
    {
      title: "Qué era GAIQ",
      level: 2,
      paras: [
        "Históricamente GAIQ era el test de texto de Google sobre comprensión de Analytics: instalación e informes, goals/filtros, segmentos, vínculo con ads, conceptos de ecommerce.",
        "Era un hito para especialistas que necesitaban demostrar lo básico. No lo confundas con el estatus de agencia partner de Google ni con un diploma universitario.",
        "Cifras como «70 preguntas, 80%, 90 minutos, reintento en una semana» de artículos antiguos son una foto de las reglas de entonces. No las uses como instrucciones del examen de hoy.",
      ],
      notes: [
        {
          title: "UA está archivada",
          kind: "tip",
          text: "La mayoría de las preguntas clásicas de GAIQ vivían en la lógica de Universal Analytics. Prepararse para «ese mismo examen» con capturas de UA no tiene sentido: el stack de trabajo es GA4.",
        },
      ],
      links: [
        {
          label: "Google Analytics para una tienda",
          href: "/es/blog/google-analytics/",
        },
        {
          label: "Configuración de GA4",
          href: "/es/blog/google-analytics-nastroyka/",
        },
      ],
    },
    {
      title: "Cómo se preparaban entonces — y qué tomar ahora",
      level: 2,
      paras: [
        "Google publicaba materiales de referencia junto al botón de inicio y cursos de Analytics Academy: básicos, avanzados, Tag Manager, apps móviles.",
        "El camino sensato hoy: el curso oficial de GA4 en Skillshop (o el equivalente del catálogo actual), luego práctica en tu propia property o de entrenamiento.",
        "También fija: eventos y parámetros, consent/cookies, vínculo con Google Ads, depuración vía Tag Assistant / debug mode — sin aferrarte a nombres de menú de 2021.",
      ],
      lists: [
        {
          intro: "Mini plan de preparación:",
          items: [
            "haz el curso oficial de la versión actual de Analytics",
            "arma una property GA4 de prueba",
            "marca 3–5 eventos clave",
            "lee informes de fuentes y embudo",
            "solo entonces siéntate a la evaluación/examen de Skillshop",
          ],
        },
      ],
      links: [
        {
          label: "Objetivos en Google Analytics",
          href: "/es/blog/google-analytics-tseli/",
        },
        {
          label: "Google Tag Manager",
          href: "/es/blog/google-tag-manager/",
        },
      ],
    },
    {
      title: "Qué preguntaban (temas, no un dump)",
      level: 2,
      paras: [
        "El test antiguo se partía a grosso modo en bloques: básicos (código, informes), ajustes de cuenta e integraciones, goals y filtros, análisis de fuentes y contenido, segmentos y eventos.",
        "Aprende el sentido de esos bloques en GA4 — no memorices «respuestas GAIQ» ajenas.",
        "El wording tramposo era normal: lee la pregunta entera y separa «cómo configurar» de «cómo interpretar».",
      ],
      lists: [
        {
          intro: "Temas de autoevaluación:",
          items: [
            "en qué se diferencia una property de un data stream",
            "qué es un evento y un parámetro",
            "cómo no mezclar fuentes sin UTM",
            "por qué filtros/exclusiones del tráfico interno",
            "cómo un segmento cambia una conclusión de conversión",
          ],
        },
      ],
    },
    {
      title: "El certificado en el CV",
      level: 2,
      paras: [
        "Un certificado muestra que pasaste la evaluación de Google en la fecha de emisión. No sustituye un portfolio de informes y desgloses.",
        "En el CV lista el nombre actual del curso/certificado y el año. «GAIQ 2019» sin práctica GA4 se ve de archivo.",
        "Para agencias, analítica de proyecto estable y dashboards claros ganan a una colección de PDFs.",
      ],
    },
    {
      title: "Ideas clave",
      level: 2,
      paras: [
        "GAIQ fue un examen histórico de Analytics; no copies reglas de posts antiguos ni el contexto UA como instrucciones.",
        "Prepárate con cursos oficiales de GA4 y fíjalo en una property real.",
        "Un certificado es un plus en el CV — no un sustituto de leer un embudo y arreglar el tagging.",
      ],
    },
  ],
  closing: [
    "Abre el curso actual de GA4 en Skillshop y, en paralelo, marca eventos en un sitio de entrenamiento — más útil que memorizar «70 preguntas GAIQ» de artículos de 2021.",
  ],
  related: [
    "google-analytics",
    "google-analytics-nastroyka",
    "google-analytics-tseli",
    "google-tag-manager",
    "looker-studio",
    "utm-metki",
  ],
};
