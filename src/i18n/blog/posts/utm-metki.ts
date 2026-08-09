import type { BlogPost } from "../../../data/blog";

/** EN overlay for utm-metki — same structure as RU JSON. */
export const utmMetkiEn: BlogPost = {
  slug: "utm-metki",
  title: "UTM tags: what they are and why to tag links",
  date: "2018-04-20",
  category: "Digital marketing",
  cover: "/images/blog/utm-metki/cover-en.webp",
  excerpt:
    "Why UTM tags matter, which parameters are required (source, medium, campaign), how to name values without report chaos, and how to read them in Metrica and Google Analytics.",
  lead: [
    "UTM tags are URL parameters that pass source, channel, and campaign into analytics. Without them it’s hard to see which ad, email, or post brought the lead — not just “/cpc.”",
    "Below: tag structure, required and optional fields, naming rules, and common mistakes. Link builders speed typing; you still own the value convention.",
  ],
  faq: [
    {
      q: "What is UTM?",
      a: "Parameters like utm_source, utm_medium, utm_campaign in the link query string. The counter reads them and splits the visit by sources and campaigns.",
    },
    {
      q: "Which tags are required?",
      a: "Usually source, medium, and campaign. Without the required set the rest often isn’t attributed correctly.",
    },
    {
      q: "Do I need UTM for organic traffic?",
      a: "No: search passes the channel itself. UTM is for ads, emails, posts, partners — where the source would otherwise blur.",
    },
    {
      q: "Do Metrica and GA read UTM the same way?",
      a: "Both understand the standard. Reports and groupings differ — compare trends inside one system.",
    },
    {
      q: "Can UTM values use Cyrillic?",
      a: "Prefer Latin and transliteration: fewer encoding surprises and duplicates like “Yandex” vs “yandex.”",
    },
    {
      q: "How does medium=cpc differ from cpm?",
      a: "cpc means pay per click (search/context); cpm means pay per impressions (display). email, social, referral are other channel types.",
    },
    {
      q: "Do UTM tags hurt SEO?",
      a: "Keep a clean URL in the index on canonical landings; UTM belongs on ad and email links. Canonical and consistency matter.",
    },
    {
      q: "Do I need my own UTM generator?",
      a: "Useful at volume. The key is one value dictionary in the campaign table — not every manager inventing anew.",
    },
  ],
  sections: [
    {
      title: "Why tag links",
      level: 2,
      paras: [
        "Budget in Yandex Direct, Google Ads, social, and email without tagging becomes a “paid traffic” report with no detail: which ad, keyword, banner, or letter brought the lead.",
        "UTM helps compare search vs network, campaigns, creatives, and landings — and turn off what burns money without leads.",
      ],
      lists: [
        {
          intro: "Typical questions tags answer:",
          items: [
            "which campaign has the best CR",
            "whether premium placement pays off",
            "which email banner brought a sale",
            "which social post drove clicks",
          ],
        },
      ],
      links: [
        {
          label: "Web analytics tools",
          href: "/en/blog/instrumenty-veb-analitiki/",
        },
      ],
    },
    {
      title: "What UTM looks like in a URL",
      level: 2,
      paras: [
        "Add a query to the landing URL: `?utm_source=yandex&utm_medium=cpc&utm_campaign=windows-voronezh`. Parameters are `name=value` pairs joined by `&`. No spaces in the finished link.",
        "Ad templates often use ads account substitutions (dynamic parameters) that insert campaign/ad IDs on click. Keep the static part (source/medium/names) in one style anyway.",
      ],
      lists: [
        {
          intro: "Mini string rules:",
          items: [
            "Latin, lowercase",
            "words with `-` or `_`",
            "no spaces or fancy capitals",
            "one dictionary for the whole team",
          ],
        },
      ],
      notes: [
        {
          title: "Common mistake",
          kind: "warning",
          text: "Writing `Yandex_Direct` in one ad and `yandex` in another — the report shows two “sources” for the same system.",
        },
      ],
    },
    {
      title: "Required parameters",
      level: 2,
      paras: [
        "**utm_source** — source: yandex, google, vk, newsletter, partner_x.",
        "**utm_medium** — channel type: cpc, cpm, email, social, banner, referral.",
        "**utm_campaign** — campaign/offer name: `windows-spring-2026`, `brand-search`. Build modularly, but short and readable in reports.",
      ],
      tables: [
        {
          caption: "Required UTM examples",
          headers: ["Parameter", "Example value", "Meaning"],
          rows: [
            ["utm_source", "yandex", "Ad system / placement"],
            ["utm_medium", "cpc", "Pay per click"],
            ["utm_campaign", "plastic-windows", "Campaign / theme"],
          ],
        },
      ],
      links: [
        {
          label: "Premium placement in Direct",
          href: "/en/blog/spetsrazmeshchenie-direkt/",
        },
      ],
    },
    {
      title: "Optional parameters",
      level: 2,
      paras: [
        "**utm_term** — usually the keyword or targeting audience. Useful in search if the ads account doesn’t pass the keyword otherwise.",
        "**utm_content** — distinguish ads, banners, email buttons (`banner-a`, `cta-green`). A/B creatives show up in analytics, not only in the ads account.",
      ],
      lists: [
        {
          intro: "When secondary helps:",
          items: [
            "many ads in one campaign",
            "several buttons in one email",
            "need to match keyword ↔ query in reports",
          ],
        },
      ],
    },
    {
      title: "Metrica, GA, and auto-tagging",
      level: 2,
      paras: [
        "Yandex Metrica builds reports by tags (source tree). Google Analytics splits UTM by Source/Medium/Campaign. Both expect the full required set — otherwise the visit may lose tagging.",
        "Direct and Google Ads have auto-tagging / tracking templates. You can combine them with UTM, but don’t spawn conflicting schemes: lock one standard in the playbook.",
      ],
      lists: [
        {
          intro: "Rollout practice:",
          items: [
            "source/medium convention table",
            "link template in the generator",
            "click check in a clean window",
            "visit check in Metrica/GA on launch day",
          ],
        },
      ],
      links: [
        {
          label: "Google Analytics",
          href: "/en/blog/google-analytics/",
        },
        {
          label: "Goals in Google Analytics",
          href: "/en/blog/google-analytics-tseli/",
        },
      ],
    },
    {
      title: "How to create tags without chaos",
      level: 2,
      paras: [
        "Online builders and sheets speed assembly: paste the landing URL and field values — get a finished link. For hundreds of ads you need a template with ads account auto-substitutions.",
        "Don’t tag internal site links with UTM “for looks”: you’ll pollute paths and attribution. UTM belongs on external campaign entry points.",
      ],
      lists: [
        {
          intro: "Quality checklist:",
          items: [
            "source + medium + campaign present",
            "values from the team dictionary",
            "landing opens with tags",
            "visit visible in analytics",
            "no UTM on internal menus",
          ],
        },
      ],
      notes: [
        {
          title: "Link to SEO",
          kind: "tip",
          text: "UTM alone doesn’t push organic rankings. They help evaluate paid and referral traffic. Organic visibility follows its own rules: prep and ranking buildup are different timelines — page-one share for the core is typically planned for two to six months after work starts.",
        },
      ],
      links: [
        {
          label: "Paid search and SEO",
          href: "/en/blog/kontekst-i-seo/",
        },
      ],
    },
  ],
  related: [
    "instrumenty-veb-analitiki",
    "google-analytics",
    "google-analytics-tseli",
    "kontekst-i-seo",
    "spetsrazmeshchenie-direkt",
    "veb-analitik",
  ],
};

