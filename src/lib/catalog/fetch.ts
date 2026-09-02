import { cache } from "react";
import type { PublicSchoolCatalog } from "@/lib/catalog/types";

const DEFAULT_CATALOG_API_BASE_URL = "https://permitsmash.com";
const DEFAULT_SCHOOL_SLUG = "jmc-driving-school";
const CATALOG_REVALIDATE_SECONDS = 60;

export function getCatalogApiUrl() {
  const baseUrl = (
    process.env.CATALOG_API_BASE_URL ?? DEFAULT_CATALOG_API_BASE_URL
  ).replace(/\/$/, "");
  const slug = process.env.SCHOOL_CATALOG_SLUG ?? DEFAULT_SCHOOL_SLUG;
  return `${baseUrl}/api/public/schools/${slug}/catalog`;
}

export async function fetchSchoolCatalog(): Promise<PublicSchoolCatalog | null> {
  const url = getCatalogApiUrl();

  try {
    const response = await fetch(url, {
      next: { revalidate: CATALOG_REVALIDATE_SECONDS },
      headers: { Accept: "application/json" },
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as PublicSchoolCatalog;
  } catch {
    return null;
  }
}

export const getSchoolCatalog = cache(fetchSchoolCatalog);
