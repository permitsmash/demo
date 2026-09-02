import type { LiveSiteData } from "@/lib/catalog/map";
import { site as staticSite } from "@/lib/site";

type Props = {
  site: LiveSiteData;
};

function safeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function HomepageJsonLd({ site }: Props) {
  const { rating, totalReviews, reviews } = staticSite.googleReviews;

  const drivingSchool = {
    "@context": "https://schema.org",
    "@type": "DrivingSchool",
    name: site.name,
    description: staticSite.description,
    url: "https://jmcdrivingschool.com",
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
    areaServed: staticSite.serviceArea,
    openingHours: site.officeHours,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating,
      reviewCount: totalReviews,
      bestRating: 5,
    },
    review: reviews.slice(0, 5).map((review) => ({
      "@type": "Review",
      author: { "@type": "Person", name: review.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
      },
      reviewBody: review.quote,
    })),
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: staticSite.homepageFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(drivingSchool) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqPage) }}
      />
    </>
  );
}
