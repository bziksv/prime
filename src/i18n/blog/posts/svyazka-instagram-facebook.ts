import type { BlogPost } from "../../../data/blog";

/** EN overlay for svyazka-instagram-facebook — same structure as RU JSON. */
export const svyazkaInstagramFacebookEn: BlogPost = {
  slug: "svyazka-instagram-facebook",
  title: "Linking Instagram and Facebook: how to connect and disconnect",
  date: "2021-07-16",
  category: "SMM",
  cover: "/images/blog/svyazka-instagram-facebook/cover-en.webp",
  excerpt:
    "Why link Instagram to Facebook via Accounts Center, what a professional profile gives you, how to unlink, and which cross-posting expectations are outdated.",
  lead: [
    "Linking Instagram and Facebook matters when you use ecosystem business tools: a Page, Ads Manager, shared settings in Accounts Center. It isn’t required for everyone — it’s a setup for a specific job.",
    "Below: why people link accounts, plus the usual connect and unlink flow. Menu labels change; if it doesn’t match 2021 screenshots, follow Meta Help and the in-app wizard.",
  ],
  legalNotice: {
    title: "Note",
    text: "This article is informational and does not encourage use of the platforms. Instagram* and Facebook* are products of Meta Platforms Inc.; in the Russian Federation Meta’s activity is recognized as extremist, and use of the services may have legal consequences.",
  },
  faq: [
    {
      q: "Is linking required for a business account?",
      a: "Not always. The requirement used to appear more often. Now it depends on region and scenario (especially ads). See also the Instagram business account article.",
    },
    {
      q: "How many Facebook Pages can I attach?",
      a: "Limits have changed: one main Page per profile is often convenient. To switch — unlink the current connection in Accounts Center first.",
    },
    {
      q: "Will posts appear on Facebook automatically?",
      a: "Don’t count on “auto-post everything forever.” Cross-publishing is configured separately and behaves differently; check previews on both sides.",
    },
    {
      q: "Does linking protect against hacks?",
      a: "Linked logins sometimes simplify recovery, but they’re not a password, 2FA, or session-control substitute. The myth “linked = never banned” is false.",
    },
    {
      q: "Where do I unlink accounts?",
      a: "Usually in Accounts Center from Instagram or Facebook: profile → remove from center / disconnect. Check current UI labels.",
    },
  ],
  sections: [
    {
      title: "Why link accounts",
      level: 2,
      paras: [
        "Typical reasons: access to ad tools, attaching a professional Facebook Page, a shared management link in Accounts Center, contacts and insights for an Instagram professional profile.",
        "Don’t expect reach magic “by itself”: reach comes from content and promotion, not from a “accounts linked” checkbox.",
      ],
      lists: [
        {
          intro: "Realistic pros:",
          items: [
            "easier to run ads and a Page in one ecosystem",
            "Instagram professional mode with insights and contacts",
            "centralized login settings (with security caveats)",
          ],
        },
        {
          intro: "What not to promise yourself:",
          items: [
            "a guarantee against bans",
            "automatic ER growth",
            "that every post duplicates perfectly without checking",
          ],
        },
      ],
      links: [
        {
          label: "Instagram business account",
          href: "/en/blog/biznes-akkaunt-instagram/",
        },
        {
          label: "Instagram ads",
          href: "/en/blog/reklama-instagram/",
        },
      ],
    },
    {
      title: "How to link via Accounts Center",
      level: 2,
      paras: [
        "Common path: Instagram → settings → Accounts Center → add accounts / connect Facebook → sign in and confirm permissions. Item names drift (“Professional access,” “Pages,” etc.).",
        "Alternative — start from the Facebook Page / professional settings and offer to link Instagram. On phone the wizard is usually fuller than on a trimmed web UI.",
        "After linking, check: the right Page is selected, Instagram category and contacts are OK, test access to Ads Manager (if you need it).",
      ],
      lists: [
        {
          intro: "Before linking:",
          items: [
            "access to the right Facebook and Page permissions",
            "current password and two-factor auth",
            "clarity on which Instagram profile is primary",
            "a backup of important data/contacts just in case",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Tip",
          text: "Don’t approve suspicious “link account” prompts from third-party apps. Only the official Instagram/Facebook wizard.",
        },
      ],
    },
    {
      title: "Professional profile after linking",
      level: 2,
      paras: [
        "Linking often goes with switching to professional/business mode: contact button, category, built-in insights, path to ads.",
        "Insights and buttons don’t replace design and offer. Account type is the base; content and CTA decide whether someone stays.",
      ],
      links: [
        {
          label: "Instagram profile design",
          href: "/en/blog/oformlenie-stranicy-instagram/",
        },
        {
          label: "Instagram insights",
          href: "/en/blog/statistika-instagram/",
        },
      ],
    },
    {
      title: "How to unlink",
      level: 2,
      paras: [
        "Via Instagram: Accounts Center → the profile → remove / disconnect from the center. Via Facebook: account / center settings → linked accounts or apps → Instagram → disconnect.",
        "Unlinking is needed when changing Page, splitting personal and work, or fixing access issues. After disconnect, check login, ad assets, and whether professional features stayed or need re-setup.",
      ],
      lists: [
        {
          intro: "After unlinking:",
          items: [
            "sign into both accounts separately",
            "check Ads Manager and roles",
            "make sure no foreign sessions remain",
            "when linking again — pick the correct Page",
          ],
        },
      ],
    },
  ],
};

/** ES overlay for svyazka-instagram-facebook — same structure as RU JSON / EN. */
export const svyazkaInstagramFacebookEs: BlogPost = {
  slug: "svyazka-instagram-facebook",
  title: "Vincular Instagram y Facebook: cómo conectar y desconectar",
  date: "2021-07-16",
  category: "SMM",
  cover: "/images/blog/svyazka-instagram-facebook/cover.webp",
  excerpt:
    "Por qué vincular Instagram a Facebook vía Accounts Center, qué da un perfil profesional, cómo desvincular y qué expectativas de cross-posting están obsoletas.",
  lead: [
    "Vincular Instagram y Facebook importa cuando usas herramientas de negocio del ecosistema: una Page, Ads Manager, ajustes compartidos en Accounts Center. No es obligatorio para todos — es un setup para un trabajo concreto.",
    "Abajo: por qué la gente vincula cuentas, más el flujo habitual de conectar y desvincular. Las etiquetas del menú cambian; si no encaja con capturas de 2021, sigue la Help de Meta y el asistente in-app.",
  ],
  legalNotice: {
    title: "Nota",
    text: "Este artículo es informativo y no invita a usar las plataformas. Instagram* y Facebook* son productos de Meta Platforms Inc.; en la Federación Rusa la actividad de Meta está reconocida como extremista, y el uso de los servicios puede tener consecuencias legales.",
  },
  faq: [
    {
      q: "¿La vinculación es obligatoria para una cuenta business?",
      a: "No siempre. El requisito aparecía más a menudo antes. Ahora depende de la región y del escenario (sobre todo ads). Ver también el artículo de cuenta business de Instagram.",
    },
    {
      q: "¿Cuántas Facebook Pages puedo adjuntar?",
      a: "Los límites han cambiado: a menudo conviene una Page principal por perfil. Para cambiar — desvincula primero la conexión actual en Accounts Center.",
    },
    {
      q: "¿Los posts aparecerán en Facebook automáticamente?",
      a: "No cuentes con «auto-publicar todo para siempre». El cross-publishing se configura aparte y se comporta distinto; revisa previews en ambos lados.",
    },
    {
      q: "¿La vinculación protege contra hacks?",
      a: "Los logins vinculados a veces simplifican la recuperación, pero no sustituyen contraseña, 2FA ni control de sesiones. El mito «vinculado = nunca baneado» es falso.",
    },
    {
      q: "¿Dónde desvinculo las cuentas?",
      a: "Suele ser en Accounts Center desde Instagram o Facebook: perfil → quitar del centro / desconectar. Revisa las etiquetas de UI actuales.",
    },
  ],
  sections: [
    {
      title: "Por qué vincular cuentas",
      level: 2,
      paras: [
        "Motivos típicos: acceso a herramientas de ads, adjuntar una Facebook Page profesional, un enlace de gestión compartido en Accounts Center, contactos e insights para un perfil profesional de Instagram.",
        "No esperes magia de alcance «sola»: el alcance viene del contenido y la promoción, no de una casilla «cuentas vinculadas».",
      ],
      lists: [
        {
          intro: "Pros realistas:",
          items: [
            "más fácil llevar ads y una Page en un ecosistema",
            "modo profesional de Instagram con insights y contactos",
            "ajustes de login centralizados (con matices de seguridad)",
          ],
        },
        {
          intro: "Qué no prometerte:",
          items: [
            "una garantía contra bans",
            "crecimiento automático del ER",
            "que cada post se duplique perfecto sin revisar",
          ],
        },
      ],
      links: [
        {
          label: "Cuenta business de Instagram",
          href: "/es/blog/biznes-akkaunt-instagram/",
        },
        {
          label: "Ads en Instagram",
          href: "/es/blog/reklama-instagram/",
        },
      ],
    },
    {
      title: "Cómo vincular vía Accounts Center",
      level: 2,
      paras: [
        "Ruta habitual: Instagram → ajustes → Accounts Center → añadir cuentas / conectar Facebook → iniciar sesión y confirmar permisos. Los nombres de ítems se mueven («Professional access», «Pages», etc.).",
        "Alternativa — empezar desde la Facebook Page / ajustes profesionales y ofrecer vincular Instagram. En el móvil el asistente suele estar más completo que en una UI web recortada.",
        "Tras vincular, revisa: está elegida la Page correcta, la categoría y contactos de Instagram están OK, prueba acceso a Ads Manager (si lo necesitas).",
      ],
      lists: [
        {
          intro: "Antes de vincular:",
          items: [
            "acceso al Facebook correcto y permisos de la Page",
            "contraseña actual y autenticación en dos factores",
            "claridad sobre qué perfil de Instagram es el principal",
            "un backup de datos/contactos importantes por si acaso",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Consejo",
          text: "No apruebes prompts sospechosos de «vincular cuenta» de apps de terceros. Solo el asistente oficial de Instagram/Facebook.",
        },
      ],
    },
    {
      title: "Perfil profesional tras vincular",
      level: 2,
      paras: [
        "La vinculación a menudo va con el paso a modo profesional/business: botón de contacto, categoría, insights integrados, vía a ads.",
        "Insights y botones no sustituyen diseño y oferta. El tipo de cuenta es la base; el contenido y el CTA deciden si alguien se queda.",
      ],
      links: [
        {
          label: "Diseño del perfil de Instagram",
          href: "/es/blog/oformlenie-stranicy-instagram/",
        },
        {
          label: "Insights de Instagram",
          href: "/es/blog/statistika-instagram/",
        },
      ],
    },
    {
      title: "Cómo desvincular",
      level: 2,
      paras: [
        "Vía Instagram: Accounts Center → el perfil → quitar / desconectar del centro. Vía Facebook: ajustes de cuenta / centro → cuentas o apps vinculadas → Instagram → desconectar.",
        "Desvincular hace falta al cambiar de Page, separar personal y trabajo o arreglar problemas de acceso. Tras desconectar, revisa login, assets de ads y si las funciones profesionales se quedaron o necesitan re-setup.",
      ],
      lists: [
        {
          intro: "Tras desvincular:",
          items: [
            "iniciar sesión en ambas cuentas por separado",
            "revisar Ads Manager y roles",
            "asegurarte de que no quedan sesiones ajenas",
            "al vincular de nuevo — elegir la Page correcta",
          ],
        },
      ],
    },
  ],
};
