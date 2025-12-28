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
    group: "Scope and Applicability",
    content: [
      {
        title: "Purpose of This Policy",
        description:
          "This Business Privacy Policy explains how Pelican processes data in connection with its business-facing services. It applies solely to Business customers and does not govern end-user data stored in Pelican Vault.",
      },
    ],
  },
  {
    group: "Roles and Responsibilities",
    content: [
      {
        title: "Data Controller and Processor Roles",
        description:
          "Businesses act as Data Controllers for any personal data they request or receive through Pelican. Pelican acts as a Data Processor, except where Pelican independently processes limited metadata for security, compliance, or billing purposes.",
      },
    ],
  },
  {
    group: "Data Pelican Processes",
    content: [
      {
        title: "Business Account Data",
        bullets: [
          {
            title: "Administrative Information",
            subtext:
              "Company name, contact email, authorized users, billing details.",
          },
          {
            title: "Technical Metadata",
            subtext:
              "API usage logs, authentication events, IP addresses, and device metadata.",
          },
        ],
      },
    ],
  },
  {
    group: "Data Pelican Does Not Control",
    content: [
      {
        title: "User Identity Data",
        description:
          "Pelican does not store, persist, or independently access end-user identity data contained in Pelican Vault. Such data is transmitted directly to Businesses only upon explicit user approval.",
      },
    ],
  },
  {
    group: "Purpose of Processing",
    content: [
      {
        title: "Operational Necessity",
        bullets: [
          {
            title: "Service Delivery",
            subtext:
              "To authenticate requests, enforce access controls, and deliver core platform functionality.",
          },
          {
            title: "Security and Abuse Prevention",
            subtext: "To detect fraud, misuse, or unauthorized access.",
          },
        ],
      },
    ],
  },
  {
    group: "Data Retention",
    content: [
      {
        title: "Retention Limits",
        description:
          "Pelican retains Business-related metadata only for as long as necessary to fulfill contractual, legal, or security obligations. Identity data shared with Businesses is not retained by Pelican.",
      },
    ],
  },
  {
    group: "Security Measures",
    content: [
      {
        title: "Safeguards",
        description:
          "Pelican employs technical and organizational measures including encryption, access controls, and audit logging. However, no system is immune to risk, and absolute security is not guaranteed.",
      },
    ],
  },
  {
    group: "International Data Transfers",
    content: [
      {
        title: "Global Operations",
        description:
          "Pelican operates globally and may process data across jurisdictions. Appropriate safeguards are applied where required by law.",
      },
    ],
  },
  {
    group: "Business Obligations",
    content: [
      {
        title: "Downstream Compliance",
        description:
          "Businesses are solely responsible for how they store, process, secure, and retain any user data received via Pelican.",
      },
    ],
  },
  {
    group: "Policy Changes",
    content: [
      {
        title: "Updates",
        description:
          "Pelican may update this policy from time to time. Continued use of the Services constitutes acceptance of the updated policy.",
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
