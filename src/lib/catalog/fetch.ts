import { cache } from "react";
import type { PublicSchoolCatalog } from "@/lib/catalog/types";

const DEFAULT_CATALOG_API_BASE_URL = "https://permitsmash.com";
const DEFAULT_SCHOOL_SLUG = "jmc-driving-school";
const CATALOG_REVALIDATE_SECONDS = 60;
const CATALOG_FETCH_TIMEOUT_MS = 10_000;

export function getCatalogApiUrl() {
  const baseUrl = (
    process.env.CATALOG_API_BASE_URL ?? DEFAULT_CATALOG_API_BASE_URL
  ).replace(/\/$/, "");
  const slug = process.env.SCHOOL_CATALOG_SLUG ?? DEFAULT_SCHOOL_SLUG;
  return `${baseUrl}/api/public/schools/${slug}/catalog`;
}

export function getContactApiUrl() {
  return "/api/contact";
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

export function parsePublicSchoolCatalog(value: unknown): PublicSchoolCatalog | null {
  if (!isRecord(value)) return null;

  const school = value.school;
  if (!isRecord(school)) return null;
  if (!isRecord(school.address)) return null;
  if (!isStringArray(school.languages)) return null;
  if (!Array.isArray(value.packages)) return null;
  if (!Array.isArray(value.individualLessons)) return null;
  if (!Array.isArray(value.addons)) return null;
  if (!Array.isArray(value.batches)) return null;

  return value as PublicSchoolCatalog;
}

export async function fetchSchoolCatalog(): Promise<PublicSchoolCatalog | null> {
  const url = getCatalogApiUrl();
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), CATALOG_FETCH_TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      next: { revalidate: CATALOG_REVALIDATE_SECONDS },
      headers: { Accept: "application/json" },
      signal: controller.signal,
    });

    if (!response.ok) {
      return null;
    }

    const payload: unknown = await response.json();
    return parsePublicSchoolCatalog(payload);
  } catch {
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
}

export const getSchoolCatalog = cache(fetchSchoolCatalog);
