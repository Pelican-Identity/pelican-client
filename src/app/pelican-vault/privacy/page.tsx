import { Navbar } from "@/components/blocks/navbar";
import { VaultFooter } from "@/components/blocks/vault-footer";
import React from "react";

export interface PrivacyPolicyDocument {
  group: string;
  content: PrivacyPolicySection[];
}

export interface PrivacyPolicySection {
  title: string;
  description?: string;
  bullets?: PrivacyPolicyBullet[];
  footnote?: string;
}

export interface PrivacyPolicyBullet {
  title?: string;
  subtext?: string;
}

const PelicanVaultPrivacyPolicy: PrivacyPolicyDocument[] = [
  {
    group: "1. Introduction, Scope & Legal Positioning",
    content: [
      {
        title: "Purpose and Legal Function of This Policy",
        description:
          "This Privacy Policy exists to describe, with precision, the limited circumstances under which Pelican processes data in connection with the Pelican Vault mobile application. It does not create, imply, or expand any custodial, fiduciary, or data controller obligations beyond those expressly stated. This policy must be read in conjunction with Pelican Vault’s self-custodial architecture, which intentionally limits Pelican’s access to and control over identity data.",
      },
      {
        title: "Strict Scope Limitation",
        description:
          "This Privacy Policy applies exclusively to the Pelican Vault mobile application. It does not govern, and must not be interpreted to govern, any other Pelican products, services, dashboards, APIs, developer tooling, or third-party services.",
        bullets: [
          {
            subtext:
              "Third-party businesses connected through Pelican Vault are governed solely by their own privacy policies.",
          },
          {
            subtext:
              "Future Pelican products will be governed by separate legal documents.",
          },
        ],
      },
      {
        title: "No Expansion of Responsibility",
        description:
          "Nothing in this Privacy Policy shall be interpreted as creating an obligation for Pelican to access, retain, monitor, recover, or protect identity data beyond the technical measures expressly described.",
        footnote:
          "If a responsibility is not explicitly stated, it is expressly disclaimed.",
      },
    ],
  },

  {
    group: "2. Foundational Definitions (Interpretive Control)",
    content: [
      {
        title: "Interpretive Priority",
        description:
          "The definitions in this section control the interpretation of this Privacy Policy and override informal or colloquial understandings of similar terms.",
      },
      {
        title: "Defined Terms",
        bullets: [
          {
            title: "Pelican Identity",
            subtext:
              "The legal entity that develops and distributes the Pelican Vault software, acting solely as a technology provider.",
          },
          {
            title: "Pelican Vault",
            subtext:
              "A self-custodial identity software application that operates under user-controlled access and authorization.",
          },
          {
            title: "User",
            subtext:
              "An individual who voluntarily installs and uses Pelican Vault and assumes responsibility for its configuration and security.",
          },
          {
            title: "Identity Data",
            subtext:
              "Any personal or identifying information stored by a user within their Pelican Vault.",
          },
          {
            title: "Recovery Phrase",
            subtext:
              "A user-generated access mechanism that enables vault access or restoration and is never known to Pelican.",
          },
          {
            title: "Third-Party Business",
            subtext:
              "Any external entity that requests identity data from a user and operates independently of Pelican.",
          },
        ],
      },
    ],
  },

  {
    group: "3. Absolute Privacy & Custody Principles",
    content: [
      {
        title: "User as Sole Identity Custodian",
        description:
          "Users are the sole custodians of their identity data. Pelican does not co-own, jointly control, license, or assert rights over identity data stored in Pelican Vault.",
      },
      {
        title: "Explicit Rejection of Custodianship",
        description:
          "Pelican does not act as a data custodian, escrow provider, trustee, fiduciary, or guardian of user identity data under any legal framework.",
      },
      {
        title: "No Data Commercialization",
        description:
          "Pelican does not sell, rent, license, analyze, or monetize identity data for advertising, analytics, profiling, or behavioral inference.",
      },
    ],
  },

  {
    group: "4. Self-Custodial Architecture & Technical Limits",
    content: [
      {
        title: "Architectural Enforcement of User Control",
        description:
          "Pelican Vault is architected such that Pelican does not possess the technical capability to independently access, view, or extract identity data stored in a user’s vault.",
      },
      {
        title: "Absence of Administrative Override",
        description:
          "Pelican does not maintain administrative backdoors, master keys, recovery mechanisms, or override capabilities that would permit access to user identity data.",
      },
      {
        title: "No Exceptional Access",
        description:
          "Pelican cannot access identity data in response to customer support requests, internal reviews, legal demands, or emergency situations.",
        footnote:
          "Any request for identity data must be satisfied, if at all, directly by the user.",
      },
    ],
  },

  {
    group: "5. recovery phrase, Recovery Phrase & Irreversible Responsibility",
    content: [
      {
        title: "recovery phrase Generation and Disclosure",
        description:
          "At onboarding, Pelican Vault generates and displays a recovery phrase to the user. This recovery phrase is displayed once and is not retained by Pelican in any form.",
      },
      {
        title: "Sole Responsibility and Risk Assumption",
        description:
          "The user assumes full and exclusive responsibility for safeguarding the recovery phrase. Pelican disclaims all responsibility for loss, compromise, duplication, or misuse of the recovery phrase.",
        bullets: [
          {
            subtext:
              "Loss of the recovery phrase results in permanent loss of access.",
          },
          {
            subtext:
              "Compromise of the recovery phrase enables unauthorized access.",
          },
        ],
      },
      {
        title: "No Recovery, No Exceptions",
        description:
          "Pelican cannot recover, reset, regenerate, or bypass a recovery phrase under any circumstances.",
        footnote:
          "This includes—but is not limited to—device loss, death, incapacity, legal orders, or system failures.",
      },
    ],
  },

  {
    group: "6. Backup & Restore — Explicit Limitations",
    content: [
      {
        title: "Optional Convenience Feature Only",
        description:
          "Backup and restore features, where available, are provided strictly as optional convenience mechanisms and do not alter the self-custodial nature of Pelican Vault.",
      },
      {
        title: "User-Controlled and User-Risk-Bearing",
        description:
          "Users bear full responsibility for selecting, configuring, securing, and validating any backup mechanism.",
      },
      {
        title: "No Guarantee of Recoverability",
        description:
          "Pelican makes no representations or guarantees regarding backup integrity, availability, or restorability.",
      },
    ],
  },

  {
    group: "7. Data Pelican Processes (Strictly Limited)",
    content: [
      {
        title: "Operational Metadata Only",
        description:
          "Pelican processes only the minimum non-identity data required to operate the application, enforce security, prevent abuse, and maintain service availability.",
      },
      {
        title: "Ephemeral Technical Processing",
        description:
          "Authentication and session-related data are processed transiently and are not retained beyond their immediate technical purpose.",
      },
    ],
  },

  {
    group: "8. Data Categories Pelican Does Not Process",
    content: [
      {
        title: "Affirmative Exclusions",
        description:
          "Pelican does not intentionally collect, store, or process the following categories of data:",
        bullets: [
          { subtext: "Identity data stored in the user’s vault." },
          {
            subtext:
              "recovery phrases, private keys, or cryptographic secrets.",
          },
          { subtext: "Biometric identifiers." },
          { subtext: "Advertising or tracking identifiers." },
        ],
      },
    ],
  },

  {
    group: "9. Identity Data Sharing — User as Sole Decision-Maker",
    content: [
      {
        title: "User-Initiated Disclosure Only",
        description:
          "All identity data disclosures occur solely as a result of user action. Pelican does not initiate, automate, or compel identity sharing.",
      },
      {
        title: "No Ongoing Authority",
        description:
          "Once identity data is shared, Pelican does not retain authority, visibility, or control over that data.",
      },
    ],
  },

  {
    group: "10. Third-Party Businesses — Complete Separation",
    content: [
      {
        title: "Independent and Unaffiliated Controllers",
        description:
          "Third-party businesses operate independently and assume full legal responsibility for data they receive.",
      },
      {
        title: "No Liability for Third-Party Conduct",
        description:
          "Pelican disclaims responsibility for third-party storage practices, security measures, retention policies, or regulatory compliance.",
      },
    ],
  },

  {
    group: "11. Legal Basis & Jurisdictional Neutrality",
    content: [
      {
        title: "Consent and Contractual Necessity",
        description:
          "Where Pelican processes data, it does so based on explicit user consent or contractual necessity to provide the software.",
      },
      {
        title: "Jurisdiction-Agnostic Compliance",
        description:
          "Pelican operates globally and aligns its practices with generally accepted data protection principles without assuming jurisdiction-specific obligations beyond applicable law.",
      },
    ],
  },

  {
    group: "12. Security Posture & Shared Risk",
    content: [
      {
        title: "Security Measures",
        description:
          "Pelican employs industry-standard technical and organizational safeguards appropriate to its limited role.",
      },
      {
        title: "Shared Risk Model",
        description:
          "Users acknowledge that security depends on device integrity, operating system security, and personal operational practices.",
      },
    ],
  },

  {
    group: "13. Retention, Deletion & Immutability",
    content: [
      {
        title: "Minimal Retention",
        description:
          "Non-identity metadata is retained only as long as operationally or legally required.",
      },
      {
        title: "Deletion Limitations",
        description:
          "Deletion of a Pelican Vault account does not affect data already disclosed to third parties.",
      },
    ],
  },

  {
    group: "14. User Rights — Defined and Limited",
    content: [
      {
        title: "Rights Relating to Pelican Processing Only",
        description:
          "User rights apply only to data processed by Pelican and do not extend to identity data under user custody or third-party control.",
      },
    ],
  },

  {
    group: "15. Risk Acknowledgement & Limitation of Responsibility",
    content: [
      {
        title: "Assumption of Risk",
        description:
          "Users expressly acknowledge and accept the risks inherent in self-custodial identity management.",
      },
      {
        title: "Limitation of Responsibility",
        description:
          "Pelican is not responsible for losses arising from user error, third-party misconduct, device compromise, or force majeure events.",
      },
    ],
  },
];

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="align-center mt-20 mb-8 px-4 lg:px-16">
        <h1 className="mb-2 text-4xl font-bold text-gray-900">
          Privacy Policy
        </h1>
        <p className="text-gray-600">Last Updated: December 21, 2025</p>

        <section id="introduction" title="1. Introduction">
          <h2 className="mt-6 text-2xl font-bold uppercase">Introduction</h2>
          <p>
            This Privacy Policy describes how 'Pelican Identity' a subsidiary of
            Heracules Design & Tech Ltd. ("Pelican Identity", "we", "our", or
            "us") collects, uses, discloses, and safeguards your personal
            information when you use the Pelican vault mobile application
            (collectively, the "Platform").
          </p>
          <p>
            By accessing or using Pelican vault, you consent to the data
            practices described in this Policy. If you do not agree, you must
            discontinue use of the Platform.
          </p>

          <div>
            {PelicanVaultPrivacyPolicy.map((item) => (
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
        <VaultFooter />
      </div>
    </div>
  );
};

export default page;
