import { NextResponse } from "next/server";
import {
  studentLookupErrorStatus,
  verifyPublicEnrollmentStudentVerification,
} from "@/lib/catalog/publicStudentLookup";
import { applyRequestRateLimit, getRequestIp } from "@/lib/rateLimit";

function parseJsonObject(value: unknown): Record<string, unknown> | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return null;
  }
  return value as Record<string, unknown>;
}

export async function POST(request: Request) {
  const rateLimit = applyRequestRateLimit(`student-lookup-verify:${getRequestIp(request)}`);
  if (rateLimit.limited) {
    return NextResponse.json(
      { error: "Too many verification attempts. Please try again later." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfter) } },
    );
  }

  let parsed: unknown;
  try {
    parsed = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const body = parseJsonObject(parsed);
  if (!body) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const result = await verifyPublicEnrollmentStudentVerification({
    challengeId: String(body.challengeId ?? ""),
    code: String(body.code ?? ""),
  });

  if (!result.ok) {
    return NextResponse.json(
      { error: result.message },
      { status: studentLookupErrorStatus(result.kind) },
    );
  }

  return NextResponse.json({
    student: result.data.student,
    prefillToken: result.data.prefillToken,
  });
}
