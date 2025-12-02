import { Shield, Building2, CheckCircle2, LockKeyhole } from "lucide-react";
import { DashedLine } from "../dashed-line";
import { Badge } from "../ui/badge";

export const EnterpriseSecurity = () => {
  return (
    <section id="enterprise-security" className="py-28 lg:py-32">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <Badge variant={"outline"} className="mb-4">
            Enterprise & High-Stakes Security
          </Badge>

          <h2 className="container text-center text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
            Built for High-Security & Regulated Industries
          </h2>

          <p className="text-muted-foreground mx-auto mt-2 max-w-3xl">
            Pelican is designed for environments where identity failure is not
            an option.
          </p>
        </div>

        <div className="grid gap-14 lg:grid-cols-2">
          {/* Left Column — Use Cases */}
          <div className="relative">
            <h3 className="mb-6 flex items-center gap-2 text-2xl font-semibold">
              <Building2 className="size-6 opacity-80" />
              Use Cases
            </h3>

            <ul className="text-muted-foreground space-y-4 text-lg">
              {[
                "Digital banking & fintech",
                "Lending & investment platforms",
                "Crypto exchanges",
                "Regulated marketplaces",
                "Government & enterprise systems",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="bg-muted/30 flex items-start gap-3 rounded-xl p-4"
                >
                  <CheckCircle2 className="text-success mt-1 size-5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Vertical dashed line on large screens */}
            <DashedLine
              orientation="vertical"
              className="absolute top-0 right-0 h-full max-lg:hidden"
            />
          </div>

          {/* Right Column — Capabilities */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-2xl font-semibold">
              <LockKeyhole className="size-6 opacity-80" />
              Enterprise Capabilities
            </h3>

            <ul className="text-muted-foreground space-y-4 text-lg">
              {[
                "Deterministic, non-reversible user identifiers",
                "Zero raw PII exposure to Pelican",
                "Encrypted relay between user & business",
                "Device-portable identity via cryptographic recovery",
                "Full audit trails",
                "Face match, liveness & document verification",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="bg-muted/30 flex items-start gap-3 rounded-xl p-4"
                >
                  <CheckCircle2 className="text-success mt-1 size-5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer result block */}
        <DashedLine orientation="horizontal" className="mt-20 mb-12" />

        <div className="mx-auto max-w-4xl text-center">
          <p className="text-foreground text-xl font-medium md:text-2xl">
            You get compliance, security, and privacy — without storing
            sensitive identity data yourself.
          </p>
        </div>
      </div>
    </section>
  );
};
