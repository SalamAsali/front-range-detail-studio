import { NextResponse } from "next/server";

/** Escape user input before it goes into the notification email's HTML. */
function esc(v: unknown): string {
  return String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string, last = false) {
  const border = last ? "" : "border-bottom:1px solid #eee;";
  return `<tr><td style="padding:8px;${border}font-weight:bold;vertical-align:top;">${label}</td><td style="padding:8px;${border}">${value || "—"}</td></tr>`;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, phone, make, model, year, services, contact, comments, website, _t } =
    body as Record<string, string | string[] | number | undefined>;

  // Honeypot — bots fill hidden fields, humans don't. Accept silently so the
  // bot believes it succeeded.
  if (website) return NextResponse.json({ success: true });

  /* Timing check. `_t` is set by the browser, so it can be wrong — a device
     with a fast clock used to make a real submission look instant and get it
     silently dropped. Only reject when the value is plausible AND the gap is
     implausibly short. */
  const t = Number(_t);
  if (Number.isFinite(t) && t > 0) {
    const elapsed = Date.now() - t;
    if (elapsed >= 0 && elapsed < 2000) {
      return NextResponse.json({ success: true });
    }
  }

  if (!name || !email) {
    return NextResponse.json(
      { error: "Please enter your name and email so we can reach you." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(email))) {
    return NextResponse.json(
      { error: "That email address doesn't look right — please check it." },
      { status: 400 }
    );
  }

  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_EMAIL || "info@frontrangedetailstudio.com";
  const from = process.env.RESEND_FROM || "quotes@frontrangedetailstudio.com";

  /* Previously, a missing key meant the route skipped the send and still
     returned success — the customer saw a thank-you and the lead vanished.
     A quote request that cannot be delivered is a failure, and the visitor
     needs to know to phone instead. */
  if (!resendKey) {
    console.error("[quote] RESEND_API_KEY is not set — quote request NOT delivered", {
      name,
      email,
      phone,
    });
    return NextResponse.json(
      {
        error:
          "We couldn't send your request right now. Please call (303) 520-8023 and we'll take the details over the phone.",
      },
      { status: 502 }
    );
  }

  const servicesList = Array.isArray(services)
    ? services.join(", ")
    : (services as string) || "Not specified";

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: String(email),
        subject: `New Quote Request: ${[year, make, model].filter(Boolean).join(" ")} — ${name}`.trim(),
        html: `
            <h2>New Quote Request from frontrangedetailstudio.com</h2>
            <table style="border-collapse:collapse;width:100%;max-width:600px;">
              ${row("Name", esc(name))}
              ${row("Email", esc(email))}
              ${row("Phone", esc(phone))}
              ${row("Vehicle", esc([year, make, model].filter(Boolean).join(" ")))}
              ${row("Services", esc(servicesList))}
              ${row("Contact Pref", esc(contact))}
              ${row("Comments", esc(comments), true)}
            </table>
          `,
      }),
    });

    /* The response used to be discarded. A rejected send — expired key,
       sending domain not verified after a DNS change — still showed the
       customer a thank-you page. */
    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error(`[quote] Resend rejected the send (HTTP ${res.status})`, detail, {
        name,
        email,
        phone,
      });
      return NextResponse.json(
        {
          error:
            "We couldn't send your request right now. Please call (303) 520-8023 and we'll take the details over the phone.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[quote] Failed to reach Resend", err, { name, email, phone });
    return NextResponse.json(
      {
        error:
          "We couldn't send your request right now. Please call (303) 520-8023 and we'll take the details over the phone.",
      },
      { status: 502 }
    );
  }
}
