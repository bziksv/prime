import type { BlogPost } from "../../../data/blog";

/** EN overlay for obzor-brauzerov — same structure as RU JSON. */
export const obzorBrauzerovEn: BlogPost = {
  slug: "obzor-brauzerov",
  title: "Browser overview: how to choose for your tasks",
  date: "2018-02-14",
  category: "Digital marketing",
  cover: "/images/blog/obzor-brauzerov/cover-en.webp",
  excerpt:
    "Chrome, Firefox, Edge, Opera, Vivaldi, and Yandex Browser: what to watch when choosing — extensions, privacy, ecosystem — without 2018 rankings and a single “champion.”",
  lead: [
    "A browser is the environment where you open sites, ad accounts, and email. There is no “best for everyone”: ecosystem, extensions, privacy, habit, and devices matter.",
    "Below: selection criteria and strengths by product class. Market shares, “2-second launch,” and Edge/Opera status from 2018 reviews are outdated — Edge moved to Chromium, extension catalogs grew. Yandex Browser install is covered separately.",
  ],
  faq: [
    {
      q: "Which browser is the fastest?",
      a: "Depends on the PC, network, and version. Watch updates and your scenarios — not figures from a 2018 article.",
    },
    {
      q: "Is Chrome required for SEO work?",
      a: "No. DevTools and extensions are handy; many Chromium browsers are close. Firefox is also used at work.",
    },
    {
      q: "How is this different from the Yandex Browser install article?",
      a: "That one is how to install Yandex safely. Here — comparing classes and selection criteria.",
    },
    {
      q: "Is private/incognito mode safe?",
      a: "It leaves fewer traces on the device, but doesn’t make you anonymous to the site, network, and extensions. For tracking, check privacy settings and separate tools.",
    },
    {
      q: "Do you need several browsers?",
      a: "Often yes: a primary plus a second for layout or account checks. The key is updating both.",
    },
  ],
  sections: [
    {
      title: "What to watch when choosing",
      level: 2,
      paras: [
        "Start with the scenario: everyday surfing, development, Google accounts, Yandex services, strict privacy, many tabs. Then — phone/PC sync, extension catalog, update policy.",
        "Chromium-line RAM use is often higher; more noticeable on weak hardware, less critical on modern machines.",
      ],
      lists: [
        {
          intro: "Selection checklist:",
          items: [
            "needed OS and mobile clients",
            "extensions for your tasks",
            "sync and password manager",
            "privacy / tracking settings",
            "integration with needed services",
            "willingness to update regularly",
          ],
        },
      ],
    },
    {
      title: "Chromium class: Chrome, Edge, Opera, Yandex, Vivaldi",
      level: 2,
      paras: [
        "Most popular browsers today run on Chromium. Hence similar page rendering and often Chrome Web Store extension compatibility — with caveats per vendor.",
        "Google Chrome is strong in the Google ecosystem and DevTools. Microsoft Edge sits deep in Windows and is also Chromium — “few extensions” takes from 2017–2018 no longer match reality. Opera and Yandex Browser add their own traffic-saving modes, services, and UI features. Vivaldi is for people who like fine-tuning tabs and panels.",
      ],
      tables: [
        {
          caption: "Classes (simplified)",
          headers: ["Browser", "Common focus"],
          rows: [
            ["Chrome", "Google ecosystem, extensions, DevTools"],
            ["Edge", "Windows, Chromium, corporate scenarios"],
            ["Firefox", "Privacy, independence, Linux"],
            ["Opera", "Own features on top of Chromium"],
            ["Yandex Browser", "Yandex services, Turbo/translate"],
            ["Vivaldi", "Flexible UI and tabs"],
          ],
        },
      ],
      links: [
        {
          label: "Installing Yandex Browser",
          href: "/en/blog/yandeks-brauzer/",
        },
        {
          label: "Chrome extensions for SEO",
          href: "/en/blog/chrome-rasshireniya-seo/",
        },
      ],
      notes: [
        {
          title: "Don’t confuse engine and brand",
          kind: "tip",
          text: "Same engine ≠ same data policy and default service set. Read what’s enabled at install and sync.",
        },
      ],
    },
    {
      title: "Firefox: the other pole",
      level: 2,
      paras: [
        "Mozilla’s Firefox remains a strong pick when privacy settings, tracker blocking, and independence from Google/Microsoft matter. The add-on catalog differs from Chrome’s, but covers many tasks.",
        "On Linux Firefox is often native and familiar. The learning curve is a bit steeper than “minimal” Chromium — but settings flexibility is higher.",
      ],
    },
    {
      title: "Privacy, data, and ads",
      level: 2,
      paras: [
        "Almost any major browser ties into the vendor ecosystem: suggestions, account, telemetry. That isn’t an automatic ban on use, but a reason to tune sync, turn off extras, and not keep critical passwords only in the cloud without 2FA.",
        "Aggressive “make default” prompts are a reason to decline the checkbox — not the product itself if it fits you.",
      ],
      links: [
        {
          label: "Cookies in the browser",
          href: "/en/blog/cookies/",
        },
        {
          label: "Password manager",
          href: "/en/blog/menedzher-paroley/",
        },
      ],
    },
    {
      title: "How to choose in practice",
      level: 2,
      paras: [
        "For Gmail/Drive/Ads, Chrome or Edge is often handy. For Yandex Direct, Metrika, and Mail — Yandex Browser or any browser plus extensions. For tracker focus — Firefox with protection tuned. For layout checks keep a second engine.",
        "Don’t copy “Chrome is ideal for everyone” from old text: hardware, habits, and threats changed. Install a candidate officially, work a week, keep the one with less friction.",
      ],
      lists: [
        {
          intro: "Short algorithm:",
          items: [
            "state two or three main scenarios",
            "pick two candidates",
            "import bookmarks temporarily",
            "check needed extensions",
            "keep a primary plus a spare for tests",
          ],
        },
      ],
    },
    {
      title: "Takeaways",
      level: 2,
      paras: [
        "Choosing a browser is about tasks and ecosystem, not an endless ranking. Update software, download from official sites, and don’t confuse installing one product with reviewing the whole market.",
        "Yandex Browser install — in a separate guide; marketing and SEO extensions — in related pieces.",
      ],
    },
  ],
  closing: [
    "Define scenarios, compare two official candidates on your tasks, and keep a primary browser plus a second for checks — so the choice is about work, not someone else’s 2018 roundup.",
  ],
  related: [
    "yandeks-brauzer",
    "chrome-rasshireniya-seo",
    "chrome-rasshireniya-marketing",
    "cookies",
    "menedzher-paroley",
    "https-seo",
  ],
};

