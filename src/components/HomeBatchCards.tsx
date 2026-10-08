"use client";

import { useState } from "react";
import {
  ClassScheduleDialog,
  type ClassScheduleTableLabels,
} from "@/components/ClassScheduleDialog";
import type { HomeBatchCard } from "@/lib/catalog";
import { formatMessage } from "@/lib/i18n";
import type { ClassSession } from "@/lib/enrollment/catalog";

const FEW_SEATS_LEFT = 5;

function seatsStatus(
  session: ClassSession,
  labels: { seatLeft: string; seatsLeft: string; sessionFull: string },
) {
  const remaining = session.remainingSpots;
  if (remaining == null) return null;
  if (remaining <= 0) {
    return { text: labels.sessionFull, tone: "full" as const };
  }
  const text = remaining === 1 ? labels.seatLeft : formatMessage(labels.seatsLeft, { count: remaining });
  return { text, tone: remaining <= FEW_SEATS_LEFT ? ("low" as const) : ("open" as const) };
}

const seatToneClass = {
  open: "bg-availability-open text-on-availability-open",
  low: "bg-availability-low text-on-availability-low",
  full: "bg-secondary-fixed text-on-secondary-fixed-variant",
};

export function HomeBatchCards({
  batches,
  closeLabel,
  tableLabels,
  seatLabels,
}: {
  batches: readonly HomeBatchCard[];
  closeLabel: string;
  tableLabels: ClassScheduleTableLabels;
  seatLabels: { seatLeft: string; seatsLeft: string; sessionFull: string };
}) {
  const [activeBatch, setActiveBatch] = useState<HomeBatchCard | null>(null);

  return (
    <>
      <div className="grid md:grid-cols-3 gap-md mb-lg">
        {batches.map((batch) => {
          const seats = seatsStatus(batch.session, seatLabels);
          return (
            <button
              key={batch.session.id}
              type="button"
              onClick={() => setActiveBatch(batch)}
              className="bg-surface-container-lowest p-md rounded-lg border border-outline-variant text-center transition-colors hover:border-secondary-container"
            >
              <h3 className="font-h3 text-h3 text-primary mb-xs">{batch.label}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{batch.dates}</p>
              {seats ? (
                <p
                  className={`mt-xs inline-flex px-sm py-0.5 font-body-sm text-body-sm font-semibold ${seatToneClass[seats.tone]}`}
                >
                  {seats.text}
                </p>
              ) : null}
            </button>
          );
        })}
      </div>

      {activeBatch ? (
        <ClassScheduleDialog
          session={activeBatch.session}
          title={activeBatch.session.sessionName ?? activeBatch.label}
          closeLabel={closeLabel}
          tableLabels={tableLabels}
          onClose={() => setActiveBatch(null)}
        />
      ) : null}
    </>
  );
}
