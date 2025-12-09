"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SideMenu } from "./side-menu";
import NavigationLink, { NavigationLinkProps } from "../navbar/navigation";
import PlatformMenu from "../navbar/platform-menu";
import UseCaseMenu from "../navbar/use-case-menu";

export const Menu: NavigationLinkProps[] = [
  {
    href: "#",
    label: "Platform",
    content: <PlatformMenu />,
  },
  { href: "#", label: "Use Cases", content: <UseCaseMenu /> },
];

export const Navbar = () => {
  return (
    <section
      className={cn(
        "fixed top-0 z-50 flex h-16 w-full flex-col justify-center bg-white transition-all duration-300 lg:h-20",
      )}
    >
      <div className="items-cente flex justify-between px-2 md:px-4 lg:px-6">
        <div className="items-cente flex gap-20">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <Image
              src="https://res.cloudinary.com/de0jr8mcm/image/upload/v1765097838/pelican/pelican-logo_logo-black_dduhrr.png"
              alt="pelican-logo"
              width={154}
              height={48}
              className="dark:invert"
            />
          </Link>
          <div className="hidden items-center gap-10 md:flex">
            {Menu.map((item) => (
              <NavigationLink key={item.label} {...item} />
            ))}
          </div>
        </div>

        <div className="flex items-center lg:gap-2.5">
          <Link
            href="/pelican-vault"
            className="rounded-full bg-black px-4 py-2 text-sm font-bold text-white hover:bg-black/70 lg:px-6 lg:py-3"
          >
            <p className="hidden lg:block">Get Pelican Vault</p>
            <p className="block text-xs lg:hidden">Get Vault</p>
          </Link>
          <SideMenu />
        </div>
      </div>
    </section>
  );
};
