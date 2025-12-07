import { DashedLine } from "../dashed-line";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

const topItems = [
  {
    title: "Deterministic User IDs",
    description:
      "Each business gets a unique ID per user. No raw data sharing. Full privacy by default. Users cannot be tracked across apps.",
    images: [
      {
        src: "/resource-allocation/templates.webp",
        alt: "Issue template interface",
        width: 495,
        height: 186,
      },
    ],
    className:
      "flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2",
    fade: [""],
  },

  {
    title: "Verified Contact Information",
    description:
      "Emails and phone numbers are verified automatically via Pelican Vault. No OTP setup, no email confirmation links, no password resets.",
    images: [
      { src: "/logos/jira.svg", alt: "Jira logo", width: 48, height: 48 },
      { src: "/logos/excel.svg", alt: "Excel logo", width: 48, height: 48 },
      {
        src: "/logos/notion.svg",
        alt: "Notion logo",
        width: 48,
        height: 48,
      },
      { src: "/logos/word.svg", alt: "Word logo", width: 48, height: 48 },
      {
        src: "/logos/monday.svg",
        alt: "Monday logo",
        width: 48,
        height: 48,
      },
      {
        src: "/logos/drive.svg",
        alt: "Google Drive logo",
        width: 48,
        height: 48,
      },
      {
        src: "/logos/jira.svg",
        alt: "Jira logo",
        width: 48,
        height: 48,
      },
      { src: "/logos/asana.svg", alt: "Asana logo", width: 48, height: 48 },
    ],
    className:
      "flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 md:[&>.title-container]:translate-x-2 xl:[&>.title-container]:translate-x-4 [&>.title-container]:translate-x-0",
    fade: [],
  },
];

const bottomItems = [
  {
    title: "Consent-Based Data Sharing",
    description:
      "Businesses request only what they need (name, DOB, country, etc.) Users approve instantly during sign-in. No extra flows.",
    images: [
      {
        src: "/resource-allocation/templates.webp",
        alt: "Issue template interface",
        width: 495,
        height: 186,
      },
    ],
    className:
      "flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2",
    fade: [""],
  },

  {
    title: "Instant KYC / Identity Verification",
    description:
      "Switch on KYC mode and Pelican Vault automatically handles: Face capture, Liveness detection, ID document verification, Face-to-ID match, Businesses receive compliance-ready identity data instantly.",
    images: [
      { src: "/logos/jira.svg", alt: "Jira logo", width: 48, height: 48 },
      { src: "/logos/excel.svg", alt: "Excel logo", width: 48, height: 48 },
      {
        src: "/logos/notion.svg",
        alt: "Notion logo",
        width: 48,
        height: 48,
      },
      { src: "/logos/word.svg", alt: "Word logo", width: 48, height: 48 },
      {
        src: "/logos/monday.svg",
        alt: "Monday logo",
        width: 48,
        height: 48,
      },
      {
        src: "/logos/drive.svg",
        alt: "Google Drive logo",
        width: 48,
        height: 48,
      },
      {
        src: "/logos/jira.svg",
        alt: "Jira logo",
        width: 48,
        height: 48,
      },
      { src: "/logos/asana.svg", alt: "Asana logo", width: 48, height: 48 },
    ],
    className:
      "flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 md:[&>.title-container]:translate-x-2 xl:[&>.title-container]:translate-x-4 [&>.title-container]:translate-x-0",
    fade: [],
  },
];

export const CoreIdentityLayer = () => {
  return (
    <section
      id="core-identity-layer"
      className="overflow-hidden pb-28 lg:pb-32"
    >
      <div className="">
        <div className="w-full space-y-4 text-center">
          <Badge variant={"outline"}>Core Identity Layer</Badge>

          <h2 className="container text-center text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
            Privacy-First Identity
          </h2>
        </div>

        <div className="mt-8 md:mt-12 lg:mt-20">
          <DashedLine
            orientation="horizontal"
            className="container max-w-7xl scale-x-110"
          />

          {/* Top Features Grid - 2 items */}
          <div className="relative container flex max-md:flex-col">
            {topItems.map((item, i) => (
              <Item key={i} item={item} isLast={i === topItems.length - 1} />
            ))}
          </div>
        </div>

        <div>
          <DashedLine
            orientation="horizontal"
            className="container scale-x-105"
          />

          {/* Top Features Grid - 2 items */}
          <div className="relative container flex max-md:flex-col">
            {bottomItems.map((item, i) => (
              <Item key={i} item={item} isLast={i === bottomItems.length - 1} />
            ))}
          </div>
          <DashedLine
            orientation="horizontal"
            className="container max-w-7xl scale-x-110"
          />
        </div>

        <DashedLine
          orientation="horizontal"
          className="container max-w-7xl scale-x-110"
        />
      </div>
    </section>
  );
};

interface ItemProps {
  item: (typeof topItems)[number];
  isLast?: boolean;
  className?: string;
}

const Item = ({ item, isLast, className }: ItemProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col justify-between px-0 py-6 md:px-6 md:py-8",
        className,
        item.className,
      )}
    >
      <div className="title-container">
        <h3 className="mb-2 text-xl font-semibold">{item.title} </h3>
        <span className="text-muted-foreground w-full">{item.description}</span>
      </div>

      {item.fade.includes("bottom") && (
        <div className="from-muted/80 absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent md:hidden" />
      )}

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
