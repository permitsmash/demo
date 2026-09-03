export type ParsedScheduleDetail = {
  title?: string;
  weekday?: string;
  month?: string;
  day?: string;
  dateLabel: string;
  timeLabel: string;
  isRangeOnly: boolean;
};

const TIME_RANGE_RE = /\d{1,2}:\d{2}\s*[AP]M(?:\s*[–-]\s*\d{1,2}:\d{2}\s*[AP]M)?/;
const DATE_PART_RE = /^(?:([A-Za-z]+),\s+)?(?:([A-Za-z]+)\s+)?(\d{1,2})$/;

const MONTH_NAMES = new Set([
  "jan",
  "january",
  "feb",
  "february",
  "mar",
  "march",
  "apr",
  "april",
  "may",
  "jun",
  "june",
  "jul",
  "july",
  "aug",
  "august",
  "sep",
  "sept",
  "september",
  "oct",
  "october",
  "nov",
  "november",
  "dec",
  "december",
]);

const WEEKDAY_NAMES = new Set([
  "sun",
  "sunday",
  "mon",
  "monday",
  "tue",
  "tues",
  "tuesday",
  "wed",
  "wednesday",
  "thu",
  "thur",
  "thurs",
  "thursday",
  "fri",
  "friday",
  "sat",
  "saturday",
]);

function isValidMonthToken(month: string | undefined) {
  return month ? MONTH_NAMES.has(month.toLowerCase()) : false;
}

function isValidWeekdayToken(weekday: string | undefined) {
  return !weekday || WEEKDAY_NAMES.has(weekday.toLowerCase());
}

function parseDateLabel(dateLabel: string) {
  const match = dateLabel.trim().match(DATE_PART_RE);
  if (!match) {
    return { weekday: undefined, month: undefined, day: undefined };
  }

  return {
    weekday: match[1] ?? undefined,
    month: match[2] ?? undefined,
    day: match[3] ?? undefined,
  };
}

function isStructuredDateLabel(parsed: {
  weekday?: string;
  month?: string;
  day?: string;
}) {
  if (!parsed.day || !isValidMonthToken(parsed.month)) {
    return false;
  }

  return isValidWeekdayToken(parsed.weekday);
}

export function parseScheduleDetailLine(line: string): ParsedScheduleDetail {
  const trimmed = line.trim();
  if (!trimmed) {
    return { dateLabel: "", timeLabel: "", isRangeOnly: true };
  }

  const segments = trimmed.split(/\s+—\s+/);
  if (segments.length === 2) {
    const [first, second] = segments;

    if (TIME_RANGE_RE.test(second) && !TIME_RANGE_RE.test(first)) {
      const parsedDate = parseDateLabel(first);
      if (isStructuredDateLabel(parsedDate)) {
        return {
          ...parsedDate,
          dateLabel: first,
          timeLabel: second,
          isRangeOnly: false,
        };
      }

      if (/\d{1,2}:\d{2}/.test(first)) {
        const parsed = parseDateLabel(first);
        return {
          ...parsed,
          dateLabel: first,
          timeLabel: second,
          isRangeOnly: false,
        };
      }

      const commaIdx = second.lastIndexOf(",");
      if (commaIdx > 0 && TIME_RANGE_RE.test(second.slice(commaIdx + 1))) {
        const dateLabel = second.slice(0, commaIdx).trim();
        const parsed = parseDateLabel(dateLabel);
        return {
          title: first.trim(),
          ...parsed,
          dateLabel,
          timeLabel: second.slice(commaIdx + 1).trim(),
          isRangeOnly: false,
        };
      }

      return {
        title: first.trim(),
        dateLabel: first.trim(),
        timeLabel: second,
        isRangeOnly: false,
      };
    }
  }

  if (segments.length === 1 && TIME_RANGE_RE.test(trimmed) && !trimmed.includes(",")) {
    return { dateLabel: trimmed, timeLabel: "", isRangeOnly: true };
  }

  return { dateLabel: trimmed, timeLabel: "", isRangeOnly: true };
}
