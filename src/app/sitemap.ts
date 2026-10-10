import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/locales";
import { localizedPath } from "@/lib/i18n/paths";
import { site } from "@/lib/site";

const publicPaths = [
  "/",
  "/courses",
  "/road-tests",
  "/classes",
  "/about",
  "/contact",
  "/faq",
  "/legal",
  "/careers",
  "/resources",
];

function absolute(path: string) {
  return path === "/" ? site.url : `${site.url}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPaths.flatMap((path) =>
    locales.map((locale) => {
      const languages: Record<string, string> = {};
      for (const code of locales) {
        languages[code] = absolute(localizedPath(code, path));
      }
      languages["x-default"] = absolute(localizedPath("en", path));
      return {
        url: absolute(localizedPath(locale, path)),
        alternates: { languages },
      };
    }),
  );
}
