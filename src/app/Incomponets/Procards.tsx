import React from "react";
// import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";

const projectcards = ({title,detail,tach,img}:any) => {
  return (
    <div className=" container mx-auto mt-12 flex flex-col justify-around   md:flex-row lg:flex-row  ">
      <div className="flex flex-col gap-5 ">
        <h1>Project</h1>
        <h2>{title}</h2>
        <p className="">
          {detail}
        </p>
        <p>{tach}</p>

        <Button className="w-32">
          <FaArrowRight /> know more
        </Button>
      </div>
      <div>
        <div className="w-64 h-52  border-8 border-blue">
            <img className="relative bottom-50 left-7" src={img} alt="img" width={250} height={250}/>
            
        </div>
      </div>
    </div>
  );
};

export default projectcards;
