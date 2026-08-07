/** Schema.org Service for agency service landing pages. */
export function serviceJsonLd(opts: {
  name: string;
  description: string;
  path: string;
  origin?: string;
  serviceType?: string;
  providerName?: string;
  /** ISO country code, or "Worldwide" for non-RU locales */
  areaServed?: string | "Worldwide";
}) {
  const origin = (opts.origin ?? "https://prime-ltd.su").replace(/\/$/, "");
  const area =
    opts.areaServed === "Worldwide"
      ? { "@type": "Place" as const, name: "Worldwide" }
      : {
          "@type": "Country" as const,
          name: opts.areaServed ?? "RU",
        };

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType || opts.name,
    url: new URL(opts.path, `${origin}/`).href,
    provider: {
      "@type": "Organization",
      name: opts.providerName ?? "ПРАЙМ",
      url: `${origin}/`,
    },
    areaServed: area,
  };
}