/** ES overlay for utm-metki — same structure as RU JSON / EN. */
export const utmMetkiEs: BlogPost = {
  slug: "utm-metki",
  title: "Etiquetas UTM: qué son y por qué marcar los enlaces",
  date: "2018-04-20",
  category: "Digital marketing",
  cover: "/images/blog/utm-metki/cover.webp",
  excerpt:
    "Por qué importan las UTM, qué parámetros son obligatorios (source, medium, campaign), cómo nombrar valores sin caos en informes y cómo leerlos en Metrica y Google Analytics.",
  lead: [
    "Las etiquetas UTM son parámetros en la URL que pasan fuente, canal y campaña a analytics. Sin ellas cuesta ver qué anuncio, email o post trajo el lead — no solo un genérico «/cpc».",
    "Abajo: estructura de la etiqueta, campos obligatorios y opcionales, reglas de naming y errores típicos. Los generadores de enlaces aceleran el tipeo; la convención de valores la decides tú.",
  ],
  faq: [
    {
      q: "¿Qué es UTM?",
      a: "Parámetros como utm_source, utm_medium, utm_campaign en la query string del enlace. El contador los lee y parte la visita por fuentes y campañas.",
    },
    {
      q: "¿Qué etiquetas son obligatorias?",
      a: "Suele bastar source, medium y campaign. Sin el set requerido el resto a menudo no se atribuye bien.",
    },
    {
      q: "¿Hace falta UTM en el tráfico orgánico?",
      a: "No: la búsqueda ya pasa el canal. UTM es para ads, emails, posts, partners — donde la fuente se difuminaría.",
    },
    {
      q: "¿Metrica y GA leen UTM igual?",
      a: "Ambos entienden el estándar. Informes y agrupaciones difieren — compara tendencias dentro de un mismo sistema.",
    },
    {
      q: "¿Se puede usar cirílico en los valores UTM?",
      a: "Mejor latín y transliteración: menos sorpresas de encoding y menos duplicados tipo «Yandex» vs «yandex».",
    },
    {
      q: "¿En qué se diferencia medium=cpc de cpm?",
      a: "cpc es pago por clic (búsqueda/contexto); cpm es pago por impresiones (display). email, social, referral son otros tipos de canal.",
    },
    {
      q: "¿Las UTM perjudican el SEO?",
      a: "Mantén URL limpia en el índice en landings canónicas; UTM va en enlaces de ads y email. Canonical y consistencia importan.",
    },
    {
      q: "¿Necesito mi propio generador de UTM?",
      a: "Útil a volumen. Lo clave es un diccionario de valores en la tabla de campañas — no que cada manager invente de nuevo.",
    },
  ],
  sections: [
    {
      title: "Por qué etiquetar enlaces",
      level: 2,
      paras: [
        "Presupuesto en Yandex Direct, Google Ads, social y email sin etiquetar acaba en un informe de «tráfico de pago» sin detalle: qué anuncio, keyword, banner o carta trajo el lead.",
        "UTM ayuda a comparar búsqueda vs red, campañas, creatividades y landings — y a apagar lo que quema dinero sin leads.",
      ],
      lists: [
        {
          intro: "Preguntas típicas que responden las etiquetas:",
          items: [
            "qué campaña tiene mejor CR",
            "si el emplazamiento premium se paga",
            "qué banner del email trajo una venta",
            "qué post social impulsó clics",
          ],
        },
      ],
      links: [
        {
          label: "Herramientas de web analytics",
          href: "/es/blog/instrumenty-veb-analitiki/",
        },
      ],
    },
    {
      title: "Cómo se ve UTM en una URL",
      level: 2,
      paras: [
        "Añades una query a la URL de la landing: `?utm_source=yandex&utm_medium=cpc&utm_campaign=windows-voronezh`. Los parámetros son pares `nombre=valor` unidos por `&`. Sin espacios en el enlace final.",
        "Las plantillas de ads suelen usar sustituciones de la cuenta (parámetros dinámicos) que insertan IDs de campaña/anuncio al clic. Aun así, mantén la parte estática (source/medium/nombres) en un solo estilo.",
      ],
      lists: [
        {
          intro: "Mini reglas de cadena:",
          items: [
            "latín, minúsculas",
            "palabras con `-` o `_`",
            "sin espacios ni mayúsculas «de adorno»",
            "un diccionario para todo el equipo",
          ],
        },
      ],
      notes: [
        {
          title: "Error frecuente",
          kind: "warning",
          text: "Escribir `Yandex_Direct` en un anuncio y `yandex` en otro — el informe muestra dos «fuentes» para el mismo sistema.",
        },
      ],
    },
    {
      title: "Parámetros obligatorios",
      level: 2,
      paras: [
        "**utm_source** — fuente: yandex, google, vk, newsletter, partner_x.",
        "**utm_medium** — tipo de canal: cpc, cpm, email, social, banner, referral.",
        "**utm_campaign** — nombre de campaña/oferta: `windows-spring-2026`, `brand-search`. Modular, pero corto y legible en informes.",
      ],
      tables: [
        {
          caption: "Ejemplos de UTM obligatorias",
          headers: ["Parámetro", "Valor de ejemplo", "Significado"],
          rows: [
            ["utm_source", "yandex", "Sistema de ads / emplazamiento"],
            ["utm_medium", "cpc", "Pago por clic"],
            ["utm_campaign", "plastic-windows", "Campaña / tema"],
          ],
        },
      ],
      links: [
        {
          label: "Emplazamiento premium en Direct",
          href: "/es/blog/spetsrazmeshchenie-direkt/",
        },
      ],
    },
    {
      title: "Parámetros opcionales",
      level: 2,
      paras: [
        "**utm_term** — suele ser la keyword o la audiencia de targeting. Útil en búsqueda si la cuenta de ads no pasa la keyword de otro modo.",
        "**utm_content** — distinguir anuncios, banners, botones del email (`banner-a`, `cta-green`). Los A/B de creatividades aparecen en analytics, no solo en la cuenta de ads.",
      ],
      lists: [
        {
          intro: "Cuándo ayudan los secundarios:",
          items: [
            "muchos anuncios en una campaña",
            "varios botones en un mismo email",
            "necesitas cruzar keyword ↔ consulta en informes",
          ],
        },
      ],
    },
    {
      title: "Metrica, GA y auto-tagging",
      level: 2,
      paras: [
        "Yandex Metrica arma informes por etiquetas (árbol de fuentes). Google Analytics parte UTM por Source/Medium/Campaign. Ambos esperan el set obligatorio completo — si no, la visita puede perder el etiquetado.",
        "Direct y Google Ads tienen auto-tagging / plantillas de tracking. Puedes combinarlos con UTM, pero no inventes esquemas en conflicto: fija un estándar en el playbook.",
      ],
      lists: [
        {
          intro: "Práctica de rollout:",
          items: [
            "tabla de convención source/medium",
            "plantilla de enlace en el generador",
            "comprobar el clic en ventana limpia",
            "comprobar la visita en Metrica/GA el día del lanzamiento",
          ],
        },
      ],
      links: [
        {
          label: "Google Analytics",
          href: "/es/blog/google-analytics/",
        },
        {
          label: "Goals en Google Analytics",
          href: "/es/blog/google-analytics-tseli/",
        },
      ],
    },
    {
      title: "Cómo crear etiquetas sin caos",
      level: 2,
      paras: [
        "Generadores online y hojas aceleran el montaje: pegas la URL de la landing y los valores — obtienes el enlace listo. Con cientos de anuncios hace falta plantilla con auto-sustituciones de la cuenta de ads.",
        "No etiquetes con UTM los enlaces internos del sitio «por lucir»: ensucias rutas y atribución. UTM va en puntos de entrada externos de campaña.",
      ],
      lists: [
        {
          intro: "Checklist de calidad:",
          items: [
            "source + medium + campaign presentes",
            "valores del diccionario del equipo",
            "la landing abre con etiquetas",
            "la visita se ve en analytics",
            "sin UTM en menús internos",
          ],
        },
      ],
      notes: [
        {
          title: "Enlace con SEO",
          kind: "tip",
          text: "Las UTM solas no empujan rankings orgánicos. Ayudan a evaluar tráfico de pago y referral. La visibilidad orgánica sigue sus propias reglas: prep y subida de rankings son plazos distintos — la cuota del núcleo en primera página suele planificarse a dos–seis meses tras arrancar el trabajo.",
        },
      ],
      links: [
        {
          label: "Paid search y SEO",
          href: "/es/blog/kontekst-i-seo/",
        },
      ],
    },
  ],
  related: [
    "instrumenty-veb-analitiki",
    "google-analytics",
    "google-analytics-tseli",
    "kontekst-i-seo",
    "spetsrazmeshchenie-direkt",
    "veb-analitik",
  ],
};
