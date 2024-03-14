import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";

const projectcards = () => {
  return (
    <div className=" container mx-auto flex">
      <div className="flex flex-col gap-5 ">
        <h1>Project</h1>
        <h2>POkemon app</h2>
        <p className="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis ad
          deserunt voluptatum deleniti asperiores repudiandae quibusdam iure
          unde possimus temporibus quia accusamus, recusandae tempore dolorum
          adipisci excepturi consequuntur. Culpa, amet.
        </p>

        <Button className="w-32">
          <FaArrowRight /> know more
        </Button>
      </div>
      <div>
        <div className="w-64 h-52  border-8 border-blue">
            <Image className="relative bottom-50 left-7" src="/img/img1.avif" alt="img" width={250} height={250}/>
            
        </div>
      </div>
    </div>
  );
};

export default projectcards;
