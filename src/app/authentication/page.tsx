import React from "react";
import { Shield, Key, CheckCircle, ArrowRight, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/blocks/navbar";
import Link from "next/link";
import { Footer } from "@/components/blocks/footer";

export const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg">
    <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
      <Icon className="h-6 w-6 text-black" />
    </div>
    <h3 className="mb-2 text-xl font-semibold">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export const FAQItem = ({ question, answer }) => (
  <div className="mb-6 border-b border-gray-200 pb-6 last:border-0">
    <h3 className="mb-2 text-lg font-semibold">{question}</h3>
    <p className="text-gray-600">{answer}</p>
  </div>
);

export default function AuthenticationPage() {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen pt-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-5xl leading-tight font-bold md:text-6xl">
              Authentication built for zero trust systems
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-xl text-gray-600">
              Pelican is an authentication platform that removes passwords,
              minimizes exposed data, and gives users cryptographic control over
              their identity.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button variant="success" className="rounded-full p-6" asChild>
                <a href="https://dash.pelicanidentity.com/sign-in">
                  Start with Pelican Auth
                </a>
              </Button>
              <Button
                className="rounded-full bg-black p-6 text-white hover:bg-black/80"
                asChild
              >
                <Link href="/developer">View Documentation</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="bg-primary/30 mx-auto max-w-4xl rounded-2xl p-8">
            <p className="text-lg leading-relaxed text-gray-700">
              Pelican provides a modern authentication layer that replaces
              traditional passwords with cryptographic identity, device-bound
              verification, and consent-driven data sharing. Applications
              authenticate users using deterministic identifiers, while
              sensitive identity data remains in the user's encrypted vault.
            </p>
          </div>
        </section>

        {/* Core Features */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Core Features
          </h2>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            <FeatureCard
              icon={Key}
              title="Passwordless Authentication"
              description="Users authenticate using cryptographic keys stored on their device, removing passwords from the authentication flow entirely."
            />
            <FeatureCard
              icon={Shield}
              title="Deterministic User IDs"
              description="Applications receive stable, deterministic user identifiers without accessing personal data such as email or phone number."
            />
            <FeatureCard
              icon={CheckCircle}
              title="Consent-Based Data Requests"
              description="Applications explicitly request access to user data. Users approve or deny each request at authentication time."
            />
            <FeatureCard
              icon={Smartphone}
              title="Session and Device Control"
              description="Pelican manages device registration, and re-authentication without exposing secrets to third parties."
            />
          </div>
        </section>

        {/* How It Works */}
        <section className="container mx-auto bg-gray-50 px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-4xl font-bold">
              How It Works
            </h2>
            <div className="space-y-6">
              {[
                "Application redirects user to Pelican",
                "User authenticates via Pelican Vault",
                "Pelican issues a deterministic identifier",
                "Optional identity claims are shared with explicit consent",
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
        <section className="container mx-auto px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-4xl font-bold">Use Cases</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                "Consumer web and mobile apps",
                "Enterprise internal tools",
                "Developer platforms and SaaS products",
                "High-security and regulated systems",
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
        <section className="container mx-auto bg-gray-50 px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-4xl font-bold">
              Frequently Asked Questions
            </h2>
            <div>
              <FAQItem
                question="Does Pelican replace OAuth?"
                answer="Pelican can function as an OAuth-compatible provider while offering stronger privacy guarantees and cryptographic identity ownership."
              />
              <FAQItem
                question="Does Pelican store user passwords?"
                answer="No. Pelican does not use or store passwords at any point in the authentication process."
              />
              <FAQItem
                question="Can users authenticate on multiple devices?"
                answer="Yes. Each device is independently registered and verified under the user's identity."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 py-20 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-4xl font-bold">Ready to get started?</h2>
            <p className="mb-8 text-xl text-gray-600">
              Build secure, passwordless authentication into your application
              today.
            </p>
            <Button
              variant="success"
              className="rounded-full bg-black p-6 text-white hover:bg-black/80"
              asChild
            >
              <Link href="https://dash.pelicanidentity.com/sign-in">
                Start with Pelican Auth
              </Link>
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
