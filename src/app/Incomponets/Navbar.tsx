"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar: React.FC = () => {
  const [activeAnchor, setActiveAnchor] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setActiveAnchor(id);
  };

  return (
    <div className="w-full h-12 bg-blue-600  sticky top-0">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <Avatar>
            <AvatarImage src="/img/my_pic.jpg" />
            <AvatarFallback>nv</AvatarFallback>
          </Avatar>

          <ul className="hidden  md:flex gap-x-6 text-white cursor-pointer">
            <li className="">
              <a
                href="#home"
                onClick={() => handleClick("home")}
                className={` ${activeAnchor === "home" ? "text-black" : ""}`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => handleClick("about")}
                className={` ${activeAnchor === "about" ? "text-black" : ""}`}
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => handleClick("portfolio")}
                className={` ${activeAnchor === "portfolio" ? "text-black" : ""}`}
                href="#portfolio"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                 onClick={() => handleClick("services")}
                 className={` ${activeAnchor === "services" ? "text-black" : ""}`}
                href="#services"
              >
                Services
              </a>
            </li>
            <li>
              <a
                onClick={() => handleClick("experience")}
                className={` ${activeAnchor === "experience" ? "text-black" : ""}`}
                href="#experience"
              >
                Experience
              </a>
            </li>
          </ul>

          <Button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            <a href="#contact">Contact</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
