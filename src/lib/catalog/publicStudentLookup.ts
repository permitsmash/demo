import { getCatalogApiUrl, getSchoolCatalogSlug } from "@/lib/catalog/fetch";

export type PublicEnrollmentStudentSummary = {
  studentId: string;
  firstName: string;
  lastName: string;
  email: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LOOKUP_TIMEOUT_MS = 10_000;

function getPublicStudentLookupUrl(email: string) {
  const catalogUrl = getCatalogApiUrl();
  const baseUrl = catalogUrl.replace(/\/api\/public\/schools\/[^/]+\/catalog$/, "");
  const slug = getSchoolCatalogSlug();
  const url = new URL(`/api/public/schools/${slug}/students/lookup`, baseUrl);
  url.searchParams.set("email", email.trim());
  return url.toString();
}

export async function lookupPublicEnrollmentStudentByEmail(
  email: string,
): Promise<{ student: PublicEnrollmentStudentSummary } | { error: string }> {
  const trimmedEmail = email.trim();
  if (!EMAIL_PATTERN.test(trimmedEmail)) {
    return { error: "Enter a valid email address." };
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), LOOKUP_TIMEOUT_MS);

  try {
    const response = await fetch(getPublicStudentLookupUrl(trimmedEmail), {
      headers: { Accept: "application/json" },
      signal: controller.signal,
      cache: "no-store",
    });

    const payload = (await response.json()) as {
      student?: PublicEnrollmentStudentSummary;
      error?: string;
    };

    if (!response.ok) {
      return { error: payload.error ?? "Unable to find a student with that email." };
    }

    if (!payload.student?.studentId) {
      return { error: "Unable to find a student with that email." };
    }

    return { student: payload.student };
  } catch {
    return { error: "Unable to look up your student record. Please try again." };
  } finally {
    clearTimeout(timeoutId);
  }
}
