import React from "react";
import Link from "next/link"

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <div className="w-full h-12 bg-blue-600 rounded-md sticky top-0">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
        
          <Avatar>
            <AvatarImage src="/img/my_pic.jpg" />
            <AvatarFallback>
              
              nv
            </AvatarFallback>
          </Avatar>
          

          <ul className="hidden md:flex gap-x-6 text-white">
            <li>
            <Link href="#Home" scroll={false}>Home</Link>
            </li>
            <li>
            <Link href="#about" scroll={false}>About</Link>
            </li>
             <li>
            <Link href="#portfolio" scroll={false}>portfolio</Link>
            </li>
            <li>
            <Link href="#services" scroll={false}>services</Link>
            </li>
            <li>
            <Link href="#experience" scroll={false}>experience</Link>
            </li> 
          
          </ul>
          <Button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">
            
            <Link href="#contact" scroll={false}>Contact</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
