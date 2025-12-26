import { CheckCircle } from "lucide-react";
import { Badge } from "../ui/badge";

import { Card } from "@/components/ui/card";
import Image from "next/image";

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
      "https://res.cloudinary.com/de0jr8mcm/image/upload/v1766752648/pelican/Dec_26_2025_Screenshot_from_Compressor.io_1_shos1n.png",
    title: "React/Next.js",
    url: "https://www.npmjs.com/package/@pelican-identity/react",
  },
  {
    image:
      "https://res.cloudinary.com/de0jr8mcm/image/upload/v1766752648/pelican/Dec_26_2025_Screenshot_from_Compressor.io_1_shos1n.png",
    title: "React Native",
    url: "https://www.npmjs.com/package/@pelican-identity/react-native",
  },
  {
    image:
      "https://res.cloudinary.com/de0jr8mcm/image/upload/v1766752648/pelican/Dec_26_2025_Screenshot_from_Compressor.io_1_shos1n.png",
    title: "Vanilla js, Svelte, Vue",
    url: "https://www.npmjs.com/package/@pelican-identity/vanilla",
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
            <p>Documentations</p>
            <div className="mt-6 flex flex-wrap gap-4">
              {docs.map((doc) => (
                <div key={doc.title}>
                  <Image
                    src={doc.image}
                    alt={doc.title}
                    width={100}
                    height={100}
                  />
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
          <div>
            <Card className="bg-card border-border hidden rounded-xl border p-6 shadow-sm md:block">
              <pre className="overflow-x-auto text-sm leading-relaxed">
                <code className="language-typescript">
                  {`import { PelicanAuth } from "@pelican-identity/react;

   <PelicanAuth
        publicKey="pk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        projectId="pk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        authType={"login"}
        onError={(error) => console.log(error)}
        onSuccess={(identity) => {
          sendToBackend(identity);
        }}
    />`}
                </code>
              </pre>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
