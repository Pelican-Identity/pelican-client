import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

type PricingProps = {
  className: string;
};

export const Pricing = ({ className }: PricingProps) => {
  const pricing = [
    {
      title: "Passwordless Logins",
      price: "Free during beta / up to 1,000 per month",
    },
    {
      title: "Deterministic Pelican ID",
      price: "$0.01",
    },
    {
      title: "Verified Email during sign-in",
      price: "+$0.01",
    },
    {
      title: "Verified Phone during sign-in",
      price: "+$0.03",
    },
    {
      title: "Identity Verification + Liveness",
      price: "$0.60",
    },
  ];

  return (
    <section className={cn("w-full py-20", className)}>
      <div className="mx-auto max-w-4xl text-center">
        <Badge variant={"outline"} className="mb-4">
          PRICING (SAFE VERSION)
        </Badge>

        <h2 className="container text-center text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
          Get started with $5 free credit
        </h2>

        <p className="text-muted-foreground mx-auto mt-2 mb-10 max-w-3xl">
          (Displayed as usage equivalents)
        </p>

        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="space-y-6">
            {pricing.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between border-b border-dashed pb-4 last:border-none last:pb-0"
              >
                <span className="font-medium text-gray-800">{item.title}</span>
                <span className="text-gray-600">{item.price}</span>
              </div>
            ))}
          </div>

          <div className="bg-success/15 mt-8 rounded-xl p-4 text-sm">
            $5 free credit applies to a limited number of operations (clearly
            capped).
          </div>
        </div>
      </div>
    </section>
  );
};
