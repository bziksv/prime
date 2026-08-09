import type { BlogPost } from "../../../data/blog";

/** EN overlay for google-analytics-tseli — same structure as RU JSON. */
export const googleAnalyticsTseliEn: BlogPost = {
  slug: "google-analytics-tseli",
  title: "Goals and conversions in Google Analytics (GA4)",
  date: "2020-07-09",
  category: "Digital marketing",
  cover: "/images/blog/google-analytics-tseli/cover-en.webp",
  excerpt:
    "How to set up conversions in Google Analytics 4: key events, thank-you URLs, engagement and clicks — mapping old Universal “goals” and checking reports.",
  lead: [
    "In Universal Analytics “goals” were a separate builder (page, duration, pages/session, event). In GA4 the model is different: almost everything is events, and important ones are marked as key events / conversions. Same idea: measure leads, purchases, thank-you pages, and micro-conversions.",
    "Below: why conversions matter, how to map old goal types into GA4, how to tag events and verify reports. Store funnel behavior is in the ecommerce Analytics article; Yandex Metrica goals are a separate piece. The GA4 UI changes — lean on meaning, not 2019 screenshots.",
  ],
  faq: [
    {
      q: "Do Universal goals still work?",
      a: "Universal Analytics is retired. Configure and read conversions in GA4. Old “Admin → Goals” guides are historical.",
    },
    {
      q: "What replaces a Destination goal?",
      a: "A thank-you / success URL pageview event or a separate purchase/generate_lead event. Mark it as a key event.",
    },
    {
      q: "Where did “visit duration” as a goal go?",
      a: "In GA4 look at engaged sessions and custom time-based events. Don’t copy a UA goal one-to-one — set a threshold for your job.",
    },
    {
      q: "How many conversions can I set up?",
      a: "GA4 limits differ from UA’s “20 goals.” Don’t spawn dozens of near-duplicates — keep an event dictionary.",
    },
    {
      q: "Do I need gtag or GTM?",
      a: "Either works. GTM is easier for buttons and forms without editing the template every time. Main rule — one event = one name.",
    },
    {
      q: "How does a conversion differ from ecommerce?",
      a: "Ecommerce is purchases and products. Conversions are any key events, including leads and micro-steps. A store usually needs both tracks.",
    },
    {
      q: "Should I use GA4 instead of Metrika?",
      a: "Often both: Metrica is closer to RU and Session Replay, GA to Ads and the Google product stack. Set goals in each counter for your reports.",
    },
    {
      q: "Do conversions equal search rankings?",
      a: "No. They measure on-site outcomes. SEO rankings grow separately; page-one share for the core is typically planned for two to six months after work starts.",
    },
  ],
  sections: [
    {
      title: "Why mark conversions",
      level: 2,
      paras: [
        "Without conversions you see traffic but not whether people reach a lead or payment. Conversions feed reports, channel comparison, and ad optimization.",
        "Business goal first (order, lead, call), then the technical event. Don’t start from a “template gallery” for a checkbox.",
      ],
      lists: [
        {
          intro: "What we usually mark:",
          items: [
            "thank-you / successful order",
            "form submit",
            "“Buy” / “Call” click",
            "signup",
            "important funnel micro-steps",
          ],
        },
      ],
      links: [
        {
          label: "Google Analytics for ecommerce",
          href: "/en/blog/google-analytics/",
        },
        {
          label: "Goals in Yandex Metrica",
          href: "/en/blog/metrika-tseli/",
        },
      ],
    },
    {
      title: "From Universal goals to GA4 events",
      level: 2,
      paras: [
        "Old goal types are useful as a mental task map — but you configure them in GA4’s event model now.",
        "Destination (page) → success URL view or post-payment event. Duration / pages per session → engagement signals or your own thresholds. Event → click/form events marked as key.",
      ],
      tables: [
        {
          caption: "UA idea → GA4 mapping",
          headers: ["Was in UA", "Meaning", "In GA4"],
          rows: [
            ["Destination", "Reached a URL", "page_view success / lead event"],
            ["Duration", "Long on site", "engaged session / custom event"],
            ["Pages/session", "Depth", "views + engagement"],
            ["Event", "Click/video/form", "event + key event"],
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Copying Universal UI clicks into GA4. The menu is different — start with an event dictionary.",
        },
      ],
    },
    {
      title: "Conversion on a success URL",
      level: 2,
      paras: [
        "Store and services classic: “thanks for your order” / success page. Users without a purchase rarely land there (except typing the URL — rare noise). noindex the thank-you if it shouldn’t be in search.",
        "In GA4 make sure that page view shows as an event (often `page_view` with page_location) and mark the right event as key — or fire a separate `purchase` / `generate_lead` from backend/GTM; that’s more reliable than URL alone.",
      ],
      lists: [
        {
          intro: "Thank-you practice:",
          items: [
            "unique URL after the action",
            "noindex when needed",
            "purchase/lead event backs the URL",
            "conversion value — by average order/lead if you track ROI",
          ],
        },
      ],
    },
    {
      title: "Engagement: time and depth",
      level: 2,
      paras: [
        "A long visit on a taxi landing may mean “couldn’t find the button.” On a learning portal a short session may mean “didn’t stick.” Interpretation depends on the product — don’t copy someone else’s minute thresholds.",
        "In GA4 look at engaged sessions and interaction events. For content you sometimes add “read N screens” or scroll — only if it really drives decisions, not report cosmetics.",
      ],
      lists: [
        {
          intro: "When to watch engagement:",
          items: [
            "media and blog",
            "landing UX assessment",
            "comparing content variants",
            "not as the store’s only KPI",
          ],
        },
      ],
    },
    {
      title: "Button and form events",
      level: 2,
      paras: [
        "Most flexible type: CTA click, successful submit, video play, chat start. Event names — Latin, stable dictionary (`form_submit`, `click_buy`). Parameters where needed (form type, button ID), no personal data against policy.",
        "Via GTM: click/submit trigger → GA4 event tag → mark as key event in Admin. Via gtag — `gtag('event', '…')` per Google docs. Verify in DebugView before go-live.",
      ],
      lists: [
        {
          intro: "Tagging minimum:",
          items: [
            "one event name sitewide",
            "fire on success, not every focus",
            "test in DebugView",
            "mark key event / conversion",
            "table: event → where in code → owner",
          ],
        },
      ],
      links: [
        {
          label: "Inserting JavaScript",
          href: "/en/blog/vstavka-javascript/",
        },
        {
          label: "Contact form",
          href: "/en/blog/forma-obratnoy-svyazi/",
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Don’t put email or phone in parameters. For lead quality, submit fact and form type are enough.",
        },
      ],
    },
    {
      title: "Funnels and report checks",
      level: 2,
      paras: [
        "Replace UA sequences with Explorations and event funnels: view → cart → checkout → purchase. Watch where the break is — not only “average conversion %.”",
        "After setup compare channel/campaign by key events. Cross-check CRM and Metrica: gaps are normal, but order of magnitude should align.",
      ],
      lists: [
        {
          intro: "Launch checklist:",
          items: [
            "GA4 tag on all templates",
            "event dictionary agreed",
            "key events enabled",
            "DebugView OK",
            "24–48h report without surprises",
            "docs for the team",
          ],
        },
      ],
      links: [
        {
          label: "Dashboard",
          href: "/en/blog/dashboard/",
        },
        {
          label: "Conversion optimization",
          href: "/en/blog/optimizatsiya-konversii/",
        },
      ],
      notes: [
        {
          title: "Timelines",
          kind: "tip",
          text: "Conversion setup — days. Organic growth for the core — months after prep; don’t confuse analytics with rankings. Page-one share is typically planned for two to six months after work starts.",
        },
      ],
    },
  ],
  related: [
    "google-analytics",
    "metrika-tseli",
    "dashboard",
    "optimizatsiya-konversii",
    "forma-obratnoy-svyazi",
    "vstavka-javascript",
  ],
};

/** ES overlay for google-analytics-tseli — same structure as RU JSON / EN. */
export const googleAnalyticsTseliEs: BlogPost = {
  slug: "google-analytics-tseli",
  title: "Goals y conversiones en Google Analytics (GA4)",
  date: "2020-07-09",
  category: "Digital marketing",
  cover: "/images/blog/google-analytics-tseli/cover.webp",
  excerpt:
    "Cómo configurar conversiones en Google Analytics 4: key events, URLs de gracias, engagement y clics — mapeo de los viejos «goals» de Universal y comprobación de informes.",
  lead: [
    "En Universal Analytics los «goals» eran un constructor aparte (página, duración, pages/session, evento). En GA4 el modelo es otro: casi todo son eventos, y los importantes se marcan como key events / conversiones. Misma idea: medir leads, compras, páginas de gracias y microconversiones.",
    "Abajo: por qué importan las conversiones, cómo mapear tipos viejos de goals a GA4, cómo etiquetar eventos y verificar informes. El comportamiento de funnel de tienda está en el artículo de Analytics ecommerce; los goals de Yandex Metrica son otra pieza. La UI de GA4 cambia — apóyate en el significado, no en capturas de 2019.",
  ],
  faq: [
    {
      q: "¿Siguen funcionando los goals de Universal?",
      a: "Universal Analytics está retirado. Configura y lee conversiones en GA4. Las guías viejas de «Admin → Goals» son historia.",
    },
    {
      q: "¿Qué sustituye a un Destination goal?",
      a: "Un evento de pageview de URL de gracias / éxito o un evento aparte purchase/generate_lead. Márcalo como key event.",
    },
    {
      q: "¿Dónde fue «duración de visita» como goal?",
      a: "En GA4 mira engaged sessions y eventos custom basados en tiempo. No copies un goal de UA uno a uno — fija un umbral para tu trabajo.",
    },
    {
      q: "¿Cuántas conversiones puedo configurar?",
      a: "Los límites de GA4 difieren de los «20 goals» de UA. No inventes docenas de casi-duplicados — mantén un diccionario de eventos.",
    },
    {
      q: "¿Necesito gtag o GTM?",
      a: "Cualquiera vale. GTM es más fácil para botones y formularios sin editar la plantilla cada vez. Regla principal — un evento = un nombre.",
    },
    {
      q: "¿En qué se diferencia una conversión de ecommerce?",
      a: "Ecommerce son compras y productos. Las conversiones son cualquier key event, incluidos leads y micro-pasos. Una tienda suele necesitar ambas pistas.",
    },
    {
      q: "¿Debo usar GA4 en lugar de Metrica?",
      a: "A menudo ambos: Metrica está más cerca del RU y Session Replay, GA de Ads y el stack de productos Google. Configura goals en cada contador para tus informes.",
    },
    {
      q: "¿Las conversiones equivalen a rankings de búsqueda?",
      a: "No. Miden resultados on-site. Los rankings SEO crecen aparte; la cuota del núcleo en primera página suele planificarse a dos–seis meses tras arrancar el trabajo.",
    },
  ],
  sections: [
    {
      title: "Por qué marcar conversiones",
      level: 2,
      paras: [
        "Sin conversiones ves tráfico pero no si la gente llega a un lead o al pago. Las conversiones alimentan informes, comparación de canales y optimización de ads.",
        "Primero el objetivo de negocio (pedido, lead, llamada), luego el evento técnico. No empieces por una «galería de plantillas» para marcar una casilla.",
      ],
      lists: [
        {
          intro: "Qué solemos marcar:",
          items: [
            "gracias / pedido exitoso",
            "envío de formulario",
            "clic «Comprar» / «Llamar»",
            "alta / signup",
            "micro-pasos importantes del funnel",
          ],
        },
      ],
      links: [
        {
          label: "Google Analytics para ecommerce",
          href: "/es/blog/google-analytics/",
        },
        {
          label: "Goals en Yandex Metrica",
          href: "/es/blog/metrika-tseli/",
        },
      ],
    },
    {
      title: "De goals de Universal a eventos GA4",
      level: 2,
      paras: [
        "Los tipos viejos de goals sirven como mapa mental de la tarea — pero ahora los configuras en el modelo de eventos de GA4.",
        "Destination (página) → vista de URL de éxito o evento post-pago. Duration / pages per session → señales de engagement o tus propios umbrales. Event → eventos de clic/formulario marcados como key.",
      ],
      tables: [
        {
          caption: "Idea UA → mapeo GA4",
          headers: ["Era en UA", "Significado", "En GA4"],
          rows: [
            ["Destination", "Llegó a una URL", "page_view success / evento lead"],
            ["Duration", "Mucho tiempo en el sitio", "engaged session / evento custom"],
            ["Pages/session", "Profundidad", "views + engagement"],
            ["Event", "Clic/vídeo/formulario", "evento + key event"],
          ],
        },
      ],
      notes: [
        {
          title: "Error frecuente",
          kind: "tip",
          text: "Copiar clics de la UI de Universal en GA4. El menú es distinto — empieza por un diccionario de eventos.",
        },
      ],
    },
    {
      title: "Conversión en una URL de éxito",
      level: 2,
      paras: [
        "Clásico de tienda y servicios: «gracias por tu pedido» / página de éxito. Quien no compra rara vez aterriza ahí (salvo teclear la URL — ruido raro). noindex la thank-you si no debe estar en búsqueda.",
        "En GA4 asegúrate de que esa vista de página aparezca como evento (a menudo `page_view` con page_location) y marca el evento correcto como key — o dispara un `purchase` / `generate_lead` aparte desde backend/GTM; eso es más fiable que la URL sola.",
      ],
      lists: [
        {
          intro: "Práctica thank-you:",
          items: [
            "URL única tras la acción",
            "noindex cuando haga falta",
            "evento purchase/lead respalda la URL",
            "valor de conversión — por pedido/lead medio si trackeas ROI",
          ],
        },
      ],
    },
    {
      title: "Engagement: tiempo y profundidad",
      level: 2,
      paras: [
        "Una visita larga en una landing de taxi puede significar «no encontró el botón». En un portal de aprendizaje una sesión corta puede ser «no enganchó». La interpretación depende del producto — no copies umbrales de minutos ajenos.",
        "En GA4 mira engaged sessions y eventos de interacción. En contenido a veces sumas «leyó N pantallas» o scroll — solo si de verdad impulsa decisiones, no cosmética de informe.",
      ],
      lists: [
        {
          intro: "Cuándo mirar engagement:",
          items: [
            "media y blog",
            "evaluación de UX de landing",
            "comparar variantes de contenido",
            "no como único KPI de la tienda",
          ],
        },
      ],
    },
    {
      title: "Eventos de botón y formulario",
      level: 2,
      paras: [
        "Tipo más flexible: clic CTA, envío exitoso, play de vídeo, inicio de chat. Nombres de eventos — latín, diccionario estable (`form_submit`, `click_buy`). Parámetros donde haga falta (tipo de formulario, ID del botón), sin datos personales contra la política.",
        "Vía GTM: trigger de clic/envío → tag de evento GA4 → marcar como key event en Admin. Vía gtag — `gtag('event', '…')` según docs de Google. Verifica en DebugView antes del go-live.",
      ],
      lists: [
        {
          intro: "Mínimo de etiquetado:",
          items: [
            "un nombre de evento en todo el sitio",
            "disparar al éxito, no en cada focus",
            "probar en DebugView",
            "marcar key event / conversión",
            "tabla: evento → dónde en código → owner",
          ],
        },
      ],
      links: [
        {
          label: "Insertar JavaScript",
          href: "/es/blog/vstavka-javascript/",
        },
        {
          label: "Formulario de contacto",
          href: "/es/blog/forma-obratnoy-svyazi/",
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "No pongas email o teléfono en parámetros. Para calidad del lead bastan el hecho del envío y el tipo de formulario.",
        },
      ],
    },
    {
      title: "Funnels y comprobación de informes",
      level: 2,
      paras: [
        "Sustituye las secuencias de UA por Explorations y funnels de eventos: vista → carrito → checkout → purchase. Mira dónde se rompe — no solo el «% medio de conversión».",
        "Tras el setup compara canal/campaña por key events. Cruza con CRM y Metrica: los gaps son normales, pero el orden de magnitud debería alinearse.",
      ],
      lists: [
        {
          intro: "Checklist de lanzamiento:",
          items: [
            "tag GA4 en todas las plantillas",
            "diccionario de eventos acordado",
            "key events activados",
            "DebugView OK",
            "informe 24–48h sin sorpresas",
            "docs para el equipo",
          ],
        },
      ],
      links: [
        {
          label: "Dashboard",
          href: "/es/blog/dashboard/",
        },
        {
          label: "Optimización de conversión",
          href: "/es/blog/optimizatsiya-konversii/",
        },
      ],
      notes: [
        {
          title: "Plazos",
          kind: "tip",
          text: "Configurar conversiones — días. Crecimiento orgánico del núcleo — meses tras la prep; no confundas analytics con rankings. La cuota en primera página suele planificarse a dos–seis meses tras arrancar el trabajo.",
        },
      ],
    },
  ],
  related: [
    "google-analytics",
    "metrika-tseli",
    "dashboard",
    "optimizatsiya-konversii",
    "forma-obratnoy-svyazi",
    "vstavka-javascript",
  ],
};
