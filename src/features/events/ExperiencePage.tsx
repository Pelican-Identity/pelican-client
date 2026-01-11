import { formatLongDayTime } from "@/lib/utils";
import { IEvent } from "@/types/types";

import { CalendarDaysIcon, MapPinIcon } from "@heroicons/react/24/solid";

import React from "react";
import RegisterForExperience from "./RegisterForExperience";

const ExperiencePage = ({ experience }: { experience: IEvent }) => {
  return (
    <div className="my-10 gap-4 md:grid md:grid-cols-2 lg:gap-8">
      <div>
        <div className="max-w-[300px] md:max-w-[400px]">
          <p className="mb-3 text-3xl font-bold lg:text-5xl">
            {experience.name}
          </p>
          <div className="flex gap-1">
            <div className="bg-primary flex h-fit items-center gap-2 rounded-full p-2">
              <MapPinIcon className="h-4 w-4 text-black" />
            </div>
            <div className="flex flex-col space-y-1">
              <p className="text-xl font-semibold">{experience.venue_name}</p>
              <p className="text-sm opacity-80">{experience.address}</p>
            </div>
          </div>
          <div className="space-y-2 py-2 dark:border-gray-800">
            <div className="bg-primary/10 border-primary mb-4 w-fit items-center gap-2 rounded-2xl border text-xs">
              <div className="border-primary flex items-center gap-2 border-b p-3 px-4 font-medium">
                <CalendarDaysIcon className="h-4 w-4" />
                <span className="font-bold">Start:</span>{" "}
                {formatLongDayTime(experience.start_time)}
              </div>
              <div className="flex items-center gap-2 p-3 px-4 font-medium">
                <CalendarDaysIcon className="h-4 w-4" />
                <span className="font-bold">End:</span>{" "}
                {formatLongDayTime(experience.end_time)}
              </div>
            </div>
          </div>
        </div>
        <p className="text-sm">{experience.description}</p>
      </div>
      <RegisterForExperience experience={experience} />
    </div>
  );
};

export default ExperiencePage;
