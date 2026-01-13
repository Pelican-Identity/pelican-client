"use client";
import { debounce } from "@/lib/utils";
import React, { useState, useMemo } from "react";
import { Input } from "./Input";
import useOnclickOutside from "react-cool-onclickoutside";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { PlaceSuggestions } from "@/types/types";
type Location = {
  label?: string;
  placeholder?: string;
  setLocation: (value?: {
    latitude: number;
    longitude: number;
    place_id: string;
    formattedAddress: string;
    main_text: string;
    secondary_text: string;
  }) => void;
  location?: string;
  disabled?: boolean;
  required?: boolean;

  inputContainerClassName?: string;
  apiUrl?: string;
};

const SearchLocation: React.FC<Location> = ({
  setLocation,
  label,
  placeholder,
  location,
  disabled = false,
  inputContainerClassName,
  required = false,
  apiUrl,
}: Location) => {
  const [value, setValue] = useState(location ?? "");
  const [suggestions, setSuggestions] = useState<PlaceSuggestions[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  const ref = useOnclickOutside(() => {
    setShowSuggestions(false);
  });

  const fetchSuggestions = async (input: string) => {
    if (!input.trim()) {
      setSuggestions([]);
      return;
    }
    if (!apiUrl) return console.error("API URL is required");

    setLoading(true);

    try {
      const res = await fetch(
        `${apiUrl}/v1/experiences/place-autocomplete?input=${input}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const data = await res.json();
      setSuggestions(data.suggestions || []);
      setShowSuggestions(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const debouncedFetchSuggestions = useMemo(
    () => debounce(fetchSuggestions, 500),
    [],
  );

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    setValue(newValue);
    if (newValue.length <= 3) return;
    debouncedFetchSuggestions(newValue);
  };

  const fetchPlaceDetail = async (placeId: string) => {
    if (!apiUrl) return console.error("API URL is required");

    setLoading(true);
    try {
      const res = await fetch(
        `${apiUrl}/v1/experiences/place-details?place_id=${placeId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          // Optional: Add caching strategy
          next: { revalidate: 3600 }, // Revalidate every hour
        },
      );
      const data = await res.json();
      setLocation({
        latitude: data?.location?.latitude,
        longitude: data?.location?.longitude,
        place_id: data?.id,
        formattedAddress: data?.formattedAddress,
        main_text: data?.name,
        secondary_text: data?.formattedAddress,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (sug: PlaceSuggestions) => () => {
    const { placePrediction } = sug;
    const {
      placeId,
      structuredFormat: { mainText, secondaryText },
    } = placePrediction;

    setValue(mainText.text); // or combine with secondaryText if desired
    setShowSuggestions(false);
    setSuggestions([]);

    fetchPlaceDetail(placeId);

    setLocation({
      main_text: mainText.text,
      secondary_text: secondaryText.text,
      latitude: 0,
      longitude: 0,
      place_id: placeId,
      formattedAddress: `${mainText.text}, ${secondaryText.text}`,
    });
  };

  const renderSuggestions = () =>
    suggestions.map((sug) => {
      const { placePrediction } = sug;
      const {
        placeId,
        structuredFormat: { mainText, secondaryText },
      } = placePrediction;

      return (
        <li
          key={placeId}
          onClick={handleSelect(sug)}
          className="flex cursor-pointer rounded-lg px-[8px] py-[12px] hover:bg-[#F4F4FA] dark:hover:bg-[#0d0d0d]"
        >
          <div className="mr-2">
            <MapPinIcon className="h-5 w-5" />
          </div>
          <div className="flex flex-col text-sm">
            <strong>{mainText.text}</strong> <small>{secondaryText.text}</small>
          </div>
        </li>
      );
    });

  return (
    <div ref={ref} style={{ position: "relative", maxWidth: "100%" }}>
      <Input
        disabled={disabled}
        label={label}
        value={value}
        onChange={handleInput}
        placeholder={placeholder}
        inputContainerClassName={inputContainerClassName}
        required={required}
      />

      {loading ? (
        <ul className="absolute left-0 z-10 mt-2 flex max-h-[200px] w-full list-none items-center justify-center overflow-y-auto rounded-3xl bg-white p-8 shadow-[0_0_1.5rem_0_rgba(0,0,0,.1)] dark:border dark:bg-black">
          <p>Getting suggestions...</p>
        </ul>
      ) : (
        <>
          {showSuggestions && suggestions.length > 0 && (
            <ul className="absolute left-0 z-10 mt-2 max-h-[200px] w-full list-none overflow-y-auto rounded-3xl bg-white p-3 shadow-[0_0_1.5rem_0_rgba(0,0,0,.1)]">
              {renderSuggestions()}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default SearchLocation;
