// src/app/api/contact/route.ts

import { createHmac, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const CAPTCHA_TTL_MS = 10 * 60 * 1000;
const CAPTCHA_MIN_FILL_TIME_MS = 1500;

type ContactPayload = {
  formType?: "contact" | "quote" | "rental";
  name?: string;
  phone?: string;
  email?: string;
  rental?: string;
  date?: string;
  duration?: string;
  message?: string;
  captchaAnswer?: string;
  captchaToken?: string;
  website?: string;
};

type CaptchaPayload = {
  answer: number;
  issuedAt: number;
  expiresAt: number;
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

function getCaptchaSecret() {
  return (
    process.env.CONTACT_CAPTCHA_SECRET ||
    process.env.RESEND_API_KEY ||
    process.env.CONTACT_INTERNAL_EMAIL ||
    "lakes-area-randr-contact-captcha"
  );
}

function signCaptcha(encodedPayload: string) {
  return createHmac("sha256", getCaptchaSecret())
    .update(encodedPayload)
    .digest("hex");
}

function makeCaptchaToken(payload: CaptchaPayload) {
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString(
    "base64url"
  );
  return `${encodedPayload}.${signCaptcha(encodedPayload)}`;
}

function verifyCaptchaToken(token: string, answer: string) {
  const [encodedPayload, suppliedSignature] = token.split(".");

  if (!encodedPayload || !suppliedSignature) {
    return false;
  }

  const expectedSignature = signCaptcha(encodedPayload);
  const suppliedBuffer = Buffer.from(suppliedSignature, "hex");
  const expectedBuffer = Buffer.from(expectedSignature, "hex");

  if (
    suppliedBuffer.length !== expectedBuffer.length ||
    !timingSafeEqual(suppliedBuffer, expectedBuffer)
  ) {
    return false;
  }

  try {
    const payload = JSON.parse(
      Buffer.from(encodedPayload, "base64url").toString("utf8")
    ) as CaptchaPayload;
    const now = Date.now();
    const numericAnswer = Number(answer);

    return (
      Number.isInteger(numericAnswer) &&
      numericAnswer === payload.answer &&
      now >= payload.issuedAt + CAPTCHA_MIN_FILL_TIME_MS &&
      now <= payload.expiresAt
    );
  } catch {
    return false;
  }
}

export async function GET() {
  const firstNumber = Math.floor(Math.random() * 8) + 2;
  const secondNumber = Math.floor(Math.random() * 8) + 1;
  const issuedAt = Date.now();

  return NextResponse.json(
    {
      question: `What is ${firstNumber} + ${secondNumber}?`,
      token: makeCaptchaToken({
        answer: firstNumber + secondNumber,
        issuedAt,
        expiresAt: issuedAt + CAPTCHA_TTL_MS,
      }),
    },
    {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    }
  );
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    // Honeypot field: real visitors never see or fill this in. Return success so
    // simple bots do not learn that their submission was discarded.
    if (clean(body.website)) {
      return NextResponse.json({ ok: true });
    }

    const captchaAnswer = clean(body.captchaAnswer);
    const captchaToken = clean(body.captchaToken);

    if (
      !captchaAnswer ||
      !captchaToken ||
      !verifyCaptchaToken(captchaToken, captchaAnswer)
    ) {
      return NextResponse.json(
        { error: "Please answer the quick security question again." },
        { status: 400 }
      );
    }

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
