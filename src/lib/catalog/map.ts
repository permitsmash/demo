import type { PublicCatalogBatch, PublicCatalogProduct, PublicSchoolCatalog } from "@/lib/catalog/types";
import {
  formatUsd,
  type ClassSession,
  type EnrollmentAddon,
  type EnrollmentProduct,
} from "@/lib/enrollment/catalog";
import { site as staticSite } from "@/lib/site";

const LEGACY_PRODUCT_ID_BY_NAME: Record<string, string> = {
  "package 1": "driver-ed-1",
  "package ii": "driver-ed-2",
  "package iii": "driver-ed-3",
  "behind the wheel lesson": "junior-lessons",
  "adult behind the wheel": "adult-lessons",
  "highway lesson": "highway-lessons",
  "rmv area 1 - jmc office": "rmv-area-1-jmc",
  "rmv area 2 - watertown": "rmv-area-2-watertown",
  "rmv area 3 - rmv branch": "rmv-area-3-rmv-branch",
  "comp test - watertown rmv": "comp-test-watertown",
};

export type LiveSiteData = Omit<
  typeof staticSite,
  | "name"
  | "phone"
  | "phoneTel"
  | "email"
  | "address"
  | "officeHours"
  | "cancellationHours"
  | "languages"
> & {
  name: string;
  phone: string;
  phoneTel: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    full: string;
  };
  officeHours: string;
  cancellationHours: string;
  languages: string[];
  acceleratedCourses: Array<{ label: string; dates: string }>;
  batchSeats: Array<{
    id: string;
    label: string;
    remainingSpots: number | null;
    firstClassDate: string | null;
  }>;
};

function normalizeProductName(name: string) {
  return name
    .trim()
    .toLowerCase()
    .replace(/\u2013/g, "-")
    .replace(/\s+/g, " ");
}

export function legacyProductIdForName(name: string) {
  return LEGACY_PRODUCT_ID_BY_NAME[normalizeProductName(name)] ?? null;
}

