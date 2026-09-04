import { NextResponse } from "next/server";
import { lookupPublicEnrollmentStudentByEmail } from "@/lib/catalog/publicStudentLookup";

type RequestBody = {
  email?: string;
};

export async function POST(request: Request) {
  let body: RequestBody;

  try {
    body = (await request.json()) as RequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const result = await lookupPublicEnrollmentStudentByEmail(String(body.email ?? ""));

  if ("error" in result) {
    const status = result.error === "Enter a valid email address." ? 400 : 404;
    return NextResponse.json({ error: result.error }, { status });
  }

  return NextResponse.json({ student: result.student });
}
