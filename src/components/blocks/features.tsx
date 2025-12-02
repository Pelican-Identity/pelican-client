import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { DashedLine } from "../dashed-line";
import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    title: "Install Pelican Vault once",
    image: "/features/triage-card.svg",
  },
  {
    title: "Secure your identity",
    image: "/features/cycle-card.svg",
  },
  {
    title: "Instantly sign in to all Pelican-enabled apps afterward",
    image: "/features/overview-card.svg",
  },
  {
    title: "No more repeated OTPs, passwords, or form filling",
    image: "/features/overview-card.svg",
  },
  {
    title: "KYC only once when required",
    image: "/features/overview-card.svg",
  },
];

export const Features = () => {
  return (
    <section id="feature-modern-teams" className="pb-28 lg:pb-32">
      <div className="container">
        {/* Content */}
        <div className="mx-auto mt-10 flex flex-col items-center gap-3">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            First Time Using Pelican?
          </h2>
          <p className="text-muted-foreground leading-snug">
            Set up your identity once, use it everywhere
          </p>
        </div>

        {/* Features Card */}
        <Card className="mt-8 rounded-3xl md:mt-12">
          <CardContent className="grid grid-cols-3 justify-center">
            {items.map((item, i) => (
              <div key={i} className="flex flex-1 max-md:flex-col">
                <div className="flex-1 p-4 pe-0! md:p-6">
                  <div className="relative aspect-[1.28/1] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`${item.title} interface`}
                      fill
                      className="object-cover object-left-top ps-4 pt-2"
                    />
                    <div className="from-background absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent" />
                  </div>

                  <Link
                    href="#"
                    className={
                      "group flex items-center justify-between gap-4 pe-4 pt-4 md:pe-6 md:pt-6"
                    }
                  >
                    <h3 className="font-display max-w-60 text-2xl leading-tight font-bold tracking-tight">
                      {item.title}
                    </h3>
                    <div className="rounded-full border p-2">
                      <ChevronRight className="size-6 transition-transform group-hover:translate-x-1 lg:size-9" />
                    </div>
                  </Link>
                </div>
                {i < items.length - 1 && (
                  <div className="relative hidden md:block">
                    <DashedLine orientation="vertical" />
                  </div>
                )}
                {i < items.length - 1 && (
                  <div className="relative block md:hidden">
                    <DashedLine orientation="horizontal" />
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
