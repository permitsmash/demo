import { site } from "@/lib/site";

export function HomepageJsonLd() {
  const { rating, totalReviews, reviews } = site.googleReviews;

  const drivingSchool = {
    "@context": "https://schema.org",
    "@type": "DrivingSchool",
    name: site.name,
    description: site.description,
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
    areaServed: site.serviceArea,
    openingHours: "Mo-Fr 10:00-16:00",
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
    mainEntity: site.homepageFaqs.map((item) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(drivingSchool) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