function formatTimeLabel(value: string | null) {
  if (!value) return "";
  const [hours, minutes] = value.split(":").map(Number);
  if (!Number.isFinite(hours) || !Number.isFinite(minutes)) return value;
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

const SCHOOL_TIME_ZONE = "America/New_York";

function calendarDate(value: string) {
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: SCHOOL_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function classCalendarDates(batch: PublicCatalogBatch) {
  return [
    ...new Set(
      (batch.schedule?.classes ?? [])
        .map((entry) => entry.date)
        .filter((date): date is string => Boolean(date)),
    ),
  ].sort();
}

function batchRangeDates(batch: PublicCatalogBatch) {
  const classDates = classCalendarDates(batch);
  if (classDates.length > 0) {
    return { start: classDates[0], end: classDates[classDates.length - 1] };
  }

  return {
    start: calendarDate(batch.startDate) ?? batch.startDate,
    end: calendarDate(batch.endDate) ?? batch.endDate,
  };
}

function parseLocalDate(value: string) {
  const day = calendarDate(value) ?? value;
  return /^\d{4}-\d{2}-\d{2}$/.test(day) ? new Date(`${day}T12:00:00`) : new Date(day);
}

function formatBatchDate(value: string) {
  const date = parseLocalDate(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatBatchDateRange(startDate: string, endDate: string) {
  const start = parseLocalDate(startDate);
  const end = parseLocalDate(endDate);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    return `${formatBatchDate(startDate)} – ${formatBatchDate(endDate)}`;
  }

  const sameYear = start.getFullYear() === end.getFullYear();
  const startLabel = start.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    ...(sameYear ? {} : { year: "numeric" }),
  });
  const endLabel = end.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return `${startLabel} – ${endLabel}`;
}

function ordinalDay(day: number) {
  const mod10 = day % 10;
  const mod100 = day % 100;
  if (mod10 === 1 && mod100 !== 11) return `${day}st`;
  if (mod10 === 2 && mod100 !== 12) return `${day}nd`;
  if (mod10 === 3 && mod100 !== 13) return `${day}rd`;
  return `${day}th`;
}

function firstClassDate(batch: PublicCatalogBatch) {
  return classCalendarDates(batch)[0] ?? calendarDate(batch.startDate) ?? batch.startDate ?? null;
}

export function todayIsoDate() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

function formatBatchClassDatesList(batch: PublicCatalogBatch) {
  const classDates = classCalendarDates(batch);

  if (classDates.length === 0) {
    return formatBatchDateRange(batch.startDate, batch.endDate);
  }

  const parts: string[] = [];
  let currentMonth: string | null = null;

  for (const dateStr of classDates) {
    const date = new Date(`${dateStr}T12:00:00`);
    if (Number.isNaN(date.getTime())) continue;

    const month = date.toLocaleDateString("en-US", { month: "long" });
    const dayOrdinal = ordinalDay(date.getDate());

    if (month !== currentMonth) {
      parts.push(`${month} ${dayOrdinal}`);
      currentMonth = month;
    } else {
      parts.push(dayOrdinal);
    }
  }

  return parts.join(", ");
}

function mapCatalogProductToEnrollment(product: PublicCatalogProduct): EnrollmentProduct {
  return {
    id: product.id,
    name: product.name,
    price: product.price,
    priceLabel: product.priceLabel,
    needsClassSelection: product.productKind === "package",
    requiresTeenAge: product.operatorAudience === "junior",
    minDeposit: 0,
    offersAddons: false,
  };
}

function allCatalogProducts(catalog: PublicSchoolCatalog) {
  return [...catalog.packages, ...catalog.individualLessons, ...catalog.addons];
}

export function buildEnrollmentProductsFromCatalog(
  catalog: PublicSchoolCatalog,
): Record<string, EnrollmentProduct> {
  const merged: Record<string, EnrollmentProduct> = {};

  for (const product of allCatalogProducts(catalog)) {
    const mapped = mapCatalogProductToEnrollment(product);
    merged[product.id] = mapped;

    const legacyId = legacyProductIdForName(product.name);
    if (legacyId) {
      merged[legacyId] = { ...mapped, id: legacyId };
    }
  }

  return merged;
}

export function buildEnrollmentAddonsFromCatalog(_catalog: PublicSchoolCatalog): EnrollmentAddon[] {
  return [];
}

function scheduleDetailsFromBatch(batch: PublicCatalogBatch) {
  const classes = batch.schedule?.classes ?? [];
  if (classes.length === 0) {
    return [`${formatBatchDate(batch.startDate)} – ${formatBatchDate(batch.endDate)}`];
  }

  return classes.map((entry) => {
    const dateLabel = entry.date
      ? new Date(`${entry.date}T12:00:00`).toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        })
      : "Date TBD";
    const start = formatTimeLabel(entry.time);
    const end = formatTimeLabel(entry.endTime);
    const timeLabel = start && end ? `${start} – ${end}` : start || end || "Time TBD";
    if (entry.sessionTitle) {
      return `${entry.sessionTitle} — ${dateLabel}, ${timeLabel}`;
    }
    return `${dateLabel} — ${timeLabel}`;
  });
}

export function buildClassSessionsFromCatalog(catalog: PublicSchoolCatalog | null): ClassSession[] {
  if (!catalog || catalog.batches.length === 0) {
    return [];
  }

  return catalog.batches.map((batch) => {
    const location =
      batch.schedule?.classes.find((entry) => entry.location)?.location ?? "Waltham";

    const range = batchRangeDates(batch);

    return {
      id: batch.id,
      sessionName: batch.name,
      location,
      startDate: formatBatchDate(range.start),
      endDate: formatBatchDate(range.end),
      scheduleLabel: "View Schedule",
      scheduleDetails: scheduleDetailsFromBatch(batch),
      notes: batch.notes ?? "",
      capacity: batch.capacity,
      enrolledCount: batch.enrolledCount ?? 0,
      remainingSpots:
        batch.remainingSpots ??
        (batch.capacity != null
          ? Math.max(0, batch.capacity - (batch.enrolledCount ?? 0))
          : null),
    };
  });
}

export type ScheduledClassFact = {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  location: string;
  capacity: number | null;
  remainingSpots: number | null;
};

export function buildScheduledClassFacts(
  catalog: PublicSchoolCatalog | null,
): ScheduledClassFact[] {
  if (!catalog) return [];

  return catalog.batches.flatMap((batch) => {
    const range = batchRangeDates(batch);
    if (!range.start || !range.end) return [];

    const location =
      batch.schedule?.classes.find((entry) => entry.location)?.location ?? "Waltham";
    const remainingSpots =
      batch.remainingSpots ??
      (batch.capacity != null
        ? Math.max(0, batch.capacity - (batch.enrolledCount ?? 0))
        : null);

    return [
      {
        id: batch.id,
        name: batch.name,
        startDate: range.start,
        endDate: range.end,
        location,
        capacity: batch.capacity,
        remainingSpots,
      },
    ];
  });
}

