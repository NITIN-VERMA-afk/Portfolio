import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Home = () => {
  return (
    <div
      id="home"
      className="h-full mb-72 flex flex-col justify-start lg:flex-row "
    >
      <div className="flex flex-col justify-start lg:items-start pt-36 gap-5 ml-12">
        <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-600">
          Im a
        </h3>
        <h1 className="font-bold text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          FULL STACK
        </h1>
        <h1 className="font-bold text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Software
        </h1>
        <h1 className="font-bold text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Developer.
        </h1>
        <div className="mt-6 ml-12">
          <Button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5">
            <a href="#portfolio">Previous Projects</a>
          </Button>
        </div>
      </div>
     
    </div>
  );
};

export default Home;
