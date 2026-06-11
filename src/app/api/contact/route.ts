export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INVALID_RESPONSE = {
  ok: false,
  error: "Tell us a bit more and try again.",
};

const PROVIDER_FAIL_RESPONSE = {
  ok: false,
  error: "Something failed on our side.",
};

/** Minimum believable time between form render and submit, in ms. */
const MIN_FILL_TIME_MS = 3000;

function clean(value: unknown): string {
  if (typeof value !== "string") return "";
  // Strip control characters so user input can never smuggle header-like
  // sequences into the email subject or metadata. Newlines stay legal in
  // the message body alone.
   
  return value.replace(/[\u0000-\u0009\u000B-\u001F\u007F]/g, "").trim();
}

function singleLine(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    const parsed: unknown = await req.json();
    if (typeof parsed !== "object" || parsed === null) {
      return Response.json(INVALID_RESPONSE, { status: 400 });
    }
    body = parsed as Record<string, unknown>;
  } catch {
    return Response.json(INVALID_RESPONSE, { status: 400 });
  }

  const name = singleLine(clean(body.name));
  const company = singleLine(clean(body.company));
  const email = clean(body.email);
  const message = clean(body.message);
  const website = clean(body.website);
  const renderedAt = Number(body.renderedAt);

  // Spam checks. Real visitors never fill the honeypot, and nobody types a
  // useful description of their problem in under three seconds. Silent drop,
  // a 200 keeps the bot from learning anything.
  const honeypotTripped = website.length > 0;
  const tooFast =
    Number.isFinite(renderedAt) &&
    renderedAt > 0 &&
    Date.now() - renderedAt < MIN_FILL_TIME_MS;
  if (honeypotTripped || tooFast) {
    return Response.json({ ok: true });
  }

  const valid =
    name.length > 0 &&
    name.length < 200 &&
    company.length < 200 &&
    email.length > 0 &&
    email.length < 200 &&
    EMAIL_RE.test(email) &&
    message.length > 0 &&
    message.length < 5000;

  if (!valid) {
    return Response.json(INVALID_RESPONSE, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    // No delivery configured. Log the submission so it is recoverable from
    // server logs and tell the visitor it worked, because from their side
    // it did.
    console.log(
      JSON.stringify({
        event: "contact_form_submission",
        delivery: "skipped_missing_env",
        name,
        company,
        email,
        message,
      }),
    );
    return Response.json({ ok: true });
  }

  const from =
    process.env.CONTACT_FROM_EMAIL ||
    "Dialed Intelligence Website <onboarding@resend.dev>";

  const text = [
    "Name",
    name,
    "",
    "Company",
    company || "Not provided",
    "",
    "Email",
    email,
    "",
    "What is eating your team's time?",
    message,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        subject: `Working session request from ${name}`,
        text,
        reply_to: email,
      }),
    });
    if (!res.ok) {
      throw new Error(`Email provider responded with status ${res.status}`);
    }
  } catch {
    return Response.json(PROVIDER_FAIL_RESPONSE, { status: 502 });
  }

  return Response.json({ ok: true });
}
