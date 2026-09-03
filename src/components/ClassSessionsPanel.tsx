"use client";

import { useState } from "react";
import { ClassScheduleDialog } from "@/components/ClassScheduleDialog";
import type { ClassSession } from "@/lib/enrollment/catalog";

type ClassSessionsPanelProps = {
  sessions: ClassSession[];
  labels: {
    session: string;
    dates: string;
    location: string;
    totalSpots: string;
    availableSpots: string;
    sessionFull: string;
    notes: string;
    viewSchedule: string;
    close: string;
    contactOffice: string;
    noSessions: string;
  };
  phoneTel: string;
};

const compactOutlineBtn =
  "inline-flex items-center justify-center rounded-full border-2 border-primary bg-transparent px-sm py-xs font-button text-button font-semibold text-primary transition-[color,background-color,transform] hover:bg-primary hover:text-on-primary active:scale-95";
const compactPrimaryBtn =
  "btn-primary btn-primary-sm inline-flex rounded-full font-button text-button";

function formatAvailableSpots(session: ClassSession, sessionFullLabel: string) {
  if (session.remainingSpots == null) {
    return "—";
  }

  if (session.remainingSpots === 0) {
    return sessionFullLabel;
  }

  return String(session.remainingSpots);
}

function formatTotalSpots(session: ClassSession) {
  return session.capacity != null ? String(session.capacity) : "—";
}

export function ClassSessionsPanel({ sessions, labels, phoneTel }: ClassSessionsPanelProps) {
  const [activeSession, setActiveSession] = useState<ClassSession | null>(null);

  if (sessions.length === 0) {
    return (
      <p className="font-body-md text-body-md text-on-surface-variant rounded-lg border border-outline-variant bg-surface-container-lowest p-md">
        {labels.noSessions}
      </p>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-sm md:hidden">
        {sessions.map((session) => (
          <article
            key={session.id}
            className="rounded-lg border border-outline-variant bg-surface-container-lowest p-md flex flex-col gap-sm"
          >
            <h3 className="font-h3 text-h3 text-primary">
              {session.sessionName ?? session.location}
            </h3>
            <p className="text-body-sm text-on-surface-variant">
              {session.startDate} – {session.endDate}
            </p>
            <p className="text-body-sm text-on-surface-variant">
              {labels.location}: {session.location}
            </p>
            {session.capacity != null ? (
              <>
                <p className="text-body-sm text-on-surface-variant">
                  {labels.totalSpots}: {formatTotalSpots(session)}
                </p>
                <p
                  className={`text-body-sm ${
                    session.remainingSpots === 0
                      ? "font-semibold text-error"
                      : "text-on-surface-variant"
                  }`}
                >
                  {labels.availableSpots}:{" "}
                  {formatAvailableSpots(session, labels.sessionFull)}
                </p>
              </>
            ) : null}
            {session.notes ? (
              <p className="text-body-sm text-on-surface-variant">
                {labels.notes}: {session.notes}
              </p>
            ) : null}
            <div className="flex flex-wrap gap-xs">
              <button
                type="button"
                className={compactOutlineBtn}
                onClick={() => setActiveSession(session)}
              >
                {labels.viewSchedule}
              </button>
              <a href={`tel:${phoneTel}`} className={compactPrimaryBtn}>
                {labels.contactOffice}
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="hidden md:block overflow-x-auto rounded-lg border border-outline-variant bg-surface-container-lowest">
        <table className="min-w-full text-left text-body-sm font-body-sm">
          <thead className="bg-surface-container-low">
            <tr>
              <th className="py-xs px-sm text-on-surface-variant">{labels.session}</th>
              <th className="py-xs px-sm text-on-surface-variant">{labels.dates}</th>
              <th className="py-xs px-sm text-on-surface-variant">{labels.location}</th>
              <th className="py-xs px-sm text-on-surface-variant">{labels.totalSpots}</th>
              <th className="py-xs px-sm text-on-surface-variant">{labels.availableSpots}</th>
              <th className="py-xs px-sm text-right" aria-hidden="true" />
            </tr>
          </thead>
          <tbody>
            {sessions.map((session) => (
              <tr key={session.id} className="border-t border-outline-variant/60">
                <td className="py-xs px-sm">
                  <div className="font-body-md text-body-md text-primary">
                    {session.sessionName ?? session.location}
                  </div>
                  {session.notes ? (
                    <p className="text-body-sm text-on-surface-variant mt-xs">{session.notes}</p>
                  ) : null}
                </td>
                <td className="py-xs px-sm whitespace-nowrap">
                  {session.startDate} – {session.endDate}
                </td>
                <td className="py-xs px-sm">{session.location}</td>
                <td className="py-xs px-sm">{formatTotalSpots(session)}</td>
                <td
                  className={`py-xs px-sm ${
                    session.remainingSpots === 0 ? "font-semibold text-error" : ""
                  }`}
                >
                  {formatAvailableSpots(session, labels.sessionFull)}
                </td>
                <td className="py-xs px-sm text-right">
                  <div className="flex items-center justify-end gap-xs">
                    <button
                      type="button"
                      className={compactOutlineBtn}
                      onClick={() => setActiveSession(session)}
                    >
                      {labels.viewSchedule}
                    </button>
                    <a href={`tel:${phoneTel}`} className={compactPrimaryBtn}>
                      {labels.contactOffice}
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {activeSession ? (
        <ClassScheduleDialog
          session={activeSession}
          title={activeSession.sessionName ?? activeSession.location}
          closeLabel={labels.close}
          onClose={() => setActiveSession(null)}
        />
      ) : null}
    </>
  );
}
