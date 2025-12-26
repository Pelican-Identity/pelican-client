import { CheckCircle2 } from "lucide-react";
import { Badge } from "../ui/badge";

export const ComplianceReadiness = () => {
  return (
    <section id="compliance-readiness" className="py-28 lg:py-32">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <Badge variant={"outline"} className="mb-4">
            Compliance & Regulatory Readiness
          </Badge>

          <h2 className="container text-center text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
            The Trust Layer Your Business Can Rely On
          </h2>

          <p className="text-muted-foreground mx-auto mt-2 max-w-3xl">
            Pelican is built with regulatory alignment and auditability at the
            core.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-background/60 supports-backdrop-filter:bg-background/40 border-border rounded-3xl border p-10 shadow-lg backdrop-blur-md md:p-14">
          <div className="grid gap-8 md:grid-cols-2">
            {[
              "GDPR aligned",
              "Consent-first architecture",
              "Data minimization by design",
              "Business remains the data controller",
              "Audit logs available for compliance review",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-muted/30 flex items-start gap-4 rounded-xl p-5"
              >
                <CheckCircle2 className="mt-1 size-6 text-green-600" />
                <p className="text-foreground text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
