"use client";
import React, { useState, useEffect, useRef } from "react";
import { EVENT_CATEGORY_OPTIONS, EventCategory, IEvent } from "@/types/types";
import SearchLocation from "@/components/inputs/SearchLocation";

import { MapPin, Calendar, Search, Loader2, Sparkles } from "lucide-react";
import { cn, getEventStatus } from "@/lib/utils";
import Link from "next/link";
import { Select } from "@/components/inputs/Select";

const Experiences = ({ apiUrl }: { apiUrl?: string }) => {
  const [formState, setFormState] = useState<{
    latitude?: string;
    longitude?: string;
    category?: EventCategory | "";
    time: "all" | "upcoming" | "past";
  }>({ time: "all", category: "" });

  const [experiences, setExperiences] = useState<IEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  // Track if we have initialized the location to prevent double-fetching
  const isInitialized = useRef(false);

  // Reusable fetch function
  const fetchExperiences = async (overriddenState?: typeof formState) => {
    if (!apiUrl) return;
    setLoading(true);
    setHasSearched(true);

    // Use overriddenState for the very first fetch to avoid stale closure issues
    const stateToUse = overriddenState || formState;
    const { latitude, longitude, category, time } = stateToUse;

    const searchParams = new URLSearchParams({ time });
    if (latitude) searchParams.append("latitude", latitude);
    if (longitude) searchParams.append("longitude", longitude);
    if (category) searchParams.append("category", category);

    try {
      const res = await fetch(
        `${apiUrl}/v1/experiences/discover?${searchParams.toString()}`,
      );
      const data = await res.json();
      setExperiences(data.experiences || []);
    } catch (error) {
      console.error("Discovery failed:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isInitialized.current) return;

    const initLocationAndFetch = async () => {
      const cachedLat = localStorage.getItem("user_lat");
      const cachedLng = localStorage.getItem("user_lng");

      let initialState = { ...formState };

      if (cachedLat && cachedLng) {
        initialState = {
          ...initialState,
          latitude: cachedLat,
          longitude: cachedLng,
        };
        setFormState(initialState);
        fetchExperiences(initialState); // Fetch immediately with cache
        isInitialized.current = true;
      } else if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const latStr = latitude.toString();
            const lngStr = longitude.toString();

            localStorage.setItem("user_lat", latStr);
            localStorage.setItem("user_lng", lngStr);

            const newState = {
              ...initialState,
              latitude: latStr,
              longitude: lngStr,
            };
            setFormState(newState);
            fetchExperiences(newState); // Fetch only after GPS returns
            isInitialized.current = true;
          },
          () => {
            // If denied/error, fetch anyway with default state
            fetchExperiences(initialState);
            isInitialized.current = true;
          },
          { timeout: 5000 },
        );
      } else {
        fetchExperiences(initialState);
        isInitialized.current = true;
      }
    };

    initLocationAndFetch();
  }, [apiUrl]);
  return (
    <div className="min-h-screen bg-white pb-20">
      {/* --- PREMIUM SEARCH HEADER --- */}
      <div className="border-b border-gray-50 bg-white pb-8 lg:pt-10">
        <div className="mx-auto max-w-7xl px-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              fetchExperiences(formState);
            }}
            className="grid grid-cols-1 rounded-2xl border border-gray-50 bg-white p-2 shadow-[0_0_1.5rem_0_rgba(0,0,0,.1)] shadow-gray-100 md:grid-cols-12 md:items-center lg:gap-4 lg:rounded-4xl"
          >
            <div className="border-gray-100 px-4 py-2 md:col-span-5 md:border-r">
              <label className="mb-1 ml-4 block text-[10px] font-bold text-gray-400 uppercase">
                Where
              </label>
              <SearchLocation
                apiUrl={apiUrl}
                setLocation={(loc) =>
                  setFormState((prev) => ({
                    ...prev,
                    latitude: loc?.latitude?.toString(),
                    longitude: loc?.longitude?.toString(),
                  }))
                }
                placeholder="Anywhere your heart takes you"
                inputContainerClassName="h-10 rounded-full"
              />
            </div>

            <div className="border-gray-100 px-4 py-2 md:col-span-3 md:border-r">
              <label className="mb-1 ml-4 block text-[10px] font-bold text-gray-400 uppercase">
                Category
              </label>
              <Select
                searchable
                options={EVENT_CATEGORY_OPTIONS.map((opt) => ({
                  value: opt.value,
                  label: opt.label,
                }))}
                value={formState.category}
                onChange={(e) =>
                  setFormState((p) => ({
                    ...p,
                    category: e.target.value as EventCategory,
                  }))
                }
                inputContainerClassName="h-10     rounded-full"
              />
            </div>

            <div className="px-4 py-2 md:col-span-2">
              <label className="mb-1 block text-[10px] font-bold text-gray-400 uppercase">
                When
              </label>

              <Select
                options={[
                  { value: "upcoming", label: "Upcoming" },
                  { value: "all", label: "Anytime" },
                  { value: "past", label: "Past" },
                ]}
                value={formState.time}
                onChange={(e) =>
                  setFormState((p) => ({ ...p, time: e.target.value as any }))
                }
                inputContainerClassName="h-10 rounded-full"
              />
            </div>

            <div className="mr-2 flex flex-col items-end space-y-1 md:col-span-2">
              <button
                type="button"
                onClick={() => {
                  setFormState((prev) => {
                    fetchExperiences({ ...prev, time: "all", category: "" });
                    return {
                      ...prev,
                      time: "all",
                      category: "",
                    };
                  });
                }}
                className="mr-4 cursor-pointer text-xs font-bold text-blue-400 hover:underline"
              >
                Clear filters
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-bold text-white transition-all hover:scale-[1.02] hover:bg-black/70 active:scale-[0.98] disabled:opacity-70"
              >
                {loading ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <Search size={20} />
                )}
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* --- RESULTS AREA --- */}
      <main className="mx-auto max-w-7xl bg-white px-6 py-12">
        {loading ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : experiences.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {experiences.map((event) => (
              <ExperienceCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <EmptyState hasSearched={hasSearched} />
        )}
      </main>
    </div>
  );
};

