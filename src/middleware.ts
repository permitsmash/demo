import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isValidLocale, LOCALE_COOKIE, type Locale } from "@/lib/i18n/locales";

function detectLocale(request: NextRequest): Locale {
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const normalized = acceptLanguage.toLowerCase();

  if (normalized.includes("ht")) return "ht";
  if (normalized.includes("pt")) return "pt";
  if (normalized.includes("es")) return "es";
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const existing = request.cookies.get(LOCALE_COOKIE)?.value;

  if (!isValidLocale(existing)) {
    const locale = detectLocale(request);
    response.cookies.set(LOCALE_COOKIE, locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp4)$).*)"],
};
