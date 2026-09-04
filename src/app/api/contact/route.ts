import { getClientIp, isContactRateLimited } from "@/lib/contact/rate-limit";
import { sendContactFormEmail } from "@/lib/contact/send";
import { NextResponse } from "next/server";

type ContactRequestBody = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  website?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

function isContactRequestBody(value: unknown): value is ContactRequestBody {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export async function POST(request: Request) {
  let parsedBody: unknown;
  try {
    parsedBody = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!isContactRequestBody(parsedBody)) {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const body = parsedBody;

  if (String(body.website ?? "").trim()) {
    return NextResponse.json({ ok: true });
  }

  if (isContactRateLimited(getClientIp(request))) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const subject = String(body.subject ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !phone || !subject || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  if (!isValidPhone(phone)) {
    return NextResponse.json({ error: "Invalid phone number" }, { status: 400 });
  }

  const result = await sendContactFormEmail({ name, email, phone, subject, message });
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
