export type EnrollmentProduct = {
  id: string;
  name: string;
  price: number;
  priceLabel: string;
  needsClassSelection: boolean;
  requiresTeenAge: boolean;
  minDeposit: number;
  offersAddons: boolean;
};

export type EnrollmentAddon = {
  id: string;
  price: number;
  priceLabel: string;
};

const ROAD_TEST_PRODUCT_IDS = new Set([
  "rmv-area-1-jmc",
  "rmv-area-2-watertown",
  "rmv-area-3-rmv-branch",
  "comp-test-watertown",
]);

export function isRoadTestProduct(id: string | null | undefined): boolean {
  if (!id) return false;
  return ROAD_TEST_PRODUCT_IDS.has(id);
}

export type ClassSession = {
  id: string;
  sessionName?: string;
  location: string;
  startDate: string;
  endDate: string;
  scheduleLabel: string;
  scheduleDetails: readonly string[];
  notes: string;
  capacity?: number | null;
  enrolledCount?: number;
  remainingSpots?: number | null;
};

export function formatUsd(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}


export function isEligibleTeenAge(month: number, day: number, year: number) {
  const birth = new Date(year, month - 1, day);
  if (Number.isNaN(birth.getTime())) return false;
  const required = new Date(birth);
  required.setFullYear(required.getFullYear() + 15);
  required.setMonth(required.getMonth() + 9);
  return new Date() >= required;
}

export const US_STATES = [
  "MA",
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
] as const;

export const HIGH_SCHOOLS = [
  "Waltham High School",
  "Lexington High School",
  "Belmont High School",
  "Newton North High School",
  "Newton South High School",
  "Other",
] as const;
