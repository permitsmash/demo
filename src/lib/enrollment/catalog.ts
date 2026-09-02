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

export const enrollmentAddons: EnrollmentAddon[] = [
  {
    id: "rmv-area-2-watertown",
    price: 180,
    priceLabel: "$180.00",
  },
  {
    id: "rmv-area-3-rmv-branch",
    price: 220,
    priceLabel: "$220.00",
  },
  {
    id: "comp-test-watertown",
    price: 260,
    priceLabel: "$260.00",
  },
  {
    id: "rmv-area-1-jmc",
    price: 180,
    priceLabel: "$180.00",
  },
];

export function getEnrollmentAddon(id: string | null | undefined): EnrollmentAddon | null {
  if (!id) return null;
  return enrollmentAddons.find((addon) => addon.id === id) ?? null;
}

export function isRoadTestProduct(id: string | null | undefined): boolean {
  if (!id) return false;
  return enrollmentAddons.some((addon) => addon.id === id);
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

export const enrollmentProducts: Record<string, EnrollmentProduct> = {
  "driver-ed-1": {
    id: "driver-ed-1",
    name: "Package I – Special Offer",
    price: 1250,
    priceLabel: "$1,250.00",
    needsClassSelection: true,
    requiresTeenAge: true,
    minDeposit: 350,
    offersAddons: true,
  },
  "driver-ed-2": {
    id: "driver-ed-2",
    name: "Package II",
    price: 870,
    priceLabel: "$870.00",
    needsClassSelection: true,
    requiresTeenAge: true,
    minDeposit: 350,
    offersAddons: true,
  },
  "driver-ed-3": {
    id: "driver-ed-3",
    name: "Package III",
    price: 500,
    priceLabel: "$500.00",
    needsClassSelection: true,
    requiresTeenAge: true,
    minDeposit: 350,
    offersAddons: true,
  },
  "junior-lessons": {
    id: "junior-lessons",
    name: "Junior Driving Lessons",
    price: 80,
    priceLabel: "$80.00",
    needsClassSelection: false,
    requiresTeenAge: true,
    minDeposit: 0,
    offersAddons: false,
  },
  "adult-lessons": {
    id: "adult-lessons",
    name: "Adult Driving Lessons",
    price: 80,
    priceLabel: "$80.00",
    needsClassSelection: false,
    requiresTeenAge: false,
    minDeposit: 0,
    offersAddons: false,
  },
  "highway-lessons": {
    id: "highway-lessons",
    name: "Highway Lessons",
    price: 100,
    priceLabel: "$100.00",
    needsClassSelection: false,
    requiresTeenAge: false,
    minDeposit: 0,
    offersAddons: false,
  },
  "adult-program-package-6": {
    id: "adult-program-package-6",
    name: "6 Driving Lesson Package",
    price: 450,
    priceLabel: "$450.00",
    needsClassSelection: false,
    requiresTeenAge: false,
    minDeposit: 0,
    offersAddons: false,
  },
  "adult-program-package-10": {
    id: "adult-program-package-10",
    name: "10 Driving Lesson Package",
    price: 770,
    priceLabel: "$770.00",
    needsClassSelection: false,
    requiresTeenAge: false,
    minDeposit: 0,
    offersAddons: false,
  },
  "rmv-area-1-jmc": {
    id: "rmv-area-1-jmc",
    name: "RMV Area 1 – JMC Office",
    price: 180,
    priceLabel: "$180.00",
    needsClassSelection: false,
    requiresTeenAge: false,
    minDeposit: 0,
    offersAddons: false,
  },
  "rmv-area-2-watertown": {
    id: "rmv-area-2-watertown",
    name: "RMV Area 2 – Watertown",
    price: 180,
    priceLabel: "$180.00",
    needsClassSelection: false,
    requiresTeenAge: false,
    minDeposit: 0,
    offersAddons: false,
  },
  "rmv-area-3-rmv-branch": {
    id: "rmv-area-3-rmv-branch",
    name: "RMV Area 3 – RMV Branch",
    price: 220,
    priceLabel: "$220.00",
    needsClassSelection: false,
    requiresTeenAge: false,
    minDeposit: 0,
    offersAddons: false,
  },
  "comp-test-watertown": {
    id: "comp-test-watertown",
    name: "COMP Test – Watertown RMV",
    price: 260,
    priceLabel: "$260.00",
    needsClassSelection: false,
    requiresTeenAge: false,
    minDeposit: 0,
    offersAddons: false,
  },
};

export const classSessions: ClassSession[] = [
  {
    id: "aug-2026",
    location: "Waltham",
    startDate: "Sat, Aug 10, 2026",
    endDate: "Fri, Aug 14, 2026",
    scheduleLabel: "View Schedule",
    scheduleDetails: [
      "Sat, Aug 10 — 9:00 AM – 3:00 PM",
      "Sun, Aug 11 — 9:00 AM – 3:00 PM",
      "Mon, Aug 12 — 9:00 AM – 3:00 PM",
      "Tue, Aug 13 — 9:00 AM – 3:00 PM",
      "Wed, Aug 14 — 9:00 AM – 3:00 PM",
    ],
    notes: "",
  },
  {
    id: "oct-2026",
    location: "Waltham",
    startDate: "Mon, Oct 12, 2026",
    endDate: "Tue, Oct 20, 2026",
    scheduleLabel: "View Schedule",
    scheduleDetails: [
      "Mon, Oct 12 — 9:00 AM – 3:00 PM",
      "Tue, Oct 13 — 9:00 AM – 3:00 PM",
      "Wed, Oct 14 — 9:00 AM – 3:00 PM",
      "Thu, Oct 15 — 9:00 AM – 3:00 PM",
      "Fri, Oct 16 — 9:00 AM – 3:00 PM",
      "Mon, Oct 19 — 9:00 AM – 3:00 PM",
      "Tue, Oct 20 — 9:00 AM – 3:00 PM",
    ],
    notes: "",
  },
  {
    id: "dec-2026",
    location: "Waltham",
    startDate: "Thu, Dec 24, 2026",
    endDate: "Thu, Dec 31, 2026",
    scheduleLabel: "View Schedule",
    scheduleDetails: [
      "Thu, Dec 24 — 9:00 AM – 3:00 PM",
      "Sun, Dec 28 — 9:00 AM – 3:00 PM",
      "Mon, Dec 29 — 9:00 AM – 3:00 PM",
      "Tue, Dec 30 — 9:00 AM – 3:00 PM",
      "Wed, Dec 31 — 9:00 AM – 3:00 PM",
    ],
    notes: "",
  },
];

const PACKAGE_ALIASES: Record<string, string> = {
  "adult-program-package": "adult-program-package-6",
};

export function resolveEnrollmentProduct(
  productId: string | null | undefined,
  options?: { package?: string | null; quantity?: string | null },
): EnrollmentProduct | null {
  if (!productId) return null;

  if (productId === "adult-program-package" && options?.package) {
    const resolved = `adult-program-package-${options.package.replace("-lessons", "")}`;
    return enrollmentProducts[resolved] ?? null;
  }

  if (PACKAGE_ALIASES[productId]) {
    return enrollmentProducts[PACKAGE_ALIASES[productId]] ?? null;
  }

  const base = enrollmentProducts[productId];
  if (!base) return null;

  const quantity = Math.max(1, Number.parseInt(options?.quantity ?? "1", 10) || 1);
  if (
    productId === "junior-lessons" ||
    productId === "adult-lessons" ||
    productId === "highway-lessons"
  ) {
    const total = base.price * quantity;
    return {
      ...base,
      name: quantity === 1 ? base.name : `${base.name} (${quantity})`,
      price: total,
      priceLabel: formatUsd(total),
    };
  }

  return base;
}

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
