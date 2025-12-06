import { Footer } from "@/components/blocks/footer";
import { Navbar } from "@/components/blocks/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HomeIcon } from "lucide-react";

const Home = () => {
  return (
    <div>
      <Navbar />

      <section className="relative h-screen w-full overflow-hidden">
        <video
          src="/video/hero-video.mp4"
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex h-full items-end justify-between p-6">
          <h1 className="text-9xl font-light text-white">
            The real <br /> human network
          </h1>
        </div>
      </section>

      <div className="relative">
        <div className="grid grid-cols-3 px-8 py-20">
          <div>
            <h2 className="text-2xl font-light">Introducing World</h2>
          </div>
          <div className="col-span-2 max-w-4xl">
            <h3 className="text-6xl text-wrap">
              Universal proof of human, finance and connection for every human.
            </h3>
          </div>
        </div>

        {/*  */}
        <div className="grid grid-cols-3 px-8 py-20">
          <div>
            <h2 className="text-2xl font-light">What it means for you</h2>
          </div>
          <div className="col-span-2 max-w-xl space-y-6">
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
        <div className="grid grid-cols-3 px-8 py-20">
          <div>
            <h2 className="text-2xl font-light">Your tools</h2>
          </div>
          <div className="col-span-2 grid max-w-3xl grid-cols-2 gap-4">
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
        <div className="grid grid-cols-3 px-8 py-20">
          <div>
            <h2 className="text-2xl font-light">Why World was started</h2>
          </div>
          <div className="col-span-2 max-w-2xl space-y-6">
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
        <div className="bg-primary/20 grid grid-cols-3 px-8 py-20">
          <div>
            <h2 className="text-2xl font-light">Get started</h2>
          </div>
          <div className="col-span-2 max-w-2xl space-y-6">
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