/** ES overlay for obzor-brauzerov — same structure as RU JSON / EN. */
export const obzorBrauzerovEs: BlogPost = {
  slug: "obzor-brauzerov",
  title: "Panorama de navegadores: cómo elegir según tus tareas",
  date: "2018-02-14",
  category: "Digital marketing",
  cover: "/images/blog/obzor-brauzerov/cover-es.webp",
  excerpt:
    "Chrome, Firefox, Edge, Opera, Vivaldi y Yandex Browser: qué mirar al elegir — extensiones, privacidad, ecosistema — sin tablas de 2018 ni un «campeón» único.",
  lead: [
    "El navegador es el entorno donde abres sitios, cuentas de ads y el correo. No hay «el mejor para todos»: pesan ecosistema, extensiones, privacidad, hábito y dispositivos.",
    "Abajo: criterios de selección y fortalezas por clase de producto. Cuotas de mercado, «arranque en 2 segundos» y el estado de Edge/Opera de reviews de 2018 están obsoletos — Edge pasó a Chromium, los catálogos de extensiones crecieron. La instalación de Yandex Browser va en otro artículo.",
  ],
  faq: [
    {
      q: "¿Cuál es el navegador más rápido?",
      a: "Depende del PC, la red y la versión. Mira actualizaciones y tus escenarios — no cifras de un artículo de 2018.",
    },
    {
      q: "¿Hace falta Chrome para trabajar SEO?",
      a: "No. DevTools y las extensiones son cómodos; muchos navegadores Chromium se acercan. Firefox también se usa en el trabajo.",
    },
    {
      q: "¿En qué se diferencia del artículo de instalar Yandex Browser?",
      a: "Aquel es cómo instalar Yandex con seguridad. Aquí — comparar clases y criterios de elección.",
    },
    {
      q: "¿El modo privado/incógnito es seguro?",
      a: "Deja menos huellas en el dispositivo, pero no te hace anónimo frente al sitio, la red y las extensiones. Para tracking, revisa ajustes de privacidad y herramientas aparte.",
    },
    {
      q: "¿Hacen falta varios navegadores?",
      a: "A menudo sí: uno principal más un segundo para layout o checks de cuentas. Lo clave es actualizar ambos.",
    },
  ],
  sections: [
    {
      title: "Qué mirar al elegir",
      level: 2,
      paras: [
        "Empieza por el escenario: surf diario, desarrollo, cuentas Google, servicios Yandex, privacidad estricta, muchas pestañas. Luego — sync móvil/PC, catálogo de extensiones, política de actualizaciones.",
        "El uso de RAM en la línea Chromium suele ser más alto; se nota más en hardware flojo, menos en máquinas modernas.",
      ],
      lists: [
        {
          intro: "Checklist de selección:",
          items: [
            "SO y clientes móviles necesarios",
            "extensiones para tus tareas",
            "sync y gestor de contraseñas",
            "ajustes de privacidad / tracking",
            "integración con los servicios que usas",
            "disposición a actualizar con regularidad",
          ],
        },
      ],
    },
    {
      title: "Clase Chromium: Chrome, Edge, Opera, Yandex, Vivaldi",
      level: 2,
      paras: [
        "La mayoría de navegadores populares hoy van sobre Chromium. De ahí un render parecido y a menudo compatibilidad con extensiones de Chrome Web Store — con matices por vendor.",
        "Google Chrome es fuerte en el ecosistema Google y DevTools. Microsoft Edge está metido en Windows y también es Chromium — lo de «pocas extensiones» de 2017–2018 ya no encaja. Opera y Yandex Browser suman modos de ahorro de tráfico, servicios y features de UI propias. Vivaldi es para quien gusta afinar pestañas y paneles.",
      ],
      tables: [
        {
          caption: "Clases (simplificado)",
          headers: ["Navegador", "Foco habitual"],
          rows: [
            ["Chrome", "Ecosistema Google, extensiones, DevTools"],
            ["Edge", "Windows, Chromium, escenarios corporativos"],
            ["Firefox", "Privacidad, independencia, Linux"],
            ["Opera", "Features propias encima de Chromium"],
            ["Yandex Browser", "Servicios Yandex, Turbo/traducción"],
            ["Vivaldi", "UI flexible y pestañas"],
          ],
        },
      ],
      links: [
        {
          label: "Instalar Yandex Browser",
          href: "/es/blog/yandeks-brauzer/",
        },
        {
          label: "Extensiones de Chrome para SEO",
          href: "/es/blog/chrome-rasshireniya-seo/",
        },
      ],
      notes: [
        {
          title: "No confundas motor y marca",
          kind: "tip",
          text: "Mismo motor ≠ misma política de datos ni el mismo set de servicios por defecto. Lee qué se activa al instalar y al sincronizar.",
        },
      ],
    },
    {
      title: "Firefox: el otro polo",
      level: 2,
      paras: [
        "Firefox de Mozilla sigue siendo una opción sólida cuando importan ajustes de privacidad, bloqueo de trackers e independencia de Google/Microsoft. El catálogo de add-ons difiere del de Chrome, pero cubre muchas tareas.",
        "En Linux Firefox suele ser nativo y familiar. La curva es un poco más empinada que un Chromium «mínimo» — pero la flexibilidad de ajustes es mayor.",
      ],
    },
    {
      title: "Privacidad, datos y ads",
      level: 2,
      paras: [
        "Casi cualquier navegador grande se engancha al ecosistema del vendor: sugerencias, cuenta, telemetría. No es un veto automático, pero sí motivo para afinar sync, apagar extras y no dejar contraseñas críticas solo en la nube sin 2FA.",
        "Los prompts agresivos de «hacer predeterminado» son motivo para rechazar el checkbox — no el producto en sí si te encaja.",
      ],
      links: [
        {
          label: "Cookies en el navegador",
          href: "/es/blog/cookies/",
        },
        {
          label: "Gestor de contraseñas",
          href: "/es/blog/menedzher-paroley/",
        },
      ],
    },
    {
      title: "Cómo elegir en la práctica",
      level: 2,
      paras: [
        "Para Gmail/Drive/Ads, Chrome o Edge suelen ser cómodos. Para Yandex Direct, Metrika y Mail — Yandex Browser o cualquier navegador más extensiones. Si el foco son trackers — Firefox con protección afinada. Para checks de layout, guarda un segundo motor.",
        "No copies «Chrome es ideal para todos» de textos viejos: hardware, hábitos y amenazas cambiaron. Instala un candidato de forma oficial, úsalo una semana, quédate con el de menos fricción.",
      ],
      lists: [
        {
          intro: "Algoritmo corto:",
          items: [
            "formula dos o tres escenarios principales",
            "elige dos candidatos",
            "importa favoritos de forma temporal",
            "comprueba las extensiones que necesitas",
            "mantén uno principal más uno de reserva para tests",
          ],
        },
      ],
    },
    {
      title: "Conclusiones",
      level: 2,
      paras: [
        "Elegir navegador es cosa de tareas y ecosistema, no de un ranking eterno. Actualiza el software, descarga de sitios oficiales y no confundas instalar un producto con revisar todo el mercado.",
        "Instalar Yandex Browser — en una guía aparte; extensiones de marketing y SEO — en piezas relacionadas.",
      ],
    },
  ],
  closing: [
    "Define escenarios, compara dos candidatos oficiales en tus tareas y mantén un navegador principal más un segundo para checks — así la elección es por el trabajo, no por un roundup ajeno de 2018.",
  ],
  related: [
    "yandeks-brauzer",
    "chrome-rasshireniya-seo",
    "chrome-rasshireniya-marketing",
    "cookies",
    "menedzher-paroley",
    "https-seo",
  ],
};
