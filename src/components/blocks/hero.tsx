import Image from "next/image";

import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-left lg:text-center">
          <h1 className="text-foreground xl:whitespace-wrap max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl">
            Build Authentication, Access, and Verification for Your Users in
            minutes
          </h1>

          <p className="text-muted-foreground mt-5 text-base md:text-xl">
            Pelican provides a simple lightweight frontend SDK for
            authentication, access, and verification.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <Button asChild variant={"success"} className="rounded-full p-6">
              <a
                href="https://dash.pelicanidentity.com/sign-in"
                target="_blank"
                rel="noopener noreferrer"
              >
                Integrate Pelican
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-12 max-lg:ml-6 max-lg:h-[550px] max-lg:overflow-hidden md:mt-20 lg:container lg:mt-24">
        <div className="relative h-[200px] w-full lg:h-[693px]">
          <Image
            src="https://res.cloudinary.com/de0jr8mcm/image/upload/v1766752648/pelican/Dec_26_2025_Screenshot_from_Compressor.io_1_shos1n.png"
            alt="hero"
            fill
            className="rounded-2xl bg-white object-cover object-top-left shadow-lg max-lg:rounded-tr-none"
          />
        </div>
      </div>
    </section>
  );
};
