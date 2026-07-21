"use client";

import { siteData } from "@/data/site";
import { useCallback, useEffect, useState } from "react";
import { FiSend } from "react-icons/fi";

type FormStatus = "idle" | "sending" | "success" | "error";

type CaptchaChallenge = {
  question: string;
  token: string;
};

type ContactFormProps = {
  formType?: "contact" | "quote" | "rental";
  selectedRental?: string;
  buttonLabel?: string;
};

export default function ContactForm({
  formType = "contact",
  selectedRental = "",
  buttonLabel = "Send Message",
}: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [captcha, setCaptcha] = useState<CaptchaChallenge | null>(null);

  const loadCaptcha = useCallback(async () => {
    try {
      const response = await fetch("/api/contact", { cache: "no-store" });

      if (!response.ok) {
        throw new Error("Unable to load security question");
      }

      const challenge = (await response.json()) as CaptchaChallenge;
      setCaptcha(challenge);
    } catch {
      setCaptcha(null);
      setStatus("error");
      setStatusMessage(
        "The security question could not load. Please refresh the page or call 218-454-3336."
      );
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void loadCaptcha();
    }, 0);

    return () => window.clearTimeout(timer);
  }, [loadCaptcha]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!captcha) {
      setStatus("error");
      setStatusMessage("Please wait for the security question to load.");
      return;
    }

    setStatus("sending");
    setStatusMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      formType,
      name: String(formData.get("name") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      rental: String(formData.get("rental") || selectedRental || "").trim(),
      date: String(formData.get("date") || "").trim(),
      duration: String(formData.get("duration") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      captchaAnswer: String(formData.get("captchaAnswer") || "").trim(),
      captchaToken: captcha.token,
      website: String(formData.get("website") || "").trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const responseBody = (await res.json().catch(() => null)) as
        | { error?: string }
        | null;

      if (!res.ok) {
        throw new Error(responseBody?.error || "Failed to send message");
      }

      setStatus("success");
      setStatusMessage("Message sent. Lakes Area R&R will follow up soon.");
      form.reset();
      await loadCaptcha();
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please call 218-454-3336."
      );
      await loadCaptcha();
    }
  }

  const isRentalForm = formType === "rental" || formType === "quote";

  const rentalOptions =
    siteData.rentalsPage.quoteForm.fields.find(
      (field) => field.name === "rental"
    )?.options || [];

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Name
          <input name="name" type="text" placeholder="Your name" required />
        </label>

        <label>
          Phone
          <input name="phone" type="tel" placeholder="Phone number" required />
        </label>

        <label>
          Email
          <input name="email" type="email" placeholder="Email address" />
        </label>

        {isRentalForm ? (
          <>
            <label>
              Rental Interested In
              {selectedRental ? (
                <input
                  name="rental"
                  type="text"
                  defaultValue={selectedRental}
                  placeholder="Rental interested in"
                />
              ) : (
                <select name="rental" defaultValue="">
                  <option value="" disabled>
                    Select a rental
                  </option>
                  {rentalOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
            </label>

            <label>
              Date Needed
              <input name="date" type="date" />
            </label>

            <label>
              How Long
              <input
                name="duration"
                type="text"
                placeholder="Half day, full day, weekend, week, etc."
              />
            </label>
          </>
        ) : null}

        <label className="full">
          Message
          <textarea
            name="message"
            rows={5}
            placeholder={
              isRentalForm
                ? "Tell us what you are interested in."
                : "Tell us what you need."
            }
            required
          />
        </label>

        <label className="full captcha-field">
          Quick security check
          <span className="captcha-question">
            {captcha?.question || "Loading question..."}
          </span>
          <input
            name="captchaAnswer"
            type="number"
            inputMode="numeric"
            autoComplete="off"
            placeholder="Your answer"
            required
            disabled={!captcha}
          />
        </label>

        <label className="bot-field" aria-hidden="true">
          Website
          <input
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <button type="submit" disabled={status === "sending" || !captcha}>
        <FiSend />
        {status === "sending" ? "Sending..." : buttonLabel}
      </button>

      {status === "success" ? (
        <p className="form-status success">{statusMessage}</p>
      ) : null}

      {status === "error" ? (
        <p className="form-status error">{statusMessage}</p>
      ) : null}
    </form>
  );
}
