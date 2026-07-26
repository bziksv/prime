/** Schema.org Service for agency service landing pages. */
export function serviceJsonLd(opts: {
  name: string;
  description: string;
  path: string;
  origin?: string;
  serviceType?: string;
}) {
  const origin = (opts.origin ?? "https://prime-ltd.su").replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType || opts.name,
    url: new URL(opts.path, `${origin}/`).href,
    provider: {
      "@type": "Organization",
      name: "ПРАЙМ",
      url: `${origin}/`,
    },
    areaServed: {
      "@type": "Country",
      name: "RU",
    },
  };
}
