"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import type { ClassSession } from "@/lib/enrollment/catalog";
import {
  parseScheduleDetailLine,
  type ParsedScheduleDetail,
} from "@/lib/schedule/parseScheduleDetail";

export type ClassScheduleTableLabels = {
  eyebrow: string;
  number: string;
  date: string;
  session: string;
  time: string;
  notes: string;
  classDays: string;
};

type ClassScheduleDialogProps = {
  session: ClassSession;
  title: string;
  closeLabel: string;
  tableLabels: ClassScheduleTableLabels;
  onClose: () => void;
};

const subscribeNoop = () => () => undefined;

function useIsClient() {
  return useSyncExternalStore(subscribeNoop, () => true, () => false);
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

function getFocusableElements(container: HTMLElement) {
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
    (element) => !element.hasAttribute("disabled") && element.tabIndex !== -1,
  );
}

function formatScheduleDate(entry: ParsedScheduleDetail): string {
  if (entry.weekday && entry.month && entry.day) {
    return `${entry.weekday}, ${entry.month} ${entry.day}`;
  }
  if (entry.month && entry.day) {
    return `${entry.month} ${entry.day}`;
  }
  return entry.dateLabel || "—";
}

function formatClassDaysLabel(count: number, template: string): string {
  return template.replace("{count}", String(count));
}

export function ClassScheduleDialog({
  session,
  title,
  closeLabel,
  tableLabels,
  onClose,
}: ClassScheduleDialogProps) {
  const mounted = useIsClient();
  const dialogRef = useRef<HTMLDivElement>(null);
  const parsedEntries = session.scheduleDetails.map(parseScheduleDetailLine);
  const structuredEntries = parsedEntries.filter((entry) => !entry.isRangeOnly);
  const rangeOnlyEntry = parsedEntries.find((entry) => entry.isRangeOnly);
  const showStructuredTable = structuredEntries.length > 0;

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

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const dialog = dialogRef.current;
    if (!dialog) return;

    const focusable = getFocusableElements(dialog);
    (focusable[0] ?? dialog).focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const items = getFocusableElements(dialog);
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [mounted, onClose]);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <div className="enrollment-schedule-overlay" onClick={onClose} role="presentation">
      <div
        ref={dialogRef}
        className="enrollment-schedule-dialog"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="class-schedule-dialog-title"
        tabIndex={-1}
      >
        <div className="schedule-dialog-header">
          <div className="schedule-dialog-header-text">
            <p className="schedule-dialog-eyebrow">{tableLabels.eyebrow}</p>
            <h3 id="class-schedule-dialog-title" className="schedule-dialog-title">
              {title}
            </h3>
          </div>
          <button
            type="button"
            className="schedule-dialog-close"
            onClick={onClose}
            aria-label={closeLabel}
          >
            <span className="material-symbols-outlined icon-base">close</span>
          </button>
        </div>

        <div className="schedule-dialog-meta">
          <span className="schedule-dialog-chip">
            <span className="material-symbols-outlined icon-sm" aria-hidden="true">location_on</span>
            {session.location}
          </span>
          <span className="schedule-dialog-chip">
            <span className="material-symbols-outlined icon-sm" aria-hidden="true">event</span>
            {session.startDate} – {session.endDate}
          </span>
          {showStructuredTable ? (
            <span className="schedule-dialog-chip schedule-dialog-chip-muted">
              {formatClassDaysLabel(structuredEntries.length, tableLabels.classDays)}
            </span>
          ) : null}
        </div>

        <div className="schedule-dialog-body">
          {showStructuredTable ? (
            <div className="schedule-dialog-table-wrap">
              <table className="schedule-dialog-table">
                <thead>
                  <tr>
                    <th scope="col" className="schedule-dialog-table-col-number">
                      {tableLabels.number}
                    </th>
                    <th scope="col">{tableLabels.date}</th>
                    <th scope="col">{tableLabels.session}</th>
                    <th scope="col" className="schedule-dialog-table-col-time">
                      {tableLabels.time}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {structuredEntries.map((entry, index) => (
                    <tr key={`${entry.dateLabel}-${entry.timeLabel}-${index}`}>
                      <td className="schedule-dialog-table-col-number">{index + 1}</td>
                      <td className="schedule-dialog-table-date">{formatScheduleDate(entry)}</td>
                      <td className="schedule-dialog-table-session">
                        {entry.title ? entry.title : "—"}
                      </td>
                      <td className="schedule-dialog-table-time">
                        {entry.timeLabel ? entry.timeLabel : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="schedule-dialog-fallback">
              <span className="material-symbols-outlined icon-base text-secondary-container" aria-hidden="true">
                calendar_month
              </span>
              <p className="schedule-dialog-fallback-text">
                {rangeOnlyEntry?.dateLabel ?? session.startDate}
              </p>
            </div>
          )}

          {session.notes ? (
            <div className="schedule-dialog-notes">
              <p className="schedule-dialog-notes-label">{tableLabels.notes}</p>
              <p className="schedule-dialog-notes-text">{session.notes}</p>
            </div>
          ) : null}
        </div>

        <div className="schedule-dialog-footer">
          <button type="button" className="btn-primary schedule-dialog-done" onClick={onClose}>
            {closeLabel}
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
