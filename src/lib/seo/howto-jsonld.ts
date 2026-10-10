import { getMessages, localizedPath } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/locales";
import { rmv } from "@/lib/rmv";
import { site } from "@/lib/site";

export function buildLicenseHowToJsonLd(locale: Locale) {
  const { home } = getMessages(locale);
  const url = `${site.url}${localizedPath(locale, "/")}#license-path`;
  const steps = [
    { name: home.teen1Title, text: home.teen1Desc },
    { name: home.teen2Title, text: home.teen2Desc },
    { name: home.teen3Title, text: home.teen3Desc },
    { name: home.teen4Title, text: `${home.teen4Desc} Source: ${rmv.juniorOperator}` },
    { name: home.teen5Title, text: `${home.teen5Desc} Source: ${rmv.classDRoadTest}` },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${url}`,
    name: home.licensePathTitle,
    description: `${home.pathUnder18}. ${home.licensePathIntro}`,
    inLanguage: locale,
    isPartOf: { "@id": `${site.url}/#business` },
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      url: `${site.url}${localizedPath(locale, "/")}#license-path-step-${index + 1}`,
    })),
  };
}