export function buildAcceleratedCoursesFromCatalog(catalog: PublicSchoolCatalog) {
  if (catalog.batches.length === 0) {
    return [];
  }

  return catalog.batches.map((batch) => ({
    label: batch.name,
    dates: formatBatchClassDatesList(batch),
  }));
}

export type HomeBatchCard = {
  label: string;
  dates: string;
  session: ClassSession;
};

export function buildHomeBatchCards(catalog: PublicSchoolCatalog | null): HomeBatchCard[] {
  if (!catalog || catalog.batches.length === 0) {
    return [];
  }

  const sessions = buildClassSessionsFromCatalog(catalog);

  return catalog.batches.flatMap((batch, index) => {
    const session = sessions[index];
    if (!session) return [];

    return [
      {
        label: batch.name,
        dates: formatBatchClassDatesList(batch),
        session,
      },
    ];
  });
}

export function buildLiveSite(catalog: PublicSchoolCatalog | null): LiveSiteData {
  if (!catalog) {
    return {
      ...staticSite,
      officeHours: staticSite.officeHours,
      languages: [...staticSite.languages],
      acceleratedCourses: [],
      batchSeats: [],
    };
  }

  const { school } = catalog;

  return {
    ...staticSite,
    name: school.name || staticSite.name,
    phone: staticSite.phone,
    phoneTel: staticSite.phoneTel,
    email: staticSite.email,
    address: {
      street: school.address.street ?? staticSite.address.street,
      city: school.address.city ?? staticSite.address.city,
      state: school.address.state ?? staticSite.address.state,
      zip: school.address.zip ?? staticSite.address.zip,
      full: school.address.full ?? staticSite.address.full,
    },
    officeHours: staticSite.officeHours,
    cancellationHours: staticSite.cancellationHours,
    languages:
      school.languages.length > 0 ? school.languages : [...staticSite.languages],
    acceleratedCourses: buildAcceleratedCoursesFromCatalog(catalog),
    batchSeats: [...catalog.batches]
      .sort((a, b) => a.startDate.localeCompare(b.startDate))
      .map((batch) => ({
        id: batch.id,
        label: batch.name,
        remainingSpots:
          batch.remainingSpots ??
          (batch.capacity != null
            ? Math.max(0, batch.capacity - (batch.enrolledCount ?? 0))
            : null),
        firstClassDate: firstClassDate(batch),
      }))
      .filter(
        (batch) => batch.firstClassDate != null && batch.firstClassDate >= todayIsoDate(),
      ),
  };
}

export function getCatalogPriceLabel(
  catalog: PublicSchoolCatalog | null,
  legacyProductId: string,
  fallback: string,
) {
  if (!catalog) return fallback;

  const product = allCatalogProducts(catalog).find(
    (entry) => legacyProductIdForName(entry.name) === legacyProductId,
  );

  return product?.priceLabel ?? fallback;
}

export function getCatalogLessonPrice(
  catalog: PublicSchoolCatalog | null,
  legacyProductId: string,
  fallback: number,
) {
  if (!catalog) return fallback;

  const product = allCatalogProducts(catalog).find(
    (entry) => legacyProductIdForName(entry.name) === legacyProductId,
  );

  return product?.price ?? fallback;
}

export type CatalogDisplayPackage = {
  catalogId: string;
  title: string;
  description?: string;
  price: string;
  includes: string[];
};

export type CatalogAddonDisplay = {
  catalogId: string;
  name: string;
  description: string;
  price: string;
};

export type CatalogLessonDisplay = {
  catalogId: string;
  title: string;
  description?: string;
  pricePerLesson: number;
  priceLabel: string;
};

export type CatalogLessonFact = {
  id: string;
  name: string;
  priceLabel: string;
  details: string[];
};

function productDetails(product: PublicCatalogProduct) {
  const details: string[] = [];
  const description = product.description?.trim();
  if (
    description &&
    description.toLowerCase() !== product.name.trim().toLowerCase() &&
    (description.length >= 12 || /\d/.test(description))
  ) {
    details.push(description);
  }
  for (const line of parseCustomerIncludes(product.customerIncludes)) {
    if (!details.includes(line)) details.push(line);
  }
  return details;
}

function toLessonFact(product: PublicCatalogProduct): CatalogLessonFact {
  return {
    id: product.id,
    name: product.name,
    priceLabel: product.priceLabel,
    details: productDetails(product),
  };
}

