// app/e/[id]/page.tsx

import { Footer } from "@/components/blocks/footer";
import { Navbar } from "@/components/blocks/navbar";
import ExperiencePage from "@/features/events/ExperiencePage";
import { IEvent } from "@/types/types";
import Image from "next/image";
import { Metadata } from "next";
import { EventStructuredData } from "@/features/events/EventStructuredData";

async function getExperience(id: string) {
  const apiUrl = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}/v1/experiences/${id}/details`, {
    headers: {
      "Content-Type": "application/json",
    },
    // Optional: Add caching strategy
    next: { revalidate: 60 }, // Revalidate every hour
  });

  if (!res.ok) {
    throw new Error("Failed to fetch experience");
  }

  return res.json();
}

// Generate dynamic metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  try {
    const experience: IEvent = await getExperience(id);

    return {
      title: `${experience.name} - Pelican Identity`,
      description: experience.description,

      // Open Graph (Facebook, LinkedIn)
      openGraph: {
        title: experience.name,
        description: experience.description,
        images: [
          {
            url: experience.flyer_key,
            width: 1200,
            height: 630,
            alt: experience.name,
          },
        ],
        type: "website",
        siteName: experience.business.name || "Event",
        locale: "en_US",
      },

      // Twitter Card
      twitter: {
        card: "summary_large_image",
        title: experience.name,
        description: experience.description,
        images: [experience.flyer_key],
        creator: experience.business.name || "Event",
      },

      // Additional metadata
      keywords: [
        experience.name,
        experience.venue_name,
        experience.place_name,
        experience.business.name || "Event",
        experience.category || "Event",
        "event",
        "experience",
      ],

      authors: [{ name: experience.business.name || "Event Organizer" }],

      // Structured data for Google
      other: {
        "event:start_time": experience.start_time,
        "event:end_time": experience.end_time,
        "event:location": experience.address,
      },
    };
  } catch (error) {
    // Fallback metadata if fetch fails
    return {
      title: "Event Not Found",
      description: "The requested event could not be found.",
    };
  }
}

// Create a new component: components/StructuredData.tsx
export const runtime = "edge";
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const experience: IEvent = await getExperience(id);

  if (experience.status != "published") {
    return (
      <div>
        <Navbar />
        <div className="h-16 lg:h-20" />
        <div className="flex h-[500px] w-full items-center justify-center">
          Event not found
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <EventStructuredData experience={experience} />
      <Navbar />
      <div className="h-16 lg:h-20" />
      <div className="h-[500px] w-full overflow-hidden">
        <Image
          src={experience.flyer_key}
          alt={experience.name}
          width={1000}
          height={500}
          className="h-full w-full object-cover"
          priority // Load image with high priority for LCP
        />
      </div>
      <div className="mx-auto min-h-[80svh] w-full px-4 lg:px-10 2xl:max-w-5xl">
        <ExperiencePage experience={experience} />
      </div>
      <Footer />
    </div>
  );
}
