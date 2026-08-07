/**
 * JSON for embedding inside `<script type="application/json|ld+json">`.
 * Escapes `<` so a literal `</script>` in content cannot close the tag.
 * `JSON.parse` still recovers the original string.
 */
export function jsonForScript(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
