import { plainOfficialText } from "@/components/OfficialText";
import {
  buildLessonFacts,
  buildTeenPackageFacts,
  type PublicSchoolCatalog,
} from "@/lib/catalog";
import { getMessages, localizedPath } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/locales";
import { rmv } from "@/lib/rmv";
import { site } from "@/lib/site";

type FaqSource = "lessonLength" | "classroomAge" | "teenPackages";

type FaqEntry = {
  question: string;
  answer: string;
  source?: FaqSource;
};

const faqCategoryOrder = ["programs", "lessons", "test", "general", "pricing"] as const;

function answerText(
  item: FaqEntry,
  lessonFacts: ReturnType<typeof buildLessonFacts>,
  teenPackageFacts: ReturnType<typeof buildTeenPackageFacts>,
) {
  const facts =
    item.source === "lessonLength"
      ? lessonFacts
      : item.source === "teenPackages"
        ? teenPackageFacts
        : [];
  const details = facts
    .map((fact) => [fact.name, fact.priceLabel, ...fact.details].join(". "))
    .join(" ");

  return [
    plainOfficialText(item.answer),
    details,
    item.source === "classroomAge" ? `Source: ${rmv.classroomAge}` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

export function buildRouteFaqJsonLd(
  locale: Locale,
  pathname: string,
  catalog: PublicSchoolCatalog | null,
) {
  const messages = getMessages(locale);
  const faqs: readonly FaqEntry[] =
    pathname === "/"
      ? messages.home.faqs
      : pathname === "/faq"
        ? faqCategoryOrder.flatMap((key) => messages.faqPage.categories[key])
        : [];

  if (faqs.length === 0) return null;

  const url = `${site.url}${localizedPath(locale, pathname)}`;
  const lessonFacts = buildLessonFacts(catalog);
  const teenPackageFacts = buildTeenPackageFacts(catalog);

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    url,
    inLanguage: locale,
    isPartOf: { "@id": `${site.url}/#business` },
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answerText(item, lessonFacts, teenPackageFacts),
      },
    })),
  };
}
