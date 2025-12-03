import { Inter } from "next/font/google";
import localFont from "next/font/local";

import type { Metadata } from "next";

import { Footer } from "@/components/blocks/footer";
import { Navbar } from "@/components/blocks/navbar";
import { StyleGlideProvider } from "@/components/styleglide-provider";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";

const Onest = localFont({
  src: [
    {
      path: "../../fonts/onest/Onest-Thin.ttf",
      weight: "100",
      style: "lighter",
    },
    {
      path: "../../fonts/onest/Onest-ExtraLight.ttf",
      weight: "100",
      style: "lighter",
    },
    {
      path: "../../fonts/onest/Onest-Light.ttf",
      weight: "200",
      style: "lighter",
    },
    {
      path: "../../fonts/onest/Onest-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/onest/Onest-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/onest/Onest-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/onest/Onest-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/onest/Onest-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../fonts/onest/Onest-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-onest",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Pelican Auth",
    template: "%s | Mainline",
  },
  description:
    "Privacy-first, self-owned identity for authentication, access, and verification — fully controlled by you.",
  keywords: [],
  authors: [{ name: "shadcnblocks.com" }],
  creator: "shadcnblocks.com",
  publisher: "shadcnblocks.com",
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
    title: "Mainline - Modern Next.js Template",
    description:
      "A modern Next.js template built with shadcn/ui, Tailwind & MDX. Open source - MIT License.",
    siteName: "Mainline",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mainline - Modern Next.js Template",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mainline - Modern Next.js Template",
    description:
      "A modern Next.js template built with shadcn/ui, Tailwind & MDX. Open source - MIT License.",
    images: ["/og-image.jpg"],
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
      <body className={`${Onest.variable} ${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <StyleGlideProvider />
          <Navbar />
          <main className="">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
