import type { BlogPost } from "../../../data/blog";

/** EN overlay for ustarevshiy-sayt — same structure as RU JSON. */
export const ustarevshiySaytEn: BlogPost = {
  slug: "ustarevshiy-sayt",
  title: "Signs of an outdated website: a checklist before redesign",
  date: "2019-02-25",
  category: "Digital marketing",
  cover: "/images/blog/ustarevshiy-sayt/cover-en.webp",
  excerpt:
    "When a site feels outdated: bulky structure, no responsive layout, thin features, overstuffed copy, design/brand mismatch, Flash legacy, and slow load — without ranking guarantees after a redesign.",
  lead: [
    "Falling leads and rankings don’t always mean you need a brand-new design from scratch. Often the site simply stopped matching expectations: awkward structure, no decent mobile UX, heavy pages, copy written for robots.",
    "Below: aging signs and what to do. Flat-design trends from old guides aren’t dogma — clarity, speed, and brand fit matter more. Page-one visibility after fixes is planned months of work, not “repaint and instantly rank first.”",
  ],
  faq: [
    {
      q: "Does a redesign always lift SEO?",
      a: "No. If you break URLs, speed, or content, you can drop. Plan redirects and keep useful pages.",
    },
    {
      q: "Is responsive layout required?",
      a: "For commerce — practically yes. A separate m-site is rarely needed; more often one responsive domain.",
    },
    {
      q: "Is Flash still relevant?",
      a: "No. The tech is end-of-life. Do video and animation on modern web standards (HTML/CSS/JS).",
    },
    {
      q: "Is over-optimized copy a sign of age?",
      a: "Yes if it’s walls of text for keyword density. Today usefulness, structure, and meaning for people matter more.",
    },
    {
      q: "Where should I start if everything is bad?",
      a: "Mobile UX and speed, then structure and nav, then visuals and brand. Don’t start with a new hero image.",
    },
    {
      q: "Do you need a full relaunch?",
      a: "Not always. Sometimes IA, templates, and speedups are enough. Full redesign — when brand, UX, and tech have hopelessly drifted apart.",
    },
  ],
  sections: [
    {
      title: "Structure, mobile, and features",
      level: 2,
      paras: [
        "The business grew — the site grew pages with no sections. Clients don’t hunt a wall of links; they leave. Fix: thematic IA, consistent nav, less visual noise. Test a “find X” path with newcomers or session replay.",
        "No usable mobile view — you lose a large share of visits. You need responsive: readable text, large tap targets, reflowed blocks — not a shrunk desktop.",
        "Thin features vs competitors (no calculator, compare, decent search, consult) also look like a site from the past. Add what really helps the deal; A/B test — don’t copy everything.",
      ],
      links: [
        {
          label: "Responsive website",
          href: "/en/blog/adaptivnyy-sayt/",
        },
        {
          label: "Online store mistakes",
          href: "/en/blog/oshibki-internet-magazina/",
        },
      ],
    },
    {
      title: "Content, design, and brand",
      level: 2,
      paras: [
        "Keyword stuffing and SEO walls with no value mark an outdated approach. Subheads, examples, visuals, and a clear answer to the query beat density.",
        "Design builds trust. Dated tricks (heavy skeuomorphism, noisy textures, chaotic type) lower the sense that the business is current. Modern isn’t chasing this year’s fashion — it’s readability and clean hierarchy.",
        "If the site doesn’t match identity (colors, fonts, logo), the brand looks fragmented. Sync with the brand book.",
      ],
      links: [
        {
          label: "Brand identity",
          href: "/en/blog/aydentika-brenda/",
        },
        {
          label: "Content updates",
          href: "/en/blog/obnovlenie-kontenta/",
        },
      ],
    },
    {
      title: "Tech debt: Flash and speed",
      level: 2,
      paras: [
        "Flash on a site is a red flag: it doesn’t work in modern browsers or on mobile. Move clips and banners to HTML5/video.",
        "Slow load raises bounce. Compress images, cache, cut heavy JS/CSS, check PageSpeed and real devices. “Leave after 3 seconds” figures from old surveys are a guide — measure your TTFB/LCP.",
        "Living on an outdated site hurts both leads and trust. The checklist above is a diagnosis order before budgeting a pretty picture.",
      ],
      notes: [
        {
          title: "Redesign ≠ magic",
          kind: "tip",
          text: "After launch watch indexation, 404s, and conversion. Rankings across the keyword set grow over months if the tech and content base are sound — prep and redesign aren’t the same as page-one visibility.",
        },
      ],
    },
  ],
  closing: [
    "An outdated site shows up as friction: hard to find, awkward on phone, slow, off-brand, and tech debt like Flash. Walk the checklist, prioritize mobile and speed — and only then argue about button trends.",
  ],
  related: [
    "adaptivnyy-sayt",
    "aydentika-brenda",
    "obnovlenie-kontenta",
    "oshibki-internet-magazina",
    "seo-oshibki",
    "trafik-bez-lidov",
  ],
};

