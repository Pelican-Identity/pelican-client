import Image from "next/image";

import {
  ArrowRight,
  Blend,
  ChartNoAxesColumn,
  CircleDot,
  Diamond,
} from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Universal Identity",
    description:
      "Let users log in once and carry their verified profile across apps.",
    icon: CircleDot,
  },
  {
    title: "Trust Scoring",
    description:
      "Real-time trust scores that help platforms reduce fraud and increase safety.",
    icon: Blend,
  },
  {
    title: "Reputation Engine",
    description:
      "Users build a portable reputation that apps can verify instantly.",
    icon: Diamond,
  },
  {
    title: "Compliance Ready",
    description:
      "Optional KYC, verification, and compliance tools right out of the box.",
    icon: ChartNoAxesColumn,
  },
];

export const Hero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-left lg:text-center">
          <h1 className="text-foreground xl:whitespace-wrap max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl">
            The Authentication & Identity Layer for Modern Applications
          </h1>

          <p className="text-muted-foreground mt-5 text-base md:text-xl">
            Instant passwordless authentication today, verified user attributes
            when you need them, and full identity verification & KYC when
            required.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <Button asChild variant={"success"}>
              <a href="https://github.com/shadcnblocks/mainline-nextjs-template">
                For Businesses → Integrate Pelican
              </a>
            </Button>
            <Button
              variant="outline"
              className="from-background h-auto gap-2 bg-linear-to-r to-transparent shadow-md"
              asChild
            >
              <a
                href="https://shadcnblocks.com"
                className="max-w-56 truncate text-start md:max-w-none"
              >
                For Users → Get Pelican Vault
                <ArrowRight className="stroke-3" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-12 max-lg:ml-6 max-lg:h-[550px] max-lg:overflow-hidden md:mt-20 lg:container lg:mt-24">
        <div className="relative h-[793px] w-full">
          <Image
            src="/hero.webp"
            alt="hero"
            fill
            className="rounded-2xl object-cover object-left-top shadow-lg max-lg:rounded-tr-none"
          />
        </div>
      </div>
    </section>
  );
};
