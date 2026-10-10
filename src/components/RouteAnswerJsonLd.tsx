import { RouteAnswerJsonLdClient } from "@/components/RouteAnswerJsonLdClient";
import { getSchoolCatalog } from "@/lib/catalog";
import { getLocale } from "@/lib/i18n/get-locale";
import { buildRouteFaqJsonLd } from "@/lib/seo/faq-jsonld";
import { buildLicenseHowToJsonLd } from "@/lib/seo/howto-jsonld";
import { buildSpeakableJsonLd } from "@/lib/seo/speakable";

export async function RouteAnswerJsonLd({ pathname }: { pathname: string }) {
  const locale = await getLocale();
  const catalog = await getSchoolCatalog();
  const blocks = [
    buildRouteFaqJsonLd(locale, pathname, catalog),
    pathname === "/" ? buildLicenseHowToJsonLd(locale) : null,
    buildSpeakableJsonLd(locale, pathname),
  ];

  return (
    <>
      {blocks.map((block, index) =>
        block ? (
          <script
            key={block["@id"]}
            id={`route-answer-jsonld-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(block).replace(/</g, "\\u003c"),
            }}
          />
        ) : null,
      )}
      <RouteAnswerJsonLdClient blocks={blocks} />
    </>
  );
}
