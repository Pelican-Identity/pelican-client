import { ShieldCheck, Lock, EyeOff, Database } from "lucide-react";

import { Badge } from "../ui/badge";
import { Card } from "@/components/ui/card";

export function PrivacySecurity() {
  const userPoints = [
    "Share only what you choose",
    "Cannot be tracked across apps",
    "Data lives locally inside Pelican Vault",
    "Encrypted end-to-end",
  ];

  const businessPoints = [
    "End-to-end encrypted attribute relay",
    "Pelican never stores raw user identity data",
    "Only you and your user see the identifying data",
    "Breach surface is minimized by architecture",
  ];

  return (
    <section className="bg-muted/40 py-20" id="privacy-security">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <div className="mb-14 text-center">
          <Badge variant={"outline"} className="mb-4 capitalize">
            PRIVACY & SECURITY BY DESIGN
          </Badge>

          <h2 className="text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
            Privacy-Centric Architecture. Security at Every Layer.
          </h2>
          <p className="text-muted-foreground mx-auto mt-2 mb-10 max-w-3xl">
            Built for individuals and enterprises who require trust by default.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* FOR USERS */}
          <Card className="border-border bg-background rounded-xl border p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <ShieldCheck className="text-primary h-6 w-6" />
              <h3 className="text-xl font-semibold">For Users</h3>
            </div>

            <div className="space-y-4">
              {userPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <EyeOff className="text-primary h-5 w-5 shrink-0" />
                  <p className="text-foreground">{point}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* FOR BUSINESSES */}
          <Card className="border-border bg-background rounded-xl border p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <Lock className="text-primary h-6 w-6" />
              <h3 className="text-xl font-semibold">For Businesses</h3>
            </div>

            <div className="space-y-4">
              {businessPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Database className="text-primary h-5 w-5 shrink-0" />
                  <p className="text-foreground">{point}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
