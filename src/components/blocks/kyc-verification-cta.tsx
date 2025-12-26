import { ArrowRight } from "lucide-react";
import { DashedLine } from "../dashed-line";
import { Badge } from "../ui/badge";
import { Button } from "@/components/ui/button";

export const KycVerificationCTA = () => {
  return (
    <section id="kyc-verification" className="bg-primary/15 py-28 lg:py-32">
      <div className="container mx-auto max-w-5xl text-center">
        <Badge variant={"default"} className="mb-4">
          KYC & Identity Verification
        </Badge>

        {/* Headline */}
        <h2 className="container text-center text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
          We Handle the Hard Work of Identity Verification
        </h2>

        {/* Subtext */}
        <p className="text-muted-foreground mx-auto mt-5 max-w-3xl text-lg md:text-xl">
          Skip building your own KYC flow or managing 3rd-party integrations and
          webhooks. Pelican handles verification, compliance, and proof
          management so your team can stay focused on your product.
        </p>

        <DashedLine orientation="horizontal" className="my-12" />

        {/* CTA Button */}
        <div className="mt-8 flex justify-center">
          <Button asChild variant={"default"}>
            <a
              href="https://dash.pelicanidentity.com/sign-in"
              target="_blank"
              rel="noopener noreferrer"
            >
              Integrate Pelican Verification
              <ArrowRight className="size-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
