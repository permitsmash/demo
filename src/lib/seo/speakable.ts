import { localizedPath } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/locales";
import { site } from "@/lib/site";

const speakableSelectors: Record<string, readonly string[]> = {
  "/": ["#license-path", ".accordion-body"],
  "/faq": [".accordion-body"],
  "/courses": ["#what-is-drivers-ed"],
  "/road-tests": ["#what-is-road-test-sponsorship"],
};

export function buildSpeakableJsonLd(locale: Locale, pathname: string) {
  const cssSelector = speakableSelectors[pathname];
  if (!cssSelector) return null;

  const url = `${site.url}${localizedPath(locale, pathname)}`;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    inLanguage: locale,
    isPartOf: { "@id": `${site.url}/#business` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [...cssSelector],
    },
  };
}
