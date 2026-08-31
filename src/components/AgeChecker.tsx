"use client";

import { useState } from "react";
import { useLocale } from "@/components/LocaleProvider";

function calculateIsEligible(birthdate: string) {
  if (!birthdate) return null;
  const birth = new Date(birthdate);
  if (Number.isNaN(birth.getTime())) return null;

  const today = new Date();
  const required = new Date(birth);
  required.setFullYear(required.getFullYear() + 15);
  required.setMonth(required.getMonth() + 9);

  return today >= required;
}

export default function AgeChecker() {
  const { messages } = useLocale();
  const ac = messages.ageChecker;
  const [date, setDate] = useState("");
  const eligible = calculateIsEligible(date);

  return (
    <section className="w-full max-w-content-md card flex flex-col gap-sm">
      <div className="flex items-center gap-xs">
        <span className="material-symbols-outlined icon-base icon-filled text-secondary-container">
          event
        </span>
        <h3 className="text-h3 text-primary">{ac.title}</h3>
      </div>
      <p className="text-body-sm text-on-surface-variant">{ac.desc}</p>
      <label className="flex flex-col gap-xs mt-xs">
        <span className="form-label">{ac.dobLabel}</span>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="input-field"
        />
      </label>
      {eligible !== null && (
        <div
          className={`mt-xs rounded-md px-sm py-xs text-body-sm flex items-start gap-xs ${
            eligible
              ? "bg-secondary-container/10 text-secondary-container"
              : "bg-error-container/10 text-error"
          }`}
        >
          <span className="material-symbols-outlined icon-sm mt-[2px]">
            {eligible ? "check_circle" : "error"}
          </span>
          <span>{eligible ? ac.eligible : ac.notEligible}</span>
        </div>
      )}
    </section>
  );
}
