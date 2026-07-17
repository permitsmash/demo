export function formatMessage(
  template: string,
  values?: Record<string, string | number>
) {
  if (!values) return template;
  return template.replace(/\{(\w+)\}/g, (_, key: string) =>
    key in values ? String(values[key]) : `{${key}}`
  );
}
