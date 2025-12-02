import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Footer() {
  const navigation = [
    { name: "Product", href: "/#product" },
    { name: "Pricing", href: "/pricing" },
    { name: "Developers", href: "/#developers" },
    { name: "Security", href: "/#security" },
    { name: "Compliance", href: "/#compliance" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const social = [
    { name: "X", href: "https://x.com/ausrobdev" },
    { name: "LinkedIn", href: "#" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  return (
    <footer className="flex flex-col items-center gap-14 py-28 lg:py-32">
      <div className="container space-y-3 text-center">
        <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
          Build trust into your product from Day&nbsp;1
        </h2>

        <p className="text-muted-foreground mx-auto max-w-4xl leading-snug text-balance">
          Pelican gives your users secure identity, and gives your platform
          verified trust, compliance, and reduced onboarding friction — without
          the engineering burden.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Button size="lg" className="mt-4" variant={"outline"}>
            Integrate Pelican
          </Button>
          <Button size="lg" className="mt-4" variant="success">
            Get Pelican Vault
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

          {social.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex items-center gap-0.5 font-medium transition-opacity hover:opacity-75"
              >
                {item.name} <ArrowUpRight className="size-4" />
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
    </footer>
  );
}
