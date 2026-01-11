export interface IRegistrationFields {
  collect_email: boolean;
  collect_phone: boolean;
  collect_first_name: boolean;
  collect_last_name: boolean;
}

export interface IAgeRestriction {
  enabled: boolean;
  minimum_age: number;
}
export type RegistrationType = "basic" | "hybrid" | "pelican_verified";

export interface IRegistrationPolicy {
  type: RegistrationType;
  fields: IRegistrationFields;
  age_restriction: IAgeRestriction;
}

export interface IEvent {
  id: string;

  name: string;
  description: string;

  event_url: string;
  venue_name: string;
  website_url: string;

  address: string;
  latitude: number;
  longitude: number;
  place_id: string;
  place_name: string;
  category: string;

  start_time: string; // ISO 8601
  end_time: string; // ISO 8601

  project_id: string;
  business_id: string;
  status: "draft" | "published";
  flyer_key: string;
  contact: string;

  /**
   * Parsed JSONB from backend
   */
  registration_policy: IRegistrationPolicy;

  created_at: string; // ISO 8601
  updated_at: string; // ISO 8601

  project: { api_key: string };
  business: {
    id: string;
    name: string;
    logo_url?: string;
    public_key: string;
  };
}

export const EVENT_CATEGORIES = [
  "networking",
  "workshop",
  "seminar",
  "conference",
  "meetup",
  "community gathering",
  "social event",
  "happy hour",
  "product launch",
  "panel discussion",
  "hackathon",
  "career fair",
  "open house",
  "expo",
  "trade show",
  "art exhibition",
  "gallery opening",
  "film screening",
  "book club",
  "fundraiser",
  "charity event",
  "volunteer event",
  "sports & recreation",
  "fitness class",
  "yoga session",
  "running club",
  "outdoor adventure",
  "food & drink",
  "wine tasting",
  "cooking class",
  "food festival",
  "brunch",
  "dinner party",
  "cultural celebration",
  "religious gathering",
  "educational session",
  "study group",
  "lecture",
  "wellness event",
  "meditation session",
  "health fair",
  "gaming event",
  "tournament",
  "trivia night",
  "karaoke night",
  "open mic",
  "poetry reading",
  "music jam session",
  "dance class",
  "theater performance",
  "fashion show",
  "craft fair",
  "farmers market",
  "garage sale",
  "swap meet",
  "orientation",
  "town hall",
  "protest/rally",
  "awareness campaign",
  "block party",
  "neighborhood event",
  "family event",
  "kids activity",
  "senior event",
  "pet-friendly event",
  "beach cleanup",
  "tree planting",
  "other",
] as const;

export type EventCategory = (typeof EVENT_CATEGORIES)[number];

// For use in forms/dropdowns
export const EVENT_CATEGORY_OPTIONS = EVENT_CATEGORIES.map((category) => ({
  value: category,
  label: category,
}));

export interface PlaceSuggestions {
  placePrediction: PlacePrediction;
}

interface PlacePrediction {
  place: string;
  placeId: string;
  text: TextObject;
  structuredFormat: StructuredFormat;
  types: string[];
}

interface TextObject {
  text: string;
  matches: Match[];
}

interface StructuredFormat {
  mainText: TextObject;
  secondaryText: TextObject;
}

interface Match {
  endOffset: number;
}
