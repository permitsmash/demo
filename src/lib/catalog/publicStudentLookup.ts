import { getCatalogApiUrl, getSchoolCatalogSlug } from "@/lib/catalog/fetch";

export type PublicEnrollmentStudentSummary = {
  studentId: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type StudentLookupErrorKind =
  | "invalid_email"
  | "invalid_body"
  | "verification_failed"
  | "rate_limit"
  | "upstream";

export type StudentLookupResult<T> =
  | { ok: true; data: T }
  | { ok: false; kind: StudentLookupErrorKind; message: string };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LOOKUP_TIMEOUT_MS = 10_000;

function getLookupEndpoint(path: "request" | "verify") {
  const catalogUrl = new URL(getCatalogApiUrl());
  catalogUrl.pathname = catalogUrl.pathname.replace(/\/catalog$/, `/students/lookup/${path}`);
  catalogUrl.search = "";
  return catalogUrl.toString();
}

function mapHttpStatusToErrorKind(status: number): StudentLookupErrorKind {
  if (status === 400) return "verification_failed";
  if (status === 429) return "rate_limit";
  return "upstream";
}

/** Request a one-time verification code for a returning student email. */
export async function requestPublicEnrollmentStudentVerification(
  email: string,
): Promise<
  StudentLookupResult<{ challengeId: string; message: string }>
> {
  const trimmedEmail = email.trim();
  if (!EMAIL_PATTERN.test(trimmedEmail)) {
    return {
      ok: false,
      kind: "invalid_email",
      message: "Enter a valid email address.",
    };
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), LOOKUP_TIMEOUT_MS);

  try {
    const response = await fetch(getLookupEndpoint("request"), {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: trimmedEmail }),
      signal: controller.signal,
      cache: "no-store",
    });

    let payload: { challengeId?: string; message?: string; error?: string } = {};
    try {
      payload = (await response.json()) as typeof payload;
    } catch {
      if (!response.ok) {
        return {
          ok: false,
          kind: "upstream",
          message: "Unable to start verification. Please try again.",
        };
      }
    }

    if (!response.ok) {
      return {
        ok: false,
        kind: mapHttpStatusToErrorKind(response.status),
        message: payload.error ?? "Unable to start verification. Please try again.",
      };
    }

    if (!payload.challengeId || !payload.message) {
      return {
        ok: false,
        kind: "upstream",
        message: "Unable to start verification. Please try again.",
      };
    }

    return {
      ok: true,
      data: {
        challengeId: payload.challengeId,
        message: payload.message,
      },
    };
  } catch {
    return {
      ok: false,
      kind: "upstream",
      message: "Unable to start verification. Please try again.",
    };
  } finally {
    clearTimeout(timeoutId);
  }
}

/** Verify a one-time code and return the matched student plus prefill token. */
export async function verifyPublicEnrollmentStudentVerification(input: {
  challengeId: string;
  code: string;
}): Promise<
  StudentLookupResult<{
    student: PublicEnrollmentStudentSummary;
    prefillToken: string;
  }>
> {
  const challengeId = input.challengeId.trim();
  const code = input.code.trim();

  if (!challengeId || !/^\d{6}$/.test(code)) {
    return {
      ok: false,
      kind: "verification_failed",
      message: "Enter the 6-digit verification code from your email.",
    };
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), LOOKUP_TIMEOUT_MS);

  try {
    const response = await fetch(getLookupEndpoint("verify"), {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ challengeId, code }),
      signal: controller.signal,
      cache: "no-store",
    });

    let payload: {
      student?: PublicEnrollmentStudentSummary;
      prefillToken?: string;
      error?: string;
    } = {};
    try {
      payload = (await response.json()) as typeof payload;
    } catch {
      if (!response.ok) {
        return {
          ok: false,
          kind: "upstream",
          message: "Unable to verify your code. Please try again.",
        };
      }
    }

    if (!response.ok) {
      return {
        ok: false,
        kind: mapHttpStatusToErrorKind(response.status),
        message: payload.error ?? "That verification code is invalid or has expired.",
      };
    }

    if (!payload.student?.studentId || !payload.prefillToken) {
      return {
        ok: false,
        kind: "upstream",
        message: "Unable to verify your code. Please try again.",
      };
    }

    return {
      ok: true,
      data: {
        student: payload.student,
        prefillToken: payload.prefillToken,
      },
    };
  } catch {
    return {
      ok: false,
      kind: "upstream",
      message: "Unable to verify your code. Please try again.",
    };
  } finally {
    clearTimeout(timeoutId);
  }
}

export function studentLookupErrorStatus(kind: StudentLookupErrorKind) {
  switch (kind) {
    case "invalid_email":
    case "invalid_body":
    case "verification_failed":
      return 400;
    case "rate_limit":
      return 429;
    default:
      return 502;
  }
}
