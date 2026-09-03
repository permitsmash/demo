"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import type { ClassSession } from "@/lib/enrollment/catalog";
import { parseScheduleDetailLine } from "@/lib/schedule/parseScheduleDetail";

type ClassScheduleDialogProps = {
  session: ClassSession;
  title: string;
  closeLabel: string;
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

function ScheduleEntryRow({
  entry,
  dayNumber,
}: {
  entry: ReturnType<typeof parseScheduleDetailLine>;
  dayNumber: number;
}) {
  const showBadge = entry.month && entry.day;
  const dateSecondary =
    entry.month && entry.day
      ? `${entry.month} ${entry.day}`
      : entry.dateLabel;

  return (
    <li className="schedule-dialog-entry">
      {showBadge ? (
        <div className="schedule-dialog-date-badge" aria-hidden="true">
          <span className="schedule-dialog-date-month">{entry.month}</span>
          <span className="schedule-dialog-date-day">{entry.day}</span>
        </div>
      ) : (
        <div className="schedule-dialog-date-badge schedule-dialog-date-badge-muted">
          <span className="schedule-dialog-date-day">{dayNumber}</span>
        </div>
      )}
      <div className="schedule-dialog-entry-body">
        {entry.title ? (
          <>
            <p className="schedule-dialog-entry-primary">
              {entry.weekday ? (
                <span className="schedule-dialog-entry-weekday">{entry.weekday}</span>
              ) : null}
              <span className="schedule-dialog-entry-title">{entry.title}</span>
            </p>
            <p className="schedule-dialog-entry-secondary">{dateSecondary}</p>
          </>
        ) : entry.weekday ? (
          <>
            <p className="schedule-dialog-entry-primary">
              <span className="schedule-dialog-entry-weekday">{entry.weekday}</span>
            </p>
            <p className="schedule-dialog-entry-secondary">{dateSecondary}</p>
          </>
        ) : (
          <p className="schedule-dialog-entry-primary">
            <span className="schedule-dialog-entry-title">{entry.dateLabel}</span>
          </p>
        )}
      </div>
      {entry.timeLabel ? (
        <div className="schedule-dialog-entry-time">
          <span className="material-symbols-outlined icon-sm" aria-hidden="true">schedule</span>
          <span>{entry.timeLabel}</span>
        </div>
      ) : null}
    </li>
  );
}

export function ClassScheduleDialog({
  session,
  title,
  closeLabel,
  onClose,
}: ClassScheduleDialogProps) {
  const mounted = useIsClient();
  const dialogRef = useRef<HTMLDivElement>(null);
  const parsedEntries = session.scheduleDetails.map(parseScheduleDetailLine);
  const structuredEntries = parsedEntries.filter((entry) => !entry.isRangeOnly);
  const rangeOnlyEntry = parsedEntries.find((entry) => entry.isRangeOnly);
  const showStructuredList = structuredEntries.length > 0;

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
            <p className="schedule-dialog-eyebrow">Class schedule</p>
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
          {showStructuredList ? (
            <span className="schedule-dialog-chip schedule-dialog-chip-muted">
              {structuredEntries.length} class {structuredEntries.length === 1 ? "day" : "days"}
            </span>
          ) : null}
        </div>

        <div className="schedule-dialog-body">
          {showStructuredList ? (
            <ol className="schedule-dialog-list">
              {structuredEntries.map((entry, index) => (
                <ScheduleEntryRow key={`${entry.dateLabel}-${entry.timeLabel}-${index}`} entry={entry} dayNumber={index + 1} />
              ))}
            </ol>
          ) : (
            <div className="schedule-dialog-fallback">
              <span className="material-symbols-outlined icon-base text-secondary-container" aria-hidden="true">
                calendar_month
              </span>
              <p className="schedule-dialog-fallback-text">
                {rangeOnlyEntry?.dateLabel ?? session.startDate}
                {rangeOnlyEntry?.dateLabel && session.endDate ? ` – ${session.endDate}` : ""}
              </p>
            </div>
          )}

          {session.notes ? (
            <div className="schedule-dialog-notes">
              <p className="schedule-dialog-notes-label">Notes</p>
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
