import type { LiveSiteData } from "@/lib/catalog/map";
import type { PublicCatalogProduct, PublicSchoolCatalog } from "@/lib/catalog/types";
import { JsonLd } from "@/components/JsonLd";
import { rmv } from "@/lib/rmv";
import { site as staticSite } from "@/lib/site";

type Props = {
  faqs: readonly { question: string; answer: string; source?: "classroomAge" }[];
};

const businessId = `${staticSite.url}/#business`;

function offerText(product: PublicCatalogProduct) {
  return [product.description, product.customerIncludes]
    .map((value) => value?.trim())
    .filter((value): value is string => Boolean(value))
    .join(" ")
    .replace(/\s+/g, " ");
}

function catalogOffers(catalog: PublicSchoolCatalog) {
  const currency = catalog.school.currency || "USD";
  return [...catalog.packages, ...catalog.individualLessons, ...catalog.addons]
    .filter((product) => Number.isFinite(product.price) && product.price > 0)
    .sort((a, b) => a.sortOrder - b.sortOrder || a.name.localeCompare(b.name))
    .map((product) => {
      const description = offerText(product);
      return {
        "@type": "Offer" as const,
        name: product.name,
        ...(description ? { description } : {}),
        price: product.price,
        priceCurrency: currency,
        availability: "https://schema.org/InStock",
        url: product.productKind === "addon" ? `${staticSite.url}/road-tests` : `${staticSite.url}/courses`,
      };
    });
}

function dollarRange(prices: number[]) {
  if (prices.length === 0) return undefined;
  const format = (amount: number) =>
    amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  return min === max ? format(min) : `${format(min)}-${format(max)}`;
}

export function businessJsonLd(
  site: LiveSiteData,
  description: string,
  catalog?: PublicSchoolCatalog | null,
) {
  const offers = catalog ? catalogOffers(catalog) : [];
  const priceRange = dollarRange(offers.map((offer) => offer.price));

  return {
    "@context": "https://schema.org",
    "@type": ["DrivingSchool", "LocalBusiness"],
    "@id": businessId,
    name: site.name,
    description,
    foundingDate: "2011",
    url: staticSite.url,
    image: `${staticSite.url}/images/hero.png`,
    telephone: site.phoneTel,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: staticSite.geo.latitude,
      longitude: staticSite.geo.longitude,
    },
    areaServed: staticSite.serviceArea,
    openingHours: "Mo-Fr 10:00-17:00",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      staticSite.social.facebook,
      staticSite.social.instagram,
      staticSite.social.google,
    ],
    knowsLanguage: site.languages,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phoneTel,
      email: site.email,
      contactType: "customer support",
      availableLanguage: site.languages,
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "17:00",
      },
    },
    ...(priceRange ? { priceRange } : {}),
    ...(offers.length > 0
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Driving programs",
            itemListElement: offers,
          },
        }
      : {}),
  };
}

export function HomepageJsonLd({ faqs }: Props) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text:
              item.source === "classroomAge"
                ? `${item.answer} Source: ${rmv.classroomAge}`
                : item.answer,
          },
        })),
      }}
    />
  );
}
