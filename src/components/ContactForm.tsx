"use client";

import { siteData } from "@/data/site";
import { useState } from "react";
import { FiSend } from "react-icons/fi";

type FormStatus = "idle" | "sending" | "success" | "error";

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

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

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
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
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
      </div>

      <button type="submit" disabled={status === "sending"}>
        <FiSend />
        {status === "sending" ? "Sending..." : buttonLabel}
      </button>

      {status === "success" ? (
        <p className="form-status success">
          Message sent. Lakes Area R&R will follow up soon.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="form-status error">
          Something went wrong. Please call 218-454-3336.
        </p>
      ) : null}
    </form>
  );
}