import { IEvent } from "@/types/types";

export function EventStructuredData({ experience }: { experience: IEvent }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: experience.name,
    description: experience.description,
    image: [experience.flyer_key],
    startDate: experience.start_time,
    endDate: experience.end_time,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: experience.venue_name,
      address: {
        "@type": "PostalAddress",
        streetAddress: experience.address,
        addressLocality: experience.place_name,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: experience.latitude,
        longitude: experience.longitude,
      },
    },
    organizer: {
      "@type": "Organization",
      name: experience.business?.name,
      url: experience.website_url,
    },
    ...(experience.event_url && {
      url: experience.event_url,
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
