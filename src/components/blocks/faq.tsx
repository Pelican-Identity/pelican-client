import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Managed access control",
    questions: [
      {
        question: "What is managed access control in Pelican?",
        answer:
          "Managed access control in Pelican is designed for physical access management. It allows organizations to control and verify entry into physical spaces or events using Pelican identities, all managed from a central dashboard.",
      },
      {
        question: "What can I control from the Pelican dashboard?",
        answer:
          "From the dashboard, you can create access points, manage events, define who is allowed entry, monitor check-ins in real time, and view access logs for audit and operational purposes.",
      },
      {
        question:
          "Is managed access control used for app or website permissions?",
        answer:
          "No. Managed access control in Pelican is strictly for physical access use cases such as events, offices, private venues, and gated spaces. Application-level permissions are handled separately through Pelican authentication.",
      },
      {
        question: "Can Pelican work in low-connectivity environments?",
        answer:
          "Yes. Pelican supports event-specific verification codes that can be scanned by organizers even when attendees have limited or unstable network connectivity.",
      },
      {
        question:
          "Is managed access control suitable for high-security environments?",
        answer:
          "Yes. Pelican can enforce identity-bound access, prevent credential sharing, and maintain detailed access logs, making it suitable for private, invite-only, or sensitive physical environments.",
      },
    ],
  },
  {
    title: "SDK integration",
    questions: [
      {
        question: "Which platforms does Pelican support?",
        answer:
          "Pelican provides SDKs for mobile and web applications. The SDKs handle secure authentication, identity handoff, and callback verification with minimal integration effort.",
      },
      {
        question: "Does Pelican provide a sandbox or test environment?",
        answer:
          "Pelican does not provide a separate sandbox environment. Instead, every business account receives $3 in free credit to test all Pelican features. The credit does not expire and can be used at any time.",
      },
      {
        question: "Are there limitations on the free credit?",
        answer:
          "No. The free credit can be used across all Pelican features, allowing teams to fully evaluate the platform before committing to paid usage.",
      },
      {
        question: "How long does SDK integration take?",
        answer:
          "Most teams can complete a basic Pelican SDK integration in under an 15mins. More advanced use cases such as events or custom identity scopes may require additional setup.",
      },
      {
        question: "Do users need to install the Pelican app?",
        answer:
          "Yes. Pelican authentication is anchored to the Pelican Vault mobile app, which securely holds the user’s identity and enables verified sign-ins.",
      },
    ],
  },
  {
    title: "Pelican Vault",
    questions: [
      {
        question: "What is Pelican Vault?",
        answer:
          "Pelican Vault is the mobile app that securely holds a user’s Pelican identity. It is the core of the Pelican ecosystem and enables users to authenticate, verify access, and manage their identity across platforms and physical locations.",
      },
      {
        question: "Is Pelican Vault free to use?",
        answer:
          "Yes. Pelican Vault is completely free for all users, regardless of how often or where they use their Pelican identity.",
      },
      {
        question: "What information is stored in Pelican Vault?",
        answer:
          "Pelican Vault stores verified identity information such as basic personal details and authentication credentials. Users remain in control of what information is shared with third-party platforms.",
      },
      {
        question:
          "Can Pelican Vault be used without linking to a business or event?",
        answer:
          "Yes. Users can create and maintain a Pelican identity in Pelican Vault even if they are not actively using it with a specific app, service, or event.",
      },
      {
        question: "Does Pelican Vault track where I sign in?",
        answer:
          "Pelican Vault keeps a record of authentication activity so users can see where and when their identity was used. This improves transparency and security.",
      },
    ],
  },
  {
    title: "Events",
    questions: [
      {
        question: "What is Pelican Events?",
        answer:
          "Pelican Events enables organizers to manage guest access using Pelican identities, eliminating manual guest lists and reducing fraud at physical events.",
      },
      {
        question: "Do attendees need an internet connection at the event?",
        answer:
          "Not necessarily. Attendees can present their event verification code from Pelican Vault, which organizers can scan even if the attendee has poor network connectivity.",
      },
      {
        question: "Can multiple organizers scan guests at the same time?",
        answer:
          "Yes. Pelican supports multiple organizers and devices scanning guests concurrently, helping reduce queues and entry delays.",
      },
      {
        question:
          "Can Pelican Events be used for recurring or multi-day events?",
        answer:
          "Yes. Organizers can configure access rules for recurring events, multi-day passes, and controlled re-entry without requiring repeated identity verification.",
      },
      {
        question:
          "Is Pelican Events suitable for private or invite-only events?",
        answer:
          "Yes. Pelican Events is well-suited for private, invite-only, or controlled-access events where verified identity and entry tracking are required.",
      },
    ],
  },
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
}) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>
          <div className="space-y-4">
            {headerTag === "h1" ? (
              <h1 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Got Questions?
              </h1>
            ) : (
              <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Got Questions?
              </h2>
            )}
            <p className="text-muted-foreground max-w-md leading-snug lg:mx-auto">
              If you can't find what you're looking for,{" "}
              <Link
                href="mailto:support@pelicanidentity.com"
                className="underline underline-offset-4"
              >
                get in touch
              </Link>
              .
            </p>
          </div>

          <div className="grid gap-6 text-start">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="">
                <h3 className="text-muted-foreground border-b py-4">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${categoryIndex}-${i}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
