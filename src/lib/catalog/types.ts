export type PublicCatalogScheduleClass = {
  date: string | null;
  time: string | null;
  endTime: string | null;
  location: string | null;
  sessionTitle: string | null;
};

export type PublicCatalogSchedule = {
  mode: string;
  classes: PublicCatalogScheduleClass[];
};

export type PublicCatalogProduct = {
  id: string;
  name: string;
  description: string | null;
  customerIncludes: string | null;
  price: number;
  priceLabel: string;
  productKind: "package" | "individual_lesson" | "addon";
  operatorAudience: "junior" | "adult" | "any";
  lessonCount: number;
  requiresContractSignature: boolean;
  fulfillmentMode: string | null;
  defaultRoadTestLocation: string | null;
  sortOrder: number;
};

export type PublicCatalogBatch = {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  status: string;
  capacity: number | null;
  enrolledCount?: number;
  remainingSpots?: number | null;
  notes: string | null;
  schedule: PublicCatalogSchedule | null;
};

export type PublicSchoolCatalog = {
  school: {
    id: string;
    slug: string;
    name: string;
    tagline: string | null;
    phone: string | null;
    email: string | null;
    website: string | null;
    address: {
      street: string | null;
      city: string | null;
      state: string | null;
      zip: string | null;
      full: string | null;
    };
    operatingHours: Record<string, unknown> | null;
    languages: string[];
    logoUrl: string | null;
    currency: string;
  };
  packages: PublicCatalogProduct[];
  individualLessons: PublicCatalogProduct[];
  addons: PublicCatalogProduct[];
  batches: PublicCatalogBatch[];
};