export function buildLessonFacts(catalog: PublicSchoolCatalog | null): CatalogLessonFact[] {
  if (!catalog) return [];

  return [...catalog.packages.filter(isAdultPackage), ...catalog.individualLessons]
    .sort((a, b) => a.sortOrder - b.sortOrder || a.name.localeCompare(b.name))
    .map(toLessonFact);
}

export function buildTeenPackageFacts(catalog: PublicSchoolCatalog | null): CatalogLessonFact[] {
  if (!catalog) return [];

  return catalog.packages
    .filter(isTeenPackage)
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map(toLessonFact);
}

export function parseCustomerIncludes(text: string | null | undefined): string[] {
  if (!text?.trim()) return [];

  return text
    .split(/\r?\n/)
    .flatMap((line) => line.split(/•|·/))
    .map((line) => line.replace(/^[\s\-*•]+/, "").trim())
    .filter(Boolean);
}

function isTeenPackage(product: PublicCatalogProduct) {
  return product.productKind === "package" && product.operatorAudience !== "adult";
}

function isAdultPackage(product: PublicCatalogProduct) {
  return product.productKind === "package" && product.operatorAudience === "adult";
}

function mapPackageToDisplay(product: PublicCatalogProduct): CatalogDisplayPackage {
  return {
    catalogId: product.id,
    title: product.name,
    description: product.description ?? undefined,
    price: product.priceLabel,
    includes: parseCustomerIncludes(product.customerIncludes),
  };
}

export function buildTeenPackagesFromCatalog(
  catalog: PublicSchoolCatalog | null,
): CatalogDisplayPackage[] {
  if (!catalog) return [];

  return catalog.packages
    .filter(isTeenPackage)
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map(mapPackageToDisplay);
}

export function buildAdultPackagesFromCatalog(
  catalog: PublicSchoolCatalog | null,
): CatalogDisplayPackage[] {
  if (!catalog) return [];

  return catalog.packages
    .filter(isAdultPackage)
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map(mapPackageToDisplay);
}

export function buildLessonsFromCatalog(catalog: PublicSchoolCatalog | null): CatalogLessonDisplay[] {
  if (!catalog) return [];

  return catalog.individualLessons
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map((product) => ({
      catalogId: product.id,
      title: product.name,
      description: product.description ?? undefined,
      pricePerLesson: product.price,
      priceLabel: product.priceLabel,
    }));
}

export function buildAddonsDisplayFromCatalog(
  catalog: PublicSchoolCatalog | null,
): CatalogAddonDisplay[] {
  if (!catalog) return [];

  return catalog.addons
    .slice()
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map((product) => ({
      catalogId: product.id,
      name: product.name,
      description: product.description ?? "",
      price: product.priceLabel,
    }));
}

/** @deprecated Use buildTeenPackagesFromCatalog instead */
export function buildDriverEdPackagesFromCatalog(
  catalog: PublicSchoolCatalog | null,
): CatalogDisplayPackage[] {
  return buildTeenPackagesFromCatalog(catalog);
}

export function buildEnrollmentCatalogState(catalog: PublicSchoolCatalog | null) {
  if (!catalog) {
    return {
      products: {} as Record<string, EnrollmentProduct>,
      addons: [] as EnrollmentAddon[],
      classSessions: [] as ClassSession[],
    };
  }

  return {
    products: buildEnrollmentProductsFromCatalog(catalog),
    addons: buildEnrollmentAddonsFromCatalog(catalog),
    classSessions: buildClassSessionsFromCatalog(catalog),
  };
}

export function resolveLiveEnrollmentProduct(
  productId: string | null | undefined,
  catalog: PublicSchoolCatalog | null,
  options?: { package?: string | null; quantity?: string | null },
): EnrollmentProduct | null {
  if (!catalog || !productId) return null;

  const { products } = buildEnrollmentCatalogState(catalog);
  const packageId = options?.package?.trim();
  const directPackage = packageId ? products[packageId] : null;
  const base = products[productId] ?? directPackage;
  if (!base) return null;

  const quantity = Math.max(1, Number.parseInt(options?.quantity ?? "1", 10) || 1);
  const catalogProduct = allCatalogProducts(catalog).find(
    (entry) => entry.id === productId || entry.id === packageId,
  );

  if (catalogProduct?.productKind === "individual_lesson" && quantity > 1) {
    const total = base.price * quantity;
    return {
      ...base,
      name: `${base.name} (${quantity})`,
      price: total,
      priceLabel: formatUsd(total),
    };
  }

  return base;
}
