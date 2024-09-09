"use client"
import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaNodeJs, FaReact, FaDocker, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMui, SiTailwindcss, SiExpress, SiTypescript, SiNextdotjs } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const experienceData = [
  { id: 1, logo: <FaHtml5 className="text-[#E34F26]" />, skill: "HTML5" },
  { id: 2, logo: <FaCss3Alt className="text-[#1572B6]" />, skill: "CSS3" },
  { id: 3, logo: <IoLogoJavascript className="text-[#F7DF1E]" />, skill: "JavaScript (ES6+)" },
  { id: 4, logo: <FaBootstrap className="text-[#7952B3]" />, skill: "Bootstrap" },
  { id: 5, logo: <SiMui className="text-[#007FFF]" />, skill: "Material-UI" },
  { id: 6, logo: <SiTailwindcss className="text-[#06B6D4]" />, skill: "Tailwind CSS" },
  { id: 7, logo: <FaNodeJs className="text-[#339933]" />, skill: "Node.js" },
  { id: 8, logo: <SiExpress className="text-[#000000]" />, skill: "Express.js" },
  { id: 9, logo: <DiMongodb className="text-[#47A248]" />, skill: "MongoDB" },
  { id: 10, logo: <SiTypescript className="text-[#3178C6]" />, skill: "TypeScript" },
  { id: 11, logo: <FaReact className="text-[#61DAFB]" />, skill: "React" },
  { id: 12, logo: <SiNextdotjs className="text-[#000000]" />, skill: "Next.js" },
  { id: 13, logo: <FaDocker className="text-[#2496ED]" />, skill: "Docker" },
  { id: 14, logo: <FaPython className="text-[#3776AB]" />, skill: "Python" },
];

const Experience = () => {
  return (
    <div id="experience" className="bg-blue-400 py-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-center font-bold mb-12 text-4xl text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-white"> Technical Expertise</p> 
        </motion.h1>
        <motion.p 
          className="text-center text-xl mb-12 text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-white"> With a diverse skill set spanning frontend and backend technologies, I bring a comprehensive approach to web development. Here&apos;s a snapshot of my technical proficiencies: </p>
         
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl mb-4">{item.logo}</div>
              <h3 className="text-center font-semibold text-gray-800">{item.skill}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
