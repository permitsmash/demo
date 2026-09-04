export { getSchoolCatalog, fetchSchoolCatalog, getCatalogApiUrl, getContactApiUrl, getSchoolCatalogSlug } from "@/lib/catalog/fetch";
export type { PublicSchoolCatalog } from "@/lib/catalog/types";
export {
  buildAddonsDisplayFromCatalog,
  buildAdultPackagesFromCatalog,
  buildClassSessionsFromCatalog,
  buildDriverEdPackagesFromCatalog,
  buildEnrollmentCatalogState,
  buildLessonsFromCatalog,
  buildLiveSite,
  buildTeenPackagesFromCatalog,
  getCatalogLessonPrice,
  getCatalogPriceLabel,
  legacyProductIdForName,
  parseCustomerIncludes,
  resolveLiveEnrollmentProduct,
  type CatalogAddonDisplay,
  type CatalogDisplayPackage,
  type CatalogLessonDisplay,
  type LiveSiteData,
} from "@/lib/catalog/map";
export {
  buildPublicEnrollUrl,
  getPublicEnrollBaseUrl,
  getPublicEnrollSchoolSlug,
  resolveCatalogPackageId,
} from "@/lib/catalog/publicEnrollUrl";
export { lookupPublicEnrollmentStudentByEmail, type PublicEnrollmentStudentSummary } from "@/lib/catalog/publicStudentLookup";
