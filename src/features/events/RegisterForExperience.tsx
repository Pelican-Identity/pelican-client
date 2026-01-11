"use client";
import { Input } from "@/components/inputs/Input";
import { AppleIcon, PlayStoreIcon } from "@/components/StoreIcons";
import { IEvent } from "@/types/types";
import { PelicanAuth } from "@pelican-identity/react";

import React from "react";
const shouldCollect = (value: boolean) => value === true;

const RegisterForExperience = ({ experience }: { experience: IEvent }) => {
  const { registration_policy } = experience;
  const { fields, type } = registration_policy;

  const pelicanRequired = type === "pelican_verified";

  const [formData, setFormData] = React.useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  if (new Date(experience.end_time) < new Date()) {
    return (
      <div className="space-y-6 rounded-3xl border border-gray-200 p-6">
        <h1 className="text-xl font-semibold">{experience.name} is over</h1>
        <p className="text-gray-600">
          The event has already ended. You can no longer register for it.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full 2xl:max-w-2xl">
      <div className="space-y-6 rounded-3xl border border-gray-200 p-6">
        <h1 className="text-xl font-semibold">
          Register for {experience.name}
        </h1>

        <div className="flex w-full flex-col items-center justify-center space-y-4">
          <PelicanAuth
            projectId={experience.project.api_key}
            publicKey={experience.business.public_key}
            authType="signup"
            onSuccess={(e) => console.log(e)}
            onError={(e) => console.log(e)}
            buttonComponent={
              <div className="flex w-full items-center justify-center gap-4 rounded-3xl bg-black px-3 py-2 font-semibold text-white">
                <div className="flex items-center gap-2 rounded-2xl bg-[#262626] p-2">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 588 640"
                    fill="none"
                    role="img"
                    aria-label="Pelican Logo"
                  >
                    <path
                      d="M357.79 383.899C357.99 372.409 367.47 358.149 379.03 352.079C391.03 345.819 400.26 350.269 400.13 362.279C399.94 373.899 390.26 388.479 378.7 394.479C367.14 400.479 357.6 395.839 357.79 383.899ZM486.16 316.459C487.06 315.809 488.55 314.069 488.55 313.459C488.74 307.009 488.67 300.689 488.67 293.909C470.15 305.979 452.21 317.719 434.27 329.469V350.379C436.01 349.219 437.5 348.249 438.98 347.279C454.66 336.999 470.41 326.779 486.16 316.459ZM482.54 400.359C470.529 418.676 454.87 434.318 436.54 446.309C420.21 457.209 404.54 463.019 389.94 462.699C374.94 462.309 364.84 455.339 358.94 441.919C364.62 437.009 369.72 432.489 374.82 428.039C377.02 431.039 378.76 434.169 381.21 436.429C391.02 445.659 405.15 445.009 422.21 437.139C424.21 436.139 426.14 435.079 428.14 433.979C436.34 429.459 440.53 424.229 442.6 414.979C444.28 407.299 445.31 399.869 446.66 392.259C448.387 382.382 451.533 372.806 456 363.829C461.23 353.309 468.59 345.369 478.08 341.629C486.53 338.269 491.95 340.629 494.66 347.049C500.81 361.889 495.64 380.279 482.54 400.359ZM478.87 362.999C478.35 361.509 476.73 359.999 475.32 360.419C473.91 360.839 471.64 363.899 470.41 365.969C469.016 368.283 467.953 370.781 467.25 373.389C464.67 384.619 462.25 395.779 459.76 406.949C460.192 406.935 460.623 406.892 461.05 406.819C467.51 399.399 473.05 391.519 476.73 382.749C479.9 375.119 480.54 368.539 478.87 362.999ZM587.54 222.999V416.419C587.537 438.587 581.704 460.364 570.627 479.566C559.55 498.767 543.618 514.719 524.43 525.819L357 622.489C337.794 633.588 316.003 639.432 293.82 639.432C271.637 639.432 249.846 633.588 230.64 622.489L63.12 525.819C43.9293 514.721 27.995 498.77 16.9161 479.568C5.83724 460.366 0.00339985 438.588 0 416.419L0 222.999C0.006907 200.834 5.84241 179.06 16.9211 159.861C27.9999 140.663 43.9322 124.716 63.12 113.619L230.59 16.9391C249.796 5.83984 271.587 -0.00390625 293.77 -0.00390625C315.953 -0.00390625 337.744 5.83984 356.95 16.9391L524.43 113.619C543.615 124.718 559.545 140.666 570.622 159.864C581.699 179.062 587.533 200.835 587.54 222.999ZM559.47 298.119C559.47 247.519 518.47 228.289 467.83 255.199L323.46 331.999C311.58 338.319 301.97 353.099 301.97 364.999V579.379C301.97 591.319 311.58 595.769 323.46 589.449L377.15 560.919C382.557 557.892 387.127 553.569 390.45 548.339C393.87 543.109 396 537.339 396 532.079C396 526.329 400.65 519.229 406.39 516.199L433.11 501.939C438.137 499.272 442.977 496.559 447.63 493.799L467.83 483.089C518.43 456.089 559.47 393.259 559.47 342.659V298.119Z"
                      fill="#D9EB1B"
                    />
                  </svg>
                </div>
                <p>Register with Pelican</p>
              </div>
            }
          />
        </div>

        {/* Registration Form */}

        {!pelicanRequired && (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-1/2 bg-gray-200" />
              <p className="px-2 text-lg text-gray-500">or</p>
              <div className="h-px w-1/2 bg-gray-200" />
            </div>
            {shouldCollect(fields.collect_email) && (
              <div>
                <Input
                  type="email"
                  name="email"
                  label="Email"
                  required
                  placeholder="Email"
                  inputContainerClassName="h-14"
                  onChange={handleChange}
                />
              </div>
            )}
            {shouldCollect(fields.collect_first_name) && (
              <div>
                <Input
                  type="text"
                  name="first_name"
                  label="First name"
                  required
                  placeholder="First name"
                  inputContainerClassName="h-14"
                  onChange={handleChange}
                />
              </div>
            )}

            {shouldCollect(fields.collect_last_name) && (
              <div>
                <Input
                  type="text"
                  name="last_name"
                  label="Last name"
                  required
                  placeholder="Last name"
                  inputContainerClassName="h-14"
                  onChange={handleChange}
                />
              </div>
            )}

            {shouldCollect(fields.collect_phone) && (
              <div>
                <Input
                  type="tel"
                  name="phone"
                  label="Phone number"
                  required
                  placeholder="Phone number"
                  onChange={handleChange}
                  inputContainerClassName="h-14"
                />
              </div>
            )}

            {/* Primary Registration CTA */}
            <button
              type="submit"
              className="h-16 w-full rounded-3xl bg-black px-4 py-3 font-medium text-white"
            >
              Register
            </button>
          </form>
        )}

        {/* Pelican Speed Nudge */}

        <div className="flex w-full flex-col items-center justify-center space-y-4">
          <div className="flex w-full flex-col items-center justify-center space-y-2 rounded-2xl border border-green-200 bg-green-50 p-4 text-center text-sm">
            <p className="text-md font-bold text-green-700">
              Check-in at events 10× faster with Pelican
            </p>
            <p className="text-xs text-gray-600">
              Skip long queues and manual check-ins at events when you register
              with Pelican.
            </p>

            <div className="flex items-center gap-2">
              <a
                href="https://apps.apple.com/us/app/pelican-vault/id6755097751"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-3xl bg-black px-4 py-2 text-white"
              >
                <AppleIcon />
                <p className="text-xs font-medium">App Store</p>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.HeraculesDesignTechLtd.pelican"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-3xl bg-black px-4 py-2 text-white"
              >
                <PlayStoreIcon />
                <p className="text-xs font-medium">Google Play</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForExperience;
