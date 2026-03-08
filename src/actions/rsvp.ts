"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type RSVPData = {
  name: string;
  email: string;
  attending: string;
  starter: string;
  main: string;

  dietary: string;
};

export async function submitRSVP(data: RSVPData) {
  // ---- env checks ----
  if (!process.env.RESEND_API_KEY) throw new Error("Missing RESEND_API_KEY");
  if (!process.env.FROM_EMAIL) throw new Error("Missing FROM_EMAIL");
  if (!process.env.GOOGLE_SHEET_URL)
    throw new Error("Missing GOOGLE_SHEET_URL");

  // ---- 1) Write to Google Sheet (GET so redirects don't break POST) ----
  const url = new URL(process.env.GOOGLE_SHEET_URL);

  url.searchParams.set("name", data.name);
  url.searchParams.set("email", data.email);
  url.searchParams.set("starter", data.starter);

  url.searchParams.set("main", data.main);
  url.searchParams.set("dietary", data.dietary);
  url.searchParams.set("attending", data.attending);

  const sheetRes = await fetch(url.toString(), { method: "GET" });
  const sheetText = await sheetRes.text();

  if (!sheetRes.ok) {
    throw new Error(
      `Google Sheet write failed: ${sheetRes.status} ${sheetText}`,
    );
  }

  // ---- 2) Email to you (admin notification) ----
  const adminEmailResult = await resend.emails.send({
    from: process.env.FROM_EMAIL,
    to: "lizzyandjimmytietheknot@gmail.com",
    subject: `New RSVP from ${data.name} 💌`,
    html: `
    <h2>New RSVP Received</h2>

    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Attending:</strong> ${data.attending}</p>

    <p><strong>Dietary Requirements:</strong> ${data.dietary || "—"}</p>

    <hr/>

    <p><strong>Starter:</strong> ${data.starter || "—"}</p>
    <p><strong>Main:</strong> ${data.main || "—"}</p>
  `,
  });

  console.log("Admin email result:", adminEmailResult);

  // ---- 3) Email to guest ----
  const guestEmailResult = await resend.emails.send({
    from: process.env.FROM_EMAIL,
    to: data.email,
    subject: "We’ve received your RSVP 💍",
    html: `
    <p>Hi ${data.name},</p>
    <p>Thanks for your RSVP.</p>
    <p><strong>Attending:</strong> ${data.attending}</p>
    <p><strong>Starter:</strong> ${data.starter || "—"}</p>
    <p><strong>Main:</strong> ${data.main || "—"}</p>
    <p>We can't wait to celebrate with you.</p>
  `,
  });

  console.log("Guest email result:", guestEmailResult);

  return { ok: true };
}
