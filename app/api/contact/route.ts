import { contact } from "@/data/contact";
import { getMailConfig, sendContactEmail } from "@/utils/sendContactEmail";
import { validateContact } from "@/utils/validateContact";

export const runtime = "nodejs";

const { api } = contact;

function errorResponse(error: string, status: number) {
  return Response.json({ error }, { status });
}

/** Receives the contact form and forwards it by email. */
export async function POST(request: Request) {
  const config = getMailConfig();
  if (!config) return errorResponse(api.notConfigured, 503);

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return errorResponse(api.badRequest, 400);
  }

  const result = validateContact(payload);
  if (!result.ok) return errorResponse(api[result.reason], 400);

  const sent = await sendContactEmail(config, result.data);
  if (!sent) return errorResponse(api.sendFailed, 502);

  return Response.json({ success: true });
}
