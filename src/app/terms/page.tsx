import { Footer } from "@/components/blocks/footer";
import { Navbar } from "@/components/blocks/navbar";

import React from "react";

export interface TermsOfUseDocument {
  group: string;
  content: TermsOfUseSection[];
}

export interface TermsOfUseSection {
  title: string;
  description?: string;
  bullets?: TermsOfUseBullet[];
  footnote?: string;
}

export interface TermsOfUseBullet {
  title?: string;
  subtext?: string;
}
const PelicanVaultTermsOfUse: TermsOfUseDocument[] = [
  {
    group: "Introduction and Acceptance",
    content: [
      {
        title: "Acceptance of Terms",
        description:
          "These Terms of Use govern access to and use of Pelican’s business-facing products, including the Pelican Business Dashboard, APIs, SDKs, and related services. By creating an account, integrating Pelican, or otherwise using the Services, the Business expressly agrees to be legally bound by these Terms. If the Business does not agree, it must not access or use the Services.",
      },
      {
        title: "Authority to Bind",
        description:
          "The individual accepting these Terms represents and warrants that they have the legal authority to bind the Business entity to these Terms. Pelican disclaims any liability arising from unauthorized acceptance.",
      },
    ],
  },
  {
    group: "Nature of the Services",
    content: [
      {
        title: "Role of Pelican",
        description:
          "Pelican provides identity infrastructure that enables Businesses to request, receive, and verify user-approved identity data. Pelican does not originate identity data, does not own user data, and does not independently determine how Businesses use received data.",
      },
      {
        title: "No Guarantee of Availability",
        description:
          'The Services are provided on an "as is" and "as available" basis. Pelican does not guarantee uninterrupted availability, latency targets, or error-free operation.',
      },
    ],
  },
  {
    group: "Business Responsibilities",
    content: [
      {
        title: "Compliance Obligations",
        description:
          "The Business is solely responsible for ensuring its use of Pelican complies with all applicable laws, regulations, and industry standards, including but not limited to data protection, consumer protection, and identity verification laws.",
      },
      {
        title: "Lawful Data Requests",
        bullets: [
          {
            title: "Purpose Limitation",
            subtext:
              "Businesses must only request identity data that is strictly necessary for a legitimate, disclosed purpose.",
          },
          {
            title: "Consent Integrity",
            subtext:
              "Businesses must not misrepresent, obscure, or manipulate user consent flows.",
          },
        ],
      },
    ],
  },
  {
    group: "Prohibited Use",
    content: [
      {
        title: "Restricted Activities",
        bullets: [
          {
            title: "Surveillance or Profiling",
            subtext:
              "Using Pelican to conduct unauthorized tracking, profiling, or behavioral analysis is strictly prohibited.",
          },
          {
            title: "Credential Harvesting",
            subtext:
              "Attempting to extract cryptographic material, or sensitive vault data is forbidden.",
          },
          {
            title: "Resale or Repackaging",
            subtext:
              "The Services may not be resold, sublicensed, or white-labeled without explicit written authorization.",
          },
        ],
      },
    ],
  },
  {
    group: "Security and Integration Obligations",
    content: [
      {
        title: "Secure Implementation",
        description:
          "Businesses are responsible for securely implementing Pelican integrations, including protecting API keys, secrets, and access credentials. Pelican is not liable for breaches resulting from Business-side misconfiguration or negligence.",
      },
    ],
  },
  {
    group: "Fees and Billing",
    content: [
      {
        title: "Usage-Based Billing",
        description:
          "Businesses may be charged on a pay-as-you-go or subscription basis as defined in the dashboard or applicable agreement. All fees are exclusive of taxes.",
      },
      {
        title: "Non-Refundability",
        description:
          "Fees are non-refundable except where required by law or explicitly stated otherwise.",
      },
    ],
  },
  {
    group: "Termination",
    content: [
      {
        title: "Termination by Pelican",
        description:
          "Pelican may suspend or terminate access immediately if the Business violates these Terms, poses a security risk, or engages in unlawful activity.",
      },
      {
        title: "Effect of Termination",
        description:
          "Upon termination, the Business must cease all use of Pelican Services and delete any cached or stored user data obtained via Pelican unless retention is legally required.",
      },
    ],
  },
  {
    group: "Disclaimers and Limitation of Liability",
    content: [
      {
        title: "No Warranties",
        description:
          "Pelican disclaims all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.",
      },
      {
        title: "Limitation of Liability",
        description:
          "To the maximum extent permitted by law, Pelican shall not be liable for indirect, incidental, special, or consequential damages, including loss of revenue, data, or business opportunity.",
      },
    ],
  },
  {
    group: "Governing Law",
    content: [
      {
        title: "Jurisdiction",
        description:
          "These Terms are governed by the laws of the jurisdiction in which Pelican is incorporated, without regard to conflict-of-law principles.",
      },
    ],
  },
];
const page = () => {
  return (
    <div>
      <Navbar />
      <div className="align-center mt-20 mb-8 px-4 lg:px-16">
        <h1 className="mb-2 text-4xl font-bold text-gray-900">Terms of Use</h1>
        <p className="text-gray-600">Last Updated: December 21, 2025</p>

        <section id="introduction" title="1. Introduction">
          <h2 className="mt-6 text-2xl font-bold uppercase">Introduction</h2>
          <p>
            This Terms of Use constitutes a legally binding contract between
            Pelican Identity, a subsidiary of Heracules Design & Tech Ltd.
            (“Pelican Identity,” “Company,” “we,” “our,” or “us”), and any
            individual or entity (“User,” “you,” or “your”) that accesses, or
            uses the Pelican business dashboard and other platforms (as defined
            below). By creating an account, accessing, or otherwise using the
            Platform, you acknowledge that you have read, understood, and agree
            to be bound by this Terms of Use, our Privacy Policy, and any
            supplemental policies, guidelines, or documents referenced herein
            (collectively, the “Policies”). If you do not agree to all such
            terms, you must not access or use Pelican vault or any of its
            related services.
          </p>

          <div>
            {PelicanVaultTermsOfUse.map((item) => (
              <div key={item.group}>
                <h2 className="mt-6 text-2xl font-bold uppercase">
                  {item.group}
                </h2>
                {item.content.map((content) => (
                  <div key={content.title} className="ml-4 lg:ml-10">
                    <h3 className="mt-6 text-xl font-bold text-gray-900 capitalize">
                      {content.title}
                    </h3>
                    <p className="text-gray-600">{content.description}</p>
                    {content.bullets && (
                      <ul className="list-disc">
                        {content.bullets.map((bullet) => (
                          <li key={bullet.subtext} className="mt-2">
                            <div className="ml-2">
                              {bullet.title && (
                                <p className="font-medium text-gray-900">
                                  {bullet.title}:
                                </p>
                              )}
                              <p className="text-gray-600">{bullet.subtext}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                    {content.footnote && (
                      <p className="mt-2 text-sm text-blue-700 italic">
                        {content.footnote}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default page;
