"use client";

import * as React from "react";
import { ChevronRight, MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

const ITEMS = [
  {
    label: "Platform",
    href: "#products",
    dropdownItems: [
      {
        title: "Authentication",
        href: "/#instant-authentication",
        description:
          "Passwordless authentication in under 5 seconds — no OTPs, no magic links, no friction.",
      },
      {
        title: "Identity Claims (Email & Phone Verification)",
        href: "/#verified-contact-info",
        description:
          "Verified emails and phone numbers automatically, without OTP setup or confirmation links.",
      },
      {
        title: "KYC & ID Verification",
        href: "/#kyc-verification",
        description:
          "Instant KYC with face match, liveness detection, and ID document verification.",
      },
      {
        title: "KYC & ID Verification",
        href: "/#kyc-verification",
        description:
          "Instant KYC with face match, liveness detection, and ID document verification.",
      },
    ],
  },
  { label: "Use Cases", href: "/#businesses" },
  { label: "Developer", href: "/developer" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Compliance", href: "/#compliance" },
  { label: "FAQ", href: "/faq" },
];

export function SideManu() {
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
  const pathname = usePathname();

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">
          <MenuIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto h-screen w-full max-w-4xl overflow-auto px-4">
          <div>
            <Link href="/" className="mb-10 block shrink-0 items-center gap-2">
              <Image
                src="/logos/pelican-logos-03.png"
                alt="logo"
                width={164}
                height={72}
                className="dark:invert"
              />
            </Link>
            <nav className="divide-border flex flex-1 flex-col divide-y">
              {ITEMS.map((link) =>
                link.dropdownItems ? (
                  <div key={link.label} className="py-4 first:pt-0 last:pb-0">
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === link.label ? null : link.label,
                        )
                      }
                      className="flex w-full items-center justify-between text-2xl font-light hover:underline"
                    >
                      {link.label}
                      <ChevronRight
                        className={cn(
                          "size-4 transition-transform duration-200",
                          openDropdown === link.label ? "rotate-90" : "",
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300",
                        openDropdown === link.label
                          ? "mt-4 max-h-[1000px] opacity-100"
                          : "max-h-0 opacity-0",
                      )}
                    >
                      <div className="bg-muted/50 space-y-3 rounded-lg p-4">
                        {link.dropdownItems.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="group hover:bg-accent block rounded-md p-2 transition-colors"
                            onClick={() => {
                              setOpenDropdown(null);
                            }}
                          >
                            <div className="transition-transform duration-200 group-hover:translate-x-1">
                              <div className="font-medium">{item.title}</div>

                              <p className="text-muted-foreground mt-1 text-sm">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "py-4 text-2xl font-light transition-colors first:pt-0 last:pb-0 hover:underline",
                      pathname === link.href && "text-muted-foreground",
                    )}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </nav>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
