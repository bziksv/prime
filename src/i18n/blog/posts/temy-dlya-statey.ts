import type { BlogPost } from "../../../data/blog";

/** EN overlay for temy-dlya-statey — same structure as RU JSON. */
export const temyDlyaStateyEn: BlogPost = {
  slug: "temy-dlya-statey",
  title: "Article topics: how and where to find ideas",
  date: "2019-06-14",
  category: "Content marketing",
  cover: "/images/blog/temy-dlya-statey/cover-en.webp",
  excerpt:
    "Where to get blog topics: audience, competitors, search demand, trends, and discussion spaces — without copy-pasting others’ texts or chasing “virality.”",
  lead: [
    "The topic decides whether people finish the article and whether search finds it. Unique wording won’t save a question the reader doesn’t care about.",
    "Below: idea sources close at hand, how to work with queries, and extra reserves. How-to/guide formats live in content-promotion ideas; the calendar lives in the content-plan article.",
  ],
  faq: [
    {
      q: "Where to start if ideas are zero?",
      a: "With client questions and comments on old posts. Then search demand and competitors.",
    },
    {
      q: "Can I rewrite someone else’s articles?",
      a: "As inspiration and angles — yes. Copy-paste and one-to-one rewrites — no. Add your experience and facts.",
    },
    {
      q: "Is a keyword set required?",
      a: "For organic — yes, at least a cluster of questions. For expert opinion without search intent you can go lighter, but checking demand still helps.",
    },
    {
      q: "Are Google Trends / keyword tools enough?",
      a: "As a seasonality and spike compass — yes. They don’t replace intent and SERP competition analysis.",
    },
    {
      q: "Does asking subscribers work?",
      a: "Yes: poll, form, comments. Weak response is normal; combine with search and support.",
    },
    {
      q: "How is this different from content-promotion ideas?",
      a: "That article covers formats (how-to, guide, myths). Here — where to get concrete topics and questions.",
    },
    {
      q: "Where do I store finds?",
      a: "In a backlog and content plan: topic, intent, priority, status.",
    },
  ],
  sections: [
    {
      title: "Ideas nearby: audience and your own materials",
      level: 2,
      paras: [
        "Your interests and expertise are a start — filter them: what’s useful for the audience, not only for you.",
        "Old hits: update facts, add a new angle, or unpack objections from comments — often stronger than a topic from scratch.",
        "Ask readers in the newsletter, comments, or a short poll. Competitors: a list of topics that worked for them, plus your experience and examples — not a one-to-one structure clone.",
      ],
      lists: [
        {
          intro: "Quick harvest:",
          items: [
            "questions from support and sales",
            "comments and “what about…”",
            "strongest old URLs by traffic/engagement",
            "notes from client calls",
          ],
        },
      ],
    },
    {
      title: "Search queries as a topic source",
      level: 2,
      paras: [
        "Search demand describes how people phrase a need. A keyword cluster → article and landing topics.",
        "Hints: Search Console reports, Google Keyword Planner, Semrush/Ahrefs and peers. Add question operators (“how,” “why,” “what is”) to the base query.",
        "Q&A spaces and “People also ask” in the SERP show live wording. Trends help with seasonality — don’t publish a “trendy” post after the peak unless you have an evergreen angle.",
      ],
      links: [
        {
          label: "Semantic keyword set",
          href: "/en/blog/semanticheskoe-yadro/",
        },
        {
          label: "Content promotion ideas",
          href: "/en/blog/idei-kontent-prodvizheniya/",
        },
      ],
      notes: [
        {
          title: "Tool UIs change",
          kind: "tip",
          text: "“Questions” buttons in Semrush and similar tools move around. What matters is the logic: question → intent → article — not a 2019 menu screenshot.",
        },
      ],
    },
    {
      title: "Forums, social, video, and international angles",
      level: 2,
      paras: [
        "Live discussions on forums and industry chats surface odd pains that aren’t already saturated on page one of the SERP.",
        "Popular niche posts and videos signal interest; carry the meaning into your format — don’t steal the script.",
        "Webinars and conferences: searching “topic + webinar” shows which questions speakers raise. Materials from other markets are a source of angles thin in your locale; translating “as is” without adaptation and sources is bad practice.",
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Topic = audience usefulness + your angle + (for SEO) demand.",
        "Others’ articles — inspiration, not a copy-paste template.",
        "Put anything valuable into the content plan immediately, or ideas vanish.",
      ],
      links: [
        {
          label: "Content plan",
          href: "/en/blog/kontent-plan/",
        },
        {
          label: "Content matrix",
          href: "/en/blog/matritsa-kontenta/",
        },
      ],
    },
  ],
  closing: [
    "In a week, write down 15 questions from support and search — three of them are enough for the next publications without “blank page” pain.",
  ],
  related: [
    "idei-kontent-prodvizheniya",
    "kontent-plan",
    "matritsa-kontenta",
    "semanticheskoe-yadro",
    "kak-napisat-statyu",
    "korporativnyy-blog",
  ],
};

