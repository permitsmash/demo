import type { PublicSchoolCatalog } from "@/lib/catalog/types";
import {
  legacyProductIdForName,
  resolveLiveEnrollmentProduct,
} from "@/lib/catalog/map";

const DEFAULT_PUBLIC_ENROLL_BASE_URL = "https://permitsmash.com";
const DEFAULT_SCHOOL_SLUG = "jmc-driving-school";

function allCatalogProducts(catalog: PublicSchoolCatalog) {
  return [...catalog.packages, ...catalog.individualLessons, ...catalog.addons];
}

export function getPublicEnrollBaseUrl() {
  const catalogApiBase = (
    process.env.CATALOG_API_BASE_URL ?? DEFAULT_PUBLIC_ENROLL_BASE_URL
  ).replace(/\/$/, "");
  return (process.env.PUBLIC_ENROLL_BASE_URL ?? catalogApiBase).replace(/\/$/, "");
}

export function getPublicEnrollSchoolSlug(catalog: PublicSchoolCatalog | null) {
  return catalog?.school.slug ?? process.env.SCHOOL_CATALOG_SLUG ?? DEFAULT_SCHOOL_SLUG;
}

export function resolveCatalogPackageId(
  productId: string | null | undefined,
  catalog: PublicSchoolCatalog | null,
  options?: { package?: string | null; quantity?: string | null },
): string | null {
  if (!catalog) return null;

  const directPackageId = options?.package?.trim() || productId?.trim();
  if (directPackageId && allCatalogProducts(catalog).some((entry) => entry.id === directPackageId)) {
    return directPackageId;
  }

  if (!productId) return null;

  const product = resolveLiveEnrollmentProduct(productId, catalog, options);
  if (!product) return null;

  const products = allCatalogProducts(catalog);
  const byLegacy = products.find((entry) => legacyProductIdForName(entry.name) === productId);
  if (byLegacy) return byLegacy.id;

  const byName = products.find((entry) => entry.name === product.name);
  return byName?.id ?? null;
}

export function buildPublicEnrollUrl(
  catalog: PublicSchoolCatalog | null,
  options?: {
    product?: string | null;
    package?: string | null;
    quantity?: string | null;
    student?: string | null;
  },
) {
  const base = getPublicEnrollBaseUrl();
  const slug = getPublicEnrollSchoolSlug(catalog);
  const packageId = resolveCatalogPackageId(options?.product ?? null, catalog, {
    package: options?.package,
    quantity: options?.quantity,
  });

  const url = new URL(`/enroll/${slug}`, base);
  if (packageId) {
    url.searchParams.set("package", packageId);
  }
  if (options?.quantity) {
    url.searchParams.set("quantity", options.quantity);
  }
  if (options?.student?.trim()) {
    url.searchParams.set("student", options.student.trim());
  }

  return url.toString();
}
