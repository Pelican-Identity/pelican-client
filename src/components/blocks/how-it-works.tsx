import { Smartphone, MailCheck, Handshake, ShieldCheck } from "lucide-react";

import { Card, CardContent } from "../ui/card";

const steps = [
  {
    title: "Sign In / Scan",
    description: "Users authenticate instantly with Pelican Vault.",
    icon: Smartphone,
  },
  {
    title: "Verified Contact Info",
    description: "Emails and phone numbers are already verified and ready.",
    icon: MailCheck,
  },
  {
    title: "Consent Sharing",
    description: "Users approve only the data each business requests.",
    icon: Handshake,
  },
  {
    title: "KYC / Compliance (Optional)",
    description:
      "If required, Pelican Vault completes enrollment and delivers verified identity data.",
    icon: ShieldCheck,
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-28 lg:py-32">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="container text-center text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
          How It Works
        </h2>

        <p className="text-muted-foreground mx-auto mt-2 max-w-3xl">
          A simple, secure flow that gives your users control — and your
          business verified identity data.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <StepCard key={index} step={step} index={index} />
        ))}
      </div>
    </section>
  );
};

const StepCard = ({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) => {
  const Icon = step.icon;

  return (
    <Card className="shadow-card">
      <CardContent className="p-8">
        <div className="bg-muted/50 border-border mb-6 flex w-fit items-center justify-center rounded-2xl border p-4">
          <Icon className="size-7" />
        </div>

        <h3 className="mb-2 text-xl font-semibold">
          {index + 1}. {step.title}
        </h3>

        <p className="text-muted-foreground">{step.description}</p>
      </CardContent>
    </Card>
  );
};
