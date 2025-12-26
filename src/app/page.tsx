import { Footer } from "@/components/blocks/footer";
import { Navbar } from "@/components/blocks/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="h-20" />

      <section className="relative h-[80svh] w-full grid-cols-2 items-end justify-center gap-x-10 bg-white px-2 py-2 md:mt-10 md:px-20 lg:grid">
        <video
          src="https://res.cloudinary.com/de0jr8mcm/video/upload/v1764921305/pelican/pelicanherovideo_pl1kwc.mp4"
          className="col-span-1 h-[20svh] w-full rounded-2xl object-cover md:h-[30svh] lg:h-full"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="relative">
          <div className="space-y-8 p-4 px-4 md:px-10">
            <h1 className="mt-10 text-4xl font-light text-black md:text-6xl lg:mt-0 lg:text-6xl">
              The{" "}
              <span className="decoration-primary font-medium italic underline underline-offset-8">
                Identity
              </span>{" "}
              layer for our physical and digital world
            </h1>
            <p>
              A single, self-owned identity — trusted everywhere, protected
              always. Built for people, upheld by institutions, designed for a
              world that moves at the speed of life.
            </p>
          </div>
        </div>
      </section>

      <div className="relative">
        {/*  */}
        <div className="col-span-1 grid min-h-screen gap-4 px-8 py-20 lg:grid-cols-3">
          <div>
            <h2 className="text-2xl font-light">A New Approach to Identity</h2>
          </div>
          <div className="col-span-2 w-full space-y-6 lg:max-w-2xl">
            <h3 className="text-6xl text-wrap">
              You shouldn’t have to prove who you are over and over again.
            </h3>
            <p>
              Every day, we sign up, verify, upload documents, reset passwords,
              answer questions we’ve answered a hundred times. It’s slow. It’s
              fragmented. It’s exhausting.
              <br />
              <br />
              Pelican gives every person{" "}
              <strong> one secure identity they own</strong>, and gives
              organizations{" "}
              <strong>
                {" "}
                a trusted way to work with real people without friction or doubt
              </strong>
              .
            </p>

            <ul>
              <li>No passwords.</li>
              <li>No repeated onboarding.</li>
              <li>No trading privacy for convenience.</li>
            </ul>

            <p className="text-lg underline">
              Just identity — simple, human, and in your hands.
            </p>
          </div>
        </div>

        {/*  */}
        <div className="col-span-1 grid min-h-screen gap-4 px-8 py-20 lg:grid-cols-3">
          <div>
            <h2 className="text-2xl font-light">For People</h2>
          </div>
          <div className="col-span-2 w-full space-y-6 lg:max-w-xl">
            <h3 className="text-6xl text-wrap">
              Your identity, finally under your control.
            </h3>
            <p>
              Pelican becomes your personal identity wallet. A private companion
              that lets you:
            </p>

            <ul className="list-inside list-disc">
              <li>
                <strong>Access services instantly</strong>
              </li>
              <li>
                <strong>Prove it’s really you</strong> without codes, passwords,
                or forms
              </li>
              <li>
                <strong>Share only what you choose</strong>, and nothing more
              </li>
              <li>
                Track what data you shared with businesses and institutions
              </li>
              <li>
                <strong>
                  Move freely between the digital and physical world
                </strong>{" "}
                with one trusted identity
              </li>
            </ul>
            <p>
              Your information stays with you. Encrypted. Portable. Unlocked
              only by you.
            </p>
          </div>
        </div>

        {/*  */}
        <div className="col-span-1 grid min-h-screen gap-4 px-8 py-20 lg:grid-cols-3">
          <div>
            <h2 className="text-2xl font-light">
              For Businesses & Institutions
            </h2>
          </div>
          <div className="col-span-2 w-full space-y-6 lg:max-w-xl">
            <h3 className="text-6xl text-wrap">Trust, without the burden.</h3>
            <p>
              Pelican helps you connect with real, verified people — without
              running complex verification systems of your own.
              <br />
              <br />
              You get:
            </p>

            <ul className="list-inside list-disc">
              <li>
                <strong>Instant, trustworthy identity proof</strong>
              </li>
              <li>
                <strong>Accurate contact information</strong>
              </li>
              <li>
                <strong>Frictionless onboarding</strong>
              </li>
              <li>
                <strong>Reduced fraud and impersonation</strong>
              </li>
              <li>
                <strong>
                  A privacy-first system your users can believe in
                </strong>
              </li>
            </ul>
            <p>Identity becomes one click — not a bottleneck.</p>
          </div>
        </div>

        {/*  */}
        <div className="col-span-1 grid min-h-screen gap-4 px-8 py-20 lg:grid-cols-3">
          <div>
            <h2 className="text-2xl font-light">Our Philosophy</h2>
          </div>
          <div className="col-span-2 w-full space-y-6 lg:max-w-2xl">
            <h3 className="text-6xl text-wrap">Human-First Identity.</h3>
            <p>
              The world is entering an era of AI, deepfakes, global mobility,
              remote work, digital services, and rapid physical access systems.
              <br />
              <br />
              Yet our identity processes are stuck in the past:
            </p>

            <ul className="list-inside list-disc">
              <li>Passwords and resets</li>
              <li>Endless forms</li>
              <li>Trust gaps</li>
              <li>Security breaches</li>
              <li>Repeated verification loops</li>
            </ul>
            <p>Pelican rethinks the foundation.</p>
            <p>We believe identity should be:</p>
            <ul className="list-inside list-disc">
              <li>
                <strong>Owned by the individual</strong>
              </li>
              <li>
                <strong>Recognized everywhere</strong>
              </li>
              <li>
                <strong>Verifiable instantly</strong>
              </li>
              <li>
                <strong>Private by default</strong>
              </li>
              <li>
                <strong>Safe in both the digital and physical world</strong>
              </li>
            </ul>

            <p>It’s a simple idea with massive impact:</p>

            <p>
              When people control their identity, the entire ecosystem becomes
              safer, faster, and more humane.
            </p>
          </div>
        </div>

        {/*  */}
        <div className="col-span-1 grid min-h-screen gap-4 px-8 py-20 lg:grid-cols-3">
          <div>
            <h2 className="text-2xl font-light">Real-World Use Cases </h2>
          </div>
          <div className="col-span-2 w-full space-y-8">
            <h2 className="text-3xl">Digital </h2>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              {[
                "Signing in to apps and websites",
                "Accessing financial services",
                "Checking out on e-commerce",
                "Proving who you are on new platforms",
                "Verifying your real identity against AI-generated content",
              ].map((item, idx) => (
                <Card key={`key-${idx}`} className="shadow-card pt-4">
                  <CardContent className="space-y-10">
                    <div className="grid h-14 w-14 place-content-center rounded-full border">
                      {/* <HomeIcon className="size-7" /> */}
                      <h2 className="text-xl">{++idx}</h2>
                    </div>
                    <div>
                      <h2 className="text-xl font-normal">{item}</h2>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <h2 className="text-3xl">Physical </h2>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              {[
                "Event passes and ticketing",
                "Secure workplace access",
                "Residential and hotel check-ins",
                "Controlled facility entry",
                "Public services and institutions",
              ].map((item, idx) => (
                <Card key={`key-${idx}`} className="shadow-card pt-4">
                  <CardContent className="space-y-10">
                    <div className="grid h-14 w-14 place-content-center rounded-full border">
                      {/* <HomeIcon className="size-7" /> */}
                      <h2 className="text-xl">{++idx}</h2>
                    </div>
                    <div>
                      <h2 className="text-xl font-normal">{item}</h2>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h4 className="text-xl">
              Wherever identity is needed, Pelican works — without friction.
            </h4>
          </div>
        </div>

        {/*  */}
        <div className="col-span-1 grid min-h-screen gap-4 px-8 py-20 lg:grid-cols-3">
          <div>
            <h2 className="text-2xl font-light">Why It Matters Now</h2>
          </div>
          <div className="col-span-2 w-full space-y-6">
            <h3 className="text-6xl text-wrap">We’re entering a time where:</h3>
            <ul className="list-inside list-disc">
              <li>AI can imitate faces and voices</li>
              <li>Fraud is increasing</li>
              <li>People move between countries and platforms</li>
              <li>Institutions must comply with rising security standards</li>
              <li>Trust online and offline is harder to maintain</li>
            </ul>

            <p>
              A global, personal, portable identity isn’t optional anymore. It’s
              necessary.
            </p>

            <p>
              Pelican is built for this new reality — one where identity is{" "}
              <strong>human, secure,</strong> and <strong>respected</strong> .
            </p>
            <Button>Get Pelican</Button>
          </div>
        </div>

        {/*  */}

        <div className="bg-primary/20 col-span-1 flex min-h-screen items-center justify-center">
          <div className="grid gap-4 px-8 py-20 lg:grid-cols-3">
            <div>
              <h2 className="text-2xl font-light">A Future We Can Trust</h2>
            </div>
            <div className="col-span-2 w-full space-y-6">
              <h3 className="text-6xl text-wrap">One identity.</h3>
              <p>
                Owned by you. <br /> Recognized by the world.
              </p>

              <p>
                Pelican isn’t just an app. <br />
                It’s a foundation — for people, for institutions, for everything
                our world is becoming.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
