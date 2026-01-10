import {
  DevicePhoneMobileIcon,
  IdentificationIcon,
  LockOpenIcon,
  UsersIcon,
  TicketIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

//  • Authentication
//  • Identity Claims
//  • KYC & ID Verification
//  Access Control

const menuItems = [
  {
    href: "/authentication",
    label: "Authentication",
    description:
      "Fast, lightweight and secure authentication for new and returning users.",
    icon: <UsersIcon className="h-4 w-4 text-gray-600" />,
  },
  {
    href: "/access-control",
    label: "Access Control",
    description:
      "Define and enforce on-premise access control for employees, guests, and contractors.",
    icon: <LockOpenIcon className="h-4 w-4 text-gray-600" />,
  },
  {
    href: "/identity-claims",
    label: "Identity Claims",
    description:
      "Collect verified user attributes without building OTP flows, magic links, password resets, or SMS verification.",
    icon: <DevicePhoneMobileIcon className="h-4 w-4 text-gray-600" />,
  },
  {
    href: "/kyc-id-verification",
    label: "KYC & ID Verification",
    description:
      "Offload the complexity of KYC & ID verification to Pelican, stay compliant with necessary regulations.",
    icon: <IdentificationIcon className="h-4 w-4 text-gray-600" />,
  },

  {
    href: "/events",
    label: "Events",
    description:
      "Manage event registrations and attendees, without complex forms or workflows.",
    icon: <TicketIcon className="h-4 w-4 text-gray-600" />,
  },
];

const PlatformMenu = () => {
  return (
    <div className="w-f">
      <div className="w-full grid-cols-5 lg:grid">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="rounded-2xl px-4 py-2 transition-all duration-300 lg:hover:bg-gray-100"
          >
            <div className="space-y-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50">
                {item.icon}
              </div>
              <div className="gap-2">
                <div className="text-sm font-semibold">{item.label}</div>
                <div className="text-muted-foreground text-xs">
                  {item.description}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PlatformMenu;
