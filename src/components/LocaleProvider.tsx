"use client";

import { createContext, useContext, useMemo, useTransition, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import {
  defaultLocale,
  formatMessage,
  getMessages,
  isValidLocale,
  LOCALE_COOKIE,
  type Locale,
  type Messages,
} from "@/lib/i18n";

type LocaleContextValue = {
  locale: Locale;
  messages: Messages;
  setLocale: (locale: Locale) => void;
  t: (template: string, values?: Record<string, string | number>) => string;
  isPending: boolean;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

type Props = {
  children: ReactNode;
  initialLocale: Locale;
};

export function LocaleProvider({ children, initialLocale }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const locale = isValidLocale(initialLocale) ? initialLocale : defaultLocale;
  const messages = useMemo(() => getMessages(locale), [locale]);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      messages,
      isPending,
      setLocale(nextLocale: Locale) {
        document.cookie = `${LOCALE_COOKIE}=${nextLocale};path=/;max-age=31536000;SameSite=Lax`;
        startTransition(() => {
          router.refresh();
        });
      },
      t(template, values) {
        return formatMessage(template, values);
      },
    }),
    [locale, messages, isPending, router]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}
