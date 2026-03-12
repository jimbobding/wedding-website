"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type RSVPData = {
  name: string;
  email: string;
  attending: string;
  starter: string;
  main: string;
  dietary: string;
  accessibility: string;
};

export async function submitRSVP(data: RSVPData) {
  if (!process.env.RESEND_API_KEY) throw new Error("Missing RESEND_API_KEY");
  if (!process.env.FROM_EMAIL) throw new Error("Missing FROM_EMAIL");
  if (!process.env.GOOGLE_SHEET_URL)
    throw new Error("Missing GOOGLE_SHEET_URL");
  if (!process.env.ADMIN_EMAIL) throw new Error("Missing ADMIN_EMAIL");

  const url = new URL(process.env.GOOGLE_SHEET_URL);

  url.searchParams.set("name", data.name);
  url.searchParams.set("email", data.email);
  url.searchParams.set("starter", data.starter);
  url.searchParams.set("main", data.main);
  url.searchParams.set("dietary", data.dietary);
  url.searchParams.set("attending", data.attending);
  url.searchParams.set("accessibility", data.accessibility);

  const sheetRes = await fetch(url.toString(), { method: "GET" });
  const sheetText = await sheetRes.text();

  if (!sheetRes.ok) {
    throw new Error(
      `Google Sheet write failed: ${sheetRes.status} ${sheetText}`,
    );
  }

  console.log("FROM_EMAIL:", process.env.FROM_EMAIL);
  console.log("Sending guest email to:", data.email);

  const guestEmailResult = await resend.emails.send({
    from: process.env.FROM_EMAIL,
    to: data.email,
    subject: "Your RSVP has been received 💌",
    html: `
<div style="background:#f8f5f2;padding:40px 20px;font-family:Arial,Helvetica,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background:white;border-radius:16px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,0.08);">

    <div style="background:#89986D;color:white;padding:30px;text-align:center;">
      <h1 style="margin:0;font-size:28px;">Jimmy & Lizzy</h1>
      <p style="margin:6px 0 0;font-size:14px;opacity:0.9;">We're getting married 💍</p>
    </div>

    <div style="padding:30px;color:#333;line-height:1.6;">
      <h2 style="margin-top:0;">Thank you for your RSVP</h2>

      <p>Hi ${data.name},</p>

      <p>We've received your RSVP for our wedding and can't wait to celebrate with you.</p>

      <div style="margin:24px 0;padding:18px;background:#f7f7f5;border-radius:12px;">
        <h3 style="margin:0 0 10px;">Wedding Details</h3>
        <p style="margin:6px 0;"><strong>Date:</strong> 3 August 2026</p>
        <p style="margin:6px 0;"><strong>Ceremony:</strong> 12:00pm at Townhouse</p>
        <p style="margin:6px 0;"><strong>After party:</strong> From 3:00pm at Black Friars</p>
      </div>

      <div style="margin:24px 0;padding:18px;background:#faf8f6;border-radius:12px;">
        <h3 style="margin:0 0 10px;">Your RSVP</h3>
        <p style="margin:6px 0;"><strong>Attending:</strong> ${data.attending}</p>
        <p style="margin:6px 0;"><strong>Dietary requirements:</strong> ${data.dietary || "None"}</p>
        <p style="margin:6px 0;"><strong>Accessibility requirements:</strong> ${data.accessibility || "None"}</p>
      </div>

      <div style="margin:24px 0;padding:18px;background:#faf8f6;border-radius:12px;">
        <h3 style="margin:0 0 10px;">Your Meal Choices</h3>
        <p style="margin:6px 0;"><strong>Starter:</strong> ${data.starter || "—"}</p>
        <p style="margin:6px 0;"><strong>Main:</strong> ${data.main || "—"}</p>
      </div>

      <p style="margin-top:24px;">
        For any further details, please check the wedding website.
      </p>

      <p style="margin-top:24px;">
        Jimmy & Lizzy ❤️
      </p>
    </div>

  </div>
</div>
`,
  });

  console.log("Guest email result:", guestEmailResult);

  if (guestEmailResult.error) {
    console.error(
      "Guest email failed:",
      guestEmailResult.error.message || "Unknown Resend error",
    );
  }

  console.log("Sending admin email to:", process.env.ADMIN_EMAIL);

  const adminEmailResult = await resend.emails.send({
    from: process.env.FROM_EMAIL,
    to: process.env.ADMIN_EMAIL,
    subject: `New RSVP from ${data.name} 💌`,
    html: `
<div style="font-family:Arial,Helvetica,sans-serif;padding:20px;color:#333;">

<h2>New RSVP Received 💌</h2>

<p><strong>Name:</strong> ${data.name}</p>
<p><strong>Email:</strong> ${data.email}</p>

<hr/>

<p><strong>Attending:</strong> ${data.attending}</p>

<p><strong>Starter:</strong> ${data.starter || "—"}</p>
<p><strong>Main:</strong> ${data.main || "—"}</p>

<p><strong>Dietary:</strong> ${data.dietary || "—"}</p>
<p><strong>Accessibility:</strong> ${data.accessibility || "—"}</p>

</div>
`,
  });

  console.log("Admin email result:", adminEmailResult);

  if (adminEmailResult.error) {
    console.error(
      "Admin email failed:",
      adminEmailResult.error.message || "Unknown Resend error",
    );
  }

  return { ok: true };
}
