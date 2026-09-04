"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { useLocale } from "@/components/LocaleProvider";
import type { PublicEnrollmentStudentSummary } from "@/lib/catalog/publicStudentLookup";

type EnrollGateClientProps = {
  enrollUrl: string;
};

type Step = "type" | "email" | "confirm";

const subscribeNoop = () => () => undefined;

function useIsClient() {
  return useSyncExternalStore(subscribeNoop, () => true, () => false);
}

export function EnrollGateClient({ enrollUrl }: EnrollGateClientProps) {
  const mounted = useIsClient();
  const { messages } = useLocale();
  const gate = messages.enrollment.gate;
  const dialogRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState<Step>("type");
  const [email, setEmail] = useState("");
  const [student, setStudent] = useState<PublicEnrollmentStudentSummary | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!mounted) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    dialogRef.current?.focus();
  }, [mounted, step]);

  const continueToEnrollment = (studentId?: string | null) => {
    const url = new URL(enrollUrl);
    if (studentId) {
      url.searchParams.set("student", studentId);
    }
    window.location.assign(url.toString());
  };

  const handleNewStudent = () => {
    continueToEnrollment();
  };

  const handleExistingStudent = () => {
    setError(null);
    setStep("email");
  };

  const handleLookup = async () => {
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setError(gate.emailRequired);
      return;
    }

    setBusy(true);
    setError(null);

    try {
      const response = await fetch("/api/enrollment/student-lookup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmedEmail }),
      });
      const payload = (await response.json()) as {
        student?: PublicEnrollmentStudentSummary;
        error?: string;
      };

      if (!response.ok || !payload.student) {
        setError(payload.error ?? gate.studentNotFound);
        return;
      }

      setStudent(payload.student);
      setStep("confirm");
    } catch {
      setError(gate.lookupFailed);
    } finally {
      setBusy(false);
    }
  };

  const handleBack = () => {
    setError(null);
    if (step === "confirm") {
      setStep("email");
      return;
    }
    if (step === "email") {
      setEmail("");
      setStudent(null);
      setStep("type");
    }
  };

  if (!mounted) {
    return (
      <div className="container-page section-padded">
        <p className="text-body-md text-on-surface-variant">{gate.loading}</p>
      </div>
    );
  }

  return createPortal(
    <div className="enrollment-gate-overlay" role="presentation">
      <div
        ref={dialogRef}
        className="enrollment-gate-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="enrollment-gate-title"
        tabIndex={-1}
      >
        {step === "type" ? (
          <div className="flex flex-col gap-lg">
            <div className="flex flex-col gap-sm">
              <h1 id="enrollment-gate-title" className="font-h2 text-h2 text-primary">
                {gate.title}
              </h1>
              <p className="text-body-md text-on-surface-variant">{gate.description}</p>
            </div>

            <div className="grid gap-sm sm:grid-cols-2">
              <button type="button" className="btn-primary w-full" onClick={handleNewStudent}>
                {gate.newStudent}
              </button>
              <button type="button" className="btn-outline w-full" onClick={handleExistingStudent}>
                {gate.existingStudent}
              </button>
            </div>
          </div>
        ) : null}

        {step === "email" ? (
          <div className="flex flex-col gap-lg">
            <div className="flex flex-col gap-sm">
              <h1 id="enrollment-gate-title" className="font-h2 text-h2 text-primary">
                {gate.existingTitle}
              </h1>
              <p className="text-body-md text-on-surface-variant">{gate.existingDescription}</p>
            </div>

            <div className="flex flex-col gap-xs">
              <label className="form-label" htmlFor="enrollment-gate-email">
                {gate.emailLabel}
              </label>
              <input
                id="enrollment-gate-email"
                type="email"
                className="input-field"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={gate.emailPlaceholder}
                autoComplete="email"
                disabled={busy}
              />
            </div>

            <div className="flex flex-wrap gap-sm justify-between">
              <button type="button" className="btn-outline" onClick={handleBack} disabled={busy}>
                {gate.back}
              </button>
              <button type="button" className="btn-primary" onClick={handleLookup} disabled={busy}>
                {busy ? gate.lookingUp : gate.continue}
              </button>
            </div>
          </div>
        ) : null}

        {step === "confirm" && student ? (
          <div className="flex flex-col gap-lg">
            <div className="flex flex-col gap-sm">
              <h1 id="enrollment-gate-title" className="font-h2 text-h2 text-primary">
                {gate.confirmTitle}
              </h1>
              <p className="text-body-md text-on-surface-variant">
                {gate.confirmDescription
                  .replace("{name}", `${student.firstName} ${student.lastName}`.trim())
                  .replace("{email}", student.email)}
              </p>
            </div>

            <div className="rounded-lg border border-outline-variant bg-surface-container-low px-md py-sm">
              <p className="font-semibold text-primary">
                {student.firstName} {student.lastName}
              </p>
              <p className="text-body-sm text-on-surface-variant">{student.email}</p>
            </div>

            <div className="flex flex-wrap gap-sm justify-between">
              <button type="button" className="btn-outline" onClick={handleBack}>
                {gate.back}
              </button>
              <button
                type="button"
                className="btn-primary"
                onClick={() => continueToEnrollment(student.studentId)}
              >
                {gate.continueToEnrollment}
              </button>
            </div>
          </div>
        ) : null}

        {error ? <p className="text-body-sm text-error">{error}</p> : null}
      </div>
    </div>,
    document.body,
  );
}
