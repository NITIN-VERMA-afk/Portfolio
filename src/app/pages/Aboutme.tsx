"use client"
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import DownloadResumeButton from "../Incomponets/dowenloadresume";

const Aboutme = () => {
  return (
    <div id="about" className="flex flex-col lg:flex-row gap-5 mt-10 lg: pt-48 container mx-auto h-full">
      <div className="lg:w-1/2">
        <div className="w-64 h-56  border-8 border-blue"></div>
        <div className="relative bottom-40  lg:bottom-80  right-7 ">
          <Image src="/img/my_pic.jpg" width={250} height={350} alt="My pic" />
        </div>
      </div>
      <div>
        <h1 className="text-bold text-center text-2xl ">About me</h1>
        <article>Hi there! I m NITIN VERMA, a passionate full-stack developer with a love for crafting digital experiences that are not just functional but also delightful. With a background in computer science and several years of hands-on experience in web development, I thrive on bringing ideas to life through code.</article>
        <div className="text-center">
        <Button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-6"> <a href="#contact"> Hire me</a>  </Button>
        <DownloadResumeButton/>
      </div>
      </div>
      
    </div>
  );
};

export default Aboutme;
