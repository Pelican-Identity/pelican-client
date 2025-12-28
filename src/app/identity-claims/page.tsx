import React from "react";
import { Shield, Mail, Phone, Lock, ArrowRight } from "lucide-react";
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

const ClaimTypeCard = ({ type, verification, exposure }) => (
  <div className="border-primary/20 hover:border-primary/40 rounded-lg border-2 bg-white p-6 transition-colors">
    <div className="flex items-start gap-4">
      <div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg">
        {type === "Email Address" ? (
          <Mail className="h-6 w-6 text-black" />
        ) : (
          <Phone className="h-6 w-6 text-black" />
        )}
      </div>
      <div className="flex-1">
        <h3 className="mb-2 text-xl font-semibold">{type}</h3>
        <div className="space-y-2 text-sm">
          <p>
            <span className="font-medium">Verification:</span> {verification}
          </p>
          <p>
            <span className="font-medium">Exposure:</span> {exposure}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const FAQItem = ({ question, answer }) => (
  <div className="mb-6 border-b border-gray-200 pb-6 last:border-0">
    <h3 className="mb-2 text-lg font-semibold">{question}</h3>
    <p className="text-gray-600">{answer}</p>
  </div>
);

export default function VerifiedIdentityClaimsPage() {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen pt-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-5xl leading-tight font-bold md:text-6xl">
              Verified identity claims without exposing identity
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-xl text-gray-600">
              Pelican acts as a verification guarantor for emails and phone
              numbers, allowing applications to trust claims without storing
              sensitive data.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button variant="success" className="rounded-full p-6" asChild>
                <a href="https://dash.pelicanidentity.com/sign-in">
                  Verify with Pelican
                </a>
              </Button>
              <Button
                className="rounded-full bg-black p-6 text-white hover:bg-black/80"
                asChild
              >
                <Link href="/developer">Developer docs</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="bg-primary/30 mx-auto max-w-4xl rounded-2xl p-8">
            <p className="text-lg leading-relaxed text-gray-700">
              Pelican verifies and cryptographically binds identity claims such
              as email addresses and phone numbers to a user's vault.
              Applications receive verification guarantees with verification
              information.
            </p>
          </div>
        </section>

        {/* Claim Types */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="mb-12 text-center text-4xl font-bold">Claim Types</h2>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            <ClaimTypeCard
              type="Email Address"
              verification="One-time verification and cryptographic binding"
              exposure="Optional"
            />
            <ClaimTypeCard
              type="Phone Number"
              verification="SMS-based verification and device binding"
              exposure="Optional"
            />
          </div>
        </section>

        {/* Core Features */}
        <section className="container mx-auto bg-gray-50 px-6 py-16">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Core Features
          </h2>
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            <FeatureCard
              icon={Shield}
              title="Verification Guarantee"
              description="Pelican guarantees that a claim has been verified and is controlled by the authenticated user."
            />
            <FeatureCard
              icon={Lock}
              title="Selective Disclosure"
              description="Applications can request emails and phone numbers with verification information trusting that the claim is verified."
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
                "User verifies email or phone once in Pelican",
                "Claim is cryptographically bound to the vault",
                "Application requests the claim",
                "Pelican returns the claim with verification information",
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
                "Account recovery flows",
                "Fraud prevention and trust scoring",
                "Communication enablement",
                "Compliance-sensitive applications",
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
                question="Does my app need to store emails or phone numbers?"
                answer="No. Applications can rely on Pelican's verification guarantees without storing personal data."
              />
              <FAQItem
                question="Can users hide their email or phone number?"
                answer="Yes. Claim disclosure is optional and controlled by the user."
              />
              <FAQItem
                question="What happens if a phone number changes?"
                answer="The previous claim is invalidated and a new verification is required."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto bg-gray-50 px-6 py-20 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-4xl font-bold">
              Ready to verify identities securely?
            </h2>
            <p className="mb-8 text-xl text-gray-600">
              Start verifying users without compromising their privacy.
            </p>
            <Button
              variant="success"
              className="rounded-full bg-black p-6 text-white hover:bg-black/80"
              asChild
            >
              <Link href="https://dash.pelicanidentity.com/sign-in">
                Verify with Pelican
              </Link>
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