/** ES overlay for ustarevshiy-sayt — same structure as RU JSON / EN. */
export const ustarevshiySaytEs: BlogPost = {
  slug: "ustarevshiy-sayt",
  title: "Señales de un sitio desactualizado: checklist antes del rediseño",
  date: "2019-02-25",
  category: "Digital marketing",
  cover: "/images/blog/ustarevshiy-sayt/cover-es.webp",
  excerpt:
    "Cuándo un sitio se siente viejo: estructura hinchada, sin layout responsive, funciones pobres, copy atiborrado, desajuste diseño/marca, legado Flash y carga lenta — sin garantías de rankings tras un rediseño.",
  lead: [
    "Caer en leads y rankings no siempre significa un diseño nuevo desde cero. A menudo el sitio simplemente dejó de cuadrar con las expectativas: estructura incómoda, sin UX móvil decente, páginas pesadas, copy escrito para robots.",
    "Abajo: señales de envejecimiento y qué hacer. Las tendencias de flat design de guías viejas no son dogma — importan más claridad, velocidad y encaje de marca. La visibilidad en primera página tras los arreglos se planifica en meses de trabajo, no «repinta y rankeas al instante».",
  ],
  faq: [
    {
      q: "¿Un rediseño siempre sube el SEO?",
      a: "No. Si rompes URLs, velocidad o contenido, puedes caer. Planifica redirects y conserva páginas útiles.",
    },
    {
      q: "¿Es obligatorio el layout responsive?",
      a: "Para comercio — prácticamente sí. Un m-site aparte rara vez hace falta; más a menudo un dominio responsive.",
    },
    {
      q: "¿Flash sigue siendo relevante?",
      a: "No. La tech está en end-of-life. Haz vídeo y animación con estándares web modernos (HTML/CSS/JS).",
    },
    {
      q: "¿El copy sobreoptimizado es señal de vejez?",
      a: "Sí si son muros de texto por densidad de keywords. Hoy importan más utilidad, estructura y sentido para las personas.",
    },
    {
      q: "¿Por dónde empiezo si todo está mal?",
      a: "UX móvil y velocidad, luego estructura y nav, luego visuales y marca. No empieces por una imagen hero nueva.",
    },
    {
      q: "¿Hace falta un relanzamiento completo?",
      a: "No siempre. A veces bastan IA, plantillas y aceleraciones. Rediseño completo — cuando marca, UX y técnica se han separado sin remedio.",
    },
  ],
  sections: [
    {
      title: "Estructura, móvil y funciones",
      level: 2,
      paras: [
        "El negocio creció — el sitio acumuló páginas sin secciones. Los clientes no cazan un muro de enlaces; se van. Arreglo: IA temática, nav coherente, menos ruido visual. Prueba un camino «encuentra X» con gente nueva o session replay.",
        "Sin una vista móvil usable — pierdes una gran parte de las visitas. Hace falta responsive: texto legible, targets táctiles grandes, bloques reordenados — no un desktop encogido.",
        "Funciones pobres frente a competidores (sin calculadora, comparar, búsqueda decente, consulta) también se ven como un sitio del pasado. Añade lo que de verdad ayuda al trato; prueba A/B — no copies todo.",
      ],
      links: [
        {
          label: "Sitio responsive",
          href: "/es/blog/adaptivnyy-sayt/",
        },
        {
          label: "Errores de tienda online",
          href: "/blog/oshibki-internet-magazina/",
        },
      ],
    },
    {
      title: "Contenido, diseño y marca",
      level: 2,
      paras: [
        "Keyword stuffing y muros SEO sin valor marcan un enfoque desfasado. Subheads, ejemplos, visuales y una respuesta clara a la consulta ganan a la densidad.",
        "El diseño construye confianza. Trucos datados (skeuomorphism pesado, texturas ruidosas, tipografía caótica) bajan la sensación de que el negocio está al día. Moderno no es perseguir la moda del año — es legibilidad y jerarquía limpia.",
        "Si el sitio no encaja con la identidad (colores, fuentes, logo), la marca se ve fragmentada. Sincroniza con el brand book.",
      ],
      links: [
        {
          label: "Identidad de marca",
          href: "/es/blog/aydentika-brenda/",
        },
        {
          label: "Actualización de contenido",
          href: "/es/blog/obnovlenie-kontenta/",
        },
      ],
    },
    {
      title: "Deuda técnica: Flash y velocidad",
      level: 2,
      paras: [
        "Flash en un sitio es una bandera roja: no funciona en navegadores modernos ni en móvil. Pasa clips y banners a HTML5/vídeo.",
        "La carga lenta sube el bounce. Comprime imágenes, cachea, corta JS/CSS pesado, revisa PageSpeed y dispositivos reales. Las cifras de «se van a los 3 segundos» de encuestas viejas son guía — mide tu TTFB/LCP.",
        "Vivir en un sitio desactualizado duele a leads y a confianza. El checklist de arriba es un orden de diagnóstico antes de presupuestar una imagen bonita.",
      ],
      notes: [
        {
          title: "Rediseño ≠ magia",
          kind: "tip",
          text: "Tras el lanzamiento mira indexación, 404s y conversión. Los rankings del set de keywords crecen a lo largo de meses si la base técnica y de contenido es sólida — prep y rediseño no son lo mismo que visibilidad en primera página.",
        },
      ],
    },
  ],
  closing: [
    "Un sitio desactualizado se nota como fricción: difícil de encontrar, incómodo en el teléfono, lento, fuera de marca y con deuda técnica tipo Flash. Recorre el checklist, prioriza móvil y velocidad — y solo entonces discute tendencias de botones.",
  ],
  related: [
    "adaptivnyy-sayt",
    "aydentika-brenda",
    "obnovlenie-kontenta",
    "oshibki-internet-magazina",
    "seo-oshibki",
    "trafik-bez-lidov",
  ],
};
