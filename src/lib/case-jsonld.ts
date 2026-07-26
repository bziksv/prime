/** Schema.org CaseStudy / CreativeWork for portfolio case pages. */
export function caseJsonLd(opts: {
  name: string;
  description: string;
  path: string;
  image?: string;
  client?: string;
  origin?: string;
}) {
  const origin = (opts.origin ?? "https://prime-ltd.su").replace(/\/$/, "");
  const url = new URL(opts.path, `${origin}/`).href;
  const image = opts.image
    ? opts.image.startsWith("http")
      ? opts.image
      : new URL(opts.image, `${origin}/`).href
    : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    name: opts.name,
    description: opts.description,
    url,
    ...(image ? { image } : {}),
    author: {
      "@type": "Organization",
      name: "ПРАЙМ",
      url: `${origin}/`,
    },
    ...(opts.client
      ? {
          about: {
            "@type": "Organization",
            name: opts.client,
          },
        }
      : {}),
  };
}
