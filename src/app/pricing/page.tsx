"use client";

import React, { useState } from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { Navbar } from "@/components/blocks/navbar";
import { Background } from "@/components/background";
import { Footer } from "@/components/blocks/footer";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Collapsible = ({ children }) => (
  <div className="relative">{children}</div>
);

const CollapsibleTrigger = ({ children, className = "" }) => (
  <div className={cn("cursor-pointer", className)}>{children}</div>
);

const CollapsibleContent = ({ children, className = "" }) => (
  <div className={cn("mt-2", className)}>{children}</div>
);

// Pricing Hero Section
const Pricing = ({ className }) => {
  const pricing = [
    {
      title: "User Signup",
      price: "$0.01 per signup",
      equivalent: "300 signups with $3 credit",
    },
    {
      title: "User Login",
      price: "$0.01 per 1,000 logins",
      equivalent: "300,000 logins with $3 credit",
    },
    {
      title: "Email Verification",
      price: "$0.01 per verification",
      equivalent: "300 verifications with $3 credit",
    },
    {
      title: "Phone Verification",
      price: "$0.01 per verification",
      equivalent: "300 verifications with $3 credit",
    },
    {
      title: "ID Verification  & Biometric KYC",
      price: "$0.40 per verification",
      equivalent: "7 verifications with $3 credit",
    },
  ];

  return (
    <section className={cn("w-full py-20", className)}>
      <div className="mx-auto max-w-4xl px-4 text-center">
        <Badge variant="outline" className="mb-4">
          PRICING
        </Badge>

        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          Get started with $3 free credit
        </h2>

        <p className="mx-auto mt-4 mb-10 max-w-3xl text-lg text-gray-600">
          Pay only for what you use. No monthly fees, no hidden costs.
        </p>

        <div className="rounded-2xl border border-gray-50 bg-white p-8">
          <div className="space-y-6">
            {pricing.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-2 border-b border-dashed border-gray-200 pb-6 last:border-none last:pb-0 sm:flex-row sm:justify-between sm:gap-0"
              >
                <span className="text-left font-semibold text-gray-900">
                  {item.title}
                </span>
                <div className="text-left sm:text-right">
                  <div className="font-bold">{item.price}</div>
                  <div className="text-xs text-gray-500">{item.equivalent}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl bg-green-50 p-6 text-left">
            <h3 className="mb-2 font-semibold text-green-900">
              💡 What you get with $3 credit:
            </h3>
            <ul className="space-y-1 text-sm text-green-800">
              <li>• 300,000 user logins (extremely cost-effective)</li>
              <li>• 300 signups or email/phone verifications</li>
              <li>• 7 complete identity verifications</li>
              <li>• Mix and match based on your needs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// Pricing Table Component
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
    category: "Authentication Operations",
    features: [
      {
        name: "User Signups",
        free: "$0.01 each",
        startup: "$0.01 each",
        enterprise: "Volume pricing",
      },
      {
        name: "User Logins",
        free: "$0.01/1k",
        startup: "$0.01/1k",
        enterprise: "Volume pricing",
      },
      {
        name: "Email Verification",
        free: "$0.01 each",
        startup: "$0.01 each",
        enterprise: "Volume pricing",
      },
      {
        name: "Phone Verification",
        free: "$0.01 each",
        startup: "$0.01 each",
        enterprise: "Volume pricing",
      },
      {
        name: "ID Verification (Tier 1)",
        free: "$0.40 each",
        startup: "$0.40 each",
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
        name: "Rate Limits",
        free: "Standard",
        startup: "Higher",
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
        <Collapsible>
          <div className="flex items-center justify-between border-b border-gray-200 py-4">
            <CollapsibleTrigger className="flex items-center gap-2">
              <div>
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
            </CollapsibleTrigger>
            <Button>{pricingPlans[selectedPlan].button.text}</Button>
          </div>
          {isOpen && (
            <CollapsibleContent className="flex flex-col space-y-2 p-2">
              {pricingPlans.map(
                (plan, index) =>
                  index !== selectedPlan && (
                    <Button
                      size="lg"
                      variant="secondary"
                      key={index}
                      onClick={() => {
                        onPlanChange(index);
                        setIsOpen(false);
                      }}
                    >
                      <div className="text-left">
                        <div className="font-semibold">{plan.name}</div>
                        <div className="text-xs text-gray-600">
                          {plan.price}
                        </div>
                      </div>
                    </Button>
                  ),
              )}
            </CollapsibleContent>
          )}
        </Collapsible>
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
