import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link"

const projectcards = ({ title, detail, tach, img,project }: any) => {
  return (
    <div className="container mx-auto mt-12 flex flex-col justify-around md:flex-row lg:flex-row">
      <div className="flex flex-col gap-5 md:w-1/2 lg:w-1/2">
        <h1 className="text-2xl md:text-3xl lg:text-4xl">{title}</h1>
        <p className="text-lg">{detail}</p>
        <p className="text-lg">{tach}</p>
        <Button className="w-32">
          <FaArrowRight /> <Link href={project}>Know more </Link>
        </Button>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2 flex justify-center">
        <div className="w-64 h-52 md:w-80 md:h-64 lg:w-96 lg:h-72 border-8 border-blue relative">
          <Image src={img} alt="img"    layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
};

export default projectcards;

