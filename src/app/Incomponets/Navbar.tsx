"use client"
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [activeAnchor, setActiveAnchor] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (id: string) => {
    setActiveAnchor(id);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "portfolio", label: "Portfolio" },
    { id: "services", label: "Services" },
    { id: "experience", label: "Experience" },
  ];

  return (
    <nav className="w-full bg-blue-600 text-white sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Avatar className="cursor-pointer">
              <AvatarImage src="/img/my_pic.jpg" alt="Profile" />
              <AvatarFallback>NV</AvatarFallback>
            </Avatar>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleClick(item.id)}
                className={`hover:text-gray-300 transition-colors ${
                  activeAnchor === item.id ? "text-blue-200" : ""
                }`}
              >
                {item.label}
              </a>
            ))}
            <Button className="bg-white text-blue-600 hover:bg-blue-100 font-medium rounded-lg text-sm px-5 py-2.5 transition-colors">
              <a href="#contact">Contact</a>
            </Button>
          </div>

          <div className="md:hidden">
            {isMenuOpen ? (
              <X className="cursor-pointer" onClick={toggleMenu} />
            ) : (
              <Menu className="cursor-pointer" onClick={toggleMenu} />
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => handleClick(item.id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium hover:text-blue-200 hover:bg-blue-700 transition-colors ${
                    activeAnchor === item.id ? "bg-blue-700 text-white" : "text-blue-200"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <Button className="w-full mt-4 bg-white text-blue-600 hover:bg-blue-100 font-medium rounded-lg text-sm px-5 py-2.5 transition-colors">
                <a href="#contact">Contact</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
