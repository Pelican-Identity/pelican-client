import React from "react";

import { Background } from "@/components/background";
import { FAQ } from "@/components/blocks/faq";

import { DashedLine } from "@/components/dashed-line";
import { Navbar } from "@/components/blocks/navbar";
import { Footer } from "@/components/blocks/footer";

const Page = () => {
  return (
    <div>
      <Navbar />
      <div className="h-16 lg:h-20" />
      <Background>
        <FAQ
          className="py-28 text-center lg:pt-44 lg:pb-32"
          className2="max-w-xl lg:grid-cols-1"
          headerTag="h1"
        />
        <DashedLine className="mx-auto max-w-xl" />
      </Background>
      <Footer />
    </div>
  );
};

export default Page;
