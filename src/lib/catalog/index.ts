export { getSchoolCatalog, fetchSchoolCatalog, getCatalogApiUrl, getContactApiUrl, getSchoolCatalogSlug } from "@/lib/catalog/fetch";
export type { PublicSchoolCatalog } from "@/lib/catalog/types";
export {
  buildAddonsDisplayFromCatalog,
  buildAdultPackagesFromCatalog,
  buildClassSessionsFromCatalog,
  buildDriverEdPackagesFromCatalog,
  buildEnrollmentCatalogState,
  buildHomeBatchCards,
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
  type HomeBatchCard,
  type LiveSiteData,
} from "@/lib/catalog/map";
export {
  buildPublicEnrollUrl,
  getPublicEnrollBaseUrl,
  getPublicEnrollSchoolSlug,
  resolveCatalogPackageId,
} from "@/lib/catalog/publicEnrollUrl";