/** ES overlay for temy-dlya-statey — same structure as RU JSON. */
export const temyDlyaStateyEs: BlogPost = {
  slug: "temy-dlya-statey",
  title: "Temas para artículos: cómo y dónde encontrar ideas",
  date: "2019-06-14",
  category: "Content marketing",
  cover: "/images/blog/temy-dlya-statey/cover-es.webp",
  excerpt:
    "De dónde sacar temas de blog: audiencia, competidores, demanda de búsqueda, trends y espacios de discusión — sin copy-paste de textos ajenos ni perseguir «viralidad».",
  lead: [
    "El tema decide si la gente termina el artículo y si la búsqueda lo encuentra. Un wording único no salva una pregunta que al lector no le importa.",
    "Abajo: fuentes de ideas a mano, cómo trabajar con queries y reservas extra. Los formatos how-to/guía viven en ideas de promoción por contenido; el calendario vive en el artículo del plan de contenido.",
  ],
  faq: [
    {
      q: "¿Por dónde empezar si las ideas están a cero?",
      a: "Con preguntas de clientes y comentarios en posts viejos. Luego demanda de búsqueda y competidores.",
    },
    {
      q: "¿Puedo reescribir artículos ajenos?",
      a: "Como inspiración y ángulos — sí. Copy-paste y rewrites uno a uno — no. Suma tu experiencia y hechos.",
    },
    {
      q: "¿Hace falta un set de keywords?",
      a: "Para orgánico — sí, al menos un cluster de preguntas. Para opinión de experto sin intent de búsqueda puedes ir más ligero, pero chequear demanda sigue ayudando.",
    },
    {
      q: "¿Bastan Google Trends / tools de keywords?",
      a: "Como brújula de estacionalidad y picos — sí. No sustituyen analizar intent y competencia del SERP.",
    },
    {
      q: "¿Funciona preguntar a los suscriptores?",
      a: "Sí: encuesta, formulario, comentarios. Una respuesta floja es normal; combínalo con búsqueda y soporte.",
    },
    {
      q: "¿En qué se diferencia de las ideas de promoción por contenido?",
      a: "Ese artículo cubre formatos (how-to, guía, mitos). Aquí — de dónde sacar temas y preguntas concretas.",
    },
    {
      q: "¿Dónde guardo los hallazgos?",
      a: "En un backlog y plan de contenido: tema, intent, prioridad, estado.",
    },
  ],
  sections: [
    {
      title: "Ideas cerca: audiencia y tus propios materiales",
      level: 2,
      paras: [
        "Tus intereses y expertise son un inicio — fíltralos: qué es útil para la audiencia, no solo para ti.",
        "Hits viejos: actualiza hechos, suma un ángulo nuevo o desglosa objeciones de los comentarios — a menudo más fuerte que un tema desde cero.",
        "Pregunta a lectores en la newsletter, comentarios o una encuesta corta. Competidores: una lista de temas que les funcionaron, más tu experiencia y ejemplos — no un clon uno a uno de la estructura.",
      ],
      lists: [
        {
          intro: "Cosecha rápida:",
          items: [
            "preguntas de soporte y ventas",
            "comentarios y «¿y qué pasa con…?»",
            "URLs viejas más fuertes por tráfico/engagement",
            "notas de calls con clientes",
          ],
        },
      ],
    },
    {
      title: "Queries de búsqueda como fuente de temas",
      level: 2,
      paras: [
        "La demanda de búsqueda describe cómo la gente formula una necesidad. Un cluster de keywords → temas de artículo y landing.",
        "Pistas: informes de Search Console, Google Keyword Planner, Semrush/Ahrefs y pares. Suma operadores de pregunta («cómo», «por qué», «qué es») a la query base.",
        "Espacios Q&A y «People also ask» en el SERP muestran wording vivo. Los trends ayudan con estacionalidad — no publiques un post «de moda» tras el pico salvo que tengas un ángulo evergreen.",
      ],
      links: [
        {
          label: "Núcleo semántico de keywords",
          href: "/es/blog/semanticheskoe-yadro/",
        },
        {
          label: "Ideas de promoción por contenido",
          href: "/es/blog/idei-kontent-prodvizheniya/",
        },
      ],
      notes: [
        {
          title: "Las UIs de las tools cambian",
          kind: "tip",
          text: "Los botones de «Questions» en Semrush y similares se mueven. Lo que importa es la lógica: pregunta → intent → artículo — no una captura de menú de 2019.",
        },
      ],
    },
    {
      title: "Foros, redes, vídeo y ángulos internacionales",
      level: 2,
      paras: [
        "Las discusiones vivas en foros y chats del sector sacan dolores raros que aún no saturan la primera página del SERP.",
        "Posts y vídeos populares del nicho señalan interés; lleva el sentido a tu formato — no robes el guion.",
        "Webinars y conferencias: buscar «tema + webinar» muestra qué preguntas plantean los speakers. Materiales de otros mercados son fuente de ángulos finos en tu locale; traducir «tal cual» sin adaptar ni fuentes es mala práctica.",
      ],
    },
    {
      title: "Conclusiones",
      level: 2,
      paras: [
        "Tema = utilidad para la audiencia + tu ángulo + (para SEO) demanda.",
        "Artículos ajenos — inspiración, no plantilla de copy-paste.",
        "Mete lo valioso al plan de contenido al momento, o las ideas se evaporan.",
      ],
      links: [
        {
          label: "Plan de contenido",
          href: "/es/blog/kontent-plan/",
        },
        {
          label: "Matriz de contenido",
          href: "/es/blog/matritsa-kontenta/",
        },
      ],
    },
  ],
  closing: [
    "En una semana, anota 15 preguntas de soporte y búsqueda — tres bastan para las próximas publicaciones sin el dolor de la «página en blanco».",
  ],
  related: [
    "idei-kontent-prodvizheniya",
    "kontent-plan",
    "matritsa-kontenta",
    "semanticheskoe-yadro",
    "kak-napisat-statyu",
    "korporativnyy-blog",
  ],
};
