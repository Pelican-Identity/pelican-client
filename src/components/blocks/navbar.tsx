"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { SideManu } from "./side-menu";

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
  // { label: "Pelican Vault", href: "/#pelican-vault" },
  // { label: "Developers", href: "/#developers" },
  { label: "Use Cases", href: "/#businesses" },
  // { label: "Pricing", href: "/#pricing" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <section
      className={cn(
        "bg-background/70 absolute left-1/2 z-50 w-[min(90%,1024px)] -translate-x-1/2 rounded-4xl border backdrop-blur-md transition-all duration-300",
        "top-5 lg:top-12",
      )}
    >
      <div className="flex items-center justify-between px-6 py-3">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/logos/pelican-logos-03.png"
            alt="logo"
            width={124}
            height={48}
            className="dark:invert"
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="max-lg:hidden">
          <NavigationMenuList>
            {ITEMS.map((link) =>
              link.dropdownItems ? (
                <NavigationMenuItem key={link.label} className="">
                  <NavigationMenuTrigger className="data-[state=open]:bg-accent/50 bg-transparent! px-3">
                    {link.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[400px] space-y-2 p-4">
                      {link.dropdownItems.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="group hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex items-center gap-4 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none"
                            >
                              <div className="space-y-1.5 transition-transform duration-300 group-hover:translate-x-1">
                                <div className="text-sm leading-none font-medium">
                                  {item.title}
                                </div>
                                <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={link.label} className="">
                  <Link
                    href={link.href}
                    className={cn(
                      "relative bg-transparent px-3 text-sm font-medium transition-opacity hover:opacity-75",
                      pathname === link.href && "text-muted-foreground",
                    )}
                  >
                    {link.label}
                  </Link>
                </NavigationMenuItem>
              ),
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2.5">
          {/* <ThemeToggle /> */}

          <Link href="/login" className="max-lg:hidden">
            <Button variant="success">Get Pelican Vault</Button>
          </Link>
          <SideManu />
        </div>
      </div>
    </section>
  );
};
