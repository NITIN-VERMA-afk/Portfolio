"use client"
import React, { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let minDistance = Infinity;
      let activeSec = "";

      sections.forEach((section) => {
        const distance = Math.abs(section.getBoundingClientRect().top);
        if (distance < minDistance) {
          minDistance = distance;
          activeSec = section.id;
        }
      });

      setActiveSection(activeSec);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full h-12 bg-blue-600 rounded-md sticky top-0">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <Avatar>
            <AvatarImage src="/img/my_pic.jpg" />
            <AvatarFallback>nv</AvatarFallback>
          </Avatar>

          <ul className="hidden md:flex gap-x-6 text-white cursor-pointer">
            <li>
              <a className={activeSection === "home" ? "active" : ""} onClick={() => handleLinkClick("home")}>Home</a>
            </li>
            <li>
              <a className={activeSection === "about" ? "active" : ""} onClick={() => handleLinkClick("about")}>About</a>
            </li>
            <li>
              <a className={activeSection === "portfolio" ? "active" : ""} onClick={() => handleLinkClick("portfolio")}>Portfolio</a>
            </li>
            <li>
              <a className={activeSection === "services" ? "active" : ""} onClick={() => handleLinkClick("services")}>Services</a>
            </li>
            <li>
              <a className={activeSection === "experience" ? "active" : ""} onClick={() => handleLinkClick("experience")}>Experience</a>
            </li>
          </ul>

          <Button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            <a href="#contact" className={activeSection === "contact" ? "active" : ""} onClick={() => handleLinkClick("contact")}>Contact</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;



