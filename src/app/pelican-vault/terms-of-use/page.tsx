import { Navbar } from "@/components/blocks/navbar";
import { VaultFooter } from "@/components/blocks/vault-footer";
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
    group: "1. Acceptance of Terms & Legal Agreement",
    content: [
      {
        title: "Binding Agreement",
        description:
          "These Terms of Use constitute a legally binding agreement between you and Pelican governing your access to and use of the Pelican Vault mobile application. By installing, accessing, or using Pelican Vault, you acknowledge that you have read, understood, and agreed to be bound by these Terms.",
      },
      {
        title: "Eligibility",
        description:
          "You represent and warrant that you have the legal capacity to enter into this agreement and that your use of Pelican Vault complies with all applicable laws and regulations.",
      },
      {
        title: "No Use Without Acceptance",
        description:
          "If you do not agree to these Terms, you must not install, access, or use Pelican Vault.",
      },
    ],
  },

  {
    group: "2. Nature of the Service",
    content: [
      {
        title: "Self-Custodial Software",
        description:
          "Pelican Vault is a self-custodial identity software application. It provides tools that allow users to store, manage, and selectively share identity data under their own control.",
      },
      {
        title: "No Custodial Relationship",
        description:
          "Pelican does not act as a custodian, trustee, escrow provider, fiduciary, or agent with respect to your identity data, credentials, or recovery mechanisms.",
      },
      {
        title: "Software-as-Provided",
        description:
          "Pelican Vault is provided as software only. Pelican does not provide identity verification, legal validation, or guarantees regarding the accuracy or acceptance of identity data by third parties.",
      },
    ],
  },

  {
    group: "3. User Responsibilities & Obligations",
    content: [
      {
        title: "Security of Access Credentials",
        description:
          "You are solely responsible for maintaining the confidentiality and security of your device, recovery phrase, and any other access mechanisms associated with Pelican Vault.",
      },
      {
        title: "recovery phrase Responsibility",
        description:
          "Your recovery phrase is the sole means of accessing and recovering your Pelican Vault. Pelican does not store, retain, or have access to your recovery phrase.",
        bullets: [
          {
            subtext:
              "Loss of the recovery phrase results in irreversible loss of access.",
          },
          {
            subtext:
              "Compromise of the recovery phrase enables unauthorized access.",
          },
        ],
      },
      {
        title: "Accurate Use",
        description:
          "You are responsible for ensuring that any identity data you store or share is accurate, lawful, and does not infringe the rights of others.",
      },
    ],
  },

  {
    group: "4. Backup, Recovery & Data Loss",
    content: [
      {
        title: "Optional Backup Features",
        description:
          "Pelican Vault may offer optional backup and restore features. These features do not alter the self-custodial nature of the application.",
      },
      {
        title: "No Recovery Obligation",
        description:
          "Pelican has no obligation to recover lost data, restore access, or assist in the reconstruction of your vault under any circumstances.",
      },
      {
        title: "Assumption of Data Loss Risk",
        description:
          "You acknowledge and accept that data loss may occur due to user error, device failure, software issues, or external events.",
      },
    ],
  },

  {
    group: "5. Identity Data Sharing",
    content: [
      {
        title: "User-Initiated Sharing Only",
        description:
          "Any sharing of identity data through Pelican Vault is initiated solely by you. Pelican does not initiate, automate, or mandate data sharing.",
      },
      {
        title: "Third-Party Requests",
        description:
          "When you approve a request from a third-party business, you authorize the disclosure of identity data directly to that entity.",
      },
      {
        title: "No Control After Disclosure",
        description:
          "Once identity data is shared, Pelican has no control over how the receiving party uses, stores, or retains that data.",
      },
    ],
  },

  {
    group: "6. Prohibited Uses",
    content: [
      {
        title: "Unlawful or Abusive Use",
        description:
          "You must not use Pelican Vault for any unlawful, fraudulent, abusive, or malicious purpose.",
      },
      {
        title: "System Interference",
        description:
          "You must not attempt to interfere with, bypass, reverse engineer, or compromise the security or integrity of Pelican Vault.",
      },
      {
        title: "Misrepresentation",
        description:
          "You must not use Pelican Vault to misrepresent your identity or impersonate another individual or entity.",
      },
    ],
  },

  {
    group: "7. Intellectual Property",
    content: [
      {
        title: "Ownership of the Software",
        description:
          "Pelican Vault and all associated intellectual property are owned by Pelican or its licensors.",
      },
      {
        title: "Limited License",
        description:
          "Pelican grants you a limited, non-exclusive, non-transferable, revocable license to use Pelican Vault for personal, lawful purposes.",
      },
    ],
  },

  {
    group: "8. Service Availability & Modifications",
    content: [
      {
        title: "No Guaranteed Availability",
        description:
          "Pelican does not guarantee uninterrupted or error-free operation of Pelican Vault.",
      },
      {
        title: "Modifications",
        description:
          "Pelican may modify, suspend, or discontinue Pelican Vault or any feature at any time without liability.",
      },
    ],
  },

  {
    group: "9. Disclaimers",
    content: [
      {
        title: "No Warranties",
        description:
          'Pelican Vault is provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied.',
      },
      {
        title: "No Identity Guarantees",
        description:
          "Pelican does not guarantee that identity data stored or shared using Pelican Vault will be accepted or relied upon by third parties.",
      },
    ],
  },

  {
    group: "10. Limitation of Liability",
    content: [
      {
        title: "Exclusion of Certain Damages",
        description:
          "To the maximum extent permitted by law, Pelican shall not be liable for indirect, incidental, consequential, or punitive damages.",
      },
      {
        title: "Maximum Liability",
        description:
          "Pelican’s total liability arising out of or relating to Pelican Vault shall not exceed the amount paid by you, if any, to use the application.",
      },
    ],
  },

  {
    group: "11. Indemnification",
    content: [
      {
        title: "User Indemnity",
        description:
          "You agree to indemnify and hold harmless Pelican from any claims, damages, losses, or expenses arising from your use of Pelican Vault or violation of these Terms.",
      },
    ],
  },

  {
    group: "12. Termination",
    content: [
      {
        title: "Termination by User",
        description: "You may discontinue use of Pelican Vault at any time.",
      },
      {
        title: "Termination by Pelican",
        description:
          "Pelican may suspend or terminate access if you violate these Terms or pose a risk to the service.",
      },
    ],
  },

  {
    group: "13. Governing Law & Dispute Resolution",
    content: [
      {
        title: "Governing Law",
        description:
          "These Terms are governed by applicable laws without regard to conflict-of-law principles.",
      },
      {
        title: "Dispute Resolution",
        description:
          "Disputes arising from these Terms shall be resolved through legally permitted mechanisms.",
      },
    ],
  },

  {
    group: "14. Changes to These Terms",
    content: [
      {
        title: "Updates",
        description:
          "Pelican may update these Terms from time to time. Continued use constitutes acceptance of updated Terms.",
      },
    ],
  },

  {
    group: "15. Contact Information",
    content: [
      {
        title: "Support and Legal Inquiries",
        description:
          "Questions regarding these Terms may be directed to Pelican through official support channels.",
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
            individual or entity (“User,” “you,” or “your”) that accesses,
            installs, or uses the Pelican vault mobile application (as defined
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
        <VaultFooter />
      </div>
    </div>
  );
};

export default page;
