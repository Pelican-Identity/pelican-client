import { TrendingDown, DollarSign, Lock, Shield, Database } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: TrendingDown,
    title: "Reduce onboarding drop-off by up to 60%",
  },
  {
    icon: DollarSign,
    title: "Save significantly on KYC costs",
  },
  {
    icon: Lock,
    title: "Eliminate password and OTP management",
  },
  {
    icon: Shield,
    title:
      "Deterministic IDs remove breach risks from leaked emails & passwords",
  },
  {
    icon: Database,
    title: "No raw user identity storage on your servers",
  },
];

export function ForBusinesses() {
  return (
    <section className="bg-feature-bg py-20" id="businesses">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
            For Businesses
          </h2>
          <p className="text-muted-foreground mx-auto mt-2 mb-10 max-w-3xl">
            Reduce friction, improve security, and cut costs
          </p>
        </div>

        {/* GRID OF BENEFITS */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <Card
              key={benefit.title}
              className="border-border h-full rounded-xl border p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <benefit.icon className="text-primary mb-5 h-10 w-10" />
              <p className="text-foreground leading-relaxed font-medium">
                {benefit.title}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
