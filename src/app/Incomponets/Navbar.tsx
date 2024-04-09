"use client"
import { Button } from "@/components/ui/button";
import React, { useState } from 'react'; 
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-12 bg-blue-600 rounded-md sticky top-0">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <Avatar>
            <AvatarImage src="/img/my_pic.jpg" />
            <AvatarFallback>nv</AvatarFallback>
          </Avatar>
          

          <ul className="hidden  md:flex gap-x-6 text-white cursor-pointer">
            <li className="hover:bg-yellow-500">
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
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




