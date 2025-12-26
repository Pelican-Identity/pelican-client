import { ShieldCheck, RefreshCw, Smartphone } from "lucide-react";
import { DashedLine } from "../dashed-line";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

const identityItems = [
  {
    title: "Cryptographic Recovery Phrase",
    description:
      "Your Pelican identity is backed by a secure recovery phrase phrase — not a password, not an email, not a device.",
    icon: <ShieldCheck className="text-primary size-8" />,
    className: "",
  },
  {
    title: "Restore Identity Anywhere",
    description:
      "Switch devices effortlessly. Enter your phrase on a new phone or laptop and your identity is instantly restored.",
    icon: <RefreshCw className="text-primary size-8" />,
    className: "",
  },
  {
    title: "No Email Takeover Risk",
    description:
      "Attackers can’t hijack your account through email resets. Your identity is cryptographically protected.",
    icon: <Smartphone className="text-primary size-8" />,
    className: "",
  },
  {
    title: "Ownership Comes With Responsibility",
    description:
      "If you lose your recovery phrase, access is permanently lost — just like secure authentication apps.",
    icon: <ShieldCheck className="text-primary size-8" />,
    className: "",
  },
];

export const PortableIdentity = () => {
  return (
    <section id="portable-identity" className="overflow-hidden py-28 lg:py-32">
      <div className="w-full space-y-4 text-center">
        <Badge variant={"outline"}>Portable Identity Layer</Badge>

        <h2 className="container text-center text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
          Portable Identity & Secure Recovery
        </h2>

        <p className="text-muted-foreground mx-auto mt-2 max-w-3xl">
          Your Pelican identity is portable, private, and fully owned by you —
          not locked to any device or platform.
        </p>
      </div>

      <div className="mt-8 md:mt-14">
        <DashedLine
          orientation="horizontal"
          className="container max-w-7xl scale-x-110"
        />

        <div className="relative container flex max-md:flex-col">
          {identityItems.map((item, i) => (
            <IdentityItem
              key={i}
              item={item}
              isLast={i === identityItems.length - 1}
            />
          ))}
        </div>

        <DashedLine
          orientation="horizontal"
          className="container max-w-7xl scale-x-110"
        />

        <p className="text-muted-foreground mt-12 text-center text-lg md:text-xl">
          This is what enables true identity ownership — not platform lock-in.
        </p>
      </div>
    </section>
  );
};

interface IdentityItemProps {
  item: {
    title: string;
    description: string;
    icon: React.ReactNode;
    className?: string;
  };
  isLast?: boolean;
}

const IdentityItem = ({ item, isLast }: IdentityItemProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col justify-between px-0 py-6 md:px-6 md:py-8",
        item.className,
      )}
    >
      <div className="title-container">
        <h3 className="mb-1 text-xl font-semibold">{item.title}</h3>
        <span className="text-muted-foreground">{item.description}</span>
      </div>

      {!isLast && (
        <>
          <DashedLine
            orientation="vertical"
            className="absolute top-0 right-0 max-md:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute inset-x-0 bottom-0 md:hidden"
          />
        </>
      )}
    </div>
  );
};
