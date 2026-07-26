export type BreadcrumbItem = { label: string; href?: string };

/** Schema.org BreadcrumbList from visible crumb trail. */
export function breadcrumbJsonLd(
  items: BreadcrumbItem[],
  options: { origin?: string; currentPath?: string } = {},
) {
  const origin = (options.origin ?? "https://prime-ltd.su").replace(/\/$/, "");
  const last = items.length - 1;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      const href =
        item.href ||
        (index === last && options.currentPath ? options.currentPath : undefined);
      const entry: Record<string, unknown> = {
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
      };
      if (href) {
        entry.item = new URL(href, `${origin}/`).href;
      }
      return entry;
    }),
  };
}
