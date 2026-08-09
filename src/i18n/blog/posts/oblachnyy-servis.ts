import type { BlogPost } from "../../../data/blog";

/** EN overlay for oblachnyy-servis — same structure as RU JSON. */
export const oblachnyyServisEn: BlogPost = {
  slug: "oblachnyy-servis",
  title: "Cloud service: types, benefits, and security",
  date: "2021-04-09",
  category: "Hosting",
  cover: "/images/blog/oblachnyy-servis/cover-en.webp",
  excerpt:
    "What cloud storage and cloud services are, how IaaS/PaaS/SaaS differ, benefits for business, and data risks.",
  lead: [
    "“The cloud” means access to storage or software over the internet, without the client’s own visible hardware stack. Files and compute live with the provider.",
    "Below: how it works, service types, and security questions. This is not a roundup of specific brands.",
  ],
  faq: [
    {
      q: "Is the cloud only a Drive for files?",
      a: "No. Also email, CRM, app hosting, virtual servers, and dozens of SaaS tools.",
    },
    {
      q: "Is it safe?",
      a: "Depends on the provider, access settings, and your processes. 2FA, permissions, and backups are required.",
    },
    {
      q: "How is it different from your own server?",
      a: "Less hardware work, pay-as-you-go / subscription, dependence on internet and the provider’s policy.",
    },
    {
      q: "Do you always need an internet connection?",
      a: "For online access — yes. Some clients have offline cache, but sync still goes over the network.",
    },
    {
      q: "What should a business choose?",
      a: "Start from the job: team files, email, CRM, site infrastructure, or analytics. Compare full cost, support, and data requirements.",
    },
    {
      q: "Do you need a backup if data is already in the cloud?",
      a: "Yes. Sync doesn’t save you from accidental delete, ransomware, or bad permissions. Test recovery ahead of time.",
    },
  ],
  sections: [
    {
      title: "How it works",
      level: 2,
      paras: [
        "You sign into a web UI or app and see a “drive,” mailbox, or service panel. Physically, data and compute run in the provider’s data centers — the client gets an abstraction.",
        "The provider owns part of the infrastructure, but the responsibility line depends on the model. User settings, permissions, content, and backups often stay with the company.",
      ],
      lists: [
        {
          intro: "Typical actions:",
          items: [
            "upload and share files",
            "collaborative editing",
            "run apps on subscription",
            "scale server resources",
          ],
        },
      ],
    },
    {
      title: "Types and benefits",
      level: 2,
      paras: [
        "Services are usually split into IaaS — virtual infrastructure, PaaS — a platform for building, and SaaS — ready software by subscription. Marketing most often meets SaaS: CRM, analytics, email, and cloud drives.",
        "A public cloud shares infrastructure across clients; a private cloud is dedicated to an organization; hybrid mixes both. Choice depends on data criticality, team, and integrations.",
      ],
      lists: [
        {
          intro: "Benefits:",
          items: [
            "fast start",
            "access from different devices",
            "less of your own admin work",
            "scaling with load",
          ],
        },
      ],
      links: [
        {
          label: "Web server",
          href: "/en/blog/veb-server/",
        },
      ],
    },
    {
      title: "Security and risks",
      level: 2,
      paras: [
        "Leaks more often come from weak passwords, excess permissions, and phishing — not from “cloud magic.” Encryption, 2FA, access audits, and a clear retention policy are the baseline.",
        "Check the contract: where data is stored, how incidents are reported, whether there is an activity log, and how you export when switching providers. For personal data, check legal requirements.",
      ],
      lists: [
        {
          intro: "Team minimum:",
          items: [
            "two-factor authentication",
            "separate accounts, not a shared password",
            "backup of critical data",
            "know which jurisdiction holds the data",
            "revoke access on offboarding",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Important",
          text: "For personal data, check legal requirements and the provider contract — not only a “convenient tariff.”",
        },
      ],
    },
    {
      title: "How to evaluate a service before rollout",
      level: 2,
      paras: [
        "Write scenarios: file collaboration, office access, a backup site, or launching an app. Then tariff and features are judged by the job — not by an ad promise.",
        "Run a short pilot with real roles: employee, manager, contractor, admin. It surfaces access, integration, and speed issues before a mass move.",
      ],
      lists: [
        {
          intro: "Compare before buying:",
          items: [
            "cost over the full term, not only month one",
            "SLA and support channels",
            "data export and compatibility",
            "permissions and activity audit",
          ],
        },
      ],
    },
    {
      title: "Migration and backup plan",
      level: 2,
      paras: [
        "Don’t move the whole storage in one day without an inventory. Split data by owners and criticality, set retention, and delete stale copies by company rules.",
        "A recovery plan beats a pretty “backup exists” checkbox. Assign an owner, pick copy frequency, and test restoring one file and a whole working folder.",
      ],
      lists: [
        {
          intro: "Minimum plan:",
          items: [
            "data inventory",
            "pilot group",
            "staff training",
            "recovery test",
            "regular permission review",
          ],
        },
      ],
    },
  ],
};

/** ES overlay for oblachnyy-servis — same structure as RU JSON / EN. */
export const oblachnyyServisEs: BlogPost = {
  slug: "oblachnyy-servis",
  title: "Servicio en la nube: tipos, beneficios y seguridad",
  date: "2021-04-09",
  category: "Hosting",
  cover: "/images/blog/oblachnyy-servis/cover.webp",
  excerpt:
    "Qué son el almacenamiento y los servicios en la nube, cómo difieren IaaS/PaaS/SaaS, beneficios para el negocio y riesgos de datos.",
  lead: [
    "«La nube» significa acceso a almacenamiento o software por internet, sin el stack de hardware visible del cliente. Archivos y cómputo viven en el proveedor.",
    "Abajo: cómo funciona, tipos de servicio y preguntas de seguridad. No es un roundup de marcas concretas.",
  ],
  faq: [
    {
      q: "¿La nube es solo un Drive para archivos?",
      a: "No. También email, CRM, hosting de apps, servidores virtuales y docenas de tools SaaS.",
    },
    {
      q: "¿Es seguro?",
      a: "Depende del proveedor, de los ajustes de acceso y de tus procesos. 2FA, permisos y backups son obligatorios.",
    },
    {
      q: "¿En qué se diferencia de un servidor propio?",
      a: "Menos trabajo de hardware, pago por uso / suscripción, dependencia de internet y de la política del proveedor.",
    },
    {
      q: "¿Siempre hace falta conexión a internet?",
      a: "Para acceso online — sí. Algunos clientes tienen cache offline, pero la sync sigue yendo por la red.",
    },
    {
      q: "¿Qué debe elegir un negocio?",
      a: "Parte del trabajo: archivos de equipo, email, CRM, infraestructura del sitio o analytics. Compara coste total, soporte y requisitos de datos.",
    },
    {
      q: "¿Hace falta backup si los datos ya están en la nube?",
      a: "Sí. La sync no te salva de un borrado accidental, ransomware o permisos mal puestos. Prueba la recuperación con antelación.",
    },
  ],
  sections: [
    {
      title: "Cómo funciona",
      level: 2,
      paras: [
        "Entras en una UI web o app y ves un «drive», buzón o panel del servicio. Físicamente, datos y cómputo corren en los data centers del proveedor — el cliente recibe una abstracción.",
        "El proveedor posee parte de la infraestructura, pero la línea de responsabilidad depende del modelo. Ajustes de usuario, permisos, contenido y backups suelen quedarse en la empresa.",
      ],
      lists: [
        {
          intro: "Acciones típicas:",
          items: [
            "subir y compartir archivos",
            "edición colaborativa",
            "correr apps por suscripción",
            "escalar recursos de servidor",
          ],
        },
      ],
    },
    {
      title: "Tipos y beneficios",
      level: 2,
      paras: [
        "Los servicios suelen partirse en IaaS — infraestructura virtual, PaaS — plataforma para construir, y SaaS — software listo por suscripción. El marketing suele encontrarse más con SaaS: CRM, analytics, email y drives en la nube.",
        "Una nube pública comparte infraestructura entre clientes; una privada está dedicada a una organización; la híbrida mezcla ambas. La elección depende de la criticidad de los datos, el equipo y las integraciones.",
      ],
      lists: [
        {
          intro: "Beneficios:",
          items: [
            "arranque rápido",
            "acceso desde distintos dispositivos",
            "menos admin propio",
            "escalado con la carga",
          ],
        },
      ],
      links: [
        {
          label: "Servidor web",
          href: "/es/blog/veb-server/",
        },
      ],
    },
    {
      title: "Seguridad y riesgos",
      level: 2,
      paras: [
        "Las fugas suelen venir más de contraseñas débiles, permisos de más y phishing — no de «magia de la nube». Cifrado, 2FA, auditorías de acceso y una política clara de retención son la base.",
        "Revisa el contrato: dónde se guardan los datos, cómo se reportan incidentes, si hay log de actividad y cómo exportas al cambiar de proveedor. Con datos personales, revisa los requisitos legales.",
      ],
      lists: [
        {
          intro: "Mínimo del equipo:",
          items: [
            "autenticación de dos factores",
            "cuentas separadas, no una contraseña compartida",
            "backup de datos críticos",
            "saber qué jurisdicción guarda los datos",
            "revocar acceso al offboarding",
          ],
        },
      ],
      notes: [
        {
          kind: "tip",
          title: "Importante",
          text: "Con datos personales, revisa requisitos legales y el contrato del proveedor — no solo un «tarifa cómoda».",
        },
      ],
    },
    {
      title: "Cómo evaluar un servicio antes del rollout",
      level: 2,
      paras: [
        "Escribe escenarios: colaboración en archivos, acceso de oficina, un sitio de respaldo o lanzar una app. Luego tarifa y features se juzgan por el trabajo — no por una promesa de ads.",
        "Haz un piloto corto con roles reales: empleado, manager, contractor, admin. Sacan a la luz problemas de acceso, integración y velocidad antes de un traslado masivo.",
      ],
      lists: [
        {
          intro: "Compara antes de comprar:",
          items: [
            "coste a plazo completo, no solo el mes uno",
            "SLA y canales de soporte",
            "exportación de datos y compatibilidad",
            "permisos y auditoría de actividad",
          ],
        },
      ],
    },
    {
      title: "Plan de migración y backup",
      level: 2,
      paras: [
        "No muevas todo el storage en un día sin inventario. Parte los datos por dueños y criticidad, fija retención y borra copias viejas según las reglas de la empresa.",
        "Un plan de recuperación gana a un checkbox bonito de «hay backup». Asigna un owner, elige frecuencia de copias y prueba restaurar un archivo y una carpeta de trabajo entera.",
      ],
      lists: [
        {
          intro: "Plan mínimo:",
          items: [
            "inventario de datos",
            "grupo piloto",
            "formación del staff",
            "prueba de recuperación",
            "revisión regular de permisos",
          ],
        },
      ],
    },
  ],
};
