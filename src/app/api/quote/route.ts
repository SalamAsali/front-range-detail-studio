import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, make, model, year, services, contact, comments } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // If RESEND_API_KEY is configured, send email
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const servicesList = Array.isArray(services) ? services.join(", ") : services || "Not specified";

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM || "quotes@frontrangedetailstudio.com",
          to: process.env.QUOTE_EMAIL || "info@frontrangedetailstudio.com",
          subject: `New Quote Request: ${make || ""} ${model || ""} ${year || ""} — ${name}`,
          html: `
            <h2>New Quote Request from frontrangedetailstudio.com</h2>
            <table style="border-collapse:collapse;width:100%;max-width:600px;">
              <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${name}</td></tr>
              <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;">${email}</td></tr>
              <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${phone || "—"}</td></tr>
              <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Vehicle</td><td style="padding:8px;border-bottom:1px solid #eee;">${year || ""} ${make || ""} ${model || ""}</td></tr>
              <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Services</td><td style="padding:8px;border-bottom:1px solid #eee;">${servicesList}</td></tr>
              <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Contact Pref</td><td style="padding:8px;border-bottom:1px solid #eee;">${contact || "—"}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;vertical-align:top;">Comments</td><td style="padding:8px;">${comments || "—"}</td></tr>
            </table>
          `,
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process quote request" },
      { status: 500 }
    );
  }
}
