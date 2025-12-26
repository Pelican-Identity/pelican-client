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
  description:
    "Privacy-first, self-owned identity for authentication, access, and verification — fully controlled by you.",
  keywords: ["Pelican", "Identity", "Authentication", "Access", "Verification"],

  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    title: "Pelican Identity",
    description:
      "Privacy-first, self-owned identity for authentication, access, and verification — fully controlled by you.",
    siteName: "Pelican Identity",
    // images: [
    //   {
    //     url: "/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Pelican Identity",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pelican Identity",
    description:
      "Privacy-first, self-owned identity for authentication, access, and verification — fully controlled by you.",
    // images: ["/og-image.jpg"],
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
      <head>
        <script
          async
          crossOrigin="anonymous"
          src="https://tweakcn.com/live-preview.min.js"
        />
      </head>
      <body className={`${onest.className} bg-white antialiased`}>
        <StyleGlideProvider />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
