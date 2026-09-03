import { getSchoolCatalogSlug } from "@/lib/catalog/fetch";
import { site } from "@/lib/site";

const EDGE_FUNCTION_TIMEOUT_MS = 15_000;

export type ContactFormPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactDeliveryConfig = {
  supabaseUrl: string;
  serviceRoleKey: string;
  schoolSlug: string;
  schoolName: string;
};

function getContactDeliveryConfig(): ContactDeliveryConfig | null {
  const supabaseUrl = process.env.SUPABASE_URL?.trim();
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
  const schoolSlug = getSchoolCatalogSlug();

  if (!supabaseUrl || !serviceRoleKey) {
    return null;
  }

  return {
    supabaseUrl: supabaseUrl.replace(/\/$/, ""),
    serviceRoleKey,
    schoolSlug,
    schoolName: site.name,
  };
}

export async function sendContactFormEmail(
  payload: ContactFormPayload
): Promise<{ ok: true } | { ok: false; error: string }> {
  const config = getContactDeliveryConfig();
  if (!config) {
    console.error("contact: delivery is not configured");
    return { ok: false, error: "Email service is not configured" };
  }

  let response: Response;
  try {
    response = await fetch(
      `${config.supabaseUrl}/functions/v1/public_school_contact`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${config.serviceRoleKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          schoolSlug: config.schoolSlug,
          schoolName: config.schoolName,
          payload,
        }),
        signal: AbortSignal.timeout(EDGE_FUNCTION_TIMEOUT_MS),
      }
    );
  } catch (error) {
    console.error("contact: edge function request failed", { error });
    return { ok: false, error: "Failed to send message" };
  }

  if (!response.ok) {
    const responseBody = await response.text().catch(() => "");
    console.error("contact: edge function error", {
      status: response.status,
      body: responseBody.slice(0, 500),
    });
    return { ok: false, error: "Failed to send message" };
  }

  return { ok: true };
}
