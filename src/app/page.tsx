import { Footer } from "@/components/blocks/footer";
import { Navbar } from "@/components/blocks/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HomeIcon } from "lucide-react";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="h-20" />

      <section className="relative h-[50svh] w-full grid-cols-2 items-end justify-center gap-x-10 bg-white px-2 py-2 md:mt-10 md:px-20 lg:grid">
        <video
          src="https://res.cloudinary.com/de0jr8mcm/video/upload/v1764921305/pelican/pelicanherovideo_pl1kwc.mp4"
          className="col-span-1 h-[20svh] w-full object-cover md:h-[30svh] lg:h-full"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="relative">
          <div className="bg-white p-4 px-4 md:px-10">
            <h1 className="mt-10 text-4xl font-light text-black md:text-6xl lg:mt-0 lg:text-6xl">
              The{" "}
              <span className="decoration-primary font-medium italic underline underline-offset-8">
                Identity
              </span>{" "}
              layer for our physical and digital world
            </h1>
          </div>
        </div>
      </section>

      <div className="relative">
        <div className="col-span-1 grid gap-4 px-8 py-20 lg:grid-cols-3">
          <div>
            <h2 className="text-2xl font-light">Introducing World</h2>
          </div>
          <div className="col-span-full w-full lg:col-span-2 lg:max-w-4xl">
            <h3 className="text-6xl text-wrap">
              Universal proof of human, finance and connection for every human.
            </h3>
          </div>
        </div>

        {/*  */}
        <div className="col-span-1 grid gap-4 px-8 py-20 lg:grid-cols-3">
          <div>
            <h2 className="text-2xl font-light">What it means for you</h2>
          </div>
          <div className="col-span-2 w-full space-y-6 lg:max-w-xl">
            <h3 className="text-6xl text-wrap">
              A priority lane for humans online.
            </h3>
            <p>
              World ID ensures secure access to things only humans (not bots)
              should have access to, like financial services, concert ticket
              sales, dating apps and video games.
            </p>

            <Button variant={"outline"}>Learn about Pelican</Button>
          </div>
        </div>

        {/*  */}
        <div className="col-span-1 grid gap-4 px-8 py-20 lg:grid-cols-3">
          <div>
            <h2 className="text-2xl font-light">Your tools</h2>
          </div>
          <div className="col-span-2 grid w-full grid-cols-1 gap-4 lg:max-w-3xl lg:grid-cols-2">
            {[1, 2, 3].map((_, idx) => (
              <Card key={`key-${idx}`} className="shadow-card pt-4">
                <CardContent className="space-y-10">
                  <div className="grid h-14 w-14 place-content-center rounded-full border">
                    <HomeIcon className="size-7" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-light">World ID</h2>
                    <p>An anonymous proof of human for the age of AI.</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/*  */}
        <div className="col-span-1 grid gap-4 px-8 py-20 lg:grid-cols-3">
          <div>
            <h2 className="text-2xl font-light">Why World was started</h2>
          </div>
          <div className="col-span-2 w-full space-y-6 lg:max-w-2xl">
            <h3 className="text-6xl text-wrap">
              World is being built so every human benefits from the age of AI.
            </h3>
            <p>
              Distinguish between humans and AI online. Access universally
              inclusive finance. And connect with other real humans. It's free
              to join and designed to be owned by everyone.
            </p>

            <Button variant={"outline"}>Get Pelican</Button>
          </div>
        </div>

        {/*  */}
        <div className="bg-primary/20 col-span-1 grid gap-4 px-8 py-20 lg:grid-cols-3">
          <div>
            <h2 className="text-2xl font-light">Get started</h2>
          </div>
          <div className="col-span-2 w-full space-y-6 lg:max-w-2xl">
            <h3 className="text-6xl text-wrap">
              Join millions of humans in 160 countries with World ID.
            </h3>
            <p>
              World Spaces are opening across the globe. Visit one near you to
              verify your free World ID and learn more.
            </p>

            <Button>Find an Orb</Button>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
