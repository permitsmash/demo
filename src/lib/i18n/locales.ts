export const locales = ["en", "es", "pt", "ht"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const LOCALE_COOKIE = "NEXT_LOCALE";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  es: "Español",
  pt: "Português",
  ht: "Kreyòl",
};

export function isValidLocale(value: string | undefined | null): value is Locale {
  return locales.includes(value as Locale);
}
