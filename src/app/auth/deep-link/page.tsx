"use client";
import { AppleIcon, PlayStoreIcon } from "@/components/StoreIcons";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function PelicanRedirect() {
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();

    // Auto-redirect logic: Wait 2.5s, then go to Store
    const timer = setTimeout(() => {
      if (ua.includes("iphone") || ua.includes("ipad")) {
        window.location.href =
          "https://apps.apple.com/app/pelican-vault/id6755097751";
      } else if (ua.includes("android")) {
        window.location.href =
          "https://play.google.com/store/apps/details?id=com.HeraculesDesignTechLtd.pelican";
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <Link href="/" className="mb-10 flex shrink-0 items-center gap-2">
        <Image
          src="https://res.cloudinary.com/de0jr8mcm/image/upload/v1765097838/pelican/pelican-logo_logo-black_dduhrr.png"
          alt="pelican-logo"
          width={154}
          height={48}
          className="dark:invert"
        />
      </Link>
      <h1 className="mb-4 text-2xl font-bold">Opening Pelican Vault...</h1>
      <p className="mb-8 text-gray-600">
        We're trying to open the app. If you don't have it installed, we'll take
        you to the store.
      </p>

      {/* Manual Store Buttons */}
      <div className="flex items-center justify-center gap-2">
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
  );
}
