import { NextResponse, type NextRequest } from "next/server";
import { localizedPath, splitLocalePrefix } from "@/lib/i18n/paths";
import { defaultLocale, isValidLocale, LOCALE_COOKIE, type Locale } from "@/lib/i18n/locales";

const COOKIE_OPTIONS = {
  path: "/",
  maxAge: 60 * 60 * 24 * 365,
  sameSite: "lax" as const,
};

function isLocaleNeutral(pathname: string) {
  return (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/enroll") ||
    pathname === "/sitemap.xml" ||
    pathname === "/robots.txt" ||
    pathname === "/favicon.ico"
  );
}

function withLocaleHeaders(request: NextRequest, locale: Locale, pathname: string) {
  const headers = new Headers(request.headers);
  headers.set("x-locale", locale);
  headers.set("x-pathname", pathname);
  return headers;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (isLocaleNeutral(pathname)) return NextResponse.next();

  const parsed = splitLocalePrefix(pathname);

  if (parsed.locale === defaultLocale) {
    const url = request.nextUrl.clone();
    url.pathname = parsed.pathname;
    return NextResponse.redirect(url);
  }

  if (parsed.locale) {
    const url = request.nextUrl.clone();
    url.pathname = parsed.pathname;
    const response = NextResponse.rewrite(url, {
      request: { headers: withLocaleHeaders(request, parsed.locale, parsed.pathname) },
    });
    response.cookies.set(LOCALE_COOKIE, parsed.locale, COOKIE_OPTIONS);
    return response;
  }

  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  if (isValidLocale(cookie) && cookie !== defaultLocale) {
    const url = request.nextUrl.clone();
    url.pathname = localizedPath(cookie, pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next({
    request: { headers: withLocaleHeaders(request, defaultLocale, pathname) },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp4)$).*)"],
};
