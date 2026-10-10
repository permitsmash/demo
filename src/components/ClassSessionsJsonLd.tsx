import { JsonLd } from "@/components/JsonLd";
import { buildScheduledClassFacts } from "@/lib/catalog";
import type { PublicSchoolCatalog } from "@/lib/catalog/types";
import { site } from "@/lib/site";

export function ClassSessionsJsonLd({
  catalog,
  schoolName,
  address,
}: {
  catalog: PublicSchoolCatalog | null;
  schoolName: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
}) {
  const sessions = buildScheduledClassFacts(catalog);
  if (sessions.length === 0) return null;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": sessions.map((session) => ({
          "@type": "CourseInstance",
          name: session.name,
          courseMode: "onsite",
          eventStatus: "https://schema.org/EventScheduled",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          startDate: session.startDate,
          endDate: session.endDate,
          location: {
            "@type": "Place",
            name: session.location,
            address: {
              "@type": "PostalAddress",
              streetAddress: address.street,
              addressLocality: address.city,
              addressRegion: address.state,
              postalCode: address.zip,
              addressCountry: "US",
            },
          },
          ...(session.capacity != null ? { maximumAttendeeCapacity: session.capacity } : {}),
          ...(session.remainingSpots != null
            ? { remainingAttendeeCapacity: session.remainingSpots }
            : {}),
          organizer: {
            "@type": "DrivingSchool",
            "@id": `${site.url}/#business`,
            name: schoolName,
            url: site.url,
          },
        })),
      }}
    />
  );
}
