import type { MetadataRoute } from "next";
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
];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPaths.map((path) => ({
    url: path === "/" ? site.url : `${site.url}${path}`,
  }));
}
