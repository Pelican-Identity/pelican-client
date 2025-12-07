import {
  TicketIcon,
  ComputerDesktopIcon,
  ShoppingBagIcon,
  BanknotesIcon,
  ShoppingCartIcon,
  AcademicCapIcon,
  MapPinIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  ScaleIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";
import { BabyIcon, CrossIcon, DoorClosedLocked, Luggage } from "lucide-react";

import Link from "next/link";
import React from "react";

const menuItems = [
  {
    href: "#",
    label: "Digital World",
    items: [
      {
        href: "#",
        label: "App & Website Login",

        icon: <ComputerDesktopIcon className="h-4 w-4 text-gray-600" />,
      },
      {
        href: "#",
        label: "E-commerce Checkout",

        icon: <ShoppingBagIcon className="h-4 w-4 text-gray-600" />,
      },
      {
        href: "#",
        label: "Fintech Onboarding",

        icon: <BanknotesIcon className="h-4 w-4 text-gray-600" />,
      },
      {
        href: "#",
        label: "Marketplaces",

        icon: <ShoppingCartIcon className="h-4 w-4 text-gray-600" />,
      },
      {
        href: "#",
        label: "Education Platforms",

        icon: <AcademicCapIcon className="h-4 w-4 text-gray-600" />,
      },
      {
        href: "#",
        label: "Healthcare Portals",
        icon: <CrossIcon className="h-4 w-4 font-bold text-gray-600" />,
      },
    ],
  },
  {
    href: "#",
    label: "Physical World",
    items: [
      {
        href: "#",
        label: "Gated Access",

        icon: (
          <DoorClosedLocked
            className="h-4 w-4 text-gray-600"
            strokeWidth={1.5}
          />
        ),
      },
      {
        href: "#",
        label: "Event Pass & Check-In",

        icon: <TicketIcon className="h-4 w-4 text-gray-600" />,
      },
      {
        href: "#",
        label: "Venue & Community Access",

        icon: <MapPinIcon className="h-4 w-4 text-gray-600" />,
      },
      {
        href: "#",
        label: "Access Control Systems",

        icon: <ShieldCheckIcon className="h-4 w-4 text-gray-600" />,
      },
      {
        href: "#",
        label: "Age-Restricted Access",

        icon: <BabyIcon className="h-4 w-4 text-gray-600" strokeWidth={1.5} />,
      },
    ],
  },
  {
    href: "#",
    label: "High-Trust & Regulated",
    items: [
      {
        href: "#",
        label: "Financial Services",

        icon: <CreditCardIcon className="h-4 w-4 text-gray-600" />,
      },
      {
        href: "#",
        label: "Government & Public Services",

        icon: <ScaleIcon className="h-4 w-4 text-gray-600" />,
      },
      {
        href: "#",
        label: "Hiring & Background Checks",
        icon: <BriefcaseIcon className="h-4 w-4 text-gray-600" />,
      },
      {
        href: "#",
        label: "Travel & Mobility",
        icon: <Luggage className="h-4 w-4 text-gray-600" strokeWidth={1.5} />,
      },
    ],
  },
];

const UseCaseMenu = () => {
  return (
    <div className="w-full">
      <div className="w-full grid-cols-3 md:grid">
        {menuItems.map((menu) => (
          <Link
            key={menu.label}
            href={menu.href}
            className="rounded-2xl p-4 transition-all duration-300 lg:hover:bg-gray-100"
          >
            <div className="space-y-2">
              <div className="space-y-4">
                <div className="decoration-primary font-semibold underline underline-offset-8">
                  {menu.label}
                </div>
                <div className="space-y-4 text-xs">
                  {menu.items.map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                      <div className="flex items-center justify-center rounded-lg bg-gray-50 p-2">
                        {item.icon}
                      </div>
                      <div className="font-semibold">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UseCaseMenu;
