import type { BlogPost } from "../../../data/blog";

/** EN overlay for metrika-ustanovka — same structure as RU JSON. */
export const metrikaUstanovkaEn: BlogPost = {
  slug: "metrika-ustanovka",
  title: "Installing Yandex Metrica on a website",
  date: "2021-04-27",
  category: "SEO",
  cover: "/images/blog/metrika-ustanovka/cover-en.webp",
  excerpt:
    "Where to paste the Yandex Metrica code in WordPress, Bitrix, Joomla, and site builders: counter in head / via plugin, visit checks, and common mistakes.",
  lead: [
    "Yandex Metrica counts visits, goals, and behavior. Without a counter you’re blind in ads and SEO reports.",
    "Below: where to place the code on popular CMS platforms and how to confirm data is flowing. Panel UIs change — look for “counters” / “Analytics.”",
  ],
  faq: [
    {
      q: "Where do I paste the code?",
      a: "Usually in `<head>` on all pages or via a tag manager. On a CMS — a plugin / “scripts in head” field.",
    },
    {
      q: "Is putting it only in the footer enough?",
      a: "Better follow Yandex’s recommendation — as early as possible in head, so short visits aren’t lost.",
    },
    {
      q: "Do subdomains need a separate counter?",
      a: "Depends on the job. Often one counter with a host filter; sometimes separate ones for different projects.",
    },
    {
      q: "Why are there no visits after install?",
      a: "Cache, a blocker, code missing on some templates, a typo in the ID, or the site only open locally to you.",
    },
    {
      q: "Does Metrica replace Yandex Webmaster?",
      a: "No. Metrica is user behavior. Webmaster is indexing and search messages.",
    },
    {
      q: "Should I install via a tag manager?",
      a: "Handy when the site has many marketing tags and someone owns the container. For a simple site, correctly pasting the official counter code into the template is enough.",
    },
  ],
  sections: [
    {
      title: "General principle",
      level: 2,
      paras: [
        "Create a counter in the Metrica account, copy the code, and deploy it on every site template. Enable click map / Session Replay as needed and set goals.",
      ],
      lists: [
        {
          intro: "After pasting:",
          items: [
            "open the site in incognito",
            "check “online” / visits in the account",
            "clear CMS and CDN cache",
            "check mobile and desktop versions",
          ],
        },
      ],
    },
    {
      title: "WordPress, Bitrix, and others",
      level: 2,
      paras: [
        "WordPress: a Metrica plugin or paste into the theme/child theme / “scripts in head.” Bitrix: support settings / Metrica or header template. Joomla and builders (Wix and similar) — custom code / marketing field.",
      ],
      lists: [
        {
          intro: "Safety rules:",
          items: [
            "don’t edit a parent theme without a child",
            "one main counter, no duplicates",
            "Metrica account access — only for needed people",
            "cookie/analytics consent — per your jurisdiction",
          ],
        },
      ],
      notes: [
        {
          title: "Plugins",
          kind: "tip",
          text: "Plugin names and menu items change. What matters is that the counter ID matches the account and the code is on live pages.",
        },
      ],
    },
    {
      title: "Common mistakes",
      level: 2,
      paras: [
        "Two different codes at once, counter only on home, cache serving old HTML without the script, goals not set — “visits exist, no leads in the report.”",
      ],
      lists: [
        {
          intro: "Debug checklist:",
          items: [
            "view page source — is `mc.yandex` / the Metrica tag there",
            "no Adblock blocking during the test",
            "correct counter ID",
            "goals and UTM for ads",
          ],
        },
      ],
      links: [
        {
          label: "SEO on Bitrix",
          href: "/en/blog/seo-bitrix/",
        },
      ],
    },
    {
      title: "Creating a counter and base settings",
      level: 2,
      paras: [
        "In the Metrica account create a counter for the exact site domain, set the time zone, and check access rights. Take the code from that counter’s UI: don’t copy a fragment from an old project, even if both sites belong to one company.",
        "Turn on extra tools deliberately. Session Replay and maps help study behavior, but before use check personal-data rules, field masking, and visitor notice requirements in your jurisdiction.",
      ],
      lists: [
        {
          intro: "Before deploy prepare:",
          items: [
            "owner access to the account",
            "a list of domains and subdomains to track",
            "a developer contact or CMS access",
            "rules for processing analytics data",
          ],
        },
      ],
    },
    {
      title: "Goals beat total visit count",
      level: 2,
      paras: [
        "A counter without goals shows traffic but not whether the site brings inquiries. Set events for form submit, call, order, signup, or another meaningful action. Goal names should be clear to everyone reading the report.",
        "Fire a goal only after a successful user action — not on a button click. Otherwise the report fills with “leads” from people who opened a form and changed their mind, and ad decisions rest on bad data.",
      ],
      lists: [
        {
          intro: "Useful goals:",
          items: [
            "successful form submit",
            "order complete or thank-you page",
            "click on phone or messenger",
            "download of an important file if it’s part of the funnel",
          ],
        },
      ],
    },
    {
      title: "How to verify the install",
      level: 2,
      paras: [
        "Open several key pages in incognito and see whether a visit appears in reports. Then check source or DevTools: the page should have one correct tag with the needed counter ID.",
        "Don’t test only the home page. Catalog, blog, cart, and mobile menu templates may build differently, so the code easily lands on only part of the site. After clearing cache, recheck.",
      ],
      lists: [
        {
          intro: "If there’s no data, check in order:",
          items: [
            "counter ID correctness",
            "tag presence on the problem page",
            "CMS cache, CDN, and script optimizers",
            "ad blocker in the tester’s browser",
          ],
        },
      ],
    },
  ],
};

