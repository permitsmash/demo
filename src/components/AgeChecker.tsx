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
    <section className="w-full max-w-[420px] bg-surface-container-lowest border border-outline-variant rounded-lg p-md flex flex-col gap-sm">
      <div className="flex items-center gap-xs">
        <span
          className="material-symbols-outlined text-secondary-container"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          event
        </span>
        <h3 className="font-h3 text-h3 text-primary">{ac.title}</h3>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">{ac.desc}</p>
      <label className="flex flex-col gap-xs mt-xs">
        <span className="font-button text-button text-primary">{ac.dobLabel}</span>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border border-outline-variant rounded-DEFAULT px-sm py-xs bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none font-body-md text-primary"
        />
      </label>
      {eligible !== null && (
        <div
          className={`mt-xs rounded-md px-sm py-xs font-body-sm text-body-sm flex items-start gap-xs ${
            eligible
              ? "bg-secondary-container/10 text-secondary-container"
              : "bg-error-container/10 text-error"
          }`}
        >
          <span className="material-symbols-outlined text-sm mt-[2px]">
            {eligible ? "check_circle" : "error"}
          </span>
          <span>{eligible ? ac.eligible : ac.notEligible}</span>
        </div>
      )}
    </section>
  );
}
