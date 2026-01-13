"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import PlatformMenu from "../navbar/platform-menu";
import UseCaseMenu from "../navbar/use-case-menu";
import { Bars3Icon } from "@heroicons/react/24/solid";

const ITEMS = [
  { label: "Developers", href: "/developer" },
  { label: "Business Pricing", href: "/business-pricing" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "mailto:support@pelicanidentity.com" },
];

export function SideMenu() {
  const pathname = usePathname();
  const [platOpen, setPlatOpen] = React.useState(false);
  const [useCaseOpen, setUseCaseOpen] = React.useState(false);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" className="hover:bg-white">
          <Bars3Icon className="size-6" />
        </Button>
      </DrawerTrigger>

      <DrawerTitle className="sr-only hidden">Menu</DrawerTitle>
      <DrawerContent>
        <div className="mx-auto h-screen w-full max-w-4xl overflow-auto px-4">
          <div>
            <Link
              href="/"
              className="mb-10 hidden shrink-0 items-center gap-2 md:block"
            >
              <Image
                src="https://res.cloudinary.com/de0jr8mcm/image/upload/v1765097838/pelican/pelican-logo_logo-black_dduhrr.png"
                alt="pelican-logo"
                width={164}
                height={72}
                className="md:hidden dark:invert"
              />
            </Link>

            <nav className="divide-border flex flex-1 flex-col divide-y">
              <div className="py-4 md:hidden">
                <button
                  className={cn(
                    "text-2xl font-light transition-colors first:pt-0 last:pb-0 hover:underline",
                    pathname === "/#platform" && "text-muted-foreground",
                  )}
                  type="button"
                  onClick={() => {
                    setUseCaseOpen(false);
                    setPlatOpen(!platOpen);
                  }}
                >
                  Platform
                </button>
                {platOpen && <PlatformMenu />}
              </div>
              <div className="py-4 md:hidden">
                <button
                  className={cn(
                    "text-2xl font-light transition-colors first:pt-0 last:pb-0 hover:underline",
                    pathname === "/#use-cases" && "text-muted-foreground",
                  )}
                  type="button"
                  onClick={() => {
                    setPlatOpen(false);
                    setUseCaseOpen(!useCaseOpen);
                  }}
                >
                  Use Cases
                </button>
                {useCaseOpen && <UseCaseMenu />}
              </div>
              {ITEMS.map((link) => (
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
              ))}
            </nav>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
