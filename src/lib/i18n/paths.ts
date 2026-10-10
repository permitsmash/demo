import { defaultLocale, isValidLocale, locales, type Locale } from "./locales";

export function splitLocalePrefix(pathname: string): { locale: Locale | null; pathname: string } {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const [, candidate, ...rest] = path.split("/");
  if (!isValidLocale(candidate)) {
    return { locale: null, pathname: path || "/" };
  }

  const stripped = rest.filter(Boolean).join("/");
  return { locale: candidate, pathname: stripped ? `/${stripped}` : "/" };
}

export function localizedPath(locale: Locale, href: string): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;

  const hashAt = href.indexOf("#");
  const hash = hashAt >= 0 ? href.slice(hashAt) : "";
  const withoutHash = hashAt >= 0 ? href.slice(0, hashAt) : href;
  const queryAt = withoutHash.indexOf("?");
  const query = queryAt >= 0 ? withoutHash.slice(queryAt) : "";
  const pathOnly = queryAt >= 0 ? withoutHash.slice(0, queryAt) : withoutHash;

  if (
    pathOnly === "/enroll" ||
    pathOnly.startsWith("/enroll/") ||
    pathOnly === "/api" ||
    pathOnly.startsWith("/api/")
  ) {
    return href;
  }

  const { pathname } = splitLocalePrefix(pathOnly);
  if (locale === defaultLocale) return `${pathname}${query}${hash}`;
  const prefixed = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  return `${prefixed}${query}${hash}`;
}

export function languageAlternates(pathname: string): Record<string, string> {
  const { pathname: stripped } = splitLocalePrefix(pathname);
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[locale] = localizedPath(locale, stripped);
  }
  languages["x-default"] = localizedPath(defaultLocale, stripped);
  return languages;
}
