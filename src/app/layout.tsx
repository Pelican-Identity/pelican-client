import { Onest } from "next/font/google";

import type { Metadata } from "next";

import { StyleGlideProvider } from "@/components/styleglide-provider";

// @ts-ignore:next-line
import "../styles/globals.css";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
});

export const metadata: Metadata = {
  title: {
    default: "Pelican Identity",
    template: "%s | Mainline",
  },
  description: "The Identity layer for our physical and digital world.",
  keywords: ["Pelican", "Identity", "Authentication", "Access", "Verification"],

  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon/logo.png", sizes: "48x48" },
      { url: "/favicon/logo.png", type: "image/png" },
      { url: "/favicon/logo.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/logo.png", type: "image/png" },
      { url: "/favicon/logo.png" },
    ],
    apple: [{ url: "/favicon/logo.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/logo.png" }],
  },
  openGraph: {
    title: "Pelican Identity",
    description: "The Identity layer for our physical and digital world.",
    siteName: "Pelican Identity",
    images: [
      {
        url: "https://res.cloudinary.com/de0jr8mcm/image/upload/v1766906501/pelican/shots-03_rshohi.png",
        alt: "Pelican Identity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pelican Identity",
    description: "The Identity layer for our physical and digital world.",
    images: [
      {
        url: "https://res.cloudinary.com/de0jr8mcm/image/upload/v1766906501/pelican/shots-03_rshohi.png",
        alt: "Pelican Identity",
      },
    ],
    creator: "@ausrobdev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body className={`${onest.className} bg-white antialiased`}>
        <StyleGlideProvider />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
