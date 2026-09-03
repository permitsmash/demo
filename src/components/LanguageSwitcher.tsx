"use client";

import { localeLabels, locales, type Locale } from "@/lib/i18n";
import { useLocale } from "@/components/LocaleProvider";

type LanguageSwitcherProps = {
  variant?: "nav" | "banner";
};

export function LanguageSwitcher({ variant = "nav" }: LanguageSwitcherProps) {
  const { locale, setLocale, isPending } = useLocale();
  const isBanner = variant === "banner";

  return (
    <div className="relative inline-flex shrink-0 items-center">
      <label htmlFor={`language-select-${variant}`} className="sr-only">
        Language
      </label>
      <span
        className={`material-symbols-outlined shrink-0 ${
          isBanner
            ? "text-inherit icon-sm"
            : "text-on-surface-variant icon-base hidden sm:inline"
        }`}
        aria-hidden
      >
        language
      </span>
      <div className={`relative shrink-0 ${isBanner ? "ml-1" : "ml-1 sm:ml-1"}`}>
        <select
          id={`language-select-${variant}`}
          value={locale}
          disabled={isPending}
          onChange={(event) => setLocale(event.target.value as Locale)}
          className={
            isBanner
              ? "min-w-[6.75rem] appearance-none bg-transparent border-0 outline-none ring-0 shadow-none text-inherit font-semibold text-body-sm leading-normal py-0.5 pl-0 pr-6 cursor-pointer whitespace-nowrap hover:opacity-80 focus:outline-none focus:ring-0 disabled:opacity-60"
              : "min-w-[6.75rem] appearance-none bg-transparent border-0 outline-none ring-0 shadow-none text-primary font-body-sm text-body-sm leading-normal py-1.5 pl-0 pr-6 cursor-pointer whitespace-nowrap hover:text-secondary-container focus:outline-none focus:ring-0 disabled:opacity-60"
          }
          aria-label="Select language"
        >
          {locales.map((code) => (
            <option key={code} value={code} className="text-on-surface bg-surface font-normal">
              {localeLabels[code]}
            </option>
          ))}
        </select>
        <span
          className={`material-symbols-outlined pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 icon-sm ${
            isBanner ? "text-inherit opacity-80" : "text-on-surface-variant"
          }`}
          aria-hidden
        >
          expand_more
        </span>
      </div>
    </div>
  );
}
