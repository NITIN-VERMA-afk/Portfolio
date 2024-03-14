
import React from "react";
import Link from "next/link";
// import Logo from "./Logo"; 
import { Button } from '@/components/ui/button';


const Navbar = () => {
  return (
    <div className="w-full h-12 bg-blue-600 sticky top-0">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          {/* <Logo /> */}
          nitin verma
          <ul className="hidden md:flex gap-x-6 text-white">
            <li>
              <Link href="">
                <p>About Us</p>
              </Link>
            </li>
            <li>
              <Link href="">
                <p>Services</p>
              </Link>
            </li>
            <li>
              <Link href="">
                <p>Contacts</p>
              </Link>
            </li>
          </ul>
          <Button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Contact</Button> 
        </div>
      </div>
    </div>
  );
};

export default Navbar;


