import React from "react";
import Link from "next/link"

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <div className="w-full h-12 bg-blue-600 sticky top-0">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
        <Link href="#Home">
          <Avatar>
            <AvatarImage src="/img/my_pic.jpg" />
            <AvatarFallback>
              
              nv
            </AvatarFallback>
          </Avatar>
          </Link>

          <ul className="hidden md:flex gap-x-6 text-white">
            <li>
            <Link href="#about">About</Link>
            </li>
             <li>
            <Link href="#portfolio">portfolio</Link>
            </li>
            <li>
            <Link href="#services">services</Link>
            </li>
            <li>
            <Link href="#experiance">Experiance</Link>
            </li> 
          
          </ul>
          <Button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">
            
            <Link href="#contact">Contact</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
