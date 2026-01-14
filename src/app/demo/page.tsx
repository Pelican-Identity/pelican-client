import { Footer } from "@/components/blocks/footer";
import { Navbar } from "@/components/blocks/navbar";
import DemoScreen from "@/features/demo/DemoScreen";

const Page = () => {
  const public_key = process.env.BUSINESS_KEY;
  const project_id = process.env.PROJECT_ID;

  if (!public_key || !project_id) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="h-16 lg:h-20" />
        <div className="flex h-[500px] w-full items-center justify-center">
          Missing Pelican SDK credentials
        </div>
        <Footer />
      </div>
    );
  }
  return <DemoScreen public_key={public_key} project_id={project_id} />;
};

export default Page;
