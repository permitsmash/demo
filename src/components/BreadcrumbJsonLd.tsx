"use client";

import { usePathname } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { useLocale } from "@/components/LocaleProvider";
import { localizedPath, splitLocalePrefix, type Messages } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/locales";
import { site } from "@/lib/site";

const careersLabel: Record<Locale, string> = {
  en: "Careers",
  es: "Empleo",
  pt: "Carreiras",
  ht: "Karyè",
};

const pageName: Record<string, (messages: Messages, locale: Locale) => string> = {
  "/courses": (messages) => messages.nav.programs,
  "/road-tests": (messages) => messages.nav.roadTests,
  "/classes": (messages) => messages.nav.classes,
  "/about": (messages) => messages.nav.about,
  "/contact": (messages) => messages.nav.contact,
  "/faq": (messages) => messages.nav.faq,
  "/legal": (messages) => messages.legal.title,
  "/resources": (messages) => messages.resources.title,
  "/careers": (_messages, locale) => careersLabel[locale],
};

export function BreadcrumbJsonLd() {
  const pathname = usePathname();
  const { locale, messages } = useLocale();
  const pagePath = splitLocalePrefix(pathname).pathname;
  const nameForPath = pageName[pagePath];
  if (!nameForPath) return null;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: messages.footer.home,
            item: `${site.url}${localizedPath(locale, "/")}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: nameForPath(messages, locale),
            item: `${site.url}${pathname}`,
          },
        ],
      }}
    />
  );
}
