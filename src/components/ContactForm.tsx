"use client";

import { useState, type FormEvent } from "react";
import { useLocale } from "@/components/LocaleProvider";

type FormStatus = "idle" | "submitting" | "success" | "error";

function isValidPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

type ContactFormProps = {
  contactApiUrl: string;
};

export function ContactForm({ contactApiUrl }: ContactFormProps) {
  const { messages } = useLocale();
  const { contact, common } = messages;
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      website: String(formData.get("website") ?? "").trim(),
    };

    if (!payload.name || !payload.email || !payload.phone || !payload.subject || !payload.message) {
      setStatus("error");
      setErrorMessage(contact.validationRequired);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      setStatus("error");
      setErrorMessage(contact.validationEmail);
      return;
    }

    if (!isValidPhone(payload.phone)) {
      setStatus("error");
      setErrorMessage(contact.validationPhone);
      return;
    }

    try {
      const response = await fetch(contactApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(15000),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(contact.errorMessage);
    }
  }

  if (status === "success") {
    return (
      <div className="card elevation-2">
        <div className="flex flex-col gap-sm text-center py-lg">
          <span className="material-symbols-outlined icon-base icon-filled text-secondary-container text-h2 mx-auto">
            check_circle
          </span>
          <h2 className="font-h3 text-h3 text-primary">{contact.successTitle}</h2>
          <p className="text-body-md text-on-surface-variant">{contact.successMessage}</p>
          <button
            className="btn-solid w-full sm:w-auto mx-auto mt-sm"
            type="button"
            onClick={() => setStatus("idle")}
          >
            {contact.sendAnother}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="card elevation-2">
      <h2 className="font-h3 text-h3 text-primary mb-md">{contact.sendMessage}</h2>
      <form className="flex flex-col gap-md" onSubmit={handleSubmit} noValidate>
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
          <div className="flex flex-col gap-xs">
            <label className="form-label" htmlFor="name">
              {contact.fullName}
            </label>
            <input
              className="input-field"
              id="name"
              name="name"
              placeholder={contact.fullNamePlaceholder}
              type="text"
              required
              disabled={status === "submitting"}
            />
          </div>
          <div className="flex flex-col gap-xs">
            <label className="form-label" htmlFor="email">
              {contact.emailAddress}
            </label>
            <input
              className="input-field"
              id="email"
              name="email"
              placeholder={contact.emailPlaceholder}
              type="email"
              required
              disabled={status === "submitting"}
            />
          </div>
        </div>

        <div className="flex flex-col gap-xs">
          <label className="form-label" htmlFor="phone">
            {contact.phoneNumber}
          </label>
          <input
            className="input-field"
            id="phone"
            name="phone"
            placeholder={contact.phonePlaceholder}
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required
            disabled={status === "submitting"}
          />
        </div>

        <div className="flex flex-col gap-xs">
          <label className="form-label" htmlFor="subject">
            {contact.subject}
          </label>
          <div className="relative">
            <select
              className="input-field appearance-none pr-lg"
              id="subject"
              name="subject"
              defaultValue=""
              required
              disabled={status === "submitting"}
            >
              <option disabled value="">
                {contact.selectInquiry}
              </option>
              <option value="enrollment">{contact.inquiryEnrollment}</option>
              <option value="parent">{contact.inquiryParent}</option>
              <option value="adult">{contact.inquiryAdult}</option>
              <option value="road-test">{contact.inquiryRoadTest}</option>
              <option value="other">{contact.inquiryOther}</option>
            </select>
            <span className="material-symbols-outlined icon-base absolute right-sm top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">
              expand_more
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-xs">
          <label className="form-label" htmlFor="message">
            {contact.yourMessage}
          </label>
          <textarea
            className="input-field resize-y"
            id="message"
            name="message"
            placeholder={contact.messagePlaceholder}
            rows={5}
            required
            disabled={status === "submitting"}
          />
        </div>

        {status === "error" && errorMessage ? (
          <p className="text-body-sm text-error" role="alert">
            {errorMessage}
          </p>
        ) : null}

        <div className="pt-sm">
          <button
            className="btn-solid w-full sm:w-auto"
            type="submit"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? contact.submitting : common.sendMessage}
            <span className="material-symbols-outlined icon-base icon-filled">
              {status === "submitting" ? "hourglass_top" : "send"}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
