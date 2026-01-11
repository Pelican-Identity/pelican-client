import { formatLongDayTime } from "@/lib/utils";
import { IEvent } from "@/types/types";

import { MapPinIcon, CalendarIcon } from "@heroicons/react/24/solid";

import React from "react";
import RegisterForExperience from "./RegisterForExperience";

const ExperiencePage = ({ experience }: { experience: IEvent }) => {
  return (
    <div className="my-10 gap-4 md:grid md:grid-cols-2 lg:gap-8">
      <div>
        <div className="mx-2 max-w-[300px] space-y-6 md:max-w-[400px]">
          <p className="text-3xl font-bold lg:text-5xl">{experience.name}</p>
          <div className="flex gap-1">
            <MapPinIcon className="text-primary h-6 w-6" />
            <div className="flex flex-col space-y-1">
              <p className="text-lg font-semibold">{experience.venue_name}</p>
              <p className="text-sm opacity-70">{experience.address}</p>
            </div>
          </div>
        </div>
        <div className="m-2 space-y-4 border-t border-gray-100 py-4 dark:border-gray-800">
          <div className="bg-primary mb-4 flex w-fit items-center gap-2 rounded-full px-2 py-3">
            <CalendarIcon className="h-4 w-4 opacity-60" />

            <p className="text-xs font-bold">
              {formatLongDayTime(experience.start_time)} -{" "}
              {formatLongDayTime(experience.end_time)}
            </p>
          </div>

          <p className="text-sm">{experience.description}</p>
        </div>
      </div>
      <RegisterForExperience experience={experience} />
    </div>
  );
};

export default ExperiencePage;