/* --- SUB-COMPONENTS --- */

const ExperienceCard = ({ event }: { event: IEvent }) => {
  const start = new Date(event.start_time);

  const { label, styles } = getEventStatus(event.start_time, event.end_time);

  return (
    <Link
      href={`/e/${event.id}`}
      className="group cursor-pointer rounded-[2.5rem] border border-gray-50 bg-white p-4 transition-all hover:shadow-[0_0_1.5rem_0_rgba(0,0,0,.1)] hover:shadow-gray-100"
    >
      <div className="relative mb-6 aspect-3/1 overflow-hidden rounded-[2rem] bg-gray-100">
        <img
          src={event.flyer_key}
          alt={event.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 rounded-full border border-white/30 bg-white/20 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
          {event.category}
        </div>
      </div>

      <div className="px-2 pb-2">
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3 className="line-clamp-1 text-xl font-bold text-gray-900">
            {event.name}
          </h3>

          {/* REPLACED STATUS BADGE WITH DYNAMIC TIME BADGE */}
          <div
            className={cn(
              `rounded-full px-3 py-1 text-[8px] font-black tracking-tighter uppercase`,
              styles,
            )}
          >
            {label}
          </div>
        </div>

        <div className="flex flex-col gap-2 text-sm font-medium text-gray-500">
          <div className="flex items-center gap-2">
            <MapPin size={16} strokeWidth={2.5} />
            <span className="truncate">
              {event.venue_name || event.address}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} strokeWidth={2.5} />
            <span>
              {start.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const SkeletonCard = () => (
  <div className="animate-pulse rounded-[2.5rem] bg-white p-4">
    <div className="mb-6 aspect-3/1 rounded-[2rem] bg-gray-200" />
    <div className="mb-4 h-6 w-2/3 rounded-lg bg-gray-200" />
    <div className="h-4 w-1/2 rounded-lg bg-gray-100" />
  </div>
);

const EmptyState = ({ hasSearched }: { hasSearched: boolean }) => (
  <div className="flex flex-col items-center justify-center py-20 text-center">
    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
      <Sparkles className="text-gray-400" size={32} />
    </div>
    <h3 className="text-xl font-bold text-gray-900">
      {hasSearched ? "No experiences found" : "Ready to explore?"}
    </h3>
    <p className="mt-2 max-w-xs text-gray-500">
      {hasSearched
        ? "We couldn't find anything matching your filters. Try widening your search."
        : "Use the search bar above to find the best experiences in your area."}
    </p>
  </div>
);

export default Experiences;
