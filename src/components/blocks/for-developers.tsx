import { CheckCircle } from "lucide-react";

import { Badge } from "../ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const features = [
  "Authentication",
  "Verification",
  "Consent",
  "Compliance",
  "Data delivery",
];

export function ForDevelopers() {
  return (
    <section className="py-20" id="developers">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* LEFT SIDE CONTENT */}
          <div>
            <Badge className="mb-4">For Developers</Badge>

            <h2 className="text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
              Integration in Minutes, Not Days
            </h2>

            <p className="text-muted-foreground mx-auto mt-2 mb-10 max-w-3xl">
              Install the Pelican frontend SDK, provide your public key &
              project key, configure your app from the dashboard, and request
              the exact data you need — that’s all.
            </p>

            {/* FEATURE LIST */}
            <div className="mb-10 space-y-4">
              <p className="text-foreground font-semibold">Pelican handles:</p>

              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="text-primary h-5 w-5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="px-8">
              View Documentation
            </Button>
          </div>

          {/* RIGHT SIDE CODE CARD */}
          <div>
            <Card className="bg-card border-border rounded-xl border p-6 shadow-sm">
              <pre className="overflow-x-auto text-sm leading-relaxed">
                <code className="language-typescript">
                  {`import { PelicanAuth } from '@pelican/auth';

const pelican = new PelicanAuth({
  publicKey: 'your_public_key',
  projectKey: 'your_project_key',
  requiredData: ['email', 'phone', 'name'],
  kycEnabled: true
});

// Authenticate user
const user = await pelican.authenticate();

// Receive verified data
console.log(user.verifiedEmail);
console.log(user.deterministicId);`}
                </code>
              </pre>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
