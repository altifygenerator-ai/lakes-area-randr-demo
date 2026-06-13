// src/app/api/contact/route.ts

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactPayload = {
  formType?: "contact" | "quote" | "rental";
  name?: string;
  phone?: string;
  email?: string;
  rental?: string;
  date?: string;
  duration?: string;
  message?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function clean(value?: string) {
  return value?.trim() || "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const formType = body.formType || "contact";
    const name = clean(body.name);
    const phone = clean(body.phone);
    const email = clean(body.email);
    const rental = clean(body.rental);
    const date = clean(body.date);
    const duration = clean(body.duration);
    const message = clean(body.message);

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const fromEmail =
      process.env.CONTACT_FROM_EMAIL ||
      "Lakes Area R&R <onboarding@resend.dev>";

    const clientEmail = process.env.CONTACT_CLIENT_EMAIL;
    const internalEmail = process.env.CONTACT_INTERNAL_EMAIL;

    if (!clientEmail || !internalEmail) {
      return NextResponse.json(
        { error: "Missing email destination env values" },
        { status: 500 }
      );
    }

    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email || "Not provided");
    const safeRental = escapeHtml(rental || "Not provided");
    const safeDate = escapeHtml(date || "Not provided");
    const safeDuration = escapeHtml(duration || "Not provided");
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    const isRental = formType === "rental" || formType === "quote";

    const subject = isRental
      ? `New Rental Quote Request${rental ? `: ${rental}` : ""}`
      : `New Website Message from ${name}`;

    const clientHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f241b;">
        <h2 style="margin-bottom: 16px;">${subject}</h2>

        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>

        ${
          isRental
            ? `
              <p><strong>Rental Interested In:</strong> ${safeRental}</p>
              <p><strong>Date Needed:</strong> ${safeDate}</p>
              <p><strong>How Long:</strong> ${safeDuration}</p>
            `
            : ""
        }

        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>

        <hr style="border: none; border-top: 1px solid #ddd; margin: 24px 0;" />

        <p style="font-size: 13px; color: #687360;">
          This message was sent from the Lakes Area R&R website.
        </p>
      </div>
    `;

    const internalHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f241b;">
        <h2 style="margin-bottom: 16px;">Website Lead Copy</h2>

        <p><strong>Business:</strong> Lakes Area R&R</p>
        <p><strong>Form Type:</strong> ${escapeHtml(formType)}</p>
        <p><strong>Sent To Client:</strong> ${escapeHtml(clientEmail)}</p>

        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />

        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>

        ${
          isRental
            ? `
              <p><strong>Rental Interested In:</strong> ${safeRental}</p>
              <p><strong>Date Needed:</strong> ${safeDate}</p>
              <p><strong>How Long:</strong> ${safeDuration}</p>
            `
            : ""
        }

        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      </div>
    `;

    await resend.emails.send({
      from: fromEmail,
      to: clientEmail,
      replyTo: email || undefined,
      subject,
      html: clientHtml,
    });

    await resend.emails.send({
      from: fromEmail,
      to: internalEmail,
      replyTo: email || undefined,
      subject: `[Copy] ${subject}`,
      html: internalHtml,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact route error:", error);

    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}