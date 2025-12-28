import React from "react";
import { FileCheck, ArrowRight, User } from "lucide-react";
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

const VerificationTypeCard = ({ icon: Icon, title }) => (
  <div className="border-primary/20 hover:border-primary/40 flex items-center gap-3 rounded-lg border-2 bg-white p-6 transition-colors">
    <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
      <Icon className="h-5 w-5 text-black" />
    </div>
    <span className="text-lg font-medium">{title}</span>
  </div>
);

export const FAQItem = ({ question, answer }) => (
  <div className="mb-6 border-b border-gray-200 pb-6 last:border-0">
    <h3 className="mb-2 text-lg font-semibold">{question}</h3>
    <p className="text-gray-600">{answer}</p>
  </div>
);

export default function KYCVerificationPage() {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen pt-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-5xl leading-tight font-bold md:text-6xl">
              KYC and identity verification without repeated friction
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-xl text-gray-600">
              Pelican enables identity verification that can be used across
              compliant platforms with user consent.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button variant="success" className="rounded-full p-6" asChild>
                <a href="https://dash.pelicanidentity.com/sign-in">
                  Enable KYC with Pelican
                </a>
              </Button>
              <Button
                className="rounded-full bg-black p-6 text-white hover:bg-black/80"
                asChild
              >
                <Link href="/developer">Read docs</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="bg-primary/30 mx-auto max-w-4xl rounded-2xl p-8">
            <p className="text-lg leading-relaxed text-gray-700">
              Pelican provides government-issued identity verification and KYC
              services while ensuring sensitive documents and biometric data
              remain under user control. Applications and institutions can
              request verification status, biometric liveness results, and
              verification metadata.
            </p>
          </div>
        </section>

        {/* Verification Types */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Verification Types
          </h2>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <VerificationTypeCard
              icon={FileCheck}
              title="Government-issued ID verification"
            />
            <VerificationTypeCard
              icon={User}
              title="Biometric liveness checks"
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
                "User completes KYC in Pelican Vault",
                "Verification result is cryptographically signed",
                "Application requests verification claim",
                "Pelican returns verification status and metadata",
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
                "Fintech and financial services",
                "Crypto and digital asset platforms",
                "Marketplaces and gig platforms",
                "Regulated SaaS products",
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
                question="Who stores the identity documents?"
                answer="Identity documents remain encrypted within the user's Pelican vault."
              />
              <FAQItem
                question="Is Pelican compliant with regulations?"
                answer="Pelican is designed to support regional and global compliance requirements."
              />
              <FAQItem
                question="Can businesses get access to identity document files?"
                answer="No. Identity documents remain encrypted within the user's Pelican vault, howerver businesses that have undergone Pelican's KYB can request short-lived download urls for identity files from pelican vault and are required to store and handle them according to their respective privacy and data protection regulations."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto bg-gray-50 px-6 py-20 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-4xl font-bold">
              Ready to streamline KYC?
            </h2>
            <p className="mb-8 text-xl text-gray-600">
              Enable identity verification and KYC for your users.
            </p>
            <Button
              variant="success"
              className="rounded-full bg-black p-6 text-white hover:bg-black/80"
              asChild
            >
              <Link href="https://dash.pelicanidentity.com/sign-in">
                Enable KYC with Pelican
              </Link>
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
