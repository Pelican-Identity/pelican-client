import React from "react";
import {
  QrCode,
  Users,
  Clock,
  UserCheck,
  Mail,
  Phone,
  ArrowRight,
  TicketCheck,
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

const RegistrationTypeCard = ({ icon: Icon, title, subtitle }) => (
  <div className="border-primary/20 hover:border-primary/40 flex items-start gap-3 rounded-lg border-2 bg-white p-6 transition-colors">
    <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
      <Icon className="h-5 w-5 text-black" />
    </div>
    <div>
      <span className="block text-lg font-medium">{title}</span>
      <span className="text-sm text-gray-600">{subtitle}</span>
    </div>
  </div>
);

const FAQItem = ({ question, answer }) => (
  <div className="mb-6 border-b border-gray-200 pb-6 last:border-0">
    <h3 className="mb-2 text-lg font-semibold">{question}</h3>
    <p className="text-gray-600">{answer}</p>
  </div>
);

export default function EventsPage() {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen pt-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-5xl leading-tight font-bold md:text-6xl">
              Event registration and check-in made simple
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-xl text-gray-600">
              From basic attendee capture to verified identity registration,
              Pelican provides flexible tools for events of any size.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button variant="success" className="rounded-full p-6" asChild>
                <a href="https://dash.pelicanidentity.com/sign-in">
                  Start Managing Events
                </a>
              </Button>
              <Button
                className="rounded-full bg-black p-6 text-white hover:bg-black/80"
                asChild
              >
                <Link href="/developer">View Integration Guide</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="bg-primary/30 mx-auto max-w-4xl rounded-2xl p-8">
            <p className="text-lg leading-relaxed text-gray-700">
              Pelican's event registration platform offers two tiers: Basic
              Registration for simple attendee tracking (completely free), and
              Pelican Verified for events requiring identity verification with
              email or phone confirmation.
            </p>
          </div>
        </section>

        {/* Registration Types */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Registration Options
          </h2>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <RegistrationTypeCard
              icon={Users}
              title="Basic Registration"
              subtitle="Free - Collect attendee info without verification"
            />
            <RegistrationTypeCard
              icon={UserCheck}
              title="Pelican Verified + Email"
              subtitle="Event registrations with verified emails, Pelican Vault required"
            />
            <RegistrationTypeCard
              icon={Mail}
              title="Pelican Verified + Phone"
              subtitle="Event registrations with verified phone numbers, Pelican Vault required"
            />
            <RegistrationTypeCard
              icon={QrCode}
              title="QR Code Check-In"
              subtitle="Fast, contactless attendee verification"
            />
          </div>
        </section>

        {/* Core Features */}
        <section className="container mx-auto bg-gray-50 px-6 py-16">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Core Features
          </h2>
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={TicketCheck}
              title="Instant Check-In"
              description="QR code-based check-in for fast attendee processing."
            />
            <FeatureCard
              icon={Users}
              title="Real-Time Analytics"
              description="Track registrations, check-ins, and attendance in real time."
            />
            <FeatureCard
              icon={Mail}
              title="Verified Identity"
              description="Optional email and phone verification for secure events."
            />
            <FeatureCard
              icon={Clock}
              title="Time-Bound Access"
              description="Create registration windows and session-specific access."
            />
            <FeatureCard
              icon={Phone}
              title="Global SMS Support"
              description="Phone verification works worldwide with reliable delivery."
            />
            <FeatureCard
              icon={UserCheck}
              title="Flexible Data Capture"
              description="Collect exactly the information you need—verified or not."
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
                "Create your event and choose registration type (Basic or Verified)",
                "Share registration link",
                "Attendees register with optional identity verification",
                "Generate QR codes for check-in or one-time codes for entry",
                "Track attendance and export data in real time",
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
            <h2 className="mb-12 text-center text-4xl font-bold">
              Perfect For
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                "Conferences and trade shows",
                "Workshops and training sessions",
                "Meetups and community gatherings",
                "Corporate events and webinars",
                "Festivals and public events",
                "Private parties and exclusive events",
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

        {/* Comparison Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-4xl font-bold">
              Basic vs. Pelican Verified
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-xl border-2 border-gray-200 bg-white p-8">
                <div className="mb-4 inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                  FREE
                </div>
                <h3 className="mb-4 text-2xl font-bold">Basic Registration</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-green-600">✓</span>
                    <span>Collect names, emails, and phone numbers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-green-600">✓</span>
                    <span>QR code check-in</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-green-600">✓</span>
                    <span>Real-time analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-green-600">✓</span>
                    <span>Prevent duplicate registrations</span>
                  </li>
                </ul>
                <p className="mt-6 text-sm text-gray-600">
                  Best for casual events, meetups, and community gatherings
                  where identity verification isn't required.
                </p>
              </div>

              <div className="border-primary rounded-xl border-2 bg-white p-8">
                <div className="bg-primary/20 mb-4 inline-block rounded-full px-4 py-2 text-sm font-semibold text-black">
                  VERIFIED
                </div>
                <h3 className="mb-4 text-2xl font-bold">Pelican Verified</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-green-600">✓</span>
                    <span>Everything in Basic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-green-600">✓</span>
                    <span>Email ownership verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-green-600">✓</span>
                    <span>Phone number verification (SMS)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-green-600">✓</span>
                    <span>Age restriction for sensitive events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-green-600">✓</span>
                    <span>Identity verification</span>
                  </li>
                </ul>
                <p className="mt-6 text-sm text-gray-600">
                  Ideal for professional conferences, exclusive events, and
                  situations requiring verified attendee information.
                </p>
              </div>
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
                question="Is basic registration really free?"
                answer="Yes, completely free. You can collect unlimited basic registrations with no verification. You only pay when you need verified email or phone confirmation."
              />
              <FAQItem
                question="Can I mix registration types for one event?"
                answer="Yes. You can offer both basic and verified registration options for the same event, letting attendees choose their preferred method."
              />
              <FAQItem
                question="How does QR code check-in work?"
                answer="Once registered, attendees receive a unique QR code. At the event, scan the code with our mobile app or dashboard for instant check-in verification."
              />
              <FAQItem
                question="Can I export attendee data?"
                answer="Yes. Export registration lists, check-in records, and analytics to CSV or Excel at any time."
              />
              <FAQItem
                question="What happens if someone registers twice?"
                answer="With Pelican Verified, duplicate registrations are automatically prevented. With basic registration, you can manually manage duplicates from the dashboard."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto bg-gray-50 px-6 py-20 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-4xl font-bold">
              Ready to streamline your event registration?
            </h2>
            <p className="mb-8 text-xl text-gray-600">
              Start with free basic registration or add verification for secure
              events.
            </p>
            <Button
              variant="success"
              className="rounded-full bg-black p-6 text-white hover:bg-black/80"
              asChild
            >
              <Link href="https://dash.pelicanidentity.com/sign-in">
                Create Your First Event
              </Link>
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
