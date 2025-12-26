import { CheckCircle } from "lucide-react";
import { Badge } from "../ui/badge";
import Image from "next/image";
import CodeExample from "./code-example";

const features = [
  "Authentication",
  "Verification",
  "Consent",
  "Compliance",
  "Data delivery",
];

const docs: {
  image: string;
  title: string;
  url: string;
}[] = [
  {
    image:
      "https://res.cloudinary.com/de0jr8mcm/image/upload/v1766766173/pelican/sdks_react_i7zbqt.png",
    title: "React/Next.js",
    url: "https://www.npmjs.com/package/@pelican-identity/react",
  },

  {
    image:
      "https://res.cloudinary.com/de0jr8mcm/image/upload/v1766766173/pelican/sdks_vanilla_j2ymv3.png",
    title: "Vanilla js, Svelte, Vue",
    url: "https://www.npmjs.com/package/@pelican-identity/vanilla",
  },
  {
    image:
      "https://res.cloudinary.com/de0jr8mcm/image/upload/v1766766173/pelican/sdks_native_gs3x8p.png",

    title: "React Native",
    url: "https://www.npmjs.com/package/@pelican-identity/react-native",
  },
];

export function ForDevelopers() {
  return (
    <section className="py-20" id="developers">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* LEFT SIDE CONTENT */}
          <div>
            <Badge className="mb-4">For Developers</Badge>
            <h2 className="text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
              Integration in Minutes, Not Days
            </h2>
            <p className="text-muted-foreground mx-auto mt-2 mb-10 max-w-3xl">
              Install the Pelican frontend SDK, provide your public key &
              project key, configure your app from the dashboard, and request
              the exact data you need — that’s all.
            </p>
            {/* FEATURE LIST */}
            <div className="mb-10 space-y-4">
              <p className="text-foreground font-semibold">Pelican handles:</p>

              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="text-primary h-5 w-5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
            <p className="text-foreground font-semibold">Documentations</p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              {docs.map((doc) => (
                <div
                  key={doc.title}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="flex h-10 items-center justify-center">
                    <Image
                      src={doc.image}
                      alt={doc.title}
                      width={80}
                      height={80}
                    />
                  </div>
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer text-sm font-medium underline"
                  >
                    {doc.title}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE CODE CARD */}
          <CodeExample />
        </div>
      </div>
    </section>
  );
}
