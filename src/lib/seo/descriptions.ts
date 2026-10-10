import { buildLiveSite } from "@/lib/catalog/map";
import type { PublicCatalogProduct, PublicSchoolCatalog } from "@/lib/catalog/types";
import { site } from "@/lib/site";

function displayPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  const local = digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;
  if (local.length !== 10) return phone;
  return `(${local.slice(0, 3)}) ${local.slice(3, 6)}-${local.slice(6)}`;
}

function lowestPrice(products: PublicCatalogProduct[]) {
  let best: number | null = null;
  for (const product of products) {
    if (!Number.isFinite(product.price) || product.price <= 0) continue;
    if (best == null || product.price < best) best = product.price;
  }
  return best;
}

function formatPrice(amount: number) {
  const hasCents = Math.round(amount * 100) % 100 !== 0;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: hasCents ? 2 : 0,
    maximumFractionDigits: hasCents ? 2 : 0,
  }).format(amount);
}

export function buildSeoDescriptions(catalog: PublicSchoolCatalog | null) {
  const phone = displayPhone(site.phone);
  const live = buildLiveSite(catalog);
  const city = live.address.city;
  const state = live.address.state;
  const place = `${live.address.street}, ${city}, ${state}`;
  const hours = live.officeHours;

  const lessonAmount = catalog ? lowestPrice(catalog.individualLessons) : null;
  const packageAmount = catalog ? lowestPrice(catalog.packages) : null;
  const classPackageAmount = catalog
    ? lowestPrice(catalog.packages.filter((product) => product.operatorAudience !== "adult"))
    : null;
  const roadTestAmount = catalog ? lowestPrice(catalog.addons) : null;

  const lesson = lessonAmount == null ? null : formatPrice(lessonAmount);
  const pkg = packageAmount == null ? null : formatPrice(packageAmount);
  const classPkg = classPackageAmount == null ? null : formatPrice(classPackageAmount);
  const roadTest = roadTestAmount == null ? null : formatPrice(roadTestAmount);

  const programs = (() => {
    if (pkg && lesson) {
      return `Compare teen and adult driver education packages in ${city}, ${state}, from ${pkg}, plus lessons from ${lesson}. Enroll online or call ${phone} to get started today.`;
    }
    if (pkg) {
      return `Compare teen and adult driver education packages in ${city}, ${state}, starting from ${pkg}. Enroll online or call ${phone} to get started with our office.`;
    }
    if (lesson) {
      return `Compare teen and adult driver education in ${city}, ${state}, with lessons from ${lesson}. Enroll online or call ${phone} to get started with a lesson today.`;
    }
    return `Browse teen and adult driver education packages in ${city}, ${state}. Enroll online or call ${phone} to choose a program and get started today.`;
  })();

  return {
    home: lesson
      ? `Book professional driving lessons in ${city}, ${state}, from ${lesson} per lesson. Certified instructors help teens and adults. Call ${phone} to schedule today.`
      : `Book professional driving lessons in ${city}, ${state}. Certified instructors help teens and adults build confidence. Call ${phone} to schedule today.`,
    programs,
    roadTests: roadTest
      ? `Book Massachusetts road test sponsorship in ${city} on Saturdays, or weekdays at select RMV sites. From ${roadTest}. Call ${phone} to schedule your test.`
      : `Book Massachusetts road test sponsorship at our ${city} office on Saturdays, or weekdays at select RMV sites. Call ${phone} to schedule your test.`,
    classes: classPkg
      ? `Register for in-person accelerated Driver's Ed classes at our ${city} office. Full packages start at ${classPkg}. Call ${phone} to reserve your seat today.`
      : `Register for in-person accelerated Driver's Ed classes held at our ${city} office. Call ${phone} to reserve a seat for an upcoming session today.`,
    about: lesson
      ? `Learn about JMC Driving School in ${city}: certified instructors, lessons from ${lesson}, and road test support. Call ${phone} to start your training.`
      : `Learn about JMC Driving School in ${city}: certified instructors for teens and adults, plus road test support. Call ${phone} to start your training.`,
    contact: lesson
      ? `Contact JMC Driving School at ${place}. Office hours are ${hours}. Lessons from ${lesson}. Call ${phone} or send a message today.`
      : `Contact JMC Driving School at ${place}. Office hours are ${hours}. Call ${phone} or send us a message today to get started.`,
    faq: pkg
      ? `Find answers about programs, lesson scheduling, road tests, and packages from ${pkg}. Still have a question? Call ${phone} and we will help today.`
      : `Find answers about programs, lesson scheduling, road tests, and school policies. Still have a question? Call ${phone} and we will help you today.`,
    resources: `Study with the official Massachusetts driver's manuals, learner's permit steps, and road test instructions. Ready to train in ${city}? Call ${phone}.`,
  };
}
