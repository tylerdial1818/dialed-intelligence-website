"use client";

import { useEffect, useRef, useState } from "react";
import { track } from "@vercel/analytics";
import { site } from "@/lib/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const copy = {
  panelLabel: "Tell us in writing",
  nameLabel: "Name",
  companyLabel: "Company",
  emailLabel: "Email",
  messageLabel: "What is eating your team's time?",
  submitIdle: "Send the problem over",
  submitPending: "Sending",
  successLabel: "Received",
  success:
    "Got it. We read every one of these and reply within two business days.",
  failLead: "Something failed on our side. Email us at",
  failTail: "and we will pick it up there.",
  errors: {
    name: "Tell us your name.",
    emailMissing: "Add an email so we can reply.",
    emailInvalid: "That email does not look right.",
    message: "Give us a sentence about the problem.",
  },
};

const inputClass =
  "w-full rounded-[2px] border border-ink/25 bg-white px-4 py-3.5 font-sans text-ink placeholder:text-ink/35";

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

type Status = "idle" | "pending" | "success" | "error";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="label-mono-sm mt-2 text-blue-2">
      {message}
    </p>
  );
}

export function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  // Form-render timestamp for the server-side timing check. A ref keeps the
  // server and client renders identical, the effect stamps it after mount.
  const renderedAtRef = useRef(0);
  useEffect(() => {
    renderedAtRef.current = Date.now();
  }, []);

  function setValue(key: keyof typeof values, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (!values.name.trim()) next.name = copy.errors.name;
    if (!values.email.trim()) {
      next.email = copy.errors.emailMissing;
    } else if (!EMAIL_RE.test(values.email.trim())) {
      next.email = copy.errors.emailInvalid;
    }
    if (!values.message.trim()) next.message = copy.errors.message;
    return next;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("pending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          company: values.company.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
          website: values.website,
          renderedAt: renderedAtRef.current,
        }),
      });
      const data = (await res.json().catch(() => null)) as {
        ok?: boolean;
      } | null;
      if (res.ok && data?.ok) {
        track("contact_form_submit");
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="rounded-[5px] border border-ink/15 bg-paper-2 p-6 sm:p-8">
      <div aria-live="polite">
        {status === "success" && (
          <div className="rounded-[5px] bg-ink p-8 text-paper lg:p-10">
            <span className="label-mono-sm text-lime">
              [ {copy.successLabel} ]
            </span>
            <p className="body-lg mt-5 max-w-md text-paper/85">
              {copy.success}
            </p>
          </div>
        )}
      </div>

      {status !== "success" && (
        <>
          <p className="label-mono-sm text-ink/70">{copy.panelLabel}</p>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="relative mt-7 space-y-6"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="label-mono-sm block text-ink/70"
                >
                  {copy.nameLabel}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={(e) => setValue("name", e.target.value)}
                  aria-required="true"
                  aria-invalid={errors.name ? true : undefined}
                  aria-describedby={
                    errors.name ? "contact-name-error" : undefined
                  }
                  className={`${inputClass} mt-2.5`}
                />
                <FieldError id="contact-name-error" message={errors.name} />
              </div>
              <div>
                <label
                  htmlFor="contact-company"
                  className="label-mono-sm block text-ink/70"
                >
                  {copy.companyLabel}
                </label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={values.company}
                  onChange={(e) => setValue("company", e.target.value)}
                  className={`${inputClass} mt-2.5`}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="label-mono-sm block text-ink/70"
              >
                {copy.emailLabel}
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={(e) => setValue("email", e.target.value)}
                aria-required="true"
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={
                  errors.email ? "contact-email-error" : undefined
                }
                className={`${inputClass} mt-2.5`}
              />
              <FieldError id="contact-email-error" message={errors.email} />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="label-mono-sm block text-ink/70"
              >
                {copy.messageLabel}
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={6}
                value={values.message}
                onChange={(e) => setValue("message", e.target.value)}
                aria-required="true"
                aria-invalid={errors.message ? true : undefined}
                aria-describedby={
                  errors.message ? "contact-message-error" : undefined
                }
                className={`${inputClass} mt-2.5 resize-y`}
              />
              <FieldError id="contact-message-error" message={errors.message} />
            </div>

            {/* Honeypot. Hidden from people, tempting to bots. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
            >
              <label htmlFor="contact-website">Website</label>
              <input
                id="contact-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={values.website}
                onChange={(e) => setValue("website", e.target.value)}
              />
            </div>

            {/* The render timestamp travels as the hidden renderedAt field
                of the JSON payload, read from renderedAtRef on submit. */}

            {status === "error" && (
              <p
                role="alert"
                className="border-l-2 border-blue pl-4 font-sans text-[0.95rem] leading-relaxed text-ink"
              >
                {copy.failLead}{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="underline underline-offset-2 transition-colors hover:text-blue"
                >
                  {site.email}
                </a>{" "}
                {copy.failTail}
              </p>
            )}

            <div className="pt-1">
              <button
                type="submit"
                disabled={status === "pending"}
                className="label-mono inline-flex items-center gap-2.5 rounded-[2px] bg-ink px-6 py-4 text-paper transition-colors duration-200 hover:bg-blue hover:text-white disabled:cursor-wait disabled:opacity-60 disabled:hover:bg-ink disabled:hover:text-paper"
              >
                {status === "pending" ? copy.submitPending : copy.submitIdle}
                <span
                  aria-hidden="true"
                  className="font-sans text-[1.1em] leading-none"
                >
                  &#8599;
                </span>
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