/** ES overlay for metrika-ustanovka — same structure as RU JSON / EN. */
export const metrikaUstanovkaEs: BlogPost = {
  slug: "metrika-ustanovka",
  title: "Instalar Yandex Metrica en un sitio web",
  date: "2021-04-27",
  category: "SEO",
  cover: "/images/blog/metrika-ustanovka/cover-es.webp",
  excerpt:
    "Dónde pegar el código de Yandex Metrica en WordPress, Bitrix, Joomla y constructores: contador en head / vía plugin, comprobar visitas y errores frecuentes.",
  lead: [
    "Yandex Metrica cuenta visitas, goals y comportamiento. Sin contador vas a ciegas en informes de ads y SEO.",
    "Abajo: dónde colocar el código en CMS populares y cómo confirmar que fluyen los datos. Las UIs del panel cambian — busca «contadores» / «Analytics».",
  ],
  faq: [
    {
      q: "¿Dónde pego el código?",
      a: "Suele ir en `<head>` en todas las páginas o vía un tag manager. En un CMS — plugin / campo «scripts in head».",
    },
    {
      q: "¿Basta ponerlo solo en el footer?",
      a: "Mejor sigue la recomendación de Yandex — lo antes posible en head, para no perder visitas cortas.",
    },
    {
      q: "¿Los subdominios necesitan un contador aparte?",
      a: "Depende del trabajo. A menudo un contador con filtro de host; a veces aparte para proyectos distintos.",
    },
    {
      q: "¿Por qué no hay visitas tras instalar?",
      a: "Caché, un bloqueador, código ausente en algunas plantillas, typo en el ID, o el sitio solo abierto en local para ti.",
    },
    {
      q: "¿Metrica sustituye a Yandex Webmaster?",
      a: "No. Metrica es comportamiento del usuario. Webmaster es indexación y mensajes de búsqueda.",
    },
    {
      q: "¿Debo instalar vía tag manager?",
      a: "Cómodo cuando el sitio tiene muchos tags de marketing y alguien posee el contenedor. En un sitio simple basta pegar bien el código oficial del contador en la plantilla.",
    },
  ],
  sections: [
    {
      title: "Principio general",
      level: 2,
      paras: [
        "Crea un contador en la cuenta de Metrica, copia el código y despliégalo en cada plantilla del sitio. Activa click map / Session Replay según necesites y configura goals.",
      ],
      lists: [
        {
          intro: "Tras pegar:",
          items: [
            "abre el sitio en incógnito",
            "comprueba «online» / visitas en la cuenta",
            "limpia caché de CMS y CDN",
            "revisa versiones móvil y desktop",
          ],
        },
      ],
    },
    {
      title: "WordPress, Bitrix y otros",
      level: 2,
      paras: [
        "WordPress: plugin de Metrica o pega en el tema/tema hijo / «scripts in head». Bitrix: ajustes de soporte / Metrica o plantilla del header. Joomla y constructores (Wix y similares) — código personalizado / campo de marketing.",
      ],
      lists: [
        {
          intro: "Reglas de seguridad:",
          items: [
            "no edites un tema padre sin hijo",
            "un contador principal, sin duplicados",
            "acceso a la cuenta de Metrica — solo para quien haga falta",
            "consentimiento de cookies/analytics — según tu jurisdicción",
          ],
        },
      ],
      notes: [
        {
          title: "Plugins",
          kind: "tip",
          text: "Los nombres de plugins y menús cambian. Lo que importa es que el ID del contador coincida con la cuenta y que el código esté en las páginas en vivo.",
        },
      ],
    },
    {
      title: "Errores frecuentes",
      level: 2,
      paras: [
        "Dos códigos distintos a la vez, contador solo en la home, caché sirviendo HTML viejo sin el script, goals sin configurar — «hay visitas, no hay leads en el informe».",
      ],
      lists: [
        {
          intro: "Checklist de debug:",
          items: [
            "ver el código fuente — ¿está `mc.yandex` / el tag de Metrica?",
            "sin Adblock bloqueando durante el test",
            "ID de contador correcto",
            "goals y UTM para ads",
          ],
        },
      ],
      links: [
        {
          label: "SEO en Bitrix",
          href: "/es/blog/seo-bitrix/",
        },
      ],
    },
    {
      title: "Crear un contador y ajustes base",
      level: 2,
      paras: [
        "En la cuenta de Metrica crea un contador para el dominio exacto del sitio, fija la zona horaria y revisa permisos. Toma el código de la UI de ese contador: no copies un fragmento de un proyecto viejo, aunque ambos sitios sean de la misma empresa.",
        "Activa herramientas extra a propósito. Session Replay y mapas ayudan a estudiar comportamiento, pero antes de usarlos revisa reglas de datos personales, enmascarado de campos y requisitos de aviso al visitante en tu jurisdicción.",
      ],
      lists: [
        {
          intro: "Antes del deploy prepara:",
          items: [
            "acceso de propietario a la cuenta",
            "lista de dominios y subdominios a trackear",
            "contacto de desarrollador o acceso al CMS",
            "reglas de tratamiento de datos de analytics",
          ],
        },
      ],
    },
    {
      title: "Los goals importan más que el total de visitas",
      level: 2,
      paras: [
        "Un contador sin goals muestra tráfico pero no si el sitio trae consultas. Configura eventos para envío de formulario, llamada, pedido, alta u otra acción con sentido. Los nombres de goals deben ser claros para quien lea el informe.",
        "Dispara un goal solo tras una acción exitosa del usuario — no al clic en un botón. Si no, el informe se llena de «leads» de gente que abrió un formulario y cambió de idea, y las decisiones de ads se apoyan en datos malos.",
      ],
      lists: [
        {
          intro: "Goals útiles:",
          items: [
            "envío exitoso del formulario",
            "pedido completado o página de gracias",
            "clic en teléfono o messenger",
            "descarga de un archivo importante si forma parte del funnel",
          ],
        },
      ],
    },
    {
      title: "Cómo verificar la instalación",
      level: 2,
      paras: [
        "Abre varias páginas clave en incógnito y mira si aparece una visita en los informes. Luego revisa el source o DevTools: la página debe tener un solo tag correcto con el ID de contador necesario.",
        "No testes solo la home. Las plantillas de catálogo, blog, carrito y menú móvil pueden construirse distinto, así que el código aterriza fácil solo en parte del sitio. Tras limpiar caché, vuelve a comprobar.",
      ],
      lists: [
        {
          intro: "Si no hay datos, revisa en orden:",
          items: [
            "corrección del ID del contador",
            "presencia del tag en la página problemática",
            "caché del CMS, CDN y optimizadores de scripts",
            "bloqueador de anuncios en el navegador del tester",
          ],
        },
      ],
    },
  ],
};
