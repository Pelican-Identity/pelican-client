"use client";
import { Input } from "@/components/inputs/Input";
import { Select } from "@/components/inputs/Select";
import { AppleIcon, PlayStoreIcon } from "@/components/StoreIcons";
import { cn, countryCodes } from "@/lib/utils";
import { IEvent } from "@/types/types";
import { AuthType, IdentityResult, PelicanAuth } from "@pelican-identity/react";
import parsePhoneNumberFromString from "libphonenumber-js";
import { InfoIcon } from "lucide-react";
import React, { useState } from "react";
const shouldCollect = (value: boolean) => value === true;

export const isAgeResticted = (
  dob: Date | string | undefined,
  ageRestriction: number,
) => {
  if (!dob) return false;
  const today = new Date();
  const birthDate = new Date(dob);
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age < ageRestriction;
};

const RegisterForExperience = ({
  experience,
  apiUrl,
}: {
  experience: IEvent;
  apiUrl?: string;
}) => {
  const { registration_policy } = experience;
  const { fields, type } = registration_policy;

  const pelicanRequired =
    type === "pelican_verified" ||
    experience.registration_policy.age_restriction.enabled;

  const [formData, setFormData] = React.useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    phoneCode: "+1",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const validateForm = (payload: {
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: string;
    phoneCode?: string;
  }): { success: boolean; error: string | null } => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setError(null);
    if (!payload?.email || !emailRegex.test(payload.email)) {
      return { success: false, error: "Please enter a valid email" };
    }

    if (experience.registration_policy.fields.collect_phone && !payload.phone) {
      return { success: false, error: "Please enter a valid phone number" };
    }
    if (experience.registration_policy.fields.collect_phone && payload.phone) {
      const phoneNum = parsePhoneNumberFromString(
        `${payload.phoneCode}${payload.phone}`,
      );

      if (!phoneNum || !phoneNum.isValid()) {
        return { success: false, error: "Please enter a valid phone number" };
      }
    }

    if (
      experience.registration_policy.fields.collect_first_name &&
      !payload.first_name
    ) {
      return { success: false, error: "Please enter a valid first name" };
    }

    if (
      experience.registration_policy.fields.collect_last_name &&
      !payload.last_name
    ) {
      return { success: false, error: "Please enter a valid last name" };
    }

    return { success: true, error: null };
  };

  const [authType, setAuthType] = useState<AuthType>(
    experience?.registration_policy?.age_restriction?.enabled
      ? "id-verification"
      : "signup",
  );
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { success, error } = validateForm(formData);
    if (!success) {
      setError(error);
      return;
    }

    handleRegistration({
      user_id: "",
      email: formData.email,
      first_name: formData.first_name,
      last_name: formData.last_name,
      phone: formData.phone,
      type: "basic",
      experience_id: experience.id,
    });
  };

  const handleRegistration = async (payload: {
    user_id?: string;
    email: string;
    first_name?: string;
    last_name?: string;
    phone?: string;
    type: "basic" | "pelican_verified" | "hybrid";
    experience_id: string;
  }) => {
    if (!apiUrl) {
      setError("API URL not found");
      return;
    }
    if (!experience.id) {
      setError("Experience ID not found");
      return;
    }
    if (loading) {
      return;
    }

    setError(null);
    setSuccessMsg(null);
    setLoading(true);
    const res = await fetch(
      `${apiUrl}/v1/experiences/${experience.id}/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      },
    );

    if (!res.ok) {
      setLoading(false);
      const error = await res.text();
      setError(error || "Failed to register for experience");
      return;
    }

    setSuccessMsg("Successfully registered for experience");
    setLoading(false);
  };

  const [ageVerified, setAgeVerified] = useState(false);
  const handleAgeVerification = async (e: IdentityResult) => {
    if (!e.user_id) {
      setError("Something went wrong");
      return;
    }

    const isAgeRestricted = isAgeResticted(
      e.id_verification.date_of_birth,
      experience.registration_policy?.age_restriction.minimum_age,
    );
    if (isAgeRestricted) {
      setError(
        `You must be at least ${experience.registration_policy?.age_restriction.minimum_age} years old to register for this event.`,
      );
      return;
    }

    setFormData((prev) => ({
      ...prev,
      first_name: e.id_verification?.first_name || prev.first_name,
      last_name: e.id_verification?.last_name || prev.last_name,
    }));

    setAgeVerified(true);
    setAuthType("signup");
  };

  const handlePelicanRegistration = async (e: IdentityResult) => {
    if (!e.user_id) {
      setError("Something went wrong");
      return;
    }

    const { success, error } = validateForm({
      email: e?.user_data?.email?.value,
      first_name: e?.user_data?.first_name,
      last_name: e?.user_data?.last_name,
      phone: e?.user_data?.phone?.number,
      phoneCode: e?.user_data?.phone?.callingCode,
    });

    if (!success) {
      setError(error);
      return;
    }

    handleRegistration({
      user_id: e.user_id,
      email: e?.user_data?.email?.value || "",
      first_name: e?.user_data?.first_name || "",
      last_name: e?.user_data?.last_name || "",
      phone: `${e?.user_data?.phone?.callingCode}${e?.user_data?.phone?.number.replace(/\s+/g, "")}`,
      type: "pelican_verified",
      experience_id: experience.id,
    });
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
          {successMsg && (
            <p className="w-fit rounded-xl bg-green-50 p-2 px-6 text-center text-sm font-semibold text-green-500 md:px-6">
              {successMsg}
            </p>
          )}

          {error && (
            <p className="w-fit rounded-xl bg-red-50 p-2 text-center text-sm font-semibold text-red-500 md:px-6">
              {error}
            </p>
          )}
        </div>
        {experience.registration_policy.age_restriction.enabled &&
          !ageVerified && (
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="flex flex-col items-center justify-center space-y-2 md:max-w-[70%]">
                <div className="flex items-center gap-2 rounded-2xl bg-amber-100 px-2 py-1.5">
                  <InfoIcon className="h-4 w-4 text-amber-500" />
                  <p className="text-center text-xs font-bold">
                    This event is age restricted (
                    {experience.registration_policy.age_restriction.minimum_age}
                    +)
                  </p>
                </div>
              </div>
            </div>
          )}
        {ageVerified &&
          experience.registration_policy.age_restriction.enabled && (
            <div className="flex w-full flex-col items-center justify-center space-y-4">
              <div className="flex max-w-[50%] flex-col items-center justify-center rounded-3xl bg-blue-50 p-3 text-center text-sm md:px-6">
                <p className="text-sm font-bold text-blue-500 uppercase">
                  Age verified
                </p>
                <p className="text-xs font-medium">
                  You’re eligible for this event. Click the register button
                  again to continue.
                </p>
              </div>
            </div>
          )}

        {(pelicanRequired || type === "hybrid") && (
          <div className="flex w-full flex-col items-center justify-center space-y-4">
            <PelicanAuth
              key={authType}
              projectId={experience.project.api_key}
              publicKey={experience.business.public_key}
              authType={authType}
              onSuccess={
                authType === "id-verification"
                  ? handleAgeVerification
                  : handlePelicanRegistration
              }
              onError={(e) => setError(e?.message || "Something went wrong")}
              buttonComponent={
                <div className="flex w-full items-center justify-center gap-2 rounded-3xl bg-black px-3 py-2 font-semibold text-white">
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
                  <p>
                    {authType === "id-verification"
                      ? "Verify age to continue"
                      : "Register with Pelican"}
                  </p>
                </div>
              }
            />
          </div>
        )}
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
                  placeholder={
                    experience.registration_policy.age_restriction.enabled
                      ? "Enter a valid email to continue"
                      : "Email"
                  }
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
              <div className="grid-cols-7 gap-2 space-y-4 md:grid md:space-y-0">
                <div className="col-span-2">
                  <Select
                    required
                    searchable
                    label="Country"
                    placeholder={"+1"}
                    value={formData.phoneCode || ""}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phoneCode: e.target.value,
                      })
                    }
                    options={countryCodes.map((c) => ({
                      label: c.name,
                      value: c.phoneCode,
                    }))}
                    inputContainerClassName="py-0 h-14"
                  />
                </div>
                <div className="col-span-5">
                  <Input
                    required
                    label="Phone number"
                    placeholder="Enter phone"
                    name="phone"
                    type="text"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      })
                    }
                    inputContainerClassName="py-1 h-14"
                  />
                </div>
              </div>
            )}

            {/* Primary Registration CTA */}
            <button
              type="submit"
              className={cn(
                "my-2 h-12 w-full rounded-3xl bg-black px-4 py-3 font-medium text-white",
                loading && "cursor-not-allowed opacity-50",
              )}
            >
              {loading ? "Registering..." : "Register"}
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
                className="flex h-10 items-center gap-2 rounded-3xl bg-black px-4 py-2 text-white"
              >
                <AppleIcon />
                <p className="text-xs font-medium">App Store</p>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.HeraculesDesignTechLtd.pelican"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 items-center gap-2 rounded-3xl bg-black px-4 py-2 text-white"
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
