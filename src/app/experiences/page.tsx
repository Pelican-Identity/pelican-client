import { Background } from "@/components/background";
import { Navbar } from "@/components/blocks/navbar";
import { Footer } from "@/components/blocks/footer";
import Experiences from "@/features/events/Experiences";
import { apiUrl } from "@/lib/utils";

const Page = () => {
  return (
    <div>
      <Navbar />
      <div className="h-16 lg:h-18" />
      <Background>
        <div className="flex flex-col items-center justify-center bg-transparent pt-20">
          <div className="mb-8 space-y-2 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Experiences around the world
            </h1>
            <p className="text-lg text-gray-500">
              Find unique events and activities happening near you.
            </p>
          </div>
        </div>
      </Background>
      <Experiences apiUrl={apiUrl} />
      <Footer />
    </div>
  );
};

export default Page;
