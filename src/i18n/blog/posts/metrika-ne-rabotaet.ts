import type { BlogPost } from "../../../data/blog";

/** EN overlay for metrika-ne-rabotaet — same structure as RU JSON. */
export const metrikaNeRabotaetEn: BlogPost = {
  slug: "metrika-ne-rabotaet",
  title: "Why Yandex Metrica isn’t working on the site",
  date: "2020-11-19",
  category: "SEO",
  cover: "/images/blog/metrika-ne-rabotaet/cover-en.webp",
  excerpt:
    "What to do if the Metrica counter isn’t counting visits, Session Replay is silent, the informer is empty, or goals don’t fire: a calm diagnostics checklist.",
  lead: [
    "Metrica going silent or lying is common after a theme change, cache, tag manager, or blockers. First separate the cases: code isn’t loading at all, data exists but looks off, or a single module is broken (Session Replay, goals, informer).",
    "Below: typical causes and a check order. Fresh install is in the Metrica setup article; this piece focuses on breakage.",
  ],
  faq: [
    {
      q: "The counter is installed but shows no visits — where should I start?",
      a: "Open the site in incognito without blockers, check Online in the account, DevTools → Network for requests to mc.yandex, and confirm the counter number matches.",
    },
    {
      q: "Why do I see visits and a colleague doesn’t?",
      a: "Often AdBlock, built-in browser protection, or a corporate filter blocks the script. Check reports without your own IP filters.",
    },
    {
      q: "If Session Replay isn’t recording, is Metrica broken?",
      a: "Not necessarily. Session Replay is enabled separately; it’s heavier and sensitive to CSP, mixed content, and settings. Base visits may still flow.",
    },
    {
      q: "If goals don’t fire, is the counter code at fault?",
      a: "More often the goal condition, an SPA without a hit, an AJAX form without reachGoal, or a goal on the wrong URL. Use the goals debugger.",
    },
    {
      q: "Clearing cache helped — is that normal?",
      a: "Yes, if an old template without the counter was served from CDN or a cache plugin. After edits, flush HTML cache.",
    },
    {
      q: "Do I need a separate counter on a subdomain?",
      a: "Depends on the task. Sometimes one counter with host filters; sometimes separate. Main point — code on every needed template.",
    },
    {
      q: "Is an empty informer a disaster?",
      a: "The informer is a site widget. Its failure does not mean the account is dead. Check informer code and cache separately.",
    },
    {
      q: "Is Metrica via GTM worse?",
      a: "Fine if the container is published and fires before the user leaves. Mistakes — draft GTM on production or a double install.",
    },
  ],
  sections: [
    {
      title: "No data or “suspicious” data",
      level: 2,
      paras: [
        "First confirm the page has one current code for the right number. Common silence causes: code only on the homepage, stripped by the theme footer, cache serving old HTML, CSP/blocker cutting `mc.yandex.ru`, site opened locally without the script.",
        "Weird data: own-IP filter, bots, duplicate counters, goals on a test domain, timezone. Check the Online report right after an incognito visit.",
      ],
      lists: [
        {
          intro: "Quick checklist:",
          items: [
            "counter number = account",
            "code in the source of all key templates",
            "Metrica request in Network (not red)",
            "CMS/CDN cache flush",
            "check without AdBlock",
            "no two different counters at once",
          ],
        },
      ],
      links: [
        {
          label: "Installing Yandex Metrica",
          href: "/en/blog/metrika-ustanovka/",
        },
      ],
    },
    {
      title: "Session Replay isn’t working",
      level: 2,
      paras: [
        "Session Replay (Webvisor) records behavior and needs a separate toggle in counter settings. If visits flow but no recordings — check the option, limits, third-party script blocking, and Content-Security-Policy.",
        "On SPAs and pages with strict CSP recording may break. Mixed content (HTTPS site loading HTTP) also hurts. For diagnosis compare a normal hit with Session Replay sessions in the account.",
      ],
      lists: [
        {
          intro: "What to check:",
          items: [
            "Session Replay enabled in settings",
            "no aggressive blocker",
            "CSP not cutting required Yandex domains",
            "page served over HTTPS stably",
            "tried recording from a clean visit",
          ],
        },
      ],
      notes: [
        {
          title: "Practice",
          kind: "tip",
          text: "Session Replay is about UX, not “is there traffic.” Fix regular visits and goals first, then recordings.",
        },
      ],
    },
    {
      title: "Informer shows no numbers",
      level: 2,
      paras: [
        "The informer is a separate code fragment/widget on the site. It can break on a theme change while the Metrica account is fine. Confirm the informer block is present and not hidden by CSS, and cache isn’t serving a stub.",
        "If you only need the account — the informer isn’t required. For public visit counters on the site, remember part of the audience blocks scripts — the number is always incomplete.",
      ],
      lists: [
        {
          intro: "Typical causes:",
          items: [
            "widget removed in a redesign",
            "old informer ID",
            "HTML cache",
            "informer script blocked",
          ],
        },
      ],
    },
    {
      title: "Goals aren’t firing",
      level: 2,
      paras: [
        "A “URL contains” goal won’t fire if thank-you opens without an address change (modal/AJAX). JavaScript goals need `ym(...reachGoal...)` at the right moment. SPAs need a correct hit on screen change.",
        "Check in goals debug mode: condition, URL match, no typo in the goal name, no filters dropping your test.",
      ],
      lists: [
        {
          intro: "Common mistakes:",
          items: [
            "goal on http, site on https",
            "typo in the reachGoal id",
            "form submits but the goal is on another button",
            "CRM has a conversion but no Metrica hit",
            "testing from an IP in exclusions",
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
      title: "Cache, CMS, and tag manager",
      level: 2,
      paras: [
        "After inserting code, flush page cache and minification if it breaks scripts. On WordPress/Bitrix different templates (product, cart, landing) are often forgotten. In GTM publish the container and don’t duplicate native code + tag.",
        "CDN and “JS optimizers” sometimes delay Metrica so short visits never send — balance speed and data completeness.",
      ],
      lists: [
        {
          intro: "After a template edit:",
          items: [
            "cache flush",
            "check 3–4 page types",
            "mobile and desktop",
            "publish GTM if you use it",
          ],
        },
      ],
    },
    {
      title: "Diagnostics order without chaos",
      level: 2,
      paras: [
        "Go in layers: code on the page → network/blockers → account (online) → reports/filters → module (goals / Session Replay / informer). Log what you already checked — or the team spins the same hypotheses.",
        "If data vanished after a release — roll back or diff the template. If it stopped suddenly with no deploy — more often blockers, filters, quota, or a domain/mirror change.",
      ],
      lists: [
        {
          intro: "Mini ritual:",
          items: [
            "incognito + visit",
            "Network for mc.yandex",
            "online in the account",
            "goal / Session Replay specifically",
            "ticket note: symptom → hypothesis → result",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "tip",
          text: "Reinstalling the counter from scratch every time. Find the broken layer first — or you’ll get duplicate numbers and a messy history.",
        },
      ],
      links: [
        {
          label: "Page source code",
          href: "/en/blog/ishodnyy-kod/",
        },
      ],
    },
  ],
  related: [
    "metrika-ustanovka",
    "optimizatsiya-konversii",
    "ishodnyy-kod",
    "dashboard",
    "analitika-kontent-marketinga",
  ],
};

/** ES overlay for metrika-ne-rabotaet — same structure as RU JSON / EN. */
export const metrikaNeRabotaetEs: BlogPost = {
  slug: "metrika-ne-rabotaet",
  title: "Por qué Yandex Metrica no funciona en el sitio",
  date: "2020-11-19",
  category: "SEO",
  cover: "/images/blog/metrika-ne-rabotaet/cover.webp",
  excerpt:
    "Qué hacer si el contador de Metrica no cuenta visitas, Session Replay está en silencio, el informer vacío o los goals no disparan: un checklist de diagnóstico tranquilo.",
  lead: [
    "Que Metrica se silencie o mienta es habitual tras un cambio de tema, caché, tag manager o blockers. Primero separa los casos: el código no carga en absoluto, hay datos pero se ven mal, o un solo módulo está roto (Session Replay, goals, informer).",
    "Abajo: causas típicas y un orden de chequeo. La instalación fresca está en el artículo de setup de Metrica; aquí el foco es la rotura.",
  ],
  faq: [
    {
      q: "El contador está instalado pero no muestra visitas — ¿por dónde empiezo?",
      a: "Abre el sitio en incógnito sin blockers, revisa Online en la cuenta, DevTools → Network por peticiones a mc.yandex y confirma que el número del contador coincide.",
    },
    {
      q: "¿Por qué yo veo visitas y un colega no?",
      a: "A menudo AdBlock, protección del navegador o un filtro corporativo bloquea el script. Revisa informes sin filtros de tu propia IP.",
    },
    {
      q: "Si Session Replay no graba, ¿Metrica está rota?",
      a: "No necesariamente. Session Replay se activa aparte; es más pesado y sensible a CSP, mixed content y ajustes. Las visitas base pueden seguir fluyendo.",
    },
    {
      q: "Si los goals no disparan, ¿es culpa del código del contador?",
      a: "Más a menudo la condición del goal, un SPA sin hit, un formulario AJAX sin reachGoal o un goal en la URL equivocada. Usa el debugger de goals.",
    },
    {
      q: "Limpiar caché ayudó — ¿es normal?",
      a: "Sí, si desde CDN o un plugin de caché se servía una plantilla vieja sin contador. Tras editar, vacía la caché HTML.",
    },
    {
      q: "¿Hace falta un contador aparte en un subdominio?",
      a: "Depende de la tarea. A veces un contador con filtros de host; a veces separados. Lo principal — código en cada plantilla necesaria.",
    },
    {
      q: "¿Un informer vacío es un desastre?",
      a: "El informer es un widget del sitio. Su fallo no significa que la cuenta esté muerta. Revisa el código del informer y la caché por separado.",
    },
    {
      q: "¿Metrica vía GTM es peor?",
      a: "Bien si el contenedor está publicado y dispara antes de que el usuario se vaya. Errores — GTM en draft en producción o una instalación doble.",
    },
  ],
  sections: [
    {
      title: "Sin datos o datos «sospechosos»",
      level: 2,
      paras: [
        "Primero confirma que la página tiene un código actual del número correcto. Causas habituales de silencio: código solo en la home, recortado por el footer del tema, caché sirviendo HTML viejo, CSP/blocker cortando `mc.yandex.ru`, sitio abierto en local sin el script.",
        "Datos raros: filtro de IP propia, bots, contadores duplicados, goals en un dominio de test, timezone. Revisa el informe Online justo tras una visita en incógnito.",
      ],
      lists: [
        {
          intro: "Checklist rápido:",
          items: [
            "número del contador = cuenta",
            "código en el source de todas las plantillas clave",
            "petición a Metrica en Network (no en rojo)",
            "vaciar caché CMS/CDN",
            "revisar sin AdBlock",
            "sin dos contadores distintos a la vez",
          ],
        },
      ],
      links: [
        {
          label: "Instalar Yandex Metrica",
          href: "/es/blog/metrika-ustanovka/",
        },
      ],
    },
    {
      title: "Session Replay no funciona",
      level: 2,
      paras: [
        "Session Replay (Webvisor) graba comportamiento y necesita un toggle aparte en ajustes del contador. Si fluyen visitas pero no hay grabaciones — revisa la opción, límites, bloqueo de scripts de terceros y Content-Security-Policy.",
        "En SPAs y páginas con CSP estricto la grabación puede romperse. Mixed content (sitio HTTPS cargando HTTP) también duele. Para diagnosticar compara un hit normal con sesiones de Session Replay en la cuenta.",
      ],
      lists: [
        {
          intro: "Qué revisar:",
          items: [
            "Session Replay activado en ajustes",
            "sin blocker agresivo",
            "CSP no corta dominios Yandex necesarios",
            "página servida por HTTPS de forma estable",
            "probaste grabar desde una visita limpia",
          ],
        },
      ],
      notes: [
        {
          title: "Práctica",
          kind: "tip",
          text: "Session Replay habla de UX, no de «¿hay tráfico?». Arregla primero visitas regulares y goals, luego las grabaciones.",
        },
      ],
    },
    {
      title: "El informer no muestra números",
      level: 2,
      paras: [
        "El informer es un fragmento/widget aparte en el sitio. Puede romperse al cambiar el tema mientras la cuenta de Metrica está bien. Confirma que el bloque del informer está presente y no oculto por CSS, y que la caché no sirve un stub.",
        "Si solo necesitas la cuenta — el informer no es obligatorio. Para contadores públicos de visitas en el sitio, recuerda que parte de la audiencia bloquea scripts — el número siempre es incompleto.",
      ],
      lists: [
        {
          intro: "Causas típicas:",
          items: [
            "widget quitado en un rediseño",
            "ID viejo del informer",
            "caché HTML",
            "script del informer bloqueado",
          ],
        },
      ],
    },
    {
      title: "Los goals no disparan",
      level: 2,
      paras: [
        "Un goal «URL contiene» no dispara si el thank-you se abre sin cambio de dirección (modal/AJAX). Los goals JavaScript necesitan `ym(...reachGoal...)` en el momento correcto. Los SPAs necesitan un hit correcto al cambiar de pantalla.",
        "Revisa en modo debug de goals: condición, match de URL, sin typo en el nombre del goal, sin filtros que tiren tu test.",
      ],
      lists: [
        {
          intro: "Errores frecuentes:",
          items: [
            "goal en http, sitio en https",
            "typo en el id de reachGoal",
            "el formulario envía pero el goal está en otro botón",
            "el CRM tiene conversión pero no hay hit de Metrica",
            "pruebas desde una IP en exclusiones",
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
      title: "Caché, CMS y tag manager",
      level: 2,
      paras: [
        "Tras insertar código, vacía la caché de página y la minificación si rompe scripts. En WordPress/Bitrix a menudo se olvidan plantillas distintas (producto, carrito, landing). En GTM publica el contenedor y no dupliques código nativo + tag.",
        "CDN y «optimizadores de JS» a veces retrasan Metrica tanto que las visitas cortas nunca envían — equilibra velocidad y completitud de datos.",
      ],
      lists: [
        {
          intro: "Tras editar una plantilla:",
          items: [
            "vaciar caché",
            "revisar 3–4 tipos de página",
            "móvil y desktop",
            "publicar GTM si lo usas",
          ],
        },
      ],
    },
    {
      title: "Orden de diagnóstico sin caos",
      level: 2,
      paras: [
        "Ve por capas: código en la página → red/blockers → cuenta (online) → informes/filtros → módulo (goals / Session Replay / informer). Anota lo que ya revisaste — o el equipo gira las mismas hipótesis.",
        "Si los datos desaparecieron tras un release — rollback o diff de la plantilla. Si paró de golpe sin deploy — más a menudo blockers, filtros, cuota o un cambio de dominio/espejo.",
      ],
      lists: [
        {
          intro: "Mini ritual:",
          items: [
            "incógnito + Network",
            "Network por mc.yandex",
            "online en la cuenta",
            "goal / Session Replay en concreto",
            "nota del ticket: síntoma → hipótesis → resultado",
          ],
        },
      ],
      notes: [
        {
          title: "Error frecuente",
          kind: "tip",
          text: "Reinstalar el contador desde cero cada vez. Encuentra primero la capa rota — o tendrás números duplicados e historial embrollado.",
        },
      ],
      links: [
        {
          label: "Código fuente de la página",
          href: "/es/blog/ishodnyy-kod/",
        },
      ],
    },
  ],
  related: [
    "metrika-ustanovka",
    "optimizatsiya-konversii",
    "ishodnyy-kod",
    "dashboard",
    "analitika-kontent-marketinga",
  ],
};
