import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const CTA = ({
  className,
}: {
  className?: string;
  dashedLineClassName?: string;
}) => {
  return (
    <>
      <section className={cn("overflow-hidden py-28 lg:py-32", className)}>
        <div className="container">
          <div className="space-y-6 md:text-center">
            <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
              Your Personal Identity Wallet
            </h2>
            <p className="text-muted-foreground max-w-2xl leading-snug md:mx-auto">
              Store your verified emails, phone numbers, and identity securely
              on your device. Sign in instantly, control what you share, and
              complete KYC in one step.
            </p>
            <Button variant="success" className="shadow-md">
              Download Pelican Vault → App Store / Google Play{" "}
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
