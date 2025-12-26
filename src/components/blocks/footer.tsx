import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Footer() {
  const navigation = [
    { name: "Pricing", href: "/pricing" },
    { name: "Developers", href: "/developer" },
    { name: "Contact", href: "/contact" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  return (
    <footer className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-14 py-28 lg:py-32">
        <div className="container mx-auto w-full space-y-3 text-center lg:max-w-4xl">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Get Pelican Today
          </h2>

          <p className="text-muted-foreground leading-snug text-balance">
            Pelican gives your users secure identity, and gives your platform
            verified trust, and reduced onboarding friction.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="mt-4" variant="success" asChild>
              <Link href="/demo">Try it out</Link>
            </Button>
          </div>
        </div>

        <nav className="container flex flex-col items-center gap-4">
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="font-medium transition-opacity hover:opacity-75"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex flex-wrap items-center justify-center gap-6">
            {legal.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-muted-foreground text-sm transition-opacity hover:opacity-75"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
