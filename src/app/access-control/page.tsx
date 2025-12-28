import React from "react";
import {
  QrCode,
  Smartphone,
  Clock,
  HardDrive,
  BookOpen,
  ArrowRight,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/blocks/navbar";
import Link from "next/link";
import { Footer } from "@/components/blocks/footer";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg">
    <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
      <Icon className="h-6 w-6 text-black" />
    </div>
    <h3 className="mb-2 text-xl font-semibold">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const AccessMethodCard = ({ icon: Icon, title }) => (
  <div className="border-primary/20 hover:border-primary/40 flex items-center gap-3 rounded-lg border-2 bg-white p-6 transition-colors">
    <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
      <Icon className="h-5 w-5 text-black" />
    </div>
    <span className="text-lg font-medium">{title}</span>
  </div>
);

const FAQItem = ({ question, answer }) => (
  <div className="mb-6 border-b border-gray-200 pb-6 last:border-0">
    <h3 className="mb-2 text-lg font-semibold">{question}</h3>
    <p className="text-gray-600">{answer}</p>
  </div>
);

export default function PhysicalAccessControlPage() {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen pt-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-5xl leading-tight font-bold md:text-6xl">
              Secure physical access using cryptographic identity
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-xl text-gray-600">
              Pelican extends digital identity into the physical world, enabling
              secure access to buildings, devices, and restricted environments.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button variant="success" className="rounded-full p-6" asChild>
                <a href="https://dash.pelicanidentity.com/sign-in">
                  Secure Physical Access
                </a>
              </Button>
              <Button
                className="rounded-full bg-black p-6 text-white hover:bg-black/80"
                asChild
              >
                <Link href="/developer">See Integration Options</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="bg-primary/30 mx-auto max-w-4xl rounded-2xl p-8">
            <p className="text-lg leading-relaxed text-gray-700">
              Pelican enables physical access control by binding cryptographic
              identity to devices, QR codes, and secure checkpoints. Access
              decisions are verified in real time without exposing personal
              data.
            </p>
          </div>
        </section>

        {/* Access Methods */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Access Methods
          </h2>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <AccessMethodCard icon={QrCode} title="QR code authentication" />
            <AccessMethodCard
              icon={Smartphone}
              title="Mobile device proximity verification"
            />
            <AccessMethodCard icon={Clock} title="Time-bound access tokens" />
            <AccessMethodCard
              icon={HardDrive}
              title="Hardware and IoT integrations"
            />
          </div>
        </section>

        {/* Core Features */}
        <section className="container mx-auto bg-gray-50 px-6 py-16">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Core Features
          </h2>
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            {/* <FeatureCard
              icon={Clock}
              title="Time-Limited Access"
              description="Access permissions can be issued with strict expiration windows."
            /> */}
            <FeatureCard
              icon={BookOpen}
              title="Revocation and Auditability"
              description="Access can be revoked instantly with full audit logs."
            />
            <FeatureCard
              icon={Lock}
              title="Identity Without Badges"
              description="Eliminate physical badges and static credentials."
            />
          </div>
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-4xl font-bold">
              How It Works
            </h2>
            <div className="space-y-6">
              {[
                "Access point generates a challenge",
                "User authenticates via Pelican Vault",
                "Pelican verifies identity and access rules",
                "Access decision is returned in real time",
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 rounded-lg bg-white p-6 shadow-sm"
                >
                  <div className="bg-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-bold text-black">
                    {idx + 1}
                  </div>
                  <p className="text-lg">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="container mx-auto bg-gray-50 px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-4xl font-bold">Use Cases</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                "Office and co-working spaces",
                "Data centers and restricted facilities",
                "Events and conferences",
                "Smart buildings and campuses",
              ].map((useCase, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-6"
                >
                  <ArrowRight className="text-primary h-5 w-5 shrink-0" />
                  <span className="text-lg">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="container mx-auto px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-4xl font-bold">
              Frequently Asked Questions
            </h2>
            <div>
              <FAQItem
                question="Does Pelican require special hardware?"
                answer="No. Pelican supports software-based access and optional hardware integrations."
              />
              <FAQItem
                question="Can access be revoked instantly?"
                answer="Yes. Access permissions are centrally managed and revocable in real time."
              />
              <FAQItem
                question="Is access logged?"
                answer="Yes. All access events are cryptographically logged for auditing."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto bg-gray-50 px-6 py-20 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-4xl font-bold">
              Ready to modernize physical access?
            </h2>
            <p className="mb-8 text-xl text-gray-600">
              Eliminate badges and static credentials with cryptographic
              identity.
            </p>
            <Button
              variant="success"
              className="rounded-full bg-black p-6 text-white hover:bg-black/80"
              asChild
            >
              <Link href="https://dash.pelicanidentity.com/sign-in">
                Secure Physical Access
              </Link>
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
