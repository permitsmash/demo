import { cookies, headers } from "next/headers";
import { defaultLocale, isValidLocale, LOCALE_COOKIE, type Locale } from "./locales";

export async function getLocale(): Promise<Locale> {
  const headerStore = await headers();
  const fromHeader = headerStore.get("x-locale");
  if (isValidLocale(fromHeader)) return fromHeader;

  const cookieStore = await cookies();
  const value = cookieStore.get(LOCALE_COOKIE)?.value;
  return isValidLocale(value) ? value : defaultLocale;
}
