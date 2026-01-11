"use client";

import React, { useState } from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/blocks/navbar";
import { Background } from "@/components/background";
import { Footer } from "@/components/blocks/footer";

const Badge = ({ children, variant = "default", className = "" }) => (
  <span
    className={cn(
      "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
      variant === "outline"
        ? "border border-gray-300 bg-white text-gray-700"
        : "bg-gray-900 text-white",
      className,
    )}
  >
    {children}
  </span>
);

const Button = ({
  children,
  variant = "default",
  className = "",
  asChild,
  ...props
}) => {
  const Component = asChild ? "div" : "button";
  return (
    <Component
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium transition-colors",
        variant === "outline"
          ? "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50"
          : "bg-gray-900 text-white hover:bg-gray-800",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

const Link = ({ href, children, ...props }) => (
  <a href={href} {...props}>
    {children}
  </a>
);

// Pricing Hero Section
const Pricing = ({ className }) => {
  const pricingCategories = [
    {
      category: "SDK Authentication",
      description: "Programmatic user authentication for apps and websites",
      id: "sdk-authentication",
      items: [
        {
          title: "Basic Signup",
          description: "User registration via SDK (web & mobile)",
          price: "$0.01 per signup",
          equivalent: "300 signups with $3 credit",
        },
        {
          title: "Signup + Verified Email",
          description: "Registration with email ownership verification",
          price: "$0.02 per signup",
          equivalent: "150 signups with $3 credit",
        },
        {
          title: "Signup + Verified Phone",
          description: "Registration with phone verification (Global SMS)",
          price: "$0.11 per signup",
          equivalent: "27 signups with $3 credit",
        },
        {
          title: "User Login",
          description: "Authenticate existing users",
          price: "$0.01 per 1,000 logins",
          equivalent: "300,000 logins with $3 credit",
        },
        {
          title: "ID Verification & Biometric KYC",
          description: "Government ID and biometric identity checks",
          price: "$0.50 per verification",
          equivalent: "6 verifications with $3 credit",
        },
      ],
    },
    {
      category: "Managed Access Control",
      description:
        "Dashboard-controlled physical access management for offices and facilities",
      id: "managed-access-control",
      items: [
        {
          title: "User Signup",
          description: "Create access control accounts",
          price: "$0.01 per signup",
          equivalent: "300 signups with $3 credit",
        },
        {
          title: "Signup + Verified Email",
          description: "Account creation with verified email",
          price: "$0.02 per signup",
          equivalent: "150 signups with $3 credit",
        },
        {
          title: "Signup + Verified Phone",
          description: "Account creation with verified phone",
          price: "$0.11 per signup",
          equivalent: "27 signups with $3 credit",
        },
        {
          title: "Access Grant",
          description: "Grant facility/building access to existing users",
          price: "$0.01 per 10 grants",
          equivalent: "3,000 grants with $3 credit",
        },
        {
          title: "ID Verification & Biometric KYC",
          description: "Verify identity for secure facility access",
          price: "$0.50 per verification",
          equivalent: "6 verifications with $3 credit",
        },
      ],
    },
    {
      category: "Event Registration",
      id: "event-registration",
      description:
        "Attendee registration and check-in for events and gatherings",
      items: [
        {
          title: "Basic Registration",
          description: "Collect attendee info (emails/phones not verified)",
          price: "FREE",
          equivalent: "Unlimited registrations",
          highlight: true,
        },
        {
          title: "Pelican Verified + Email",
          description: "Registration with verified email ownership",
          price: "$0.02 per registration",
          equivalent: "1,500 registrations with $3 credit",
        },
        {
          title: "Pelican Verified + Phone",
          description: "Registration with verified phone number",
          price: "$0.11 per registration",
          equivalent: "273 registrations with $3 credit",
        },
        {
          title: "Attendee Check-in",
          description: "Attendee check-in at events",
          price: "$0.01 per 5 check-ins",
          equivalent: "1,500 check-ins with $3 credit",
        },
        {
          title: "Age Verification",
          description: "Verify attendee age for events",
          price: "$0.50 per verification",
          equivalent: "6 verifications with $3 credit",
        },
      ],
    },
  ];

  return (
    <section className={cn("w-full py-20", className)}>
      <div className="mx-auto max-w-6xl px-4 text-center">
        <Badge variant="outline" className="mb-4">
          PRICING
        </Badge>

        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          Get started with $3 free credit
        </h2>

        <p className="mx-auto mt-4 mb-10 max-w-3xl text-lg text-gray-600">
          Pay only for what you use. No monthly fees, no hidden costs.
        </p>

        <div className="space-y-8">
          {pricingCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl border border-gray-50 bg-white p-8"
            >
              <div id={category.id} />
              <div className="bg-primary/30 mb-6 rounded-t-lg border-b border-gray-200 py-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {category.category}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {category.description}
                </p>
              </div>

              <div className="space-y-6">
                {category.items.map((item) => (
                  <div
                    key={item.title}
                    className={cn(
                      "flex flex-col gap-2 border-b border-dashed border-gray-200 pb-6 last:border-none last:pb-0 sm:flex-row sm:justify-between",
                    )}
                  >
                    <div className="text-left">
                      <div className={cn("font-semibold")}>{item.title}</div>
                      <div className="text-xs text-gray-500">
                        {item.description}
                      </div>
                    </div>

                    <div className="text-left sm:text-right">
                      <div
                        className={cn(
                          "font-bold",
                          item.highlight && "text-green-700",
                        )}
                      >
                        {item.price}
                      </div>
                      <div
                        className={cn(
                          "text-xs",
                          item.highlight ? "text-green-600" : "text-gray-500",
                        )}
                      >
                        {item.equivalent}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-gray-100 bg-gray-50 p-6">
          <h3 className="mb-4 font-semibold text-gray-900">
            Understanding Our Services
          </h3>

          <div className="grid grid-cols-1 gap-4 text-left text-sm sm:grid-cols-3">
            <div className="rounded-lg bg-white p-4">
              <div className="mb-1 font-semibold text-gray-900">
                SDK Authentication
              </div>
              <ul className="space-y-1 text-gray-600">
                <li>• Triggered programmatically via SDK</li>
                <li>• Designed for high-volume user authentication</li>
                <li>• Best for apps, websites, and embedded flows</li>
                <li>• Priced for scale</li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-4">
              <div className="mb-1 font-semibold text-gray-900">
                Managed Access Control
              </div>
              <ul className="space-y-1 text-gray-600">
                <li>• Granted manually or by policy in the dashboard</li>
                <li>• Designed for physical and admin-controlled access</li>
                <li>• Best for offices, facilities, and secure zones</li>
                <li>• Priced for operational control</li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-4">
              <div className="mb-1 font-semibold text-gray-900">
                Event Registration
              </div>
              <ul className="space-y-1 text-gray-600">
                <li>• Basic registration is completely free</li>
                <li>• Optional verified identity capture</li>
                <li>• Best for conferences, meetups, gatherings</li>
                <li>• Flexible verification options</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-xl bg-green-50 p-6 text-left">
          <h3 className="mb-2 font-semibold text-green-900">
            💡 What you get with $3 credit:
          </h3>
          <ul className="space-y-1 text-sm text-green-800">
            <li>• Up to 300,000 SDK user logins</li>
            <li>• 300 signups (SDK or Access Control)</li>
            <li>• 150 signups with verified email</li>
            <li>• 27 signups with verified phone</li>
            <li>• 3,000 access grants or 1,500 verified event registrations</li>
            <li>• 6 full KYC identity verifications</li>
            <li>• Unlimited basic event registrations (FREE)</li>
            <li>• Mix and match — credits apply across all services</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

// Pricing Plans
const pricingPlans = [
  {
    name: "Free Tier",
    price: "$0",
    description: "$3 free credit on signup",
    button: {
      text: "Get started",
      variant: "outline",
    },
  },
  {
    name: "Pay as You Go",
    price: "Usage-based",
    description: "Only pay for what you use",
    button: {
      text: "Get started",
      variant: "default",
    },
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Volume discounts available",
    button: {
      text: "Contact sales",
      variant: "outline",
    },
  },
];

const comparisonFeatures = [
  {
    category: "SDK Authentication",
    features: [
      {
        name: "Basic Signup",
        free: "$0.01 each",
        startup: "$0.01 each",
        enterprise: "Volume pricing",
      },
      {
        name: "Signup + Verified Email",
        free: "$0.02 each",
        startup: "$0.02 each",
        enterprise: "Volume pricing",
      },
      {
        name: "Signup + Verified Phone",
        free: "$0.11 each",
        startup: "$0.11 each",
        enterprise: "Volume pricing",
      },
      {
        name: "User Login",
        free: "$0.01/1k",
        startup: "$0.01/1k",
        enterprise: "Volume pricing",
      },
      {
        name: "ID Verification & KYC",
        free: "$0.50 each",
        startup: "$0.50 each",
        enterprise: "Volume pricing",
      },
    ],
  },
  {
    category: "Managed Access Control",
    features: [
      {
        name: "User Signup",
        free: "$0.01 each",
        startup: "$0.01 each",
        enterprise: "Volume pricing",
      },
      {
        name: "Signup + Verified Email",
        free: "$0.02 each",
        startup: "$0.02 each",
        enterprise: "Volume pricing",
      },
      {
        name: "Signup + Verified Phone",
        free: "$0.11 each",
        startup: "$0.11 each",
        enterprise: "Volume pricing",
      },
      {
        name: "Access Grant",
        free: "$0.01/10",
        startup: "$0.01/10",
        enterprise: "Volume pricing",
      },
      {
        name: "ID Verification & KYC",
        free: "$0.50 each",
        startup: "$0.50 each",
        enterprise: "Volume pricing",
      },
    ],
  },
  {
    category: "Event Registration",
    features: [
      {
        name: "Basic Registration",
        free: "FREE",
        startup: "FREE",
        enterprise: "FREE",
      },
      {
        name: "Pelican Verified + Email",
        free: "$0.02 each",
        startup: "$0.02 each",
        enterprise: "Volume pricing",
      },
      {
        name: "Pelican Verified + Phone",
        free: "$0.11 each",
        startup: "$0.11 each",
        enterprise: "Volume pricing",
      },
      {
        name: "Attendee Check-in",
        free: "$0.01/5",
        startup: "$0.01/5",
        enterprise: "Volume pricing",
      },
      {
        name: "Age Verification",
        free: "$0.50 each",
        startup: "$0.50 each",
        enterprise: "Volume pricing",
      },
    ],
  },
  {
    category: "Features",
    features: [
      {
        name: "API Access",
        free: true,
        startup: true,
        enterprise: true,
      },
      {
        name: "Dashboard Analytics",
        free: true,
        startup: true,
        enterprise: true,
      },
      {
        name: "Dedicated Support",
        free: null,
        startup: null,
        enterprise: true,
      },
      {
        name: "SLA Guarantee",
        free: null,
        startup: null,
        enterprise: true,
      },
    ],
  },
  {
    category: "Limits",
    features: [
      {
        name: "Initial Free Credit",
        free: "$3.00",
        startup: "$3.00",
        enterprise: "Custom",
      },
      {
        name: "Team Members",
        free: "Unlimited",
        startup: "Unlimited",
        enterprise: "Unlimited",
      },
    ],
  },
];

const renderFeatureValue = (value) => {
  if (value === true) {
    return <Check className="h-5 w-5 text-green-600" />;
  }
  if (value === false) {
    return <X className="h-5 w-5 text-gray-400" />;
  }
  if (value === null) {
    return <span className="text-gray-400">—</span>;
  }
  if (value === "FREE") {
    return <span className="font-bold text-green-600">{value}</span>;
  }
  return (
    <div className="flex items-center gap-2">
      <Check className="h-4 w-4 text-green-600" />
      <span className="text-gray-600">{value}</span>
    </div>
  );
};

const PlanHeaders = ({ selectedPlan, onPlanChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-8">
      {/* Mobile View */}
      <div className="md:hidden">
        <div className="border-b border-gray-200 pb-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex w-full items-center justify-between"
          >
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-900">
                {pricingPlans[selectedPlan].name}
              </h3>
              <p className="text-sm text-gray-600">
                {pricingPlans[selectedPlan].price}
              </p>
            </div>
            <ChevronsUpDown
              className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          </button>
          {isOpen && (
            <div className="mt-4 flex flex-col space-y-2">
              {pricingPlans.map(
                (plan, index) =>
                  index !== selectedPlan && (
                    <button
                      key={index}
                      onClick={() => {
                        onPlanChange(index);
                        setIsOpen(false);
                      }}
                      className="rounded-lg bg-gray-100 p-4 text-left transition-colors hover:bg-gray-200"
                    >
                      <div className="font-semibold">{plan.name}</div>
                      <div className="text-xs text-gray-600">{plan.price}</div>
                    </button>
                  ),
              )}
            </div>
          )}
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden grid-cols-4 gap-6 md:grid">
        <div className="col-span-1"></div>
        {pricingPlans.map((plan, index) => (
          <div key={index} className="text-center">
            <h3 className="mb-1 text-xl font-semibold text-gray-500">
              {plan.name}
            </h3>
            <p className="mb-2 text-2xl font-bold">{plan.price}</p>
            <p className="mb-4 text-sm text-gray-600">{plan.description}</p>
            <Button
              className="rounded-full bg-black p-6 text-white hover:bg-black/80"
              asChild
            >
              <Link
                href={
                  index === 2
                    ? "mailto:support@pelicanidentity.com"
                    : "https://dash.pelicanidentity.com"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {plan.button.text}
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

const FeatureSections = ({ selectedPlan }) => (
  <>
    {comparisonFeatures.map((section, sectionIndex) => (
      <div key={sectionIndex} className="mb-8">
        <div className="border-primary border-b-2 py-4">
          <h3 className="text-lg font-semibold text-gray-900">
            {section.category}
          </h3>
        </div>
        {section.features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            className="grid grid-cols-2 border-b border-gray-100 font-medium text-gray-900 md:grid-cols-4"
          >
            <span className="flex items-center py-4">{feature.name}</span>
            {/* Mobile View - Only Selected Plan */}
            <div className="md:hidden">
              <div className="flex items-center gap-1 py-4">
                {renderFeatureValue(
                  [feature.free, feature.startup, feature.enterprise][
                    selectedPlan
                  ],
                )}
              </div>
            </div>
            {/* Desktop View - All Plans */}
            <div className="hidden md:col-span-3 md:grid md:grid-cols-3 md:gap-6">
              {[feature.free, feature.startup, feature.enterprise].map(
                (value, i) => (
                  <div key={i} className="flex items-center gap-1 py-4">
                    {renderFeatureValue(value)}
                  </div>
                ),
              )}
            </div>
          </div>
        ))}
      </div>
    ))}
  </>
);

const PricingTable = () => {
  const [selectedPlan, setSelectedPlan] = useState(1);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <PlanHeaders
          selectedPlan={selectedPlan}
          onPlanChange={setSelectedPlan}
        />
        <FeatureSections selectedPlan={selectedPlan} />
      </div>
    </section>
  );
};

const Page = () => {
  return (
    <div>
      <Navbar />

      <Background>
        <Pricing className="py-28 text-center lg:pt-44 lg:pb-32" />
        <PricingTable />
      </Background>
      <Footer />
    </div>
  );
};

export default Page;
