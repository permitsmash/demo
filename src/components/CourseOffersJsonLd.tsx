import { JsonLd } from "@/components/JsonLd";
import type { PublicCatalogProduct } from "@/lib/catalog/types";
import { site } from "@/lib/site";

function offerDescription(product: PublicCatalogProduct) {
  return [product.description, product.customerIncludes]
    .map((value) => value?.trim())
    .filter((value): value is string => Boolean(value))
    .join(" ")
    .replace(/\s+/g, " ");
}

export function CourseOffersJsonLd({
  packages,
  schoolName,
  currency,
}: {
  packages: readonly PublicCatalogProduct[];
  schoolName: string;
  currency: string;
}) {
  const courses = packages
    .filter((product) => {
      const description = offerDescription(product);
      return Number.isFinite(product.price) && product.price > 0 && description.length >= 12;
    })
    .map((product) => {
      const description = offerDescription(product);
      return {
        "@type": "Course",
        name: product.name,
        ...(description ? { description } : {}),
        provider: {
          "@type": "DrivingSchool",
          "@id": `${site.url}/#business`,
          name: schoolName,
          url: site.url,
        },
        offers: {
          "@type": "Offer",
          price: product.price,
          priceCurrency: currency || "USD",
          availability: "https://schema.org/InStock",
          url: `${site.url}/courses`,
        },
      };
    });

  if (courses.length === 0) return null;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": courses,
      }}
    />
  );
}
