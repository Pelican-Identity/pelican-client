import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Footer() {
  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Contact", href: "mailto:support@pelicanidentity.com" },
  ];

  return (
    <footer className="bg-primary/10 flex items-center justify-center">
      <div className="flex flex-col items-center gap-14 space-y-10 py-28 lg:py-32">
        <div className="container mx-auto w-full space-y-3 text-center lg:max-w-4xl">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Get Pelican Today
          </h2>

          <p className="text-muted-foreground leading-snug text-balance">
            Pelican gives your users secure identity, and gives your platform
            verified trust, and reduced onboarding friction.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Button asChild variant={"success"} className="rounded-full p-6">
              <Link href="/demo">Try Quick Demo</Link>
            </Button>
          </div>
        </div>

        <nav className="container flex flex-col items-center gap-4">
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
